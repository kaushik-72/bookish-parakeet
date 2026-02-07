# DOM Manipulation – Practical Questions

Solve the following questions using **JavaScript DOM methods only**.  
Do not modify the HTML structure unless explicitly mentioned.

---

## Practical Question 1 – Easy (Multiple Element Selection)

**Scenario**  
You have multiple `<p>` elements with the class `paragraph`.

**Tasks**
- Use `querySelectorAll()` to select all `<p>` elements with the class `paragraph`.
- Change the text of each paragraph to:  
  **"Paragraph updated using JS"**
- Apply a background color to each paragraph.

**Concepts Covered**
- `querySelectorAll()`
- NodeList iteration
- `innerText`
- Inline styling with JavaScript

---

## Practical Question 2 – Medium (ID Selection & Styling)

**Scenario**  
An element exists with the ID `username`.

**Tasks**
- Select the element using `querySelector`.
- Change its text to your name.
- Make the text bold using JavaScript.

**Concepts Covered**
- `querySelector()`
- `innerText`
- Styling text using JavaScript

---

## Practical Question 3 – Hard (Traversal & Child Manipulation)

**Scenario**  
There are multiple elements with the class `block`.

**Tasks**
- Select all elements with the class `block`.
- For each selected element:
  - Log its tag name to the console.
  - Change only the **first child element’s** text content.

**Concepts Covered**
- `querySelectorAll()`
- `forEach()`
- `tagName`
- `children` / first child element access

---

## Practice Rules
- Use only JavaScript for manipulation.
- Do not change the HTML markup.
- Verify results using the browser console.
