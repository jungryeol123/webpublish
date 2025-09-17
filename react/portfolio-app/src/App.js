import './css/style.css';
import { Header } from './components/Header.jsx';
import { Content } from './components/Content.jsx';
import { Footer } from './components/Footer.jsx';
import { useEffect,useState } from 'react';
import { Testimonials } from './components/content/Testimonial.jsx';

export default function App() {
  const init = {
            header:{menus:[]},
            content:{
              home:{}, 
              about:{
                majors:[],
                jobs:[]
                  },
                skills: {
                coding: [], tools: [],  etc: []
                  },
                work : {
                  titles : [], projects:[]
                },
                testimonials : {
                  testimonialList : []
                }
                }

                };
  const [data,setData] = useState(init);
  useEffect(() => {
    const load = async () => {
      const response = await fetch("/data/portfolio.json")
      const jsonData = await response.json(); //json 파싱 작업
      setData(jsonData);
    }
    load();
  }, []);

  return (
    <>
   <Header data = {data.header}/>
   <Content data = {data.content}/>
   <Footer />
   </>
  );
}
