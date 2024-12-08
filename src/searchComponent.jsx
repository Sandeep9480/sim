"use client";

import { useState, useEffect } from "react";
import { Search, X, ChevronDown, ChevronUp, Filter } from "lucide-react";
import "./App.css";
import mockResults from "./data";

// Mock data for demonstration

const categories = ["All", "Frontend", "Backend", "Data Science", "AI"];

export default function SearchComponent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isLoading, setIsLoading] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState("relevance");
  const [dateRange, setDateRange] = useState({ start: "", end: "" });
  const [showDialog, setShowDialog] = useState(null); // State to control which dialog is shown

  const handleSearch = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1000);
  };

  const filteredResults = mockResults
    .filter(
      (result) =>
        result.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
        (selectedCategory === "All" || result.category === selectedCategory) &&
        (dateRange.start === "" ||
          new Date(result.date) >= new Date(dateRange.start)) &&
        (dateRange.end === "" ||
          new Date(result.date) <= new Date(dateRange.end))
    )
    .sort((a, b) => {
      if (sortBy === "date") {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      }
      return 0;
    });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setShowFilters(true);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="search-container">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search the knowledge base..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
        <button onClick={handleSearch} className="search-button">
          <Search className="search-icon" />
          Search
        </button>
        <div
          className="filters-toggle"
          onClick={() => setShowFilters(!showFilters)}
        >
          <Filter className="filter-icon" />
          Filters{" "}
          {showFilters ? (
            <ChevronUp className="chevron-icon" />
          ) : (
            <ChevronDown className="chevron-icon" />
          )}
        </div>
      </div>

      <div className="filters-section">
        {showFilters && (
          <div className="filters">
            <div className="filter-group">
              <label>Category:</label>
              <div className="category-buttons">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={selectedCategory === category ? "active" : ""}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
            <div className="filter-group">
              <label>Sort by:</label>
              <select
                onChange={(e) => setSortBy(e.target.value)}
                value={sortBy}
                className="sort-select"
              >
                <option value="relevance">Relevance</option>
                <option value="date">Date</option>
              </select>
            </div>
          </div>
        )}
      </div>

      {isLoading ? (
        <div className="loading-skeleton">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="skeleton-item">
              <div className="skeleton-title"></div>
              <div className="skeleton-meta"></div>
              <div className="skeleton-content"></div>
            </div>
          ))}
        </div>
      ) : (
        <div className="search-results">
          {filteredResults.map((result) => (
            <div key={result.id} className="result-card">
              <h2>{result.title}</h2>
              <div className="result-meta">
                <span className="category">{result.category}</span>
                <span className="date">{result.date}</span>
                <span className="author">{result.author}</span>
                <span className="read-time">{result.readTime} read</span>
              </div>
              <p className="result-content">{result.content}</p>
              <button
                className="read-more"
                onClick={() => setShowDialog(result.id)}
              >
                Read Full Article
              </button>
              {showDialog === result.id && (
                <div className="article-dialog">
                  <div className="dialog-header">
                    <h3>{result.title}</h3>
                    <p>
                      <span className="category">{result.category}</span>
                      <span className="date">{result.date}</span>
                      <span className="author">{result.author}</span>
                    </p>
                  </div>
                  <p>{result.content}</p>
                  <button
                    className="close-dialog"
                    onClick={() => setShowDialog(null)}
                  >
                    <X className="close-icon" />
                    Close
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
