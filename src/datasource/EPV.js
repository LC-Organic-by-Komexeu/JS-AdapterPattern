const baseUrl = `https://epv.lingcheng.tw`
/**
 * 有機系統相關API
 */
class EPVApi {
    /**
     * 取得縣市名稱與代碼
     * @returns {Array.<{Value: string, Text: string}>}
     */
    static async getCounty () {
        const response = await fetch(`${baseUrl}/Combo/LandCounty`);
        if (!response.ok) {
            const message = `An error has occured: ${response.status}`;
            throw new Error(message);
        }
        const result = await response.json();
        return result;
    }
}

export default EPVApi
