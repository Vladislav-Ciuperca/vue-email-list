const { createApp } = Vue

createApp({

    data() {
        return {
            mail: null,
            indirizzo: 'https://flynn.boolean.careers/exercises/api/random/mail',
            indirizzi: []
        }
    },
    // thisthisthisthisthisthisthisthisthisthisthisthisthisthisthisthisthisthisthis
    methods: {
        getMail() {
            axios.get(this.indirizzo).then((result) => {

                console.log(result.data.response)

                this.indirizzi.push(result.data.response)

            });
        }
    },
    // thisthisthisthisthisthisthisthisthisthisthisthisthisthisthisthisthisthisthis
    mounted() {
        console.log("App montata");

        for (let i = 0; i < 10; i++) {
            this.getMail()
        }

    }

}).mount('#app');