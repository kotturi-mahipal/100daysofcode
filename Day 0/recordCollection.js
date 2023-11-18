const recordCollection = {
  2548: {
    albumTitle: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love a Bad Name"],
  },
  2468: {
    albumTitle: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"],
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [],
  },
  5439: {
    albumTitle: "ABBA Gold",
  },
};

const updateRecords = (records, id, prop, value) => {
  if (value == "") delete records[id][prop];
  else if (prop != "tracks" && value != "") {
    records[id][prop] = value;
  } else if (prop == "tracks" && value != "") {
    if (!records[id].hasOwnProperty(prop)) {
      records[id][prop] = [];
    }
    records[id][prop].push(value);
  }
  return records;
};

console.log(updateRecords(recordCollection, 5439, "artist", "ABBA"));
console.log(
  updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me")
);
