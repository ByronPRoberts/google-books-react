import React,{Component} from "react";
import Header from "./header/header";
import Search from "../pages/BookSearch";
import Saved from "../pages/BookSaved";
import API from "./../utils/API";


class BookContainer extends Component {
    state ={ 
        search: "",
        result:[],
        savedBooks:[]
    }

componentDidMount() {
    this.loadBooks();
}

loadBooks() {
    API.getSavedBooks().then((res)=>{
        this.setState({savedBooks: res.data});
    }).catch((err)=>{
        console.log(err);
    });
}

deleteBook =(id)=>{
    API.deleteBook(id).then((res)=>{
        this.loadBooks()
    }).catch((err)=>{
        console.log(err);
    });
}

handleSaveButton = (title, link, image, description) => {
    API.saveBooks({title, link, image, description}).then((res)=>{
        this.loadBooks();
    }).catch((err)=>{
        console.log(err);
    });
}

handleFormSubmit=(event)=>{
    this.setState({search: event.target.value});
}

handleButtonClick =()=>{
    if(this.state.search !== ""){
        API.getData(this.state.search).then((res)=>{
            this.setState({result: res.data})
        }).catch((err)=>{
            console.log(err);
        });
    }
}

render() {
    return(
        <div>
            <Header/>
            <Search handleFormSubmit={this.handleFormSubmit} handleInputChange={this.handleInputChange}
             handleButtonClick={this.handleButtonClick} search={this.state.search}
             result={this.state.result} handleSaveButton={this.handleSaveButton}
            />
            <Saved savedBooks={this.state.savedBooks} deleteBook={this.deleteBook}/>
        </div>
    )
}
};

export default BookContainer;