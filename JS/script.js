// https://api.dictionaryapi.dev/api/v2/entries/en/<word>
const url = "https://api.dictionaryapi.dev/api/v2/entries/en/"
const sound = document.getElementById("sound");
let dictionary = {
  fetchingDictionary: function (defaultWord = "town") {
    fetch(url + defaultWord)
      .then((response) => response.json())
      .then((data) => this.displayDictionary(data));



  },
  displayDictionary: function (data) {
    word = data[0].word;
    nonword = data[0]["phonetic"] || "not found"
    meaning1 = data[0].meanings[0].definitions[0].definition || data[0].meanings[0].definitions[1].definition || data[0].meanings[0].definitions[0].definition || "not found"
    meaning2 = data[0].meanings[0].definitions[3].definition || data[0].meanings[0].definitions[4].definition || data[0].meanings[0].definitions[5].definition || "not found"
    example1 = data[0].meanings[0].definitions[0].example || data[0].meanings[0].definitions[1].example || data[0].meanings[0].definitions[2].example || data[0].meanings[0].definitions[3].example || "not found"
    example2 = data[0].meanings[0].definitions[4].example || data[0].meanings[0].definitions[5].example || data[0].meanings[0].definitions[6].example || "not found"
    auioSource = data[0].phonetics[0].audio || "not found";
    audioSources = data[0].phonetics.map((phonetic) => phonetic.audio);
    // console.log(audioSources[0]);


    // console.log(word, nonword, meaning1, meaning2, example1, example2)
    // console.log(auioSource)


    document.getElementById("main-text").innerText = word;


    document.querySelector("#non-main-text").innerText = nonword;
    document.querySelector("#js-meaning").innerText = meaning1;
    document.querySelector("#js-meaning2").innerText = meaning2;
    document.querySelector("#example-span-text").innerText;
    document.querySelector("#js-example").innerText = example1;
    document.querySelector("#js-example2").innerText = example2;


  },

  search: function () {
    this.fetchingDictionary(document.querySelector("#input-text").value);
  }

}
document.querySelector("#search-btn")
  .addEventListener("click", function () {
    dictionary.search();
    document.querySelector("#input-text").value = ""
  });
document.querySelector(".search-bar-input").addEventListener("keyup", function (event) {
  if (event.key == "Enter") {
    dictionary.search();
    document.querySelector(".search-bar-input").value = ""

  }
})

dictionary.fetchingDictionary();

document.querySelector(".audio-button").addEventListener("click", function () {
  const audio = document.getElementById("sound"); // Get the audio element
  au = audioSources[0] || audioSources[1] || audioSources[2] || audioSources[3];
  audio.src = au; // Replace with the audio source URL you want to play
  audio.play(); // Play the audio
});





