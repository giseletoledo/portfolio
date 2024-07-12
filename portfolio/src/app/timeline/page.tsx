'use client';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import TimelineItem from './TimelineItem';
import styles from './timeline.module.css';

const Timeline: React.FC = () => {
  const timelineItems = [
    {
      year: '2022',
      title: 'Analista de sistemas',
      description: 'API, Nodejs, Linux, Cypress, AWS',
    },
    {
      year: '2018-2020',
      title: 'Portal de Notícias',
      description: 'WordPress, Edição de vídeo',
    },
    {
      year: '2015-2016',
      title: 'Portal de Sistema de Ensino',
      description: 'Templates Jinja, HTML/CSS, Bootstrap, JQuery',
    },
    {
      year: '2011-2014',
      title: 'Jornalismo Educativo',
      description: 'Flash/AS3,Photoshop,Illustrator',
    },
    {
      year: '2015-2016',
      title: 'Portal de Sistema de Ensino',
      description: 'Flash/AS3,Photoshop,Illustrator',
    },
    {
      year: '2009-2011',
      title: 'Freelancer',
      description: 'Photoshop, Illustrator,HTML/CSS'
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
        <h1 className={styles.title}>Linha do Tempo</h1>
        <div className={styles.timeline}>
          {/* Mapeando os itens da linha do tempo */}
          {timelineItems.map((item, index) => (
            <TimelineItem
              key={index}
              year={item.year}
              title={item.title}
              description={item.description}
              index={index} // Passando o índice para controlar o atraso
            />
          ))}
        </div>
      </motion.div>
    </Layout>
  );
};

export default Timeline;
