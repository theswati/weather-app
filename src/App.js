import React,{useState} from "react";
// import images to use it 
import summer from "./images/summer.jpg"
import winter from "./images/winter.jpg"

const App=()=>{

     const [latitude,setLatitude]=useState(0) // update the varable
     const [longitude,setLongitude]=useState(0)
     const [hemisphere,sethemisphere]=useState("")
    //  const [month,setMonth]=useState(()=>{return new Date().getMonth()+1})
    const [month,setMonth]=useState(11)
     // hemisphere could only be updated by sethemisphere function

   // Normal variables we dont use it to update in react


    function fetchLocation(){
        if(navigator.geolocation){// checking if this feature exists in browser
            navigator.geolocation.getCurrentPosition(
                (position)=>{
                    //  console.log(position.coords.latitude)
                    //  console.log(position.coords.longitude)

                    setLatitude(position.coords.latitude)
                    setLongitude(position.coords.longitude)
                     
                    if(position.coords.latitude>0){
                        // if lat>o it will be Nothen
                        // adding nort
                        sethemisphere("Northern Hemisphere")
                    }
                    else if (position.coords.latitude<0){
                        sethemisphere("Southern Hemisphere")
                    }

                    else{
                        sethemisphere("Equator")
                    }

                    
                }
            )

        }
    }


return (
    <div>
        <button onClick={fetchLocation}>Get Location </button>
        <h1>latitude:{latitude}</h1>
        <h1>longitude:{longitude}</h1>
        <h1>Hemisphere:{hemisphere}</h1>
        <h1>Month:{month}</h1>

        {
            hemisphere && (
                (hemisphere=="Northern Hemisphere" && month>=3 && month<=10)||
                (hemisphere=="Southern Hemisphere" && (month<=3||month>=10))

            )

            && 
            (
                <div>
                    <h1>Welcome to Summer Season</h1>
                    <img src={summer} alt="summer"/>
                 </div>
            )
        }
          
          {
            hemisphere && ((hemisphere=="Northern Hemisphere" && (month<3 || month>10)||(hemisphere=="southern Hemisphere" &&(month>=4 && month<=10) ))) &&

            (
              <div>
                <h1>Welcome to winter Season</h1>
                <img src={winter} alt="winter"/>

                </div>


            )

          }



    </div>
)




}


export default App;




// if latitude>0->Northern Hemisphere
// if latitude<0->southern Hemisphere
// if latitude=0->Equator