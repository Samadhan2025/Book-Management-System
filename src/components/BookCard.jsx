// Import React
import React from "react";

// BookCard component
function BookCard({

  // Book object data
  book,

  // Delete function
  deleteBook,

  // Edit function
  setEditingBook,

}) {

  // Returning UI
  return (

    // Main book card container
    <div className="bg-white p-5 rounded-lg shadow-md">

      {/* Book title */}
      <h2 className="text-2xl font-bold text-gray-800 mb-2">

        {/* Dynamic title */}
        {book.title}

      </h2>

      {/* Book author */}
      <p className="text-gray-600 mb-1">

        Author: {book.author}

      </p>

      {/* Book genre */}
      <p className="text-gray-600 mb-1">

        Genre: {book.genre}

      </p>

      {/* Publication year */}
      <p className="text-gray-600 mb-4">

        Year: {book.year}

      </p>

      {/* Buttons container */}
      <div className="flex gap-3">

        {/* Edit button */}
        <button

          // When clicked set current book in edit state
          onClick={() => setEditingBook(book)}

          // Tailwind styling
          className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition"
        >

          Edit

        </button>

        {/* Delete button */}
        <button

          // Delete selected book
          onClick={() => deleteBook(book.id)}

          // Tailwind styling
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
        >

          Delete

        </button>

      </div>

    </div>
  );
}

// Export component
export default BookCard;