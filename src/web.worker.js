let sampleFunction = (e)=>{
    console.log(e);
    let sthis = this;

    setInterval(()=>{
        sthis.postMessage(new Date());
    }, 1000);
}

self.addEventListener('message', (e)=>{
    let sthis = this;
    console.log(e);

    sampleFunction(e);
}, false);


