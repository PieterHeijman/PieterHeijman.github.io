---
layout: post
title: You really should use semicolons in JavaScript
date: 2021-05-17
author: Pieter Heijman
category: Front-end development
read-time: 3 min
image: /assets/images/placeholder.jpg
image-style: dark
---

*Semicolons aren't obligatory in JavaScript, right... So why bother with them? Just leave 'em out!* That's an actual argument being made in an online discussion on whether or not to add semicolons on JavaScript. Here's another one: *Historically, semicolons were added in JavaScript to look more like Java or C++*. Fortunately, the arguments supporting the use of semicolons are doozy's as well: *If you omit semicolons, a minifier might break your code.* It seems that these discussions pop up every few years, like the tabs vs spaces debate. This was a discussion in the '90s, it flared up around 2010 and again around 2016. And I've seen this discussion pop up again just this month.

So, let's start by saying it's a better idea to add semicolons to JavaScript rather than to omit them. Even though a minifier won't break your semicolon-less code. And, sure, they're not obligatory. It is still better to add them, rather than to omit them.

## Why you should add semicolons

Before we're going to look at an example, let's talk about how JavaScript deals with semicolons. Because they're not actually optional. If you leave out the semicolons, JavaScript will add them in itself by a process called automatic semicolon insertion. And it is exactly this automatic insertion that makes it risky to leave out semicolons.

Take a look at this example:

```jsx
a = b + c
(d + e).toString()
```

This code throws an error because the line `a = b + c` doesn't get an automatic semicolon. Instead, JavaScript expects `c` to be a function call with `d + e` as an argument.

Next example, two statements on one line

```jsx
i++ a = b + c
```

This one is pretty obvious. If you have two statements on a single line, semicolons are required regardless of your preferences. Automatic semicolon insertion has no way of knowing if a semicolon is needed in the above example. This code results in an error.

Automatic semicolon insertion has a bunch of edge-cases where it either fails or at the very least behaves unexpectedly. Adding in semicolons yourself makes sure that your code runs exactly as you expected it to.

## When should you leave semicolons out

Now that we know why it's a good idea to add semicolons in your JavaScript files, let's take a look at the situations where you might want to omit semicolons. Because let's be honest, the chance of your code, provided you write clean code, runs into any of the edge cases of automatic semicolon insertion are very slim. 

The main reasons for not inserting semicolons cited in arguments tend to be:

- It's more readable
- It encourages developers to better understand the language

The first is just personal taste. I personally think adding semicolons produces more readable code, but that is *also* personal taste. 

That second argument is often accompanied by a good deal of gatekeeping. *If you don't know how this works, you shouldn't be allowed to write code professionally*. That is **not** a good reason to leave out semicolons. 

So, when is? Well, most of the issues mentioned with automatic semicolon insertion can be mitigated by enforcing the use of linters and formatting tools like Prettier. So, if that's in place and your team prefers leaving semicolons out, you should follow the rest of your team. The code you write as a team should look like it was written by one person. 

## To sum up

Adding semicolons yourself results in cleaner code that is slightly less error-prone.

Leaving semicolons out is not that big of a deal if you have the right tools.