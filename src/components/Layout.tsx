import React from 'react';
import styled from 'styled-components';

export const LayoutWrapper = styled.div`
  
`;

type LayoutProps = {
  children: React.ReactElement | string;
};

export function Layout({children}: LayoutProps) {
  return <LayoutWrapper>{children}</LayoutWrapper>;
}
