import { faBinoculars, faCarrot, faHeart, faPlay, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import { Modal } from 'react-bootstrap';
import { deleteFavApi } from '../services/allApi';

function FCard({Rdetails,setstatus}) {
    

        const [show, setShow] = useState(false);
        const [showR, setShowR] = useState(false);
    
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
    
        const handleCloseR = () => setShowR(false);
        const handleShowR = () => setShowR(true);

        const deleteFav = async(id)=>{
            const result = await deleteFavApi(id)
            setstatus(result)
        }
    
  return (
    <>
            <div className="col-md-3 mb-3">

                <div style={{ width: '100%', height: "100%" }} class="card d-flex flex-column p-3 bg-success">
                    <img src={Rdetails?.imgurl} alt="" />
                    <div class="card-body">
                        <h4 class="card-title ">{Rdetails?.title}</h4>
                    </div>
                    <div class="mt-auto d-flex justify-content-between px-2">
                        <button type="button" onClick={handleShow} class="btn btn-danger px-3"><FontAwesomeIcon icon={faPlay} /></button>
                        <button type="button" onClick={handleShowR} class="btn btn-warning"><FontAwesomeIcon icon={faCarrot} /></button>
                        <button type="button"  onClick={()=>{deleteFav(Rdetails?.id)}} class="btn btn-dark text-danger"><FontAwesomeIcon className='text-danger' icon={faTrashCan} /></button>
                    </div>
                </div>


                <Modal show={show} onHide={handleClose}>
                    <Modal.Header className='bg-warning' closeButton>
                        <Modal.Title>{Rdetails?.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='bg-warning'><div><iframe width="100%" height="369" src={`${Rdetails?.videourl}?autoplay=1`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div></Modal.Body>
                </Modal>
                <Modal show={showR} onHide={handleCloseR}>
                    <Modal.Header closeButton>
                        <Modal.Title>{Rdetails?.title} - Ingredients</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h3>{Rdetails?.ingredients}</h3>
                    </Modal.Body>
                </Modal>
            </div>
        </>
  )
}

export default FCard