# DOM Practice Questions – index.html (Dynamic List & Event Handling)

---

## 📁 File to Work On

Create a new file:

**`practice-dom.html`**

Use the same structure (HTML + JS inside `<script>` tag), but build features using **different content** such as:

- Grocery items  
- Task names  
- Student names  
- Product list  
- Notes list  

Do NOT reuse the same variable names or text from the original file.

---

# 🟢 EASY LEVEL

---

## 1️⃣ Question 1 – Button Text Update  
**Difficulty:** Easy  
**Concepts Covered:** `getElementById`, `innerText`, `click event`

### Task:
- Add text inside the button like **"Add Item"**.
- When clicked:
  - Change the button text to **"Item Added"**.
  - After 2 seconds, revert back to original text.

---

## 2️⃣ Question 2 – Add Static List Item  
**Difficulty:** Easy  
**Concepts Covered:** `createElement`, `appendChild`

### Task:
- Create a `<ul>` element inside the container.
- On button click:
  - Add a list item with text **"New Product"**.
- Every click should add a new item.

---

## 3️⃣ Question 3 – Show Click Count  
**Difficulty:** Easy  
**Concepts Covered:** Counter logic, DOM update

### Task:
- Display a paragraph above the button.
- Each click should update:
  - `Total Clicks: X`

---

# 🟡 MEDIUM LEVEL

---

## 4️⃣ Question 4 – Alternate Item Styling  
**Difficulty:** Medium  
**Concepts Covered:** `classList`, conditional styling

### Task:
- Add items dynamically.
- Apply:
  - Even items → Light background
  - Odd items → Dark background

---

## 5️⃣ Question 5 – Limit Items to 5  
**Difficulty:** Medium  
**Concepts Covered:** Condition checks, disabling button

### Task:
- Allow maximum 5 list items.
- After 5 items:
  - Disable the button.
  - Change button text to **"Limit Reached"**

---

## 6️⃣ Question 6 – Remove Last Item  
**Difficulty:** Medium  
**Concepts Covered:** `removeChild`, DOM traversal

### Task:
- Add another button: **"Remove Last Item"**
- When clicked:
  - Remove the most recently added list item.

---

# 🔴 HARD LEVEL

---

## 7️⃣ Question 7 – Click to Remove Specific Item  
**Difficulty:** Hard  
**Concepts Covered:** Event delegation, `event.target`

### Task:
- When a list item is clicked:
  - Remove only that specific item.
- Do NOT add separate event listeners to every item manually.

---

## 8️⃣ Question 8 – Reset Everything  
**Difficulty:** Hard  
**Concepts Covered:** `innerHTML`, resetting variables

### Task:
- Add a **Reset** button.
- On click:
  - Remove all list items.
  - Reset counter to 1.
  - Re-enable button (if disabled).

---

## 9️⃣ Question 9 – Prevent Empty Add  
**Difficulty:** Hard  
**Concepts Covered:** Input validation

### Task:
- Add an `<input>` field.
- Button should:
  - Add input value as list item.
  - If empty → Show alert.
  - Clear input after adding.

---

# 🟣 TOUGHEST / NEW CONCEPT LEVEL

---

## 🔟 Question 10 – Toggle Mode (Add / Remove Mode)  
**Difficulty:** Toughest  
**Concepts Covered:** State management, conditional logic

### Task:
- Add a toggle button:
  - Mode 1 → Add items
  - Mode 2 → Clicking item removes it
- Display current mode on screen.

---

## 1️⃣1️⃣ Question 11 – Auto Numbered List with Persistent Count  
**Difficulty:** Toughest  
**Concepts Covered:** Maintaining state variable

### Task:
- Each item should display:
  - `1. Task Name`
  - `2. Task Name`
- If an item is deleted:
  - Do NOT reset numbering.
  - Continue incrementing.

---

## 1️⃣2️⃣ Question 12 – Dynamic Element Creation on Page Load  
**Difficulty:** Toughest  
**Concepts Covered:** `DOMContentLoaded`

### Task:
- When page loads:
  - Automatically create:
    - Heading
    - Description paragraph
    - List container
    - Button
- No HTML elements except `<body>` should be pre-written.

---

# 🚨 Interview-Critical Topics Not Covered in the Code (index.html)

---

- **Event Delegation**
  - Important for handling dynamic elements efficiently in large applications.

- **addEventListener vs onclick**
  - Frequently asked difference in interviews.

- **Event Bubbling & Capturing**
  - Core DOM concept tested in frontend interviews.

- **querySelector / querySelectorAll**
  - Modern and widely used DOM selectors.

- **classList API**
  - Essential for styling manipulation dynamically.

- **setAttribute / getAttribute**
  - Important for managing custom attributes and accessibility.

- **LocalStorage / SessionStorage**
  - Common real-world requirement for saving state.

- **Form Handling & Prevent Default**
  - Frequently asked in React and Vanilla JS interviews.

- **Debouncing / Throttling**
  - Performance optimization concept.

- **Memory Leaks in Event Listeners**
  - Advanced topic asked in mid-level interviews.

---

✅ Practice these by modifying `practice-dom.html` step-by-step.
