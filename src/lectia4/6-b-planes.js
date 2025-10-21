import fetch from 'node-fetch';

async function getObjectFromUrl(url) {
    const response = await fetch(url);
    const text = await response.text();
    return JSON.parse(text);
}

async function getCountryBounds(country) {
    const object = await getObjectFromUrl(`https://nominatim.openstreetmap.org/search?country=${country}&format=json`);
    return {
        minLatitude: object[0].boundingbox[0],
        maxLatitude: object[0].boundingbox[1],
        minLongitude: object[0].boundingbox[2],
        maxLongitude: object[0].boundingbox[3]
    }
}

async function getPlanesFlyingAbove(country) {
    const bounds = await getCountryBounds(country);
    const url = `https://opensky-network.org/api/states/all?lamin=${bounds.minLatitude}&lomin=${bounds.minLongitude}&lamax=${bounds.maxLatitude}&lomax=${bounds.maxLongitude}`;

    const data = await getObjectFromUrl(url);
    if (!data.states) {
        console.log("Nu s-au gasit avioane...");
        return [];
    }
    const planes = data.states.map(plane => ({
        callsign: plane[1],
        originCountry: plane[2],
        longitude: plane[5],
        latitude: plane[6]
    }));

    return planes;
}


async function main() {
    const planes = await getPlanesFlyingAbove("Romania");
    console.log(`Sunt ${planes.length} avioane deasupra Romaniei acum:`);
    console.log(planes.slice(0, 5));
};

main();