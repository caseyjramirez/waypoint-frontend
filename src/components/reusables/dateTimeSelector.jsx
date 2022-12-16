import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { Stack, TextField } from '@mui/material'
import { DateTimePicker } from '@mui/x-date-pickers'

function DateTimeSelector({ onDueDateChange, dueDate, error }) {

    return (
        <div className="mb-20 time">
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Stack spacing={4} sx={{ width: '224px' }}>
                    <DateTimePicker 
                        label='Choose a due Date' 
                        renderInput={(params) => <TextField {...params} /> } 
                        value={dueDate}
                        onChange={onDueDateChange}
                        />
                </Stack>
            </LocalizationProvider>
            <ul>
                {error && <li className="error-message">{error}</li>}
            </ul>
        </div>
    );
}

export default DateTimeSelector;