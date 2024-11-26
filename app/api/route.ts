import { NextResponse } from "next/server"
import data from "../db/data.json"

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const slug = searchParams.get('slug')
    if (!slug) return new Response('Slug is required', { status: 400 })
    const post = data.find(post => post.slug === slug)
    return NextResponse.json(post)
}