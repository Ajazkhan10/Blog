import React from 'react'
import clsx from 'clsx'
import { graphql } from 'gatsby'
import Image from '../../components/Image/Image'
import Heading from '../../components/Heading'
import RichText from '../../components/RichText/RichText'
import './heroSection.scss'

export const HeroSection = ({
  otherClasses,
  mainHeading,
  backgroundImage,
  _rawSubText,
}) => {
  const heroSectionClasses = clsx(otherClasses, 'w-full pt-20 ')

  return (
    <section className={heroSectionClasses} data-testid="hero-section">
      <div className="max-w-[1512px] mx-auto relative">
        <Image imageData={backgroundImage} otherClasses="relative w-full" />
        <div className=" w-full absolute left-0 top-0 bottom-0 ">
          <div className="flex flex-col gap-10 max-w-[800px] mx-auto py-20">
            <Heading type="h4" otherClasses="text-[56px] leading-[56px]">
              {mainHeading}
            </Heading>
            <RichText richText={_rawSubText} otherClasses="richtext_para" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection

export const query = graphql`
  fragment HeroSections on SanityHeroSections {
    __typename
    identifier
    mainHeading
    backgroundImage {
      ...CustomImage
    }
    _rawSubText
  }
`
