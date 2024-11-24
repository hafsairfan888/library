import Navigation from "./Navigation";
import Lottie from "lottie-react";
import books from "../assets/books.json";

export default function Navbar() {
  return (
    <div className="hero">
      <Navigation />
      <div className="homepage--texts">
      <h1 className="nav--text">WELCOME TO HGS LIBRARY!</h1>
      <p className="nav--para">
        Here, you'll find a vast collection of books, inspiring authors, 
        and thought-provoking quotes, all designed to enrich your learning 
        journey. Whether you're looking for academic resources or motivational 
        reads, our Digital Library has something for every student. Explore, learn, and let your imagination soar!
      </p>
      <p className="nav--subpara">Developed By Hafsa Irfan</p>
      </div>
      <div className="lottie--container">
        <Lottie animationData={books} />
      </div>
    </div>
  );
}
