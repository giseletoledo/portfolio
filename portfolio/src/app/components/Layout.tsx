import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Layout.module.css';
import Head from 'next/head';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const pathname = usePathname();

  return (
    <>
      <Head>
        <link rel="stylesheet" href="/path/to/your/styles.css" />
      </Head>
      <div className={styles.container}>
        <nav className={styles.navbar}>
          <Link href="/" className={pathname === '/' ? styles.active : ''}>Home</Link>
          <Link href="/timeline" className={pathname === '/timeline' ? styles.active : ''}>Experiência  Profissional</Link>
          <Link href="/projetos" className={pathname === '/projetos' ? styles.active : ''}>Projetos</Link>
          <Link href="/about" className={pathname === '/about' ? styles.active : ''}>Sobre</Link>
        </nav>
        <main className={styles.main}>
          {children}
        </main>
        <footer className={styles.footer}>
          <p>&copy; 2024 Desenvolvido por Gisele. Todos os direitos reservados.</p>
        </footer>
      </div>
    </>
  );
};

export default Layout;
