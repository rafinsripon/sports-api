//sports Practice
const loadSports = (search) =>{
    const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${search}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayLoadSports(data.player))
}
const displayLoadSports = sports =>{
    const sportsContainer = document.getElementById('sports_container');
    sportsContainer.innerHTML = '';
    sports.forEach(sport => {
        const {strPlayer, strBirthLocation, strThumb, dateBorn, idPlayer} = sport;
        console.log(sport);
        const sportsDiv = document.createElement('div');
        sportsDiv.classList.add('col');
        sportsDiv.innerHTML =`
        <div class="card h-100">
            <img src="${strThumb}" class="card-img-top" alt="Img Not found">
            <div class="card-body">
            <h2 class="card-title fw-bold">${strPlayer}</h2>
            <h2 class="card-title fw-bold">${dateBorn}</h2>
            <p>${strBirthLocation}</p>
            <button class="button-js px-5 py-2" onclick="loadSportsDetails(${idPlayer})">Details</button>
            </div>
        </div>
        `;
        sportsContainer.appendChild(sportsDiv);
    });
}
//-----------------Search sports Items--------//
const searchSports = () =>{
    // console.log('clicking')
    const searchField = document.getElementById('search_field');
    const searchFieldText = searchField.value;
    loadSports(searchFieldText);
    searchField.value = '';
}
// -------------Sports Details---------------//
const loadSportsDetails = (idPlayer) =>{
    const url = `https://www.thesportsdb.com/api/v1/json/2/lookupplayer.php?id=${idPlayer}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayLoadSportsDetails(data.players[0]))
}
const displayLoadSportsDetails = details =>{
    console.log(details);
    const {strPlayer, dateBorn, strThumb, strDescriptionEN} = details;
    const sportsDetails = document.getElementById('sports_details');
    sportsDetails.innerHTML = '';
    const detailsDiv = document.createElement('div');
    detailsDiv.classList.add('card');
    detailsDiv.innerHTML = `
    <img src="${strThumb}" class="card-img-top" alt="Img Not Found">
    <div class="card-body">
        <h2 class="card-title fw-bold">${strPlayer}</h2>
        <h2 class="card-title fw-bold">${dateBorn}</h2>
        <p class="card-text">${strDescriptionEN.slice(0, 300)}</p>
    </div>
    `;
    sportsDetails.appendChild(detailsDiv);
}
loadSports('');


















