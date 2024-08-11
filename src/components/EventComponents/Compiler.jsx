import React from "react";
import AceEditor from "react-ace";
//import Particles from "react-particles-js";
import axios from "axios";
import Footer from "../Footer.jsx";
//import Submit from "./Events.Submit.jsx";
import ParticlesBackground from "./ParticlesBackground.jsx";

//import images
// import AnalyzeImg from "../../images/Analyze.png";
import Iphone from "../../images/PhoneXgood2.png";
import IScreen from "../../images/ScreenXgood.png";
// import Chart from "../../images/about-img-3.png"
import TheKid from "../../images/gurukid.png"
//use the functions and state to concatenate the file extension into this value ~~ can't do this in an import

//import langs
import "ace-builds/src-noconflict/mode-python"
import "ace-builds/src-noconflict/mode-java"
import "ace-builds/src-noconflict/mode-pascal"
import "ace-builds/src-noconflict/mode-swift"
import "ace-builds/src-noconflict/mode-matlab"
import "ace-builds/src-noconflict/mode-c_cpp"
import "ace-builds/src-noconflict/mode-csharp"
import "ace-builds/src-noconflict/mode-ruby"
import "ace-builds/src-noconflict/mode-php"
import "ace-builds/src-noconflict/mode-c9search"
import "ace-builds/src-noconflict/mode-perl"

//import themes
import "ace-builds/src-noconflict/theme-twilight"
import "ace-builds/src-noconflict/theme-monokai"
import "ace-builds/src-noconflict/theme-textmate"
import "ace-builds/src-noconflict/theme-xcode"
import "ace-builds/src-noconflict/theme-solarized_dark"
import "ace-builds/src-noconflict/theme-dracula"
import "ace-builds/src-noconflict/theme-clouds"
import "ace-builds/src-noconflict/theme-chrome"
import "ace-builds/src-noconflict/theme-crimson_editor"

function Compiler() {
  
  const [code, setCode] = React.useState("def main():\n\tprint('Hello World')\n\nmain()")
  const [chosenLanguage,setLanguage] = React.useState("python")
  const [dataLanguage,setDataLanguage] = React.useState("python3");
  const [chosenTheme, setTheme] = React.useState("twilight")
  // //const [output,setOutput] = React.useState("")
  const [output,setOutput] = React.useState("");
  const [memory,setMemory] = React.useState("");
  const [cpuTime,setCpuTime] = React.useState("");
  const [Index, setIndex] = React.useState("3");
  const [defLanguage, setDefLanguage] = React.useState("");

  const data = {
    clientId: "87222012f899871bce17c13149670222",
    clientSecret:
      "66b9c0d71a3fdf065b0b03bed780939fc5d52320985bdb37a9d1bcdb96ea92c6",
    script: code, 
    //~~ replaced the script with the code from onChange that was passed into the imported function
    //script: strReplace(code),
    language: dataLanguage, //take the version index and make it according
    versionIndex: Index,
    stdin: "",
  };
//create a variable to next stdin and test cases as input



  
  
  
  const defValPython = "def main():\n\tprint('Hello World')\n\nmain()"
  
  



  function handleTheme(event){
    
    setTheme(event.target.value);
    console.log(event.target.value);
    
}

  function handleLanguage(event){
    setLanguage(event.target.value);
    console.log(chosenLanguage)
    switch(event.target.value){
      case "python":
        setDataLanguage(event.target.value+"3");
        console.log(dataLanguage);
        console.log(chosenLanguage);
        
        break;
      case "c":
        setDataLanguage(event.target.value);
        setDefLanguage("333")
        console.log(dataLanguage);
        console.log(dataLanguage);
        setIndex("3")
        break;
      case "csharp":
        setDataLanguage(event.target.value);
        setDefLanguage("333")
        console.log(chosenLanguage);
        console.log(Index)
        setIndex("3");
        break;
      case "c_cpp":
        
      
      setDataLanguage("cpp17");
      setIndex("0");
      
      // console.log(event.target.class);
      // switch(event.target.class){
      //     case "c":
      //       setDataLanguage("c");
      //       setIndex("4");
      //       break;
      //     case "c99":
      //       setDataLanguage("c99");
      //       setIndex("3");
      //       break;
      //     case "cpp":
      //       setDataLanguage("cpp");
      //       setIndex("4");
      //       break;
      //     case "cpp14":
      //       setDataLanguage("cpp14");
      //       setIndex("3");
      //       break;
      //     case "cpp17":
      //       setDataLanguage("cpp17");
      //       setIndex("0");
      //       break;
          
      //     }
        break;
      // case "pascal":
      //   setDataLanguage(event.target.value);
      //   setDefLanguage("333")
      //   console.log(chosenLanguage);
      //   console.log(Index)
      //   setIndex("2");
      //   break;
      case "java":
        setDataLanguage(event.target.value);
        // setDefLanguage("public class MyClass{\n\tpublic static void main(String args[]) {\n\t\tint x = 10;\n\t\tint y=25;\n\t\tint z=x+y;\n\n\t\tSystem.out.println('Sum of x+y = ' + z);\n\t}\n}");
        console.log(chosenLanguage);
        console.log(defLanguage);
        
        setIndex("3");
        break;
      case "swift":
        setDataLanguage(event.target.value);
        setIndex("3");
        console.log(chosenLanguage);
        break;
      case "php":
        setDataLanguage(event.target.value);
        setDefLanguage("333")
        console.log(chosenLanguage);
        console.log(Index)
        setIndex("3");
        break;
      case "ruby":
        setDataLanguage(event.target.value);
        setDefLanguage("333")
        console.log(chosenLanguage);
        console.log(Index)
        setIndex("3");
        break;
      case "perl":
        setDataLanguage(event.target.value);
        setDefLanguage("333")
        console.log(chosenLanguage);
        console.log(Index)
        setIndex("3");
        break;
      case "perl":
        setDataLanguage(event.target.value);
        setDefLanguage("333")
        console.log(chosenLanguage);
        console.log(Index)
        setIndex("3");
        break;
      case "octave":
        setDataLanguage(event.target.value);
        setDefLanguage("333")
        console.log(chosenLanguage);
        console.log(Index)
        setIndex("3");
        break;
      
      // default:
      //   setDataLanguage(event.target.value);
      //   console.log(dataLanguage);
      //   console.log(chosenLanguage);
      //   setIndex("3");
      //   break;
      }
}


function handleTheme(event){
    
  setTheme(event.target.value);
  console.log(event.target.value);
  
}



  

    
  


  function onChange(newVal){
    setCode(newVal);
  }

  
  // switch(chosenLanguage){
  //   case "python":
  //     chosenLanguage = chosenLanguage+"3";
  //     break;
  //   case "cpp":
  //     chosenLanguage = chosenLanguage+"14";
  //     break;
  //   default:
  //     chosenLanguage = chosenLanguage;
  //     break;
  // }



  function submitCode() {
    console.log("User submitted code");
    
    
        /* 
    THIS POST REQUEST USES THE PROXY IN THE PACKAGE.JSON FILE
    
    DO NOT USE "/postrequestname" FOR ANY POST OR GET REQUEST BECAUSE IT WILL
    BE PROXIED TO JDOODLE
    GIVE THE SPECIFIC URL, I ONLY DID THIS BECAUSE OF CORS ERRORS
    APPARENTLY THERE'S A CLEANER WAY TO MANAGE THIS BUT I'LL DO IT LATER
    */
   
    axios
    .post("https://cors-anywhere.herokuapp.com/https://api.jdoodle.com/v1/execute", data)
    .then((res) => {
      console.log(res.data);
      
      setOutput(res.data.output);
      setMemory(res.data.memory);
      setCpuTime(res.data.cpuTime);
      
    })
    .catch((err) => {
      console.log("Axios remote code error: " + err);
    });
  }
  return (
  
    <>
    <div className = "Events">

      

    














    {/* <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta> */}
      <div className = "MainContent">
      <ParticlesBackground/>
      {/* <div className = "EventsIntro">
        <h1>The Technology in Finance</h1>
      </div> */}
      <h1 className = "instruction"> <h1>
          TO USE -{">"} visit:{" "}
          <a href="https://cors-anywhere.herokuapp.com/corsdemo" target="_blank" rel="noopener noreferrer">
            https://cors-anywhere.herokuapp.com/corsdemo
          </a>{" "}
          and request demo
        </h1></h1>
      <div className="Compiler">
      
      <div class="Comp2">
        <ul className = "CompilerContents">
            <li> 
              <h1 className = "Div2Title">Compiler-Interpreter</h1>
            </li>
            <li>
              <AceEditor 
                mode={chosenLanguage} //use my functions in comb with state to alternate
                theme={chosenTheme}
                placeholder="Enter your code here"
                name="test-editor"
                defaultValue={defValPython} //this is boilerplate ~~ change it based on q's for the week ~~ leave for now ~~ test with q
                onChange = {onChange}
                editorProps={{ $blockScrolling: true}}
                height="400px"
                width="300px"
                className="theeditor"
              />
            </li>
              <ul className = "compiler-functions">
                <li>
                  <h4>Language</h4>
                  <form>
                        <select className="Selector" onChange = {handleLanguage}>
                                <option value="python">Python3</option>
                                <option value="java">Java</option>
                                <option value="octave">Matlab</option>
                                {/* <option value="pascal">Pascal</option> */}
                                <option value="swift">Swift</option>
                                <option value="perl">Perl</option>
                                {/* <option value="c_cpp" class="c">C</option>
                                <option value="c_cpp" class="c99">C-99</option>
                                <option value="c_cpp" class="cpp">C++</option>
                                <option value="c_cpp" class="cpp14">C++ 14</option> */}
                                <option value="c_cpp" class="cpp17">C++17</option>
                                <option value="csharp">C#</option>
                                <option value="ruby">Ruby</option>
                                <option value="php">PHP</option>
                                
                                



                        </select>
                    </form>
                </li>
                <li>
                  <h4>Theme</h4>
                  <form>
                      <select onChange = {handleTheme}>
                              <option value="twilight">Twilight</option>
                              <option value="monokai">Monokai</option>
                              <option value = "dracula">Dracula</option>
                              {/* <option value="textmate">Textmate</option> */}
                              <option value="xcode">Xcode</option>
                              <option value="solarized_dark">Solarized_Dark</option>
                              {/* <option value="clouds">Clouds</option>
                              <option value="chrome">Chrome</option>
                              <option value="crimson_editor">Crimson</option> */}
                              
                      </select>
                  </form>
                </li>
                <li>
                  <button className = "compiler-submit-btn" onClick={() => submitCode()}>Submit</button>
                </li>
              </ul>
              <li>
                <ul className = "compiler-output">
                  <li>
                    <h1 className = "output-title">Output</h1>
                  </li>
                  <ul className = "output-data">
                    <li>
                      <p className= "output">Output: {output}</p>
                    </li>
                    <li>
                      <p className= "memory">Memory in bytes: {memory}</p>
                    </li>
                    <li>
                      <p className= "cpuTime">CPU Time in seconds: {cpuTime}</p>
                    </li>
                  </ul>
                </ul>
              </li>
          </ul>
        </div>
      </div>
      </div>
      </div>

      <Footer />
    </>
  );
 
              }
      
export default Compiler;