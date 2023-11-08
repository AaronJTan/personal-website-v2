import styles from './styles.module.css'

export default function TechStack({ techStack }) {
    
    return (
        <div className={styles.techStack}>
            {Array.isArray(techStack) && techStack.map((tech, index) => (
                <span className={styles.stackTag} key={index}>{tech}</span>
            ))}
        </div>
    );
}