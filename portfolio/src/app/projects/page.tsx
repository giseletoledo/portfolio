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
      url: 'https://github.com/giseletoledo/ntt-movie',
      size: 'large',
    },
    {
      title: 'Next.js News Portal',
      description: 'Portal de notícias responsivo utilizando Next.js',
      features:'Configuração do Next.js para lidar com as requisições do backend. (Saiba mais em Routing: API Routes | Next.js)',
      technologies: ['Next.js 14', 'React 18', 'TypeScript'],
      imageSrc: '/images/newsapi_nextjs.png',
      url: 'https://github.com/giseletoledo/news-app',
      size: 'large',
    },
    {
      title: 'Landing page - Nextjs e Django',
      description: 'Frontend criado com Nextjs na versão 14 com API Route e Django 5.0.6.',
      features:'Envio de formulário salvando os dados no banco com sqlite',
      technologies: ['Next.js 14',
        'React 18',
        'TypeScript',
        'Axios',
        'React-Modal',
        'Django',
        'Django Rest Framework'],
      imageSrc: '/images/fullstack_django.png',
      url:'https://github.com/giseletoledo/nextjs-django',
      size: 'large',
    },
    {
      title:'API de Gerenciamento de Filmes',
      description:'A API de Gerenciamento de Filmes é uma aplicação para gerenciar informações sobre filmes',
      features:'Filmes: Os filmes são a entidade principal da API e possuem diversos atributos para descrever suas características.Usuários: Usuários podem adicionar os filmes favoritos',
      technologies: ['Java 17','JPA','Banco de dados H2','Postman'],
      imageSrc:'/images/apimovies_java.png',
      url: 'https://github.com/giseletoledo/academianttv2',
      size: 'large',
    },
    {
      title:'DIO - Trilha .NET - API e Entity Framework',
      description:'API e Entity Framework, da trilha .NET da DIO.',
      features: 'Um sistema gerenciador de tarefas, onde você poderá cadastrar uma lista de tarefas que permitirá organizar melhor a sua rotina.',
      technologies: ['.NET 8', 'ASP.NET Core','Entity Framework Core','SQL Server','Swagger'],
      imageSrc:'/images/apitarefas_csharp.png',
      url: 'https://github.com/giseletoledo/trilha-net-api-desafio',
      size: 'large',
    },
    {
      title:'Projeto: Catálogo de Livros com SQLite',
      description:'Este projeto implementa um sistema de catálogo de livros utilizando a biblioteca SQLite em Python. Projeto final do curso da IBM',
      features: 'O sistema permite cadastrar livros, buscar livros pelo título ou autor, verificar a disponibilidade de exemplares e realizar o empréstimo de livros.',
      technologies: ['Python','SQLite','Jupyter Notebook'],
      imageSrc:'/images/cadastro_python.png',
      url: 'https://github.com/giseletoledo/pythonSql',
      size: 'large',
    },
    {
      title:'[Backend] Desafio Autodidata - Potência Tech',
      description:'Esta é uma API Node.js para gerenciar registros e logins de usuários.',
      features: 'Criptografia de senha e autenticação',
      technologies: ['Node.js', 'Express.js','bcrypt'],
      imageSrc:'/images/autenticacao_node.png',
      url: 'https://github.com/giseletoledo/user-auth',
      size: 'large',
    },
    {
      title:'Chef Delivery App',
      description:'Projeto utilizando Swift UI',
      features: 'Lista um cardápio, com animação na splash screen e calculo de preços no carrinho.',
      technologies: ['Swift', 'SwiftUI', 'XCode'],
      imageSrc:'/images/ChefDelivery_iPhone.gif',
      url: 'https://github.com/giseletoledo/chef-delivery-app',
      size: 'small',
    },
    {
      title:'Expenses App',
      description:'Projeto de um app que controla gastos. Desafio do curso da MJV de criar um app com os conceitos ensinados durante o curso no prazo de 5 dias',
      features: 'Controle de gastos divididos em categorias',
      technologies: ['Flutter', 'Provider'],
      imageSrc:'/images/expensesapp_flutter.png',
      url: 'https://github.com/giseletoledo/expenses-app',
      size: 'small',
    },
    {
      title:'HQ App',
      description:'Projeto para listar dados da API',
      features: 'Listar dados da API da Marvel(http://marvel.com) e salva no banco de dados',
      technologies: ['Android', 'Viewmodel', 'RecyclerView', 'Databinding'],
      imageSrc:'/images/apimovies_android.png',
      url: 'https://github.com/giseletoledo/hq-comic-app',
      size: 'small',
    }
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
              size={project.size === 'large' || project.size === 'small' ? project.size : 'small'}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
    </Layout>

  );
};

export default Projects;
