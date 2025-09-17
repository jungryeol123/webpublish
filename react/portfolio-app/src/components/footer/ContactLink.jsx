import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub,faLinkedin } from "@fortawesome/free-brands-svg-icons";

export function ContactLink() {
    const links = [
        {"href" : "http://github.com", "type" : "github"},
        {"href" : "http://linkedin.com", "type" : "linkedin"},
    ]
    return (
         <ul class="contact-links">
            {links && links.map(item =>
            <li>
                <a class="contact-link" href={item.href}>
                 {item.type ==="github" && <FontAwesomeIcon icon = {faGithub}/>}
                 {item.type ==="linkedin" && <FontAwesomeIcon icon = {faLinkedin}/>}
                 
                 </a>
            </li>
            )}
        </ul>
        
    );
}