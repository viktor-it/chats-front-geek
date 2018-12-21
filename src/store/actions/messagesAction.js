import {GET_MESSAGES, ADD_MESSAGE} from "../constants";
import instance from '../axios-docs';

export function getMessages() {
    return {
        type: GET_MESSAGES,
        payload: [          //заменятся на полученное с сервера
            {
                receiver:'%id_client%',
                message: "Мы в процессе его разработки",
                senderid:'Дизайнер 1',
                sender_name: 'Дизайнер 1',
                timestamp: 1543990506864,
            },   
            {
                receiver:'%id_client%',
                message: "Отлично. Очень ждем!",
                senderid:'Мария',
                sender_name: 'Мария',
                timestamp: 1543990756864,
            },      
            {
                receiver:'%id_client%',
                message: "Дорогие дизайнеры! Есть ли что-нибудь по десктопу клиенту? Хотелось бы взглянуть!",
                senderid:'Мария',
                sender_name: 'Мария',
                timestamp: 1543990196864,
            },
            {
                receiver:'%id_client%',
                message: "Дорогие дизайнеры! Есть ли что-нибудь по десктопу клиенту? Хотелось бы взглянуть!",
                senderid:'Мария',
                sender_name: 'Мария',
                timestamp: 1545408934088,
            }
          ]
    };
}

export function addMessage(message) {
    return {
        type: ADD_MESSAGE,
        payload: message
    }
}
