import React, { useState } from "react";

import EventForm from "./components/EventForm/EventForm";
import ListEvents from "./components/ListEvents";

function App() {
    const [events, SetEvents] = useState([]);
    const [formPage, setFormPage] = useState(true);
    const [eventPage, setEventPage] = useState(false);

    const addEvent = (data) => {
        SetEvents((x) => [...x, data]);
    };

    return (
        <>
            <div className="mx-auto mt-2 w-[60%] h-[60px] flex items-center">
                <p
                    className="ml-8 font-semibold text-lg opacity-50 cursor-pointer"
                    onClick={() => {
                        setFormPage(true);
                        setEventPage(false);
                    }}
                >
                    Events
                </p>
                <p
                    className="ml-8 font-semibold text-lg opacity-50 cursor-pointer"
                    onClick={() => {
                        setFormPage(false);
                        setEventPage(true);
                    }}
                >
                    Explore
                </p>
            </div>
            {formPage && <EventForm add={addEvent} />}
            {eventPage && <ListEvents events={events} />}
        </>
    );
}

export default App;
