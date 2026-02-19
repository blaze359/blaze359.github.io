import sunsetImage from "../assets/IMG_0255.jpg";
import styled from "styled-components";

const Header = styled.header`
    height: 8em;
    width: 100%;
    background-image: url(${sunsetImage});
    background-size: cover;
    background-position-x: center;
    background-position-y: 75%;
`;

export default function Heading() {
    return <Header />;
}
