import React, { useState, useRef } from "react";
import DateInput from "./DateInput";

const getDateTime = (ref) => {
    let child = Array.from(ref.current.children);
    let date = child[1].children[0].value;
    let time = child[2].children[0].value;
    return [date, time];
};

const checkDate = (d1, d2) => {
    if (d2 > d1) return true;
    return false;
};

const resetDate = (ref1, ref2) => {
    let child = ref1.current.children;
    child[1].children[0].value = "";
    child[2].children[0].value = "";
    child = ref2.current.children;
    child[1].children[0].value = "";
    child[2].children[0].value = "";
};

function EventForm(props) {
    const [file, setFile] = useState("invitation.jpeg");

    const hiddenFileInput = useRef();
    const headingRef = useRef();
    const startRef = useRef();
    const endRef = useRef();
    const locationRef = useRef();
    const priceRef = useRef();
    const approveRef = useRef();
    const capacityRef = useRef();
    const visiblityRef = useRef();

    const handleClick = () => {
        hiddenFileInput.current.click();
    };

    const handleChange = (e) => {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let [d1, t1] = getDateTime(startRef);
        let [d2, t2] = getDateTime(endRef);
        if (!checkDate(new Date(d1 + " " + t1), new Date(d2 + " " + t2))) {
            alert("Enter Valid Date");
        }
        props.add({
            name: headingRef.current.value,
            startDate: d1,
            startTime: t1,
            endDate: d2,
            endTime: t2,
            location: locationRef.current.value,
            price: priceRef.current.value,
            approval: approveRef.current.checked,
            capacity: capacityRef.current.value,
            visibility: visiblityRef.current.value,
            img: file,
        });

        resetDate(startRef, endRef);
        headingRef.current.value = "";
        locationRef.current.value = "";
        priceRef.current.value = "";
        approveRef.current.checked = "";
        capacityRef.current.value = "";
        visiblityRef.current.value = "";
        setFile("invitation.jpeg");
    };

    return (
        <div className="mx-auto shadow-md shadow-gray-500 rounded-[10px] w-[60%]">
            <form className="m-4 flex" onSubmit={handleSubmit}>
                <div>
                    <input
                        required
                        type="text"
                        ref={headingRef}
                        placeholder="Event Name"
                        className="outline-none w-full h-16 text-3xl font-semibold"
                    />
                    <div className="bg-[#F6F6F6] min-h-[60px] rounded-md font-semibold">
                        <DateInput label="Start" id="start" ref={startRef} />
                        <DateInput label="End" id="end" ref={endRef} />
                    </div>

                    <div className="bg-[#F6F6F6] rounded-md font-semibold p-4 mt-4">
                        <label
                            htmlFor="location"
                            className="text-md pl-1 font-medium opacity-60"
                        >
                            Add Event location
                        </label>

                        <select
                            ref={locationRef}
                            id="location"
                            className="block p-2 mt-2 w-full  bg-[#EDEDED] text-md font-semibold  appearance-none focus:outline-none rounded-md opacity-60"
                        >
                            <option>Offline</option>
                            <option>Virtual</option>
                        </select>
                    </div>

                    <p className="mt-4 text-md font-semibold opacity-60">
                        Event Options
                    </p>

                    <div className="mt-2 bg-[#F6F6F6] text-[16px] font-medium">
                        <div className="p-2 border-b-[1px] flex justify-between">
                            <span htmlFor="tickets" className="inline-block">
                                Tickets
                            </span>
                            <input
                                required
                                ref={priceRef}
                                type="number"
                                min={0}
                                placeholder="0"
                                className="max-w-[20%] appearance-none bg-[#F6F6F6] outline-none ml-[50px]"
                            />
                        </div>
                        <div className="p-2 border-b-[1px] flex justify-between">
                            <span htmlFor="tickets" className="inline-block">
                                Require Approval
                            </span>

                            <label className="relative inline-flex items-center cursor-pointer">
                                <input
                                    required
                                    ref={approveRef}
                                    type="checkbox"
                                    className="sr-only peer"
                                />
                                <div className="w-11 h-full mr-4 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            </label>
                        </div>
                        <div className="p-2 border-b-[1px] flex justify-between">
                            <span htmlFor="tickets" className="inline-block">
                                Capacity
                            </span>
                            <input
                                required
                                ref={capacityRef}
                                type="number"
                                min={0}
                                placeholder="0"
                                className="max-w-[20%] appearance-none bg-[#F6F6F6] outline-none ml-[50px]"
                            />
                        </div>
                        <div className="p-2 border-b-[1px] flex justify-between">
                            <span htmlFor="tickets" className="inline-block">
                                Visibility
                            </span>
                            <select
                                required
                                ref={visiblityRef}
                                className="mr-4 bg-[#F6F6F6] text-md font-semibold  appearance-none focus:outline-none rounded-md opacity-50"
                            >
                                <option>Public</option>
                                <option>Private</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="w-[50%] ml-5">
                    <div className="relative mt-16 h-[70%]">
                        <img
                            src={file}
                            alt="image"
                            className="h-full w-full rounded-3xl"
                        />
                        <input
                            type="file"
                            ref={hiddenFileInput}
                            onChange={handleChange}
                            className="hidden"
                        />

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="1.5em"
                            viewBox="0 0 576 512"
                            className="absolute bottom-0 right-3 cursor-pointer"
                            onClick={handleClick}
                        >
                            <path d="M160 32c-35.3 0-64 28.7-64 64V320c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H160zM396 138.7l96 144c4.9 7.4 5.4 16.8 1.2 24.6S480.9 320 472 320H328 280 200c-9.2 0-17.6-5.3-21.6-13.6s-2.9-18.2 2.9-25.4l64-80c4.6-5.7 11.4-9 18.7-9s14.2 3.3 18.7 9l17.3 21.6 56-84C360.5 132 368 128 376 128s15.5 4 20 10.7zM192 128a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM48 120c0-13.3-10.7-24-24-24S0 106.7 0 120V344c0 75.1 60.9 136 136 136H456c13.3 0 24-10.7 24-24s-10.7-24-24-24H136c-48.6 0-88-39.4-88-88V120z" />
                        </svg>
                    </div>
                    <button
                        type="submit"
                        className="mt-5 py-3 px-2 w-full bg-[#333537] text-white text-lg rounded-lg"
                    >
                        Create Event
                    </button>
                </div>
            </form>
        </div>
    );
}

export default EventForm;
