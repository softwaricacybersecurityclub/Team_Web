# Document Object Module (DOM)

## What is DOM ?

The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects; that way, programming languages can interact with the page.

A web page is a document that can be either displayed in the browser window or as the HTML source. In both cases, it is the same document but the Document Object Model (DOM) representation allows it to be manipulated. As an object-oriented representation of the web page, it can be modified with a scripting language such as JavaScript.

![](https://www.javascripttutorial.net/wp-content/uploads/2020/01/Document-Object-Model-in-JavaScript.png)


# Accessing the DOM

When you create a script, whether inline in a script element or included in the web page, you can immediately begin using the API for the document or window objects to manipulate the document itself, or any of the various elements in the web page (the descendant elements of the document). Your DOM programming may be something as simple as the following example, which displays a message on the console by using the console.log() function:

```js
<body>

document.querySelector("h1").innerHTML="Good Morning";

</body>

```

> What is the actual meaning of DOM in JavaScript

As, we Know Java Script(JS) helps for the behavior of the Website just like that DOM is represents as Document in all the part of Java Script means that we can view all an HTML document as a tree of nodes. A node represents an HTML element.

![](https://cdn.pixabay.com/photo/2022/03/21/21/44/file-7084007_1280.png)


### Lets Understand from the following Codes below:

```js
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>DOM tree structure</title>
  </head>
  <body>
    <h1>DOM tree structure</h1>
	<h2>Learn about the DOM</h2>
  </body>
</html>

```


Our document is called the root node and contains one child node which is the <html> element. The <html> element contains two children which are the <head> and <body> elements.

Both the <head> and <body> elements have children of their own.




##### Select of Elements through the Document

There are few different majors of selecting the HTML element in document some are :

- getElementbyID();
- getElementbyClass();
- querySelectorAll()

> getElementbyID();

In HTML, ids are used as unique identifiers for the HTML elements. This means you cannot have the same id name for two different elements.

```js
<p id="para1">This is my first paragraph.</p>
<p id="para2">This is my second paragraph.</p>
```
In JavaScript, we can grab an HTML tag by referencing the id name.

```js
document.getElementById("id name goes here")

```


>getElementbyClass();

In HTML , class are used as an identifiers for the HTML elementes. In the class you can have multiple values of smae class in different HTML elements.


```js
<p id="sushmita">This is my first paragraph.</p>
<p id="sushmita">This is my second paragraph.</p>

```

In JavaScript, we can grab an HTML tag by referencing the class name.

```js
document.getElementById("id name goes here")
```

> querySelector();

You can use this method to find elements with one or more CSS selectors.

I have created this HTML example of my friends:


```js

<h1>Sushmita Friends</h1>
<ul class="list">
  <li>Anisha</li>
  <li>Menuka</li>
  <li>Sagun</li>
  <li>Sanchita/li>
</ul>

```

If I wanted to find and print to the console the h1 element, then I could use that tag name inside the querySelector().

```js
const h1Element = document.querySelector("h1");
console.log(h1Element);
```

#### Some Fun jokes at the end related to JavaScript .

>![](https://qph.cf2.quoracdn.net/main-qimg-73a493fb3d03c1b1c49703583adf544b-lq)

>![](https://qph.cf2.quoracdn.net/main-qimg-e6254d8b9a4a91ea16070fa278f8ee5a-lq)

>![](https://miro.medium.com/max/1204/1*5unecQiI9HZW2jzTqIWOIA.jpeg)

>![](https://833250.smushcdn.com/1694534/wp-content/uploads/2021/06/its-a-frontend-is-it-3oth-its-both-backend-i-44043917-1.png?lossy=1&strip=1&webp=1)

### Some JS to say you Bye 😂👋

```js
<script>

<h1 id="bye-bye-people"> It was nice to meet you and hope you enjoy Learning !</h1>


document.querySelector("h1").innerhtml="Enjoyyyy ";


</script>

```
