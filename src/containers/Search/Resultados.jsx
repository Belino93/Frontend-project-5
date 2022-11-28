import React from 'react';
import Resultado from './Resultado';


function Resultados( { resultados }) {
  return (
    <section className='resultados'>
        {resultados.map(resultado => (
            <Result key={resultado.baseUrl} resultado={resultado} />

        ))}
    </section>
  )
}

export default Resultados