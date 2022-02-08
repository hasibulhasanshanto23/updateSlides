import React from "react";
import Slider from "react-slick";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
const SliderSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Container style={{ marginTop: "30px" }}>
      <h2> Single Item</h2>

      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={4}>
          <Slider {...settings}>
            <div>
              <h3>1</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
          </Slider>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SliderSection;
