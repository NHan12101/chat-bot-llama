import ChatInputBar from "./Chat-Components/ChatInputBar";
import ChatMessages from "./Chat-Components/ChatMessages";
import ChatSideBar from "./Chat-Components/ChatSideBar";
import { useChat } from "./Chat-Components/hooks/useChat";

// ts-nocheck
export default function Chat() {
    const{  
        model, setModel, 
        temperature, setTemperature,
        input, setInput,
        history, setHistory,
        boxRef, clearAll, send
        }
            = useChat()
    return <div className="container">
        <ChatSideBar 
            setModel={setModel} 
            model={model} 
            temperature={temperature} 
            setTemperature={setTemperature} 
            clearAll={clearAll}
        />
        <main className="main">
            <div className="card chat">
                <ChatMessages boxRef={boxRef} history={history}/>
                <ChatInputBar send={send} input={input} setInput={setInput}/>
            </div>
        </main>

    </div>;
}