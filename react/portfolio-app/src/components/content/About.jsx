import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Title,Description } from "../base/Title.jsx";
import { Majors,Major } from "./Majors.jsx";
import { Jobs } from "./Jobs.jsx"

export function About() {
    return(
         <section id="about" className="section container">
            <Title title = "About me"/>
            {/* <h2 className="title">About me </h2> */}
            <Description />
            <Majors />
            <Jobs />
              
            </section>
    );
}