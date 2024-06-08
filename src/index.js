import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogsData = [
  { id: "1", name: "Nikita", srcLink: "" },
  { id: "2", name: "Жижич", srcLink: "" },
  { id: "3", name: "Unknown", srcLink: "" },
  { id: "4", name: "Кошич", srcLink: "" },
  { id: "5", name: "Собаня", srcLink: "" },
  { id: "6", name: "Салоед", srcLink: "" }
];

let messageData = [
  { id: "1", text: "aboba" },
  { id: "2", text: "Привчёдел" },
  { id: "3", text: "капуста" },
  { id: "4", text: "))))))" },
  { id: "5", text: "жижка" },
]

let postsData = [
  { id: "1", nickname: "jijka bobra", likesCount: 25, repostsCount: 4, text: "Евгений Александрович Кустолян" },
  { id: "2", nickname: "bobr kurva", likesCount: 12, repostsCount: 0, text: "Амогус как так" },
  { id: "3", nickname: "just a cat", likesCount: 3, repostsCount: 1, text: "капуста вкусная" },
  { id: "4", nickname: "Жоский крот", likesCount: 14, repostsCount: 5, text: "сегодня 31 февраля, ахахаха, я пошутил, с 1 апреля" },
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App dialogsData={dialogsData} messageData={messageData} postsData={postsData} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
