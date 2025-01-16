import { getItemsInCart, setItemsInCart } from "@/redux/cartSlice";
import { getChampions, setChampions } from "@/redux/championsSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import Champion from "../components/Champion/Champion";
import { getSquads, setSquads } from "@/redux/squadsSlice";
import { getFilter, setMutant, setTalent, setForschung, setMystisch, setKosmos, setTechnologie } from "@/redux/filterSlice";

export default function Home() {
  const [Klassen] = useState(["Mutant","Talent","Forschung","Mystisch","Kosmos","Technologie"]);
 
  const champions: any = useSelector(getChampions);
  const squads: any = useSelector(getSquads);
  const filter: any = useSelector(getFilter);
  const dispatch = useDispatch();

  useEffect(()=>{
    fetch("../data/champions.json")
    .then(res=>res.json())
    .then(function(data){
      dispatch(setChampions(data))
    })
    fetch("../data/squad.json")
    .then(res=>res.json())
    .then(function(data){
      data.sort(sortPerson);
      dispatch(setSquads(data))
    })
  },[]);

  function filterClick(e:any){
    var id = e.target.id;
    id = id.replace("cl_","");
    if( filter[0][id].Value == "1" ){
      switch(id){
        case "Mutant":
          dispatch(setMutant(0))
          break;
        case "Talent":
          dispatch(setTalent(0))
          break;
        case "Forschung":
          dispatch(setForschung(0))
          break;
        case "Mystisch":
          dispatch(setMystisch(0))
          break;
        case "Kosmos":
          dispatch(setKosmos(0))
          break;
        case "Technologie":
          dispatch(setTechnologie(0))
          break;
      }      
    }else{
      switch(id){
        case "Mutant":
          dispatch(setMutant(1))
          break;
        case "Talent":
          dispatch(setTalent(1))
          break;
        case "Forschung":
          dispatch(setForschung(1))
          break;
        case "Mystisch":
          dispatch(setMystisch(1))
          break;
        case "Kosmos":
          dispatch(setKosmos(1))
          break;
        case "Technologie":
          dispatch(setTechnologie(1))
          break;
      }
    }
  }

  const english = new Intl.Collator("de-DE", { usage: "sort" });
  function sortPerson(person1:any, person2:any) {
    let ergebnis = english.compare(person2.PowerIndex, person1.PowerIndex);
   
    return ergebnis;
 }

  return (
    <>
      <div className="Filter">
        {          
          Klassen.map((klasse,index)=>{
            var pic = klasse;
            if( filter[0][klasse].Value == 1){
              pic = klasse+"_hover";
            }
            return(<div key={"filter_"+index} className="button"><img id={"cl_"+klasse} onClick={filterClick}  src={"./images/buttons/bt"+pic+".png"} width="40"/></div>)
          })
        }
      </div>
      <table align="center" cellSpacing="0" cellPadding="0" style={{display:"none"}}>
        <thead></thead>
        <tbody>
        {
          champions.map((champ: any, index: any)=>{
            if( Klassen.indexOf(champ.Klasse) > -1 && typeof(champ.Tier) == "undefined" ){
              if( filter[0][champ.Klasse].Value == "0" ){
                return(             
                  <Champion key={"champ_"+index} idx={index} champ={champ}/>
                )
              }
            }
          })
        }
        </tbody>       
      </table>
      <table align="center" cellSpacing="0" cellPadding="0">
        <thead></thead>
        <tbody>
        {
          squads.map((sq: any,index: any)=>{
            if( filter[0][sq.Klasse]["Value"] == "1" ){
              return(             
                <Champion key={"squad_"+index} idx={index} champ={sq}/>
              )
            }
          })
        }
        </tbody>       
      </table>          
    </>
  )
}