// Import Axios to access Google books data 
import axios from "axios";

// Exports routes for reading books, saved books, deleting books for user, and adding saved books for user 
export default {
  getBooks: function (q) {
    return axios.get("/api/google", { params: { q: "title:" + q } });
  },
  getSavedBooks: function () {
    return axios.get("/api/books");
  },
  deleteBook: function (id) {
    return axios.delete("/api/books/" + id);
  },
  saveBook: function (bookData) {
    return axios.post("/api/books", bookData);
  }
};
