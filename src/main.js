import DataSourceEPV from './datasource/EPV.js'
import DataSourceNLSC from './datasource/NLSC.js'

const fragment = document.createDocumentFragment()
const select = document.createElement(`select`)
fragment.appendChild(select)

const countyNLSC = await DataSourceNLSC.CountyData()
const countyNLSCList = Array.from(countyNLSC.querySelectorAll('countyItem'));
if (countyNLSCList.length) {
    // #region NLSC
    const firstOption = document.createElement(`option`)
    firstOption.value = ''
    firstOption.text = '請選擇'
    select.prepend(firstOption)
    countyNLSCList.map(c => {
        const option = document.createElement(`option`)
        option.value = c.querySelector('countycode').textContent
        option.text = c.querySelector('countyname').textContent
        return option
    }).forEach(o => select.appendChild(o))
    // #endregion NLSC
} else {
    // #region EPV
    // 備援服務
    const countyEPV = await DataSourceEPV.getCounty()
    countyEPV.map(c => {
        const option = document.createElement(`option`)
        option.value = c.Value
        option.text = c.Text
        return option
    }).forEach(o => select.appendChild(o))
    // #endregion EPV
}

document.querySelector(`#ComboContainer`).appendChild(fragment)
