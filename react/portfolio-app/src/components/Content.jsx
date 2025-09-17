import { Home } from "./content/Home.jsx";
import { About } from "./content/About.jsx";
import { Skills } from "./content/Skills.jsx";
import { MyWork } from "./content/MyWork.jsx";
import { Testimonials } from "./content/Testimonial.jsx";
import { ArrowTop } from "./content/ArrowTop.jsx";
import { Footer } from "./Footer.jsx";

export function Content({data}) {    
    
    return (
        <>
            <Home data={data.home}/>
            <About data= {data.about}/>
            <Skills data = {data.skills}/>
            <MyWork data = {data.work}/>
            <Testimonials testimonialList = {data.testimonials.testimonialList} />
            <ArrowTop />
        </>
    );
}