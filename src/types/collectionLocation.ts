export enum EWasteTypes {
  glass = "Vidro",
  metal = "Metal",
  paper = "Papel",
  plastic = "Plástico",
  organic = "Orgânico",
  batteries = "Baterias",
  others = "Outros",
}

export interface ICollectionLocationAddress {
  postalCode: string;
  country: string;
  city: string;
  state: string;
  street: string;
  addressNumber: string;
  neighborhood: string;
  complement?: string;
}

export interface ICollectionLocation {
  id: string;
  locationName: string;
  locationDescription: string;
  userIdentify: string;
  typesWasteAccepted: string;
  address: ICollectionLocationAddress;
}
