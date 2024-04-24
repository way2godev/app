
export function Table({children}: {children: React.ReactNode}) {
    return <table className="w-full">{children}</table>
}

export function TableHeader({children}: {children: React.ReactNode}) {
    return <tr className="text-left bg-gray-200">{children}</tr>
}

export function TableHeaderItem({children}: {children: React.ReactNode}) {
    return <th className="py-2 px-4 font-semibold">{children}</th>
}

export function TableRowItem({children}: {children: React.ReactNode}) {
    return <td className="py-2 px-4">{children}</td>
}