
const ChatsAPI = {
  chats: [
            {
            id: 6,
            img: 'http://simsontraining.com/wp-content/uploads/2015/03/testimonial_icon-60x60.png',
            title: 'Группа стажировки',
            info: 'Команда разработчиков десктоп - версии мессенджера “Pocket Messenger”',
            text: 'Текст крайнего сообщения',
            unread: 2,
            time: '10.10.2018',
            mark: {
                delivered: true,
                read: false
            }
        }, 
        {
            id: 7,
            img: 'http://iconnectites.com/images/website-development.png',
            title: "Design department",
            info: 'Команда дизайнеров мессенджера “Pocket Messenger”',
            text: "Текст крайнего сообщения",
            unread: 5,
            time: "10.10.2018",
            mark: {
                delivered: false,
                read: false
            }
        }
    ],
    all(){
        return this.chats
    },
    get(id) {
        const isChat = p => p.id === id
        return this.chats.find(isChat)
    }
}

export default ChatsAPI
