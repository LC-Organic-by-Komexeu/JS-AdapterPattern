const baseUrl = `https://api.nlsc.gov.tw`
/**
 * 國土測繪中心相關API
 */
class NLSCApi {
    /**
     * 取得縣市名稱與代碼
     * @returns XMLDocument
     */
    static async CountyData () {
        const response = await fetch(`${baseUrl}/other/ListCounty`);
        if (!response.ok) {
            const message = `An error has occured: ${response.status}`;
            throw new Error(message);
        }
        const data = await response.text();
        // const result = new window.DOMParser().parseFromString(data, "text/xml")
        const result = Math.random() > 0.5
            ? new window.DOMParser().parseFromString(data, "text/xml")
            : document.implementation.createHTMLDocument("New Document");

        return result;
    }
}

export default NLSCApi
