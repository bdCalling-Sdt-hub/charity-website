import React from 'react'
import ServiceBanner from './ServiceBanner'
import ArtSection from './ArtSection'
import { LuxerySection } from './LuxerySection'
import SupportSection from './SupportSection'

const ServicePage = () => {
  window.scrollTo(0, 0);
  return (
    <div className='  ' >
      <ServiceBanner></ServiceBanner>
      <ArtSection></ArtSection>
      <LuxerySection></LuxerySection>
      <SupportSection></SupportSection>
    </div>
  )
}

export default ServicePage