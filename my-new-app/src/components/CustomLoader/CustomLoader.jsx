import React from "react";
import { RiseLoader } from 'react-spinners';
import {LoderBox} from './CustomLoader.styled';


const CustomLoader = () => {
    return (
        <LoderBox>
            <RiseLoader color={'#36D7B7'} loading={true} size={15} />
        </LoderBox>
)
}
export default CustomLoader;