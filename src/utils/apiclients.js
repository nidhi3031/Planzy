const API_CONFIG = {
    TIMEOUT: 20000,
    MAX_RETRIES: 0,
    RETRY_DELAY: 30000,
};

// part 1: main api request function
export const apiClient = async (url, options = {}) => {
    const headers = {
        "Content-Type": "application/json",
        ...options.headers,
    };

    const abortController = new AbortController(); 

    const timeoutId = setTimeout (
        () => abortController.abort(),
        options.timeout || API_CONFIG.TIMEOUT
    );
    try {
        console.log(`[API] ${options.method || "GET"} ${url}`);

        const response = await fetch(url, {
            ...options,
            headers,
            signal: abortController.signal,
        });

        if (!response.ok) {
            const error = new Error(
                `HTTP ${response.status} : ${response.statusText}`
            );
            error.status = response.status;
            throw error;
        }
        const data = await response.json();

        console.log(`[API] Success: ${url}`, data);
        return data; 
    } catch (error) {
        console.error(`[API] Error: ${url}`, error.message);
         
        if (error.name === "AbortError") {
            const timeoutError = new Error("Request timeout", { cause: error });
            timeoutError.code = "API_TIMEOUT";
            throw timeoutError;
        }

        if (error.status === 429) {
            error.message = "API_RATE_LIMITED";
        }
        if (error.status === 502 || error.status === 503){
            error.message = "API_SERVER_ERROR";
        }
        throw error;
    } finally {
        clearTimeout(timeoutId);
    }
};

// part 2  apiclient with retry wait before trying the api again
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms)); // helper function to wait for a specified time before retrying

// retry api request if it fails
export const apiClientWithRetry = async (url, options ={}) => {
    const { maxRetries = API_CONFIG.MAX_RETRIES, ...requestOptions } = options;
    for (let attempt = 0; attempt <= maxRetries; attempt++){
        try{
            return await apiClient(url, requestOptions);
        } catch (error) {
            const shouldRetry = 
            !error.status || error.status === 429 || error.status >=500;

            if (!shouldRetry || attempt === maxRetries){
                throw error;
            }

            console.log(`[API] Retrying...Attempt ${attempt + 1}`);
            await wait(API_CONFIG.RETRY_DELAY * Math.pow(2, attempt));
        } 
    }
};

// store API data temporarily so we don't request it again unnecessarily 
class APICache { // because we want to create a resualble blueprint for our cache system
    constructor (ttl = 5 * 60 * 1000) { //whenever we create new cache using this class, the construcor prepares it, number here mean 5 minutes in milliseconds
        this.cache = new Map(); // map in javascript data structure that stores information in key-value pairs
        this.ttl = ttl; //ttl means time-to-live. 
    }
    get(key) {
        const item = this.cache.get(key);
        if (!item) return null;
        if (Date.now() > item.expiry){
            this.cache.delete(key);
            return null;
        }
        return item.data;
    }
    set(key, data){
        this.cache.set(key, {
            data,
            expiry: Date.now() + this.ttl,
        });
    }
    clear() {
        this.cache.clear();
    }
}

// create one shared cache for the app
export const apiCache = new APICache();