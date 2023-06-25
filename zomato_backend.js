console.log("Jai baba ki");

function Cuisines_box() {
	let x = document.getElementById('Cuisns');
	x.style.display = 'block';
}

function hide_cuisines(x) {
	x.style.display = 'none';
}

function show_cuisines(x) {
	x.style.display = 'block';
}

function other_country() {
	let x = document.getElementById('othr_cuntry');
	x.style.display = 'block';
}

function hide_countries(x) {
	x.style.display = 'none';
}

function show_countries(x) {
	x.style.display = 'block';
}

function display_language() {
	let x = document.getElementById('chose_language');
	x.style.display = 'block';
}

function hide_language(x) {
	x.style.display = 'none';
}

function show_language(x) {
	x.style.display = 'block';
}

function invokingOnInputEvent(event) {
	let x = document.getElementById("srch").value;
	const ary_nameof_dishes = ['Pizza','Burger','Rolls','Cake','Biryani','Chaat','Idli','Sandwich','Chole Bhature','Samosa',
								'Kachori','Coffee',];
	if (ary_nameof_dishes.includes(x)) {
		console.log("yes");
	} else {
		console.log("no");
	}
	console.log(x);
}

{
	const ary_of_dishes = [ 'https://b.zmtcdn.com/data/homepage_dish_data/4/7cf2db5ec261a0fa27a502d3196a6f60.png',
						'https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png',
						'https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png',
						'https://b.zmtcdn.com/data/homepage_dish_data/2/78261817faa51e9456cfab592c189a62.png',
						'https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png',
						'https://b.zmtcdn.com/data/homepage_dish_data/4/d9452952b432b35d1019ada01cedce7f.png',
						'https://b.zmtcdn.com/data/homepage_dish_data/2/c2a150366029ab61a29cf536b7f852d1.png',
						'https://b.zmtcdn.com/data/o2_assets/fc641efbb73b10484257f295ef0b9b981634401116.png',
						'https://b.zmtcdn.com/data/homepage_dish_data/2/da5637a9efd68f3957b64ba48af1088c.png',
						'https://b.zmtcdn.com/data/homepage_dish_data/2/96622ce1309d6ff6047c1965b8a22a5e.png',
						'https://b.zmtcdn.com/data/homepage_dish_data/4/84d4de268ea57d3e2fc0c40aeda1574a.png',
						'https://b.zmtcdn.com/data/dish_images/865258169afc30225d6747c54041e8951634966783.png',
					   ];

	const ary_nameof_dishes = ['Pizza','Burger','Rolls','Cake','Biryani','Chaat','Idli','Sandwich','Chole Bhature','Samosa',
								'Kachori','Coffee',];

	let counter = 0;
	let Dish1 = document.getElementById('dish1');
	let Dish2 = document.getElementById('dish2');
	let Dish3 = document.getElementById('dish3');
	let Dish4 = document.getElementById('dish4');
	let Dish5 = document.getElementById('dish5');
	let Dish6 = document.getElementById('dish6');



	let Dish1_name = document.getElementById('dish1_name');
	let Dish2_name = document.getElementById('dish2_name');
	let Dish3_name = document.getElementById('dish3_name');
	let Dish4_name = document.getElementById('dish4_name');
	let Dish5_name = document.getElementById('dish5_name');
	let Dish6_name = document.getElementById('dish6_name');


	function display_next(x) {
		let y = document.getElementById('bckwrd_btn');
		counter+=1;
		y.style.display = 'block';
		if (counter==6) {
			x.style.display = 'none';
			y.style.display = 'block';
		}	

		Dish1.src = ary_of_dishes[counter];
		Dish2.src = ary_of_dishes[counter + 1];
		Dish3.src = ary_of_dishes[counter + 2];
		Dish4.src = ary_of_dishes[counter + 3];
		Dish5.src = ary_of_dishes[counter + 4];
		Dish6.src = ary_of_dishes[counter + 5];

		x.style.transtitonPosition = 'all';
		x.style.transitionDuration = '2s';

		Dish1_name.innerHTML = ary_nameof_dishes[counter];
		Dish2_name.innerHTML = ary_nameof_dishes[counter + 1];
		Dish3_name.innerHTML = ary_nameof_dishes[counter + 2];
		Dish4_name.innerHTML = ary_nameof_dishes[counter + 3];
		Dish5_name.innerHTML = ary_nameof_dishes[counter + 4];
		Dish6_name.innerHTML = ary_nameof_dishes[counter + 5];
	}


	function display_prev(x) {
		let y = document.getElementById('frwd_btn');
		y.style.display = 'block';
		counter-=1;
		if (counter==0) {
			x.style.display = 'none';
		}
		Dish1.src = ary_of_dishes[counter];
		Dish2.src = ary_of_dishes[counter + 1];
		Dish3.src = ary_of_dishes[counter + 2];
		Dish4.src = ary_of_dishes[counter + 3];
		Dish5.src = ary_of_dishes[counter + 4];
		Dish6.src = ary_of_dishes[counter + 5];

		Dish1_name.innerHTML = ary_nameof_dishes[counter];
		Dish2_name.innerHTML = ary_nameof_dishes[counter + 1];
		Dish3_name.innerHTML = ary_nameof_dishes[counter + 2];
		Dish4_name.innerHTML = ary_nameof_dishes[counter + 3];
		Dish5_name.innerHTML = ary_nameof_dishes[counter + 4];
		Dish6_name.innerHTML = ary_nameof_dishes[counter + 5];
	}
}



{
	const ary_of_Brand = [ 'https://b.zmtcdn.com/data/brand_creatives/logos/1a985408ca7ad8fd097f2c47db9c5cb6_1611252699.png?output-format=webp',
						'https://b.zmtcdn.com/data/brand_creatives/logos/bb30587d1148b6ab628a61945f64bf88_1625164768.png?output-format=webp',
						'https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617187857.png?output-format=webp',
						'https://b.zmtcdn.com/data/brand_creatives/logos/466f8fc74274145f3b21795c3d21816d_1589433692.png?output-format=webp',
						'https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png',
						'https://b.zmtcdn.com/data/brand_creatives/logos/396a89cdb1f7a999717b01aa98da7017_1631990846.png?output-format=webp',
						'https://b.zmtcdn.com/data/brand_creatives/logos/ff3d2543b65456e19d204cd385ecbb63_1605093994.png?output-format=webp',
						'https://b.zmtcdn.com/data/brand_creatives/logos/84edd5489389f21069c09f0c88ea8abb_1628179220.png?output-format=webp',
						'https://b.zmtcdn.com/data/brand_creatives/logos/7fdbbe0f4f0aff0bb3775f3ac819ecb0_1638424082.png?output-format=webp',
						'https://b.zmtcdn.com/data/brand_creatives/logos/1356425eff0c9acd8ab6b0ad351759e4_1611253489.png?output-format=webp',
					   ];

	const ary_nameof_Brand = ["Domino's Pizza","McDonald",'Burger King','KFC',
								'subway',"Haldiram's",'Kaleva','Theobroam','Biryani Blues','Bikanervala',
							 ];

	let counter = 0;
	let Brand1 = document.getElementById('brand1');
	let Brand2 = document.getElementById('brand2');
	let Brand3 = document.getElementById('brand3');
	let Brand4 = document.getElementById('brand4');
	let Brand5 = document.getElementById('brand5');
	let Brand6 = document.getElementById('brand6');



	let Brand1_name = document.getElementById('brand1_name');
	let Brand2_name = document.getElementById('brand2_name');
	let Brand3_name = document.getElementById('brand3_name');
	let Brand4_name = document.getElementById('brand4_name');
	let Brand5_name = document.getElementById('brand5_name');
	let Brand6_name = document.getElementById('brand6_name');


	function NextBrand(x) {
		let y = document.getElementById('prev_brand');
		counter+=1;
		y.style.display = 'block';
		if (counter==4) {
			x.style.display = 'none';
			y.style.display = 'block';
		}

		Brand1.src = ary_of_Brand[counter];
		Brand2.src = ary_of_Brand[counter + 1];
		Brand3.src = ary_of_Brand[counter + 2];
		Brand4.src = ary_of_Brand[counter + 3];
		Brand5.src = ary_of_Brand[counter + 4];
		Brand6.src = ary_of_Brand[counter + 5];

		x.style.transtitonPosition = 'all';
		x.style.transitionDuration = '2s';

		Brand1_name.innerHTML = ary_nameof_Brand[counter];
		Brand2_name.innerHTML = ary_nameof_Brand[counter + 1];
		Brand3_name.innerHTML = ary_nameof_Brand[counter + 2];
		Brand4_name.innerHTML = ary_nameof_Brand[counter + 3];
		Brand5_name.innerHTML = ary_nameof_Brand[counter + 4];
		Brand6_name.innerHTML = ary_nameof_Brand[counter + 5];
	}


	function PreviousBrand(x) {
		let y = document.getElementById('next_brand');
		y.style.display = 'block';
		counter-=1;
		if (counter==0) {
			x.style.display = 'none';
		}
		Brand1.src = ary_of_Brand[counter];
		Brand2.src = ary_of_Brand[counter + 1];
		Brand3.src = ary_of_Brand[counter + 2];
		Brand4.src = ary_of_Brand[counter + 3];
		Brand5.src = ary_of_Brand[counter + 4];
		Brand6.src = ary_of_Brand[counter + 5];

		Brand1_name.innerHTML = ary_nameof_Brand[counter];
		Brand2_name.innerHTML = ary_nameof_Brand[counter + 1];
		Brand3_name.innerHTML = ary_nameof_Brand[counter + 2];
		Brand4_name.innerHTML = ary_nameof_Brand[counter + 3];
		Brand5_name.innerHTML = ary_nameof_Brand[counter + 4];
		Brand6_name.innerHTML = ary_nameof_Brand[counter + 5];
	}
}
