import Navbar from "../components/NavBar";
// import {AiOutlineSearch} from "react-icons/ai";
import { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import Axios from "axios";
import "./Home.css";
function Home() {
  const url =
    "https://api.unsplash.com/photos/random?count=30&orientation=squarish&client_id=X-dZbH81rHSPiOjPkTLW-p74vx5cwfL4Qcef2LzqPwQ";
  const [images, setImages] = useState([]);

  const getImages = () => {
    Axios.get(url).then((res) => {
      setImages(res.data);
      console.log(res);
    });
  };

  useEffect(() => {
    getImages();
  }, []);

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
      <div className="image-grid">
        {images.map((image) => {
          return (
            <div className="image" key={image.id}>
              <img
                src={image.urls.regular}
                alt={image.alt_description}
                key={image.id}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Home;

// const [searchTerm, setSearchTerm] = useState("");

// const inputHandler = (event) => {
//   setSearchTerm(event.target.value)
// }

// const onSubmitHandler = () => {
//   getImages(searchTerm);
// }

/* <div className="search-bar">
        <input value={searchTerm} onChange={inputHandler} type="text"/>
        <button onClick={onSubmitHandler}><AiOutlineSearch/></button>
      </div> */
