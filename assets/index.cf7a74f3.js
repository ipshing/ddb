(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))n(d);new MutationObserver(d=>{for(const o of d)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function a(d){const o={};return d.integrity&&(o.integrity=d.integrity),d.referrerpolicy&&(o.referrerPolicy=d.referrerpolicy),d.crossorigin==="use-credentials"?o.credentials="include":d.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(d){if(d.ep)return;d.ep=!0;const o=a(d);fetch(d.href,o)}})();function A(){}function at(e){return e()}function W(){return Object.create(null)}function B(e){e.forEach(at)}function st(e){return typeof e=="function"}function ot(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let C;function nt(e,t){return C||(C=document.createElement("a")),C.href=t,e===C.href}function mt(e){return Object.keys(e).length===0}function h(e,t){e.appendChild(t)}function _(e,t,a){e.insertBefore(t,a||null)}function f(e){e.parentNode.removeChild(e)}function $(e,t){for(let a=0;a<e.length;a+=1)e[a]&&e[a].d(t)}function b(e){return document.createElement(e)}function E(e){return document.createTextNode(e)}function g(){return E(" ")}function dt(){return E("")}function G(e,t,a,n){return e.addEventListener(t,a,n),()=>e.removeEventListener(t,a,n)}function m(e,t,a){a==null?e.removeAttribute(t):e.getAttribute(t)!==a&&e.setAttribute(t,a)}function wt(e){return Array.from(e.childNodes)}function P(e,t,a,n){a===null?e.style.removeProperty(t):e.style.setProperty(t,a,n?"important":"")}let L;function S(e){L=e}const k=[],H=[],x=[],I=[],lt=Promise.resolve();let J=!1;function pt(){J||(J=!0,lt.then(rt))}function N(e){x.push(e)}const F=new Set;let M=0;function rt(){const e=L;do{for(;M<k.length;){const t=k[M];M++,S(t),ct(t.$$)}for(S(null),k.length=0,M=0;H.length;)H.pop()();for(let t=0;t<x.length;t+=1){const a=x[t];F.has(a)||(F.add(a),a())}x.length=0}while(k.length);for(;I.length;)I.pop()();J=!1,F.clear(),S(e)}function ct(e){if(e.fragment!==null){e.update(),B(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(N)}}const ut=new Set;function ht(e,t){e&&e.i&&(ut.delete(e),e.i(t))}function bt(e,t,a,n){const{fragment:d,on_mount:o,on_destroy:r,after_update:u}=e.$$;d&&d.m(t,a),n||N(()=>{const w=o.map(at).filter(st);r?r.push(...w):B(w),e.$$.on_mount=[]}),u.forEach(N)}function it(e,t){const a=e.$$;a.fragment!==null&&(B(a.on_destroy),a.fragment&&a.fragment.d(t),a.on_destroy=a.fragment=null,a.ctx=[])}function gt(e,t){e.$$.dirty[0]===-1&&(k.push(e),pt(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function yt(e,t,a,n,d,o,r,u=[-1]){const w=L;S(e);const s=e.$$={fragment:null,ctx:null,props:o,update:A,not_equal:d,bound:W(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(w?w.$$.context:[])),callbacks:W(),dirty:u,skip_bound:!1,root:t.target||w.$$.root};r&&r(s.root);let l=!1;if(s.ctx=a?a(e,t.props||{},(p,c,...v)=>{const j=v.length?v[0]:c;return s.ctx&&d(s.ctx[p],s.ctx[p]=j)&&(!s.skip_bound&&s.bound[p]&&s.bound[p](j),l&&gt(e,p)),c}):[],s.update(),l=!0,B(s.before_update),s.fragment=n?n(s.ctx):!1,t.target){if(t.hydrate){const p=wt(t.target);s.fragment&&s.fragment.l(p),p.forEach(f)}else s.fragment&&s.fragment.c();t.intro&&ht(e.$$.fragment),bt(e,t.target,t.anchor,t.customElement),rt()}S(w)}class ft{$destroy(){it(this,1),this.$destroy=A}$on(t,a){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(a),()=>{const d=n.indexOf(a);d!==-1&&n.splice(d,1)}}$set(t){this.$$set&&!mt(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const q=[{name:"Classes",backdrops:[{name:"Barbarian",url:"https://www.dndbeyond.com/avatars/61/471/636453122222914252.jpeg",thumbUrl:"https://www.dndbeyond.com/avatars/61/474/636453122224476777.jpeg"},{name:"Bard",url:"https://www.dndbeyond.com/avatars/61/475/636453123635897181.jpeg",thumbUrl:"https://www.dndbeyond.com/avatars/61/478/636453123637459681.jpeg"},{name:"Cleric",url:"https://www.dndbeyond.com/avatars/61/484/636453131399186965.jpeg",thumbUrl:"https://www.dndbeyond.com/avatars/61/487/636453131400749482.jpeg"},{name:"Druid",url:"https://www.dndbeyond.com/avatars/61/510/636453152253102859.jpeg",thumbUrl:"https://www.dndbeyond.com/avatars/61/513/636453152254665392.jpeg"},{name:"Fighter",url:"https://www.dndbeyond.com/avatars/61/514/636453152540608423.jpeg",thumbUrl:"https://www.dndbeyond.com/avatars/61/517/636453152542014800.jpeg"},{name:"Monk",url:"https://www.dndbeyond.com/avatars/61/522/636453154644283609.jpeg",thumbUrl:"https://www.dndbeyond.com/avatars/61/525/636453154645689772.jpeg"},{name:"Paladin",url:"https://www.dndbeyond.com/avatars/61/527/636453155878618486.jpeg",thumbUrl:"https://www.dndbeyond.com/avatars/61/530/636453155880181287.jpeg"},{name:"Ranger",url:"https://www.dndbeyond.com/avatars/61/532/636453156970671727.jpeg",thumbUrl:"https://www.dndbeyond.com/avatars/61/535/636453156972234347.jpeg"},{name:"Rogue",url:"https://www.dndbeyond.com/avatars/61/544/636453167791328397.jpeg",thumbUrl:"https://www.dndbeyond.com/avatars/61/547/636453167794140909.jpeg"},{name:"Sorcerer",url:"https://www.dndbeyond.com/avatars/61/548/636453168590672370.jpeg",thumbUrl:"https://www.dndbeyond.com/avatars/61/551/636453168592547146.jpeg"},{name:"Warlock",url:"https://www.dndbeyond.com/avatars/61/552/636453168936963231.jpeg",thumbUrl:"https://www.dndbeyond.com/avatars/61/555/636453168938525788.jpeg"},{name:"Wizard",url:"https://www.dndbeyond.com/avatars/61/556/636453169376650613.jpeg",thumbUrl:"https://www.dndbeyond.com/avatars/61/559/636453169378067426.jpeg"},{name:"Blood Hunter",url:"https://www.dndbeyond.com/avatars/4570/954/636729093543039176.jpeg",thumbUrl:"https://www.dndbeyond.com/avatars/4571/48/636729105261406670.png"},{name:"Artificer",url:"https://www.dndbeyond.com/avatars/15044/294/637461368825808319.jpeg",thumbUrl:"https://www.dndbeyond.com/avatars/15044/297/637461368833142361.jpeg"}]},{name:"Xanathars Guide to Everything",backdrops:[{name:"XGtE 06",url:"https://www.dndbeyond.com/avatars/61/586/636453175346328886.jpeg",thumbUrl:"https://www.dndbeyond.com/avatars/61/589/636453175347735185.jpeg"}]},{name:"Waterdeep",backdrops:[{name:"WDotMM 02",url:"https://www.dndbeyond.com/avatars/4809/85/636771318641738325.jpeg",thumbUrl:"https://www.dndbeyond.com/avatars/4809/88/636771318647208137.jpeg"}]},{name:"Eberron",backdrops:[{name:"ERFTLW 05",url:"https://www.dndbeyond.com/avatars/7581/254/637078925212341825.jpeg",thumbUrl:"https://www.dndbeyond.com/avatars/7581/257/637078925218113272.jpeg"}]},{name:"Fall",backdrops:[{name:"Sub BD 11-21 1",url:"https://www.dndbeyond.com/avatars/21397/978/637714794664321323.jpeg",thumbUrl:"https://www.dndbeyond.com/avatars/21397/981/637714794669951313.jpeg"},{name:"Sub BD 11-21 2",url:"https://www.dndbeyond.com/avatars/21398/9/637714795561006767.jpeg",thumbUrl:"https://www.dndbeyond.com/avatars/21398/13/637714795566546750.jpeg"},{name:"Sub BD 11-21 3",url:"https://www.dndbeyond.com/avatars/21398/33/637714796248722509.jpeg",thumbUrl:"https://www.dndbeyond.com/avatars/21398/36/637714796254492528.jpeg"},{name:"Sub BD 11-21-4",url:"https://www.dndbeyond.com/avatars/21398/59/637714796919897505.jpeg",thumbUrl:"https://www.dndbeyond.com/avatars/21398/62/637714796924997514.jpeg"}]},{name:"DM",backdrops:[{name:"Sub BD 02-22 1",url:"https://www.dndbeyond.com/avatars/23564/611/637798442672740776.jpeg",thumbUrl:"https://www.dndbeyond.com/avatars/23564/533/637798439317930063.jpeg"},{name:"Sub BD 02-22 2",url:"https://www.dndbeyond.com/avatars/23564/625/637798442972880624.jpeg",thumbUrl:"https://www.dndbeyond.com/avatars/23564/540/637798439681939444.jpeg"},{name:"Sub BD 02-22 3",url:"https://www.dndbeyond.com/avatars/23564/632/637798443166310588.jpeg",thumbUrl:"https://www.dndbeyond.com/avatars/23564/548/637798439867239338.jpeg"},{name:"Sub BD 02-22 4",url:"https://www.dndbeyond.com/avatars/23564/642/637798443330826992.jpeg",thumbUrl:"https://www.dndbeyond.com/avatars/23564/558/637798440077959288.jpeg"}]},{name:"Storm",backdrops:[{name:"Sub BD 04-22 1",url:"https://www.dndbeyond.com/avatars/24795/360/637843465906235545.jpeg",thumbUrl:"https://www.dndbeyond.com/avatars/24795/363/637843465914305544.jpeg"},{name:"Sub BD 04-22 2",url:"https://www.dndbeyond.com/avatars/24795/382/637843466746046107.jpeg",thumbUrl:"https://www.dndbeyond.com/avatars/24795/386/637843466752506124.jpeg"},{name:"Sub BD 04-22 3",url:"https://www.dndbeyond.com/avatars/24795/408/637843467564001063.jpeg",thumbUrl:"https://www.dndbeyond.com/avatars/24795/411/637843467569381063.jpeg"},{name:"Sub BD 04-22 4",url:"https://www.dndbeyond.com/avatars/24795/432/637843468542423303.jpeg",thumbUrl:"https://www.dndbeyond.com/avatars/24795/435/637843468548413306.jpeg"}]},{name:"Vecna",backdrops:[{name:"Sub BD 06-22 1",url:"https://www.dndbeyond.com/avatars/26232/405/637898702897158707.jpeg",thumbUrl:"https://www.dndbeyond.com/avatars/26232/410/637898702903328641.jpeg"},{name:"Sub BD 06-22 2",url:"https://www.dndbeyond.com/avatars/26232/431/637898703732959708.jpeg",thumbUrl:"https://www.dndbeyond.com/avatars/26232/434/637898703739909858.jpeg"},{name:"Sub BD 06-22 3",url:"https://www.dndbeyond.com/avatars/26232/460/637898704437137411.jpeg",thumbUrl:"https://www.dndbeyond.com/avatars/26232/463/637898704444627397.jpeg"},{name:"Sub BD 06-22 4",url:"https://www.dndbeyond.com/avatars/26232/506/637898705736029947.jpeg",thumbUrl:"https://www.dndbeyond.com/avatars/26232/510/637898705743249946.jpeg"}]},{name:"Planar",backdrops:[{name:"Sub BD 08-22 1",url:"https://www.dndbeyond.com/avatars/27776/723/637951657914547485.jpeg",thumbUrl:"https://www.dndbeyond.com/avatars/27632/723/637947022430818977.jpeg"},{name:"Sub BD 08-22 2",url:"https://www.dndbeyond.com/avatars/27776/742/637951658213537383.jpeg",thumbUrl:"https://www.dndbeyond.com/avatars/27632/744/637947023364318966.jpeg"},{name:"Sub BD 08-22 3",url:"https://www.dndbeyond.com/avatars/27753/715/637950831606437567.jpeg",thumbUrl:"https://www.dndbeyond.com/avatars/27632/764/637947023880858974.jpeg"},{name:"Sub BD 08-22 4",url:"https://www.dndbeyond.com/avatars/27776/761/637951658516727225.jpeg",thumbUrl:"https://www.dndbeyond.com/avatars/27632/777/637947024412358946.jpeg"},{name:"Sub BD 08-22 5",url:"https://www.dndbeyond.com/avatars/27776/787/637951658955739813.jpeg",thumbUrl:"https://www.dndbeyond.com/avatars/27632/806/637947024942268888.jpeg"}]},{name:"Strixhaven: A Curriculum of Chaos",backdrops:[{name:"Strix 1",url:"https://www.dndbeyond.com/avatars/22155/113/637744203870538718.jpeg",thumbUrl:"https://www.dndbeyond.com/avatars/22155/116/637744203877818719.jpeg"},{name:"Strix 2",url:"https://www.dndbeyond.com/avatars/22155/280/637744208679329836.jpeg",thumbUrl:"https://www.dndbeyond.com/avatars/22155/283/637744208685049716.jpeg"},{name:"Strix 3",url:"https://www.dndbeyond.com/avatars/22155/362/637744211130347368.jpeg",thumbUrl:"https://www.dndbeyond.com/avatars/22155/365/637744211136347368.jpeg"},{name:"Strix 4",url:"https://www.dndbeyond.com/avatars/22155/413/637744212848873638.jpeg",thumbUrl:"https://www.dndbeyond.com/avatars/22155/416/637744212855123659.jpeg"},{name:"Strix 5",url:"https://www.dndbeyond.com/avatars/22155/550/637744217233626523.jpeg",thumbUrl:"https://www.dndbeyond.com/avatars/22155/553/637744217239516568.jpeg"},{name:"Strix 6",url:"https://www.dndbeyond.com/avatars/22155/712/637744222161848732.jpeg",thumbUrl:"https://www.dndbeyond.com/avatars/22155/715/637744222167238734.jpeg"},{name:"Strix 7",url:"https://www.dndbeyond.com/avatars/22155/739/637744222793992755.jpeg",thumbUrl:"https://www.dndbeyond.com/avatars/22155/742/637744222800752701.jpeg"},{name:"Strix 8",url:"https://www.dndbeyond.com/avatars/22155/770/637744223637465418.jpeg",thumbUrl:"https://www.dndbeyond.com/avatars/22155/773/637744223642745421.jpeg"}]},{name:"Monsters of the Multiverse",backdrops:[{name:"MotM 1",url:"https://www.dndbeyond.com/avatars/25574/468/637873404703699173.jpeg",thumbUrl:"https://www.dndbeyond.com/avatars/25574/471/637873404713539047.jpeg"},{name:"MotM 2",url:"https://www.dndbeyond.com/avatars/25574/477/637873405397028137.jpeg",thumbUrl:"https://www.dndbeyond.com/avatars/25574/480/637873405401938129.jpeg"},{name:"MotM 3",url:"https://www.dndbeyond.com/avatars/25574/502/637873406915493706.jpeg",thumbUrl:"https://www.dndbeyond.com/avatars/25574/505/637873406920393700.jpeg"},{name:"MotM 4",url:"https://www.dndbeyond.com/avatars/25574/513/637873407566518162.jpeg",thumbUrl:"https://www.dndbeyond.com/avatars/25574/516/637873407573408144.jpeg"},{name:"MotM 5",url:"https://www.dndbeyond.com/avatars/25574/534/637873409033406224.jpeg",thumbUrl:"https://www.dndbeyond.com/avatars/25574/537/637873409039896247.jpeg"},{name:"MotM 6",url:"https://www.dndbeyond.com/avatars/25574/541/637873409447443819.jpeg",thumbUrl:"https://www.dndbeyond.com/avatars/25574/544/637873409453733807.jpeg"},{name:"MotM 7",url:"(https://www.dndbeyond.com/avatars/25574/551/637873409907430742.jpeg",thumbUrl:"https://www.dndbeyond.com/avatars/25574/554/637873409913170733.jpeg"},{name:"MotM 8",url:"https://www.dndbeyond.com/avatars/25574/567/637873410614331661.jpeg",thumbUrl:"https://www.dndbeyond.com/avatars/25574/570/637873410620031565.jpeg"}]},{name:"Journeys Through the Radiant Citadel",backdrops:[{name:"JttRC 1",url:"https://www.dndbeyond.com/avatars/26378/685/637903894269163300.jpeg",thumbUrl:"https://www.dndbeyond.com/avatars/26378/688/637903894276503106.jpeg"},{name:"JttRC 2",url:"https://www.dndbeyond.com/avatars/26378/767/637903897526579094.jpeg",thumbUrl:"https://www.dndbeyond.com/avatars/26378/770/637903897536309077.jpeg"},{name:"JttRC 3",url:"https://www.dndbeyond.com/avatars/26378/788/637903898210958873.jpeg",thumbUrl:"https://www.dndbeyond.com/avatars/26378/791/637903898216558824.jpeg"},{name:"JttRC 4",url:"https://www.dndbeyond.com/avatars/26380/958/637903966920221571.jpeg",thumbUrl:"https://www.dndbeyond.com/avatars/26378/839/637903899995436676.jpeg"},{name:"JttRC 5",url:"https://www.dndbeyond.com/avatars/26381/26/637903968794660165.jpeg",thumbUrl:"https://www.dndbeyond.com/avatars/26378/880/637903900983909453.jpeg"},{name:"JttRC 6",url:"https://www.dndbeyond.com/avatars/26378/904/637903902094872934.jpeg",thumbUrl:"https://www.dndbeyond.com/avatars/26378/907/637903902100342943.jpeg"},{name:"JttRC 7",url:"https://www.dndbeyond.com/avatars/26381/8/637903968072179741.jpeg",thumbUrl:"https://www.dndbeyond.com/avatars/26378/934/637903903028307244.jpeg"},{name:"JttRC 8",url:"https://www.dndbeyond.com/avatars/26378/966/637903903863899721.jpeg",thumbUrl:"https://www.dndbeyond.com/avatars/26378/969/637903903869429873.jpeg"}]}],V=[{name:"Classes",frames:[{name:"Barbarian",url:"https://www.dndbeyond.com/avatars/25669/757/637877291810176154.png",thumbUrl:"https://www.dndbeyond.com/avatars/25669/757/637877291810176154.png",isAnimated:!1},{name:"Bard",url:"https://www.dndbeyond.com/attachments/9/812/motm-animated-bard.png",thumbUrl:"https://www.dndbeyond.com/avatars/25669/776/637877292319256507.png",isAnimated:!0},{name:"Druid",url:"https://www.dndbeyond.com/attachments/9/810/motm-animated-druid.png",thumbUrl:"https://www.dndbeyond.com/avatars/25669/791/637877292804626103.png",isAnimated:!0},{name:"Fighter",url:"https://www.dndbeyond.com/attachments/9/811/motm-animated-fighter.png",thumbUrl:"https://www.dndbeyond.com/avatars/25669/812/637877293425806537.png",isAnimated:!0},{name:"Paladin",url:"https://www.dndbeyond.com/avatars/25669/828/637877294100507008.png",thumbUrl:"https://www.dndbeyond.com/avatars/25669/828/637877294100507008.png",isAnimated:!1},{name:"Ranger",url:"https://www.dndbeyond.com/avatars/25669/850/637877294798383714.png",thumbUrl:"https://www.dndbeyond.com/avatars/25669/850/637877294798383714.png",isAnimated:!1},{name:"Rogue",url:"https://www.dndbeyond.com/avatars/25669/868/637877295292992081.png",thumbUrl:"https://www.dndbeyond.com/avatars/25669/868/637877295292992081.png",isAnimated:!1},{name:"Warlock",url:"https://www.dndbeyond.com/avatars/25669/882/637877295791801189.png",thumbUrl:"https://www.dndbeyond.com/avatars/25669/882/637877295791801189.png",isAnimated:!1}]},{name:"Baldur's Gate",frames:[{name:"Nine Hells",url:"https://www.dndbeyond.com/avatars/7169/957/637042612736861450.png",thumbUrl:"https://www.dndbeyond.com/avatars/7169/957/637042612736861450.png",isAnimated:!1}]},{name:"Eberron",frames:[{name:"Spore Cloud",url:"https://www.dndbeyond.com/avatars/7607/697/637081443520127635.png",thumbUrl:"https://www.dndbeyond.com/avatars/7607/697/637081443520127635.png",isAnimated:!1}]},{name:"Van Richten's Guide to Ravenloft",frames:[{name:"Ankhtepot",url:"https://www.dndbeyond.com/avatars/17683/647/637566132545935398.png",thumbUrl:"https://www.dndbeyond.com/avatars/17683/647/637566132545935398.png",isAnimated:!1}]},{name:"D&D Beyond",frames:[{name:"Pride",url:"https://www.dndbeyond.com/avatars/18435/714/637596254218666362.png",thumbUrl:"https://www.dndbeyond.com/avatars/18435/714/637596254218666362.png",isAnimated:!1}]},{name:"Spooky",frames:[{name:"Candy",url:"https://www.dndbeyond.com/avatars/20520/465/637679446969468886.png",thumbUrl:"https://www.dndbeyond.com/avatars/20520/465/637679446969468886.png",isAnimated:!1},{name:"Hag Hair",url:"https://www.dndbeyond.com/avatars/20520/478/637679447479267781.png",thumbUrl:"https://www.dndbeyond.com/avatars/20520/478/637679447479267781.png",isAnimated:!1},{name:"Rib Cage",url:"https://www.dndbeyond.com/avatars/20520/494/637679448041564461.png",thumbUrl:"https://www.dndbeyond.com/avatars/20520/494/637679448041564461.png",isAnimated:!1},{name:"Slime Cube",url:"https://www.dndbeyond.com/avatars/20520/510/637679448501764046.png",thumbUrl:"https://www.dndbeyond.com/avatars/20520/510/637679448501764046.png",isAnimated:!1}]},{name:"Spring",frames:[{name:"Ioun Stones",url:"https://www.dndbeyond.com/avatars/24156/892/637819369858764973.png",thumbUrl:"https://www.dndbeyond.com/avatars/24156/892/637819369858764973.png",isAnimated:!1},{name:"Luck Feat",url:"https://www.dndbeyond.com/avatars/24156/912/637819370575235532.png",thumbUrl:"https://www.dndbeyond.com/avatars/24156/912/637819370575235532.png",isAnimated:!1},{name:"Powder Bursts",url:"https://www.dndbeyond.com/avatars/24157/159/637819378567349302.png",thumbUrl:"https://www.dndbeyond.com/avatars/24157/159/637819378567349302.png",isAnimated:!1},{name:"Spring Festival",url:"https://www.dndbeyond.com/avatars/24172/636/637820028059509714.png",thumbUrl:"https://www.dndbeyond.com/avatars/24172/636/637820028059509714.png",isAnimated:!1}]},{name:"Space",frames:[{name:"Eclipse",url:"https://www.dndbeyond.com/attachments/9/803/subs-202205-animated-eclipse.png",thumbUrl:"https://www.dndbeyond.com/avatars/25445/269/637868450597366922.png",isAnimated:!0},{name:"Galaxy",url:"https://www.dndbeyond.com/attachments/9/804/subs-202205-animated-galaxy.png",thumbUrl:"https://www.dndbeyond.com/avatars/25445/549/637868462136080518.png",isAnimated:!0},{name:"Solar Flare",url:"https://www.dndbeyond.com/attachments/9/801/subs-202205-animated-solar-flare.png",thumbUrl:"https://www.dndbeyond.com/avatars/25445/917/637868476416460835.png",isAnimated:!0},{name:"Warp",url:"https://www.dndbeyond.com/attachments/9/802/subs-202205-animated-warp.png",thumbUrl:"https://www.dndbeyond.com/avatars/25446/3/637868479496771107.png",isAnimated:!0}]},{name:"Schools of Magic",frames:[{name:"Abjuration",url:"https://www.dndbeyond.com/avatars/28293/741/637968708411063316.png",thumbUrl:"https://www.dndbeyond.com/avatars/28293/741/637968708411063316.png",isAnimated:!1},{name:"Conjuration",url:"https://www.dndbeyond.com/avatars/28293/776/637968709237923075.png",thumbUrl:"https://www.dndbeyond.com/avatars/28293/776/637968709237923075.png",isAnimated:!1},{name:"Divination",url:"https://www.dndbeyond.com/avatars/28293/954/637968714831311367.png",thumbUrl:"https://www.dndbeyond.com/avatars/28293/954/637968714831311367.png",isAnimated:!1},{name:"Enchantment",url:"https://www.dndbeyond.com/avatars/28293/981/637968715479541245.png",thumbUrl:"https://www.dndbeyond.com/avatars/28293/981/637968715479541245.png",isAnimated:!1},{name:"Evocation",url:"https://www.dndbeyond.com/avatars/28293/998/637968715977391036.png",thumbUrl:"https://www.dndbeyond.com/avatars/28293/998/637968715977391036.png",isAnimated:!1},{name:"Illusion",url:"https://www.dndbeyond.com/avatars/28294/20/637968716539782331.png",thumbUrl:"https://www.dndbeyond.com/avatars/28294/20/637968716539782331.png",isAnimated:!1},{name:"Necromancy",url:"https://www.dndbeyond.com/avatars/28294/37/637968717131912775.png",thumbUrl:"https://www.dndbeyond.com/avatars/28294/37/637968717131912775.png",isAnimated:!1},{name:"Transmutation",url:"https://www.dndbeyond.com/avatars/28294/67/637968718002053016.png",thumbUrl:"https://www.dndbeyond.com/avatars/28294/67/637968718002053016.png",isAnimated:!1}]},{name:"Strixhaven: A Curriculum of Chaos",frames:[{name:"Central Campus Stones",url:"https://www.dndbeyond.com/attachments/9/232/sacoc_animated_central_campus_stones.png",thumbUrl:"https://www.dndbeyond.com/avatars/22066/43/637740787361199587.png",isAnimated:!0},{name:"Elemental Transport Stones",url:"https://www.dndbeyond.com/attachments/9/233/sacoc_animated_elemental_transport_stones.png",thumbUrl:"https://www.dndbeyond.com/avatars/22066/62/637740787767999856.png",isAnimated:!0},{name:"Guide",url:"https://www.dndbeyond.com/avatars/22066/75/637740788112761638.png",thumbUrl:"https://www.dndbeyond.com/avatars/22066/75/637740788112761638.png",isAnimated:!1},{name:"Owl",url:"https://www.dndbeyond.com/avatars/22066/84/637740788551331861.png",thumbUrl:"https://www.dndbeyond.com/avatars/22066/84/637740788551331861.png",isAnimated:!1},{name:"Runestone",url:"https://www.dndbeyond.com/avatars/22157/265/637744267387735810.png",thumbUrl:"https://www.dndbeyond.com/avatars/22157/265/637744267387735810.png",isAnimated:!1},{name:"School Dance",url:"https://www.dndbeyond.com/attachments/9/234/sacoc_animated_school_dance.png",thumbUrl:"https://www.dndbeyond.com/avatars/22066/107/637740788978390709.png",isAnimated:!0},{name:"Scroll",url:"https://www.dndbeyond.com/avatars/22066/116/637740789321268451.png",thumbUrl:"https://www.dndbeyond.com/avatars/22066/116/637740789321268451.png",isAnimated:!1},{name:"Spellbook",url:"https://www.dndbeyond.com/avatars/22066/132/637740789745468541.png",thumbUrl:"https://www.dndbeyond.com/avatars/22066/132/637740789745468541.png",isAnimated:!1}]},{name:"Journeys Through the Radiant Citadel",frames:[{name:"Diamond",url:"https://www.dndbeyond.com/avatars/26188/570/637897030607397001.png",thumbUrl:"https://www.dndbeyond.com/avatars/26188/570/637897030607397001.png",isAnimated:!1},{name:"Dragon",url:"https://www.dndbeyond.com/attachments/9/890/jttrc-animated-dragon.png",thumbUrl:"https://www.dndbeyond.com/avatars/26188/599/637897031406659951.png",isAnimated:!0},{name:"Flowers",url:"https://www.dndbeyond.com/avatars/26188/608/637897031911068673.png",thumbUrl:"https://www.dndbeyond.com/avatars/26188/608/637897031911068673.png",isAnimated:!1},{name:"Jewels",url:"https://www.dndbeyond.com/attachments/9/888/jttrc-animated-jewels.png",thumbUrl:"https://www.dndbeyond.com/avatars/26188/622/637897032568843000.png",isAnimated:!0},{name:"Macaw",url:"https://www.dndbeyond.com/avatars/26188/632/637897033039553433.png",thumbUrl:"https://www.dndbeyond.com/avatars/26188/632/637897033039553433.png",isAnimated:!1},{name:"Neon",url:"https://www.dndbeyond.com/attachments/9/889/jttrc-animated-neon.png",thumbUrl:"https://www.dndbeyond.com/avatars/26188/645/637897033444280010.png",isAnimated:!0},{name:"Ofrenda",url:"https://www.dndbeyond.com/avatars/26188/693/637897034979507851.png",thumbUrl:"https://www.dndbeyond.com/avatars/26188/693/637897034979507851.png",isAnimated:!1},{name:"Prawn",url:"https://www.dndbeyond.com/avatars/26188/703/637897035436517383.png",thumbUrl:"https://www.dndbeyond.com/avatars/26188/703/637897035436517383.png",isAnimated:!1}]}];function X(e,t,a){const n=e.slice();return n[3]=t[a],n}function z(e,t,a){const n=e.slice();return n[11]=t[a],n}function K(e,t,a){const n=e.slice();return n[3]=t[a],n}function Q(e,t,a){const n=e.slice();return n[6]=t[a],n}function vt(e){let t,a=V,n=[];for(let d=0;d<a.length;d+=1)n[d]=Z(X(e,a,d));return{c(){for(let d=0;d<n.length;d+=1)n[d].c();t=dt()},m(d,o){for(let r=0;r<n.length;r+=1)n[r].m(d,o);_(d,t,o)},p(d,o){if(o&0){a=V;let r;for(r=0;r<a.length;r+=1){const u=X(d,a,r);n[r]?n[r].p(u,o):(n[r]=Z(u),n[r].c(),n[r].m(t.parentNode,t))}for(;r<n.length;r+=1)n[r].d(1);n.length=a.length}},d(d){$(n,d),d&&f(t)}}}function jt(e){let t,a=q,n=[];for(let d=0;d<a.length;d+=1)n[d]=et(K(e,a,d));return{c(){for(let d=0;d<n.length;d+=1)n[d].c();t=dt()},m(d,o){for(let r=0;r<n.length;r+=1)n[r].m(d,o);_(d,t,o)},p(d,o){if(o&0){a=q;let r;for(r=0;r<a.length;r+=1){const u=K(d,a,r);n[r]?n[r].p(u,o):(n[r]=et(u),n[r].c(),n[r].m(t.parentNode,t))}for(;r<n.length;r+=1)n[r].d(1);n.length=a.length}},d(d){$(n,d),d&&f(t)}}}function _t(e){let t;return{c(){t=b("i"),m(t,"class","bi bi-camera-reels-fill svelte-1prmyws")},m(a,n){_(a,t,n)},d(a){a&&f(t)}}}function Y(e){let t,a,n,d,o,r=e[11].isAnimated&&_t();return{c(){t=b("div"),a=b("img"),d=g(),r&&r.c(),o=g(),m(a,"class","frame-thumbnail rounded m-2 svelte-1prmyws"),nt(a.src,n=e[11].thumbUrl)||m(a,"src",n),m(a,"alt",e[11].name),m(a,"data-bs-toggle","modal"),m(a,"data-bs-target","#frameModal"),m(a,"data-bs-url",e[11].url),m(a,"data-bs-title",e[11].name),m(a,"data-bs-animated",e[11].isAnimated),m(t,"class","col-1"),P(t,"position","relative")},m(u,w){_(u,t,w),h(t,a),h(t,d),r&&r.m(t,null),h(t,o)},p:A,d(u){u&&f(t),r&&r.d()}}}function Z(e){let t,a,n=e[3].name+"",d,o,r,u,w=e[3].frames,s=[];for(let l=0;l<w.length;l+=1)s[l]=Y(z(e,w,l));return{c(){t=b("div"),a=b("h1"),d=E(n),o=g(),r=b("div");for(let l=0;l<s.length;l+=1)s[l].c();u=g(),m(a,"class","display-6"),m(r,"class","row"),P(t,"margin-bottom","50px")},m(l,p){_(l,t,p),h(t,a),h(a,d),h(t,o),h(t,r);for(let c=0;c<s.length;c+=1)s[c].m(r,null);h(t,u)},p(l,p){if(p&0){w=l[3].frames;let c;for(c=0;c<w.length;c+=1){const v=z(l,w,c);s[c]?s[c].p(v,p):(s[c]=Y(v),s[c].c(),s[c].m(r,null))}for(;c<s.length;c+=1)s[c].d(1);s.length=w.length}},d(l){l&&f(t),$(s,l)}}}function tt(e){let t,a;return{c(){t=b("img"),m(t,"class","backdrop-thumbnail rounded m-2 svelte-1prmyws"),nt(t.src,a=e[6].thumbUrl)||m(t,"src",a),m(t,"alt",e[6].name),m(t,"data-bs-toggle","modal"),m(t,"data-bs-target","#backdropModal"),m(t,"data-bs-url",e[6].url),m(t,"data-bs-title",e[6].name)},m(n,d){_(n,t,d)},p:A,d(n){n&&f(t)}}}function et(e){let t,a,n=e[3].name+"",d,o,r,u=e[3].backdrops,w=[];for(let s=0;s<u.length;s+=1)w[s]=tt(Q(e,u,s));return{c(){t=b("div"),a=b("h1"),d=E(n),o=g();for(let s=0;s<w.length;s+=1)w[s].c();r=g(),m(a,"class","display-6"),P(t,"margin-bottom","50px")},m(s,l){_(s,t,l),h(t,a),h(a,d),h(t,o);for(let p=0;p<w.length;p+=1)w[p].m(t,null);h(t,r)},p(s,l){if(l&0){u=s[3].backdrops;let p;for(p=0;p<u.length;p+=1){const c=Q(s,u,p);w[p]?w[p].p(c,l):(w[p]=tt(c),w[p].c(),w[p].m(t,r))}for(;p<w.length;p+=1)w[p].d(1);w.length=u.length}},d(s){s&&f(t),$(w,s)}}}function Ut(e){let t,a,n,d,o,r,u,w,s,l,p,c,v,j,R,O;function T(y,D){if(y[0]==1)return jt;if(y[0]==2)return vt}let U=T(e),i=U&&U(e);return{c(){t=b("main"),a=b("div"),a.innerHTML='<h1 class="display-4 p-3">Character Sheet Decorations</h1>',n=g(),d=b("div"),o=b("div"),r=b("input"),u=g(),w=b("label"),w.textContent="Backdrops",s=g(),l=b("input"),p=g(),c=b("label"),c.textContent="Frames",v=g(),j=b("div"),i&&i.c(),m(a,"class","row text-center"),m(r,"type","radio"),m(r,"class","btn-check"),m(r,"name","btnradio"),m(r,"id","btnBackdrop"),m(r,"autocomplete","off"),r.checked=!0,m(w,"class","btn btn-outline-primary"),m(w,"for","btnBackdrop"),m(l,"type","radio"),m(l,"class","btn-check"),m(l,"name","btnradio"),m(l,"id","btnFrame"),m(l,"autocomplete","off"),m(c,"class","btn btn-outline-primary"),m(c,"for","btnFrame"),m(o,"class","btn-group btn-group-lg"),m(o,"role","group"),m(o,"aria-label","Basic radio toggle button group"),m(d,"class","row text-center mt-2 mb-5"),m(j,"class","row"),m(t,"class","container")},m(y,D){_(y,t,D),h(t,a),h(t,n),h(t,d),h(d,o),h(o,r),h(o,u),h(o,w),h(o,s),h(o,l),h(o,p),h(o,c),h(t,v),h(t,j),i&&i.m(j,null),R||(O=[G(r,"click",e[1]),G(l,"click",e[2])],R=!0)},p(y,[D]){U===(U=T(y))&&i?i.p(y,D):(i&&i.d(1),i=U&&U(y),i&&(i.c(),i.m(j,null)))},i:A,o:A,d(y){y&&f(t),i&&i.d(),R=!1,B(O)}}}function At(e,t,a){let n=1;return[n,()=>{a(0,n=1)},()=>{a(0,n=2)}]}class kt extends ft{constructor(t){super(),yt(this,t,At,Ut,ot,{})}}new kt({target:document.getElementById("app")});
