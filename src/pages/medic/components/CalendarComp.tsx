import React, { useState } from 'react';
import { Button, Card, Modal } from 'antd';
import { IPageData } from '../../../interfaces/page';
import DayView from '../components/DayView';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';



const headerOptions = {
  left: 'prev,next today',
  center: 'title',
  right: 'dayGridMonth,dayGridWeek,dayGridDay'
};

const CalendarComp = () => {
  const [event, setEvent] = useState(null);
  const [modalVisibility, setModalVisibility] = useState(false);

  const setDate = (day: number, hour: number = 0) => {
    const date = new Date();

    date.setDate(date.getDate() + day);
    date.setHours(date.getHours() + hour);

    return date;
  };
  
  const events = [
    {
      title: 'Occupied',
      color: '#e9e165',
      classNames: ['event-error'],
      start: setDate(0, 2),
      end: setDate(0, 3),
    },
    {
      title: 'Occupied',
      color: '#e9e165',
      start: setDate(1, -1),
      end: setDate(1, 3),
    },
    {
      title: 'Occupied',
      color: '#e9e165',
      start: setDate(1),
      classNames: ['event-pink'],
      end: setDate(1, 3),
    },
    {
      title: 'Occupied',
      color: '#e9e165',
      classNames: ['event-orange'],
      start: setDate(1, -3),
      end: setDate(1, -2),
    },
    {
      title: 'Occupied',
      color: '#e9e165',
      start: setDate(3, -5),
      end: setDate(4),
      
    },
    {
      title: 'Occupied',
      color: '#e9e165',
      classNames: ['event-green'],
      start: setDate(5, 10),
      end: setDate(6),
    }
  ];

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
            From: {event.start.toDateString()} - to: {event.end.toDateString()}
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
        <Card title='Doctors Schedule' className=' col-md-8 calendarcard'>
          <FullCalendar
            eventClick={handleEventClick}
            events={events}
            headerToolbar={headerOptions}
            initialView='dayGridMonth'
            plugins={[dayGridPlugin]}
            dayMaxEvents={true}
            weekends
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

