


$('#getPeople').click(function () {
    $('#spin').show();
    getPeople('https://swapi.co/api/people/');

});
let peopleArr = [];
let input = $('#inputArea');
function getPeople(url) {
    fetch(url)
        .then(data => {
            return data.json();
        })
        .then((data) => {
            if (data.next) {
                getPeople(data.next)

            }

            people(data)
        })
        .catch(() => {
            console.log('something went wrong check your connection and try again')
        })
};

function people(data) {
    let results = data.results;
    results.forEach(element => {
        peopleArr.push(element);
        $('#body').append(`
        <tr>
        <td>${element.name}</td>
        <td>${element.gender}</td>
        <td>${element.birth_year}</td>
        <td>${element.mass}</td>
        <td>${element.height}</td>
        </tr>`)
        $('#people').show();
        $('#planets').hide();
        $('.logo').hide();
        $('#spin').hide();
    });

};
let planetArr = [];
function getPlanets(url) {
    fetch(url)
        .then(dataPlanet => {
            return dataPlanet.json();
        })
        .then((dataPlanet) => {
            // planetArr.push(dataPlanet.results)

            if (dataPlanet.next) {
                getPlanets(dataPlanet.next)

            }
            planeti(dataPlanet);
        })
        .catch(() => {
            console.log('something went wrong check your connection and try again')
        })
}

$('#getPlanets').click(function () {
    $('#spin').show()
    getPlanets('https://swapi.co/api/planets/')
})

function planeti(dataPlanet) {
    let results = dataPlanet.results
    results.forEach(element => {
        planetArr.push(element)

        $('#body').append(`<tr> 
            <td>${element.name}</td>
            <td>${element.diameter}</td>
            <td>${element.climate}</td>
            <td>${element.terrain}</td>
            <td>${element.rotation_period}</td>
            <td>${element.population}</td>
             </tr>`);
        $('#planets').show();
        $('#people').hide();
        $('.logo').hide();
        $('#spin').hide();
    });
};
$('#goHome').click(function () {
    $('#people').hide();
    $('#planets').hide();
    $('#body').html("");
    $('.logo').show();
    $('#spin').hide();
});

function showNames() {
    for (const iterator of peopleArr) {
        for (let index = 0; index < iterator.length; index++) {
            let name = iterator[index].name;
            console.log(name)
        }
    }
}


$("#search").on('click', function () {
    $('#body').html("");
    var searcValue = input.val();
    for (let i = 0; i < peopleArr.length; i++) {
        let element = peopleArr[i];
        if (element.name.indexOf(searcValue) >= 0) {
            $('#body').append(`
            <tr>
            <td>${element.name}</td>
            <td>${element.gender}</td>
            <td>${element.birth_year}</td>
            <td>${element.mass}</td>
            <td>${element.height}</td>
            </tr>`)
        }
        else{
        for (let i = 0; i < planetArr.length; i++) {
            let element = planetArr[i];
            if (element.name.indexOf(searcValue) >= 0) {
                $('#body').append(`<tr> 
            <td>${element.name}</td>
            <td>${element.diameter}</td>
            <td>${element.climate}</td>
            <td>${element.terrain}</td>
            <td>${element.rotation_period}</td>
            <td>${element.population}</td>
             </tr>`);


            }
        }
    }}
});
