import Navigation from "../Components/Navigation";
import authorsData from "../data/AuthorsData";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import ButtonScrollToTop from "../Components/ButtonToTop";

export default function Authors() {
  return (
    <div>
      <Navigation />
      <h2 className="authors--title">Meet the minds behind the masterpieces! Discover the lives and works 
        of authors who have shaped literature, sparked ideas, and shared their unique perspectives with 
        the world. Let their words inspire yours.</h2>
      <div className="container">
        {authorsData.map((author) => (
          <Link key={author.id} to={`/author/${author.id}`}>
            <div className="authors--card">
              <img src={author.img} alt="" className="author--img" />
              <div className="intro">
                <h3 className="author--name">{author.name}</h3>
                <p className="author--description">{author.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <ButtonScrollToTop />
      <Footer />
    </div>
  );
}
