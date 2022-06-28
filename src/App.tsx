import { Routes } from './routes';
import { Theme, GlobalStyles } from 'themes';
import { ReactElement } from 'react';

export const App = (): ReactElement => {
  return (
    <Theme>
      <GlobalStyles />
      <Routes />
    </Theme>
  );
};
