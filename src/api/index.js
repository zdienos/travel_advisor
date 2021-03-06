import axios from 'axios';

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';





export const getPlacesData = async (sw, ne) => {
    try {
        const {data : {data}} = await axios.get(URL, {          
            params: {
              bl_latitude: sw.lat,
              tr_latitude: ne.lat,
              bl_longitude: sw.lng,
              tr_longitude: ne.lng,
              // restaurant_tagcategory_standalone: '10591',
              // restaurant_tagcategory: '10591',
              // limit: '30',
              // currency: 'USD',
              // open_now: 'false',
              // lunit: 'km',
              // lang: 'en_US'
            },
            headers: {
              'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
              'x-rapidapi-key': '078b2272b1msh018c8db585536edp1738bfjsn60a826058e34'
            }
        });        
        return data;
    } catch (error) {
        console.log(error);
    }
}