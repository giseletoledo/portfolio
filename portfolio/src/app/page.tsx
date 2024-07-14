'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Layout from './components/Layout';
import styles from './page.module.css';


const Home: React.FC = () => {
  return (
    <Layout>
      <motion.div
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        exit={{ y: '100%' }}
        transition={{ duration: 1 }}
        className={styles.container}
      >
        <h1 className={styles.title}>Home</h1>
        <div className={styles.content}>
          <div className={styles.text}>
            <p>
              Comecei a trabalhar com web em 2011, no início com jogos educativos, animações e infográficos utilizando a linguagem Actionscript com Adobe Flash, devido a descontinuação do Flash em browsers e a necessidade de uso em dispositivos móveis fiz a transição de tecnologia para Javascript com HTML5.
            </p>
            <p>
              A partir de 2014, comecei a desenvolver páginas responsivas em times ágeis, consumo de API, desenvolvimento de aplicação backend com Node.js, testes com Selenium e mais recentemente em 2022 testes com Cypress.
            </p>
            <p>
              Participo de comunidades tech e eventos, sempre tentando auxiliar quem está começando.
            </p>
            <p>
              📚 Tenho interesse em desenvolvimento mobile e novas tecnologias, sou uma pessoa que gosta de estar sempre aprendendo novas tecnologias, por isso tenho projetos de diferentes tecnologias.
            </p>
          </div>
          <div className={styles.imageContainer}>
            <img src="./images/profile.jpeg" alt="Profile" className={styles.image} />
          </div>
        </div>
        <div className={styles.githubStats}>
  <h2>GitHub Statistics</h2>
  <div className={styles.githubStat}>
    <Image
      src="https://github-readme-stats.vercel.app/api/top-langs/?username=giseletoledo&layout=compact&theme=dark"
      alt="Top Languages"
      width={500}
      height={200}
    />
  </div>
  <div className={styles.githubStat}>
    <Image
      src="https://github-readme-activity-graph.vercel.app/graph?username=giseletoledo&theme=react-dark"
      alt="GitHub Activity Graph"
      width={800}
      height={300}
    />
  </div>
</div>
      </motion.div>
    </Layout>
    
  );
};

export default Home;
