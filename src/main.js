import DataSource from './adaptor/county.js'

const fragment = document.createDocumentFragment()
const select = document.createElement(`select`)
select.classList.add('form-select', 'mb-3')
fragment.appendChild(select)

const countyOptions = await DataSource.CountyOptions()
countyOptions.forEach(o => select.appendChild(o))

document.querySelector(`#ComboContainer`).prepend(fragment)
