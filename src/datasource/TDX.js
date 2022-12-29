const url = `https://tdx.transportdata.tw/api/basic/v2/Basic/County?$format=json`

async function getCounty () {
    const response = await fetch(url);
    if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
    }
    const result = await response.json();
    return result;
}

export default {
    getCounty
}
