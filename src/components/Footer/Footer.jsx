import 'bootstrap/dist/css/bootstrap.min.css';

import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';

function Footer() {
  return (
    <Container className="text-center bg-black">
      <Card.Body className="bg-black" >
        <Card.Title >Spial title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Container>
  );
}

export default Footer;