import React from 'react';
import styled from 'styled-components';

const PageLayoutWrapper = styled.main`
  position: absolute;
  margin-top: 3rem;
`;

type LayoutProps = {
  children: React.ReactElement | string;
};

export function PageLayout({ children }: LayoutProps) {
  return (
    <PageLayoutWrapper role="main" aria-hidden="false">
      {children}
    </PageLayoutWrapper>
  );
}
