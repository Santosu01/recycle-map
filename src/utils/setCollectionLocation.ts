import { collectionLocationKey } from "../constants/localStorageKeys";
import { ICollectionLocation } from "../types/collectionLocation";
import { getCollectionLocationList } from "./getCollectionLocationList";

export const setCollectionLocation = (
  collectionLocation: ICollectionLocation
) => {
  const collectionLocationList = getCollectionLocationList();
  const newCollectionLocationList = [
    ...collectionLocationList,
    collectionLocation,
  ];

  localStorage.setItem(
    collectionLocationKey,
    JSON.stringify(newCollectionLocationList)
  );
};
