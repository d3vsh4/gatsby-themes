import React from "react"
import { Parallax } from "react-spring/renderprops-addons.cjs"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Projects from "../components/projects"
import Photo from "../components/photo"
import Photo2 from "../components/photo2"
import CodePhoto from "../components/codePhoto"
import About from "../components/about"
import About2 from "../components/about2"
import About3 from "../components/about3"
import Contact from "../components/contact"
import Video from "../components/video"
import Schemetics from "../components/schemetics"
import Header from "../components/header"

const Cara = () => (
  <Layout>
    <Parallax pages={13.2}>
      <Header />
      <Hero offset={0.1} factor={2} />
      <Projects offset={2} factor={2} />
      <About offset={4} factor={2} />
      <About2 offset={6} factor={1.2} />
      <Photo offset={7} factor={0.6} />
      <About3 offset={8.1} factor={0.6} />
      <Photo2 offset={9} factor={0.5} />
      <CodePhoto offset={10} factor={1} />
      {/* <Video offset={9} factor={1} /> */}
      <Schemetics offset={11} factor={1.2} />
      <Contact offset={12} factor={1} />
    </Parallax>
  </Layout>
)

export default Cara
