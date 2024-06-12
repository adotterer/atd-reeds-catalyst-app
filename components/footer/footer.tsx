import { FragmentOf, graphql } from '~/client/graphql';
import { Footer as ComponentsFooter, FooterSection } from '~/components/ui/footer';
import { Link } from '~/components/link';
import { StoreLogo, StoreLogoFragment } from '../store-logo';

import { ContactInformation, ContactInformationFragment } from './contact-information';
import { Copyright, CopyrightFragment } from './copyright';
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
  
               <WebPageFooterMenu data={data.content} />
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
      {/* <FooterSection className="flex flex-col gap-8 py-10 md:flex-row lg:gap-4">
        <nav className="grid flex-auto auto-cols-fr gap-8 sm:grid-flow-col">
          <CategoryFooterMenu data={data.categoryTree} />
          <BrandFooterMenu data={data.brands} />
          <WebPageFooterMenu data={data.content} />
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
      </FooterSection> */}

      <FooterSection className="flex flex-col justify-between gap-10 sm:flex-row sm:gap-8 sm:py-6">
        {/* <PaymentMethods /> */}

        {data.settings && <Copyright data={data.settings} />}
      </FooterSection>
    </ComponentsFooter>
  );
};
