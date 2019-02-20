import React from "react";
import Button from "./Button";
import Input from "./Input"
import "./search.css";

const Search = (props) => {
    return(
    <div className="container" >
        <div className="card">
            <div className="card-header">
                <h4>Search</h4>
            </div>
            <div className="card-body">
                <form onSubmit={props.handleFormSubmit}>
                    <Input handleInputChange ={props.handleInputChange} search={props.search}/>
                    <Button handleButtonClick={props.handleButtonClick}/>
                </form>
            </div>
        </div>
        <div className="card mb-3 results-box">
            <div className="card-header">
                <h3>Results</h3>
            </div>
            <div className="card-body">
                {props.result.map((book)=>{
                    return(
                        <div key={book._id}>
                           <div className='article-display row'>
					            <a href={book.link}  className='col-md-4'><img src={book.image} className='img-responsive' alt='thumbnail'/></a>
					            <div className='col-md-3'>
					                <h4>Title: {book.title}</h4>
					            </div>
                                <div className='col-md-3'>
					                <h4>Synopsis: {book.description}</h4>
					            </div>
					            <button onClick={() => props.handleSaveButton(book.title, book.link, book.description, book.image)} className='btn btn-primary col-md-2'>save</button>
					        </div>
					    <hr/>
					    </div>
                    )
                 }) || <h4>Loading...</h4>}
            </div>
        </div>
    </div> 
    )
};

export default Search;