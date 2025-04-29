import "./styles.css";

const LandingPage1 = () => {
  return (
    <>
      <nav className="nav-bar">
        <div className="nav-bar__logo">
          <h1>LOGO</h1>
        </div>
        <nav className="nav-bar__nav-items">
          <ul className="nav-bar__nav-list">
            <li>
              <a href="#features">FEATURES</a>
            </li>
            <li>
              <a href="#about">ABOUT</a>
            </li>
            <li>
              <a href="#services">SERVICES</a>
            </li>
            <li>
              <a href="#gallery">GALLERY</a>
            </li>
            <li>
              <a href="#testimonials">TESTIMONIALS</a>
            </li>
            <li>
              <a href="#team">TEAM</a>
            </li>
            <li>
              <a href="#contact">CONTACT</a>
            </li>
          </ul>
        </nav>
      </nav>
      <div className="container">
        <div className="hero-section">
          <div className="hero-section__background"></div>
          <section className="hero-section__text">
            <h1>YOUR AWESOME LANDING PAGE</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              nam, accusamus quisquam maiores distinctio voluptates sequi
              dolores repudiandae at porro fuga? Porro in esse ratione corrupti
              modi dignissimos asperiores necessitatibus.
            </p>
            <button className="learn-more">
              <a href="#features">LEARN MORE</a>
            </button>
          </section>
        </div>
        <div className="features-section" id="features">
          <div className="features-section__text">
            <h1>FEATURES</h1>
          </div>
          <div className="features-section__boxes">
            <div className="features-section__boxes__box">
              <div className="features-section__boxes__box__svg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={60}
                  height={60}
                  viewBox="0 0 16 16"
                >
                  <path
                    fill="white"
                    d="M5.5 3.5a2.5 2.5 0 1 1 5 0a2.5 2.5 0 0 1-5 0m1 3.5A1.5 1.5 0 0 0 5 8.5V11a3 3 0 1 0 6 0V8.5A1.5 1.5 0 0 0 9.5 7zm-2.444.97A2.5 2.5 0 0 0 4 8.5V11a4 4 0 0 0 1.213 2.87l-.1.028a3 3 0 0 1-3.673-2.121l-.389-1.45A1.5 1.5 0 0 1 2.112 8.49zm6.73 5.9A4 4 0 0 0 12 11V8.5q-.001-.274-.056-.53l1.943.52a1.5 1.5 0 0 1 1.061 1.838l-.388 1.449a3 3 0 0 1-3.773 2.093M1 5a2 2 0 1 1 4 0a2 2 0 0 1-4 0m10 0a2 2 0 1 1 4 0a2 2 0 0 1-4 0"
                  ></path>
                </svg>
              </div>
              <div className="features-section__boxes__box__text">
                <h2>Lorem ipsum</h2>
                <p>
                  Lorem ipsum dolor sit amet placerat facilisis felis mi in
                  tempus eleifend pellentesque natoque etiam.
                </p>
              </div>
            </div>
            <div className="features-section__boxes__box">
              <div className="features-section__boxes__box__svg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={60}
                  height={60}
                  viewBox="0 0 20 20"
                >
                  <path
                    fill="white"
                    d="M14.158 1.026a.5.5 0 0 1 .317.632l-.5 1.5a.5.5 0 0 1-.95-.316l.5-1.5a.5.5 0 0 1 .633-.316m3.697 1.828a.5.5 0 1 0-.708-.707l-2 2a.5.5 0 0 0 .707.707zm-10.248.292a2 2 0 0 1 3.261-.515l6.587 6.98a2 2 0 0 1-.648 3.203L12.87 14.55A3.504 3.504 0 0 1 9.5 19a3.5 3.5 0 0 1-2.975-1.655l-1.2.529a1.5 1.5 0 0 1-1.661-.308l-1.222-1.21a1.5 1.5 0 0 1-.299-1.71zm-.154 13.789a2.5 2.5 0 0 0 4.488-1.977zM17 6a.5.5 0 0 0 0 1h1.5a.5.5 0 1 0 0-1z"
                  ></path>
                </svg>
              </div>
              <div className="features-section__boxes__box__text">
                <h2>Lorem ipsum</h2>
                <p>
                  Lorem ipsum dolor sit amet placerat facilisis felis mi in
                  tempus eleifend pellentesque natoque etiam.
                </p>
              </div>
            </div>
            <div className="features-section__boxes__box">
              <div className="features-section__boxes__box__svg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={60}
                  height={60}
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="white"
                    d="M4 18h2v4.081L11.101 18H16c1.103 0 2-.897 2-2V8c0-1.103-.897-2-2-2H4c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2"
                  ></path>
                  <path
                    fill="white"
                    d="M20 2H8c-1.103 0-2 .897-2 2h12c1.103 0 2 .897 2 2v8c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2"
                  ></path>
                </svg>
              </div>
              <div className="features-section__boxes__box__text">
                <h2>Lorem ipsum</h2>
                <p>
                  Lorem ipsum dolor sit amet placerat facilisis felis mi in
                  tempus eleifend pellentesque natoque etiam.
                </p>
              </div>
            </div>
            <div className="features-section__boxes__box">
              <div className="features-section__boxes__box__svg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={60}
                  height={60}
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="white"
                    d="M7.5 5.6L5 7l1.4-2.5L5 2l2.5 1.4L10 2L8.6 4.5L10 7zm12 9.8L22 14l-1.4 2.5L22 19l-2.5-1.4L17 19l1.4-2.5L17 14zM22 2l-1.4 2.5L22 7l-2.5-1.4L17 7l1.4-2.5L17 2l2.5 1.4zm-8.66 10.78l2.44-2.44l-2.12-2.12l-2.44 2.44zm1.03-5.49l2.34 2.34c.39.37.39 1.02 0 1.41L5.04 22.71c-.39.39-1.04.39-1.41 0l-2.34-2.34c-.39-.37-.39-1.02 0-1.41L12.96 7.29c.39-.39 1.04-.39 1.41 0"
                  ></path>
                </svg>
              </div>
              <div className="features-section__boxes__box__text">
                <h2>Lorem ipsum</h2>
                <p>
                  Lorem ipsum dolor sit amet placerat facilisis felis mi in
                  tempus eleifend pellentesque natoque etiam.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="about-section" id="about">
          <div className="about-section__left"></div>
          <div className="about-section__right">
            <div className="about-section__right__text">
              <h1>ABOUT US</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Tempore quas facilis recusandae et. Consequatur quae
                reprehenderit doloremque. Voluptatibus sit facilis numquam, unde
                laudantium provident excepturi porro omnis beatae? Minus,
                corporis! Ipsum iste nostrum esse itaque laborum fugit deleniti
                tempore, sapiente recusandae. Adipisci, ea iste consectetur
                dolores maxime libero quisquam aliquam odit aspernatur labore?
                Minus unde iusto deserunt facere pariatur sunt.
              </p>
            </div>
            <div className="about-section__right__list">
              <h2>Why Choose Us?</h2>
              <div className="about-section__right__lists">
                <div className="about-section__right__list__left">
                  <ul>
                    <li>lorem ipsum</li>
                    <li>lorem ipsum dolor</li>
                    <li>lorem ipsum labore</li>
                    <li>lorem ipsum exa</li>
                  </ul>
                </div>
                <div className="about-section__right__list__right">
                  <ul>
                    <li>lorem ipsum ullamco</li>
                    <li>lorem ipsum dolor</li>
                    <li>lorem ipsum laborte</li>
                    <li>lorem ipsum exem</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="services-section" id="services">
          <div className="services-section__text">
            <h1>OUR SERVICES</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cim
              libero repellat, sunt est reprehenderit eum consectetur.
            </p>
          </div>
          <div className="services-section__boxes">
            <div className="services-section__boxes__box">
              <div className="services-section__boxes__box__svg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={40}
                  height={40}
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M1 5h3m3.5 0h3m3 0h3M20 5h3M2.5 5l6 15l6-15m-5 0l6 15l6-15"
                  ></path>
                </svg>
              </div>

              <div className="services-section__boxes__box__text">
                <h2>lorem ipsum</h2>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius
                  placeat sit iusto rem.
                </p>
              </div>
            </div>
            <div className="services-section__boxes__box">
              <div className="services-section__boxes__box__svg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={40}
                  height={40}
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="white"
                    d="M17 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2M1 2v2h2l3.6 7.59l-1.36 2.45c-.15.28-.24.61-.24.96a2 2 0 0 0 2 2h12v-2H7.42a.25.25 0 0 1-.25-.25q0-.075.03-.12L8.1 13h7.45c.75 0 1.41-.42 1.75-1.03l3.58-6.47c.07-.16.12-.33.12-.5a1 1 0 0 0-1-1H5.21l-.94-2M7 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2"
                  ></path>
                </svg>
              </div>
              <div className="services-section__boxes__box__text">
                <h2>lorem ipsum</h2>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius
                  placeat sit iusto rem.
                </p>
              </div>
            </div>
            <div className="services-section__boxes__box">
              <div className="services-section__boxes__box__svg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={40}
                  height={40}
                  viewBox="0 0 1024 1024"
                >
                  <path
                    fill="white"
                    d="M544 864V672h128L512 480L352 672h128v192H320v-1.6c-5.376.32-10.496 1.6-16 1.6A240 240 0 0 1 64 624c0-123.136 93.12-223.488 212.608-237.248A239.81 239.81 0 0 1 512 192a239.87 239.87 0 0 1 235.456 194.752c119.488 13.76 212.48 114.112 212.48 237.248a240 240 0 0 1-240 240c-5.376 0-10.56-1.28-16-1.6v1.6z"
                  ></path>
                </svg>
              </div>
              <div className="services-section__boxes__box__text">
                <h2>lorem ipsum</h2>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius
                  placeat sit iusto rem.
                </p>
              </div>
            </div>
            <div className="services-section__boxes__box">
              <div className="services-section__boxes__box__svg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={40}
                  height={40}
                  viewBox="0 0 256 256"
                >
                  <path
                    fill="white"
                    d="M160 129.89L175.06 160h-30.12l6.36-12.7ZM224 48v160a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16m-16.84 140.42l-40-80a8 8 0 0 0-14.32 0l-13.18 26.38a62.3 62.3 0 0 1-23.61-10A79.6 79.6 0 0 0 135.6 80H152a8 8 0 0 0 0-16h-40v-8a8 8 0 0 0-16 0v8H56a8 8 0 0 0 0 16h63.48a63.73 63.73 0 0 1-15.3 34.05a66 66 0 0 1-9-13.61a8 8 0 0 0-14.32 7.12a81.8 81.8 0 0 0 11.4 17.15A63.6 63.6 0 0 1 56 136a8 8 0 0 0 0 16a79.56 79.56 0 0 0 48.11-16.13a78.3 78.3 0 0 0 28.18 13.66l-19.45 38.89a8 8 0 0 0 14.32 7.16l9.78-19.58h46.12l9.78 19.58a8 8 0 1 0 14.32-7.16"
                  ></path>
                </svg>
              </div>
              <div className="services-section__boxes__box__text">
                <h2>lorem ipsum</h2>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius
                  placeat sit iusto rem.
                </p>
              </div>
            </div>
            <div className="services-section__boxes__box">
              <div className="services-section__boxes__box__svg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={40}
                  height={40}
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="white"
                    d="M20.56 3.91c.59.59.59 1.54 0 2.12l-3.89 3.89l2.12 9.19l-1.41 1.42l-3.88-7.43L9.6 17l.36 2.47l-1.07 1.06l-1.76-3.18l-3.19-1.77L5 14.5l2.5.37L11.37 11L3.94 7.09l1.42-1.41l9.19 2.12l3.89-3.89c.56-.58 1.56-.58 2.12 0"
                  ></path>
                </svg>
              </div>
              <div className="services-section__boxes__box__text">
                <h2>lorem ipsum</h2>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius
                  placeat sit iusto rem.
                </p>
              </div>
            </div>
            <div className="services-section__boxes__box">
              <div className="services-section__boxes__box__svg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={40}
                  height={40}
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="white"
                    d="M13 11V2.1q3.575.375 6.038 2.85T21.9 11zm-1.975 10.875q-3.8-.375-6.363-3.2T2.1 12q0-3.875 2.563-6.7t6.362-3.2zm1.975 0v-8.9h8.9q-.35 3.575-2.838 6.063T13 21.875"
                  ></path>
                </svg>
              </div>
              <div className="services-section__boxes__box__text">
                <h2>lorem ipsum</h2>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius
                  placeat sit iusto rem.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="gallery-section" id="gallery">
          <div className="gallery-section__text">
            <h1>GALLERY</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing</p>
          </div>
          <div className="gallery-section__image-box">
            <div className="gallery-section__image-box__image"></div>
            <div className="gallery-section__image-box__image"></div>
            <div className="gallery-section__image-box__image"></div>
            <div className="gallery-section__image-box__image"></div>
          </div>
        </div>
        <div className="testimonials-section" id="testimonials">
          <div className="testimonials-section__text">
            <h1>WHAT OUR CLIENTS SAY</h1>
          </div>
          <div className="testimonials-section__boxes">
            <div className="testimonials-section__boxes__box">
              <div className="testimonials-section__boxes__box__image-container">
                <div className="testimonials-section__boxes__box__image-container__image">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={70}
                    height={70}
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="#242424"
                      fillRule="evenodd"
                      d="M256 42.667A213.333 213.333 0 0 1 469.334 256c0 117.821-95.513 213.334-213.334 213.334c-117.82 0-213.333-95.513-213.333-213.334C42.667 138.18 138.18 42.667 256 42.667m21.334 234.667h-42.667c-52.815 0-98.158 31.987-117.715 77.648c30.944 43.391 81.692 71.685 139.048 71.685s108.104-28.294 139.049-71.688c-19.557-45.658-64.9-77.645-117.715-77.645M256 106.667c-35.346 0-64 28.654-64 64s28.654 64 64 64s64-28.654 64-64s-28.653-64-64-64"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="testimonials-section__boxes__box__quote-box">
                <q>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate dolores libero quidem. Sequi incidunt facilis est
                  eos temporibus omnis praesentium necessitatibus, aspernatur
                  doloremque, quod nam hic ratione unde quae nisi?
                </q>
                <div className="testimonials-section__boxes__box__quote-author">
                  - John Doe
                </div>
              </div>
            </div>
            <div className="testimonials-section__boxes__box">
              <div className="testimonials-section__boxes__box__image-container">
                <div className="testimonials-section__boxes__box__image-container__image">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={70}
                    height={70}
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="#242424"
                      fillRule="evenodd"
                      d="M256 42.667A213.333 213.333 0 0 1 469.334 256c0 117.821-95.513 213.334-213.334 213.334c-117.82 0-213.333-95.513-213.333-213.334C42.667 138.18 138.18 42.667 256 42.667m21.334 234.667h-42.667c-52.815 0-98.158 31.987-117.715 77.648c30.944 43.391 81.692 71.685 139.048 71.685s108.104-28.294 139.049-71.688c-19.557-45.658-64.9-77.645-117.715-77.645M256 106.667c-35.346 0-64 28.654-64 64s28.654 64 64 64s64-28.654 64-64s-28.653-64-64-64"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="testimonials-section__boxes__box__quote-box">
                <q>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate dolores libero quidem. Sequi incidunt facilis est
                  eos temporibus omnis praesentium necessitatibus, aspernatur
                  doloremque, quod nam hic ratione unde quae nisi?
                </q>
                <div className="testimonials-section__boxes__box__quote-author">
                  - John Doe
                </div>
              </div>
            </div>
            <div className="testimonials-section__boxes__box">
              <div className="testimonials-section__boxes__box__image-container">
                <div className="testimonials-section__boxes__box__image-container__image">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={70}
                    height={70}
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="#242424"
                      fillRule="evenodd"
                      d="M256 42.667A213.333 213.333 0 0 1 469.334 256c0 117.821-95.513 213.334-213.334 213.334c-117.82 0-213.333-95.513-213.333-213.334C42.667 138.18 138.18 42.667 256 42.667m21.334 234.667h-42.667c-52.815 0-98.158 31.987-117.715 77.648c30.944 43.391 81.692 71.685 139.048 71.685s108.104-28.294 139.049-71.688c-19.557-45.658-64.9-77.645-117.715-77.645M256 106.667c-35.346 0-64 28.654-64 64s28.654 64 64 64s64-28.654 64-64s-28.653-64-64-64"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="testimonials-section__boxes__box__quote-box">
                <q>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate dolores libero quidem. Sequi incidunt facilis est
                  eos temporibus omnis praesentium necessitatibus, aspernatur
                  doloremque, quod nam hic ratione unde quae nisi?
                </q>
                <div className="testimonials-section__boxes__box__quote-author">
                  - John Doe
                </div>
              </div>
            </div>
            <div className="testimonials-section__boxes__box">
              <div className="testimonials-section__boxes__box__image-container">
                <div className="testimonials-section__boxes__box__image-container__image">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={70}
                    height={70}
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="#242424"
                      fillRule="evenodd"
                      d="M256 42.667A213.333 213.333 0 0 1 469.334 256c0 117.821-95.513 213.334-213.334 213.334c-117.82 0-213.333-95.513-213.333-213.334C42.667 138.18 138.18 42.667 256 42.667m21.334 234.667h-42.667c-52.815 0-98.158 31.987-117.715 77.648c30.944 43.391 81.692 71.685 139.048 71.685s108.104-28.294 139.049-71.688c-19.557-45.658-64.9-77.645-117.715-77.645M256 106.667c-35.346 0-64 28.654-64 64s28.654 64 64 64s64-28.654 64-64s-28.653-64-64-64"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="testimonials-section__boxes__box__quote-box">
                <q>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate dolores libero quidem. Sequi incidunt facilis est
                  eos temporibus omnis praesentium necessitatibus, aspernatur
                  doloremque, quod nam hic ratione unde quae nisi?
                </q>
                <div className="testimonials-section__boxes__box__quote-author">
                  - John Doe
                </div>
              </div>
            </div>
            <div className="testimonials-section__boxes__box">
              <div className="testimonials-section__boxes__box__image-container">
                <div className="testimonials-section__boxes__box__image-container__image">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={70}
                    height={70}
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="#242424"
                      fillRule="evenodd"
                      d="M256 42.667A213.333 213.333 0 0 1 469.334 256c0 117.821-95.513 213.334-213.334 213.334c-117.82 0-213.333-95.513-213.333-213.334C42.667 138.18 138.18 42.667 256 42.667m21.334 234.667h-42.667c-52.815 0-98.158 31.987-117.715 77.648c30.944 43.391 81.692 71.685 139.048 71.685s108.104-28.294 139.049-71.688c-19.557-45.658-64.9-77.645-117.715-77.645M256 106.667c-35.346 0-64 28.654-64 64s28.654 64 64 64s64-28.654 64-64s-28.653-64-64-64"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="testimonials-section__boxes__box__quote-box">
                <q>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate dolores libero quidem. Sequi incidunt facilis est
                  eos temporibus omnis praesentium necessitatibus, aspernatur
                  doloremque, quod nam hic ratione unde quae nisi?
                </q>
                <div className="testimonials-section__boxes__box__quote-author">
                  - John Doe
                </div>
              </div>
            </div>
            <div className="testimonials-section__boxes__box">
              <div className="testimonials-section__boxes__box__image-container">
                <div className="testimonials-section__boxes__box__image-container__image">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={70}
                    height={70}
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="#242424"
                      fillRule="evenodd"
                      d="M256 42.667A213.333 213.333 0 0 1 469.334 256c0 117.821-95.513 213.334-213.334 213.334c-117.82 0-213.333-95.513-213.333-213.334C42.667 138.18 138.18 42.667 256 42.667m21.334 234.667h-42.667c-52.815 0-98.158 31.987-117.715 77.648c30.944 43.391 81.692 71.685 139.048 71.685s108.104-28.294 139.049-71.688c-19.557-45.658-64.9-77.645-117.715-77.645M256 106.667c-35.346 0-64 28.654-64 64s28.654 64 64 64s64-28.654 64-64s-28.653-64-64-64"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="testimonials-section__boxes__box__quote-box">
                <q>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate dolores libero quidem. Sequi incidunt facilis est
                  eos temporibus omnis praesentium necessitatibus, aspernatur
                  doloremque, quod nam hic ratione unde quae nisi?
                </q>
                <div className="testimonials-section__boxes__box__quote-author">
                  - John Doe
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="team-section" id="team">
          <div className="team-section__text">
            <h1>MEET THE TEAM</h1>
            <p>Lorem ipsum dolor sit amet, constasr adiset elit sed</p>
          </div>
          <div className="team-section__boxes">
            <div className="team-section__boxes__box">
              <div className="team-section__boxes__box__image img-1"></div>
              <div className="team-section__boxes__box__name">
                <h2>John Doe</h2>
                <p>Software Engineer</p>
              </div>
            </div>
            <div className="team-section__boxes__box">
              <div className="team-section__boxes__box__image img-2"></div>
              <div className="team-section__boxes__box__name">
                <h2>John Doe</h2>
                <p>Software Engineer</p>
              </div>
            </div>
            <div className="team-section__boxes__box">
              <div className="team-section__boxes__box__image img-3"></div>
              <div className="team-section__boxes__box__name">
                <h2>John Doe</h2>
                <p>Software Engineer</p>
              </div>
            </div>
            <div className="team-section__boxes__box">
              <div className="team-section__boxes__box__image img-4"></div>
              <div className="team-section__boxes__box__name">
                <h2>John Doe</h2>
                <p>Software Engineer</p>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-section" id="contact">
          <div className="contact-section__top">
            <div className="contact-section__top__left">
              <div className="contact-section__top__left__text">
                <h1>GET IN TOUCH</h1>
                <p>
                  Please fill out the form below to send us an email and we will
                  get back to you as soon as possible
                </p>
              </div>
              <div className="contact-section__top__left__form">
                <form onSubmit={(e) => e.preventDefault()}>
                  <input type="text" placeholder="Name" />
                  <input type="text" placeholder="Email" />
                  <br />
                  <textarea placeholder="Message"></textarea>
                  <br />
                  <button
                    className="submit"
                    type="submit"
                    onSubmit={(e) => e.preventDefault()}
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
            <div className="contact-section__top__right">
              <div className="contact-section__top__right__box">
                <div className="contact-section__top__right__box__title">
                  <div className="contact-section__top__right__box__svg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      viewBox="0 0 32 32"
                    >
                      <path
                        fill="#e3e3e3"
                        d="M16 3.5A7.5 7.5 0 0 0 8.5 11c0 4.143 7.5 18.12 7.5 18.12S23.5 15.144 23.5 11A7.5 7.5 0 0 0 16 3.5m0 11.084a3.583 3.583 0 1 1 0-7.168a3.583 3.583 0 1 1 0 7.168"
                      ></path>
                    </svg>
                  </div>
                  <div className="contact-section__top__right__box__header">
                    <h4>Address</h4>
                  </div>
                </div>
                <div className="contact-section__top__right__box__info">
                  4321 California St, San Fransisco, CA 1234
                </div>
              </div>
              <div className="contact-section__top__right__box">
                <div className="contact-section__top__right__box__title">
                  <div className="contact-section__top__right__box__svg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                    >
                      <g fill="none" fillRule="evenodd">
                        <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path>
                        <path
                          fill="#e3e3e3"
                          d="M16.552 22.133c-1.44-.053-5.521-.617-9.795-4.89c-4.273-4.274-4.836-8.354-4.89-9.795c-.08-2.196 1.602-4.329 3.545-5.162a1.47 1.47 0 0 1 1.445.159c1.6 1.166 2.704 2.93 3.652 4.317a1.504 1.504 0 0 1-.256 1.986l-1.951 1.449a.48.48 0 0 0-.142.616c.442.803 1.228 1.999 2.128 2.899s2.153 1.738 3.012 2.23a.483.483 0 0 0 .644-.162l1.27-1.933a1.503 1.503 0 0 1 2.056-.332c1.407.974 3.049 2.059 4.251 3.598a1.47 1.47 0 0 1 .189 1.485c-.837 1.953-2.955 3.616-5.158 3.535"
                        ></path>
                      </g>
                    </svg>
                  </div>
                  <div className="contact-section__top__right__box__header">
                    <h4>Phone</h4>
                  </div>
                </div>
                <div className="contact-section__top__right__box__info">
                  +1 234 567 890
                </div>
              </div>
              <div className="contact-section__top__right__box">
                <div className="contact-section__top__right__box__title">
                  <div className="contact-section__top__right__box__svg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#e3e3e3"
                        d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m-.4 4.25l-7.07 4.42c-.32.2-.74.2-1.06 0L4.4 8.25a.85.85 0 1 1 .9-1.44L12 11l6.7-4.19a.85.85 0 1 1 .9 1.44"
                      ></path>
                    </svg>
                  </div>
                  <div className="contact-section__top__right__box__header">
                    <h4>Email</h4>
                  </div>
                </div>
                <div className="contact-section__top__right__box__info">
                  email@company.com
                </div>
              </div>
            </div>
          </div>
          <div className="contact-section__bottom">
            <div className="contact-section__bottom__boxes">
              <div className="contact-section__bottom__boxes__box">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={30}
                  height={30}
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#e3e3e3"
                    d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4z"
                  ></path>
                </svg>
              </div>
              <div className="contact-section__bottom__boxes__box">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={25}
                  height={25}
                  viewBox="0 0 14 14"
                >
                  <g fill="none">
                    <g clipPath="url(#primeTwitter0)">
                      <path
                        fill="#e3e3e3"
                        d="M11.025.656h2.147L8.482 6.03L14 13.344H9.68L6.294 8.909l-3.87 4.435H.275l5.016-5.75L0 .657h4.43L7.486 4.71zm-.755 11.4h1.19L3.78 1.877H2.504z"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="primeTwitter0">
                        <path fill="#fff" d="M0 0h14v14H0z"></path>
                      </clipPath>
                    </defs>
                  </g>
                </svg>
              </div>
              <div className="contact-section__bottom__boxes__box">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={30}
                  height={30}
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#e3e3e3"
                    d="m10 15l5.19-3L10 9zm11.56-7.83c.13.47.22 1.1.28 1.9c.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83c-.25.9-.83 1.48-1.73 1.73c-.47.13-1.33.22-2.65.28c-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44c-.9-.25-1.48-.83-1.73-1.73c-.13-.47-.22-1.1-.28-1.9c-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83c.25-.9.83-1.48 1.73-1.73c.47-.13 1.33-.22 2.65-.28c1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44c.9.25 1.48.83 1.73 1.73"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage1;
