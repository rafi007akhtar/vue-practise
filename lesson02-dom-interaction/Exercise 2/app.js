new Vue({
    el: '#exercise',
    data: {
        value: '',
        alertMsg: 'Alert!'
    },
    methods: {
        alertMe: function () {
            alert(this.alertMsg);
        },
        onKeydown: function (event) {
            this.value = event.target.value;
        }
    }
});