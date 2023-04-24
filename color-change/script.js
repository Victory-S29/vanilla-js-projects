const mainBtn = document.getElementById("change-btn");
const rgbBtn = document.getElementById("hex");
const hexBtn = document.getElementById("rgb");
const colorTitle = document.getElementById("color-title");

function setupScreen(color){
    const colorTag = document.getElementById("color-tag");
    colorTag.style.color = color;
    colorTag.innerText = color;
}

function generateRandomHexColor(){
    let maxVal = 0xFFFFFF;
    let randomNumber =  Math.floor(Math.random() * maxVal); 
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0);   
    return `#${randColor.toUpperCase()}`
}

const generateRandomRGBColor = () => Math.floor(Math.random() * 255)

mainBtn.addEventListener("click", () =>{
    if (colorTitle.innerText === "Color (HEX):"){
        const newColor = generateRandomHexColor();
        console.log(newColor);
        document.body.style.backgroundColor = newColor;
        setupScreen(newColor);
    } else {
        const red = generateRandomRGBColor();
        const green = generateRandomRGBColor();
        const blue = generateRandomRGBColor();
        const newColor = `rgb(${[red, green, blue].join(', ')})`;
        
        document.body.style.backgroundColor = newColor;
        setupScreen(newColor);
    }
})

document.addEventListener("click", (e) => {
    if (e.target.id === "hex"){
        colorTitle.innerText = "Color (HEX):";
    }
    else if (e.target.id === "rgb"){
        colorTitle.innerText = "Color (RGB):";
    }
})

