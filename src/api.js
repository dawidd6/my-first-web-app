export default class API {
    constructor(location, lang) {
        this.key = "6ae72d5bb14f4f79af3223742213001"
        this.base = "https://api.weatherapi.com/v1"
        this.location = location
        this.lang = lang
    }

    async getCurrent() {
        const form = new FormData()
        form.append("key", this.key)
        form.append("q", this.location)
        form.append("lang", this.lang)
        return await fetch(`${this.base}/current.json`, {
            method: "POST",
            body: form,
        })
    }
}