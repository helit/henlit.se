import { Card, Text } from "@mantine/core";
import "@mantine/carousel/styles.css";
import { Carousel } from "@mantine/carousel";

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

  return (
    <Carousel
      withIndicators
      slideSize={"70%"}
      slideGap={"md"}
      height={500}
      align={"center"}
    >
      {items.map((item) => (
        <Carousel.Slide>
          <Card key={item.title} style={{ height: "100%" }}>
            <Text variant="h4">{item.title}</Text>
            <Text variant="body1">{item.description}</Text>
          </Card>
        </Carousel.Slide>
      ))}
    </Carousel>
  );
};
