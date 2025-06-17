## Recipe Finder App

A simple and elegant recipe search app built with Next.js 15 and the Spoonacular API. Users can search for recipes using various filters and explore full details of each recipe.

Features:

Search with Filters:Search for recipes based on:
Keyword (e.g. "pasta")
Cuisine type (e.g. Italian, Chinese)
Maximum preparation time (in minutes)

Recipe Results Page: View a grid of all matching recipes with images and titles.

Recipe Details Page:
Click on any recipe to view detailed information including:
Recipe title
Recipe image
Ingredients
Preparation time

Suspense + SSR:
Fast initial load using server-side rendering, with React Suspense for loading states.

Technologies Used:
Next.js 15 (App Router)
TypeScript
Tailwind CSS
Spoonacular API

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.
