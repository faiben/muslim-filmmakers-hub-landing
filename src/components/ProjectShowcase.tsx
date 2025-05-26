import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectShowcase = () => {
  const projects = [
    {
      id: 1,
      title: "Islanema Film Academy",
      subtitle: "Premier Hybrid Islamic Film Academy",
      description: "To establish a premier hybrid Islamic film academy that equips Muslim filmmakers with world-class technical training, spiritual foundations, and industry connections—enabling them to create meaningful content that honors their faith while engaging diverse global audiences.",
      challenge: "Today's mainstream media often misrepresents Muslim identities, lacks spiritual depth, and presents values that conflict with Islamic ethics. This not only affects how others perceive Muslims but also impacts Muslim youth's understanding of their own identity and faith.",
      additionalInfo: "The entertainment industry shapes cultural narratives globally, yet few Muslim voices have the technical training, industry access, and spiritual grounding needed to create authentic, compelling content that reflects Islamic values.",
      gradient: "from-blue-600 to-blue-800",
      accentColor: "blue"
    },
    {
      id: 2,
      title: "Islanemapp",
      subtitle: "Empowering Muslim Filmmakers Worldwide",
      description: "A dedicated platform where Islamic filmmakers can showcase, monetize, and connect while maintaining complete compliance with Islamic jurisprudence",
      challenge: "Talented Muslim creators are caught between compromising their values for mainstream success or limiting their reach by staying within traditional Islamic circles.",
      additionalInfo: "This platform bridges the gap by providing a space where authenticity meets opportunity, enabling creators to thrive without compromising their faith.",
      gradient: "from-amber-500 to-orange-600",
      accentColor: "amber"
    }
  ];

  return (
    <section className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
          Our Projects
        </h2>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
          Two innovative initiatives designed to transform the landscape of Islamic filmmaking
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
