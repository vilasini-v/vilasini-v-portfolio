import React from 'react'
import Navbar from './navbar';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Touch = () => {
  return (
    <div className='contact-container'>
        <Navbar bg='#F0F0C9' color='#5C7457'/>
        <section className='contact-section'>
        <p>Get in touch with me!</p>
        <div className="contact-card">
            <div className='textContact'>
            {/* <div className='line-2'><WhatsAppIcon style={{verticalAlign:"middle", fontSize:'2.5rem'}}/><span><a href='https://wa.me/918884734650'> +91 8884734650</a></span></div> */}
            <div className='line-2'><EmailIcon style={{verticalAlign:"middle", fontSize:'2.5rem'}}/><span><a href='mailto:vilasiniivj@gmail.com'> vilasiniivj@gmail.com</a></span></div>
            <div className='line-2'><LinkedInIcon style={{verticalAlign:"middle", fontSize:'2.5rem'}}/><a href='https://www.linkedin.com/in/vilasini-vijay/'> vilasini-vijay</a></div>
            </div>
        </div>
        </section>



    </div>
  )
}

export default Touch
