const url = `https://api.nlsc.gov.tw/other/ListCounty`

async function getCounty () {
    const response = await fetch(url);
    if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
    }
    const data = await response.text();
    const result = new window.DOMParser().parseFromString(data, "text/xml")
    return result;
}

export default {
    getCounty
}
