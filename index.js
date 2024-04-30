const choices=document.querySelector(".choices")
const btn=document.querySelector(".btn")
const enemy=document.querySelector(".enemy")
const result=document.querySelector(".result")

const arry=["グー","チョキ","パー"]

btn.addEventListener('click',()=>{
    const random=Math.floor(Math.random()*arry.length)
    enemy.value=arry[random]
    if(choices.value==enemy.value){result.textContent="あいこ"}
    else{
    if(choices.value=="グー"){
        if(enemy.value=="チョキ"){result.textContent="勝ち"}
        else{result.textContent="負け"}}
    if(choices.value=="チョキ"){
        if(enemy.value=="パー"){result.textContent="勝ち"}
        else{result.textContent="負け"}}
    if(choices.value=="パー"){
        if(enemy.value=="グー"){result.textContent="勝ち"}
        else{result.textContent="負け"}}
    }
})