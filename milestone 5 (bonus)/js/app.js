const { createApp } = Vue;
const DateTime = luxon.DateTime;
console.log(DateTime);
createApp({
    data(){
        return{
            activeChat: 0,
            newMsg: '',
            isSend: 0,
            keyPressed: '',
            contacts: [
                {
                    name: 'Simona',
                    avatar: 'img/avatar_8',
                    visible: true,
                    messages: [
                        {
                            date: '06/08/2022',
                            hour: '12:45',
                            text: 'Hai portato a spasso il cane?',
                            status: 'received'
                        },

                        {
                            date: '06/08/2022',
                            hour: '12:45',
                            text: 'E ricordati di stendere i panni!!!',
                            status: 'received'
                        },
                        
                        {
                            date: '06/08/2022',
                            hour: '12:50',
                            text: 'Fatto Tutto!!',
                            status: 'sent'
                        },

                    ]
                },

                {
                    name: 'Fabio',
                    avatar: 'img/avatar_2',
                    visible: true,
                    messages: [
                        {
                            date: '06/08/2022',
                            hour: '12:50',
                            text: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },

                        {
                            date: '06/08/2022',
                            hour: '12:50',
                            text: 'E ricordati di stendere i panni!',
                            status: 'sent'
                        },
                        
                        {
                            date: '06/08/2022',
                            hour: '12:50',
                            text: 'Fatto Tutto',
                            status: 'received'
                        },

                    ]
                },

                {
                    name: 'Samuele',
                    avatar: 'img/avatar_3',
                    visible: true,
                    messages: [
                        {
                            date: '06/08/2022',
                            hour: '12:50',
                            text: 'La Marianna Va in campagna',
                            status: 'received'
                        },

                        {
                            date: '06/08/2022',
                            hour: '12:50',
                            text: 'Sicuro di non aver sbagliato chat',
                            status: 'sent'
                        },
                        
                        {
                            date: '06/08/2022',
                            hour: '12:50',
                            text: 'Ah Scusa!',
                            status: 'received'
                        },

                    ]
                },

                {
                    name: 'Alessandro B.',
                    avatar: 'img/avatar_4',
                    visible: true,
                    messages: [
                        {
                            date: '06/08/2022',
                            hour: '12:50',
                            text: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },

                        {
                            date: '06/08/2022',
                            hour: '12:50',
                            text: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        },

                    ]
                },

                {
                    name: 'Alessandro L.',
                    avatar: 'img/avatar_5',
                    visible: true,
                    messages: [
                        {
                            date: '06/08/2022',
                            hour: '12:50',
                            text: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },

                        {
                            date: '06/08/2022',
                            hour: '12:50',
                            text: 'Va bene, stasera la sento',
                            status: 'sent'
                        },

                    ]
                },

                {
                    name: 'Claudia',
                    avatar: 'img/avatar_6',
                    visible: true,
                    messages: [
                        {
                            date: '06/08/2022',
                            hour: '12:50',
                            text: 'Ciao Claudia, hai novit???',
                            status: 'sent'
                        },

                        {
                            date: '06/08/2022',
                            hour: '12:50',
                            text: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '06/08/2022',
                            hour: '12:50',
                            text: 'Nessuna nuova buona nuova',
                            status: 'received'
                        },

                    ]
                },

                {
                    name: 'Federico',
                    avatar: 'img/avatar_7',
                    visible: true,
                    messages: [
                        {
                            date: '06/08/2022',
                            hour: '12:50',
                            text: 'Fai gli auguri a Martina che ?? il suo compleanno!',
                            status: 'sent'
                        },

                        {
                            date: '06/08/2022',
                            hour: '12:50',
                            text: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        },

                    ]
                },

                {
                    name: 'Davide',
                    avatar: 'img/avatar_1',
                    visible: true,
                    messages: [
                        {
                            date: '06/08/2022',
                            hour: '12:50',
                            text: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },

                        {
                            date: '06/08/2022',
                            hour: '12:50',
                            text: 'No, l\'ho gi?? mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '06/08/2022',
                            hour: '12:50',
                            text: 'OK!!',
                            status: 'received'
                        },

                    ]
                },
            ]
        }
    },
    methods: {
        
        writeMessage(isSend){
            const newMessage = {
                date: '06/08/2022',
                hour: '12:50',
                text: this.newMsg,
                status: 'sent'
            }    
            if(this.newMsg.length > 0){
                this.contacts[this.activeChat].messages.push(newMessage);
                this.newMsg = '';
                this.isSend = 1;
                setTimeout(this.autoAnswer, 1000);
            }
            
        },
        autoAnswer(){
            if(this.isSend = 1) {
                const AIanswer = {
                    date: '09/08/2022',
                    hour: '12:54',
                    text: 'OK!',
                    status: 'received'
                }
                this.contacts[this.activeChat].messages.push(AIanswer);
            }
        },        
    },
    mounted(){
        
    }

}).mount('#app')

