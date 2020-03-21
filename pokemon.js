let baseURL = "https://pokeapi.co/api/v2/pokemon/"
let nameField = document.getElementById('pokemonNameField')
let search = document.getElementById('search')
let image = document.getElementById('pokemonImage');
let avatar = document.querySelector('#profilePic');
let speedStatNum = document.querySelector('.speedStat')
let spDefStatNum = document.querySelector('.spDefStat')
let spAttStatNum = document.querySelector('.spAttStat')
let defenseStatNum = document.querySelector('.defenseStat')
let attackStatNum = document.querySelector('.attackStat')
let hpStatNum = document.querySelector('.hpStat')



let type1Image = document.getElementById('typeImage1');
let type2Image = document.getElementById('typeImage2');

let pokemonName = document.querySelector('h1')

let grassTypeURL = 'https://vignette.wikia.nocookie.net/pokemon/images/4/46/Type_Grass.gif/'
let waterTypeURL = 'https://vignette.wikia.nocookie.net/pokemon/images/e/ed/Type_Water.gif'
let fireTypeURL = 'https://vignette.wikia.nocookie.net/pokemon/images/4/4d/Type_Fire.gif/'
let rockTypeURL = 'https://vignette.wikia.nocookie.net/pokemon/images/b/b3/Type_Rock.gif/'
let electricTypeURL = 'https://vignette.wikia.nocookie.net/pokemon/images/a/aa/Type_Electric.gif/'
let psychicTypeURL = 'https://vignette.wikia.nocookie.net/pokemon/images/6/65/Type_Psychic.gif/'
let ghostTypeURL = 'https://vignette.wikia.nocookie.net/pokemon/images/f/f2/Type_Ghost.gif'
let bugTypeURL = 'https://vignette.wikia.nocookie.net/pokemon/images/6/64/Type_Bug.gif/'
let dragonTypeURL = 'https://vignette.wikia.nocookie.net/pokemon/images/2/26/Type_Dragon.gif/'
let fairyTypeURL = 'https://vignette.wikia.nocookie.net/pokemon/images/7/74/Type_Fairy.gif/'
let fightingTypeURL = 'https://vignette.wikia.nocookie.net/pokemon/images/6/6b/Type_Fighting.gif/'
let iceTypeURL = 'https://vignette.wikia.nocookie.net/pokemon/images/8/84/Type_Ice.gif/'
let normalTypeURL = 'https://vignette.wikia.nocookie.net/pokemon/images/6/61/Type_Normal.gif/'
let steelTypeURL = 'https://vignette.wikia.nocookie.net/pokemon/images/a/ab/Type_Steel.gif'
let groundTypeURL = 'https://vignette.wikia.nocookie.net/pokemon/images/1/1d/Type_Ground.gif/'
let flyingTypeURL = 'https://vignette.wikia.nocookie.net/pokemon/images/4/4b/Type_Flying.gif/'
let poisonTypeURL = 'https://vignette.wikia.nocookie.net/pokemon/images/8/82/Type_Poison.gif/'
let darkTypeURL = 'https://vignette.wikia.nocookie.net/pokemon/images/0/0d/Type_Dark.gif/'
let profilePicURL = 'https://veekun.com/dex/media/pokemon/main-sprites/ultra-sun-ultra-moon/'






nameField.addEventListener('keyup', fetchResults);


function fetchResults(e) {
    e.preventDefault();
    let url = baseURL + nameField.value
    fetch(url)
        .then(response => response.json())
        .then(json => {
            displayResults(json)

        })

    function displayResults(json) {
        console.log(json.id)

        console.log(avatar.src)


        // nameField.text.charAt(0).toLowerCase();
        console.log(json)
        console.log(nameField.value)
        if (nameField.value == json.name || json.id) {




            image.src = json.sprites.front_default
            pokemonName.innerHTML = json.name.charAt(0).toUpperCase() + json.name.slice(1)
            avatar.src = profilePicURL + json.id + '.png'
            document.querySelector('#wildAppears').innerHTML = `Wild ${json.name} appeared!`

            document.querySelector('#statsWrap').style.visibility = 'visible'
            document.querySelector('#pokemonImage').style.visibility = 'visible'
            document.querySelector('#pokedex').style.visibility = 'visible'


            document.querySelector('#profilePicWrap').style.visibility = 'visible'
            document.querySelector('#profilePic').style.visibility = 'visible'

            document.querySelector('#poxedexWrap').style.visibility = 'visible'
            document.querySelector('.pokemonNameWrap').style.visibility = 'visible'


            document.querySelector('#wildAppears').style.visibility = 'visible'
            document.querySelector('.pokeballLoading').style.visibility = 'hidden'
            document.querySelector('#pikachuRunning').style.visibility = 'hidden'

            // document.querySelector('#pokemonName').style.visibility = 'visible'






            speedStatNum.innerHTML = json.stats[0].base_stat
            spDefStatNum.innerHTML = json.stats[1].base_stat
            spAttStatNum.innerHTML = json.stats[2].base_stat
            defenseStatNum.innerHTML = json.stats[3].base_stat
            attackStatNum.innerHTML = json.stats[4].base_stat
            hpStatNum.innerHTML = json.stats[5].base_stat






            //POKEMON TYPE 1 CHECKER
            if (json.types[0].type.name === 'grass') {
                type1Image.src = grassTypeURL
            } else if (json.types[0].type.name === 'poison') {
                type1Image.src = poisonTypeURL

            } else if (json.types[0].type.name === 'water') {
                type1Image.src = waterTypeURL
            } else if (json.types[0].type.name === 'fire') {
                type1Image.src = fireTypeURL
            } else if (json.types[0].type.name === 'rock') {
                type1Image.src = rockTypeURL
            } else if (json.types[0].type.name === 'electric') {
                type1Image.src = electricTypeURL
            } else if (json.types[0].type.name === 'psychic') {
                type1Image.src = psychicTypeURL
            } else if (json.types[0].type.name === 'ghost') {
                type1Image.src = ghostTypeURL
            } else if (json.types[0].type.name === 'bug') {
                type1Image.src = bugTypeURL
            } else if (json.types[0].type.name === 'dragon') {
                type1Image.src = dragonTypeURL
            } else if (json.types[0].type.name === 'fairy') {
                type1Image.src = fairyTypeURL
            } else if (json.types[0].type.name === 'fighting') {
                type1Image.src = fightingTypeURL
            } else if (json.types[0].type.name === 'ice') {
                type1Image.src = iceTypeURL
            } else if (json.types[0].type.name === 'normal') {
                type1Image.src = normalTypeURL
            } else if (json.types[0].type.name === 'steel') {
                type1Image.src = steelTypeURL
            } else if (json.types[0].type.name === 'ground') {
                type1Image.src = groundTypeURL
            } else if (json.types[0].type.name === 'flying') {
                type1Image.src = flyingTypeURL
            } else if (json.types[0].type.name === 'dark') {
                type1Image.src = darkTypeURL
            } else if (json.types[0].type.name === '' || json.types[0].type.name === undefined) {
                type1Image.src = ''
            }
            //POKEMON TYPE 2 CHECKER
            // console.log(json.types[1].type.name)
            console.log('taco')
            console.log(json.stats[0].base_stat)
            if (json.types[1] !== undefined) {

                if (json.types[1].type.name === 'grass') {
                    type2Image.src = grassTypeURL
                } else if (json.types[1].type.name === 'poison') {
                    type2Image.src = poisonTypeURL
                } else if (json.types[1].type.name === 'water') {
                    type2Image.src = waterTypeURL
                } else if (json.types[1].type.name === 'fire') {
                    type2Image.src = fireTypeURL
                } else if (json.types[1].type.name === 'rock') {
                    type2Image.src = rockTypeURL
                } else if (json.types[1].type.name === 'electric') {
                    type2Image.src = electricTypeURL
                } else if (json.types[1].type.name === 'psychic') {
                    type2Image.src = psychicTypeURL
                } else if (json.types[1].type.name === 'ghost') {
                    type2Image.src = ghostTypeURL
                } else if (json.types[1].type.name === 'bug') {
                    type2Image.src = bugTypeURL
                } else if (json.types[1].type.name === 'dragon') {
                    type2Image.src = dragonTypeURL
                } else if (json.types[1].type.name === 'fairy') {
                    type2Image.src = fairyTypeURL
                } else if (json.types[1].type.name === 'fighting') {
                    type2Image.src = fightingTypeURL
                } else if (json.types[1].type.name === 'ice') {
                    type2Image.src = iceTypeURL
                } else if (json.types[1].type.name === 'normal') {
                    type2Image.src = normalnTypeURL
                } else if (json.types[1].type.name === 'steel') {
                    type2Image.src = steelTypeURL
                } else if (json.types[1].type.name === 'ground') {
                    type2Image.src = groundTypeURL
                } else if (json.types[1].type.name === 'flying') {
                    type2Image.src = flyingTypeURL
                } else if (json.types[1].type.name === 'dark') {
                    type2Image.src = darkTypeURL
                }
            } else {
                type2Image.src = ''


            }


            console.log(json.types[0].type.name)
            console.log(json.types[1])


        } else {

            pokemonName.innerHTML = ''
            type1Image.src = ''
            type2Image.src = ''
            avatar.style.visibility = 'hidden'
            document.querySelector('#statsWrap').style.visibility = 'hidden'
            document.querySelector('#pokemonImage').style.visibility = 'hidden'
            document.querySelector('#pokedex').style.visibility = 'hidden'


            document.querySelector('#profilePicWrap').style.visibility = 'hidden'
            document.querySelector('#profilePic').style.visibility = 'hidden'


            document.querySelector('#poxedexWrap').style.visibility = 'hidden'

            document.querySelector('.pokemonNameWrap').style.visibility = 'hidden'
            document.querySelector('#wildAppears').style.visibility = 'hidden'
            document.querySelector('.pokeballLoading').style.visibility = 'visible'

            document.querySelector('#pikachuRunning').style.visibility = 'visible'

        }




    };
}