import React from "react";
import './Services.css'; // Import the CSS file

const servicesData = [
  {
    title: 'Search Engine Optimization (SEO)',
    description:
      'Boost your website’s visibility on search engines and drive organic traffic with keyword research, on-page optimization, and link-building strategies.',
  },
  {
    title: 'Google Ads',
    description:
      'Maximize your ROI with high-converting Google Ads campaigns tailored to your business goals. Reach your audience with the right message at the right time.',
  },
  {
    title: 'Facebook Ads',
    description:
      'Generate quality leads and brand awareness through targeted Facebook advertising. I create engaging creatives, test strategies, and analyze performance.',
  },
];

const Services = () => {
  return (
    <div className="services-container">
      <h1 className="services-title">My Services</h1>
      <div className="services-grid">
        {servicesData.map((service, index) => (
          <div className="service-card" key={index}>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;