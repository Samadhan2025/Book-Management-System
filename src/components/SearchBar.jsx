// Import React
import React from "react";

// SearchBar component
function SearchBar({ searchTerm, setSearchTerm }) {

  // Returning UI
  return (

    // Search input
    <input
      type="text"

      // Placeholder text
      placeholder="Search by title or author..."

      // Input value from state
      value={searchTerm}

      // Update state on typing
      onChange={(event) => setSearchTerm(event.target.value)}

      // Tailwind styling
      className="flex-1 border border-gray-300 p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
    />

  );
}

// Export component
export default SearchBar;