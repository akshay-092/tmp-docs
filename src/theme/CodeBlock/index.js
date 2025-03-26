import React from 'react';
import CodeBlock from '@theme-original/CodeBlock';
import { patch } from 'axios';


export default function CodeBlockWrapper(props) {
  var metaString = props.metastring;
  var isPreview 
  if(metaString){
    isPreview = metaString.includes("preview");
  }

  const [isOpen, setIsOpen] = React.useState(false);
  let [over,setOver] = React.useState(false);

  let buttonstyle = {position:"relative",  
                      float:"right",
                      right:"5px",
                      top:"6px",
                      padding: 10,
                      backgroundColor: "#6851d6", 
                      borderRadius: '5px', 
                      border : 0,
                      color:"#fff"}

  function toggle() {
    setIsOpen((isOpen) => !isOpen);
    getImageUrl();
  }

  function getImageUrl(){
    var imageurl = metaString.split('preview=')[1].replaceAll("\"", "");;  
    return imageurl
  }

  if(over){
    buttonstyle.backgroundColor="#fff";
    buttonstyle.color = "#6851d6"
  }
  else{
    buttonstyle.backgroundColor='#6851d6';
    buttonstyle.color = "#fff"
  }

  return (
    <>
    <view style={{position:'relative'}}>
      {isPreview? 
      <button style={buttonstyle}

        onClick={()=>{
          console.log("Jitvar","isPreview =>"+metaString);
          toggle();
        }}

        onMouseOver={() =>{
          setOver(true)
        }}
        onMouseOut={() =>{
          setOver(false)
        }}
        >Preview</button> 
      :null}

      <CodeBlock {...props} />

      {isOpen && 
      <view style={{borderRadius:10}}>
        <img src={getImageUrl()} alt="React Image" />
      </view>
      }
      
    </view>
    </>
  );
}
