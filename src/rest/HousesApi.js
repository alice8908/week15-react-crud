const Houses_ENDPOINT = 'https://ancient-taiga-31359.herokuapp.com/api/houses'

class HousesApi {
    get = async () => {
        try {
            const resp = await fetch(Houses_ENDPOINT);
            const data = await resp.json();
            return data;
        } catch(e){
            console.log('ERROR', e);
        }
    };

    put = async(house) => {
        try {
            const resp = await fetch (`${Houses_ENDPOINT}/${house._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(house)
            })
            return await resp.json()
        } catch (e) {
            console.log('ERROR', e);
        }
    };

    post = async (house) => {
        try {
            const resp = await fetch(Houses_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(house),
            });
            return await resp.json();
        } catch (e) {
            console.log('ERROR', e);
        }
    };
} 

export const housesApi = new HousesApi();