import { navigation } from "@/config/navigationConfig";

export default function Navigation({ selectedSection, setSelectedSection }) {
    return (
        <nav>
            <ul className="grid grid-flow-col grid-cols-auto text-center font-bold">
                {navigation.map((navItem) => (
                    <li key={navItem.name}
                        className="hover:bg-[#212529] py-2"
                        onClick={() => setSelectedSection(navItem)}
                    >
                        <span className={`${navItem.name === selectedSection.name ? 'border-b-4 border-blue-200' : 'light-gray-text'}`}>
                            {navItem.name}
                        </span>
                    </li>
                ))}
            </ul>
        </nav>
    );
}