import Carousel from "react-multi-carousel";
import { Card, Image } from "semantic-ui-react";
import CarouselComponent from "./CarouselCompo";



const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    paritialVisibilityGutter: 60
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    paritialVisibilityGutter: 50
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    paritialVisibilityGutter: 30
  }
};
const images = [
  "https://www.campinglesetangs.com/wp-content/uploads/2017/12/brehat-1.jpg",
  "https://t3.ftcdn.net/jpg/02/18/01/88/360_F_218018886_n4FHBbPZjGVeXcnYvrmjgmtQZ1ije46H.jpg",
  "https://cdn.artphotolimited.com/images/58bd704f04799b000f623d31/1000x1000/ile-de-brehat.jpg",
  "https://i.pinimg.com/originals/6b/7c/2a/6b7c2ada369b2161ec8db8df7f3bc8fc.jpg",
  "https://nl.camping-le-varquez.com/usermedia/photo-637550425193931035-1.jpg?dummy=0&crop=True&w=1300&h=780",
  "https://i.ytimg.com/vi/a_F4zNz5oLg/maxresdefault.jpg",
  "https://www.detoursenfrance.fr/sites/art-de-vivre/files/dt_hs-ile-brehat-aerien2_br.jpg",
  "https://asundaymorning.com/wp-content/uploads/2019/05/asundaymorning-1660.jpg",
];

// Because this is an inframe, so the SSR mode doesn't not do well here.
// It will work on real devices.
const Simple = ({ deviceType }) => {
  return (
    <Carousel
      ssr
      partialVisbile
      deviceType="desktop"
      itemClass="image-item"
      responsive={responsive}
    >
      {images.slice(0, 20).map(image => {
        return (
          <Image
            draggable={false}
            style={{ width: "100%", height: "100%" }}
            src={image}
          />
        );
      })}
    </Carousel>
  );
};

export default Simple;
