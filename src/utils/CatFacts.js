import axios from 'axios';

export default {
    getFacts: function(){
        return axios.get("https://thingproxy.freeboard.io/fetch/https://cat-fact.herokuapp.com/facts");
    }
}
