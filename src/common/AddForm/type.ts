import * as yup from "yup";

export const schema = yup
  .object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    age: yup.string().required(),
    gender: yup.string().required(),
    state: yup.string(),
    lga: yup.string(),
    hair: yup.string(),
    complexion: yup.string(),
    build: yup.string(),
    foundAd: yup.string(),
    missingAd: yup.string(),
  })
  .required();

export type FormAddProp = {
  firstName: string;
  lastName: string;
  middleName: string;
  age: string;
  gender: string;
  complexion: string;
  hair: string;
  build: string;
  foundAd: string;
  missingAd: string;
};

// skin-type sorting
export const skinColor = ["Dark", "Fair", "Very dark", "Very fair"].sort(
  (a, b) => (a > b ? 1 : -1),
);

export const foundInputValue = ["Found Dead Body", "Found Missing Person"];

// hair-type sorting
export const hairType = [
  "Side burns",
  "Normal grey",
  "Normal black",
  "Bald full",
  "Hair curly/wavy",
  "Hair bleached/dyed",
  "Bald partial",
  "Long hair",
  "Straight hair",
  "White hair",
  "Normal black/grey",
  "Wig use",
  "Short hair",
].sort((a, b) => (a > b ? 1 : -1));

// body-type sorting
export const bodyType = [
  "Normal (muscular)",
  "Stocky",
  "Thin (lanky)",
  "Handicapped",
  "Fat (stout/strong)",
].sort((a, b) => (a > b ? 1 : -1));

export type PropTran = {
  reference: string;
  status: string;
  trans: string;
  message: string;
  transacton: string;
};

export type FasProp = {
  foundPersonType: string;
  firstName: string;
  lastName: string;
  middleName: string;
  gender: string;
  height: string;
  weight: string;
  skin: string;
  hair: string;
  body: string;
  personAd: string;
  personSt: string;
  personLga: string;
  father: string;
  mother: string;
  sibling: string;
  parentAd: string;
  issueDate: string;
  issueState: string;
  issueLga: string;
  issueAd: string;
  poName: string;
  poState: string;
  poLga: string;
  poAd: string;
  poNumber: string;
  caseNumber: string;
  stationNumber: string;
  dateReport: string;
  posterFirstName: string;
  posterLastName: string;
  posterRelationship: string;
  posterEmail: string;
  posterOTP: string;
};

export type FormPageProp = {
  formType: string;
  setData: React.Dispatch<React.SetStateAction<FasProp>>;
};