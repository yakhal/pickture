import Navbar from "../components/NavBar";
import { AiOutlineSearch } from "react-icons/ai";
import { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import Axios from "axios";
import "./Home.css";

function Home() {
  const [input, setInput] = useState("");
  const [searchTerm, setSearchTerm] = useState("random");
  const [images, setImages] = useState([]);

  useEffect(() => {
    const getImages = (query) => {
      const url = `https://api.unsplash.com/search/photos?query=${query}&order_by=latest&per_page=30&orientation=squarish&client_id=X-dZbH81rHSPiOjPkTLW-p74vx5cwfL4Qcef2LzqPwQ`;
      Axios.get(url).then((res) => {
        setImages(res.data.results);
        // console.log(res.data.results);
      });
    };
    getImages(searchTerm);
  }, [searchTerm]);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    setSearchTerm(input);
  }

  if (!images) {
    return (
      <div className="loading">
        <ReactLoading type="bars" color="#5a5a5a" height={400} width={200} />
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <form onSubmit={onSubmitHandler} className="search-bar">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Try searching 'Beach'"
        />
        <button>
          <AiOutlineSearch />
        </button>
      </form>
      <div className="image-grid">
        {images.map((image) => {
          return (
            <div className="image" key={image.id}>
              <img
                src={image.urls.regular}
                alt={image.alt_description}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Home;
