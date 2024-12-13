export default function callbackSample() {
    const url = "https://api.github.com/users/ShibuyaYuma"

    //コールバックで呼び出す非同期処理
    const fetchProfile = () => {
        fetch(url)
            .then((res) => {
                res.json()
                    .then((json) => {
                        console.log("Asynchronous Callback Sample 1:",json)
                        return json
                    })
                    .catch((error) => {
                        console.log(error)
                    })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const profile = fetchProfile()
    console.log("Asynchronous Callback Sample 2:", profile)
}