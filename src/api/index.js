import axios from 'axios';
const URL ='https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'



export const getPlacesData = async (sw, ne) => {
    try {
       //request
       const {data: {data }}  = await axios.get(URL,{
        params: {
          bl_latitude: sw.lat,
          tr_latitude: ne.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
          
        },
        headers: {
          'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
          'x-rapidapi-key': '74a1f602d8msha06a612c39b7cfcp1422b0jsn4e8e33804759'
        }
      });

       return data;
    } catch (error) {
        console.log(error)
        
    }
}