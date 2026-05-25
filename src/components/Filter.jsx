// Import React
import React from "react";

// Filter component
function Filter({

  // Selected genre state
  selectedGenre,

  // Function to update genre
  setSelectedGenre,

}) {

  // Returning UI
  return (

    // Genre dropdown
    <select

      // Current selected value
      value={selectedGenre}

      // Update genre state
      onChange={(event) =>
        setSelectedGenre(event.target.value)
      }

      // Styling
      className="border border-gray-300 p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
    >

      {/* Dropdown options */}
      <option value="All">All Genres</option>

      <option value="Self Help">
        Self Help
      </option>

      <option value="Finance">
        Finance
      </option>

      <option value="Fiction">
        Fiction
      </option>

      <option value="Science">
        Science
      </option>

      <option value="History">
        History
      </option>

    </select>
  );
}

// Export component
export default Filter;