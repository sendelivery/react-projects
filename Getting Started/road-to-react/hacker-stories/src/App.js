import React from "react";

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

  const [searchTerm, setSearchTerm] = React.useState(
    // Using local storage in React is a side-effect because we are
    // interacting outside of React's domain using the browser's API.
    localStorage.getItem("search") || "React"
  );

  // The useEffect hook takes two arguments:
  // The first, is a function where the side effect occurs. 
  // The optional second argument is a dependency array of variables. If one of theses variables changes,
  // the function for the side-effect is called. This function also is called when the component renders for the first time.
  // Leaving out the second arg would make the side-effect function run on every render, an empty array = only on initial render.
  React.useEffect(() => {
    localStorage.setItem('search', searchTerm);
  }, [searchTerm]);

  const handleSearch = event => {
    setSearchTerm(event.target.value);
  };

  const searchedStories = stories.filter((story) =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>My Hacker Stories</h1>
      <Search onSearch={handleSearch} search={searchTerm}/>
      <hr />
      <List list={searchedStories} />
    </div>
  );
};

const Search = ({ search, onSearch }) =>
  <div>
    <label htmlFor="search">Search: </label>
    <input 
      id="search" 
      type="text" 
      value={search}
      onChange={onSearch} />
    <p>
      Searching for: <strong>{search}</strong>
    </p>
  </div>

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
