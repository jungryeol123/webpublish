//최초로 호출되는 함수 : window.onload(), window.addEventListener()
window.addEventListener('DOMContentLoaded', function(){
    initForm();
}) 

//화면 폼 함수
function initForm() {
    let output = `
    <h1>Counter</h1>
    <div>
        <h2 id="number">0</h2>
        <button type="button" onclick="counter('increment')">increment(+)</button>
        <button type="button" onclick="counter('decrement')">decrement(-)</button>
    </div>
    `;
    document.querySelector("#content").innerHTML = output;
}