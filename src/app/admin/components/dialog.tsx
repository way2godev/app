"use client"

export default function Dialog({ children, open, close }: { children: React.ReactNode, open: boolean, close: () => void }) {
    return (
        <div className={"inset-0 flex items-center justify-center bg-black bg-opacity-50 fixed z-50 transition-opacity  " +
        (open ? "" : "hidden")} onClick={close}>
            <div className="bg-white p-4 rounded-lg w-1/3" onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}