const tagColors = ['red', 'green', 'blue', 'yellow', 'orange']
const tagColorObjects = [
    {
        label: 'Red',
        value: 'red'
    },
    {
        label: 'Green',
        value: 'green'
    },
    {
        label: 'Blue',
        value: 'blue'
    },
    {
        label: 'Yellow',
        value: 'yellow'
    },
    {
        label: 'Orange',
        value: 'orange'
    },
]

function renderTagClass(color) {
    let taskClasses;
    switch (color) {
        case 'red':
            taskClasses = 'task-tag tag-red';
            break;
        case 'blue':
            taskClasses = 'task-tag tag-blue';
            break;
        case 'green':
            taskClasses = 'task-tag tag-green';
            break;
        case 'yellow':
            taskClasses = 'task-tag tag-yellow'
            break;
        case 'orange':
            taskClasses = 'task-tag tag-orange'
            break;
        default:
            taskClasses = 'task-tag tag-orange'
            break;
    }
    return taskClasses;
}

export { tagColors, tagColorObjects, renderTagClass }