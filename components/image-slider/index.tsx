import Image from 'next/image';

import { Button } from '../ui/button';
import {
  Slideshow,
  SlideshowAutoplayControl,
  SlideshowContent,
  SlideshowControls,
  SlideshowNextIndicator,
  SlideshowPagination,
  SlideshowPreviousIndicator,
  SlideshowSlide,
} from '../ui/slideshow';


export const ImageSlider = () => (
  <Slideshow interval={3300}>
    <SlideshowContent>
    <SlideshowSlide>
        <div className="flex relative h-full">
          <Image
            alt="Andrew Dotterer and Matthew Shipp"
            className="mx-auto"
            width="380"
            height="380"
            priority
            src="https://mshippoboe.s3.us-west-1.amazonaws.com/hp-p.png"
          />
        </div>
      </SlideshowSlide>
      <SlideshowSlide>
        <div className="flex relative h-full">
          <Image
            alt="Andrew Dotterer, Matthew Shipp, and friends"
            className="mx-auto"
            width="380"
            height="380"
            priority
            sizes="900px"
            src='https://mshippoboe.s3.us-west-1.amazonaws.com/cg.jpeg'
          />
        </div>
      </SlideshowSlide>
      <SlideshowSlide>
        <div className="flex relative h-full">
          <Image
            alt="The Philadelphia Orchestra concert, oboe section"
            className="m-auto"
            width="380"
            height="380"
            priority
            sizes="900px"
            src='https://mshippoboe.s3.us-west-1.amazonaws.com/philorch3.jpeg'
          />
        </div>
      </SlideshowSlide>

      <SlideshowSlide>
        <div className="flex relative h-full">
          <Image
            alt="Orchestra Iowa"
            className="m-auto"
            width="400"
            height="400"
            priority
            sizes="900px"
            src='https://mshippoboe.s3.us-west-1.amazonaws.com/orchestra-iowa.jpeg'
          />
        </div>
      </SlideshowSlide>
      <SlideshowSlide>
        <div className="flex relative h-full">
          <Image
            alt="The Philadelphia Orchestra concert, oboe section"
            className="m-auto"
            width="380"
            height="380"
            priority
            sizes="900px"
            src='https://mshippoboe.s3.us-west-1.amazonaws.com/image_5_phil_orch_section_1.jpg'
          />
        </div>
      </SlideshowSlide>
      <SlideshowSlide>
        <div className="flex relative h-full">
          <Image
            alt="The Philadelphia Orchestra concert, oboe section"
            className="m-auto"
            width="500"
            height="500"
            priority
            sizes="900px"
            src='https://mshippoboe.s3.us-west-1.amazonaws.com/image_9_phil_orch4.jpeg'
          />
        </div>

   
      </SlideshowSlide>
      <SlideshowSlide>
        <div className="flex relative h-full">
          <Image
            alt="Orchestra Iowa"
            className="m-auto"
            width="500"
            height="500"
            priority
            sizes="900px"
            src='https://mshippoboe.s3.us-west-1.amazonaws.com/orchestra-iowa-bw.jpeg'
          />
        </div>
      </SlideshowSlide>
    </SlideshowContent>
  </Slideshow>
);