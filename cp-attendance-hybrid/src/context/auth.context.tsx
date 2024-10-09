import { createContext, ReactElement, useContext, useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContextData, AuthData } from "@src/data/types/auth/auth.type";
import { AuthService } from "@src/data/service/auth.service";

interface AuthProviderProps {
  children: ReactElement;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {
  const [authData, setAuthData] = useState<AuthData>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadStorageData();
  }, []);

  async function loadStorageData(): Promise<void> {
    try {
      const authDataSerialized = await AsyncStorage.getItem('@AuthData');
      if (authDataSerialized) {
        const _authData: AuthData = JSON.parse(authDataSerialized);
        setAuthData(_authData);
      }
    } catch (err) {
    } finally {
      setLoading(false);
    }
  }

  const signIn = async (email: string, password: string): Promise<string | Error> => {
    const _authData =  await AuthService.signIn(email, password);
    if (!(_authData instanceof Error)) {
      setAuthData(_authData);
      await AsyncStorage.setItem('@AuthData', JSON.stringify(_authData));
      return _authData.token;
    } else {
      return _authData;
    }
  }

  const signOut = async () => {
    setAuthData(undefined);
    await AsyncStorage.removeItem('@AuthData');
  }

  return (
    <AuthContext.Provider value={{authData, loading, signIn, signOut}}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export {AuthContext, AuthProvider, useAuth};
