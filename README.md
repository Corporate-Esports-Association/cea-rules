# CEA Rulebook 📖

Official rulebook documentation for the Corporate Esports Association (CEA). This repository contains comprehensive rules and regulations for all CEA competitive esports tournaments.

## 🌐 Live Site

Visit the live rulebook at: [rules.cea.gg](https://rules.cea.gg)

## 📁 Project Structure


```
cea-rules/
├── content/                 # 📝 Markdown content (this is where you edit!)
│   ├── index.mdx           # Homepage content
│   ├── ea-fc/              # EA FC rules
│   ├── fortnite/           # Fortnite rules
│   ├── rocket-league/      # Rocket League rules
│   └── support/            # Support documentation
├── components/             # React components
├── public/                 # Static assets (images, etc.)
├── app/                    # Next.js app directory
└── package.json           # Project dependencies
```

## ✏️ How to Edit Content

### 🎯 Quick Start for Content Editors

1. **Navigate to the `content/` folder** - This is where all the rulebook content lives
2. **Find the game or section you want to edit**:
   - `content/rocket-league/` - Rocket League rules
   - `content/fortnite/` - Fortnite rules
   - `content/ea-fc/` - EA FC rules
   - `content/support/` - Support documentation
3. **Edit the `.mdx` files** using Markdown syntax

### 📝 Markdown Basics

The content files use MDX (Markdown with React components). Here are the basics:

```markdown
# Main Heading
## Sub Heading
### Smaller Heading

**Bold text**
*Italic text*

- Bullet point 1
- Bullet point 2

1. Numbered list item 1
2. Numbered list item 2

[Link text](https://example.com)

![Image alt text](path/to/image.jpg)
```

### 🔧 Special Components

You can use these special components in your `.mdx` files:

```markdown
import {Steps, Cards, Callout} from 'nextra/components'

<Callout type="warning">
  This is a warning callout
</Callout>

<Callout type="info">
  This is an info callout
</Callout>

<Steps>
### Step 1
Do this first

### Step 2  
Then do this
</Steps>
```

### 🖼️ Adding Images

1. Place images in the `public/images/` folder
2. Reference them in markdown like this:
   ```markdown
   ![Description](images/folder/image-name.jpg)
   ```

## 🚀 Making Changes (Pull Request Guide for Beginners)

### Option 1: GitHub Web Interface (Easiest)

1. **Navigate to the file you want to edit** on GitHub
2. **Click the pencil icon (✏️)** to edit the file
3. **Make your changes** in the web editor
4. **Scroll down to "Propose changes"**
5. **Add a descriptive title** like "Update Rocket League overtime rules"
6. **Add a description** explaining what you changed and why
7. **Click "Propose changes"**
8. **Click "Create pull request"**
9. **Wait for review and approval**

### Option 2: Manual & Local...


## 🤝 Contributing Guidelines

1. **Content changes** should focus on clarity and accuracy
2. **Follow the existing style** and formatting
3. **Use proper grammar** and spelling
4. **Test your changes** before submitting using a markdown editor like Markdownmonster

## 📞 Need Help?
- **Technical problems**: Please contact HolmstN, not Gitago...


---

**Corporate Esports Association** | [Website](https://cea.gg) | [Discord](https://cea.gg/discord)