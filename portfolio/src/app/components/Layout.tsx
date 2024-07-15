import { usePathname } from 'next/navigation';
import styles from './Layout.module.css';
import Navbar from './Navbar/Navbar';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const pathname = usePathname();

  return (
    <>
      <div className={styles.container}>
        <Navbar pathname={pathname}/>
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
