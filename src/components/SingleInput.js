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
        padding: '5px',
        gap: '5px'
    },
    column : {
        display: 'flex',
        flexDirection: 'column'
    },
    button : {
        borderRadius: '50%',
    },
}

function SingleInput ({v, index, onChange}) {

    let handleOnChange = (v) => (e) => {
        v.title = e.target.value
        v.id = e.target.id
        console.log(v)
    }

    let incrementValue = () => {
        v.id = v.id
        v.title = 1
        handleOnChange(v) 
        let a = document.getElementsByName('trueInput')
        a[v.id-1].value = v.title
        console.log(v)
    }

    let decrementValue = () => {
        v.id = v.id
        v.title = 0
        handleOnChange(v) 
        let a = document.getElementsByName('trueInput')
        a[v.id-1].value = v.title
    }

    return (
        <div style={styles.rowItem}>
            <input
                id={v.id}
                type="text"
                name="trueInput"
                // works without buttons
                // onChange={(e)=>onChange({id: e.target.id, title: e.target.value})}
                onChange={handleOnChange(v)}
            />
             <div style={styles.column}>
                <button style={styles.button} id={v.id} type='button' onClick={incrementValue}>1</button>
                <button style={styles.button} id={v.id} type='button' onClick={decrementValue}>0</button>
            </div>
        </div>
    )
}

export default SingleInput
