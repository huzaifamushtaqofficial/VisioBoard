import React from "react";

const useCases = [
  {
    name: "Dennis Dao",
    role: "Distinguished Software Architect, MSDson",
    text: "What I love most is its Markdown note-taking feature, which allows you to include snapshots of diagrams directly in the canvas. Clicking on these snapshots takes you straight to the relevant diagram section.",
  },
  {
    name: "Alex Kenley",
    role: "Technical Director, Mast Mac",
    text: "As a proof of concept, using ViscoBoard I manually built out a VMWare validated design which is a fairly complex conceptual design for NSX-T Network Virtualization in an enterprise environment. ... I put this whole thing together in under an hour. Pretty wild.",
  },
  {
    name: "Web Dev Cody",
    role: "@WebDevCody",
    text: "What does larger scale software development look like?",
    video: true,
  },
  {
    name: "TomDoesTech",
    role: "@TomDoesTech",
    text: "Building Large Scale Microservice Applications",
    video: true,
  },
  {
    name: "Fernando Borretti",
    role: "Software engineer @ Mathspace",
    text: "I've recently started using ViscoBoard and it's simply delightful: the best of Graphviz and Figma and code-to-diagrams in a neat UI.",
  },
  {
    name: "Terrance Bryant",
    role: "Founder, ScaleArcs",
    text: "All of the things that I was doing in 15 different places all in one place. It makes my architecture job easier. And committing back to the codebase is great.",
  },
];

function UseCases() {
  return (
    <section id="Reviews" className="py-16 bg-white text-black">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold">Loved by Devolpers & Reviews</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 border border-gray-200 rounded-xl shadow-xl text-left transition-transform transform hover:scale-105 hover:shadow-2xl cursor-pointer"
            >
              {useCase.video ? (
                <div className="relative rounded-md overflow-hidden h-40 flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500">
                  <span className="text-white text-lg font-semibold">🎥 Watch Video</span>
                </div>
              ) : null}
              <h3 className="text-lg font-bold mt-4 text-gray-900">{useCase.name}</h3>
              <p className="text-sm text-gray-500">{useCase.role}</p>
              <p className="mt-2 text-gray-700">{useCase.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default UseCases;
