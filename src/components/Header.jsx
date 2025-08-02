import { faBowlRice, faMugHot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
      <div className='px-5 py-4 bg-success'>
        <Link to={'/'} className='text-decoration-none'>
          <h1 className='text-warning'><FontAwesomeIcon icon={faBowlRice} /> HM <FontAwesomeIcon icon={faMugHot} /></h1>

        </Link>      
      </div>
    </>
  )
}

export default Header