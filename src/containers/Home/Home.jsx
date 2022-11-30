import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import './Home.css'





function Home() {
    return (
        <Container >
            <Row className='welcome-container d-flex flex-column p-5' >

                <Col sm md lg={true} >
                    <div className='welcome-inner-container d-flex flex-column '>
                        <h6>Discover Abelino's</h6>
                        <h1 className="frase">Your streaming services, <br /> finally in one place!</h1>
                        <p>Meet ABELINO, the cheapest app that combines all the most popular streaming services for easy search <br /> and discovery anywhere you watch movies and shows.</p>
                        <Button className='discover-button' size="lg">
                            Discover
                        </Button>
                    </div>
                </Col>

            </Row>
        </Container>
    );
}





export default Home;

