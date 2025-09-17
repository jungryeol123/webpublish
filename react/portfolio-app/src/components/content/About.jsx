import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Title,Description } from "../base/Title.jsx";
import { Majors,Major } from "./Majors.jsx";
import { Jobs } from "./Jobs.jsx"

export function About({data}) {
    return(
         <section id="about" className="section container">
            <Title title = "About me"/>
            {/* <h2 className="title">About me </h2> */}
            <Description style="description" />
            <Majors majors = {data.majors}/>
            <Jobs jobs = {data.jobs}/>
              
            </section>
    );
}