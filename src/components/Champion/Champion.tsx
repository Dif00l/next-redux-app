import React from 'react';

export default function Champion(props:any){

    var champ = props.champ;

    return(
        <tr key="champ_"><td>{champ.Name}</td>
            <td  style={{backgroundSize:"70%,100%,100%",backgroundPosition:"center,center",backgroundRepeat:"no-repeat",height:"87px",width:"107px",backgroundImage:'url("./images/champions/'+champ.Image+'.png"),url("./images/frames/t'+champ.Tier+'_portrait_frame.png"),url("./images/frames/class_'+champ.Klasse+'.png")'}}>
            </td>
            <td>{champ.Klasse}</td>
            <td>{champ.PowerIndex}</td>
            <td>{
              champ.Immu.map((im:any,index)=>{
                  return(<div>{im}</div>)
              })
            }</td>
        </tr>
    )
}
