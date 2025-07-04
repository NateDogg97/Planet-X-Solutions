import { Metadata } from 'next';
import ServicesPageClient from './ServicesPageClient';

export const metadata: Metadata = {
  title: "Web Development Services for Marketing Agencies | Planet X Devs",
  description: "Your technical partner for custom WordPress development and white-label web services. Help your marketing agency deliver exceptional websites without the technical overhead.",
  keywords: "agency development partner, custom wordpress development, white label web development, marketing agency technical partner, wordpress developer for agencies, web development partnership, agency overflow support",
  openGraph: {
    title: "Technical Development Partner for Marketing Agencies",
    description: "Expert WordPress development and technical partnership services. Scale your marketing agency with a trusted development partner.",
    images: ['/images/og-image.jpg'],
    url: 'https://www.planetxdevs.com/services',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Technical Development Partner for Marketing Agencies",
    description: "Expert WordPress development and technical partnership services.",
    images: ['/images/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://www.planetxdevs.com/services',
  }
};

export default function Services() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.planetxdevs.com/services#webpage",
        "url": "https://www.planetxdevs.com/services",
        "name": "Web Development Services for Marketing Agencies | Planet X Devs",
        "isPartOf": {
          "@id": "https://www.planetxdevs.com/#website"
        },
        "about": {
          "@id": "https://www.planetxdevs.com/#organization"
        },
        "description": "Professional web development services and partnership plans for marketing agencies.",
        "breadcrumb": {
          "@id": "https://www.planetxdevs.com/services#breadcrumb"
        },
        "inLanguage": "en-US"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.planetxdevs.com/services#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.planetxdevs.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Services",
            "item": "https://www.planetxdevs.com/services"
          }
        ]
      },
      {
        "@type": "Service",
        "@id": "https://www.planetxdevs.com/services#white-label-development",
        "name": "Agency Development Partnership",
        "alternateName": "White-Label Development Partnership",
        "description": "Become your marketing agency's dedicated technical partner. We handle the development while you focus on strategy and client relationships. True white-label service with flexible engagement models.",
        "provider": {
          "@id": "https://www.planetxdevs.com/#organization"
        },
        "serviceType": "Web Development Partnership",
        "areaServed": {
          "@type": "Place",
          "name": "Worldwide"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Partnership Options",
          "itemListElement": [
            {
              "@type": "Service",
              "name": "White-label development"
            },
            {
              "@type": "Service",
              "name": "Technical consultation"
            },
            {
              "@type": "Service",
              "name": "Project overflow support"
            },
            {
              "@type": "Service",
              "name": "Ongoing maintenance"
            }
          ]
        }
      },
      {
        "@type": "Service",
        "@id": "https://www.planetxdevs.com/services#wordpress",
        "name": "Custom WordPress Development",
        "description": "Professional WordPress development tailored to your marketing agency's needs. Custom themes, plugins, performance optimization, and security hardening for clients who need more than templates.",
        "provider": {
          "@id": "https://www.planetxdevs.com/#organization"
        },
        "serviceType": "WordPress Development",
        "areaServed": {
          "@type": "Place",
          "name": "Worldwide"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "WordPress Services",
          "itemListElement": [
            {
              "@type": "Service",
              "name": "Custom theme development"
            },
            {
              "@type": "Service",
              "name": "Plugin development"
            },
            {
              "@type": "Service",
              "name": "Performance optimization"
            },
            {
              "@type": "Service",
              "name": "Security hardening"
            },
            {
              "@type": "Service",
              "name": "WooCommerce setup"
            },
            {
              "@type": "Service",
              "name": "Gutenberg block development"
            }
          ]
        }
      },
      {
        "@type": "Service",
        "@id": "https://www.planetxdevs.com/services#website-maintenance",
        "name": "Website Maintenance & Support",
        "description": "Keep your clients' websites running smoothly with regular updates, security monitoring, and performance optimization. Available through our partnership plans.",
        "provider": {
          "@id": "https://www.planetxdevs.com/#organization"
        },
        "serviceType": "Website Maintenance",
        "areaServed": {
          "@type": "Place",
          "name": "Worldwide"
        }
      },
      {
        "@type": "Service",
        "@id": "https://www.planetxdevs.com/services#emergency-support",
        "name": "Emergency Website Support",
        "alternateName": "Emergency Support & Fixes",
        "description": "When your client's website breaks and they're breathing down your neck, we've got you covered. 24-hour response time to save your reputation and their business.",
        "provider": {
          "@id": "https://www.planetxdevs.com/#organization"
        },
        "serviceType": "Emergency Technical Support",
        "areaServed": {
          "@type": "Place",
          "name": "Worldwide"
        }
      },
      {
        "@type": "Service",
        "@id": "https://www.planetxdevs.com/services#ecommerce",
        "name": "E-Commerce Development",
        "alternateName": "E-Commerce Builds & Migrations",
        "description": "Professional e-commerce solutions that help your marketing agency win high-value retail clients. Complete white-label builds on Shopify, WooCommerce, and custom platforms.",
        "provider": {
          "@id": "https://www.planetxdevs.com/#organization"
        },
        "serviceType": "E-commerce Development",
        "areaServed": {
          "@type": "Place",
          "name": "Worldwide"
        }
      },
      {
        "@type": "Service",
        "@id": "https://www.planetxdevs.com/services#custom-development",
        "name": "Custom Website Development",
        "description": "White-label custom websites that elevate your agency's portfolio. Built from scratch with unique functionality and distinctive design that makes your clients think you're a development powerhouse.",
        "provider": {
          "@id": "https://www.planetxdevs.com/#organization"
        },
        "serviceType": "Custom Web Development",
        "areaServed": {
          "@type": "Place",
          "name": "Worldwide"
        }
      },
      {
        "@type": "Service",
        "@id": "https://www.planetxdevs.com/services#performance",
        "name": "Performance Optimization Audit",
        "description": "Performance optimization that makes your agency the hero. Fix slow websites and deliver dramatic speed improvements that your clients will notice immediately.",
        "provider": {
          "@id": "https://www.planetxdevs.com/#organization"
        },
        "serviceType": "Website Performance Optimization",
        "areaServed": {
          "@type": "Place",
          "name": "Worldwide"
        }
      },
      {
        "@type": "Service",
        "@id": "https://www.planetxdevs.com/services#platform-consultation",
        "name": "Platform Selection Consultation",
        "description": "Expert guidance to help your agency choose the perfect platform for each client project. Avoid costly mistakes and recommend solutions that actually fit the client's needs.",
        "provider": {
          "@id": "https://www.planetxdevs.com/#organization"
        },
        "serviceType": "Technical Consultation",
        "areaServed": {
          "@type": "Place",
          "name": "Worldwide"
        }
      },
      {
        "@type": "Service",
        "@id": "https://www.planetxdevs.com/services#technical-seo",
        "name": "Technical SEO Implementation",
        "description": "Technical SEO implementation that amplifies your agency's marketing efforts. White-label services that complement your content strategy and deliver measurable ranking improvements.",
        "provider": {
          "@id": "https://www.planetxdevs.com/#organization"
        },
        "serviceType": "Technical SEO",
        "areaServed": {
          "@type": "Place",
          "name": "Worldwide"
        }
      },
      {
        "@type": "OfferCatalog",
        "@id": "https://www.planetxdevs.com/services#partnership-plans",
        "name": "Agency Partnership Plans",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "Essential Partnership",
            "description": "Perfect for agencies handling 2-3 client projects per month. Includes 25 hours of white-label development.",
            "priceSpecification": {
              "@type": "PriceSpecification",
              "price": "900-1100",
              "priceCurrency": "USD",
              "unitText": "MONTH"
            },
            "seller": {
              "@id": "https://www.planetxdevs.com/#organization"
            }
          },
          {
            "@type": "Offer",
            "name": "Professional Partnership",
            "description": "Ideal for growing agencies with consistent development needs. Includes 50 hours of white-label development and dedicated project management.",
            "priceSpecification": {
              "@type": "PriceSpecification",
              "price": "1600-2000",
              "priceCurrency": "USD",
              "unitText": "MONTH"
            },
            "seller": {
              "@id": "https://www.planetxdevs.com/#organization"
            }
          },
          {
            "@type": "Offer",
            "name": "Enterprise Partnership",
            "description": "For established agencies with high-volume development needs. Includes 100 hours of white-label development and dedicated team.",
            "priceSpecification": {
              "@type": "PriceSpecification",
              "price": "2800-3600",
              "priceCurrency": "USD",
              "unitText": "MONTH"
            },
            "seller": {
              "@id": "https://www.planetxdevs.com/#organization"
            }
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.planetxdevs.com/services#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How quickly can you start on my project?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "For new partners, I can typically start within 3-5 business days. Marketing agency partners with active plans get priority scheduling with 24-48 hour response times. Rush projects are available based on current capacity."
            }
          },
          {
            "@type": "Question",
            "name": "Do you work directly with my clients?",
            "acceptedAnswer": {
              "@type": "Answer", 
              "text": "Never. This is a true white-label partnership. All communication flows through your agency, and all deliverables are branded as your work. Your clients remain yours."
            }
          },
          {
            "@type": "Question",
            "name": "What if I need more hours than my plan includes?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No problem! Additional hours are billed at $100/hour for all retainer clients. You can also upgrade your plan at any time, and unused hours roll over for up to 60 days."
            }
          },
          {
            "@type": "Question",
            "name": "What platforms and technologies do you work with?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "I specialize in WordPress (including Elementor, Divi, and custom themes), React/Next.js applications, and popular e-commerce platforms like WooCommerce and Shopify. I also work with various page builders and can adapt to your preferred tech stack."
            }
          },
          {
            "@type": "Question",
            "name": "How do you handle project communication and updates?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "I provide regular updates through your preferred channel (email, Slack, or project management tool). Retainer clients get weekly status reports, and all clients receive milestone updates throughout their projects."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
      <ServicesPageClient />
    </>
  );
}