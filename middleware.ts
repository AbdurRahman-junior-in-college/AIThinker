import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher([
  // "/onboarding(.*)",
  // "/dashboard(.*)",
  // "/projects(.*)",
  "/blog(.*)",
  "/blogs(.*)",
]);



export default clerkMiddleware((auth, req) => {
  if (!auth() && isProtectedRoute(req)) {
    return auth().redirectToSignIn();
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
