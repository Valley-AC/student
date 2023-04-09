import Carousel from 'react-bootstrap/Carousel';
import logo from "../../assets/animLogo.gif"
function Slider() {
  return (
    <Carousel  style={{height:"600px"}} variant="dark">
     <Carousel.Item>
        <img
          className="d-block w-100"
          style={{height:"600px"}}
           src={logo}
          alt="First slide"
        />
     
      </Carousel.Item>

    
    </Carousel>
  );
}

export default Slider;