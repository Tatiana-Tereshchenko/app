import React from "react";
import {  Table, } from "./DummyTable.styled";

const DummyTable = () => {
    return (
        <div>
            <Table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Example 1</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Example 2</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Example 3</td>
                    </tr>
                </tbody>
            </Table>
        </div>
        )
        
}

export default DummyTable;