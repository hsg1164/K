import React, { useState, useMemo } from 'react';
import { projectsData } from '../constants';
import type { Project } from '../types';

const categories = [
  { key: 'all', name: 'جميع المشاريع', icon: 'fa-th-large' },
  { key: 'ai', name: 'الذكاء الاصطناعي', icon: 'fa-robot' },
  { key: 'islamic', name: 'تطبيقات إسلامية', icon: 'fa-mosque' },
  { key: 'web', name: 'تطوير الويب', icon: 'fa-laptop-code' },
  { key: 'tools', name: 'أدوات مساعدة', icon: 'fa-tools' },
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
    <div className="project-card" data-category={project.category}>
        <div className="project-image">
            <img src={project.imageUrl} alt={project.title} />
            <div className="project-overlay">
                <div className="project-category">{project.categoryDisplay}</div>
            </div>
        </div>
        <div className="project-info">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-tech">
                {project.tech.map((t, i) => (
                    <span key={i}>{t}</span>
                ))}
            </div>
            <div className="project-links">
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn small-btn primary-btn">
                    <i className="fas fa-external-link-alt"></i> زيارة الموقع
                </a>
            </div>
        </div>
    </div>
);


const Projects: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState('all');

    const filteredProjects = useMemo(() => {
        if (activeFilter === 'all') return projectsData;
        return projectsData.filter(p => p.category === activeFilter);
    }, [activeFilter]);
    
  return (
    <section id="projects" className="projects">
        <div className="container">
            <div className="section-header">
                <div className="header-content">
                    <h2>مشاريعنا المميزة</h2>
                </div>
                <div className="underline"></div>
                <p className="section-description">نفخر بتقديم مجموعة متنوعة من أحدث وأبرز المشاريع التي قمنا بتطويرها لعملائنا، بتقنيات حديثة وتصاميم عصرية</p>
            </div>
            <div className="filter-buttons">
                <div className="filter-buttons-top">
                    <button className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`} onClick={() => setActiveFilter('all')}>
                        <i className="fas fa-th-large"></i><span>جميع المشاريع</span>
                    </button>
                    <button className={`filter-btn ${activeFilter === 'ai' ? 'active' : ''}`} onClick={() => setActiveFilter('ai')}>
                        <i className="fas fa-robot"></i><span>الذكاء الاصطناعي</span>
                    </button>
                    <button className={`filter-btn ${activeFilter === 'islamic' ? 'active' : ''}`} onClick={() => setActiveFilter('islamic')}>
                        <i className="fas fa-mosque"></i><span>تطبيقات إسلامية</span>
                    </button>
                </div>
                <div className="filter-buttons-bottom">
                    <button className={`filter-btn ${activeFilter === 'web' ? 'active' : ''}`} onClick={() => setActiveFilter('web')}>
                        <i className="fas fa-laptop-code"></i> تطوير الويب
                    </button>
                    <button className={`filter-btn ${activeFilter === 'tools' ? 'active' : ''}`} onClick={() => setActiveFilter('tools')}>
                        <i className="fas fa-tools"></i> أدوات مساعدة
                    </button>
                </div>
            </div>
            <div className="projects-container">
                {filteredProjects.map(project => (
                     <ProjectCard key={project.id} project={project} />
                ))}
            </div>
             <div className="view-more-container">
                <a href="#contact" className="btn secondary-btn view-more-btn">تواصل معنا لمناقشة مشروعك <i className="fas fa-arrow-left"></i></a>
            </div>
        </div>
    </section>
  );
};

export default Projects;
