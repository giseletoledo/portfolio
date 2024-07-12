"use client";
import React from 'react';
import ProjectItem from './ProjectItem';
import { motion } from 'framer-motion';
import styles from './projects.module.css';
import Layout from '../components/Layout';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Angular ntt-movie',
      description: 'Projeto de consumo de API de filmes com Angular. Busca de filmes na API OMDB',
      features:'Filtro de busca dos filmes favoritos',
      technologies: ['Angular 17', 'Git', 'GitHub'],
      imageSrc: '/images/movieapi_angular.png',
    },
    {
      title: 'Next.js News Portal',
      description: 'Portal de notícias responsivo utilizando Next.js',
      features:'Configuração do Next.js para lidar com as requisições do backend. (Saiba mais em Routing: API Routes | Next.js)',
      technologies: ['Next.js 14', 'React 18', 'TypeScript'],
      imageSrc: '/images/newsapi_nextjs.png',
    },
    // Adicione mais projetos conforme necessário
  ];

  return (
    <Layout>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={styles.container}
    >
      <div className={styles.projectsGrid}>
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={styles.projectsItem}
          >
            <ProjectItem
              title={project.title}
              description={project.description}
              features={project.features}
              technologies={project.technologies}
              imageSrc={project.imageSrc}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
    </Layout>

  );
};

export default Projects;
