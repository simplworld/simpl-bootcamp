import React from 'react';

// Let's assume for a moment our data looks like this
let DATA = {
  categories: [
    "Work",
    "Humor",
    "Music",
    "Books",
    "Code Samples",
    "Games",
  ],
  bookmarks: [
    {
      "id": 1,
      "title": "Lorem Ipsum: Bookmark",
      "description": "...",
    },
    {
      "id": 2,
      "title": "Lorem Ipsum: Bookmark",
      "description": "...",
    },
    {
      "id": 3,
      "title": "Lorem Ipsum: Bookmark",
      "description": "...",
    },
  ]
}

// Ignoring CSS for a moment, our app might be constructed like this
class App extends React.Component {
  addBookmark() {
    // Logic here to add another bookmark
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <img src="logo.png" />
          <h1>My Bookmarks Apps</h1>
        </div>
        <div className="row">
          <SearchBox />
          <button onClick={this.addBookmark}>Add Bookmark</button>
        </div>
        <div className="row">
          <BookmarkList links={DATA.bookmarks} />
          <Categories categories={DATA.categories} />
        </div>
      </div>
    )
  }
}

// Data is passed down into this component from on high
class Categories extends React.Component {
  render() {
    const { categories } = this.props;

    return (
      <ul className="sidebar-categories">
        {
          categories.map((value, index) => {
            return <li>{value}</li>
          })
        }
      </ul>
    )
  }
}