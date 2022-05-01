import React from "react";

const styles = {
    rowItem : {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: '20px',
        background: 'orange',
        border: '2px solid gray',
        borderRadius: '10px',
        padding: '5px'
    },
    column : {
        display: 'flex',
        flexDirection: 'column'
    },
    button : {
        padding: '10px',
        borderRadius: '50%',
        fontSize: '13px'
    },
}

function incrementValue (v) {
    return v.title = 1
}

function decrementValue (v) {
    //return document.getElementById('thatInput').value = 0
    return v.title = 0
}

const handleInputChange = ({e,v}) => {
    console.log(e.target.id, e.target.value)
    return v.title=e.target.value
}

function SingleInput ({v, index, onChange}) {
    return (
        <div style={styles.rowItem}>
            {/* <strong>{index + 1})</strong> */}
            <input
                id={v.id}
                value={v.title}
                type="text"
                onChange={(e)=>onChange(e.target.value)}
            />
             <div style={styles.column}>
                <button style={styles.button} type='button' value="1"  onClick={incrementValue} />
                <button style={styles.button} type='button' value="0"  onClick={decrementValue} />
            </div>
        </div>
    )
}

export default SingleInput
