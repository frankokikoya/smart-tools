import { useLocalStorage } from './useStorage';

export const useAuth = () => {
  const [session, setSession, removeSession] = useLocalStorage("SESSION");
  return { session, setSession, removeSession };
};
