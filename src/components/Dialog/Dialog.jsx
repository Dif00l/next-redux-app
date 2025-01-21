import React from "react";
import $ from "jquery";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getChampions, addChampion, setChampions } from "@/redux/championsSlice";
import { getSquads, setSquads, sortSquad } from "@/redux/squadsSlice";

export default function Dialog(props){

    const champions = useSelector(getChampions);
    const squad = useSelector(getSquads);
    const [DialogShow,setDialogShow] = useState("block");
    const dispatch = useDispatch();

    function clickAdd(e){      
        const DialogChampion = $("#Dialog-Champion").val();
        const DialogTier = $('input[name="DialogTier"]:checked').val();
        const DialogRang = $('input[name="DialogRang"]:checked').val();
        const DialogAwaken = $('input[name="DialogAwaken"]:checked').val();
        const DialogPI = $("#Dialog-PowerIndex").val();
        const DialogImage = $("#Dialog-Champion option:selected").data('image');
        const DialogKlasse = $("#Dialog-Champion option:selected").data('klasse');
        const temp ={"Name":DialogChampion,"PowerIndex":DialogPI,"Tier":DialogTier,"Rang":DialogRang,"Awaken":DialogAwaken,"Image":DialogImage,"Klasse":DialogKlasse};
        const sq = new Array();  
        squad.map((mem,index)=>{
            sq.push(mem)
        })
        sq.push(temp)
        dispatch(setSquads(sq));
        const requestOptions = {
			method: 'POST',headers:{'Accept': 'application/json','Content-Type': 'application/json'},
			body: JSON.stringify(sq)};
        fetch('http://localhost/api/saveSquad',requestOptions); 
            
    }

   
    function clickClose(){
        setDialogShow("none");
       
    }

    function clickDelete(){
       
       
    }

    return(
        <div className="Dialog" style={{display:DialogShow}}>
            <div className="Dialog-Content">
                <div className="Dialog-Title">Add Champion</div>
                <div className="Dialog-Body">
                    <table cellPadding="0" cellSpacing="0">
                        <tbody>
                        <tr>
                            <td>Champion</td><td><select id="Dialog-Champion">
                                {
                                     champions.map((champ, index)=>{
                                        return(
                                            <option key={"champoption_"+index} value={champ.Name} data-image={champ.Image} data-klasse={champ.Klasse}>{champ.Name}</option>
                                        )
                                     })
                                }
                                </select></td>
                        </tr>
                        <tr>
                            <td>Tier</td>
                            <td>
                                5&nbsp;<input type="radio" name="DialogTier" id="DialogTier_5" value="5"/>&nbsp;
                                6&nbsp;<input type="radio" name="DialogTier" id="DialogTier_6" value="6"/>&nbsp;
                                7&nbsp;<input type="radio" name="DialogTier" id="DialogTier_7" value="7"/>&nbsp;
                            </td>
                        </tr>
                        <tr>
                            <td>Rang</td>
                            <td>
                                1&nbsp;<input type="radio" name="DialogRang" id="DialogRang_1" value="1"/>&nbsp;
                                2&nbsp;<input type="radio" name="DialogRang" id="DialogRang_2" value="2"/>&nbsp;
                                3&nbsp;<input type="radio" name="DialogRang" id="DialogRang_3" value="3"/>&nbsp;
                                4&nbsp;<input type="radio" name="DialogRang" id="DialogRang_4" value="4"/>&nbsp;
                                5&nbsp;<input type="radio" name="DialogRang" id="DialogRang_5" value="5"/>&nbsp;
                            </td>
                        </tr>
                        <tr>
                            <td>erweckt</td>
                            <td>
                                Ja&nbsp;<input type="radio" name="DialogAwaken" id="DialogAwaken-1" value="1"/>&nbsp;
                                Nein&nbsp;<input type="radio" name="DialogAwaken" id="DialogAwaken-2" value="0"/>&nbsp;
                               
                            </td>
                        </tr>
                        <tr>
                            <td>Power Index</td>
                            <td>
                               <input id="Dialog-PowerIndex"/>
                            </td>
                        </tr>
                        </tbody>
                    </table>                  
                </div>   
                <div className="Dialog-Footer">
                    <div className="Button" onClick={clickAdd}>Add</div>
                    <div className="Button" onClick={clickClose}>Close</div>
                    <div className="Button" onClick={clickDelete}>Delete</div>
                </div>             
            </div>

        </div>
    )
}