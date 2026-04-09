import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

const STATS_ID = "64e8b3b70000000000000001";

export async function POST() {
  try {
    const stats = await prisma.siteStats.upsert({
      where: { id: STATS_ID },
      update: {
        visitorCount: { increment: 1 },
      },
      create: {
        id: STATS_ID,
        visitorCount: 1, // Start at 1 for the first ever visitor
      },
    });

    return NextResponse.json({ success: true, count: stats.visitorCount });
  } catch (error) {
    console.error("🔥 Error updating visitor count:", error);
    return NextResponse.json(
      { success: false, error: "Failed to update count" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const stats = await prisma.siteStats.findUnique({
      where: { id: STATS_ID },
    });

    return NextResponse.json({ success: true, count: stats?.visitorCount || 0 });
  } catch (error) {
    console.error("🔥 Error fetching visitor count:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch count" },
      { status: 500 }
    );
  }
}