import { Routes } from '@src/navigation/Routes';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from 'assets/theme/theme';
import { AuthProvider } from '@src/context/auth.context';

export default function App() {
  return (
    <AuthProvider>
      <ThemeProvider theme={defaultTheme}>
        <Routes />
      </ThemeProvider>
    </AuthProvider>
  );
}
