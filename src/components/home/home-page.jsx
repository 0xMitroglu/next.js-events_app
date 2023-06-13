import Link from "next/link";
import Image from "next/image";

export const HomePage = ({ data }) => (
  <div className="home-body">
    {data.map((ev) => (
      <Link className="card" key={ev.id} href={`/events/${ev.id}`} passHref>
        <Image src={ev.image} alt={`${ev.title} image`} width={300} height={300} />
        <div className="content">
          <h2>{ev.title}</h2>
          <p>{ev.description}</p>
        </div>
      </Link>
    ))}
  </div>
);
