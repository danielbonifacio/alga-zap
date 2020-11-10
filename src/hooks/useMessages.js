import { useEffect, useState } from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import { db } from '../firebase';

function useMessages () {
  const [messages, setMessages] = useState([])
  const [messagesCollection, loadingMessages, error] = useCollection(
    db.collection('messages')
      .orderBy('created', 'desc')
      .limit(500)
  )

  useEffect(() => {
    const newMessages = messagesCollection?.docs
      .map(doc => ({
        ...doc.data(),
        key: doc.id
      })).reverse() || []

    setMessages(newMessages)
  }, [messagesCollection])

  return {
    messages,
    loadingMessages,
    error
  }
}

export default useMessages