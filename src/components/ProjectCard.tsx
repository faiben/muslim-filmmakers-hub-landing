
import React from 'react';
import { Button } from '@/components/ui/button';
import { BookOpen, Plus } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  challenge: string;
  additionalInfo: string;
  gradient: string;
  accentColor: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const getAccentClasses = (color: string) => {
    return color === 'blue' 
      ? {
          button: 'hover:bg-blue-700',
          outline: 'border-blue-600 text-blue-600 hover:bg-blue-50',
          bg: 'bg-blue-600',
          text: 'text-blue-600'
        }
      : {
          button: 'hover:bg-amber-700',
          outline: 'border-amber-600 text-amber-600 hover:bg-amber-50',
          bg: 'bg-amber-500',
          text: 'text-amber-600'
        };
  };

  const classes = getAccentClasses(project.accentColor);

  return (
    <div className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2">
      {/* Gradient Header */}
      <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
      
      <div className="p-8 lg:p-10">
        {/* Title Section */}
        <div className="mb-6">
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
            {project.title}
          </h3>
          <p className={`text-lg font-medium ${classes.text}`}>
            {project.subtitle}
          </p>
        </div>

        {/* Description */}
        <div className="mb-6">
          <p className="text-gray-700 leading-relaxed mb-4">
            {project.description}
          </p>
        </div>

        {/* Challenge Section */}
        <div className="mb-6">
          <h4 className="font-semibold text-gray-900 mb-3">
            {project.id === 1 ? "The Challenge We Face" : "The Creative Dilemma Facing Muslim Filmmakers"}
          </h4>
          <p className="text-gray-600 leading-relaxed mb-3">
            {project.challenge}
          </p>
          <p className="text-gray-600 leading-relaxed">
            {project.additionalInfo}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <Button 
            className={`${classes.bg} text-white ${classes.button} flex-1 h-12 text-lg font-medium rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl group`}
          >
            <BookOpen className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
            Read More
          </Button>
          <Button 
            variant="outline" 
            className={`${classes.outline} flex-1 h-12 text-lg font-medium rounded-xl border-2 transition-all duration-300 group`}
          >
            <Plus className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
            Contribute
          </Button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
        <div className={`w-16 h-16 rounded-full ${classes.bg}`}></div>
      </div>
    </div>
  );
};

export default ProjectCard;
