import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loginUserAC } from "./Redux/ActionCreators";
import "./Dashboard.css";
import { initDiagramSagaAC } from "./Redux/ActionCreators";

function Dashboard() {
  const [scenaryState, setScenaryState] = useState('')
  const [listState, setListState] = useState('')
  const [dialogState, setDialogState] = useState('')
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory();
  const logOut = () => {
    dispatch(loginUserAC({}));
  };
  !state.user._id && history.push("/login");

  const initDiagram = () => {
    dispatch(initDiagramSagaAC());
  };

  useEffect(() => {
    initDiagram();
  }, );

  // scenary
  const allScenary = state.diagrams.filter(
    (el) => el.name === "scenary"
  ).length;
  const activeScenary = state.diagrams.filter(
    (el) => el.name === "scenary" && el.active === true
  ).length;
  const notActiveScenary = state.diagrams.filter(
    (el) => el.name === "scenary" && el.notActive === true
  ).length;
  const completScenary = state.diagrams.filter(
    (el) => el.name === "scenary" && el.complet === true
  ).length;

  let scenaryActive = 100/allScenary*activeScenary
  let scenaryNotActive = 100/allScenary*notActiveScenary
  let scenaryComplet = 100/allScenary*completScenary
 
  //list
  const allList = state.diagrams.filter((el) => el.name === "list").length;
  const activeList = state.diagrams.filter(
    (el) => el.name === "list" && el.active === true
  ).length;
  const notActiveList = state.diagrams.filter(
    (el) => el.name === "list" && el.notActive === true
  ).length;
  const completList = state.diagrams.filter(
    (el) => el.name === "list" && el.complet === true
  ).length;

  let listActive = 100/allList*activeList
  let listNotActive = 100/allList*notActiveList
  let listComplet = 100/allList*completList
  //dialodue
  const allDialogue = state.diagrams.filter(
    (el) => el.name === "dialogue"
  ).length;
  const activeDialogue = state.diagrams.filter(
    (el) => el.name === "dialogue" && el.active === true
  ).length;
  const notActiveDialogue = state.diagrams.filter(
    (el) => el.name === "dialogue" && el.notActive === true
  ).length;
  const completDialogue = state.diagrams.filter(
    (el) => el.name === "dialogue" && el.complet === true
  ).length;

  let dialogueActive = 100/allDialogue*activeDialogue
  let dialogueNotActive = 100/allDialogue*notActiveDialogue
  let dialogueComplet = 100/allDialogue*completDialogue

  return (
    <div className="superDiv">
      <div className="title">
        <span>Сводка</span>
        <span style={{cursor:'pointer'}} onClick={logOut}>Выход</span>
      </div>
      <div className="statistic">
       
          <div className="divs">
          <svg  viewBox="0 0 42 42" className="svg">
  <circle className="donut-hole" cx="21" cy="21" r="15.91549430918954" fill="#fff"></circle>
  <circle className="donut-ring" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#d2d3d4" strokeWidth="3"></circle>
  <circle className="donut-segment" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#ce4b99" strokeWidth="3" strokeDasharray={scenaryActive+" "+(100-scenaryActive)} strokeDashoffset="0"></circle>
  <circle className="donut-segment" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="yellow" strokeWidth="3" strokeDasharray={scenaryNotActive+' '+(100-scenaryNotActive)} strokeDashoffset={(-scenaryActive).toString()}></circle>
  <circle className="donut-segment" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="blue" strokeWidth="3" strokeDasharray={scenaryComplet+' '+(100-scenaryComplet)} strokeDashoffset={(-(scenaryActive+scenaryComplet)).toString()}></circle>
</svg>
<h6 className='num1'>Сценарий</h6>
<h1 className='num'>{scenaryState}</h1>
          <ul className="ul">
            <li style={{color:"#d2d3d4", cursor:'pointer'}}  onClick={()=>setScenaryState(allScenary)}>Всего:{allScenary}</li>
            <li style={{color:"#ce4b99", cursor:'pointer'}} onClick={()=>setScenaryState(activeScenary)}>Активных:{activeScenary}</li>
            <li style={{color:"yellow", cursor:'pointer'}} onClick={()=>setScenaryState(notActiveScenary)}>Неактивных:{notActiveScenary}</li>
            <li style={{color:"blue", cursor:'pointer'}} onClick={()=>setScenaryState(completScenary)}>Завершенных:{completScenary}</li>
          </ul>
        </div>
        <div className="divs">
       
          <svg  viewBox="0 0 42 42" className="svg">
          <circle className="donut-hole" cx="21" cy="21" r="15.91549430918954" fill="#fff"></circle>
  <circle className="donut-ring" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#d2d3d4" strokeWidth="3"></circle>
  <circle className="donut-segment" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#ce4b99" strokeWidth="3" strokeDasharray={listActive+" "+(100-listActive)} strokeDashoffset="0"></circle>
  <circle className="donut-segment" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="yellow" strokeWidth="3" strokeDasharray={listNotActive+' '+(100-listNotActive)} strokeDashoffset={(-listActive).toString()}></circle>
  <circle className="donut-segment" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="blue" strokeWidth="3" strokeDasharray={listComplet+' '+(100-listComplet)} strokeDashoffset={(-(listActive+listNotActive)).toString()}></circle>
          </svg>
          <h6 className='num1'>Списки</h6>
          <h1 className='num'>{listState}</h1>
          <ul className="ul">
            <li style={{color:"#d2d3d4", cursor:'pointer'}} onClick={()=>setListState(allList)}>Всего:{allList}</li>
            <li style={{color:"#ce4b99", cursor:'pointer'}} onClick={()=>setListState(activeList)}>Активных:{activeList}</li>
            <li style={{color:"yellow", cursor:'pointer'}} onClick={()=>setListState(notActiveList)}>Неактивных:{notActiveList}</li>
            <li style={{color:"blue", cursor:'pointer'}} onClick={()=>setListState(completList)}>Завершенных:{completList}</li>
          </ul>
        </div>
        <div className="divs">
        <svg  viewBox="0 0 42 42" className="svg">
  <circle className="donut-hole" cx="21" cy="21" r="15.91549430918954" fill="#fff"></circle>
  <circle className="donut-ring" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#d2d3d4" strokeWidth="3"></circle>
  <circle className="donut-segment" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#ce4b99" strokeWidth="3" strokeDasharray={dialogueActive+" "+(100-dialogueActive)} strokeDashoffset="0"></circle>
  <circle className="donut-segment" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="yellow" strokeWidth="3" strokeDasharray={dialogueNotActive+' '+(100-dialogueNotActive)} strokeDashoffset={(-dialogueActive).toString()}></circle>
  <circle className="donut-segment" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="blue" strokeWidth="3" strokeDasharray={dialogueComplet+' '+(100-dialogueComplet)} strokeDashoffset={(-(dialogueActive+dialogueNotActive)).toString()}></circle>
          </svg>
          <h6 className='num1'> Диалоги</h6>
         <h1 className='num'>{dialogState}</h1>
          <ul className="ul">
            <li style={{color:"#d2d3d4", cursor:'pointer'}} onClick={()=>setDialogState(allDialogue)}>Всего:{allDialogue}</li>
            <li style={{color:"#ce4b99", cursor:'pointer'}} onClick={()=>setDialogState(activeDialogue)}>Активных:{activeDialogue}</li>
            <li style={{color:"yellow", cursor:'pointer'}} onClick={()=>setDialogState(notActiveDialogue)}>Неактивных:{notActiveDialogue}</li>
            <li style={{color:"blue", cursor:'pointer'}} onClick={()=>setDialogState(completDialogue)}>Завершенных:{completDialogue}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
