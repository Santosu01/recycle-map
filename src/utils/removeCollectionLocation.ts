import { collectionLocationKey } from "../constants/localStorageKeys";
import { getCollectionLocationList } from "./getCollectionLocationList";

export const removeCollectionLocation = (id: string) => {
  const collectionLocationList = getCollectionLocationList();

  const filteredCollectionLocationList = collectionLocationList.filter(
    (item) => item.id !== id
  );

  localStorage.setItem(
    collectionLocationKey,
    JSON.stringify(filteredCollectionLocationList)
  );
};
