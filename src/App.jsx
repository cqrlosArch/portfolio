import * as React from 'react';

import { AppContextProvider } from './context/AppContext';
import Git from './components/Git';
import PersonalInfo from './components/PersonalInfo';
import Tools from './components/Tools';
import Wrapper from './components/Wrapper';

import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { normalize } from 'styled-normalize';

import { useDarkMode } from './hooks/useDarkMode';
import { lightTheme, darkTheme } from './components/Themes';
import Hobbies from './components/Hobbies';
import Experiencie from './components/Experiencie';
import Filter from './components/Filter';
import ProjectsContainer from './components/ProjectsContainer';

const GlobalStyled = createGlobalStyle`
 ${normalize}
  :root{
  --bgBody: ${({ theme }) => theme.bgBody};
  --bgComponents:  ${({ theme }) => theme.bgComponents};
  --colorTitle:  ${({ theme }) => theme.colorTitle};
  --colorText:  ${({ theme }) => theme.colorText};
  --black:  ${({ theme }) => theme.black};
  --blue:  ${({ theme }) => theme.blue};
  --hoverFilter:  ${({ theme }) => theme.hoverFilter};
  --textButton:  ${({ theme }) => theme.textButton};
}

  html {
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
}

  *,
  *::after,
  *::before {
  box-sizing: inherit;
}

  body {
  margin: 0;
  background-color: var(--bgBody);
  color:var(--colorTitle);
}

  img {
  max-width: 100%;
  height: auto;
  border-radius:12px;
}
  .section {
    border-radius: 12px;
    background-color: var(--bgComponents);
    padding: 1rem;
    box-shadow:0px 0px 10px 0px rgba(0,0,0,.1);
  }
`;

const App = () => {
  const [theme, themeToggler] = useDarkMode();

  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <>
      <AppContextProvider>
        <ThemeProvider theme={themeMode}>
          <GlobalStyled />
          <Wrapper>
            <PersonalInfo theme={theme} themeToggler={themeToggler} />
            <Tools />
            <Git />
            <Hobbies />
            <Experiencie />
            <Filter />
            <ProjectsContainer />
          </Wrapper>
        </ThemeProvider>
      </AppContextProvider>
    </>
  );
};

export default App;
