import React from 'react'
import clsx from 'clsx'
import { graphql } from 'gatsby'
import RichText from '../../components/RichText/RichText'
import './heroSection.scss'
import Button from '../../components/Button'

export const HeroSection = ({
  otherClasses,
  _rawText,
  _rawSubText,
  button,
}) => {
  const heroSectionClasses = clsx(otherClasses, 'w-full my-20 bg-[#025286]')

  return (
    <section className={heroSectionClasses} data-testid="hero-section">
      <div className="max-w-[1512px]  mx-auto text-center flex flex-col gap-5 px-4 lg:px-20 xl:px-[156px] py-20">
        <RichText richText={_rawText} otherClasses="richtext_Heading " />
        <RichText
          richText={_rawSubText}
          otherClasses="richtext_para flex flex-col gap-10  "
        />
        <Button
          {...button}
          otherClasses="w-fit rounded-xl mx-auto hover:opacity-90"
        />
      </div>
    </section>
  )
}

export default HeroSection

export const query = graphql`
  fragment HeroSections on SanityHeroSections {
    __typename
    identifier
    _rawText
    _rawSubText
    button {
      label
      externalLink
      variant
      slug {
        current
      }
      form
    }
  }
`
