const printJSonData=(data)=>{
    const displayContainer=document.getElementById('display')
    const pre = document.createElement("pre");
    pre.textContent = JSON.stringify(data, null, 2);
    displayContainer.appendChild(pre);
}

const PromiseAPI1=async()=>{
       setTimeout(async ()=>{
            try{
                const response=await fetch('https://dummyjson.com/posts')
                const data=await response.json();
                printJSonData(data);
                PromiseAPI2();
            }
            catch (error) {
                console.error("Error fetching data from API 1:", error);
            }
       },1000)
}


const PromiseAPI2=async()=>{
    setTimeout(async ()=>{
         try{
             const response=await fetch('https://dummyjson.com/products')
             const data=await response.json();
             printJSonData(data);
             PromiseAPI3();
         }
         catch (error) {
             console.error("Error fetching data from API 2:", error);
         }
    },2000)
}


const PromiseAPI3=async()=>{
    setTimeout(async ()=>{
         try{
             const response=await fetch('https://dummyjson.com/todos')
             const data=await response.json();
             printJSonData(data);
         }
         catch (error) {
             console.error("Error fetching data from API 3:", error);
         }
    },3000)
}


document.querySelector('button').addEventListener('click',PromiseAPI1)