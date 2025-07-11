/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import "./App.css";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import WhatsAppButton from "./components/WhatsappButton";

function App() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [menuOpen, setMenuOpen] = useState(false);

  const portfolioItems = [
    {
      id: 1,
      title: "Smoking Beauty - A woman's true beauty is in her hair.",
      category: "painting",
      image: "/images/WhatsApp Image 2025-03-05 at 13.03.36_8076f6e3.jpg",
      Dimension: '60*80 cm',
      Medium: 'Oil and Smoke on canvas',
      Status: 'Sold'
    },
    {
      id: 2,
      title: "Edge of a man.",
      category: "photography",
      image: "/images/WhatsApp Image 2025-03-05 at 13.03.36_bdc62120.jpg",
      Dimension: '80*75 cm',
      Medium: 'Oil on Canvas',
      Status: 'ksh 20,000'
    },
    {
      id: 3,
      title: "Age of a River. ",
      category: "painting",
      image: "/images/WhatsApp Image 2025-03-05 at 13.03.37_9bf8e58b.jpg",
      Dimension: '45*60 cm',
      Medium: 'Oil on Canvas',
      Status: 'Sold'
    },
    {
      id: 4,
      title: "Coexistance and Conflict",
      category: "digital",
      image: "/images/WhatsApp Image 2025-03-05 at 13.03.38_0e855cc5.jpg",
      Dimension: '100*100 cm',
      Medium: 'Oil on Canvas',
      Status: 'ksh 75,000'
    },
    {
      id: 5,
      title: "Tools of creation.",
      category: "painting",
      image: "/images/WhatsApp Image 2025-03-05 at 13.03.38_6889a4a8.jpg",
      Dimension: '60*80 cm',
      Medium: 'Oil on Canvas',
      Status: 'ksh 45,000'
    },
    {
      id: 6,
      title:
        "Coexistence and Conflict.",
      category: "painting",
      image: "/images/WhatsApp Image 2025-03-05 at 13.03.38_f0de7708.jpg",
      Dimension: '35*35 cm',
      Medium: 'Oil on Canvas',
      Status: 'Sold'
    },
    {
      id: 7,
      title: 'Sketch 1',
      category: "sketches",
      image: "images/WhatsApp Image 2025-04-13 at 12.41.56_105f8489.jpg",
      Dimension: '35*35 cm',
      Medium: 'Oil on Canvas',
      Status: 'Sold'
    },
    {
      id: 8,
      title: 'Sketch 2',
      category: "sketches",
      image: "images/WhatsApp Image 2025-04-13 at 12.41.57_77b2fd8b.jpg",
      Dimension: '35*35 cm',
      Medium: 'Oil on Canvas',
      Status: 'Sold'
    },
    {
      id: 9,
      title: 'Sketch 3',
      category: "sketches",
      image: "images/WhatsApp Image 2025-04-13 at 12.41.57_ce85a0dd.jpg",
      Dimension: '35*35 cm',
      Medium: 'Oil on Canvas',
      Status: 'Sold'
    },
    {
      id: 10,
      title: 'Sketch 4',
      category: "sketches",
      image: "images/WhatsApp Image 2025-04-13 at 12.41.58_0efce380.jpg",
      Dimension: '22*30cm',
      Medium: 'Charcoal on Toned paper',
      Status: 'Sold'
    },
     {
      id: 11,
      title: 'Pegion',
      category: "sketches",
      image: "images/new pegion.jpg",
      Dimension: '35*35 cm',
      Medium: 'Charcoal on Toned paper',
      Status: ''
    },
    {
      id: 12,
      title: 'African Bee-eater',
      category: "sketches",
      image: "images/african_bee_eater.jpg",
      Dimension: '21*30cm',
      Medium: 'Charcoal on Toned paper',
      Status: 'Sold'
    },
     {
      id: 13,
      title: 'Mawimbi Kiasi',
      category: "painting",
      image: "images/mawimbi kiasi.jpg",
      Dimension: '55*65cm',
      Medium: 'Oil on canvas ',
      Status: 'Sold'
    },

  ];
  const categories = ["all", "painting", "sketches", "digital"];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const filteredItems =
    activeCategory === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && menuOpen) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [menuOpen]);

  let message;

  const [username, setUsername] = useState("");
  const [userMessage, setUserMessage] = useState("");

  const handleNameChange = (event) => {
    setUsername(event.target.value);
  };
  const handleMessageChange = (event) => {
    setUserMessage(event.target.value);
  };

  const sendMessage = () => {
    const message = encodeURIComponent(
      `Hey there Elvis, my name is ${username}. ${userMessage}`
    );
    const whatsappURL = `https://wa.me/254707740647?text=${message}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="app">
      <header>
        <div className="logo">
          <img
            src="/images/WhatsApp Image 2025-03-05 at 13.03.36_ac158cb7.jpg"
            alt="artist"
          />
        </div>
        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <nav className={menuOpen ? "active" : ""}>
          <ul>
            <li>
              <a href="#works">Works</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#exhibitions">Exhibitions</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>

      <section className="hero">
        <div>
          <video autoPlay muted loop playsInline className="background-video">
            <source
              src="/video/WhatsApp Video 2025-03-05 at 13.03.40_aa219fc0.mp4"
              type="video/mp4"
            />
            <br />
            <br />
          </video>
        </div>
        <div className="hero-text">
          <h2>Creating Art That Speaks</h2>
          <p>
            Exploring the boundaries between reality and imagination through
            various mediums.
          </p>
        </div>
      </section>

      <section id="works" className="portfolio">
        <div className="filter-controls">
          {categories.map((category) => (
            <button
              key={category}
              className={activeCategory === category ? "active" : ""}
              onClick={() => setActiveCategory(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        <div className="portfolio-grid">
          {filteredItems.map((item) => (
            <div className="portfolio-item" key={item.id}>
              <div className="portfolio-image">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="cont">
                <div className="portfolio-info">
                  <h3>{item.title}</h3>
                  <p>
                    {item.category}
                  </p>
                  <div className="meta-info">
                    <p><span>Dimension : </span> {item.Dimension}</p>
                    <p><span>Medium : </span> {item.Medium}</p>
                    <p><span>Status : </span> {item.Status}</p>
                  </div>

                </div>
              </div>

              <div>
                <WhatsAppButton
                  phoneNumber="254707740647"
                  itemTitle={item.title}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="about">
        <div className="about-image">
          <img src="images/WhatsApp Image 2025-04-13 at 12.41.23_4041a579.jpg" alt="Artist portrait" />
        </div>
        <div className="about-text">
          <h2>About Elvis</h2>
          <p>
            <p>I am a contemporary oil painter whose works are evident by a profound exploration of light, texture, and emotion. Sourcing inspiration from nature, the human form, everyday life, and inter-personal interactions.</p>
            
            <p>My works invite viewers to experience familiar subjects in new and enticing ways. With a skilful display of the mediums (charcoal or oil), I am able to create vibrant and evocative works that show realism with an expressive, personal touch.</p>

            <p>I am drawn to curatorial practices and exhibitions that tend to promote cultural awareness and as well provoke a conversation from the audience.</p>

            <p>My works have been exhibited in the Nairobi National Museum of Kenya Art Gallery and in various Kenyan group exhibitions and art shows across Africa.</p>
          </p>
        </div>
      </section>

      <section id="exhibitions" className="exhibitions">
        <h2>Exhibitions</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-content">
              <h3>Solo Exhibition: &quot;Inner Landscapes&quot;</h3>
              <h4>Modern Art Gallery, Nairobi</h4>
              <p>June - August 2024</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-content">
              <h3>Group Show: &quot;Perspectives&quot;</h3>
              <h4>Contemporary Art Space, Kisumu</h4>
              <p>March - May 2023</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-content">
              <h3>Biennale Participation</h3>
              <h4>International Art Festival, Mombasa</h4>
              <p>September - November 2022</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-content">
              <h3>Featured Artist</h3>
              <h4>Emerging Talents Gallery, Nakuru</h4>
              <p>January - February 2022</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <h2>Get in Touch</h2>
        <div className="contact-container">
          <div className="contact-info">
            <p>For inquiries about artworks, exhibitions, or commissions:</p>
            <p>Email: <a href="rambo.3lvis@gmail.com"></a>rambo.3lvis@gmail.com</p>
            <p>Studio: Home Studio</p>
            <div className="social-links">
              <a href="https://www.instagram.com/elvis.rambo?igsh=YTM5Nmc1bHU4dDg1" id="ig" className="social-icon">
                <FaInstagramSquare />
              </a>
              <a href="https://x.com/OneElofatime?t=kSVo6nuTO40bzBzhN8drIg&s=09" id="x" className="social-icon">
                <FaSquareXTwitter />
              </a>

            </div>
          </div>
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text"
                id="name"
                name="name"
                value={username}
                onChange={handleNameChange}
                required />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={userMessage}
                onChange={handleMessageChange}
                rows="5"
                required
              ></textarea>
            </div>
            <button type="submit" onClick={sendMessage} className="submit-btn">
              Send Whatsapp Message
            </button>
          </form>
        </div>
      </section>

      <footer>
        <div className="footer-content">
          <p>&copy; 2025 Elvis All rights reserved.</p>
          <div className="footer-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Use</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
