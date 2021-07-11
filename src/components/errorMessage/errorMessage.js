import React from "react";
import './errorMessage.css';
import img from './error.jpg';


const ErrorMessage = () => {
	return (
		<>
			<span className="error-message">Something goes wrong</span>
			<img className="error-img" src={img} alt='error'></img>
		</>
	)
}

export default ErrorMessage;