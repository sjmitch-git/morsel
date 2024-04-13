import React, { createContext, useState, useContext } from "react";

const MessageContext = createContext();

export const useMessageContext = () => useContext(MessageContext);

export const MessageProvider = ({ children }) => {
  const [symbols, setSymbols] = useState("");
  const [loadingSymbols, setLoadingSymbols] = useState(null);
  // State to store messages
  const [messages, setMessages] = useState([]);

  // Function to add a new message
  const addMessage = (newMessage) => {
    setMessages([...messages, newMessage]);
  };

  // Function to clear all messages
  const clearMessages = () => {
    setMessages([]);
  };

  return (
    <MessageContext.Provider
      value={{
        symbols,
        setSymbols,
        loadingSymbols,
        setLoadingSymbols,
        messages,
        addMessage,
        clearMessages,
      }}
    >
      {children}
    </MessageContext.Provider>
  );
};
