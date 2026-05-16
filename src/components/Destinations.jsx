import "../styles/Destinations.css";

const destinations = [
  {
    name: "Ayodhya",
    city: "Uttar Pradesh, India",
    img: process.env.PUBLIC_URL + "/images/ayodhya.jpg"
  },
  {
    name: "Varanasi",
    city: "Uttar Pradesh, India",
    img: process.env.PUBLIC_URL + "/images/varanasi.jpg"
  },
  {
    name: "Prayagraj",
    city: "Uttar Pradesh, India",
    img: process.env.PUBLIC_URL + "/images/prayagraj.jpg"
  },
  {
    name: "Gaya",
    city: "Bihar, India",
    img: process.env.PUBLIC_URL + "/images/gaya.jpg"
  }
];

function Destinations() {
  return (
    <section className="dest" id="destination">
      <p className="sub">POPULAR DESTINATION</p>
      <h2>Spiritual & Sacred Places</h2>

      <div className="grid">
        {destinations.map((item, index) => (
          <div className="card" key={index}>
            <img src={item.img} alt={item.name} />
            <div className="card-content">
              <h3>{item.name}</h3>
              <p>{item.city}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Destinations;