var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
	var paciente = pacientes[i];

	var tdPeso = paciente.querySelector(".info-peso");
	var peso = tdPeso.textContent;

	var tdAltura = paciente.querySelector(".info-altura");
	var altura = tdAltura.textContent;

	var tdImc = paciente.querySelector(".info-imc");

	var pesoValido = true;
	var alturaValida = true;


	if ((peso < 0) || (peso > 1000)) {

		console.log("Peso incorrecto");
		tdImc.textContent ="Peso incorrecto";
		pesoValido = false;
		paciente.classList.add("paciente-incorrecto");

	}

	if ((altura < 0) || (altura > 3.00)) {

		console.log("Altura incorrecta");
		tdImc.textContent = "Altura incorrecta";
		alturaValida = false;
		paciente.classList.add("paciente-incorrecto");

	}


	if (pesoValido && alturaValida) {

		var imc = peso / (altura * altura);
		tdImc.textContent = calcularImc(peso, altura);

	}
}


function calcularImc(peso, altura) {
	
	var imc = peso / (altura * altura);
	return imc.toFixed(2);

}


