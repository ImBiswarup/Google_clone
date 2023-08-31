import { createContext, useState } from "react";

export const Context = createContext();

export const AppContext = (props) => {
  const [imageSearch, setImageSearch] = useState(false);

  return (
    <div>
      <Context.Provider
        value={{
          imageSearch,
          setImageSearch,
        }}
      >
        {props.children}
      </Context.Provider>
    </div>
  );
};
