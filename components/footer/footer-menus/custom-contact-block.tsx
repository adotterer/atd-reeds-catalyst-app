import { ComponentPropsWithoutRef } from 'react';

import { BaseFooterMenu } from './base-footer-menu';

interface Item {
  name: string;
  path: string;
}

interface Props {
  title: string;
  items: Item[];
}

interface ContactProps {
  title: string;
  items: Item[];
}

export const ContactBlock: React.FC<ComponentPropsWithoutRef<'div'>> = ({ data }: Props) => {


  return <BaseFooterMenu items={data} title="Contact Us" />;
};