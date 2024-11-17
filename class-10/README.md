**Assignment: Build a Simple ToDo Application using `useState`**

**Objective:**  
Create a simple ToDo application using React and the `useState` hook to manage the list of tasks. This assignment will help you understand how to manage state and dynamically update your UI as the user interacts with the app.

**Requirements:**
1. **Add a Task:**
   - Create an input field where users can type a task.
   - Use a button to add the task to the list.
   - When the button is clicked, update the list of tasks using `useState`.

2. **Display Tasks:**
   - Display the list of tasks below the input field.
   - Each task should be displayed as an item in a list.

3. **Delete a Task (Optional):**
   - Add a button next to each task to delete it from the list.
   - When the delete button is clicked, remove the task from the list using `useState`.

**Hints:**
- Use the `useState` hook to create state variables for:
  - The current task being typed by the user.
  - The list of tasks.
  
- For example:
  ```jsx
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  ```

- Use the `map()` function to render the list of tasks dynamically.

- I have written an example of Fruits that will help you complete this task.

--- 

## Shruti Balasa CSS Flex-Grid Tailwind-CSS
[Shruti Balasa CSS Flex-Grid Tailwind-CSS)](https://www.dropbox.com/scl/fi/7p6cwquo89wrlaz9qbxzg/Shruti-Balasa-CSS-Flex-Grid_Tailwind-CSS.pdf?rlkey=2hm3qorkmzv97h54gf7cy1ap2&st=4i11rlmt&dl=0)

--- 

- [ReactJS Virtual DOM](https://www.geeksforgeeks.org/reactjs-virtual-dom/)
- [Demystifying the DOM and Virtual DOM in Web Development](https://www.linkedin.com/pulse/demystifying-dom-virtual-web-development-fatemeh-mahmoudi-rlzle/)
- [Comparing Real DOM and Virtual DOM [React Real DOM vs Virtual DOM]](https://www.youtube.com/watch?v=8TkplB9gFjQ)

---

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
