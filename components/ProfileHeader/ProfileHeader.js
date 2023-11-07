import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SocialMediaLinks from "../SocialMediaLinks/SocialMediaLinks";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function ProfileHeader() {
    return (
        <header>
            <div className="h-36 md:h-48 bg-blue-200" />

            <div className="px-4 md:px-20">
                <div className="relative">
                    <div className="absolute top-[-50px] md:top-[-75px] w-[100px] md:w-[150px] h-[100px] md:h-[150px] overflow-hidden border-[#f1f3f5] border-4 rounded-full">
                        <img className="w-full h-full" src="/profile_pic.jpg" />
                    </div>

                    <div className="flex justify-end py-3">
                        <SocialMediaLinks />
                    </div>
                </div>

                <div className="user-info md:mt-5">
                    <h1 className="text-4xl font-bold">Aaron Tan</h1>
                    <span className="light-gray-text">@aaronjtan</span>

                </div>

                <div className="bio">
                    <p>Transforming ideas into reality through code! 👨‍💻</p>
                    <p>Software Developer. UofT Computer Science.</p>
                </div>

                <div className="light-gray-text flex gap-x-3">
                    <span><FontAwesomeIcon icon={faLocationDot} /> Toronto, ON</span>
                    <span><FontAwesomeIcon icon={faCalendar} /> Joined November 2023</span>
                </div>
            </div>
        </header>
    );
}