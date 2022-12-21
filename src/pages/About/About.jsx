import React from 'react'
import MediaQuery from 'react-responsive'

// styles
import styles from './About.module.scss'
import aboutMobile from '../../assets/about/mobile/image-about-hero.jpg'
import worldClassTalentMobile from '../../assets/about/mobile/image-world-class-talent.jpg'
import realDealMobile from '../../assets/about/mobile/image-real-deal.jpg'
import aboutTablet from '../../assets/about/tablet/image-about-hero.jpg'
import worldClassTalentTablet from '../../assets/about/tablet/image-world-class-talent.jpg'
import realDealTablet from '../../assets/about/tablet/image-real-deal.jpg'

// compontents
import AboutCards from '../../components/AboutCards/AboutCards'
import LocationsCards from '../../components/LocationsCards/LocationsCards'
import Footer from '../../components/Footer/Footer'

export default function About() {
  return (
    <React.Fragment>
      <main>
        <section className={styles.about}>
          <MediaQuery minWidth={0} maxWidth={767}>
            <AboutCards
              image={aboutMobile}
              alt="Team meeting at conference table"
              isSecondary={false}
            >
              <h1 className={styles.about__heading}>About Us</h1>
              <p className={styles['about__sub-heading']}>
                Founded in 2010, we are a creative agency that produces lasting
                results for our clients. We’ve partnered with many startups,
                corporations, and nonprofits alike to craft designs that make
                real impact. We’re always looking forward to creating brands,
                products, and digital experiences that connect with our clients’
                audiences.
              </p>
            </AboutCards>
            <AboutCards
              image={worldClassTalentMobile}
              alt="Woman browsing art work"
              isSecondary={true}
            >
              <h1
                className={styles.about__heading}
                style={{ color: '#e7816b' }}
              >
                World-class talent
              </h1>
              <p
                className={styles['about__sub-heading']}
                style={{ color: '#333136' }}
              >
                We are a crew of strategists, problem-solvers, and
                technologists. Every design is thoughtfully crafted from concept
                to launch, ensuring success in its given market. We are
                constantly updating our skills in a myriad of platforms.
                <br />
                <br />
                Our team is multi-disciplinary and we are not merely interested
                in form — content and meaning are just as important. We give
                great importance to craftsmanship, service, and prompt delivery.
                Clients have always been impressed with our high-quality
                outcomes that encapsulates their brand’s story and mission.
              </p>
            </AboutCards>
          </MediaQuery>
          <MediaQuery minWidth={768} maxWidth={1439}>
            <AboutCards
              image={aboutTablet}
              alt="Team meeting at conference table"
              isSecondary={false}
              style={{marginBottom: '100px'}}
            >
              <h1 className={styles.about__heading}>About Us</h1>
              <p className={styles['about__sub-heading']}>
                Founded in 2010, we are a creative agency that produces lasting
                results for our clients. We’ve partnered with many startups,
                corporations, and nonprofits alike to craft designs that make
                real impact. We’re always looking forward to creating brands,
                products, and digital experiences that connect with our clients’
                audiences.
              </p>
            </AboutCards>
            <AboutCards
              image={worldClassTalentTablet}
              alt="Woman browsing art work"
              isSecondary={true}
            >
              <h1
                className={styles.about__heading}
                style={{ color: '#e7816b' }}
              >
                World-class talent
              </h1>
              <p
                className={styles['about__sub-heading']}
                style={{ color: '#333136' }}
              >
                We are a crew of strategists, problem-solvers, and
                technologists. Every design is thoughtfully crafted from concept
                to launch, ensuring success in its given market. We are
                constantly updating our skills in a myriad of platforms.
                <br />
                <br />
                Our team is multi-disciplinary and we are not merely interested
                in form — content and meaning are just as important. We give
                great importance to craftsmanship, service, and prompt delivery.
                Clients have always been impressed with our high-quality
                outcomes that encapsulates their brand’s story and mission.
              </p>
            </AboutCards>
          </MediaQuery>
        </section>
        <section className={styles.locations}>
          <LocationsCards />
        </section>
        <section className={styles.about}>
          <MediaQuery minWidth={0} maxWidth={767}>
            <AboutCards
              image={realDealMobile}
              alt="Woman hanging artwork"
              isSecondary={true}
              style={{ marginBottom: '150px' }}
            >
              <h1
                className={styles.about__heading}
                style={{ color: '#e7816b' }}
              >
                The real deal
              </h1>
              <p
                className={styles['about__sub-heading']}
                style={{ color: '#333136' }}
              >
                As strategic partners in our clients’ businesses, we are ready
                to take on any challenge as our own. Solving real problems
                require empathy and collaboration, and we strive to bring a
                fresh perspective to every opportunity. We make design and
                technology more accessible and give you tools to measure
                success.
                <br />
                <br />
                We are visual storytellers in appealing and captivating ways. By
                combining business and marketing strategies, we inspire
                audiences to take action and drive real results.
              </p>
            </AboutCards>
          </MediaQuery>
          <MediaQuery minWidth={768} maxWidth={1439}>
            <AboutCards
              image={realDealTablet}
              alt="Woman hanging artwork"
              isSecondary={true}
              style={{ marginBottom: '150px' }}
            >
              <h1
                className={styles.about__heading}
                style={{ color: '#e7816b' }}
              >
                The real deal
              </h1>
              <p
                className={styles['about__sub-heading']}
                style={{ color: '#333136' }}
              >
                As strategic partners in our clients’ businesses, we are ready
                to take on any challenge as our own. Solving real problems
                require empathy and collaboration, and we strive to bring a
                fresh perspective to every opportunity. We make design and
                technology more accessible and give you tools to measure
                success.
                <br />
                <br />
                We are visual storytellers in appealing and captivating ways. By
                combining business and marketing strategies, we inspire
                audiences to take action and drive real results.
              </p>
            </AboutCards>
          </MediaQuery>
        </section>
      </main>
      <Footer isSecondary={false} />
    </React.Fragment>
  )
}
