import React from 'react'
import '../Styles/MainSection.css'
import Button from './Button'
import { MdMessage } from 'react-icons/md'
import { FaPhoneAlt } from 'react-icons/fa'

import service from '../Images/service.svg'
const MainSection = () => {
    return (
        <>
            <div className='mainSection'>
                <div className='text'>
                    <h1 className='contact-us'>
                        CONTACT US
                    </h1>
                    <p className='contact-para'>
                        LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA.
                    </p>
                </div>

                <div className='form-img-container'>
                    <div className='form-container'>
                        <div className='btn-container'>
                            <div className='primary-btn-container'>
                                <Button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize={'24px'} />} />
                                <Button text="VIA Call" icon={<FaPhoneAlt fontSize={'24px'} />} />
                            </div>
                            <div>
                                <Button isOutline="true" text="VIA EMAIL FORM" icon={<MdMessage fontSize={'24px'} />} />
                            </div>
                        </div>
                        <form action="">
                            <input type="text" name='name' placeholder='Your Name' />
                            <input type="email" name='email' placeholder='Your Email' />
                            <textarea name='text' placeholder='Your Message' rows={8} />

                            <div className='submit'><Button text="SUBMIT" /></div>
                        </form>
                    </div>
                    <div className='img-container'>
                        <img src={service} alt="" />
                    </div>

                </div>
            </div>
        </>
    )
}

export default MainSection