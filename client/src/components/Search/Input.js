import React from "react";

const Input = (props) => {
	return(
		<div>
			 <input onChange={props.handleInputChange} type="text" className="form-control" value={props.search}></input>
		</div>
	 )
};

export default Input;