// ✅ ES Module syntax for Next.js API routes

export async function GET(request) {
  return new Response('Hello from Clerk API!', { status: 200 });
}

