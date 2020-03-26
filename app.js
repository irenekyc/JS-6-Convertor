const TempUnit = document.getElementById('temperature-unit')
const TempOutputArea = document.querySelector('.output-area-temp')
const WeightUnit = document.getElementById('weight-unit')
const WeightOutputArea = document.querySelector('.output-area-weight')
const HeightUnit1 = document.getElementById('height-unit-1')
const HeightOutputArea1 = document.querySelector('.output-area-height-1')
const HeightOutputArea2 = document.querySelector('.output-area-height-2')
const DistanceUnit = document.getElementById('distance-unit')
const DistanceOutputArea = document.querySelector('.output-area-distance')
let TempOutputDegree, TempOutputUnit, WeightOutputUnit, WeightOutputValue


const convert = ()=>{
   const TempInput = {
        degree: document.getElementById('temperatureInput').value,
        unit :TempUnit.options[TempUnit.selectedIndex].value}
    if (TempInput.unit === "F"){
         TempOutputDegree = (TempInput.degree - 32) *0.556
         TempOutputUnit = "C"
    } else {
        TempOutputDegree = ((TempInput.degree * 9)/5) + 32 // (0°C × 9/5) + 32
        TempOutputUnit = "F"
    }
    TempOutputArea.innerHTML=`<p class="result"> ${TempOutputDegree.toFixed(2)} &#176;${TempOutputUnit} </p>`
}

const convertWeight1 = ()=>{
    let WeightInput = {
        value: document.getElementById('weightInput').value,
        unit : WeightUnit.options[WeightUnit.selectedIndex].value
    }
    if (WeightInput.value <= 0) {
        return WeightOutputArea.innerHTML=" The value has to be greater than 0"
    }
    if (WeightInput.unit === "lbs"){
        WeightOutputValue = WeightInput.value /2.205
        WeightOutputUnit = "KG"
    } else {
        WeightOutputValue = WeightInput.value * 2.205 // (0°C × 9/5) + 32
        WeightOutputUnit = " Pounds / lbs"
    }
    WeightOutputArea.innerHTML=`<p class="result"> ${WeightOutputValue.toFixed(2)} ${WeightOutputUnit} </p>`
}

const convertHeight1 = ()=>{
    let HeightOutput1={}
    let HeightInput1 = {
        value: document.getElementById('heightInput1').value,
        unit : HeightUnit1.options[HeightUnit1.selectedIndex].value,
    }
    if (HeightInput1.value <= 0) {
        return HeightOutputArea1.innerHTML=" The value has to be greater than 0"
    }
    if (HeightInput1.unit === "m"){
        HeightInput1.value = HeightInput1.value*100
    }
   
    HeightOutput1.feet = Math.floor(HeightInput1.value / 30.48)
    HeightOutput1.inch = (HeightInput1.value / 2.54) - (HeightOutput1.feet*12)

    HeightOutputArea1.innerHTML=`<p class="result"> ${HeightOutput1.feet}  feet ${HeightOutput1.inch.toFixed(0)} inch </p>`
}


const convertHeight2 = ()=>{
    let HeightOutput2
    let HeightInput2 = {
        feet: document.getElementById('feetInput').value,
        inch : document.getElementById('inchInput').value,
    }
    if (HeightInput2.feet < 0 || HeightInput2.inch<0) {
        return HeightOutputArea1.innerHTML=" The value has to be greater than 0"
    }
    HeightOutput2 = parseFloat((HeightInput2.feet * 30.48) + (HeightInput2.inch*2.54))
     HeightOutputArea2.innerHTML=`<p class="result">  approximately ${HeightOutput2.toFixed(2)}  cm (${(HeightOutput2/100).toFixed(2)} m) </p>`
}


const convertDistance = ()=>{
    let DistanceOutput= {}
    let distanceInput = {
        value: document.getElementById('distanceInput').value,
        unit : DistanceUnit.options[DistanceUnit.selectedIndex].value
    }
    if (distanceInput.value <= 0) {
        return DistanceOutputArea.innerHTML=" The value has to be greater than 0"
    }
    if (distanceInput.unit === "miles"){
        DistanceOutput.value = distanceInput.value * 1.60934
        DistanceOutput.unit = "KM"
    } else {
        DistanceOutput.value = distanceInput.value / 1.60934
        DistanceOutput.unit = "MILES "
    }
    DistanceOutputArea.innerHTML=`<p class="result"> ${DistanceOutput.value.toFixed(2)} ${DistanceOutput.unit} </p>`
}