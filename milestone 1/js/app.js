const createApp = Vue;

createApp({
    data(){
        return{
            contacts: [
                {
                    name: 'Simona',
                    avatar: '_8',
                    visible: true,
                    messages: [
                        {
                            date: '06/08/2022 12:45',
                            text: 'Hai portato a spasso il cane?',
                            status: 'received'
                        },

                        {
                            date: '06/08/2022 12:46',
                            text: 'E ricordati di stendere i panni!!!',
                            status: 'received'
                        },
                        
                        {
                            date: '06/08/2022 12:50',
                            text: 'Fatto Tutto!!',
                            status: 'sent'
                        },

                    ]
                },

                {
                    name: 'Fabio',
                    avatar: '_2',
                    visible: true,
                    messages: [
                        {
                            date: '06/08/2022 12:45',
                            text: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },

                        {
                            date: '06/08/2022 12:46',
                            text: 'E ricordati di stendere i panni!',
                            status: 'sent'
                        },
                        
                        {
                            date: '06/08/2022 12:50',
                            text: 'Fatto Tutto',
                            status: 'received'
                        },

                    ]
                },

                {
                    name: 'Samuele',
                    avatar: '_3',
                    visible: true,
                    messages: [
                        {
                            date: '06/08/2022 12:45',
                            text: 'La Marianna Va in campagna',
                            status: 'received'
                        },

                        {
                            date: '06/08/2022 12:46',
                            text: 'Sicuro di non aver sbagliato chat',
                            status: 'sent'
                        },
                        
                        {
                            date: '06/08/2022 12:50',
                            text: 'Ah Scusa!',
                            status: 'received'
                        },

                    ]
                },

                {
                    name: 'Alessandro B.',
                    avatar: '_4',
                    visible: true,
                    messages: [
                        {
                            date: '06/08/2022 12:45',
                            text: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },

                        {
                            date: '06/08/2022 12:46',
                            text: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        },

                    ]
                },

                {
                    name: 'Alessandro L.',
                    avatar: '_5',
                    visible: true,
                    messages: [
                        {
                            date: '06/08/2022 12:45',
                            text: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },

                        {
                            date: '06/08/2022 12:46',
                            text: 'Va bene, stasera la sento',
                            status: 'sent'
                        },

                    ]
                },

                {
                    name: 'Claudia',
                    avatar: '_6',
                    visible: true,
                    messages: [
                        {
                            date: '06/08/2022 12:45',
                            text: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },

                        {
                            date: '06/08/2022 12:46',
                            text: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '06/08/2022 12:46',
                            text: 'Nessuna nuova buona nuova',
                            status: 'received'
                        },

                    ]
                },

                {
                    name: 'Federico',
                    avatar: '_7',
                    visible: true,
                    messages: [
                        {
                            date: '06/08/2022 12:45',
                            text: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },

                        {
                            date: '06/08/2022 12:46',
                            text: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        },

                    ]
                },

                {
                    name: 'Davide',
                    avatar: '_1',
                    visible: true,
                    messages: [
                        {
                            date: '06/08/2022 12:45',
                            text: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },

                        {
                            date: '06/08/2022 12:46',
                            text: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '06/08/2022 12:46',
                            text: 'OK!!',
                            status: 'received'
                        },

                    ]
                },
            ]
        }
    }

}).mount('#app')