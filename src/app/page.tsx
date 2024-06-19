import dynamic from "next/dynamic";

const SplineCom = dynamic(() => import("@/components/SplineCom"));
export default async function Home() {
    return (
        <main className="h-screen">
            <SplineCom />
        </main>
    );
}
