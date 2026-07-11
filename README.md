How to host your Reel Studio on GitHub

Since your app is a React application, it requires a small "build" process to run on the web. Follow these steps to turn your code into a live GitHub website.

1. File Format

Save your main code file as App.jsx. This is the standard file format for React components.

2. Create the Project

To make it work on GitHub, you need a project folder. Open your computer's terminal (or command prompt) and run these commands to set up the project:

# 1. Create a new React project using Vite (the industry standard)
npm create vite@latest reel-studio -- --template react

# 2. Go into the folder
cd reel-studio

# 3. Install the required dependencies (Lucide icons and Tailwind)
npm install
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm install lucide-react


3. Add your Code

Replace the contents of src/App.jsx with the code from your Reel Studio artifact.

Configure Tailwind: Open tailwind.config.js and add this to the content array:
content: ["./index.html", "./src//*.{js,ts,jsx,tsx}"],

Update CSS: Open src/index.css and replace everything with these three lines:

@tailwind base;
@tailwind components;
@tailwind utilities;


4. Upload to GitHub

Create a new repository on GitHub.com.

Run these commands in your project folder:

git init
git add .
git commit -m "Initial commit of Reel Studio"
git branch -M main
git remote add origin [YOUR_GITHUB_REPO_URL]
git push -u origin main


5. Host it for Free

In your GitHub repository, go to Settings > Pages.

Change "Source" to GitHub Actions.

Choose the Vite workflow.

GitHub will automatically build your app and give you a live URL (like https://yourname.github.io/reel-studio) where your app will live!
