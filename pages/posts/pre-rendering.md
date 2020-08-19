---
tite: 'Two Forms of Pre-rendering'
date: '2020-01-01'
---

Next.js has two forms of pre-rendering: **Static Generation** and **Server-Side Rendering**. The differnce is in **when** it generates the HTML for a page.

- **Static Generation** is the pre-rendering method that generates the HTML at **build time**. The pre-renderd HTML is then _reused_ on each request.
- **Server-side Rendering** is the pre-rendering methond that genrates the HTML on **each request**.

Importantly, Next.js lets you **choose** which pre-rendring form to use for each page. You can create a "hybrid" Next.js app by using Static Generation for most pages and using Server-side Rendering for ohters.