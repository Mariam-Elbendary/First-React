// import logo from "./logo.svg";
// import "./App.css";
// import FirstCompo from "./Components/FirstCompo";
// import SecondCompo from "./Components/SecondCompo";
// import ThirdCompo from "./Components/ThirdCompo";
// import LastCompo from "./Components/LastCompo";
// import ToggleButton from "./Components/ToggleButton";
// import Login from "./Login";
// import ShopCart from "./ShopCart";
// import Products from "./Products";
// import Sign from "./Sign";
// import { ContextProvider } from "./Context/mainContext";
// import RequestGet from "./Components/RequestGet";
// import RequestPost from "./Components/RequestPost";
// import Context1 from "./Components/Context1";
// import Show from "./Show";
import React from "react";
import ProductHook from "./Components/FunctionComponent/ProductHook";
import SignUP from "./Components/FunctionComponent/SignUp";
import Context1 from "./Components/FunctionComponent/Context1";
import Counter from "./Components/FunctionComponent/Counter";
import UserName from "./Components/FunctionComponent/UserName";
import Unmount from "./Components/FunctionComponent/Unmount";
import WindowFunction from "./Components/FunctionComponent/WindowFunction";
import Mouse from "./Components/FunctionComponent/Mouse";
import GetFun from "./Components/FunctionComponent/GetFun";
import PostFun from "./Components/FunctionComponent/PostFun";


export const ContextHook = React.createContext();

function App() {
  return (
    <div className="App">
      {/* <FirstCompo/>
      <SecondCompo/>
      <ThirdCompo fname ="Mariam" lname="Mohamed" age={19} nat="Egyptian" coll="Computer Science" skills={ {skill1 : "html", skill2 :"css", skill3 :"js"}} >
        <h4>This is my Bio</h4>
      </ThirdCompo>
      <LastCompo courses={ {course1: "HTML", course2: "CSS", course3: "JS" ,course4 :"React"} } >
        This is the Courses I have studied
      </LastCompo>
      <ToggleButton></ToggleButton> */}

      {/* <Test></Test> */}

      {/* <ShopCart></ShopCart> */}
      {/* <Products /> */}

      {/* <Login></Login>  */}
      {/* <Sign></Sign> */}
      {/* <Show></Show> */}
      {/*       
      <ContextProvider value ={
        {name:"Mariam",
          age:19,
          email:"Mariam@",
          track:"React",
          language:"js"
        }
      }>

        <Context1/> 
      </ContextProvider> */}

      {/* <RequestPost></RequestPost>
      <RequestGet></RequestGet>  */}

      {/* --------Function Component----- */}

      <SignUP></SignUP>
       
      {/* <ProductHook></ProductHook> */}

      {/* <ContextHook.Provider value={"Hallo from context hook"} >
        <Context1></Context1>
       </ContextHook.Provider> */}

      {/* <Counter></Counter> */}

      {/* <UserName></UserName> */}

      {/* <Unmount></Unmount> */}

      {/* <WindowFunction></WindowFunction> */}
      {/* <Mouse></Mouse> */}
      {/* <GetFun></GetFun> */}

      {/* <PostFun></PostFun> */}
    </div>
  );
}

export default App;
