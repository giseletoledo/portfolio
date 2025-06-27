"use client";
import React from 'react';
import StudyItem from './StudyItem';
import { motion } from 'framer-motion';
import styles from './studies.module.css';
import Layout from '../components/Layout';

const Studies: React.FC = () => {
  const studies = [
    {
      title: 'Google Data Analytics Capstone',
      description: 'Projeto final do curso do Google de Análise de dados',
      features: 'análise exploratória,limpeza de dados, análise de dados com R',
      technologies: ['SQL', 'Big Query', 'Planilhas', 'R', 'Kaggle'],
      imageSrc: '/images/kaggle_fitbit_google_R.png',
      url: 'https://github.com/giseletoledo/case-study-wellness-smart',
    },
    {
      title: 'Gerador de video',
      description: 'Experimento com Python e Jupyter notebook para gerar vídeo a partir de imagens e legenda que o usuário cria',
      features: 'uso de bibliotecas para geração de video',
      technologies: ['Python', 'Jupyter Notebook'],
      imageSrc: '/images/gerador_video_python.png',
      url: 'https://github.com/giseletoledo/geradorvideocomIA',
    },
    {
      title: 'Tradutor de PDF',
      description: 'Projeto experimental para traduzir pdf de estudos de idiomas',
      features: 'bibliotecas de leitura de texto e tradução, com geração de áudio',
      technologies: ['Python', 'Jupyter Notebook'],
      imageSrc: '/images/tradutor_python.png',
      url: 'https://github.com/giseletoledo/leitorTexto',
    },
    {
      title: 'reMind',
      description: 'Aplicativo que utiliza Swift UI',
      features: 'Implementação de CoreData, MVVM e NavigationStack',
      technologies: ['Swift', 'SwiftUI', 'XCode', 'Animações'],
      imageSrc: '/images/remind_simulator_16.gif',
      url: 'https://github.com/giseletoledo/reMind',
    },
    {
      title: 'iOS Storyboard',
      description: 'Criação de interface com UIKit e conteúdo da API Marvel',
      features: 'UIKIt, persistência, Navegação com segue e tabbar, integração com API',
      technologies: ['Swift', 'API Marvel', 'UIKit', 'Storyboard'],
      imageSrc: '/images/comicapp_simulator_15_pro.png',
      url: 'https://github.com/giseletoledo/ComicsApp',
    },
    {
      title: 'DIO - Trilha .NET - API e Entity Framework',
      description: 'API e Entity Framework, da trilha .NET da DIO.',
      features: 'Um sistema gerenciador de tarefas, onde você poderá cadastrar uma lista de tarefas que permitirá organizar melhor a sua rotina.',
      technologies: ['.NET 8', 'ASP.NET Core', 'Entity Framework Core', 'SQL Server', 'Swagger'],
      imageSrc: '/images/apitarefas_csharp.png',
      url: 'https://github.com/giseletoledo/trilha-net-api-desafio',
    },
    {
      title: 'Chef Delivery App',
      description: 'Aplicativo que utiliza Swift UI',
      features: 'Lista um cardápio, com animação na splash screen e calculo de preços no carrinho.',
      technologies: ['Swift', 'SwiftUI', 'XCode', 'Animações'],
      imageSrc: '/images/chefdelivery_iphone.gif',
      url: 'https://github.com/giseletoledo/chef-delivery-app',
    },
    {
      title: 'iOS viewcode',
      description: 'Aplicativo iOS de previsão de tempo integrado com a API OpenWeather',
      features: 'Viewcode, integração com API',
      technologies: ['Swift', 'UIKit', 'Viewcode', 'API OpenWeather'],
      imageSrc: '/images/weatherapp_iphone15_pro.gif',
      url: 'https://github.com/giseletoledo/wheatherapp',
    },
    {
      title:'HQ App',
      description:'Aplicativo Android que faz o consumo de dados da API Marvel e persistência de dados com SQLite',
      features: 'Listar dados da API da Marvel(http://marvel.com) e salva no banco de dados',
      technologies: ['Android', 'Viewmodel', 'RecyclerView', 'Databinding','SQLite'],
      imageSrc:'/images/apimovies_android.png',
      url: 'https://github.com/giseletoledo/hq-comic-app',
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
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Layout>
  );
};

export default Studies;
