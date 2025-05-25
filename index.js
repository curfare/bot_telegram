const Telegram = require('node-telegram-bot-api')
const { descriptions } = require('./description')
const token = '7597418723:AAGn_WLxVA8Rp6jPWyC6b5rDPolejk9Wlzk'
const bot = new Telegram(token, { polling: true })

const Data = {
  1: {
    name: '0. Шут',
    image: './Image/0.jpg',
    meaning: 'Начало пути, невинность, спонтанность, риск.',
    audio: './Audio/1.mp3',
    description:
      'Карта символизирует начало пути, свободу от условностей и готовность к приключениям. Шут напоминает, что иногда нужно довериться интуиции и сделать шаг в неизвестность.',
  },
  2: {
    name: 'I. Маг',
    image: './Image/1.jpg',
    meaning: 'Мастерство, сила воли, творческая энергия.',
    audio: './Audio/2.mp3',
    description:
      'Маг олицетворяет созидательную энергию и способность превращать идеи в реальность. Это знак, что у вас есть все инструменты для успеха.',
  },
  3: {
    name: 'II. Верховная Жрица',
    image: './Image/2.jpg',
    meaning: 'Интуиция, тайны, подсознание.',
    audio: './Audio/3.mp3',
    description:
      'Жрица — символ скрытого знания и мудрости. Она призывает прислушаться к внутреннему голосу и довериться интуиции.',
  },
  4: {
    name: 'III. Императрица',
    image: './Image/3.jpg',
    audio: './Audio/4.mp3',
    meaning: 'Плодородие, изобилие, женская энергия.',
    description:
      'Императрица воплощает творческую силу природы, материнство и чувственность. Карта говорит о периоде роста и процветания.',
  },
  5: {
    name: 'IV. Император',
    image: './Image/4.jpg',
    audio: './Audio/5.mp3',
    meaning: 'Власть, структура, контроль.',
    description:
      'Император символизирует стабильность, порядок и дисциплину. Это знак необходимости взять ответственность за свою жизнь.',
  },
  6: {
    name: 'V. Иерофант',
    image: './Image/5.jpg',
    audio: './Audio/6.mp3',
    meaning: 'Традиции, духовность, наставничество.',
    description:
      'Иерофант олицетворяет духовные учения, моральные устои и поиск высшего смысла. Карта может указывать на важность следования правилам.',
  },
  7: {
    name: 'VI. Влюблённые',
    image: './Image/6.jpg',
    audio: './Audio/7.mp3',
    meaning: 'Выбор, гармония, любовь.',
    description:
      'Карта символизирует важные решения, особенно в отношениях. Это знак единства противоположностей и необходимости сделать выбор сердцем.',
  },
  8: {
    name: 'VII. Колесница',
    image: './Image/7.jpg',
    audio: './Audio/8.mp3',
    meaning: 'Победа, контроль, движение вперёд.',
    description:
      'Колесница — символ целеустремленности и контроля над противоположными силами. Карта призывает к действию и уверенности в себе.',
  },
  9: {
    name: 'VIII. Сила',
    image: './Image/8.jpg',
    audio: './Audio/9.mp3',
    meaning: 'Внутренняя сила, мягкость, мужество.',
    description:
      'Эта карта говорит не о физической силе, а о силе духа. Она учит, что истинная мощь — в доброте и терпении.',
  },
  10: {
    name: 'IX. Отшельник',
    image: './Image/9.jpg',
    audio: './Audio/10.mp3',
    meaning: 'Самоанализ, поиск истины, одиночество.',
    description:
      'Отшельник символизирует период уединения для размышлений. Карта советует замедлиться и прислушаться к внутренней мудрости.',
  },
  11: {
    name: 'X. Колесо Фортуны',
    image: './Image/10.jpg',
    audio: './Audio/11.mp3',
    meaning: 'Судьба, циклы, неожиданные перемены.',
    description:
      'Колесо напоминает, что жизнь состоит из взлётов и падений. Карта предвещает поворот судьбы — готовьтесь к изменениям.',
  },
  12: {
    name: 'XI. Справедливость',
    image: './Image/11.jpg',
    audio: './Audio/12.mp3',
    meaning: 'Баланс, карма, принятие решений.',
    description:
      'Карта символизирует закон причины и следствия. Ваши действия будут иметь последствия — поступайте честно.',
  },
  13: {
    name: 'XII. Повешенный',
    image: './Image/12.jpg',
    audio: './Audio/13.mp3',
    meaning: 'Жертва, новый взгляд, ожидание.',
    description:
      'Повешенный советует остановиться и посмотреть на ситуацию под другим углом. Иногда «бездействие» — лучшая стратегия.',
  },
  14: {
    name: 'XIII. Смерть',
    image: './Image/13.jpg',
    audio: './Audio/14.mp3',
    meaning: 'Трансформация, конец цикла, перерождение.',
    description:
      'Карта редко означает физическую смерть. Чаще — завершение этапа и начало чего-то нового. Старое должно уйти, чтобы пришло новое.',
  },
  15: {
    name: 'XIV. Умеренность',
    image: './Image/14.jpg',
    audio: './Audio/15.mp3',
    meaning: 'Гармония, баланс, исцеление.',
    description:
      'Ангел на карте учит находить золотую середину. Это знак терпения, адаптации и постепенного прогресса.',
  },
  16: {
    name: 'XV. Дьявол',
    image: './Image/15.jpg',
    audio: './Audio/16.mp3',
    meaning: 'Иллюзии, зависимость, материальные искушения.',
    description:
      'Дьявол символизирует соблазны и оковы, которые мы создаём сами. Карта призывает осознать свои ограничения и освободиться от них.',
  },
  17: {
    name: 'XVI. Башня',
    image: './Image/16.jpg',
    audio: './Audio/17.mp3',
    meaning: 'Крах иллюзий, внезапные изменения.',
    description:
      'Башня — символ разрушения ложных убеждений. Карта предупреждает о резких переменах, но они ведут к освобождению.',
  },
  18: {
    name: 'XVII. Звезда',
    image: './Image/17.jpg',
    audio: './Audio/18.mp3',
    meaning: 'Надежда, духовное руководство, вдохновение.',
    description:
      'Звезда дарит свет после тьмы. Это знак исцеления, веры в лучшее и связи с высшими силами.',
  },
  19: {
    name: 'XVIII. Луна',
    image: './Image/18.jpg',
    audio: './Audio/19.mp3',
    meaning: 'Иллюзии, страхи, подсознание.',
    description:
      'Луна раскрывает тайны подсознания. Карта говорит о неопределенности, но призывает доверять интуиции, а не страхам.',
  },
  20: {
    name: 'XIX. Солнце',
    image: './Image/19.jpg',
    audio: './Audio/20.mp3',
    meaning: 'Радость, успех, ясность.',
    description:
      'Солнце — самая позитивная карта. Она сулит счастье, победу и период уверенности в себе.',
  },
  21: {
    name: 'XX. Суд',
    image: './Image/20.jpg',
    audio: './Audio/21.mp3',
    meaning: 'Возрождение, призыв к действию.',
    description:
      'Карта символизирует момент принятия решения, которое изменит жизнь. Это «зов» к новой миссии или переосмыслению прошлого.',
  },
  22: {
    name: 'XXI. Мир',
    image: './Image/21.jpg',
    audio: './Audio/22.mp3',
    meaning: 'Завершение, гармония, путешествия.',
    description:
      'Мир — карта полного цикла. Она означает достижение цели, единство с миром и готовность к новому этапу.',
  },
  23: {
    name: 'XXII. Сетт',
    image: './Image/23.jpg',
    audio: './Audio/23.mp3',
    meaning: 'Баланс, чистота, идеал',
    description:
      'Данная карточка является лимитированной и самой редкой среди всех карт таро. Вам очень повезло и вас в жизни ждут новые перемены и достижение поставленных целей ',
  },
}

const values = Object.values(Data)

const textButton = {
  reply_markup: JSON.stringify({
    inline_keyboard: [[{ text: 'Увидеть текст', callback_data: '/text' }]],
  }),
}

const startButtons = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [{ text: 'Оценить работу данного бота', url: 'https://example.com' }],
      [{ text: 'Что такое гадание по картам таро?', callback_data: '/about' }],
    ],
  }),
}

const info = {
  reply_markup: JSON.stringify({
    inline_keyboard: [[{ text: 'Что это значит?', callback_data: '/info' }]],
  }),
}
const start = () => {
  let inf
  bot.setMyCommands([
    { command: '/start', description: 'Запустить бота' },
    { command: '/action', description: 'Сделать расклад' },
  ])
  bot.on('message', async (msg) => {
    const message = msg.text
    const id = msg.chat.id
    if (message === '/start') {
      await bot.sendPhoto(id, './Image/cat.jpg')
      return bot.sendMessage(
        id,
        'Добро пожаловать странник! Здесь ты можешь узнать свою судьбу совершенно бесплатно! Чтобы начать, нажмите на кнопку "/action"',
        startButtons
      )
    }
    if (message === '/action') {
      const randomValue = values[parseInt(Math.random() * values.length)]
      inf = randomValue
      const m = await bot.sendMessage(id, 'Бот делает расклад...')

      setTimeout(async () => {
        await bot.deleteMessage(m.chat.id, m.message_id)
        await bot.sendPhoto(id, randomValue.image)
        await bot.sendMessage(id, randomValue.name)
        return bot.sendMessage(id, randomValue.meaning, info)
      }, 2000)
    }
  })

  bot.on('callback_query', async (msg) => {
    const data = msg.data
    const id = msg.message.chat.id
    if (data === '/info') {
      return bot.sendAudio(id, inf.audio, textButton)
    }
    if (data === '/text') {
      return bot.sendMessage(id, inf.description)
    }
    if (data === '/about') {
      return bot.sendMessage(id, descriptions)
    }
  })
}

start()
