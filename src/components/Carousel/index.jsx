import Carousel from 'react-bootstrap/Carousel';
import img1 from "./../../assets/images/2.jpg";
import img2 from "./../../assets/images/3.png";
import img3 from "./../../assets/images/4.jpg";
import "./carousel.css"
function App1() {
  
  return (
    <Carousel className='main-container'>
      <Carousel.Item>
        <div style={{height:'35rem'}}>
        <img
          className="d-block w-100"
          src={img1}
          alt="First slide"
        />
        </div>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default App1;