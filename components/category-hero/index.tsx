import Image from 'next/image';
import { FragmentOf, graphql } from '~/client/graphql';

import { Button } from '../ui/button';
import React from 'react';
// import SlideshowBG2 from './reed-box.png';

export const HeaderNavFragment = graphql(`
    fragment HeaderNavFragment on Site {
      categoryTree {
        entityId
        name
        path
        children {
          entityId
          name
          path
          children {
            entityId
            name
            path
          }
        }
      }
    }
`);

interface Props {
    data: FragmentOf<typeof HeaderNavFragment>['categoryTree'];
}

export const CategoryHero = async () => {





    return (
        <div className="p-4 flex border-0 justify-center border-indigo-500 ">
            {/* <div className="md:w-1/2 flex justify-center">
                <Image
                    alt="Shop Reeds"
                    className="block"
                    height="400"
                    width="400"
                    priority
                    src={SlideshowBG2}
                />
            </div> */}
            {/* <div className="md:w-1/2 flex items-center">
                <h2 className="text-2xl">Handmade oboe reeds, cane, and accessories</h2>

            </div> */}
        </div>
    )
}