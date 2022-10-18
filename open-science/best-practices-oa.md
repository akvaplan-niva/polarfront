# Best practices for self-publishing PolarFront research as citable open access

> _TLDR_–Make sure your work is _citable_ by including the big five metadata
> items. Be explicit about being _open access_ by linking to or including the
> license.

## Policies

**Open science**
[PolarFront](https://prosjektbanken.forskningsradet.no/en/project/FORISS/326635)
is a self-proclaimed open science project. When we are self-publishing works
from the project, we should strive to follow best practices in open access
publishing, following the guidelines of partner
[UiT](https://en.uit.no/publishing) and funder
[RCN](https://www.forskningsradet.no/en/Adviser-research-policy/open-science/plan-s/)

**Scientific articles** This document covers self-publishing, but please note
that peer-reviewed articles from PolarFront must be published as open access,
per RCN policy linked above.

**Data** PolarFront is publishing all of its _data_ in certified repository in
DataverseNO: https://dataverse.no/dataverse/polarfront.

The default
[Dataverse policy](https://dataverse.org/best-practices/dataverse-community-norms)
is marking uploaded files as public domain, ie. declared free of copyright
restrictions, by applying the
[CC0](https://creativecommons.org/publicdomain/mark/1.0/) public domain
dedication.

**Other works** Other research output, like cruise reports, presentations, and
multimedia should be archived under https://zenodo.org/communities/polarfront.

In Zenodo, the default open access license is
[Creative Commons Attribution 4.0](https://creativecommons.org/licenses/by/4.0/)
(CC BY 4.0).

**Software** When possible, processing software programs should be put in _open
repositories_ in a distributed source code version control system like
[GitHub](https://github.com/) or [GitLab](https://gitlab.com/).

**DOI** In order to publish a work and issue a DOI the following metadata items
must be present:

- Author(s)
- Year
- Title
- Publisher

## Guidelines

### Citability

**Big five**

For others to cite a PolarFront work, they must be provided with clear and
concise metadata. These five metadata items should always be present inside your
work:

`Author(s). Year. Title. Publisher. DOI`.

**How?** A common way to ensure citability is to include a "How to cite?"
section like:

```
Paul E. Renaud (2021). Welcome to the Polar Front project. Zenodo. https://doi.org/10.5281/zenodo.5727191
```

### Explicit open access

Be explicit about the open access status of your work by providing a license.

For software, this is commonly done by providing the license in a `license` text
file.

For other works, the best practice is to provide the license name and/or code
and a direct link the license URL.

**Example 1** (text)

License:
[Creative Commons Attribution 4.0 International](https://creativecommons.org/licenses/by/4.0/)
(CC BY 4.0).

**Example 2** (html)

```html
<span>This work is licensed under a
<a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative
Commons Attribution 4.0 International
License</a><br><a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="License Icon" style="border-width:0" src="https://i.creativecommons.org/l/by/4.0/88x31.png"></a>.</span>
```

---

<span>This work is licensed under a
<a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative
Commons Attribution 4.0 International
License</a><br><a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="License Icon" style="border-width:0" src="https://i.creativecommons.org/l/by/4.0/88x31.png"></a>.</span>

---

### Recommended extras

In addition, consider adding the following to your published work

- First published ([ISO date](https://xkcd.com/1179/))
- ISO date of current version
- Version identifier
- Changelog

Also remember to

- Cite other/relevant PolarFront works by DOI
- Link to [PolarFront@DataverseNO](https://dataverse.no/dataverse/polarfront)
  data repository, or cite datasets by DOI.
- Include Research Council of Norway funding grant #326635.
