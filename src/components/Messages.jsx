import './Messages.scss'

function Messages ({ messages }) {
  return <div className="Messages">
    {
      messages.map(message =>{
        const messageClass = message.user.email === 'daniel.bonifacio@algaworks.com'
          ? 'outgoing'
          : 'incoming'

        return <div key={message.key} className={`Message ${messageClass}`}>
          <div className={messageClass}>
            <img
              src={message.user.photo}
              alt={message.user.displayName}
            />

            <span>
              { message.message }
            </span>
          </div>
        </div>

      })
    }
  </div>
}

export default Messages