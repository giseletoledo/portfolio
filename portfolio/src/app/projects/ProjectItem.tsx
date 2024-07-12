import Image from 'next/image';
import styles from './projectItem.module.css';

interface ProjectItemProps {
  title: string;
  description: string;
  features: string;
  technologies: string[];
  imageSrc: string;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ title, description, features, technologies, imageSrc }) => {
  return (
    <div className={styles.projectItem}>
      <h2>{title}</h2>
      <div className={styles.imageContainer}>
        <div className={styles.imageWrapper}>
          <Image src={imageSrc} alt={title} width={250} height={120} priority />
        </div>
      </div>
      <p>{description}</p>
      <h4>Funcionalidades</h4>
      <p>{features}</p>
      <h4>Tecnologias Utilizadas</h4>
      <ul>
        {technologies.map((technology, index) => (
          <li key={index}>{technology}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectItem;
