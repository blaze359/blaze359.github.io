import Heading from './components/Heading';
import ProfileImage from './components/ProfileImage';
import NavBar from './components/NavBar';
import Routing from './components/Routing';
import "bootstrap/dist/css/bootstrap.css";
import "./styles/global.css";
import { Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

const Main = styled(Row)`
  height: 100%;
  margin-left: 20px;
  margin-right: 20px;
`;

const Left = styled(Col)`
  height: 100%;
`;

const ShiftUp = styled.div`
  transform: translate(0,-13%);
`;

function App() {
  return (
    <>
      <Row>
        <Heading />
      </Row>
      <Main>
        <Left xs={2} md="auto" className="d-none d-md-block">
          <ShiftUp>
            <Row>
              <ProfileImage />
            </Row>
            <Row>
              <NavBar />
            </Row>
          </ShiftUp>
        </Left>
        <Col
          style={{
            padding: "20px",
            height: "100%",
          }}
        >
          <Routing />
        </Col>
      </Main>
    </>
  );
}

export default App;
