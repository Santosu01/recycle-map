import { collectionLocationKey } from "../constants/localStorageKeys";
import { ICollectionLocation } from "../types/collectionLocation";

export const getCollectionLocationList = (): ICollectionLocation[] => {
  const collectionLocationList = localStorage.getItem(collectionLocationKey);

  if (collectionLocationList) {
    return JSON.parse(collectionLocationList) as ICollectionLocation[];
  }

  return [];
};
