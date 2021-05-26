import React from "react";
import { createContext, useContext } from "react";

const dataStorageContext = createContext("");
const useDataStorageContext = () => useContext(dataStorageContext);

const DataStorageProvider = ({ children }) => {
  const [state, dispatch] = useDataStorage();

  return (
    <DataStorageContext.Provider
      value={{
        state: deepCopy(state),
        dispatch,
        dataActions,
      }}
    >
      {children}
    </DataStorageContext.Provider>
  );
};

const deepCopy = (obj) => JSON.parse(JSON.stringify(obj));

export default DataStorageProvider;
export { useDataStorageContext };
