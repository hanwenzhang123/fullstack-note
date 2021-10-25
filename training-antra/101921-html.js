Resources:
- HTML5 Tutorial: https://www.w3schools.com/html/
- Semantic HTML: https://medium.com/adalab/the-importance-of-semantic-html-78e74fb75ff0
- Chrome DevTools Tip: https://umaar.com/dev-tips/
- Check browser support : Caniuse.com 
- Pixel is not a pixel:https://www.quirksmode.org/blog/archives/2010/04/a_pixel_is_not.html
- localStorage vs Cookie: https://wpreset.com/localstorage-sessionstorage-cookies-detailed-comparison/
- Why is HTTP not secure: https://www.cloudflare.com/learning/ssl/why-is-http-not-secure/
- critical rendering path: https://medium.com/@luisvieira_gmr/understanding-the-critical-rendering-path-rendering-pages-in-1-second-735c6e45b47a

Key Points:
- Meta tags in HTML
- What is iframe and how it works
- SEO
- What is Character Encoding
- Semantic html 
- What’s new in HTML5
- Canvas vs SVG
- Cookie vs SessionStorage vs LocalStorage
- What does a DOCTYPE do
- Can a web page contain multiple <header> /<footer> elements? 
- Why is it generally a good idea to position CSS <link>s between <head></head> and JS <script>s just before </body>? 
- What are `defer` and `async` attributes on a <script> tag
- What is DOM
- XHTML vs HTML5
- Where should we put <link> and <script> and why
- 508 policy / accessibility / aria

Notes:
Get and post: post has the body part
Put and patch: patch can change data by passing in an obj that only has one of it property while the put need to pass in the whole obj
Dom is the render path of the elements in a website
Meta tag is used for seo to look for specific content of the website. 
Ex <Meta name=“name” content=“Kyle” />
508 policy ask for semantic elements
Arial attributes will help the screen-reader(tool reads content) to read the content for the disable people.
Network is a place to find the load time of the website like how much time each file took stuff like that.
( A place to check when you want to make the website faster to load). 
or a place to check whether this url has a page.

Notes:
HTTP vs HTTPS
- HTTPS is HTTP with encryption. 
- The difference between the two protocols is that HTTPS uses TLS (SSL) to encrypt normal HTTP requests and responses. 
- As a result, HTTPS is far more secure than HTTP.

Restful API (Representational State Transfer)
- uses HTTP requests to access and use data
- GET – retrieve resource
- POST – create resource
- PUT – change/update resource
- HEAD - method returns info about resource (version/length/type)
- DELETE – remove resource
- PATCH – change/update resource
- OPTIONS - method returns info about API (methods/content type)

HTTP Response Codes
- Informational Responses (100 – 199)
- Successful Responses (200 – 299)
- Redirection Messages (300 – 399)
- Client Error Responses (400 – 499)
- Server Error Responses (500 – 599)

Local Storage vs Session vs Cookie
- Local storage – Stores data on client computer. Saves keys and stores data
- Session storage – Data stored only for a session until the browser or tab is closed
- Cookies – Server side. Stores data that has to be sent back to server with requests

HTML defer vs async
- Async – will wait for the element inside JS element
- Defer – waits for JS code and runs at the end
- The script with async attribute will be executed once it is downloaded. 
  While the script with defer attribute will be executed after completing the DOM parsing
- The scripts loaded with async does not guarantee any order. 
  While the scripts loaded with defer attribute maintains the order in which they appear on the DOM.

Search Engine Optimization (SEO)
- SEO stands for “search engine optimization.” 
- In simple terms, it means the process of improving your site to increase its visibility
- Meta data tag in HTML helps with result findings in google
- The <meta> tag defines metadata about an HTML document. 
- Metadata is data (information) about data.

What is iframe?
- An iFrame (Inline Frame) is an HTML document embedded inside another HTML document on a website

What is character encoding?
- A character encoding tells the computer how to interpret raw zeroes and ones into real characters. 
- It usually does this by pairing numbers with characters

What are semantic elements?
- In HTML there are some semantic elements that can be used to define different parts of a web page:

What does DOCTYPE do?
- Doctype stands for Document Type Declaration. 
- It informs the web browser about the type and version of HTML used in building the web document. 
- This helps the browser to handle and load it properly.

What is new in HTML5?
- Video and audio tags
- Storage
- Web browser support
- Header and footer elements

Canvas vs SVG
The HTML <svg> element is a container for SVG graphics. SVG stands for Scalable Vector Graphics. SVG and useful for defining graphics such as boxes, circles, text, etc. SVG stands for Scalable Vector Graphics and is a language for describing 2D-graphics and graphical applications in XML and the XML is then rendered by an SVG viewer. Most of the web browsers can display SVG just like they can display PNG, GIF, and JPG.
The HTML <canvas> element is used to draw graphics, via JavaScript. The<canvas> element is a container for graphics.

Can a web page contain multiple <header> /<footer> elements?
- Yes, but with a catch. 
- The W3 documents state that the tags represent the header and footer areas of their nearest ancestor section. 
- I would recommend having as many as your want, but only 1 of each for each "section" of your page, i.e. body, section etc.

Why is it generally a good idea to position CSS <link>s between <head></head> and JS <script>s just before </body>?
- Placing <link>s in the <head> — Putting <link>s in the head is part of the specification. 
  - Besides that, placing at the top allows the page to render progressively which improves user experience. 
  - The problem with putting stylesheets near the bottom of the document is that it prohibits progressive rendering in many browsers, including Internet Explorer. 
  - Some browsers block rendering to avoid having to repaint elements of the page if their styles change. 
  - The user is stuck viewing a blank white page. It prevents the flash of unstyled contents.
- Placing <scripts>s just before </body> — <script>s block HTML parsing while they are being downloaded and executed. 
  Downloading the scripts at the bottom will allow the HTML to be parsed and displayed to the user first.

What is DOM?
- Document Object Model
- Tree structure wherein each node is an object representing a part of the document

HTML5 vs XHTML
- HTML5 is compatible with all browsers. XHTML is not.
- XHTML need closing tags and not all HTML5 elements need closing tags

Where should we put <link> and <script> and why
- In the <head> tag
- Alerts the browser to start interpreting all the text between tags as a script

508 policy / ARIA (Accessible Rich Internet Applications)
- set of attributes that define ways to make web content and web applications 
- (especially those developed with JavaScript) more accessible to people with disabilities.
 
