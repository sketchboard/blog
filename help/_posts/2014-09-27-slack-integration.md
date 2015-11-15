---
layout: pure-post
title: "Slack Integration"
categories: 
cat: "slack"
permalink: /help/slack.html
---

<iframe width="640" height="480" src="https://www.youtube.com/embed/knlJYOP33pE?rel=0" frameborder="0" allowfullscreen></iframe>

Description
-----------

[Sketchboard](http://sketchboard.io) is a visual sketch collaboration tool for teams to sketch together <strong>in real-time</strong>. It is like a chat, but you solve problems visually like using a  whiteboard. Solve problems and create ideas visually together. Especially targeted for software development with <strong>structural ready made sketch shapes</strong>.

This integration will connect with Sketchboard team and allow you to start visual problem solving session with teammates. By typing "/sketch" you'll start real-time visual sharing session.

<aside>
<p>
The <strong>email address</strong> for your Sketchboard team must match the one used for your Slack account. 
</p>
</aside>

In case your Slack account email address does not exists on Sketchboard, integration return URL directs you to Sketchboard sign up.

Usage Guide
-----------

Here's a quick guide on how to use the Sketchboard integration.

Type the following commands on Slack to use the Sketchboard integration:

- **/sketch** - Starts visual sharing with existing Sketchboard team
- **/sketch Board Name** - Starts visual sharing with existing Sketchboard team with a named board
- **/sketch add @username** - Adds Slack teammate to your Sketchboard team
- **/sketch add name@email.com** - Adds someone to your Sketchboard team not on your Slack team

<div style="display:none;">
- **/sketch pwd password** - Starts visual sharing session with Sketchboard teammates and possibility to share sketch with guests using a password. Note password cannot contain spaces.
- **/sketch pwd password Board Name** - Starts visual sharing session with Sketchboard teammates and possibility to share sketch with guests using a password. Board is named. Note password cannot contain spaces.
</div>

<aside>
<p>
Please note: When using <strong>add</strong> command you must be team admin in Sketchboard. Only team admins can add new teammates.
</p>
</aside>


<h2 id='install'>Installation</h2>

Sketchboard for Slack installation is initiated from Sketchboard. Go to <strong>Team Settings</strong> from the menu.

<img alt='Slack Menu' src='/help/images/slack-menu.png' width='350px'>

Select <strong>Add to Slack</strong> to start the installation. <strong>NOTE</strong> Slack Integration is a premium feature and on free plan starts a 14 day trial.

<img alt='Slack Installation' src='/help/images/slack-installation.png' width='100%'>