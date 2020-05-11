

const app = document.getElementById('raiz');
app.textContent = "";

const caixa = document.createElement('div');
//caixa.textContent = "Foi cirada";
caixa.setAttribute('class','caixa');
app.appendChild(caixa);

for (var i = 1; i <= 10; i++) {
    var c = document.createElement('div');
    c.setAttribute('class', 'artigos');
    caixa.appendChild(c);

    var t = document.createElement('h3');
    t.textContent = 'titulo ' + i;
    c.appendChild(t);

    var p = document.createElement('p');
    p.textContent = 'DALE DELE DOly dale dele doly dale dele dlyl dale dely';
    c.appendChild(p);
}

// segundo filho

