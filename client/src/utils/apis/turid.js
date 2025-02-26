const BASE_URL = "https://turid.visitvarmland.com/api/v8";

//funkar
export const getAllTuridData = async () => {
    const response = await fetch(`${BASE_URL}/products?publication=Klarälvsbanan&limit=50`);
    const data = await response.json();
    let pages = data.data;
    if (data.total_pages != 1) {
        const pageRequests = [];
        for (let i = 2; i < data.total_pages+1; i++) {
            pageRequests.push(fetch(`${BASE_URL}/products?publication=Klarälvsbanan&limit=50&page=${i}`)
            .then(res => res.json()));
        }
        const otherPages = await Promise.all(pageRequests);
        pages = pages.concat(...otherPages.map(page => page.data));
    }
    return pages;
}

//funkar inte med både koordinater och publikation?
export const getTuridDataByPosition = async (lat, lng, radius) => {
    const response = await fetch(`${BASE_URL}/products?latitude=${lat}&longitude=${lng}&radius=${radius}&publication=Klarälvsbanan&limit=50`);
    const data = await response.json();
    let pages = data.data;
    if (data.total_pages != 1) {
        const pageRequests = [];
        for (let i = 2; i<data.total_pages; i++) {
            pageRequests.push(fetch(`${BASE_URL}/products?latitude=${lat}&longitude=${lng}&radius=${radius}&publication=Klarälvsbanan&limit=50&page=${i}`)
            .then(res => res.json()));
        }
        const otherPages = await Promise.all(pageRequests);
        pages = pages.concat(...otherPages.map(page => page.data));
    }
    return pages;
}

//turid GET ger en array av "produkter" med varsin array av platser; funktion för att filtrera ut dem
export const filterOutPlaces = (data) => {
    let places = [];
    data.forEach(item => {
        item.places.forEach(place => {
            places.push(place);
        })
    });
    places = places.filter((() => {
        const uniqueIds = new Set();
        return place => !uniqueIds.has(place.id) && uniqueIds.add(place.id);
    })());
    return places;
}


//om inte koordinatanropet vill funka kan man hämta allt och sedan filtrera lokalt
export const isWithinRange = (coordinates, userCoordinates, radius) => {
    const R = 6371000;
    const toRad = (deg) => (deg * Math.PI) / 180;

    const dLat = toRad(userCoordinates[0] - coordinates[0]);
    const dLon = toRad(userCoordinates[1] - coordinates[1]);

    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(toRad(coordinates[0])) * Math.cos(toRad(userCoordinates[0])) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;

    return distance <= radius;
}