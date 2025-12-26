"use strict"; 

const express = require("express");
const path = require("path"); 
const app = express();

app.set('view engine', 'ejs');
app.use("/public", express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));


let npb = [
    {   id: 0, year: 2005,series_champ: "ロッテ", series_mvp: "今江敏晃", shoriki: "バレンタイン", sawamura: "杉内俊哉",
        c_pennant: "阪神", c_mvp: "金本知憲", c_avg: "青木宣親", c_hr: "新井貴浩", c_rbi: "今岡誠", c_sb: "赤星憲広", c_obp: "福留孝介", c_win: "下柳剛/黒田博樹", c_era: "三浦大輔", c_win_pct: "安藤優也", c_so: "門倉健/三浦大輔",
        p_pennant: "ロッテ", p_mvp: "杉内俊哉", p_avg: "和田一浩", p_hr: "松中信彦", p_rbi: "松中信彦", p_sb: "西岡剛", p_obp: "松中信彦", p_win: "杉内俊哉", p_era: "杉内俊哉", p_win_pct: "斉藤和巳", p_so: "松坂大輔"
    },
    {   id: 1, year: 2006,series_champ: "日本ハム", series_mvp: "稲葉篤紀", shoriki: "ヒルマン", sawamura: "斉藤和巳",
        c_pennant: "中日", c_mvp: "福留孝介", c_avg: "福留孝介", c_hr: "ウッズ", c_rbi: "ウッズ", c_sb: "青木宣親", c_obp: "福留孝介", c_win: "川上憲伸", c_era: "黒田博樹", c_win_pct: "川上憲伸", c_so: "川上憲伸/井川慶",
        p_pennant: "日本ハム", p_mvp: "小笠原道大", p_avg: "松中信彦", p_hr: "小笠原道大", p_rbi: "カブレラ/小笠原道大", p_sb: "西岡剛", p_obp: "松中信彦", p_win: "斉藤和巳", p_era: "斉藤和巳", p_win_pct: "斉藤和巳", p_so: "斉藤和巳"
    },
    {   id: 2, year: 2007,series_champ: "中日", series_mvp: "中村紀洋", shoriki: "落合博満", sawamura: "ダルビッシュ有",
        c_pennant: "巨人", c_mvp: "小笠原道大", c_avg: "青木宣親", c_hr: "村田修一", c_rbi: "ラミレス", c_sb: "荒木雅博", c_obp: "青木宣親", c_win: "グライシンガー", c_era: "高橋尚成", c_win_pct: "チェン", c_so: "内海哲也",
        p_pennant: "日本ハム", p_mvp: "ダルビッシュ有", p_avg: "稲葉篤紀", p_hr: "山﨑武司", p_rbi: "山﨑武司", p_sb: "片岡易之", p_obp: "稲葉篤紀", p_win: "涌井秀章", p_era: "成瀬善久", p_win_pct: "成瀬善久", p_so: "ダルビッシュ有"
    },
    {   id: 3, year: 2008,series_champ: "西武", series_mvp: "岸孝之", shoriki: "渡辺久信", sawamura: "岩隈久志",
        c_pennant: "巨人", c_mvp: "ラミレス", c_avg: "内川聖一", c_hr: "村田修一", c_rbi: "ラミレス", c_sb: "福地寿樹", c_obp: "内川聖一", c_win: "グライシンガー", c_era: "石川雅規", c_win_pct: "館山昌平", c_so: "ルイス",
        p_pennant: "西武", p_mvp: "岩隈久志", p_avg: "リック", p_hr: "中村剛也", p_rbi: "ローズ", p_sb: "片岡易之", p_obp: "中島裕之", p_win: "岩隈久志", p_era: "岩隈久志", p_win_pct: "岩隈久志", p_so: "杉内俊哉"
    },
    {   id: 4, year: 2009,series_champ: "巨人", series_mvp: "阿部慎之助", shoriki: "原辰徳", sawamura: "涌井秀章",
        c_pennant: "巨人", c_mvp: "ラミレス", c_avg: "ラミレス", c_hr: "ブランコ", c_rbi: "ブランコ", c_sb: "福地寿樹", c_obp: "青木宣親", c_win: "ゴンザレス/館山昌平", c_era: "チェン", c_win_pct: "ゴンザレス", c_so: "ルイス",
        p_pennant: "日本ハム", p_mvp: "ダルビッシュ有", p_avg: "鉄平", p_hr: "中村剛也", p_rbi: "中村剛也", p_sb: "片岡易之/本多雄一", p_obp: "中島裕之", p_win: "涌井秀章", p_era: "ダルビッシュ有", p_win_pct: "ダルビッシュ有", p_so: "杉内俊哉"
    },
    {   id: 5, year: 2010,series_champ: "ロッテ", series_mvp: "今江敏晃", shoriki: "西村徳文", sawamura: "前田健太",
        c_pennant: "中日", c_mvp: "和田一浩", c_avg: "青木宣親", c_hr: "ラミレス", c_rbi: "ラミレス", c_sb: "梵英心", c_obp: "和田一浩", c_win: "前田健太", c_era: "前田健太", c_win_pct: "久保康友", c_so: "前田健太",
        p_pennant: "ソフトバンク", p_mvp: "和田毅", p_avg: "西岡剛", p_hr: "T-岡田", p_rbi: "小谷野栄一", p_sb: "本多雄一/片岡易之", p_obp: "西岡剛", p_win: "和田毅", p_era: "ダルビッシュ有", p_win_pct: "杉内俊哉", p_so: "ダルビッシュ有"
    },
    {   id: 6, year: 2011,series_champ: "ソフトバンク", series_mvp: "小久保裕紀", shoriki: "秋山幸二", sawamura: "田中将大",
        c_pennant: "中日", c_mvp: "浅尾拓也", c_avg: "長野久義", c_hr: "バレンティン", c_rbi: "栗原健太", c_sb: "藤村大介", c_obp: "鳥谷敬", c_win: "吉見一起/内海哲也", c_era: "吉見一起", c_win_pct: "吉見一起", c_so: "前田健太",
        p_pennant: "ソフトバンク", p_mvp: "内川聖一", p_avg: "内川聖一", p_hr: "中村剛也", p_rbi: "中村剛也", p_sb: "本多雄一", p_obp: "糸井嘉男", p_win: "田中将大/ホールトン", p_era: "田中将大", p_win_pct: "田中将大", p_so: "ダルビッシュ有"
    },
    {   id: 7, year: 2012,series_champ: "巨人", series_mvp: "内海哲也", shoriki: "原辰徳", sawamura: "攝津正",
        c_pennant: "巨人", c_mvp: "阿部慎之助", c_avg: "阿部慎之助", c_hr: "バレンティン", c_rbi: "阿部慎之助", c_sb: "大島洋平", c_obp: "阿部慎之助", c_win: "内海哲也", c_era: "前田健太", c_win_pct: "杉内俊哉", c_so: "杉内俊哉/前田健太",
        p_pennant: "日本ハム", p_mvp: "吉川光夫", p_avg: "角中勝也", p_hr: "中村剛也", p_rbi: "李大浩", p_sb: "聖澤諒", p_obp: "糸井嘉男", p_win: "攝津正", p_era: "吉川光夫", p_win_pct: "攝津正", p_so: "田中将大"
    },
    {   id: 8, year: 2013,series_champ: "楽天", series_mvp: "美馬学", shoriki: "星野仙一", sawamura: "田中将大",
        c_pennant: "巨人", c_mvp: "村田修一", c_avg: "ブランコ", c_hr: "バレンティン", c_rbi: "ブランコ", c_sb: "丸佳浩", c_obp: "バレンティン", c_win: "小川泰弘", c_era: "前田健太", c_win_pct: "小川泰弘", c_so: "メッセンジャー",
        p_pennant: "楽天", p_mvp: "田中将大", p_avg: "長谷川勇也", p_hr: "アブレイユ", p_rbi: "浅村栄斗", p_sb: "陽岱鋼", p_obp: "ヘルマン", p_win: "田中将大", p_era: "田中将大", p_win_pct: "田中将大", p_so: "金子千尋"
    },
    {   id: 9, year: 2014,series_champ: "ソフトバンク", series_mvp: "内川聖一", shoriki: "秋山幸二", sawamura: "金子千尋",
        c_pennant: "巨人", c_mvp: "菅野智之", c_avg: "マートン", c_hr: "エルドレッド", c_rbi: "ゴメス", c_sb: "梶谷隆幸", c_obp: "バレンティン", c_win: "メッセンジャー/山井大介", c_era: "菅野智之", c_win_pct: "山井大介", c_so: "メッセンジャー",
        p_pennant: "ソフトバンク", p_mvp: "金子千尋", p_avg: "糸井嘉男", p_hr: "メヒア/中村剛也", p_rbi: "中田翔", p_sb: "西川遥輝", p_obp: "糸井嘉男", p_win: "金子千尋", p_era: "金子千尋", p_win_pct: "金子千尋", p_so: "則本昂大"
    },
    {   id: 10, year: 2015,series_champ: "ソフトバンク", series_mvp: "李大浩", shoriki: "工藤公康", sawamura: "前田健太",
        c_pennant: "ヤクルト", c_mvp: "山田哲人", c_avg: "川端慎吾", c_hr: "山田哲人", c_rbi: "畠山和洋", c_sb: "山田哲人", c_obp: "山田哲人", c_win: "前田健太", c_era: "ジョンソン", c_win_pct: "マイコラス", c_so: "藤浪晋太郎",
        p_pennant: "ソフトバンク", p_mvp: "柳田悠岐", p_avg: "柳田悠岐", p_hr: "中村剛也", p_rbi: "中村剛也", p_sb: "中島卓也", p_obp: "柳田悠岐", p_win: "涌井秀章/大谷翔平", p_era: "大谷翔平", p_win_pct: "大谷翔平", p_so: "則本昂大"
    },
    {   id: 11, year: 2016,series_champ: "日本ハム", series_mvp: "レアード", shoriki: "栗山英樹", sawamura: "ジョンソン",
        c_pennant: "広島", c_mvp: "新井貴浩", c_avg: "坂本勇人", c_hr: "筒香嘉智", c_rbi: "筒香嘉智", c_sb: "山田哲人", c_obp: "坂本勇人", c_win: "野村祐輔", c_era: "菅野智之", c_win_pct: "野村祐輔", c_so: "菅野智之",
        p_pennant: "日本ハム", p_mvp: "大谷翔平", p_avg: "角中勝也", p_hr: "レアード", p_rbi: "中田翔", p_sb: "金子侑司/糸井嘉男", p_obp: "柳田悠岐", p_win: "和田毅", p_era: "石川歩", p_win_pct: "和田毅", p_so: "則本昂大"
    },
    {   id: 12, year: 2017,series_champ: "ソフトバンク", series_mvp: "サファテ", shoriki: "サファテ", sawamura: "菅野智之",
        c_pennant: "広島", c_mvp: "丸佳浩", c_avg: "宮﨑敏郎", c_hr: "ゲレーロ", c_rbi: "ロペス", c_sb: "田中広輔", c_obp: "丸佳浩", c_win: "菅野智之/大瀬良大地", c_era: "菅野智之", c_win_pct: "薮田和樹", c_so: "マイコラス",
        p_pennant: "ソフトバンク", p_mvp: "サファテ", p_avg: "秋山翔吾", p_hr: "デスパイネ", p_rbi: "デスパイネ", p_sb: "西川遥輝", p_obp: "柳田悠岐", p_win: "東浜巨/菊池雄星", p_era: "菊池雄星", p_win_pct: "千賀滉大", p_so: "則本昂大"
    },
    {   id: 13, year: 2018,series_champ: "ソフトバンク", series_mvp: "甲斐拓也", shoriki: "工藤公康", sawamura: "菅野智之",
        c_pennant: "広島", c_mvp: "丸佳浩", c_avg: "ビシエド", c_hr: "ソト", c_rbi: "バレンティン", c_sb: "山田哲人", c_obp: "丸佳浩", c_win: "大瀬良大地/菅野智之", c_era: "菅野智之", c_win_pct: "大瀬良大地", c_so: "菅野智之",
        p_pennant: "西武", p_mvp: "山川穂高", p_avg: "柳田悠岐", p_hr: "山川穂高", p_rbi: "浅村栄斗", p_sb: "西川遥輝", p_obp: "柳田悠岐", p_win: "多和田真三郎", p_era: "岸孝之", p_win_pct: "ボルシンガー", p_so: "則本昂大"
    },
    {   id: 14, year: 2019,series_champ: "ソフトバンク", series_mvp: "グラシアル", shoriki: "工藤公康", sawamura: "該当者なし",
        c_pennant: "巨人", c_mvp: "坂本勇人", c_avg: "鈴木誠也", c_hr: "ソト", c_rbi: "ソト", c_sb: "近本光司", c_obp: "鈴木誠也", c_win: "山口俊", c_era: "大野雄大", c_win_pct: "山口俊", c_so: "山口俊",
        p_pennant: "西武", p_mvp: "森友哉", p_avg: "森友哉", p_hr: "山川穂高", p_rbi: "中村剛也", p_sb: "金子侑司", p_obp: "近藤健介", p_win: "有原航平", p_era: "山本由伸", p_win_pct: "山岡泰輔", p_so: "千賀滉大"
    },
    {   id: 15, year: 2020,series_champ: "ソフトバンク", series_mvp: "栗原陵矢", shoriki: "工藤公康", sawamura: "大野雄大",
        c_pennant: "巨人", c_mvp: "菅野智之", c_avg: "佐野恵太", c_hr: "岡本和真", c_rbi: "岡本和真", c_sb: "近本光司", c_obp: "村上宗隆", c_win: "菅野智之", c_era: "大野雄大", c_win_pct: "菅野智之", c_so: "大野雄大",
        p_pennant: "ソフトバンク", p_mvp: "柳田悠岐", p_avg: "吉田正尚", p_hr: "浅村栄斗", p_rbi: "中田翔", p_sb: "周東佑京", p_obp: "近藤健介", p_win: "石川柊太/涌井秀章/千賀滉大", p_era: "千賀滉大", p_win_pct: "石川柊太", p_so: "千賀滉大/山本由伸"
    },
    {   id: 16, year: 2021,series_champ: "ヤクルト", series_mvp: "中村悠平", shoriki: "高津臣吾", sawamura: "山本由伸",
        c_pennant: "ヤクルト", c_mvp: "村上宗隆", c_avg: "鈴木誠也", c_hr: "村上宗隆/岡本和真", c_rbi: "岡本和真", c_sb: "中野拓夢", c_obp: "鈴木誠也", c_win: "青柳晃洋/九里亜蓮", c_era: "柳裕也", c_win_pct: "青柳晃洋", c_so: "柳裕也",
        p_pennant: "オリックス", p_mvp: "山本由伸", p_avg: "吉田正尚", p_hr: "杉本裕太郎", p_rbi: "島内宏明", p_sb: "和田康士朗/荻野貴司/西川遥輝/源田壮亮", p_obp: "吉田正尚", p_win: "山本由伸", p_era: "山本由伸", p_win_pct: "山本由伸", p_so: "山本由伸"
    },
    {   id: 17, year: 2022,series_champ: "オリックス", series_mvp: "杉本裕太郎", shoriki: "中嶋聡", sawamura: "山本由伸",
        c_pennant: "ヤクルト", c_mvp: "村上宗隆", c_avg: "村上宗隆", c_hr: "村上宗隆", c_rbi: "村上宗隆", c_sb: "近本光司", c_obp: "村上宗隆", c_win: "青柳晃洋", c_era: "青柳晃洋", c_win_pct: "青柳晃洋", c_so: "戸郷翔征",
        p_pennant: "オリックス", p_mvp: "山本由伸", p_avg: "松本剛", p_hr: "山川穂高", p_rbi: "山川穂高", p_sb: "髙部瑛斗", p_obp: "吉田正尚", p_win: "山本由伸", p_era: "山本由伸", p_win_pct: "山本由伸", p_so: "山本由伸"
    },
    {   id: 18, year: 2023,series_champ: "阪神", series_mvp: "近本光司", shoriki: "岡田彰布", sawamura: "山本由伸",
        c_pennant: "阪神", c_mvp: "村上頌樹", c_avg: "宮﨑敏郎", c_hr: "岡本和真", c_rbi: "牧秀悟", c_sb: "近本光司", c_obp: "大山悠輔", c_win: "東克樹", c_era: "村上頌樹", c_win_pct: "東克樹", c_so: "今永昇太",
        p_pennant: "オリックス", p_mvp: "山本由伸", p_avg: "頓宮裕真", p_hr: "近藤健介/ポランコ/浅村栄斗", p_rbi: "近藤健介", p_sb: "周東佑京/小深田大翔", p_obp: "近藤健介", p_win: "山本由伸", p_era: "山本由伸", p_win_pct: "山本由伸", p_so: "山本由伸"
    },
    {   id: 19, year: 2024,series_champ: "DeNA", series_mvp: "桑原将志", shoriki: "三浦大輔", sawamura: "該当者なし",
        c_pennant: "巨人", c_mvp: "菅野智之", c_avg: "オースティン", c_hr: "村上宗隆", c_rbi: "村上宗隆", c_sb: "近本光司", c_obp: "サンタナ", c_win: "菅野智之", c_era: "高橋宏斗", c_win_pct: "菅野智之", c_so: "戸郷翔征",
        p_pennant: "ソフトバンク", p_mvp: "近藤健介", p_avg: "近藤健介", p_hr: "山川穂高", p_rbi: "山川穂高", p_sb: "周東佑京", p_obp: "近藤健介", p_win: "伊藤大海/有原航平", p_era: "モイネロ", p_win_pct: "伊藤大海", p_so: "今井達也"
    },
    {   id: 20, year: 2025,series_champ: "ソフトバンク", series_mvp: "山川穂高", shoriki: "小久保裕紀", sawamura: "伊藤大海",
        c_pennant: "阪神", c_mvp: "佐藤輝明", c_avg: "小園海斗", c_hr: "佐藤輝明", c_rbi: "佐藤輝明", c_sb: "近本光司", c_obp: "小園海斗", c_win: "村上頌樹/東克樹", c_era: "才木浩人", c_win_pct: "村上頌樹", c_so: "村上頌樹",
        p_pennant: "ソフトバンク", p_mvp: "モイネロ", p_avg: "牧原大成", p_hr: "レイエス", p_rbi: "レイエス", p_sb: "周東佑京", p_obp: "柳町達", p_win: "有原航平/伊藤大海", p_era: "モイネロ", p_win_pct: "モイネロ", p_so: "伊藤大海"
    },
];

npb.sort((a, b) => a.id - b.id);

app.get("/baseball", (req, res) => {
  res.render('baseball', {data: npb} );
});

app.get("/baseball/create", (req, res) => {
  res.sendFile(path.join(__dirname, "baseball.html"));
});

app.get("/baseball/:number", (req, res) => {
  const number = req.params.number;
  const detail = npb[ number ];
  res.render('baseball_detail', {id: number, data: detail} );
});

app.get("/baseball/delete/:number", (req, res) => {
  npb.splice( req.params.number, 1 );
  res.redirect('/baseball'); 
});

app.post("/baseball", (req, res) => {
  const id = npb.length > 0 ? npb[npb.length - 1].id + 1 : 1;
  const { year, series_champ, series_mvp, shoriki, sawamura, c_pennant, c_mvp, c_avg, c_hr, c_rbi, c_sb, c_obp, c_win, c_era, c_win_pct, c_so, p_pennant, p_mvp, p_avg, p_hr, p_rbi, p_sb, p_obp, p_win, p_era, p_win_pct, p_so } = req.body;
  
  npb.push( { id, year, series_champ, series_mvp, shoriki, sawamura, c_pennant, c_mvp, c_avg, c_hr, c_rbi, c_sb, c_obp, c_win, c_era, c_win_pct, c_so, p_pennant, p_mvp, p_avg, p_hr, p_rbi, p_sb, p_obp, p_win, p_era, p_win_pct, p_so } );
  res.redirect('/baseball');
});

app.get("/baseball/edit/:number", (req, res) => {
  const number = req.params.number;
  const detail = npb[ number ];
  res.render('baseball_edit', {id: number, data: detail} );
});
app.post("/baseball/update/:number", (req, res) => {
  const n = req.params.number;
  if (npb[n]) {
    npb[n].year = req.body.year;
    npb[n].series_champ = req.body.series_champ;
    npb[n].series_mvp = req.body.series_mvp;
    npb[n].shoriki = req.body.shoriki;
    npb[n].sawamura = req.body.sawamura;
    npb[n].c_pennant = req.body.c_pennant;
    npb[n].c_mvp = req.body.c_mvp;
    npb[n].c_avg = req.body.c_avg;
    npb[n].c_hr = req.body.c_hr;
    npb[n].c_rbi = req.body.c_rbi;
    npb[n].c_sb = req.body.c_sb;
    npb[n].c_obp = req.body.c_obp;
    npb[n].c_win = req.body.c_win;
    npb[n].c_era = req.body.c_era;
    npb[n].c_win_pct = req.body.c_win_pct;
    npb[n].c_so = req.body.c_so;
    npb[n].p_pennant = req.body.p_pennant;
    npb[n].p_mvp = req.body.p_mvp;
    npb[n].p_avg = req.body.p_avg;
    npb[n].p_hr = req.body.p_hr;
    npb[n].p_rbi = req.body.p_rbi;
    npb[n].p_sb = req.body.p_sb;
    npb[n].p_obp = req.body.p_obp;
    npb[n].p_win = req.body.p_win;
    npb[n].p_era = req.body.p_era;
    npb[n].p_win_pct = req.body.p_win_pct;
    npb[n].p_so = req.body.p_so;
  }
  res.redirect('/baseball'); 
});

app.listen(8080, () => console.log("Example app listening on port 8080!"));