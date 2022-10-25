import AsyncStorage from '@react-native-async-storage/async-storage';

 const BASE_API = 'https://api.programlife.com.br/taligado';

export default {
    getCustomers: async () => {
        const req = await fetch(`${BASE_API}/customers`, {
            method: 'GET',
        });
        const json = await req.json();
        return json;
    },
}

 