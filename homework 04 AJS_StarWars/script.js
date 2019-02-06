let peopleArr = [];
let planetArr = [];
let input = $('#inputArea');
$(function () {
    getPeople('https://swapi.co/api/people/');
    getPlanets('https://swapi.co/api/planets/');
    
    $(document).on("click", "#table tbody tr", function () {

        let name = $(this).attr("data-name");
        let findPerson = null;
        peopleArr.forEach(element => {
            if (element.name === name) {
                findPerson = element;
            }
        });

        if (findPerson != null) {
            
            $('#details').html("")
            .append(`${findPerson.name} has ${findPerson.hair_color} hair color and ${findPerson.eye_color} eyes`)
            .css("background-color", "yellow")
        }
        var findPlanet = null
        planetArr.forEach(element => {
            if (element.name === name) {
                findPlanet = element;
            }
        });
        if (findPlanet != null) {
            $('#details').html("")
            .append(`${findPlanet.name} Planet is created ${findPlanet.created}`)
            .css("background-color", "red")
        }
    });
});

$('#getPeople').click(function () {
    $('#body').html("");
    $('#spin').show();
    appendPeople(peopleArr);

});

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
    });
};
function appendPeople(people) {
    people.forEach(element => {
        appendPerson(element);
    });
};

function appendPerson(element) {
    $('#body').append(`
    <tr data-name="${element.name}">
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
}


function getPlanets(url) {
    fetch(url)
        .then(dataPlanet => {
            return dataPlanet.json();
        })
        .then((dataPlanet) => {


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
    $('#body').html("");
    $('#spin').show()
    appendPlanets(planetArr);
})

function appendPlanets(planets) {
    planets.forEach(element => {
        apppendPlanet(element);

    });
}

function apppendPlanet(element) {
    $('#body').append(`<tr data-name="${element.name}">
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
}
function planeti(dataPlanet) {
    let results = dataPlanet.results
    results.forEach(element => {
        planetArr.push(element)
    });
};
$('#goHome').click(function () {
    $('#people').hide();
    $('#planets').hide();
    $('#body').html("");
    $('.logo').show();
    $('#spin').hide();
});

$("#search").on('click', function () {
    $('#body').html("");
    var searcValue = input.val();
    for (let i = 0; i < peopleArr.length; i++) {
        let element = peopleArr[i];
        if (element.name.indexOf(searcValue) >= 0) {
            appendPerson(element);
        }
    }
    for (let i = 0; i < planetArr.length; i++) {
        let element = planetArr[i];
        if (element.name.indexOf(searcValue) >= 0) {

            apppendPlanet(element);
        }
    }
});
