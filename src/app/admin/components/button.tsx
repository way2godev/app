
const variants = {
    primary: 'bg-zinc-500 text-white hover:bg-white hover:text-zinc-500 border border-zinc-500 hover:border-zinc-600',
    cancel: 'bg-white text-red-500 hover:bg-red-100 hover:text-red-600 border border-red-500 hover:border-red-600'
}

export default function Button({ onClick, variant, children }: { onClick: () => void, variant?: keyof typeof variants, children: React.ReactNode }) {
    return (
        <button className={"py-2 px-4 rounded-md flex items-center gap-2 transition-colors " + variants[variant || 'primary']} onClick={onClick}>
            {children}
        </button>
    )
}