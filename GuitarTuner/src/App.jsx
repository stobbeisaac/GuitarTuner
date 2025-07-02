import './App.css'
import { Button, Container, Row, Col } from 'react-bootstrap';


function App() {

  return (
    <Container>
      <div className="App">
        <h1>Guitar Tuner</h1>
        <p>Welcome to the Guitar Tuner app!</p>
        <p>Use the buttons below to tune your guitar.</p>
        <Row className="mb-3">
          <Col><Button variant="primary" className="w-100">Tune E String</Button></Col>
          <Col><Button variant="secondary" className="w-100">Tune A String</Button></Col>
          <Col><Button variant="success" className="w-100">Tune D String</Button></Col>
        </Row>
        <Row className="mb-3">
          <Col><Button variant="warning" className="w-100">Tune G String</Button></Col>
          <Col><Button variant="info" className="w-100">Tune B String</Button></Col>
          <Col><Button variant="danger" className="w-100">Tune High E String</Button></Col>
        </Row>
        <p>Follow the instructions to get your guitar perfectly tuned!</p>
        <footer>
          <p>&copy; 2023 Guitar Tuner App</p>
        </footer>
      </div>
    </Container>
  )
}

export default App
