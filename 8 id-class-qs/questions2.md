# DOM Practice Questions – Based on index.html

---

## 🟢 Easy Level

---

### Q1. Accessing Elements by Class Name  
**Difficulty:** Easy  
**Concepts Covered:** `getElementsByClassName`, HTMLCollection  

- Select all elements with class `block`.
- Log the total number of matched elements.
- Log the text content of each matched element using a loop.

---

### Q2. Updating Text Content  
**Difficulty:** Easy  
**Concepts Covered:** `getElementById`, `textContent`  

- Select the `<span>` with id `username`.
- Change the name text to your full name.
- Ensure no other content is affected.

---

### Q3. Applying Inline Styles  
**Difficulty:** Easy  
**Concepts Covered:** `style` property  

- Select the second element with class `block`.
- Change its text color to blue.
- Change its font size using JavaScript.

---

## 🟡 Medium Level

---

### Q4. Looping Over HTMLCollection  
**Difficulty:** Medium  
**Concepts Covered:** HTMLCollection, loops  

- Loop through all elements with class `block`.
- Apply a background color only to `<div>` elements.
- Skip `<p>` elements during styling.

---

### Q5. Removing Elements Dynamically  
**Difficulty:** Medium  
**Concepts Covered:** `remove()`, live collections  

- Remove Box 1 and Box 3 from the DOM.
- Ensure Box 2 and Box 4 remain visible.
- Do this using only `getElementsByClassName`.

---

### Q6. Understanding Live HTMLCollection Behavior  
**Difficulty:** Medium  
**Concepts Covered:** live DOM updates  

- Log the HTMLCollection of `.box` elements before removal.
- Remove one `.box` element.
- Log the collection again and observe the change.

---

## 🔴 Hard Level

---

### Q7. Conditional DOM Manipulation  
**Difficulty:** Hard  
**Concepts Covered:** `tagName`, conditions  

- Loop through elements with class `block`.
- Change text color only if the element is a `<p>`.
- Leave other elements unchanged.

---

### Q8. Creating Elements Dynamically  
**Difficulty:** Hard  
**Concepts Covered:** `createElement`, `appendChild`  

- Create a new `<div>` with class `box`.
- Set its text as `Box 5`.
- Append it after `Box 4`.

---

### Q9. Safe DOM Traversal  
**Difficulty:** Hard  
**Concepts Covered:** DOM hierarchy  

- From the first `.block` div, access the nested `<span>`.
- Change its text color without using `getElementById`.

---

## 🔥 Toughest / New Concept

---

### Q10. Static vs Live Collections  
**Difficulty:** Toughest  
**Concepts Covered:** `querySelectorAll` vs `getElementsByClassName`  

- Select all `.box` elements using `querySelectorAll`.
- Remove one box from the DOM.
- Compare the behavior with `getElementsByClassName`.

---

### Q11. Event-Based DOM Manipulation  
**Difficulty:** Toughest  
**Concepts Covered:** events, DOM updates  

- Add a click event to Box 2.
- On click, remove Box 4 from the DOM.
- Ensure no errors occur if Box 4 is already removed.

---

---

## 📌 Interview-Critical Topics Not Covered in the Code (index.html)

- **Event Bubbling & Capturing**  
  Important for handling nested click events efficiently.

- **Event Delegation**  
  Commonly used for performance when handling dynamic lists.

- **`addEventListener` vs inline events**  
  Frequently asked to test best practices.

- **`classList` API (`add`, `remove`, `toggle`)**  
  Cleaner and safer class manipulation than `className`.

- **DOM Performance Optimization**  
  Reducing reflows and repaints is crucial in real-world apps.

- **`data-*` attributes**  
  Widely used for storing metadata in DOM elements.

- **MutationObserver**  
  Advanced topic for observing DOM changes dynamically.

- **Shadow DOM (basics)**  
  Increasingly relevant with Web Components and modern frameworks.
