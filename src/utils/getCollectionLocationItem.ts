import { getCollectionLocationList } from "./getCollectionLocationList";

export const getCollectionLocationItem = (id: string) => {
  const collectionLocationList = getCollectionLocationList();

  return collectionLocationList.find((locationItem) => locationItem.id === id);
};
