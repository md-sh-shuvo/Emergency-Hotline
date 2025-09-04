

1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
ans: getElementById(id) finds one element with the given id. If it doesn’t exist, it returns null.
getElementsByClassName(className) finds all elements with the given class name and gives them in a live list (updates if the page changes).
querySelector(selector) finds the first element that matches a CSS selector.
querySelectorAll(selector) finds all elements that match a CSS selector and gives them in a fixed list (does not update).



2. How do you create and insert a new element into the DOM?
ans: Use document.createElement() to make a new element, add text or attributes to it, and then put it inside the page using appendChild(), prepend(), or insertBefore().

Example: (javascript)
let div = document.createElement("div");
div.innerText= "this is a div";
document.body.appendChild(div);



3. What is Event Bubbling and how does it work? 
ans: Event bubbling means when an event happens on the deepest element, it also goes up to its parent elements one by one. For example, if you click a button inside a div, the event first runs on the button, then on the div, then on the body, and finally on the document.



4. What is Event Delegation in JavaScript? Why is it useful?
ans: Event delegation means adding one event listener to a parent element to manage events for its child elements. It is useful because it needs fewer event listeners, works faster, and also works for new child elements added later.


5. What is the difference between preventDefault() and stopPropagation() methods?
ans: preventDefault() stops the normal action of an element (for example, stopping a form from submitting or a link from opening).
stopPropagation() stops the event from moving up to parent elements.

