// ==UserScript==
// @name         Google Snake Mod Loader (Standard)
// @namespace    https://github.com/DarkSnakeGang
// @version      1.0.10
// @description  Allows you to run multiple different google snake mods
// @author       DarkSnakeGang (https://github.com/DarkSnakeGang)
// @icon         https://github.com/DarkSnakeGang/GoogleSnakeIcons/blob/main/Extras/snake_logo.png?raw=true
// @run-at       document-body
// @grant        none
// @updateURL    https://github.com/DarkSnakeGang/GoogleSnakeModLoader/raw/main/build/snake-mod-loader-standard.meta.js
// @downloadURL  https://github.com/DarkSnakeGang/GoogleSnakeModLoader/raw/main/build/snake-mod-loader-standard.user.js
// @include      /^https:\/\/(www\.)?google\.(com|ad|ae|com\.af|com\.ag|com\.ai|al|am|co\.ao|com\.ar|as|at|com\.au|az|ba|com\.bd|be|bf|bg|com\.bh|bi|bj|com\.bn|com\.bo|com\.br|bs|bt|co\.bw|by|com\.bz|ca|cd|cf|cg|ch|ci|co\.ck|cl|cm|cn|com\.co|co\.cr|com\.cu|cv|com\.cy|cz|de|dj|dk|dm|com\.do|dz|com\.ec|ee|com\.eg|es|com\.et|fi|com\.fj|fm|fr|ga|ge|gg|com\.gh|com\.gi|gl|gm|gr|com\.gt|gy|com\.hk|hn|hr|ht|hu|co\.id|ie|co\.il|im|co\.in|iq|is|it|je|com\.jm|jo|co\.jp|co\.ke|com\.kh|ki|kg|co\.kr|com\.kw|kz|la|com\.lb|li|lk|co\.ls|lt|lu|lv|com\.ly|co\.ma|md|me|mg|mk|ml|com\.mm|mn|ms|com\.mt|mu|mv|mw|com\.mx|com\.my|co\.mz|com\.na|com\.ng|com\.ni|ne|nl|no|com\.np|nr|nu|co\.nz|com\.om|com\.pa|com\.pe|com\.pg|com\.ph|com\.pk|pl|pn|com\.pr|ps|pt|com\.py|com\.qa|ro|ru|rw|com\.sa|com\.sb|sc|se|com\.sg|sh|si|sk|com\.sl|sn|so|sm|sr|st|com\.sv|td|tg|co\.th|com\.tj|tl|tm|tn|to|com\.tr|tt|com\.tw|co\.tz|com\.ua|co\.ug|co\.uk|com\.uy|co\.uz|com\.vc|co\.ve|vg|co\.vi|com\.vn|vu|ws|rs|co\.za|co\.zm|co\.zw|cat)\/search.*(snake|serpiente|serpent|serpente|%E8%B4%AA%E5%90%83%E8%9B%87|%E0%A4%B8%E0%A4%BE%E0%A4%81%E0%A4%AA|%D8%AB%D8%B9%D8%A8%D8%A7%D9%86|%D0%B7%D0%BC%D0%B5%D0%B9%D0%BA%D0%B0|%E3%83%98%E3%83%93%E3%82%B2%E3%83%BC%E3%83%A0|%E0%A4%B8%E0%A4%BE%E0%A4%AA|y%C4%B1lan|%E0%AE%AA%E0%AE%BE%E0%AE%AE%E0%AF%8D%E0%AE%AA%E0%AF%81|r%E1%BA%AFn\+s%C4%83n\+m%E1%BB%93i|%EC%8A%A4%EB%84%A4%EC%9D%B4%ED%81%AC|%E0%B9%80%E0%B8%81%E0%B8%A1%E0%B8%87%E0%B8%B9|%E1%8B%A8%E1%8A%A5%E1%89%A3%E1%89%A5\+%E1%8C%A8%E1%8B%8B%E1%89%B3|%E0%A4%B8%E0%A4%BE%E0%A4%81%E0%A4%AA|%E1%80%99%E1%80%BC%E1%80%BD%E1%80%B1|w%C4%85%C5%BC|hra\+had|had%C3%AD\+hra|slange|ular).*$/
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
// @match        https://*.google.com/search*snake*
// @match        https://*.google.ad/search*snake*
// @match        https://*.google.ae/search*snake*
// @match        https://*.google.com.af/search*snake*
// @match        https://*.google.com.ag/search*snake*
// @match        https://*.google.com.ai/search*snake*
// @match        https://*.google.al/search*snake*
// @match        https://*.google.am/search*snake*
// @match        https://*.google.co.ao/search*snake*
// @match        https://*.google.com.ar/search*snake*
// @match        https://*.google.as/search*snake*
// @match        https://*.google.at/search*snake*
// @match        https://*.google.com.au/search*snake*
// @match        https://*.google.az/search*snake*
// @match        https://*.google.ba/search*snake*
// @match        https://*.google.com.bd/search*snake*
// @match        https://*.google.be/search*snake*
// @match        https://*.google.bf/search*snake*
// @match        https://*.google.bg/search*snake*
// @match        https://*.google.com.bh/search*snake*
// @match        https://*.google.bi/search*snake*
// @match        https://*.google.bj/search*snake*
// @match        https://*.google.com.bn/search*snake*
// @match        https://*.google.com.bo/search*snake*
// @match        https://*.google.com.br/search*snake*
// @match        https://*.google.bs/search*snake*
// @match        https://*.google.bt/search*snake*
// @match        https://*.google.co.bw/search*snake*
// @match        https://*.google.by/search*snake*
// @match        https://*.google.com.bz/search*snake*
// @match        https://*.google.ca/search*snake*
// @match        https://*.google.cd/search*snake*
// @match        https://*.google.cf/search*snake*
// @match        https://*.google.cg/search*snake*
// @match        https://*.google.ch/search*snake*
// @match        https://*.google.ci/search*snake*
// @match        https://*.google.co.ck/search*snake*
// @match        https://*.google.cl/search*snake*
// @match        https://*.google.cm/search*snake*
// @match        https://*.google.cn/search*snake*
// @match        https://*.google.com.co/search*snake*
// @match        https://*.google.co.cr/search*snake*
// @match        https://*.google.com.cu/search*snake*
// @match        https://*.google.cv/search*snake*
// @match        https://*.google.com.cy/search*snake*
// @match        https://*.google.cz/search*snake*
// @match        https://*.google.de/search*snake*
// @match        https://*.google.dj/search*snake*
// @match        https://*.google.dk/search*snake*
// @match        https://*.google.dm/search*snake*
// @match        https://*.google.com.do/search*snake*
// @match        https://*.google.dz/search*snake*
// @match        https://*.google.com.ec/search*snake*
// @match        https://*.google.ee/search*snake*
// @match        https://*.google.com.eg/search*snake*
// @match        https://*.google.es/search*snake*
// @match        https://*.google.com.et/search*snake*
// @match        https://*.google.fi/search*snake*
// @match        https://*.google.com.fj/search*snake*
// @match        https://*.google.fm/search*snake*
// @match        https://*.google.fr/search*snake*
// @match        https://*.google.ga/search*snake*
// @match        https://*.google.ge/search*snake*
// @match        https://*.google.gg/search*snake*
// @match        https://*.google.com.gh/search*snake*
// @match        https://*.google.com.gi/search*snake*
// @match        https://*.google.gl/search*snake*
// @match        https://*.google.gm/search*snake*
// @match        https://*.google.gr/search*snake*
// @match        https://*.google.com.gt/search*snake*
// @match        https://*.google.gy/search*snake*
// @match        https://*.google.com.hk/search*snake*
// @match        https://*.google.hn/search*snake*
// @match        https://*.google.hr/search*snake*
// @match        https://*.google.ht/search*snake*
// @match        https://*.google.hu/search*snake*
// @match        https://*.google.co.id/search*snake*
// @match        https://*.google.ie/search*snake*
// @match        https://*.google.co.il/search*snake*
// @match        https://*.google.im/search*snake*
// @match        https://*.google.co.in/search*snake*
// @match        https://*.google.iq/search*snake*
// @match        https://*.google.is/search*snake*
// @match        https://*.google.it/search*snake*
// @match        https://*.google.je/search*snake*
// @match        https://*.google.com.jm/search*snake*
// @match        https://*.google.jo/search*snake*
// @match        https://*.google.co.jp/search*snake*
// @match        https://*.google.co.ke/search*snake*
// @match        https://*.google.com.kh/search*snake*
// @match        https://*.google.ki/search*snake*
// @match        https://*.google.kg/search*snake*
// @match        https://*.google.co.kr/search*snake*
// @match        https://*.google.com.kw/search*snake*
// @match        https://*.google.kz/search*snake*
// @match        https://*.google.la/search*snake*
// @match        https://*.google.com.lb/search*snake*
// @match        https://*.google.li/search*snake*
// @match        https://*.google.lk/search*snake*
// @match        https://*.google.co.ls/search*snake*
// @match        https://*.google.lt/search*snake*
// @match        https://*.google.lu/search*snake*
// @match        https://*.google.lv/search*snake*
// @match        https://*.google.com.ly/search*snake*
// @match        https://*.google.co.ma/search*snake*
// @match        https://*.google.md/search*snake*
// @match        https://*.google.me/search*snake*
// @match        https://*.google.mg/search*snake*
// @match        https://*.google.mk/search*snake*
// @match        https://*.google.ml/search*snake*
// @match        https://*.google.com.mm/search*snake*
// @match        https://*.google.mn/search*snake*
// @match        https://*.google.ms/search*snake*
// @match        https://*.google.com.mt/search*snake*
// @match        https://*.google.mu/search*snake*
// @match        https://*.google.mv/search*snake*
// @match        https://*.google.mw/search*snake*
// @match        https://*.google.com.mx/search*snake*
// @match        https://*.google.com.my/search*snake*
// @match        https://*.google.co.mz/search*snake*
// @match        https://*.google.com.na/search*snake*
// @match        https://*.google.com.ng/search*snake*
// @match        https://*.google.com.ni/search*snake*
// @match        https://*.google.ne/search*snake*
// @match        https://*.google.nl/search*snake*
// @match        https://*.google.no/search*snake*
// @match        https://*.google.com.np/search*snake*
// @match        https://*.google.nr/search*snake*
// @match        https://*.google.nu/search*snake*
// @match        https://*.google.co.nz/search*snake*
// @match        https://*.google.com.om/search*snake*
// @match        https://*.google.com.pa/search*snake*
// @match        https://*.google.com.pe/search*snake*
// @match        https://*.google.com.pg/search*snake*
// @match        https://*.google.com.ph/search*snake*
// @match        https://*.google.com.pk/search*snake*
// @match        https://*.google.pl/search*snake*
// @match        https://*.google.pn/search*snake*
// @match        https://*.google.com.pr/search*snake*
// @match        https://*.google.ps/search*snake*
// @match        https://*.google.pt/search*snake*
// @match        https://*.google.com.py/search*snake*
// @match        https://*.google.com.qa/search*snake*
// @match        https://*.google.ro/search*snake*
// @match        https://*.google.ru/search*snake*
// @match        https://*.google.rw/search*snake*
// @match        https://*.google.com.sa/search*snake*
// @match        https://*.google.com.sb/search*snake*
// @match        https://*.google.sc/search*snake*
// @match        https://*.google.se/search*snake*
// @match        https://*.google.com.sg/search*snake*
// @match        https://*.google.sh/search*snake*
// @match        https://*.google.si/search*snake*
// @match        https://*.google.sk/search*snake*
// @match        https://*.google.com.sl/search*snake*
// @match        https://*.google.sn/search*snake*
// @match        https://*.google.so/search*snake*
// @match        https://*.google.sm/search*snake*
// @match        https://*.google.sr/search*snake*
// @match        https://*.google.st/search*snake*
// @match        https://*.google.com.sv/search*snake*
// @match        https://*.google.td/search*snake*
// @match        https://*.google.tg/search*snake*
// @match        https://*.google.co.th/search*snake*
// @match        https://*.google.com.tj/search*snake*
// @match        https://*.google.tl/search*snake*
// @match        https://*.google.tm/search*snake*
// @match        https://*.google.tn/search*snake*
// @match        https://*.google.to/search*snake*
// @match        https://*.google.com.tr/search*snake*
// @match        https://*.google.tt/search*snake*
// @match        https://*.google.com.tw/search*snake*
// @match        https://*.google.co.tz/search*snake*
// @match        https://*.google.com.ua/search*snake*
// @match        https://*.google.co.ug/search*snake*
// @match        https://*.google.co.uk/search*snake*
// @match        https://*.google.com.uy/search*snake*
// @match        https://*.google.co.uz/search*snake*
// @match        https://*.google.com.vc/search*snake*
// @match        https://*.google.co.ve/search*snake*
// @match        https://*.google.vg/search*snake*
// @match        https://*.google.co.vi/search*snake*
// @match        https://*.google.com.vn/search*snake*
// @match        https://*.google.vu/search*snake*
// @match        https://*.google.ws/search*snake*
// @match        https://*.google.rs/search*snake*
// @match        https://*.google.co.za/search*snake*
// @match        https://*.google.co.zm/search*snake*
// @match        https://*.google.co.zw/search*snake*
// @match        https://*.google.cat/search*snake*
// ==/UserScript==