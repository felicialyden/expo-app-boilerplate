import React, { useState, FunctionComponent, useMemo, useEffect } from 'react';

type ContextType = {
  isSignedIn: boolean;
};

type StoreContextProps = {
  children: React.ReactNode;
};

const StoreContext = React.createContext<ContextType>({
  isSignedIn: false,
});

export const StoreContextProvider: FunctionComponent<StoreContextProps> = (
  props: StoreContextProps
) => {
  const [isSignedIn, setIsSignedIn] = useState<boolean>(false);

  useEffect(() => {
    // Only runs once
    // Fetches firebase user
  }, []);

  const state = useMemo(
    () => ({ isSignedIn, setIsSignedIn }),
    [isSignedIn, setIsSignedIn]
  );

  return (
    <StoreContext.Provider value={state}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContext;
