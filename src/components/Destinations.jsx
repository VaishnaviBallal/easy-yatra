import "../styles/Destinations.css";

const destinations = [
  {
    name: "Ayodhya",
    city: "Uttar Pradesh, India",
    img: "https://images.unsplash.com/photo-1608369475631-3c0c6b5a7f9f"
  },
  {
    name: "Varanasi",
    city: "Uttar Pradesh, India",
    img: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc"
  },
  {
    name: "Prayagraj",
    city: "Uttar Pradesh, India",
    img: "https://images.unsplash.com/photo-1603262110263-fb0112e7cc33"
  },
  {
    name: "Gaya",
    city: "Bihar, India",
    img: "https://images.unsplash.com/photo-1582972236019-ea4af5ffe587"
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