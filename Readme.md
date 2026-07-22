1.getElementById finds element by its id, getElementsByClassName finds element by its class,  querySelector finds element matching CSS selector, querySelectorAll finds all elements matching CSS selector.

2.Use createElement to create the element in the memory then set its contant and insert it into the actual page by using appendChild.

3.When we click something the click does not just trigger on that one element it also bubbles up and triggers on all its parent elements too, one by one all the way up to the top of the page.

4.Instead of attaching a separate click listener to every single button we can attach one listener to their shared parent and rely on bubbling when any button inside is clicked the event bubbles up to the parent and we can check inside the handler which specific child was actually clicked.
Why it useful: fewer listeners and it automatically works for elements added later even after the page loads

5.preventDefault() stops the browser default actions and stopPropagation() stops the event from bubbling up further to parent elements.