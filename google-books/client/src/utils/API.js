import axios from "axios";
const BASEURL = "https://www.googleapis.com/books/v1/volumes?";
const APIKEY= process.env.GOOGLE_BOOKS_API_KEY;

export default {
    search: function(query){
        return axios.get(BASEURL + query + APIKEY);
    }
};