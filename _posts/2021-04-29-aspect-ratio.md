---
layout: post
title: Aspect Ratio
date: 2021-04-29
author: Pieter Heijman
category: Front-end development
read-time: 3 min
image: /assets/images/placeholder.webp
image-style: dark
---

Don't you just love it when this happens? The designer sent you their work and it relies heavily on elements being perfectly square. You try to remember the trick for this. It's kind of hacky, but there's no real better way. Not unless you just set a fixed width and height. You glance at the designer, they give you a stern look back. Can't set a fixed width and height. Time to break out the old hack.

```css
.square {
	width: 20%;
}

.square::after {
	display: block;
	content: "";
	padding-bottom: 100%;
}

.inner {
	position: absolute;
	width: 100%;
	height: 100%;
}
```

There! Perfectly square. 

A week later the designer walks up to you. Turns out the client didn't want a square, but they wanted the blocks to be 4:3, like TVs back in the day. You give a disheartened sigh and grab a calculator. If only there was a better way to do this.

Enter `aspect-ratio`! It's a CSS property that tells any element what aspect ratio it should be. That square you made earlier. This is the code if you made it using `aspect-ratio`:

```css
.square {
  background-color: #34AA00;
  width: 20%;
  aspect-ratio: 1/1;
}
```

No hacks, no tricks, just clean and readable code. And that change the designer told you about? Just change the `1/1` to `4/3`. 

## The bad news

Before you start using this all over the place. I've got a little bit of bad news for you. At the time of writing, `aspect-ratio` is not supported by Firefox or Safari, yet. Those tend to be browsers you'd want to support. Both Firefox and Safari have put support for `aspect-ratio` in their technology previews, so it's only a matter of time before support is high enough to use this in production. 

## Using aspect-ratio

With that out of the way, let's look at the details of `aspect-ratio`. It can't be *that* simple, right? What if you have a width and height set? Or a max-width and height? There are several situations where `aspect-ratio` might not do what you'd think it would do. Usually, because some other CSS attribute taking precedent.

### You have both width and height set on the element

If you have both width and height, the `aspect-ratio` attribute is ignored and the block is shown at the set width and height.

```css
.not-square {
  width: 300px;
  height: 200px;
  aspect-ratio: 1/1;
}
```

In the example above, the element would be 300px wide and 200px high. The `aspect-ratio` setting of `1/1` is disregarded.

### You're using min-* and max-* settings

If you're setting `width` and `min-height`, or if you're setting `min-width` and `height`, `aspect-ratio` does work as normal.

If, however, you're setting a `max-height` and a `width`, something odd happens. Let's look at the example below.

```css
.square {
  aspect-ratio: 1/1;
  width: 200px;
  max-height: 1000px;
}
```

In this example, we're setting a width of 200px and an `aspect-ratio` of 1/1 (square). The max-height is huge, so the element is shown at the correct `aspect-ratio`. The element is 200px wide and 200px high.

```css
.square {
  aspect-ratio: 1/1;
  width: 200px;
  max-height: 100px;
}
```

In this example, however, the max-height is too small to fit the aspect-ratio. Since max-height is more important than width, the result is an element that is 100px wide and 100px high. The aspect-ratio is still in place.

### When you're adding a lot of content

If your element contains a bunch of content, it is possible for the element to not conform to the aspect-ratio. Instead, it stretches the block out to make room for the extra content. Luckily, this is only a minor issue that can be fixed quite easily. You could set a min-height of 0. This would cause the element to stick to the aspect-ratio, while the content is allowed to spill out at the bottom. Alternatively, you could set overflow-y to hidden. This also causes the element to respect the aspect-ratio. The overflowing content, however, is hidden from view.