"use client";

import { createContext, useState } from "react";
import friendsData from "@/app/data/data.json";
import { toast } from "react-toastify";

export const friendContext = createContext();

const FriendContextProvider = ({children}) => {
    const [timeline, setTimeline] = useState([]);
    const [call, setCall] = useState([]);
    const [sms, setSms] = useState([]);
    const [video, setVideo] = useState([]);

    const handleCall = (friend)=>{
        toast(`Calling ${friend.name}...`);
        setCall([...call, friend]);
        setTimeline([...timeline, {
            friend,
            type: 'Call',
            timestamp: new Date().toISOString()
        }]);
    }
    const handleSms = (friend)=>{
        toast(`Sending SMS to ${friend.name}...`);
        setSms([...sms, friend]);
        setTimeline([...timeline, {
            friend,
            type: 'SMS',
            timestamp: new Date().toISOString()
        }]);
    }
    const handleVideo = (friend)=>{
        toast(`Starting video call with ${friend.name}...`);
        setVideo([...video, friend]);
        setTimeline([...timeline, {
            friend,
            type: 'Video Call',
            timestamp: new Date().toISOString()
        }]);
    }

    const data = {
        friends: friendsData,
        timeline,
        interaction: timeline,
        handleCall,
        handleSms,
        handleVideo
    };

    return (
        <friendContext.Provider value={data}>
            {children}
        </friendContext.Provider>
    );
};

export default FriendContextProvider;