//task 2 : characterEpisodes func Extracts the episodes array in which each character appears
export const characterEpisodes = (characterData) => {
    console.log(characterData)
let episode_subs = ""
let episodes_array = []
characterData.results.map((character)=>{
    character.episode.map((episode)=>{
        episode_subs = episode.substring(episode.lastIndexOf('/')+1,episode.length);
        return episodes_array.push(episode_subs);
    })
    return episodes_array
    })
    console.log(episodes_array)
return episodes_array
}
//task 1: extract most popular "evil" character from the Citadel of Ricks
export const findMax = (res) => {
let maxVal = 0,episode_length = 0;
let name = "",id = "";
const ans = res.data.results.map((character,indx) => {
if(character.location.name === "Citadel of Ricks"){
    episode_length = character.episode.length
    if(episode_length > maxVal){
        maxVal = episode_length
        name = character.name
        id = indx
      }
}})
return [maxVal,name,res.data.results[id]]
}
