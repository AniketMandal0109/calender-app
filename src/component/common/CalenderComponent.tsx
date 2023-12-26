import { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import DateComponent from './Modal/DateComponent';

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function CalenderComponent() {
    const [date, handleSelectedDate] = useState<Value>(null);
    const [triggerModal, handleModel] = useState<boolean>(false);

    useEffect(() => {
        if (date != null) {
            handleModel(!triggerModal);
        }
    }, [date])
    return (
        <div>
            <Calendar onChange={handleSelectedDate} value={date as Date} />
            {triggerModal && <DateComponent toggleModal={triggerModal} handleModel={handleModel} selectedDate={date} />}
        </div>
    )
}
