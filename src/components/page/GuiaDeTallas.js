import React from 'react'
import guiaDeTallas from 'images/guiaDeTallas'


const GuiaDetallas = () => {
  return (
    <div>

      <h2> Guia de tallas</h2>
      <div>
        <img className='img-fluid' src={guiaDeTallas} alt="guia de tallas"></img>
      </div>
    </div>
  )
}

export default GuiaDetallas