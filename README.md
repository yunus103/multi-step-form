# Multi-Step Subscription Form

This is a front-end project that implements a responsive, multi-step subscription form. Users are guided through a seamless four-step process to select a plan, choose add-ons, and confirm their subscription. The form features interactive elements, client-side validation, and a dynamic summary page that updates based on user selections.

### Project Link: https://yunus103.github.io/multi-step-form/

## ✨ Features

* **Multi-Step Interface:** A clean, guided experience across four distinct steps.
* **Interactive Sidebar:** Tracks the user's progress and allows for clear navigation.
* **Plan Selection:** Users can choose from multiple subscription plans (Arcade, Advanced, Pro).
* **Flexible Billing:** A toggle switch allows users to select between monthly and yearly billing, with prices updating dynamically. A "2 months free" promotion is displayed for yearly plans.
* **Customizable Add-Ons:** Checkboxes for optional services like online storage and customizable profiles.
* **Dynamic Summary Page:** Automatically calculates and displays the selected plan, add-ons, and the total cost before final confirmation.
* **"Change" Option:** Allows users to easily go back to the plan selection step from the summary page to make adjustments.
* **Client-Side Validation:** Ensures that required fields (Name, Email, Phone) are filled before proceeding.
* **Confirmation Screen:** A "Thank You" message appears after the user confirms their subscription.
* **Responsive Design:** The layout adapts smoothly to various screen sizes, from mobile devices to desktops.

## 🛠️ Technologies Used

This project was built using fundamental web technologies, with a focus on clean code and modern practices.

* **HTML5:** Structured with semantic elements for accessibility and clarity.
* **CSS3:** Styled using modern CSS, including Custom Properties (Variables) for easy theme management, Flexbox for layout, and Media Queries for a fully responsive design.
* **Vanilla JavaScript:** All interactivity, state management, and DOM manipulation are handled with plain JavaScript, without the need for external libraries or frameworks.


## 💡 Key Code Logic

The core logic is handled in `script.js`. Here's a brief overview of how it works:

* **Navigation:** Event listeners on the "Next Step" and "Go Back" buttons track the current step and toggle the `.active` class on the corresponding section and sidebar number.
* **State Management:** Simple global variables (`payPeriod`, `plan`, `onlineAddOn`, etc.) are used to store the user's selections throughout the process.
* **Dynamic Pricing:** The billing toggle (`#billing-toggle`) switches the `payPeriod` variable and updates the text content of prices for plans and add-ons across the interface.
* **Total Calculation:** The `calculateTotal()` function computes the final price based on the selected plan, billing period, and chosen add-ons. This total is then rendered on the summary page.


## 👤 Author

Frontend Mentor MultiStep form challenge by Yunus Emre Aytekin