import { faCloudArrowUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <>
            <div style={{ backgroundColor: "#FCE883" }}>
                <div className='container  h-100'>
                    <div className='row pt-5'>
                        <div className='col-md-4 pb-3'>
                            <h1 className=''>Homely Recepies</h1>
                            <Link to={'/recepie'}>
                                <button style={{ fontSize: "1rem" }} className='btn mt-3 btn-success'>Recepies</button>
                            </Link>
                            <Link to={'/add'}><button style={{ fontSize: "1rem" }} className='btn mt-3 ms-3 px-3 btn-success'>Add <FontAwesomeIcon icon={faCloudArrowUp} /></button></Link>
                        </div>
                        <div className="col-md-4 mb-3 mb-md-0">
                            <img className='img-fluid h-100' src="https://media3.giphy.com/media/26xBLnb4urIS5on9C/giphy.gif" alt="" />
                        </div>
                        <div className="col-md-4">
                            <img className='img-fluid h-100' src="https://media1.tenor.com/images/e3f441065f96e9b33656ea7fefcd5643/tenor.gif?itemid=11258393" alt="" />
                        </div>
                    </div>
                    <p className='pt-3 ' style={{ textAlign: "justify" }}>Homely food recipes often evoke a sense of comfort and nostalgia, bringing the warmth of home-cooked meals to the table. These dishes are typically simple yet satisfying, using ingredients that are easily accessible and full of flavor. Whether it's a hearty stew, a freshly baked bread, or a classic roast, homely meals focus on nourishing the body and soul. Recipes passed down through generations or created out of necessity often showcase the heart of family traditions, where love is infused into every bite. The beauty of homely food lies in its ability to bring people together, offering a sense of belonging and warmth after a long day.

                        What makes homely food even more special is the opportunity for customization. Ingredients can be substituted or adjusted to cater to specific tastes, preferences, or dietary needs, making these recipes adaptable for all. From comforting soups to simple pasta dishes, homely food brings joy through its creativity and personal touch. The process of cooking these meals can also be a bonding experience, whether you're learning from a loved one or experimenting on your own. Ultimately, homely food recipes remind us of the value of simplicity, togetherness, and the joy of sharing a meal with those you care about.</p>

                    <div className='row py-5'>
                        <div className="col-md-3 mb-3 mb-md-0"><img src="https://assets.rebelmouse.io/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWFnZSI6Imh0dHBzOi8vbWVkaWEucmJsLm1zL2ltYWdlP3U9JTJGZmlsZXMlMkYyMDE2JTJGMTIlMkYwOSUyRjYzNjE2OTEyNDg3NDA0Mzk2MjEyOTU4ODg2NzdfMTcuZ2lmJmFtcDtobz1odHRwcyUzQSUyRiUyRmF6NjE2NTc4LnZvLm1zZWNuZC5uZXQmYW1wO3M9NTIxJmFtcDtoPTk1ZTFkOGYzNGUxYTU1MWEyNDRjOTBhNGQ4MGFlNDAyODQ3MDM3MDk2MjRjM2E1NmQ1OGMxMGEyNmYzMjE2MDUmYW1wO3NpemU9OTgweCZhbXA7Yz0yMTYxMzM3MzEiLCJleHBpcmVzX2F0IjoxNjYxMTc5OTkzfQ.5w-kQEzFQtFK_gNUlRlp7bOpc2JiRXSVeCa4yrjPu2w/img.jpg" className='h-100 w-100 img-fluid' alt="" /></div>
                        <div className="col-md-3 mb-3 mb-md-0"><img src="https://media.giphy.com/media/mdO7Kn8mo617W/giphy.gif" className='h-100 w-100 img-fluid' alt="" /></div>
                        <div className="col-md-3 mb-3 mb-md-0"><img src="https://media3.giphy.com/media/nAErqE3k2C3fy/giphy.gif" className='h-100 w-100 img-fluid' alt="" /></div>
                        <div className="col-md-3 mb-3 mb-md-0"><img src="https://media.tenor.co/images/e1c34796457f04bfc05c99b37a4514b4/raw" className='h-100 w-100 img-fluid' alt="" /></div>

                    </div>
                    <div className='d-flex justify-content-between pb-5'>
                        <div className="w-100 p-3 border border-success rounded border-3"><iframe width="100%" height="280px" src="https://www.youtube.com/embed/zB-I260ZykE" title="ബീഫ് മപ്പാസ് | Beef Mappas - Kerala style easy recipe" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
                        <div className='w-100 ms-5 p-3 border border-success rounded border-3'><iframe width="100%" height="280px" src="https://www.youtube.com/embed/-ZI_F36KVPg" title="ജഗതിചേട്ടൻറെ പഴയകാല തരികിട കോമഡി ഒന്ന് കണ്ടുനോക്ക് | Jagathy Old Comedy | Malayalam Comedy Scene" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home