import React, { useState, createContext } from "react";
import { CreateInitialWorlds } from "../classes/World";

export const WorldContext = createContext();

export const WorldContextProvider = ({ children }) => {
  const key = "worlds";
  let initialState = JSON.parse(localStorage.getItem(key));

  if (!initialState) {
    initialState = CreateInitialWorlds();
    localStorage.setItem(key, JSON.stringify(initialState));
  }

  const [worldList, setWorldList] = useState(initialState);

  const addWorld = (item) => {
    let tempWorldList = worldList;
    tempWorldList.push(item);

    localStorage.setItem(key, JSON.stringify(tempWorldList));
    setWorldList(tempWorldList);
  }

  const removeWorld = (item) => {
    let tempWorldList = worldList;
    tempWorldList.filter((world) => item.objectID !== world.objectID);

    localStorage.setItem(key, JSON.stringify(tempWorldList));
    setWorldList(tempWorldList);
  }

  console.log("Retrieved world list: ", worldList);

  return (
    <WorldContext.Provider value={{ worldList, addWorld, removeWorld }}>
      {children}
    </WorldContext.Provider>
  );
};

export const WorldProvider = WorldContext.Provider;
