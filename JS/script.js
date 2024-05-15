const { createApp } = Vue

createApp({

    data() {
        return {
            mail: null,
            indirizzo: 'https://flynn.boolean.careers/exercises/api/random/mail'
        }
    },
    methods: {
        getNumero() {
            axios.get(this.indirizzo).then((result) => { //attenzione all'arrow function!!

                let codiceRisposta = `${result.status}/${result.statusText}`;
                let datiRisposta = result.data;

                console.log("Ricevuta risposta", codiceRisposta, datiRisposta);

                this.mail = datiRisposta.response;

            });
        }
    },
    mounted() {
        console.log("App montata");

        this.getNumero();
    }

}).mount('#app');