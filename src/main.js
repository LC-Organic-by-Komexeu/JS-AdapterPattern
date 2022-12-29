import DataSourceTDX from './datasource/TDX.js'
import DataSourceNLSC from './datasource/NLSC.js'

const countyTDX = await DataSourceTDX.getCounty()
const countyNLSC = await DataSourceNLSC.getCounty()

// #region TDX
const fragment = document.createDocumentFragment()
const select = document.createElement(`select`)
fragment.appendChild(select)
countyTDX.map(c => {
    const option = document.createElement(`option`)
    option.value = c.CountyID
    option.text = c.CountyName
    return option
}).forEach(o => select.appendChild(o))
// #endregion TDX

// #region NLSC
const fragment1 = document.createDocumentFragment()
const select1 = document.createElement(`select`)
fragment1.appendChild(select1)
Array.from(countyNLSC.querySelectorAll('countyItem')).map(c => {
    const option = document.createElement(`option`)
    option.value = c.querySelector('countycode').textContent
    option.text = c.querySelector('countyname').textContent
    return option
}).forEach(o => select1.appendChild(o))
// #endregion NLSC

document.querySelector(`#ComboContainer`).appendChild(fragment)
