import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { socialMediaIcons } from '@/config/iconsConfig';
import { socialMediaConfig } from '@/config/socialMediaConfig';
import styles from './styles.module.css'

export default function SocialMediaLinks() {
    const socialMediaLinks = Object.keys(socialMediaConfig).map((dataKey) => (
        <a
            className='icon-link'
            key={dataKey}
            href={socialMediaConfig[dataKey]}
            title={dataKey}
            target="_blank"
        >
            <FontAwesomeIcon icon={socialMediaIcons[dataKey]} size="2xl" />
        </a>
    ));

    return (
        <div className={styles.socialLinks}>
            {socialMediaLinks}
        </div>
    );
}