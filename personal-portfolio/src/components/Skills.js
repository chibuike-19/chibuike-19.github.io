import meter1 from "../assets/img/meter1.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Below are some of the skills that I'm very good with<br></br></p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="meter" />
                                <h5>HTML5</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="meter" />
                                <h5>CSS3</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="meter" />
                                <h5>TAILWIND CSS</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="meter" />
                                <h5>SCSS</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="meter" />
                                <h5>JAVASCRIPT</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="meter" />
                                <h5>JQUERY</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="meter" />
                                <h5>FIREBASE</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="meter" />
                                <h5>REACT JS</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="meter" />
                                <h5>REDUX TOOLKIT</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="meter" />
                                <h5>TYPESCRIPT</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="meter" />
                                <h5>PYTHON</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="meter" />
                                <h5>FLUTTER</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="meter" />
                                <h5>GIT</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="meter" />
                                <h5>GITHUB</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="meter" />
                                <h5>COMMUINICATION</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="meter" />
    </section>
  )
}
