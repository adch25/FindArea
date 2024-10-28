document.getElementById('calculateBtn').addEventListener('click', function() {
    const shape = document.getElementById('shapeSelect').value;
    let area;

    const getInput = (promptText) => parseFloat(prompt(promptText));

    const areaCalculations = {
        triangle: () => {
            const a = getInput("Enter side a:");
            const b = getInput("Enter side b:");
            const c = getInput("Enter side c:");
            const s = (a + b + c) / 2;
            return Math.sqrt(s * (s - a) * (s - b) * (s - c));
        },
        square: () => {
            const side = getInput("Enter the side length:");
            return side ** 2;
        },
        rectangle: () => {
            const length = getInput("Enter the length:");
            const width = getInput("Enter the width:");
            return length * width;
        },
        circle: () => {
            const radius = getInput("Enter the radius:");
            return Math.PI * (radius ** 2);
        },
        parallelogram: () => {
            const base = getInput("Enter the base length:");
            const height = getInput("Enter the height:");
            return base * height;
        },
        ellipse: () => {
            const aAxis = getInput("Enter the semi-major axis:");
            const bAxis = getInput("Enter the semi-minor axis:");
            return Math.PI * aAxis * bAxis;
        },
    };

    if (areaCalculations[shape]) {
        area = areaCalculations[shape]();
        document.getElementById('result').textContent = `The area of the ${shape} is: ${area.toFixed(2)}`;
    } else {
        alert("Please select a valid shape.");
    }
});
