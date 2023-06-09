import { axiosInstance } from "./axiosInstance";

export class BaseNetwork {

    //url -> products, categories
    async getAll(url: string) {

        let response: any[] = []

        try {
            await axiosInstance.get(url)
                .then(res => {
                    response = res.data;
                });

        } catch (error) {
            throw error
        }


        return response;

    }


    async add(url: string, data: any) {

        let response = {};

        await axiosInstance.post(url, data)
            .then(res => {
                console.log('DATA', res.data);

                response = res.data;
            })

        return response;
    }

    async getById(url: string, id: number) {

        let response = {};

        await axiosInstance.get(url + '/' + id)
            .then(res => {
                response = res.data
            });

        return response;
    }

}
