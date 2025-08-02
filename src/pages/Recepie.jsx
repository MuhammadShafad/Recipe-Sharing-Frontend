import { faCloudArrowUp, faHeart, faPlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getFavApi, getRecipieApi } from '../services/allApi'
import Card from '../components/Card'

function Recepie() {
    
    const [count, setcount] = useState(0)
    const [CStatus,setCStatus]=useState([])

    const [recepie, setrecepie] = useState([])

    const getFav = async () =>{
        const result = await getFavApi()
        setcount(result.data.length)
    }

    const getRecepie = async () => {
        const result = await getRecipieApi()
        setrecepie(result.data)

    }
    console.log(recepie);
    

    useEffect(() => {
        getRecepie()
        getFav()
    }, [CStatus])

    return (
        <>
            <div style={{ backgroundColor: "#FCE883" }}>
                <div className='container'>
                    <div className='d-flex justify-content-between'>
                        <h1 className=' pt-3' style={{ fontSize: "3rem" }}>Recepies</h1>
                        <div className='ms-4 ms-md-0'>
                            <Link to={'/add'}><button style={{ fontSize: "1rem" }} className='btn mt-4 me-3 px-3 btn-success'>Add <FontAwesomeIcon icon={faCloudArrowUp} /></button></Link>
                            <Link to={'/favorite'}><button style={{ fontSize: "1rem" }} className='btn mt-4 px-3 btn-dark'><FontAwesomeIcon className='text-danger' icon={faHeart} /> Favorite <span className='text-light bg-danger rounded-4 px-2' style={{fontSize:"12px"}}>{count}</span></button></Link>

                        </div>
                       
                    </div>
                    <div >
                        {recepie?.length > 0 ?
                            <div className="row mt-4 pb-4">
                                {recepie?.map((item) => (
                                   <Card Rdetails={item} setCStatus={setCStatus}/>
                                ))
                                }
                            </div>

                            :
                            <div className='d-flex justify-content-center mt-5 pb-5'>
                                <div>
                                    <h3>No Recepies Added</h3>
                                    <img src="https://media2.giphy.com/media/FuJLyZzQFilmg0LKzq/200.gif?cid=790b7611l8v0glm2ygepe38rzdl9gnrqj2ojsr8uuilagu31&rid=200.gif&ct=g" alt="" />
                                </div>
                            </div>}
                    </div>
                </div>

            </div>
        </>
    )
}

export default Recepie