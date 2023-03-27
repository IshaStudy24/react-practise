import logo from './logo.svg';
import './App.css';
import FunctionalComp from './Component/FunctionalComp';
import {ClassComp,ClassComp1} from './Component/ClassComp';
import Click from './Component/Click';
import Counter from './Component/Counter';
import ParentComp from './Component/ParentComp';

function App() {
  return (
    <div>
       <h1>Hello, Welcome to simplilearn.</h1>
       <h1>This video is about component</h1>
       <FunctionalComp></FunctionalComp>
       <ClassComp></ClassComp>
       <ClassComp1></ClassComp1>
       <Click></Click>
       <Counter></Counter>
       <ParentComp></ParentComp>
    </div>
  );
}

export default App;
