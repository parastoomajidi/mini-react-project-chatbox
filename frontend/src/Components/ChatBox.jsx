
import React, {useState, useEffect} from "react";
import {io} from 'socket.io-client';
import '../Styels/ChatBox.css';

const socket = io("http://localhost:4000");

export function ChatBBox({userId, isAdmin = false, currentChatUserId = null}){
    const [messages, setMessages] = useState([]);
    const [input, setInput]=useEffect([]);
    const [activUser, setActiveUser]=useState([]);

    const targetUserId = isAdmin ? currentChatUserId:userId



}
const sendMessage=()=>{
    if(input.trim() && targetUserId){
        const newMsg={
            text:input,
            sender: isAdmin? "admin": "user",
            timestamp: new Date().toISOString(),
            id:Date.now(),
        };
        setMessages(prev =>[...prev, newMesg]);
        socket.emit('send_message',{
            ...newMsg,
            userId:targetUserId
        });
        setInput("");
    }
}

useEffect(()=>{
    if(!targetUserId)return;
    setMessages([]);

    socket.emit('register',{
        userId,
        isAdmin,
        currentChatUserId:isAdmin? currentChatUserId:null
    })

},[])

