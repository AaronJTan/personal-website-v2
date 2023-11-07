import { lobster } from '@/config/fontsConfig'

export default function NavBar() {
    return (
        <div className="flex justify-between p-3 sticky top-0 z-50 backdrop-blur-[5px]">
            <div className={`font-bold text-3xl ${lobster.className}`}>AT</div>
        </div>
    )
}