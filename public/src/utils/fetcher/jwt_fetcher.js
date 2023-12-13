import { Fetcher } from "./fetcher.js";

export default class JWTFetcher extends Fetcher {
    url;

    constructor() {
        super();
        this.url = this.baseURL + "/token";
    }

    getToken = async function(employee) { //requires a Order class -> ../models/menu_item.js
        try {
            const jsonObject = {
                "username" : employee.email,
                "password" : employee.password,
            };
            const response = await this.post(this.url, jsonObject);
            if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
            const json = await response.json();
            return json;
        } catch (error) {
            console.error('Getting Token Error:', error);
            throw error;
        }
    }

}
export { JWTFetcher };