import * as React from "react"
import "../styles/index.css"
import Header from "../componets/Header"
import Hero from '../sections/Hero'
import { graphql } from 'gatsby';
import About from "../sections/About";
import Skills from "../sections/Skills";
import Works from "../sections/Works";
import Contact from "../sections/Contact";
import Footer from "../sections/Footer";

const docLink = {
  text: "Documentation",
  url: "https://www.gatsbyjs.com/docs/",
}

const IndexPage = ({ data }) => {
  return (
    <>
      <Header />
      <main className="page">
    

        <Hero data={data.sanityHero} skills ={data.sanitySkills}/>
      </main>
      <About  data={data.sanityAboutMe}/>
      <Skills data={data.sanitySkills}/>
      <Works />
      <Contact />
      <Footer/>
    </>
  )
}

export default IndexPage

export const query = graphql`
    
  query data {
      sanityHero {
          name
          title
          description
          website
          email
          github
      }
      sanityAboutMe {
          title
          description
      }
            sanitySkills {
    skills {
      title
      imageIcon {
        asset {
          url
        }
      }
    }
  }
  }
`;

export const Head = () => (
  <>
  <title>My Portfolio</title>
  <meta name="description" content="Welcome to my portfolio! I'm a passionate web developer with a knack for creating stunning and functional websites. Explore my projects, skills, and experience to see how I can bring your ideas to life." />
  <link rel="icon" href="/favicon.png" />
  </>
 
)
