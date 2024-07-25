import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from './Navbar.module.css';

interface NavbarProps {
  pathname: string;
}

const Navbar: React.FC<NavbarProps> = ({ pathname }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.hamburger} onClick={toggleMenu}>
      <span className="material-symbols-outlined">
            menu
      </span>
      </div>
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: isOpen ? 'auto' : 0 }} //ajusta de acordo com o conteudo
        className={styles.menu}
      >
        <Link href="/" className={pathname === '/' ? styles.active : ''}>Home</Link>
        <Link href="/timeline" className={pathname === '/timeline' ? styles.active : ''}>Experiência Profissional</Link>
        <Link href="/projects" className={pathname === '/projects' ? styles.active : ''}>Projetos</Link>
        <Link href="/studies" className={pathname === '/studies' ? styles.active : ''}>Estudos</Link>
        <Link href="/about" className={pathname === '/about' ? styles.active : ''}>Sobre</Link>
      </motion.div>
    </nav>
  );
};

export default Navbar;
