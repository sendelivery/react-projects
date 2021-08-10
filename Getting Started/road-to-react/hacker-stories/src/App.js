import React from "react";

// Hook naming convention: puts the 'use' prefix in front of every hook
// Another convention, a hook's internals should be about a value being set and synchronised with local storage,
// not a specific domain like Search
const useSemiPersistentState = (key, initialState) => {
  const [value, setValue] = React.useState(
    // Using local storage in React is a side-effect because we are
    // interacting outside of React's domain using the browser's API.
    localStorage.getItem(key) || initialState
  );

  // The useEffect hook takes two arguments:
  // The first, is a function where the side effect occurs. (What we run)
  // The optional second argument is a dependency array of variables. If one of theses variables changes,
  // the function for the side-effect is called. This function also is called when the component renders for the first time.
  // Leaving out the second arg would make the side-effect function run on every render, an empty array = only on initial render.
  React.useEffect(() => {
    localStorage.setItem(key, value);
  }, [value, key]);

  // Second convention, the returned values are returned as an array to allow for destructuring
  return [value, setValue];
}

const App = () => {
  const stories = [
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

  const [searchTerm, setSearchTerm] = useSemiPersistentState('search', 'React');

  const handleSearch = event => {
    setSearchTerm(event.target.value);
  };

  const searchedStories = stories.filter((story) =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>My Hacker Stories</h1>
      {/* The specialised search component can be made more general and reusable by specifying attributes like so */}
      <InputWithLabel 
        id='search'
        label='Search: '
        value={searchTerm}
        onInputChange={handleSearch} 
      />
      <hr />
      <List list={searchedStories} />
    </div>
  );
};

// If no type prop is passed, the default 'text' takes over. 
const InputWithLabel = ({ id, label, type = 'text', value, onInputChange }) =>
  <>
    <label htmlFor={id}>{label}</label>
    <input 
      id={id} 
      type={type} 
      value={value}
      onChange={onInputChange} />
    <p>
      Searching for: <strong>{value}</strong>
    </p>
  </>

const List = ({ list }) => 
  list.map(item => <Item key={item.objectID} item={item} />);

const Item = ({ item }) => (
  <div>
    <span>
      <a href={item.url}>{item.title}</a>
    </span>
    <span>{item.author}</span>
    <span>{item.num_comments}</span>
    <span>{item.points}</span>
  </div>
)

export default App;
