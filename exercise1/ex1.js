new Vue({
	el : '#exercise',
  data: {
  	name: 'Christian Harris',
    age: 25,
    image: 'https://emojipedia-us.s3.amazonaws.com/thumbs/120/emojidex/112/white-medium-small-square_25fd.png'
  },
  methods: {
  newAge: function() {
  	return this.age*3;
  	},
  randNum: function() {
   var num = (Math.random())
   return num;
   },
  }
});
