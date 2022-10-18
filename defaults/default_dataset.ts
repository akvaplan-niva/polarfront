import { BasicDatasetInformation } from "dataverse/deno/@types/basic_dataset.ts";
import { DatasetSubjects } from "dataverse/deno/@types/dataset_subjects.ts";
import { DatasetUtil } from "dataverse/dataset/util.js";

const defaultAuthor = {
  fullname: "PolarFront Consortium",
  affiliation: "",
};
const defaultContact = {
  fullname: "Paul E. Renaud",
  email: "per@akvaplan.niva.no",
};

const defaultDesc = {
  text: "Abstract is currently missing for this PolarFront dataset",
  date: new Date().toJSON().split("T")[0],
};

const defaultLicense = "CC0";

const keywordField = {
  typeName: "keyword",
  multiple: true,
  typeClass: "compound",
  value: [
    {
      keywordValue: {
        typeName: "keywordValue",
        multiple: false,
        typeClass: "primitive",
        value: "PolarFront",
      },
    },
  ],
};

const timePeriodField = {
  typeName: "timePeriodCovered",
  multiple: true,
  typeClass: "compound",
  value: [
    {
      timePeriodCoveredStart: {
        typeName: "timePeriodCoveredStart",
        multiple: false,
        typeClass: "primitive",
        value: "2021-05-01",
      },
      timePeriodCoveredEnd: {
        typeName: "timePeriodCoveredEnd",
        multiple: false,
        typeClass: "primitive",
        value: "2023-12-01",
      },
    },
  ],
};

const dateOfCollectionField = {
  typeName: "dateOfCollection",
  multiple: true,
  typeClass: "compound",
  value: [
    {
      dateOfCollectionStart: {
        typeName: "dateOfCollectionStart",
        multiple: false,
        typeClass: "primitive",
        value: "2021-05-01",
      },
      dateOfCollectionEnd: {
        typeName: "dateOfCollectionEnd",
        multiple: false,
        typeClass: "primitive",
        value: "2023-12-01",
      },
    },
  ],
};

const geospatial = {
  displayName: "Geospatial Metadata",
  fields: [
    {
      typeName: "geographicCoverage",
      multiple: true,
      typeClass: "compound",
      value: [
        {
          otherGeographicCoverage: {
            typeName: "otherGeographicCoverage",
            multiple: false,
            typeClass: "primitive",
            value: "Barents Sea",
          },
        },
      ],
    },
    {
      typeName: "geographicBoundingBox",
      multiple: true,
      typeClass: "compound",
      value: [
        {
          westLongitude: {
            typeName: "westLongitude",
            multiple: false,
            typeClass: "primitive",
            value: "18",
          },
          eastLongitude: {
            typeName: "eastLongitude",
            multiple: false,
            typeClass: "primitive",
            value: "36",
          },
          northLongitude: {
            typeName: "northLongitude",
            multiple: false,
            typeClass: "primitive",
            value: "79",
          },
          southLongitude: {
            typeName: "southLongitude",
            multiple: false,
            typeClass: "primitive",
            value: "69",
          },
        },
      ],
    },
  ],
};

export const defaultBasicDataset = (): BasicDatasetInformation => ({
  title: `PolarFront dataset created ${new Date().toJSON()}`,
  descriptions: [defaultDesc],
  authors: [defaultAuthor],
  contact: [defaultContact],
  subject: [DatasetSubjects.EARTH_AND_ENVIRONMENTAL_SCIENCES],
});

export const payloadFromBasicDataset = (basic: BasicDatasetInformation) => {
  const {
    datasetVersion: { metadataBlocks },
  } = structuredClone(DatasetUtil.mapBasicDatasetInformation(basic));
  metadataBlocks.citation.fields.push(timePeriodField);
  metadataBlocks.citation.fields.push(dateOfCollectionField);
  metadataBlocks.citation.fields.push(keywordField);

  metadataBlocks.geospatial = geospatial;
  return {
    datasetVersion: { metadataBlocks, license: defaultLicense },
  };
};

export const defaultPayload = (
  dataset: { contact?: any; doi?: any; title?: any; text?: any },
) => {
  const { doi, title, text } = dataset;
  const date = new Date().toJSON().split("T")[0];
  const descriptions = [{ text, date }];

  const defaultBasic = defaultBasicDataset();

  const contact = dataset?.contact?.length > 0
    ? dataset.contact
    : defaultBasic.contact;

  const basicDataset = {
    ...defaultBasic,
    title,
    descriptions,
    contact,
  };
  const payload = payloadFromBasicDataset(basicDataset);
  return payload;
};
