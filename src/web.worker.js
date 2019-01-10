self.addEventListener('message', (e)=>{
    let sthis = this;
    console.log(e);

    setInterval(()=>{
        sthis.postMessage(new Date());
    }, 1000);
}, false);