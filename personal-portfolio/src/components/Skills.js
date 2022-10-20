import meter1 from "../assets/img/html-1.svg";
import meter2 from "../assets/img/css-3.svg";
import meter3 from "../assets/img/logo-javascript.svg";
import meter4 from "../assets/img/jquery-2.svg";
import meter5 from "../assets/img/tailwind-css-2.svg";
import meter6 from "../assets/img/react-1.svg";
import meter7 from "../assets/img/redux.svg";
import meter8 from "../assets/img/next-js.svg";
import meter9 from "../assets/img/sass-1.svg";
import meter10 from "../assets/img/firebase-1.svg";
import meter11 from "../assets/img/git-icon.svg";
import meter12 from "../assets/img/github-icon-1.svg";
import meter13 from '../assets/img/typescript.svg'
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
                                <img src={meter1} alt="meter" className="skill-logo"/>
                                <h5>HTML5</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="meter" className="skill-logo"/>
                                <h5>CSS3</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="meter" className="skill-logo"/>
                                <h5>JAVASCRIPT</h5>
                            </div>
                             <div className="item">
                                <img src={meter5} alt="meter" className="skill-logo"/>
                                <h5>TAILWIND CSS</h5>
                            </div>
                            <div className="item">
                                <img src={meter6} alt="meter" className="skill-logo"/>
                                <h5>REACT</h5>
                            </div>
                            <div className="item">
                                <img src={meter4} alt="meter" className="skill-logo"/>
                                <h5>JQUERY</h5>
                            </div>
                            <div className="item">
                                <img src={meter10} alt="meter" className="skill-logo"/>
                                <h5>FIREBASE</h5>
                            </div>
                            <div className="item">
                                <img src={meter8} alt="meter" className="skill-logo"/>
                                <h5>NEXT JS</h5>
                            </div>
                            <div className="item">
                                <img src={meter9} alt="meter" className="skill-logo"/>
                                <h5>SASS</h5>
                            </div>
                            <div className="item">
                                <img src={meter7} alt="meter" className="skill-logo"/>
                                <h5>REDUX TOOLKIT</h5>
                            </div>
                            <div className="item">
                                <img src={meter11} alt="meter" className="skill-logo"/>
                                <h5>GIT</h5>
                            </div>
                            {/* <div className="item">
                                <img src={meter12} alt="meter" className="skill-logo"/>
                                <h5>GITHUB</h5>
                            </div> */}
                            <div className="item">
                                <img src={meter13} alt="meter" className="skill-logo"/>
                                <h5>TYPESCRIPT</h5>
                            </div>
                            {/* <div className="item">
                                <img src={meter1} alt="meter" className="skill-logo"/>
                                <h5>GITHUB</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="meter" className="skill-logo"/>
                                <h5>COMMUINICATION</h5>
                            </div> */}
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="meter" />
    </section>
  )
}
