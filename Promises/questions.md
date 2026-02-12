# DOM + Async JavaScript Practice Questions – index.html

---

## 📁 File to Work On

Create a new file:

**`async-dom-practice.html`**

Build all features inside this file using:
- Different variable names
- Different API endpoint (for example: `https://jsonplaceholder.typicode.com/users`)
- Different text content (do NOT reuse the name shown in the original file)

---

# 🟢 EASY LEVEL

---

## 1️⃣ Question 1 – Change Username Text  
**Difficulty:** Easy  
**Concepts Covered:** `getElementById`, `innerText`

### Task:
- Select the span element dynamically (remove inline `onclick`).
- Change the displayed name to something else using JavaScript.
- Log the old name in console before updating it.

---

## 2️⃣ Question 2 – Replace Inline Event with addEventListener  
**Difficulty:** Easy  
**Concepts Covered:** `addEventListener`, event handling

### Task:
- Remove the inline `onclick`.
- Add a click event listener using JavaScript.
- On click:
  - Show alert with custom message.
  - Change text color of the clicked element.

---

## 3️⃣ Question 3 – Modify Paragraph Content  
**Difficulty:** Easy  
**Concepts Covered:** `querySelector`, DOM text update

### Task:
- Select the paragraph with class `paragraph`.
- Change its content to:
  - “JavaScript DOM Practice Running”
- Add a border around it using JS.

---

# 🟡 MEDIUM LEVEL

---

## 4️⃣ Question 4 – Display API Data Count  
**Difficulty:** Medium  
**Concepts Covered:** `fetch`, `async/await`, DOM update

### Task:
- Fetch data from:
  - `https://jsonplaceholder.typicode.com/users`
- Display:
  - Total number of users on the page (not just console).

---

## 5️⃣ Question 5 – Display Titles in List Format  
**Difficulty:** Medium  
**Concepts Covered:** `createElement`, `appendChild`, async handling

### Task:
- Fetch posts data.
- Create a `<ul>` dynamically.
- Show first 5 titles inside list items.
- Do NOT use `innerHTML` for inserting the list.

---

## 6️⃣ Question 6 – Loading Indicator  
**Difficulty:** Medium  
**Concepts Covered:** Async flow control

### Task:
- Before API call:
  - Show “Loading data…”
- After data loads:
  - Remove loading message.
  - Display fetched content.

---

# 🔴 HARD LEVEL

---

## 7️⃣ Question 7 – Error Handling UI  
**Difficulty:** Hard  
**Concepts Covered:** `try/catch`, `.catch()`, DOM error display

### Task:
- Use an incorrect API URL intentionally.
- Show:
  - “Failed to load data” message on screen.
- Do NOT only log error in console.

---

## 8️⃣ Question 8 – Compare Promise vs Async/Await  
**Difficulty:** Hard  
**Concepts Covered:** Promise chaining vs async/await

### Task:
- Fetch same API twice:
  - Once using `.then()`
  - Once using `async/await`
- Display results in two different sections.
- Clearly label both sections.

---

## 9️⃣ Question 9 – Prevent Multiple API Calls  
**Difficulty:** Hard  
**Concepts Covered:** Button disabling, state control

### Task:
- Add a button: “Load Posts”
- On click:
  - Fetch and display posts.
  - Disable button after first click.
  - Re-enable only after 5 seconds.

---

# 🟣 TOUGHEST / NEW CONCEPT LEVEL

---

## 🔟 Question 10 – Display Data Cards  
**Difficulty:** Toughest  
**Concepts Covered:** DOM structuring, nested elements

### Task:
- Fetch users.
- For each user:
  - Create a card structure:
    - Name
    - Email
    - City
- Style dynamically using JavaScript.

---

## 1️⃣1️⃣ Question 11 – Remove Existing Content Before Reload  
**Difficulty:** Toughest  
**Concepts Covered:** DOM cleanup

### Task:
- If user clicks load button again:
  - Remove previously displayed data.
  - Fetch fresh data.
- Avoid duplicating entries.

---

## 1️⃣2️⃣ Question 12 – Measure Fetch Time  
**Difficulty:** Toughest  
**Concepts Covered:** Performance measurement

### Task:
- Before fetch:
  - Capture start time.
- After response:
  - Display:
    - “Data loaded in X ms”

---

# 🚨 Interview-Critical Topics Not Covered in the Code (index.html)

---

- **Event Delegation**
  - Efficient handling of dynamic elements in large applications.

- **Event Bubbling & Capturing**
  - Core DOM propagation concept frequently asked.

- **removeEventListener**
  - Important for preventing memory leaks.

- **AbortController (Cancel Fetch Requests)**
  - Advanced async control frequently asked in interviews.

- **CORS (Cross-Origin Resource Sharing)**
  - Critical concept when working with APIs.

- **HTTP Status Code Handling**
  - Proper production-grade error handling.

- **LocalStorage / SessionStorage**
  - Used for persisting API data.

- **Debouncing / Throttling**
  - Performance optimization topic.

- **Promise.all / Promise.race**
  - Important for handling multiple async operations.

- **Closures in Async Code**
  - Frequently tested JavaScript concept.

---

✅ Practice implementing each question step-by-step in `async-dom-practice.html`.
