import AsyncStorage from '@react-native-async-storage/async-storage';

export const BASE_API = 'https://api.programlife.com.br/taligado';

export default {
    getCustomers: async () => {
        const req = await fetch(`${BASE_API}/customers`, {
            method: 'GET',
        });
        const json = await req.json();
        return json;
    },
    getCustomer: async (id) => {
        let form = new FormData();               
        form.append('id', id);

        const req = await fetch(`${BASE_API}/customers/getCustomer`, {
            method: 'POST',
            body: form,
        });
        const json = await req.json();
        return json;
    },
}

