import AboutMe from "@/components/NavigationSections/AboutMe/AboutMe";
import Projects from "@/components/NavigationSections/Projects/Projects";
import Work from "@/components/NavigationSections/Work/Work";


export const navigation = [
    {
        name: "About", 
        component: <AboutMe />
    },
    {
        name: "Work", 
        component: <Work />
    },
    {
        name: "Projects", 
        component: <Projects />
    },
];

