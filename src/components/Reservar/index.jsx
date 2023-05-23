import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import esLocale from "@fullcalendar/core/locales/es";
import listPlugin from "@fullcalendar/list";
import { useParams } from "react-router-dom";
import { getReservas } from "../../services/physicalResource";

function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{`  ${eventInfo.event.title}`}</i>
    </>
  );
}

export default function Reservar() {
  const [currentEvents, setCurrentEvents] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const fetchReservas = async () => {
      try {
        const reservas = await getReservas(id);
        

        // const reservasArray = Array.isArray(reservas) ? reservas : [];
  
        setCurrentEvents(reservas.map((reserva) => {
          return {
            id: reserva.REFI_IDRESCURSOFISICO,
            title: reserva.SOLI_DESCRIPCION,
            start: reserva.SOLI_FECHAPRESTAMO,
            end: reserva.SOLI_FECHADEVOLUCION
          };
        }));
      } catch (error) {
        console.error("No hay reservas:", error);
      }
    };
  
    fetchReservas();
  }, [id]);

  console.log("Reservas:", currentEvents);
  

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
          events={currentEvents}
          select={(e) => {
            console.log(e.startStr);
          }}
          eventContent={renderEventContent}
          eventClick={(e) => {
            const {
              title              
            } = e.event;
            console.log(title);
          }}
        />
      </div>
    </div>
  );
}
