const pitanja = [
    {
        pitanje : 'Koji je glavni grad Portugala?',
        a : 'Porto',
        b : 'Braga',
        c : 'Lisabon',
        d : 'Cotoriba',
            tocan:  'c',
    }, {
        pitanje : 'Koji je kemijski simbol za srebro?',
        a : 'Br',
        b : 'C',
        c : 'Fe',
        d : 'Ag',
            tocan:  'd',
    }, {
        pitanje : 'Kako se zove najveća tehnološka kompanija u Južnoj Koreji?',
        a : 'Samsung',
        b : 'Huawei',
        c : 'Panasonic',
        d : 'Nokia',
            tocan:  'a',
    },{
        pitanje : 'Koliko igrača ima u vaterpolo ekipi?',
        a : 'Pet',
        b : 'Sedam',
        c : 'Devet',
        d : 'Osam',
            tocan:  'b',
    }
];
const kviz = document.getElementById("kviz");
const odgovoriEls = document.querySelectorAll(".odgovor");
const pitanjeEl = document.getElementById('pitanje');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');   
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const posaljiOdgovor = document.getElementById('posalji');

let trenutniKviz = 0;
let rezultat = 0;

ucitajKviz();

function ucitajKviz(){
    odznaci();
    const trenutniKvizPitanje = pitanja[trenutniKviz];
    pitanjeEl.innerText = trenutniKvizPitanje.pitanje;

    a_text.innerText = trenutniKvizPitanje.a;
    b_text.innerText = trenutniKvizPitanje.b;
    c_text.innerText = trenutniKvizPitanje.c;
    d_text.innerText = trenutniKvizPitanje.d;

    
}

function odaberi(){
    
    let odgovor = undefined;

    odgovoriEls.forEach((odgovoriEl) => {
        if(odgovoriEl.checked) {
            odgovor = odgovoriEl.id;
        }
    });

    return odgovor;
}

function odznaci() {
    odgovoriEls.forEach((odgovoriEl) => {
        odgovoriEl.checked = false;
        
    });
}

posaljiOdgovor.addEventListener('click', () => {
    
    const odgovor = odaberi();
        
    if (odgovor) {

        if(odgovor === pitanja[trenutniKviz].tocan){
            rezultat++;
        }

        trenutniKviz++;

        if (trenutniKviz < pitanja.length) {
            ucitajKviz();
        }
        else {
            kviz.innerHTML = `<h2> Odgovorili ste tocno na  ${rezultat} od ${pitanja.length} pitanja. </h2>
            <button onclick ="location.reload()">Pokreni ponovo</button>`;
            
        }

    }   
});