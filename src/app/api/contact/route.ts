import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {

    const contact = await req.formData();
    const username = contact.get("username")?.toString() || "admin";
    const email = contact.get("email")?.toString() || "nul";
    const message = contact.get("msg")?.toString() || "";
    let data
    try {
        const res = await prisma.contact.create({
            data: {
                name: username,
                email: email,
                message: message
            }
        })
        data = res

    }
    catch (error) {
        console.error(error);
        return NextResponse.json({
            message: "Error occured at api",
            data: {},
            status: false,
        },
            {
                status: 401
            })
    }

    return NextResponse.json({
        status: true,
        message: "message sent successfull",
        data: data
    }, {
        status: 200,
    })

}
