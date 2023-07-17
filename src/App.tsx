import Heading from './components/Heading';
import ProfileImage from './components/ProfileImage';
import NavBar from './components/NavBar';
import Routing from './components/Routing';
import "bootstrap/dist/css/bootstrap.css";
import { Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

const Main = styled(Row)`
  height: 100%;
`;

const Left = styled(Col)`
  background-color: black;
  height: 100%;
  transform: translate(0,-13%);
`;

function App() {
  return (
    <>
      <Row>
        <Heading />
      </Row>
      <Main>
        <Left xs={2}>
          <ProfileImage />
          <NavBar />
        </Left>
        <Col>
          <Routing />
        </Col>
      </Main>
    </>
  );
}

export default App;
