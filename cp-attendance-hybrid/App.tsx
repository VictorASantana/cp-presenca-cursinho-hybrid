import { Routes } from '@src/navigation/Routes';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from 'assets/theme/theme';

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
       <Routes />
    </ThemeProvider>
   
  );
}
