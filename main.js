console.log("Object Fundamentals Review")

// sample object
const tenAlbum = {
    title: "Ten",
    artist: "Pearl Jam",
    released: "8/27/1991",
    tracks: [
        {
            title: "Once",
            length: 232
        },
        {
            title: "Even Flow",
            length: 293
        },
        {
            title: "Alive",
            length: 341
        },
        {
            title: "Why Go",
            length: 200
        },
        {
            title: "Black",
            length: 344
        },
        {
            title: "Jeremy",
            length: 319
        },
        {
            title: "Oceans",
            length: 162
        },
        {
            title: "Porch",
            length: 211
        },
        {
            title: "Garden",
            length: 299
        },
        {
            title: "Deep",
            length: 258
        },
        {
            title: "Release",
            length: 543
        }
    ]
}

// Dot vs. Bracket Notation - accessing properties
// USING DOT NOTATION, access the object properties and log the following message to the console:
// "Pearl Jam's Album Ten was released on 8/27/1991"
// OUTPUT THE SAME message to the console using bracket notation

// Iterate the tracks array and output the title of each song and its song length using a for loop of your choosing. The output should look like this:
// Title: Once - Length: 232
// Title: Even Flow - Length: 293
// etc...

for (const track of tenAlbum.tracks) {
    console.log(`Title: ${track.title} - Length: ${track.length}`)
}


// Iterate the tenAlbum object and log the key/value pairs to the console
// example: "title": "Ten"
for (const key in tenAlbum) {
    console.log(key, tenAlbum[key])
}


// OBJECT.keys() / .values() / .entries()
const keys = Object.keys(tenAlbum)
console.log('keys: ', keys);

// for (const key of Object.keys(tenAlbum)){
// for (const value of Object.values(tenAlbum)){
// for (const entry of Object.entries(tenAlbum)){
for (const [key, value] of Object.entries(tenAlbum)) {
    console.log(key, value)
}










import { setlistsFromAPI } from './setlists.js'
console.log('setlistsFromAPI: ', setlistsFromAPI);
// USING the setlistsFromAPI data, find the event dated 20-08-2018
// USING DOT OR BRACKET NOTATION, log the name of the band, venue, and the event date to the console
// USING ANY OF THE WAYS TO LOOP AND ACCESS OBJECT PROPERTIES, log the name of each song from the first set of that event

const event = setlistsFromAPI.setlist[2]
const venueDate = `${event.artist.name} - ${event.venue.name} - ${event.eventDate}`
console.log(venueDate);

const headerElement = document.getElementById("header")
const setlistElement = document.getElementById("setlist")
headerElement.innerHTML = venueDate


const firstSet = event.sets.set[0].song

for (const song of firstSet) {
    console.log(song.name)
    setlistElement.innerHTML += `<li>${song.name}</li>`
}

firstSet.forEach(song => console.log(song.name))

