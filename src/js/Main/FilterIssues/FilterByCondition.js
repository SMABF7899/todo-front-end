import React, {useState} from 'react';
import {Dropdown} from 'react-bootstrap';

const FilterByCondition = () => {
    const [sortByCondition, setSortByCondition] = useState('Sort By Condition : None');
    const [sortByConditionValue, setSortByConditionValue] = useState('');
    console.log("sortByConditionValue : ", sortByConditionValue);

    const handleSelectCondition = (eventKey, event) => {
        setSortByCondition('Sort By Condition : ' + event.target.textContent);
        setSortByConditionValue(eventKey)
    }

    return (
        <Dropdown onSelect={handleSelectCondition}>
            <Dropdown.Toggle variant="outline-info" id="dropdown-custom">
                {sortByCondition}
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <React.Fragment>
                    <Dropdown.Item eventKey="">None</Dropdown.Item>
                    <Dropdown.Item eventKey={1}>To Do</Dropdown.Item>
                    <Dropdown.Item eventKey={2}>In Progress</Dropdown.Item>
                    <Dropdown.Item eventKey={3}>Done</Dropdown.Item>
                </React.Fragment>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default FilterByCondition;