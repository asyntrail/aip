function switches() {

    const div = document.getElementById('val2');
    if (div.style.display !== "inline") {
        div.style.display = "inline";
    } else {
        div.style.display = "none";
    }
}
document.getElementById('switch').addEventListener('click', switches);

function check() {

    const a1 = +document.getElementById('val1').value;
    const b1 = +document.getElementById('val2').value;
    const c1 = +document.getElementById('val3').value;
    let tot;
    if (a1 > 0) {
        tot = Number(a1 + b1 + c1);
    } else if (a1 === 0) {
        tot = 0;
    }

    document.getElementById("total").innerHTML = tot;

}



const x = document.getElementById('next');
x.onclick = check;