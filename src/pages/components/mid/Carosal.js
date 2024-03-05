import Carousel from 'react-bootstrap/Carousel';
import { Image } from 'react-bootstrap';

function Carsol1() {
  const carouselItemStyle = {
    maxHeight: '60vh',
    
     
  };

  return (
    <div>
    <Carousel >
      <Carousel.Item style={carouselItemStyle}>
        <Image src={require('./1.jpg')}   alt="image here" fluid />
        <Carousel.Caption>
          <h1 style={{marginBottom:'10vh'}}>First Carosal</h1>
          <button style={{borderRadius:'100px', width:'100px', border:'none', }}>nive</button>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={carouselItemStyle}>
        
        <Image src={require('./1.jpg')} alt="image here" fluid />
        <Carousel.Caption>
        <h1 style={{marginBottom:'10vh'}}>Second Carosal</h1>
        <button style={{borderRadius:'100px', width:'100px', border:'none'}}>nive</button>

          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={carouselItemStyle}>
        <Image src={require('./1.jpg')} alt="image here" fluid />
        <Carousel.Caption>
        <h1 style={{marginBottom:'10vh'}}>Third Carosal</h1>
        <button style={{borderRadius:'100px', width:'100px', border:'none'}}>nive</button>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default Carsol1;
