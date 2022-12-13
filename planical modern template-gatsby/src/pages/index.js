import React from 'react'
import { Link } from 'gatsby'

import DangerousHTML from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import projectStyles from '../style.module.css'
import styles from './index.module.css'

const Home = (props) => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Planical modern template</title>
        <meta property="og:title" content="Planical modern template" />
      </Helmet>
      <nav className={styles['navbar']}>
        <img
          alt="image"
          src="/playground_assets/lynxstudios-300h.png"
          className={styles['image']}
        />
        <div className={styles['nav-content']}>
          <div className={styles['nav-links']}></div>
          <div
            id="open-mobile-menu"
            className={` ${styles['hamburger']} ${projectStyles['get-started']} `}
          >
            <img
              alt="image"
              src="9df4c1d2-c994-4c1e-a57e-b5a81d63ee6c"
              className={styles['image01']}
            />
          </div>
        </div>
        <div id="mobile-menu" className={styles['mobile-menu']}>
          <div className={styles['branding']}>
            <img
              alt="image"
              src="/playground_assets/planical7012-ttpb.svg"
              className={styles['image02']}
            />
            <div id="close-mobile-menu" className={styles['container1']}>
              <svg viewBox="0 0 1024 1024" className={styles['icon']}>
                <path d="M225.835 286.165l225.835 225.835-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l225.835-225.835 225.835 225.835c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-225.835-225.835 225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-225.835 225.835-225.835-225.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
              </svg>
            </div>
          </div>
          <div className={styles['nav-links1']}>
            <span className={projectStyles['nav-link']}>Features</span>
            <span className={projectStyles['nav-link']}>Why us</span>
            <span className={projectStyles['nav-link']}>Prices</span>
            <span className={projectStyles['nav-link']}>Contact</span>
          </div>
          <div className={projectStyles['get-started']}>
            <span className={styles['text']}>Get started</span>
          </div>
        </div>
        <div>
          <DangerousHTML
            html={`<script>
    /*
Mobile menu - Code Embed
*/

/* listenForUrlChangesMobileMenu() makes sure that if you changes pages inside your app, 
the mobile menu will still work*/

const listenForUrlChangesMobileMenu = () => {
    let url = location.href;
    document.body.addEventListener("click", () => {
        requestAnimationFrame(() => {
            if (url !== location.href) {
                runMobileMenuCodeEmbed();
                url = location.href;
            }
        });
    },
    true
    );
};

const runMobileMenuCodeEmbed = () => {
    // Mobile menu
    const mobileMenu = document.querySelector("#mobile-menu")

    // Buttons
    const closeButton = document.querySelector("#close-mobile-menu")
    const openButton = document.querySelector("#open-mobile-menu")

    // On openButton click, set the mobileMenu position left to -100vw
    openButton && openButton.addEventListener("click", function() {
        mobileMenu.style.transform = "translateX(0%)"
    })

    // On closeButton click, set the mobileMenu position to 0vw
    closeButton && closeButton.addEventListener("click", function() {
        mobileMenu.style.transform = "translateX(100%)"
    })
}

runMobileMenuCodeEmbed()
listenForUrlChangesMobileMenu()
</script>`}
          ></DangerousHTML>
        </div>
      </nav>
      <section className={styles['section']}>
        <div className={styles['hero']}>
          <div className={styles['content']}>
            <main className={styles['main']}>
              <header className={styles['header']}>
                <h1 className={styles['heading']}>
                  Expand your business to impossible
                </h1>
                <span className={styles['caption']}>
                  Time is your most valuable asset, stop wasting it. Explode
                  your revenue today!
                </span>
              </header>
              <div className={styles['buttons']}>
                <Link to="/contact" className={styles['navlink']}>
                  <div
                    className={` ${styles['get-started1']} ${projectStyles['button']} `}
                  >
                    <span className={styles['text01']}>Get started</span>
                  </div>
                </Link>
                <div
                  className={` ${styles['get-started2']} ${projectStyles['button']} `}
                >
                  <span className={styles['text02']}>Learn more</span>
                </div>
              </div>
            </main>
          </div>
          <div className={styles['image03']}></div>
        </div>
      </section>
      <section className={styles['section1']}>
        <h2 className={styles['text03']}>Who we are</h2>
        <div className={styles['features']}>
          <header
            className={` ${projectStyles['feature']} ${projectStyles['feature-active']} ${styles['feature']} `}
          >
            <h3 className={styles['text04']}>Perception</h3>
            <p className={styles['text05']}>
              We constantly look around the market to be the very first
              implementing the latest tactics.
            </p>
          </header>
          <header
            className={` ${projectStyles['feature']} ${styles['feature1']} `}
          >
            <h3 className={styles['text06']}>Persistance</h3>
            <p className={styles['text07']}>place text here</p>
          </header>
          <header
            className={` ${projectStyles['feature']} ${styles['feature2']} `}
          >
            <h3 className={styles['text08']}>Distinction</h3>
            <p className={styles['text09']}>
              We separate ourselves from our competitors to stand out.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
          </header>
        </div>
        <div className={styles['note']}>
          <div className={styles['content1']}>
            <main className={styles['main1']}>
              <h2 className={styles['heading1']}>Our Philosophy</h2>
              <p className={styles['paragraph']}>
                <span>
                  We believe that your Social Media presence is the most
                  valuable marketing asset you have. Without an excellent Social
                  Media presence, you will get crushed by your competition. 
                </span>
                <br></br>
                <br></br>
                <span>
                  With our help, our expertise and our systems, you can dominate
                  the market within just a couple of months. 
                </span>
                <br></br>
              </p>
            </main>
            <div className={styles['explore-more']}>
              <p className={styles['text15']}>Explore more -&gt;</p>
            </div>
          </div>
          <img
            alt="image"
            src="/playground_assets/who-we-are-image1.svg"
            className={styles['image04']}
          />
        </div>
      </section>
      <section className={styles['section2']}>
        <header className={styles['header1']}>
          <h2 className={styles['text16']}>What we offer</h2>
          <span className={styles['text17']}>
            Every project is different, we will discuss our strategy in depth on
            a live call.
          </span>
        </header>
        <section className={styles['note1']}>
          <div className={styles['container2']}>
            <img
              alt="image"
              src="/playground_assets/advertising-illustration.svg"
              className={styles['image05']}
            />
            <div className={styles['image06']}></div>
          </div>
          <div className={styles['content2']}>
            <div className={styles['main2']}>
              <div className={styles['heading2']}>
                <h2
                  className={` ${projectStyles['section-heading']} ${styles['heading3']} `}
                >
                  Targeted high converting ad campaigns
                </h2>
                <p className={projectStyles['section-description']}>
                  Tired of wasting money and time on unsuccessful ad campaigns?
                  We&apos;ve got you covered. We will implement very high
                  converting ad campaigns for your business.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </div>
            <div
              className={` ${styles['get-started3']} ${projectStyles['button']} `}
            >
              <span className={styles['text18']}>Get started</span>
            </div>
          </div>
        </section>
        <div className={styles['container3']}>
          <section className={styles['note2']}>
            <div className={styles['content3']}>
              <main className={styles['main3']}>
                <main className={styles['heading4']}>
                  <header className={styles['header2']}>
                    <h2 className={projectStyles['section-heading']}>
                      Rebranding of your current existing systems
                    </h2>
                    <p className={projectStyles['section-description']}>
                      Update your business into a modern profile. Completely up
                      to date with the latest features. 
                    </p>
                  </header>
                  <div className={styles['checkmarks']}></div>
                </main>
              </main>
              <div
                className={` ${styles['get-started4']} ${projectStyles['button']} `}
              >
                <span className={styles['text19']}>Get started</span>
              </div>
            </div>
          </section>
          <img
            alt="image"
            src="/playground_assets/facebook-page-analytics.svg"
            className={styles['image07']}
          />
          <img
            alt="image"
            src="/playground_assets/insta-page-analytics.svg"
            className={styles['image08']}
          />
        </div>
      </section>
      <footer className={styles['footer']}>
        <div className={styles['content4']}>
          <div className={styles['container4']}>
            <div className={styles['container5']}>
              <main className={styles['main-content']}>
                <div className={styles['socials']}>
                  <a
                    href="https://example.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className={styles['link4']}
                  >
                    <img
                      alt="image"
                      src="/playground_assets/linkedin-200h.png"
                      className={projectStyles['social']}
                    />
                  </a>
                  <a
                    href="https://example.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className={styles['link5']}
                  >
                    <img
                      alt="image"
                      src="/playground_assets/instagram-200h.png"
                      className={projectStyles['social']}
                    />
                  </a>
                  <a
                    href="https://example.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className={styles['link6']}
                  >
                    <img
                      alt="image"
                      src="/playground_assets/twitter-200h.png"
                      className={projectStyles['social']}
                    />
                  </a>
                </div>
                <section className={styles['copyright']}>
                  <span className={styles['text20']}>
                    © 2022 Blue Lynx Agency. All Rights Reserved.
                  </span>
                </section>
              </main>
            </div>
            <div className={styles['content5']}>
              <header className={styles['main4']}>
                <div className={styles['header3']}>
                  <img
                    alt="image"
                    src="/playground_assets/lynxstudios-300h.png"
                    className={styles['image09']}
                  />
                </div>
              </header>
              <div className={styles['container6']}>
                <span className={styles['caption1']}>
                  <span className={styles['text21']}>
                    Have any remaining questions? Don&apos;t hesitate to get in
                    contact!
                  </span>
                  <br></br>
                  <br></br>
                </span>
                <div
                  className={` ${styles['get-started5']} ${projectStyles['button']} `}
                >
                  <span className={styles['text24']}>Get started</span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles['container7']}>
            <div className={styles['container8']}></div>
          </div>
          <main className={styles['subscribe']}>
            <main className={styles['main5']}>
              <h1 className={styles['heading6']}>
                Subscribe to our newsletter
              </h1>
              <div className={styles['input-field']}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className={` ${styles['textinput']} ${projectStyles['input']} `}
                />
                <div
                  className={` ${styles['buy']} ${projectStyles['button']} `}
                >
                  <span className={styles['text25']}>-&gt;</span>
                  <span className={styles['text26']}>
                    <span>Subscribe now</span>
                    <br></br>
                  </span>
                </div>
              </div>
            </main>
            <h1 className={styles['notice']}>
              By subscribing to our newsletter you agree with our Terms and
              Conditions.
            </h1>
          </main>
          <section className={styles['copyright1']}>
            <span className={styles['text29']}>
              © 2022 Blue Lynx Agency. All Rights Reserved.
            </span>
          </section>
        </div>
      </footer>
      <div>
        <DangerousHTML
          html={`<script>
    /*
Accordion - Code Embed
*/

/* listenForUrlChangesAccordion() makes sure that if you changes pages inside your app,
the Accordions will still work*/

const listenForUrlChangesAccordion = () => {
      let url = location.href;
      document.body.addEventListener(
        "click",
        () => {
          requestAnimationFrame(() => {
            if (url !== location.href) {
              runAccordionCodeEmbed();
              url = location.href;
            }
          });
        },
        true
      );
    };


const runAccordionCodeEmbed = () => {
    const accordionContainers = document.querySelectorAll('[data-role="accordion-container"]'); // All accordion containers
    const accordionContents = document.querySelectorAll('[data-role="accordion-content"]'); // All accordion content
    const accordionIcons = document.querySelectorAll('[data-role="accordion-icon"]'); // All accordion icons

    accordionContents.forEach((accordionContent) => {
        accordionContent.style.display = "none"; //Hides all accordion contents
    });

    accordionContainers.forEach((accordionContainer, index) => {
        accordionContainer.addEventListener("click", () => {
            accordionContents.forEach((accordionContent) => {
            accordionContent.style.display = "none"; //Hides all accordion contents
            });

            accordionIcons.forEach((accordionIcon) => {
                accordionIcon.style.transform = "rotate(0deg)"; // Resets all icon transforms to 0deg (default)
            });

            accordionContents[index].style.display = "flex"; // Shows accordion content
            accordionIcons[index].style.transform = "rotate(180deg)"; // Rotates accordion icon 180deg
        });
    });
}

runAccordionCodeEmbed()
listenForUrlChangesAccordion()

/*
Here's what the above is doing:
    1. Selects all accordion containers, contents, and icons
    2. Hides all accordion contents
    3. Adds an event listener to each accordion container
    4. When an accordion container is clicked, it:
        - Hides all accordion contents
        - Resets all icon transforms to 0deg (default)
        - Checks if this container has class "accordion-open"
            - If it does, it removes class "accordion-open"
            - If it doesn't, it:
                - Removes class "accordion-open" from all containers
                - Adds class "accordion-open" to this container
                - Shows accordion content
                - Rotates accordion icon 180deg
*/
</script>`}
        ></DangerousHTML>
      </div>
      <img
        alt="image"
        src="/playground_assets/blue-cheetah-finished1-1100h.png"
        className={styles['image10']}
      />
    </div>
  )
}

export default Home
