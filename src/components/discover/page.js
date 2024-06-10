import React from 'react'
import './discover.css'


const Discover = () => {
  return (
    <div className='discoverCon'>
      <div className='discoverWrap'>
        <div className='discoverTop'>
          <h2>Discover why millions of <br/> entrepreneurs chose Shopify to <br/> build their business — <br/> <span>from hello world to IPO.</span></h2>
        </div>
        <div className='discoverBottom'>
          {/* <div className='discoverBottom1'>
            <h2>Millions</h2>
            <p>of merchants worldwide</p>
          </div> */}
         <div className='discoverHolder'>
            <div className='discoverLine'></div>
            <div className='discoverBottom1'>
              <h2>Millions</h2>
              <p>of merchants worldwide</p>
            </div>
         </div>
         <div className='discoverHolder'>
            <div className='discoverLine'></div>
            <div className='discoverBottom1'>
              <h2>170+</h2>
              <p>countries represented</p>
            </div>
         </div>
         <div className='discoverHolder'>
            <div className='discoverLine'></div>
            <div className='discoverBottom1'>
              <h2>10%</h2>
              <p>of total US ecommerce</p>
            </div>
         </div>
         <div className='discoverHolder'>
            <div className='discoverLine'></div>
            <div className='discoverBottom1'>
              <h2>$444B</h2>
              <p>global economic activity</p>
            </div>
         </div>
        </div>
      </div>
    </div>
  )
}

export default Discover
