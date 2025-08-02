import { faBan, faCarrot, faCloudArrowUp, faEgg, faShrimp, faTrashCan, faUpload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { addRecipieApi, deleteApi, getRecipieApi } from '../services/allApi'
import { ToastContainer } from 'react-toastify'
import { Button } from 'react-bootstrap'

function Add() {
    const [recepie,setrecepie]=useState([])

    const [rDetails, setrDetails] = useState({
        title: "",
        imgurl: "",
        videourl: "",
        ingredients: ""
    })
    console.log(rDetails);

    const handleCancel = () => {
        setrDetails({
            title: "",
            imgurl: "",
            videourl: "",
            ingredients: ""
        })
    }

    

    const handleAdd = async () => {
        const { title, imgurl, videourl, ingredients } = rDetails
        if (!title || !imgurl || !videourl || !ingredients){
            alert("Please enter the recepie details completly")
        }else{
            if(videourl.startsWith('http://youtu.be/')){
                let link = `https://www.youtube.com/embed/${videourl.slice(17,28)}`
                console.log(link);    
                const result = await addRecipieApi({ title, imgurl, videourl:link, ingredients })
                console.log(result);
                if(result.status>=200 && result.status<300){
                    alert('Recepie added successfully')
                    handleCancel()
                }else{
                    alert('Something went wrong')
                    handleCancel()
                }            
            }else{
                let link = `https://www.youtube.com/embed/${videourl.slice(-11)}`
                console.log(link);
                const result = await addRecipieApi({ title, imgurl, videourl:link, ingredients })
                console.log(result);
                if(result.status>=200 && result.status<300){
                    alert('Recepie added successfully')
                    handleCancel()
                }else{
                    alert('Something went wrong')
                    handleCancel()
                }     
            }
            getRecepie()
           
            
            
        }
    }

    const getRecepie = async()=>{
        const rresult = await getRecipieApi()
        console.log(rresult);
        setrecepie(rresult.data)
        
    }

    const handleDelete = async (id)=>{
        const result = await deleteApi(id)
        console.log(result);
        getRecepie()
    }

    useEffect(()=>{
        getRecepie()
    },[])


    return (
        <>
            <div style={{ backgroundColor: "#FCE883" }}>
                <div className="container">
                    <div className='d-flex justify-content-between'>
                        <h1 className=' pt-3' style={{ fontSize: "3rem" }}>Add Recepies</h1>
                        <Link to={'/recepie'}><button style={{ fontSize: "1rem" }} className='btn mt-4 px-3 btn-success'>Recepies</button></Link>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <form className='mt-3 mb-5 rounded-4 bg-success p-4'>
                               <div className='d-flex justify-content-between'>
                                    <h3 className='text-warning mb-3'>Upload Recepies <FontAwesomeIcon icon={faCloudArrowUp} /> </h3>
                                    <h3 className='ms-5' style={{ color: "greenyellow" }}><FontAwesomeIcon className='' icon={faShrimp} /> <FontAwesomeIcon icon={faCarrot} className='' /> <FontAwesomeIcon icon={faEgg} className='' /></h3>
                               </div>
                                <div class="mb-3">
                                    <input value={rDetails.title} type="text" onChange={(e) => setrDetails({ ...rDetails, title: e.target.value })} class="form-control" id="name" placeholder="Enter Recipe name" />
                                </div>

                                <div class="mb-3">
                                    <input value={rDetails.imgurl} onChange={(e) => setrDetails({ ...rDetails, imgurl: e.target.value })} type="text" class="form-control" id="imageUrl" placeholder="Enter Image URL" />
                                </div>

                                <div class="mb-3">
                                    <input value={rDetails.videourl} onChange={(e) => setrDetails({ ...rDetails, videourl: e.target.value })} type="text" class="form-control" id="youtubeLink" placeholder="Enter YouTube link" />
                                </div>

                                <div class="mb-3">
                                    <textarea value={rDetails.ingredients} onChange={(e) => setrDetails({ ...rDetails, ingredients: e.target.value })} class="form-control" id="ingredients" rows="3" placeholder="Enter ingredients"></textarea>
                                </div>
                                <div className=' d-flex justify-content-between'>
                                    <button onClick={handleCancel} type="button" class="btn btn-danger w-50">Clear <FontAwesomeIcon icon={faBan} /></button>
                                    <div className='mx-2'></div>
                                    <button onClick={handleAdd} type="button" class="btn btn-warning w-50">Submit <FontAwesomeIcon icon={faUpload} /></button>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-6 my-4 ps-md-5 text-center">
                            {recepie?.length>0?
                                <table className='table table-bordered text-center'>
                                <thead className=''>
                                    <tr className='border-warning'>
                                        <th className='bg-success border-warning'>#</th>
                                        <th className='bg-success border-warning'>Recepie</th>
                                        <th className='bg-success border-warning'>Action</th>
                                    </tr>
                                </thead>
                                <tbody className=''>
                                    {recepie?.map((item,index)=>(
                                        <tr className='border-warning'>
                                        <td className='bg-success border-warning'>{index+1}</td>
                                        <td className='bg-success border-warning'>{item?.title}</td>
                                        <td style={{ fontSize: "1.5rem" }} className='bg-success border-warning text-danger'><FontAwesomeIcon onClick={()=>handleDelete(item.id)} icon={faTrashCan} /></td>
                                    </tr>
                                    ))
                                    }
                                </tbody>
                            </table>
                            :
                            <div>
                                <h2>No Recepies Added</h2>
                                <img className='' src="https://i.gifer.com/origin/c1/c1e8981cc2ec5749925d88f5ec3ecbd9.gif" alt="" />
                            </div>}
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer position='top-center' theme="colored" autoClose={2000} />
        </>
    )
}

export default Add