import React from 'react'
import { BsCameraVideoFill  } from 'react-icons/bs'
import { MdCall  } from 'react-icons/md'

const Home = () => {
    
    return (
        <div className='vh-100 d-flex justify-content-center align-items-center'>
            <div className='w-50 mx-auto'>
                <div className="card">
                    <div className="card-header d-flex justify-content-between align-items-center">
                        <div className='d-flex align-items-center gap-3'>
                            <img height="60px" width="60px" className='rounded-circle object-fit-cover' src="https://media.istockphoto.com/photos/smiling-indian-man-looking-at-camera-picture-id1270067126?k=20&m=1270067126&s=612x612&w=0&h=ZMo10u07vCX6EWJbVp27c7jnnXM2z-VXLd-4maGePqc=" alt="" />
                            <div className=''>
                                <h6 className='m-0'>Md Mahir</h6>
                                <p className='m-0'>1 min ago</p>
                            </div>
                        </div>
                        <div>
                            <MdCall  className ="me-2 pointer "/>
                            <BsCameraVideoFill  className =" pointer "/>
                        </div>
                    </div>
                    <div className="card-body mt-2">
                        <div>
                            <div className='d-flex gap-2 mb-2'>
                                <img height="30px" width="30px" className='rounded-circle object-fit-cover' src="https://media.istockphoto.com/photos/smiling-indian-man-looking-at-camera-picture-id1270067126?k=20&m=1270067126&s=612x612&w=0&h=ZMo10u07vCX6EWJbVp27c7jnnXM2z-VXLd-4maGePqc=" alt="" />
                                <p className='chat-msg m-0'>How are you?</p>
                            </div>
                            <div className='d-flex gap-2 justify-content-end'>
                                <p className='chat-msg1 m-0'>How are you?</p>
                            </div>
                        </div>


                    </div>
                    <div className="card-footer d-flex justify-content-between mt-2">
                        <input type="text" className='form-control'/>
                        <button className='btn-sm btn btn-primary'>Send</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home