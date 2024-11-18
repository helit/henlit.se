import { Grid2 } from "@mui/material";
import { CaseCard, CaseCardProps } from "../CaseCard/CaseCard";

export const Cases = () => {
  const cases: CaseCardProps[] = [
    {
      title: "Case one",
      body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut.`,
      image: "https://mui.com/static/images/cards/contemplative-reptile.jpg",
      imageAlt: "green iguana",
    },
    {
      title: "Case two",
      body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut.`,
      image: "https://mui.com/static/images/cards/contemplative-reptile.jpg",
      imageAlt: "green iguana",
    },
    {
      title: "Case three",
      body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut.`,
      image: "https://mui.com/static/images/cards/contemplative-reptile.jpg",
      imageAlt: "green iguana",
    },
    {
      title: "Case four",
      body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut.`,
      image: "https://mui.com/static/images/cards/contemplative-reptile.jpg",
      imageAlt: "green iguana",
    },
  ];

  return (
    <Grid2 container rowSpacing={2} columnSpacing={2}>
      {cases.map((caseItem) => (
        <Grid2 key={caseItem.title} size={{ md: 6, sm: 12 }}>
          <CaseCard {...caseItem} />
        </Grid2>
      ))}
    </Grid2>
  );
};
