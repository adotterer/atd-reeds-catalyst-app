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
      <div className="p-4 flex border-0 justify-evenly border-indigo-500 ">

        {/* <div>
          <Button asChild className="w-fit md:w-fit">
            <a href="/reeds/">Oboe Reeds</a>
          </Button>
        </div>
        <div>
          <Button asChild className="w-fit md:w-fit">
            <a href="/cane/">Cane</a>
          </Button>
        </div>
        <div>
          <Button asChild className="w-fit md:w-fit">
            <a href="/cane/">Reed Making Accessories</a>
          </Button>
        </div> */}
      </div>

      {/* <CategoryHero /> */}
      {/* 
      <div className="flex items-center justify-center bg-gray-100 h-64">
        <div className="flex bg-white shadow-lg rounded-lg p-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900">*Pre orders will start being fulfilled in <b>mid-July.</b></h3>
          </div>
        </div>
      </div> */}

      <div className="flex flex-col md:flex-row items-center">
        <div className="w-full md:w-3/4 p-4">
          <p className="text-3xl">About us 👋</p>
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


