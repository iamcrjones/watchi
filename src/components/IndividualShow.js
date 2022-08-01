import * as React from 'react';
import { pullSingleShow } from './services/showServices';

const IndividualShow = (ID) => {
    pullSingleShow(ID.id)
    return (
        <>
            <p>this show</p>
        </>
    )
}

export default IndividualShow