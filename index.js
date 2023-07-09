const bar=document.getElementById("menu");
const nav=document.getElementById("s2");
if(bar)
{
    bar.addEventListener('click', ()=>{
        nav.classList.add('active');
    })
    count++;
}