function load(url){
    return new Promise((resolve,reject)=>{
        const request = new XMLHttpRequest();
        request.onreadystatechange = function () {
          if (this.readyState === 4 && this.status == 200) {
            resolve(this.response);
          } else {
            reject(this.status);
          }
        };
        request.open('GET', url, true);
        request.send();
    })
}


const url = "https://www.javascripttutorial.net/sample/promise/api.json"
let json = load(url);
json.then((res)=>console.log(res))