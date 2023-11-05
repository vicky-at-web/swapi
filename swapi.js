// // const input = document.querySelector('#input');
// // const id = input.innerText;
// const form = document.querySelector('#sw');
// form.addEventListener('submit', function (e) {
//     console.log('submitted')
//     e.preventDefault();

//     // const id = input.innerText;
//     const li = document.createElement('li');
//     const starWarsPerson = async (id) => {
//         const res = await axios.get(`https://swapi.dev/api/people/${id}`);
//         // li.append(res.data);
//         console.log(res.data)
//     }


//     starWarsPerson(id);
// })



const submit = document.querySelector('#sw');
const input = document.querySelector('#charac');

submit.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log('submitted the form');
    const id = input.value;
    const starWarsPerson = async (id) => {
        const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
        console.log(res.data);
        const li = document.createElement('li');
        const se = document.createElement('li');
        const th = document.createElement('li');
        const fr = document.createElement('li');
        const fi = document.createElement('li');
        const si = document.createElement('li');
        const sv = document.createElement('li');
        const ei = document.createElement('li');
        const ni = document.createElement('li');
        const te = document.createElement('li');
        const el = document.createElement('li');
        const tw = document.createElement('li');


        const ul = document.createElement('ul');
        const b = document.createElement("b");
        const p = document.querySelector('p');

        b.innerText = res.data.name;
        li.innerText = res.data.height;
        se.innerText = res.data.mass;
        th.innerText = res.data.hair_color;
        fr.innerText = res.data.skin_color;
        fi.innerText = res.data.birth_year;
        si.innerText = res.data.created;
        sv.innerText = res.data.edited;
        ei.innerText = res.data.eye_color;
        ni.innerText = res.data.gender;
        te.innerText = res.data.homeworld;
        el.innerText = res.data.url;
        tw.innerText = res.data.starships;

        ul.append(b);
        ul.appendChild(li);
        ul.appendChild(li);
        ul.appendChild(se);
        ul.appendChild(th);
        ul.appendChild(fr);
        ul.appendChild(fi);
        ul.appendChild(si);
        ul.appendChild(sv);
        ul.appendChild(ei);
        ul.appendChild(ni);
        ul.appendChild(te);
        ul.appendChild(el);
        ul.appendChild(tw);
        

        
        p.append(ul);
        
        
        
        // const text = res.data;
        // const myArr = JSON.parse(text);
        // document.getElementById("#swch").innerHTML = myArr;
        

        
    }
    starWarsPerson(`${id}`);
});


// birth_year
// : 
// "19BBY"
// created
// : 
// "2014-12-09T13:50:51.644000Z"
// edited
// : 
// "2014-12-20T21:17:56.891000Z"
// eye_color
// : 
// "blue"
// films
// : 
// (4) ['https://swapi.dev/api/films/1/', 'https://swapi.dev/api/films/2/', 'https://swapi.dev/api/films/3/', 'https://swapi.dev/api/films/6/']
// gender
// : 
// "male"
// hair_color
// : 
// "blond"
// height
// : 
// "172"
// homeworld
// : 
// "https://swapi.dev/api/planets/1/"
// mass
// : 
// "77"
// name
// : 
// "Luke Skywalker"
// skin_color
// : 
// "fair"