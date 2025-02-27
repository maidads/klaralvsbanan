# 🌍 Klarälvsbanan - Visit Värmland

Klarälvsbanan är en webbaserad applikation som hjälper besökare och cyklister att navigera och upptäcka sevärdheter längs Klarälvsbanan. Applikationen är integrerad med **Turid API**, **Leaflet/OpenStreetMap** och innehåller en responsiv design för både desktop och mobil.

![Hela kartan](<Skärmavbild 2025-02-27 kl. 07.45.29.png>)

## 📌 Funktionalitet
### Karta & Navigation
- **Leaflet/OpenStreetMap** används för att visa kartan och hantera sevärdheter.
- **Användarens position (GPS, live-location)** visas på kartan i realtid.
- **Sevärdheter från Turid API** placeras på kartan.
- **Klarälvsbanans led visas med GeoJSON-fil (`banan.geojson`).**

### Sökfunktion
- **Sökvyn har en modern design** och anpassad för både mobil och desktop.
- **Användare kan söka efter sevärdheter och platser** med data från Turid API.


### Inställningar & Anpassningar
- **Menyknapp med inställningar** för att:
  - Växla språk.
  - Ändra kartläge (exempel: satellit vs standardkartor).
  - Navigera till rutplaneraren.
  - Justera användarinställningar.

---

## 🔧 Teknologi & Verktyg
Följande teknologier och bibliotek har använts i utvecklingen av Klarälvsbanan:

| Teknologi            | Användning |
|----------------------|-----------|
| **React.js**        | Frontend-ramverk för applikationen |
| **Leaflet.js**      | Karthantering & interaktiv navigering |
| **OpenStreetMap**   | Källan för kartdata |
| **Turid API**       | Databas med sevärdheter i Värmland |
| **GeoJSON**         | Hantering av Klarälvsbanans cykelled |
| **CSS** | Styling & layout för responsiv design |
| **React Hooks**     | Hantering av state och side-effects |
| **JavaScript** | Funktionalitet & API-integration |

---

## 🎨 Design & Användarupplevelse

- **Responsiv navbar** anpassar sig efter skärmstorlek.
- **Sökvyn öppnas som en sidopanel på desktop & fullskärm på mobil.**
- **Det gröna pappersrivet** ger en unik Värmland-känsla.
- **CSS har anpassats** för att leden ska synas tydligt på kartan.

---

## 🗺 Kartinställningar & Anpassningar

- **Användaren kan zooma & panorera** i kartan med **Leaflet.js**.
- **Sevärdheter markeras** med **ikoner & popups**.
- **Klarälvsbanan visas som en grön rutt** med hjälp av **banan.geojson**.
- **Kartläge kan växlas** mellan **standardkarta & satellitvy**.

---

## Kodstruktur

Projektet är organiserat på ett modulärt sätt för att göra koden lätt att förstå och underhålla.


### Mappstruktur
```plaintext
klaralvsbanan/
│── client/                  # Frontend-projektet
│   ├── node_modules/        # Installerade beroenden (ignoreras i Git)
│   ├── src/                 # Huvudkoden för applikationen
│   │   ├── assets/          # Bilder, ikoner och GeoJSON-data
│   │   │   ├── geojson/     # Klarälvsbanans rutt (banan.geojson)
│   │   │   ├── icons/       # Ikoner för UI
│   │   │   ├── svg/         # SVG-grafik (inklusive pappersrivet)
│   │   ├── components/      # Återanvändbara React-komponenter
│   │   │   ├── SearchResult # Sökfunktionen och dess UI
│   │   │   ├── NavMobile    # Mobilanpassad navigationsmeny
│   │   │   ├── PlaceCard    # UI-kort för sevärdheter
│   │   │   ├── MapView      # Karthantering med Leaflet
│   │   ├── state/           # Global state-hantering
│   │   ├── utils/           # Hjälpfunktioner & API-anrop
│   │   │   ├── apis/        # API-anrop (t.ex. Turid API)
│   │   │   ├── functions/   # Små funktioner för kartlogik
│   ├── index.html           # Grundstrukturen för webbsidan
│   ├── vite.config.js       # Konfiguration för Vite (bygger frontend)
│   ├── package.json         # Projektets beroenden och skript
│   ├── README.md            # Dokumentation (du läser den just nu)

```
---

### **Beskrivning av viktiga mappar**
- **`src/assets/`** – Innehåller bilder, SVG-filer och GeoJSON-data.
- **`src/components/`** – Alla React-komponenter för UI och kartan.
- **`src/state/`** – Hanterar applikationens globala state.
- **`src/utils/`** – Innehåller hjälpfunktioner, API-anrop och logik för kartan.
  - **`apis/`** – API-anrop (t.ex. Turid API).
  - **`functions/`** – Specifika funktioner för kartinteraktion (zoom, ruttplanering, språköversättning).
- **`client/`** – Huvudmappen för frontend-applikationen.
- **`package.json`** – Lista över beroenden och projektinställningar.
- **`vite.config.js`** – Konfigurationsfil för Vite, som används för att bygga frontend.

---

## 🚀 Hur man kör applikationen

Följ dessa steg för att starta **Klarälvsbanan** lokalt på din dator.

### 1️⃣ **Klona projektet**
Om du inte redan har klonat projektet, gör det med följande kommando:
```sh
git clone https://github.com/VisitVarmland/Klaralvsbanan.git
cd Klaralvsbanan
cd client
```
### 2️⃣ **Installera alla nödvändiga paket**
Installera alla nödvändiga paket med npm install:
```sh
npm install
```

### 3️⃣ **Starta applikationen**
För att starta applikationen i utvecklingsläge, kör:
```sh
npm run dev
```