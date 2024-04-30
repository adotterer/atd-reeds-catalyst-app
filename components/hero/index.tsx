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
import SlideshowBG2 from './gouger-ai-2.png';

export const Hero = () => (
  <Slideshow>
    <SlideshowContent>
      <SlideshowSlide>
        <div className="relative">
          <Image
            alt="Oboe Gouging Machine: Kunibert Michel"
            className="absolute -z-10 object-cover"
            fill
            priority
            sizes="(max-width: 1536px) 100vw, 1536px"
            src={SlideshowBG2}
          />
          <div className="max-w-screen flex flex-col gap-2 py-14 justify-center justify-center items-center">
            <h2 className="max-w-max text-center md:text-left pl-2 p-1 bg-black bg-opacity-50 max-w-xl text-white text-4xl sm:text-4xl lg:text-4x">
              Kunibert Michel
            </h2>
            <h4 className="max-w-max bg-black bg-opacity-50 px-2 text-center text-white text-3xl sm:text-3xl md:text-left lg:text-3xl">
              Oboe Gouging Machine
            </h4>
            <p className="max-w-max max-w-xl bg-black bg-opacity-50 px-2 text-center text-white text-2xl md:text-left">
              11 mm bed
            </p>
            <Button asChild className="w-fit md:w-fit">
              <a href="/#">Shop now</a>
            </Button>
          </div>
        </div>
      </SlideshowSlide>
      <SlideshowSlide>
        <div className="flex w-full justify-center md:justify-start md:pl-20 py-2">
          <Image
            alt="Oboe Gouging Machine: Kunibert Michel"
            className="absolute -z-10 object-cover"
            fill
            priority
            sizes="(max-width: 1536px) 100vw, 1536px"
            src={SlideshowBG2}
          />
          <div className="max-w-screen flex flex-col gap-2 py-14 justify-center justify-center items-center">
            <h2 className="max-w-max text-center md:text-left pl-2 p-1 bg-black bg-opacity-50 max-w-xl text-white text-4xl sm:text-4xl lg:text-4x">
              Kunibert Michel
            </h2>
            <h4 className="max-w-max bg-black bg-opacity-50 px-2 text-center text-white text-3xl sm:text-3xl md:text-left lg:text-3xl">
              Oboe Gouging Machine
            </h4>
            <p className="max-w-max max-w-xl bg-black bg-opacity-50 px-2 text-center text-white text-2xl md:text-left">
              11 mm bed
            </p>
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
