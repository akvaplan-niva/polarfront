//import { InvenioRdmRecord } from "invenio_rdm/types.ts";
import { logo400WBase64 } from "../logo.ts";

const open = `<!doctype html>
<html lang="en">`;
const head = `<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>PolarFront open access tracker</title>
  <style>html {
    font-family: sans-serif;
  }</style>
</head>`;
const header = `<header>
    <img alt="PolarFront logo" title="PolarFront" width="400" src="data:image/png;base64,${logo400WBase64}">
    <h1>open access research tracker</h1>
    <nav></nav>
</header>`;
const footer = `<footer><pre></pre></footer>`;
const close = "</html>";

const buildGroup = (group: InvenioRdmRecord[]) =>
  group.map((
    {
      doi,
      doi_url,
      metadata: { title, publication_date, resource_type, ...meta },
    },
  ) =>
    `<p><span title="${publication_date}">${title}</span>. <a href="${doi_url}">${doi_url}</a></p>`
  );

export const buildhtml = ({ hits }) => {
  const _main = [`<main>`];

  _main.push(`<section id="publications">
  <h2>publications</h2>`);
  for (const record of buildGroup(hits?.filter(resourceType("publication")))) {
    _main.push(record);
  }
  _main.push("</section>");

  _main.push(`<section id="presentations">
  <h2>presentations</h2>`);
  for (const record of buildGroup(hits?.filter(resourceType("presentation")))) {
    _main.push(record);
  }
  _main.push("</section>");

  _main.push(`<section id="dataset">
    <h2>datasets</h2>`);
  for (const record of buildGroup(hits?.filter(resourceType("dataset")))) {
    _main.push(record);
  }
  _main.push("</section>");

  const main = _main.join("");

  return [open, head, header, main, footer, close].join("");
};
const resourceType = (t) => ({ metadata: { resource_type: { type } } }) =>
  t === type;

export const htmlResponse = (searchR) => {
  const html = buildhtml(searchR);
  return new Response(html, {
    headers: [["content-type", "text/html; charset=utf8"]],
  });
};
