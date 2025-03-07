import React from 'react';

function Pricing() {
  return (
    <section id="pricing" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">Choose a Plan</h2>
        <p className="mt-4 text-gray-600 dark:text-gray-300">Select a pricing plan that fits your needs.</p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { title: "Free", price: "$0", features: ["5 files", "10 AI diagrams", "7-day version history"] },
            { title: "Professional", price: "$10", features: ["Unlimited files", "20 AI diagrams", "90-day version history"] },
            { title: "Business", price: "$20", features: ["Unlimited files", "40 AI diagrams", "Unlimited version history"] },
            { title: "Enterprise", price: "Contact Us", features: ["Unlimited everything", "Reference library", "Flexible deployments"] },
          ].map((plan, index) => (
            <div 
              key={index} 
              className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg cursor-pointer 
                         transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{plan.title}</h3>
              <p className="mt-2 text-3xl font-semibold text-primary">{plan.price} 
                <span className="text-sm text-gray-600 dark:text-gray-400">/month</span>
              </p>
              <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-300">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center justify-center">✔ {feature}</li>
                ))}
              </ul>
              <button className="mt-6 w-full bg-primary text-white py-2 rounded-lg hover:bg-opacity-90">Get Started</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;