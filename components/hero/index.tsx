import Image from 'next/image';

import { Button } from '@bigcommerce/components/button';

import {
  Slideshow,
  SlideshowAutoplayControl,
  SlideshowContent,
  SlideshowControls,
  SlideshowNextIndicator,
  SlideshowPagination,
  SlideshowPreviousIndicator,
  SlideshowSlide,
} from '@bigcommerce/components/slideshow';

import SlideshowBG from './gouger-ai-1.png';
import SlideshowBG2 from './gouger-ai-2-smaller.png';

export const Hero = () => (
  <Slideshow>
    <SlideshowContent>
      <SlideshowSlide>
        <div className="flexr relative">
          <Image
            alt="Oboe Gouging Machine: Kunibert Michel"
            className="absolute -z-10 object-cover object-right md:object-center"
            fill
            priority
            sizes="(max-width: 1536px) 100vw, 1536px"
            src={SlideshowBG}
          />
          <div className="flex flex-col items-center gap-4 px-12 py-36 md:items-start">
            <h2 className="lg:text-4x max-w-max max-w-xl bg-black bg-opacity-50 p-1 pl-2 text-center text-4xl text-white sm:text-4xl md:text-left">
              Kunibert Michel
            </h2>
            <h4 className="max-w-max bg-black bg-opacity-50 px-2 text-center text-3xl text-white sm:text-3xl md:text-left lg:text-3xl">
              Oboe Gouging Machine
            </h4>
            <p className="max-w-max max-w-xl bg-black bg-opacity-50 px-2 text-center text-2xl text-white md:text-left">
              11 mm bed
            </p>
            <Button asChild className="w-fit md:w-fit">
              <a href="/#">Shop now</a>
            </Button>
          </div>
        </div>
      </SlideshowSlide>
      <SlideshowSlide>
        <div className="relative flex h-full">
          <Image
            alt="Oboe Gouging Machine: Kunibert Michel"
            className="absolute -z-10 object-cover object-right md:object-bottom"
            fill
            priority
            sizes="(max-width: 1536px) 100vw, 1536px"
            src={SlideshowBG2}
          />
          <div className="flex flex-col items-center gap-4 px-12 py-36 md:items-start">
            <h2 className="lg:text-4x max-w-max max-w-xl bg-black bg-opacity-50 p-1 pl-2 text-center text-3xl text-white md:text-left">
              American double-radius gouge
            </h2>
            {/* <h4 className="max-w-max bg-black bg-opacity-50 px-2 text-center text-white text-3xl sm:text-3xl md:text-left lg:text-3xl">
              Oboe Gouging Machine
            </h4> */}
            {/* <p className="max-w-max max-w-xl bg-black bg-opacity-50 px-2 text-center text-white text-2xl md:text-left">
              11 mm bed
            </p> */}
            <Button asChild className="w-fit md:w-fit">
              <a href="/#">Shop now</a>
            </Button>
          </div>
        </div>
      </SlideshowSlide>
    </SlideshowContent>
    <SlideshowControls>
      <SlideshowAutoplayControl />
      <SlideshowPreviousIndicator />
      <SlideshowPagination />
      <SlideshowNextIndicator />
    </SlideshowControls>
  </Slideshow>
);
