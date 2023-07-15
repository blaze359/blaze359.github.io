import headerImage from "../assets/IMG_0255-1.jpg"
import styled from "styled-components"
import { Image } from "react-bootstrap";

const Header = styled.header`
    height: 10em;
    width: 100%;

`;

export default function Heading() {
    return (
        <Header>
            <Image src={headerImage} alt="sunset" fluid/>
        </Header>
    )
}