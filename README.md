# Appwrite Blog

This is a simple blog application built with React, Vite, Redux, and Appwrite.

It lets a user:

- create an account
- sign in and sign out
- create blog posts
- upload a featured image for each post
- edit or delete their own posts
- browse published posts in the browser

This project is designed to run locally for development and also deploy cleanly to Vercel for a live public URL.

## Live Demo

Check it out here: [appwrite-blog](https://appwriteblog-mrjaiveer.vercel.app)

`https://appwriteblog-delta-inky.vercel.app/`

## Tech Stack

- React
- Vite
- Redux Toolkit
- React Router
- Tailwind CSS
- Appwrite
- TinyMCE editor
- Vercel ( for deployment )

## Setup on you're machine

You do not need to be a developer, but you do need these tools installed on your computer:

1. `Node.js` version 18 or newer
2. `npm` (comes with Node.js)
3. A free or paid `Appwrite` project
4. A `Vercel` account for deployment

Helpful download links:

- Node.js: `https://nodejs.org/`
- Appwrite Cloud: `https://cloud.appwrite.io/`
- Vercel: `https://vercel.com/`

## Project Setup Overview

This app depends on Appwrite for:

- user authentication
- blog post storage
- image uploads

Before the website can work, you must create these resources in Appwrite:

1. One `Project`
2. One `Database`
3. One `Table`
4. One `Storage Bucket`
5. One web platform for your local and live domains

## 1. Clone The Project

Open a terminal and run:

```bash
git clone <your-repository-url>
cd appwriteblog
```

Example:

```bash
git clone https://github.com/your-username/appwriteblog.git
cd appwriteblog
```

## 2. Install Dependencies

Run:

```bash
npm install
```

## 3. Create Your Environment File

Copy `.env.sample` to `.env`.

On macOS or Linux:

```bash
cp .env.sample .env
```

On Windows Command Prompt:

```cmd
copy .env.sample .env
```

Then open `.env` and fill in your real Appwrite values.

Example:

```env
VITE_APPWRITE_URL="https://cloud.appwrite.io/v1"
VITE_APPWRITE_PROJECT_ID="your_project_id"
VITE_APPWRITE_DATABASE_ID="your_database_id"
VITE_APPWRITE_TABLE_ID="your_table_id"
VITE_APPWRITE_BUCKET_ID="your_bucket_id"
VITE_APPWRITE_TINY_EDITOR_API_KEY="your_tinymce_api_key"
```

## 4. Create Appwrite Resources

### Create a Project

In Appwrite, create a new project and copy:

- `Project ID`
- `Endpoint`

Use those in your `.env` file.

### Create a Database

Create one database and copy its `Database ID`.

### Create a Table

Inside the database, create one table for blog posts and copy its `Table ID`.

Create fields similar to these:

- `title` as string
- `content` as string or long text
- `featuredImage` as string
- `status` as string
- `userId` as string

Important:

- this project reads post IDs from Appwrite row IDs
- post links use the row ID in the URL
- the `slug` input exists in the form, but the current code stores and fetches posts by row ID

### Create a Storage Bucket

Create one storage bucket for featured images and copy its `Bucket ID`.

Allow image uploads in the bucket.

### Set Permissions

Make sure your Appwrite permissions allow:

- users to create accounts and sessions
- signed-in users to create and manage their own posts
- signed-in users to upload images
- the app to read posts that should appear on the site

If permissions are too strict, login or post creation will fail.

## 5. Add Web Platforms In Appwrite

Inside Appwrite, add these platform URLs:

### For local development

Use:

`http://localhost:5173`

### For Vercel production

After deployment, add your Vercel domain, for example:

`https://your-project-name.vercel.app`

If you use a custom domain, add that too:

`https://blog.yourdomain.com`

This step is required for authentication and browser sessions to work properly.

## 6. Run The Project Locally

Start the development server:

```bash
npm run dev
```

Then open:

`http://localhost:5173`
