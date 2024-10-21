"use client";
import React from 'react';
import StudyItem from './StudyItem';
import { motion } from 'framer-motion';
import styles from './studies.module.css';
import Layout from '../components/Layout';

const Studies: React.FC = () => {
  const studies = [
    {
      title: 'iOS Storyboard (Tic em trilhas)',
      description: 'Criação de interface com UIKit e conteúdo da API Marvel',
      features: 'UIKIt, persistência, Navegação com segue e tabbar, integração com API',
      technologies: ['Swift', 'API Marvel', 'UIKit', 'Storyboard'],
      imageSrc: '/images/ ComicApp_iPhone_15_Pro_tabbar.png',
      url: 'https://github.com/giseletoledo/ComicsApp',
      size: 'small',
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
      title:'DIO - Trilha .NET - API e Entity Framework',
      description:'API e Entity Framework, da trilha .NET da DIO.',
      features: 'Um sistema gerenciador de tarefas, onde você poderá cadastrar uma lista de tarefas que permitirá organizar melhor a sua rotina.',
      technologies: ['.NET 8', 'ASP.NET Core','Entity Framework Core','SQL Server','Swagger'],
      imageSrc:'/images/apitarefas_csharp.png',
      url: 'https://github.com/giseletoledo/trilha-net-api-desafio',
      size: 'large',
    },
    {
      title:'Chef Delivery App',
      description:'Aplicativo que utiliza Swift UI',
      features: 'Lista um cardápio, com animação na splash screen e calculo de preços no carrinho.',
      technologies: ['Swift', 'SwiftUI', 'XCode', 'Animações'],
      imageSrc:'/images/ChefDelivery_iPhone.gif',
      url: 'https://github.com/giseletoledo/chef-delivery-app',
      size: 'large',
    },
    {
      title: 'iOS viewcode (Backfront)',
      description: 'Aplicativo iOS de previsão de tempo integrado com a API OpenWeather',
      features: 'Viewcode, integração com API',
      technologies: ['Swift','UIKit', 'Viewcode', 'API OpenWeather'],
      imageSrc: '/images/WeatherAppiPhone15Pro.gif',
      url: 'https://github.com/giseletoledo/wheatherapp',
      size: 'large',
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
        <h1>Estudos</h1>
        <div className={styles.studiesGrid} >
          {studies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={styles.studiesItem}
            >
              <StudyItem
                title={study.title}
                description={study.description}
                features={study.features}
                technologies={study.technologies}
                imageSrc={study.imageSrc}
                url={study.url}
                size={study.size === 'large' || study.size === 'small' ? study.size : 'small'}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Layout>
  );
};

export default Studies;
