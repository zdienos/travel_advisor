import axios from 'axios';

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng';

import axios from "axios";

const options = {  
  params: {
    bl_latitude: '-5.178278064405564',
    tr_latitude: '-5.170029153472586',
    bl_longitude: '119.403747213568',
    tr_longitude: '119.41795219211181',
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
};


const getPlacesData = async () => {
    try {
        const {data : {data}} = await axios.get(URL, options);
        return data;
    } catch (error) {
        console.log(error);
    }
}