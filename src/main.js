import DataSourceTDX from './datasource/TDX.js'

const countyTDX = await DataSourceTDX.getCounty()

const fragment = document.createDocumentFragment()
const select = document.createElement(`select`)
fragment.appendChild(select)
countyTDX.map(c => {
    const option = document.createElement(`option`)
    option.value = c.CountyID
    option.text = c.CountyName
    return option
}).forEach(o => select.appendChild(o))

document.querySelector(`#ComboContainer`).appendChild(fragment)
