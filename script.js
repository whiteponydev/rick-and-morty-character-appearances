// Declare variables
const url = "https://rickandmortyapi.com/api/character";

let selectElement = document.getElementById('characters');
const contentDiv = document.querySelector('.content');
let choice = selectElement.value;
let img;
let p;
let text;

function getData() {
    fetch(url)
    .then((res) => {
        if (!res.ok) throw new Error('Was not a valid response')
        return res.json();
    })
    .then((data) => {
        data.results.forEach((element) => {
            characters = document.getElementById("characters");
            option = document.createElement("OPTION");
            option.text = element.name;
            option.value = element.id
            characters.add(option);
        });

        selectElement.addEventListener('change', () => {
            choice = selectElement.value;
            switch(choice) {
                case '1':
                    if (contentDiv.contains(img)) {
                        contentDiv.innerHTML = "";
                        img = document.createElement('img');
                        img.src = data.results[0].image;
                        p = document.createElement('p');
                        text = document.createTextNode(data.results[0].episode.length);
                        p.appendChild(text);
                        document.querySelector('.content').appendChild(img);
                        document.querySelector('.content').appendChild(p);
                    } else {
                        img = document.createElement('img');
                        img.src = data.results[0].image;
                        p = document.createElement('p');
                        text = document.createTextNode(data.results[0].episode.length);
                        p.appendChild(text);
                        document.querySelector('.content').appendChild(img);
                        document.querySelector('.content').appendChild(p);
                    }
                break;
                case '2':
                    if (contentDiv.contains(img)) {
                        contentDiv.innerHTML = "";
                        img = document.createElement('img');
                        img.src = data.results[1].image;
                        p = document.createElement('p');
                        text = document.createTextNode(data.results[1].episode.length);
                        p.appendChild(text);
                        document.querySelector('.content').appendChild(img);
                        document.querySelector('.content').appendChild(p);
                    } else {
                        img = document.createElement('img');
                        img.src = data.results[1].image;
                        p = document.createElement('p');
                        text = document.createTextNode(data.results[1].episode.length);
                        p.appendChild(text);
                        document.querySelector('.content').appendChild(img);
                        document.querySelector('.content').appendChild(p);
                    }
                break;
                case '3':
                    if (contentDiv.contains(img)) {
                        contentDiv.innerHTML = "";
                        img = document.createElement('img');
                        img.src = data.results[2].image;
                        p = document.createElement('p');
                        text = document.createTextNode(data.results[2].episode.length);
                        p.appendChild(text);
                        document.querySelector('.content').appendChild(img);
                        document.querySelector('.content').appendChild(p);
                    } else {
                        img = document.createElement('img');
                        img.src = data.results[2].image;
                        p = document.createElement('p');
                        text = document.createTextNode(data.results[2].episode.length);
                        p.appendChild(text);
                        document.querySelector('.content').appendChild(img);
                        document.querySelector('.content').appendChild(p);
                    }
                break;
                case '4':
                    if (contentDiv.contains(img)) {
                        contentDiv.innerHTML = "";
                        img = document.createElement('img');
                        img.src = data.results[3].image;
                        p = document.createElement('p');
                        text = document.createTextNode(data.results[3].episode.length);
                        p.appendChild(text);
                        document.querySelector('.content').appendChild(img);
                        document.querySelector('.content').appendChild(p);
                    } else {
                        img = document.createElement('img');
                        img.src = data.results[3].image;
                        p = document.createElement('p');
                        text = document.createTextNode(data.results[3].episode.length);
                        p.appendChild(text);
                        document.querySelector('.content').appendChild(img);
                        document.querySelector('.content').appendChild(p);
                    }
                break;
                case '5':
                    if (contentDiv.contains(img)) {
                        contentDiv.innerHTML = "";
                        img = document.createElement('img');
                        img.src = data.results[4].image;
                        p = document.createElement('p');
                        text = document.createTextNode(data.results[4].episode.length);
                        p.appendChild(text);
                        document.querySelector('.content').appendChild(img);
                        document.querySelector('.content').appendChild(p);
                    } else {
                        img = document.createElement('img');
                        img.src = data.results[4].image;
                        p = document.createElement('p');
                        text = document.createTextNode(data.results[4].episode.length);
                        p.appendChild(text);
                        document.querySelector('.content').appendChild(img);
                        document.querySelector('.content').appendChild(p);
                    }
                break;
                case '6':
                    if (contentDiv.contains(img)) {
                        contentDiv.innerHTML = "";
                        img = document.createElement('img');
                        img.src = data.results[5].image;
                        p = document.createElement('p');
                        text = document.createTextNode(data.results[5].episode.length);
                        p.appendChild(text);
                        document.querySelector('.content').appendChild(img);
                        document.querySelector('.content').appendChild(p);
                    } else {
                        img = document.createElement('img');
                        img.src = data.results[5].image;
                        p = document.createElement('p');
                        text = document.createTextNode(data.results[5].episode.length);
                        p.appendChild(text);
                        document.querySelector('.content').appendChild(img);
                        document.querySelector('.content').appendChild(p);
                    }
                break;
                case '7':
                    if (contentDiv.contains(img)) {
                        contentDiv.innerHTML = "";
                        img = document.createElement('img');
                        img.src = data.results[6].image;
                        p = document.createElement('p');
                        text = document.createTextNode(data.results[6].episode.length);
                        p.appendChild(text);
                        document.querySelector('.content').appendChild(img);
                        document.querySelector('.content').appendChild(p);
                    } else {
                        img = document.createElement('img');
                        img.src = data.results[6].image;
                        p = document.createElement('p');
                        text = document.createTextNode(data.results[6].episode.length);
                        p.appendChild(text);
                        document.querySelector('.content').appendChild(img);
                        document.querySelector('.content').appendChild(p);
                    }
                break;
                case '8':
                    if (contentDiv.contains(img)) {
                        contentDiv.innerHTML = "";
                        img = document.createElement('img');
                        img.src = data.results[7].image;
                        p = document.createElement('p');
                        text = document.createTextNode(data.results[7].episode.length);
                        p.appendChild(text);
                        document.querySelector('.content').appendChild(img);
                        document.querySelector('.content').appendChild(p);
                    } else {
                        img = document.createElement('img');
                        img.src = data.results[7].image;
                        p = document.createElement('p');
                        text = document.createTextNode(data.results[7].episode.length);
                        p.appendChild(text);
                        document.querySelector('.content').appendChild(img);
                        document.querySelector('.content').appendChild(p);
                    }
                break;
                case '9':
                    if (contentDiv.contains(img)) {
                        contentDiv.innerHTML = "";
                        img = document.createElement('img');
                        img.src = data.results[8].image;
                        p = document.createElement('p');
                        text = document.createTextNode(data.results[8].episode.length);
                        p.appendChild(text);
                        document.querySelector('.content').appendChild(img);
                        document.querySelector('.content').appendChild(p);
                    } else {
                        img = document.createElement('img');
                        img.src = data.results[8].image;
                        p = document.createElement('p');
                        text = document.createTextNode(data.results[8].episode.length);
                        p.appendChild(text);
                        document.querySelector('.content').appendChild(img);
                        document.querySelector('.content').appendChild(p);
                    }
                break;
                case '10':
                    if (contentDiv.contains(img)) {
                        contentDiv.innerHTML = "";
                        img = document.createElement('img');
                        img.src = data.results[9].image;
                        p = document.createElement('p');
                        text = document.createTextNode(data.results[9].episode.length);
                        p.appendChild(text);
                        document.querySelector('.content').appendChild(img);
                        document.querySelector('.content').appendChild(p);
                    } else {
                        img = document.createElement('img');
                        img.src = data.results[9].image;
                        p = document.createElement('p');
                        text = document.createTextNode(data.results[9].episode.length);
                        p.appendChild(text);
                        document.querySelector('.content').appendChild(img);
                        document.querySelector('.content').appendChild(p);
                    }
                break;
                case '11':
                    if (contentDiv.contains(img)) {
                        contentDiv.innerHTML = "";
                        img = document.createElement('img');
                        img.src = data.results[10].image;
                        p = document.createElement('p');
                        text = document.createTextNode(data.results[10].episode.length);
                        p.appendChild(text);
                        document.querySelector('.content').appendChild(img);
                        document.querySelector('.content').appendChild(p);
                    } else {
                        img = document.createElement('img');
                        img.src = data.results[10].image;
                        p = document.createElement('p');
                        text = document.createTextNode(data.results[10].episode.length);
                        p.appendChild(text);
                        document.querySelector('.content').appendChild(img);
                        document.querySelector('.content').appendChild(p);
                    }
                break;
                case '12':
                    if (contentDiv.contains(img)) {
                        contentDiv.innerHTML = "";
                        img = document.createElement('img');
                        img.src = data.results[11].image;
                        p = document.createElement('p');
                        text = document.createTextNode(data.results[11].episode.length);
                        p.appendChild(text);
                        document.querySelector('.content').appendChild(img);
                        document.querySelector('.content').appendChild(p);
                    } else {
                        img = document.createElement('img');
                        img.src = data.results[11].image;
                        p = document.createElement('p');
                        text = document.createTextNode(data.results[11].episode.length);
                        p.appendChild(text);
                        document.querySelector('.content').appendChild(img);
                        document.querySelector('.content').appendChild(p);
                    }
                break;
                case '13':
                    if (contentDiv.contains(img)) {
                        contentDiv.innerHTML = "";
                        img = document.createElement('img');
                        img.src = data.results[12].image;
                        p = document.createElement('p');
                        text = document.createTextNode(data.results[12].episode.length);
                        p.appendChild(text);
                        document.querySelector('.content').appendChild(img);
                        document.querySelector('.content').appendChild(p);
                    } else {
                        img = document.createElement('img');
                        img.src = data.results[12].image;
                        p = document.createElement('p');
                        text = document.createTextNode(data.results[12].episode.length);
                        p.appendChild(text);
                        document.querySelector('.content').appendChild(img);
                        document.querySelector('.content').appendChild(p);
                    }
                break;
                case '14':
                    if (contentDiv.contains(img)) {
                        contentDiv.innerHTML = "";
                        img = document.createElement('img');
                        img.src = data.results[13].image;
                        p = document.createElement('p');
                        text = document.createTextNode(data.results[13].episode.length);
                        p.appendChild(text);
                        document.querySelector('.content').appendChild(img);
                        document.querySelector('.content').appendChild(p);
                    } else {
                        img = document.createElement('img');
                        img.src = data.results[13].image;
                        p = document.createElement('p');
                        text = document.createTextNode(data.results[13].episode.length);
                        p.appendChild(text);
                        document.querySelector('.content').appendChild(img);
                        document.querySelector('.content').appendChild(p);
                    }
                break;
                case '15':
                    if (contentDiv.contains(img)) {
                        contentDiv.innerHTML = "";
                        img = document.createElement('img');
                        img.src = data.results[14].image;
                        p = document.createElement('p');
                        text = document.createTextNode(data.results[14].episode.length);
                        p.appendChild(text);
                        document.querySelector('.content').appendChild(img);
                        document.querySelector('.content').appendChild(p);
                    } else {
                        img = document.createElement('img');
                        img.src = data.results[14].image;
                        p = document.createElement('p');
                        text = document.createTextNode(data.results[14].episode.length);
                        p.appendChild(text);
                        document.querySelector('.content').appendChild(img);
                        document.querySelector('.content').appendChild(p);
                    }
                break;
                case '16':
                    if (contentDiv.contains(img)) {
                        contentDiv.innerHTML = "";
                        img = document.createElement('img');
                        img.src = data.results[15].image;
                        p = document.createElement('p');
                        text = document.createTextNode(data.results[15].episode.length);
                        p.appendChild(text);
                        document.querySelector('.content').appendChild(img);
                        document.querySelector('.content').appendChild(p);
                    } else {
                        img = document.createElement('img');
                        img.src = data.results[15].image;
                        p = document.createElement('p');
                        text = document.createTextNode(data.results[15].episode.length);
                        p.appendChild(text);
                        document.querySelector('.content').appendChild(img);
                        document.querySelector('.content').appendChild(p);
                    }
                break;
                case '17':
                    if (contentDiv.contains(img)) {
                        contentDiv.innerHTML = "";
                        img = document.createElement('img');
                        img.src = data.results[16].image;
                        p = document.createElement('p');
                        text = document.createTextNode(data.results[16].episode.length);
                        p.appendChild(text);
                        document.querySelector('.content').appendChild(img);
                        document.querySelector('.content').appendChild(p);
                    } else {
                        img = document.createElement('img');
                        img.src = data.results[16].image;
                        p = document.createElement('p');
                        text = document.createTextNode(data.results[16].episode.length);
                        p.appendChild(text);
                        document.querySelector('.content').appendChild(img);
                        document.querySelector('.content').appendChild(p);
                    }
                break;
                case '18':
                    if (contentDiv.contains(img)) {
                        contentDiv.innerHTML = "";
                        img = document.createElement('img');
                        img.src = data.results[17].image;
                        p = document.createElement('p');
                        text = document.createTextNode(data.results[17].episode.length);
                        p.appendChild(text);
                        document.querySelector('.content').appendChild(img);
                        document.querySelector('.content').appendChild(p);
                    } else {
                        img = document.createElement('img');
                        img.src = data.results[17].image;
                        p = document.createElement('p');
                        text = document.createTextNode(data.results[17].episode.length);
                        p.appendChild(text);
                        document.querySelector('.content').appendChild(img);
                        document.querySelector('.content').appendChild(p);
                    }
                break;
                case '19':
                    if (contentDiv.contains(img)) {
                        contentDiv.innerHTML = "";
                        img = document.createElement('img');
                        img.src = data.results[18].image;
                        p = document.createElement('p');
                        text = document.createTextNode(data.results[18].episode.length);
                        p.appendChild(text);
                        document.querySelector('.content').appendChild(img);
                        document.querySelector('.content').appendChild(p);
                    } else {
                        img = document.createElement('img');
                        img.src = data.results[18].image;
                        p = document.createElement('p');
                        text = document.createTextNode(data.results[18].episode.length);
                        p.appendChild(text);
                        document.querySelector('.content').appendChild(img);
                        document.querySelector('.content').appendChild(p);
                    }
                break;
                case '20':
                    if (contentDiv.contains(img)) {
                        contentDiv.innerHTML = "";
                        img = document.createElement('img');
                        img.src = data.results[19].image;
                        p = document.createElement('p');
                        text = document.createTextNode(data.results[19].episode.length);
                        p.appendChild(text);
                        document.querySelector('.content').appendChild(img);
                        document.querySelector('.content').appendChild(p);
                    } else {
                        img = document.createElement('img');
                        img.src = data.results[19].image;
                        p = document.createElement('p');
                        text = document.createTextNode(data.results[19].episode.length);
                        p.appendChild(text);
                        document.querySelector('.content').appendChild(img);
                        document.querySelector('.content').appendChild(p);
                    }
                break;
            }
        });
    })
    .catch(err => {
        console.warn(err.message);
    })
}

getData();




