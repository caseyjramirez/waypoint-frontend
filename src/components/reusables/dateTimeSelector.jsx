import React from 'react';

function DateTimeSelector({ onTimeChange, timeDue, onDateChange, datedue, error }) {

    return (
        <div className="mb-20">
            <div className="time flex-row">
                <h3 className="mr-10">Due: </h3>
                <input onChange={(e) => onTimeChange(e.target.value)} value={timeDue} type="time"></input>
                <input onChange={(e) => onDateChange(e.target.value)} defaultValue={datedue} type="date"></input>

            </div>
            <ul>
                {error && <li className="error-message">{error}</li>}
            </ul>
        </div>
    );
}

export default DateTimeSelector;