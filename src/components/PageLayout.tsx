import React from 'react';
import styled from 'styled-components';

const PageLayoutWrapper = styled.main`
  position: absolute;
  margin-top: 3rem;
  width: 100%;
  padding: 0.5rem;
  height: calc(100vh - 3.5rem);
  display: flex;
  align-items: center;
  justify-content: center;
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
