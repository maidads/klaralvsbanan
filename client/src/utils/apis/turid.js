const BASE_URL = "https://turid.visitvarmland.com/api/v8";

//funkar
export const getAllTuridData = async () => {
    const response = await fetch(`${BASE_URL}/products?publication=Klarälvsbanan&limit=50`);
    const data = await response.json();
    let pages = data.data;
    if (data.total_pages != 1) {
        const pageRequests = [];
        for (let i = 2; i < data.total_pages; i++) {
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


//om inte koordinatanropet vill funka kan man hämta allt och sedan filtrera lokalt
export const isWithinRange = (coordinates, userCoordinates, radius) => {
    const R = 6371;
    const toRad = (deg) => (deg * Math.PI) / 180;

    const dLat = toRad(userCoordinates.lat - coordinates.lat);
    const dLon = toRad(userCoordinates.lng - coordinates.lng);

    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(toRad(coordinates.lat)) * Math.cos(toRad(userCoordinates.lat)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;

    return distance <= radius;
}