import React from 'react';

function LoadingButton(props){

    var btnType= props.type;
    var btnText = props.text;


    function getColor(type){
        switch(type){
            case "danger":
                return "red"
            case "warning":
                return "orange"
            case "primary":
                return "blue"
            default:
                return "black"
        }
    }

    const btnStyle = {
        backgroundColor: getColor(btnType),
        color: "white",
        padding: "12px 24px",
        margin: 12,
        maxWidth:150
    }

    return (
        <div style={{
            backgroundColor: getColor(btnType),
            color: "white",
            padding: "12px 24px",
            margin: 12,
            maxWidth:150
        }}>
            {btnText}
        </div>
    )
}

export default LoadingButton;