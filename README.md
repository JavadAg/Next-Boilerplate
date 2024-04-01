## Boilerplate and Starter for Next.js 14+ with Tailwind and Shadcn

### Features

- 🚀 Next.js
- 📝 TypeScript
- 📏 ESLint
- 🎨 Prettier
- 🐶 Husky
- 💡 Lint-Staged
- 🚨 Commitlint
- ⚙️ VSCode settings
- 📚 Shadcn
- 🎨 Tailwind
- 🔐 Clerk
- ⌘ Prisma

### Getting started

To start, run the following command on your local environment:

```shell
npm install
```

Next, execute the following command to run the project locally in development mode:

```shell
npm run dev
```

Open your preferred browser and navigate to http://localhost:3000 to view your project.

### Set up authentication

Visit Clerk.com and create a new account if you haven't already.

Navigate to the Clerk Dashboard.
Create a new application within the Clerk Dashboard.

After creating the application, you'll receive a NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY and CLERK_SECRET_KEY.

Create a file named .env.local if it doesn't exist already. This file should not be tracked by Git for security reasons.

Copy and paste the NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY and CLERK_SECRET_KEY into the .env.local file.

```shell
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_pub_key
CLERK_SECRET_KEY=your_clerk_secret_key
```

### Commit Message Format

The [Conventional Commits](https://www.conventionalcommits.org/) specification is a lightweight convention on top of commit messages. It provides an easy set of rules for creating an explicit commit history; which makes it easier to write automated tools on top of. This convention dovetails with SemVer, by describing the features, fixes, and breaking changes made in commit messages.

The commit message should be structured as follows:

```shell
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```
