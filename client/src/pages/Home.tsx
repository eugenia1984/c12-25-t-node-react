import mockApiData from '../api/mockApi.json'
import { useState, useEffect } from 'react'
import HeroImage from '../components/atom/heroImage/HeroImage.tsx'
import CallToActionContactForm from '../components/molecule/cta-contact-form/CallToActionContactForm.tsx'
import heroImageBanner from '../assets/heroImage.png'
import ImageCtaLeft from '../assets/imageCtaRight.png'
import ImageCtaRight from '../assets/imageCtaLeft.png'
import FeaturedAcordion from '../components/template/featuredAcordion/FeaturedAcordion.tsx'

type HomeProps = {}
export interface Estates {
  id: string
  description: string
  adress: string
  area: number
  bedrooms: number
  bathrooms: number
  cars: number
  image: string
  forRent: boolean
  forSale: boolean
}
const Home: React.FC<HomeProps> = () => {
  const [estatesForSale, setStatesForSale] = useState<Estates[]>([])
  const [estatesForRent, setStatesForRent] = useState<Estates[]>([])
  useEffect(() => {
    const estatesOnlyForSale = mockApiData.filter(
      (state) => state.forSale === true
    )
    const estatesOnlyForRent = mockApiData.filter(
      (state) => state.forRent === true
    )
    setStatesForSale(estatesOnlyForSale)
    setStatesForRent(estatesOnlyForRent)
  }, [])
  return (
    <main>
      <FeaturedAcordion textTitle="venta" estates={estatesForSale} />
      <FeaturedAcordion textTitle="alquiler" estates={estatesForRent} />
      <HeroImage imgSrc={heroImageBanner} />
      <CallToActionContactForm imageUrl={ImageCtaLeft} textPosition={'left'} />
      <CallToActionContactForm
        imageUrl={ImageCtaRight}
        textPosition={'right'}
      />
    </main>
  )
}

export default Home
