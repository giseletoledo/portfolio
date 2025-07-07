'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Layout from './components/Layout';
import MenuRadial from './components/MenuRadial/MenuRadial';

const Home: React.FC = () => {
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <MenuRadial />
      </motion.div>
    </Layout>
  );
};

export default Home;
