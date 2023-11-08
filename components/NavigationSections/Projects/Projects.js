import TechStack from "@/components/TechStack/TechStack";
import { socialMediaIcons } from "@/config/iconsConfig";
import { projectsConfig } from "@/config/projectsConfig";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export default function Projects() {
    return (
        <section className="flex flex-col gap-8">
            {projectsConfig.map((data, key) => (
                <article key={key} className="grid grid-flow-col auto-cols-auto gap-2">
                    <div>
                        <h2 className="text-xl font-bold">{data.name}</h2>
                        <TechStack techStack={data.techStack} />

                        <div>
                            {data.description.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
                        </div>

                        <div className="flex gap-2 items-baseline">
                            {
                                data.githubLink && <a
                                    className="icon-link"
                                    href={data.githubLink}
                                    title="GitHub"
                                    target="_blank"
                                >
                                    <FontAwesomeIcon icon={socialMediaIcons["GitHub"]} size="2xl" />
                                </a>
                            }

                            {
                                data.link && <a
                                    className="icon-link"
                                    href={data.link}
                                    title="Link"
                                    target="_blank"
                                >
                                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xl" />
                                </a>
                            }
                        </div>
                    </div>
                </article>
            ))}
        </section>
    );
}