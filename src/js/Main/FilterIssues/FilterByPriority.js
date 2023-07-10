import React, {useState} from 'react';
import {Dropdown} from 'react-bootstrap';

const FilterByPriority = () => {
    const [sortByPriority, setSortByPriority] = useState('Sort By Priority : None');
    const [sortByPriorityValue, setSortByPriorityValue] = useState('');
    console.log("sortByPriorityValue : ", sortByPriorityValue);

    const handleSelectPriority = (eventKey, event) => {
        setSortByPriority('Sort By Priority : ' + event.target.textContent);
        setSortByPriorityValue(eventKey)
    }

    return (
        <Dropdown onSelect={handleSelectPriority}>
            <Dropdown.Toggle variant="outline-info" id="dropdown-custom">
                {sortByPriority}
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <React.Fragment>
                    <Dropdown.Item eventKey="">None</Dropdown.Item>
                    <Dropdown.Item eventKey={1}>Low</Dropdown.Item>
                    <Dropdown.Item eventKey={2}>Medium</Dropdown.Item>
                    <Dropdown.Item eventKey={3}>High</Dropdown.Item>
                </React.Fragment>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default FilterByPriority;