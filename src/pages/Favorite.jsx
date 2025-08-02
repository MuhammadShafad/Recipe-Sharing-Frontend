import React, { useEffect, useState } from 'react'
import { getFavApi } from '../services/allApi'
import { Card } from 'react-bootstrap'
import FCard from '../components/FCard'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudArrowUp } from '@fortawesome/free-solid-svg-icons'

function Favorite() {
    const [FR, setFR] = useState([])
    const [status,setstatus]=useState([])

    const getFav = async () => {
        const result = await getFavApi()
        console.log(result);
        setFR(result.data)

    }

    useEffect(() => {
        getFav()
    },[status])
    return (
        <>
            <div style={{ backgroundColor: "#FCE883" }}>
                <div className="container">
                    <div className='d-flex justify-content-between'>
                        <h1 className='pt-4' style={{ fontSize: "3rem" }}>Favorite Recepies</h1>
                        <div>
                            <Link to={'/recepie'}><button style={{ fontSize: "1rem" }} className='btn  me-3 mt-4 px-3 btn-success'>Recepies</button></Link>
                            <Link to={'/add'}><button style={{ fontSize: "1rem" }} className='btn mt-4 px-3 btn-success'>Add <FontAwesomeIcon icon={faCloudArrowUp} /></button></Link>
                        </div>
                    </div>
                    {FR?.length > 0 ?
                        <div className="row mt-3 pb-4">
                            {FR?.map((item) => (
                                <FCard Rdetails={item} setstatus={setstatus} />
                            ))
                            }
                        </div>

                        :
                        <div className='d-flex justify-content-center mt-5 pb-5'>
                            <div>
                                <h3>No Favorite Recepies</h3>
                                <img src="https://media2.giphy.com/media/FuJLyZzQFilmg0LKzq/200.gif?cid=790b7611l8v0glm2ygepe38rzdl9gnrqj2ojsr8uuilagu31&rid=200.gif&ct=g" alt="" />
                            </div>
                        </div>}
                </div>
            </div>
        </>
    )
}

export default Favorite