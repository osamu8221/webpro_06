// 提出課題
"use strict"; 

const express = require("express");
const path = require("path"); 
const app = express();

app.set('view engine', 'ejs');
app.use("/public", express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));


let tennis = [
    // --- 全豪オープン (Australian Open) ---
    { id: 0, year: 2005, name: "全豪オープン", champion: "サフィン", semi: "ヒューイット", venue: "オーストラリア", date: "1月", surface: "ハード", prize: "120万6620豪ドル" },
    { id: 4, year: 2006, name: "全豪オープン", champion: "フェデラー", semi: "バグダティス", venue: "オーストラリア", date: "1月", surface: "ハード", prize: "122万豪ドル" },
    { id: 8, year: 2007, name: "全豪オープン", champion: "フェデラー", semi: "ゴンサレス", venue: "オーストラリア", date: "1月", surface: "ハード", prize: "128万1000豪ドル" },
    { id: 12, year: 2008, name: "全豪オープン", champion: "ジョコビッチ", semi: "ツォンガ", venue: "オーストラリア", date: "1月", surface: "ハード", prize: "137万豪ドル" },
    { id: 16, year: 2009, name: "全豪オープン", champion: "ナダル", semi: "フェデラー", venue: "オーストラリア", date: "1月", surface: "ハード", prize: "200万豪ドル" },
    { id: 20, year: 2010, name: "全豪オープン", champion: "フェデラー", semi: "マレー", venue: "オーストラリア", date: "1月", surface: "ハード", prize: "210万豪ドル" },
    { id: 24, year: 2011, name: "全豪オープン", champion: "ジョコビッチ", semi: "マレー", venue: "オーストラリア", date: "1月", surface: "ハード", prize: "220万豪ドル" },
    { id: 28, year: 2012, name: "全豪オープン", champion: "ジョコビッチ", semi: "ナダル", venue: "オーストラリア", date: "1月", surface: "ハード", prize: "230万豪ドル" },
    { id: 32, year: 2013, name: "全豪オープン", champion: "ジョコビッチ", semi: "マレー", venue: "オーストラリア", date: "1月", surface: "ハード", prize: "243万豪ドル" },
    { id: 36, year: 2014, name: "全豪オープン", champion: "ワウリンカ", semi: "ナダル", venue: "オーストラリア", date: "1月", surface: "ハード", prize: "265万豪ドル" },
    { id: 40, year: 2015, name: "全豪オープン", champion: "ジョコビッチ", semi: "マレー", venue: "オーストラリア", date: "1月", surface: "ハード", prize: "310万豪ドル" },
    { id: 44, year: 2016, name: "全豪オープン", champion: "ジョコビッチ", semi: "マレー", venue: "オーストラリア", date: "1月", surface: "ハード", prize: "340万豪ドル" },
    { id: 48, year: 2017, name: "全豪オープン", champion: "フェデラー", semi: "ナダル", venue: "オーストラリア", date: "1月", surface: "ハード", prize: "370万豪ドル" },
    { id: 52, year: 2018, name: "全豪オープン", champion: "フェデラー", semi: "チリッチ", venue: "オーストラリア", date: "1月", surface: "ハード", prize: "400万豪ドル" },
    { id: 56, year: 2019, name: "全豪オープン", champion: "ジョコビッチ", semi: "ナダル", venue: "オーストラリア", date: "1月", surface: "ハード", prize: "410万豪ドル" },
    { id: 60, year: 2020, name: "全豪オープン", champion: "ジョコビッチ", semi: "ティーム", venue: "オーストラリア", date: "1月", surface: "ハード", prize: "412万豪ドル" },
    { id: 64, year: 2021, name: "全豪オープン", champion: "ジョコビッチ", semi: "メドベージェフ", venue: "オーストラリア", date: "2月", surface: "ハード", prize: "275万豪ドル" },
    { id: 68, year: 2022, name: "全豪オープン", champion: "ナダル", semi: "メドベージェフ", venue: "オーストラリア", date: "1月", surface: "ハード", prize: "287万5000豪ドル" },
    { id: 72, year: 2023, name: "全豪オープン", champion: "ジョコビッチ", semi: "チチパス", venue: "オーストラリア", date: "1月", surface: "ハード", prize: "297万5000豪ドル" },
    { id: 76, year: 2024, name: "全豪オープン", champion: "シナー", semi: "メドベージェフ", venue: "オーストラリア", date: "1月", surface: "ハード", prize: "315万豪ドル" },
    { id: 80, year: 2025, name: "全豪オープン", champion: "シナー", semi: "ズベレフ", venue: "オーストラリア", date: "1月", surface: "ハード", prize: "350万豪ドル" },

    // --- 全仏オープン (French Open / Roland Garros) ---
    { id: 1, year: 2005, name: "全仏オープン", champion: "ナダル", semi: "プエルタ", venue: "フランス", date: "5月", surface: "クレー", prize: "88万ユーロ" },
    { id: 5, year: 2006, name: "全仏オープン", champion: "ナダル", semi: "フェデラー", venue: "フランス", date: "5月", surface: "クレー", prize: "94万ユーロ" },
    { id: 9, year: 2007, name: "全仏オープン", champion: "ナダル", semi: "フェデラー", venue: "フランス", date: "5月", surface: "クレー", prize: "100万ユーロ" },
    { id: 13, year: 2008, name: "全仏オープン", champion: "ナダル", semi: "フェデラー", venue: "フランス", date: "5月", surface: "クレー", prize: "100万ユーロ" },
    { id: 17, year: 2009, name: "全仏オープン", champion: "フェデラー", semi: "ソダーリング", venue: "フランス", date: "5月", surface: "クレー", prize: "106万ユーロ" },
    { id: 21, year: 2010, name: "全仏オープン", champion: "ナダル", semi: "ソダーリング", venue: "フランス", date: "5月", surface: "クレー", prize: "112万ユーロ" },
    { id: 25, year: 2011, name: "全仏オープン", champion: "ナダル", semi: "フェデラー", venue: "フランス", date: "5月", surface: "クレー", prize: "120万ユーロ" },
    { id: 29, year: 2012, name: "全仏オープン", champion: "ナダル", semi: "ジョコビッチ", venue: "フランス", date: "5月", surface: "クレー", prize: "125万ユーロ" },
    { id: 33, year: 2013, name: "全仏オープン", champion: "ナダル", semi: "フェレール", venue: "フランス", date: "5月", surface: "クレー", prize: "150万ユーロ" },
    { id: 37, year: 2014, name: "全仏オープン", champion: "ナダル", semi: "ジョコビッチ", venue: "フランス", date: "5月", surface: "クレー", prize: "165万ユーロ" },
    { id: 41, year: 2015, name: "全仏オープン", champion: "ワウリンカ", semi: "ジョコビッチ", venue: "フランス", date: "5月", surface: "クレー", prize: "180万ユーロ" },
    { id: 45, year: 2016, name: "全仏オープン", champion: "ジョコビッチ", semi: "マレー", venue: "フランス", date: "5月", surface: "クレー", prize: "200万ユーロ" },
    { id: 49, year: 2017, name: "全仏オープン", champion: "ナダル", semi: "ワウリンカ", venue: "フランス", date: "5月", surface: "クレー", prize: "210万ユーロ" },
    { id: 53, year: 2018, name: "全仏オープン", champion: "ナダル", semi: "ティーム", venue: "フランス", date: "5月", surface: "クレー", prize: "220万ユーロ" },
    { id: 57, year: 2019, name: "全仏オープン", champion: "ナダル", semi: "ティーム", venue: "フランス", date: "5月", surface: "クレー", prize: "230万ユーロ" },
    { id: 61, year: 2020, name: "全仏オープン", champion: "ナダル", semi: "ジョコビッチ", venue: "フランス", date: "9月", surface: "クレー", prize: "160万ユーロ" },
    { id: 65, year: 2021, name: "全仏オープン", champion: "ジョコビッチ", semi: "チチパス", venue: "フランス", date: "5月", surface: "クレー", prize: "140万ユーロ" },
    { id: 69, year: 2022, name: "全仏オープン", champion: "ナダル", semi: "ルード", venue: "フランス", date: "5月", surface: "クレー", prize: "220万ユーロ" },
    { id: 73, year: 2023, name: "全仏オープン", champion: "ジョコビッチ", semi: "ルード", venue: "フランス", date: "5月", surface: "クレー", prize: "230万ユーロ" },
    { id: 77, year: 2024, name: "全仏オープン", champion: "アルカラス", semi: "ズベレフ", venue: "フランス", date: "5月", surface: "クレー", prize: "240万ユーロ" },
    { id: 81, year: 2025, name: "全仏オープン", champion: "アルカラス", semi: "シナー", venue: "フランス", date: "5月", surface: "クレー", prize: "255万ユーロ" },

    // --- ウィンブルドン (Wimbledon) ---
    { id: 2, year: 2005, name: "ウィンブルドン", champion: "フェデラー", semi: "ロディック", venue: "イギリス", date: "6月", surface: "グラス", prize: "63万ポンド" },
    { id: 6, year: 2006, name: "ウィンブルドン", champion: "フェデラー", semi: "ナダル", venue: "イギリス", date: "6月", surface: "グラス", prize: "65万5000ポンド" },
    { id: 10, year: 2007, name: "ウィンブルドン", champion: "フェデラー", semi: "ナダル", venue: "イギリス", date: "6月", surface: "グラス", prize: "70万ポンド" },
    { id: 14, year: 2008, name: "ウィンブルドン", champion: "ナダル", semi: "フェデラー", venue: "イギリス", date: "6月", surface: "グラス", prize: "75万ポンド" },
    { id: 18, year: 2009, name: "ウィンブルドン", champion: "フェデラー", semi: "ロディック", venue: "イギリス", date: "6月", surface: "グラス", prize: "85万ポンド" },
    { id: 22, year: 2010, name: "ウィンブルドン", champion: "ナダル", semi: "ベルディハ", venue: "イギリス", date: "6月", surface: "グラス", prize: "100万ポンド" },
    { id: 26, year: 2011, name: "ウィンブルドン", champion: "ジョコビッチ", semi: "ナダル", venue: "イギリス", date: "6月", surface: "グラス", prize: "110万ポンド" },
    { id: 30, year: 2012, name: "ウィンブルドン", champion: "フェデラー", semi: "マレー", venue: "イギリス", date: "6月", surface: "グラス", prize: "115万ポンド" },
    { id: 34, year: 2013, name: "ウィンブルドン", champion: "マレー", semi: "ジョコビッチ", venue: "イギリス", date: "6月", surface: "グラス", prize: "160万ポンド" },
    { id: 38, year: 2014, name: "ウィンブルドン", champion: "ジョコビッチ", semi: "フェデラー", venue: "イギリス", date: "6月", surface: "グラス", prize: "176万ポンド" },
    { id: 42, year: 2015, name: "ウィンブルドン", champion: "ジョコビッチ", semi: "フェデラー", venue: "イギリス", date: "6月", surface: "グラス", prize: "188万ポンド" },
    { id: 46, year: 2016, name: "ウィンブルドン", champion: "マレー", semi: "ラオニッチ", venue: "イギリス", date: "6月", surface: "グラス", prize: "200万ポンド" },
    { id: 50, year: 2017, name: "ウィンブルドン", champion: "フェデラー", semi: "チリッチ", venue: "イギリス", date: "6月", surface: "グラス", prize: "220万ポンド" },
    { id: 54, year: 2018, name: "ウィンブルドン", champion: "ジョコビッチ", semi: "アンダーソン", venue: "イギリス", date: "7月", surface: "グラス", prize: "225万ポンド" },
    { id: 58, year: 2019, name: "ウィンブルドン", champion: "ジョコビッチ", semi: "フェデラー", venue: "イギリス", date: "7月", surface: "グラス", prize: "235万ポンド" },
    { id: 62, year: 2020, name: "ウィンブルドン", champion: "開催中止", semi: "---", venue: "イギリス", date: "---", surface: "グラス", prize: "0ポンド" },
    { id: 66, year: 2021, name: "ウィンブルドン", champion: "ジョコビッチ", semi: "ベレッティーニ", venue: "イギリス", date: "6月", surface: "グラス", prize: "170万ポンド" },
    { id: 70, year: 2022, name: "ウィンブルドン", champion: "ジョコビッチ", semi: "キリオス", venue: "イギリス", date: "6月", surface: "グラス", prize: "200万ポンド" },
    { id: 74, year: 2023, name: "ウィンブルドン", champion: "アルカラス", semi: "ジョコビッチ", venue: "イギリス", date: "7月", surface: "グラス", prize: "235万ポンド" },
    { id: 78, year: 2024, name: "ウィンブルドン", champion: "アルカラス", semi: "ジョコビッチ", venue: "イギリス", date: "7月", surface: "グラス", prize: "270万ポンド" },
    { id: 82, year: 2025, name: "ウィンブルドン", champion: "シナー", semi: "アルカラス", venue: "イギリス", date: "7月", surface: "グラス", prize: "300万ポンド" },

    // --- 全米オープン (US Open) ---
    { id: 3, year: 2005, name: "全米オープン", champion: "フェデラー", semi: "アガシ", venue: "アメリカ", date: "8月", surface: "ハード", prize: "110万ドル" },
    { id: 7, year: 2006, name: "全米オープン", champion: "フェデラー", semi: "ロディック", venue: "アメリカ", date: "8月", surface: "ハード", prize: "120万ドル" },
    { id: 11, year: 2007, name: "全米オープン", champion: "フェデラー", semi: "ジョコビッチ", venue: "アメリカ", date: "8月", surface: "ハード", prize: "140万ドル" },
    { id: 15, year: 2008, name: "全米オープン", champion: "フェデラー", semi: "マレー", venue: "アメリカ", date: "8月", surface: "ハード", prize: "150万ドル" },
    { id: 19, year: 2009, name: "全米オープン", champion: "デルポトロ", semi: "フェデラー", venue: "アメリカ", date: "8月", surface: "ハード", prize: "160万ドル" },
    { id: 23, year: 2010, name: "全米オープン", champion: "ナダル", semi: "ジョコビッチ", venue: "アメリカ", date: "8月", surface: "ハード", prize: "170万ドル" },
    { id: 27, year: 2011, name: "全米オープン", champion: "ジョコビッチ", semi: "ナダル", venue: "アメリカ", date: "8月", surface: "ハード", prize: "180万ドル" },
    { id: 31, year: 2012, name: "全米オープン", champion: "マレー", semi: "ジョコビッチ", venue: "アメリカ", date: "8月", surface: "ハード", prize: "190万ドル" },
    { id: 35, year: 2013, name: "全米オープン", champion: "ナダル", semi: "ジョコビッチ", venue: "アメリカ", date: "8月", surface: "ハード", prize: "260万ドル" },
    { id: 39, year: 2014, name: "全米オープン", champion: "チリッチ", semi: "錦織圭", venue: "アメリカ", date: "8月", surface: "ハード", prize: "300万ドル" },
    { id: 43, year: 2015, name: "全米オープン", champion: "ジョコビッチ", semi: "フェデラー", venue: "アメリカ", date: "8月", surface: "ハード", prize: "330万ドル" },
    { id: 47, year: 2016, name: "全米オープン", champion: "ワウリンカ", semi: "ジョコビッチ", venue: "アメリカ", date: "8月", surface: "ハード", prize: "350万ドル" },
    { id: 51, year: 2017, name: "全米オープン", champion: "ナダル", semi: "アンダーソン", venue: "アメリカ", date: "8月", surface: "ハード", prize: "370万ドル" },
    { id: 55, year: 2018, name: "全米オープン", champion: "ジョコビッチ", semi: "デルポトロ", venue: "アメリカ", date: "8月", surface: "ハード", prize: "380万ドル" },
    { id: 59, year: 2019, name: "全米オープン", champion: "ナダル", semi: "メドベージェフ", venue: "アメリカ", date: "8月", surface: "ハード", prize: "385万ドル" },
    { id: 63, year: 2020, name: "全米オープン", champion: "ティーム", semi: "ズベレフ", venue: "アメリカ", date: "8月", surface: "ハード", prize: "300万ドル" },
    { id: 67, year: 2021, name: "全米オープン", champion: "メドベージェフ", semi: "ジョコビッチ", venue: "アメリカ", date: "8月", surface: "ハード", prize: "250万ドル" },
    { id: 71, year: 2022, name: "全米オープン", champion: "アルカラス", semi: "ルード", venue: "アメリカ", date: "8月", surface: "ハード", prize: "260万ドル" },
    { id: 75, year: 2023, name: "全米オープン", champion: "ジョコビッチ", semi: "メドベージェフ", venue: "アメリカ", date: "8月", surface: "ハード", prize: "300万ドル" },
    { id: 79, year: 2024, name: "全米オープン", champion: "シナー", semi: "フリッツ", venue: "アメリカ", date: "8月", surface: "ハード", prize: "360万ドル" },
    { id: 83, year: 2025, name: "全米オープン", champion: "アルカラス", semi: "シナー", venue: "アメリカ", date: "8月", surface: "ハード", prize: "500万ドル" },
];
tennis.sort((a, b) => a.id - b.id);

app.get("/tennis", (req, res) => {
  res.render('tennis', {data: tennis} );
});


app.get("/tennis/create", (req, res) => {
  res.sendFile(path.join(__dirname, "tennis.html"));
});


app.get("/tennis/:number", (req, res) => {
  const number = req.params.number;
  const detail = tennis[ number ];
  res.render('tennis_detail', {id: number, data: detail} );
});


app.get("/tennis/delete/:number", (req, res) => {
  tennis.splice( req.params.number, 1 );
  res.redirect('/tennis'); 
});


app.post("/tennis", (req, res) => {
  const id = tennis.length > 0 ? tennis[tennis.length - 1].id + 1 : 1;
  const { year, name, champion, semi, venue, date, surface, prize } = req.body;
  
  tennis.push( { id, year, name, champion, semi, venue, date, surface, prize } );
  res.redirect('/tennis');
});

app.get("/tennis/edit/:number", (req, res) => {
  const number = req.params.number;
  const detail = tennis[ number ];
  res.render('tennis_edit', {id: number, data: detail} );
});
 

app.post("/tennis/update/:number", (req, res) => {
  const n = req.params.number;
  if (tennis[n]) {
    tennis[n].year = req.body.year;
    tennis[n].name = req.body.name;
    tennis[n].champion = req.body.champion;
    tennis[n].semi = req.body.semi;
    tennis[n].venue = req.body.venue;
    tennis[n].date = req.body.date;
    tennis[n].surface = req.body.surface;
    tennis[n].prize = req.body.prize;
  }
  res.redirect('/tennis'); 
});

app.listen(8080, () => console.log("Example app listening on port 8080!"));