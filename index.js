const fetchAnime = async () => {
    const name = document.getElementById('search-bar').value;
    const data = 
        await (await fetch(`https://rickandmortyapi.com/api/character/?name=${name}`)).json();
    console.log(data);
    const htmlContent = data.results.map(character => {
            return (
            `<div class='character'>
                <img id='image' src=${character.image} rel='noreferrer'/>
                <p id='name'>${character.name}</p>
            </div>`)
        }).join(' ');
    document.getElementById('container').innerHTML = htmlContent;
}

document.getElementById('search-button').addEventListener('click', fetchAnime);