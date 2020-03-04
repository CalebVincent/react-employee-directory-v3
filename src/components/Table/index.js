import React from "react";
import "./style.css";
import MaterialTable from "../MaterialTable";


// export default function Table() {
//     const [state, setState] = React.useState({
        
//     })
// }

export default function Table({ data }) {
    const empl = [
        {
            id: "1",
            first: "Spongebob",
            last: "Squarepants",
            role: "Cook",
            intelligent: false
        },
        {
            id: "2",
            first: "Squidward",
            last: "Tentacles",
            role: "Cashier",
            intelligent: true
        }, {
            id: "3",
            first: "Patrick",
            last: "Star",
            role: "Yes",
            intelligent: false
        }, {
            id: "4",
            first: "Eugene",
            last: "Crabs",
            role: "Manager",
            intelligent: true
        },
    ]

    // function filter() {

    // }

    return (
        <div>
            <div>
                {/* <button onClick={filter()}> filter: intelligent</button> */}
                <div>Employees :</div>
            </div>
            <MaterialTable
                first={empl[0].first}
                last={empl[0].last}
                role={empl[0].role}
            />
            <br/>
            <MaterialTable
                first={empl[1].first}
                last={empl[1].last}
                role={empl[1].role}
            />
            <br/>
            <MaterialTable
                first={empl[2].first}
                last={empl[2].last}
                role={empl[2].role}
            />
            <br/>
            <MaterialTable
                first={empl[3].first}
                last={empl[3].last}
                role={empl[3].role}
            />
        </div>
    )
}