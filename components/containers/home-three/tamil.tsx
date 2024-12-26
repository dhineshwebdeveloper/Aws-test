"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import one from "@/public/img/pricing-shape.png";
import { text } from "stream/consumers";

// Type definition for pricing plans
type PricingPlan = {
  id: number;
  title: string;
  subTitle: string;
  price: string;
  priceOld: number;
  priceMonth: string;
  description: string;
  features: string[];
  disclaimer: string;
};

const HomeThreePricing = () => {
  const [tab, setTab] = useState(0);
  const [activeModal, setActiveModal] = useState<number | null>(null);

  // Pricing Plans Data
  const pricingPlans: PricingPlan[] = [
    {
      id: 1,
      title: "Regular",
      subTitle: "Basic",
      price: "779.00",
      priceOld: 120.99,
      priceMonth: "/mo",
      description: "A great way to get started First plan for wordpress ",
      features: [
        "1 website",
        "30 GB NVMe storage",
        "Unmetered bandwidth",
        "Free SSL Certificate *",
        "WordPress pre-installed",
        "Daily + on-demand backups",
        "Web Application Firewall",
        "Daily malware scans",
        "One-time malware removal",
        "Up to 2x faster performance with global Cloudflare CDN",
        "Enhanced security with DDoS protection",
        "Staging site",
        "WordPress code optimizer",
        "Smart WordPress plugin manager",
        "Sell online with WooCommerce",
       
      ],
      disclaimer:
        "*An SSL certificate is included with every site and free for the life of the hosting plan. Our hassle-free certificates are automatically installed, validated and renewed. The strong 2048-bit encryption will ensure all transactions are secure. Annual plan purchase required.",
    },
    {
      id: 2,
      title: "Premium",
      subTitle: "Deluxe",
      price: "1,139.00",
      priceOld: 120.99,
      priceMonth: "/mo",
      description: "Improve your site performance with Cloudflare CDN.",
      features: [
        "1 website",
        "30 GB NVMe storage",
        "Unmetered bandwidth",
        "Free SSL Certificate *",
        "WordPress pre-installed",
        "Daily + on-demand backups",
        "Web Application Firewall",
        "Daily malware scans",
        "One-time malware removal",
        "Up to 2x faster performance with global Cloudflare CDN",
        "Enhanced security with DDoS protection",
        "Staging site",
        "WordPress code optimizer",
        "Smart WordPress plugin manager",
        "Sell online with WooCommerce",
      ],
      disclaimer:
        "*An SSL certificate is included with every site and free for the life of the hosting plan. Our hassle-free certificates are automatically installed, validated and renewed. The strong 2048-bit encryption will ensure all transactions are secure. Annual plan purchase required.** Page load times compared to leading WordPress hosting providers Flywheel, Automattic, Siteground, Hostgator, Dreamhost, Namecheap, Hostinger, Bluehost and IONOS for page load times between January and March 2023. Amohaa Web Services does not claim that Managed WordPress Hosting has the industry best page load performance. Actual performance may vary by region. Please see terms and conditions for any uptime guarantee.",
    },
    {
      id: 3,
      title: "Business",
      subTitle: "Ultimate",
      price: "979.00",
      priceOld: 120.99,
      priceMonth: "/mo",
      description: "Add online marketing with more sites, storage and security.",
      features: [
        "1 website",
        "30 GB NVMe storage",
        "Unmetered bandwidth",
        "Free SSL Certificate *",
        "WordPress pre-installed",
        "Daily + on-demand backups",
        "Web Application Firewall",
        "Daily malware scans",
        "Unlimited malware removal",
        "Up to 2x faster performance with global Cloudflare CDN",
        "Enhanced security with DDoS protection",
        "Staging site",
        "WordPress code optimizer",
        "Smart WordPress plugin manager",
        "Sell online with WooCommerce",

      ],
      disclaimer:
        "*An SSL certificate is included with every site and free for the life of the hosting plan. Our hassle-free certificates are automatically installed, validated and renewed. The strong 2048-bit encryption will ensure all transactions are secure. Annual plan purchase required.** Page load times compared to leading WordPress hosting providers Flywheel, Automattic, Siteground, Hostgator, Dreamhost, Namecheap, Hostinger, Bluehost and IONOS for page load times between January and March 2023. Amohaa Web Services does not claim that Managed WordPress Hosting has the industry best page load performance. Actual performance may vary by region. Please see terms and conditions for any uptime guarantee.",
    },
  ];

  return (
    <section className="pricing-section fix section-padding section-bg">
      <div className="pricing-shape">
        <Image src={one} alt="Shape Image" priority />
      </div>

      <div className="container">
        <div className="section-title text-center">
          <span>Pricing Plans</span>
          <h2>Choose an Awesome Plan for Your Needs</h2>
        </div>

        <div className="tab-content">
          <div id="monthly" className={`tab-pane fade ${tab === 0 ? "show active" : ""}`}>
            <div className="row justify-content-center align-items-center">
              {pricingPlans.map((plan) => (
                <div key={plan.id} className="col-xl-3 col-lg-4 col-md-6">
                  <div className={`pricing-items style-2 ${plan.id === 2 ? "active" : ""}`}>
                    <h6 className="top-text">{plan.title}</h6>
                    <div className="pricing-header-2">
                      <div className="price-list">
                        {/* <del>${plan.priceOld.toFixed(2)}</del> */}
                        <span>{plan.subTitle}</span>
                      </div>
                      <h2>
                        ₹{plan.price} <sub>{plan.priceMonth}</sub>
                      </h2>
                    </div>
                    <p className="text-center">{plan.description}</p>
                    <ul className="pricing-list">
                      {plan.features.map((feature, idx) => {
                       
                        const isAvailable =
                          (plan.id === 1 && idx < 9) || (plan.id === 2 && idx < plan.features.length - 3) || plan.id === 3;
                        const iconClass = isAvailable ? "fa-check" : "fa-xmark";
                        const iconColor = isAvailable ? "green" : "red";

                        return (
                          <li key={idx} className="pricing-feature-item">
                            <span style={{ display: "flex", alignItems: "center" }}>
                              <i
                                className={`fa-solid ${iconClass}`}
                                style={{ color: iconColor, marginRight: "8px" }}
                              ></i>
                              {feature}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                    <div className="pricing-button">
                      <Link href="contact" className="pricing-btn">
                        Buy now <i className="fa-solid fa-arrow-right-long"></i>
                      </Link>
                    </div>

                    {/* Disclaimer Trigger */}
                    <div
                      className="disclaimer"
                      role="button"
                      onClick={() => setActiveModal(plan.id)}
                    >
                      <u >Disclaimer</u>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal Overlay */}
      {activeModal && (
        <div className="modal-overlay" onClick={() => setActiveModal(null)} aria-hidden="true">
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h5>Disclaimers</h5>
              <button className="close-btn" onClick={() => setActiveModal(null)} aria-label="Close">
                &times;
              </button>
            </div>
            <div className="modal-body">
              <p style={{ textAlign: "justify" }}>
                {pricingPlans.find((plan) => plan.id === activeModal)?.disclaimer}
              </p>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(5px);
          z-index: 1000;
        }
          .pricing-list {
           list-style: none;
           padding: 0;
           margin: 0;
        }

       .pricing-feature-item {
         margin-bottom: 10px;
         font-size: 16px;
         color: #333;
        }

        .modal-content {
          background: #fff;
          padding: 20px;
          width: 90%;
          max-width: 500px;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          position: relative;
        }

        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10px;
        }

        .modal-header h5 {
          margin: 0;
        }

        .close-btn {
          background: none;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
        }

        .modal-body {
          line-height: 1.6;
          color: #333;
        }

        .pricing-btn {
          display: inline-block;
          padding: 10px 20px;
          background: #007bff;
          color: white;
          border-radius: 5px;
          text-decoration: none;
        }
      `}</style>
    </section>
  );
};

export default HomeThreePricing;
  