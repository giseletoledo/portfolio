"use client";
import React, { useState } from 'react';
import ProjectItem from './ProjectItem';
import { motion } from 'framer-motion';
import styles from './projects.module.css';
import Layout from '../components/Layout';

import {
  SiDotnet, SiTypescript, SiPython,
  SiNodedotjs, SiDocker, SiMysql, SiMongodb, SiKotlin, SiFlutter
} from 'react-icons/si';

import { FaJava } from "react-icons/fa6";

const techIcons = [
  { name: '.NET', icon: SiDotnet },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'Python', icon: SiPython },
  { name: 'Kotlin', icon: SiKotlin },
  { name: 'Java', icon: FaJava },
  { name: 'Flutter', icon: SiFlutter },
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'Docker', icon: SiDocker },
  { name: 'MySQL', icon: SiMysql },
  { name: 'MongoDB', icon: SiMongodb },
];

const projects = [
  {
    title: 'ForumHub',
    description: 'ForumHub é uma aplicação backend desenvolvida em Java utilizando Spring Boot.',
    features: 'Persistência com JPA, Spring Security, Swagger',
    technologies: ['Java', 'API', 'MySql', 'JPA', 'Swagger'],
    imageSrc: '/images/forumhub_java.png',
    url: 'https://github.com/giseletoledo/forum',
  },
  {
    title: 'LiterAlura',
    description: 'Catálogo de Livros com interação via console. Busca por API.',
    features: 'Banco de dados e integração com API',
    technologies: ['Java', 'OOP', 'API Gutendex'],
    imageSrc: '/images/literalura_java.png',
    url: 'https://github.com/giseletoledo/literalura',
  },
  {
    title: 'Conversor de Moedas',
    description: 'Conversor que utiliza ExchangeRate API.',
    features: 'UIKit, persistência, integração com API',
    technologies: ['Java', 'API', 'OOP', 'ExchangeRate API'],
    imageSrc: '/images/conversor_moeda_java.png',
    url: 'https://github.com/giseletoledo/currency-converter',
  },
  {
    title: 'Blog Kotlin Spring',
    description: 'Blog com edição de artigos usando CkEditor',
    features: 'CRUD completo com Spring',
    technologies: ['Kotlin', 'JPA', 'Banco de dados H2', 'Postman'],
    imageSrc: '/images/form_cadastro_blog.png',
    url: 'https://github.com/giseletoledo/blog-kotlin-spring',
  },
  {
    title: 'API de Gerenciamento de notas',
    description: 'API REST em .NET Core para gerenciar notas.',
    features: 'CRUD com Swagger',
    technologies: ['C#', 'Swagger', 'Postman', '.NET', 'Docker'],
    imageSrc: '/images/apicsharp-notes.png',
    url: 'https://github.com/giseletoledo/TodoApiDocker',
  },
  {
    title: 'Catálogo de Livros com SQLite',
    description: 'Sistema de catálogo usando SQLite com Python.',
    features: 'Busca, cadastro e empréstimo de livros.',
    technologies: ['Python', 'SQLite', 'Jupyter Notebook'],
    imageSrc: '/images/cadastro_python.png',
    url: 'https://github.com/giseletoledo/pythonSql',
  },
  {
    title: 'Desafio Autodidata - Potência Tech',
    description: 'API Node.js para autenticação de usuários.',
    features: 'Criptografia de senha com bcrypt',
    technologies: ['Node.js', 'Express.js', 'bcrypt', 'Postman', 'JWT', 'Typescript'],
    imageSrc: '/images/autenticacao_node.png',
    url: 'https://github.com/giseletoledo/user-auth',
  },
  {
    title: 'Angular ntt-movie',
    description: 'Consumo de API de filmes com Angular.',
    features: 'Filtro de favoritos com OMDB API',
    technologies: ['Angular 17', 'Git', 'GitHub'],
    imageSrc: '/images/movieapi_angular.png',
    url: 'https://github.com/giseletoledo/ntt-movie',
  },
  {
    title: 'Expenses App',
    description: 'App para controle de gastos com Flutter.',
    features: 'Categorias, totais e navegação',
    technologies: ['Flutter', 'Provider'],
    imageSrc: '/images/expensesapp_flutter.png',
    url: 'https://github.com/giseletoledo/expenses-app',
  },
];

const Projects: React.FC = () => {

  const [selectedTech, setSelectedTech] = useState<string | null>(null);

  const toggleTech = (tech: string) => {
    setSelectedTech((prev) => (prev === tech ? null : tech));
  };

  const clearFilter = () => {
    setSelectedTech(null);
  };

  const filteredProjects = !selectedTech
    ? projects
    : projects.filter((project) =>
      project.technologies.some((t) =>
        t.toLowerCase().includes(selectedTech.toLowerCase())
      )
    );

  const hasNoProjects = filteredProjects.length === 0;

  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className={styles.container}
      >
        <h1>Projetos</h1>

        {/* Filtro de Tecnologias com Ícones */}
        <div className={styles.techFilter}>
          <button
            className={`${styles.techButton} ${!selectedTech ? styles.active : ''}`}
            onClick={clearFilter}
            title="Mostrar Todos"
          >
            Todos
          </button>

          {techIcons.map(({ name, icon: Icon }) => (
            <button
              key={name}
              className={`${styles.techButton} ${selectedTech === name ? styles.active : ''}`}
              onClick={() => toggleTech(name)}
              title={name}
            >
              <Icon size={24} />
            </button>
          ))}
        </div>

        {/* Lista de Projetos */}
        {hasNoProjects ? (
          <div className={styles.noProjects}>
            <svg
              fill="#000000"
              height="200px"
              width="200px"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32.811 32.811"
              xmlSpace="preserve"
            >
              <path d="M0,1.356v16.743h5.249v7.154v3.617v2.586h3.61v-2.586h15.423v2.586h3.606V18.098h4.923V1.356H0z M31.136,2.281 l-7.764,14.658h-4.783l7.762-14.658C26.351,2.281,31.136,2.281,31.136,2.281z M23.016,2.245l-7.766,14.66h-4.785l7.767-14.66 C18.232,2.245,23.016,2.245,23.016,2.245z M1.31,2.429l5.617-0.017L1.281,12.99L1.31,2.429z M7.468,17.06H2.684l7.763-14.658h4.785 L7.468,17.06z M24.282,25.252H8.859v-7.154h15.423C24.282,18.098,24.282,25.252,24.282,25.252z M32.149,16.811l-5.616-0.006 l5.646-10.576L32.149,16.811z" />
            </svg>
            <p>Nenhum projeto encontrado com essa tecnologia.</p>
          </div>
        ) : (
          <div className={styles.projectsGrid}>
            {filteredProjects.map((project, index) => (
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
                  url={project.url}
                />
              </motion.div>
            ))}
          </div>
        )}

      </motion.div>
    </Layout>
  );
};

export default Projects;