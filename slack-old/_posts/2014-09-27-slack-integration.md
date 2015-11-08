---
layout: pure-post
title: "Slack Integration"
categories: 
---

Description
-----------

[Sketchboard](http://sketchboard.io) is a visual sketch collaboration tool for teams to sketch together in real-time. It is like a chat, but you solve problems visually like using a  whiteboard. Solve problems and create ideas visually together. Especially targeted for software development.

This integration will connect with Sketchboard team and allow you to start visual problem solving session with teammates. By typing "/sketch" you'll start real-time visual sharing session.

<aside>
<p>
The email address for your Sketchboard team must match the one used for your Slack account. 
</p>
</aside>

In case your Slack account email address does not exists on Sketchboard, integration return URL directs you to Sketchboard sign up.

Usage Guide
-----------

Here's a quick guide on how to use the Sketchboard integration.

Type the following commands to use the Sketchboard integration:

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
Please note: When using **add** command you must be team admin in Sketchboard. Only team admins can add new teammates.
</p>
</aside>