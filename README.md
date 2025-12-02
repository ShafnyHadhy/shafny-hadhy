# Shafny Hadhy Portfolio

A fully responsive, modern, dark-themed software engineering portfolio website built with React, Tailwind CSS, and Framer Motion.

## Setup

1.  Install dependencies:
    ```bash
    npm install
    ```
2.  Run development server:
    ```bash
    npm run dev
    ```

## Customization Instructions

### 1. Resume
-   Place your resume PDF file in the `public` folder and name it `resume.pdf`.
-   Update the Google Drive link in `src/components/Resume.jsx`.

### 2. Contact Form
-   The contact form uses Formspree (or you can switch to EmailJS).
-   Go to `src/components/Contact.jsx` and replace `https://formspree.io/f/YOUR_ID` with your actual Formspree endpoint.

### 3. Social Links
-   Update social media links in:
    -   `src/components/Hero.jsx` (if any)
    -   `src/components/Contact.jsx`
    -   `src/components/Footer.jsx`
    -   `src/components/Projects.jsx` (for project links)

### 4. Projects Data
-   Update your projects in `src/assets/projects.json`.
-   Add project images to `src/assets/` or `public/` and update the paths in the JSON file.

### 5. Images
-   Replace placeholder images in `Hero.jsx`, `About.jsx`, etc. with your actual photos.

## Tech Stack
-   React
-   Tailwind CSS
-   Framer Motion
-   React Icons
-   Vite
