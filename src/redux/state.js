let state = {
    profilePage: {
        postsData: [
            { id: "1", nickname: "jijka bobra", likesCount: 25, repostsCount: 4, text: "Евгений Александрович Кустолян" },
            { id: "2", nickname: "bobr kurva", likesCount: 12, repostsCount: 0, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
            { id: "3", nickname: "just a cat", likesCount: 3, repostsCount: 1, text: "капуста вкусная" },
            { id: "4", nickname: "Жоский крот", likesCount: 14, repostsCount: 5, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque elit eget gravida cum sociis natoque penatibus et magnis. Posuere morbi leo urna molestie at. Sagittis vitae et leo duis. Nisl tincidunt eget nullam non nisi. Consequat ac felis donec et odio pellentesque. In eu mi bibendum neque egestas congue. Id neque aliquam vestibulum morbi blandit cursus risus. Elementum nibh tellus molestie nunc non blandit massa. Consequat interdum varius sit amet mattis vulputate enim nulla aliquet. Quis lectus nulla at volutpat diam ut venenatis tellus. Nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Viverra maecenas accumsan lacus vel facilisis volutpat est velit. Morbi enim nunc faucibus a pellentesque sit. Massa enim nec dui nunc mattis enim ut. Mi quis hendrerit dolor magna eget. Quam viverra orci sagittis eu. Netus et malesuada fames ac turpis. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. Id volutpat lacus laoreet non curabitur. Tortor vitae purus faucibus ornare suspendisse. Porta non pulvinar neque laoreet suspendisse. Diam quam nulla porttitor massa id neque aliquam vestibulum. Bibendum arcu vitae elementum curabitur vitae. Ut sem viverra aliquet eget sit amet tellus cras. Massa vitae tortor condimentum lacinia quis vel eros donec ac. Turpis in eu mi bibendum neque egestas congue. Rhoncus est pellentesque elit ullamcorper dignissim cras. Magna ac placerat vestibulum lectus mauris ultrices eros. Dui faucibus in ornare quam. Mauris commodo quis imperdiet massa. Amet nisl suscipit adipiscing bibendum est. Sed risus pretium quam vulputate. Adipiscing elit duis tristique sollicitudin nibh sit. Viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat. Massa sapien faucibus et molestie ac feugiat sed. Molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit sed. Molestie at elementum eu facilisis sed. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien. Quisque id diam vel quam elementum pulvinar etiam non. Aliquam faucibus purus in massa. Ut morbi tincidunt augue interdum velit. Pretium nibh ipsum consequat nisl vel pretium. Purus in massa tempor nec feugiat. Lacus luctus accumsan tortor posuere ac ut consequat semper. Eu tincidunt tortor aliquam nulla" },
            { id: "5", nickname: "капустыч", likesCount: 14, repostsCount: 5, text: "сегодня 31 февраля, ахахаха, я пошутил, с 1 апреля" },
            { id: "6", nickname: "Абоба", likesCount: 14, repostsCount: 5, text: "сегодня 31 февраля, ахахаха, я пошутил, с 1 апреля" },
            { id: "7", nickname: "Абобкин кот", likesCount: 14, repostsCount: 5, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A condimentum vitae sapien pellentesque habitant. Enim ut tellus elementum sagittis. Mattis rhoncus urna neque viverra justo nec ultrices dui. Mus mauris vitae ultricies leo integer malesuada nunc vel risus. Scelerisque varius morbi enim nunc faucibus a. Fermentum iaculis eu non diam phasellus vestibulum lorem sed risus. Augue lacus viverra vitae congue. Sed arcu non odio euismod lacinia. Diam quis enim lobortis scelerisque. Diam phasellus vestibulum lorem sed risus ultricies tristique. Felis eget nunc lobortis mattis aliquam faucibus. Senectus et netus et malesuada fames ac turpis egestas. Vel facilisis volutpat est velit. Neque sodales ut etiam sit. Risus in hendrerit gravida rutrum quisque non tellus. Sit amet tellus cras adipiscing enim eu." },
            { id: "8", nickname: "Lorem Ipsum", likesCount: 14, repostsCount: 5, text: "сегодня 31 февраля, ахахаха, я пошутил, с 1 апреля" },
            { id: "9", nickname: "Шишка сосны", likesCount: 14, repostsCount: 5, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut placerat orci nulla pellentesque. Mi ipsum faucibus vitae aliquet nec ullamcorper. Ipsum dolor sit amet consectetur adipiscing elit." },
            { id: "10", nickname: "Стабилизатор", likesCount: 14, repostsCount: 5, text: "Viverra aliquet eget sit amet tellus cras. Arcu non sodales neque sodales ut etiam sit amet nisl." },
            { id: "11", nickname: "Unknown", likesCount: 14, repostsCount: 5, text: "сегодня 31 февраля, ахахаха, я пошутил, с 1 апреля" },
            { id: "12", nickname: "Нагибатор 3000", likesCount: 14, repostsCount: 5, text: "Posuere lorem ipsum dolor sit amet consectetur adipiscing elit duis. Pretium vulputate sapien nec sagittis aliquam malesuada bibendum. Amet risus nullam eget felis eget nunc lobortis mattis. Magna fringilla urna porttitor rhoncus. Volutpat maecenas volutpat blandit aliquam etiam. Libero id faucibus nisl tincidunt eget nullam non nisi est. Quis varius quam quisque id diam vel. Diam maecenas ultricies mi eget mauris pharetra et. Massa placerat duis ultricies lacus. Tristique magna sit amet purus gravida quis blandit. Felis imperdiet proin fermentum leo vel orci porta. Volutpat diam ut venenatis tellus in metus vulputate eu. Malesuada fames ac turpis egestas integer eget aliquet nibh praesent. Magna etiam tempor orci eu lobortis elementum nibh tellus. Sit amet mauris commodo quis imperdiet massa tincidunt. Enim praesent elementum facilisis leo. Odio morbi quis commodo odio aenean. Leo duis ut diam quam nulla porttitor. Rhoncus urna neque viverra justo nec ultrices dui sapien. Ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim. Gravida cum sociis natoque penatibus et. Dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu. Ipsum dolor sit amet consectetur adipiscing elit duis tristique. Lobortis feugiat vivamus at augue eget." },
            { id: "13", nickname: "пипка", likesCount: 14, repostsCount: 5, text: "сегодня 31 февраля, ахахаха, я пошутил, с 1 апреля" },
            { id: "14", nickname: "домик на холме", likesCount: 14, repostsCount: 5, text: "сегодня 31 февраля, ахахаха, я пошутил, с 1 апреля" }
        ],
    },

    dialogsPage: {
        messageData: [
            { id: "1", text: "aboba" },
            { id: "2", text: "Привчёдел" },
            { id: "3", text: "капуста" },
            { id: "4", text: "))))))" },
            { id: "5", text: "жижка" },
        ],
        dialogsData: [
            { id: "1", name: "Nikita", srcLink: "" },
            { id: "2", name: "Жижич", srcLink: "" },
            { id: "3", name: "Unknown", srcLink: "" },
            { id: "4", name: "Кошич", srcLink: "" },
            { id: "5", name: "Собаня", srcLink: "" },
            { id: "6", name: "Салоед", srcLink: "" }
        ]
    },

    sidebar: {
        friends: [
            { id: "1", name: "Nikita", imgsrc: "" },
            { id: "2", name: "Жижич", imgsrc: "" },
            { id: "3", name: "Unknown", imgsrc: "" },
            { id: "4", name: "Кошич", imgsrc: "" },
            { id: "5", name: "Собаня", imgsrc: "" }
        ]
    }
};

export default state;