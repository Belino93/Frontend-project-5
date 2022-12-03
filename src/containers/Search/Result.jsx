import React from 'react'

function Result({ result, openPopup }) {
	return (
		<div className="result" >
			<img src={result.Poster} />
			<h3>{result.title}</h3>
		</div>
	)
}

export default Result 