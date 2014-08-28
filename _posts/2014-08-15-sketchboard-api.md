---
layout: post
title: "Sketchboard API"
categories: 
---

Create Board
------------

Creates a board and shares the board on a default team of the user.

```
POST https://sketchboard.me/api/v1/board/new/:application_secret_key
```

### Header
Content-Type: application/json

### Parameters

<table>
<tr>
	<th>Name</th><th>Description</th>
</tr>
<tr>
	<td>user_email</td>
	<td><strong>Required</strong> User in Sketchboard.io service. Board will be created on a user_email default team and always shared between team members even if board_password is given.</td>
</tr>
<tr>
	<td>board_name</td>
	<td>Name of the board to be created.</td>
</tr>
<tr>
	<td>add_users</td>
	<td>Users to be added on user_email default team. user_email needs to be admin of the team.</td>
</tr>
<tr>
	<td>board_password</td>
	<td>Sets password to the board to allow anonymous access.</td>
</tr>
</table>

```json
{
  "user_email" : "test.dude@company.com",
  "board_name" : "Hello Sketch",
  "board_password" : "this is a secret",
  "add_users" : ["team.member1@company.com", "team.member2@company.com"]
}
```

### Response

<table>
<tr>
	<th>Name</th><th>Description</th>
</tr>
<tr>
	<td>url</td>
	<td>Sketchboard.io service URL. Either a direct board URL or next step to be done, like sign up at Sketchboard.io.</td>
</tr>
<tr>
	<td>status</td>
	<td>
		<p>
		Status values <strong>above 0</strong> means, board was created, but there was some error.<br>
		<strong>Status value 0</strong> mean, request was successful<br>
		Status values <strong>below 0</strong> means, board was not created.
		</p>

		<strong>Status values:</strong><br>
		2: Board created, but you are not admin of the team and cannot add new users.<br>
		1: Board created, but members not added. Current plan doesn't support this many members.<br>
		0: Board created<br>
		-1: User not found<br>
		-2: Trial expired<br>
		-3: Subscription expired<br>
		-5: Unknown error<br>
	</td>
</tr>
<tr>
	<td>msg</td>
	<td>Human readable status message. See mapped status messages.</td>
</tr>
<tr>
	<td>board_name</td>
	<td><strong>Optional</strong> If board name is given in the request.</td>
</tr>
</table>

```
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
```

Example: Successful Response

```json
{
	"url":"https://sketchboard.me/<created board id>",
	"status":0,
	"board_name":"Hello Project",
	"msg":"Board created"
}
```

Example: Failure Response

```json
{
	"url":"https://sketchboard.me/service/signup",
	"status":-1,
	"msg":"User not found"
}
```

### Example: Create Board Request
```
curl -H "Content-Type: application/json" -XPOST 
	'https://sketchboard.me/api/v1/board/new/:application_key' -d '
{
  "user_email" : "test.dude@company.com",
  "board_name" : "Hello Sketch",
  "board_password" : "this is a secret",
  "add_users" : ["team.member1@company.com", "team.member2@company.com"]
}'
```