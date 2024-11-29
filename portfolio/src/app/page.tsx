'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Layout from './components/Layout';
import styles from './page.module.css';
import { FaHtml5, FaCss3Alt, FaBootstrap, FaPython, FaNode } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';

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
          <h2>Quem sou eu?</h2>
            <p>Sou desenvolvedora com experiência de mais de 7 anos com frontend principalmente com Javascript, no backend Python com Flask e NodeJS.</p>
            <h2>Tecnologias</h2>
            <div className={styles.icons}>
            <FaHtml5 className={styles.icon} />
            <FaCss3Alt className={styles.icon}/>
            <IoLogoJavascript className={styles.icon} />
            <FaBootstrap className={styles.icon} />
            <FaPython className={styles.icon} />
            <FaNode className={styles.icon} />
            </div>
            <h2>Trajetória</h2>
            <p>
              Comecei a trabalhar com web em 2011, no início com jogos educativos, animações e infográficos utilizando a linguagem Actionscript com Adobe Flash, depois foi feita a mudança de tecnologia para Javascript com HTML5.
            </p>
            <p>
              A partir de 2014, comecei a desenvolver páginas responsivas em times ágeis, consumo de API, desenvolvimento de aplicação backend com Node.js, testes com Selenium e mais recentemente em 2022 testes com Cypress.
            </p>
            <p>
              Participo de comunidades tech e eventos, sempre tentando auxiliar quem está começando.
            </p>
            <h2>Interesses</h2>
            <p>
              📚 Tenho interesse em desenvolvimento mobile e novas tecnologias, sou uma pessoa que gosta de estar sempre aprendendo novas tecnologias, por isso tenho projetos de diferentes tecnologias.
            </p>
          </div>
          <div className={styles.imageContainer}>
            <img src="./images/profile.png" alt="Profile" className={styles.image} />
          </div>
        </div>
       

      </motion.div>
    </Layout>
    
  );
};

export default Home;
