function StatusTag({status, onSatusChange}) {

    const statusOptions = [
        {
            symbol: '🚀',
            text: 'Ready!',
            value: 'ready',
            className: 'green'
        },
        {
            symbol: '⏳',
            text: 'Waiting.',
            value: 'waiting',
            className: 'yellow'
        },
        {
            symbol: '🛑',
            text: 'Paused.',
            value: 'paused',
            className: 'red'
        }
    ]

    function renderClass(value, className) {
        if(value === status) return `mr-10 flex-row tag ${className}`
        else return `mr-10 flex-row tag unselected ${className}`
    }

    return (
        <div className="mb-20">
            {
                statusOptions.map(statusOption => {
                    const {symbol, text, value, className} = statusOption
                    return (
                    <button onClick={(e) => onSatusChange(value)} key={value} className={renderClass(value, className)}>
                        <p className='mr-10' >{text}</p>
                        <p className='status-symbol'>{symbol}</p>
                    </button>
                    )})
            }
        </div>
    );
}

export default StatusTag;