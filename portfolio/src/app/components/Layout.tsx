"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Layout.module.css';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const pathname = usePathname();

  return (
    <><div className={styles.container}>
      <nav className={styles.navbar}>
        <Link href="/" className={pathname === '/' ? styles.active : ''}>Home</Link>
        <Link href="/timeline" className={pathname === '/timeline' ? styles.active : ''}>Linha do Tempo</Link>
        <Link href="/about" className={pathname === '/about' ? styles.active : ''}>Sobre</Link>
      </nav>
      <main className={styles.main}>
        {children}
      </main>

    </div><footer className={styles.footer}>
        <p>&copy; 2024 Gisele. Todos os direitos reservados.</p>
      </footer></>
  );
};

export default Layout;