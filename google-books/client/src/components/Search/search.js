import React from "react";
import Button from "./Button";
import Input from "./Input"
import "./search.css";

const Search = (props) => {
    return(
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
    )
};

export default Search;