import { Card, Text } from "@mantine/core";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const CasesCarousel = () => {
  const items = [
    {
      title: "Title 1",
      description: "Description 1",
    },
    {
      title: "Title 2",
      description: "Description 2",
    },
    {
      title: "Title 3",
      description: "Description 3",
    },
    {
      title: "Title 4",
      description: "Description 4",
    },
    {
      title: "Title 5",
      description: "Description 5",
    },
    {
      title: "Title 6",
      description: "Description 6",
    },
  ];

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Carousel responsive={responsive}>
      {items.map((item) => (
        <Card key={item.title} style={{ height: "300px" }}>
          <Text variant="h4">{item.title}</Text>
          <Text variant="body1">{item.description}</Text>
        </Card>
      ))}
    </Carousel>
  );
};
