import { getItemsInCart, setItemsInCart } from "@/redux/cartSlice";
import { getChampions, setChampions } from "@/redux/championsSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Champion from "../components/Champion/Champion";
import { getSquads, setSquads } from "@/redux/squadsSlice";

export default function Home() {
  const itemsInCart: any = useSelector(getItemsInCart);
  const champions: any = useSelector(getChampions);
  const squads: any = useSelector(getSquads);
  const dispatch = useDispatch();

  const addItemsToCart = () => {
    dispatch(setItemsInCart(parseInt(itemsInCart) + 1))
  }

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

  const english = new Intl.Collator("de-DE", { usage: "sort" });
  function sortPerson(person1:any, person2:any) {
    let ergebnis = english.compare(person2.PowerIndex, person1.PowerIndex);
   
    return ergebnis;
 }

  return (
    <>
      <div className="Filter">
        <div className="button"><img src="./images/buttons/btMutant.png" width="40"/></div>
        <div className="button"><img src="./images/buttons/btTalent.png" width="40"/></div>
        <div className="button"><img src="./images/buttons/btForschung.png" width="40"/></div>
        <div className="button"><img src="./images/buttons/btMystisch.png" width="40"/></div>
        <div className="button"><img src="./images/buttons/btKosmos.png" width="40"/></div>
        <div className="button"><img src="./images/buttons/btTechnologie.png" width="40"/></div>
      </div>
      <table align="center" cellSpacing="0" cellPadding="0" style={{display:"none"}}>
        <thead></thead>
        <tbody>
        {
          champions.map((champ: any, index: any)=>{
            return(             
             <Champion key={"champ_"+index} idx={index} champ={champ}/>
            )
          })
        }
        </tbody>       
      </table>
      <table align="center" cellSpacing="0" cellPadding="0">
        <thead></thead>
        <tbody>
        {
          squads.map((sq: any,index: any)=>{
            return(             
             <Champion key={"squad_"+index} idx={index} champ={sq}/>
            )
          })
        }
        </tbody>       
      </table>          
    </>
  )
}