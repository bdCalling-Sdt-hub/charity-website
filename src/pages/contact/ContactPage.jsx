import React from 'react'
import ContactBanner from './ContactBanner'
import ContactWay from './ContactWay'
import ContactFrom from './ContactFrom'

const ContactPage = () => {
  window.scrollTo(0, 0);
  return (
    <div className='pt-20' >
      <ContactBanner></ContactBanner>
      <ContactWay></ContactWay>
      <ContactFrom></ContactFrom>
    </div>
  )
}

export default ContactPage