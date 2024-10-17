import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import {
  Typography,
  AppBar,
  CssBaseline,
  Container,
  Button,
  ButtonGroup,
  Grid,
  Toolbar,
  Box,
  Card,
  CardMedia,
  CardContent,
  CardActions,
} from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";

function App() {
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCamera />
          <Typography variant="h6" sx={{ marginLeft: "20px" }}>
            Hello
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Box
          sx={{
            padding: (theme) => theme.spacing(8, 0, 6), // leveraging theme spacing
          }}
        >
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
        </Box>
        <div style={{display: 'flex', justifyContent: 'center', marginBottom: '30px'}}>
          <ButtonGroup variant="contained" aria-label="Basic button group">
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
          </ButtonGroup>
        </div>
        <div>
          <Grid container spacing={2} justifyContent="center">
            <Grid item>
              <Button variant="contained" color="primary">
                See my images
              </Button>
              <Button variant="outlined" color="secondary">
                Secondary prop
              </Button>
            </Grid>
          </Grid>
        </div>
      </main>
      <Container maxWidth="md" sx={{ marginTop: "30px" }}>
        <Grid container spacing={4}>
          {cards.map((card) => (
            <Grid item key={card} xs={12} sm={6} md={4}>
              <Card>
                <CardMedia
                  component="img"
                  image={`https://images.unsplash.com/photo-1729016258424-317d0f05aa28?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
                  alt={`Image ${card}`}
                  title={`Image ${card}`}
                  sx={{
                    height: 200,
                    width: "100%",
                    objectFit: "cover",
                  }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    Card {card}
                  </Typography>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <footer sx={{ backgroundColor: "lightgreen", padding: "50px 0px" }}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="h6" align="center" gutterBottom>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores,
          unde!
        </Typography>
      </footer>
    </>
  );
}

export default App;
