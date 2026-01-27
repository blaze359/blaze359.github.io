import { Image } from "react-bootstrap"
import profileImage from "../assets/IMG_0417.jpg"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"

const ProfilePic = styled(Image)`
    position: relative;
    width:180px;
    height: 180px;
    object-position: 50% 25%;
`
const Profile = styled.div`
    text-align: center;
`

export default function ProfileImage() {
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
        <h6>
          <a href="mailto:Jameson.D.Arndt@gmail.com">
            Jameson.D.Arndt@gmail.com
          </a>
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