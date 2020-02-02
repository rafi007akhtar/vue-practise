new Vue({
    el: "#app",
    data: {
        text: "Hello, world!"
    },
    methods: {
        changeText: function(event) {
            this.text = event.target.value;
        }
    }
});