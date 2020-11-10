import MessageSender from '../components/MessageSender';
import Messages from '../components/Messages';
import useMessages from '../hooks/useMessages';

import './Chat.scss'

function Chat () {
  const { messages } = useMessages()

  return <div className="Chat">
    <Messages messages={messages} />
    <MessageSender />
  </div>
}

export default Chat