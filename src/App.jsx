import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import {
  Typography,
  AppBar,
  Card,
  CardActions,
  CardMedia,
  CardContent,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
} from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
function App() {
  return (
    <>
      {/* <Typography variant='h1'>Hello</Typography> */}
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCamera />
          <Typography variant="h6">Hello</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div>
          <Container maxWidth="sm">
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Photo Album
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
              aperiam atque inventore ut nesciunt, officiis aliquam quaerat
              quasi dignissimos placeat. Dolorum tenetur temporibus enim laborum
              fuga odit placeat quis quasi dolore illo? Reprehenderit nobis
              facere velit odit ipsum similique officia.
            </Typography>
          </Container>
        </div>
        <div>
          <ButtonGroup variant="contained" aria-label="Basic button group">
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
          </ButtonGroup>
        </div>
      </main>
    </>
  );
}

export default App;
