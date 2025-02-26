import React, { useState } from "react";
import "./SearchResult.css";

function SearchResult({ results, onClose }) {
    return (
        <div className="search-overlay">
            <div className="search-container">
                <button className="close-btn" onClick={onClose}>X</button>
                <input type="text" placeholder="Sök..." />
                <div className="search-results">
                    {results.map((result, index) => (
                        <div key={index} className="search-card">
                            <h3>{result.name}</h3>
                            <p>{result.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default SearchResult;