import Navigation from "../Components/Navigation";
import BooksCard from "../Components/BookCard";
import Footer from "../Components/Footer";
import booksdata from "../data/Booksdata";
import "../App.css";
import SearchBar from "../Components/SearchBar";
import { useState } from "react";
import ButtonScrollToTop from "../Components/ButtonToTop";

export default function BooksPage() {
  const [selectedBook, setSelectedBook] = useState(null);
  const [filteredData, setFilteredData] = useState([]);

  const handleSelectBook = (book) => {
    setSelectedBook(book);
  };

  const handleClearInput = () => {
    setSelectedBook(null);
  };

  let filteredBooks = selectedBook ? [selectedBook] : booksdata;

  if (filteredData.length > 0) {
    filteredBooks = filteredData;
  }

  return (
    <div>
      <Navigation />
      <h2 className="bookspage--title">
        Explore a world of stories and knowledge with our diverse collection of books. 
        From timeless classics to contemporary gems, find resources to inspire, educate, 
        and entertain. Start your journey of discovery today!
      </h2>
      <SearchBar
        data={booksdata}
        onSelectBook={handleSelectBook}
        onClearInput={handleClearInput}
      />
      <div className="bookspage--container">
        <div className="booksbox">
          {filteredBooks.map((book) => (
            <BooksCard key={book.id} data={book} />
          ))}
        </div>
      </div>
      <ButtonScrollToTop />
      <Footer />
    </div>
  );
}
