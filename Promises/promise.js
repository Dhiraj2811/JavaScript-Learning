let success = false
function getUser() {
    return new Promise((resolve, resject) => {
        if (success) {
            setTimeout(() => {
                resolve([
                    { name: "john", email: "john@email.com" },
                    { name: "alex", email: "alex@email.com" }
                ])
            }, 1000)
        } else {
            resject("Error in promise")
        }
    })
}

let user = getUser();
user.then(()=>{},(err)=>console.log("Errors is:"+err))
user.then((res) => console.log(res)).catch(error => console.log(error)).finally(() => console.log("finished"))