/* eslint-disable react/prop-types */
import { createContext, useContext } from 'react';

const DesignContext = createContext();

export function DesignContextProvider({ children }) {
  return <DesignContext.Provider>{children}</DesignContext.Provider>;
}

export const useDesignContext = () => useContext(DesignContext);
