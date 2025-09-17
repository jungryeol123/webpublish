import { Title,SubTitle, BottomDescription } from "./base/Title.jsx";
import { ContactLink } from "./footer/ContactLink.jsx";

export function Footer() {
    return (
        <footer id="contact" class="footer">
        <Title title = "Let's talk" />
        <SubTitle title = "com.developer.judy@gmail.com" />
        <ContactLink />
        <BottomDescription description=""/>
    </footer>
    );
}