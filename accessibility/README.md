task 0:
Let’s start by the “Work” section:

We have an issue with the focus (moving from one link to another with the TAB key) in the Desktop version. With the DevTools, you can active the focus on the <a> inside .card-title and nothing happen.

To solve it, we need to update the way we are managing the hover state of .card-title:

In your keyboard/01-styles.css file, in the /* Card WORK section
Remove opacity: 0 inside .card-work .card-title
Remove .card-work:hover .card-inner
Remove .card-work:hover .card-title
Target the selector .card-work .card-title a and add an opacity to 0.
For .card-work .card-title a with the a in state focus and .card-work:hover .card-title a:
Property: opacity, Value: 1
Property: height, Value: 100%
Property: background-color, Value: rgba(0, 0, 0, 0.7)
Now you use the keyboard to navigate, you should see the card with the title and the dark background like when you hover the card with your mouse.
task 1:
Using the 00-index.html provided in the previous task, in your skip-links/01-index.html file, just after the <body> HTML open tag

Add the <!-- Skip links --> comment
Create a new <nav> tag with the aria-label attribute. Put the value Skip links inside it.
Create a non ordered list of class off-screen
Create a first li with a link inside
Href: #a11y-primary-nav
Class: skip-link
Text: Skip to primary navigation
Create a second li with a link inside
Href: #a11y-main-content
Class: skip-link
Text: Skip to main content
On the <nav class="navbar-menu">, add an id with the text: a11y-primary-nav and a tabindex="-1"
On the <main> tag, add an id with the text: a11y-main-content, and tabindex="-1"

Task 2:
The name of the ID can be anything but prefixing with a11y can help us to remember why we are using an ID. (I recommend reading this article about CSS namespacing by Harry Roberts)

Using the stylesheet from the previous task, in your skip-links/01-styles.css file, in the /* Helpers section, after the visually-hidden selector

Target the off-screen class
Property: left, Value: -100vw
Property: position, Value: absolute
Target the skip-link class
Property: background, Value: link to the color-black variable
Property: color, Value: link to the color-white variable
Property: left, Value: 0
Property: padding, Value: .7rem
Property: position, Value: fixed
Property: opacity, Value: 0
Property: top, Value: 0
Property: z-index, Value: 10
Property: transform, Value: translateY(-1rem)
Property: transition, Value: transform .2s ease-in-out, opacity .2s ease-in-out
Target the focus state of skip-link class
Property: opacity, Value: 1
Property: transform, Value: translateY(0)
Task 3:
As you can see, the contrast is not good. The easy fix is simply to remove the body styles in the embed <style>. Do this in your fix-a11y/01-index.html file. In a real case, you could use the Contrast Ratio section of the Color Picker.

Check with Axe to ensure the issue is fixed.

Rendering the page should display something like this