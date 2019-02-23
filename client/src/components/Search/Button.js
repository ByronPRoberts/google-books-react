import React from "react";
 const Button = (props) => {
 	return(
 		<button onClick={props.handleButtonClick} className="btn btn-primary">Search</button>
 		)	
 };

 export default Button;