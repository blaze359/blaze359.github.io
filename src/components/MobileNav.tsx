import { Navbar, Offcanvas, Container } from "react-bootstrap";
import { useState } from "react";
import { faBars, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DesktopNav from "./DesktopNav";
import ProfileImage from "./ProfileImage";

function MobileNav() {
    const [show, setShow] = useState(false);

    return (
        <>
            <Navbar bg="dark" variant="dark" className="d-md-none">
                <Container fluid>
                    <button
                        onClick={() => setShow(true)}
                        className="cursor-pointer bg-transparent border-0 p-0"
                    >
                        <FontAwesomeIcon
                            icon={faBars}
                            size="lg"
                            style={{ color: "white" }}
                        />
                    </button>
                </Container>
            </Navbar>

            <Offcanvas
                show={show}
                onHide={() => setShow(false)}
                placement="start"
            >
                <Offcanvas.Header className="justify-content-end">
                    <FontAwesomeIcon
                        icon={faCircleXmark}
                        size="xl"
                        aria-label="Close"
                        onClick={() => setShow(false)}
                    />
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ProfileImage />
                    <DesktopNav onAction={() => setShow(false)} />
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default MobileNav;
