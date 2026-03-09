import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Zap, Users, Clock, Award, Calendar, CheckCircle, ArrowRight, Code, Shield, Cloud, Database, MessageCircle } from 'lucide-react'
import { openWhatsApp } from '../utils/whatsapp'

const IntensiveCareerProgramSection = () => {
  const navigate = useNavigate()
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
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
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: <Shield className="h-8 w-8" />,
      name: '🧪 Software Testing',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      name: '☁ DevOps with Multi-Cloud',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <Database className="h-8 w-8" />,
      name: '📊 ETL Testing',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      name: '❄ Snowflake Data Engineering',
      color: 'from-indigo-500 to-blue-500',
    },
  ]

  const services = [
    'Industry-Focused Training',
    'Resume Preparation',
    'Interview Support',
    'Payroll Management',
    'Work Support (After Placement)',
  ]

  return (
    <section ref={sectionRef} className="section-padding bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className={`text-center mb-12 scroll-fade-in ${isVisible ? 'visible' : ''}`}>
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-2 rounded-full text-sm font-semibold mb-6 border border-white/20">
            <Zap className="h-4 w-4" />
            Intensive IT Career Program
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            🚀 Restart / Switch Your Career into IT
          </h2>
          <p className="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto mb-8">
            Are you trying to move from <span className="font-bold">Non-IT to IT</span> or restart your career after a long gap?
            <br />
            Our Intensive Career Program is specially designed to help you enter the IT industry faster.
          </p>
        </div>

        {/* Eligibility Section */}
        <div className={`mb-12 scroll-fade-in ${isVisible ? 'visible' : ''}`}>
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">👨‍💻 Eligibility</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {eligibilityCriteria.map((item, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-white/20 w-12 h-12 rounded-lg flex items-center justify-center text-white mb-3">
                  {item.icon}
                </div>
                <p className="text-sm font-semibold">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Section */}
        <div className={`mb-12 scroll-fade-in ${isVisible ? 'visible' : ''}`}>
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">💻 Available Technologies</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`bg-gradient-to-r ${tech.color} w-14 h-14 rounded-lg flex items-center justify-center text-white mb-3 mx-auto`}>
                  {tech.icon}
                </div>
                <p className="text-sm font-semibold">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Services Section */}
        <div className={`mb-12 scroll-fade-in ${isVisible ? 'visible' : ''}`}>
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">🎯 Our Services</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 flex items-center gap-3"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CheckCircle className="h-5 w-5 text-green-300 flex-shrink-0" />
                <p className="text-sm font-semibold">{service}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Program Details */}
        <div className={`mb-12 scroll-fade-in ${isVisible ? 'visible' : ''}`}>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <div className="flex items-center gap-3 mb-3">
                <Clock className="h-6 w-6 text-white" />
                <h4 className="text-xl font-bold">⏳ Program Duration</h4>
              </div>
              <p className="text-primary-100">📅 30 – 60 Days</p>
              <p className="text-sm text-primary-200">(Depends on Technology)</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <div className="flex items-center gap-3 mb-3">
                <Zap className="h-6 w-6 text-white" />
                <h4 className="text-xl font-bold">📍 Program Mode</h4>
              </div>
              <p className="text-primary-100 mb-2">🏫 Offline Classroom Training</p>
              <p className="text-primary-100">💻 Online Live Sessions</p>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className={`text-center scroll-fade-in ${isVisible ? 'visible' : ''}`}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <button
              onClick={() => navigate('/intensive-career-program')}
              className="bg-white text-primary-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              <MessageCircle className="h-5 w-5" />
              Learn More
              <ArrowRight className="h-5 w-5" />
            </button>
            <button
              onClick={() => openWhatsApp('Hello! I am interested in the Intensive IT Career Program.')}
              className="bg-accent-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-accent-600 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              <MessageCircle className="h-5 w-5" />
              Enroll Now - Minimum Fee
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default IntensiveCareerProgramSection

