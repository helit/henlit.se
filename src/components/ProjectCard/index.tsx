import { CardContent, CardImage, CardWrapper } from "./style";

type ProjectCardProps = {
  children: React.ReactNode;
};

export const ProjectCard = ({ children }: ProjectCardProps) => {
  return (
    <CardWrapper elevation={3}>
      <CardContent>{children}</CardContent>
    </CardWrapper>
  );
};

type ProjectCardImageProps = {
  src: string;
  alt: string;
};

export const ProjectCardImage = ({ src, alt }: ProjectCardImageProps) => {
  return <CardImage src={src} alt={alt} />;
};
