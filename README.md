# SciVis webpage
The webpage is built using [Jekyll](https://jekyllrb.com/docs) as a static webpage generator.  Jekyll takes Markdown/HTML hybrid files that are annotated with a YAML front matter and generates static webpages that are then served to the webpage visitor.
Jekyll itself uses [Liquid](https://jekyllrb.com/docs) as a templating language.

If you want to try some bigger changes without directly committing them, you can [build the webpage locally](https://docs.github.com/en/github/working-with-github-pages/testing-your-github-pages-site-locally-with-jekyll).  Unfortunately, the Jekyll infrastructure doesn't work well on Windows, but it runs very smoothly on the Windows Subsystem for Linux [install](https://docs.microsoft.com/en-us/windows/wsl/install-win10).  Then, to install it on an Ubuntu system:
1. `sudo apt-get install ruby-full build-essential zlib1g-dev`
1. `sudo gem install jekyll bundler`
1. << check out repository and `cd` into it >>
1. `bundle install` (providing a specific folder or running `bundle` with elevated priviledges both work)
1. `bundler exec jekyll serve --conf _config.yml,_config_dev.yml`

## How to add new publications
1. Add a new `md` file to the `_publications` folder.  The file name must have the form *yyyy*_*firstauthor*_*secondauthor*_*workingtitle*.md
1. The contents of the file are Markdown with a YAML header.  The header must contain the following information.  Almost all values, with the exception of `scivis_authors`, and `year` are strings
    * `title`:  The title of the paper
    * `authors`:  The human-readable list of authors as they appear on the paper
    * `scivis_authors`:  An array of LiU ids for the authors that belong to the SciVis group
    * `venue`:  The venue in which the paper was published
    * `year`:  The year in which the paper was published
    * `date`:  publication date in ISO format (YYYY-MM-DD), used for sorting
    * `doi`:  The DOI number for the paper *optional*
    * `pdf`:  A link to the author-copy of the paper *optional*
    * `bib`:  A link to a bibfile that other authors can use to cite your paper *optional*
    * `thumbnail`:  A thumbnail for the paper in 16:9 aspect ratio *optional*
    * `link`:  A generic link that can be used to point to the source code, a project page, etc *optional*
    * `link_title`:  The text label for the provided `link`.  If this value is not provided, the default value "Link" is used
    * `video`:  A link to a video showing the paper contents *optional*
    * `annotation`:  An optional annotation that provides additional unique information about the paper, for example awards, etc *optional*
    * After the front matter, the file should contain a 1-2 sentence description of the paper that is used to entice visitors to read the paper

## Exjobb
1. An exjobb can have one of the follwing states: `state: open | closed | ongoing | finished`

# Previous links to read about the website generator, the theme, etc
 - Jekyll: https://jekyllrb.com/docs
 - Theme: Feeling Responsive (http://phlow.github.io/feeling-responsive/, [Getting Started](https://www.youtube.com/embed/3b5zCFSmVvU))
