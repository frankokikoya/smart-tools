import { useLocalStorage } from "./useStorage";

export const useAuth = () => {
  const [session, setSession, removeSession] = useLocalStorage("session");
  return { session, setSession, removeSession };
};
