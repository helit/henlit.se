import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Typography,
  colors,
} from "@mui/material";
import { Avatar } from "../Avatar";
import { ContentWrapper, IntroBoxWrapper } from "./style";
import { Section } from "../Section";
import { Carpenter, Label, Code, Person, Phone } from "@mui/icons-material";
import { ProjectCard, ProjectCardImage } from "../ProjectCard";
import { ContactForm } from "../ContactForm";

export const IntroBox = () => {
  return (
    <IntroBoxWrapper square={true} elevation={0}>
      <Avatar />
      <ContentWrapper>
        <Typography variant={"h4"} component={"h1"}>
          Henrik Littke
        </Typography>
        <Typography
          variant={"subtitle1"}
          component={"h2"}
          mt={1}
          mb={4}
          color={colors.blueGrey[600]}
        >
          Fullstack Web Developer - 3D Artist
        </Typography>
        <Section title={"Hi!"} icon={<Person fontSize={"large"} />}>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "2rem" }}
          >
            <Typography variant={"body1"} width={600}>
              My name is Henrik and I am a web developer based in the vicinity
              of Gothenburg, Sweden. I've been working as a fullstack web
              developer since 2014. Aside from that, I've also been learning 3D
              modeling with Blender in my spare time.
            </Typography>
            <Typography variant={"body1"} width={600}>
              Below you can see some of the work I've done. If you want to get
              in touch, please use the contact form.
            </Typography>
          </div>
        </Section>
        <Section
          title={"Work I've done"}
          icon={<Carpenter fontSize={"large"} />}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              rowGap: "2rem",
              columnGap: "2rem",
            }}
          >
            <ProjectCard>
              <ProjectCardImage
                src={"./src/assets/images/projects/web/stena.png"}
                alt={"Stena Recycing Portal"}
              />
            </ProjectCard>
            <ProjectCard>
              <ProjectCardImage
                src={"./src/assets/images/projects/web/reisswolf.png"}
                alt={"Reisswolf order"}
              />
            </ProjectCard>
            <ProjectCard>
              <ProjectCardImage
                src={"./src/assets/images/projects/web/gbgkk.png"}
                alt={"Göteborgs kulturkalas website"}
              />
            </ProjectCard>
            <ProjectCard>
              <ProjectCardImage
                src={"./src/assets/images/projects/web/uap-map.png"}
                alt={"UFO/UAP sightings map"}
              />
            </ProjectCard>
            <ProjectCard>
              <ProjectCardImage
                src={"./src/assets/images/projects/3d/arcitecture.png"}
                alt={"3D architectural visualization"}
              />
            </ProjectCard>
            <ProjectCard>
              <ProjectCardImage
                src={"./src/assets/images/projects/3d/hat.png"}
                alt={"3D architectural visualization"}
              />
            </ProjectCard>
          </div>
        </Section>
        <Section title={"Technologies"} icon={<Code fontSize={"large"} />}>
          <Typography variant={"body1"} mb={3} width={600}>
            Primary technologies I'm working with:
          </Typography>
          <List
            dense
            subheader={
              <ListSubheader component='div' id='nested-list-subheader'>
                Frontend
              </ListSubheader>
            }
          >
            <ListItem>
              <ListItemIcon>
                <Label style={{ color: colors.orange[600] }} />
              </ListItemIcon>
              <ListItemText primary='React' />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Label style={{ color: colors.orange[600] }} />
              </ListItemIcon>
              <ListItemText primary='Typescript' />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Label style={{ color: colors.orange[600] }} />
              </ListItemIcon>
              <ListItemText primary='Vite.js' />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Label style={{ color: colors.orange[600] }} />
              </ListItemIcon>
              <ListItemText primary='Three.js / React three fiber' />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Label style={{ color: colors.orange[600] }} />
              </ListItemIcon>
              <ListItemText primary='Styled Components / Tailwind' />
            </ListItem>
          </List>
          <List
            dense
            subheader={
              <ListSubheader component='div' id='nested-list-subheader'>
                Backend
              </ListSubheader>
            }
          >
            <ListItem>
              <ListItemIcon>
                <Label style={{ color: colors.orange[600] }} />
              </ListItemIcon>
              <ListItemText primary='Node.js' />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Label style={{ color: colors.orange[600] }} />
              </ListItemIcon>
              <ListItemText primary='AWS' />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Label style={{ color: colors.orange[600] }} />
              </ListItemIcon>
              <ListItemText primary='Firebase' />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Label style={{ color: colors.orange[600] }} />
              </ListItemIcon>
              <ListItemText primary='SQL' />
            </ListItem>
          </List>
        </Section>
        <Section title={"Work with me"} icon={<Phone fontSize={"large"} />}>
          <Typography variant={"body1"} mb={3} width={600}>
            If you want to get in touch with me to discuss a project of yours,
            or something you might need my help with, please use the contact
            form below. Looking forward hearing from you!
          </Typography>
          <ContactForm />
        </Section>
      </ContentWrapper>
    </IntroBoxWrapper>
  );
};
