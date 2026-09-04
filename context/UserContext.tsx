import React, { createContext, useContext, useState } from 'react';

export type UserProfile = {
  nome: string;
  email: string;
  telefone: string;
  dataNascimento: string;
  cpf: string;
};

type UserContextValue = {
  user: UserProfile | null;
  saveUser: (profile: UserProfile) => void;
};

const UserContext = createContext<UserContextValue | undefined>(undefined);

export function UserProvider({ children }: React.PropsWithChildren) {
  const [user, setUser] = useState<UserProfile | null>(null);

  return <UserContext.Provider value={{ user, saveUser: setUser }}>{children}</UserContext.Provider>;
}

export function useUser() {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('useUser deve ser usado dentro de UserProvider');
  }

  return context;
}