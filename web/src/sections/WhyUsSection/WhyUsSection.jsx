import React from 'react'
import clsx from 'clsx'
import Heading from '../../components/Heading/Heading'
import Image from '../../components/Image/Image'
import { graphql } from 'gatsby'
import './whyUsSection.scss'
export const WhyUsSection = ({ otherClasses, mainHeading, cards }) => {
  const whyUsSectionClasses = clsx(
    otherClasses,
    'w-full bg-[#D7A172] bg-opacity-25'
  )

  return (
    <section className={whyUsSectionClasses} data-testid="why-us-section">
      <div className="max-w-[1512px] mx-auto xl:px-[156px] lg:px-20 px-4 py-20">
        <Heading
          type="h4"
          otherClasses="text-4xl font-serif font-semibold text-black leading-normal text-center mb-20"
        >
          {mainHeading}
        </Heading>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {cards?.map(({ image, heading, subText }, index) => {
            return (
              <div
                key={index}
                className="card_animated flex flex-col gap-6 px-6 py-6 border-[1px] border-[#D7A172] bg-[#D7A172] bg-opacity-10 rounded-2xl items-center"
              >
                <Image
                  imageData={image}
                  otherClasses="w-10 h-10 mix-blend-color-burn"
                />
                <Heading
                  type="h4"
                  otherClasses="text-black text-2xl font-normal leading-normal font-sans"
                >
                  {heading}
                </Heading>
                <p className="text-base text-black font-sans leading-normal  font-normal text-center">
                  {subText}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default WhyUsSection
export const query = graphql`
  fragment WhyUsSection on SanityWhyUsSection {
    identifier
    __typename
    mainHeading
    cards {
      image {
        ...CustomImage
      }
      heading
      subText
    }
  }
`
