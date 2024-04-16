import "./chat_bubble.css"

export default function ChatBubble(
    { text }:
        { text: string }
) {
    return (
        <div className="m14 grey-800 chat_bubble">{text}</div>
    )
}