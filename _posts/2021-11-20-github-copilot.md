---
layout: post
title: Github Copilot; Black Magic or just another code completion tool?
date: 2021-11-20
author: Pieter Heijman
category: Development
read-time: 6 min
image: /assets/images/placeholder.jpg
image-style: dark
---

I've been trying out Github Copilot in the technical preview for about two weeks now. And in that time, I've seen Copilot make a lot of strange suggestions. However, I've also seen it give out several useful suggestions.

So, let's first take a look at what Github Copilot is and isn't. Github describes Copilot as "your AI pair programmer". And that really is the best description for it. It sits there, in your IDE and makes suggestions. Sometimes it suggests little things, like how to complete the line of code your writing. Sometimes it suggests entire blocks of code. It does this using OpenAI and the shedload of public code repositories on Github as training data. 

## Should I worry about my job

Any article I've read about Copilot seems to have this question in it. Since it uses AI, people automatically worry it'll be a matter of time before the software becomes self-aware and starts writing software designed to end all life on earth. Luckily, Copilot really isn't that good, nor is it meant to write entire pieces of code on its own. So, no, if your a decent enough developer, you needn't worry about your job.

## Where Copilot excels

So, let's look at some situations where Github Copilot does best. Let's say, you've written this line of code. (the world can never have enough functions to add to numbers together, right?):

```Javascript
function sum(a, b) {
```

Github Copilot has no problems completing that function for you. And the same goes for pretty much any common utility function you'll write. Common tasks like arrhythmic operations, XHR calls, getters and setters. I've seen Copilot suggest all of these with ease.

It's also pretty good at completing repetitive stuff, if it sees a few examples. A good example is in constructor functions where a set of parameters are passed.

```Javascript
class Trex {
    constructor(name, color, size, weight, armlength) {
        this.name = name;
        this.name = color;
```

In this code snippet, without Github Copilot we would need to continue setting each parameter by hand. With Copilot, this would be about the point where it does this for you. In most of these kind of inevitable pieces of repetitive work, it pretty quickly knows what you need.

## Where does it fall short

Naturally, it can't be all good. In fact, in most cases it suggests something that is not even close. It simply won't suggest anything if you're writing something in the middle of an existing line of code. ALl in all, about 60% to 70% of the suggestions are wrong and another 10% are so obvious the normal code-completion tools would also catch them. And this is fine, since the remaining 20% to 30% take a lot of tedious busywork out of programming.

Another point where it falls short is in its teaching abilities. The Github Copilot website points this out as a potential benefit. Being able to show examples for languages you might not be experienced in. However, the suggestions it gives ofthen require a bit of an experienced eye to judge whether they are usable or not. This makes Copilot's teaching abilities limited. 

## So, is it worth it?

At this point, Github Copilot is a great addition to a developer's toolkit. It suggests enough pieces of usable code, mostly needing only minor tweaking, for it to be a time-saver. However, since Github is planning to release Copilot as a commercial piece of software it really comes down to what they will charge. At the moment of writing nothing is known about pricing, so it could very much go either way.