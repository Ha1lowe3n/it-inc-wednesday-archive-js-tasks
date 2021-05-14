function DNAStrand(dna) {
    const arr = dna.split("");
    const letters = {
        A: "T",
        T: "A",
        G: "C",
        C: "G",
    };
    for (let i = 0; i < arr.length; i++) {
        arr[i] = letters[arr[i]] || arr[i];
    }
    return arr.join("");
}

console.log("test");

if (false) console.log("true");
else console.log("false");

console.log(DNAStrand("ATTGC")); // return "TAACG"

console.log(DNAStrand("GTAT")); // return "CATA"

console.log(DNAStrand("lala"));
