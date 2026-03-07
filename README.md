
📝 Author Documentation
Author: Kyler Hanson

Date: 2026-03-06 

Author GitHub URL: https://github.com/kyhans07

Project URL: https://github.com/kyhans07/Smartwatch-FAQ-

<br>

⚾ Baseball FAQ Project
This project is a dynamic, interactive FAQ page. It uses JavaScript to create an accordion effect where clicking a question reveals an answer and updates a main feature image.
<br><br><br>
📌 Project Overview
The goal of this assignment was to create a user-friendly interface that provides information about baseball rules while visually reflecting the topic currently being read.
<br><br><br>
🛠 Features
Interactive Accordion: Clicking a question (H2) toggles the visibility of the answer below it.

<b>Visual Feedback:</b> The plus sign (+) next to a question changes to a minus sign (-) when expanded.
<br><br>
<strong>Dynamic Image Switching:</strong> The main page image updates based on the specific question clicked using data-img attributes.
<br><br>
<strong>Auto-Reset Logic:</strong> If a user closes an active question, the main image automatically resets to the default baseball image.
<br><br>
<strong>Exclusive Focus:</strong> Only one FAQ remains open at a time; opening a new one automatically closes the previous one.

<h1>📂 Code Structure </h1>
<h2>1. HTML (index.html)</h2>
Uses a main img tag with the ID #full-width-img.

FAQ questions are wrapped in h2" tags.

Data Attributes: Each h2 contains data-img and data-alt to store the paths for the matching images.

<h2>2. JavaScript (faqs_pseudocode.js)</h2>
Global Variables: Captures the main image and all headings.

Event Handling: Uses addEventListener to listen for clicks on every heading.

DOM Manipulation: Uses nextElementSibling to find the answer <div> and classList.toggle to apply CSS styles.

<h2>3. CSS (faqs.css)</h2>
Manages the transition between display: none and display: block.

Handles the background images for the plus and minus icons.

<h2>🚀 How to Run</h2>

<img width="1184" height="790" alt="image" src="https://github.com/user-attachments/assets/f8db4ed4-5727-4921-a1fe-6ddff1f1dad3" />

<img width="1242" height="962" alt="image" src="https://github.com/user-attachments/assets/19c9ba37-f509-4f3a-89bf-e2b9ebcd3251" />

<img width="1214" height="968" alt="image" src="https://github.com/user-attachments/assets/66cf1c8f-da39-4d2f-bd01-13f36b7bb933" />





Click on a question to see the image and text change!
