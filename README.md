# 🛒 DOM Shopping Cart Project

## 📌 Project Overview
This project is part of the **DOM checkpoint**. The goal was to recreate a **fully functional shopping cart** using **JavaScript DOM manipulation**.

The provided **HTML and CSS** were used as the base structure, while **JavaScript** was implemented to add dynamic functionality such as updating quantities, deleting products, liking items, and automatically calculating the total price.

This project demonstrates how **DOM events and element manipulation** can be used to create interactive web applications.

---

## 🎯 Objectives
The main objective of this project was to practice working with the **Document Object Model (DOM)** by implementing JavaScript features that make the shopping cart interactive.

Users should be able to:

- Increase product quantity using the **"+" button**
- Decrease product quantity using the **"-" button**
- **Delete items** from the cart
- **Like items** using a heart icon ❤️
- Automatically **update the total price**
- Display the **total number of items in the cart**

---

## ⚙️ Features Implemented

### ➕ Increase Quantity
Users can click the **plus icon** to increase the number of items for a product.

### ➖ Decrease Quantity
Users can click the **minus icon** to decrease the number of items.  
The quantity cannot go below **0**.

### 🗑 Delete Product
Users can remove a product from the cart completely by clicking the **trash icon**.

### ❤️ Like Product
Users can click the **heart icon** to like a product.  
The heart icon changes color when selected.

### 💰 Automatic Total Price Calculation
The total price updates automatically whenever:
- Quantity changes
- A product is deleted

### 🛒 Cart Item Counter
The navigation bar displays the **total number of items currently in the cart**.

---

## 🧰 Technologies Used

- **HTML5** – Structure of the webpage  
- **CSS3** – Styling and animations  
- **JavaScript (DOM Manipulation)** – Interactive functionality  
- **Bootstrap 5** – Responsive layout and components  
- **Font Awesome** – Icons used for cart actions  

---


---

## 🖥 How It Works

JavaScript selects DOM elements such as:

- Quantity buttons
- Delete icons
- Like icons
- Product prices

Event listeners are attached to these elements to detect user interactions.

When an action occurs, JavaScript updates:

- Product quantity
- Total cart price
- Number of items in the cart

This ensures the shopping cart always reflects the **current state of the user's selections**.

---

## 🎨 UI Enhancements

Additional improvements were added to improve the user experience:

- Product **hover animations**
- **Icon hover effects**
- **Styled total price box**
- **Cart badge indicator**
- Smooth **heart like animation**

---

## 🚀 Learning Outcomes

Through this project, I practiced:

- Selecting and manipulating DOM elements
- Handling **JavaScript event listeners**
- Updating the DOM dynamically
- Calculating totals using JavaScript
- Writing **clean and well-commented code**

This project strengthened my understanding of how **JavaScript interacts with HTML elements through the DOM**.

---

