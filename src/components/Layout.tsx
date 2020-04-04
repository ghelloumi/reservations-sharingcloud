import React from 'react';
import styled from 'styled-components';

const LayoutWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  padding: 0.5rem;
`;

type LayoutProps = {
  children: React.ReactElement | string;
};

export function Layout({ children }: LayoutProps) {
  return <LayoutWrapper>{children}</LayoutWrapper>;
}
