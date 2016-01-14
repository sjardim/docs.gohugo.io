---
aliases:
- /doc/templates/
- /layout/templates/
- /layout/overview/
date: 2013-07-01
linktitle: Overview
menu:
  main:
    parent: layout
next: /templates/go-templates
prev: /themes/creation
title: Hugo Templates
weight: 10
toc: true
---

Hugo uses the excellent Go html/template library for its template engine.
It is an extremely lightweight engine that provides a very small amount of
logic. In our experience it is just the right amount of logic to be able
to create a good static website.

While Hugo has a number of different template roles, most complete
websites can be built using just a small number of template files.
Please don’t be afraid of the variety of different template roles. They
enable Hugo to build very complicated sites. Most sites will only
need to create a [/layouts/\_default/single.html](/templates/content/) & [/layouts/\_default/list.html](/templates/list/)

If you are new to Go's templates, the [Go Template Primer](/layout/go-templates/)
is a great place to start.

If you are familiar with Go’s templates, Hugo provides some [additional
template functions](/templates/functions/) and [variables](/templates/variables/) you will want to be familiar
with.

## Primary Template roles

There are 3 primary kinds of templates that Hugo works with.

### Single
Render a [single piece](/templates/content/) of content

### List
Page that [list multiple pieces](/templates/list/) of content

### Homepage
The [homepage](/templates/homepage/) of your site

## Supporting Template Roles (optional)

Hugo also has additional kinds of templates all of which are optional

### Partial Templates
[Common page parts](/templates/partials/) to be included in the above mentioned templates

### Content Views
[Different ways of rendering a](/templates/views/) (single) content type

### Taxonomy Terms
A [list of the terms](/templates/terms/) used for a specific taxonomy, e.g. a Tag cloud

## Other Templates (generally unnecessary)

### RSS
Used to render all [RSS](/templates/rss/) documents

### Sitemap
Used to render the [XML sitemap](/templates/sitemap/)

### 404
This template will create a [404.html page](/templates/404/) used when hosting on GitHub Pages