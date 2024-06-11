import { Fragment } from 'react';

import { FragmentOf, graphql } from '~/client/graphql';

export const ContactInformationFragment = graphql(`
  fragment ContactInformationFragment on Settings {
    contact {
      address
      phone
    }
  }
`);

interface Props {
  data: FragmentOf<typeof ContactInformationFragment>;
}

export const ContactInformation = ({ data }: Props) => {
  const { contact } = data;

  if (!contact) {
    return null;
  }

  return (
    <>
    </>
  );
};
