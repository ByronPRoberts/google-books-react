import React from "react";

const Saved =(props)=>{
    console.log(props);
    return(
        <div className="card container">
            <div className="card-header">
                <h4>Books you saved</h4>
            </div>
            <div className="card-body">
                {props.savedBooks.map((Book)=> {
                    return (
                        <div key={Book._id}>
                            <div className="book-display row">
                                <a href={Book.link} className="col-md-4"><image src={Book.image} className="img-responsive" alt="thumbnail"/></a>
                            </div>
                            <div className="col-md-3">
                                <h4>Title:{Book.title}</h4>
                            </div>
                            <div className="col-md-3">
                                <h4>Synopsis:{Book.description}</h4>
                            </div>
                            <button onClick={()=> props.deleteBook(Book._id)} className="btn btn-danger">Delete</button>
                        </div>
                    )
                }) || <h3>LOADING</h3>}
            </div>
        </div>
    )
};

export default Saved;