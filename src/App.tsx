
import './App.css';
import MyHeading from './components/ui/heading';
import { ThemeProvider } from './components/ui/theme-provider';
import AppCard from './mycomponents/app-dev-card';

import { NavbarDemo } from './mycomponents/nav-bar';
import "@/mycomponents/my-style.css"
import WebCard from './mycomponents/web-dev';
import TextImageDiv from './mycomponents/text-image';
import Footer from './components/ui/footer';

function App() {
  return <>
  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <NavbarDemo></NavbarDemo>
      <br></br>
      <br></br>
      <TextImageDiv textContent="Software Engineer specializing in Web Development & App Development">
      </TextImageDiv>
      <br></br>
      <MyHeading text='Services Provided'></MyHeading>
      <br></br>
      <br></br>
      <div className='app-card-container'>
      <AppCard></AppCard>
      <WebCard></WebCard>
      </div>
      <br></br>
      <br></br>
      <Footer></Footer>
      
    </ThemeProvider></>

}

export default App
