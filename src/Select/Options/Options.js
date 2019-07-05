import React from 'react'

export default function Options(props) {
    return (
        <li className={props.className} onClick={props.clicked} data-value={props.option.data_value}>
            {props.option.content}
        </li>
    )
}
