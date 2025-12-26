// 提出課題
"use strict"; 

const express = require("express");
const path = require("path"); 
const app = express();

app.set('view engine', 'ejs');
app.use("/public", express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));


let GT = [
  { id:1, code:"2005", team:"ZENT cerumo supra", driver:"立川祐路 / 高木虎之介", maker:"TOYOTA",time:3, point:67 },
  { id:2, code:"2006", team:"OPEN INTERFACE TOM'S SC430", driver:"脇阪寿一 / A.ロッテラー",maker:"TOYOTA", time:1, point:80 },
  { id:3, code:"2007", team:"ARTA NSX", driver:"伊藤大輔 / R.ファーマン", maker:"HONDA",time:3, point:94 },
  { id:4, code:"2008", team:"XANAVI NISMO GT-R", driver:"本山哲 / B.トレルイエ",maker:"NISSAN", time:3,point:76 },
  { id:5, code:"2009", team:"PETRONAS TOM'S SC430", driver:"脇阪寿一/A.ロッテラー",maker:"TOYOTA", time:1, point:88 },
  { id:6, code:"2010", team:"ウイダー HSV-010", driver:"小暮卓史/ロイック・デュバル",maker:"HONDA", time:1, point:67 },
  { id:7, code:"2011", team:"S Road MOLA GT-R", driver:"柳田 真孝 / ロニー クインタレッリ",maker:"NISSAN", time:1, point:90 },
  { id:8, code:"2012", team:"S Road REITO MOLA GT-R", driver:"柳田 真孝 / ロニー クインタレッリ",maker:"NISSAN", time:2, point:93 },
  { id:9, code:"2013", team:"ZENT CERUMO SC430", driver:"立川 祐路 / 平手 晃平",maker:"TOYOTA", time:1, point:69 },
  { id:10, code:"2014", team:"MOTUL AUTECH GT-R", driver:"松田 次生 / ロニー クインタレッリ",maker:"NISSAN", time:2, point:81 },
  { id:11, code:"2015", team:"MOTUL AUTECH GT-R", driver:"松田 次生 / ロニー クインタレッリ",maker:"NISSAN", time:2, point:79 },
  { id:12, code:"2016", team:"DENSO KOBELCO SARD RC F", driver:"ヘイキ コバライネン / 平手 晃平",maker:"NISSAN", time:1, point:82 },
  { id:13, code:"2017", team:"KeePer TOM’S LC500", driver:"平川 亮 / ニック キャシディ",maker:"TOYOTA", time:2, point:84 },
  { id:14, code:"2018", team:"RAYBRIG NSX-GT", driver:"山本 尚貴 / ジェンソン バトン",maker:"HONDA", time:1, point:78 },
  { id:15, code:"2019", team:"WAKO’S 4CR LC500", driver:"大嶋 和也 / 山下 健太",maker:"TOYOTA", time:2, point:85 },
  { id:16, code:"2020", team:"RAYBRIG NSX-GT", driver:"山本 尚貴 / 牧野 任祐",maker:"HONDA", time:1, point:69 },
  { id:17, code:"2021", team:"au TOM’S GR Supra", driver:"関口 雄飛 / 坪井 翔",maker:"TOYOTA", time:1, point:64 },
  { id:18, code:"2022", team:"カルソニック IMPUL Z", driver:"平峰 一貴 / ベルトラン バゲット",maker:"NISSAN", time:1, point:70.5 },
  { id:19, code:"2023", team:"au TOM’S GR Supra", driver:"坪井 翔 / 宮田 莉朋",maker:"TOYOTA", time:3, point:89 },
  { id:20, code:"2024", team:"au TOM’S GR Supra", driver:"坪井 翔/山下 健太",maker:"TOYOTA", time:3, point:97 },
  { id:21, code:"2025", team:"au TOM’S GR Supra", driver:"坪井 翔/山下 健太",maker:"TOYOTA", time:3, point:80.5 },
];


app.get("/gt", (req, res) => {
  res.render('gt', {data: GT} );
});


app.get("/gt/create", (req, res) => {
  res.sendFile(path.join(__dirname, "gt.html"));
});


app.get("/gt/:number", (req, res) => {
  const number = req.params.number;
  const detail = GT[ number ];
  res.render('gt_detail', {id: number, data: detail} );
});


app.get("/gt/delete/:number", (req, res) => {
  GT.splice( req.params.number, 1 );
  res.redirect('/gt'); 
});


app.post("/gt", (req, res) => {
  const id = GT.length > 0 ? GT[GT.length - 1].id + 1 : 1;
  const { code, team, driver, time, point, maker } = req.body;
  
  GT.push( { id, code, team, driver, time, point, maker } );
  res.redirect('/gt');
});


app.get("/gt/edit/:number", (req, res) => {
  const number = req.params.number;
  const detail = GT[ number ];
  res.render('gt_edit', {id: number, data: detail} );
});


app.post("/gt/update/:number", (req, res) => {
  const n = req.params.number;
  if (GT[n]) {
    GT[n].code = req.body.code;
    GT[n].team = req.body.team;
    GT[n].driver = req.body.driver;
    GT[n].time = req.body.time;
    GT[n].point = req.body.point;
    GT[n].maker = req.body.maker;
  }
  res.redirect('/gt'); 
});

app.listen(8080, () => console.log("Example app listening on port 8080!"));