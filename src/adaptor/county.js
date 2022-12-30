import DataSourceNLSC from '../datasource/NLSC.js'
import DataSourceEPV from '../datasource/EPV.js'
/**
 * 縣市Adaptor
 */
class CountyAdaptor {
    /**
     * 取得縣市名稱與代碼
     * @returns {Array.<HTMLOptionElement>}
     */
    static async CountyOptions () {
        let result = []

        result =
            await this.#ProcessorNLSC() ||
            await this.#ProcessorEPV()
        return result
    }

    static async #ProcessorNLSC () {
        const result = []

        const countyNLSC = await DataSourceNLSC.CountyData()
        const countyNLSCList = Array.from(countyNLSC.querySelectorAll('countyItem'));
        if (countyNLSCList.length) {
            const firstOption = document.createElement(`option`)
            firstOption.value = ''
            firstOption.text = '請選擇'
            result.push(firstOption)

            countyNLSCList.map(c => {
                const option = document.createElement(`option`)
                option.value = c.querySelector('countycode').textContent
                option.text = c.querySelector('countyname').textContent
                return option
            }).forEach(o => result.push(o))
        }

        if (!result.length) return null

        return result;
    }

    static async #ProcessorEPV () {
        const result = []

        const countyEPV = await DataSourceEPV.getCounty()
        countyEPV.map(c => {
            const option = document.createElement(`option`)
            option.value = c.Value
            option.text = c.Text
            return option
        }).forEach(o => result.push(o))

        if (!result.length) return null

        return result;
    }
}

export default CountyAdaptor
