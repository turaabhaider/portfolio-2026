import React from 'react';

const steps = [
  {
    num: "01",
    title: "Discovery",
    desc: "We analyze your business goals and technical requirements to define a clear roadmap."
  },
  {
    num: "02",
    title: "Architecture",
    desc: "Designing the database schemas and system infrastructure for maximum scalability."
  },
  {
    num: "03",
    title: "Development",
    desc: "Sprinting through the build using clean, modular code with regular progress updates."
  },
  {
    num: "04",
    title: "Deployment",
    desc: "Rigorous testing followed by a seamless launch and performance optimization."
  }
];

export default function Process() {
  return (
    <section className="py-32 px-8 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-black italic mb-20 tracking-tighter">HOW I <span className="text-blue-600">WORK.</span></h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step) => (
            <div key={step.num} className="group">
              <span className="text-5xl font-black text-slate-800 group-hover:text-blue-600 transition-colors duration-500">
                {step.num}
              </span>
              <h4 className="text-xl font-bold mt-6 mb-4 uppercase tracking-widest">{step.title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}