import React, { useEffect, useRef, useState } from 'react'
import { GraduationCap, Monitor, Building2, Briefcase, Target, Users, ArrowRight, Phone } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import ContactForm from './ContactForm'

const Services = () => {
  const navigate = useNavigate()
  const [visibleItems, setVisibleItems] = useState({})
  const [showContactForm, setShowContactForm] = useState(false)
  const [selectedService, setSelectedService] = useState(null)
  const itemRefs = useRef({})

  const services = [
    {
      id: 'hire-train-deploy',
      icon: <GraduationCap className="h-10 w-10" />,
      title: 'Hire-Train-Deploy 2025 & 2026 Batches',
      description: 'Comprehensive training programs for 2025 and 2026 batches with guaranteed placement opportunities.',
      features: ['2025 & 2026 Batches', 'Guaranteed Placement', 'Industry Training', 'Job Ready Skills'],
      cta: 'Learn More'
    },
    {
      id: 'internship-career',
      icon: <Briefcase className="h-10 w-10" />,
      title: 'Internship Career Program',
      description: 'Hands-on internship programs designed to kickstart your career with real-world experience.',
      features: ['Real Projects', 'Industry Exposure', 'Career Guidance', 'Certificate'],
      cta: 'Learn More'
    },
    {
      id: 'pap-career-gap',
      icon: <Target className="h-10 w-10" />,
      title: 'PAP Career Gap',
      description: 'Specialized programs to bridge career gaps and get you back on track with industry-relevant skills.',
      features: ['Career Gap Solutions', 'Skill Enhancement', 'Placement Support', 'Flexible Learning'],
      cta: 'Learn More'
    },
    {
      id: 'outsourcing',
      icon: <Building2 className="h-10 w-10" />,
      title: 'Out Sourcing',
      description: 'Professional outsourcing services for businesses looking to scale their operations efficiently.',
      features: ['IT Services', 'Project Outsourcing', 'Team Augmentation', 'Cost Effective'],
      cta: 'Learn More'
    },
    {
      id: 'it-nonit-jobs',
      icon: <Users className="h-10 w-10" />,
      title: 'IT & Non-IT Jobs',
      description: 'Placement assistance for both IT and Non-IT positions across various industries and domains.',
      features: ['IT Jobs', 'Non-IT Jobs', 'Multiple Domains', 'Placement Support'],
      cta: 'Learn More'
    }
  ]

  useEffect(() => {
    const observers = []

    services.forEach((service) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleItems((prev) => ({ ...prev, [service.id]: true }))
            }
          })
        },
        { threshold: 0.1 }
      )

      if (itemRefs.current[service.id]) {
        observer.observe(itemRefs.current[service.id])
        observers.push(observer)
      }
    })

    return () => {
      observers.forEach((observer) => observer.disconnect())
    }
  }, [])

  const handleServiceClick = (service) => {
    if (service.isPage && service.pagePath) {
      navigate(service.pagePath)
    } else {
      setSelectedService(service)
      setShowContactForm(true)
    }
  }

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need for a successful tech career, all under one roof
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              ref={(el) => (itemRefs.current[service.id] = el)}
              className={`bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-primary-200 transform hover:-translate-y-2 scroll-fade-in ${
                visibleItems[service.id] ? 'visible' : ''
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => handleServiceClick(service)}
            >
              <div className="bg-primary-100 w-16 h-16 rounded-lg flex items-center justify-center text-primary-600 mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-700 mb-4">
                {service.description}
              </p>
              <ul className="space-y-2 mb-4">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  handleServiceClick(service)
                }}
                className="w-full mt-4 btn-primary flex items-center justify-center gap-2"
              >
                {service.cta}
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center animate-fade-in">
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Need Help Choosing a Service?
            </h3>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Our experts are here to guide you. Get in touch and we'll help you find the perfect training solution.
            </p>
            <button
              onClick={() => {
                setSelectedService(null)
                setShowContactForm(true)
              }}
              className="bg-white text-primary-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center justify-center gap-2 mx-auto"
            >
              <Phone className="h-5 w-5" />
              Talk to Our Expert
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Contact Form Modal */}
      <ContactForm
        isOpen={showContactForm}
        onClose={() => {
          setShowContactForm(false)
          setSelectedService(null)
        }}
        defaultMessage={selectedService ? `Hello! I am interested in ${selectedService.title}. Please provide more details.` : 'Hello! I need help choosing the right training service.'}
      />
    </section>
  )
}

export default Services

