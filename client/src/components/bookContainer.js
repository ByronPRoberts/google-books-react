import React, { Component } from "react";
import Header from "./header/header";
import Search from "../pages/BookSearch";
import Saved from "../pages/BookSaved";
import API from "./../utils/API";

class BookContainer extends Component {
  state = {
    search: "",
    result: [],
    savedBooks: []
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks() {
    API.getSavedBooks()
      .then((res) => {
        this.setState({ savedBooks: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  deleteBook = id => {
    API.deleteBook(id)
      .then((res) => {
        this.loadBooks();
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleFormSubmit =(event)=>{
      this.setState({search:""});
      event.preventDefault();
  }

  handleSaveButton = (title, link, image, description, author) => {
    API.saveBooks({ title, link, image, description, author })
      .then((res) => {
        res.data.items.forEach((item, i) => {
          if (item.volumeInfo.title && item.volumeInfo.authors && item.volumeInfo.description && item.volumeInfo.imageLinks.thumbnail) {
            let bookInfo = {
              _id: i,
              link: item.volumeInfo.canonicalVolumeLink,
              title: item.volumeInfo.title,
              author: item.volumeInfo.authors[0],
              description: item.volumeInfo.description,
              image: item.volumeInfo.imageLinks.thumbnail
            }
            this.setState(prevState => ({
              savedBooks: [...prevState.savedBooks, bookInfo]
            }))
          }
        })
        // this.setState({ result: res.data });
        this.loadBooks();
      })
      .catch(err => {
        console.log(err);
      });
  
  };

  // handleSaveButton = (title, link, image, description) => {
  //   API.saveBooks({ title, link, image, description })
  //     .then((res) => {
  //       this.loadBooks();
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // };

  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

  handleButtonClick = () => {
    if (this.state.search !== "") {
      API.getData(this.state.search)
        .then((res) => {
          res.data.items.forEach((item, i) => {
            if (item.volumeInfo.title && item.volumeInfo.authors && item.volumeInfo.description && item.volumeInfo.imageLinks.thumbnail) {
              let bookInfo = {
                _id: i,
                link: item.volumeInfo.canonicalVolumeLink,
                title: item.volumeInfo.title,
                author: item.volumeInfo.authors[0],
                description: item.volumeInfo.description,
                image: item.volumeInfo.imageLinks.thumbnail
              }
              this.setState(prevState => ({
                result: [...prevState.result, bookInfo]
              }))
            }
          })
          // this.setState({ result: res.data });
        })
        .catch(err => {
          console.log(err);
        });
    }
  };

  render() {
      console.log("render")
    return (
          <div>
              <Header/>
              <Search handleFormSubmit={this.handleFormSubmit} handleInputChange={this.handleInputChange}
               handleButtonClick={this.handleButtonClick} search={this.state.search}
               result={this.state.result} handleSaveButton={this.handleSaveButton}
              />
              <Saved savedBooks={this.state.savedBooks} deleteBook={this.deleteBook}/>
          </div>
    );
  }
}

export default BookContainer;
