import React, { useEffect, useState } from 'react'
import axios from 'axios';

function ChatPage() {
    const [chats, setChats] = useState([]);
      const fetchData = async() => {
        try {
          const {data} = await axios.get("/api/chats", {
            baseURL: "http://localhost:5000"
          });
          setChats(data);
        }
        catch(err) {
          console.error("Error fetching data: "+ err);
        }
      }
      
      useEffect(() => {
          fetchData();
      }, []);

  return (
    <div className='background-all'>
      {chats.map((chat) => 
        <div key={chat._id}>
          <p>{chat.chatName}</p>
        </div>
      )}
    </div>
  )
}

export default ChatPage