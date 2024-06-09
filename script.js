/* Генерация предсказания должна происходить при клике на кнопку «предсказать судьбу» */

/* Заранее заготовь 3-5 предсказаний и в зависимости от того, как лягут карты судьбы (или что скажет Math.random) показывай их пользователю */

/* Подставляй текст нового предсказания в .current-forecast h1 */

/* Показывай процент вероятности, с которым предсказание сбудется — в верстке это .current-forecast p */

/* Данный процент также нужно генерировать автоматически, он может принимать значения от 0 до 100% */

/* Совет: заведи функцию-хелпер, которая будет заниматься только генерацией данных в диапазоне от min до max и используй ее где нужно */

/* При генерации нового предсказания старое предсказание должно добавляться в начало списка «Мои предсказания» — .forecasts  */

/* Для добавления предсказания в список воспользуйся шаблоном forecast-item */

const sendButton = document.querySelector('forecast-btn');
const generatorContainer = document.querySelector('.current-forecast h1');
const percentContainer = document.querySelector('.current-forecast p');

sendButton.addEventListener('click', function(min, max) {
    return Math.round(Math.randoom() * (max-min)) + min;

    let predictionNumber = 1; 
    let predictionText = "Ваши надежды и планы сбудутся сверх всяких ожиданий.";

    let predictionNumber = 2; 
    let predictionText = "Вам пора отдохнуть.";

    let predictionNumber = 3; 
    let predictionText = "Вам предлагается мечта всей жизни. Скажите да!";

    let predictionNumber = 4; 
    let predictionText = "Вас ждет приятный сюрприз.";

    let predictionNumber = 5; 
    let predictionText = "Готовьтесь к романтическим приключениям.";


    if (predictionNumber == 1) {
        predictionText = "Ваши надежды и планы сбудутся сверх всяких ожиданий.";
    } else if (predictionNumber == 2) {
        predictionText = "Вам пора отдохнуть.";
    } else if (predictionNumber == 3) {
        predictionText = "Вам предлагается мечта всей жизни. Скажите да!";
    } else if (predictionNumber == 4) {
        predictionText = "Вас ждет приятный сюрприз.";
    } else if (predictionNumber == 5) {
        predictionText = "Готовьтесь к романтическим приключениям.";
    } 
}); 

forecast-item.prepand('.forecasts');