
const ChatsAPI = {
  chats: [
            {
            id: 1,
            img: 'https://kwork.ru/files/avatar/medium/11/602845-1.jpg',
            title: 'Группа стажировки GB 1',
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
            id: 2,
            img: 'https://kwork.ru/files/avatar/medium/11/602845-1.jpg',
            title: "Группа стажировки GB 2",
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
