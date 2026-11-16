# 📘 MI Real Estate & Construction — Website Owner's Guide

This guide is written for you (no coding knowledge needed). Read it top to bottom once — it covers everything: getting the files, adding your photos, updating your contact details, and putting the site live on Hostinger.

---

## 1. What's in this website

| File / Folder | What it is |
|---|---|
| `index.html` | Home page |
| `about.html` | About Us page |
| `services.html` | Services page |
| `projects.html` | Projects page (Naya Nazimabad, Bahria Town, Al Jannat City) |
| `contact.html` | Contact page (form sends messages to your WhatsApp) |
| `css/` | The design (colors, fonts, layout) — don't edit |
| `js/main.js` | **⭐ The ONE file you edit** to change phone, WhatsApp, email, address, hours |
| `images/` | Put your photos here (exact file names listed below) |

---

## 2. How to get these files onto your PC

1. Open the website's GitHub page (the link Claude gave you).
2. Click the green **`< > Code`** button → click **Download ZIP**.
3. The ZIP file downloads to your PC. **Right-click it → Extract All** (very important — don't skip extracting).
4. You now have a folder with all the website files. This folder is your website.

---

## 3. Add your contact details (5 minutes)

1. In the website folder, open the `js` folder.
2. **Right-click `main.js` → Open with → Notepad.**
3. At the very top you will see clearly-labelled lines like:
   ```
   phoneDisplay: "+92 300 0000000",
   whatsapp: "923000000000",
   email: "info@mirealestate.pk",
   address: "Office # — , Main Boulevard, Karachi, Pakistan",
   hours: "Mon – Sat: 10:00 AM – 8:00 PM",
   ```
4. Change ONLY the text between the quotes `"..."`. Do not delete the quotes or commas.
5. **File → Save.** Done — the phone/WhatsApp/email/address update everywhere on the site automatically.

> ⚠️ The **whatsapp** number must be digits only, starting with the country code and NO plus sign. Example: `923001234567`

---

## 4. Add your photos

Put your photos inside the `images` folder using these **exact names** (lowercase, `.jpg`):

| File name | What it shows |
|---|---|
| `hero.jpg` | Big background photo on the home page (a wide, impressive shot works best) |
| `about.jpg` | Photo in the About section (your office, team, or a project) |
| `naya-nazimabad-1.jpg` | Naya Nazimabad — main photo |
| `naya-nazimabad-2.jpg` | Naya Nazimabad — second photo |
| `naya-nazimabad-3.jpg` | Naya Nazimabad — third photo |
| `bahria-town-1.jpg` | Bahria Town — main photo |
| `bahria-town-2.jpg` | Bahria Town — second photo |
| `bahria-town-3.jpg` | Bahria Town — third photo |
| `al-jannat-city-1.jpg` | Al Jannat City — main photo |
| `al-jannat-city-2.jpg` | Al Jannat City — second photo |
| `al-jannat-city-3.jpg` | Al Jannat City — third photo |

**How to rename a photo:** right-click it → Rename → type the new name exactly.

Until a photo is added, the website automatically shows an elegant gold "Photo Coming Soon" placeholder — so the site never looks broken.

> 💡 Tip: photos around 1200×800 pixels and under 500 KB load fastest. You can shrink big photos for free at https://squoosh.app

---

## 5. Test the website on your PC (before uploading)

Simply **double-click `index.html`** in the website folder — it opens in your browser. Click around all the pages and check everything. No internet hosting needed for this test.

---

## 6. Upload to Hostinger (10 minutes)

1. Log in to **hpanel.hostinger.com**.
2. Go to **Websites** → click **Manage** next to your domain.
3. In the left menu, find **Files → File Manager** and open it.
4. Open the folder called **`public_html`** (this is your live website folder).
   - If it contains a file called `default.php` or similar placeholder, delete it.
5. Click the **Upload** icon (top right) → **Upload files**.
6. Select **ALL the website files and folders** from your PC:
   - `index.html`, `about.html`, `services.html`, `projects.html`, `contact.html`
   - the whole `css` folder, `js` folder, and `images` folder
   - (easiest way: select everything inside your website folder at once)
7. Wait for the upload to finish.
8. Open your domain in a browser (e.g. `www.yourdomain.com`) — **your website is live!** 🎉

> 💡 Alternative: compress your website folder into a ZIP, upload the single ZIP into `public_html`, then right-click it in File Manager → **Extract**. Make sure the files end up directly inside `public_html`, not inside an extra sub-folder.

---

## 7. Updating the site later

- **Changed your phone/address?** Edit `js/main.js` on your PC (Step 3), then in Hostinger File Manager go to `public_html/js`, delete the old `main.js`, and upload the new one.
- **New photos?** Just upload them into `public_html/images` with the correct names (overwrite the old ones).
- **Google Map of your office:** open `contact.html` in Notepad, find the note that says `PASTE YOUR GOOGLE MAPS IFRAME HERE` and follow the instructions written right above it.

---

## 8. How the contact form works

The website is a fast, secure "static" site — it has no server programs to hack or maintain. The contact form opens **WhatsApp** with the visitor's message pre-typed and sends it to your WhatsApp number (the one you set in Step 3). This is instant and free — no email server setup needed.

---

*Website built for MI Real Estate & Construction, Karachi.*

---

## 9. Getting the site on Google (do this once, after uploading)

**A. Google Search Console (makes Google index the site)**
1. Go to https://search.google.com/search-console and sign in with your Google account.
2. Click **Add property** → choose **URL prefix** → enter `https://mi-realestate.pk` → Continue.
3. Choose the **HTML file** verification method. Google gives you a small file (like `google1234abcd.html`). Download it and upload it into `public_html` on Hostinger, next to `index.html`. Click **Verify**.
4. In the left menu open **Sitemaps** → type `sitemap.xml` → **Submit**.
5. In the top search bar paste `https://mi-realestate.pk/` → press Enter → click **Request indexing**. Repeat for the other 4 pages.

Google usually shows the site within a few days to two weeks.

**B. Google Business Profile (shows your office on Google Maps, most important for Karachi searches)**
1. Go to https://business.google.com → **Add your business**.
2. Name: `MI Real Estate & Construction`. Category: `Real estate agency` (add `Construction company` as a second category).
3. Address: `C6, Al Jannat City Housing Society, Scheme 43, Karachi`. Phone: `0316-2881186`. Website: `https://mi-realestate.pk`.
4. Verify (Google will call, text, or ask for a short video of the office).
5. Add the office photos and logo, set opening hours, and ask happy clients to leave reviews there.

Keep the name, address and phone exactly the same everywhere (website, Google, Facebook). Google checks that they match.

**Whenever you change the site later:** open Search Console → paste the changed page URL → Request indexing.
