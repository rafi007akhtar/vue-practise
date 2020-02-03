new Vue({
    el: "#app",
    data: {
        title: "Hello, world",
        link: "https://google.com",
        times: 0
    },
    methods: {
        changeTitle: function (title) {
            this.title = title;
            return this.title; 
        },
        clickMe: function () {
            this.times++;
        }
    }
});

new Vue({
    el: "#fb",
    data: {
        fbCode: "Take me to <a href='https://facebook.com'>Facebook</a>",
        text: ''
    }
})

new Vue({
    el: "#watcher",
    data: {
        counter: 0,
        timesChanged: 0
    },
    methods: {
        changeCounter: function (event) {
            this.counter = event.target.value;
        }
    },
    watch: {
        counter: function (value) {
            this.timesChanged++;
        }
    }
});

new Vue({
    el: "#rgb",
    data: {
        colors: ["red", "green", "blue"],
        pos: 0,
        color: "red",
        toggleRGB: true
    },
    methods: {
        nextColor: function () {
            this.pos = (this.pos + 1) % 3;
            this.color = this.colors[this.pos];
        }
    }
});
