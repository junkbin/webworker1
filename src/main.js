window.onload = (e)=>{
    workerInit();
};

let workerInit = ()=>{
    try{
        let worker = new Worker("./src/web.worker.js");
        worker.postMessage("Hello World 2 Worker!!!!");

        worker.addEventListener('message', (e)=>{
            console.log(e.data);
        }, false);
    }catch(err){
        console.log(err);
    }
};