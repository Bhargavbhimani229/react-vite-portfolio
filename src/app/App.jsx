import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

// import components
import DownloadButton from "../common/components/DownloadButton/DownloadButton";
import IconButton from "../common/components/IconButton/IconButton";
import InputField from "../common/components/InputField/InputField";
import TextAreaField from "../common/components/TextAreaField/TextAreaField";
import SubmitButton from "../common/components/SubmitButton/SubmitButton";
import Loader from "../common/components/Loader/Loader";
import cv from "../assets/files/cv.pdf";
import blog from "../assets/images/blog.png"

// import icons
import { FaNodeJs, FaReact } from "react-icons/fa";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillHtml5,
  AiOutlineEye,
} from "react-icons/ai";
import {
  BiLogoGmail,
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoRedux,
  BiLogoJava,
} from "react-icons/bi";
import { BsBootstrap, BsFacebook, BsGit, BsPuzzle } from "react-icons/bs";
import { TbBrandCpp } from "react-icons/tb";
import { FaMobileAlt } from "react-icons/fa";
import { RiSendPlaneFill } from "react-icons/ri";
import {
  SiTypescript,
  SiRecoil,
  SiReactquery,
  SiExpress,
  SiMongodb,
  SiJquery,
} from "react-icons/si";

//import images
import Ataa from "../assets/images/croma.png";
import Elzero from "../assets/images/blog.png";
import Kasper from "../assets/images/gym.png";
import Leon from "../assets/images/movie.png";
// import SokoNumber from "../assets/images/SokoNumber.png";
// import GlobalShare from "../assets/images/GlobalShare.png";

// import style
import style from "./App.module.css";
import clsx from "clsx";

const skills = [
  {
    name: "HTML 5",
    icon: <AiFillHtml5 size="25px" color="white" />,
    cssName: "html",
  },
  {
    name: "CSS 3",
    icon: <BiLogoCss3 size="25px" color="white" />,
    cssName: "css",
  },
  {
    name: "Java Script",
    icon: <BiLogoJavascript size="25px" color="white" />,
    cssName: "java-script",
  },
  {
    name: "React",
    icon: <FaReact size="25px" color="white" />,
    cssName: "react",
  },
  {
    name: "Git",
    icon: <BsGit size="25px" color="white" />,
    cssName: "git",
  },
  {
    name: "C++",
    icon: <TbBrandCpp size="25px" color="white" />,
    cssName: "cpp",
  },
  {
    name: "Problem Solving",
    icon: <BsPuzzle size="25px" color="white" />,
    cssName: "problem-solving",
  },
  {
    name: "Bootstrap",
    icon: <BsBootstrap size="25px" color="white" />,
    cssName: "type-script",
  },
  {
    name: "Node.js",
    icon: <FaNodeJs size="25px" color="white" />,
    cssName: "redux",
  },
  {
    name: "Express",
    icon: <SiExpress size="25px" color="white" />,
    cssName: "recoil",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb size="25px" color="white" />,
    cssName: "react-query",
  },
  {
    name: "Jquery",
    icon: <SiJquery size="25px" color="white" />,
    cssName: "java",
  },
];

const projects = [
  // {
  //   name: "Global Share",
  //   link: "https://ibrahimhiarea.github.io/Global-Share/#/home",
  //   github: "https://github.com/IbrahimHiarea/Global-Share",
  //   description:
  //     "The Global Share ERP System is an innovative web-based application designed to streamline volunteer recruitment, management, and reward systems. It incorporates task management, recruitment, and gamification features to enhance employee engagement, promote effective communication, and drive organizational excellence.",
  //   image: GlobalShare,
  // },
  {
    name: `Croma-Clone-Frontend`,
    link: "https://croma-bootstrap.vercel.app/",
    github: "https://github.com/Bhargavbhimani229/croma-bootstrap",
    description:
      "This is a landing page template for a tech/electronics eCommerce brand — inspired by product pages like Apple or Croma. It's meant to showcase products, features, and a call-to-action in a clean, modern, and responsive layout.",
    image: Ataa,
  },
  // {
  //   name: "SoKo Number",
  //   link: "https://ibrahimhiarea.github.io/Soko-Number/",
  //   github: "https://github.com/IbrahimHiarea/Soko-Number",
  //   description:
  //     "Soko Number is a puzzle game built with the React framework. The game consists of 6 challenging levels that will test your problem-solving skills. Each level presents a grid-based puzzle where you need to move numbered tiles to their designated positions.",
  //   image: SokoNumber,
  // },
  {
    name: "Movie-Node.js",
    link: "https://movie-project-1-0ok8.onrender.com",
    github: "https://github.com/Bhargavbhimani229/Movie-Project",
    description:
      "Cineverse is a full-stack movie website built with Node.js, Express, MongoDB, and EJS. It features an Admin Panel for managing movies (CRUD operations) and a Client Side for users to browse movies..",
    image: Leon,
  },
  {
    name: "Gym-Frontend",
    link: "https://vercel.com/bhargavbhimani229s-projects/my-gym-website",
    github: "https://github.com/Bhargavbhimani229/my-gym-website",
    description:
     "Welcome to the My Gym Website, a modern and responsive gym and fitness center website built to showcase gym services, membership plans, trainers, and more.",
    image: Kasper,
  },
  {
    name: "Blog-Node.js",
    link: "https://blog-passport-project.onrender.com/login",
    github: "https://github.com/Bhargavbhimani229/Blog-passport-project",
    description:
      "The website appears to be a blog web application with user authentication functionality using Passport.js (a popular authentication middleware for Node.js). Below is a brief overview of the project and what it likely includes:",
    image: Elzero,
  },
];

function App() {
  const form = useRef();

  const [menu, setMenu] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(function () {
      emailjs
        .sendForm(
          "service_gjbmeus",
          "template_qk6p0pa",
          form.current,
          "HDMwz57k3xrihLg4J"
        )
        .then((result) => {
          e.target.name.value = "";
          e.target.email.value = "";
          e.target.message.value = "";
        });
      setLoading(false);
    }, 2000);
  };

  return (
    <div className={style.app}>
      {/* Navbar */}
      <div className={style.nav}>
        <a className={style.logo}>
          <FaReact color="var(--primary-main)" size="50px" />
          <h5>Bhargav Bhimani</h5>
        </a>
        <ul>
          <li>
            <a href="#Home">Home</a>
          </li>
          <li>
            <a href="#About">About</a>
          </li>
          <li>
            <a href="#Projects">Projects</a>
          </li>
          <li>
            <a href="#Contact">Contact</a>
          </li>
        </ul>
        <div className={style["menu-icon"]}>
          <input id="checkbox" className={style["checkbox2"]} type="checkbox" />
          <label
            className={`${style.toggle} ${style.toggle2}`}
            for="checkbox"
            onClick={() => setMenu(!menu)}
          >
            <div className={`${style.bars} ${style.bar4}`}></div>
            <div className={`${style.bars} ${style.bar5}`}></div>
            <div className={`${style.bars} ${style.bar6}`}></div>
          </label>
        </div>
      </div>
      {menu === true && (
        <ul className={style.menu}>
          <li>
            <a href="#Home">Home</a>
          </li>
          <li>
            <a href="#About">About</a>
          </li>
          <li>
            <a href="#Projects">Projects</a>
          </li>
          <li>
            <a href="#Contact">Contact</a>
          </li>
        </ul>
      )}

      {/* Home */}
      <div id="Home" className={style.home}>
        <div className={style["home-content"]}>
          <h1>HEY, I'M Bhargav Bhimani</h1>
          <p>
            Driven and detail-oriented recent graduate with a comprehensive
            understanding of full-stack development, including front-end
            frameworks like React and back-end technologies such as Node.js and
            MongoDB. Possesses a strong problem-solving aptitude and a passion
            for creating efficient and user-friendly web applications.
          </p>
          <a
            href={cv}
            download="cv-PDF-document"
            target="_blank"
            rel="noopener noreferrer"
          >
            <DownloadButton>Download CV</DownloadButton>
          </a>
        </div>
        <div className={style["scroll-icon"]}>
          <div
            className={style["scroll-down"]}
            style={{ color: "skyblue !important" }}
          >
            <div className={style.chevrons}>
              <div className={style["chevron-down"]}></div>
              <div className={style["chevron-down"]}></div>
            </div>
          </div>
        </div>
        <div className={style["contact-nav"]}>
          <a
            className={style.github}
            target="_blank"
            href="https://github.com/Bhargavbhimani229"
          >
            <AiFillGithub size="30px" color="black" />
          </a>
          <a
            className={style.linkedin}
            target="_blank"
            href="https://www.linkedin.com/in/bhargav-bhimani-b855a12aa?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          >
            <AiFillLinkedin size="30px" color="black" />
          </a>
          <a
            className={style.facebook}
            target="_blank"
            href="https://www.facebook.com/profile.php?id=100063646774041"
          >
            <BsFacebook size="30px" color="black" />
          </a>
        </div>
      </div>

      {/* About */}
      <div id="About" className={style.about}>
        <div className={style.container}>
          <h2 className={style.title}>About Me</h2>
          <p>
            I'm a Full Stack Web Developer passionate about building both the
            front-end and back-end of websites and web applications that deliver
            impactful and seamless user experiences. I specialize in crafting
            intuitive user interfaces, building scalable backend systems, and
            ensuring smooth integration between both.
          </p>

          <div className={style["about-content"]}>
            <div className={style["about-info"]}>
              <h3>Get to know me!</h3>
              <p>
                I'm a <span>Full Stack Web Developer</span> who enjoys building
                the complete architecture of websites and web applications —
                from intuitive <span>front-end interfaces</span> to powerful{" "}
                <span>back-end systems</span>. Check out some of my work in the{" "}
                <span>Projects</span> section.
                <br />
                <br />I also love sharing insights and knowledge I've gained
                over the years in <span>Web Development</span> to support the
                dev community. Feel free to connect or follow me on{" "}
                <a href="https://github.com/Bhargavbhimani229" target="_blank">
                  Github
                </a>
                , where I post helpful content related to{" "}
                <span>Web Development</span> and <span>Programming</span>.<br />
                <br />
                I'm always open to <span>Job</span> opportunities where I can
                contribute, learn, and grow. If you have a role that matches my
                skills and passion, don’t hesitate to <span>contact</span> me.
              </p>
            </div>

            <div className={style["my-skill"]}>
              <h3>My Skills</h3>
              <div className={style.skills}>
                {skills.map((skill, index) => {
                  return (
                    <div
                      key={`skill${index}`}
                      className={`${style.skill} ${style[skill.cssName]}`}
                    >
                      <div className={style["skill-name"]}>{skill.name}</div>
                      <div className={style["skill-icon"]}>{skill.icon}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Projects */}
      <div id="Projects" className={style.projects}>
        <div className={style.container}>
          <h2 className={style.title}>Projects</h2>
          <p>
            Here you will find some of the personal and clients projects that I
            created with each project containing its own case study
          </p>
         <div className={style["projects-list"]}>
  {projects.map((project, index) => {
    return (
      <div key={`project${index}`} className={style.project}>
        <div className={style["project-image"]}>
          <img src={project.image} alt="Project Image" />
        </div>
        <div className={style["project-info"]}>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <div className={style["project-buttons"]}>
            <IconButton
              width="170px"
              height="50px"
              backgroundColor="var(--primary-main)"
              color="white"
              link={project.link}
              icon={<AiOutlineEye size="25px" color="white" />}
            >
              Live Demo
            </IconButton>
            <IconButton
              width="100px"
              height="50px"
              backgroundColor="black"
              color="white"
              link={project.github}
              icon={<AiFillGithub size="25px" color="white" />}
            >
              Github
            </IconButton>
          </div>
        </div>
      </div>
    );
  })}
</div>

        </div>
      </div>

      {/* Contact */}
      <div id="Contact" className={style.contact} style={{marginTop:"20px"}}>
        <div className={style.container}>
          <h2 className={style.title}>Contact</h2>
          <p>
            Feel free to Contact me by submitting the form below and I will get
            back to you as soon as possible
          </p>
          <form
            ref={form}
            onSubmit={sendEmail}
            className={clsx({ [style["inactive-form"]]: loading })}
          >
            <InputField
              width="700px"
              height="40px"
              name="name"
              placeholder="Enter Your Name"
              label="Name"
              type="text"
            />
            <InputField
              width="700px"
              height="40px"
              name="email"
              placeholder="Enter Your Email"
              label="Email"
              type="email"
            />
            <TextAreaField
              width="700px"
              height="250px"
              name="message"
              placeholder="Enter Your Message"
              label="Message"
              type="text"
            />
            <SubmitButton
              icon={<RiSendPlaneFill size="20px" color="white" />}
              width="200px"
              height="60px"
              color="white"
              backgroundColor="var(--primary-main)"
            >
              Submit
            </SubmitButton>
            {loading && (
              <div className={style.loader}>
                <Loader />
              </div>
            )}
          </form>
        </div>
      </div>

      {/* footer */}
      <div className={style.footer}>
        <div className={style.container}>
          <div className={style["footer-info"]}>
            <div>
              <h3>Bhargav Bhimani</h3>
              <p>
                Driven and detail-oriented recent graduate with a comprehensive
                understanding of full-stack development, including front-end
                frameworks like React and back-end technologies such as Node.js
                and MongoDB. Possesses a strong problem-solving aptitude and a
                passion for creating efficient and user-friendly web
                applications.
              </p>
            </div>
            <div className={style.social}>
              <h3>Social</h3>
              <div className="">
                <a
                  className={style.git}
                  target="_blank"
                  href="https://github.com/Bhargavbhimani229"
                >
                  <AiFillGithub size="30px" color="white" />
                </a>
                <a
                  className={style.linkedin}
                  target="_blank"
                  href="https://www.linkedin.com/in/bhargav-bhimani-b855a12aa?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                >
                  <AiFillLinkedin size="30px" color="white" />
                </a>
                <a
                  className={style.facebook}
                  target="_blank"
                  href="https://www.facebook.com/profile.php?id=100063646774041"
                >
                  <BsFacebook size="30px" color="white" />
                </a>
              </div>
            </div>
          </div>
          <div className={style["copy-right"]}>
            © Copyright 2025. Made by <span>Bhargav Bhimani</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
