# Resume Download Feature Setup

## Overview
This portfolio now includes a professional resume download feature. The resume is generated dynamically using the `docx` library and served through an Express.js backend.

## Installation

First, install all dependencies:
```bash
npm install
```

This will install:
- **Frontend**: React, Vite, Tailwind CSS
- **Backend**: Express.js, CORS, docx library
- **Development**: Concurrently (to run both servers simultaneously)

## Running the Project

### Option 1: Run Both Servers Together (Recommended for Development)
```bash
npm run dev:full
```

This command uses `concurrently` to run:
- **Vite dev server** on `http://localhost:5173` (frontend)
- **Express server** on `http://localhost:3001` (resume generation)

### Option 2: Run Servers Separately
Terminal 1 - Vite frontend:
```bash
npm run dev
```

Terminal 2 - Express backend:
```bash
npm run server
```

## How the Resume Feature Works

1. **Resume Data**: All resume content is defined in [resume-generator.js](./resume-generator.js)
2. **Resume Generation**: The `generateResumeDocument()` function creates a Word document (.docx) with professional formatting
3. **Download Endpoint**: The Express server at `http://localhost:3001/api/resume/download` generates and sends the resume
4. **Frontend Integration**: The "📄 Resume" button in the Navbar triggers the download

## Features

- ✅ Professional formatting with color scheme (Navy, Accent Blue, Light backgrounds)
- ✅ Responsive design with section headings and separators
- ✅ Styled tables for skills with alternating row colors
- ✅ Bullet points for achievements and responsibilities
- ✅ Custom fonts (Calibri) and typography
- ✅ Desktop and mobile responsive buttons

## Customizing the Resume

To update resume content, edit [resume-generator.js](./resume-generator.js):

```javascript
// Add new content to the `generateResumeDocument()` function
children.push(sectionHead("New Section"));
children.push(bodyPara("New content here..."));
```

Available helper functions:
- `sectionHead(text)` - Large blue section heading with underline
- `twoColRow(leftRuns, rightText)` - Job title and date format
- `bullet(text)` - Bullet point with spacing
- `bodyPara(text)` - Regular paragraph
- `orgLine(text)` - Italic organization name
- `spacer(pts)` - Vertical spacing

## Building for Production

```bash
npm run build
```

This creates an optimized build in the `dist/` folder.

**Note**: The resume endpoint will only work if the Express server is running. For production deployment, ensure the backend server is deployed (e.g., Vercel, Heroku, or your own server).

## Troubleshooting

**"Failed to download resume" error?**
- Make sure the Express server is running (`npm run server`)
- Check that port 3001 is not in use
- Verify CORS is enabled (it should be by default)

**Want to change resume filename?**
- Update the filename in [server.js](./server.js) line 17:
  ```javascript
  a.download = 'YourName_Resume.docx'
  ```

**Want to deploy to Vercel?**
- The Express server needs to be deployed separately
- Consider using serverless functions or deploying to a separate backend service
- Update the API endpoint in Navbar.jsx to point to your backend URL
