import * as React from "react"
import "../styles/index.css"
import Header from "../componets/Header"
import Hero from '../sections/Hero'
import { graphql } from 'gatsby';
import About from "../sections/About";
import Skills from "../sections/Skills";
import Works from "../sections/Works";
import Contact from "../sections/Contact";

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

export const Head = () => <title>Home Page</title>
