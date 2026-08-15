# SCB — Infrastructure Overview

## Build & Runtime Configuration

| Aspect | Detail |
|---|---|
| **Runtime** | Node.js 22 (`.node-version`, Dockerfile) |
| **Bundler** | Vite 8 (`vite.config.js`) — SPA mode, outputs to `dist/` |
| **App type** | Vanilla JS SPA with a custom component router |
| **Container** | Docker multi-stage build (`node:22-alpine`), exposes port **8080** |

## Deployment Target: **Azure**

Infra defined via **Bicep** (`infra/main.bicep`) provisions:

| Resource | Type |
|---|---|
| **Azure Container Apps** | `Microsoft.App/containerApps` — hosts the web app (consumption plan, 0.5 CPU / 1Gi RAM, auto-scales 1–3 replicas) |
| **Azure Container Apps Environment** | `Microsoft.App/managedEnvironments` — private VNet-injected environment |
| **Azure Container Registry** | Source for the container image (parameterized as `webImage`) |
| **Azure Virtual Network** | `Microsoft.Network/virtualNetworks` — dedicated VNet with subnet delegated to ACA |
| **Azure Log Analytics** | `Microsoft.OperationalInsights/workspaces` — app logs destination |

Default region: `westeurope` (param `location`).

## Azure Services Used

- **Azure Communication Services Email** (`@azure/communication-email`) — contact and booking forms send notification emails to the admin and acknowledgement emails to the submitter. Configured via secrets (`EMAIL_CONNECTION_STRING`, `NOTIFICATION_RECIPIENT_EMAIL`, `ACKNOWLEDGEMENT_SENDER_EMAIL`).
- **Azure Container Apps** — serverless container compute
- **Azure Container Registry** — private image registry
- **Azure Log Analytics** — log aggregation

## Other Dependencies (non-Azure)

- **Leaflet** (`leaflet`) — OpenStreetMap map component on the contact page
- **GSAP** (`gsap`) — animations (slideshow, cards)
- **Cloudflare Workers** (`wrangler` in devDeps) — `functions/api/contact.js` proxies contact form submissions to `gts-backend.nikolaiholder1.workers.dev`
