import NavBar from '../components/navbar'
import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
export default ({ children }) => (
  <div>
    <NavBar/>
    <Container>
      <Row>
        <Col sm="12" md={{ size: 8, offset: 2 }}>{ children }</Col>
      </Row>
 </Container>
  </div>
)
