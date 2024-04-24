"use client"

import { useState } from "react"
import Dialog from "../components/dialog"
import Button from "../components/button"
import { Plus } from "lucide-react"

export default function CreateAgencyButton() {
    const [open, setOpen] = useState(false)

    return <>
        <Button onClick={() => setOpen(true)}>
            <Plus size={16} />
            Create Agency
        </Button>
        <Dialog open={open} close={() => setOpen(false)}>
            <div className="flex flex-col gap-4 w-full" onClick={(e) => e.stopPropagation()}>
                <h1 className="text-xl font-bold">Create Agency</h1>
                <label className="flex flex-col gap-1">
                    <span>Agency Name</span>
                    <input type="text" className="border border-gray-300 rounded-md p-2" />
                </label>
                <label className="flex flex-col gap-1">
                    <span>Agency URL</span>
                    <input type="text" className="border border-gray-300 rounded-md p-2" />
                </label>
                <div className="flex justify-end gap-4">
                    <Button variant="primary" onClick={() => setOpen(false)}>
                        Create
                    </Button>
                    <Button onClick={() => setOpen(false)} variant="cancel">
                        Cancel
                    </Button>
                </div>
            </div>
        </Dialog>
    </>
}