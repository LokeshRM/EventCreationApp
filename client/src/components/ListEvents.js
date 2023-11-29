import React from "react";
import Event from "./Event";

function ListEvents(props) {
    return (
        <>
            {props.events.map((dat) => (
                <Event
                    eventName={dat.name}
                    startTime={dat.startTime}
                    startDate={dat.startDate}
                    location={dat.location}
                    cap={dat.capacity}
                    file={dat.img}
                />
            ))}
        </>
    );
}

export default ListEvents;
