import React from "react";
import {  ItemBox, DummyListBox } from "./DummyList.styled";


const DummyList = () => {
    return (
        <DummyListBox>
            <ItemBox>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item 4</li>
            </ItemBox>
        </DummyListBox>
    )
}

export default DummyList;