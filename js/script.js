const form = document.querySelector("form");
const submit = document.querySelector("#submit");
const process = document.querySelector("button");
const resp1 = document.querySelector("#outOrdem");
const resp2 = document.querySelector("#outMedia");
const resp3 = document.querySelector("#outMediana");
const resp4 = document.querySelector("#outModa");
const resp5 = document.querySelector("#outDesvMedio");
const resp6 = document.querySelector("#outDesvPadrao");
const resp7 = document.querySelector("div");
const dados = [];
const m = mat.estatistica;

form.addEventListener("submit", (e) => {
    e.preventDefault();

    dados.push(Number(form.inValor.value));
    submit.value = `Insira o ${dados.length + 1}° Valor`;
    form.inValor.value = "";
    form.inValor.focus();
});

process.addEventListener("click", () => {
    resp1.innerText = "Dados em Ordem: ";
    resp2.innerText = "Média = ";
    resp3.innerText = "Mediana = ";
    resp4.innerText = "Moda = ";
    resp5.innerText = "Desvio Médio = ";
    resp6.innerText = "Desvio Padrão = ";

    dados.sort();
    const ordem = dados.join(" ");
    const media = m.media(dados);
    const mediana = m.mediana(dados);
    const moda = m.moda(dados).join(" ");
    const dm = m.desvioMedio(dados);
    const dp = Math.sqrt(m.variancia(dados));

    resp1.innerText += ` ${ordem}`;
    resp2.innerText += ` ${media.toFixed(2)}`;
    resp3.innerText += ` ${mediana}`;
    resp4.innerText += ` ${moda}`;
    resp5.innerText += ` ${dm.toFixed(2)}`;
    resp6.innerText += ` ${dp.toFixed(2)}`;
    histograma(dados);
});

function histograma(dados) {
    resp7.innerHTML = "";
    const max = dados[dados.length - 1];
    const min = dados[0];
    const amplitude = max - min;
    const num_classe = Number(prompt("Insira a quantidade de classes: "));
    const amp_classe = Math.floor(amplitude / num_classe) + 1;
    let barra;

    for (var a = min; a <= max; a += amp_classe) {
        var b = a + amp_classe;
        var display = a + " |-- " + b + ": ";
        var cont = 0;

        for (var i = 0; i < dados.length; i++) {
            var dado = dados[i];

            if (dado >= a && dado < b) {
                cont++;
            }
        }

        const pct = 100 * cont / i;
        barra = document.createElement("div");
        barra.style.background = "green";
        barra.style.border = "solid 2px";        
        barra.style.width = 37 + pct + "%";
        barra.innerText = display + "[" + cont + "]" + " " + pct.toFixed(0) + "%";
        resp7.appendChild(barra);
    }

    const barraTotal = document.createElement("div");
    barraTotal.style.background = "green";
    barraTotal.style.fontSize = "18px";
    barraTotal.style.width = "100%";
    barraTotal.innerText = "Total = " + i;
    resp7.appendChild(barraTotal);
}