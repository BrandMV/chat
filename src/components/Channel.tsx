import { SyntheticEvent, useState } from "react";
import { firebase, firestore } from "../services/firebase";
import { useUser } from "../context/user";
import { useCollectionData } from "react-firebase-hooks/firestore";

interface IMessage {
  id: string;
  text: string;
  uid: string;
  photoURL: string;
  displayName: string;
  createdAt: firebase.firestore.Timestamp;
}

const messagesRef = firestore.collection("messages"); //referencia a collecion de firebase (messages)
const messagesQuery = messagesRef.orderBy("createdAt", "desc").limit(100);

const Channel = () => {
  const [text, setText] = useState("");
  const { logout, user } = useUser();
  const [messages, loading] = useCollectionData<IMessage>(messagesQuery, {
    idField: "id",
  });
  const sendMessage = (event: SyntheticEvent) => {
    event.preventDefault();

    if (text.trim().length < 1) return;
    if (user) {
      const { displayName, photoURL, uid } = user;
      messagesRef.add({
        text,
        uid,
        photoURL,
        displayName,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      });
    }
    setText("");
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <section>
      <button onClick={logout}>Logout</button>
      <section>
        {messages &&
          messages.reverse().map(({ text, displayName, id, photoURL }) => (
            <div key={id}>
              [
              <img
                src={photoURL}
                width="16"
                height="16"
                alt={displayName}
                style={{ borderRadius: "99rem" }}
              />
              {" "}{displayName}]: {text}
              
            </div>
          ))}
      </section>
      <form onSubmit={sendMessage}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button>Send</button>
      </form>
    </section>
  );
};
export default Channel;
