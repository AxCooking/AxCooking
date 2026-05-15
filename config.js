// AxCooking — Umgebungskonfiguration
// Diese Datei ist umgebungsspezifisch und wird NICHT zwischen PROD und TEST synchronisiert.
// PROD: GH_REPO='AxCooking' | TEST: GH_REPO='AxCooking-Test'
const GH_OWNER = 'AxCooking';
const GH_REPO = 'AxCooking';
const GH_BRANCH = 'main';
const GH_API = 'https://api.github.com';
// GH_PUBLIC_TOKEN: Ermöglicht öffentliches Lesen ohne Admin-Login.
// Hinweis: Dieser Token ist bewusst nur-lesend (contents: read) auf dieses Repo beschränkt.
const GH_PUBLIC_TOKEN = null;
// Auth-Feature aktiviert ab 2026-05-15 (PROD-DB + Worker v3.13 deployed)
window.AUTH_ENABLED = true;
