import { removeEdgesAndNodes } from '@bigcommerce/catalyst-client';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { Link } from '~/components/link';
import { getSessionCustomerId } from '~/auth';
import { client } from '~/client';
import { graphql } from '~/client/graphql';
import { revalidate } from '~/client/revalidate-target';
import { Hero } from '~/components/hero';
import { ImageSlider } from '~/components/image-slider';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ProductCardCarousel,
  ProductCardCarouselFragment,
} from '~/components/product-card-carousel';
import { LocaleType } from '~/i18n';

interface Props {
  params: {
    locale: LocaleType;
  };
}

const HomePageQuery = graphql(
  `
    query HomePageQuery {
      site {
        newestProducts(first: 12) {
          edges {
            node {
              ...ProductCardCarouselFragment
            }
          }
        }
        featuredProducts(first: 12) {
          edges {
            node {
              ...ProductCardCarouselFragment
            }
          }
        }
      }
    }
  `,
  [ProductCardCarouselFragment],
);

const images = [
  'https://mshippoboe.s3.us-west-1.amazonaws.com/hp-p.png',
  'https://mshippoboe.s3.us-west-1.amazonaws.com/cg.jpeg',
  // Add more image URLs as needed
];

export default async function Home({ params: { locale } }: Props) {

  const customerId = await getSessionCustomerId();

  unstable_setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: 'Home' });
  const messages = await getMessages({ locale });

  const { data } = await client.fetch({
    document: HomePageQuery,
    customerId,
    fetchOptions: customerId ? { cache: 'no-store' } : { next: { revalidate } },
  });

  const featuredProducts = removeEdgesAndNodes(data.site.featuredProducts);
  const newestProducts = removeEdgesAndNodes(data.site.newestProducts);

  return (
    <>
      <Hero />

      <div className="flex flex-col md:flex-row items-center">
        <div className="w-full md:w-3/4 p-4">
        {/* <p className="text-3xl">About us...</p> */}
          <p className="pt-5 text-lg">
            At our core, we are professional oboists who understand the artistry and precision required to craft
            the perfect reed. Meet <Link href="https://www.matthewshippoboe.com/"><b>Matthew Shipp</b></Link> and
            <Link href="https://adotterer.com"><b> Andrew Dotterer</b></Link> seasoned musicians who regularly perform with
            the Philadelphia Orchestra and Orchestra Iowa, among other distinguished ensembles in the region.
          </p>
          <p className="pt-5 text-lg">
            Our extensive experience in the professional orchestral scene gives us a deep understanding of what a reed needs to feel 
            like in order to play comfortably, stay in tune, and produce a beautiful sound. We know that every oboist has unique requirements, 
            which is why we offer a range of reeds to suit different needs—from practice sessions to high-stakes performances.
          </p>
          <p className="pt-5 text-lg">
            Trust in our expertise and passion for music to provide you with reeds that enhance your playing experience.
            Secure your perfect reeds in advance for a seamless and enjoyable musical journey.
          </p>
        </div>

        <div className="md:w-1/2 p-4">

        <ImageSlider />
        </div>

      </div>

      <div className="my-10">
        <NextIntlClientProvider locale={locale} messages={{ Product: messages.Product ?? {} }}>
          <ProductCardCarousel
            products={featuredProducts}
            showCart={false}
            showCompare={false}
            showReviews={false}
            title={t('Carousel.featuredProducts')}
          />
          <ProductCardCarousel
            products={newestProducts}
            showCart={false}
            showCompare={false}
            showReviews={false}
            title={t('Carousel.newestProducts')}
          />
        </NextIntlClientProvider>
      </div>
    </>
  );
}

export const runtime = 'edge';
