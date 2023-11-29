import React from "react";

function Event(props) {
    return (
        <div className="mx-auto my-5 flex rounded-lg p-5 w-[40%] shadow-md shadow-gray-500">
            <div className="w-[60%]">
                <p className="mb-2 text-sm font-semibold opacity-30">
                    {new Date(props.startDate).toDateString() +
                        " " +
                        props.startTime}
                </p>
                <p className="text-lg font-semibold">{props.eventName}</p>
                <p className="my-2 text-sm font-semibold opacity-30">
                    {props.location}
                </p>
                <p className="mb-2 text-sm font-semibold opacity-30">
                    Capacity : {props.cap}
                </p>
            </div>
            <div>
                <img
                    src={props.file}
                    alt="image"
                    className="w-[400px] h-[200px] rounded-3xl"
                />
            </div>
        </div>
    );
}

export default Event;
