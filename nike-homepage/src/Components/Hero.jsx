function Hero() {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>
          Your feet <br /> deserve <br />
          the best
        </h1>
        <p>
          Nike shoes combine style, performance, and innovation, empowering
          athletes and everyday wearers alike. With iconic designs and
          cutting-edge comfort, Nike inspires movement, confidence, and
          achievement in every step you take.
        </p>

        <div className="hero-btn">
          <button>Shop Now</button>
          <button className="secondary-btn">Category</button>
        </div>

        <div className="shopping">
          <p>Also available on </p>

          <div className="brand-icons">
            <img src="./amazon.png" alt="amazon-logo" />
            <img src="./flipkart.png" alt="flipkart-logo" />
          </div>
        </div>
      </div>

      <div className="hero-image">
        <img src="./hero-image.png" alt="hero-image" />
      </div>
    </main>
  );
}

export default Hero;
