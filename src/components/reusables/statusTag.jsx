function StatusTag({status}) {

    console.log(status);

    const statusOptions = [
        {
            symbol: '🚀',
            text: 'Ready!',
            value: 'ready',
            class: 'green'
        },
        {
            symbol: '⏳',
            text: 'Waiting.',
            value: 'waiting',
            class: 'yellow'
        },
        {
            symbol: '🛑',
            text: 'Paused.',
            value: 'paused',
            class: 'red'
        }
    ]
    return (
        <div className="status-tag mb-20">
            {
                statusOptions.map(status => {
                    return (
                    <button className={`mr-10 task-tag flex-row green`}>
                        <p className='mr-10 status-symbol'>{status.symbol}</p>
                        <p className='mr-10'>{status.text}</p>
                    </button>
                    )})
            }
        </div>
    );
}

export default StatusTag;