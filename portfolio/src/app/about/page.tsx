'use client';

import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import styles from './about.module.css';
import { SiHtml5, SiCss3, SiJavascript, SiReact,SiTypescript, SiFastapi, SiPython, SiNodedotjs, SiGooglecolab, SiDocker, SiMysql, SiMongodb } from 'react-icons/si';
import { RiNextjsLine } from "react-icons/ri";
import { TbBrandFramerMotion } from "react-icons/tb";


const About: React.FC = () => {
  return (
    <Layout>
      <motion.div
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        exit={{ y: '100%' }}
        transition={{ duration: 1 }}
        className={styles.container}
      >
        <h1 className={styles.title}>Quem sou eu?</h1>
        <div className={styles.content}>
          <div className={styles.text}>
            <p>Sou desenvolvedora com experiência nas linguagens Javascript e Python, frameworks NodeJS, Flask e Next.js. Conhecimento em Java, FastAPI, SQL, PostgresSQL, Mongodb e Cloud.</p>
            <h2>Tecnologias</h2>
            <div className={styles.icons}>
             <SiHtml5 className={styles.icon} />
             <SiCss3 className={styles.icon}/>
             <SiJavascript className={styles.icon} />
             <SiTypescript className={styles.icon} />
             <SiReact className={styles.icon} />
             <SiNodedotjs className={styles.icon} />
             <SiPython className={styles.icon}/>
             <SiFastapi className={styles.icon}/>
             <SiDocker className={styles.icon}/>
             <SiMysql className={styles.icon}/>
             <SiMongodb className={styles.icon}/>
            </div>
            <h2>Trajetória</h2>
            Minha formação em TI começou no curso técnico em Informática, onde conheci redes, hardware e lógica de programação.
            A experiência com linguagens como Cobol, Pascal e Delphi, além do uso de banco de dados sem interface gráfica,
            com criação de tabelas diretamente no terminal MS-DOS,
            reforçou minha familiaridade com ambientes baseados em terminal.
            Posteriormente, conclui a graduação em Análise e Desenvolvimento de Sistemas, com disciplinas voltadas à programação orientada a objetos, testes e engenharia de software. Atuei como desenvolvedora Full Stack, com foco em JavaScript, Python e MySQL,
            utilizando metodologias ágeis como Scrum e Kanban para entregar soluções escaláveis e bem estruturadas.
            <h2>Interesses</h2>
            <p>
              Atualmente, direciono meu aprendizado para o desenvolvimento de software com Inteligência Artificial,
              após formações recentes em cloud computing com AWS e IA generativa com o Google.
              Busco integrar esses conhecimentos à minha experiência em desenvolvimento,
              contribuindo em projetos de software inteligentes, robustos e inovadores.
              Tecnologias - Langchain, GenAI, OpenAI, Hugging Face.
            </p>
            <p>Tecnologias usadas na criação da página:</p>
        <ul>
        <li className={styles.techItem}>
              <span className="material-icons"><RiNextjsLine/></span> Next.js
            </li>
            <li className={styles.techItem}>
              <span className="material-icons"><TbBrandFramerMotion /></span> Framer Motion
            </li>
            <li className={styles.techItem}>
              <span className="material-icons"><SiReact/></span> React
            </li>
        </ul>
          </div>
          <div className={styles.imageContainer}>
            <img src="./images/profile.png" alt="Profile" className={styles.image} />
          </div>
        </div>
      </motion.div>
    </Layout>

  );
};

export default About;
