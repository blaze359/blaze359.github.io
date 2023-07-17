import { Image } from "react-bootstrap"
import profileImage from "../assets/IMG_0417.jpg"
import styled from "styled-components"

const ProfilePic = styled(Image)`
    position: relative;
    width:180px;
    height: 180px;
    object-position: 50% 25%;
`
const Profile = styled.div`
    text-align: center;
    color: white;
`

export default function ProfileImage() {
    return (
        <Profile>
            <ProfilePic src={profileImage} alt="headshot" roundedCircle fluid thumbnail className="object-fit-cover"/>
            <h3>Jameson Arndt</h3>
            <h4>Blaze359@gmail.com</h4>
        </Profile>
    )

}