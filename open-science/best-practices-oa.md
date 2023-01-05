# Best practices for self-publishing PolarFront research as citable open access

> _TLDR_–Make sure your work is _citable_ by including the big five metadata
> items (author, year, title, publisher, DOI). Be explicit about being _open
> access_ by linking to or including the license.

## Policies

### Open science

[PolarFront](https://prosjektbanken.forskningsradet.no/en/project/FORISS/326635)
is a self-proclaimed open science project. When we are self-publishing works
from the project, we should strive to follow best practices in open access
publishing, following the guidelines of partner
[UiT](https://en.uit.no/publishing) and public funder
[RCN](https://www.forskningsradet.no/en/Adviser-research-policy/open-science/plan-s/)

### Scientific articles

This document covers self-publishing, but please note that peer-reviewed
articles from PolarFront must be published as open access, per RCN policy linked
above.

### Data

PolarFront is self-publishing all of its data in a dedicated Zenodo community:
https://zenodo.org/communities/polarfront.

By default PolarFront data files are declared free of copyright restrictions, by
applying the [CC0](https://creativecommons.org/publicdomain/mark/1.0/) public
domain dedication.

### Other works

Other research output, like cruise reports, presentations, and multimedia should
also be archived under https://zenodo.org/communities/polarfront.

For these works, the default open access license is
[Creative Commons Attribution 4.0](https://creativecommons.org/licenses/by/4.0/)
(CC BY 4.0).

### Software

When possible, processing software should be published as free software in _open
repositories_ in a distributed source code version control system like
[GitHub](https://github.com/) or [GitLab](https://gitlab.com/).

## Guidelines

### Citability

For others to cite a PolarFront work, they must be provided with clear and
concise metadata.

These five metadata items should always be present in your work:

- Author(s)
- Year
- Title
- Publisher
- DOI

**How?** A common way to ensure citability is to include a "How to cite?"
section like:

```
Malin Daase (ed.) (2022). PolarFront May 2022 Cruise Report. Zenodo. https://doi.org/10.5281/zenodo.7128747
```

### Explicit open access

Be explicit about the open access status of your work by providing a license.

For software, this is commonly done by providing the license in a `LICENSE` text
file.

For other works, the best practice is to provide the license name/code and a
direct link the license URL.

### Recommended extras

In addition, consider adding the following to your published work

- First published ([ISO date](https://xkcd.com/1179/))
- ISO date of current version
- Version identifier
- Changelog

Also remember to

- Cite other/relevant PolarFront works by DOI
- Include Research Council of Norway funding grant #326635.
