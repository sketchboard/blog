---
layout: post
title: "Sketchboard Flavored Markdown"
category: 
---

_Highlight important topics on your board using text formatting._

Sketchboard users have requested possibility to format text.
For starters __Note__ and __Just Text__ elements implement simple text formatting.
Formatting is based on __Markdown__, initially following text formatting rules
are used.

There are some differences for Markdown. Sketchboard legacy \*bold\* makes text bold
and not emphasized. In the future another probable exception might be that two underscores 
are used for \__underlined text\__ and not for text bolding.

Headings
========

Markdown provides two styles to write headings.

![Heading Example](/img/Setext-heading-example.png)

Note Element
![Heading Syntax (Notes)](/img/note-heading-markdown.png)

Just Text Element
![Heading Just Text](/img/just-text-heading.png)

Bullets
=======

![Notes Bullets Syntax](/img/note-bullets-markdown2.png)
![Just Text Bullets](/img/just-text-bullets.png)

You can use either - or * characters for bullet point.

\- First Level 1

&nbsp;&nbsp;&nbsp;&nbsp;- Second Level 1

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Third Level 1

__Note__, Nested level bullets are 4/8 spaces. You can use
TAB to autofill 4 space characters in the editor.

Bold and Italics
================

![Bold and Italic](/img/note-bold-italic.png)

Escaping
========
When you want to show characters used in formatting, those needs to be
escaped with \\.
![Note Escaping](/img/note-escaping.png)

Thanks
======
Thanks to this excellent markdown library [Marked](https://github.com/chjj/marked).