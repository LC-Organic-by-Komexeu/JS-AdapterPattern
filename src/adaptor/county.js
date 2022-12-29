class CountyAdaptor {
    static async CountyOptions () {
        const result = []

        const ele1 = document.createElement('option')
        ele1.value = 'A'
        ele1.text = '臺北市'
        result.push(ele1)

        return result
    }
}

export default CountyAdaptor
