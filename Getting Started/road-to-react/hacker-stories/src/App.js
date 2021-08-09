import React from "react";

// There are multiple ways to define react components (and functions in general) in JS
// Arrow function notation makes them more concise
// Single arguments don't require parenthesis, but multiple arguments do
//function App() {
const App = () => {
  const stories = [
    // An array of objects
    {
      title: "React",
      url: "https://reactjs.org/",
      author: "Jordan Walke",
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: "Redux",
      url: "https://redux.js.org/",
      author: "Dan Abramov, Andrew Clark",
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
  ];

  // Always  manage the state at a component where every component that’s interested in it is one that
  // either manages the state (using information directly from state) or a component below the managing
  // component (using information from props).  If a component below needs to update the state, pass
  // a callback handler down to it (see Search component). If a component needs to use the state (e.g.
  // displaying it), pass it down as props.
  const [searchTerm, setSearchTerm] = React.useState('React'); // Initial state can be passed to components as props

  const handleSearch = event => {
    setSearchTerm(event.target.value);
  }

  const searchedStories = stories.filter((story) =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>My Hacker Stories</h1>
      { /* Unidirectional data flow
           React applications and components start with an initial state, once a side-effect occurs (loading data from an 
           API, user input, etc) the change is captured in React's state. Once state has been changed, all components affected
           by the modified state or props are re-rendered.
      */}
      <Search onSearch={handleSearch} search={searchTerm}/>
      <hr />
      <List list={searchedStories} />
    </div>
  );
};

// Input fields are uncontrolled components because we can see changes to it without giving that instruction in our code (user input).
// That is the native behaviour of the input field because it manages it's own state.
// By setting the value of the input field, we stop input receiving it's value from the DOM state and instead receives it from
// React's state. This way we are completely in control of what our UI shows our users, hence controlled component.
const Search = ({ search, onSearch }) =>  // We can destructure props directly in the function signature
  <div>
    <label htmlFor="search">Search: </label>
    <input 
      id="search" 
      type="text" 
      value={search}
      onChange={onSearch} />{" "}
    {/* We don't put parens here because it would call the function instead of just passing it as an event handler */}
    <p>
      Searching for: <strong>{search}</strong>
    </p>
  </div>

const List = ({list}) =>
  list.map(item => <Item key={item.objectID} item={item} />);

const Item = ({ // An example of nested destructuring... this is really cluttered though so not always best to do it in the signature
  item: {
    title,
    url,
    author,
    num_comments,
    points,
  },
}) => (
  <div>
    <span>
      <a href={url}>{title}</a>
    </span>
    <span>{author}</span>
    <span>{num_comments}</span>
    <span>{points}</span>
  </div>
);

export default App;
