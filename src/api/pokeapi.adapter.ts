import axios from "axios";

export class PokeAPIAdapter {

    private  axios = axios;

    async get(url: string) {

        const {data} = await this.axios.get(url);
        return data;
    }

    async post(url: string, data: any) {
        
    }

    async patch(url: string, data: any) {
        
    }

    async delete(url: string, data: any) {
        
    }
}