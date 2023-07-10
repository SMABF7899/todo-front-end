import React from "react";
import {FilterByTime} from "./FilterByTime";
import FilterByCondition from "./FilterByCondition";
import FilterByPriority from "./FilterByPriority";
import {Row, Col} from "react-bootstrap";

const FilterIssuesData = () => {

    const { sortByTimeValue } = FilterByTime();
    console.log("sortByTimeValue : ", sortByTimeValue);
    return (
        <Row>
            <Col>
                <FilterByTime/>
            </Col>
            <Col>
                <FilterByPriority/>
            </Col>
            <Col>
                <FilterByCondition/>
            </Col>
        </Row>
    );
}

export default FilterIssuesData;
