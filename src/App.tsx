
import './App.css';
import MyHeading from './components/ui/heading';
import { ThemeProvider } from './components/ui/theme-provider';
import AppCard from './mycomponents/app-dev-card';

import { NavbarDemo } from './mycomponents/nav-bar';
import "@/mycomponents/my-style.css"
import WebCard from './mycomponents/web-dev';

function App() {
  return <>
  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <NavbarDemo></NavbarDemo>
      <MyHeading text='Services Provided'></MyHeading>
      <br></br>
      <div className='app-card-container'>
      <AppCard></AppCard>
      <WebCard></WebCard>
      </div>
      
    </ThemeProvider></>

}

export default App