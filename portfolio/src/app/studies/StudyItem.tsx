import Image from 'next/image';
import styles from './studyItem.module.css';
import Link from 'next/link';

interface StudyItemProps {
  title: string;
  description: string;
  features: string;
  technologies: string[];
  imageSrc: string;
  url: string;
}

const StudyItem: React.FC<StudyItemProps> = ({ title, description, features, technologies, imageSrc, url }) => {

  return (
    <article className={`${styles.studyItem}`}>
      <header>
        <h2>{title}</h2>
      </header>
      <div className={styles.imageContainer}>
        <div className={styles.imageWrapper}>
          <Image
            src={imageSrc}
            alt={title}
            fill
            style={{ objectFit: 'contain', borderRadius: '12px', padding: '0px 10px', backgroundColor:'#282626' }}
            priority
          />
        </div>
      </div>
      <section>
        <p>{description}</p>
        <h4 className={styles.studyItemTitle}>Funcionalidades</h4>
        <p>{features}</p>
        <h4 className={styles.studyItemTitle}>Tecnologias Utilizadas</h4>
        <ul>
          {technologies.map((technology, index) => (
            <li key={index}>{technology}</li>
          ))}
        </ul>
        <footer>
          <Link href={url} target="_blank" rel="noopener noreferrer">
            {url}
          </Link>
        </footer>
      </section>
    </article>
  );
};

export default StudyItem;
