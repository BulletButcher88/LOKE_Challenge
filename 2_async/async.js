const { readFile, writeFile } = require("fs");
const https = require("https");
const { join } = require("path");
const { resolve } = require("url");

const SWAPI_URL = "https://swapi.co/api/";

// I'm lost on the callbacks. errors when restructing functions into async, try/catch. 

 async function apiGet(path) {
   try {
        https.get(resolve(SWAPI_URL, path), {headers: {Accept: "application/json"}}       
        
        .then(
          (res) => {
          let data = "";
  
          res.on("data", chunk => {
          data += chunk;
        });

          res.on("end", () => {
          cb(null, data ? JSON.parse(data) : null);
          });
        }
       )
    )
   } catch(error) {
     console.log(error)
   }
  }


async function getPerson(query, cb) {
  try {
    const data = await apiGet("people/?search=" + query)
    const [person] =  data.results;
    cb(null, person);

  } catch(error) {
    console.log(error)
  }
}


async function readSearchTerms() {
  try {
    const data = await readFile(join(__dirname, "search.txt"), { encoding: "utf8" });
    const nonEmptyLines = await data.split("\n").filter(line => Boolean(line));
   cb(null, nonEmptyLines)
    console.log(nonEmptyLines)
  } catch (error) {
    console.log(error) 
  }
}

function saveNames(people, cb) {
  (people.map(p => p ? console.log(p.name): p))
  console.log(`Saving ${people.length} results`);
  const data = people.map(p => (p ? p.name : "No results")).join("\n");
  writeFile(join(__dirname, "names.txt"), data, { encoding: "utf8" }, cb);
}

async function main() {
  readSearchTerms((err, terms) => {
    if (err) {
      console.error("Error reading search terms", err);
      return;
    }

    let numOk = 0;
    let firstErr;
    const people = Array(terms.length);

    const personCallback = (err, data, i) => {
      if (firstErr) {
        // ignore after first error
        return;
      }
      if (err) {
        firstErr = err;
        console.error("Error getting person", err);
        return;
      }

      people[i] = data;
      numOk++;

      if (numOk === terms.length) {
        saveNames(people, err => {
          if (err) {
            console.error("Error saving names", err);
            return;
          }
          console.log("Done");
        });
      }
    };

    terms.forEach((term, i) => {
      getPerson(term, (err, data) => {
        personCallback(err, data, i);
      });
    });
  });
  console.log("Searching for character names matching search terms");
}

main();

