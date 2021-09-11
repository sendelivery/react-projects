import React, { createContext } from "react";
import { CreateInitialWorlds } from "../classes/World";

export const WorldContext = createContext();

const worldsReducer = (state, action) => {
  switch (action.type) {
    case "RETRIEVE":
      return {};
    case "PLAY":
      return {};
    case "EDIT":
      return {};
    case "DELETE":
      return {};
    case "RECREATE":
      return {};
    default:
      throw new Error();
  }
};

const useSemiPersistentState = (key, initialState) => {
  // DOESN'T WORK ON THE FIRST TRY AND I DON'T KNOW WHY!
  const GetLocalOrInitial = () => {
    // check if worlds already exist in local storage
    if (localStorage.getItem(key) === null) {
      // set them with initial state if not,
      localStorage.setItem(key, initialState);
      // return them to the reducer
      return localStorage.getItem(key);
    } else {
      return initialState;
    }
  };

  initialState = GetLocalOrInitial();

  const [value, dispatchValue] = React.useReducer(worldsReducer, initialState);

  React.useEffect(() => {
    localStorage.setItem(key, value);
  }, [value, key]);
  return [value, dispatchValue];
};

export const WorldContextProvider = ({ children }) => {
  const [worldList, dispatchWorldList] = useSemiPersistentState(
    "worlds",
    CreateInitialWorlds()
  );
  console.log("Retrieved world list: ", worldList);
  return (
    <WorldContext.Provider value={{ worldList, dispatchWorldList }}>
      {children}
    </WorldContext.Provider>
  );
};

export const WorldProvider = WorldContext.Provider;
