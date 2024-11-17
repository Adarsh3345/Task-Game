import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img from './img.png'
import './Card.css';
function BasicExample() {
  return (
    <Card className='card' style={{ width: '22rem' }}>
      <Card.Img className='card-img' variant="top" src={img} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;