---
layout: post
title: "Security Response to Heartbleed"
categories: 
---

On April 7, 2014 information was released about a new vulnerability in OpenSSL [(CVE-2014-0160)](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2014-0160). Security bug is called "Heartbleed". This affected most of internet service, and Sketchboard was also affected. As of right now, we have no indication that the attack has been used against Sketchboard.


What Sketchboard is doing about this?
-------------------------------------

1. Sketchboard updated it's OpenSSL library version that fixed the bug on April 8th, 2014.
2. New SSL keys were deployed.
3. All browser sessions have been cleared. This means that you need to relogin to the service.
4. GitHub application token was revoked.
