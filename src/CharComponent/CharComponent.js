import React from "react";

const charComponent = (props) => {

    const styles = {
        display:'inline-block',
        padding: '16px',
        textAlign:'center',
        margin:'16px',
        border:'1px solid black'
    }

    return (
        <div onClick= {props.click} style ={styles}>
        <p>{props.char}</p>
        </div>
    );
}

export default charComponent;