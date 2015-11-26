---
aliases:
- /doc/release-notes/
- /meta/release-notes/
date: 2013-07-01
menu:
  secondary:
    parent: about
title: Release Notes
weight: 10
---

## **0.15.0**  November 25, 2015

The v0.15.0 Hugo release brings a lot of polish to Hugo. Exactly 6 months after
the 0.14 release, Hugo has seen massive growth and changes. Most notably, this
is Hugo's first release under the Apache 2.0 license. With this license change
we hope to expand the great community around Hugo and make it easier for our
many users to contribute.  This release represents over **377 contributions by
87 contributors** to the main Hugo repo and hundreds of improvements to the
libraries Hugo uses. Hugo also launched a [new theme
showcase](http://themes.gohugo.io) and participated in
[hacktoberfest](https://hacktoberfest.digitalocean.com).

Hugo now has:

* 6700 (+2700) stars on github
* 235 (+75) contributors
* 65 (+30) themes


**Template Improvements:** This release takes Hugo to a new level of speed and
usability. Considerable work has been done adding features and performance to
the template system which now has full support of Ace, Amber and Go Templates.

**Hugo Import:** Have a Jekyll site, but dreaming of porting it to Hugo? This
release introduces a new `hugo import jekyll`command that makes this easier
than ever.

**Performance Improvements:** Just when you thought Hugo couldn't get any faster,
Hugo continues to improve in speed while adding features. Notably Hugo 0.15
introduces the ability to render and serve directly from memory resulting in
30%+ lower render times.

Huge thanks to all who participated in this release. A special thanks to
[@bep](https://github.com/bep) who led the development of Hugo this release again,
[@anthonyfok](https://github.com/anthonyfok),
[@eparis](https://github.com/eparis),
[@tatsushid](https://github.com/tatsushid) and 
[@DigitalCraftsman](https://github.com/digitalcraftsman/)


## New features
* new `hugo import jekyll` command. [1469](https://github.com/spf13/hugo/pull/1469)
* The new `Param` convenience method on `Page` and `Node` can be used to get the most specific parameter value for a given key. [1462](https://github.com/spf13/hugo/issues/1462)
* Several new information elements have been added to `Page` and `Node`:
    * `RuneCount`: The number of [runes](http://blog.golang.org/strings) in the content, excluding any whitespace. This may be a good alternative to `.WordCount`  for Japanese and other CJK languages where a word-split by spaces makes no sense.  [1266](https://github.com/spf13/hugo/issues/1266)
	* `RawContent`: Raw Markdown as a string. One use case may be of embedding remarkjs.com slides.
	* `IsHome`: tells the truth about whether you're on the home page or not.

## Improvements
* `hugo server` now builds ~30%+ faster by rendering to memory instead of disk. To get the old behavior, start the server with `--renderToDisk=true`.
* Hugo now supports dynamic reloading of the config file when watching.
* We now use a custom-built `LazyFileReader` for reading file contents, which means we don't read media files in `/content` into memory anymore -- and file reading is now performed in parallel on multicore PCs. [1181](https://github.com/spf13/hugo/issues/1181)
* Hugo is now built with `Go 1.5` which, among many other improvements, have fixed the last known data race in Hugo. [917] (https://github.com/spf13/hugo/issues/917)
* Paginator now also supports page groups. [1274](https://github.com/spf13/hugo/issues/1274)
* Markdown improvements:
    * Hugo now supports GitHub-flavoured markdown code fences for highlighting for `md`-files (Blackfriday rendered markdown) and `mmark` files (MMark rendered markdown). [362] (https://github.com/spf13/hugo/issues/362)[1258](https://github.com/spf13/hugo/issues/1258)
    * Several new Blackfriday options are added:
        * Option to disable Blackfriday's `Smartypants`.
        * Option for Blackfriday to open links in a new window/tab. [1220](https://github.com/spf13/hugo/issues/1220)
        * Option to disable Blackfriday's LaTeX style dashes [1231](https://github.com/spf13/hugo/issues/1231)
        * Definition lists extension support.
* `Scratch` now has built-in `map` support.
* We now fall back to `link title` for the default page sort. [1299](https://github.com/spf13/hugo/issues/1299)
* Some notable new configuration options:
	*  `IgnoreFiles` can be set with a list of Regular Expressions that matches files to be ignored during build. [1189](https://github.com/spf13/hugo/issues/1189)
	* `PreserveTaxonomyNames`, when set to `true`, will preserve what you type as the taxonomy name both in the folders created and the taxonomy `key`, but it will be normalized for the URL.  [1180](https://github.com/spf13/hugo/issues/1180)
* `hugo gen` can now generate man files, bash auto complete and markdown documentation
* Hugo will now make suggestions when a command is mistyped
* Shortcodes now have a boolean `.IsNamedParams` property. [1597](https://github.com/spf13/hugo/pull/1597)

## New Template Features
* All template engines:
	* The new `dict` function that could be used to pass maps into a template.[1463](https://github.com/spf13/hugo/pull/1463)
	* The new `pluralize` and `singularize` template funcs.
	* The new `base64Decode` and `base64Encode` template funcs.
	* The `sort` template func now accepts field/key chaining arguments and pointer values. [1330](https://github.com/spf13/hugo/issues/1330)
	* Several fixes for `slicestr` and `substr`, most importantly, they now have full `utf-8`-support. [1190](https://github.com/spf13/hugo/issues/1190) [1333](https://github.com/spf13/hugo/issues/1333) [1347](https://github.com/spf13/hugo/issues/1347)
	* The new `last` template function allows the user to select the last `N` items of a slice. [1148](https://github.com/spf13/hugo/issues/1148)
	* The new `after` func allows the user to select the items after the `Nth` item. [1200] (https://github.com/spf13/hugo/pull/1200)
	* Add `time.Time` type support to the `where`, `ge`, `gt`, `le`, and `lt` template functions.
	* It is now possible to use constructs like `where Values ".Param.key" nil` to filter pages that doesn't have a particular parameter. [1232](https://github.com/spf13/hugo/issues/1232)
	* `getJSON`/`getCSV`: Add retry on invalid content. [1166](https://github.com/spf13/hugo/issues/1166)
	* 	The new `readDir` func lists local files. [1204](https://github.com/spf13/hugo/pull/1204)
    * The new `safeJS` function allows the embedding of content into JavaScript contexts in Go templates.
    * Get the main site RSS link from any page by accessing the `.Site.RSSLink` property. [1566](https://github.com/spf13/hugo/pull/1566)
* Ace templates:
	* Base templates now also works in themes. [1215](https://github.com/spf13/hugo/issues/1215).
	* And now also on Windows. [1178](https://github.com/spf13/hugo/issues/1178)
* Full support for Amber templates including all template functions.
* A built-in template for Google Analytics. [1505](https://github.com/spf13/hugo/pull/1505)
* Hugo is now shipped with new built-in shortcodes: [1576](https://github.com/spf13/hugo/issues/1576)
  * `youtube` for YouTube videos
  * `vimeo` for Vimeo videos
  * `gist` for GitHub gists
  * `tweet` for Twitter Tweets
  * `speakerdeck` for Speakerdeck slides


## Bugfixes
* Fix data races in page sorting and page reversal. These operations are now also cached. [1293](https://github.com/spf13/hugo/issues/1293)
* `page.HasMenuCurrent()` and `node.HasMenuCurrent()` now work correctly in multi-level nested menus.
* Support `Fish and Chips` style section titles. Previously, this would end up as  `Fish And Chips`. Now, the first character is made toupper, but the rest are preserved as-is. [1176](https://github.com/spf13/hugo/issues/1176)
* Hugo now removes superfluous p-tags around shortcodes. [1148](https://github.com/spf13/hugo/issues/1148)

## Notices
* `hugo server` will watch by default now.
* Some fields and methods were deprecated in `0.14`. These are now removed, so the error message isn't as friendly if you still use the old values. So please change:
	*   `getJson` to `getJSON`, `getCsv` to `getCSV`, `safeHtml` to
  `safeHTML`, `safeCss` to `safeCSS`, `safeUrl` to `safeURL`, `Url` to `URL`,
  `UrlPath` to `URLPath`, `BaseUrl` to `BaseURL`, `Recent` to `Pages`.

## **0.14.0** May 25, 2015

The v0.14.0 Hugo release brings of the most demanded features to Hugo. The
foundation of Hugo is stabilizing nicely and a lot of polish has been added.
We’ve expanded support for additional content types with support for AsciiDoc,
Restructured Text, HTML and Markdown. Some of these types depend on external
libraries as there does not currently exist native support in Go. We’ve tried
to make the experience as seamless as possible. Look for more improvements here
in upcoming releases.

A lot of work has been done to improve the user experience, with extra polish
to the Windows experience. Hugo errors are more helpful overall and Hugo now
can detect if it’s being run in Windows Explorer and provide additional
instructions to run it via the command prompt.

The Hugo community continues to grow. Hugo has over 4000 stars on github, 165
contributors, 35 themes and 1000s of happy users. It is now the 5th most
popular static site generator (by Stars) and has the 3rd largest contributor
community.

This release represents over **240 contributions by 36 contributors** to the main
Hugo codebase.

Big shout out to [@bep](https://github.com/bep) who led the development of Hugo
this release, [@anthonyfok](https://github.com/anthonyfok),
[@eparis](https://github.com/eparis),
[@SchumacherFM](https://github.com/SchumacherFM),
[@RickCogley](https://github.com/RickCogley) &
[@mdhender](https://github.com/mdhender) for their significant contributions
and [@tatsushid](https://github.com/tatsushid) for his continuous improvements
to the templates. Also a big thanks to all the theme creators. 11 new themes
have been added since last release and the [hugoThemes repo now has previews of
all of
them](https://github.com/spf13/hugoThemes/blob/master/README.md#theme-list).

Hugo also depends on a lot of other great projects. A big thanks to all of our dependencies including:
[cobra](https://github.com/spf13/cobra),
[viper](https://github.com/spf13/viper),
[blackfriday](https://github.com/russross/blackfriday),
[pflag](https://github.com/spf13/pflag),
[HugoThemes](https://github.com/spf13/hugothemes),
[BurntSushi](https://github.com/BurntSushi/toml),
[goYaml](https://github.com/go-yaml/yaml/tree/v2), and the Go standard library.

## New features
* Support for all file types in content directory.
    * If dedicated file type handler isn’t found it will be copied to the destination.
* Add `AsciiDoc` support using external helpers.
* Add experimental support for [`Mmark`](https://github.com/miekg/mmark) markdown processor
* Bash autocomplete support via `genautocomplete` command
* Add section menu support for a [Section Menu for "the Lazy Blogger"]({{< relref "extras/menus.md#section-menu-for-the-lazy-blogger" >}})
* Add support for `Ace` base templates
* Adding `RelativeURLs = true` to site config will now make all the relative URLs relative to the content root.
* New template functions:
  * `getenv`
  * The string functions `substr` and `slicestr`
  *`seq`, a sequence generator very similar to its Gnu counterpart
  * `absURL` and `relURL`, both of which takes the `BaseURL` setting into account

## Improvements
* Highlighting with `Pygments` is now cached to disk -- expect a major speed boost if you use it!
* More Pygments highlighting options, including `line numbers`
* Show help information to Windows users who try to double click on `hugo.exe`.
* Add `bind` flag to `hugo server` to set the interface to which the server will bind
* Add support for `canonifyurls` in `srcset`
* Add shortcode support for HTML (content) files
* Allow the same `shortcode` to  be used with or without inline content
* Configurable RSS output filename

## Bugfixes
* Fix panic with paginator and zero pages in result set.
* Fix crossrefs on Windows.
* Fix `eq` and `ne` template functions when used with a raw number combined with the result of `add`, `sub` etc.
* Fix paginator with uglyurls
* Fix [#998](https://github.com/spf13/hugo/issues/988), supporting UTF8 characters in Permalinks.

## Notices
* To get variable and function names in line with the rest of the Go community,
  a set of variable and function names has been deprecated: These will still
  work in 0.14, but will be removed in 0.15. What to do should be obvious by
  the build log; `getJson` to `getJSON`, `getCsv` to `getCSV`, `safeHtml` to
  `safeHTML`, `safeCss` to `safeCSS`, `safeUrl` to `safeURL`, `Url` to `URL`,
  `UrlPath` to `URLPath`, `BaseUrl` to `BaseURL`, `Recent` to `Pages`,
  `Indexes` to `Taxonomies`.

## **0.13.0** Feb 21, 2015

The v0.13.0 release is the largest Hugo release to date. The release introduced
some long sought after features (pagination, sequencing, data loading, tons of
template improvements) as well as major internal improvements. In addition to
the code changes, the Hugo community has grown significantly and now has over
3000 stars on github, 134 contributors, 24 themes and 1000s of happy users.

This release represents **448 contributions by 65 contributors**

A special shout out to [@bep](https://github.com/bep) and
[@anthonyfok](https://github.com/anthonyfok) for their new role as Hugo
maintainers and their tremendous contributions this release.

### New major features
* Support for [data files](/extras/datafiles/) in [YAML](http://yaml.org/),
  [JSON](http://www.json.org/), or [TOML](https://github.com/toml-lang/toml)
  located in the `data` directory ([#885][])
* Support for [dynamic content](/extras/dynamiccontent/) by loading JSON & CSV
  from remote sources via GetJson and GetCsv in short codes or other layout
  files ([#748][])
* [Pagination support](/extras/pagination/) for home page, sections and
  taxonomies ([#750][])
* Universal sequencing support
    * A new, generic Next/Prev functionality is added to all lists of pages
      (sections, taxonomies, etc.)
    * Add in-section [Next/Prev](/templates/variables/) content pointers
* `Scratch` -- [a "scratchpad"](/extras/scratch) for your node- and page-scoped
  variables
* [Cross Reference](/extras/crossreferences/) support to easily link documents
  together with the ref and relref shortcodes.
* [Ace](http://ace.yoss.si/) template engine support ([#541][])
* A new [shortcode](/extras/shortcodes/) token of `{{</* */>}}` (raw HTML)
  alongside the existing `{{%/* */%}}` (Markdown)
* A top level `Hugo` variable (on Page & Node) is added with various build
  information
* Several new ways to order and group content:
    * `ByPublishDate`
    * `GroupByPublishDate(format, order)`
    * `GroupByParam(key, order)`
    * `GroupByParamDate(key, format, order)`
* Hugo has undergone a major refactoring, with a new handler system and a
  generic file system. This sounds and is technical, but will pave the way for
  new features and make Hugo even speedier

### Notable enhancements to existing features

* The [shortcode](/extras/shortcodes/) handling is rewritten for speed and
  better error messages.
* Several improvements to the [template functions](/templates/functions/):
    * `where` is now even more powerful and accepts SQL-like syntax with the
      operators `==`, `eq`; `!=`, `<>`, `ne`; `>=`, `ge`; `>`, `gt`; `<=`,
      `le`; `<`, `lt`; `in`, `not in`
    * `where` template function now also accepts dot chaining key argument
      (e.g. `"Params.foo.bar"`)
* New template functions:
    * `apply`
    * `chomp`
    * `delimit`
    * `sort`
    * `markdownify`
    * `in` and `intersect`
    * `trim`
    * `replace`
    * `dateFormat`
* Several [configurable improvements related to Markdown
  rendering](/overview/configuration/#configure-blackfriday-rendering:a66b35d20295cb764719ac8bd35837ec):
    * Configuration of footnote rendering
    * Optional support for smart angled quotes, e.g. `"Hugo"` → «Hugo»
    * Enable descriptive header IDs
* URLs in XML output is now correctly canonified ([#725][], [#728][], and part
  of [#789][])

### Other improvements

* Internal change to use byte buffer pool significantly lowering memory usage
  and providing measurable performance improvements overall
* Changes to docs:
    * A new [Troubleshooting](/troubleshooting/overview/) section is added
    * It's now searchable through Google Custom Search ([#753][])
    * Some new great tutorials:
        * [Automated deployments with
          Wercker](/tutorials/automated-deployments/)
        * [Creating a new theme](/tutorials/creating-a-new-theme/)
* [`hugo new`](/content/archetypes/) now copies the content in addition to the front matter
* Improved unit test coverage
* Fixed a lot of Windows-related path issues
* Improved error messages for template and rendering errors
* Enabled soft LiveReload of CSS and images ([#490][])
* Various fixes in RSS feed generation ([#789][])
* `HasMenuCurrent` and `IsMenuCurrent` is now supported on Nodes
* A bunch of [bug fixes](https://github.com/spf13/hugo/commits/master)

[#490]: https://github.com/spf13/hugo/pull/490 "Pull Request #490: Livereload CSS and images without browser refresh"
[#541]: https://github.com/spf13/hugo/pull/541 "Pull Request #541: Add Ace template engine support"
[#725]: https://github.com/spf13/hugo/issues/725 "Issue #725: CanonifyUrls does not canonicalize urls in RSS"
[#728]: https://github.com/spf13/hugo/issues/728 "Pull Request #728: Add ability to canonify URLs in rendered XML output."
[#748]: https://github.com/spf13/hugo/issues/748 "Feature: GetJson and GetJson in short codes or other layout files"
[#750]: https://github.com/spf13/hugo/issues/750 "Pull Request: Add pagination support for home page, sections and taxonomies"
[#753]: https://github.com/spf13/hugo/issues/753 "Add search to documentation"
[#789]: https://github.com/spf13/hugo/issues/789 "Issue #789: RSS feeds do not validate"
[#885]: https://github.com/spf13/hugo/issues/885 "Feature/datadir"


## **0.12.0** Sept 1, 2014

A lot has happened since Hugo v0.11.0 was released. Most of the work has been
focused on polishing the theme engine and adding critical functionality to the
templates.

This release represents over 90 code commits from 28 different contributors.

  * 10 [new themes](https://github.com/spf13/hugoThemes) created by the community
  * Fully themable [Partials](/templates/partials/)
  * [404 template](/templates/404/) support in themes
  * [Shortcode](/extras/shortcodes/) support in themes
  * [Views](/templates/views/) support in themes
  * Inner [shortcode](/extras/shortcodes/) content now treated as Markdown
  * Support for header ids in Markdown (# Header {#myid})
  * [Where](/templates/list/) template function to filter lists of content, taxonomies, etc.
  * [GroupBy](/templates/list/) & [GroupByDate](/templates/list/) methods to group pages
  * Taxonomy [pages list](/taxonomies/methods/) now sortable, filterable, limitable & groupable
  * General cleanup to taxonomies & documentation to make it more clear and consistent
  * [Showcase](/showcase/) returned and has been expanded
  * Pretty links now always have trailing slashes
  * [BaseUrl](/overview/configuration/) can now include a subdirectory
  * Better feedback about draft & future post rendering
  * A variety of improvements to [the website](http://gohugo.io/)

## **0.11.0** May 28, 2014

This release represents over 110 code commits from 29 different contributors.

  * Considerably faster... about 3 - 4x faster on average
  * [LiveReload](/extras/livereload/). Hugo will automatically reload the browser when the build is complete
  * Theme engine w/[Theme Repository](https://github.com/spf13/hugoThemes)
  * [Menu system](/extras/menus/) with support for active page
  * [Builders](/extras/builders/) to quickly create a new site, content or theme
  * [XML sitemap](/templates/sitemap/) generation
  * [Integrated Disqus](/extras/comments/) support
  * Streamlined [template organization](/templates/overview/)
  * [Brand new docs site](http://gohugo.io/)
  * Support for publishDate which allows for posts to be dated in the future
  * More [sort](/content/ordering/) options
  * Logging support
  * Much better error handling
  * More informative verbose output
  * Renamed Indexes > [Taxonomies](/taxonomies/overview/)
  * Renamed Chrome > [Partials](/templates/partials/)

## **0.10.0** March 1, 2014

This release represents over 110 code commits from 29 different contributors.

  * [Syntax highlighting](/extras/highlighting/) powered by pygments (**slow**)
  * Ability to [sort content](/content/ordering/) many more ways
  * Automatic [table of contents](/extras/toc/) generation
  * Support for Unicode URLs, aliases and indexes
  * Configurable per-section [permalink](/extras/permalinks/) pattern support
  * Support for [paired shortcodes](/extras/shortcodes/)
  * Shipping with some [shortcodes](/extras/shortcodes/) (highlight & figure)
  * Adding [canonify](/extras/urls/) option to keep urls relative
  * A bunch of [additional template functions](/layout/functions/)
  * Watching very large sites now works on Mac
  * RSS generation improved. Limited to 50 items by default, can limit further in [template](/layout/rss/)
  * Boolean params now supported in [frontmatter](/content/front-matter/)
  * Launched website [showcase](/showcase/). Show off your own hugo site!
  * A bunch of [bug fixes](https://github.com/spf13/hugo/commits/master)

## **0.9.0** November 15, 2013

This release represents over 220 code commits from 22 different contributors.

  * New [command based interface](/overview/usage/) similar to git (`hugo server -s ./`)
  * Amber template support
  * [Aliases](/extras/aliases/) (redirects)
  * Support for top level pages (in addition to homepage)
  * Complete overhaul of the documentation site
  * Full Windows support
  * Better index support including [ordering by content weight](/content/ordering/)
  * Add params to site config, available in .Site.Params from templates
  * Friendlier json support
  * Support for html & xml content (with frontmatter support)
  * Support for [summary](/content/summaries/) content divider (<code>&lt;!&#45;&#45;more&#45;&#45;&gt;</code>)
  * HTML in [summary](/content/summaries/) (when using divider)
  * Added ["Minutes to Read"](/layout/variables/) functionality
  * Support for a custom 404 page
  * Cleanup of how content organization is handled
  * Loads of unit and performance tests
  * Integration with travis ci
  * Static directory now watched and copied on any addition or modification
  * Support for relative permalinks
  * Fixed watching being triggered multiple times for the same event
  * Watch now ignores temp files (as created by Vim)
  * Configurable number of posts on [homepage](/layout/homepage/)
  * [Front matter](/content/front-matter/) supports multiple types (int, string, date, float)
  * Indexes can now use a default template
  * Addition of truncated bool to content to determine if should show 'more' link
  * Support for [linkTitles](/layout/variables/)
  * Better handling of most errors with directions on how to resolve
  * Support for more date / time formats
  * Support for go 1.2
  * Support for `first` in templates

## **0.8.0** August 2, 2013

This release represents over 65 code commits from 6 different contributors.

  * Added support for pretty urls (filename/index.html vs filename.html)
  * Hugo supports a destination directory
  * Will efficiently sync content in static to destination directory
  * Cleaned up options.. now with support for short and long options
  * Added support for TOML
  * Added support for YAML
  * Added support for Previous & Next
  * Added support for indexes for the indexes
  * Better Windows compatibility
  * Support for series
  * Adding verbose output
  * Loads of bugfixes

## **0.7.0** July 4, 2013
  * Hugo now includes a simple server
  * First public release

## **0.6.0** July 2, 2013
  * Hugo includes an example documentation site which it builds

## **0.5.0** June 25, 2013
  * Hugo is quite usable and able to build spf13.com
