import { rerenderEntireTree } from "../render";

let state = {
    profilePage: {
        postsData: [
            { id: 1, nickname: "jijka bobra", avatarSrc: "https://sun9-83.userapi.com/impg/IpH272nhUhEx52c4AXkLHcQMpdsZsYH1n8p_Ng/W1qdfwqIqn4.jpg?size=1080x1049&quality=95&sign=781d343a4e5337711c3d4177688e6af3&c_uniq_tag=6eEWvFQQErhuNRht6Fy3hTYiYbI5CnqblALaf45tICI&type=album", likesCount: 25, repostsCount: 4, text: "Евгений Александрович Кустолян" },
            { id: 2, nickname: "bobr kurva", avatarSrc: "https://media.discordapp.net/attachments/407488395137384448/1174406044026417222/images.png?ex=66673cdc&is=6665eb5c&hm=b4d07c787c157eaaca10f19af6cfa3fe960ce7dc1e63bd8eec3387cd7645c184&=&format=webp&quality=lossless", likesCount: 12, repostsCount: 0, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
            { id: 3, nickname: "just a cat", avatarSrc: "https://media.discordapp.net/attachments/407488395137384448/1238564418720370719/840798b9af64c735d9504031f903290e.png?ex=66674b80&is=6665fa00&hm=283566ae43b904a6e07ea89e3015b158ca0d46235a6c73c0efbead5cfd1c6c11&=&format=webp&quality=lossless&width=273&height=350", likesCount: 3, repostsCount: 1, text: "капуста вкусная" },
            { id: 4, nickname: "Жоский крот", avatarSrc: "https://media.discordapp.net/attachments/407488395137384448/1249441158116016178/e45e75bc066a95db68e80fb1e9fdc106.png?ex=66675041&is=6665fec1&hm=046616fab50977aa522dd1310141e3d904756041c6f8bdeb904172951e870dd6&=&format=webp&quality=lossless&width=350&height=350", likesCount: 14, repostsCount: 5, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque elit eget gravida cum sociis natoque penatibus et magnis. Posuere morbi leo urna molestie at. Sagittis vitae et leo duis. Nisl tincidunt eget nullam non nisi. Consequat ac felis donec et odio pellentesque. In eu mi bibendum neque egestas congue. Id neque aliquam vestibulum morbi blandit cursus risus. Elementum nibh tellus molestie nunc non blandit massa. Consequat interdum varius sit amet mattis vulputate enim nulla aliquet. Quis lectus nulla at volutpat diam ut venenatis tellus. Nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Viverra maecenas accumsan lacus vel facilisis volutpat est velit. Morbi enim nunc faucibus a pellentesque sit. Massa enim nec dui nunc mattis enim ut. Mi quis hendrerit dolor magna eget. Quam viverra orci sagittis eu. Netus et malesuada fames ac turpis. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. Id volutpat lacus laoreet non curabitur. Tortor vitae purus faucibus ornare suspendisse. Porta non pulvinar neque laoreet suspendisse. Diam quam nulla porttitor massa id neque aliquam vestibulum. Bibendum arcu vitae elementum curabitur vitae. Ut sem viverra aliquet eget sit amet tellus cras. Massa vitae tortor condimentum lacinia quis vel eros donec ac. Turpis in eu mi bibendum neque egestas congue. Rhoncus est pellentesque elit ullamcorper dignissim cras. Magna ac placerat vestibulum lectus mauris ultrices eros. Dui faucibus in ornare quam. Mauris commodo quis imperdiet massa. Amet nisl suscipit adipiscing bibendum est. Sed risus pretium quam vulputate. Adipiscing elit duis tristique sollicitudin nibh sit. Viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat. Massa sapien faucibus et molestie ac feugiat sed. Molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit sed. Molestie at elementum eu facilisis sed. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien. Quisque id diam vel quam elementum pulvinar etiam non. Aliquam faucibus purus in massa. Ut morbi tincidunt augue interdum velit. Pretium nibh ipsum consequat nisl vel pretium. Purus in massa tempor nec feugiat. Lacus luctus accumsan tortor posuere ac ut consequat semper. Eu tincidunt tortor aliquam nulla" },
            { id: 5, nickname: "капустыч", avatarSrc: "https://media.discordapp.net/attachments/407488395137384448/1249441205369049190/57f2dcaca16abd72a9e814b783e4c9fe.png?ex=6667504c&is=6665fecc&hm=66f397420f9e2dd1bb54b42250779aa40bfc228bb4d04d17b290d31332d3ba5c&=&format=webp&quality=lossless&width=701&height=701", likesCount: 14, repostsCount: 5, text: "сегодня 31 февраля, ахахаха, я пошутил, с 1 апреля" },
            { id: 6, nickname: "Абоба", avatarSrc: "https://media.discordapp.net/attachments/890296785329848322/1249441900105170975/300.png?ex=666750f2&is=6665ff72&hm=a1bb5fabf6d376e2af3a8fd9bf818ff5bf7a4d9702a15bcf1f731311ff67f533&=&format=webp&quality=lossless", likesCount: 14, repostsCount: 5, text: "сегодня 31 февраля, ахахаха, я пошутил, с 1 апреля" },
            { id: 7, nickname: "Абобкин кот", avatarSrc: "https://media.discordapp.net/attachments/890296785329848322/1249441901938217000/image.png?ex=666750f2&is=6665ff72&hm=07332e41c0b7f5675ac50f0f40457e4ebc3a6b3cb8858be0a1610d05bdf36764&=&format=webp&quality=lossless", likesCount: 14, repostsCount: 5, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A condimentum vitae sapien pellentesque habitant. Enim ut tellus elementum sagittis. Mattis rhoncus urna neque viverra justo nec ultrices dui. Mus mauris vitae ultricies leo integer malesuada nunc vel risus. Scelerisque varius morbi enim nunc faucibus a. Fermentum iaculis eu non diam phasellus vestibulum lorem sed risus. Augue lacus viverra vitae congue. Sed arcu non odio euismod lacinia. Diam quis enim lobortis scelerisque. Diam phasellus vestibulum lorem sed risus ultricies tristique. Felis eget nunc lobortis mattis aliquam faucibus. Senectus et netus et malesuada fames ac turpis egestas. Vel facilisis volutpat est velit. Neque sodales ut etiam sit. Risus in hendrerit gravida rutrum quisque non tellus. Sit amet tellus cras adipiscing enim eu." },
            { id: 8, nickname: "Lorem Ipsum", avatarSrc: "https://media.discordapp.net/attachments/890296785329848322/1249441902907097208/image.png?ex=666750f3&is=6665ff73&hm=592ff877eb1f4e4486edcffa522181d143ac34c06bd06a88efc8823184cf144f&=&format=webp&quality=lossless&width=712&height=701", likesCount: 14, repostsCount: 5, text: "сегодня 31 февраля, ахахаха, я пошутил, с 1 апреля" },
            { id: 9, nickname: "Шишка сосны", avatarSrc: "https://media.discordapp.net/attachments/890296785329848322/1249442206058811464/image.png?ex=6667513b&is=6665ffbb&hm=2676dceaa0606510a8e38f7f9e0a2446d12621367edb3bcf85c2eb618095862b&=&format=webp&quality=lossless&width=350&height=350", likesCount: 14, repostsCount: 5, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut placerat orci nulla pellentesque. Mi ipsum faucibus vitae aliquet nec ullamcorper. Ipsum dolor sit amet consectetur adipiscing elit." },
            { id: 10, nickname: "Стабилизатор", avatarSrc: "https://media.discordapp.net/attachments/890296785329848322/1249441902260912229/image.png?ex=666750f3&is=6665ff73&hm=d134894370167e73d7a17c2d4c6d4a1105f4bd076a666ee270dabf5f427262e2&=&format=webp&quality=lossless", likesCount: 14, repostsCount: 5, text: "Viverra aliquet eget sit amet tellus cras. Arcu non sodales neque sodales ut etiam sit amet nisl." },
            { id: 11, nickname: "Unknown", avatarSrc: "https://media.discordapp.net/attachments/890296785329848322/1249441901610799144/image.png?ex=666750f2&is=6665ff72&hm=6e7d2125b12236a69f39e06c5f360400ca0a2983058f3166b2d931ad54800b23&=&format=webp&quality=lossless", likesCount: 14, repostsCount: 5, text: "сегодня 31 февраля, ахахаха, я пошутил, с 1 апреля" },
            { id: 12, nickname: "Нагибатор 3000", avatarSrc: "https://media.discordapp.net/attachments/890296785329848322/1249441900403101779/image.png?ex=666750f2&is=6665ff72&hm=31f0782300df69cd1f3aff50bc865eb11f9871c5e76f0a7b1febf5a04e1f0d62&=&format=webp&quality=lossless", likesCount: 14, repostsCount: 5, text: "Posuere lorem ipsum dolor sit amet consectetur adipiscing elit duis. Pretium vulputate sapien nec sagittis aliquam malesuada bibendum. Amet risus nullam eget felis eget nunc lobortis mattis. Magna fringilla urna porttitor rhoncus. Volutpat maecenas volutpat blandit aliquam etiam. Libero id faucibus nisl tincidunt eget nullam non nisi est. Quis varius quam quisque id diam vel. Diam maecenas ultricies mi eget mauris pharetra et. Massa placerat duis ultricies lacus. Tristique magna sit amet purus gravida quis blandit. Felis imperdiet proin fermentum leo vel orci porta. Volutpat diam ut venenatis tellus in metus vulputate eu. Malesuada fames ac turpis egestas integer eget aliquet nibh praesent. Magna etiam tempor orci eu lobortis elementum nibh tellus. Sit amet mauris commodo quis imperdiet massa tincidunt. Enim praesent elementum facilisis leo. Odio morbi quis commodo odio aenean. Leo duis ut diam quam nulla porttitor. Rhoncus urna neque viverra justo nec ultrices dui sapien. Ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim. Gravida cum sociis natoque penatibus et. Dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu. Ipsum dolor sit amet consectetur adipiscing elit duis tristique. Lobortis feugiat vivamus at augue eget." },
            { id: 13, nickname: "пипка", avatarSrc: "https://media.discordapp.net/attachments/890296785329848322/1249441902600916992/image.png?ex=666750f3&is=6665ff73&hm=791310bdb73bdaad2ab06ff813f09c98d2b5681e2a3fec55dba1cdf999cc7928&=&format=webp&quality=lossless", likesCount: 14, repostsCount: 5, text: "сегодня 31 февраля, ахахаха, я пошутил, с 1 апреля" },
            { id: 14, nickname: "домик на холме", avatarSrc: "https://media.discordapp.net/attachments/407488395137384448/1249441186737950750/rns9Hw_Wars.png?ex=66675048&is=6665fec8&hm=ddfba2b6ad14d3756c3559608348b9072e96df10a07981deed8b115fa7552312&=&format=webp&quality=lossless", likesCount: 14, repostsCount: 5, text: "сегодня 31 февраля, ахахаха, я пошутил, с 1 апреля" }
        ],
        profileInfo: [
            {
                id: 1, 
                name: "Никита Валов", 
                status: "youtube: https://youtube.com/@salteinsgameverse", 
                profileBackgroundSrc: "https://images-ext-1.discordapp.net/external/N50yTUt1UCiMsSl9VoxgqwYJk1snfJxJs9Sgug3vm9g/%3Fimw%3D5000%26imh%3D5000%26ima%3Dfit%26impolicy%3DLetterbox%26imcolor%3D%2523000000%26letterbox%3Dfalse/https/steamuserimages-a.akamaihd.net/ugc/2057618192242806109/DA5AA88C0B1317669AFF69422748E62C5EC4F460/?format=webp&width=1246&height=701", 
                avatarSrc: "https://sun2-17.userapi.com/s/v1/ig2/34hZaDU2nPO1mLbjEeMw98F_nOmjQKOP9ieZV5AVs9aCspARppCEy6hpbwbzrpDAJ-EGLXijsxw8Qxza6HjTBdtM.jpg?quality=95&crop=0,114,2332,2332&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,540x540,640x640,720x720,1080x1080,1280x1280,1440x1440&ava=1&u=F-uri_C2q6VsyzwFFVmiaWUESK0DEUTx4R4Qpy_HGUA&cs=200x200",
            }
        ]
    },

    dialogsPage: {
        messageData: [
            { id: 1, text: "aboba" },
            { id: 2, text: "Привчёдел" },
            { id: 3, text: "капуста" },
            { id: 4, text: "))))))" },
            { id: 5, text: "та gjabu, тут в километре от меня бахнула, что даже электромагнитную волну колонки поймали, и через секунду гром громкий" },
            { id: 6, text: "Я уже заебался" },
            { id: 7, text: "Я этот видос делаю с 3 ночи" },
            { id: 8, text: "И перезаливал 4 раза" },
            { id: 9, text: "То он не грузится То он не погружает хотя hd То он с рванной картинкой" },
            { id: 10, text: "Китос извиняюсь за столь ранние звонки" },
            { id: 11, text: "У меня были такие одни и я ими сейчас пользуюсь realme t300, очень хорошие, брал за 2к в сбермаркете, хотя они стоят 4" },
            { id: 12, text: "Китос здарова какие антивирусы хорошие ты знаешь?" },
            { id: 13, text: "Но я вечером расскажу как я поставил кабель питания материнки" },
            { id: 14, text: "Может кабель питания материнки или проца отошел" },
            { id: 15, text: "Было бы прикольно, если они в честь Рубикона сломают асе настолько, что у них оверфлоу произойдет и 11 уровень будет к 1 и 2 кидать" },
            { id: 16, text: "Но там есть коллизия капсулы только и она не двигается если мышку вверх вниз делать, так что это что то ещё Возможно коллизия у пистолета есть, я чёт не проверил" },
            { id: 17, text: '1) Звук перелистывания слишком рывком идёт, лучше подобрать другой или сделать его тише, потому что он и так перебивает музыку  на заднем плане слишком сильно 2) Слово "sensitivity" написано неправильно, лучше тогда "sensitivity", а лучше еще подкинуть опцию переключения языка в настройках как раз, чтобы не париться 3) При запуске игры проигрывается громкий звук нажатия на кнопку (изменения слайдера) 4) При изменении разрешения на 1280x1024, меняется только фон меню, но не сами опции - лучше тогда либо то, либо это сделать статичным' },
            { id: 18, text: "Макс, игра готова для загрузки в Яндекс игры Нужны звуки и какая нибудь простенькая, не надоедливая ритмичная музыка, как в меню геометри деш например" },
            { id: 19, text: "Уточняю: велопрокат, прямо до пераого поворота направо, направо на тот поворот до первого поворота налево, дальше налево на тот поворот и прямо?" },
            { id: 20, text: "Уточняю: велопрокат, прямо до пераого поворота направо, направо на тот поворот до первого поворота налево, дальше налево на тот поворот и прямо?" },
            { id: 21, text: "Уточняю: велопрокат, прямо до пераого поворота направо, направо на тот поворот до первого поворота налево, дальше налево на тот поворот и прямо?" },
            { id: 22, text: "Уточняю: велопрокат, прямо до пераого поворота направо, направо на тот поворот до первого поворота налево, дальше налево на тот поворот и прямо?" },
            { id: 23, text: "Уточняю: велопрокат, прямо до пераого поворота направо, направо на тот поворот до первого поворота налево, дальше налево на тот поворот и прямо?" },
            { id: 24, text: "Уточняю: велопрокат, прямо до пераого поворота направо, направо на тот поворот до первого поворота налево, дальше налево на тот поворот и прямо?" },
            { id: 25, text: "Уточняю: велопрокат, прямо до пераого поворота направо, направо на тот поворот до первого поворота налево, дальше налево на тот поворот и прямо?" },
            { id: 26, text: "Уточняю: велопрокат, прямо до пераого поворота направо, направо на тот поворот до первого поворота налево, дальше налево на тот поворот и прямо?" },
            { id: 27, text: "Уточняю: велопрокат, прямо до пераого поворота направо, направо на тот поворот до первого поворота налево, дальше налево на тот поворот и прямо?" },
            { id: 28, text: "Прощай" },
        ],
        dialogsData: [
            { id: 1, name: "Nikita", srcLink: "" },
            { id: 2, name: "Жижич", srcLink: "" },
            { id: 3, name: "Unknown", srcLink: "" },
            { id: 4, name: "Кошич", srcLink: "" },
            { id: 5, name: "Собаня", srcLink: "" },
            { id: 6, name: "Салоед", srcLink: "" },
            { id: 6, name: "Салоед", srcLink: "" },
            { id: 6, name: "Салоед", srcLink: "" },
            { id: 6, name: "Салоед", srcLink: "" },
            { id: 6, name: "Салоед", srcLink: "" },
            { id: 6, name: "Салоед", srcLink: "" },
            { id: 6, name: "Салоед", srcLink: "" },
            { id: 6, name: "Салоед", srcLink: "" },
            { id: 6, name: "Салоед", srcLink: "" },
            { id: 6, name: "Салоед", srcLink: "" },
            { id: 6, name: "Салоед", srcLink: "" },
            { id: 6, name: "Салоед", srcLink: "" },
            { id: 6, name: "Салоед", srcLink: "" },
            { id: 6, name: "Салоед", srcLink: "" },
            { id: 6, name: "Салоед", srcLink: "" },
            { id: 6, name: "Салоед", srcLink: "" },
            { id: 6, name: "Салоед", srcLink: "" },
            { id: 6, name: "Салоед", srcLink: "" },
            { id: 6, name: "Салоед", srcLink: "" },
            { id: 6, name: "Салоед", srcLink: "" },
            { id: 6, name: "Салоед", srcLink: "" },
            { id: 6, name: "Салоед", srcLink: "" },
            { id: 6, name: "Салоед", srcLink: "" },
            { id: 6, name: "Салоед", srcLink: "" },
            { id: 6, name: "Салоед", srcLink: "" },
            { id: 6, name: "Салоед", srcLink: "" },
            { id: 6, name: "Салоед", srcLink: "" },
            { id: 6, name: "Салоед", srcLink: "" },
            { id: 6, name: "Салоед", srcLink: "" },
            { id: 6, name: "Салоед", srcLink: "" },
            { id: 6, name: "Салоед", srcLink: "" },
            { id: 6, name: "Салоед", srcLink: "" },
            { id: 6, name: "Салоед", srcLink: "" },
            { id: 6, name: "Салоед", srcLink: "" },
            { id: 6, name: "Салоед", srcLink: "" },
            { id: 6, name: "Салоед", srcLink: "" },
            { id: 6, name: "Салоед", srcLink: "" },
            { id: 6, name: "Салоед", srcLink: "" },
            { id: 6, name: "Салоед", srcLink: "" },
        ]
    },

    sidebar: {
        friends: [
            { id: 1, name: "jijka bobra", imgsrc: "https://sun9-83.userapi.com/impg/IpH272nhUhEx52c4AXkLHcQMpdsZsYH1n8p_Ng/W1qdfwqIqn4.jpg?size=1080x1049&quality=95&sign=781d343a4e5337711c3d4177688e6af3&c_uniq_tag=6eEWvFQQErhuNRht6Fy3hTYiYbI5CnqblALaf45tICI&type=album", likesCount: 25, repostsCount: 4, text: "Евгений Александрович Кустолян" },
            { id: 2, name: "bobr kurva", imgsrc: "https://media.discordapp.net/attachments/407488395137384448/1174406044026417222/images.png?ex=66673cdc&is=6665eb5c&hm=b4d07c787c157eaaca10f19af6cfa3fe960ce7dc1e63bd8eec3387cd7645c184&=&format=webp&quality=lossless" },
            { id: 3, name: "just a cat", imgsrc: "https://media.discordapp.net/attachments/407488395137384448/1238564418720370719/840798b9af64c735d9504031f903290e.png?ex=66674b80&is=6665fa00&hm=283566ae43b904a6e07ea89e3015b158ca0d46235a6c73c0efbead5cfd1c6c11&=&format=webp&quality=lossless&width=273&height=350" },
            { id: 4, name: "Жоский крот", imgsrc: "https://media.discordapp.net/attachments/407488395137384448/1249441158116016178/e45e75bc066a95db68e80fb1e9fdc106.png?ex=66675041&is=6665fec1&hm=046616fab50977aa522dd1310141e3d904756041c6f8bdeb904172951e870dd6&=&format=webp&quality=lossless&width=350&height=350" },
            { id: 5, name: "капустыч", imgsrc: "https://media.discordapp.net/attachments/407488395137384448/1249441205369049190/57f2dcaca16abd72a9e814b783e4c9fe.png?ex=6667504c&is=6665fecc&hm=66f397420f9e2dd1bb54b42250779aa40bfc228bb4d04d17b290d31332d3ba5c&=&format=webp&quality=lossless&width=701&height=701" }
        ]
    }
};

export let createPost = (postMessage) => {
    let postsData = state.profilePage.postsData;
    let newPost = {
        id: (postsData.reduce((max, obj) => obj.id > max ? obj.id : max, postsData[0].id) + 1),
        nickname: "Никита Валов",
        avatarSrc: "https://sun9-83.userapi.com/impg/IpH272nhUhEx52c4AXkLHcQMpdsZsYH1n8p_Ng/W1qdfwqIqn4.jpg?size=1080x1049&quality=95&sign=781d343a4e5337711c3d4177688e6af3&c_uniq_tag=6eEWvFQQErhuNRht6Fy3hTYiYbI5CnqblALaf45tICI&type=album",
        likesCount: 0,
        repostsCount: 0,
        text: postMessage
    };
    state.profilePage.postsData.push(newPost);
    rerenderEntireTree(state);
}

export default state;