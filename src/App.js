import logo from './logo.svg';
import './App.css';
import FunctionalComp from './Component/FunctionalComp';
import {ClassComp,ClassComp1} from './Component/ClassComp';
import Click from './Component/Click';
import Counter from './Component/Counter';
import ParentComp from './Component/ParentComp';
import ClassProps from './Component/ClassProps';

function App() {
  return (
    <div>
       <h1>Hello, Welcome to simplilearn.</h1>
       <h1>This video is about component</h1>
       <FunctionalComp name="Isha"></FunctionalComp>
       <ClassComp></ClassComp>
       <ClassComp1></ClassComp1>
       <Click></Click>
       <Counter></Counter>
       <ParentComp /> 
       <ClassProps name="Isha" place="Mumbai"><p>Hello paragraph here</p></ClassProps>
       <ClassProps name="Pratik" place="Mumbai"><button>Click</button></ClassProps>
       {/* self closing of component */}
    </div>
  );
}

export default App;
