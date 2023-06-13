import fs from "fs";
import path from "path";

const buildPath = () => {
  return path.join(process.cwd(), "data", "data.json");
};

const extractData = (filepath) => {
  const jsonData = fs.readFileSync(filepath);
  const data = JSON.parse(jsonData);
  return data;
};

const Handler = (req, res) => {
  const { method } = req;

  const filepath = buildPath();
  const { events_categories, allEvents } = extractData(filepath);

  if (!allEvents) {
    return res.status(404).json({
      status: 404,
      message: "Events Data not found",
    });
  }

  if (method === "POST") {
    const { email, eventId } = req.body;

    if (!email || !email.includes("@")) {
      res.status(422).json({
        message: "Invalid email address",
      });
      return;
    }

    const newAllEvents = allEvents.map((ev) => {
      if (ev.id === eventId) {
        if (ev.emails_registered.includes(email)) {
          res.status(409).json({
            message: "This email has already be registered",
          });
          return ev;
        }
        return {
          ...ev,
          emails_registered: [...ev.emails_registered, email],
        };
      }
      return ev;
    });
    fs.writeFileSync(
      filepath,
      JSON.stringify({ events_categories: events_categories, allEvents: newAllEvents })
    );

    res.status(200).json({
      message: `Registered succesfully with ${email} to ${eventId}`,
    });
  }
};

export default Handler;
