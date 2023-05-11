import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import esLocale from "@fullcalendar/core/locales/es";
import listPlugin from "@fullcalendar/list";
import { useParams } from "react-router-dom";

function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{`  ${eventInfo.event.title}`}</i>
    </>
  );
}

export default function Reservar() {
  const [, setCurrentEvents] = useState([]);

  const { id } = useParams();

  const handleEvents = (events) => {
    setCurrentEvents(events);
  };

  return (
    <div>
      <div
        style={{
          backgroundColor: "white",
          width: "70%",
        }}
      >
        <FullCalendar
          plugins={[
            dayGridPlugin,
            timeGridPlugin,
            interactionPlugin,
            listPlugin,
          ]}
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
          }}
          initialView="dayGridMonth"
          selectable
          locale={esLocale}
          selectMirror
          dayMaxEvents
          weekends
          initialEvents={[
            {
              id: 1,
              title: "Sala",
              start: "2023-05-10",
              end: "2023-05-12",
            },
            {
              id: 2,
              title: "Sala 3",
              start: "2023-05-10 11:00",
              end: "2023-05-10 13:00",
            },
          ]}
          select={(e) => {
            console.log(e);
          }}
          eventContent={renderEventContent}
          eventClick={(e) => {
            console.log(e);
          }}
          eventsSet={handleEvents}
        />
      </div>
    </div>
  );
}
