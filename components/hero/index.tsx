import Image from 'next/image';

import { Button } from '~/components/ui/button';
import {
  Slideshow,
  SlideshowAutoplayControl,
  SlideshowContent,
  SlideshowControls,
  SlideshowNextIndicator,
  SlideshowPagination,
  SlideshowPreviousIndicator,
  SlideshowSlide,
} from '~/components/ui/slideshow';

import SlideshowBG from './gouger-ai-1.png';
import SlideshowBG2 from './gouger-ai-2-smaller.png';
import SlideshowBG3 from './musicbg-3-extended.png';

export const Hero = () => (
  <Slideshow>
    <SlideshowContent>
    <SlideshowSlide>
        <div className="flex relative h-full">
          <Image
            alt="Shop cane"
            className="hover:bg-blend-darken absolute -z-10 object-right object-cover"
            fill
            priority
            src={SlideshowBG3}
          />
          <div className="flex flex-col items-center gap-3 md:gap-7 px-12 py-20 md:py-40 md:items-start">
            {/* <h2 className="shadow-md g:text-5x max-w-max max-w-xl bg-blue-300 bg-opacity-80 p-1 pl-2 text-center text-4xl text-black sm:text-4xl lg:items-center">
              Good Vibrations
            </h2> */}
            <h4 className="shadow-md max-w-max bg-blue-300 bg-opacity-80 px-2 text-center text-4xl text-black">
              Discover a diverse selection of cane
            </h4>
            <p className="shadow-md max-w-max max-w-xl bg-blue-300 bg-opacity-80 px-2 text-2xl text-black text-center">
              Chosen for professional and student needs.
            </p>
            <Button asChild className="w-fit md:w-fit">
              <a href="/cane/">Shop cane</a>
            </Button>
          </div>
        </div>
      </SlideshowSlide>
      <SlideshowSlide>
        <div className="flexr relative h-full">
          <Image
            alt="Oboe Gouging Machine: Kunibert Michel"
            className="absolute -z-10 object-cover object-right"
            fill
            priority
            sizes="(max-width: 1536px) 100vw, 900px"
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
              <a href="/used-kunibert-michel-oboe-gouging-machine/">Shop now</a>
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
            <h3 className="lg:text-4x max-w-max max-w-xl bg-black bg-opacity-50 p-1 pl-2 text-center text-2xl text-white md:text-left">
              Used American double-radius gouge
            </h3>
            <h3 className="lg:text-4x max-w-max max-w-xl bg-black bg-opacity-50 p-1 pl-2 text-center text-2xl text-white md:text-left">
              Set up by John Symer
            </h3>
            <Button asChild className="w-fit md:w-fit">
              <a href="/used-kunibert-michel-oboe-gouging-machine/">Shop now</a>
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