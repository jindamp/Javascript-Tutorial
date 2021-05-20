import { useState } from 'react';
import './App.css';
import AddresssBox from './components/addressBox';
import LoadingButton from './components/loadingButton';
import ContactForm from './components/contactForm';

function App() {
  
  const [count,setCount] = useState(0);
  const [value,setValue] = useState("");

  const [localAddress,setLocalAddresss] = useState({
    city: "Hyderabad",
    state:"Telangana",
    pincode:"500090"
  })


  function handleBtnClick(event){
    setLocalAddresss({
      city:"Austin",
      state:"US",
      pincode:"100923"
    })
    
  }

  return (
    <div className="App">
      <h3>Welcome to react basics tutorial</h3>
      <button onClick={handleBtnClick}>Change Addresss</button>

      <AddresssBox setAddress={setLocalAddresss} address={localAddress}/>  
      <br/>
      <br/>
      <br/>
      <br/>

      <ContactForm/>

    </div>
  );
}

export default App;
