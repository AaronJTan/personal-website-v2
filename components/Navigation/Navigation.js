import { navigation } from "@/config/navigationConfig";

export default function Navigation({ currSection, setCurrSection }) {
    return (
        <nav>
            <ul className="grid grid-cols-4 text-center font-bold">
                {Object.keys(navigation).map((key) => (
                    <li key={key}
                        className="hover:bg-[#212529] py-2"
                        onClick={() => setCurrSection(key)}
                    >
                        <span className={`${key === currSection ? 'border-b-4 border-blue-200' : 'light-gray-text'}`}>
                            {navigation[key]}
                        </span>
                    </li>
                ))}
            </ul>
        </nav>
    );
}