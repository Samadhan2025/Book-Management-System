// Import React hooks
import React, {
  useState,
  useEffect,
} from "react";

// BookForm component
function BookForm({

  // Function to add book
  addBook,

  // Currently editing book
  editingBook,

  // Function to update book
  updateBook,

}) {

  // Form state
  const [formData, setFormData] = useState({

    // Book title
    title: "",

    // Book author
    author: "",

    // Book genre
    genre: "",

    // Publication year
    year: "",
  });

  // useEffect runs when editingBook changes
  useEffect(() => {

    // Check if editing mode is active
    if (editingBook) {

      // Fill form with selected book data
      setFormData(editingBook);
    }

  }, [editingBook]);

  // Handle input field changes
  const handleChange = (event) => {

    // Update form state
    setFormData({

      // Keep previous form values
      ...formData,

      // Update current field dynamically
      [event.target.name]: event.target.value,
    });
  };

  // Handle form submit
  const handleSubmit = (event) => {

    // Prevent page refresh
    event.preventDefault();

    // Create book object
    const newBook = {

      // Keep same ID during update
      id: editingBook
        ? editingBook.id
        : Date.now(),

      // Spread form values
      ...formData,
    };

    // Check whether editing or adding
    if (editingBook) {

      // Update existing book
      updateBook(newBook);

    } else {

      // Add new book
      addBook(newBook);
    }

    // Reset form fields
    setFormData({

      title: "",
      author: "",
      genre: "",
      year: "",
    });
  };

  // Returning UI
  return (

    // Main form container
    <div className="bg-white p-6 rounded-lg shadow-md mb-8">

      {/* Dynamic heading */}
      <h2 className="text-2xl font-bold mb-5">

        {editingBook
          ? "Update Book"
          : "Add New Book"}

      </h2>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >

        {/* Title input */}
        <input
          type="text"
          name="title"
          placeholder="Enter book title"
          value={formData.title}
          onChange={handleChange}
          className="w-full border border-gray-300 p-3 rounded-lg"
        />

        {/* Author input */}
        <input
          type="text"
          name="author"
          placeholder="Enter author name"
          value={formData.author}
          onChange={handleChange}
          className="w-full border border-gray-300 p-3 rounded-lg"
        />

        {/* Genre input */}
        <input
          type="text"
          name="genre"
          placeholder="Enter genre"
          value={formData.genre}
          onChange={handleChange}
          className="w-full border border-gray-300 p-3 rounded-lg"
        />

        {/* Year input */}
        <input
          type="number"
          name="year"
          placeholder="Enter publication year"
          value={formData.year}
          onChange={handleChange}
          className="w-full border border-gray-300 p-3 rounded-lg"
        />

        {/* Submit button */}
        <button
          type="submit"
          className="bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700 transition"
        >

          {editingBook
            ? "Update Book"
            : "Add Book"}

        </button>

      </form>

    </div>
  );
}

// Export component
export default BookForm;