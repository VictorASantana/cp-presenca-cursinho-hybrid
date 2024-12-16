import { Routes } from '@src/navigation/Routes';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from 'assets/theme/theme';
import { AuthProvider } from '@src/context/auth.context';
import { UserProvider } from '@src/context/user.context';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <UserProvider>
      <AuthProvider>
        <ThemeProvider theme={defaultTheme}>
          <StatusBar style='light'/>
          <Routes />
        </ThemeProvider>
      </AuthProvider>
    </UserProvider>
  );
}
