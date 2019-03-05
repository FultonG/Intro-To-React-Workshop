import axios from 'axios';

export default {
    getFacts: function(){
        //if running locally use https://thingproxy.freeboard.io/fetch/ before the url
        return axios.get("https://cat-fact.herokuapp.com/facts");
    }
}