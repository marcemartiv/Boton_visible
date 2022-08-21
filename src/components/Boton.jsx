
import React from 'react'

const Boton = ({clickBtn}) => {
  return (
    <div> 
        <button className="btn btn-dark mt-3" type="submit" disabled = {!clickBtn} >Enviar</button>
    </div>
  )
}

export default Boton