import React from 'react';
import styled from 'styled-components';

const PageLayoutWrapper = styled.main`
  position: absolute;
  margin-top: 3rem;
  height: 100%;
  width: 100%;
  padding: 0.5rem;
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
