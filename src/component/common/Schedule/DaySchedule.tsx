import { useState } from 'react';
import { DayModel } from '../../../Models/Models'
import { Constants } from '../../../common/Constants';
import TaskComponent from '../../Task/TaskComponent';

export default function DaySchedule() {
    const _const = new Constants();
    const [dayTasks,setDayTasks] =  useState<DayModel[]>(_const.DayList);

    return (
        <>
            <article style={{ paddingTop: '15px', backgroundColor: 'black' }}>
                {dayTasks.map((list:DayModel) =>
                    <div key={list.HrIdx}>
                        <div className="container">
                            <span className="text"> {list.hours}</span>
                            <hr className="divider" />
                        </div>
                        <div style={{paddingLeft:'6%'}}>
                            <TaskComponent/>
                        </div>
                    </div>)
                    }
            </article>
        </>
    )
}
