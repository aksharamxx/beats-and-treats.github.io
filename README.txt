================================================
  BEATS & TREATS — Website Instructions
================================================

FILES IN THIS FOLDER:
  index.html     → Home page
  products.html  → Menu / Products page
  preorder.html  → Preorder form page
  style.css      → All the styling
  script.js      → iPod widget animation
  images/        → Put your own photos here (create this folder)

================================================
  HOW TO REPLACE PLACEHOLDER IMAGES
================================================

1. Take photos of your actual food items
2. Create a folder called "images" inside this folder
3. Save your photos in there (e.g. snoop-cookie.jpg, tiramisu.jpg etc.)
4. Open products.html in a text editor (Notepad, VS Code, etc.)
5. Find lines like:
      src="https://images.unsplash.com/..."
   and replace with your own path, e.g.:
      src="images/snoop-cookie.jpg"
6. There are comments in the HTML like:
      <!-- ↑ REPLACE THIS SRC with your own photo -->
   to help you find each one.

================================================
  HOW TO ADD YOUR GOOGLE FORM
================================================

1. Open your Google Form
2. Click the three-dot menu (⋮) in the top right
3. Click "Embed HTML"
4. Copy the <iframe ...> code Google gives you
5. Open preorder.html in a text editor
6. Find the section that says:
      <!-- PLACEHOLDER — replace with your Google Form iframe -->
7. Delete the entire <div class="form-placeholder">...</div> block
8. Paste your Google Form iframe code in its place
9. Add width="100%" to the iframe tag so it fills the frame

================================================
  HOW TO PUBLISH YOUR WEBSITE (free options)
================================================

OPTION 1 — Netlify Drop (easiest, recommended):
  1. Go to https://app.netlify.com/drop
  2. Drag and drop the entire "beats-and-treats" folder onto the page
  3. It gives you a free URL instantly (e.g. random-name.netlify.app)
  4. You can rename it under Site Settings → Domain Management
  5. Share the link with your class!

OPTION 2 — GitHub Pages (free, slightly more steps):
  1. Create a free account at https://github.com
  2. Create a new repository called "beats-and-treats"
  3. Upload all files
  4. Go to Settings → Pages → Branch: main → Save
  5. Your site will be at: yourusername.github.io/beats-and-treats

OPTION 3 — Google Sites (simplest if you already use Google):
  Note: Google Sites doesn't support custom HTML files.
  You'd need to recreate the pages using Google Sites editor,
  but you can embed your Google Form there natively.

================================================
  HOW TO UPDATE YOUR SITE AFTER PUBLISHING
================================================

- Netlify: just drag the updated folder onto netlify.app/drop again
- GitHub Pages: re-upload changed files through the GitHub website

================================================
  TIPS
================================================

- The site works on mobile automatically
- The iPod widget on the home page cycles through your menu items
- Scrolling tape banners loop automatically
- Coupon rows at the bottom are print-friendly
- All fonts load from Google Fonts (needs internet to display correctly)

Good luck at the stall! 🎧🩷
