import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUtensils, } from '@fortawesome/free-solid-svg-icons';
import React from 'react'
import { Link } from 'react-router-dom';
import { faFacebook, faInstagram, faWhatsapp, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
function Footer() {
  return (
    <>
    <footer>
     <div className='container-fluid bg-success'>
        <div className="row p-4">
          <div className="col-md-4">
          <h4 className='text-warning'><FontAwesomeIcon icon={faUtensils} beatFade className='me-3' />Homely Recepie</h4>
          <p className='mt-2' style={{textAlign:'justify'}}> What makes homely food even more special is the opportunity for customization. Ingredients can be substituted or adjusted to cater to specific tastes, preferences, or dietary needs, making these recipes adaptable for all. From comforting soups to simple pasta dishes</p> 
          </div>
          
          <div className="col-md-2 text-center mt-4 mt-md-0">
            <h4>Links</h4>
            <Link style={{color:"yellow"}} to={'/'}><p>Home Page</p></Link>
            <Link style={{color:"yellow"}} to={'/recepie'}><p>Recepie Page</p></Link>
            <Link style={{color:"yellow"}} to={'/add'}><p>Add Page</p></Link>
          </div>
          <div className="col-md-2 text-center mt-4 mt-md-0">
          <h4>Links</h4>
            <Link style={{color:"yellow"}} to={''}><p>React</p></Link>
            <Link style={{color:"yellow"}} to={''}><p>React Bootstrap</p></Link>
            <Link style={{color:"yellow"}} to={''}><p>Bootswatch</p></Link>

          </div>
          <div className="col-md-4 mt-4 mt-md-0">
            <h4>Contact US</h4>
            <div className='d-flex'>
              <input type="text" className='form-control' placeholder='Email Id' />
              <button className='btn btn-warning ms-2'>Submit</button>
            </div>
            <div className="d-flex justify-content-between mt-4">
            <FontAwesomeIcon className='fs-3' icon={faInstagram} />
            <FontAwesomeIcon className='fs-3' icon={faXTwitter} />
            <FontAwesomeIcon className='fs-3' icon={faFacebook} />
            <FontAwesomeIcon className='fs-3' icon={faWhatsapp} />
            <FontAwesomeIcon className='fs-3' icon={faLinkedin} />
            </div>
          </div>

        </div>
     </div>
    </footer>
    </>
  )
}

export default Footer