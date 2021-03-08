import logo from './logo.svg';
import './App.css';
import Profile from './Profile/Profile'


function App() {
  const HandleName=(fullName)=>alert(`this is ${fullName}`)
  const ana ={
    fullName :"Lakehal Mounir",
    bio:"I'm Lakehal Mounir, a computer engineer graduated from the institute of electricity and electrical engineering which is located in Boumerdes",
    profession:"FullStack Developper",
    src:"/zizou.jpg"
  }
  return (
    <div className="App">
    <Profile fullName={ana.fullName} bio={ana.bio} profession={ana.profession} HandleName={HandleName} >{ana.src}</Profile>
    </div>
  );
}

export default App ;
