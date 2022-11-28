import React from 'react'

function Resultado({ Resultado }) {
    return (
        <div className='Resultado'>
            <img src={Resultado.poster} />
            <h3> {Resultado.title}</h3>

        </div>
    )
}

export default Resultado