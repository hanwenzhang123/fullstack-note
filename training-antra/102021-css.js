Resources: 
- CSS Tutorial: https://www.w3schools.com/css/
- BEM: https://en.bem.info/methodology/quick-start/
- SASS(SCSS): https://sass-lang.com/guide
- CSS FlexBox: https://css-tricks.com/snippets/css/a-guide-to-flexbox/
- CSS Grid: https://css-tricks.com/snippets/css/complete-guide-grid/
- Check browser support: Caniuse.com 
- CSS selectors cheatsheet: https://frontend30.com/css-selectors-cheatsheet/
- Flex Cheatsheet: https://yoksel.github.io/flex-cheatsheet/
- Grid Cheatsheet: https://yoksel.github.io/grid-cheatsheet/
- CSS guidelines: https://cssguidelin.es/#bem-like-naming

Key Points:
- Explain the three main ways to apply CSS styles to a web page  
- What is CSS selector? Name some.
- SASS(SCSS)/LESS
- CSS box model/ box-sizing
- CSS Flexbox
- CSS Grid
- CSS Position
- CSS resetting vs CSS normalize
- What is a Grid System in CSS? 
- How would you approach fixing browser-specific styling issues
- Describe pseudo-elements and discuss what they are used for 
- Responsive image in HTML5
- CSS position
- CSS Z-index
- Display:none vs visibility: hidden
- What kind of grid system did u use before
- coding a website to be responsive vs using a mobile-first strategy

Notes:
Em is depended on the parent, rem don’t care about the parent
Absolute will not follow its parent if the parent has the default position or the static position. Default position of every element is static.
Fixed is based on the viewport when doing the left 20px right 40px.
Sticky is like fixed but it’s relative to its parent not the view port.
BEM shows you how to name your element
Learn about sass
CSS Preprocessor: SCSS SASS LAST


Regular expression (REGEX)
CSS selectors cheat sheet, JS cheat sheet
https://frontend30.com/css-selectors-cheatsheet/
What is CSS selector? Name some.
In CSS, selectors are used to target the HTML elements on our web pages that we want to style.
Type, class, Id selectors
Attribute selectors such as 
a:hover{}
Positions: 
Static
Static positioned elements are not affected by the top, bottom, left, and right properties.
An element with position: static; is not positioned in any special way; it is always positioned according to the normal flow of the page:
Relative
An element with position: relative; is positioned relative to its normal position.
Setting the top, right, bottom, and left properties of a relatively-positioned element will cause it to be adjusted away from its normal position. Other content will not be adjusted to fit into any gap left by the element.
Absolute
An element with position: absolute; is positioned relative to the nearest positioned ancestor (instead of positioned relative to the viewport, like fixed).
However; if an absolute positioned element has no positioned ancestors, it uses the document body, and moves along with page scrolling.
Sticky
An element with position: sticky; is positioned based on the user's scroll position.
Fixed
An element with position: fixed; is positioned relative to the viewport, which means it always stays in the same place even if the page is scrolled. The top, right, bottom, and left properties are used to position the element.
A fixed element does not leave a gap in the page where it would normally have been located.
Explain the three main ways to apply CSS styles to a web page
linked, embedded, and inline

How would you approach fixing browser-specific styling issues?
After identifying the issue and the offending browser, use a separate style sheet that only loads when that specific browser is being used. This technique requires server-side rendering though.
Use libraries like Bootstrap that already handles these styling issues for you.
Describe pseudo-elements and discuss what they are used for
A CSS pseudo-element is a keyword added to a selector that lets you style a specific part of the selected element(s)
