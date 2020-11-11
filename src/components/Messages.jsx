import { useEffect, useRef } from 'react'
import { auth } from '../firebase'
import './Messages.scss'

function Messages ({ messages }) {
  const ref = useRef(null)

  useEffect(() => {
    ref.current.scrollTop = ref.current.scrollHeight
  }, [messages])

  return <div className="Messages" ref={ref}>
    {
      messages.map(message =>{
        const user = auth().currentUser
        const messageClass = message.user.uid === user.uid
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