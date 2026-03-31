import React from 'react'
import Hero from './Hero.jsx'
import HomeProducts from './HomeProducts.jsx'
import WhyChooseUs from './WhyChooseUs.jsx'
// import StatsSection from './StatsSection.jsx'
// import ValuesSection from './ValuesSection.jsx'
import AboutHighlights from './AboutHighlights.jsx'
import ContactNewsletter from './ContactNewsletter.jsx'
import PackagingShowcase from './PackagingShowcase.jsx'

const Home = () => {
  return (
    <div>
      <Hero/>
      <PackagingShowcase/>
      <HomeProducts/>
      <WhyChooseUs/>
      <AboutHighlights/>
      {/* <ValuesSection/> */}
      {/* <StatsSection/> */}
      <ContactNewsletter/>
    </div>
  )
}

export default Home
