import React from "react"
import SingleInput from "./SingleInput"

function ListOfInputs(props) {
    return (
        <div>
            {props.values.map((v, index) => {
                return (
                        <SingleInput 
                            v={v}
                            key={v.id}
                            index={index}
                            onChange={props.onToggle}
                        />
                )
            })}
        </div>
    )
}

export default ListOfInputs