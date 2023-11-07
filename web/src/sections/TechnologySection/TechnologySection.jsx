import React from 'react'
import clsx from 'clsx'
import { graphql } from 'gatsby'
import Heading from '../../components/Heading/Heading'
import Image from '../../components/Image/Image'
import './TechnologySection.scss'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
export const TechnologySection = ({ otherClasses, heading, cards }) => {
  const technologySectionClasses = clsx(
    otherClasses,
    'w-full bg-[#D7A172] bg-opacity-25'
  )
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <section
      className={technologySectionClasses}
      data-testid="technology-section"
    >
      <div className="max-w-[1512px] mx-auto xl:px-[150px] lg:px-20 px-4 py-10">
        <Heading
          type="h2"
          otherClasses="text-4xl font-serif font-semibold text-black leading-normal text-center mb-10"
        >
          {heading}
        </Heading>
        <Slider {...settings} arrows={false} className="">
          {cards?.map(({ image }, index) => {
            return (
              <div
                key={index}
                className="flex card_technolgy px-6 py-6 justify-center items-center "
              >
                <Image
                  imageData={image}
                  object
                  otherClasses="w-full lg:w-[100px]  lg:h-[100px] object-cover cursor-pointer !mix-blend-color-burn"
                />
              </div>
            )
          })}
        </Slider>
      </div>
    </section>
  )
}

export default TechnologySection
export const query = graphql`
  fragment TechnologySections on SanityTechnolgySection {
    __typename
    identifier
    heading
    _rawCards
    cards {
      image {
        ...CustomImage
      }
    }
  }
`
