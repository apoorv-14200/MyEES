import { FC } from "react";
import { Carousel } from "antd";
import SuspenseLoader from "../components/SuspenseLoader";
import history from "../history";
import "antd/dist/antd.css";
import { Button } from "antd";

interface Props {
  role: string;
}

const imgCarousel = [
  {
    id: 1,
    uri: "https://i.ytimg.com/vi/EjtO_u5HXBk/maxresdefault.jpg",
  },
  {
    id: 2,
    uri: "https://iitbhu.ac.in/sites/default/files/juicebox/ece/gallery_ece_01.jpg",
  },
  {
    id: 3,
    uri: "https://i.ytimg.com/vi/UNQV2KLx8XA/maxresdefault.jpg",
  },
  {
    id: 4,
    uri: "https://iitbhu.ac.in/contents/ece/img/Microwave.jpg",
  },
];

const handleClick = () => {
  console.log("location ->>>>", history.location);
  history.push(history.location.pathname + "/posts");
};

const HomePage: FC<Props> = ({ children, role }) => {
  console.log("Home page");
  console.log(history);
  console.log("HISTORY", history.location.pathname);

  return (
    <div className="homepage">
      <Carousel
        autoplay
        style={{
          width: "75rem",
          height: "45rem",
          margin: "1rem",
          backgroundColor: "black",
        }}
      >
        {imgCarousel.map((img) => (
          <div
            key={img.id}
            style={{
              width: "fit-content",
              height: "fit-content",
            }}
          >
            <img
              src={img.uri}
              alt=""
              style={{ width: "75rem", height: "40rem" }}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default HomePage;
