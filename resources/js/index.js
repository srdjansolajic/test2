let dinos = [
    {
        id: 0,
        name: 'Scipionyx',
        img: 'http://images.dinosaurpictures.org/Scipionyx_QY_200_3742.jpg',
        cena: 221
    },
    {
        id: 1,
        name: 'Becklespinax',
        img: 'http://images.dinosaurpictures.org/altispinax-becklespinax_e05c.jpg',
        cena: 275
    },
    {
        id: 2,
        name: 'Sciurumimus',
        img: 'http://images.dinosaurpictures.org/Sciurumimus_albersdoerferi_web_fa15.jpg',
        cena: 341
    },
    {
        id: 3,
        name: 'Hypsilophodon',
        img: 'http://images.dinosaurpictures.org/hypsilophodon-1024x636_6963.jpg',
        cena: 189
    },
    {
        id: 4,
        name: 'Dacentrurus',
        img: 'http://images.dinosaurpictures.org/Dacentrurus_20140118_5d27.jpg',
        cena: 315
    },
    {
        id: 5,
        name: 'Iguanodon',
        img: 'http://images.dinosaurpictures.org/Iguanodon_1157950_ea00.jpg',
        cena: 374
    },
    {
        id: 6,
        name: 'Asylosaurus',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Asylosaurus_NT.jpg/440px-Asylosaurus_NT.jpg',
        cena: 301
    },
    {
        id: 7,
        name: 'Efraasia',
        img: 'http://images.dinosaurpictures.org/efraasia_0a4e.jpg',
        cena: 199
    },
    {
        id: 8,
        name: 'Cryptosaurus',
        img: 'https://images.dinosaurpictures.org/Cryptosaurus/Cryptosaurus_tumblr_inline_on3a5nVchm1rx4yme_1280_94c8.jpg',
        cena: 218
    }
];

let dinosAll = [];

const inputKupac = document.querySelector('#kupac');
const textArea = document.querySelector('.textarea-field');

const divContainer = document.querySelector('#item-container');
const btnAll = document.querySelector('#btn-all');

const sbDino = document.querySelector('#select-dino');

// const divItem = document.querySelector('.item');

const btnNaruci = document.querySelector('input[type = "submit"]');

dinos.forEach(el => {

    const option = document.createElement('option');
    option.textContent = el.name;
    sbDino.appendChild(option);
})

function elementsToDOM() {
    

    const divItem = document.createElement('div');
    divItem.className = 'item';
    divContainer.appendChild(divItem); 

        const p1 = document.createElement('p');
        p1.innerHTML = `<span>Купац:</span> ${inputKupac.value}`;
        divItem.appendChild(p1);

        const p2 = document.createElement('p');
        p2.innerHTML = `<span>Напомена:</span> ${textArea.value}`;
        divItem.appendChild(p2);

        const p3 = document.createElement('p');
        p3.innerHTML = `<span>Диносаурус:</span> ${sbDino.value}`;
        divItem.appendChild(p3);

        const p4 = document.createElement('p');

        for (let i = 0; i < dinos.length; i++) {
            if (sbDino.value === dinos[i].name) {
                p4.innerHTML = `<span>Цена:</span> ${dinos[i].cena}`
            }
        }
        divItem.appendChild(p4);
            
        

        const p5 = document.createElement('p');
        divItem.appendChild(p5);

        const btnDelete = document.createElement('button');
        btnDelete.textContent = 'Обриши';
        p5.appendChild(btnDelete);

            btnDelete.addEventListener('click', (e) => {
                e.preventDefault();

                divItem.remove();
            })
}

btnNaruci.addEventListener('click', (e) => {
    e.preventDefault();

    if (inputKupac.value.trim() === '' || inputKupac.value.length < 4) {
        
        const divError = document.createElement('div');
        divError.className = 'item';
        divError.innerHTML = `<p style="text-align: center"> KUPAC polje je OBAVEZNO i mora imati vise od 3 karaktera</p><br><p style="text-align: center">NAPOMENA je obavezna</p>`;
        divContainer.appendChild(divError);

        setInterval(() => {
            divError.remove();
        }, 2000);

        return
    }

    dinosAll.push({
        kupac: inputKupac.value,
        napomena: textArea.value,
        dinosaurs: sbDino.value
    })
    console.log(dinosAll[dinosAll.length - 1]);

    elementsToDOM();

    inputKupac.value = '';
    textArea.value = '';

})

btnAll.addEventListener('click', (e) => {
    e.preventDefault();

    console.log(dinosAll);
})
