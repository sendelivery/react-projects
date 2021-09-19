import React, { useState, createContext } from "react";
import { CreateInitialWorlds } from "../classes/World";

export const WorldContext = createContext();

export const WorldContextProvider = ({ children }) => {
  const key = "worlds";
  let operableState = JSON.parse(localStorage.getItem(key));

  if (!operableState) {
    operableState = CreateInitialWorlds();
    localStorage.setItem(key, JSON.stringify(operableState));
  }

  const [worldList, setWorldList] = useState(operableState);
  const HandleSetWorldList = (newWorldList) => {
    operableState = newWorldList; // Operable state must be kept up to date to be able to search the up to date state.
    localStorage.setItem(key, JSON.stringify(newWorldList));
    setWorldList(newWorldList);
  };

  const addWorld = (item) => {
    let tempWorldList = worldList;
    tempWorldList.push(item);

    HandleSetWorldList(tempWorldList);
  };

  const removeWorld = (item) => {
    let tempWorldList = worldList;
    tempWorldList = tempWorldList.filter(
      (world) => item.objectID !== world.objectID
    );

    HandleSetWorldList(tempWorldList);
  };

  const sortWorldList = (lastPlayed) => {
    let tempWorldList = worldList;
    tempWorldList.sort(function (first, second) {
      return first.objectID === lastPlayed.objectID
        ? -1
        : second.objectID === lastPlayed.objectID
        ? 1
        : 0;
    });

    HandleSetWorldList(tempWorldList);
  };

  // We use the operable state here because setWorldList is asynchronous, and does not alway update immediately.
  // If we filtered on the worldList, some annoying bugs would appear as a result of React not re-rendering.
  const searchWorldList = (searchTerm) => {
    setWorldList(operableState);

    if (searchTerm !== "") {
      const arr = operableState.filter((item) => {
        const x = item.name.toLowerCase();
        return x.includes(searchTerm.toLowerCase());
      });

      setWorldList(arr);
    }
  };

  console.log("Retrieved world list: ", worldList);

  return (
    <WorldContext.Provider
      value={{
        worldList,
        addWorld,
        removeWorld,
        sortWorldList,
        searchWorldList,
      }}
    >
      {children}
    </WorldContext.Provider>
  );
};

export const WorldProvider = WorldContext.Provider;
