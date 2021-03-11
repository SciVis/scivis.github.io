# SciVis webpage
The webpage is built using [Jekyll](https://jekyllrb.com/docs) as a static webpage generator.  Jekyll takes Markdown/HTML hybrid files that are annotated with a YAML front matter and generates static webpages that are then served to the webpage visitor.

Jekyll itself uses [Liquid](https://jekyllrb.com/docs) as a templating language.

## How to add new publications
1. Add a new `md` file to the `_publications` folder.  The file name must have the form *yyyy*_*firstauthor*_*secondauthor*_*workingtitle*.md
1. The contents of the file are Markdown with a YAML header.  The header must contain the following information.  Almost all values, with the exception of `scivis_authors`, and `year` are strings
    * `title`:  The title of the paper
    * `authors`:  The human-readable list of authors as they appear on the paper
    * `scivis_authors`:  An array of LiU ids for the authors that belong to the SciVis group
    * `venue`:  The venue in which the paper was published
    * `year`:  The year in which the paper was published
    * `doi`:  The DOI number for the paper *optional*
    * `pdf`:  A link to the author-copy of the paper
    * `bib`:  A link to a bibfile that other authors can use to cite your paper
    * `thumbnail`:  A thumbnail for the paper in 16:9 aspect ratio
    * `link`:  A generic link that can be used to point to the source code, a project page, etc *optional*
    * `link_title`:  The text label for the provided `link`.  If this value is not provided, the default value "Link" is used
    * `video`:  A link to a video showing the paper contents *optional*
    * `annotation`:  An optional annotation that provides additional unique information about the paper, for example awards, etc *optional*
    * After the front matter, the file should contain a 1-2 sentence description of the paper that is used to entice visitors to read the paper


# Previous links to read about the website generator, the theme, etc
 - Jekyll: https://jekyllrb.com/docs
 - Theme: Feeling Responsive (http://phlow.github.io/feeling-responsive/, [Getting Started](https://www.youtube.com/embed/3b5zCFSmVvU))
