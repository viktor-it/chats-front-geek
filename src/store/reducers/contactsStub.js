
const ContactsAPI = {
    contacts: [
        {
            id: 1,
            img: 'https://kwork.ru/files/avatar/medium/11/602845-1.jpg',
            name: 'Петя Петров',
            text: 'Текст последнего сообщения',
            unread: 2,
            time: '10.10.2018',
            status: true
        }, 
        {
            id: 2,
            img: 'https://kwork.ru/files/avatar/medium/11/602845-1.jpg',
            name: 'Сима Симаков',
            text: 'Текст последнего сообщения',
            unread: 5,
            time: '10.10.2018',
            status: false
        }
    ],
    users: [
        {
            id: 1,
            img: 'https://kwork.ru/files/avatar/medium/11/602845-1.jpg',
            name: 'Петя Петров',
            email: 'petrov@gmail.com',
            info: 'Web-дизайнер, разработчик мобильных приложений, студент GB.',
            text: 'Текст последнего сообщения',
            unread: 2,
            time: '10.10.2018',
            status: true

        }, 
        {
            id: 2,
            img: 'https://kwork.ru/files/avatar/medium/11/602845-1.jpg',
            name: 'Сима Симаков',
            email: 'sima@gmail.com',
            info: 'Web-дизайнер, разработчик мобильных приложений, студент GB.',
            text: 'Текст последнего сообщения',
            unread: 5,
            time: '10.10.2018',
            status: false
        },
        {
            id: 3,
            img: 'https://kwork.ru/files/avatar/medium/11/602845-1.jpg',
            name: 'Вася Васильков',
            email: 'vasilkov@gmail.com',
            info: 'Web-дизайнер, разработчик мобильных приложений, студент GB.',
            text: 'Текст последнего сообщения',
            unread: 5,
            time: '10.10.2018',
            status: false
        }, 
        {
            id: 4,
            img: 'https://kwork.ru/files/avatar/medium/11/602845-1.jpg',
            name: 'Петя Иванов',
            email: 'ivanov@gmail.com',
            info: 'Web-дизайнер, разработчик мобильных приложений, студент GB.',
            text: 'Текст последнего сообщения',
            unread: 5,
            time: '10.10.2018',
            status: false
        },
        {
            id: 5,
            img: 'https://kwork.ru/files/avatar/medium/11/602845-1.jpg',
            name: 'Анна Иванова',
            email: 'anna@gmail.com',
            info: 'Web-дизайнер, разработчик мобильных приложений, студент GB.',
            text: 'Текст последнего сообщения',
            unread: 5,
            time: '10.10.2018',
            status: false
        }
    ],
    all(){
        return this.contacts
    },
    allUsers(){
        return this.users
    },
    get(id){
        const isContact = p => p.id === id
        return this.contacts.find(isContact)
    },
    addContact(name){
        let user = this.users.find(x => x.name === name);
        this.contacts.push(user);
    }
}

export default ContactsAPI
