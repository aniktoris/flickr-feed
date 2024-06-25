## Overview

This is a web application that reads data from Flickr's public feeds and displays the images on the page to the user in a grid view. The user is able to enter a keyword in a search box and click on a search button and the app returns images with the relevant tags.

![Screenshot](/public/screenshot.png)

### Project features:
- images are being fetched from public API on upload randomly and rendered using React components displaying thumbnails with hover effects and clickable links to the original images;
- image search: the search functionality displays images based on the entered tag into the search input additionally showing the tag on the card;
- loading indicators and error messages handled accordingly;
- design: Talwind CSS and DaisyUi library with the theme 'luxury';

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.
