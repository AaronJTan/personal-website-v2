import { socialMediaConfig } from "@/config/socialMediaConfig";

export default function AboutMe() {
    return (
        <section className="mt-5">
            <h2 className="text-2xl font-bold">&gt; Hello world!</h2>

            <p>
                I'm Aaron, a recent CS graduate from the University of Toronto
                with a passion for technology, solving problems, and making a positive impact in people's lives!
            </p>
            <br />
            <p>
                I have a keen interest in web application development and automation.
                I'm always eager to learn and always embrace opportunities to enhance my skills.
            </p>
            <br />
            <p>
                Outside of coding, you'll find me lifting weights at the gym, going for bike rides, or playing badminton.
            </p>
            <br />
            <p>
                Whether it's discussing tech trends, projects, job opportunities, or a casual chat, feel free to reach out
                via <a href={socialMediaConfig.LinkedIn} target="_blank">LinkedIn</a> or <a href={socialMediaConfig.Email} target="_blank">Email</a>. I look forward to hearing from you!
            </p>
        </section>
    );
}