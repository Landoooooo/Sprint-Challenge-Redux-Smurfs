1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
    1.  .map(), .filter(), and .concat(). We could use the spread operator or Object.assign()

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    1.  Actions are function your app will utilize and reducers are exactly what will happen in the store when that function is ran and finally the store is like a global state for the entire app.

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
    1.  Application state is reachable anywhere while component state is only reachable when you're in the particular component. A good time to use Application state is when you are often repeating code to get content to display.

4.  What is middleware?
    1.  Middleware can stop actions, dispatch a different action, etc...
    2.
5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    1.  `redux-thunk` is what allows redux to run async. It allows you to make API calls from our action creators.
    2.
6.  Which `react-redux` method links up our `components` with our `redux store`?
    1.  <Provider/>
