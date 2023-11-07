import React from 'react'
import clsx from 'clsx'
import { graphql } from 'gatsby'
import Heading from '../../components/Heading/Heading'
import Image from '../../components/Image/Image'
import RichText from '../../components/RichText/RichText'
import './TestimonialSection.scss'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Icon from '../../components/Icon/Icon'
export const TestimonialSection = ({ otherClasses, heading, cards }) => {
  const testimonialSectionClasses = clsx(
    otherClasses,
    'w-full px-4 lg:px-[120px] xl:px-[156px] my-20'
  )
  const TestimonailPrevArrow = (props) => {
    const { onClick } = props
    return (
      <button
        onClick={onClick}
        className="absolute hidden lg:block lg:-left-20 lg:top-[52%] "
      >
        <Icon
          icon="faq-open-icon"
          iconHeight={40}
          iconWidth={40}
          otherClasses="rotate-180"
        />
      </button>
    )
  }

  const TestimonailNextArrow = (props) => {
    const { onClick } = props
    return (
      <button
        onClick={onClick}
        className="absolute hidden lg:block lg:-right-20 lg:top-[52%] "
      >
        <Icon icon="faq-open-icon" iconHeight={40} iconWidth={40} />
      </button>
    )
  }

  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    arrows: true,
    autoplay: false,
    slidesToScroll: 1,
    adaptiveHeight: false,
    responsive: [
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 660,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 375,
        settings: {
          centerPadding: '4px',
          slidesToShow: 1,
        },
      },
    ],
    prevArrow: <TestimonailPrevArrow />,
    nextArrow: <TestimonailNextArrow />,
  }
  return (
    <section
      className={testimonialSectionClasses}
      data-testid="testimonial-section"
    >
      <div className="max-w-[1512px] mx-auto">
        <Heading
          type="h2"
          otherClasses="text-gray-900 text-center font-sans font-bold mb-20 text-4xl not-italic leading-normal"
        >
          {heading}
        </Heading>
        <Slider {...settings} className="max-w-[700px] mx-auto relative">
          {cards?.map(({ image, icon, heading, _rawSubText }, index) => {
            return (
              <div
                key={index}
                className=" flex flex-col justify-center items-center text-center"
              >
                <Image
                  imageData={image}
                  otherClasses="w-12 h-12 object-cover mt-10 mb-5"
                />
                <p className="text-gray-900  font-sans text-xl not-italic font-normal leading-[30px]">
                  {heading}
                </p>
                <RichText
                  richText={_rawSubText}
                  otherClasses="rich_text_class my-10"
                />
                <Image imageData={icon} otherClasses="object-cover" />
              </div>
            )
          })}
        </Slider>
      </div>
    </section>
  )
}

export default TestimonialSection
export const query = graphql`
  fragment TestimonialSection on SanityTestimonialsSection {
    identifier
    __typename
    heading
    cards {
      heading
      image {
        ...CustomImage
      }
      icon {
        ...CustomImage
      }
      _rawSubText
    }
  }
`
