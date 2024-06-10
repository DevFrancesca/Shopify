import React from 'react'
import './heroes.css'

const Heroes = () => {
  return (
    <div className='heroesCon'>
      <div className='heroesWrapper'>
        <div className='heroesTop'>
          <h1>Making Commerce <br/> Better for <br/> Everyone</h1>
          <p>Shopify is supporting the next generation of  entrepreneurs, the world's biggest brands, and <br/> everyone in between</p>
        </div>
        <div className='heroesBottom'>
          <div className='heroesBtn1'>
            <button>Start free trial</button>
            <p>Get 3 days free then 1 month <br/> for $1.</p>
            <span>Get 3 days free then 1 month for $1.</span>
          </div>
          <button>
            <img/>
            <p>Watch the Shopify story</p>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Heroes
