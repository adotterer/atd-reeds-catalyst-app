import Image from 'next/image';
import { FragmentOf, graphql } from '~/client/graphql';

import { Button } from '../ui/button';
import React from 'react';

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

export const CategoryHero= async ({data}: Props) => {

 
    console.log(data, "data")


    return <div className="h-[300px] flex border-4 border-indigo-500 justify-center items-center">
     <h1>what goes here?</h1>
        {/* <Button asChild className="w-fit md:w-fit">
              <a href="/reeds/">Shop Reeds</a>
        </Button>
        */}
    
    </div>
}