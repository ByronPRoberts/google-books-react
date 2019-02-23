import axios from "axios";
const BASEURL = "https://www.googleapis.com/books/v1/volumes?";
const APIKEY= process.env.GOOGLE_BOOKS_API_KEY;

export default {
    search: function(query){
        return axios.get(BASEURL + query + APIKEY);
    },
    getData(search){
		return axios.get(`${URL}?q=${search}&apit-key=${APIKEY}`);
	},
	getSavedArticles(){
		return axios.get("/api/books");
	},
	saveArticles(Book){
		return axios.post("api/books", Book)
	},
	deleteArticle(id) {
		return axios.delete("api/books/" + id);
	}
};