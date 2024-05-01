import { Footer as ComponentsFooter, FooterSection } from '@bigcommerce/components/footer';
import { FragmentOf, graphql } from '~/client/graphql';
import { Link } from '~/components/link';

import { StoreLogo, StoreLogoFragment } from '../store-logo';

import { ContactInformation, ContactInformationFragment } from './contact-information';
import { Copyright, CopyrightFragment } from './copyright';
// import { ContactBlock } from './footer-menus/custom-contact-block';
import {
  BrandFooterMenu,
  BrandsFooterMenuFragment,
  CategoryFooterMenu,
  CategoryFooterMenuFragment,
} from './footer-menus';
import { WebPageFooterMenu, WebPageFooterMenuFragment } from './footer-menus/web-page-footer-menu';
import { PaymentMethods } from './payment-methods';
import { SocialIcons, SocialIconsFragment } from './social-icons';

export const FooterFragment = graphql(
  `
    fragment FooterFragment on Site {
      settings {
        ...ContactInformationFragment
        ...CopyrightFragment
        ...SocialIconsFragment
        ...StoreLogoFragment
      }
      content {
        ...WebPageFooterMenuFragment
      }
      brands(first: 5) {
        ...BrandsFooterMenuFragment
      }
      ...CategoryFooterMenuFragment
    }
  `,
  [
    BrandsFooterMenuFragment,
    CategoryFooterMenuFragment,
    ContactInformationFragment,
    CopyrightFragment,
    SocialIconsFragment,
    StoreLogoFragment,
    WebPageFooterMenuFragment,
  ],
);

interface Props {
  data: FragmentOf<typeof FooterFragment>;
}

export const Footer = ({ data }: Props) => {
  return (
    <ComponentsFooter>
      <FooterSection className="flex flex-col gap-8 py-10 md:flex-row lg:gap-4">
        <nav className="grid flex-auto auto-cols-fr gap-8 sm:grid-flow-col">
          <CategoryFooterMenu data={data.categoryTree} />
          <BrandFooterMenu data={data.brands} />
          {/* <WebPageFooterMenu data={data.content} /> */}
          <div>
            <h3 className="mb-4 text-lg font-bold">Oboists</h3>
            <ul className="flex flex-col gap-4">
              <li>
                <Link href="https://adotterer.com">Andrew Dotterer</Link>
              </li>
              <li>
                <Link href="https://www.matthewshippoboe.com/">Matthew Shipp</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-bold">Contact Us</h3>
            <ul className="flex flex-col gap-4">
              <li className="flex">
                <Link href="mailto:adotterer@gmail.com">
                  Email
                  <svg
                    className="inline-block pl-2"
                    fill="none"
                    height="25"
                    viewBox="0 0 25 25"
                    width="25"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.49994 4.17419H20.4999C21.5999 4.17419 22.4999 5.07419 22.4999 6.17419V18.1742C22.4999 19.2742 21.5999 20.1742 20.4999 20.1742H4.49994C3.39994 20.1742 2.49994 19.2742 2.49994 18.1742V6.17419C2.49994 5.07419 3.39994 4.17419 4.49994 4.17419Z"
                      stroke="black"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M22.4999 6.17419L12.4999 13.1742L2.49994 6.17419"
                      stroke="black"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </li>
              <li className="flex">
                <Link href="https://www.instagram.com/matthewshippoboe/">
                  Message
                  <svg
                    className="inline-block pl-2"
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.5 2.33513C15.7063 2.33513 16.0859 2.34919 17.3469 2.40544C18.5188 2.45701 19.1516 2.65388 19.5734 2.81794C20.1313 3.03357 20.5344 3.29607 20.9516 3.71326C21.3734 4.13513 21.6313 4.53357 21.8469 5.09138C22.0109 5.51326 22.2078 6.15076 22.2594 7.31794C22.3156 8.58357 22.3297 8.96326 22.3297 12.1648C22.3297 15.3711 22.3156 15.7508 22.2594 17.0117C22.2078 18.1836 22.0109 18.8164 21.8469 19.2383C21.6313 19.7961 21.3687 20.1992 20.9516 20.6164C20.5297 21.0383 20.1313 21.2961 19.5734 21.5117C19.1516 21.6758 18.5141 21.8726 17.3469 21.9242C16.0813 21.9804 15.7016 21.9945 12.5 21.9945C9.29375 21.9945 8.91406 21.9804 7.65313 21.9242C6.48125 21.8726 5.84844 21.6758 5.42656 21.5117C4.86875 21.2961 4.46563 21.0336 4.04844 20.6164C3.62656 20.1945 3.36875 19.7961 3.15313 19.2383C2.98906 18.8164 2.79219 18.1789 2.74063 17.0117C2.68438 15.7461 2.67031 15.3664 2.67031 12.1648C2.67031 8.95857 2.68438 8.57888 2.74063 7.31794C2.79219 6.14607 2.98906 5.51326 3.15313 5.09138C3.36875 4.53357 3.63125 4.13044 4.04844 3.71326C4.47031 3.29138 4.86875 3.03357 5.42656 2.81794C5.84844 2.65388 6.48594 2.45701 7.65313 2.40544C8.91406 2.34919 9.29375 2.33513 12.5 2.33513ZM12.5 0.174194C9.24219 0.174194 8.83438 0.188257 7.55469 0.244507C6.27969 0.300757 5.40313 0.507007 4.64375 0.802319C3.85156 1.11169 3.18125 1.51951 2.51563 2.18982C1.84531 2.85544 1.4375 3.52576 1.12813 4.31326C0.832812 5.07732 0.626563 5.94919 0.570313 7.22419C0.514063 8.50857 0.5 8.91638 0.5 12.1742C0.5 15.432 0.514063 15.8398 0.570313 17.1195C0.626563 18.3945 0.832812 19.2711 1.12813 20.0304C1.4375 20.8226 1.84531 21.4929 2.51563 22.1586C3.18125 22.8242 3.85156 23.2367 4.63906 23.5414C5.40313 23.8367 6.275 24.0429 7.55 24.0992C8.82969 24.1554 9.2375 24.1695 12.4953 24.1695C15.7531 24.1695 16.1609 24.1554 17.4406 24.0992C18.7156 24.0429 19.5922 23.8367 20.3516 23.5414C21.1391 23.2367 21.8094 22.8242 22.475 22.1586C23.1406 21.4929 23.5531 20.8226 23.8578 20.0351C24.1531 19.2711 24.3594 18.3992 24.4156 17.1242C24.4719 15.8445 24.4859 15.4367 24.4859 12.1789C24.4859 8.92107 24.4719 8.51326 24.4156 7.23357C24.3594 5.95857 24.1531 5.08201 23.8578 4.32263C23.5625 3.52576 23.1547 2.85544 22.4844 2.18982C21.8188 1.52419 21.1484 1.11169 20.3609 0.807007C19.5969 0.511694 18.725 0.305444 17.45 0.249194C16.1656 0.188257 15.7578 0.174194 12.5 0.174194Z"
                      fill="black"
                    />
                    <path
                      d="M12.5 6.01013C9.09688 6.01013 6.33594 8.77107 6.33594 12.1742C6.33594 15.5773 9.09688 18.3383 12.5 18.3383C15.9031 18.3383 18.6641 15.5773 18.6641 12.1742C18.6641 8.77107 15.9031 6.01013 12.5 6.01013ZM12.5 16.1726C10.2922 16.1726 8.50156 14.382 8.50156 12.1742C8.50156 9.96638 10.2922 8.17576 12.5 8.17576C14.7078 8.17576 16.4984 9.96638 16.4984 12.1742C16.4984 14.382 14.7078 16.1726 12.5 16.1726Z"
                      fill="black"
                    />
                    <path
                      d="M20.3469 5.7664C20.3469 6.56327 19.7 7.20546 18.9078 7.20546C18.1109 7.20546 17.4688 6.55859 17.4688 5.7664C17.4688 4.96952 18.1156 4.32733 18.9078 4.32733C19.7 4.32733 20.3469 4.97421 20.3469 5.7664Z"
                      fill="black"
                    />
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <div className="flex flex-col gap-4 md:order-first md:grow">
          {data.settings && (
            <h3>
              <StoreLogo data={data.settings} />
            </h3>
          )}
          {data.settings && <ContactInformation data={data.settings} />}
          {data.settings && <SocialIcons data={data.settings} />}
        </div>
      </FooterSection>

      <FooterSection className="flex flex-col justify-between gap-10 sm:flex-row sm:gap-8 sm:py-6">
        <PaymentMethods />

        {data.settings && <Copyright data={data.settings} />}
      </FooterSection>
    </ComponentsFooter>
  );
};
