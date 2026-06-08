import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    channel: process.env.TELEGRAM_CHANNEL_TEST,
    tokenExists: !!process.env.TELEGRAM_BOT_TOKEN,
  });
}