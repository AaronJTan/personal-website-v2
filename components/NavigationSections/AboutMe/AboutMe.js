import { socialMediaConfig } from "@/config/socialMediaConfig";
import { aboutMe } from "@/content/aboutMeContent";

export default function AboutMe() {
    return (
        <section>
            <h2 className="text-2xl font-bold">&gt; Hello world!</h2>

            {aboutMe.paragraphs.map((paragraph, index) => (
                <p className="mb-5" key={index}>{paragraph}</p>
            ))}

            <p>
                Whether it's discussing tech trends, projects, job opportunities, or a casual chat, feel free to reach out
                via <a href={socialMediaConfig.LinkedIn} target="_blank">LinkedIn</a> or <a href={socialMediaConfig.Email} target="_blank">Email</a>. I look forward to hearing from you!
            </p>
        </section>
    );
}