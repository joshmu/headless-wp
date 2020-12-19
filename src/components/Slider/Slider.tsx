/**
 * @path /src/components/Slider/Slider.tsx
 *
 * @project headless-wp
 * @file Slider.tsx
 *
 * @author Josh Mu <hello@joshmu.dev>
 * @created Saturday, 19th December 2020
 * @modified Saturday, 19th December 2020 3:06:04 pm
 * @copyright © 2020 - 2020 MU
 */

import Carousel from 'nuka-carousel'
import { useEffect, useState } from 'react'
import { apiUrl } from 'src/config'
import { fetcher } from 'src/helpers'

export const Slider = () => {
  const [slides, setSlides] = useState([])

  useEffect(() => {
    // * wp plugin used and also take note of query param '_embed' to directly access img src urls
    // _Custom Post Type UI_ By WebDevStudio
    fetcher(`${apiUrl}/wp-json/wp/v2/slide?_embed`).then(data => {
      console.log(data)
      setSlides(data)
    })
  }, [])

  return (
    <div className='w-1/2 h-full mx-auto'>
      <Carousel>
        {slides.map(slide => (
          <img
            key={slide.id}
            src={
              slide._embedded['wp:featuredmedia'][0].media_details.sizes.large
                .source_url
            }
            alt={slide.title.rendered}
          />
        ))}
      </Carousel>
    </div>
  )
}
