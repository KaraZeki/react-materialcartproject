import "./App.css";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { red } from "@mui/material/colors";
import { Course } from "./Course";

function App() {
  const img1 =
    "https://cdn.pixabay.com/photo/2016/04/01/12/16/car-1300629_1280.png";
  const img2 =
    "https://cdn.pixabay.com/photo/2013/07/13/11/48/bmw-158703_1280.png";
  const img3 =
    "https://cdn.pixabay.com/photo/2021/07/11/10/39/fantasy-6403406_1280.jpg";
  const img4 =
    "https://cdn.pixabay.com/photo/2012/04/24/14/21/car-40241_1280.png";
  return (
    <div>
      <AppBar>
        <Toolbar sx={{ fontSize: 30 }}>Kart Projesi</Toolbar>
      </AppBar>
      <Container maxWidth="lg">
        <Grid container spacing={2} sx={{ marginTop: 10 }}>
          <Grid item xs={12} md={6} lg={3}>
            <Course img={img1} title="React" description=""></Course>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Course img={img2} title="React" description=""></Course>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Course img={img3} title="React" description=""></Course>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Course img={img4} title="React" description=""></Course>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
