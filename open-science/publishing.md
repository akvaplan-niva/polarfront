# Guide to self-publishing PolarFront data and results on Zenodo

## Introduction

As part of [PolarFront](https://akvaplan.no/en/project/polarfront)'s open
science policy, data and research outputs are published using open source
software.

This document explains how to publish PolarFront research outputs on
[Zenodo](https://zenodo.org/) using [Deno](https://deno.com/) command line
tools.

For more context, see
[Best practices for self-publishing PolarFront research as citable open access](./best-practices-oa.md)

## Setup

- Install [Deno](https://deno.land)
- Obtain [access token](https://zenodo.org/account/settings/applications/)
- Install [invenio_rdm]() command line tool
- Set env `invenio_rdm_base`="https://zenodo.org" and `invenio_rdm_token`

Test setup

```sh
invenio_rdm config
```

```json
{ … "token":"…","base":"https://zenodo.org/"}
```

## Create (draft)

Create draft with PolarFront [default]() metadata

```sh
deno task zenodo_create '{"publication_date": "2023-10-31", "title": "Moving vessel profiler data from PolarFront 2023-08 cruise"}' dataset/2023-08_ship_mvp
cd dataset/2023-08_ship_mvp
ln -s /media/che/crucial_x8/polarfront/2023-08/MVP files
ls # ls: files  invenio.json
cd files && md5sum * > md5.txt && cd .. && mv files/md5.txt .
# less invenio.json: {"id":"10057437","created":"2023-10-31T10:12:08.547866+00:00"…
```

# Upload files

Run `invenio_rdm upload`. Notice: It's safe (and recommended) to run multiple
times to ensure that a complete files replica is created in the remote
repository.

```sh
~/akvaplan-niva/polarfront/dataset/2023-08_ship_mvp$ invenio_rdm upload
```

```js
Starting InvenioRDM upload for 10057437 on https://zenodo.org/ from /media/che/Crucial X8/polarfront/2023-08/MVP (pool limit: 1) { id: "10057437", local: 4224, remote: 0 }
200 https://zenodo.org/api/records/10057437/draft/files/MVP_2023-08-17_021315.asc/content { size: 16056, duration: 1144, mbs: 0.014034965034965036 }
```
