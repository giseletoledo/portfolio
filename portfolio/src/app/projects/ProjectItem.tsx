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
}

const ProjectItem: React.FC<ProjectItemProps> = ({ title, description, features, technologies, imageSrc, url }) => {
  return (
    <div className={styles.projectItem}>
      <h2>{title}</h2>
      <div className={styles.imageContainer}>
        <div className={styles.imageWrapper}>
          <Image 
            src={imageSrc} 
            alt={title} 
            sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw" 
            fill 
            style={{ objectFit: 'cover', borderRadius: '12px', backgroundColor: '#282626', objectPosition: 'top left' }} 
            priority 
          />
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