import axios from "axios";
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
// const APIKEY= process.env.GOOGLE_BOOKS_API_KEY;

export default {
    search: function(query){
        return axios.get(BASEURL + query + "+intitle");
    },
    getData(query){
		return axios.get(BASEURL + query + "+intitle");
		// return axios.get(`${URL}?q=${search}&apit-key=${APIKEY}`);
	},
	getSavedBooks(){
		return axios.get("/api/books");
	},
	saveBooks(Book){
		return axios.post("api/books", Book)
	},
	deleteBook(id) {
		return axios.delete("api/books/" + id);
	}
};