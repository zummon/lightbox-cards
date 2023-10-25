import './style.css'

var items = [
	{
		share:'https://www.pexels.com/photo/scenic-photo-of-forest-with-sunlight-1757363/',
		'img-src':'https://images.pexels.com/photos/1757363/pexels-photo-1757363.jpeg?w=640',
		'img-caption':'Lorem ipsum',
		title:'Lorem ipsum',
		desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
	},
	{
		share:'https://www.pexels.com/photo/brown-dessert-273935/',
		'img-src':'https://images.pexels.com/photos/273935/pexels-photo-273935.jpeg?w=640',
		'img-caption':'Et nobis cumque',
		title:'Et nobis cumque',
		desc:'Et nobis cumque ad odio, consequatur dignissimos.'
	},
	{
		share:'https://www.pexels.com/photo/mountain-covered-snow-under-star-572897/',
		'img-src':'https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?w=640',
		'img-caption':'Cum totam',
		title:'Cum totam',
		desc:'Cum totam recusandae veritatis quod.'
	},
	{
		share:'https://www.pexels.com/photo/black-and-white-photography-of-trees-on-a-foggy-day-3454270/',
		'img-src':'https://images.pexels.com/photos/3454270/pexels-photo-3454270.jpeg?w=640',
		'img-caption':'Cupiditate veniam',
		title:'Cupiditate veniam',
		desc:'Cupiditate veniam quam aperiam placeat deserunt.'
	},
]

document.querySelector('#grid').innerHTML = items.map((item) => `
<div class="">
	<div class="rounded-md overflow-clip cursor-pointer shadow-md hover:shadow-xl" onClick="">
		<div class="overflow-clip">
			<img class="hover:scale-110 transition" src="${item['img-src']}" alt="${item['img-caption']}">
		</div>
		<div class="p-5 bg-white">
			<h3 class="text-2xl mb-5">${item.title}</h3>
			<p class="text-neutral-500">${item.desc}</p>
		</div>
	</div>
</div>
`).join('')

document.querySelector('#slide').firstElementChild.innerHTML = items.map((item) => `
<div class="flex-none snap-center">
	<img class="w-screen" src="${item['img-src']}" alt="${item['img-caption']}">
</div>
`).join('')