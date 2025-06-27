"use client";
import React from 'react';
import ProjectItem from './ProjectItem';
import { motion } from 'framer-motion';
import styles from './projects.module.css';
import Layout from '../components/Layout';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'ForumHub',
      description: 'ForumHub é uma aplicação backend desenvolvida em Java utilizando Spring Boot, destinada à gestão de tópicos em um fórum. Ela permite a criação, edição e consulta de tópicos baseados em cursos e datas de criação.',
      features: 'Persistência com JPA, Spring Security, Swagger',
      technologies: ['Java', 'API', 'MySql', 'JPA','Swagger'],
      imageSrc: '/images/forumhub_java.png',
      url: 'https://github.com/giseletoledo/forum',
    },
 {
      title: 'LiterAlura',
      description: 'Catálogo de Livros que ofereça interação textual (via console) com os usuários, proporcionando no mínimo 5 opções de interação. Os livros serão buscados através de uma API específica.',
      features: 'banco de dados e integração com API',
      technologies: ['Java', 'OOP', 'API Gutendex'],
      imageSrc: '/images/literalura_java.png',
      url: 'https://github.com/giseletoledo/literalura',
    },
    {
      title: 'Conversor de Moedas',
      description: 'Conversor de Moedas que oferece interação textual (via console) com os usuários, conversões de moedas em um menu. A taxa de conversão é obtida por meio da ExchangeRate API.',
      features: 'UIKIt, persistência, Navegação com segue e tabbar, integração com API',
      technologies: ['Java', 'API', 'OOP', 'ExchangeRate API'],
      imageSrc: '/images/conversor_moeda_java.png',
      url: 'https://github.com/giseletoledo/currency-converter',
    },
    {
      title:'Blog Kotlin Spring',
      description:'Este é um projeto de blog que permite aos usuários visualizar, pesquisar e interagir com artigos.',
      features:'Criar,editar com ckeditor, atualizar e deletar artigos',
      technologies: ['kotlin','JPA','Banco de dados H2','Postman'],
      imageSrc:'/images/form_cadastro_blog.png',
      url: 'https://github.com/giseletoledo/blog-kotlin-spring',
    },
    {
      title:'API de Gerenciamento de notas',
      description:'Esta é uma API para gerenciamento de notas utilizando .NET Core.',
      features:'A API permite criar, atualizar, deletar e listar notas',
      technologies: ['C#','Swagger','Postman'],
      imageSrc:'/images/apicsharp-notes.png',
      url: 'https://github.com/giseletoledo/TodoApiDocker',
    },
    {
      title:'Projeto: Catálogo de Livros com SQLite',
      description:'Este projeto implementa um sistema de catálogo de livros utilizando a biblioteca SQLite em Python. Projeto final do curso da IBM',
      features: 'O sistema permite cadastrar livros, buscar livros pelo título ou autor, verificar a disponibilidade de exemplares e realizar o empréstimo de livros.',
      technologies: ['Python','SQLite','Jupyter Notebook'],
      imageSrc:'/images/cadastro_python.png',
      url: 'https://github.com/giseletoledo/pythonSql',
    },
    {
      title:'[Backend] Desafio Autodidata - Potência Tech',
      description:'Esta é uma API Node.js para gerenciar registros e logins de usuários.',
      features: 'Criptografia de senha e autenticação',
      technologies: ['Node.js', 'Express.js','bcrypt', 'Postman'],
      imageSrc:'/images/autenticacao_node.png',
      url: 'https://github.com/giseletoledo/user-auth',
    },
    {
      title: 'Angular ntt-movie',
      description: 'Projeto de consumo de API de filmes com Angular. Busca de filmes na API OMDB',
      features:'Filtro de busca dos filmes favoritos',
      technologies: ['Angular 17', 'Git', 'GitHub'],
      imageSrc: '/images/movieapi_angular.png',
      url: 'https://github.com/giseletoledo/ntt-movie',
    },
    {
      title:'Expenses App',
      description:'Projeto de um app que controla gastos. Desafio do curso da MJV de criar um app com os conceitos ensinados durante o curso no prazo de 5 dias',
      features: 'Controle de gastos divididos em categorias',
      technologies: ['Flutter', 'Provider'],
      imageSrc:'/images/expensesapp_flutter.png',
      url: 'https://github.com/giseletoledo/expenses-app',
    },
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
      <h1>Projetos</h1>
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
              url={project.url}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
    </Layout>

  );
};

export default Projects;
