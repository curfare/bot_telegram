const Telegram = require('node-telegram-bot-api')
const { againOptions, options } = require('./options')
const token = '7597418723:AAGn_WLxVA8Rp6jPWyC6b5rDPolejk9Wlzk'

const bot = new Telegram(token, { polling: true })
const chats = {}

const againGame = async (id) => {
  await bot.sendMessage(id, 'Загадай число от 1 до 9')
  const number = Math.floor(Math.random() * 10)
  chats[id] = String(number)
  await bot.sendMessage(id, 'Отгадывай', options)
}
const start = () => {
  bot.setMyCommands([
    {
      command: '/start',
      description: 'Да',
    },
    {
      command: '/info',
      description: 'Какая-то информация',
    },
    {
      command: '/game',
      description: 'Игра',
    },
  ])
  bot.on('message', async (message) => {
    const msg = message.text
    const chatId = message.chat.id
    if (msg === '/start') {
      return bot.sendMessage(chatId, 'Добро пожаловать мой друг!')
    }
    if (msg === '/happy') {
      return bot.sendMessage(chatId, 'Я просто хочу быть счастливым...')
    }
    if (msg === '/game') {
      return againGame(chatId)
    }

    return bot.sendMessage(chatId, 'Че ты вякнул')
  })
  bot.on('callback_query', async (msg) => {
    const txt = msg.data
    const chatId = msg.message.chat.id
    if (txt === '/again') {
      return againGame(chatId)
    }
    if (txt === chats[chatId]) {
      return bot.sendMessage(chatId, 'Поздравляю с победой!', againOptions)
    } else {
      return bot.sendMessage(
        chatId,
        `К сожалению нет. ${chats[chatId]}`,
        againOptions
      )
    }
  })
}

start()
