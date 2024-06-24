import { removeEdgesAndNodes } from '@bigcommerce/catalyst-client';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { Button } from '~/components/ui/button';
import { ImageSlider } from '~/components/image-slider';
import { DiscoverBlock } from '~/components/discover-block';
import { CategoryHero } from '~/components/category-hero';
import { Link } from '~/components/link';
import Image from 'next/image';
import { getSessionCustomerId } from '~/auth';
import { client } from '~/client';
import { graphql } from '~/client/graphql';
import { revalidate } from '~/client/revalidate-target';
import { Hero } from '~/components/hero';
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
      {/* <CategoryHero /> */}

      <div className="flex flex-col md:flex-row items-center">
        <div className="w-full md:w-3/4 p-4">
          <h2 className="pb-4 text-3xl">Handmade oboe reeds, cane, and accessories</h2>
          <p className="text-2xl">About us 👋</p>
          <p className="pt-5 text-lg">We are oboists <Link href="https://www.matthewshippoboe.com/"><b>Matthew Shipp</b></Link> and
            <Link href="https://adotterer.com"><b> Andrew Dotterer</b></Link>, welcome to our reed website!
          </p>
          <p className="pt-5 text-lg">
            Our extensive experience in the professional orchestral scene gives us a deep understanding of what a reed needs to feel
            like in order to play comfortably, stay in tune, and produce a beautiful sound. We know that every oboist has unique requirements,
            which is why we offer a range of reeds to suit different needs—from practice sessions to high-stakes performances.
          </p>
          <p className="pt-5 text-lg">
            Trust in our expertise and passion for music to provide you with reeds that enhance your playing experience.
          </p>
        </div>
        <div className="md:w-1/2 p-4">
          <ImageSlider />
        </div>

      </div>
      <div className="flex flex-col items-center justify-center bg-gray-100 mb-8 gap-2 px-8 py-8">
        <div className="flex bg-white shadow-lg rounded-lg p-6">
          <div className="">
              <h3 className="text-2xl font-bold text-gray-900">Now accepting pre orders! </h3>
          </div>
        </div>
        <div className="flex-col bg-white shadow-lg rounded-lg p-6">
          <div className="">
              <h3 className="text-2xl font-bold text-gray-900">Starting shipments <b>July 15th</b></h3>
          </div>
        </div>
        <div className="flex-col bg-white shadow-lg rounded-lg p-6">
          <div className="">
              <h3 className="text-2xl font-bold text-gray-900">Orders will be fulfilled in the order they are received.</h3>
          </div>
        </div>
        
      </div>

      <DiscoverBlock />

      {/* <Hero /> */}


      {/* <div className="my-10">
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
      </div> */}
    </>
  );
}

export const runtime = 'edge';


