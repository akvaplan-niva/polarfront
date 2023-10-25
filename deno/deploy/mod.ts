import { htmlResponse } from "./html.ts";

// import { GET } from "invenio_rdm/fetch.ts";
// import { getEnvConfig } from "invenio_rdm/env.ts";
// import type { InvenioRdmConfig } from "invenio_rdm/types.ts";

const getPolarFrontRecordsAndDrafts = async (
  { config }: { config: InvenioRdmConfig },
) => {
  const r = await fetch(
    "https://zenodo.org/api/records?q=&communities=polarfront&size=1000&sort=publication_date",
    //{ config },
  );
  const { hits: { hits, total }, aggregations } = await r.json();
  return { hits, aggregations, total };
};

const config = {}; //getEnvConfig();

const handler = async () => {
  const searchResults = await getPolarFrontRecordsAndDrafts({ config });
  return htmlResponse(searchResults);
};

if (import.meta.main) {
  Deno.serve(handler);
}
