---
layout: page
permalink: /publications/
title: publications
description: Conference papers and technical reports.
nav: true
nav_order: 3
---

<!-- _pages/publications.md -->

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}

<div class="publications">

{% bibliography %}

</div>

<div class="page-nav" style="display: flex; justify-content: space-between; gap: 1rem; margin: 3rem 0 1rem">
  <a class="btn btn-sm z-depth-0" role="button" href="{{ '/achievements/' | relative_url }}">← Previous: Achievements</a>
  <a class="btn btn-sm z-depth-0" role="button" href="{{ '/repositories/' | relative_url }}">Next: Repositories →</a>
</div>
