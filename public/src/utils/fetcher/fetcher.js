export default class Fetcher {
    baseURL;

    constructor() {
        this.baseURL = "https://vecchiabackend.azurewebsites.net";     
    }

    post = async function(url, json) {
        try {
            return await fetch(url, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(json),
            });
        } catch(error) {
            console.error('Fetch error:', error);
            throw error;
        }
    }

    // Fetch data from URL
    fetchData = async function(url) {
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
            return await response.json();
        } catch (error) {
            console.error('Fetch error:', error);
            throw error;
        } 
    }
}
export { Fetcher as Fetcher };