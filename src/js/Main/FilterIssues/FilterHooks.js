import {useState} from 'react';

export const useFilterByTime = () => {
    const [sortByTime, setSortByTime] = useState('Sort By Time : None');
    const [sortByTimeValue, setSortByTimeValue] = useState('');

    const handleSelectTime = (eventKey, event) => {
        setSortByTime('Sort By Time : ' + event.target.textContent);
        setSortByTimeValue(eventKey)
    }

    return {sortByTimeValue, handleSelectTime, sortByTime};
}