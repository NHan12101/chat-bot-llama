export default function ChatInputBar({ send, input, setInput }) {
    return (
        <div className="inputBar">
            <input
                className="inp"
                placeholder="Send a message..."
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') send();
                }}
            />
            <button className="btn" onClick={send}>
                Send
            </button>
        </div>
    );
}