import Image from 'next/image';

import { FragmentOf, graphql } from '~/client/graphql';

import { BcImage } from '../bc-image';
import Logo from '../bt-250.png';

export const StoreLogoFragment = graphql(`
  fragment StoreLogoFragment on Settings {
    storeName
    logoV2 {
      __typename
      ... on StoreTextLogo {
        text
      }
      ... on StoreImageLogo {
        image {
          url: urlTemplate
          altText
        }
      }
    }
  }
`);

interface Props {
  data: FragmentOf<typeof StoreLogoFragment>;
}

export const StoreLogo = ({ data }: Props) => {
  const { logoV2: logo, storeName } = data;

  if (logo.__typename === 'StoreTextLogo') {
    return (
      <div className="flex items-center">
        <Image
          alt="Boston terrier profile"
          // className="opacity-50"
          height={100}
          priority
          src={Logo}
          width={100}
        />
        <span className="text-2xl font-black">{logo.text}</span>
      </div>
    );
  }

  return (
    <div className="flex items-center">
      <BcImage
        alt={logo.image.altText ? logo.image.altText : storeName}
        className="max-h-16 object-contain"
        height={90}
        priority
        src={logo.image.url}
        width={90}
      />
      <span className="text-2xl font-black">{storeName}</span>
    </div>
  );
};
