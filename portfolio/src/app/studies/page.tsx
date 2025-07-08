"use client";
import React from 'react';
import StudyItem from './StudyItem';
import { motion } from 'framer-motion';
import styles from './studies.module.css';
import Layout from '../components/Layout';
import { useState } from 'react';

import {
  SiDotnet, SiTypescript, SiPython,
  SiNodedotjs, SiDocker, SiMysql, SiMongodb, SiAndroid, SiSwift
} from 'react-icons/si';

import { TbSql } from "react-icons/tb";
import TechFilter from '../components/TechFilter/TechFilter';

const techIcons = [
  { name: '.NET', icon: SiDotnet },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'Python', icon: SiPython },
  { name: 'Android', icon: SiAndroid },
  { name: 'Swift', icon: SiSwift },
  { name: 'SQL', icon: TbSql },
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'Docker', icon: SiDocker },
  { name: 'MySQL', icon: SiMysql },
  { name: 'MongoDB', icon: SiMongodb },
];

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
    title: 'HQ App',
    description: 'Aplicativo Android que faz o consumo de dados da API Marvel e persistência de dados com SQLite',
    features: 'Listar dados da API da Marvel(http://marvel.com) e salva no banco de dados',
    technologies: ['Android', 'Viewmodel', 'RecyclerView', 'Databinding', 'SQLite'],
    imageSrc: '/images/apimovies_android.png',
    url: 'https://github.com/giseletoledo/hq-comic-app',
  },
];


const Studies: React.FC = () => {
  const [selectedTech, setSelectedTech] = useState<string | null>(null);

  const toggleTech = (tech: string) => {
    setSelectedTech((prev) => (prev === tech ? null : tech));
  };

  const clearFilter = () => {
    setSelectedTech(null);
  };

  const filteredStudies = !selectedTech
    ? studies
    : studies.filter((study) =>
      study.technologies.some((t) =>
        t.toLowerCase().includes(selectedTech.toLowerCase())
      )
    );

  const hasNoStudies = filteredStudies.length === 0;

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
        <TechFilter
          selectedTech={selectedTech}
          techIcons={techIcons}
          toggleTech={toggleTech}
          clearFilter={clearFilter}
        />

        {hasNoStudies ? (
          <div className={styles.noStudies}>
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
            <p>Nenhum item de estudo encontrado.</p>
          </div>
        ) : (
          <div className={styles.studiesGrid}>
            {filteredStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                exit={{ y: '100%' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={styles.studiesItem}
              >
                <StudyItem {...study} />
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>
    </Layout>
  );
};

export default Studies;