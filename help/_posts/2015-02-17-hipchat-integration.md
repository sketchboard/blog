---
layout: pure-post
title: "HipChat Integration"
cat: "hipchat"
---

<p class='hipchat-sketchboard'>
</p>

Description
-----------

<iframe width="853" height="480" src="https://www.youtube.com/embed/rk8cciaPAf0?rel=0" frameborder="0" allowfullscreen></iframe>

[Sketchboard.io](http://sketchboard.io) is a visual sketch collaboration tool for modern teams to sketch together in real-time. It is like a chat, but you solve problems visually like using a  whiteboard. Solve problems and create ideas visually together. Especially targeted for software development.

<!-- This integration will connect with Sketchboard team and allow you to start visual problem solving session with teammates. By typing "/sketch" you'll start real-time visual sharing session.
 -->
<aside>
<p>
The email address for your Sketchboard.io team must match the one used for your HipChat account. 
</p>
</aside>

In case your HipChat account email address does not exists on Sketchboard.io, integration directs you to Sketchboard.io sign up.

Usage Guide
-----------

Here's a quick guide on how to use the Sketchboard.io integration.

Type the following commands to use the Sketchboard.io integration:

- **/sketch** - Starts visual sharing with existing Sketchboard.io team
- **/sketch Board Name** - Starts visual sharing with existing Sketchboard.io team with a named board
- **/sketch add @UserName** - Adds HipChat teammate to your Sketchboard.io team
- **/sketch add user@email.com** - Adds someone to your Sketchboard.io team not on your HipChat team

<div style="display:none;">
- **/sketch pwd password** - Starts visual sharing session with Sketchboard.io teammates and possibility to share sketch with guests using a password. Note password cannot contain spaces.
- **/sketch pwd password Board Name** - Starts visual sharing session with Sketchboard.io teammates and possibility to share sketch with guests using a password. Board is named. Note password cannot contain spaces.
</div>

<aside>
<p>
Please note: When using **add** command you must be team admin in Sketchboard.io. Only team admin can add new teammates.
</p>
</aside>


Free Plan and Subscription
--------------------------

After sign up you are using free plan. On free plan boards are <strong>public</strong> and you can create up to <strong>10 public boards</strong>. You can view public boards from <strong>[Sketch Gallery](https://gallery.sketchboard.me)</strong>.

When you subscribe you can create <strong>private boards</strong> that are visible only for your team. Private boards are not shown on Sketch Gallery. See <strong>[plans](http://sketchboard.io#pricing)</strong>.


Installation
------------

Until there is an official Sketchboard.io HipChat integration available on Atlassian Marketplace. Sketchboard.io Add-On can be installed manually using 

<pre class='code'>
<code>
	https://sketchboard.me/hipchat/addon/descriptor
</code>
</pre>

<img src='/help/images/install-from-descriptor.png' alt='Install from descriptor' width="100%">

<img src='/help/images/descriptor-url.png' alt='Descriptor URL' width="100%">


Sketchboard.io integration uses

- Send Notification - to reply back to room with a notification 
- View Group - when using /sketch add @UserName command, Sketchboard.io retrieves HipChat email address automatically to be used in Sketchboard.io
- Send Message - to upload board snapshot to HipChat on your behalf. You will be requested separately to authorized this.

<img src='/help/images/install-global-integration.png' alt='Descriptor URL' width="100%">


Configuration
-------------

Sign up on Sketchboard.io using the same email address that you use for your HipChat account. 

<img src='/help/images/hipchat-configuration.png' alt='Descriptor URL' width="100%">

Enable integration on Sketchboard.io. 

<img src='/help/images/hipchat-configuratation-enable.png' alt='Descriptor URL' width="100%">

Sketchboard.io is opened and possible you need to login first. Click "Enable HipChat" and configuration is done.

<img src='/help/images/hipchat-enable.png' alt='Descriptor URL' width="100%">


Add Team Mates
--------------

It is recommended to add HipChat teammates using /sketch command. You will be then automatically using correct email addresses on Sketchboard.io.

<pre class='code'>
<code>
	/sketch add @UserName
</code>
</pre>


Real-time Sketch Collaboration
------------------------------

Start sketching with your HipChat teammates using plain /sketch command. You can also give name to your board with the /sketch command.

<pre class='code'>
<code>
	/sketch Awesome Idea
</code>
</pre>

Sketchboard.io replies back with a link to the board. Click the link with your teammates to start sketching together.

<img src='/help/images/hipchat-sketch-command.png' alt='Descriptor URL' width="100%">

After you have finished your real-time sketch session. You can upload board snapshot back to HipChat room. 

<img src='/help/images/hipchat-upload-snapshot.png' alt='Descriptor URL' width="100%">


Sketchboard.io needs your authorization to upload image with a message on your behalf to HipChat. At first time you are directed to HipChat to give that permission. You will be asked to give a new authorization when permission expires.

<img src='/help/images/hipchat-authorization.png' alt='Descriptor URL' width="100%">


Now you have enabled integration also from Sketchboard.io => HipChat. Upload board snapshot for others to seen that were not in the sketch session with you.

<img src='/help/images/hipchat-share-snapshot.png' alt='Descriptor URL' width="100%">

Snapshot is uploaded and you can have discussion on HipChat on it.

<img src='/help/images/hipchat-snaphot.png' alt='Descriptor URL' width="100%">

