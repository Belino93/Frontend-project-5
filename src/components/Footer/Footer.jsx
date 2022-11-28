import 'bootstrap/dist/css/bootstrap.min.css';

import Card from 'react-bootstrap/Card';

function Footer() {
  return (
    <Card className="text-center">
      <Card.Header className="bg-dark">Featured</Card.Header>
      <Card.Body>
        <Card.Title className="bg-light">Spial title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
  );
}

export default Footer;