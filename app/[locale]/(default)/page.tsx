import { removeEdgesAndNodes } from '@bigcommerce/catalyst-client';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { Link } from '~/components/link';
import { Button } from '~/components/ui/button';
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

      <div className="flex items-center justify-center bg-gray-100 h-64">
      <div className="flex bg-white shadow-lg rounded-lg p-6">
            
          <div>
            
            <h3 className="text-2xl font-bold text-gray-900">*Pre orders will start being fulfilled in <b>mid-July.</b></h3>
           
        </div>
      </div>
    </div>
      <div className="flex flex-col md:flex-row items-center">
        <div className="w-full md:w-3/4 p-4">
        <p className="text-3xl">About us</p>
          <p className="pt-5 text-lg">
            At our core, we are professional oboists who understand the artistry and precision required to craft
            the perfect reed. Meet <Link href="https://www.matthewshippoboe.com/"><b>Matthew Shipp</b></Link> and
            <Link href="https://adotterer.com"><b> Andrew Dotterer</b></Link>, seasoned musicians who regularly perform with
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
      <p className="text-3xl text-center mb-3">Discover Our Oboe Reeds</p>
      <div className="flex flex-col-reverse md:flex-row items-center justify-center">
        <div className="flex md:w-1/7 hidden md:block">
          <Image
              alt="Oboe Reed outline"
              className="mx-auto"
              width="120"
              height="385"
              src="https://mshippoboe.s3.us-west-1.amazonaws.com/reed_outline.png"
            />
        </div>
        <div className="md:w-6/7 p-4">
          <div className="inline-flex flex-col md:flex-row">
              <div className="flex-1">
                <h3 className="text-xl bg-yellow-300 p-4 m-2 text-center">Practice Reed</h3>
                <div className="bg-yellow-300 p-4 m-2 text-left">
                  <ul className="pl-2 list-disc">
                    <li>Entry-level reed</li>
                    <li>Student-friendly</li>
                    <li>Comfortable response</li>
                    <li>Light resistance</li>
                  </ul>
                </div>
                <div className="bg-yellow-300 p-4 m-2">
                  <Button asChild className="margin-auto">
                    <a href="/practice-oboe-reed/">Shop now</a>
                  </Button>
                </div>
              </div>
              <div className="flex-1">
               <h3 className="text-xl mb-2 bg-green-300 p-4 m-2 text-center">Rehearsal Reed</h3>
               <div className="bg-green-300 p-4 m-2 text-left">
                  <ul className="pl-2 list-disc">
                    <li>Ease of play</li>
                    <li>Dependable</li>
                    <li>Stable intonation</li>
                    <li>Great value</li>
                  </ul>
                </div>
                <div className="bg-green-300 p-4 m-2">
                  <Button asChild className="margin-auto">
                  <a href="/rehearsal-oboe-reed/">Shop now</a>
                  </Button>
                </div>
              </div>
              <div className="flex-1 w-100">
                <h3 className="text-xl bg-blue-300 p-4 m-2 text-center">Performance Reed</h3>
                <div className="bg-blue-300 p-4 m-2 text-left">
                  <ul className="pl-2 list-disc">
                    <li>Superior tone quality</li>
                    <li>Increased reliability</li>
                    <li>High-quality cane and materials</li>
                  </ul>
                </div>
                <div className="bg-blue-300 p-4 m-2">
                  <Button asChild className="margin-auto">
                    <a href="/performance-oboe-reed/">Shop now</a>
                  </Button>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl bg-purple-300 p-4 m-2 text-center">Concerto Reed</h3>
                <div className="bg-purple-300 p-4 m-2 text-left md:min-h-32">
                  <ul className="pl-2 list-disc">
                    <li>Increased longevity</li>
                    <li>Exceptional tone</li>
                    <li>Superior dynamic range</li>
                    <li>Premium materials</li>
                  </ul>
                </div>
                <div className="bg-purple-300 p-4 m-2">
                  <Button asChild className="margin-auto">
                    <a href="/concerto-oboe-reed/">Shop now</a>
                  </Button>
                </div>
              </div>
            </div>
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