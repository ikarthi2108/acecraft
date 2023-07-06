import React from 'react'
import { Link } from 'react-router-dom';
import '../Styles/HoverList.css'

const HoverList = () => {
    return (
      <div className='HomeForm ' >
        <ul className='HomeUlsMain position-absolute vh-100' >
  
          <li>
            <Link to='/signIn'><label className='HomeUls' >Sign In | <i class="fa-solid fa-right-to-bracket"></i></label></Link>
          </li>
          <li>
            <Link to='/signup'><label className='HomeUls' >Register |<i class="fa-solid fa-user-plus"></i></label></Link>
          </li>
          {/* <li>
            <Link to='/orderStatus'><label className='HomeUls' >Order Status | <i class="fa-solid fa-box-archive"></i></label></Link>
          </li>
          <li>
            <Link to='/contact'><label className='HomeUls' >Contact | <i class="fa-solid fa-comments"></i></label> </Link>
          </li>
   */}
        </ul>
      </div>
    )
  }
  
  export default HoverList;