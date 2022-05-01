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

let a = document.getElementsByName('trueInput')
/* a[e.target.id-1].value = 1
a[e.target.id].id = e.target.id */

let myId = ''
let myTitle = ''


/* const someInputVal ={
    id: undefined,
    title: undefined
}

function setSomeInputVal({id, title}) {
    someInputVal.id = id
    someInputVal.title = title
} */

/* function incrementValue (e) {
    e.target.value = 1
    console.log(e.target.value, e.target.id)
} */

function incrementValue (e) {
    //let a = document.getElementsByName('trueInput')
    a[e.target.id-1].value = 1
    myTitle = a[e.target.id-1].value

    a[e.target.id].id = e.target.id
    myId = a[e.target.id].id

    console.log('old a:', a[e.target.id].id, a[e.target.id-1].value)
    console.log('new a:',myId, myTitle);
    console.log('targetId:',e.target.id);
}

/* function decrementValue (v) {
    //return document.getElementById('thatInput').value = 0
    return v.title = 0
} */

function decrementValue (e) {
    a[e.target.id-1].value = 0
    myTitle = a[e.target.id-1].value

    a[e.target.id].id = e.target.id
    myId = a[e.target.id].id
}

/* const handleInputChange = ({e,v}) => {
    console.log(e.target.id, e.target.value)
    return v.title=e.target.value
} */


function SingleInput ({v, index, onChange}) {
    return (
        <div style={styles.rowItem}>
            {/* <strong>{index + 1})</strong> */}
            <input
                id={v.id}
                value={v.title}
                type="text"
                name="trueInput"
                //onChange={(e)=>onChange({id: e.target.id, title: e.target.value})}
                onChange={(e)=>onChange({
                    id : e.target.id || myId,
                    title : e.target.value || myTitle
                }
                )}
            />
             <div style={styles.column}>
                <button style={styles.button} id={v.id} value={v.title} type='button' onClick={incrementValue}>1</button>
                <button style={styles.button} id={v.id} value={v.title} type='button' onClick={decrementValue}>0</button>
            </div>
        </div>
    )
}

export default SingleInput
