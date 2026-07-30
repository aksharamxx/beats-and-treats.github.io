# Beats & Treats Website

## Files
- `index.html` — Home page
- `products.html` — Food menu (6 products)
- `items.html` — Bracelets (4 styles, preorder only)
- `preorder.html` — Preorder form page
- `style.css` — All styling
- `script.js` — Scrolling tape animation
- `images/` — Put all your photos in here

## How to add your photos

Save your photos into the `images/` folder with these exact filenames:

| File | Used for |
|---|---|
| `images/snoop-cookies.jpg` | Snoop Dogg Stuffed Cookies |
| `images/bieber-brookies.jpg` | Bieber Brookies |
| `images/churros.jpg` | Central Cee Chocolate Churros |
| `images/cheesecake.jpg` | Chance the Cheesecake Cups |
| `images/tiramisu.jpg` | Tyler the Tiramisu |
| `images/mochi.jpg` | Minaj Mochi |
| `images/bracelet-1.jpg` | Bracelet Style 1 |
| `images/bracelet-2.jpg` | Bracelet Style 2 |
| `images/bracelet-3.jpg` | Bracelet Style 3 |
| `images/bracelet-4.jpg` | Bracelet Style 4 |
| `images/logo.png` | Optional logo image |

If you want different filenames, open the relevant HTML file and update the `src="images/..."` attribute.

## How to add your Google Form (preorder page)

1. Open your Google Form
2. Click ⋮ → **Embed HTML**
3. Copy the `<iframe>` code
4. Open `preorder.html` in VS Code or Notepad
5. Delete the `<div class="form-placeholder">...</div>` block
6. Paste your `<iframe>` in its place with `width="100%"`

## How to publish on GitHub Pages

1. Go to [github.com](https://github.com) and sign in (or create a free account)
2. Click **New repository** → name it `beats-and-treats` → set to **Public** → click **Create**
3. Click **uploading an existing file**
4. Drag ALL the files and the `images/` folder into the upload area
5. Click **Commit changes**
6. Go to **Settings** → **Pages** → under Branch select `main` → click **Save**
7. Wait ~1 minute → your site is live at: `https://YOUR-USERNAME.github.io/beats-and-treats`

## How to edit text

Every editable section has a comment above it in the HTML files.
Open any `.html` file in VS Code or Notepad and search for the text you want to change.

## Colour reference

Main pink: `#ff5dd1`  
To change it: open `style.css`, find `--pink: #ff5dd1;` on line ~22, change the hex value.
