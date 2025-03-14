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
      year: "2023",
    },
    {
      id: 2,
      title: "Struggle - The scuffle to beat suffering is real.",
      category: "photography",
      image: "/images/WhatsApp Image 2025-03-05 at 13.03.36_bdc62120.jpg",
      year: "2022",
    },
    {
      id: 3,
      title:
        "Age of a River - The only way a man gets to relax his brain and his heart is through Fishing by the Riverside.",
      category: "painting",
      image: "/images/WhatsApp Image 2025-03-05 at 13.03.37_9bf8e58b.jpg",
      year: "2024",
    },
    {
      id: 4,
      title: "Who's the King? Stay in your Lane.",
      category: "digital",
      image: "/images/WhatsApp Image 2025-03-05 at 13.03.38_0e855cc5.jpg",
      year: "2023",
    },
    {
      id: 5,
      title:
        "I can't breathe - From time to time, we need of our emotions and let them flow with the river.",
      category: "painting",
      image: "/images/WhatsApp Image 2025-03-05 at 13.03.38_6889a4a8.jpg",
      year: "2021",
    },
    {
      id: 6,
      title:
        "Coexistence and Conflict - Strength and Power cannot be based on the age or size. The greatest weapon we can use is our minds.",
      category: "painting",
      image: "/images/WhatsApp Image 2025-03-05 at 13.03.38_f0de7708.jpg",
      year: "2024",
    },
  ];
  const categories = ["all", "painting", "photography", "digital"];

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
    const whatsappURL = `https://wa.me/254114547447?text=${message}`;
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
                    {item.category} | {item.year}
                  </p>
                </div>
                <div>
                  <WhatsAppButton
                    phoneNumber="254114547447"
                    itemTitle={item.title}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="about">
        <div className="about-image">
          <img src="/images/WhatsApp Image 2025-03-05 at 13.03.36_ac158cb7.jpg" alt="Artist portrait" />
        </div>
        <div className="about-text">
          <h2>About Elvis</h2>
          <p>
            Elvis is an incredibly talented painter based in Nairobi, known for
            his ability to bring emotions to life through his brushstrokes. With
            a deep passion for art, he masterfully blends colors, textures, and
            imagination to create captivating pieces that tell unique stories.
          </p>
          <p>
            From expressive portraits to breathtaking landscapes, Elvis’s work
            reflects both technical skill and raw creativity. Each painting is a
            glimpse into his artistic vision, offering viewers an immersive
            experience filled with depth and emotion.
          </p>
          <p>
            Driven by a love for artistic expression, Elvis continues to push
            boundaries, crafting pieces that inspire, evoke thought, and leave a
            lasting impression.
          </p>
        </div>
      </section>

      <section id="exhibitions" className="exhibitions">
        <h2>Exhibitions</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-content">
              <h3>Solo Exhibition: &quot;Inner Landscapes&quot;</h3>
              <h4>Modern Art Gallery, New York</h4>
              <p>June - August 2024</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-content">
              <h3>Group Show: &quot;Perspectives&quot;</h3>
              <h4>Contemporary Art Space, London</h4>
              <p>March - May 2023</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-content">
              <h3>Biennale Participation</h3>
              <h4>International Art Festival, Venice</h4>
              <p>September - November 2022</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-content">
              <h3>Featured Artist</h3>
              <h4>Emerging Talents Gallery, Berlin</h4>
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
            <p>Email: info@artistname.com</p>
            <p>Studio: 123 Art Street, Creative District</p>
            <div className="social-links">
              <a href="#" id="ig" className="social-icon">
                <FaInstagramSquare />
              </a>
              <a href="#" id="x" className="social-icon">
                <FaSquareXTwitter />
              </a>
              <a href="#" id="fb" className="social-icon">
                <FaFacebookSquare />
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
