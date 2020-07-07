# Lecture’s Resources

HTML was born as a **MarkUp language**. A way to convey text in documents using hypertext. It got more and more versatile as developers/designers became more creative with the technology and tried to use it to its full potential.

Sooner or later, it became obvious that a way to insert logic to the document, would be very helpful. As the document writer, I might want something to happen when the reader clicks on a text. After all, this text was to be displayed in a software called a “browser”, As opposed to other markup languages (LaTeX for example) that were not necessarily designed to be displayed digitally.
And thus, the **JavaScript** idea was born, as an effort of Netscape, to add logic and to static web documents and make them more **dynamic** and “alive”. And so, the readers became users, the writers became developers, the web pages became web apps, and the browser became semi Operating System. So much so, that a browser is what lies beneath more and more “regular” applications we have nowadays. (**VScode**, **WhatsApp**, **Telegram**, **slack** desktop apps and more)

For that to happen, the browser needed to have more responsibility then before. Not only retrieving web documents and navigating through different pages, but also running **“process like” environment**, with hundreds and thousands of smaller programs inside it, managing multiple windows per session, multiple tabs per window, multiple documents per tab, and even more then that (**chrome extensions**). For each of them, allocating memory for code execution, video and graphic manipulation, sound, event handling for  user interaction, network management and more, all while maintaining an open door for all developers and users to interact internally inside and behind the scenes of the webpage using **Developers Tools**.

As more and more browsers came into existence (**chrome, firefox, safari, Internet Explorer and more**), each of them needed to implement the same behavior for the same internet pages.

In reality, in the cooperate software world, is not easy agreeing on standards. And so, Microsoft, being the dominant company in the early years of the internet (mostly because they shipped their browser as default with their OS, **Windows**) started “branching out” the agreed upon standard and deviating towards their own implementation of a JavaScript execution, which for many years made a real pain for frontend developers.

Nowadays, the implementation of the JavaScript engine is mostly similar, and we have a (relatively) tight **web standards** agreed upon all major actors (Apple, Mozilla, Microsoft, Facebook, and Google). The fighting years are over. Peacetime is upon us. So much so, that you can see many corporations among those companies that are rivals. (https://caniuse.com/)

Those companies are starting to understand the advantage of managing your projects together, and so we see beautiful things like **websockets** (allowing for direct local and remote cross browser communication), frontend libraries like **Angular** and **React** (borrowing ideas one out of each other, even though competing technologies), **TypeScript** wide usage by google (an Microsoft attempt to extend JavaScript, parallel to Dart) and “Edgeium” (Microsoft abandoning a major effort on browser implementation from scratch, only to replace it with a more “googly” version running on top of the **Chromium project**, widely backed by Google, and going after Chrome users).

**V8**, is an “engine” that controls a specific part of the **Chromium open source project**, the part that executes javascript. The only* language the browser understands outside HTML and CSS.
V8 became so popular, that it became embedded inside other projects, mostly NodeJS based applications.

How do engines work?
Engines are complicated. But the basics are easy.
* The engine (embedded if it’s a browser) reads (“parses”) the script.
* Then it converts (“compiles”) the script to the machine language.
* And then the machine code runs, pretty fast.

## Javascript location in an web app
Inside the browser, we can see Javascript code in few locations:
* Under a special tag in an HTML document
* Inside special element attributes
* In external files linked by an **rendered** HTML document
<!-- Show ./index.html -->

## What can in-browser JavaScript do?
Modern JavaScript is a “safe” programming language. It does not provide low-level access to memory or CPU

* Add new HTML to the page, change the existing content, modify styles.
* React to user actions, run on mouse clicks, pointer movements, key presses.
* Send requests over the network to remote servers, download and upload files
* Get and set cookies, ask questions to the visitor, show messages.
* Remember the data on the client-side (“local storage”).

## What CAN’T in-browser JavaScript do?
* JavaScript on a webpage may not read/write* files on the hard disk, copy them or execute programs. It has no direct access to OS functions.
<!-- Modern browsers allow it to work with files, but the access is limited and only provided if the user does certain actions, like “dropping” a file into a browser window or selecting it via an <input> tag. -->

* Different tabs/windows generally do not know about each other.* That’s a safety limitation.
![js limitations](https://javascript.info/article/intro/limitations.svg)
<!-- Sometimes they do, for example when one window uses JavaScript to open the other one. But even in this case, JavaScript from one page may not access the other if they come from different sites (from a different domain, protocol or port).

This is called the “Same Origin Policy”. To work around that, both pages must agree for data exchange and contain a special JavaScript code that handles it. We’ll cover that in the tutorial. -->

"JavaScript is **high-level**, often **just-in-time** compiled, and **multi-paradigm**. It has **curly-bracket syntax**, **dynamic typing**, 
**prototype-based object-orientation**, and **first-class functions**."

Being a high-level programing language, we as javascript developers, do not need to concern ourselves how the hardware handles our code and we can

<!-- What is a programing language?
It is a way to communicate an idea. When we talk about language, we must recognize three aspects: Who is the speaker, who is he speaking to, in what context?
As in HTML, the speaker is the person marking down the language, the speaker is the reader/user, and the context is a browser.
When we write javascript code, we usually need to think who is going to write it.
-->


# Resources
(https://caniuse.com/)
flash
## Tasks
https://forms.gle/4bwWqU79M2T9aVL4A
