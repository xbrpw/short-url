"use strict";
((Tone) => {
    const sampler = new Tone.Sampler({
        C5: "./Meow.ogg"
    }, {
        release: 0.5,
        attack: 0,
        numberOfOutputs: 1
    }).toDestination();
    const lowPassFreq = new Tone.Signal(300, Tone.Frequency), lowPass = new Tone.Filter({
        type: "lowpass",
        frequency: lowPassFreq.value
    }).toDestination();
    const domKeyboard = document.getElementById("keyboard");
    const keyMap = {
        d: "C4",
        r: "C#4",
        f: "D4",
        t: "D#4",
        g: "E4",
        h: "F4",
        u: "F#4",
        j: "G4",
        i: "G#4",
        k: "A4",
        o: "A#4",
        l: "B4"
    };
    domKeyboard.addEventListener("mousedown", (e) => {
        e.target.classList.add("active");
        sampler.triggerAttack(e.target.dataset.note);
    });
    domKeyboard.addEventListener("mouseup", (e) => {
        e.target.classList.remove("active");
        sampler.triggerRelease();
    });
    document.addEventListener("keydown", (e) => {
        const key = keyMap[e.key].replace("#", "\\#");
        document.querySelector(`[data-note=${key}]`).classList.add("active");
        if (keyMap[e.key] !== undefined) {
            sampler.triggerAttack(keyMap[e.key]);
        }
    });
    document.addEventListener("keyup", (e) => {
        const key = keyMap[e.key].replace("#", "\\#");
        document.querySelector(`[data-note=${key}]`).classList.remove("active");
    });
})(Tone);