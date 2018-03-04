var products = [
  {
    "id": 1,
    "price": "$19.99",
    "name": "product 1",
    "info": "PRODUCT INFO : I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item. Buyers like to know what they’re getting before they purchase, so give them as much information as possible so they can buy with confidence and certainty",
    "image":"pic1.jpg",
    "url": "product1.html",
  },
  {
    "id": 2,
    "price": "$18.99",
    "name": "product 2",
    "info": "PRODUCT INFO : I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item. Buyers like to know what they’re getting before they purchase, so give them as much information as possible so they can buy with confidence and certainty",
  "image":"pic2.jpg",
  "url": "product2.html",
  },
  {
    "id": 3,
    "price": "$11.99",
    "name": "product 3",
    "info": "PRODUCT INFO : I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item. Buyers like to know what they’re getting before they purchase, so give them as much information as possible so they can buy with confidence and certainty",
    "image":"pic3.jpg",
    "url": "product3.html",
  },
  {
    "id": 4,
    "price": "$14.99",
    "name": "product 4",
    "info": "PRODUCT INFO : I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item. Buyers like to know what they’re getting before they purchase, so give them as much information as possible so they can buy with confidence and certainty",
     "image":"pic4.jpg",
     "url": "product4.html",
  },
];

var productsColl = [
  {
    "id": 1,
    "price": "$19.99",
    "name": "product 1",
    "info": "PRODUCT INFO : I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item. Buyers like to know what they’re getting before they purchase, so give them as much information as possible so they can buy with confidence and certainty",
    "image":"pic1.jpg",
    "url": "product1.html",
  },
  {
    "id": 2,
    "price": "$18.99",
    "name": "product 2",
    "info": "PRODUCT INFO : I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item. Buyers like to know what they’re getting before they purchase, so give them as much information as possible so they can buy with confidence and certainty",
  "image":"pic2.jpg",
  "url": "product2.html",
  },
  {
    "id": 3,
    "price": "$11.99",
    "name": "product 3",
    "info": "PRODUCT INFO : I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item. Buyers like to know what they’re getting before they purchase, so give them as much information as possible so they can buy with confidence and certainty",
    "image":"pic3.jpg",
    "url": "product3.html",
  },
  {
    "id": 4,
    "price": "$14.99",
    "name": "product 4",
    "info": "PRODUCT INFO : I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item. Buyers like to know what they’re getting before they purchase, so give them as much information as possible so they can buy with confidence and certainty",
     "image":"pic4.jpg",
     "url": "product4.html",
  },
  {
    "id": 5,
    "price": "$19.99",
    "name": "product 5",
    "info": "PRODUCT INFO : I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item. Buyers like to know what they’re getting before they purchase, so give them as much information as possible so they can buy with confidence and certainty",
    "image":"pic5.jpg",
    "url": "product5.html",
  },
  {
    "id": 6,
    "price": "$18.99",
    "name": "product 6",
    "info": "PRODUCT INFO : I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item. Buyers like to know what they’re getting before they purchase, so give them as much information as possible so they can buy with confidence and certainty",
  "image":"pic6.jpg",
  "url": "product6.html",
  },
  {
    "id": 7,
    "price": "$11.99",
    "name": "product 7",
    "info": "PRODUCT INFO : I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item. Buyers like to know what they’re getting before they purchase, so give them as much information as possible so they can buy with confidence and certainty",
    "image":"pic7.jpg",
    "url": "product7.html",
  },
  {
    "id": 8,
    "price": "$14.99",
    "name": "product 8",
    "info": "PRODUCT INFO : I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item. Buyers like to know what they’re getting before they purchase, so give them as much information as possible so they can buy with confidence and certainty",
     "image":"pic8.jpg",
     "url": "product8.html",
  },
  {
     "id": 9,
    "price": "$14.09",
    "name": "product 9",
    "info": "PRODUCT INFO : I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item. Buyers like to know what they’re getting before they purchase, so give them as much information as possible so they can buy with confidence and certainty",
     "image":"pic9.jpg",
     "url": "product9.html",
  },
];

var jewelry = new Vue({
	el: "#item",
	data: {
     products:products,
     productsColl:productsColl, 
     counter: 0, 

      selected: 'G',
      options: [
      { text: 'Gold', value: 'G' },
      { text: 'Selver', value: 'B' },
      
    ]
	},
})



var nn= new Vue({
  el:"#navBar",
  data:{
    nav:[
    {
      name:'Collection',
      url:'collection.html',
    },
    {
      name:'Our Team',
      url:'team.html',
    },
    ]
    
  }

})

var nn= new Vue({
  el:"#footer",
  data:{
    ficons:[
   ' fa fa-facebook',
   'fa fa-twitter',
   'fa fa-google-plus',
  'fa fa-linkedin',
  'fa fa-instagram',
  
    ]
    
  }

})

var sahar= new Vue({
  el:"#key",
  data:{
    users:[],
    
  },
  methods: {

    loadAllusers:function () {
      $.ajax({
        url: 'http://jsonplaceholder.typicode.com/users',
        method:'get',
        success:function(users){
          console.log(users)
          sahar.users=users
        },

      })
    },

  },
  created:function(){
    console.log("created")
    this.loadAllusers()
  },
  computed:{
  lessThanFiveUser: function() {
    return this.users.filter(function(user) {
      return user.id < 6;
    })
  },
}
})
