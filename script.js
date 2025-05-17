const userSearch = document.getElementById('search-box');
const searchButton = document.getElementById('actual-search-button');
const select = document.getElementById('select');
const pokemons = document.getElementById('pokemons');

const pokemonsArr = [
    { name: "Bulbasaur", type: "Grass/Poison", number: 1, gender: "Male/Female" },
    { name: "Ivysaur", type: "Grass/Poison", number: 2, gender: "Male/Female" },
    { name: "Venusaur", type: "Grass/Poison", number: 3, gender: "Male/Female" },
    { name: "Charmander", type: "Fire", number: 4, gender: "Male/Female" },
    { name: "Charmeleon", type: "Fire", number: 5, gender: "Male/Female" },
    { name: "Charizard", type: "Fire/Flying", number: 6, gender: "Male/Female" },
    { name: "Squirtle", type: "Water", number: 7, gender: "Male/Female" },
    { name: "Wartortle", type: "Water", number: 8, gender: "Male/Female" },
    { name: "Blastoise", type: "Water", number: 9, gender: "Male/Female" },
    { name: "Caterpie", type: "Bug", number: 10, gender: "Male/Female" },
    { name: "Metapod", type: "Bug", number: 11, gender: "Male/Female" },
    { name: "Butterfree", type: "Bug/Flying", number: 12, gender: "Male/Female" },
    { name: "Weedle", type: "Bug/Poison", number: 13, gender: "Male/Female" },
    { name: "Kakuna", type: "Bug/Poison", number: 14, gender: "Male/Female" },
    { name: "Beedrill", type: "Bug/Poison", number: 15, gender: "Male/Female" },
    { name: "Pidgey", type: "Normal/Flying", number: 16, gender: "Male/Female" },
    { name: "Pidgeotto", type: "Normal/Flying", number: 17, gender: "Male/Female" },
    { name: "Pidgeot", type: "Normal/Flying", number: 18, gender: "Male/Female" },
    { name: "Rattata", type: "Normal", number: 19, gender: "Male/Female" },
    { name: "Raticate", type: "Normal", number: 20, gender: "Male/Female" },
    { name: "Spearow", type: "Normal/Flying", number: 21, gender: "Male/Female" },
    { name: "Fearow", type: "Normal/Flying", number: 22, gender: "Male/Female" },
    { name: "Ekans", type: "Poison", number: 23, gender: "Male/Female" },
    { name: "Arbok", type: "Poison", number: 24, gender: "Male/Female" },
    { name: "Pikachu", type: "Electric", number: 25, gender: "Male/Female" },
    { name: "Raichu", type: "Electric", number: 26, gender: "Male/Female" },
    { name: "Sandshrew", type: "Ground", number: 27, gender: "Male/Female" },
    { name: "Sandslash", type: "Ground", number: 28, gender: "Male/Female" },
    { name: "Nidoran", type: "Poison", number: 29, gender: "Female" },
    { name: "Nidorina", type: "Poison", number: 30, gender: "Female" },
    { name: "Nidoqueen", type: "Poison/Ground", number: 31, gender: "Female" },
    { name: "Nidoran", type: "Poison", number: 32, gender: "Male" },
    { name: "Nidorino", type: "Poison", number: 33, gender: "Male" },
    { name: "Nidoking", type: "Poison/Ground", number: 34, gender: "Male" },
    { name: "Clefairy", type: "Fairy", number: 35, gender: "Male/Female" },
    { name: "Clefable", type: "Fairy", number: 36, gender: "Male/Female" },
    { name: "Vulpix", type: "Fire", number: 37, gender: "Male/Female" },
    { name: "Ninetales", type: "Fire", number: 38, gender: "Male/Female" },
    { name: "Jigglypuff", type: "Normal/Fairy", number: 39, gender: "Male/Female" },
    { name: "Wigglytuff", type: "Normal/Fairy", number: 40, gender: "Male/Female" },
    { name: "Zubat", type: "Poison/Flying", number: 41, gender: "Male/Female" },
    { name: "Golbat", type: "Poison/Flying", number: 42, gender: "Male/Female" },
    { name: "Oddish", type: "Grass/Poison", number: 43, gender: "Male/Female" },
    { name: "Gloom", type: "Grass/Poison", number: 44, gender: "Male/Female" },
    { name: "Vileplume", type: "Grass/Poison", number: 45, gender: "Male/Female" },
    { name: "Paras", type: "Bug/Grass", number: 46, gender: "Male/Female" },
    { name: "Parasect", type: "Bug/Grass", number: 47, gender: "Male/Female" },
    { name: "Venonat", type: "Bug/Poison", number: 48, gender: "Male/Female" },
    { name: "Venomoth", type: "Bug/Poison", number: 49, gender: "Male/Female" },
    { name: "Diglett", type: "Ground", number: 50, gender: "Male/Female" },
    { name: "Dugtrio", type: "Ground", number: 51, gender: "Male/Female" },
    { name: "Meowth", type: "Normal", number: 52, gender: "Male/Female" },
    { name: "Persian", type: "Normal", number: 53, gender: "Male/Female" },
    { name: "Psyduck", type: "Water", number: 54, gender: "Male/Female" },
    { name: "Golduck", type: "Water", number: 55, gender: "Male/Female" },
    { name: "Mankey", type: "Fighting", number: 56, gender: "Male/Female" },
    { name: "Primeape", type: "Fighting", number: 57, gender: "Male/Female" },
    { name: "Growlithe", type: "Fire", number: 58, gender: "Male/Female" },
    { name: "Arcanine", type: "Fire", number: 59, gender: "Male/Female" },
    { name: "Poliwag", type: "Water", number: 60, gender: "Male/Female" },
    { name: "Poliwhirl", type: "Water", number: 61, gender: "Male/Female" },
    { name: "Poliwrath", type: "Water/Fighting", number: 62, gender: "Male/Female" },
    { name: "Abra", type: "Psychic", number: 63, gender: "Male/Female" },
    { name: "Kadabra", type: "Psychic", number: 64, gender: "Male/Female" },
    { name: "Alakazam", type: "Psychic", number: 65, gender: "Male/Female" },
    { name: "Machop", type: "Fighting", number: 66, gender: "Male/Female" },
    { name: "Machoke", type: "Fighting", number: 67, gender: "Male/Female" },
    { name: "Machamp", type: "Fighting", number: 68, gender: "Male/Female" },
    { name: "Bellsprout", type: "Grass/Poison", number: 69, gender: "Male/Female" },
    { name: "Weepinbell", type: "Grass/Poison", number: 70, gender: "Male/Female" },
    { name: "Victreebel", type: "Grass/Poison", number: 71, gender: "Male/Female" },
    { name: "Tentacool", type: "Water/Poison", number: 72, gender: "Male/Female" },
    { name: "Tentacruel", type: "Water/Poison", number: 73, gender: "Male/Female" },
    { name: "Geodude", type: "Rock/Ground", number: 74, gender: "Male/Female" },
    { name: "Graveler", type: "Rock/Ground", number: 75, gender: "Male/Female" },
    { name: "Golem", type: "Rock/Ground", number: 76, gender: "Male/Female" },
    { name: "Ponyta", type: "Fire", number: 77, gender: "Male/Female" },
    { name: "Rapidash", type: "Fire", number: 78, gender: "Male/Female" },
    { name: "Slowpoke", type: "Water/Psychic", number: 79, gender: "Male/Female" },
    { name: "Slowbro", type: "Water/Psychic", number: 80, gender: "Male/Female" },
    { name: "Magnemite", type: "Electric/Steel", number: 81, gender: "Genderless" },
    { name: "Magneton", type: "Electric/Steel", number: 82, gender: "Genderless" },
    { name: "Farfetchd", type: "Normal/Flying", number: 83, gender: "Male/Female" },
    { name: "Chikorita", type: "Grass", number: 152, gender: "Male/Female" },
    { name: "Bayleef", type: "Grass", number: 153, gender: "Male/Female" },
    { name: "Meganium", type: "Grass", number: 154, gender: "Male/Female" },
    { name: "Cyndaquil", type: "Fire", number: 155, gender: "Male/Female" },
    { name: "Quilava", type: "Fire", number: 156, gender: "Male/Female" },
    { name: "Typhlosion", type: "Fire", number: 157, gender: "Male/Female" },
    { name: "Totodile", type: "Water", number: 158, gender: "Male/Female" },
    { name: "Croconaw", type: "Water", number: 159, gender: "Male/Female" },
    { name: "Feraligatr", type: "Water", number: 160, gender: "Male/Female" },
    { name: "Sentret", type: "Normal", number: 161, gender: "Male/Female" },
    { name: "Furret", type: "Normal", number: 162, gender: "Male/Female" },
    { name: "Hoothoot", type: "Normal/Flying", number: 163, gender: "Male/Female" },
    { name: "Noctowl", type: "Normal/Flying", number: 164, gender: "Male/Female" },
    { name: "Ledyba", type: "Bug/Flying", number: 165, gender: "Male/Female" },
    { name: "Ledian", type: "Bug/Flying", number: 166, gender: "Male/Female" },
    { name: "Spinarak", type: "Bug/Poison", number: 167, gender: "Male/Female" },
    { name: "Ariados", type: "Bug/Poison", number: 168, gender: "Male/Female" },
    { name: "Crobat", type: "Poison/Flying", number: 169, gender: "Male/Female" },
    { name: "Chinchou", type: "Water/Electric", number: 170, gender: "Male/Female" },
    { name: "Lanturn", type: "Water/Electric", number: 171, gender: "Male/Female" },
    { name: "Pichu", type: "Electric", number: 172, gender: "Male/Female" },
    { name: "Cleffa", type: "Fairy", number: 173, gender: "Male/Female" },
    { name: "Igglybuff", type: "Normal/Fairy", number: 174, gender: "Male/Female" },
    { name: "Togepi", type: "Fairy", number: 175, gender: "Male/Female" },
    { name: "Togetic", type: "Fairy/Flying", number: 176, gender: "Male/Female" },
    { name: "Natu", type: "Psychic/Flying", number: 177, gender: "Male/Female" },
    { name: "Xatu", type: "Psychic/Flying", number: 178, gender: "Male/Female" },
    { name: "Mareep", type: "Electric", number: 179, gender: "Male/Female" },
    { name: "Flaaffy", type: "Electric", number: 180, gender: "Male/Female" },
    { name: "Ampharos", type: "Electric", number: 181, gender: "Male/Female" },
    { name: "Bellossom", type: "Grass", number: 182, gender: "Male/Female" },
    { name: "Marill", type: "Water/Fairy", number: 183, gender: "Male/Female" },
    { name: "Azumarill", type: "Water/Fairy", number: 184, gender: "Male/Female" },
    { name: "Sudowoodo", type: "Rock", number: 185, gender: "Male/Female" },
    { name: "Politoed", type: "Water", number: 186, gender: "Male/Female" },
    { name: "Hoppip", type: "Grass/Flying", number: 187, gender: "Male/Female" },
    { name: "Skiploom", type: "Grass/Flying", number: 188, gender: "Male/Female" },
    { name: "Jumpluff", type: "Grass/Flying", number: 189, gender: "Male/Female" },
    { name: "Aipom", type: "Normal", number: 190, gender: "Male/Female" },
    { name: "Sunkern", type: "Grass", number: 191, gender: "Male/Female" },
    { name: "Sunflora", type: "Grass", number: 192, gender: "Male/Female" },
    { name: "Yanma", type: "Bug/Flying", number: 193, gender: "Male/Female" },
    { name: "Wooper", type: "Water/Ground", number: 194, gender: "Male/Female" },
    { name: "Quagsire", type: "Water/Ground", number: 195, gender: "Male/Female" },
    { name: "Espeon", type: "Psychic", number: 196, gender: "Male/Female" },
    { name: "Umbreon", type: "Dark", number: 197, gender: "Male/Female" },
    { name: "Murkrow", type: "Dark/Flying", number: 198, gender: "Male/Female" },
    { name: "Slowking", type: "Water/Psychic", number: 199, gender: "Male/Female" },
    { name: "Misdreavus", type: "Ghost", number: 200, gender: "Male/Female" },
    { name: "Unown", type: "Psychic", number: 201, gender: "Genderless" },
    { name: "Wobbuffet", type: "Psychic", number: 202, gender: "Male/Female" },
    { name: "Girafarig", type: "Normal/Psychic", number: 203, gender: "Male/Female" },
    { name: "Pineco", type: "Bug", number: 204, gender: "Male/Female" },
    { name: "Forretress", type: "Bug/Steel", number: 205, gender: "Male/Female" },
    { name: "Dunsparce", type: "Normal", number: 206, gender: "Male/Female" },
    { name: "Gligar", type: "Ground/Flying", number: 207, gender: "Male/Female" },
    { name: "Steelix", type: "Steel/Ground", number: 208, gender: "Male/Female" },
    { name: "Snubbull", type: "Fairy", number: 209, gender: "Male/Female" },
    { name: "Granbull", type: "Fairy", number: 210, gender: "Male/Female" },
    { name: "Qwilfish", type: "Water/Poison", number: 211, gender: "Male/Female" },
    { name: "Scizor", type: "Bug/Steel", number: 212, gender: "Male/Female" },
    { name: "Shuckle", type: "Bug/Rock", number: 213, gender: "Male/Female" },
    { name: "Heracross", type: "Bug/Fighting", number: 214, gender: "Male/Female" },
    { name: "Sneasel", type: "Dark/Ice", number: 215, gender: "Male/Female" },
    { name: "Teddiursa", type: "Normal", number: 216, gender: "Male/Female" },
    { name: "Ursaring", type: "Normal", number: 217, gender: "Male/Female" },
    { name: "Slugma", type: "Fire", number: 218, gender: "Male/Female" },
    { name: "Magcargo", type: "Fire/Rock", number: 219, gender: "Male/Female" },
    { name: "Swinub", type: "Ice/Ground", number: 220, gender: "Male/Female" },
    { name: "Piloswine", type: "Ice/Ground", number: 221, gender: "Male/Female" },
    { name: "Corsola", type: "Water/Rock", number: 222, gender: "Male/Female" },
    { name: "Remoraid", type: "Water", number: 223, gender: "Male/Female" },
    { name: "Octillery", type: "Water", number: 224, gender: "Male/Female" },
    { name: "Delibird", type: "Ice/Flying", number: 225, gender: "Male/Female" },
    { name: "Mantine", type: "Water/Flying", number: 226, gender: "Male/Female" },
    { name: "Skarmory", type: "Steel/Flying", number: 227, gender: "Male/Female" },
    { name: "Houndour", type: "Dark/Fire", number: 228, gender: "Male/Female" },
    { name: "Houndoom", type: "Dark/Fire", number: 229, gender: "Male/Female" },
    { name: "Kingdra", type: "Water/Dragon", number: 230, gender: "Male/Female" },
    { name: "Phanpy", type: "Ground", number: 231, gender: "Male/Female" },
    { name: "Donphan", type: "Ground", number: 232, gender: "Male/Female" },
    { name: "Porygon2", type: "Normal", number: 233, gender: "Genderless" },
    { name: "Stantler", type: "Normal", number: 234, gender: "Male/Female" },
    { name: "Smeargle", type: "Normal", number: 235, gender: "Male/Female" },
    { name: "Tyrogue", type: "Fighting", number: 236, gender: "Male/Female" },
    { name: "Hitmontop", type: "Fighting", number: 237, gender: "Male/Female" },
    { name: "Smoochum", type: "Ice/Psychic", number: 238, gender: "Male/Female" },
    { name: "Elekid", type: "Electric", number: 239, gender: "Male/Female" },
    { name: "Magby", type: "Fire", number: 240, gender: "Male/Female" },
    { name: "Miltank", type: "Normal", number: 241, gender: "Male/Female" },
    { name: "Blissey", type: "Normal", number: 242, gender: "Male/Female" },
    { name: "Raikou", type: "Electric", number: 243, gender: "Genderless" },
    { name: "Entei", type: "Fire", number: 244, gender: "Genderless" },
    { name: "Suicune", type: "Water", number: 245, gender: "Genderless" },
    { name: "Larvitar", type: "Rock/Ground", number: 246, gender: "Male/Female" },
    { name: "Pupitar", type: "Rock/Ground", number: 247, gender: "Male/Female" },
    { name: "Tyranitar", type: "Rock/Dark", number: 248, gender: "Male/Female" },
    { name: "Lugia", type: "Psychic/Flying", number: 249, gender: "Genderless" },
    { name: "Ho-oh", type: "Fire/Flying", number: 250, gender: "Genderless" },
    { name: "Glalie", type: "Ice", number: 251, gender: "Male/Female" },
    { name: "Dragonair", type: "Dragon", number: 252, gender: "Male/Female" },
    { name: "Registeel", type: "Steel", number: 253, gender: "Unknown" },
    { name: "Dewgong", type: "Water/Ice", number: 87, gender: "Male/Female" },
    { name: "Cloyster", type: "Water/Ice", number: 91, gender: "Male/Female" },
    { name: "Lapras", type: "Water/Ice", number: 131, gender: "Male/Female" },
    { name: "Spheal", type: "Water/Ice", number: 363, gender: "Male/Female" },
    { name: "Sealeo", type: "Water/Ice", number: 364, gender: "Male/Female" },
    { name: "Walrein", type: "Water/Ice", number: 365, gender: "Male/Female" },
    { name: "Arctovish", type: "Water/Ice", number: 883, gender: "Genderless" },
    { name: "Zapdos", type: "Electric/Flying", number: 145, gender: "Genderless" },
    { name: "Emolga", type: "Electric/Flying", number: 587, gender: "Male/Female" },
    { name: "Thundurus", type: "Electric/Flying", number: 642, gender: "Male" },
    { name: "Oricorio", type: "Electric/Flying", number: 741, gender: "Male/Female" },
    { name: "Rotom", type: "Electric/Flying", number: 479, gender: "Genderless" },
    { name: "Wattrel", type: "Electric/Flying", number: 940, gender: "Male/Female" },
    { name: "Kilowattrel", type: "Electric/Flying", number: 941, gender: "Male/Female" },
    { name: "Gardevoir", type: "Psychic/Fairy", number: 282, gender: "Male/Female" },
    { name: "Hatenna", type: "Psychic/Fairy", number: 856, gender: "Female" },
    { name: "Hattrem", type: "Psychic/Fairy", number: 857, gender: "Female" },
    { name: "Hatterene", type: "Psychic/Fairy", number: 858, gender: "Female" },
    { name: "Tapu Lele", type: "Psychic/Fairy", number: 786, gender: "Genderless" },
    { name: "Mawile", type: "Steel/Fairy", number: 303, gender: "Male/Female" },
    { name: "Klefki", type: "Steel/Fairy", number: 707, gender: "Genderless" },
    { name: "Magearna", type: "Steel/Fairy", number: 801, gender: "Genderless" },
    { name: "Tinkatink", type: "Fairy/Steel", number: 957, gender: "Female" },
    { name: "Tinkatuff", type: "Fairy/Steel", number: 958, gender: "Female" },
    { name: "Tinkaton", type: "Fairy/Steel", number: 959, gender: "Female" },
    { name: "Sableye", type: "Dark/Ghost", number: 302, gender: "Male/Female" },
    { name: "Sableye", type: "Dark/Ghost", number: 302, gender: "Male/Female" },
    { name: "Spiritomb", type: "Ghost/Dark", number: 442, gender: "Male/Female" },
    { name: "Dragonite", type: "Dragon/Flying", number: 149, gender: "Male/Female" },
    { name: "Salamence", type: "Dragon/Flying", number: 373, gender: "Male/Female" },
    { name: "Salamence", type: "Dragon/Flying", number: 373, gender: "Male/Female" },
    { name: "Rayquaza", type: "Dragon/Flying", number: 384, gender: "Genderless" },
    { name: "Rayquaza", type: "Dragon/Flying", number: 384, gender: "Genderless" },
    { name: "Noibat", type: "Flying/Dragon", number: 714, gender: "Male/Female" },
    { name: "Noivern", type: "Flying/Dragon", number: 715, gender: "Male/Female" },
    { name: "Hawlucha", type: "Fighting/Flying", number: 701, gender: "Male/Female" },
    { name: "Zapdos", type: "Fighting/Flying", number: 145, gender: "Genderless" },
    { name: "Omanyte", type: "Rock/Water", number: 138, gender: "Male/Female" },
    { name: "Omastar", type: "Rock/Water", number: 139, gender: "Male/Female" },
    { name: "Kabuto", type: "Rock/Water", number: 140, gender: "Male/Female" },
    { name: "Kabutops", type: "Rock/Water", number: 141, gender: "Male/Female" },
    { name: "Corsola", type: "Water/Rock", number: 222, gender: "Male/Female" },
    { name: "Relicanth", type: "Water/Rock", number: 369, gender: "Male/Female" },
    { name: "Tirtouga", type: "Water/Rock", number: 564, gender: "Male/Female" },
    { name: "Carracosta", type: "Water/Rock", number: 565, gender: "Male/Female" },
    { name: "Binacle", type: "Rock/Water", number: 688, gender: "Male/Female" },
    { name: "Barbaracle", type: "Rock/Water", number: 689, gender: "Male/Female" },
    { name: "Drednaw", type: "Water/Rock", number: 834, gender: "Male/Female" },
    { name: "Gastly", type: "Ghost/Poison", number: 92, gender: "Male/Female" },
    { name: "Haunter", type: "Ghost/Poison", number: 93, gender: "Male/Female" },
    { name: "Gengar", type: "Ghost/Poison", number: 94, gender: "Male/Female" },
    { name: "Gengar", type: "Ghost/Poison", number: 94, gender: "Male/Female" },
    { name: "Magnemite", type: "Electric/Steel", number: 81, gender: "Genderless" },
    { name: "Magneton", type: "Electric/Steel", number: 82, gender: "Genderless" },
    { name: "Magnezone", type: "Electric/Steel", number: 462, gender: "Genderless" },
    { name: "Togedemaru", type: "Electric/Steel", number: 777, gender: "Male/Female" }
];


const setPokemonCards = (arr = pokemonsArr) =>{
    pokemons.innerHTML += arr.map(
        ({ name, type, number, gender })=>{
            return `
                <div id="pokemon-card">
                    <h2>${name}</h2>
                    <div id="pokemon-card-body">
                        <p>Type: ${type}</p>
                        <p>Number: ${number}</p>
                        <p>Gender: ${gender}</p>
                    </div>
                </div>
            `}
    ).join("");
};

select.addEventListener("click", (e)=>{
    pokemons.innerHTML = "";
    switch(e.target.value){
        case "Normal":
            setPokemonCards(pokemonsArr.filter((pokemon) => pokemon.type === "Normal"));
            break;
        case "Fire":
            setPokemonCards(pokemonsArr.filter((pokemon) => pokemon.type === "Fire"));
            break;
        case "Water":
            setPokemonCards(pokemonsArr.filter((pokemon) => pokemon.type === "Water"));
            break;
        case "Electric":
            setPokemonCards(pokemonsArr.filter((pokemon) => pokemon.type === "Electric"));
            break;
        case "Grass":
            setPokemonCards(pokemonsArr.filter((pokemon) => pokemon.type === "Grass"));
            break;
        case "Ice":
            setPokemonCards(pokemonsArr.filter((pokemon) => pokemon.type === "Ice"));
            break;
        case "Fighting":
            setPokemonCards(pokemonsArr.filter((pokemon) => pokemon.type === "Fighting"));
            break;
        case "Poison":
            setPokemonCards(pokemonsArr.filter((pokemon) => pokemon.type === "Poison"));
            break;
        case "Ground":
            setPokemonCards(pokemonsArr.filter((pokemon) => pokemon.type === "Ground"));
            break;
        case "Flying":
            setPokemonCards(pokemonsArr.filter((pokemon) => pokemon.type === "Flying"));
            break;
        case "Psychic":
            setPokemonCards(pokemonsArr.filter((pokemon) => pokemon.type === "Psychic"));
            break;
        case "Bug":
            setPokemonCards(pokemonsArr.filter((pokemon) => pokemon.type === "Bug"));
            break;
        case "Rock":
            setPokemonCards(pokemonsArr.filter((pokemon) => pokemon.type === "Rock"));
            break;
        case "Ghost":
            setPokemonCards(pokemonsArr.filter((pokemon) => pokemon.type === "Ghost"));
            break;
        case "Dragon":
            setPokemonCards(pokemonsArr.filter((pokemon) => pokemon.type === "Dragon"));
            break;
        case "Dark":
            setPokemonCards(pokemonsArr.filter((pokemon) => pokemon.type === "Dark"));
            break;
        case "Steel":
            setPokemonCards(pokemonsArr.filter((pokemon) => pokemon.type === "Steel"));
            break;
        case "Fairy":
            setPokemonCards(pokemonsArr.filter((pokemon) => pokemon.type === "Fairy"));
            break;
        case "Grass/Poison":
            setPokemonCards(pokemonsArr.filter((pokemon) => pokemon.type === "Grass/Poison"));
            break;
        case "Fire/Flying":
            setPokemonCards(pokemonsArr.filter((pokemon) => pokemon.type === "Fire/Flying"));
            break;
        case "Bug/Flying":
            setPokemonCards(pokemonsArr.filter((pokemon) => pokemon.type === "Bug/Flying"));
            break;
        case "Bug/Poison":
            setPokemonCards(pokemonsArr.filter((pokemon) => pokemon.type === "Bug/Poison"));
            break;
        case "Normal/Flying":
            setPokemonCards(pokemonsArr.filter((pokemon) => pokemon.type === "Normal/Flying"));
            break;
        case "Poison/Ground":
            setPokemonCards(pokemonsArr.filter((pokemon) => pokemon.type === "Poison/Ground"));
            break;
        case "Water/Ice":
            setPokemonCards(pokemonsArr.filter((pokemon) => pokemon.type === "Water/Ice"));
            break;
        case "Rock/Ground":
            setPokemonCards(pokemonsArr.filter((pokemon) => pokemon.type === "Rock/Ground"));
            break;
        case "Electric/Flying":
            setPokemonCards(pokemonsArr.filter((pokemon) => pokemon.type === "Electric/Flying"));
            break;
        case "Fire/Rock":
            setPokemonCards(pokemonsArr.filter((pokemon) => pokemon.type === "Fire/Rock"));
            break;
        case "Psychic/Fairy":
            setPokemonCards(pokemonsArr.filter((pokemon) => pokemon.type === "Psychic/Fairy"));
            break;
        case "Steel/Fairy":
            setPokemonCards(pokemonsArr.filter((pokemon) => pokemon.type === "Steel/Fairy"));
            break;
        case "Dark/Ghost":
            setPokemonCards(pokemonsArr.filter((pokemon) => pokemon.type === "Dark/Ghost"));
            break;
        case "Dragon/Flying":
            setPokemonCards(pokemonsArr.filter((pokemon) => pokemon.type === "Dragon/Flying"));
            break;
        case "Fighting/Flying":
            setPokemonCards(pokemonsArr.filter((pokemon) => pokemon.type === "Fighting/Flying"));
            break;
        case "Rock/Water":
            setPokemonCards(pokemonsArr.filter((pokemon) => pokemon.type === "Rock/Water"));
            break;
        case "Ghost/Poison":
            setPokemonCards(pokemonsArr.filter((pokemon) => pokemon.type === "Ghost/Poison"));
            break;
        case "Electric/Steel":
            setPokemonCards(pokemonsArr.filter((pokemon) => pokemon.type === "Electric/Steel"));
            break;
        default:
            setPokemonCards();
    }
})

searchButton.addEventListener("click", () => {
    const query = userSearch.value.toLowerCase().trim();
    const filtered = pokemonsArr.filter(pokemon => 
        pokemon.name.toLowerCase().includes(query)
    );
    pokemons.innerHTML = "";
    setPokemonCards(filtered);
    if(pokemons.innerHTML == ""){
        pokemons.innerHTML = "<p id='large-texts'>Sorry! The pokemon you searched has not been added yet <br>or you have spelt it wrong!</p>";
    }
});
