import Image from 'next/image';
import styles from './projectItem.module.css';
import Link from 'next/link';

interface ProjectItemProps {
  title: string;
  description: string;
  features: string;
  technologies: string[];
  imageSrc: string;
  url: string;
  size: 'small' | 'large';
}

const ProjectItem: React.FC<ProjectItemProps> = ({ title, description, features, technologies, imageSrc, url, size}) => {
  const sizes = size === 'large' ? '(max-width: 768px) 100vw, 300px' : '(max-width: 768px) 100vw, 200px';

  return (
    <div className={`${styles.projectItem} ${styles[size]}`}>
      <h2>{title}</h2>
      <div className={styles.imageContainer}>
        <div className={styles.imageWrapper}>
          <Image src={imageSrc} alt={title} 
          fill style={{ objectFit: 'contain', borderRadius: '12px', padding: '0px 10px', backgroundColor:'#282626' }}
          sizes={sizes}
          priority />
        </div>
      </div>
      <p>{description}</p>
      <h4 className={styles.projectItemTitle}>Funcionalidades</h4>
      <p>{features}</p>
      <h4 className={styles.projectItemTitle}>Tecnologias Utilizadas</h4>
      <ul>
        {technologies.map((technology, index) => (
          <li key={index}>{technology}</li>
        ))}
      </ul>
      <div>
      <Link href={url} target="_blank" rel="noopener noreferrer">
{url}
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
