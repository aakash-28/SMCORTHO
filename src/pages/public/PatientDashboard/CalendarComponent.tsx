import React, { useRef, useState } from 'react';
import { Button, Card, Modal } from 'antd';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import Axios from 'axios';

const headerOptions = {
  left: 'prev,next today',
  center: 'title',
  right: 'dayGridMonth,dayGridWeek,dayGridDay'
};

const CalendarComp = () => {
  const calendarRef = useRef(null);
  const [event, setEvent] = useState(null);
  const [events, setEvents] = useState([]);
  const [modalVisibility, setModalVisibility] = useState(false);

  const setDate = (day: number, hour: number = 0) => {
    const date = new Date();

    date.setDate(date.getDate() + day);
    date.setHours(date.getHours() + hour);

    return date;
  };
 
const url="https://eae63o4uu4.execute-api.ap-south-1.amazonaws.com/Prod/appointment"
async function handleDatesSet(data) {
  const response = await Axios.get(url)
  setEvents(response.data.body)
  console.log(response.data.body);
}


  const closeModal = () => setModalVisibility(false);

  const handleEventClick = (arg: any) => {
    setEvent(arg.event);
    setModalVisibility(true);
  };

  let modalBody, modalTitle, modalFooter;

  if (event) {
    modalBody = (
      <div className='d-flex flex-column'>
        <div className='event-time flex-column mb-4'>
          <h5 className='event-title m-0'>Event time</h5>
          <span>
            From: {event.start.toString()}<br></br> to: {event.end.toString()}
          </span>
        </div>
      </div>
    );

    modalTitle = (
      <div className='title-block p-0 m-0'>
        <h3 style={{ color: event.backgroundColor }} className='modal-title m-0'>
          {event.title}
        </h3>
      </div>
    );

    modalFooter = (
      <div className='d-flex justify-content-between modal-footer'>
        <Button onClick={closeModal} danger>
          Close
        </Button>
      </div>
    );
  }

  return (
    <>
    
    <div className='container calendarviewcard'>
      <div className='row'>
        <Card title='Doctors Schedule' className=' col-md-8 calendarcard2'>
          <FullCalendar
            ref={calendarRef}
            eventClick={handleEventClick}
            events={events}
            headerToolbar={headerOptions}
            initialView='dayGridMonth'
            plugins={[dayGridPlugin]}
            dayMaxEvents={true}
            weekends
            datesSet={(date)=>handleDatesSet(date) }
          />
        </Card>

        <Modal
          title={modalTitle}
          footer={modalFooter}
          visible={modalVisibility}
          onCancel={closeModal}
        >
          {modalBody}
        </Modal>
      </div>
    </div>
    </>

  );
  
};


export default CalendarComp;



