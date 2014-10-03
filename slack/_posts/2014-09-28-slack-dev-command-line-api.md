---
layout: pure-post
title: "Slack DEV Command Line API"
categories: 
---

Usage Guide
-----------

For prototyping and testing responses you can create e.g. following Slash command in Slack:

<img width='100%' alt='Slack Command Integration Settings' src='/slack/images/slash-command-integ-setting.png'>

URL:
<pre class="code">
<code>https://sketchboard.me/api/v1/command/:application\_secret\_key</code>
</pre>

After creating a Slash command, Slack channel supports following Sketchboard commands:

- **/devsketch user@email.com** - Starts visual sharing with existing Sketchboard team
- **/devsketch user@email.com Board Name** - Starts visual sharing with existing Sketchboard team with a named board
- **/devsketch admin@email.com add @username** - Adds Slack teammate to your Sketchboard team
- **/devsketch admin@email.com add name@email.com** - Adds someone to your Sketchboard team not on your Slack team


<aside>
	<p>
		<ul>
			<li>user@email.com needs to be a user in Sketchboard.</li>
			<li>admin@email.com needs to be a team admin in Sketchboard.</li>
		</ul>
	</p>
</aside>


Response
--------

Response contains JSON object that has an integer property **res**.

- **res: 0** indicates success
- **res: 1** indicates partical success
- **res: -1** indicates failure

Response contains **msg** property that gives human readable message related to the response.

Optionally response contains **url** property that guides user further in Sketchboard or is a link to created shared Sketchboard session.

### Response examples

Success:
<pre class='code'>
<code>{
 "res":0,
 "url":"https://sketchboard.me/\<board_id\>",
 "msg":"Board created"
}</code>
</pre>

Partially Success:
<pre class='code'>
<code>{
 "res":1,
 "msg":"Added mat@foo.com, but failed to add alf@foo (check format)"
}</code>
</pre>

Failure:
<pre class='code'>
<code>{
 "res":-1,
 "msg":"Not allowed. You are not admin of the team.",
 "url":"http://localhost:8080/service/apimsg?code=-6"
}</code>
</pre>


Slack Integration with Command Line API
---------------------------------------

Slack can initiate Sketchboard session using Slash command conventions. Slash command can be sent almost as is. Current user needs to be sent and @username command line references need to be changed to Slack account related email addresses.

<ul>
	<li><strong>/devsketch user@email.com</strong> - user@email.com should be current Slack user account email address</li>
	<li><strong>/devsketch user@email.com add @username</strong> - @username should be changed to Slack user account email address</li>
</ul>


Slack Channel Slash Command Examples
------------------------------------

### Start Sketchboard session form Slack and get sketch back to Slack

User starts to sketch from Slack

<img src="/slack/images/dev-sketch-command-line.png" width="100%">

Sketchboard uses web hook to post Sketchboard session back to Slack

<img src="/slack/images/dev-sketch-sketchboardbot.png" width="100%">

Sketchboard highlights on top of a board that this board is created from Slack and user can share board as PNG in Slack channel. Channel is the channel which originated the /sketch command.

<img src="/slack/images/dev-sketch-slack-board.png" width="100%">

Send snapshot PNG to Slack channel with initial comment.

<img src="/slack/images/dev-sketch-img-upload.png" width="100%">

Final result visible in Slack.

<img src="/slack/images/dev-sketch-uploaded.png" width="100%">


<!-- - how response is interpreted and show to user
- modified Slack user interface with shown html in the chat, so flow is clear how it is
	- returned message should be  -->