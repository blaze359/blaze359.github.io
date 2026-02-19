import { Image } from "react-bootstrap";
import profileImage from "../assets/IMG_0417.jpg";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faCopy } from "@fortawesome/free-solid-svg-icons";

const ProfilePic = styled(Image)`
    position: relative;
    width: 180px;
    height: 180px;
    object-position: 50% 25%;
`;
const Profile = styled.div`
    text-align: center;
`;

export default function ProfileImage() {
    const email = "Jameson.D.Arndt@gmail.com";

    const handleCopy = () => {
        navigator.clipboard
            .writeText(email)
            .then(() => {
                alert(`Email copied to clipboard: ${email}`);
            })
            .catch((err) => {
                console.error("Failed to copy!", err);
            });
    };

    return (
        <Profile>
            <ProfilePic
                src={profileImage}
                alt="headshot"
                roundedCircle
                fluid
                thumbnail
                className="object-fit-cover"
            />
            <h3>Jameson Arndt</h3>
            <h6 className="d-flex gap-2 justify-content-center">
                <a href={`mailto:${email}`}>{email}</a>
                <FontAwesomeIcon
                    icon={faCopy}
                    onClick={handleCopy}
                    className="pointer"
                />
            </h6>
            <h6>
                <a href="https://www.linkedin.com/in/jameson-arndt/">
                    <FontAwesomeIcon icon={faLinkedin} />
                    LinkedIn Profile
                </a>
            </h6>
        </Profile>
    );
}
