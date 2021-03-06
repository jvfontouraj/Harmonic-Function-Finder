'use strict'

const notes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"]
let numbersScale = []
const harmonicFunction = {
    tonic: '',
    supertonic: '',
    mediant: '' ,
    subdominant: '',
    dominat: '',
    submediant: '',
    leadingTone: '',
}

const refNote = document.querySelector('.refnote').value
const scale = document.querySelector('.scale').value


document.querySelector('.find').addEventListener('click', function(){
    const refNote = document.querySelector('.refnote').value
    const refNoteUper = refNote.toUpperCase()

    const scale = document.querySelector('.scale').value
    
    document.querySelector('.message').textContent = `The Harmonic Function of ${refNoteUper} ${scale} is:`

    const refNoteIndex = Number(notes.indexOf(refNoteUper))

    function setHarmonicFunction(){
        harmonicFunction.tonic = notes[numbersScale[0]]+"7M"
        harmonicFunction.supertonic = notes[numbersScale[1]]+"m7"
        harmonicFunction.mediant = notes[numbersScale[2]]+"m7"
        harmonicFunction.subdominant = notes[numbersScale[3]]+"7M"
        harmonicFunction.dominat = notes[numbersScale[4]]+"7"
        harmonicFunction.submediant = notes[numbersScale[5]]+"m7"
        harmonicFunction.leadingTone = notes[numbersScale[6]]+"m7(b5)"
    }

    if(scale === "Major"){
        numbersScale.push(refNoteIndex, refNoteIndex+2, refNoteIndex+4, refNoteIndex+5, refNoteIndex+7, refNoteIndex+9, refNoteIndex+11)
        setHarmonicFunction()
        console.log(harmonicFunction)
    } else if(scale === "Minor"){
        numbersScale.push(refNoteIndex, refNoteIndex+2, refNoteIndex+3, refNoteIndex+5, refNoteIndex+7, refNoteIndex+8, refNoteIndex+10)
        setHarmonicFunction()
        console.log(harmonicFunction)
    }
    
    document.querySelector('.tonic').textContent = "Tonic (I):" + " " +  harmonicFunction.tonic
    document.querySelector('.supertonic').textContent = "Supertonic (II):" + " " +  harmonicFunction.supertonic
    document.querySelector('.mediant').textContent = "Mediant (III):"+ " " + harmonicFunction.mediant
    document.querySelector('.subdominant').textContent = "Subdominant (IV):"+ " " + harmonicFunction.subdominant
    document.querySelector('.dominant').textContent = "Dominat (V):" + " " +  harmonicFunction.dominat
    document.querySelector('.submediant').textContent ="Submediant (VI):"+ " " + harmonicFunction.submediant
    document.querySelector('.leading--tone').textContent = "Leading Tone (VII):"+ " " + harmonicFunction.leadingTone
    
    numbersScale = []
})


//Harmonic Function explanation in a modal window
//Change language to Pt-br

