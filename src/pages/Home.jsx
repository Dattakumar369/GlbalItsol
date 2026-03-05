import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Stats from '../components/Stats'
import TrendingCourses from '../components/TrendingCourses'
import FeaturedCourses from '../components/FeaturedCourses'
import LearningJourney from '../components/LearningJourney'
import Services from '../components/Services'
import Placements from '../components/Placements'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import WhatsAppFloat from '../components/WhatsAppFloat'
import SEO from '../components/SEO'

function Home() {
  return (
    <>
      <SEO 
        title="Global IT Solutions - Launch Your Tech Career | IT Training Institute Hyderabad"
        description="Global IT Solutions offers industry-ready IT training programs in Full Stack Development, Data Science, DevOps, Cloud Computing, Cyber Security, and more. 100% placement assistance with 10K+ students trained. Join us in Hyderabad."
        keywords="IT training, software training, full stack development, data science, devops, cloud computing, cyber security, python training, java training, placement assistance, IT courses Hyderabad, software courses, tech training institute"
      />
      <div className="min-h-screen">
        <Header />
        <Hero />
        <Stats />
        <section id="courses">
          <TrendingCourses />
          <FeaturedCourses />
        </section>
        <LearningJourney />
        <Services />
        <Placements />
        <section id="testimonials">
          <Testimonials />
        </section>
        <Contact />
        <Footer />
        <WhatsAppFloat />
      </div>
    </>
  )
}

export default Home

