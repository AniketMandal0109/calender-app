import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useEffect, useState } from 'react';
import DaySchedule from '../Schedule/DaySchedule';
import { DateModel, TimeModel } from '../../../Models/Models';
import { Functions } from '../../../common/Functions';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import AddTaskComponent from '../../Task/AddTaskComponent';
const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};
export default function DateComponent(DateProps: any) {

    const _function = new Functions();
    const [date, setDate] = useState<DateModel>({
        Day: '',
        Month: '',
        Date: 0,
        Year: 0
    })
    const [time, setTime] = useState<TimeModel>({
        Hours: 0,
        Minutes: '',
        Seconds: '',
        PostNoon: ''
    })
    const [openAddtask, setOpenAddTask] = useState<boolean>(false);

    useEffect(() => {
        setDate(_function.formatDate(DateProps.selectedDate.toString()))
        setInterval(() => {
            setTime(_function.formatTimeFromTimestamp(new Date().getTime()))
        }, 1)

    }, [time])

    function handleModel() {
        return !DateProps.toggleModal
    }

    function ToggleTask() {
        setOpenAddTask(!openAddtask);
    }

    return (
        <div>
            <Modal
                open={DateProps.toggleModal}
                onClose={handleModel}
                style={{ borderRadius: '15px' }}
            >
                <Box sx={{ ...style, width: 1000, height: 800 }}>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <span>
                            <h1 id="parent-modal-title">{`${time.Hours}:${time.Minutes}:${time.Seconds} ${time.PostNoon}`}</h1>
                            <h2 id="parent-modal-title">{`${date.Day}, ${date.Month} ${date.Date}, ${date.Year}`}</h2>
                        </span>
                        <span>
                           {!openAddtask && <h2 id="parent-modal-title" onClick={ToggleTask}><AddIcon /></h2>}
                           {openAddtask && <h2 id="parent-modal-title" onClick={ToggleTask}><CloseIcon /></h2>}
                        </span>
                    </div>
                    <div className='d-flex-row-space-between'>
                        <div className={openAddtask ? 'day-schedule width-64' : 'day-schedule width-100'}>
                            <DaySchedule />
                        </div>
                        <div className={openAddtask ? 'task-creator width-35' : 'task-creator width-0'}>
                            <AddTaskComponent/>
                        </div>
                    </div>
                </Box>
            </Modal>
        </div>
    )
}
