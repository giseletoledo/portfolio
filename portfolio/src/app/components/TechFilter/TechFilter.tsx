import React from 'react';
import styles from './techFilter.module.css';

interface Tech {
  name: string;
  icon: React.ElementType;
}

interface TechFilterProps {
  selectedTech: string | null;
  techIcons: Tech[];
  toggleTech: (tech: string) => void;
  clearFilter: () => void;
}

const TechFilter: React.FC<TechFilterProps> = ({ selectedTech, techIcons, toggleTech, clearFilter }) => (
  <div className={styles.techFilter}>
    <button
      className={`${styles.techButton} ${!selectedTech ? styles.active : ''}`}
      onClick={clearFilter}
      title="Mostrar Todos"
    >
      Todos
    </button>

    {techIcons.map(({ name, icon: Icon }) => (
      <button
        key={name}
        className={`${styles.techButton} ${selectedTech === name ? styles.active : ''}`}
        onClick={() => toggleTech(name)}
        title={name}
      >
        <Icon /> {/* Removido o size prop */}
      </button>
    ))}
  </div>
);

export default TechFilter;