import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import './Home.css'



//BUTTON 

function NetworkRequest() {
    return new Promise((resolve) => setTimeout(resolve, 2000));
}

function DiscoverButton() {
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        if (isLoading) {
            NetworkRequest().then(() => {
                setLoading(false);
            });
        }
    }, [isLoading]);

    const handleClick = () => setLoading(true);

    return (
        <Button
            className="discover-button"
            disabled={isLoading}
            onClick={!isLoading ? handleClick : null}
        >
            {isLoading ? 'Loading…' : 'Click to Discover'}
        </Button>
    );
}



// HOME

function Home() {
    return (
        <Container >
            <Row className='welcome-container d-flex flex-column p-5' >
                <Col sm md lg={true} >
                    <div className='welcome-inner-container d-flex flex-column '>
                        <h6>Discover Abelino's</h6>
                        <h1 className="frase">Your streaming services, <br /> finally in one place!</h1>
                        <p>Meet ABELINO, the cheapest app that combines all the most popular streaming services for easy search <br /> and discovery anywhere you watch movies and shows.</p>
                        <DiscoverButton onClick={() => useNavigate("/login")} />;  {/*   NEED TO SET UP*/}

                    </div>
                </Col>

            </Row>
        </Container>
    );
}





export default Home;

