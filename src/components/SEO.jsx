import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const SEO = ({ 
  title = 'Global IT Solutions - Launch Your Tech Career',
  description = 'Global IT Solutions offers industry-ready IT training programs in Full Stack Development, Data Science, DevOps, Cloud Computing, Cyber Security, and more. 100% placement assistance with 10K+ students trained. Join us in Hyderabad.',
  keywords = 'IT training, software training, full stack development, data science, devops, cloud computing, cyber security, python training, java training, placement assistance, IT courses Hyderabad, software courses, tech training institute',
  image = 'https://globalitsolutions.in/globalitsol.png',
  type = 'website',
  url = ''
}) => {
  const location = useLocation()
  const baseUrl = 'https://globalitsolutions.in'
  const fullUrl = url || `${baseUrl}${location.pathname}`

  useEffect(() => {
    // Update document title
    document.title = title

    // Update or create meta tags
    const updateMetaTag = (name, content, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name'
      let element = document.querySelector(`meta[${attribute}="${name}"]`)
      
      if (!element) {
        element = document.createElement('meta')
        element.setAttribute(attribute, name)
        document.head.appendChild(element)
      }
      element.setAttribute('content', content)
    }

    // Basic meta tags
    updateMetaTag('description', description)
    updateMetaTag('keywords', keywords)
    updateMetaTag('author', 'Global IT Solutions')
    updateMetaTag('robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1')
    updateMetaTag('googlebot', 'index, follow')
    updateMetaTag('language', 'English')
    updateMetaTag('revisit-after', '7 days')
    updateMetaTag('distribution', 'global')
    updateMetaTag('rating', 'general')

    // Open Graph tags
    updateMetaTag('og:title', title, true)
    updateMetaTag('og:description', description, true)
    updateMetaTag('og:image', image, true)
    updateMetaTag('og:url', fullUrl, true)
    updateMetaTag('og:type', type, true)
    updateMetaTag('og:site_name', 'Global IT Solutions', true)
    updateMetaTag('og:locale', 'en_IN', true)

    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image')
    updateMetaTag('twitter:title', title)
    updateMetaTag('twitter:description', description)
    updateMetaTag('twitter:image', image)

    // Additional SEO tags
    updateMetaTag('theme-color', '#2563eb')
    updateMetaTag('msapplication-TileColor', '#2563eb')
    updateMetaTag('apple-mobile-web-app-capable', 'yes')
    updateMetaTag('apple-mobile-web-app-status-bar-style', 'default')
    updateMetaTag('apple-mobile-web-app-title', 'Global IT Solutions')

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', fullUrl)

    // Structured Data (JSON-LD)
    let structuredData = document.querySelector('script[type="application/ld+json"]')
    if (!structuredData) {
      structuredData = document.createElement('script')
      structuredData.setAttribute('type', 'application/ld+json')
      document.head.appendChild(structuredData)
    }

    const schema = {
      '@context': 'https://schema.org',
      '@type': 'EducationalOrganization',
      name: 'Global IT Solutions',
      url: baseUrl,
      logo: `${baseUrl}/globalitsol.png`,
      description: description,
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'D.no.7-1-621/29, 15/3RT, Opp.Union, Near Umesh Chandra Statue Lane',
        addressLocality: 'Sanjeeva Reddy Nagar',
        addressRegion: 'Hyderabad',
        postalCode: '500038',
        addressCountry: 'IN'
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+91-83747-65587',
        contactType: 'Customer Service',
        areaServed: 'IN',
        availableLanguage: 'English'
      },
      sameAs: [
        // Add social media links when available
      ],
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.8',
        reviewCount: '250',
        bestRating: '5',
        worstRating: '1'
      },
      offers: {
        '@type': 'Offer',
        priceCurrency: 'INR',
        availability: 'https://schema.org/InStock'
      }
    }

    structuredData.textContent = JSON.stringify(schema)

  }, [title, description, keywords, image, type, fullUrl])

  return null
}

export default SEO


