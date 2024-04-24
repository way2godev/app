import prisma from "@/prisma/db"
import CreateAgencyButton from "./_create"

export default async function page() {

    const getAgenciesCount = prisma.agencies.count()
    const getAgencies = prisma.agencies.findMany({
        select: {
            id: true,
            name: true,
            url: true
        }
    })

    const [agencyCount, agencies] = await Promise.all([getAgenciesCount, getAgencies])

    return (
        <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center">
                <h1 className="text-xl font-bold">Agencies ({agencyCount})</h1>
                <CreateAgencyButton/>
            </div>
            <table className="w-full">
                <thead>
                    <tr className="text-left bg-gray-200">
                        {
                            ["Agency ID", "Agency Name", "Agency URL"].map((header) => (
                                <th className="py-2 px-4 font-semibold" key={header}>{header}</th>
                            ))
                        }
                    </tr>
                </thead>
                <tbody>
                    {agencies.map(agency => (
                        <tr key={agency.id}>
                            <td className="py-2 px-4">{agency.id}</td>
                            <td className="py-2 px-4">{agency.name}</td>
                            <td className="py-2 px-4">{agency.url}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}