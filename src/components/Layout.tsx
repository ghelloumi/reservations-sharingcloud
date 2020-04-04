import React from 'react';
import styled from 'styled-components';

const LayoutWrapper = styled.div`
  position: relative;
`;

type LayoutProps = {
  children: React.ReactElement | string;
};

export function Layout({ children }: LayoutProps) {
  return <LayoutWrapper>{children}</LayoutWrapper>;
}
