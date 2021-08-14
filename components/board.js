import React from 'react';
const Board = (props) => {
    return (
        <div style={{
            'height': '150px',
            'width': '150px',
            'border': '1px solid black',
            'display': 'flex',
            'flexWrap': 'wrap',
            'alignContent': 'flex-start'
        }}>
            {
                props.boardMatrix &&
                props.boardMatrix.map((row, rowIndex) => {
                    return row.map((cellData, colIndex) => {
                        return <Cell key={`${rowIndex}-${colIndex}`} rowIndex={rowIndex} colIndex={colIndex} cellClickCallback={props.cellClickCallback} data={cellData}></Cell>
                    })
                })
            }
        </div>
    )
}

const Cell = (props) => {
    return (
        <div style={{
            'height': '30px',
            'width': '30px',
            'border': '1px solid black',
            'margin': '8px',
            'display': 'flex',
            'justifyContent': 'center',
            'alignItems': 'center'
        }} onClick={() => props.cellClickCallback(props.rowIndex, props.colIndex)}>{props.data}</div>
    )
}

export default Board;