function mudar(valor) {
	if (valor == 0) {
		var r10 = 0
		var r11 = 0
		var r12 = 0
		var r13 = 0

		var ano = document.getElementById('parte-datal')
		var sinopsel = document.getElementById('parte-sinopse')

		var link1 = document.getElementById('ep1a')
	 	var link2 = document.getElementById('ep2a')
	 	var link3 = document.getElementById('ep3a')
	 	var link4 = document.getElementById('ep4a')
	 	var link5 = document.getElementById('ep5a')
	 	var link6 = document.getElementById('ep6a')
	 	var link7 = document.getElementById('ep7a')
	 	var link8 = document.getElementById('ep8a')
	 	var link9 = document.getElementById('ep9a')
	 	var link10 = document.getElementById('ep10a')
	 	var link11 = document.getElementById('ep11a')
	 	var link12 = document.getElementById('ep12a')
	 	var link13 = document.getElementById('ep13a')

		var img1 = document.getElementById('ep1i')
		var img2 = document.getElementById('ep2i')
		var img3 = document.getElementById('ep3i')
		var img4 = document.getElementById('ep4i')
		var img5 = document.getElementById('ep5i')
		var img6 = document.getElementById('ep6i')
		var img7 = document.getElementById('ep7i')
		var img8 = document.getElementById('ep8i')
		var img9 = document.getElementById('ep9i')
		var img10 = document.getElementById('ep10i')
		var img11 = document.getElementById('ep11i')
		var img12 = document.getElementById('ep12i')
		var img13 = document.getElementById('ep13i')

		var p1 = document.getElementById('ep1p')
		var p2 = document.getElementById('ep2p')
		var p3 = document.getElementById('ep3p')
		var p4 = document.getElementById('ep4p')
		var p5 = document.getElementById('ep5p')
		var p6 = document.getElementById('ep6p')
		var p7 = document.getElementById('ep7p')
		var p8 = document.getElementById('ep8p')
		var p9 = document.getElementById('ep9p')
		var p10 = document.getElementById('ep10p')
		var p11 = document.getElementById('ep11p')
		var p12 = document.getElementById('ep12p')
		var p13 = document.getElementById('ep13p')

		ano.innerHTML = "<h4>Ano de Lançamento: 2017</h4>"
		sinopsel.innerHTML = "<p>Oito assaltantes se trancam com reféns na Casa da Moeda da Espanha enquanto seu líder manipula a polícia. Será o maior roubo da história ou uma missão em vão?</p>"

		img1.setAttribute('src', './capas-episodios/episodio1.jpg')
		img2.setAttribute('src', './capas-episodios/episodio2.jpg')
		img3.setAttribute('src', './capas-episodios/episodio3.jpg')
		img4.setAttribute('src', './capas-episodios/episodio4.jpg')
		img5.setAttribute('src', './capas-episodios/episodio5.jpg')
		img6.setAttribute('src', './capas-episodios/episodio6.jpg')
		img7.setAttribute('src', './capas-episodios/episodio7.jpg')
		img8.setAttribute('src', './capas-episodios/episodio8.jpg')
		img9.setAttribute('src', './capas-episodios/episodio9.jpg')
		img10.setAttribute('src', './capas-episodios/episodio10.jpg')
		img11.setAttribute('src', './capas-episodios/episodio11.jpg')
		img12.setAttribute('src', './capas-episodios/episodio12.jpg')
		img13.setAttribute('src', './capas-episodios/episodio13.jpg')

		link1.setAttribute('href', './temporada-01/t01e01.html')
		link2.setAttribute('href', './temporada-01/t01e02.html')
		link3.setAttribute('href', './temporada-01/t01e03.html')
		link4.setAttribute('href', './temporada-01/t01e04.html')
		link5.setAttribute('href', './temporada-01/t01e05.html')
		link6.setAttribute('href', './temporada-01/t01e06.html')
		link7.setAttribute('href', './temporada-01/t01e07.html')
		link8.setAttribute('href', './temporada-01/t01e08.html')
		link9.setAttribute('href', './temporada-01/t01e09.html')
		link10.setAttribute('href', './temporada-01/t01e10.html')
		link11.setAttribute('href', './temporada-01/t01e11.html')
		link12.setAttribute('href', './temporada-01/t01e12.html')
		link13.setAttribute('href', './temporada-01/t01e13.html')

		p1.innerHTML = "<p>Episódio 01 - Efectuar lo Acordado</p>"
		p2.innerHTML = "<p>Episódio 02 - Imprudencias letales</p>"
		p3.innerHTML = "<p>Episódio 03 - Errar al Disparar</p>"
		p4.innerHTML = "<p>Episódio 04 - Caballo de Troya</p>"
		p5.innerHTML = "<p>Episódio 05 - El Día de la Marmota</p>"
		p6.innerHTML = "<p>Episódio 06 - La Cálida Guerra Fría</p>"
		p7.innerHTML = "<p>Episódio 07 - Refrigerada Inestabilidad</p>"
		p8.innerHTML = "<p>Episódio 08 - Tú lo has Buscado</p>"
		p9.innerHTML = "<p>Episódio 09 - El que la Sigue la Consigue</p>"
		p10.innerHTML = "<p>Episódio 10 - Se Acabaron las Máscaras</p>"
		p11.innerHTML = "<p>Episódio 11 - La Cabeza del Plan</p>"
		p12.innerHTML = "<p>Episódio 12 - Una Cuestión de Eficiencia</p>"
		p13.innerHTML = "<p>Episódio 13 - ¿Qué Hemos Hecho?</p>"
	} 

	if (valor == 1) {
		var ano = document.getElementById('parte-datal')
		var sinopsel = document.getElementById('parte-sinopse')

	 	var link1 = document.getElementById('ep1a')
	 	var link2 = document.getElementById('ep2a')
	 	var link3 = document.getElementById('ep3a')
	 	var link4 = document.getElementById('ep4a')
	 	var link5 = document.getElementById('ep5a')
	 	var link6 = document.getElementById('ep6a')
	 	var link7 = document.getElementById('ep7a')
	 	var link8 = document.getElementById('ep8a')
	 	var link9 = document.getElementById('ep9a')

		var img1 = document.getElementById('ep1i')
		var img2 = document.getElementById('ep2i')
		var img3 = document.getElementById('ep3i')
		var img4 = document.getElementById('ep4i')
		var img5 = document.getElementById('ep5i')
		var img6 = document.getElementById('ep6i')
		var img7 = document.getElementById('ep7i')
		var img8 = document.getElementById('ep8i')
		var img9 = document.getElementById('ep9i')

		var p1 = document.getElementById('ep1p')
		var p2 = document.getElementById('ep2p')
		var p3 = document.getElementById('ep3p')
		var p4 = document.getElementById('ep4p')
		var p5 = document.getElementById('ep5p')
		var p6 = document.getElementById('ep6p')
		var p7 = document.getElementById('ep7p')
		var p8 = document.getElementById('ep8p')
		var p9 = document.getElementById('ep9p')

		ano.innerHTML = "<h4>Ano de Lançamento: 2017</h4>"
		sinopsel.innerHTML = "<p>À medida que a polícia se aproxima da identidade do Professor, ele falha na comunicação com a equipe da Casa da Moeda, o que leva a um motim e à prisão de um dos ladrões.</p>"

		img1.setAttribute('src', './capas-episodios/t02episodio1.jpg')
		img2.setAttribute('src', './capas-episodios/t02episodio2.jpg')
		img3.setAttribute('src', './capas-episodios/t02episodio3.jpg')
		img4.setAttribute('src', './capas-episodios/t02episodio4.jpg')
		img5.setAttribute('src', './capas-episodios/t02episodio5.jpg')
		img6.setAttribute('src', './capas-episodios/t02episodio6.jpg')
		img7.setAttribute('src', './capas-episodios/t02episodio7.jpg')
		img8.setAttribute('src', './capas-episodios/t02episodio8.jpg')
		img9.setAttribute('src', './capas-episodios/t02episodio9.jpg')

		link1.setAttribute('href', './temporada-02/t02e01.html')
		link2.setAttribute('href', './temporada-02/t02e02.html')
		link3.setAttribute('href', './temporada-02/t02e03.html')
		link4.setAttribute('href', './temporada-02/t02e04.html')
		link5.setAttribute('href', './temporada-02/t02e05.html')
		link6.setAttribute('href', './temporada-02/t02e06.html')
		link7.setAttribute('href', './temporada-02/t02e07.html')
		link8.setAttribute('href', './temporada-02/t02e08.html')
		link9.setAttribute('href', './temporada-02/t02e09.html')

		p1.innerHTML = "<p>Episódio 02x01</p>"
		p2.innerHTML = "<p>Episódio 02x02</p>"
		p3.innerHTML = "<p>Episódio 02x03</p>"
		p4.innerHTML = "<p>Episódio 02x04</p>"
		p5.innerHTML = "<p>Episódio 02x05</p>"
		p6.innerHTML = "<p>Episódio 02x06</p>"
		p7.innerHTML = "<p>Episódio 02x07</p>"
		p8.innerHTML = "<p>Episódio 02x08</p>"
		p9.innerHTML = "<p>Episódio 02x09</p>"

		var epai = document.getElementById('episodios')
		var ep10 = document.getElementById('ep10d')
		var ep11 = document.getElementById('ep11d')
		var ep12 = document.getElementById('ep12d')
		var ep13 = document.getElementById('ep13d')

		var r10 = epai.removeChild(ep10)
		var r11 = epai.removeChild(ep11)
		var r12 = epai.removeChild(ep12)
		var e13 = epai.removeChild(ep13)
	} 
}