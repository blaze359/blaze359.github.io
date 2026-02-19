import Heading from "./components/Heading";
import ProfileImage from "./components/ProfileImage";
import DesktopNav from "./components/DesktopNav";
import MobileNav from "./components/MobileNav";
import Routing from "./components/Routing";
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "./styles/global.css";
import { Row, Col } from "react-bootstrap";
import styled from "styled-components";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const Main = styled(Row)`
    margin-left: 20px;
    margin-right: 20px;
    flex-wrap: nowrap;
`;

const Left = styled(Col)`
    height: 100%;
`;

const ShiftUp = styled.div`
    transform: translate(0, -13%);
`;

function App() {
    return (
        <>
            <MobileNav />
            <Row className="me-0">
                <Heading />
            </Row>
            <Main>
                <Left xs={2} md="auto" className="d-none d-md-block">
                    <ShiftUp>
                        <Row>
                            <ProfileImage />
                        </Row>
                        <Row>
                            <DesktopNav />
                        </Row>
                    </ShiftUp>
                </Left>
                <Col className="p-5 mb-5">
                    <Routing />
                </Col>
            </Main>
        </>
    );
}

export default App;
