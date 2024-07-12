'use client';

import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import styles from './about.module.css';

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
        <h1>Sobre</h1>
        <p>Tecnologias usadas na criação da página:</p>
        <ul>
        <li className={styles.techItem}>
              <span className="material-icons">code</span> Next.js
            </li>
            <li className={styles.techItem}>
              <span className="material-icons">storage</span> PostgreSQL
            </li>
            <li className={styles.techItem}>
              <span className="material-icons">brush</span> Framer Motion
            </li>
            <li className={styles.techItem}>
              <span className="material-icons">devices</span> React
            </li>
        </ul>
      </motion.div>
    </Layout>
  );
};

export default About;
