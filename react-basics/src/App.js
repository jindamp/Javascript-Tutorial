import { useState } from 'react';
import './App.css';
import LoadingButton from './components/loadingButton';

function App() {
  
  const [count,setCount] = useState(0);
  const [value,setValue] = useState("");


  function handleBtnClick(event){
    
    // count++;
    // count = count + 1;
    var num = count + 1;
    setCount(num);

    if( num % 2 === 0){
      setValue("Even");
    }else{
      setValue("Odd");
    }

    console.log(count);
  }

  return (
    <div className="App">
      <h3>Welcome to react basics tutorial</h3>
      <div>
        
        <div style={{fontSize:24}}> {count} </div>
        <div style={{fontSize:20}}> {value} </div>
        
        <button onClick={ (e)=> handleBtnClick(e)}>Click Me</button>

        {/* <button onClick={ handleBtnClick }>Click Me</button> */}

      </div>
      

      {
        value === "Odd" ?
          <>
            <LoadingButton text="one" type="danger" />
            <LoadingButton  text="three" type="primary"/>
          </> : 
          <>
            <LoadingButton text="two" type="warning"/>      
            <LoadingButton  text="four"/>
          </>

      }


      
      

    </div>
  );
}

export default App;
