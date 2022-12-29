const fragment = document.createDocumentFragment()
const select = document.createElement(`select`)
fragment.appendChild(select)

fetch(`https://api.nlsc.gov.tw/other/ListCounty`)
    .then(res => {
        // 模擬NLSC服務可能掛掉的狀況
        if (Math.random() > 0.5) {
            return res.text()
        } else {
            throw new Error("Whoops!");
        }
    })
    .then(xml => {
        // #region NLSC
        const doc = new window.DOMParser().parseFromString(xml, "text/xml")
        const countyNLSCList = Array.from(doc.querySelectorAll('countyItem'));
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
        document.querySelector(`#ComboContainer`).appendChild(fragment)
    })
    .catch(err => {
        console.error(err)
        // #region EPV
        // 備援服務
        fetch(`https://epv.lingcheng.tw/Combo/LandCounty`)
            .then(res => res.json())
            .then(json => {
                json.map(c => {
                    const option = document.createElement(`option`)
                    option.value = c.Value
                    option.text = c.Text
                    return option
                }).forEach(o => select.appendChild(o))

                document.querySelector(`#ComboContainer`).appendChild(fragment)
            })
            .catch(err => {
                console.error(err)
            })
        // #endregion EPV
    })
