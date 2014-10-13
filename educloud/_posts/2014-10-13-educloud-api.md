---
layout: pure-post
title: "Sketchboard.io EduCloud API"
categories: 
---

This document is used to agree Sketchboard API towards any learning environment using EduCloud. You can see an example integration to get better idea how API could work with learning environment. Example uses private authenticated board API that is not available at this point for learning environments.

Example:

<iframe width="560" height="315" src="//www.youtube.com/embed/fXCUIc_UmyI" frameborder="0" allowfullscreen></iframe>

API Basics
----------

All methods must be called using HTTPS.


Authorized Learning Environments
--------------------------------

Authorized learning environments need to use private application\_secret\_key to call Sketchboard services. Private application\_secret\_key is delivered separately using GPG. Learning environment needs to be registered before calling Sketchboard services.

### Registering Learning Environment
Following information is sent to info@7scales.net.

<table class="pure-table pure-table-bordered">
	<thead>
		<th>Name</th>
		<th>Description</th>
	</thead>
	<tbody>
		<tr>
			<td>Application Name</td>
			<td>Learning environment name</td>
		</tr>
		<tr>
			<td>Image (optional)</td>
			<td>Learning environment logo. Image can be shown with link back to learning environment. Purpose is to make users comfortable and feel of still using learning environment.</td>
		</tr>
		<tr>
			<td>Public GPG key</td>
			<td>Key is used to encrypt private application secret key in reply email.</td>
		</tr>
	</tbody>
</table>

Create New Public Anonymous Board
---------------------------------

Create a new public anonymous Sketchboard.io board. Returns public board url address.

### Header

Content-Type: application/json

<aside>
	<p>
		POST https://sketchboard.me/api/v1/board/public/new/:application\_secret\_key
	</p>
</aside>

### Parameters

<table class="pure-table pure-table-bordered">
	<thead>
		<th>Name</th>
		<th>Description</th>
	</thead>
	<tbody>
		<tr>
			<td>return_url</td>
			<td>
				Sketchboard allows user to return back to learning environment that created the board. This can be module that created the board and link can be stored in the module or a collaboration area that created the board.
			</td>
		</tr>
	</tbody>
</table>

JSON example:

<!-- <pre class='code'>
<code> -->
<pre class="code">
<code>{
 "return_url" : "https://:learning_environment_url_that_created_the_board"
}</code>
</pre>

### Responses

#### Success:

<pre class="code">
<code>{
 "res":0,
 "url":"https://sketchboard.me/&lt;board_id&gt;",
 "msg":"Board created"
}</code>
</pre>

#### Failure:

<pre class="code">
<code>{
 "res":-1,
 "msg":"Failed to create board"
}</code>
</pre>
