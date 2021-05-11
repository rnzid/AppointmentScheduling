﻿$(document).ready(function () {
    InitializeCalendar();
});

function InitializeCalendar() {
    try {
        var calendarEl = document.getElementById('calendar');
        if (calendarEl != null) {
            var calendar = new FullCalendar.Calendar(calendarEl, {
                initialView: 'dayGridMonth',
                headerToolbar: {
                    left: 'prev,next,today',
                    center: 'Title',
                    right: 'dayGridMonth,timeGridWeek,timeGridDay'
                },
                selectable: true,
                editable: false,
                select: function (event) {
                    onShowModal(event, null);
                }
            });
            calendar.render();

        }
    }
    catch (e) {
        alert(e);
    }
};

function onCloseModal() {
    $("#appointmentInput").modal("hide");
};

function onShowModal(obj,isEventDetail) {
    $("#appointmentInput").modal("show");
};

