import Carousel from 'react-bootstrap/Carousel';
import img1 from "./../../assets/images/2.jpg";
import img2 from "./../../assets/images/5.webp";
import img3 from "./../../assets/images/4.jpg";
import "./carousel.css"
function App1() {
  
  return (
    <Carousel className='main-container'>
      <Carousel.Item>
        <div className='img7'>
        <img
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
      <div className='img7'>

        <img  
          src={img2}
          alt="Second slide"
        />
</div>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div className='img7'>

        <img 
          src={img3}
          alt="Third slide"
        />
</div>
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