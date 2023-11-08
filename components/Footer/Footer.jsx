import { getCurrentYear } from "@/utils/dateHelper";
import SocialMediaLinks from "../SocialMediaLinks/SocialMediaLinks";

export default function Footer() {
    return (
        <footer className="p-6 text-center">
            <p className="mb-1">Let's stay connected!</p>
            <SocialMediaLinks />
            <p className="text-xs light-gray-text mt-1">Copyright ©{getCurrentYear()} Aaron Tan. All Rights Reserved.</p>
        </footer>
    );
}