const baseUrl = process.env.SMOKE_BASE_URL ?? "http://localhost:3210";

const routes = ["/", "/dashboard", "/pricing"];

async function checkRoute(route) {
  const response = await fetch(`${baseUrl}${route}`);

  if (!response.ok) {
    throw new Error(`${route} returned ${response.status}`);
  }

  const html = await response.text();

  if (!html.includes("FlowPilot")) {
    throw new Error(`${route} did not contain expected app markup`);
  }

  console.log(`✓ ${route} -> ${response.status}`);
}

try {
  for (const route of routes) {
    await checkRoute(route);
  }

  console.log("Smoke tests passed.");
} catch (error) {
  console.error("Smoke tests failed.");
  console.error(error);
  process.exit(1);
}
