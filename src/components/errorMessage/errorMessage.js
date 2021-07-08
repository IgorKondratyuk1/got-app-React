import React from "react";
import styled from "styled-components";
import img from './error.jpg';

const ErrorSpan = styled.span`
	display: block;
	text-align: center;
	color: red;
`

const ErrorImg = styled.img`
	width: 100%;
	border-radius: 10px;
`

const ErrorMessage = () => {
	return (
		<>
			<ErrorSpan>Something goes wrong</ErrorSpan>
			<ErrorImg src={img} alt='error'></ErrorImg>
		</>
	)
}

export default ErrorMessage;