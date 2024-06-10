import React from 'react'
import './header.css'

const Header = () => {
  return (
    <div className='headerCon'>
      <div className='headerQuery'>
        <div className='headerQueryLeft'>
          <img src='./shopifyL.png'/>
        </div>

        <div className='headerQueryRight'>
          <p>Start free trial</p>
          <div className='headerQueryRightIcon'>
            <img src='./burger2.png'/>
          </div>
        </div>
      </div>

      {/* class="transition-colors duration-700" */}
      {/* class="fixed top-0 bottom-0 nav:hidden flex w-full flex-col transition-opacity ease-[cubic-bezier(0.87,0,0.13,1)] duration-300 motion-reduce:transition-none bg-black text-white invisible opacity-0" */}

      <section className='headerLeft'>
        <div className='headerLogoCon'>
          <img src='./shopifyL.png'/>
        </div>

        <div className='navCon'>
          <div className='navigations'>
            <p>Solutions</p>
            <img src='./dropdown.png'/>
          </div>

          <div className='navigations'>
            <p>Pricing</p>
          </div>

          <div className='navigations'>
            <p>Resources</p>
            <img src='./dropdown.png'/>
          </div>

          <div className='navigations'>
            <p>What's new</p>
            <img src='./dropdown.png'/>
          </div>
        </div>
      </section>

      <section className='headerRight'>
        <p>Log in</p>
        <button>Start free trial</button>
      </section>
    </div>
  )
}

export default Header
