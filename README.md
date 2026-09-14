# 🧑‍💻 Dev Stack

### Description
devstack is a web application that allows users to add their own technology stacks to the stack list, user can remove technology from the stack list and add it again but can not add same technology more than once, remove all technologies from the stack list. It shows interactive toast messages for each action, it also shows a message when the stack list is empty. beside the required features, I have also made the stacklist as a sticky sidebar for desktop view. It is fully responsive for desktop, tablet and mobile view.

### Technology used
- `React`
- `TypeScript`
- `Vite`
- `React Toastify`
- `Tailwind`
- `Html` `CSS`

### 3 features about this project
1. **Add Technology**
2. **Remove Technology**
3. **Clear All Technologies**

---

## Questions to Answer

**Q: What is JSX, and why is it used in React?**  
**A:** JSX is an abbreviation for JavaScript XML. It is basically a syntax that allows us to write HTML and JS together in a single file. React uses Babel to convert JSX into JS code.

**Q: What is the difference between props and state?**  
**A:** Props are like function arguments to pass data from parent to child, representing a unidirectional data communication. States are internal component data that can change over time.

**Q: What does the useState hook do, and where did you use it in this project?**  
**A:** `useState` is a React hook—kind of like a special variable that reacts to changes and lets React know what to re-render when data changes. It returns an array with two values: the variable holding the state value and a updater function to modify it. I have used `useState` in many places in the project, especially inside the technologies, stack, and technology card components.

**Q: What does the useEffect hook do, and why did you need it to load the JSON data?**  
**A:** `useEffect` is a side-effect hook (or component lifecycle hook) that runs when the component renders or based on specified values in its dependency array. It is used for fetching data to avoid re-fetching on every single render.

**Q: Why does every item in a .map() list need a unique key prop?**  
**A:** To help React efficiently track, update, and re-order individual items in the list.

**Q: What is conditional rendering? Show one place you used it (example: the empty stack message).**  
**A:** Conditional rendering is a technique of rendering UI elements based on specific conditions. I have used conditional rendering in many places, such as toggling whether a button is disabled.

**Q: How do you pass data from a parent component to a child component, and how does a child send something back to the parent?**  
**A:** Data is passed from a parent to a child component through props. A child component can send data back to the parent by executing a callback function passed down as a prop (a pattern known as lifting state up).