import React from 'react'

import { Helmet } from 'react-helmet'

import projectStyles from '../style.module.css'
import styles from './contact.module.css'

const Contact = (props) => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Contact - Planical modern template</title>
        <meta
          property="og:title"
          content="Contact - Planical modern template"
        />
      </Helmet>
      <header data-thq="thq-navbar" className={styles['navbar-interactive']}>
        <div
          data-thq="thq-navbar-nav"
          data-role="Nav"
          className={styles['desktop-menu']}
        >
          <nav
            data-thq="thq-navbar-nav-links"
            data-role="Nav"
            className={styles['nav']}
          >
            <span className={styles['text']}>Home</span>
            <span className={styles['text01']}>Team</span>
          </nav>
        </div>
        <div data-thq="thq-navbar-btn-group" className={styles['btn-group']}>
          <button className={` ${styles['login']} ${projectStyles['button']} `}>
            Login
          </button>
          <button
            className={` ${projectStyles['button']} ${styles['register']} `}
          >
            Register
          </button>
        </div>
        <div data-thq="thq-mobile-menu" className={styles['mobile-menu']}>
          <div
            data-thq="thq-mobile-menu-nav"
            data-role="Nav"
            className={styles['nav1']}
          >
            <div className={styles['container1']}>
              <img
                alt="image"
                src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                className={styles['image']}
              />
              <div data-thq="thq-close-menu" className={styles['menu-close']}>
                <svg viewBox="0 0 1024 1024" className={styles['icon']}>
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav
              data-thq="thq-mobile-menu-nav-links"
              data-role="Nav"
              className={styles['nav2']}
            >
              <span className={styles['text02']}>About</span>
              <span className={styles['text03']}>Features</span>
              <span className={styles['text04']}>Pricing</span>
              <span className={styles['text05']}>Team</span>
              <span className={styles['text06']}>Blog</span>
            </nav>
            <div className={styles['container2']}>
              <button
                className={` ${styles['login1']} ${projectStyles['button']} `}
              >
                Login
              </button>
              <button className={projectStyles['button']}>Register</button>
            </div>
          </div>
          <div className={styles['icon-group']}>
            <svg
              viewBox="0 0 950.8571428571428 1024"
              className={styles['icon2']}
            >
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className={styles['icon4']}
            >
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg
              viewBox="0 0 602.2582857142856 1024"
              className={styles['icon6']}
            >
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
      </header>
      <div className={styles['container3']}>
        <span className={styles['text07']}>Contact our team</span>
      </div>
      <div className={styles['container4']}></div>
      <div className={styles['container5']}>
        <span className={styles['text08']}>
          Book a 15 minute call with a member of our team today!
        </span>
      </div>
      <div className={styles['container6']}>
        <span className={styles['text09']}>
          This call is dedicated to introducing you into the structure of our
          business &amp; teaching you how we work. We will explain our systems
          and our unique marketing strategies. 
        </span>
      </div>
      <ul className={` ${projectStyles['list']} ${styles['ul']} `}></ul>
      <iframe
        src="https://calendly.com/bluelynxagency/15min"
        className={styles['iframe']}
      ></iframe>
      <main className={styles['main-content']}>
        <header className={styles['main']}>
          <div className={styles['header']}>
            <img
              alt="image"
              src="/playground_assets/lynxstudios-300h.png"
              className={styles['image1']}
            />
          </div>
        </header>
        <div className={styles['container7']}>
          <span className={styles['caption']}>
            <span className={styles['text10']}>
              Have any remaining questions? Don&apos;t hesitate to get in
              contact!
            </span>
            <br></br>
            <br></br>
          </span>
          <div
            className={` ${styles['get-started']} ${projectStyles['button']} `}
          >
            <span className={styles['text13']}>Get started</span>
          </div>
        </div>
        <div className={styles['socials']}>
          <a
            href="https://example.com"
            target="_blank"
            rel="noreferrer noopener"
            className={styles['link']}
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
            className={styles['link1']}
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
            className={styles['link2']}
          >
            <img
              alt="image"
              src="/playground_assets/twitter-200h.png"
              className={projectStyles['social']}
            />
          </a>
        </div>
        <span className={styles['text14']}>
          © 2022 Blue Lynx Agency. All Rights Reserved.
        </span>
        <main className={styles['main1']}>
          <div className={styles['input-field']}>
            <input
              type="email"
              placeholder="Enter your email"
              className={` ${styles['textinput']} ${projectStyles['input']} `}
            />
            <div className={` ${styles['buy']} ${projectStyles['button']} `}>
              <span className={styles['text15']}>-&gt;</span>
              <span className={styles['text16']}>
                <span>Subscribe now</span>
                <br></br>
              </span>
            </div>
          </div>
          <h1 className={styles['notice']}>
            By subscribing to our newsletter you agree with our Terms and
            Conditions.
          </h1>
          <h1 className={styles['heading']}>Subscribe to our newsletter</h1>
        </main>
      </main>
    </div>
  )
}

export default Contact
