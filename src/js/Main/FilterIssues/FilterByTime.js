import React from 'react';
import {useFilterByTime} from './FilterHooks';
import {Dropdown} from 'react-bootstrap';

export const FilterByTime = () => {

    const {sortByTimeValue, handleSelectTime, sortByTime} = useFilterByTime();

    return (
        <Dropdown onSelect={handleSelectTime}>
            <Dropdown.Toggle variant="outline-info" id="dropdown-custom">
                {sortByTime}
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <React.Fragment>
                    <Dropdown.Item eventKey="">None</Dropdown.Item>
                    <Dropdown.Item eventKey="new">Newest</Dropdown.Item>
                    <Dropdown.Item eventKey="old">Oldest</Dropdown.Item>
                </React.Fragment>
            </Dropdown.Menu>
        </Dropdown>
    ), {sortByTimeValue};
}