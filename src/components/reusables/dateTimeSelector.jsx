import React from 'react';

function DateTimeSelector({ onTimeChange, timeDue, onDateChange, datedue }) {
    
    return (
        <div className="time mb-10 flex-row">
            <h3 className="mr-10">Due: </h3>
            <input onChange={(e) => onTimeChange(e.target.value)} value={timeDue} type="time"></input>
            <input onChange={(e) => onDateChange(e.target.value)} defaultValue={datedue} type="date"></input>

        </div>
    );
}

export default DateTimeSelector;