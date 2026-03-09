import React, { useEffect, useRef, useState } from 'react'
import { Users, Target, CheckCircle, ArrowRight, Phone, Mail, Clock, Briefcase, Award, Zap, DollarSign, BookOpen, Code, Cloud, Database, Shield, TrendingUp, MessageCircle, Calendar, FileText } from 'lucide-react'
import { openWhatsApp } from '../utils/whatsapp'
import Header from '../components/Header'
import Footer from '../components/Footer'
import WhatsAppFloat from '../components/WhatsAppFloat'
import ContactForm from '../components/ContactForm'
import SEO from '../components/SEO'

const IntensiveCareerProgram = () => {
  const [visibleSections, setVisibleSections] = useState({})
  const [showContactForm, setShowContactForm] = useState(false)
  const sectionRefs = useRef({})

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    
    setVisibleSections({
      eligibility: true,
      technologies: true,
      services: true,
      duration: true,
      whoShouldJoin: true,
    })
  }, [])

  useEffect(() => {
    const observers = []
    const sectionIds = ['eligibility', 'technologies', 'services', 'duration', 'whoShouldJoin']

    sectionIds.forEach((sectionId) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleSections((prev) => ({ ...prev, [sectionId]: true }))
            }
          })
        },
        { threshold: 0.1 }
      )

      if (sectionRefs.current[sectionId]) {
        observer.observe(sectionRefs.current[sectionId])
        observers.push(observer)
      }
    })

    return () => {
      observers.forEach((observer) => observer.disconnect())
    }
  }, [])

  const eligibilityCriteria = [
    { icon: <Users className="h-6 w-6" />, text: 'Non-IT to IT Switchers' },
    { icon: <Clock className="h-6 w-6" />, text: 'Career Gap Candidates (3+ Years)' },
    { icon: <Award className="h-6 w-6" />, text: 'Any Degree / Any BTech' },
    { icon: <Calendar className="h-6 w-6" />, text: 'Passed Out Between 2014 – 2023' },
  ]

  const technologies = [
    {
      icon: <Code className="h-8 w-8" />,
      name: '🔥 Java Development',
      description: 'Master Java, Spring Boot, Microservices, and enterprise development',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: <Shield className="h-8 w-8" />,
      name: '🧪 Software Testing',
      description: 'Automation Testing, ETL Testing, and QA methodologies',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      name: '☁ DevOps with Multi-Cloud',
      description: 'CI/CD, Docker, Kubernetes, AWS, Azure, and infrastructure automation',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <Database className="h-8 w-8" />,
      name: '📊 ETL Testing',
      description: 'Data warehouse testing, data validation, and quality checks',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      name: '❄ Snowflake Data Engineering',
      description: 'Master Snowflake platform, data pipelines, and analytics',
      color: 'from-indigo-500 to-blue-500',
    },
  ]

  const services = [
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: 'Industry-Focused Training',
      description: 'Comprehensive training aligned with current industry requirements and best practices.',
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: 'Resume Preparation',
      description: 'ATS-optimized resume building to help you stand out to recruiters.',
    },
    {
      icon: <MessageCircle className="h-8 w-8" />,
      title: 'Interview Support',
      description: 'Mock interviews, technical rounds, and HR preparation sessions.',
    },
    {
      icon: <Briefcase className="h-8 w-8" />,
      title: 'Payroll Management',
      description: 'Complete support for payroll processing and documentation.',
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Work Support (After Placement)',
      description: 'Ongoing support and guidance even after you get placed.',
    },
  ]

  const whoShouldJoin = [
    'Career Gap Candidates',
    'Non-IT Professionals',
    'Job Seekers Looking for IT Entry',
    'Professionals Struggling to Get Interviews',
  ]

  return (
    <div className="min-h-screen">
      <SEO 
        title="Intensive IT Career Program - Restart/Switch Your Career | Global IT Solutions"
        description="Switch from Non-IT to IT or restart your career after a gap. Our 30-60 day Intensive Career Program offers industry-focused training, placement assistance, and ongoing support. Available in Java, Testing, DevOps, ETL Testing, and Snowflake."
        keywords="intensive IT career program, non-IT to IT, career gap, career restart, IT training, job placement, career switch, IT courses, minimum fee, career program"
      />
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 text-white section-padding overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-2 rounded-full text-sm font-semibold mb-6 border border-white/20">
              <Zap className="h-4 w-4" />
              Intensive IT Career Program
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
              🚀 Restart / Switch Your Career into IT
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 mb-4 max-w-3xl mx-auto">
              Are you trying to move from <span className="font-bold">Non-IT to IT</span> or restart your career after a long gap?
            </p>
            <p className="text-lg md:text-xl text-primary-200 mb-8 max-w-3xl mx-auto">
              Our Intensive Career Program is specially designed to help you enter the IT industry faster.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => openWhatsApp('Hello! I am interested in the Intensive IT Career Program.')}
                className="bg-white text-primary-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                <MessageCircle className="h-5 w-5" />
                Enroll Now - Minimum Fee
                <ArrowRight className="h-5 w-5" />
              </button>
              <button
                onClick={() => {
                  const contactSection = document.getElementById('contact')
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' })
                  } else {
                    setShowContactForm(true)
                  }
                }}
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Phone className="h-5 w-5" />
                Contact Us
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center text-primary-100">
              <a href="tel:+918374765587" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="h-5 w-5" />
                <span>+91 83747 65587</span>
              </a>
              <a href="tel:+917075504888" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="h-5 w-5" />
                <span>+91 70755 04888</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section ref={(el) => (sectionRefs.current['eligibility'] = el)} className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              👨‍💻 Eligibility
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              This program is designed for career switchers and gap candidates
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {eligibilityCriteria.map((item, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br from-primary-50 to-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-primary-600 ${visibleSections.eligibility ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="bg-primary-100 w-14 h-14 rounded-lg flex items-center justify-center text-primary-600 mb-4">
                  {item.icon}
                </div>
                <p className="text-lg font-semibold text-gray-900">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section ref={(el) => (sectionRefs.current['technologies'] = el)} className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              💻 Available Technologies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our industry-focused technology tracks
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 ${visibleSections.technologies ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={`bg-gradient-to-r ${tech.color} w-16 h-16 rounded-lg flex items-center justify-center text-white mb-4`}>
                  {tech.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{tech.name}</h3>
                <p className="text-gray-600">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={(el) => (sectionRefs.current['services'] = el)} className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              🎯 Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive support throughout your career transition journey
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br from-primary-50 to-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-primary-600 ${visibleSections.services ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="bg-primary-100 w-14 h-14 rounded-lg flex items-center justify-center text-primary-600 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Duration & Mode Section */}
      <section ref={(el) => (sectionRefs.current['duration'] = el)} className="section-padding bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                ⏳ Program Details
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className={`bg-white rounded-xl p-8 shadow-lg ${visibleSections.duration ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-primary-100 w-16 h-16 rounded-lg flex items-center justify-center text-primary-600">
                    <Clock className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Program Duration</h3>
                    <p className="text-gray-600">📅 30 – 60 Days</p>
                  </div>
                </div>
                <p className="text-gray-700">(Depends on Technology)</p>
              </div>
              <div className={`bg-white rounded-xl p-8 shadow-lg ${visibleSections.duration ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-accent-100 w-16 h-16 rounded-lg flex items-center justify-center text-accent-600">
                    <BookOpen className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Program Mode</h3>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary-100 p-2 rounded-lg">
                      <Briefcase className="h-5 w-5 text-primary-600" />
                    </div>
                    <span className="text-gray-700 font-semibold">🏫 Offline Classroom Training</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-accent-100 p-2 rounded-lg">
                      <Zap className="h-5 w-5 text-accent-600" />
                    </div>
                    <span className="text-gray-700 font-semibold">💻 Online Live Sessions</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Should Join Section */}
      <section ref={(el) => (sectionRefs.current['whoShouldJoin'] = el)} className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              🚀 Who Should Join?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              This program is perfect for you if you fall into any of these categories
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4">
              {whoShouldJoin.map((item, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-r from-primary-50 to-accent-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-primary-600 ${visibleSections.whoShouldJoin ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                    <p className="text-lg font-semibold text-gray-900">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="section-padding bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Restart Your IT Career?
            </h3>
            <p className="text-xl text-primary-100 mb-8">
              Join our Intensive Career Program and get placed in IT with minimum fee. Contact us today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => openWhatsApp('Hello! I am interested in the Intensive IT Career Program.')}
                className="bg-white text-primary-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                <MessageCircle className="h-5 w-5" />
                Enroll Now
                <ArrowRight className="h-5 w-5" />
              </button>
              <button
                onClick={() => setShowContactForm(true)}
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Phone className="h-5 w-5" />
                Contact Us
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center text-primary-100">
              <a href="tel:+918374765587" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="h-5 w-5" />
                <span>+91 83747 65587</span>
              </a>
              <a href="tel:+917075504888" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="h-5 w-5" />
                <span>+91 70755 04888</span>
              </a>
              <a href="mailto:info@globalitsolutions.in" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
                <span>info@globalitsolutions.in</span>
              </a>
            </div>
            <div className="mt-6">
              <a 
                href="https://whatsapp.com/channel/0029VbCQ7Wg0rGiLqxR1S50t" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <MessageCircle className="h-5 w-5" />
                Follow WhatsApp Channel
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />

      {/* Contact Form Modal */}
      <ContactForm
        isOpen={showContactForm}
        onClose={() => setShowContactForm(false)}
        defaultMessage="Hello! I am interested in the Intensive IT Career Program."
      />
    </div>
  )
}

export default IntensiveCareerProgram

