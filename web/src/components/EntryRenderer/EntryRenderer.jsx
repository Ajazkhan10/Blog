import React from 'react'

import HeroSection from '../../sections/HeroSection/HeroSection'
import TechnologySection from '../../sections/TechnologySection/TechnologySection'
import WhyUsSection from '../../sections/WhyUsSection/WhyUsSection'
import TestimonialSection from '../../sections/TestimonialSection/TestimonialSection'

export const EntryRenderer = ({ pageBuilderData, ...props }) => {
  return pageBuilderData.map(({ __typename, ...sectionData }, index) => {
    switch (__typename) {
      case 'SanityHeroSections':
        return <HeroSection key={__typename} {...sectionData} {...props} />
      case 'SanityTechnolgySection':
        return (
          <TechnologySection key={__typename} {...sectionData} {...props} />
        )
      case 'SanityWhyUsSection':
        return <WhyUsSection key={__typename} {...sectionData} {...props} />
      case 'SanityTestimonialsSection':
        return (
          <TestimonialSection key={__typename} {...sectionData} {...props} />
        )
      default:
        return null
    }
  })
}

export default EntryRenderer
