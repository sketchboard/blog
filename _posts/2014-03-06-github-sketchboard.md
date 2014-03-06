---
layout: post
title: "Visualize GitHub README.md with Sketchboard.io"
categories: 
---

We are exited to announce Sketchboard initial integration with GitHub. 
Now you are able to **upload diagrams** directly from Sketchboard to GitHub.
You can keep documentation and images on a same repository.

Example usages:

- Create e.g. project intro with a diagram that makes it easier to get into the project.
You can refer images from the repository README.md file
- Have an overview project design at GitHub wiki
- Update [GitHub Pages](http://pages.github.com/) technical blog with sketch diagrams

See e.g. [lift-json](https://github.com/lift/lift/tree/master/framework/lift-base/lift-json) component from [Lift](http://liftweb.net) project. It has a great component intro with an image. Picture makes it much easier to understand (as a user) and how to work with the component.

Now with Sketchboard GitHub integration you don't need to leave browser to make updates to the documentation. Now your workflow could be following:

- Sketch diagram at [Sketchboard](https://sketchboard.me)
- Export whole diagram or parts of it to GitHub
- Update README.md file at [GitHub](http://github.com) to refer just updated image. GitHub has a nice online editor.

Naturally GitHub keeps version for images and you can even view the difference
directly in GitHub.

![View Image Difference at GitHub](/img/github-image-diff.png)


Export to GitHub
--------------------------------

Currently Sketchboard GitHub integration works only on public repositories.

### Steps to export

- "Download" Menu => Select Export to GitHub
- Login to GitHub
- Select public repository where image should be uploaded
- Select correct branch, path and name for the exported image 
- **NOTE:** Image name cannot contain spaces
- **NOTE:** You can change exported image type, but GitHub doesn't display svg and pdf files
- **NOTE:** Only selected elements will be exported or all (if no selection)

![GitHub export dialog](/img/github-export-dialog.png)

In case image already exists in the selected path, content is just update. Sketchboard automatically fills commit message with a back link, so you can update diagram later.


GitHub Markdown syntax for images
---------------------------------

- Image on a same repository
<p>GitHub markdown syntax to show images e.g. on README.md:</p>
{% highlight ruby %}
![My Diagram Image](images/relative/path/my-diagram-image.png)
{% endhighlight %}

- Image on a different repository

{% highlight ruby %}
![My Diagram Image]
	(https://raw.github.com/[user]/[repository]/[brach]/my-diagram-image.png)
{% endhighlight %}

[GitHub markdown heatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#wiki-images).
