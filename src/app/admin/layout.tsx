import Navbar from "./components/navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <Navbar />
            <main className="px-20 py-10">
                {children}
            </main>
        </div>
    )
}