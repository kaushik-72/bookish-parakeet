# DOM Practice Questions – Event Handling & Manipulation (Based on index.html)

---

## 🟢 Easy Level

---

### Q1. Selecting Elements by ID  
**Difficulty:** Easy  
**Concepts Covered:** `getElementById`

- Select the `<h4>` element using its `id`.
- Change its text color using JavaScript.
- Do not use inline styles in HTML.

---

### Q2. Inline Event Handling  
**Difficulty:** Easy  
**Concepts Covered:** `onclick` attribute

- Identify which element uses inline `onclick`.
- Replace the inline event with a JavaScript-based event listener.
- Ensure the behavior remains the same.

---

### Q3. Button Click Logging  
**Difficulty:** Easy  
**Concepts Covered:** `addEventListener`

- Select the button using its `id`.
- Log `"Button Clicked"` to the console on click.
- Do not use inline HTML events.

---

## 🟡 Medium Level

---

### Q4. Styling Elements on Button Click  
**Difficulty:** Medium  
**Concepts Covered:** DOM styling, events

- On button click:
  - Change the `<h4>` text color.
  - Add underline decoration.
- Use `addEventListener` only.

---

### Q5. Toggle Styles  
**Difficulty:** Medium  
**Concepts Covered:** conditionals, style toggling

- Toggle `<h4>` text color between red and blue on each button click.
- Use `if-else` logic.
- Do not use CSS classes.

---

### Q6. Selecting Nested Elements  
**Difficulty:** Medium  
**Concepts Covered:** DOM traversal

- From the first `.block` div:
  - Access the nested `<span>`.
  - Change its text content.
- Do not use `getElementById`.

---

## 🔴 Hard Level

---

### Q7. Removing Clicked Elements  
**Difficulty:** Hard  
**Concepts Covered:** event handling, `remove()`

- Add click listeners to all direct children of `<body>`.
- Remove the clicked element from the DOM.
- Ensure the loop does not break.

---

### Q8. Preventing Event Conflicts  
**Difficulty:** Hard  
**Concepts Covered:** event propagation

- Stop the `<span>` click alert from triggering when its parent is clicked.
- Modify only JavaScript, not HTML structure.

---

### Q9. Dynamic Event Binding  
**Difficulty:** Hard  
**Concepts Covered:** live DOM behavior

- Add a new paragraph dynamically.
- Ensure clicking it removes only that paragraph.
- Reuse existing logic where possible.

---

## 🔥 Toughest / New Concept

---

### Q10. Event Delegation  
**Difficulty:** Toughest  
**Concepts Covered:** event delegation

- Attach a single click listener to `<body>`.
- Remove only the clicked child element.
- Avoid attaching listeners to each child individually.

---

### Q11. Safe DOM Updates  
**Difficulty:** Toughest  
**Concepts Covered:** DOM safety

- Modify text and styles without causing layout breaking.
- Ensure no JavaScript errors occur after element removal.

---

---

## 📌 Interview-Critical Topics Not Covered in the Code (index.html)

- **Event Bubbling & Capturing Phases**  
  Frequently tested to understand event flow.

- **Event Delegation Patterns**  
  Critical for performance in large DOM trees.

- **`preventDefault()` Usage**  
  Common in form and anchor handling questions.

- **`classList` API**  
  Preferred way to toggle styles dynamically.

- **`querySelectorAll` vs HTMLCollection**  
  Static vs live collection behavior is a popular trap.

- **DOM Reflow & Repaint Concepts**  
  Important for performance optimization discussions.

- **Custom Events**  
  Used in advanced UI interactions.

- **MutationObserver**  
  Tests understanding of dynamic DOM monitoring.

---


