import { Circle } from "better-react-spinkit";
import React, { useState } from "react";
import firebase, { db } from "../../../firebase";
import { Container, DARKBG, Section } from "../../../globalStyles";
import { Button } from "../../Button/Button.styles";
import { Form } from "./Contact.styles";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [usermsg, setUserMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    db.collection("contact")
      .add({
        email,
        message,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then(() => {
        setSending(false);
        setUserMsg("Thanks for contacting");
        setEmail("");
        setMessage("");
      })
      .catch(() => {
        setSending(false);
        setUserMsg("Something went wrong try again");
        setEmail("");
        setMessage("");
      });

    setTimeout(() => setUserMsg(""), 5000);
  };

  return (
    <React.Fragment>
      <Section style={{ paddingBottom: "2rem", backgroundColor: DARKBG }}>
        <Container style={{ textAlign: "center" }}>
          <h2 style={{ marginBottom: "2rem" }}>Get in Touch</h2>
          <Form onSubmit={handleSubmit}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message"
              required
            ></textarea>
            <Button
              style={{ display: "grid", placeItems: "center" }}
              disabled={sending}
              type="submit"
            >
              {sending ? <Circle /> : "Send"}
            </Button>
          </Form>
          {usermsg && <p>{usermsg}</p>}
        </Container>
      </Section>
    </React.Fragment>
  );
};

export default Contact;
