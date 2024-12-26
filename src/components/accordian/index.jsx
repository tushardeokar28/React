import { useState } from "react";
import data from "./data";
import './style.css';

export default function Accordian(){

    const [selected, setSelected] = useState(null);
    const [enableMultiSelection, setEnableMultiSelection] = useState(false);
    const [multiple, setMultiple] = useState([]);

    function handleSingleSelection(getCurrentId){
        setSelected(getCurrentId === selected?null:getCurrentId);
    }
    
    function handleMultiSelection(getCurrentId){
        let cpyMultiple = [...multiple];
        const findIndexOfCueentId = cpyMultiple.indexOf(getCurrentId);

        if(findIndexOfCueentId === -1) cpyMultiple.push(getCurrentId);
        else cpyMultiple.splice(findIndexOfCueentId,1)

        setMultiple(cpyMultiple);
    }

    console.log(multiple);

    return(
        <div className="wrapper">
            <h1>Accordian</h1>
            <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>Enable multi selection</button>

            <div className="accordian">
                {
                    data && data.length > 0 ?
                    data.map(dataItem=>
                        <div className="item" key={dataItem.id}>
                            <div onClick={
                                enableMultiSelection
                                ? () => handleMultiSelection(dataItem.id) 
                                : () => handleSingleSelection(dataItem.id)
                            } className="title"
                            >
                                {dataItem.question} <span>+</span>
                            </div>
                            {enableMultiSelection
                              ? multiple.indexOf(dataItem.id) !== -1 && (
                                <div className="answer-wrapper">{dataItem.answer}</div>
                              )
                              : selected === dataItem.id && (
                                <div className="answer-wrapper">{dataItem.answer}</div>
                              )}
                        </div>
                    )
                    : <div>No data found</div>
                }
            </div>

        </div>
    );
}