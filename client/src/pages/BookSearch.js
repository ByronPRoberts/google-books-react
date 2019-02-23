import React from "react";
import Button from "../components/Search/Button";
import Input from "../components/Search/Input";
// import "../components/Search/search.css";
import Result from "../components/Search/Result";

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
        <Result result={props.result}/>
    </div>    
)};
// const Result =(props) => {
//     return(
//     <div>
//         <div className="card mb-3 results-box">
//             <div className="card-header">
//                 <h3>Results</h3>
//             </div>
//             <div className="card-body">
//                 {props.result.map((Book)=>{
//                     return(
//                         <div key={Book._id}>
//                            <div className='article-display row'>
// 					            <a href={Book.link}  className='col-md-4'><img src={Book.image} className='img-responsive' alt='thumbnail'/></a>
// 					            <div className='col-md-3'>
// 					                <h4>Title: {Book.title}</h4>
// 					            </div>
//                                 <div className='col-md-3'>
// 					                <h4>Synopsis: {Book.description}</h4>
// 					            </div>
// 					            <button onClick={() => props.handleSaveButton(Book.title, Book.link, Book.description, Book.image)} className='btn btn-primary col-md-2'>save</button>
// 					        </div>
// 					    <hr/>
// 					    </div>
//                     )
//                  }) || <h4>Loading...</h4>}
//             </div>
//         </div>
//     </div> 
//     )
// };

export default Search;
// export default Result;