import { useState } from "react"
import MessagingService from '../services/messaging'
import './MessageSender.scss'

function MessageSender () {
  const [message, setMessage] = useState('')
  
  function handleSubmit () {
    MessagingService.sendMessage(message)
    setMessage('')
  }

  return <div className={'MessageSender'}>
    <input
      type="text"
      value={message}
      placeholder="Insira sua mensagem aqui"
      onChange={e => setMessage(e.target.value)}
      onSubmit={handleSubmit}
    />

    <button onClick={handleSubmit}>
      Enviar
    </button>
  </div>
}

export default MessageSender