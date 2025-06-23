interface FormData {
    name: string,
    email: string,
    appeal?: string
}

export default defineEventHandler(async (event) => {
    const config = await useRuntimeConfig() // Получаем данные из конфига (токен и чат_id)
    const body = await readBody<FormData>(event) // Получаем данные из боди
    
    const botToken = config.telegramBotToken // Токен бота
    const chatId = config.telegramChatID // ID канала
    const apiUrl = `https://api.telegram.org/bot${botToken}/sendMessage` // URL для отправки сообщения
  
     const message = `
    ✅ Новая заявка:
    <b>Имя:</b> ${body.name}
    <b>Email:</b> ${body.email}
    <b>Описание:</b> ${body.appeal}`

    const params = {
            chat_id: chatId, // ID чата
            text: message, // Текст сообщения
            parse_mode: 'HTML' // Режим парсинга HTML
        }

    return fetch(apiUrl, {
        method: 'POST', // Метод отправки
        headers: {
            'Content-Type': 'application/json', // Указываем тип содержимого
        },
        body: JSON.stringify(params) // Преобразуем параметры в JSON
      }).then(response => response.json()) // Возвращаем ответ в формате JSON
})