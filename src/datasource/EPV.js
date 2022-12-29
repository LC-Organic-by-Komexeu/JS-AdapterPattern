const baseUrl = `https://epv.lingcheng.tw`

class EPVApi {
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
