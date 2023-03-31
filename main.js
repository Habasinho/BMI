var weight, height, measure, bmi, error ;

function calculate() {
	weight = document.getElementById("weight").value;
	height = document.getElementById("height").value;
	error = "Unesite vrijednosti!";
	height /= 100;
	height *= height;
	bmi = weight/height;
	bmi = bmi.toFixed(1);

	if (bmi <= 18.4) {
		measure = "Tvoj BMI: " + bmi + " (Pothranjen)";
	} else if (bmi >= 18.5 && bmi <= 24.9) {
		measure = "Tvoj BMI: " + bmi + " (Zdrav)";
	} else if (bmi >= 25 && bmi <= 29.9) {
		measure = "Tvoj BMI: " + bmi + " (Pretežak)";
	} else if (bmi >= 30) {
		measure = "Tvoj BMI: " + bmi + " (Gojazan)";
	}
	

	if (weight === 0 ) {
		document.getElementById("results").innerHTML = error;
	} else if (height === 0){
		document.getElementById("results").innerHTML = error;
	}
	 else {

		document.getElementById("results").innerHTML = measure;
	}
	if (weight < 0) {
		document.getElementById("results").innerHTML = "Negativne vrijednosti nisu dopuštene!";
	}
}
