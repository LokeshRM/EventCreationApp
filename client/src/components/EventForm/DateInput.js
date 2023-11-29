import React from "react";

const DateInput = React.forwardRef((props, ref) => {
    return (
        <div className="p-1" ref={ref}>
            <label htmlFor={props.id} className="inline-block w-12">
                {props.label}
            </label>
            <span className="relative">
                <input
                    required
                    type="date"
                    id={props.id}
                    className="outline-none bg-[#EDEDED] px-1 rounded-md"
                />
            </span>
            <span className="relative ml-1">
                <input
                    required
                    type="time"
                    className="outline-none bg-[#EDEDED] px-1 rounded-md"
                />
            </span>
        </div>
    );
});

export default DateInput;
