# DOM Practice Questions

> 🛠️ Create a separate **.js file** and perform all JavaScript-related tasks inside it.

> 🧩 Use the provided `questions.html` file for solving the following:

---

# 🟢 Easy Level

---

### ✅ Question 1: Highlight Container Elements

**Difficulty:** Easy  
**Concepts Covered:** getElementsByClassName, Styling

- Select all elements having class name `container`.
- Change the text color of the **second container element** to blue.
- Log the HTMLCollection in the console.

📁 Code in: your `.js` file

---

### ✅ Question 2: Modify Span Text

**Difficulty:** Easy  
**Concepts Covered:** getElementById, innerText

- Select the span element having id `user`.
- Change its displayed name to your own name using JavaScript.

📁 Code in: your `.js` file

---

# 🟡 Medium Level

---

### ⚙️ Question 3: Remove Specific Items

**Difficulty:** Medium  
**Concepts Covered:** HTMLCollection Indexing, .remove()

- Select all elements with class name `item`.
- Remove the **first** and **third** item from the UI.
- Log the updated collection after removal.

📁 Code in: your `.js` file

---

### ⚙️ Question 4: Apply Background Using .item()

**Difficulty:** Medium  
**Concepts Covered:** .item() method, Looping

- Use getElementsByClassName to select all `item` elements.
- Apply a yellow background color to the **second item** using `.item()` method inside a loop.

📁 Code in: your `.js` file

---

# 🔴 Hard Level

---

### 🚀 Question 5: Dynamic Styling of All Items

**Difficulty:** Hard  
**Concepts Covered:** Looping through HTMLCollection, Inline Styling

- Select all elements with class name `item`.
- Apply the following styles dynamically:
  - Font size: 20px
  - Text color: green
  - Border: 1px solid black

📁 Code in: your `.js` file

---

### 🚀 Question 6: Display Remaining Item Text

**Difficulty:** Hard  
**Concepts Covered:** DOM Traversal, Logging

- After removing any two items from the list,
- Loop through the remaining items and print their text content in the console one by one.

📁 Code in: your `.js` file

---

# 📌 Interview-Critical Topics Not Covered in the Code (index.html)

- querySelector / querySelectorAll  
  Modern DOM selection methods commonly asked in interviews.

- addEventListener  
  Essential for building interactive front-end features.

- NodeList vs HTMLCollection  
  Important to understand live vs static collections.

- createElement  
  Needed for dynamic UI rendering tasks.

- appendChild / append  
  Frequently used to add elements to DOM.

- Event Delegation  
  Helps in optimizing performance in large apps.