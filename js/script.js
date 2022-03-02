let result = document.getElementById('result');
let clearbtn = document.getElementById('clearbtn');
let divbtn = document.getElementById('divbtn');
let mul = document.getElementById('mul');
let btnback = document.getElementById('btnback');
let minus = document.getElementById('minus');
let plus = document.getElementById('plus');
let equls = document.getElementById('equls');
let pn = document.getElementById('pn');
let divider = document.getElementById('divider');
let number = document.querySelectorAll('.number');

let Num1 ,Num2;
let op="";
let Result;




number.forEach((item) => {
    item.addEventListener('click', (e) => {
        if (result.textContent == "") {
            result.textContent = e.target.textContent;
        } else {
            result.textContent += e.target.textContent;
        }

    })
});
clearbtn.addEventListener('click', (e) => {
    result.textContent = "";
});
btnback.addEventListener('click', (e) => {

    let len=result.textContent.length;
    result.textContent=result.textContent.substr(0,len - 1);

});
pn.addEventListener('click',(e)=>{
    result.textContent=result.textContent * -1;
});
plus.addEventListener('click',(e)=>{
    Num1= Number(result.textContent);
    result.textContent="";
    op="+"
});
minus.addEventListener('click',(e)=>{
    Num1= Number(result.textContent);
    result.textContent="";
    op="-"
});
mul.addEventListener('click',(e)=>{
    Num1= Number(result.textContent);
    result.textContent="";
    op="*"
});
divbtn.addEventListener('click',(e)=>{
    Num1= Number(result.textContent);
    result.textContent="";
    op="/"
});
divider.addEventListener('click',(e)=>{
    Num1= Number(result.textContent);
    result.textContent="";
    op="%"
})
equls.addEventListener('click',(e)=>{

    Num2= Number(result.textContent);
    switch(op){
        case "+":
            Result=Num1+Num2;
            break;
            case "+":
                Result=Num1+Num2;
                break;
                case "-":
                    Result=Num1-Num2;
                    break;
                    case "*":
                        Result=Num1*Num2;
                        break;
                        case "%":
                            Result=Num1%Num2;
                            break;
                            case "/":
                                Result=Num1/Num2;
                                break;
    }
    result.textContent=Result;
})


