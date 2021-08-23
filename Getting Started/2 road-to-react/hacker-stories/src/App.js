import React from "react";

const initialStories = [
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

const getAsyncStories = () => 
  new Promise(resolve => 
    setTimeout( () => 
      resolve({ data: {stories: initialStories } }),
      2000
    )
  );

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
};

const App = () => {
  const [stories, setStories] = React.useState([]);

  // useEffect, so the function only runs on the very first render.
  React.useEffect(() => {
    getAsyncStories().then(result => {
      setStories(result.data.stories);
    });
  }, []);

  const handleRemoveStory = (item) => {
    const newStory = stories.filter(
      (story) => item.objectID !== story.objectID
    );

    setStories(newStory);
  };

  const [searchTerm, setSearchTerm] = useSemiPersistentState("search", "React");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const searchedStories = stories.filter((story) =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>My Hacker Stories</h1>
      <InputWithLabel
        id="search"
        value={searchTerm}
        isFocused={true}
        onInputChange={handleSearch}
      >
        <strong>
          <Text />
        </strong>
      </InputWithLabel>
      <hr />
      <List list={searchedStories} onRemoveItem={handleRemoveStory} />
    </div>
  );
};

// If no type prop is passed, the default 'text' takes over.
// React components behave similarly to html tags, everything passed between tags are accessed in the children prop as below:
// using that we can also compose components inside components, by passing them as React children.
const InputWithLabel = ({
  id,
  type = "text",
  value,
  isFocused,
  onInputChange,
  children,
}) => {
  // A
  const inputRef = React.useRef();

  // C
  React.useEffect(() => {
    if (isFocused && inputRef.current) {
      // D
      inputRef.current.focus();
    }
  }, [isFocused]);

  return (
    <>
      <label htmlFor={id}>{children}</label>
      {/* B */}
      <input
        ref={inputRef}
        id={id}
        type={type}
        value={value}
        onChange={onInputChange}
      />
      <p>
        Searching for: <strong>{value}</strong>
      </p>
    </>
  );
};

/* 
  (A) First, create a ref with React’s useRef hook. This ref object is a persistent value which
  stays intact over the lifetime of a React component. It comes with a property called current,
  which, in contrast to the ref object, can be changed.
  (B) Second, the ref is passed to the input field’s JSX-reserved ref attribute and the element
  instance is assigned to the changeable current property.
  (C) Third, opt into React’s lifecycle with React’s useEffect Hook, performing the focus on the
  input field when the component renders (or its dependencies change).
  (D) And fourth, since the ref is passed to the input field’s ref attribute, its current property
  gives access to the element. Execute its focus programmatically as a side-effect, but only if
  isFocused is set and the current property is existent.
*/

const Text = () => <>Search:</>;

const List = ({ list, onRemoveItem }) =>
  list.map((item) => (
    <Item key={item.objectID} item={item} onRemoveItem={onRemoveItem} />
  ));

const Item = ({ item, onRemoveItem }) => (
    <div>
      <span>
        <a href={item.url}>{item.title}</a>
      </span>
      <span>{item.author}</span>
      <span>{item.num_comments}</span>
      <span>{item.points}</span>
      <span>
        <button type="button" onClick={() => onRemoveItem(item)}>
          Dismiss
        </button>
      </span>
    </div>
  );

export default App;
