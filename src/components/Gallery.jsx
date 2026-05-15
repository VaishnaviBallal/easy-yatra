import "../styles/Gallery.css";

const images = [
  "/images/img1.jpg",
  "/images/img2.jpg",
  "/images/img3.jpg",
  "/images/img4.jpg",
  "/images/img5.jpg",
  "/images/img6.jpg",
  "/images/img7.jpg",
  "/images/img8.jpg",
  "/images/img9.jpg",
  "/images/img10.jpg",
  "/images/img11.jpg",
  "/images/img12.jpg"
];

function Gallery() {
  return (
    <section className="gallery" id="gallery">

      <p className="sub">TRAVEL GALLERY</p>
      <h2>Beautiful Moments</h2>

      <div className="gallery-grid">

        {images.map((img, i) => (
          <div className="gallery-item" key={i}>
            <img src={img} alt="travel" />
          </div>
        ))}

      </div>

    </section>
  );
}

export default Gallery;