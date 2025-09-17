import { Buttons } from "../base/Buttons";
import { Title,SubTitle } from "../base/Title";
import { Projects } from "./Project.jsx";

export function MyWork({data}) {

    return (
        <section id="mywork" class="section container">
            <Title title="My Work"/>
            <SubTitle title="Projects"/>
            <Buttons titles={data.titles}/>
            <Projects projects={data.projects}/>
        </section>
    );
}