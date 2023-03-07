// ==UserScript==
// @name         Google Snake Mod Loader (Dev)
// @namespace    https://github.com/DarkSnakeGang
// @version      1.0.2
// @description  Allows you to run multiple different google snake mods
// @author       DarkSnakeGang (https://github.com/DarkSnakeGang)
// @icon         https://www.google.com/s2/favicons?sz=64&domain=google.com
// @run-at       document-start
// @grant        none
// @match        https://*.google.com/fbx?fbx=snake_arcade*
// @match        https://*.google.ad/fbx?fbx=snake_arcade*
// @match        https://*.google.ae/fbx?fbx=snake_arcade*
// @match        https://*.google.com.af/fbx?fbx=snake_arcade*
// @match        https://*.google.com.ag/fbx?fbx=snake_arcade*
// @match        https://*.google.com.ai/fbx?fbx=snake_arcade*
// @match        https://*.google.al/fbx?fbx=snake_arcade*
// @match        https://*.google.am/fbx?fbx=snake_arcade*
// @match        https://*.google.co.ao/fbx?fbx=snake_arcade*
// @match        https://*.google.com.ar/fbx?fbx=snake_arcade*
// @match        https://*.google.as/fbx?fbx=snake_arcade*
// @match        https://*.google.at/fbx?fbx=snake_arcade*
// @match        https://*.google.com.au/fbx?fbx=snake_arcade*
// @match        https://*.google.az/fbx?fbx=snake_arcade*
// @match        https://*.google.ba/fbx?fbx=snake_arcade*
// @match        https://*.google.com.bd/fbx?fbx=snake_arcade*
// @match        https://*.google.be/fbx?fbx=snake_arcade*
// @match        https://*.google.bf/fbx?fbx=snake_arcade*
// @match        https://*.google.bg/fbx?fbx=snake_arcade*
// @match        https://*.google.com.bh/fbx?fbx=snake_arcade*
// @match        https://*.google.bi/fbx?fbx=snake_arcade*
// @match        https://*.google.bj/fbx?fbx=snake_arcade*
// @match        https://*.google.com.bn/fbx?fbx=snake_arcade*
// @match        https://*.google.com.bo/fbx?fbx=snake_arcade*
// @match        https://*.google.com.br/fbx?fbx=snake_arcade*
// @match        https://*.google.bs/fbx?fbx=snake_arcade*
// @match        https://*.google.bt/fbx?fbx=snake_arcade*
// @match        https://*.google.co.bw/fbx?fbx=snake_arcade*
// @match        https://*.google.by/fbx?fbx=snake_arcade*
// @match        https://*.google.com.bz/fbx?fbx=snake_arcade*
// @match        https://*.google.ca/fbx?fbx=snake_arcade*
// @match        https://*.google.cd/fbx?fbx=snake_arcade*
// @match        https://*.google.cf/fbx?fbx=snake_arcade*
// @match        https://*.google.cg/fbx?fbx=snake_arcade*
// @match        https://*.google.ch/fbx?fbx=snake_arcade*
// @match        https://*.google.ci/fbx?fbx=snake_arcade*
// @match        https://*.google.co.ck/fbx?fbx=snake_arcade*
// @match        https://*.google.cl/fbx?fbx=snake_arcade*
// @match        https://*.google.cm/fbx?fbx=snake_arcade*
// @match        https://*.google.cn/fbx?fbx=snake_arcade*
// @match        https://*.google.com.co/fbx?fbx=snake_arcade*
// @match        https://*.google.co.cr/fbx?fbx=snake_arcade*
// @match        https://*.google.com.cu/fbx?fbx=snake_arcade*
// @match        https://*.google.cv/fbx?fbx=snake_arcade*
// @match        https://*.google.com.cy/fbx?fbx=snake_arcade*
// @match        https://*.google.cz/fbx?fbx=snake_arcade*
// @match        https://*.google.de/fbx?fbx=snake_arcade*
// @match        https://*.google.dj/fbx?fbx=snake_arcade*
// @match        https://*.google.dk/fbx?fbx=snake_arcade*
// @match        https://*.google.dm/fbx?fbx=snake_arcade*
// @match        https://*.google.com.do/fbx?fbx=snake_arcade*
// @match        https://*.google.dz/fbx?fbx=snake_arcade*
// @match        https://*.google.com.ec/fbx?fbx=snake_arcade*
// @match        https://*.google.ee/fbx?fbx=snake_arcade*
// @match        https://*.google.com.eg/fbx?fbx=snake_arcade*
// @match        https://*.google.es/fbx?fbx=snake_arcade*
// @match        https://*.google.com.et/fbx?fbx=snake_arcade*
// @match        https://*.google.fi/fbx?fbx=snake_arcade*
// @match        https://*.google.com.fj/fbx?fbx=snake_arcade*
// @match        https://*.google.fm/fbx?fbx=snake_arcade*
// @match        https://*.google.fr/fbx?fbx=snake_arcade*
// @match        https://*.google.ga/fbx?fbx=snake_arcade*
// @match        https://*.google.ge/fbx?fbx=snake_arcade*
// @match        https://*.google.gg/fbx?fbx=snake_arcade*
// @match        https://*.google.com.gh/fbx?fbx=snake_arcade*
// @match        https://*.google.com.gi/fbx?fbx=snake_arcade*
// @match        https://*.google.gl/fbx?fbx=snake_arcade*
// @match        https://*.google.gm/fbx?fbx=snake_arcade*
// @match        https://*.google.gr/fbx?fbx=snake_arcade*
// @match        https://*.google.com.gt/fbx?fbx=snake_arcade*
// @match        https://*.google.gy/fbx?fbx=snake_arcade*
// @match        https://*.google.com.hk/fbx?fbx=snake_arcade*
// @match        https://*.google.hn/fbx?fbx=snake_arcade*
// @match        https://*.google.hr/fbx?fbx=snake_arcade*
// @match        https://*.google.ht/fbx?fbx=snake_arcade*
// @match        https://*.google.hu/fbx?fbx=snake_arcade*
// @match        https://*.google.co.id/fbx?fbx=snake_arcade*
// @match        https://*.google.ie/fbx?fbx=snake_arcade*
// @match        https://*.google.co.il/fbx?fbx=snake_arcade*
// @match        https://*.google.im/fbx?fbx=snake_arcade*
// @match        https://*.google.co.in/fbx?fbx=snake_arcade*
// @match        https://*.google.iq/fbx?fbx=snake_arcade*
// @match        https://*.google.is/fbx?fbx=snake_arcade*
// @match        https://*.google.it/fbx?fbx=snake_arcade*
// @match        https://*.google.je/fbx?fbx=snake_arcade*
// @match        https://*.google.com.jm/fbx?fbx=snake_arcade*
// @match        https://*.google.jo/fbx?fbx=snake_arcade*
// @match        https://*.google.co.jp/fbx?fbx=snake_arcade*
// @match        https://*.google.co.ke/fbx?fbx=snake_arcade*
// @match        https://*.google.com.kh/fbx?fbx=snake_arcade*
// @match        https://*.google.ki/fbx?fbx=snake_arcade*
// @match        https://*.google.kg/fbx?fbx=snake_arcade*
// @match        https://*.google.co.kr/fbx?fbx=snake_arcade*
// @match        https://*.google.com.kw/fbx?fbx=snake_arcade*
// @match        https://*.google.kz/fbx?fbx=snake_arcade*
// @match        https://*.google.la/fbx?fbx=snake_arcade*
// @match        https://*.google.com.lb/fbx?fbx=snake_arcade*
// @match        https://*.google.li/fbx?fbx=snake_arcade*
// @match        https://*.google.lk/fbx?fbx=snake_arcade*
// @match        https://*.google.co.ls/fbx?fbx=snake_arcade*
// @match        https://*.google.lt/fbx?fbx=snake_arcade*
// @match        https://*.google.lu/fbx?fbx=snake_arcade*
// @match        https://*.google.lv/fbx?fbx=snake_arcade*
// @match        https://*.google.com.ly/fbx?fbx=snake_arcade*
// @match        https://*.google.co.ma/fbx?fbx=snake_arcade*
// @match        https://*.google.md/fbx?fbx=snake_arcade*
// @match        https://*.google.me/fbx?fbx=snake_arcade*
// @match        https://*.google.mg/fbx?fbx=snake_arcade*
// @match        https://*.google.mk/fbx?fbx=snake_arcade*
// @match        https://*.google.ml/fbx?fbx=snake_arcade*
// @match        https://*.google.com.mm/fbx?fbx=snake_arcade*
// @match        https://*.google.mn/fbx?fbx=snake_arcade*
// @match        https://*.google.ms/fbx?fbx=snake_arcade*
// @match        https://*.google.com.mt/fbx?fbx=snake_arcade*
// @match        https://*.google.mu/fbx?fbx=snake_arcade*
// @match        https://*.google.mv/fbx?fbx=snake_arcade*
// @match        https://*.google.mw/fbx?fbx=snake_arcade*
// @match        https://*.google.com.mx/fbx?fbx=snake_arcade*
// @match        https://*.google.com.my/fbx?fbx=snake_arcade*
// @match        https://*.google.co.mz/fbx?fbx=snake_arcade*
// @match        https://*.google.com.na/fbx?fbx=snake_arcade*
// @match        https://*.google.com.ng/fbx?fbx=snake_arcade*
// @match        https://*.google.com.ni/fbx?fbx=snake_arcade*
// @match        https://*.google.ne/fbx?fbx=snake_arcade*
// @match        https://*.google.nl/fbx?fbx=snake_arcade*
// @match        https://*.google.no/fbx?fbx=snake_arcade*
// @match        https://*.google.com.np/fbx?fbx=snake_arcade*
// @match        https://*.google.nr/fbx?fbx=snake_arcade*
// @match        https://*.google.nu/fbx?fbx=snake_arcade*
// @match        https://*.google.co.nz/fbx?fbx=snake_arcade*
// @match        https://*.google.com.om/fbx?fbx=snake_arcade*
// @match        https://*.google.com.pa/fbx?fbx=snake_arcade*
// @match        https://*.google.com.pe/fbx?fbx=snake_arcade*
// @match        https://*.google.com.pg/fbx?fbx=snake_arcade*
// @match        https://*.google.com.ph/fbx?fbx=snake_arcade*
// @match        https://*.google.com.pk/fbx?fbx=snake_arcade*
// @match        https://*.google.pl/fbx?fbx=snake_arcade*
// @match        https://*.google.pn/fbx?fbx=snake_arcade*
// @match        https://*.google.com.pr/fbx?fbx=snake_arcade*
// @match        https://*.google.ps/fbx?fbx=snake_arcade*
// @match        https://*.google.pt/fbx?fbx=snake_arcade*
// @match        https://*.google.com.py/fbx?fbx=snake_arcade*
// @match        https://*.google.com.qa/fbx?fbx=snake_arcade*
// @match        https://*.google.ro/fbx?fbx=snake_arcade*
// @match        https://*.google.ru/fbx?fbx=snake_arcade*
// @match        https://*.google.rw/fbx?fbx=snake_arcade*
// @match        https://*.google.com.sa/fbx?fbx=snake_arcade*
// @match        https://*.google.com.sb/fbx?fbx=snake_arcade*
// @match        https://*.google.sc/fbx?fbx=snake_arcade*
// @match        https://*.google.se/fbx?fbx=snake_arcade*
// @match        https://*.google.com.sg/fbx?fbx=snake_arcade*
// @match        https://*.google.sh/fbx?fbx=snake_arcade*
// @match        https://*.google.si/fbx?fbx=snake_arcade*
// @match        https://*.google.sk/fbx?fbx=snake_arcade*
// @match        https://*.google.com.sl/fbx?fbx=snake_arcade*
// @match        https://*.google.sn/fbx?fbx=snake_arcade*
// @match        https://*.google.so/fbx?fbx=snake_arcade*
// @match        https://*.google.sm/fbx?fbx=snake_arcade*
// @match        https://*.google.sr/fbx?fbx=snake_arcade*
// @match        https://*.google.st/fbx?fbx=snake_arcade*
// @match        https://*.google.com.sv/fbx?fbx=snake_arcade*
// @match        https://*.google.td/fbx?fbx=snake_arcade*
// @match        https://*.google.tg/fbx?fbx=snake_arcade*
// @match        https://*.google.co.th/fbx?fbx=snake_arcade*
// @match        https://*.google.com.tj/fbx?fbx=snake_arcade*
// @match        https://*.google.tl/fbx?fbx=snake_arcade*
// @match        https://*.google.tm/fbx?fbx=snake_arcade*
// @match        https://*.google.tn/fbx?fbx=snake_arcade*
// @match        https://*.google.to/fbx?fbx=snake_arcade*
// @match        https://*.google.com.tr/fbx?fbx=snake_arcade*
// @match        https://*.google.tt/fbx?fbx=snake_arcade*
// @match        https://*.google.com.tw/fbx?fbx=snake_arcade*
// @match        https://*.google.co.tz/fbx?fbx=snake_arcade*
// @match        https://*.google.com.ua/fbx?fbx=snake_arcade*
// @match        https://*.google.co.ug/fbx?fbx=snake_arcade*
// @match        https://*.google.co.uk/fbx?fbx=snake_arcade*
// @match        https://*.google.com.uy/fbx?fbx=snake_arcade*
// @match        https://*.google.co.uz/fbx?fbx=snake_arcade*
// @match        https://*.google.com.vc/fbx?fbx=snake_arcade*
// @match        https://*.google.co.ve/fbx?fbx=snake_arcade*
// @match        https://*.google.vg/fbx?fbx=snake_arcade*
// @match        https://*.google.co.vi/fbx?fbx=snake_arcade*
// @match        https://*.google.com.vn/fbx?fbx=snake_arcade*
// @match        https://*.google.vu/fbx?fbx=snake_arcade*
// @match        https://*.google.ws/fbx?fbx=snake_arcade*
// @match        https://*.google.rs/fbx?fbx=snake_arcade*
// @match        https://*.google.co.za/fbx?fbx=snake_arcade*
// @match        https://*.google.co.zm/fbx?fbx=snake_arcade*
// @match        https://*.google.co.zw/fbx?fbx=snake_arcade*
// @match        https://*.google.cat/fbx?fbx=snake_arcade*
// @match        https://*.google.com/search*
// @match        https://*.google.ad/search*
// @match        https://*.google.ae/search*
// @match        https://*.google.com.af/search*
// @match        https://*.google.com.ag/search*
// @match        https://*.google.com.ai/search*
// @match        https://*.google.al/search*
// @match        https://*.google.am/search*
// @match        https://*.google.co.ao/search*
// @match        https://*.google.com.ar/search*
// @match        https://*.google.as/search*
// @match        https://*.google.at/search*
// @match        https://*.google.com.au/search*
// @match        https://*.google.az/search*
// @match        https://*.google.ba/search*
// @match        https://*.google.com.bd/search*
// @match        https://*.google.be/search*
// @match        https://*.google.bf/search*
// @match        https://*.google.bg/search*
// @match        https://*.google.com.bh/search*
// @match        https://*.google.bi/search*
// @match        https://*.google.bj/search*
// @match        https://*.google.com.bn/search*
// @match        https://*.google.com.bo/search*
// @match        https://*.google.com.br/search*
// @match        https://*.google.bs/search*
// @match        https://*.google.bt/search*
// @match        https://*.google.co.bw/search*
// @match        https://*.google.by/search*
// @match        https://*.google.com.bz/search*
// @match        https://*.google.ca/search*
// @match        https://*.google.cd/search*
// @match        https://*.google.cf/search*
// @match        https://*.google.cg/search*
// @match        https://*.google.ch/search*
// @match        https://*.google.ci/search*
// @match        https://*.google.co.ck/search*
// @match        https://*.google.cl/search*
// @match        https://*.google.cm/search*
// @match        https://*.google.cn/search*
// @match        https://*.google.com.co/search*
// @match        https://*.google.co.cr/search*
// @match        https://*.google.com.cu/search*
// @match        https://*.google.cv/search*
// @match        https://*.google.com.cy/search*
// @match        https://*.google.cz/search*
// @match        https://*.google.de/search*
// @match        https://*.google.dj/search*
// @match        https://*.google.dk/search*
// @match        https://*.google.dm/search*
// @match        https://*.google.com.do/search*
// @match        https://*.google.dz/search*
// @match        https://*.google.com.ec/search*
// @match        https://*.google.ee/search*
// @match        https://*.google.com.eg/search*
// @match        https://*.google.es/search*
// @match        https://*.google.com.et/search*
// @match        https://*.google.fi/search*
// @match        https://*.google.com.fj/search*
// @match        https://*.google.fm/search*
// @match        https://*.google.fr/search*
// @match        https://*.google.ga/search*
// @match        https://*.google.ge/search*
// @match        https://*.google.gg/search*
// @match        https://*.google.com.gh/search*
// @match        https://*.google.com.gi/search*
// @match        https://*.google.gl/search*
// @match        https://*.google.gm/search*
// @match        https://*.google.gr/search*
// @match        https://*.google.com.gt/search*
// @match        https://*.google.gy/search*
// @match        https://*.google.com.hk/search*
// @match        https://*.google.hn/search*
// @match        https://*.google.hr/search*
// @match        https://*.google.ht/search*
// @match        https://*.google.hu/search*
// @match        https://*.google.co.id/search*
// @match        https://*.google.ie/search*
// @match        https://*.google.co.il/search*
// @match        https://*.google.im/search*
// @match        https://*.google.co.in/search*
// @match        https://*.google.iq/search*
// @match        https://*.google.is/search*
// @match        https://*.google.it/search*
// @match        https://*.google.je/search*
// @match        https://*.google.com.jm/search*
// @match        https://*.google.jo/search*
// @match        https://*.google.co.jp/search*
// @match        https://*.google.co.ke/search*
// @match        https://*.google.com.kh/search*
// @match        https://*.google.ki/search*
// @match        https://*.google.kg/search*
// @match        https://*.google.co.kr/search*
// @match        https://*.google.com.kw/search*
// @match        https://*.google.kz/search*
// @match        https://*.google.la/search*
// @match        https://*.google.com.lb/search*
// @match        https://*.google.li/search*
// @match        https://*.google.lk/search*
// @match        https://*.google.co.ls/search*
// @match        https://*.google.lt/search*
// @match        https://*.google.lu/search*
// @match        https://*.google.lv/search*
// @match        https://*.google.com.ly/search*
// @match        https://*.google.co.ma/search*
// @match        https://*.google.md/search*
// @match        https://*.google.me/search*
// @match        https://*.google.mg/search*
// @match        https://*.google.mk/search*
// @match        https://*.google.ml/search*
// @match        https://*.google.com.mm/search*
// @match        https://*.google.mn/search*
// @match        https://*.google.ms/search*
// @match        https://*.google.com.mt/search*
// @match        https://*.google.mu/search*
// @match        https://*.google.mv/search*
// @match        https://*.google.mw/search*
// @match        https://*.google.com.mx/search*
// @match        https://*.google.com.my/search*
// @match        https://*.google.co.mz/search*
// @match        https://*.google.com.na/search*
// @match        https://*.google.com.ng/search*
// @match        https://*.google.com.ni/search*
// @match        https://*.google.ne/search*
// @match        https://*.google.nl/search*
// @match        https://*.google.no/search*
// @match        https://*.google.com.np/search*
// @match        https://*.google.nr/search*
// @match        https://*.google.nu/search*
// @match        https://*.google.co.nz/search*
// @match        https://*.google.com.om/search*
// @match        https://*.google.com.pa/search*
// @match        https://*.google.com.pe/search*
// @match        https://*.google.com.pg/search*
// @match        https://*.google.com.ph/search*
// @match        https://*.google.com.pk/search*
// @match        https://*.google.pl/search*
// @match        https://*.google.pn/search*
// @match        https://*.google.com.pr/search*
// @match        https://*.google.ps/search*
// @match        https://*.google.pt/search*
// @match        https://*.google.com.py/search*
// @match        https://*.google.com.qa/search*
// @match        https://*.google.ro/search*
// @match        https://*.google.ru/search*
// @match        https://*.google.rw/search*
// @match        https://*.google.com.sa/search*
// @match        https://*.google.com.sb/search*
// @match        https://*.google.sc/search*
// @match        https://*.google.se/search*
// @match        https://*.google.com.sg/search*
// @match        https://*.google.sh/search*
// @match        https://*.google.si/search*
// @match        https://*.google.sk/search*
// @match        https://*.google.com.sl/search*
// @match        https://*.google.sn/search*
// @match        https://*.google.so/search*
// @match        https://*.google.sm/search*
// @match        https://*.google.sr/search*
// @match        https://*.google.st/search*
// @match        https://*.google.com.sv/search*
// @match        https://*.google.td/search*
// @match        https://*.google.tg/search*
// @match        https://*.google.co.th/search*
// @match        https://*.google.com.tj/search*
// @match        https://*.google.tl/search*
// @match        https://*.google.tm/search*
// @match        https://*.google.tn/search*
// @match        https://*.google.to/search*
// @match        https://*.google.com.tr/search*
// @match        https://*.google.tt/search*
// @match        https://*.google.com.tw/search*
// @match        https://*.google.co.tz/search*
// @match        https://*.google.com.ua/search*
// @match        https://*.google.co.ug/search*
// @match        https://*.google.co.uk/search*
// @match        https://*.google.com.uy/search*
// @match        https://*.google.co.uz/search*
// @match        https://*.google.com.vc/search*
// @match        https://*.google.co.ve/search*
// @match        https://*.google.vg/search*
// @match        https://*.google.co.vi/search*
// @match        https://*.google.com.vn/search*
// @match        https://*.google.vu/search*
// @match        https://*.google.ws/search*
// @match        https://*.google.rs/search*
// @match        https://*.google.co.za/search*
// @match        https://*.google.co.zm/search*
// @match        https://*.google.co.zw/search*
// @match        https://*.google.cat/search*
// ==/UserScript==
const IS_DEVELOPER_MODE = true;

let modsConfig = {
  moreMenu: {
    displayName: 'More Menu Mod',
    hasUrl: true,
    url: 'https://raw.githubusercontent.com/DarkSnakeGang/GoogleSnakeCustomMenuStuff/main/modloadercode.js'
  },
  levelEditorMod: {
    displayName: 'Level Editor Mod',
    hasUrl: true,
    url: 'https://raw.githubusercontent.com/DarkSnakeGang/GoogleSnakeLevelEditor/main/modloadercode.js'
  },
  mouseMode: {
    displayName: 'Mouse Mode',
    hasUrl: true,
    url: 'https://raw.githubusercontent.com/DarkSnakeGang/GoogleSnakeMouseMode/main/modloadercode.js'
  },
}

if(IS_DEVELOPER_MODE) {
  modsConfig.testMod = {
    displayName: 'Test Mod',
    hasUrl: false
  };
  modsConfig.customUrl = {
    displayName: 'Load from url (see advanced options)',
    customModName: JSON.parse(localStorage.getItem('snakeAdvancedSettings'))?.customModName ?? 'PLEASE_CHOOSE_CUSTOM_NAME_FROM_ADVANCED_SETTINGS',
    url: JSON.parse(localStorage.getItem('snakeAdvancedSettings'))?.customUrl ?? 'PLEASE_CHOOSE_URL_FROM_ADVANCED_SETTINGS',
    hasUrl: true
  }
}

//Replace appendChild so we can intercept it
document.body.appendChildOld = document.body.appendChild;

document.body.appendChild = function(el) {
  if(el.tagName !== 'SCRIPT') return document.body.appendChildOld(el);
  if(el.src === '' || el.src.includes('apis.google.com')) return document.body.appendChildOld(el);

  const currentlySelectedMod = localStorage.getItem('snakeChosenMod');

  //Just do default behaviour if it isn't the snake script or we don't have a mod to run
  const regexForScriptSrc = window.location.href.includes('fbx?fbx=snake_arcade') ? /xjs=s1$/ : /xjs=s2$/;
  if(!(regexForScriptSrc.test(el.src)) || currentlySelectedMod === null || currentlySelectedMod === 'none') return document.body.appendChildOld(el);

  //default behaviour if we can't find any snake images on the webpage
  if(document.body.querySelector('img[src^="//www.google.com/logos/fnbx/snake_arcade"]') === null) return document.body.appendChildOld(el);

  //Log which script(s) go through the ajax process
  console.log(el);

  //Make sure to return the correct thing that appendChild would normally return
  let returnVal = el instanceof DocumentFragment ? new DocumentFragment : el;

  /*
    Run some code depending on what google snake mod was chosen
    Request the text contents of the google snake code.
    Alter the contents of the google snake code (depending on the selected mod) and then eval
    Run some code afterwards depending on what google snake mod was chosen
  */
  const req = new XMLHttpRequest();
  req.open('GET', el.src, false);

  req.onload = function() {
    //Do default behaviour if the source code doesn't look like the google snake code.
    //Set returnVal so it returns the correct thing for document.body.appendChild.
    if(this.responseText.indexOf('trophy') === -1 || this.responseText.indexOf('apple') === -1 || this.responseText.indexOf('snake_arcade') === -1) {
      returnVal = document.body.appendChildOld(el);
      return;
    }

    console.log(`Selected mod: ${currentlySelectedMod}`);
    //Make sure currentlySelectedMod is an allowed value
    if(!(modsConfig.hasOwnProperty(currentlySelectedMod) || currentlySelectedMod === 'none' || currentlySelectedMod === null)) {
      const errMessage = `Bad value of snakeChosenMod: ${currentlySelectedMod}. The current allowed values are ${Object.keys(modsConfig)}. Changing this to the "None" setting for next time.`;
      localStorage.setItem('snakeChosenMod', 'none');
      throw new Error(errMessage);
    } 

    if(modsConfig[currentlySelectedMod].hasUrl) {
      const modUrl = modsConfig[currentlySelectedMod].url;

      //Load and run the code for this mod.
      console.log(`Retrieving code for this mod from ${modUrl}`);

      loadAndRunCodeSynchronous(modUrl);
    }

    //Name of the object that contains runCodeBefore/alterSnakeCode/runCodeAfter methods
    let modObjectName = currentlySelectedMod;
    if(IS_DEVELOPER_MODE && modsConfig[currentlySelectedMod].customModName) {
      modObjectName = modsConfig[currentlySelectedMod].customModName;
    }

    //Skip below if either the code didn't load, or it has the wrong variable
    if(!window[modObjectName]) {
      (0,eval)(this.responseText);
      throw new Error(`We were expecting to find a global variable called window.${modObjectName} but this is missing. Running snake without the mod.`);
    }

    //Mod specific code to run before running google snake script
    if(window[modObjectName].runCodeBefore) window[modObjectName].runCodeBefore();

    let newSnakeCode;
    //Alter google snake code and then run it
    if(window[modObjectName].alterSnakeCode) {
      try {
        newSnakeCode = window[modObjectName].alterSnakeCode(this.responseText);
      } catch (err) {
        let snakeErrEl = document.getElementById('snake-error-message')
        if(snakeErrEl) {snakeErrEl.style.display = 'block';}
        window.showSnakeErrMessage = true;
        console.log('Displaying message to user and then running the google snake script and then throwing the original error that occurred in "alterSnakeCode"');
        (0,eval)(this.responseText);
        throw err;
      }
    }

    (0,eval)(newSnakeCode);

    //Mod specific code to run after running google snake script
    if(window[modObjectName].runCodeAfter) window[modObjectName].runCodeAfter();
  
  };

  req.send();

  return returnVal;
}

//Setup Modal box that lets the user choose which mod to run
let addModSelectorPopup = function() {
  if(document.body.querySelector('img[src^="//www.google.com/logos/fnbx/snake_arcade"]') === null) {
    //We aren't on a page with google snake. Don't show the mod selector dialogue. Exit early.
    return;
  }

  const modCornerIndicatorHTML = `
      Current mod: <span id="mod-name-span" style="background-color: #eeeaca;padding: 2px;border-radius: 3px;font-family: consolas, monospace;"></span>
      <div id="change-mod-button" style="text-align: center;font-size: 0.84em;font-family: arial, sans-serif;color: #069;text-decoration: underline;cursor: pointer;margin-top: 3px;">Change mod</div>
      <div id="snake-error-message" style="font-family: helvetica, sans-serif;color: #f44336;margin-top: 2px;display: ${window.showSnakeErrMessage ? 'block' : 'none'};">
        Error changing snake code.
        <br>
        <a href="https://github.com/DarkSnakeGang/GoogleSnakeModLoader/blob/main/docs/mod_errors.md" target="_blank">Why does this happen?</a>
      </div>
  `;

  let modIndicatorEl = document.createElement('div');
  modIndicatorEl.id = 'mod-indicator';
  modIndicatorEl.style = 'z-index: 9999999;background-color: #fffce0;position: fixed;bottom: 0;right: 0;border-top: 1px solid #cccccc;border-left: 1px solid #cccccc;font-size: 1.2em;border-top-left-radius: 5px;padding: 5px;-webkit-box-shadow: 0px 0px 7px 1px hwb(0deg 0% 100% / 12%);box-shadow: 0px 0px 7px 1px rgb(0 0 0 / 12%);font-family: helvetica, sans-serif;height: initial;user-select:none;';
  modIndicatorEl.innerHTML = modCornerIndicatorHTML;
  document.body.appendChild(modIndicatorEl);

  document.getElementById('change-mod-button').addEventListener('click', ()=>{
    document.getElementById('mod-selector-dialogue-container').style.display = document.getElementById('mod-selector-dialogue-container').style.display === 'none' ? 'block' : 'none';
  });

  let modSelectorRadioOptions = '';
  for(const [key, value] of Object.entries(modsConfig)) {
    modSelectorRadioOptions += `<label><input type="radio" name="mod-selector" value="${key}">${value.displayName}</label><br>`;
  }
  modSelectorRadioOptions += `<label><input type="radio" name="mod-selector" value="none">None</label>`;

  let customUrlOptions = '';
  if(IS_DEVELOPER_MODE) {
    customUrlOptions = `<label><input id="custom-mod-name" type="text"> Custom Mod Name</label><br>
                        <label><input id="custom-url" type="text"> Custom Mod Url</label><br>`;
  }

  const modSelectorModal = `
  <div id="mod-selector-dialogue" style="display: block;margin:40px auto;padding:10px;border: 1px solid rgb(204 204 204);width:316.4px;background-color: #fffce0;border-radius:5px;-webkit-box-shadow: 0px 0px 10px 1px rgba(0,0,0,0.24);box-shadow: 0px 0px 10px 1px rgb(0 0 0 / 20%);font-family: helvetica, sans-serif;">
  <!-- <h1 style="font-size: 2em;font-weight: bold;font-family: &quot;Century Gothic&quot;, sans-serif;margin: 7px 0px 15px 0px;text-align: center;text-shadow: 2px 2px 3px #a2a2a2;">Snake Mod Loader</h1> -->
  <!-- <h1 style="font-size: 2em;font-weight: bold;font-family: &quot;Century Gothic&quot;, sans-serif;margin: 7px 0px 15px 0px;text-align: center;text-shadow: 1px 1px 1px #000000, 1px 1px 1px #000000, 1px 1px 5px #000000;color: #4674e9;">Snake Mod Loader</h1> -->
  <!-- <div style="background-color: #aad751;height: 17px;position: relative;top: -31px;transform: skewX(-21deg);z-index: 5;"></div> -->
  <h1 style="font-size: 2em;font-weight: bold;font-family: &quot;Century Gothic&quot;, sans-serif;margin: 7px 0px 15px 0px;text-align: center;text-shadow: 1px 1px 1px #000000, 1px 1px 1px #000000, 1px 1px 5px #000000;color: #4674e9;border: 5px inset #e4e0be;background-color: #ece9d4;">Snake Mod Loader</h1>
    ${modSelectorRadioOptions}
    <div id="advanced-options" style="display:none">
      <hr>
      <label><input id="fbx-centered-checkbox" type="checkbox">Make fbx centered</label><br>
      <label><input id="timer-starts-on" type="checkbox">Timer starts on</label><br>
      <label><input id="background-color-picker" type="color" value="#000000"> Background color on fbx</label><br>
      <label><input id="use-custom-theme" type="checkbox">Use custom theme</label><br>
      <div id="custom-theme-pickers">
        <label><input id="custom-theme-col1" type="color" value="#1D1D1D"> Light Tiles</label><br>
        <label><input id="custom-theme-col2" type="color" value="#161616"> Dark Tiles</label><br>
        <label><input id="custom-theme-col3" type="color" value="#111111"> Shadow</label><br>
        <label><input id="custom-theme-col4" type="color" value="#000000"> Border</label><br>
        <label><input id="custom-theme-col5" type="color" value="#1D1D1D"> Lock Sign</label><br>
        <label><input id="custom-theme-col6" type="color" value="#111111"> Top Bar</label><br>
        <label><input id="custom-theme-col7" type="color" value="#000000"> Endscreen background</label><br>
      </div>
      ${customUrlOptions}
    </div>
    <br>
    <div style="display:inline-block;padding-top: 15px;margin-bottom: 4px;text-align: center;font-family: arial, sans-serif;color: #069;text-decoration: underline;cursor: pointer;user-select:none" id="advanced-options-toggle">Advanced options</div>
    <div id="apply-mod" class="mod-sel-btn" style="display:inline-block;background-color: hsl(24deg 64% 97%);padding: 4px;margin-top: 7px;border-radius: 3px;border: 2px solid #4caf50;color: #4caf50;font-weight: bold;user-select: none;float:right;cursor: pointer;">Apply</div>
    <div id="close-mod-selector" class="mod-sel-btn" style="display:inline-block;background-color: hsl(24deg 64% 97%);padding: 4px;margin-top: 7px;margin-right:10px;border-radius: 3px;border: 2px solid #606060;color: #606060;font-weight: bold;user-select: none;cursor: pointer;float:right">Close</div>
  </div>
  `;

  //Insert html for custom preset export dialogue box.
  let modSelectorModalContainer = document.createElement('div');
  modSelectorModalContainer.innerHTML = modSelectorModal;
  modSelectorModalContainer.id = 'mod-selector-dialogue-container';
  modSelectorModalContainer.style = 'display:none; position:fixed; width:100%; height:100%; z-index: 999999; left:0; top:0';
  document.body.appendChild(modSelectorModalContainer);

  //Tick the currently selected mod choice according to localStorage. Also, set the mod name in the indicator
  const currentlySelectedMod = localStorage.getItem('snakeChosenMod');
  let newlySelectedMod = currentlySelectedMod;

  if(modsConfig.hasOwnProperty(currentlySelectedMod) && currentlySelectedMod !== null && currentlySelectedMod !== 'none') {
    document.querySelector(`input[name="mod-selector"][value="${currentlySelectedMod}"]`).checked = true;
    document.getElementById('mod-name-span').textContent = modsConfig[currentlySelectedMod].displayName;
  } else {
    document.querySelector('input[name="mod-selector"][value="none"]').checked = true;
    document.getElementById('mod-name-span').textContent = 'None';
  }

  //save the mod selected when clicking on any of the radio buttons
  [...document.querySelectorAll('input[type="radio"][name="mod-selector"]')].forEach(radioEl=>{
    radioEl.addEventListener('click', function(){
      newlySelectedMod = this.value;
    });
  });

  //Load advanced settings
  let advancedSettings = JSON.parse(localStorage.getItem('snakeAdvancedSettings')) ?? {};
  let advancedSettingsOriginal = {...advancedSettings};//Shallow copy, but it's ok as nothing is nested.

  //Make sure the inputs are set the right values when starting up the mod
  updateAdvancedSettingInputs();

  //Event listeners for advanced settings
  document.getElementById('advanced-options-toggle').addEventListener('click', (event)=>{
    document.getElementById('advanced-options').style.display = (document.getElementById('advanced-options').style.display === 'none' ? 'block':'none');
    event.preventDefault();
  });
  document.getElementById('use-custom-theme').addEventListener('change', function() {
    document.getElementById('custom-theme-pickers').style.display = (this.checked ? 'block' : 'none');
    updateAdvancedSetting('useCustomTheme', this.checked);
  });
  document.getElementById('fbx-centered-checkbox').addEventListener('change', function() {
    updateAdvancedSetting('fbxCentered', this.checked);
  });
  document.getElementById('timer-starts-on').addEventListener('change', function() {
    updateAdvancedSetting('timerStartsOn', this.checked);
  });
  document.getElementById('background-color-picker').addEventListener('input', function() {
    updateAdvancedSetting('backgroundColor', this.value);
  });
  document.getElementById('custom-theme-col1').addEventListener('input', function() {
    updateAdvancedSetting('themeCol1', this.value);
  });
  document.getElementById('custom-theme-col2').addEventListener('input', function() {
    updateAdvancedSetting('themeCol2', this.value);
  });
  document.getElementById('custom-theme-col3').addEventListener('input', function() {
    updateAdvancedSetting('themeCol3', this.value);
  });
  document.getElementById('custom-theme-col4').addEventListener('input', function() {
    updateAdvancedSetting('themeCol4', this.value);
  });
  document.getElementById('custom-theme-col5').addEventListener('input', function() {
    updateAdvancedSetting('themeCol5', this.value);
  });
  document.getElementById('custom-theme-col6').addEventListener('input', function() {
    updateAdvancedSetting('themeCol6', this.value);
  });
  document.getElementById('custom-theme-col7').addEventListener('input', function() {
    updateAdvancedSetting('themeCol7', this.value);
  });

  if(IS_DEVELOPER_MODE) {
    document.getElementById('custom-mod-name').addEventListener('input', function() {
      updateAdvancedSetting('customModName', this.value);
    });
    document.getElementById('custom-url').addEventListener('input', function() {
      updateAdvancedSetting('customUrl', this.value);
    });
  }

  //Hide mod selector dialogue when clicking close button
  document.getElementById('close-mod-selector').addEventListener('click', function() {
    document.getElementById('mod-selector-dialogue-container').style.display = 'none';
  });

  //Apply button should save settings and refresh page
  document.getElementById('apply-mod').addEventListener('click', function(event) {
    //Figure out if advanced settings have been changed.
    let shallowEquality = true;
    for(let setting in advancedSettings) {
      if(advancedSettings[setting] !== advancedSettingsOriginal?.[setting]) {
        shallowEquality = false;
        break;
      }
    }

    //Skip if settings/mod chosen are the same as before.
    if(shallowEquality && newlySelectedMod === currentlySelectedMod) {
      alert('Settings are the same as before!')
      return;
    }

    //Save new settings and refresh to run with the new settings
    localStorage.setItem('snakeChosenMod', newlySelectedMod);
    localStorage.setItem('snakeAdvancedSettings',JSON.stringify(advancedSettings));
    location.reload();
  });

  //Set up CSS
  const css = `
    .mod-sel-btn:hover {
      background-color: #fefcfb !important;
    }

    .mod-sel-btn:active {
        background-color: #f0e9e5 !important;
    }
  `;
  document.getElementsByTagName('style')[0].innerHTML = document.getElementsByTagName('style')[0].innerHTML + css;

  let attemptsApplyingAdvancedSettings = 0;
  setTimeout(applyAdvancedSettingsToGame, 300);//Small delay to give the game more time to load.

  function updateAdvancedSettingInputs() {
    if(advancedSettings.hasOwnProperty('fbxCentered')) {
      document.getElementById('fbx-centered-checkbox').checked = advancedSettings.fbxCentered;
    }
    if(advancedSettings.hasOwnProperty('timerStartsOn')) {
      document.getElementById('timer-starts-on').checked = advancedSettings.timerStartsOn;
    }
    if(advancedSettings.hasOwnProperty('useCustomTheme')) {
      document.getElementById('use-custom-theme').checked = advancedSettings.useCustomTheme;
      document.getElementById('custom-theme-pickers').style.display = (advancedSettings.useCustomTheme ? 'block' : 'none');
    } else {
      document.getElementById('custom-theme-pickers').style.display = 'none';
    }
    if(advancedSettings.hasOwnProperty('backgroundColor')) {
      document.getElementById('background-color-picker').value = advancedSettings.backgroundColor;
    }
    if(advancedSettings.hasOwnProperty('themeCol1')) {
      document.getElementById('custom-theme-col1').value = advancedSettings.themeCol1;
    }
    if(advancedSettings.hasOwnProperty('themeCol2')) {
      document.getElementById('custom-theme-col2').value = advancedSettings.themeCol2;
    }
    if(advancedSettings.hasOwnProperty('themeCol3')) {
      document.getElementById('custom-theme-col3').value = advancedSettings.themeCol3;
    }
    if(advancedSettings.hasOwnProperty('themeCol4')) {
      document.getElementById('custom-theme-col4').value = advancedSettings.themeCol4;
    }
    if(advancedSettings.hasOwnProperty('themeCol5')) {
      document.getElementById('custom-theme-col5').value = advancedSettings.themeCol5;
    }
    if(advancedSettings.hasOwnProperty('themeCol6')) {
      document.getElementById('custom-theme-col6').value = advancedSettings.themeCol6;
    }
    if(advancedSettings.hasOwnProperty('themeCol7')) {
      document.getElementById('custom-theme-col7').value = advancedSettings.themeCol7;
    }

    if(IS_DEVELOPER_MODE) {
      if(advancedSettings.hasOwnProperty('customModName')) {
        document.getElementById('custom-mod-name').value = advancedSettings.customModName;
      }
      if(advancedSettings.hasOwnProperty('customUrl')) {
        document.getElementById('custom-url').value = advancedSettings.customUrl;
      }
    }
  }

  function updateAdvancedSetting(settingName, settingValue) {
    advancedSettings[settingName] = settingValue;
  }

  function applyAdvancedSettingsToGame() {
    if(attemptsApplyingAdvancedSettings > 10) {
      //Stop trying to apply advanced setting if we've tried this much and the game still isn't ready
      console.log('window.snake is still not available after retrying many times. Skipping applying advanced settings');
    } else if(!window.snake) {
      //Game not ready. Wait a bit and then try again.
      console.log('window.snake not ready for when we apply advanced settings. Will retry again after waiting.');
      attemptsApplyingAdvancedSettings++;
      setTimeout(applyAdvancedSettingsToGame, 300);
    } else {
      if(advancedSettings.fbxCentered && window.location.href.includes('fbx?fbx=snake_arcade')) {
        //Copied from GoogleSnakeCenteredFBX mod
        document.getElementsByTagName('div')[0].style = 'position:relative;top:50%;transform:translate(0%,-50%);margin:auto;';
      }
      if(advancedSettings.timerStartsOn) {
        window.snake.speedrun();
      }
      if(advancedSettings.useCustomTheme) {
        window.snake.setCustomTheme(
          advancedSettings.themeCol1 ?? '#1D1D1D',
          advancedSettings.themeCol2 ?? '#161616',
          advancedSettings.themeCol3 ?? '#111111',
          advancedSettings.themeCol4 ?? '#000000',
          advancedSettings.themeCol5 ?? '#1D1D1D',
          advancedSettings.themeCol6 ?? '#111111',
          advancedSettings.themeCol7 ?? '#000000'
        );
      }
      if(window.location.href.includes('fbx?fbx=snake_arcade')) {
        document.body.style.backgroundColor = advancedSettings.backgroundColor;
      }
    }
  }
}

window.testMod = {};
window.testMod.runCodeBefore = function() {
  
}
window.testMod.alterSnakeCode = function(code) {
  code = code.replaceAll('.66','.36')

  return code;
}
window.testMod.runCodeAfter = function() {

}

function loadAndRunCodeSynchronous(url) {
  let req = new XMLHttpRequest();
  req.open('GET', url, false);
  req.onload = function() {
    if(this.status === 200) {
      (1,eval)(this.responseText);
    } else {
      console.log(`Loading selected mod returned non-200 status. Received: ${this.status}`);
    }
  };
  req.error = function(event) {
    console.error(`Error when attempting to retrieve mod code from ${url}`);
    console.log(event);
  };
  req.send();
}

window.addEventListener('load', addModSelectorPopup);

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Utility functions below
////////////////////////////////////////////////////////////////////////////////////////////////////////////

window.swapInMainClassPrototype = function(mainClass, functionText) {
  if(/^[$a-zA-Z0-9_]{0,6}=function/.test(functionText)) {
    throw new Error("Error, function is of form abc=function(), but this only works for stuff like s_.abc=function()");
  }
  functionText = assertReplace(functionText, /^[$a-zA-Z0-9_]{0,6}/,`${mainClass}.prototype`);
  return functionText;
}

/*
This function will search for a function/method in some code and return this function as a string

code will usually be the snake source code

functionSignature will be regex matching the beginning of the function/method (must end in $),
for example if we are trying to find a function like s_xD = function(a, b, c, d, e) {......}
then put functionSignature = /[$a-zA-Z0-9_]{0,6}=function\(a,b,c,d,e\)$/

somethingInsideFunction will be regex matching something in the function
for example if we are trying to find a function like s_xD = function(a, b, c, d, e) {...a.Xa&&10!==a.Qb...}
then put somethingInsideFunction = /a\.[$a-zA-Z0-9_]{0,6}&&10!==a\.[$a-zA-Z0-9_]{0,6}/
*/
window.findFunctionInCode = function(code, functionSignature, somethingInsideFunction, logging = false) {
  let functionSignatureSource = functionSignature.source;
  let functionSignatureFlags = functionSignature.flags;//Probably empty string

  /*Check functionSignature ends in $*/
  if (functionSignatureSource[functionSignatureSource.length - 1] !== "$") {
    throw new Error("functionSignature regex should end in $");
  }

  /*Allow line breaks after commas or =. This is bit sketchy, but should be ok as findFunctionInCode is used in a quite limited way*/
  functionSignatureSource.replaceAll(/,|=/g,'$&\\n?');
  functionSignature = new RegExp(functionSignatureSource, functionSignatureFlags);

  /*get the position of somethingInsideFunction*/
  let indexWithinFunction = code.search(somethingInsideFunction);
  if (indexWithinFunction == -1) {
    console.log("%cCouldn't find a match for somethingInsideFunction", "color:red;");
    diagnoseRegexError(code, somethingInsideFunction);
  }

  /*expand outwards from somethingInsideFunction until we get to the function signature, then count brackets
  to find the end of the function*/
  let startIndex = 0;
  for (let i = indexWithinFunction; i >= 0; i--) {
    let startOfCode = code.substring(0, i);
    startIndex = startOfCode.search(functionSignature);
    if (startIndex !== -1) {
      break;
    }
    if (i == 0) {
      throw new Error("Couldn't find function signature");
    }
  }

  let bracketCount = 0;
  let foundFirstBracket = false;
  let endIndex = 0;
  /*Use bracket counting to find the whole function*/
  let codeLength = code.length;
  for (let i = startIndex; i <= codeLength; i++) {
    if (!foundFirstBracket && code[i] == "{") {
      foundFirstBracket = true;
    }

    if (code[i] == "{") {
      bracketCount++;
    }
    if (code[i] == "}") {
      bracketCount--;
    }
    if (foundFirstBracket && bracketCount == 0) {
      endIndex = i;
      break;
    }

    if (i == codeLength) {
      throw new Error("Couldn't pair up brackets");
    }
  }

  let fullFunction = code.substring(startIndex, endIndex + 1);

  /*throw error if fullFunction doesn't contain something inside function - i.e. function signature was wrong*/
  if (fullFunction.search(somethingInsideFunction) === -1) {
    throw new Error("Function signature does not belong to the same function as somethingInsideFunction");
  }

  if (logging) {
    console.log(fullFunction);
  }

  return fullFunction;
}

/*
Same as replace, but throws an error if nothing is changed
*/
window.assertReplace = function(baseText, regex, replacement) {
  if (typeof baseText !== 'string') {
    throw new Error('String argument expected for assertReplace');
  }
  let outputText = baseText.replace(regex, replacement);

  //Throw warning if nothing is replaced
  if (baseText === outputText) {
    diagnoseRegexError(baseText, regex);
  }

  return outputText;
}

/*
Same as replaceAll, but throws an error if nothing is changed
*/
window.assertReplaceAll = function(baseText, regex, replacement) {
  if (typeof baseText !== 'string') {
    throw new Error('String argument expected for assertReplace');
  }
  let outputText = baseText.replaceAll(regex, replacement);

  //Throw warning if nothing is replaced
  if (baseText === outputText) {
    diagnoseRegexError(baseText, regex);
  }

  return outputText;
}

//Alternate way to use assertReplace. Example: code = code.assertReplace('Thing to change', 'New thing');
String.prototype.assertReplace = function(regex, replacement) {
  return assertReplace(this.toString(), regex, replacement);
};

//Same as above for assertReplaceAll.
String.prototype.assertReplaceAll = function(regex, replacement) {
  return assertReplaceAll(this.toString(), regex, replacement);
};

window.diagnoseRegexError = function(baseText, regex) {  
  if(!(regex instanceof RegExp)) {
    throw new Error('Failed to find match using string argument. No more details available');
  }

  //see if removing line breaks works - in that case we can give a more useful error message
  let oneLineText = baseText.replaceAll(/\n/g,'');
  let res = regex.test(oneLineText);

  //If line breaks don't solve the issue then throw a general error
  if (!res) {
    throw new Error('Failed to find match for regex.');
  }

  //Try to suggest correct regex to use for searching
  let regexSource = regex.source;
  let regexFlags = regex.flags;

  //Look at all the spots where line breaks might occur and try adding \n? there to see if it makes a difference
  //It might be easier to just crudely brute force putting \n? at each possible index?
  for(let breakableChar of ["%","&","\\*","\\+",",","-","\\/",":",";","<","=",">","\\?","{","\\|","}"]) {
    for(let pos = regexSource.indexOf(breakableChar); pos !== -1; pos = regexSource.indexOf(breakableChar, pos + 1)) {
      //Remake the regex with a new line at the candidate position
      let candidateRegexSource = `${regexSource.slice(0,pos + breakableChar.length)}\\n?${regexSource.slice(pos + breakableChar.length)}`;
      let candidateRegex;
      
      try{
        candidateRegex = new RegExp(candidateRegexSource, regexFlags);
      } catch(err) {
        continue;
      }

      //See if the new regex works
      let testReplaceResult = candidateRegex.test(baseText);
      if(testReplaceResult) {
        //Success we found the working regex! Give descriptive error message to user and log suggested regex with new line in correct place
        console.log(`Suggested regex improvement:
${candidateRegex}`);
        throw new Error('Suggested improvement found! Error with line break, failed to find match for regex. See logged output for regex to use instead that should hopefully fix this.');
      }
    }
  }

  throw new Error('Line break error! Failed to failed to find match for regex - most likely caused by a new line break. No suggestions provided');
}

window.appendCodeWithinSnakeModule = function(snakeCode, codeToAdd, addSemicolonAfter) {
  if(addSemicolonAfter) {
    codeToAdd += ';';
  }
  var newSnakeCode = snakeCode.replace(/}\)\(this\._s\);\n\/\/ Google Inc\./, codeToAdd + '$&');
  return newSnakeCode;
}

//Turns _.abc into _s.abc
window.swapInSnakeGlobal = function(text) {
  return assertReplace(text, /^_\./, '_s.');
}
