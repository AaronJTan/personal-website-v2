import TechStack from "@/components/TechStack/TechStack";
import { userConfig } from "@/config/userConfig";
import { workExperience } from "@/content/workExperienceContent";

export default function Work() {
    return (
        <section className="flex flex-col gap-8">

            {workExperience.map((data, key) => (
                <article key={key} className="grid grid-flow-col auto-cols-auto gap-2">
                    <div className="w-[40px] h-[40px] overflow-hidden rounded-full bg-blue-200">
                        <img className="w-full h-full" src={userConfig.profilePic} />
                    </div>

                    <div>
                        <div className="items-center flex gap-x-1 font-light text-xs light-gray-text">
                            <span className="font-bold">{userConfig.name}</span>
                            <span>{userConfig.username}</span>
                        </div>

                        <div>
                            <h3 className="text-md">{data.position}</h3>
                            <h2 className="text-xl font-bold">{data.company}</h2>
                            <p className="text-sm">{data.term}</p>
                            <TechStack techStack={data.techStack} />

                            <ul className="list-outside ml-5 list-disc mb-2">
                                {data.description.map((bulletPoint, index) => (
                                    <li key={index}>{bulletPoint}</li>
                                ))}
                            </ul>

                            <div className={`bg-white h-[75px] w-[50%] overflow-hidden rounded-lg ml-5`}>
                                <img className="object-contain w-full h-full" src={data.logo} alt={data.logo} />
                            </div>
                        </div>
                    </div>
                </article>
            ))}


        </section>
    );
}