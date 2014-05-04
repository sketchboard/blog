---
layout: post
title: "Sketchboard.Me Confluence"
categories: 
---


System Requirements
-------------------

- Sketchboard.Me Confluence Plugin editing requires modern web browser like Chrome, Safari or Firefox
- Confluence installation server needs to support Arial font for image generation


Add Sketchboard.Me Macro
------------------------

You can add Sketchboard.Me Macro to a page by editing the page.

![Edit Page](/img/confluence-edit-page.png)

### Select Sketchboard.Me Macro

Select Sketchboard.Me Macro from Macro menu.

<img src="/img/confluence-insert-sketcho.png" height="350">

### Sketch name
Type name for the sketch. Note that name can only include ASCII characters. It is possible to refer already existing diagrams as well. In case you want to copy sketch from some other location, copy attachment xml file and point macro to that file.

<img src="/img/confluence-sketcho-name.png" width="500px">

Once you have pressed "Insert" you will see Sketchboard.Me macro on your Confluence editor. You can double click the diagram placeholder to change the name. Save page content.

<img src="/img/confluence-sketcho-inserted.png" width="500px">

By now you have only a link to edit the diagram, "Edit Diagram". Press the link to open Sketchboard.Me editor.

<img src="/img/confluence-start-to-sketch.png" width="500px">


Drawing Area
------------

Image below shows main elements of Sketchboard.Me editor. Zoom can be used to make elements smaller while editing. It doesn't affect the end result. Library shows all premade shapes that editor provides. Undo/Redo can be used to undo 5 previous steps. Freehand can be used to draw freehand sketches.

Remember to save your work by pressing "Save" button. You can ignore all changes and close editor by pressing "Cancel" button. Note that if you press cancel all changes will be lost.

<img src="/img/confluence-editing.png">


Learn Basics
------------

Double click the board to add show board context menu. You can add in place elements that the context menu shows. Double click element to edit text.

Arrows can be made by dragging from connection handle. Editor starts to draw arrow, release mouse and select end point element.

<img src="/img/confluence-learn-basics.png">

To get more drawing space drag board background. When ever you are lost in a big board, press Z key and view the whole board at once. Move mouse and relese Z key and board is centered at that position.

<img src="/img/confluence-learn-basics2.png" height="200px">


Freehand Drawing
----------------

Freehand drawing can be enabled by pressing F key. Draw by moving your mouse. Press F key again to quit freehand drawing mode. You can resize freehand drawing by bending from a resize handle. To draw straight lines press shift key while in freehand mode. Close path by double clicking while pressing shift key down.

<iframe width="560" height="315" src="//www.youtube.com/embed/pMVJgIEAmrA" frameborder="0" allowfullscreen></iframe>


Shortcuts
---------

<table>
<tr>
	<th></th>
	<th></th>
</tr>
<tr>
	<td>Cmd/Ctrl + S</td>
	<td>Save sketch</td>
</tr>
<tr>
	<td>Z</td>
	<td>Map view</td>
</tr>
<tr>
	<td>Shift</td>
	<td>Lasso selection</td>
</tr>
<tr>
	<td>Delete or backspace</td>
	<td>Delete selected elements</td>
</tr>
<tr>
	<td>F</td>
	<td>Freehand mode</td>
</tr>
<tr>
	<td>F + Shift</td>
	<td>Draw straight lines while in Freehand mode</td>
</tr>
<tr>
	<td>-</td>
	<td>Zoom Out</td>
</tr>
<tr>
	<td>+</td>
	<td>Zoom In</td>
</tr>
<tr>
	<td>Cmd/Ctrl + Shift + Click</td>
	<td>Open link if component contains a link</td>
</tr>
</table>
 


<!-- Need to support svg images
--------------------------

Follow these instructions
https://bobswift.atlassian.net/wiki/display/info/How+to+display+SVG+attachments+in+Confluence -->