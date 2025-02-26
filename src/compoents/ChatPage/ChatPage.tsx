import './ChatPage.css'
import {useState} from "react";

function ChatPage() {
    const [messages, setMessages] = useState([
        { text: 'Hello!', sender: 'other' },
        { text: 'Hi, how are you?', sender: 'self' },
        { text: 'I am good, thanks!', sender: 'other' },
    ]);

    const [inputMessage, setInputMessage] = useState('');

    const handleSendMessage = () => {
        if (inputMessage.trim()) {
            setMessages([
                ...messages,
                { text: inputMessage, sender: 'self' },
            ]);
            setInputMessage('');
        }
    };

    return (<>
        <div className="min-h-screen flex flex-col justify-between bg-gray-100">
            <div className="flex-grow p-4 space-y-4 overflow-auto">
                <div className="flex flex-col space-y-4">
                    {messages.map((msg, index) => (
                        <div
                            key={index}
                            className={`flex ${msg.sender === 'self' ? 'justify-end' : 'justify-start'}`}
                        >
                            <div
                                className={`max-w-xs p-3 rounded-lg ${
                                    msg.sender === 'self' ? 'bg-blue-500 text-white' : 'bg-gray-300'
                                }`}
                            >
                                {msg.text}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="p-4 bg-white shadow-lg">
                <div className="flex items-center">
                    <input
                        type="text"
                        className="input input-bordered input-sm w-full mr-2"
                        placeholder="Type a message..."
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                    />
                    <button
                        className="btn btn-sm btn-primary"
                        onClick={handleSendMessage}
                    >
                        Send
                    </button>
                </div>
            </div>
        </div>
    </>);
}

export default ChatPage;