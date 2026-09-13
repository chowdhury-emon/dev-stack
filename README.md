# 🧑‍💻 Dev Stack

### description
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


## Questions to answer:
- What is JSX, and why is it used in React?
JSX is an abbreviation for Javascript XML, it is basically a syntax that allows us to write HTML and JS together in a single file. react uses babel to convert JSX into JS code.
- What is the difference between props and state?
Props are like function arguments to pass data from parent to child, it's an unidirectional data communication and states are like data.
- What does the useState hook do, and where did you use it in this project?
Usestate is a react hook, kind of like a special variable that reacts to changes and let react know what to rerender when data changes. it returns an array with two values, one is the variable which holds value and a set function to update and chnage the value of the variable. I have used useStates hook in many places in the project, specially inside technologies and stack and technology card components.
- What does the useEffect hook do, and why did you need it to load the JSON data?
useEffect is a sideeffect hook or a component lifecycle hook, that runs in every render of the component, it also run based on the dependency array, it is used for fetch data to avoid refetching data for every render. 
- Why does every item in a .map() list need a unique key prop?
To track each items in the list.
- What is conditional rendering? Show one place you used it (example: the empty stack message).
conditional rendering is a technique of rendering based on conditions, I have used conditional rendering in many places on of them is to show the button is disabled. 
- How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
Data is passed from a parent to a child component through props. A child component can send data back to the parent by using a callback function passed as a prop called lifting the state up.
