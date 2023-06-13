import Image from "next/image";
import { useRouter } from "next/router";
import React, { useRef, useState } from "react";

const EventPage = ({ data }) => {
  const inputEmail = useRef();
  const router = useRouter();
  const [message, setMessage] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    const emailValue = inputEmail.current.value;
    const eventId = router?.query.id;

    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!emailValue.match(validRegex)) {
      setMessage("Please use a valid email address");
    }

    try {
      const response = await fetch("/api/email-registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: emailValue, eventId: eventId }),
      });
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const data = await response.json();
      setMessage(data.message);
      inputEmail.current.value = "";
      console.log("POST", data);
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <div className="events-city-event-div">
      <h1 className="events-city-event-h1">{data.title}</h1>
      <Image
        className="events-city-event-img"
        src={data.image}
        width={800}
        height={400}
        alt={data.title}
      ></Image>
      <p className="events-city-event-p">{data.description}</p>
      <br />
      <form onSubmit={onSubmit} className="email_registration">
        <label> Get Registered for this event!</label>
        <div className="registration-input-and-button-div">
          <input ref={inputEmail} id="email" placeholder="Please insert your email here" />
          <button type="submit"> Submit</button>
        </div>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default EventPage;

export const getStaticPaths = async () => {
  const { allEvents } = await import("/data/data.json");

  const allPaths = allEvents.map((path) => {
    return {
      params: {
        cat: path.city,
        id: path.id,
      },
    };
  });

  return {
    paths: allPaths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const { allEvents } = await import("/data/data.json");
  const eventData = allEvents.find((ev) => id === ev.id);

  return {
    props: {
      data: eventData,
    },
  };
};
