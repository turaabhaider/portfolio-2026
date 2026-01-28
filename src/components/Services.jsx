import React from 'react';

const Services = () => {
  const services = [
    { title: "Full-Stack Web Apps", price: "Starting from $2k", detail: "End-to-end scalable solutions built with clean architecture." },
    { title: "API Design & Integration", price: "Custom Solutions", detail: "Building robust, secure, and fast RESTful APIs for your ecosystem." },
    { title: "Performance Optimization", price: "Audit Required", detail: "Turning slow, legacy apps into lightning-fast user experiences." }
  ];

  return (
    <section className="py-24 px-6 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
              I help businesses build <br /> 
              <span className="text-blue-600">revenue-generating</span> software.
            </h2>
          </div>
          <p className="text-slate-400 max-w-sm">
            Focusing on scalability, security, and clean code to ensure your business stays ahead of the curve.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.title} className="p-8 rounded-3xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800">
              <h4 className="text-blue-500 font-bold mb-2">{service.price}</h4>
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-slate-400 leading-relaxed">{service.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;