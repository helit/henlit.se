import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  useTheme,
} from "@mui/material";

export type CaseCardProps = {
  title: string;
  body: string;
  image: string;
  imageAlt?: string;
};

export const CaseCard = ({ title, body, image, imageAlt }: CaseCardProps) => {
  const { palette } = useTheme();
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          sx={{ height: 200 }}
          image={image}
          title={imageAlt}
        />
        <CardContent>
          <Typography variant="h6" color={palette.common.black}>
            {title}
          </Typography>
          <Typography variant="body1" color={palette.common.black}>
            {body}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
