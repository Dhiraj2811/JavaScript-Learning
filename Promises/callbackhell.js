function getUser(userId, callback) {
    console.log("Getting data from database")
    setTimeout(() => {
        callback({
            userid: userId,
            name: "john"
        }, 1000)
    })
}

function userServices(user, callback) {
    console.log(`user ${user.name} using the below services`);
    setTimeout(() => {
        callback(["email", "vpn", "wifi"])
    }, 2000)
}

function servicePrices(service,callback){
    console.log(service)
    setTimeout(() => {
        callback(3000)
    }, 3000)
}

getUser(2,(user)=>{
    userServices(user,(services)=>{
servicePrices(services,(cost)=>{
    console.log(cost)
})
    })
})
