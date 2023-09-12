import {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

interface SideContextValue {
  toggleSidebar: boolean;
  setToggleSidebar: Dispatch<SetStateAction<boolean>>;
}

const initialValue: SideContextValue = {
  toggleSidebar: true,
  setToggleSidebar: () => {},
};

const SideContext = createContext<SideContextValue>(initialValue);

export const SideProvider = ({ children }: { children: ReactNode }) => {
  const [toggleSidebar, setToggleSidebar] = useState<boolean>(true);

  return (
    <SideContext.Provider
      value={{
        toggleSidebar,
        setToggleSidebar,
      }}
    >
      {children}
    </SideContext.Provider>
  );
};

export default SideContext;
