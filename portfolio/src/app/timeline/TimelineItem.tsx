// src/app/timeline/TimelineItem.tsx

// src/app/timeline/TimelineItem.tsx

import { motion } from 'framer-motion';
import styles from './timeline.module.css';

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  index: number; // Adicionando índice para controlar a ordem da animação
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  year,
  title,
  description,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className={styles.timelineItem}
    >
      
      <div className={styles.timelineYear}>{year}</div>
      <div className={styles.timelineContent}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </motion.div>
  );
};

export default TimelineItem;
