import {useState} from "react";
import {useFormIssuesFilter} from "../API/formHooks";

export const FilterIssuesData = () => {

    const [sortByTime, setSortByTime] = useState('Sort By Time : None');
    const [sortByTimeValue, setSortByTimeValue] = useState('');

    const handleSelectTime = (eventKey, event) => {
        setSortByTime('Sort By Time : ' + event.target.textContent);
        setSortByTimeValue(eventKey)
    }

    const [sortByPriority, setSortByPriority] = useState('Sort By Priority : None');
    const [sortByPriorityValue, setSortByPriorityValue] = useState('');

    const handleSelectPriority = (eventKey, event) => {
        setSortByPriority('Sort By Priority : ' + event.target.textContent);
        setSortByPriorityValue(eventKey)
    }

    const [sortByCondition, setSortByCondition] = useState('Sort By Condition : None');
    const [sortByConditionValue, setSortByConditionValue] = useState('');

    const handleSelectCondition = (eventKey, event) => {
        setSortByCondition('Sort By Condition : ' + event.target.textContent);
        setSortByConditionValue(eventKey)
    }

    const {formIssuesFilter, handleSubmitData, formDataIssuesFilter, setFormDataIssuesFilter} = useFormIssuesFilter();
    formIssuesFilter.time = sortByTimeValue;
    formIssuesFilter.priority = sortByPriorityValue;
    formIssuesFilter.condition = sortByConditionValue;


    return {
        sortByTime,
        sortByPriority,
        sortByCondition,
        handleSelectTime,
        handleSelectPriority,
        handleSelectCondition,
        handleSubmitData,
        formDataIssuesFilter,
        setFormDataIssuesFilter
    };
}

// export default FilterIssuesData;