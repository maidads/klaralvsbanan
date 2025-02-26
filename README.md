# 🌍 Klarälvsbanan - Visit Värmland

Klarälvsbanan är en webbaserad applikation som hjälper besökare och cyklister att navigera och upptäcka sevärdheter längs Klarälvsbanan. Applikationen är integrerad med **Turid API**, **Leaflet/OpenStreetMap** och innehåller en responsiv design för både desktop och mobil.

## 📌 Funktionalitet
### 🔹 Karta & Navigation
- **Leaflet/OpenStreetMap** används för att visa kartan och hantera sevärdheter.
- **Användarens position (GPS, live-location)** visas på kartan i realtid.
- **Sevärdheter från Turid API** placeras på kartan.
- **Klarälvsbanans led visas med GeoJSON-fil (`banan.geojson`).**

### 🔹 Sökfunktion
- **Sökvyn har en modern design** och anpassad för både mobil och desktop.
- **Användare kan söka efter sevärdheter och platser** med data från Turid API.


### 🔹 Inställningar & Anpassningar
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