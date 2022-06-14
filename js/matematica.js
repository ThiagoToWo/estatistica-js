/**
* matematica.js 1.0, 24/05/2021
* Autor: Thiago de O. Alves.
* 14/06/2022 - versão 1.5
*
* Sinopse: Retorna objetos com funçoes em várias áreas da matemática.
*	mat.objeto
* Estrutura: 
*	É organizado da seguinte forma:
*		1) mat.vetores: operações com vetores. 
*		2) mat.estatistica: cálculos estatístios e plotagem.
*		3) mat.conjuntos: operações com conjuntos.
*		4) mat.quadratica: cálculos associados a função quadrática.
*		5) mat.sistemas: cálculos associados a sistemas lineares.
*		6) mat.geometria: cálculos de geometria.
*		6) mat.aritmetica: cálculos de aritmética.
*		6) mat.util: funções úteis.
* Exemplo:
*	var mv = mat.vetores; // Pode-se armazenar em uma variável para uso frequente.
*	mv.soma([2,-3,4], [1,0,5]); // Chama a função soma.
* DESDE: 1.0
* VEJA: 
*	documentação de cada objeto.
*/

var mat = mat || {};

//////////////////////////////////////////////////////////////////

//VETORES
/**
* Sinopse: Operações com vetores.
*	mat.vetores
* Retorna: 
*	Retorna o seguinte objeto.
*	{
*		angulo: angulo, => ângulo entre dois vetores.
*		diferenca: diferenca, => diferença entre dois vetores.
*		modulo: modulo, => módulo de um vetor.
*		produtoInterno: produtoInterno, => produto interno entre dois vetores.
*		produtoVetorial: produtoVetorial, => produto vetorial entre dois vetores.
*		soma: soma => soma de dois vetores.
*	}
* Exemplo:
*	var mv = mat.vetores; // Pode-se armazenar em uma variável para uso frequente.
*	mv.soma([2,-3,4], [1,0,5]); // Chama a função soma.
* DESDE: 1.0
* VEJA: 
*	documentação interna das funções.
*/

mat.vetores = (function () {

	/**
	* Sinopse: calcula o produto escalar de dois vetores tridimensionais.
	*	mat.vetores.produtoInterno(a, b)
	* Entrada(s):
	*	a: array de 3 elementos numéricos.
	*	b: array de 3 elementos numéricos.
	* Saída: 
	*	Retorna um número real, valor do produto interno entre a e b.
	* Descrição:
	*	Dando como entrada os arrays a e b, a função calcula o produto
	*	interno usando os 3 primeiros elementos de cada um deles. Isso
	*	faz com que os arrays a e b simulem vetores em três dimensões.
	* Exemplo:
	*	var a = [2, -3, 0], b = [4, 2, 1]; // Inicia os vetores a e b.
	*	var m = mat.vetores;
	*	m.produtoInterno(a, b); // Retorna 2.
	* DESDE: 1.0
	*/

	function produtoInterno(a, b) {
		return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
	}

	/**
	* Sinopse: calcula o produto vetorial de dois vetores tridimensionais.
	*	mat.vetores.produtoVetorial(a, b)
	* Entrada(s):
	*	a: array de 3 elementos numéricos.
	*	b: array de 3 elementos numéricos.
	* Saída: 
	*	Retorna um vetor, valor do produto vetorial entre a e b.
	* Descrição:
	*	Dando como entrada os arrays a e b, a função calcula o produto
	*	vetorial usando os 3 primeiros elementos de cada um deles. Isso
	*	faz com que os arrays a e b simulem vetores em três dimensões.
	* Exemplo:
	*	var a = [2, -3, 0], b = [4, 2, 1]; // Inicia os vetores a e b.
	*	var m = mat.vetores;
	*	m.produtoVetorial(a, b); // Retorna [-2, -3, 16].
	* DESDE: 1.0
	*/

	function produtoVetorial(a, b) {
		var c = new Array(3);
		c[0] = a[1] * b[2] - b[1] * a[2];
		c[1] = a[2] * b[0] - b[2] * a[0];
		c[2] = a[0] * b[1] - b[0] * a[1];
		return c;
	}

	/**
	* Sinopse: calcula o módulo de um vetor tridimensional.
	*	mat.vetores.modulo(a)
	* Entrada(s):
	*	a: array numérico de 3 elementos.
	* Saída: 
	*	Um número real, módulodo vetor a.
	* Descrição:
	*	Dado o array a como entrada, a função usa seus primeiros três
	*	elementos para simular um vetor tridimensional e calcula seu
	*	módulo.
	* Exemplo:
	*	var a = [4, 2, 1]; // Inicia o argumento. 
	*	var m = mat.vetores;
	*	m.modulo(a) // Retorna 4.58257569495584.
	* DESDE: 1.0
	* VEJA: 
	*	Math.sqrt().
	*/

	function modulo(a) {
		return Math.sqrt(a[0] ** 2 + a[1] ** 2 + a[2] ** 2);
	}

	/**
	* Sinopse: calcula o ângulo entre dois vetores.
	*	mat.vetores.angulo(a, b)
	* Entrada(s):
	*	a: array de 3 elementos numéricos.
	*	b: array de 3 elementos numéricos.
	* Saída: 
	*	Retorna um número real, valor do menor ângulo entre a e b
	*	em radianos.
	* Descrição:
	*	Dando como entrada os arrays a e b, a função utiliza os três 
	*	primeiros elementos de cada, simulando vetores em três dimensões,
	*	e calcula em radianos o menor ângulo entre eles com o uso do
	*	produto interno e da função interna Math.acos().
	* Exemplo:
	*	var a = [2, -3, 0], b = [4, 2, 1]; // Inicia os vetores a e b.
	*	var m = mat.vetores;
	*	m.angulo(a, b); // Retorna 1.4494532607018238.
	* DESDE: 1.0
	* VEJA: 
	*	produtoInterno(), Math.acos().
	*/

	function angulo(a, b) {
		var p = produtoInterno(a, b);
		var ma = modulo(a);
		var mb = modulo(b);
		return Math.acos(p / (ma * mb));
	}

	/**
	* Sinopse: calcula a soma de dois vetores tridimensionais.
	*	mat.vetores.soma(a, b)
	* Entrada(s):
	*	a: array de 3 elementos numéricos.
	*	b: array de 3 elementos numéricos.
	* Saída: 
	*	Retorna um número real, valor da soma entre a e b.
	* Descrição:
	*	Dando como entrada os arrays a e b, a função utiliza os três 
	*	primeiros elementos de cada, simulando vetores em três dimensões,
	*	e calcula a soma entre eles.
	* Exemplo:
	*	var a = [2, -3, 0], b = [4, 2, 1]; // Inicia os vetores a e b.
	*	var m = mat.vetores;
	*	m.soma(a, b); // Retorna [6, -1, 1].
	* DESDE: 1.0
	*/

	function soma(a, b) {
		var r = new Array(3)
		r[0] = a[0] + b[0];
		r[1] = a[1] + b[1];
		r[2] = a[2] + b[2];
		return r;
	}

	/**
	* Sinopse: calcula a diferença entre dois vetores tridimensionais.
	*	mat.vetores.diferenca(a, b)
	* Entrada(s):
	*	a: array de 3 elementos numéricos.
	*	b: array de 3 elementos numéricos.
	* Saída: 
	*	Retorna um número real, valor da diferença entre a e b.
	* Descrição:
	*	Dando como entrada os arrays a e b, a função utiliza os três 
	*	primeiros elementos de cada, simulando vetores em três dimensões,
	*	e calcula a diferença entre eles.
	* Exemplo:
	*	var a = [2, -3, 0], b = [4, 2, 1]; // Inicia os vetores a e b.
	*	var m = mat.vetores;
	*	m.diferenca(a, b); // Retorna [-2, -5, -1].
	* DESDE: 1.0
	*/

	function diferenca(a, b) {
		var r = new Array(3);
		r[0] = a[0] - b[0];
		r[1] = a[1] - b[1];
		r[2] = a[2] - b[2];
		return r;
	}

	return {
		angulo: angulo,
		diferenca: diferenca,
		modulo: modulo,
		produtoInterno: produtoInterno,
		produtoVetorial: produtoVetorial,
		soma: soma
	};
}());

////////////////////////////////////////////////////////////////////////////

//ESTATÍSTICA
/**
* Sinopse: Cálculos estatístios e plotagem.
*	mat.estatistica
* Retorna: 
*	Retorna o seguinte objeto.
*	{
*		desenharGrid: desenharGrid, => cria um grid em um canvas.
*		desvioMedio: desvioMedio, => desvio médio dos elementos de um array.
*		frequencia: frequencia, => freqência dos elementos de um array.
*		media: media, => média dos elementos de um array.
*		mediana: mediana, => mediana dos elementos de um array.
*		moda: moda, => moda dos elementos de um array.
*		plotarPontos: plotarPontos, => plota pontos no canvas.
*		plotarReta: plotarReta, => plota reta no canvas.
*		retaMinQuadrados: retaMinQuadrados, => reta dos mínimos quadrados.
*		variancia: variancia => variância dos elementos de um array.
*	}
* Exemplo:
*	var me = mat.estatistica; // Pode-se armazenar em uma variável para uso frequente.
*	me.media([2,3,5,5,6,3,5]); // Chama a função media.
* DESDE: 1.0
* VEJA: 
*	documentação interna das funções.
*/

mat.estatistica = (function () {

	/**
	* Sinopse: Calcula a média aritmética de uma lista de números.
	*	mat.estatistica.media(data)
	* Entrada(s):
	*	data: array de elementos numéricos.
	* Saída: 
	*	Retorna um número real, média aritmética dos elementos de data.
	* Exemplo:
	*	var data = [2,4,3,5,5,6,3,5]; // Inicia o(s) argumento(s). 
	*	mat.estatistica.media(data); // Retorna 4.125.
	* DESDE: 1.0
	*/

	function media(data) {
		var soma = 0;
		for (var i = 0; i < data.length; i++) {
			soma += data[i];
		}
		return soma / data.length;
	}

	/**
	* Sinopse: Calcula a mediana de uma lista de números.
	*	mat.estatistica.mediana(data)
	* Entrada(s):
	*	data: array de elementos numéricos.
	* Saída: 
	*	Retorna um número real, mediana dos elementos de data.
	* Descrição:
	*	Dado um array numérico data, a função o ordena em ordem numérica
	*	crescente e calcula sua mediana e acordo com a quantidade ímpar ou
	* 	par de elementos. 
	*	Uma observação importante é que, depois de usado
	*	como entrada na	função mediana, o array data se mantém ordenado e
	*	deve-se ter isso em mente em usos futuros do mesmo.
	* Exemplo:
	*	var data = [2,4,3,5,5,6,3,5]; // Inicia o(s) argumento(s). 
	*	var m = mat.estatistica;
	*	m.mediana(data); // Retorna 4.5 e deixa data = [2,3,3,4,5,5,5,6].
	* DESDE: 1.0
	* VEJA: 
	*	Array.sort().
	*/

	function mediana(data) {
		var n = data.length;
		data.sort(function (a, b) {
			return a - b;
		});
		if (n % 2 != 0) {
			return data[(n + 1) / 2 - 1];
		} else {
			return (data[n / 2 - 1] + data[n / 2]) / 2;
		}
	}

	/**
	* Sinopse: Conta a freqência de cada elemento do array.
	*	mat.estatistica.frequencia(data)
	* Entrada(s):
	*	data: um array.
	* Saída: 
	*	Retorna um array onde cada número representa a freqência do 
	*	elemento naquele índice.
	* Exemplo:
	*	var data1 = [2,4,3,5,5,6,3,5]; // Array numérico.
	*	var data2 = [2,{x:0},2,'t','t']; // Array com vários tipos de elementos.
	* 	var m = mat.estatistica;
	*	m.frequencia(data1); // Retorna [1,1,2,3,3,1,2,3].
	*	m.frequencia(data2); // Retorna [2,1,2,2,2].
	* DESDE: 1.0
	*/

	function frequencia(data) {
		var f = [];
		for (var i = 0; i < data.length - 1; i++) {
			for (var j = i + 1; j < data.length; j++) {
				if (f[i] == undefined) f[i] = 1;
				if (f[j] == undefined) f[j] = 1;
				if (data[i] == data[j]) {
					f[i]++;
					f[j]++;
				}
			}
		}
		return f;
	}

	/**
	* Sinopse: Calcula a moda de uma lista de números.
	*	mat.estatistica.moda(data)
	* Entrada(s):
	*	data: um array.
	* Saída: 
	*	Retorna um array com os elementos que representam a moda em data.
	* Descrição:
	*	Dado um array data como entrada, a função calcula a frequência de 
	*	cada elemento e o valor máximo dessas frequências. Depois ela
	*	retorna um array contendo os elementos que possuem essa freqência
	*	máxima. 
	* Exemplo:
	*	var data1 = [2,4,3,5,5,6,3,5]; // Array numérico.
	*	var data2 = [2,{x:0},2,'t','t']; // Array com vários tipos de elementos.
	* 	var m = mat.estatistica;
	*	m.moda(data1); // Retorna [5] (unimodal).
	*	m.moda(data2); // Retorna [2,t] (bimodal).
	* DESDE: 1.0
	* VEJA: 
	*	frequencia(), mat.util.maximo(), mat.conjuntos.elementosDiferentes().
	*/

	function moda(data) {
		var freq = frequencia(data);
		var max = mat.util.maximo(freq);
		var moda = [];
		for (var i in freq) {
			if (freq[i] == max) moda.push(data[i]);
		}
		return mat.conjuntos.elementosDiferentes(moda);
	}

	/**
	* Sinopse: Calcula a variância de uma lista de números.
	*	mat.estatistica.variancia(data)
	* Entrada(s):
	*	data: array de elementos numéricos.
	* Saída: 
	*	Retorna um número real, variância dos elementos de data.
	* Exemplo:
	*	var data = [2,4,3,5,5,6,3,5]; // Inicia o(s) argumento(s). 
	*	mat.estatistica.variancia(data); // Retorna 1.609375.
	* DESDE: 1.5
	* VEJA: mat.estatistica.media();
	*/

	function variancia(data) {
		var m = mat.estatistica.media(data);
		var n = data.length;
		var d2 = 0;
		for (var i = 0; i < n; i++) {
			d2 += (data[i] - m) * (data[i] - m);
		}
		return d2 / n;
	}

	/**
	* Sinopse: Calcula o desvio médio de uma lista de números.
	*	mat.estatistica.desvioMedio(data)
	* Entrada(s):
	*	data: array de elementos numéricos.
	* Saída: 
	*	Retorna um número real, desvio médio dos elementos de data.
	* Exemplo:
	*	var data = [2,4,3,5,5,6,3,5]; // Inicia o(s) argumento(s). 
	*	mat.estatistica.desvioMedio(data); // Retorna 1.125.
	* DESDE: 1.5
	* VEJA: mat.estatistica.media();
	*/

	function desvioMedio(data) {
		var m = mat.estatistica.media(data);
		var n = data.length;
		var d = 0;
		for (var i = 0; i < n; i++) {
			d += Math.abs(data[i] - m);
		}
		return d / n;
	}

	/**
	* Sinopse: Calcula os parâmetros da reta dos mínimos quadrados.
	*	mat.estatistica.retaMinQuadrados(x, y)
	* Entrada(s):
	*	x: array numérico com os valores da variável independente x.
	*	y: array numérico com os valores da variável dependente y.
	* Saída: 
	*	Rerorna um array com os coeficientes da reta de mínimos quadrados
	*	e o coeficiente de correlação.
	* Descrição:
	* 	Passados os arrays com as entradas de x e as entradas de y, retorna
	* 	um array [a0, a1, r] com o coeficiente linear, coeficiente angular
	*	e coeficiente de correlação, respectivamente, da reta de mínimos
	* 	quadrados. 
	*	A função usa como domínio as entradas de x e o tamanho dela como
	*	referência. Logo, y deve possuir uma quantidade igual ou superior
	* 	a x de elementos. No caso de quantidade maior que x, os elementos
	*	excedentes não participam do cálculo.
	* Exemplo:
	*	var x = [1,2,4,5], // Domínio com quatro elementos. 
	*	var y = [3.2,5.6,8.4,9.7,11.1]; // O valor 11.1 não será usado.
	*	var m = mat.estatistica;
	*	m.retaMinQuadrados(x, y); // Retorna [1.985,1.58,0.992406...].
	* DESDE: 1.0
	*/

	function retaMinQuadrados(x, y) {
		var n = x.length;
		var sx = 0;
		var sy = 0;
		var sx2 = 0;
		var sxy = 0;
		var sy2 = 0;

		for (var i = 0; i < n; i++) {
			sx += x[i];
			sy += y[i];
			sx2 += x[i] * x[i];
			sy2 += y[i] * y[i];
			sxy += x[i] * y[i];
		}

		var normX = n * sx2 - sx * sx;
		var normY = n * sy2 - sy * sy;
		var normXY = n * sxy - sx * sy

		var a1 = normXY / normX;
		var a0 = (sy - a1 * sx) / n;
		var r = normXY / Math.sqrt(normX * normY);

		return [a0, a1, r];
	}

	/**
	* Sinopse: Plota pontos em canvas.
	*	mat.estatistica.plotarPontos(context, arrayX, arrayY, raio, bordaGrid, cor)
	* Entrada(s):
	*	context: contexto 2d do canvas.
	* 	arrayX: array com as entradas das coordenadas x dos pontos.
	* 	arrayY: array com as entradas das coordenadas y dos pontos.
	* 	raio (opcional): o raio de preenchimento dos pontos em pixel.
	* 	bordaGrid (opcional): espessura da faixa margeando o canvas que determina
	* 			   o limite máximo de plotagem, em pixel.
	* 	cor (opcional): um string representando a cor do ponto.
	* Descrição:
	*	Após obter o contexto 2d do elemento Canvas na página html5, ele 
	*	pode ser passado como entrada na função junto com as coordenadas x
	*	em arrayX e as coordenadas y em arrayY. A função usará as coordenadas
	* 	dadas para plotar os pontos na tela seguindo a orientação convencional
	*	do sistema cartesiano, isto é, x crescente para direita e y crescente
	*	para cima. 
	*	O ponto de coordenada maxíma em x fica sobre o limite
	*	direito da plotagem e o ponto máximo em y fica sobre o limite superior
	*	da plotagem. 
	*	Sem as especificações opcionais, o raio do ponto será de
	*	2px, a margem de plotagem de 10px até a borda do canvas e a cor do
	*	ponto preta. 
	*	A função usa como domínio as entradas de x e o tamanho dela como
	*	referência. Logo, y deve possuir uma quantidade igual ou superior
	* 	a x de elementos. No caso de quantidade maior que x, os elementos
	*	excedentes não participam do cálculo.
	* Exemplo:
	*	<!--Canvas para plotagem dos pontos.-->
	*	<canvas id='canvas' width='400' height='300'></canvas>
	*	<script>
	*	var canvas = document.getElementById('canvas'); // Captura o canvas.
	*	var ctx = canvas.getContext('2d'); // Extrai o contexto 2d.
	*	var x = [1,2,3,4]; // Coordenadas x dos pontos.
	*	var y = [3,4,2,7,8]; // Coordenadas y dos pontos. O 8 não será usado.
	*	// Plota os pontos (1,3), (2,4), (3,2) e (4,7) na cor vermelha,
	*	// com tamanho de 5px cada um e dentro de um limite de 20px para
	*	// as bordas do canvas.
	*	mat.estatistica.plotarPontos(ctx, x, y, 5, 20, 'red');
	*	</script>	
	* DESDE: 1.0
	* VEJA: 
	*	Canvas.getContext('2d'), context.save(), context.beginPath(),
	*	context.restore(), context.arc(), context.fill(), 
	*	context.fillStyle, mat.util.maximo().
	*/

	function plotarPontos(context, arrayX, arrayY, raio, bordaGrid, cor) {
		if (raio == null) raio = 2;
		if (bordaGrid == null) bordaGrid = 10;
		if (cor == null) cor = 'black';

		var n = arrayX.length;
		var altura = context.canvas.height - 2 * bordaGrid;
		var largura = context.canvas.width - 2 * bordaGrid;
		var largura_por_unidade = largura / mat.util.maximo(arrayX);
		var altura_por_unidade = altura / mat.util.maximo(arrayY);

		context.save();

		for (var i = 0; i < n; i++) {
			context.beginPath();

			context.arc(
				bordaGrid + arrayX[i] * largura_por_unidade,
				bordaGrid + altura - arrayY[i] * altura_por_unidade,
				raio,
				0,
				2 * Math.PI
			);
			context.fillStyle = cor;
			context.fill();
		}

		context.restore();
	}

	/**
	* Sinopse: Desenha um grid em canvas.
	*	mat.estatistica.desenharGrid(context, divisaoX, divisaoY, borda, cor)
	* Entrada(s):
	*	context: contexto 2d do canvas.
	* 	divisaoX (opcional): em quantas partes a dimensão horizontal será dividida.
	* 	divisaoY (opcional): em quantas partes a dimensão vertical será dividida.
	* 	borda (opcional): espessura da faixa que determina o espaçamento entre as 
	*		bordas do grid e do canvas.
	* 	cor (opcional): um string representando a cor das linhas.
	* Descrição:
	*	Após obter o contexto 2d do elemento Canvas na página html5, ele 
	*	pode ser passado como entrada na função para ser desenhada uma
	*	divisão em grade útil para escala de plotagem e desenhos.
	*	Sem as especificações opcionais, um espaço interno do canvas, 
	*	margeado por 10px da borda, será dividido por linhas pretas em 
	*	100 retângulos (10 hor x 10 ver). A espessura da linha é de 1px
	*	e o fundo é branco por padrão.
	* Exemplo:
	*	<!--Canvas para desenho do grid.-->
	*	<canvas id='canvas' width='400' height='400'></canvas>
	*	<script>
	*	// Extrai o contexto 2d do canvas.
	*	var ctx = document.getElementById('canvas').getContext('2d');
	*	// Desenha um grid 20 x 10, com margem de 5px para a borda do
	*	// canvas, com linhas azuis.
	*	mat.estatistica.desenharGrid(ctx, 20, 10, 5, 'blue');
	*	</script>	
	* DESDE: 1.0
	* VEJA: 
	*	Canvas.getContext('2d'), context.save(), context.beginPath(),
	*	context.restore(), context.fillRect(), context.stroke(), 
	*	context.moveTo(), context.lineTo(), context.strokeStyle,
	*	context.lineWidth.
	*/

	function desenharGrid(context, divisaoX, divisaoY, borda, cor) {
		if (divisaoX == null) divisaoX = 10;
		if (divisaoY == null) divisaoY = 10;
		if (borda == null) borda = 10;
		if (cor == null) cor = 'black'

		var largura = context.canvas.width - 2 * borda;
		var altura = context.canvas.height - 2 * borda;

		context.save();
		context.fillStyle = 'white';
		context.fillRect(0, 0, context.canvas.width, context.canvas.height);

		context.lineWidth = 1;
		context.strokeStyle = cor;

		// linhas verticais	

		for (var i = borda; i <= borda + largura; i += (largura / divisaoX)) {
			context.beginPath()
			context.moveTo(i, borda);
			context.lineTo(i, borda + altura);
			context.stroke();
		}


		// linhas horizontais			
		for (var i = borda; i <= borda + altura; i += (altura / divisaoY)) {
			context.beginPath()
			context.moveTo(borda, i);
			context.lineTo(borda + largura, i);
			context.stroke();
		}

		context.restore();
	}

	/**
	* Sinopse: Plota reta em canvas.
	*	mat.estatistica.plotarReta(context, coefLinear, coefAngular, arrayX, espessura, bordaGrid, cor)
	* Entrada(s):
	*	context: contexto 2d do canvas.
	* 	coefLinear: coeficiente linear da reta.
	* 	coefAngular: coeficiente angular da reta.
	* 	arrayX: array com as entradas das coordenadas x dos pontos.
	* 	espessura (opcional): a espessura da reta em pixel.
	* 	bordaGrid (opcional): espessura da faixa margeando o canvas que determina
	* 			   o limite máximo de plotagem, em pixel.
	* 	cor (opcional): um string representando a cor da reta.
	* Descrição:
	*	Após obter o contexto 2d do elemento Canvas na página html5, ele 
	*	pode ser passado como entrada na função junto com os coeficientes
	*	angular e linear da reta e um conjunto representando o domínio x.
	*	A função usará as coordenadas mínima e máxima do domínio arrayX
	*	para marcar os extremos da plotagem, calculando os valores de y
	*	para essas coordenadas atrávés dos coeficientes.
	*	O ponto de coordenada maxíma em x fica sobre o canto
	*	superior direito da plotagem. 
	*	Sem as especificações opcionais, a espessura da reta será de
	*	1px, a margem de plotagem de 10px até a borda do canvas e a cor da
	*	reta preta. 
	* Exemplo:
	*	<!--Canvas para plotagem da reta.-->
	*	<canvas id='canvas' width='400' height='300'></canvas>
	*	<script>
	*	var canvas = document.getElementById('canvas'); // Captura o canvas.
	*	var ctx = canvas.getContext('2d'); // Extrai o contexto 2d.
	*	// Coordenadas x do domínio (não precisam estar ordenadas).
	*	var x = [4,1,2,3]; 
	*	// Plota a reta y = 1 + 2x sobre o domínio real x = [1,4].
	*	// A reta é verde e possui espessura de 3px. 
	*	// Usa a margem default com a entrada null.
	*	mat.estatistica.plotarReta(ctx, 1, 2, x, 3, null, 'green');
	*	</script>	
	* DESDE: 1.0
	* VEJA: 
	*	Canvas.getContext('2d'), context.save(), context.beginPath(),
	*	context.restore(), context.stroke(), context.moveTo(), 
	*	context.lineTo(), context.strokeStyle, context.lineWidth, 
	*	mat.util.maximo(), mat.util.minimo().
	*/

	function plotarReta(context, coefLinear, coefAngular, arrayX, espessura, bordaGrid, cor) {
		if (espessura == null) espessura = 1;
		if (cor == null) cor = 'black';
		if (bordaGrid == null) bordaGrid = 10;

		var altura = context.canvas.height - 2 * bordaGrid;
		var largura = context.canvas.width - 2 * bordaGrid;

		x1 = mat.util.minimo(arrayX);
		y1 = coefLinear + coefAngular * x1;

		x2 = mat.util.maximo(arrayX);
		y2 = coefLinear + coefAngular * x2;

		var largura_por_unidade = largura / x2;
		var altura_por_unidade = altura / y2;

		context.save();

		context.beginPath();
		context.moveTo(
			bordaGrid + x1 * largura_por_unidade,
			bordaGrid + altura - y1 * altura_por_unidade
		);
		context.lineTo(
			bordaGrid + x2 * largura_por_unidade,
			bordaGrid + altura - y2 * altura_por_unidade
		);
		context.lineWidth = espessura;
		context.strokeStyle = cor;
		context.stroke();

		context.restore();
	}

	return {
		desenharGrid: desenharGrid,
		desvioMedio: desvioMedio,
		frequencia: frequencia,
		media: media,
		mediana: mediana,
		moda: moda,
		plotarPontos: plotarPontos,
		plotarReta: plotarReta,
		retaMinQuadrados: retaMinQuadrados,
		variancia: variancia
	};
}());

////////////////////////////////////////////////////////////////////////

// TEORIA DOS CONJUNTOS
/**
* Sinopse: Operações com conjuntos.
*	mat.conjuntos
* Retorna: 
*	Retorna o seguinte objeto.
*	{
*		diferenca: diferenca, => a diferença entre conjuntos.
*		elementosDiferentes: elementosDiferentes, => o conjunto sem duplicatas.
*		intersecao: intersecao, => a interseção entre conjuntos.
*		uniao: uniao => a união entre conjuntos.
*	}
* Descrição:
*	Funções básicas de um elemento set, que podem ser aplicadas em arrays.
* Exemplo:
*	var m = mat.conjuntos; // Pode-se armazenar em uma variável para uso frequente.
*	m.uniao([1,2,2,3,4], [3,4,5,6]); // Chama a função união.
* DESDE: 1.0
* VEJA: 
*	documentação interna das funções.
*/

mat.conjuntos = (function () {

	/**
	* Sinopse: Elimina duplicatas de um array.
	*	mat.conjuntos.elementosDiferentes(array)
	* Entrada(s):
	*	array: um array com qualquer tipo de elemento.
	* Saída: 
	*	Um novo array com apenas um exemplar de cada elemento do array
	*	de entrada.
	* Descrição:
	*	Dado o array de entrada, a função, atráves de um dicionário
	*	interno armazena os elementos nas chamas que possuem nomes
	*	iguais os valores, sobrescrevendo assim os valores repetidos.
	*	Depois essas chaves são passadas em ordem alfanumérica para um
	*	novo array a ser retornado.
	*	Deve-se observar que, além do novo array estar em ordem
	*	alfanumérica, ele é composto por representação em string dos
	*	valores.
	* Exemplo:
	*	var array = [1,'x','x',4,5,3,4]; // Array com tipos diferentes.
	*	m = mat.conjuntos;
	*	m.elementosDiferentes(array); // Retorna ["1","3","4","5","x"].
	* DESDE: 1.0
	*/

	function elementosDiferentes(array) {
		dict = {};
		for (var i = 0; i < array.length; i++) {
			dict[array[i]] = array[i];
		}
		var novo_array = [];
		for (var key in dict) {
			novo_array.push(key);
		}
		return novo_array;
	}

	/**
	* Sinopse: Calcula a união entre dois arrays.
	*	mat.conjuntos.uniao(array1, array2)
	* Entrada(s):
	*	array1: um array com qualquer tipo de elemento.
	*	array2: um array com qualquer tipo de elemento.
	* Saída: 
	*	Retorna um array com todos os elementos de array1 e array2 sem
	*	duplicatas.
	* Descrição:
	*	Dados os arrays de entrada, a função concatena-os e depois
	*	elimina os elementos duplicados. 
	*	Como ela usa internamente a função elementosDiferentes()
	*	Deve-se observar que, além do novo array estar em ordem
	*	alfanumérica, ele é composto por representação em string dos
	*	valores.
	* Exemplo:
	*	//Array com tipos diferentes.
	*	var array1 = [1,'x','x',4,5,3,4], array2 = ['x',4,67,'a'];
	*	// Retorna ["1","3","4","5","67","x","a"].	
	*	mat.conjuntos.uniao(array1, array2); 
	* DESDE: 1.0
	* VEJA: 
	*	elementosDiferentes(), Array.concat().
	*/

	function uniao(array1, array2) {
		return elementosDiferentes(array1.concat(array2));
	}

	/**
	* Sinopse: Calcula a interseção entre dois arrays.
	*	mat.conjuntos.intersecao(array1, array2)
	* Entrada(s):
	*	array1: um array com qualquer tipo de elemento.
	*	array2: um array com qualquer tipo de elemento.
	* Saída: 
	*	Retorna um array com os elementos comuns ao array1 e array2 sem
	*	duplicatas.
	* Descrição:
	*	Dados os arrays de entrada, a função verifica se os elementos
	*	de um deles está no outro. Caso esteja, ele acrescenta no novo
	*	array a ser retornado.	
	*	Como ela usa internamente a função elementosDiferentes()
	*	Deve-se observar que, além do novo array estar em ordem
	*	alfanumérica, ele é composto por representação em string dos
	*	valores.
	* Exemplo:
	*	//Array com tipos diferentes.
	*	var array1 = [1,'x','x',4,5,3,4], array2 = ['x',4,67,'a'];
	*	mat.conjuntos.intersecao(array1, array2); // Retorna ["4","x"].	
	* DESDE: 1.0
	* VEJA: 
	*	elementosDiferentes(), Array.indexOf().
	*/

	function intersecao(array1, array2) {
		var inter = [];
		for (var i in array1) {
			if (array2.indexOf(array1[i]) != -1) {
				inter.push(array1[i]);
			}
		}
		return elementosDiferentes(inter);
	}

	/**
	* Sinopse: Calcula a diferença entre dois arrays.
	*	mat.conjuntos.diferenca(array1, array2)
	* Entrada(s):
	*	array1: um array com qualquer tipo de elemento.
	*	array2: um array com qualquer tipo de elemento.
	* Saída: 
	*	Retorna um array com os elementos que estão no array1 e não
	*	estão no array2, sem duplicatas.
	* Descrição:
	*	Dados os arrays de entrada, a função verifica se os elementos
	*	do primeiro deles está no outro. Caso não esteja, ele acrescenta
	*	no novo	array a ser retornado.	
	*	Como ela usa internamente a função elementosDiferentes()
	*	Deve-se observar que, além do novo array estar em ordem
	*	alfanumérica, ele é composto por representação em string dos
	*	valores.
	* Exemplo:
	*	//Array com tipos diferentes.
	*	var array1 = [1,'x','x',4,5,3,4], array2 = ['x',4,67,'a'];
	*	mat.conjuntos.diferenca(array1, array2); // Retorna ["1","3","5"].
	*	mat.conjuntos.diferenca(array2, array1); // Retorna ["67","a"].	
	* DESDE: 1.0
	* VEJA: 
	*	elementosDiferentes(), Array.indexOf().
	*/

	function diferenca(array1, array2) {
		var dif = [];
		for (var i in array1) {
			if (array2.indexOf(array1[i]) == -1) {
				dif.push(array1[i]);
			}
		}
		return elementosDiferentes(dif);
	}

	return {
		diferenca: diferenca,
		elementosDiferentes: elementosDiferentes,
		intersecao: intersecao,
		uniao: uniao
	};
}());

////////////////////////////////////////////////////////////////////////

// FUNÇÃO QUADRÁTICA
/**
* Sinopse: Cálculos associados a função quadrática.
*	mat.quadratica
* Retorna: 
*	Retorna o seguinte objeto.
*	{
*		delta: delta, => o discriminante da função quadrática.
*		Quadratica: Quadratica, => classe função quadrática.
*		raizes: raizes, => calcula as raízes da função quadrática.
*		vertice: vertice => calcula o vérticeda função quadrática.
*	}
* Descrição:
*	Permite solucionar uma função e encontrar seus pontos importantes.
* Exemplo:
*	var m = mat.quadratica; // Pode-se armazenar em uma variável para uso frequente.
*	m.raizes(1, -5, 6); // Chama a função raízes.
*	var c = new m.Quadratica(1, -5, 6); // Instancia uma classe Quadratica do módulo.
* DESDE: 1.0
* VEJA: 
*	documentação interna das funções.
*/

mat.quadratica = (function () {

	/**
	* Sinopse: Calcula o discriminate da função quadrática.
	*	mat.quadratica.delta(a, b, c)
	* Entrada(s):
	*	a: número real representando o coeficiente a.
	*	b: número real representando o coeficiente b.
	*	c: número real representando o coeficiente c.
	* Saída: 
	*	Retorna um número real, o discriminate da função quadrática.
	* Descrição:
	*	Dados os coeficientes a, b e c da função quadrática f(x) = ax² + bx + c, 
	* 	a função retorna o valor de b² - 4ac.
	* Exemplo:
	*	var a = 1, b = 5, c = -6; // Inicia o(s) argumento(s). 
	*	mat.quadratica.delta(a, b, c); // Retorna 49.
	* DESDE: 1.0
	*/

	function delta(a, b, c) {
		return b * b - 4 * a * c;
	}

	/**
	* Sinopse: Calcula as raizes da função quadrática.
	*	mat.quadratica.raizes(a, b, c)
	* Entrada(s):
	*	a: número real representando o coeficiente a.
	*	b: número real representando o coeficiente b.
	*	c: número real representando o coeficiente c.
	* Saída: 
	*	Retorna um array bidimensional com as partes reais e imaginárias
	*	das raízes da função quadrática.
	* Descrição:
	*	Dados os coeficientes a, b e c da função quadrática f(x) = ax² + bx + c, 
	* 	a função retorna um array [[u1, v1], [u2, v2]], onde u1 e u2 são as
	* 	partes reais e v1 e v2 as partes imaginárias da raízes x1 = u1 + v1 * i
	* 	e x2 = u2 + v2 * i.
	* Exemplo:
	*	var a = 1, b = 5, c = -6; // Inicia o(s) argumento(s). 
	*	// Retorna [[1,0],[-6,0]], i.e., x1 = 1 e x2 = -6.
	*	mat.quadratica.raizes(a, b, c); 
	*	var a = 5, b = 8, c = 5; // Inicia o(s) argumento(s). 
	*	// Retorna [[-0.8,0.6],[-0.8,-0.6]], i.e., x1 = -0.8 + 0.6 * i e 
	*	// x2 = -0.8 - 0.6 * i.
	*	mat.quadratica.raizes(a, b, c); 
	* DESDE: 1.0
	* VEJA: 
	*	delta().
	*/

	function raizes(a, b, c) {
		var d = delta(a, b, c);
		var x1;
		var x2;
		if (d >= 0) {
			x1 = [(-b + Math.sqrt(d)) / (2 * a), 0];
			x2 = [(-b - Math.sqrt(d)) / (2 * a), 0];
		} else {
			x1 = [-b / (2 * a), Math.sqrt(-d) / (2 * a)];
			x2 = [-b / (2 * a), -Math.sqrt(-d) / (2 * a)];
		}
		return [x1, x2];
	}

	/**
	* Sinopse: Calcula as coordenadas do vértice da função quadrática.
	*	mat.quadratica.vertice(a, b, c)
	* Entrada(s):
	*	a: número real representando o coeficiente a.
	*	b: número real representando o coeficiente b.
	*	c: número real representando o coeficiente c.
	* Saída: 
	*	Retorna um array com as coordenadas do vértice da função quadrática.
	* Descrição:
	*	Retorna as coordenadas do vértice da função quadrática f(x) = ax² + bx + c,
	* 	dados os seus coeficientes a, b e c como entradas.
	* 	O valor retornado é um array [x, y] com a abscissa x e a ordenada y do vértice
	* 	da parábola.
	* Exemplo:
	*	var a = 1, b = 5, c = -6; // Inicia o(s) argumento(s). 	*	
	*	mat.quadratica.vertice(a, b, c); // Retorna [-2.5,-12.25].
	*	var a = 5, b = 8, c = 5; // Inicia o(s) argumento(s).
	*	mat.quadratica.raizes(a, b, c); // Retorna [-0.8,1.8].
	*	var a = 1, b = -2, c = -1; // Inicia o(s) argumento(s).
	*	mat.quadratica.raizes(a, b, c); // Retorna [1,-2].
	* DESDE: 1.0
	* VEJA: 
	*	delta().
	*/

	function vertice(a, b, c) {
		var x = -b / (2 * a);
		var y = -delta(a, b, c) / (4 * a);
		return [x, y];
	}

	/**
	* Sinopse: classe com os atributos e funções da função quadrática.
	*	new mat.quadratica.Quadratica(a, b, c)
	* Entrada(s):
	*	a: número real representando o coeficiente a.
	*	b: número real representando o coeficiente b.
	*	c: número real representando o coeficiente c.
	* Descrição:
	*	Uma classe que empacota todos os atributos e funções de uma função quadrática, 
	* 	calculando e retornando de forma prática todas as informações mais úteis como
	*	os coeficientes, as raízes separadas, o discriminante, e cada coordenada do
	*	vértice.
	* Exemplo:
	*	var q = new mat.quadratica.Quadratica(1, 2, -3); // cria uma função quadrática. 
	*	q.a; // Retorna o coeficiente a = 1.
	*	q.b; // Retorna o coeficiente b = 2.
	*	q.c; // Retorna o coeficiente c = -3.
	*	q.delta; // Retorna o discriminante Δ = 16.
	*	q.x1; // Retorna uma das raízes x1 = 1.
	*	q.x2; // Retorna uma das raízes x2 = -3.
	*	q.xv; // Retorna a abscissado vértice x = -1.
	*	q.yv; // Retorna a ordenada do vértice y = -4.
	* DESDE: 1.0
	* VEJA: 
	*	delta(), raizes(), vertice().
	*/

	function Quadratica(a, b, c) {
		this.a = a; // Coeficiente a.
		this.b = b; // Coeficiente b.
		this.c = c; // Coeficiente c.
		this.delta = delta(this.a, this.b, this.c); // O discriminante.
		this.x1 = raizes(this.a, this.b, this.c)[0]; // Uma raíz.
		this.x2 = raizes(this.a, this.b, this.c)[1]; // A outra raíz.
		this.xv = vertice(this.a, this.b, this.c)[0]; // A coordenada x do vértice.
		this.yv = vertice(this.a, this.b, this.c)[1]; // A coordenada y do vértice.
	}

	return {
		delta: delta,
		Quadratica: Quadratica,
		raizes: raizes,
		vertice: vertice
	};
}());

///////////////////////////////////////////////////////////////////////

//SISTEMAS E DETERMINANTES
/**
* Sinopse: Cálculos associados a sistemas lineares.
*	mat.sistemas
* Retorna: 
*	Retorna o seguinte objeto.
*	{
*		cramer: cramer, => resolve sistemas lineares 2x2 ou 3x3.
*		det2x2: det2x2, => calcula determinante 2x2.
*		det: det, => calcula determinantes.
*		escalonar: escalonar, => cescalona matrizes.
*		I: I, => cria uma matriz identidade.
*		inversa: inversa, => calcula a inversa de uma matriz.
*		resolver: resolver, => resolve um sistema linear.
*		sarrus: sarrus => calcula determinante 3x3.
*	}
* Exemplo:
*	var m = mat.sistemas; // Pode-se armazenar em uma variável para uso frequente.
*	m.sarrus([1,2,3], [0,-2,1], [5,1,1]); // Chama a função sarrus.
* DESDE: 1.0
* VEJA: 
*	documentação interna das funções.
*/

mat.sistemas = (function () {

	/**
	* Sinopse: Calcula o determinante de uma matriz 3x3.
	*	mat.sistemas.sarrus(l1, l2, l3)
	* Entrada(s):
	*	l1: array numérico representando a 1a linha.
	*	l2: array numérico representando a 2a linha.
	*	l3: array numérico representando a 3a linha.
	* Saída: 
	*	Retorna um número representando o determinante.
	* Descrição:
	*	Retorna o determinante de uma matriz 3x3 usando a Regra
	*	de Sarrus. Tem como entrada arrays de 3 elementos 
	*	representando as três linhas da matriz, l1, l2 e l3. Se 
	*	tiver mais de três elementos em uma das entradas, eles 
	*	não serão considerados no cálculo.
	* Exemplo:
	*	// Inicia o(s) argumento(s). 
	*	var l1 = [2, 3,-1], l2 = [4, 4,-3], l3 = [2,-3, 1]; 
	*	mat.sistemas.sarrus(l1, l2, l3); // Retorna -20.
	* DESDE: 1.1
	*/

	function sarrus(l1, l2, l3) {
		var principal = l1[0] * l2[1] * l3[2] + l1[1] * l2[2] * l3[0] + l1[2] * l2[0] * l3[1];
		var secundaria = l1[2] * l2[1] * l3[0] + l1[0] * l2[2] * l3[1] + l1[1] * l2[0] * l3[2];
		return principal - secundaria;
	}

	/**
	* Sinopse: Calcula o determinante de uma matriz 2x2.
	*	mat.sistemas.det2x2(l1, l2)
	* Entrada(s):
	*	l1: array numérico representando a 1a linha.
	*	l2: array numérico representando a 2a linha.
	* Saída: 
	*	Retorna um número representando o determinante.
	* Descrição:
	*	Retorna o determinante de uma matriz 2x2 usando a definição.
	*	Tem como entrada arrays de 2 elementos representando as duas
	*	linhas da matriz, l1, l2. Se tiver mais de dois elementos em
	*	uma das entradas, eles não serão considerados no cálculo.
	* Exemplo:
	*	// Inicia o(s) argumento(s). 
	*	var l1 = [2, 3], l2 = [4, 4]; 
	*	mat.sistemas.det2x2(l1, l2); // Retorna -4.
	* DESDE: 1.1
	*/

	function det2x2(l1, l2) {
		return l1[0] * l2[1] - l1[1] * l2[0];
	}

	/**
	* Sinopse: Soluciona um sistema linear 2x2 ou 3x3.
	*	mat.sistemas.caramer(la1, la2, la3)
	* Entrada(s):
	*	la1: array numérico.
	*	la2: array numérico.
	*	la3 (opcional): array numérico.
	* Saída: 
	*	Retorna um array com a solução do sistema linear ou uma exceção
	*	caso a entrada tenha um número diferente de 2 ou 3 argumentos.
	* Descrição:
	*	Utiliza a Regra de Cramer para resolver sistemas 2x2 ou 3x3.
	* 	Tem como entradas 2 arrays de 3 elementos ou 3 arrays com 4
	*	elementos, cada uma representando as linhas da matriz aumentada
	*	associada ao sistema, la1, la2 e/ou la3. Se for para resolver um 
	*	sistema de duas equações e duas incógnitas (2x2), entrar la1 e
	*	la2. Ao entrar la3, a função resolve o sistema 3x3.
	* 	É Retornado um array [x, y(, z)] com os valores das incógnitas
	*	x, y (e z). Valores excedentes nos arrays de entrada não são
	*	contabilizados.
	* Exemplo:
	*	// Resolveremos os sistema
	*	//  x - 2y = 10	
	*	//  -3x - y = -100
	*	// e
	*	//  2x + 3y - z = 5
	*	//  4x + 4y - 3z = 3
	*	//  2x - 3y + z = -1
	*	var la1 = [1,-2,10], la2 = [-3,-1,-100]; // Inicia o(s) argumento(s). 
	*	mat.sistemas.cramer(la1, la2); // Retorna [30,10].
	*	// Inicia o(s) argumento(s).
	*	var la1 = [2,3,-1,5], la2 = [4,4,-3,3], la3 = [2,-3,1,-1]; 
	*	mat.sistemas.cramer(la1, la2, la3); // Retorna [1,2,3].
	* DESDE: 1.3
	* VEJA: 
	*	det2x2(), sarrus().
	*/

	function cramer(le1, le2, le3) {
		if (arguments.length == 2) {
			var d = det2x2(
				[le1[0], le1[1]],
				[le2[0], le2[1]]
			);
			var dx = det2x2(
				[le1[2], le1[1]],
				[le2[2], le2[1]]
			);
			var dy = det2x2(
				[le1[0], le1[2]],
				[le2[0], le2[2]]
			);
			return [dx / d, dy / d];
		} else if (arguments.length == 3) {
			var d = sarrus(
				[le1[0], le1[1], le1[2]],
				[le2[0], le2[1], le2[2]],
				[le3[0], le3[1], le3[2]]
			);
			var dx = sarrus(
				[le1[3], le1[1], le1[2]],
				[le2[3], le2[1], le2[2]],
				[le3[3], le3[1], le3[2]]
			);
			var dy = sarrus(
				[le1[0], le1[3], le1[2]],
				[le2[0], le2[3], le2[2]],
				[le3[0], le3[3], le3[2]]
			);
			var dz = sarrus(
				[le1[0], le1[1], le1[3]],
				[le2[0], le2[1], le2[3]],
				[le3[0], le3[1], le3[3]]
			);
			return [dx / d, dy / d, dz / d];
		} else {
			throw new Error('a função deve ter dois ou três argumentos.')
		}
	}

	/**
	* Sinopse: constrói uma matriz identidade de ordem n.
	*	mat.sistemas.I(n)
	* Entrada(s):
	*	n: um número inteiro representando a ordem da matriz.
	* Saída: 
	*	Um array bidimensional nxn com os elementos nulos, exceto 
	*	os da diagonal principal, onde os elementos são iguais a 1.
	* Descrição:
	*	Dada a entrada n, a função cria uma matriz identidade I, onde
	*	cada elemento I[i][j] = 0 se i != j e I[i][j] = 1 se i = j.
	*	A ordem dessa matriz é a entrada n, isto é, uma matriz quadrada
	*	com n linhas e n colunas.
	* Exemplo:
	*	// Retorna [[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]].
	*	var x = mat.sistemas.I(4); 
	* DESDE: 1.1
	* VEJA: 
	*	mat.util.encher().
	*/

	function I(n) {
		var I = new Array(n);
		for (var i = 0; i < n; i++) {
			I[i] = new Array(n);
			mat.util.encher(I[i], 0);
			I[i][i] = 1;
		}
		return I;
	}

	/**
	* Sinopse: Escalona uma matriz.
	*	mat.sistemas.escalonar(A)
	* Entrada(s):
	*	A: um array numérico bidimensional mxn.
	* Saída:
	*	Retorna 1 se houve 0 ou um número par de trocas de linhas,
	*	ou -1 se houve um número ímpar de trocas de linhas no
	*	escalonamento.
	* Descrição:
	*	Dada a entrada A m x n, a função a escalona por eliminação
	*	gaussiana. O valor de retorno é o sinal usado no cálculo
	*	do determinante quando houver trocas de linhas.
	* Exemplo:
	*	// Inicia a matriz A.
	*	var A = [[2, 3,-1, 5],
	*	         [4, 4,-3, 3],
	*	         [2,-3, 1,-1]]
	*	// Faz A = [[4,  4,  -3,   3],
	*	//          [0, -5, 2.5,-2.5],
	*	//          [0,  0,   1,   3]].
	*	mat.sistemas.escalonar(A); 
	* DESDE: 1.1
	* VEJA: 
	*	Math.abs().
	*/

	function escalonar(Amn) {
		var m = Amn.length; // linhas.
		var n = Amn[0].length; // colunas.
		var sinal = 1; // sinal para o determinante.
		for (var i = 0; i < m - 1; i++) {
			// Determinação do elemento central.
			var max = i;
			a_max = Math.abs(Amn[i][i]);
			for (var j = i + 1; j < m; j++) {
				if (Math.abs(Amn[j][i]) > a_max) {
					max = j;
					a_max = Math.abs(Amn[j][i]);
				}
			}
			// Trocas de linhas.
			if (max != i) {
				for (var k = i; k < n; k++) {
					var temp = Amn[i][k];
					Amn[i][k] = Amn[max][k];
					Amn[max][k] = temp;
				}
				sinal *= -1;
			}
			// Elimina os elementos abaixo na coluna.			
			for (var j = i + 1; j < m; j++) {
				if (Amn[j][i] != 0) {
					var fator = -Amn[j][i] / Amn[i][i];
					for (var k = i; k < n; k++) {
						Amn[j][k] += Amn[i][k] * fator;
					}
				}
			}
		}
		return sinal;
	}

	/**
	* Sinopse: Calcula o determinante de uma matriz.
	*	mat.sistemas.det(An)
	* Entrada(s):
	*	An: um array numérico bidimensional n x n.
	* Saída: 
	*	Retorna um número, determinante do array de entrada
	*	ou uma exceção caso a entrada não seja n x n.
	* Descrição:
	*	Dada a matriz de entrada, a função a escalona e usa o sinal,
	*	en caso de trocas de linhas nesse processo, para calcular o
	*	determinante da matriz quadrada através do produto da diagonal
	*	matriz da matriz triangular.
	*	Observe que, após passar pela função, a matriz fica na forma 
	*	escalonada.
	* Exemplo:
	*	// Inicia a matriz A.
	*	var An = [[2, 3,-1],
	*	          [4, 4,-3],
	*	          [2,-3, 1]];
	*	// Faz An = [[4,  4,  -3],
	*	//           [0, -5, 2.5],
	*	//           [0,  0,   1]].
	*	mat.sistemas.det(An); // Retorna -20.
	* DESDE: 1.2
	* VEJA: 
	*	escalonar().
	*/

	function det(An) {
		var n = An.length; // ordem.
		var cols = An[0].length; // colunas.
		if (n !== cols) throw new Error(An + " não é uma matriz quadrada.");
		var sinal = escalonar(An);
		var d = 1;
		for (var i = 0; i < n; i++) {
			d *= An[i][i];
		}
		return d * sinal;
	}

	/**
	* Sinopse: Resolve um sistema de equações lineares.
	*	mat.sistemas.resolver(Ab)
	* Entrada(s):
	*	Ab: um array numérico bidimensional representando a matriz
	*	aumentada do sistema linear.
	* Saída:
	*	Retorna um array com a solução do sistema linear.
	* Descrição:
	*	A entrada Ab é formada pela matriz n x n dos coeficientes
	*	e a última coluna é a das constantes do sistema. A função
	*	a escalona por eliminação gaussiana essa matriz aumentada
	*	e faz o cálculo dos valores da solução por retro substituição.
	*	A solução tem o formato [x1,x2,...,xn].
	*	Observe que, após passar pela função, a matriz fica na forma 
	*	escalonada.	
	* Exemplo:
	*	// Inicia a matriz A.
	*	var Ab = [[2, 3,-1, 5],
	*	          [4, 4,-3, 3],
	*	          [2,-3, 1,-1]]
	*	// Faz Ab = [[4,  4,  -3,   3],
	*	//           [0, -5, 2.5,-2.5],
	*	//           [0,  0,   1,   3]].
	*	mat.sistemas.resolver(Ab); // Retorna [1,2,3].
	* DESDE: 1.2
	* VEJA: 
	*	escalonar().
	*/

	function resolver(Ab) {
		var n = Ab.length;
		var r = 1;
		var X = [];
		var sis = [];
		for (var i = 0; i < n; i++) {
			for (var j = 0; j < n + r; j++) {
				sis[i][j] = Ab[i][j];
			}
		}
		escalonar(sis);
		for (var i = n - 1; i >= 0; i--) {
			X[i] = sis[i][n];
			for (var j = i + 1; j <= n - 1; j++) {
				X[i] -= sis[i][j] * X[j];
			}
			X[i] /= sis[i][i];
		}
		return X;
	}

	/**
	* Sinopse: Calcula a inversa de uma matriz.
	*	mat.sistemas.inversa(An)
	* Entrada(s):
	*	An: um array numérico bidimensional n x n.
	* Saída: 
	*	Retorna um array, inversa da matriz de entrada
	*	ou uma exceção caso a entrada não seja n x n.
	* Descrição:
	*	Dada a matriz de entrada, a função a aumenta concatenando
	*	uma matriz identidade de mesma ordem n e calcula sua inversa
	*	usando a função resolver().
	*	Observe que, após passar pela função, a matriz fica na forma 
	*	escalonada.
	* Exemplo:
	*	// Inicia a matriz A.
	*	var An = [[2, 3,-1],
	*	          [4, 4,-3],
	*	          [2,-3, 1]];
	*	// Retorna An = [[4,  4,  -3],
	*	//               [0, -5, 2.5],
	*	//               [0,  0,   1]].
	*	mat.sistemas.inversa(An);.
	* DESDE: 1.?
	* VEJA: 
	*	resolver().
	*/

	function inversa(An) {
		var n = An.length; // ordem.
		var cols = An[0].length; // colunas.
		if (n !== cols) throw new Error(An + " não é uma matriz quadrada.");
		var inv = [];
		for (var i = 0; i < n; i++) {
			for (var j = 0; j < n; j++) {
				if (i == j) {
					An[j][n] = 1;
				} else {
					An[j][n] = 0;
				}
			}
			inv.push(resolver(An));
		}
		return inv;
	}

	return {
		cramer: cramer,
		det2x2: det2x2,
		det: det,
		escalonar: escalonar,
		I: I,
		inversa: inversa,
		resolver: resolver,
		sarrus: sarrus
	};
}());
///////////////////////////////////////////////////////////////////////

//GEOMETRIA
/**
* Sinopse: Cálculos de geometria.
*	mat.geometria
* Retorna: 
*	Retorna o seguinte objeto.
*	{
*		cateto: cateto, => calcula o cateto.
*		hipotenusa: hipotenusa, => calcula a hipotenusa
*		ternoPit: ternoPit => retorna lista de ternos pitagóricos	
*	}
* Exemplo:
*	var m = mat.geometria; // Pode-se armazenar em uma variável para uso frequente.
*	m.hipotenusa(3, 4); // Chama a função hipotenusa.
*	m.ternoPit(5); // Chama a função ternoPit.
* DESDE: 1.0
* VEJA: 
*	documentação interna das funções.
*/

mat.geometria = (function () {

	/**
	* Sinopse: Retorna uma lista de ternos pitagóricos.
	*	mat.geometria.ternoPit(n)
	* Entrada(s):
	*	n: inteiro >= 2 relacionado ao tamanho da lista.
	* Saída: 
	*	Retorna uma lista com n - 1 arrays com ternos pitagóricos [a, b, c].
	* Descrição:
	*	Colocando como entrada n, a função retorna um array bidimensional
	* 	onde cada linha [a, b, c] é um terno pitagórico primitivo,
	* 	com a e b catetos e c a hipotenusa.	A função utiliza parâmetros 
	*	internos x e y primos entre si, com x variando de 2 a n, inclusive,
	*	y < x e apenas um dos dois par. Desta forma temos cada linha 
	*	[a, b, c] = [x² - y², 2xy, x² + y²].
	* Exemplo:
	*	// Retorna [[3,4,5],[5,12,13],[15,8,17],[7,24,25],[21,20,29],[9,40,41]].
	*	mat.geometria.ternoPit(5); 
	* DESDE: 1.3
	* VEJA: 
	*	mat.aritmetica.mdc()
	*/

	function ternoPit(n) {
		var a = [];
		for (var x = 2; x <= n; x++) {
			for (var y = (x % 2 == 0 ? 1 : 2); y < x; y += 2) {
				if (mat.aritmetica.mdc(x, y) == 1) {
					a.push([x * x - y * y, 2 * x * y, x * x + y * y]);
				}
			}
		}
		return a;
	}

	/**
	* Sinopse: Calcula a hipotenusa de um triângulo retângulo.
	*	mat.geometria.hipotenusa(cat1, cat2)
	* Entrada(s):
	*	cat1: um número real com o valor de um cateto.
	*	cat2: um número real com o valor do outro cateto.
	* Saída: 
	*	Dado os catetos cat1 e cat2, retorna o valor da hipotenusa
	*	do triângulo retângulo usando o teorema de pitágoras
	*	(hipotenusa)² = (cateto1)² + (cateto2)².		
	* Exemplo: 
	*	mat.geometria.hipotenusa(3, 4); // Retorna 5.
	* DESDE: 1.4
	* VEJA:
	*	Math.sqrt();
	*/

	function hipotenusa(cat1, cat2) {
		return Math.sqrt(cat1 * cat1 + cat2 * cat2);
	}

	/**
	* Sinopse: Calcula um cateto de um triângulo retângulo.
	*	mat.geometria.cateto(hip, cat)
	* Entrada(s):
	*	hip: um número real com o valor da hipotenusa.
	*	cat: um número real com o valor de um cateto.
	* Saída: 
	*	Dado o cateto e a hipotenusa, retorna o valor do
	*	outro cateto do triângulo retângulo usando o 
	*	teorema de pitágoras
	*	(cateto1)² = (hipotenusa)² - (cateto2)².		
	* Exemplo: 
	*	mat.geometria.cateto(10, 8); // Retorna 6.
	* DESDE: 1.4
	* VEJA:
	*	Math.sqrt();
	*/

	function cateto(hip, cat) {
		return Math.sqrt(hip * hip - cat * cat);
	}

	return {
		cateto: cateto,
		hipotenusa: hipotenusa,
		ternoPit: ternoPit
	};
}());
///////////////////////////////////////////////////////////////////////

//ARITMÉTICA
/**
* Sinopse: Cálculos de aritmética.
*	mat.aritmetica
* Retorna: 
*	Retorna o seguinte objeto.
*	{
*		mdc: mdc
*	}
* Exemplo:
*	var m = mat.mdc; // Pode-se armazenar em uma variável para uso frequente.
*	m.mdc(12, 60); // Chama a função mdc.
* DESDE: 1.0
* VEJA: 
*	documentação interna das funções.
*/

mat.aritmetica = (function () {

	/**
	* Sinopse: Calcula o mdc de dois inteiros.
	*	mat.aritmetica.mdc(m, n)
	* Entrada(s):
	*	m: um número inteiro.
	*	n: um número inteiro.
	* Saída: 
	*	Retorna o máximo divisor comum de m e n.
	* Exemplo: 
	*	mat.aritmetica.mdc(84, 60); // Retorna 12.
	* DESDE: 1.3
	*/

	function mdc(m, n) {
		if (m < 0) m *= -1;
		if (n < 0) n *= -1;
		var r;
		if (m < n) {
			var temp = m;
			m = n;
			n = temp;
		}
		while (n > 0) {
			r = m % n;
			m = n;
			n = r;
		}
		return m;
	}

	return {
		mdc: mdc
	};
}());
///////////////////////////////////////////////////////////////////////

//FUNÇÕES ÚTEIS
/**
* Sinopse: Funções úteis.
*	mat.util
* Retorna: 
*	Retorna o seguinte objeto.
*	{
*		encher: encher, => enche um array com um valor.
*		maximo: maximo, => encontra o máximo de um array.
*		minimo: minimo => encontra o mínimo de um array.
*	}
* Exemplo:
*	var m = mat.util; // Pode-se armazenar em uma variável para uso frequente.
*	m.maximo([2,5,6,1]); // Chama a função maximo.
* DESDE: 1.0
* VEJA: 
*	documentação interna das funções.
*/

mat.util = (function () {

	/**
	* Sinopse: Retorna o elemento máximo do array.
	*	mat.util.maximo(array)
	* Entrada(s):
	*	array: um array numérico unidimensional.
	* Saída: 
	*	Rerorna maior número, elemento do array.
	* Exemplo:
	*	var a = [23,2,5.6,46,1,78,1,16,4,9,15]; // Inicia o(s) argumento(s). 
	*	mat.util.maximo(a); // Retorna 78.
	* DESDE: 1.0
	*/

	function maximo(array) {
		var max = array[0];

		for (var i = 1; i < array.length; i++) {
			if (array[i] > max) max = array[i];
		}

		return max;
	}

	/**
	* Sinopse: Retorna o elemento mínimo do array.
	*	mat.util.minimo(array)
	* Entrada(s):
	*	array: um array numérico unidimensional.
	* Saída: 
	*	Rerorna menor número, elemento do array.
	* Exemplo:
	*	var a = [23,2,5.6,46,1,78,1,16,4,9,15]; // Inicia o(s) argumento(s). 
	*	mat.util.minimo(a); // Retorna 1.
	* DESDE: 1.0
	*/

	function minimo(array) {
		var min = array[0];

		for (var i = 1; i < array.length; i++) {
			if (array[i] < min) min = array[i];
		}

		return min;
	}

	/**
	* Sinopse: Preenche um array.
	*	mat.util.encher(array, valor)
	* Entrada(s):
	*	array: um array unidimensional de tamanho definido.
	*	valor(opcional): um valor de qualquer tipo.
	* Descrição:
	*	Dado um array A = [...] de qualquer tamanho e um valor v, 
	*	a função preenche todas as posições do array com v, 
	*	transformando-o em A = [v,...,v]. Se não for passado
	*	o parâmetro v, A se tranforma em um array de mesmo tamanho,
	*	porém vazio (todos os elementos undefined).
	* Exemplo:
	*	var A = new Array(4); // Cria um array de tamanho 4. 
	*	mat.util.encher(A, 5); // Faz A = [5,5,5,5].
	*	mat.util.encher(A, 't'); // Faz A = ['t','t','t','t'].
	*	mat.util.encher(A, false); // Faz A = [false,false,false,false].
	*	mat.util.encher(A,); // Faz A = [,,,].
	* DESDE: 1.1
	*/

	function encher(array, valor) {
		for (var i = 0; i < array.length; i++) {
			array[i] = valor;
		}
	}

	return {
		encher: encher,
		maximo: maximo,
		minimo: minimo
	};
}());