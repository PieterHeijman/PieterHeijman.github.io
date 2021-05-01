---
layout: post
title: Centering content vertically
date: 2021-04-14
author: Pieter Heijman
category: Front-end development
read-time: 4 min
image: /assets/images/placeholder.jpg
image-style: dark
---

## **Introduction**

When it comes to front-end development, any problem has a million solutions. Today I want to focus on the seemingly simple task of aligning content vertically. There are a few good ways to do this. There are also many dirty tricks and filthy hacks. Even the good solutions may be very useful in some situations but inappropriate in others. Below I've listed some of the ways you can vertically align content and the situation where that solution is appropriate.

## **Vertical-align**

Let's look at the following example. We have a wrapper element with two child elements. We're using `vertical-align: middle` to center the content vertically.

```html
<div class="wrapper">
  <span class="child">
    Multiple lines of<br>
    content
  </span>
  <span class="child">
    Some content
  </span>
</div>
```

```css
.child {
  display: inline-block;
  vertical-align: middle;
}
```

The result of this code would be two vertically centered pieces of text next to each other. 

Note that the child is set to an `inline-block`. `Vertical-align` only works along a baseline. This means it only works on inline elements. Basically, anything with its display property set to `inline` or `inline-block` and table-cells. 

This also means that setting a height to the wrapper `div` won't change the results. The centering happens along the content's baseline, which still runs in the same place, regardless of the parent's height. This makes `vertical-align` fairly limited. 

The best use-cases for `vertical-align` are situations where you have multiple elements on a single line. For instance, when showing an icon in front of a line of text. 

## **Absolute positioning and translate**

On the surface, this solution feels a little hacky. It is, however, more flexible than `vertical-align`. It is also a solution you will find a lot in the wild since it works in most situations. Let's look at an example.

```html
<div class="wrapper">
  <div class="child">
    Some content
  </div>
</div>
```

```css
.wrapper {
  position: relative;
  height: 200px;
}

.child {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
```

First, our parent element needs some positioning set to it. In our example, we set it to position `relative`, but it will work just as well with for instance `absolute` positioning. Our child element gets an `absolute` position and a top of 50%. This positions the element halfway down the parent element. But this is too far down since our child also has a height of its own. That's why we give the child element a `transform`. We set it to translate 50% back up. This puts our element perfectly centered. This works because `top` is based on the nearest parent with positioning, but `translate` is based on the element itself.

On the face of it, this solution will work in pretty much any situation you throw at it. There are of course a few obvious exceptions. If the child element, for instance, has a fixed height smaller than its content, the overflow will cause the content to not be centered.

There is also the problem of the child being set to position `absolute`. This, for instance, will not work if you have two child elements. Since they would simply both be positioned on top of each other. 

## **Flexbox**

Flexboxes are one of the most powerful tools for aligning content and they can handle vertical centering quite easily. Let's not beat around the bush, if it's not already, flexbox should be one of your power tools when it comes to aligning content. Let's look at an example. 

```html
<div class="wrapper">
	<div class="child">Some content...</div>
</div>
```

The below CSS would be enough to center that child element vertically.

```css
.wrapper {
	display: flex;
  align-items: center;
}
```

Regardless of the height of our wrapper, the flex `align-items` will make sure our child is nicely centered.

This solution has some of the same problems as the previous solution. But flexbox can handle multiple children and offers a lot of options to tweak any other issue you may run into.  

## **Just for the record: using line-height and floating divs**

This in no way should be your go-to, however, for completeness, it is possible in some situations to use line-height to center content vertically. Mostly, this works in elements where you have just a single line of text (like buttons). In the situations where you could use line-height, however, the flexbox and position absolute solutions will also work.

There's also an older solution that sometimes pops up in the wild using a floating `div` to push content halfway down a parent. But this solution has more than a few problems. For one it is not very precise. Chances are, your child element is aligned close to the center. Rather than perfectly centered. It also has comparatively much overhead. It needs an extra empty element whose function is purely to align the other elements, and there's a bunch of extra CSS code needed to make this work.
