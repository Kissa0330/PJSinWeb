const app = new Vue({
  el: "#app",
  data: {
    targets: [],
    monthTarget: []
  },
  methods: {
    // TODO target processing
    targetAdd: function (event) {
      // alert();
      if(this.name == 0){
        console.log("nonameだよ")
        return
      }
      var target = {
        name: this.name
      };
      this.targets.push(target)
      console.log(this.name)
      this.name = ""
    }}
  })