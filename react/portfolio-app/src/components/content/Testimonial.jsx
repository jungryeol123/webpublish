import { SubTitle, Title } from "../base/Title";
import { AvatarImage } from "../base/Avatar";

export function Testimonials({testimonialList}) {
    
    return (
        <section id="testimonial" class="section container">
            <Title title="Testimonial"/>
            <SubTitle title="See What they say about me" />

            <ul class="testimonials">
                {testimonialList && testimonialList.map(item =>
                <li class="testimonial">
                    <img class="testimonial-img" src={item.img} alt={item.msg}/>
                    <div class="testimonial-text">
                        <p>{item.description}</p>
                        <p><a href="#" class="testimonial-text-name">{item.name}</a> /{item.company}</p>
                    </div>
                </li>
                )}
            </ul>
        </section>
    );
}