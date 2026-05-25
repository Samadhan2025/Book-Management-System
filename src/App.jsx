// Import React hooks
import React, {
  useState,
  useEffect,
} from "react";

// Import components
import BookCard from "./components/BookCard";
import SearchBar from "./components/SearchBar";
import Filter from "./components/Filter";
import BookForm from "./components/BookForm";

// Import API instance
import api from "./services/api";

// Main App component
function App() {

  // Books state
  const [books, setBooks] = useState([]);

  // Search state
  const [searchTerm, setSearchTerm] = useState("");

  // Genre filter state
  const [selectedGenre, setSelectedGenre] =
    useState("All");

  // Currently editing book
  const [editingBook, setEditingBook] =
    useState(null);

  // Function to fetch books from backend
  const fetchBooks = async () => {

    try {

      // GET request
      const response = await api.get("/books");

      // Update books state
      setBooks(response.data);

    } catch (error) {

      // Show error in console
      console.log(error);
    }
  };

  // Run when component loads
  useEffect(() => {

    // Fetch books
    fetchBooks();

  }, []);

  // Function to add new book
  const addBook = async (newBook) => {

    try {

      // Send POST request
      await api.post("/books", newBook);

      // Refresh books
      fetchBooks();

    } catch (error) {

      // Show error
      console.log(error);
    }
  };

  // Function to delete book
  const deleteBook = async (id) => {

    try {

      // Send DELETE request
      await api.delete(`/books/${id}`);

      // Refresh books
      fetchBooks();

    } catch (error) {

      // Show error
      console.log(error);
    }
  };

  // Function to update book
  const updateBook = async (updatedBook) => {

    try {

      // Send PUT request
      await api.put(

        // Dynamic endpoint
        `/books/${updatedBook.id}`,

        // Updated data
        updatedBook
      );

      // Refresh books
      fetchBooks();

      // Exit edit mode
      setEditingBook(null);

    } catch (error) {

      // Show error
      console.log(error);
    }
  };

  // Filter books based on search and genre
  const filteredBooks = books.filter((book) => {

    // Convert search text to lowercase
    const searchText =
      searchTerm.toLowerCase();

    // Check title match
    const titleMatch =
      book.title
        .toLowerCase()
        .includes(searchText);

    // Check author match
    const authorMatch =
      book.author
        .toLowerCase()
        .includes(searchText);

    // Genre match condition
    const genreMatch =

      // Show all genres
      selectedGenre === "All" ||

      // Match selected genre
      book.genre === selectedGenre;

    // Final condition
    return (
      (titleMatch || authorMatch)
      && genreMatch
    );
  });

  // Returning UI
  return (

    // Main background
    <div className="min-h-screen bg-gray-100">

      {/* Main container */}
      <div className="max-w-6xl mx-auto p-6">

        {/* Header */}
        <div className="flex items-center justify-between mb-8">

          {/* Main heading */}
          <h1 className="text-4xl font-bold text-gray-800">

            Book Management System

          </h1>

        </div>

        {/* Book form */}
        <BookForm
          addBook={addBook}
          editingBook={editingBook}
          updateBook={updateBook}
        />

        {/* Search and filter section */}
        <div className="bg-white p-5 rounded-lg shadow-md mb-8">

          {/* Flex container */}
          <div className="flex flex-col md:flex-row gap-4">

            {/* Search component */}
            <SearchBar
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />

            {/* Filter component */}
            <Filter
              selectedGenre={selectedGenre}
              setSelectedGenre={setSelectedGenre}
            />

          </div>

        </div>

        {/* Books grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Render filtered books */}
          {filteredBooks.map((book) => (

            // Book card component
            <BookCard
              key={book.id}
              book={book}
              deleteBook={deleteBook}
              setEditingBook={setEditingBook}
            />

          ))}

        </div>

      </div>

    </div>
  );
}

// Export component
export default App;