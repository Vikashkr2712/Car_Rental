import React from 'react';
import './SearchPage.css'; // Assuming you have a CSS file for styling

const SearchPage = () => {
  return (
    <div className="search-page">
      <header className="search-header">
        <input type="text" placeholder="Search..." className="search-bar" />
        <div className="header-icons">
          <i className="icon-heart"></i>
          <i className="icon-settings"></i>
          <i className="icon-user"></i>
        </div>
      </header>
      <aside className="filters">
        <div className="filter-section">
          <h3>Type</h3>
          <ul>
            <li><input type="checkbox" /> Option 1</li>
            <li><input type="checkbox" /> Option 2</li>
            <li><input type="checkbox" /> Option 3</li>
          </ul>
        </div>
        <div className="filter-section">
          <h3>Capacity</h3>
          <ul>
            <li><input type="checkbox" /> Option 1</li>
            <li><input type="checkbox" /> Option 2</li>
            <li><input type="checkbox" /> Option 3</li>
          </ul>
        </div>
        <div className="filter-section">
          <h3>Price</h3>
          <input type="range" min="0" max="100" />
          <p>Max. $100.00</p>
        </div>
      </aside>
      <main className="results">
        <div className="result-grid">
          {[...Array(9)].map((_, index) => (
            <div className="result-card" key={index}>
              <div className="image-placeholder"></div>
              <div className="text-placeholder"></div>
              <div className="text-placeholder"></div>
              <div className="heart-icon"></div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default SearchPage;
