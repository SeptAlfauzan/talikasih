import Link from "next/link";
export default function CardNav({ link, text, count }) {
    return (
        <div className="w-1/3 bg-white rounded-lg h-40 py-5 px-10 relative">
            <h3 className="text-xl">
                {text}
            </h3>
            <div className="right-10 bottom-12 absolute text-4xl">
                {count}
            </div>
            <div className="absolute bottom-5 right-10 text-xs">
                <Link href={link}>Selengkapnya</Link>
            </div>
        </div>
    )
}