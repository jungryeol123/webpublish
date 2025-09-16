import './css/style.css';
import { Header } from './components/Header.jsx';
import { Content } from './components/Content.jsx';

export default function App() {
  const homeData = {
    "img" : "/portfolio_image/favicon.ico",
    "name" : "Judy",
    "title" : "Junior Developer",
    "description" : "A software engineer currently residing in Seoul, South Korea"
  }
  return (
    <>
   <Header />
   <Content data = {homeData}/>
   </>
  );
}
