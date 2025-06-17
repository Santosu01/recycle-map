import { collectionLocationKey } from "../constants/localStorageKeys";
import { ICollectionLocation } from "../types/collectionLocation";
import { getCollectionLocationList } from "./getCollectionLocationList";

export const updateCollectionLocationItem = (
  collectionLocation: ICollectionLocation
) => {
  const collectionLocationList = getCollectionLocationList();

  const foundedItem = collectionLocationList.find(
    (item) => item.id === collectionLocation.id
  );

  if (!foundedItem) {
    return;
  }

  const filteredCollectionLocationList = collectionLocationList.filter(
    (item) => item.id !== collectionLocation.id
  );

  const newCollectionLocationList = [
    ...filteredCollectionLocationList,
    collectionLocation,
  ];

  localStorage.setItem(
    collectionLocationKey,
    JSON.stringify(newCollectionLocationList)
  );
};
