(()=>{var X_=Object.defineProperty;var dg=(i,e)=>{for(var t in e)X_(i,t,{get:e[t],enumerable:!0})};var $_="uplot",Y_="u-hz",Z_="u-vt",J_="u-title",j_="u-wrap",K_="u-under",Q_="u-over",eb="u-axis",Qs="u-off",tb="u-select",nb="u-cursor-x",ib="u-cursor-y",sb="u-cursor-pt",rb="u-legend",ab="u-live",ob="u-inline",lb="u-series",cb="u-marker",hg="u-label",ub="u-value",ao="width",oo="height";var fg="bottom",Kr="left",Od="right",eh="#000",pg=eh+"0",kd="mousemove",mg="mousedown",Bd="mouseup",gg="mouseenter",vg="mouseleave",yg="dblclick",db="resize",hb="scroll",xg="change",Bl="dppxchange",th="--",ra=typeof window<"u",Wd=ra?document:null,ea=ra?window:null,fb=ra?navigator:null,wt,Ul;function qd(){let i=devicePixelRatio;wt!=i&&(wt=i,Ul&&$d(xg,Ul,qd),Ul=matchMedia(`(min-resolution: ${wt-.001}dppx) and (max-resolution: ${wt+.001}dppx)`),er(xg,Ul,qd),ea.dispatchEvent(new CustomEvent(Bl)))}function ni(i,e){if(e!=null){let t=i.classList;!t.contains(e)&&t.add(e)}}function Xd(i,e){let t=i.classList;t.contains(e)&&t.remove(e)}function qt(i,e,t){i.style[e]=t+"px"}function Ri(i,e,t,n){let s=Wd.createElement(i);return e!=null&&ni(s,e),t?.insertBefore(s,n),s}function vi(i,e){return Ri("div",i,e)}var _g=new WeakMap;function Vi(i,e,t,n,s){let r="translate("+e+"px,"+t+"px)",a=_g.get(i);r!=a&&(i.style.transform=r,_g.set(i,r),e<0||t<0||e>n||t>s?ni(i,Qs):Xd(i,Qs))}var bg=new WeakMap;function Sg(i,e,t){let n=e+t,s=bg.get(i);n!=s&&(bg.set(i,n),i.style.background=e,i.style.borderColor=t)}var Mg=new WeakMap;function wg(i,e,t,n){let s=e+""+t,r=Mg.get(i);s!=r&&(Mg.set(i,s),i.style.height=t+"px",i.style.width=e+"px",i.style.marginLeft=n?-e/2+"px":0,i.style.marginTop=n?-t/2+"px":0)}var nh={passive:!0},pb={...nh,capture:!0};function er(i,e,t,n){e.addEventListener(i,t,n?pb:nh)}function $d(i,e,t,n){e.removeEventListener(i,t,nh)}ra&&qd();function Ci(i,e,t,n){let s;t=t||0,n=n||e.length-1;let r=n<=2147483647;for(;n-t>1;)s=r?t+n>>1:ii((t+n)/2),e[s]<i?t=s:n=s;return i-e[t]<=e[n]-i?t:n}function Kg(i){return(t,n,s)=>{let r=-1,a=-1;for(let o=n;o<=s;o++)if(i(t[o])){r=o;break}for(let o=s;o>=n;o--)if(i(t[o])){a=o;break}return[r,a]}}var Qg=i=>i!=null,ev=i=>i!=null&&i>0,Hl=Kg(Qg),mb=Kg(ev);function gb(i,e,t,n=0,s=!1){let r=s?mb:Hl,a=s?ev:Qg;[e,t]=r(i,e,t);let o=i[e],l=i[e];if(e>-1)if(n==1)o=i[e],l=i[t];else if(n==-1)o=i[t],l=i[e];else for(let c=e;c<=t;c++){let u=i[c];a(u)&&(u<o?o=u:u>l&&(l=u))}return[o??Ot,l??-Ot]}function Gl(i,e,t,n){let s=Tg(i),r=Tg(e);i==e&&(s==-1?(i*=t,e/=t):(i/=t,e*=t));let a=t==10?ts:tv,o=s==1?ii:yi,l=r==1?yi:ii,c=o(a(fn(i))),u=l(a(fn(e))),d=ta(t,c),h=ta(t,u);return t==10&&(c<0&&(d=kt(d,-c)),u<0&&(h=kt(h,-u))),n||t==2?(i=d*s,e=h*r):(i=rv(i,d),e=Wl(e,h)),[i,e]}function ih(i,e,t,n){let s=Gl(i,e,t,n);return i==0&&(s[0]=0),e==0&&(s[1]=0),s}var sh=.1,Eg={mode:3,pad:sh},co={pad:0,soft:null,mode:0},vb={min:co,max:co};function zl(i,e,t,n){return ql(t)?Ag(i,e,t):(co.pad=t,co.soft=n?0:null,co.mode=n?3:0,Ag(i,e,vb))}function St(i,e){return i??e}function yb(i,e,t){for(e=St(e,0),t=St(t,i.length-1);e<=t;){if(i[e]!=null)return!0;e++}return!1}function Ag(i,e,t){let n=t.min,s=t.max,r=St(n.pad,0),a=St(s.pad,0),o=St(n.hard,-Ot),l=St(s.hard,Ot),c=St(n.soft,Ot),u=St(s.soft,-Ot),d=St(n.mode,0),h=St(s.mode,0),f=e-i,m=ts(f),v=Hn(fn(i),fn(e)),g=ts(v),p=fn(g-m);(f<1e-24||p>10)&&(f=0,(i==0||e==0)&&(f=1e-24,d==2&&c!=Ot&&(r=0),h==2&&u!=-Ot&&(a=0)));let x=f||v||1e3,y=ts(x),_=ta(10,ii(y)),L=x*(f==0?i==0?.1:1:r),M=kt(rv(i-L,_/10),24),R=i>=c&&(d==1||d==3&&M<=c||d==2&&M>=c)?c:Ot,P=Hn(o,M<R&&i>=R?R:Pi(R,M)),w=x*(f==0?e==0?.1:1:a),S=kt(Wl(e+w,_/10),24),D=e<=u&&(h==1||h==3&&S>=u||h==2&&S<=u)?u:-Ot,B=Pi(l,S>D&&e<=D?D:Hn(D,S));return P==B&&P==0&&(B=100),[P,B]}var xb=new Intl.NumberFormat(ra?fb.language:"en-US"),rh=i=>xb.format(i),si=Math,kl=si.PI,fn=si.abs,ii=si.floor,hn=si.round,yi=si.ceil,Pi=si.min,Hn=si.max,ta=si.pow,Tg=si.sign,ts=si.log10,tv=si.log2,_b=(i,e=1)=>si.sinh(i)*e,zd=(i,e=1)=>si.asinh(i/e),Ot=1/0;function Rg(i){return(ts((i^i>>31)-(i>>31))|0)+1}function Yd(i,e,t){return Pi(Hn(i,e),t)}function nv(i){return typeof i=="function"}function yt(i){return nv(i)?i:()=>i}var bb=()=>{},iv=i=>i,sv=(i,e)=>e,Sb=i=>null,Cg=i=>!0,Pg=(i,e)=>i==e,Mb=/\.\d*?(?=9{6,}|0{6,})/gm,tr=i=>{if(ov(i)||Cs.has(i))return i;let e=`${i}`,t=e.match(Mb);if(t==null)return i;let n=t[0].length-1;if(e.indexOf("e-")!=-1){let[s,r]=e.split("e");return+`${tr(s)}e${r}`}return kt(i,n)};function js(i,e){return tr(kt(tr(i/e))*e)}function Wl(i,e){return tr(yi(tr(i/e))*e)}function rv(i,e){return tr(ii(tr(i/e))*e)}function kt(i,e=0){if(ov(i))return i;let t=10**e,n=i*t*(1+Number.EPSILON);return hn(n)/t}var Cs=new Map;function av(i){return((""+i).split(".")[1]||"").length}function ho(i,e,t,n){let s=[],r=n.map(av);for(let a=e;a<t;a++){let o=fn(a),l=kt(ta(i,a),o);for(let c=0;c<n.length;c++){let u=i==10?+`${n[c]}e${a}`:n[c]*l,d=(a>=0?0:o)+(a>=r[c]?0:r[c]),h=i==10?u:kt(u,d);s.push(h),Cs.set(h,d)}}return s}var uo={},ah=[],na=[null,null],Rs=Array.isArray,ov=Number.isInteger,wb=i=>i===void 0;function Ig(i){return typeof i=="string"}function ql(i){let e=!1;if(i!=null){let t=i.constructor;e=t==null||t==Object}return e}function Eb(i){return i!=null&&typeof i=="object"}var Ab=Object.getPrototypeOf(Uint8Array),lv="__proto__";function ia(i,e=ql){let t;if(Rs(i)){let n=i.find(s=>s!=null);if(Rs(n)||e(n)){t=Array(i.length);for(let s=0;s<i.length;s++)t[s]=ia(i[s],e)}else t=i.slice()}else if(i instanceof Ab)t=i.slice();else if(e(i)){t={};for(let n in i)n!=lv&&(t[n]=ia(i[n],e))}else t=i;return t}function on(i){let e=arguments;for(let t=1;t<e.length;t++){let n=e[t];for(let s in n)s!=lv&&(ql(i[s])?on(i[s],ia(n[s])):i[s]=ia(n[s]))}return i}var Tb=0,Rb=1,Cb=2;function Pb(i,e,t){for(let n=0,s,r=-1;n<e.length;n++){let a=e[n];if(a>r){for(s=a-1;s>=0&&i[s]==null;)i[s--]=null;for(s=a+1;s<t&&i[s]==null;)i[r=s++]=null}}}function Ib(i,e){if(Db(i)){let a=i[0].slice();for(let o=1;o<i.length;o++)a.push(...i[o].slice(1));return Ub(a[0])||(a=Nb(a)),a}let t=new Set;for(let a=0;a<i.length;a++){let l=i[a][0],c=l.length;for(let u=0;u<c;u++)t.add(l[u])}let n=[Array.from(t).sort((a,o)=>a-o)],s=n[0].length,r=new Map;for(let a=0;a<s;a++)r.set(n[0][a],a);for(let a=0;a<i.length;a++){let o=i[a],l=o[0];for(let c=1;c<o.length;c++){let u=o[c],d=Array(s).fill(void 0),h=e?e[a][c]:Rb,f=[];for(let m=0;m<u.length;m++){let v=u[m],g=r.get(l[m]);v===null?h!=Tb&&(d[g]=v,h==Cb&&f.push(g)):d[g]=v}Pb(d,f,s),n.push(d)}}return n}var Lb=typeof queueMicrotask>"u"?i=>Promise.resolve().then(i):queueMicrotask;function Nb(i){let e=i[0],t=e.length,n=Array(t);for(let r=0;r<n.length;r++)n[r]=r;n.sort((r,a)=>e[r]-e[a]);let s=[];for(let r=0;r<i.length;r++){let a=i[r],o=Array(t);for(let l=0;l<t;l++)o[l]=a[n[l]];s.push(o)}return s}function Db(i){let e=i[0][0],t=e.length;for(let n=1;n<i.length;n++){let s=i[n][0];if(s.length!=t)return!1;if(s!=e){for(let r=0;r<t;r++)if(s[r]!=e[r])return!1}}return!0}function Ub(i,e=100){let t=i.length;if(t<=1)return!0;let n=0,s=t-1;for(;n<=s&&i[n]==null;)n++;for(;s>=n&&i[s]==null;)s--;if(s<=n)return!0;let r=Hn(1,ii((s-n+1)/e));for(let a=i[n],o=n+r;o<=s;o+=r){let l=i[o];if(l!=null){if(l<=a)return!1;a=l}}return!0}var cv=["January","February","March","April","May","June","July","August","September","October","November","December"],uv=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];function dv(i){return i.slice(0,3)}var Fb=uv.map(dv),Ob=cv.map(dv),kb={MMMM:cv,MMM:Ob,WWWW:uv,WWW:Fb};function ro(i){return(i<10?"0":"")+i}function Bb(i){return(i<10?"00":i<100?"0":"")+i}var zb={YYYY:i=>i.getFullYear(),YY:i=>(i.getFullYear()+"").slice(2),MMMM:(i,e)=>e.MMMM[i.getMonth()],MMM:(i,e)=>e.MMM[i.getMonth()],MM:i=>ro(i.getMonth()+1),M:i=>i.getMonth()+1,DD:i=>ro(i.getDate()),D:i=>i.getDate(),WWWW:(i,e)=>e.WWWW[i.getDay()],WWW:(i,e)=>e.WWW[i.getDay()],HH:i=>ro(i.getHours()),H:i=>i.getHours(),h:i=>{let e=i.getHours();return e==0?12:e>12?e-12:e},AA:i=>i.getHours()>=12?"PM":"AM",aa:i=>i.getHours()>=12?"pm":"am",a:i=>i.getHours()>=12?"p":"a",mm:i=>ro(i.getMinutes()),m:i=>i.getMinutes(),ss:i=>ro(i.getSeconds()),s:i=>i.getSeconds(),fff:i=>Bb(i.getMilliseconds())};function oh(i,e){e=e||kb;let t=[],n=/\{([a-z]+)\}|[^{]+/gi,s;for(;s=n.exec(i);)t.push(s[0][0]=="{"?zb[s[1]]:s[0]);return r=>{let a="";for(let o=0;o<t.length;o++)a+=typeof t[o]=="string"?t[o]:t[o](r,e);return a}}var Vb=new Intl.DateTimeFormat().resolvedOptions().timeZone;function Hb(i,e){let t;return e=="UTC"||e=="Etc/UTC"?t=new Date(+i+i.getTimezoneOffset()*6e4):e==Vb?t=i:(t=new Date(i.toLocaleString("en-US",{timeZone:e})),t.setMilliseconds(i.getMilliseconds())),t}var hv=i=>i%1==0,Vl=[1,2,2.5,5],Gb=ho(10,-32,0,Vl),fv=ho(10,0,32,Vl),Wb=fv.filter(hv),Ks=Gb.concat(fv),lh=`
`,pv="{YYYY}",Lg=lh+pv,mv="{M}/{D}",lo=lh+mv,Fl=lo+"/{YY}",gv="{aa}",qb="{h}:{mm}",Qr=qb+gv,Ng=lh+Qr,Dg=":{ss}",Tt=null;function vv(i){let e=i*1e3,t=e*60,n=t*60,s=n*24,r=s*30,a=s*365,l=(i==1?ho(10,0,3,Vl).filter(hv):ho(10,-3,0,Vl)).concat([e,e*5,e*10,e*15,e*30,t,t*5,t*10,t*15,t*30,n,n*2,n*3,n*4,n*6,n*8,n*12,s,s*2,s*3,s*4,s*5,s*6,s*7,s*8,s*9,s*10,s*15,r,r*2,r*3,r*4,r*6,a,a*2,a*5,a*10,a*25,a*50,a*100]),c=[[a,pv,Tt,Tt,Tt,Tt,Tt,Tt,1],[s*28,"{MMM}",Lg,Tt,Tt,Tt,Tt,Tt,1],[s,mv,Lg,Tt,Tt,Tt,Tt,Tt,1],[n,"{h}"+gv,Fl,Tt,lo,Tt,Tt,Tt,1],[t,Qr,Fl,Tt,lo,Tt,Tt,Tt,1],[e,Dg,Fl+" "+Qr,Tt,lo+" "+Qr,Tt,Ng,Tt,1],[i,Dg+".{fff}",Fl+" "+Qr,Tt,lo+" "+Qr,Tt,Ng,Tt,1]];function u(d){return(h,f,m,v,g,p)=>{let x=[],y=g>=a,_=g>=r&&g<a,L=d(m),M=kt(L*i,3),R=Vd(L.getFullYear(),y?0:L.getMonth(),_||y?1:L.getDate()),P=kt(R*i,3);if(_||y){let w=_?g/r:0,S=y?g/a:0,D=M==P?M:kt(Vd(R.getFullYear()+S,R.getMonth()+w,1)*i,3),B=new Date(hn(D/i)),C=B.getFullYear(),V=B.getMonth();for(let q=0;D<=v;q++){let ne=Vd(C+S*q,V+w*q,1),ee=ne-d(kt(ne*i,3));D=kt((+ne+ee)*i,3),D<=v&&x.push(D)}}else{let w=g>=s?s:g,S=ii(m)-ii(M),D=P+S+Wl(M-P,w);x.push(D);let B=d(D),C=B.getHours()+B.getMinutes()/t+B.getSeconds()/n,V=g/n,q=h.axes[f]._space,ne=p/q;for(;D=kt(D+g,i==1?0:3),!(D>v);)if(V>1){let ee=ii(kt(C+V,6))%24,oe=d(D).getHours()-ee;oe>1&&(oe=-1),D-=oe*n,C=(C+V)%24;let Se=x[x.length-1];kt((D-Se)/g,3)*ne>=.7&&x.push(D)}else x.push(D)}return x}}return[l,c,u]}var[Xb,$b,Yb]=vv(1),[Zb,Jb,jb]=vv(.001);ho(2,-53,53,[1]);function Ug(i,e){return i.map(t=>t.map((n,s)=>s==0||s==8||n==null?n:e(s==1||t[8]==0?n:t[1]+n)))}function Fg(i,e){return(t,n,s,r,a)=>{let o=e.find(m=>a>=m[0])||e[e.length-1],l,c,u,d,h,f;return n.map(m=>{let v=i(m),g=v.getFullYear(),p=v.getMonth(),x=v.getDate(),y=v.getHours(),_=v.getMinutes(),L=v.getSeconds(),M=g!=l&&o[2]||p!=c&&o[3]||x!=u&&o[4]||y!=d&&o[5]||_!=h&&o[6]||L!=f&&o[7]||o[1];return l=g,c=p,u=x,d=y,h=_,f=L,M(v)})}}function Kb(i,e){let t=oh(e);return(n,s,r,a,o)=>s.map(l=>t(i(l)))}function Vd(i,e,t){return new Date(i,e,t)}function Og(i,e){return e(i)}var Qb="{YYYY}-{MM}-{DD} {h}:{mm}{aa}";function kg(i,e){return(t,n,s,r)=>r==null?th:e(i(n))}function eS(i,e){let t=i.series[e];return t.width?t.stroke(i,e):t.points.width?t.points.stroke(i,e):null}function tS(i,e){return i.series[e].fill(i,e)}var nS={show:!0,live:!0,isolate:!1,mount:bb,markers:{show:!0,width:2,stroke:eS,fill:tS,dash:"solid"},idx:null,idxs:null,values:[]};function iS(i,e){let t=i.cursor.points,n=vi(),s=t.size(i,e);qt(n,ao,s),qt(n,oo,s);let r=s/-2;qt(n,"marginLeft",r),qt(n,"marginTop",r);let a=t.width(i,e,s);return a&&qt(n,"borderWidth",a),n}function sS(i,e){let t=i.series[e].points;return t._fill||t._stroke}function rS(i,e){let t=i.series[e].points;return t._stroke||t._fill}function aS(i,e){return i.series[e].points.size}var Hd=[0,0];function oS(i,e,t){return Hd[0]=e,Hd[1]=t,Hd}function Ol(i,e,t,n=!0){return s=>{s.button==0&&(!n||s.target==e)&&t(s)}}function Gd(i,e,t,n=!0){return s=>{(!n||s.target==e)&&t(s)}}var lS={show:!0,x:!0,y:!0,lock:!1,move:oS,points:{one:!1,show:iS,size:aS,width:0,stroke:rS,fill:sS},bind:{mousedown:Ol,mouseup:Ol,click:Ol,dblclick:Ol,mousemove:Gd,mouseleave:Gd,mouseenter:Gd},drag:{setScale:!0,x:!0,y:!1,dist:0,uni:null,click:(i,e)=>{e.stopPropagation(),e.stopImmediatePropagation()},_x:!1,_y:!1},focus:{dist:(i,e,t,n,s)=>n-s,prox:-1,bias:0},hover:{skip:[void 0],prox:null,bias:0},left:-10,top:-10,idx:null,dataIdx:null,idxs:null,event:null},yv={show:!0,stroke:"rgba(0,0,0,0.07)",width:2},ch=on({},yv,{filter:sv}),xv=on({},ch,{size:10}),_v=on({},yv,{show:!1}),uh='12px system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',bv="bold "+uh,Sv=1.5,Bg={show:!0,scale:"x",stroke:eh,space:50,gap:5,alignTo:1,size:50,labelGap:0,labelSize:30,labelFont:bv,side:2,grid:ch,ticks:xv,border:_v,font:uh,lineGap:Sv,rotate:0},cS="Value",uS="Time",zg={show:!0,scale:"x",auto:!1,sorted:1,min:Ot,max:-Ot,idxs:[]};function dS(i,e,t,n,s){return e.map(r=>r==null?"":rh(r))}function hS(i,e,t,n,s,r,a){let o=[],l=Cs.get(s)||0;t=a?t:kt(Wl(t,s),l);for(let c=t;c<=n;c=kt(c+s,l))o.push(Object.is(c,-0)?0:c);return o}function Zd(i,e,t,n,s,r,a){let o=[],l=i.scales[i.axes[e].scale].log,c=l==10?ts:tv,u=ii(c(t));s=ta(l,u),l==10&&(s=Ks[Ci(s,Ks)]);let d=t,h=s*l;l==10&&(h=Ks[Ci(h,Ks)]);do o.push(d),d=d+s,l==10&&!Cs.has(d)&&(d=kt(d,Cs.get(s))),d>=h&&(s=d,h=s*l,l==10&&(h=Ks[Ci(h,Ks)]));while(d<=n);return o}function fS(i,e,t,n,s,r,a){let l=i.scales[i.axes[e].scale].asinh,c=n>l?Zd(i,e,Hn(l,t),n,s):[l],u=n>=0&&t<=0?[0]:[];return(t<-l?Zd(i,e,Hn(l,-n),-t,s):[l]).reverse().map(h=>-h).concat(u,c)}var Mv=/./,pS=/[12357]/,mS=/[125]/,Vg=/1/,Jd=(i,e,t,n)=>i.map((s,r)=>e==4&&s==0||r%n==0&&t.test(s.toExponential()[s<0?1:0])?s:null);function gS(i,e,t,n,s){let r=i.axes[t],a=r.scale,o=i.scales[a],l=i.valToPos,c=r._space,u=l(10,a),d=l(9,a)-u>=c?Mv:l(7,a)-u>=c?pS:l(5,a)-u>=c?mS:Vg;if(d==Vg){let h=fn(l(1,a)-u);if(h<c)return Jd(e.slice().reverse(),o.distr,d,yi(c/h)).reverse()}return Jd(e,o.distr,d,1)}function vS(i,e,t,n,s){let r=i.axes[t],a=r.scale,o=r._space,l=i.valToPos,c=fn(l(1,a)-l(2,a));return c<o?Jd(e.slice().reverse(),3,Mv,yi(o/c)).reverse():e}function yS(i,e,t,n){return n==null?th:e==null?"":rh(e)}var Hg={show:!0,scale:"y",stroke:eh,space:30,gap:5,alignTo:1,size:50,labelGap:0,labelSize:30,labelFont:bv,side:3,grid:ch,ticks:xv,border:_v,font:uh,lineGap:Sv,rotate:0};function xS(i,e){let t=3+(i||1)*2;return kt(t*e,3)}function _S(i,e){let{scale:t,idxs:n}=i.series[0],s=i._data[0],r=i.valToPos(s[n[0]],t,!0),a=i.valToPos(s[n[1]],t,!0),o=fn(a-r),l=i.series[e],c=o/(l.points.space*wt);return n[1]-n[0]<=c}var Gg={scale:null,auto:!0,sorted:0,min:Ot,max:-Ot},wv=(i,e,t,n,s)=>s,Wg={show:!0,auto:!0,sorted:0,gaps:wv,alpha:1,facets:[on({},Gg,{scale:"x"}),on({},Gg,{scale:"y"})]},qg={scale:"y",auto:!0,sorted:0,show:!0,spanGaps:!1,gaps:wv,alpha:1,points:{show:_S,filter:null},values:null,min:Ot,max:-Ot,idxs:[],path:null,clip:null};function bS(i,e,t,n,s){return t/10}var Ev={time:!0,auto:!0,distr:1,log:10,asinh:1,min:null,max:null,dir:1,ori:0},SS=on({},Ev,{time:!1,ori:1}),Xg={};function Av(i,e){let t=Xg[i];return t||(t={key:i,plots:[],sub(n){t.plots.push(n)},unsub(n){t.plots=t.plots.filter(s=>s!=n)},pub(n,s,r,a,o,l,c){for(let u=0;u<t.plots.length;u++)t.plots[u]!=s&&t.plots[u].pub(n,s,r,a,o,l,c)}},i!=null&&(Xg[i]=t)),t}var sa=1,jd=2;function nr(i,e,t){let n=i.mode,s=i.series[e],r=n==2?i._data[e]:i._data,a=i.scales,o=i.bbox,l=r[0],c=n==2?r[1]:r[e],u=n==2?a[s.facets[0].scale]:a[i.series[0].scale],d=n==2?a[s.facets[1].scale]:a[s.scale],h=o.left,f=o.top,m=o.width,v=o.height,g=i.valToPosH,p=i.valToPosV;return u.ori==0?t(s,l,c,u,d,g,p,h,f,m,v,$l,aa,Zl,Rv,Pv):t(s,l,c,u,d,p,g,f,h,v,m,Yl,oa,fh,Cv,Iv)}function dh(i,e){let t=0,n=0,s=St(i.bands,ah);for(let r=0;r<s.length;r++){let a=s[r];a.series[0]==e?t=a.dir:a.series[1]==e&&(a.dir==1?n|=1:n|=2)}return[t,n==1?-1:n==2?1:n==3?2:0]}function MS(i,e,t,n,s){let r=i.mode,a=i.series[e],o=r==2?a.facets[1].scale:a.scale,l=i.scales[o];return s==-1?l.min:s==1?l.max:l.distr==3?l.dir==1?l.min:l.max:0}function ns(i,e,t,n,s,r){return nr(i,e,(a,o,l,c,u,d,h,f,m,v,g)=>{let p=a.pxRound,x=c.dir*(c.ori==0?1:-1),y=c.ori==0?aa:oa,_,L;x==1?(_=t,L=n):(_=n,L=t);let M=p(d(o[_],c,v,f)),R=p(h(l[_],u,g,m)),P=p(d(o[L],c,v,f)),w=p(h(r==1?u.max:u.min,u,g,m)),S=new Path2D(s);return y(S,P,w),y(S,M,w),y(S,M,R),S})}function Xl(i,e,t,n,s,r){let a=null;if(i.length>0){a=new Path2D;let o=e==0?Zl:fh,l=t;for(let d=0;d<i.length;d++){let h=i[d];if(h[1]>h[0]){let f=h[0]-l;f>0&&o(a,l,n,f,n+r),l=h[1]}}let c=t+s-l,u=10;c>0&&o(a,l,n-u/2,c,n+r+u)}return a}function wS(i,e,t){let n=i[i.length-1];n&&n[0]==e?n[1]=t:i.push([e,t])}function hh(i,e,t,n,s,r,a){let o=[],l=i.length;for(let c=s==1?t:n;c>=t&&c<=n;c+=s)if(e[c]===null){let d=c,h=c;if(s==1)for(;++c<=n&&e[c]===null;)h=c;else for(;--c>=t&&e[c]===null;)h=c;let f=r(i[d]),m=h==d?f:r(i[h]),v=d-s;f=a<=0&&v>=0&&v<l?r(i[v]):f;let p=h+s;m=a>=0&&p>=0&&p<l?r(i[p]):m,m>=f&&o.push([f,m])}return o}function $g(i){return i==0?iv:i==1?hn:e=>js(e,i)}function Tv(i){let e=i==0?$l:Yl,t=i==0?(s,r,a,o,l,c)=>{s.arcTo(r,a,o,l,c)}:(s,r,a,o,l,c)=>{s.arcTo(a,r,l,o,c)},n=i==0?(s,r,a,o,l)=>{s.rect(r,a,o,l)}:(s,r,a,o,l)=>{s.rect(a,r,l,o)};return(s,r,a,o,l,c=0,u=0)=>{c==0&&u==0?n(s,r,a,o,l):(c=Pi(c,o/2,l/2),u=Pi(u,o/2,l/2),e(s,r+c,a),t(s,r+o,a,r+o,a+l,c),t(s,r+o,a+l,r,a+l,u),t(s,r,a+l,r,a,u),t(s,r,a,r+o,a,c),s.closePath())}}var $l=(i,e,t)=>{i.moveTo(e,t)},Yl=(i,e,t)=>{i.moveTo(t,e)},aa=(i,e,t)=>{i.lineTo(e,t)},oa=(i,e,t)=>{i.lineTo(t,e)},Zl=Tv(0),fh=Tv(1),Rv=(i,e,t,n,s,r)=>{i.arc(e,t,n,s,r)},Cv=(i,e,t,n,s,r)=>{i.arc(t,e,n,s,r)},Pv=(i,e,t,n,s,r,a)=>{i.bezierCurveTo(e,t,n,s,r,a)},Iv=(i,e,t,n,s,r,a)=>{i.bezierCurveTo(t,e,s,n,a,r)};function Lv(i){return(e,t,n,s,r)=>nr(e,t,(a,o,l,c,u,d,h,f,m,v,g)=>{let{pxRound:p,points:x}=a,y,_;c.ori==0?(y=$l,_=Rv):(y=Yl,_=Cv);let L=kt(x.width*wt,3),M=(x.size-x.width)/2*wt,R=kt(M*2,3),P=new Path2D,w=new Path2D,{left:S,top:D,width:B,height:C}=e.bbox;Zl(w,S-R,D-R,B+R*2,C+R*2);let V=q=>{if(l[q]!=null){let ne=p(d(o[q],c,v,f)),ee=p(h(l[q],u,g,m));y(P,ne+M,ee),_(P,ne,ee,M,0,kl*2)}};if(r)r.forEach(V);else for(let q=n;q<=s;q++)V(q);return{stroke:L>0?P:null,fill:P,clip:w,flags:sa|jd}})}function Nv(i){return(e,t,n,s,r,a)=>{n!=s&&(r!=n&&a!=n&&i(e,t,n),r!=s&&a!=s&&i(e,t,s),i(e,t,a))}}var ES=Nv(aa),AS=Nv(oa);function Dv(i){let e=St(i?.alignGaps,0);return(t,n,s,r)=>nr(t,n,(a,o,l,c,u,d,h,f,m,v,g)=>{[s,r]=Hl(l,s,r);let p=a.pxRound,x=C=>p(d(C,c,v,f)),y=C=>p(h(C,u,g,m)),_,L;c.ori==0?(_=aa,L=ES):(_=oa,L=AS);let M=c.dir*(c.ori==0?1:-1),R={stroke:new Path2D,fill:null,clip:null,band:null,gaps:null,flags:sa},P=R.stroke,w=!1;if(r-s>=v*4){let C=be=>t.posToVal(be,c.key,!0),V=null,q=null,ne,ee,K,re=x(o[M==1?s:r]),oe=x(o[s]),Se=x(o[r]),Re=C(M==1?oe+1:Se-1);for(let be=M==1?s:r;be>=s&&be<=r;be+=M){let te=o[be],pe=(M==1?te<Re:te>Re)?re:x(te),ce=l[be];pe==re?ce!=null?(ee=ce,V==null?(_(P,pe,y(ee)),ne=V=q=ee):ee<V?V=ee:ee>q&&(q=ee)):ce===null&&(w=!0):(V!=null&&L(P,re,y(V),y(q),y(ne),y(ee)),ce!=null?(ee=ce,_(P,pe,y(ee)),V=q=ne=ee):(V=q=null,ce===null&&(w=!0)),re=pe,Re=C(re+M))}V!=null&&V!=q&&K!=re&&L(P,re,y(V),y(q),y(ne),y(ee))}else for(let C=M==1?s:r;C>=s&&C<=r;C+=M){let V=l[C];V===null?w=!0:V!=null&&_(P,x(o[C]),y(V))}let[D,B]=dh(t,n);if(a.fill!=null||D!=0){let C=R.fill=new Path2D(P),V=a.fillTo(t,n,a.min,a.max,D),q=y(V),ne=x(o[s]),ee=x(o[r]);M==-1&&([ee,ne]=[ne,ee]),_(C,ee,q),_(C,ne,q)}if(!a.spanGaps){let C=[];w&&C.push(...hh(o,l,s,r,M,x,e)),R.gaps=C=a.gaps(t,n,s,r,C),R.clip=Xl(C,c.ori,f,m,v,g)}return B!=0&&(R.band=B==2?[ns(t,n,s,r,P,-1),ns(t,n,s,r,P,1)]:ns(t,n,s,r,P,B)),R})}function TS(i){let e=St(i.align,1),t=St(i.ascDesc,!1),n=St(i.alignGaps,0),s=St(i.extend,!1);return(r,a,o,l)=>nr(r,a,(c,u,d,h,f,m,v,g,p,x,y)=>{[o,l]=Hl(d,o,l);let _=c.pxRound,{left:L,width:M}=r.bbox,R=oe=>_(m(oe,h,x,g)),P=oe=>_(v(oe,f,y,p)),w=h.ori==0?aa:oa,S={stroke:new Path2D,fill:null,clip:null,band:null,gaps:null,flags:sa},D=S.stroke,B=h.dir*(h.ori==0?1:-1),C=P(d[B==1?o:l]),V=R(u[B==1?o:l]),q=V,ne=V;s&&e==-1&&(ne=L,w(D,ne,C)),w(D,V,C);for(let oe=B==1?o:l;oe>=o&&oe<=l;oe+=B){let Se=d[oe];if(Se==null)continue;let Re=R(u[oe]),be=P(Se);e==1?w(D,Re,C):w(D,q,be),w(D,Re,be),C=be,q=Re}let ee=q;s&&e==1&&(ee=L+M,w(D,ee,C));let[K,re]=dh(r,a);if(c.fill!=null||K!=0){let oe=S.fill=new Path2D(D),Se=c.fillTo(r,a,c.min,c.max,K),Re=P(Se);w(oe,ee,Re),w(oe,ne,Re)}if(!c.spanGaps){let oe=[];oe.push(...hh(u,d,o,l,B,R,n));let Se=c.width*wt/2,Re=t||e==1?Se:-Se,be=t||e==-1?-Se:Se;oe.forEach(te=>{te[0]+=Re,te[1]+=be}),S.gaps=oe=c.gaps(r,a,o,l,oe),S.clip=Xl(oe,h.ori,g,p,x,y)}return re!=0&&(S.band=re==2?[ns(r,a,o,l,D,-1),ns(r,a,o,l,D,1)]:ns(r,a,o,l,D,re)),S})}function Yg(i,e,t,n,s,r,a=Ot){if(i.length>1){let o=null;for(let l=0,c=1/0;l<i.length;l++)if(e[l]!==void 0){if(o!=null){let u=fn(i[l]-i[o]);u<c&&(c=u,a=fn(t(i[l],n,s,r)-t(i[o],n,s,r)))}o=l}}return a}function RS(i){i=i||uo;let e=St(i.size,[.6,Ot,1]),t=i.align||0,n=i.gap||0,s=i.radius;s=s==null?[0,0]:typeof s=="number"?[s,0]:s;let r=yt(s),a=1-e[0],o=St(e[1],Ot),l=St(e[2],1),c=St(i.disp,uo),u=St(i.each,f=>{}),{fill:d,stroke:h}=c;return(f,m,v,g)=>nr(f,m,(p,x,y,_,L,M,R,P,w,S,D)=>{let B=p.pxRound,C=t,V=n*wt,q=o*wt,ne=l*wt,ee,K;_.ori==0?[ee,K]=r(f,m):[K,ee]=r(f,m);let re=_.dir*(_.ori==0?1:-1),oe=_.ori==0?Zl:fh,Se=_.ori==0?u:(ie,ye,xe,je,we,ke,rt)=>{u(ie,ye,xe,we,je,rt,ke)},Re=St(f.bands,ah).find(ie=>ie.series[0]==m),be=Re!=null?Re.dir:0,te=p.fillTo(f,m,p.min,p.max,be),ue=B(R(te,L,D,w)),pe,ce,Ve,Je=S,H=B(p.width*wt),et=!1,ae=null,me=null,se=null,Ae=null;d!=null&&(H==0||h!=null)&&(et=!0,ae=d.values(f,m,v,g),me=new Map,new Set(ae).forEach(ie=>{ie!=null&&me.set(ie,new Path2D)}),H>0&&(se=h.values(f,m,v,g),Ae=new Map,new Set(se).forEach(ie=>{ie!=null&&Ae.set(ie,new Path2D)})));let{x0:fe,size:Ce}=c;if(fe!=null&&Ce!=null){C=1,x=fe.values(f,m,v,g),fe.unit==2&&(x=x.map(xe=>f.posToVal(P+xe*S,_.key,!0)));let ie=Ce.values(f,m,v,g);Ce.unit==2?ce=ie[0]*S:ce=M(ie[0],_,S,P)-M(0,_,S,P),Je=Yg(x,y,M,_,S,P,Je),Ve=Je-ce+V}else Je=Yg(x,y,M,_,S,P,Je),Ve=Je*a+V,ce=Je-Ve;Ve<1&&(Ve=0),H>=ce/2&&(H=0),Ve<5&&(B=iv);let qe=Ve>0,N=Je-Ve-(qe?H:0);ce=B(Yd(N,ne,q)),pe=(C==0?ce/2:C==re?0:ce)-C*re*((C==0?V/2:0)+(qe?H/2:0));let A={stroke:null,fill:null,clip:null,band:null,gaps:null,flags:0},k=et?null:new Path2D,O=null;if(Re!=null)O=f.data[Re.series[1]];else{let{y0:ie,y1:ye}=c;ie!=null&&ye!=null&&(y=ye.values(f,m,v,g),O=ie.values(f,m,v,g))}let Z=ee*ce,$=K*ce;for(let ie=re==1?v:g;ie>=v&&ie<=g;ie+=re){let ye=y[ie];if(ye==null)continue;if(O!=null){let Qe=O[ie]??0;if(ye-Qe==0)continue;ue=R(Qe,L,D,w)}let xe=_.distr!=2||c!=null?x[ie]:ie,je=M(xe,_,S,P),we=R(St(ye,te),L,D,w),ke=B(je-pe),rt=B(Hn(we,ue)),$e=B(Pi(we,ue)),Ue=rt-$e;if(ye!=null){let Qe=ye<0?$:Z,tt=ye<0?Z:$;et?(H>0&&se[ie]!=null&&oe(Ae.get(se[ie]),ke,$e+ii(H/2),ce,Hn(0,Ue-H),Qe,tt),ae[ie]!=null&&oe(me.get(ae[ie]),ke,$e+ii(H/2),ce,Hn(0,Ue-H),Qe,tt)):oe(k,ke,$e+ii(H/2),ce,Hn(0,Ue-H),Qe,tt),Se(f,m,ie,ke-H/2,$e,ce+H,Ue)}}return H>0?A.stroke=et?Ae:k:et||(A._fill=p.width==0?p._fill:p._stroke??p._fill,A.width=0),A.fill=et?me:k,A})}function CS(i,e){let t=St(e?.alignGaps,0);return(n,s,r,a)=>nr(n,s,(o,l,c,u,d,h,f,m,v,g,p)=>{[r,a]=Hl(c,r,a);let x=o.pxRound,y=ee=>x(h(ee,u,g,m)),_=ee=>x(f(ee,d,p,v)),L,M,R;u.ori==0?(L=$l,R=aa,M=Pv):(L=Yl,R=oa,M=Iv);let P=u.dir*(u.ori==0?1:-1),w=y(l[P==1?r:a]),S=w,D=[],B=[];for(let ee=P==1?r:a;ee>=r&&ee<=a;ee+=P)if(c[ee]!=null){let re=l[ee],oe=y(re);D.push(S=oe),B.push(_(c[ee]))}let C={stroke:i(D,B,L,R,M,x),fill:null,clip:null,band:null,gaps:null,flags:sa},V=C.stroke,[q,ne]=dh(n,s);if(o.fill!=null||q!=0){let ee=C.fill=new Path2D(V),K=o.fillTo(n,s,o.min,o.max,q),re=_(K);R(ee,S,re),R(ee,w,re)}if(!o.spanGaps){let ee=[];ee.push(...hh(l,c,r,a,P,y,t)),C.gaps=ee=o.gaps(n,s,r,a,ee),C.clip=Xl(ee,u.ori,m,v,g,p)}return ne!=0&&(C.band=ne==2?[ns(n,s,r,a,V,-1),ns(n,s,r,a,V,1)]:ns(n,s,r,a,V,ne)),C})}function PS(i){return CS(IS,i)}function IS(i,e,t,n,s,r){let a=i.length;if(a<2)return null;let o=new Path2D;if(t(o,i[0],e[0]),a==2)n(o,i[1],e[1]);else{let l=Array(a),c=Array(a-1),u=Array(a-1),d=Array(a-1);for(let h=0;h<a-1;h++)u[h]=e[h+1]-e[h],d[h]=i[h+1]-i[h],c[h]=u[h]/d[h];l[0]=c[0];for(let h=1;h<a-1;h++)c[h]===0||c[h-1]===0||c[h-1]>0!=c[h]>0?l[h]=0:(l[h]=3*(d[h-1]+d[h])/((2*d[h]+d[h-1])/c[h-1]+(d[h]+2*d[h-1])/c[h]),isFinite(l[h])||(l[h]=0));l[a-1]=c[a-2];for(let h=0;h<a-1;h++)s(o,i[h]+d[h]/3,e[h]+l[h]*d[h]/3,i[h+1]-d[h]/3,e[h+1]-l[h+1]*d[h]/3,i[h+1],e[h+1])}return o}var Kd=new Set;function Zg(){for(let i of Kd)i.syncRect(!0)}ra&&(er(db,ea,Zg),er(hb,ea,Zg,!0),er(Bl,ea,()=>{Mn.pxRatio=wt}));var LS=Dv(),NS=Lv();function Jg(i,e,t,n){return(n?[i[0],i[1]].concat(i.slice(2)):[i[0]].concat(i.slice(1))).map((r,a)=>Qd(r,a,e,t))}function DS(i,e){return i.map((t,n)=>n==0?{}:on({},e,t))}function Qd(i,e,t,n){return on({},e==0?t:n,i)}function Uv(i,e,t){return e==null?na:[e,t]}var US=Uv;function FS(i,e,t){return e==null?na:zl(e,t,sh,!0)}function Fv(i,e,t,n){return e==null?na:Gl(e,t,i.scales[n].log,!1)}var OS=Fv;function Ov(i,e,t,n){return e==null?na:ih(e,t,i.scales[n].log,!1)}var kS=Ov;function BS(i,e,t,n,s){let r=Hn(Rg(i),Rg(e)),a=e-i,o=Ci(s/n*a,t);do{let l=t[o],c=n*l/a;if(c>=s&&r+(l<5?Cs.get(l):0)<=17)return[l,c]}while(++o<t.length);return[0,0]}function jg(i){let e,t;return i=i.replace(/(\d+)px/,(n,s)=>(e=hn((t=+s)*wt))+"px"),[i,e,t]}function zS(i){i.show&&[i.font,i.labelFont].forEach(e=>{let t=kt(e[2]*wt,1);e[0]=e[0].replace(/[0-9.]+px/,t+"px"),e[1]=t})}function Mn(i,e,t){let n={mode:St(i.mode,1)},s=n.mode;function r(b,E,I,F){let z=E.valToPct(b);return F+I*(E.dir==-1?1-z:z)}function a(b,E,I,F){let z=E.valToPct(b);return F+I*(E.dir==-1?z:1-z)}function o(b,E,I,F){return E.ori==0?r(b,E,I,F):a(b,E,I,F)}n.valToPosH=r,n.valToPosV=a;let l=!1;n.status=0;let c=n.root=vi($_);if(i.id!=null&&(c.id=i.id),ni(c,i.class),i.title){let b=vi(J_,c);b.textContent=i.title}let u=Ri("canvas"),d=n.ctx=u.getContext("2d"),h=vi(j_,c);er("click",h,b=>{b.target===m&&(Ht!=$r||Yt!=Yr)&&Rn.click(n,b)},!0);let f=n.under=vi(K_,h);h.appendChild(u);let m=n.over=vi(Q_,h);i=ia(i);let v=+St(i.pxAlign,1),g=$g(v);(i.plugins||[]).forEach(b=>{b.opts&&(i=b.opts(n,i)||i)});let p=i.ms||.001,x=n.series=s==1?Jg(i.series||[],zg,qg,!1):DS(i.series||[null],Wg),y=n.axes=Jg(i.axes||[],Bg,Hg,!0),_=n.scales={},L=n.bands=i.bands||[];L.forEach(b=>{b.fill=yt(b.fill||null),b.dir=St(b.dir,-1)});let M=s==2?x[1].facets[0].scale:x[0].scale,R={axes:I_,series:wd},P=(i.drawOrder||["axes","series"]).map(b=>R[b]);function w(b){let E=b.distr==3?I=>ts(I>0?I:b.clamp(n,I,b.min,b.max,b.key)):b.distr==4?I=>zd(I,b.asinh):b.distr==100?I=>b.fwd(I):I=>I;return I=>{let F=E(I),{_min:z,_max:J}=b,de=J-z;return(F-z)/de}}function S(b){let E=_[b];if(E==null){let I=(i.scales||uo)[b]||uo;if(I.from!=null){S(I.from);let F=on({},_[I.from],I,{key:b});F.valToPct=w(F),_[b]=F}else{E=_[b]=on({},b==M?Ev:SS,I),E.key=b;let F=E.time,z=E.range,J=Rs(z);if((b!=M||s==2&&!F)&&(J&&(z[0]==null||z[1]==null)&&(z={min:z[0]==null?Eg:{mode:1,hard:z[0],soft:z[0]},max:z[1]==null?Eg:{mode:1,hard:z[1],soft:z[1]}},J=!1),!J&&ql(z))){let de=z;z=(Ee,Le,ze)=>Le==null?na:zl(Le,ze,de)}E.range=yt(z||(F?US:b==M?E.distr==3?OS:E.distr==4?kS:Uv:E.distr==3?Fv:E.distr==4?Ov:FS)),E.auto=yt(J?!1:E.auto),E.clamp=yt(E.clamp||bS),E._min=E._max=null,E.valToPct=w(E)}}}S("x"),S("y"),s==1&&x.forEach(b=>{S(b.scale)}),y.forEach(b=>{S(b.scale)});for(let b in i.scales)S(b);let D=_[M],B=D.distr,C,V;D.ori==0?(ni(c,Y_),C=r,V=a):(ni(c,Z_),C=a,V=r);let q={};for(let b in _){let E=_[b];(E.min!=null||E.max!=null)&&(q[b]={min:E.min,max:E.max},E.min=E.max=null)}let ne=i.tzDate||(b=>new Date(hn(b/p))),ee=i.fmtDate||oh,K=p==1?Yb(ne):jb(ne),re=Fg(ne,Ug(p==1?$b:Jb,ee)),oe=kg(ne,Og(Qb,ee)),Se=[],Re=n.legend=on({},nS,i.legend),be=n.cursor=on({},lS,{drag:{y:s==2}},i.cursor),te=Re.show,ue=be.show,pe=Re.markers;Re.idxs=Se,pe.width=yt(pe.width),pe.dash=yt(pe.dash),pe.stroke=yt(pe.stroke),pe.fill=yt(pe.fill);let ce,Ve,Je,H=[],et=[],ae,me=!1,se={};if(Re.live){let b=x[1]?x[1].values:null;me=b!=null,ae=me?b(n,1,0):{_:0};for(let E in ae)se[E]=th}if(te)if(ce=Ri("table",rb,c),Je=Ri("tbody",null,ce),Re.mount(n,ce),me){Ve=Ri("thead",null,ce,Je);let b=Ri("tr",null,Ve);Ri("th",null,b);for(var Ae in ae)Ri("th",hg,b).textContent=Ae}else ni(ce,ob),Re.live&&ni(ce,ab);let fe={show:!0},Ce={show:!1};function qe(b,E){if(E==0&&(me||!Re.live||s==2))return na;let I=[],F=Ri("tr",lb,Je,Je.childNodes[E]);ni(F,b.class),b.show||ni(F,Qs);let z=Ri("th",null,F);if(pe.show){let Ee=vi(cb,z);if(E>0){let Le=pe.width(n,E);Le&&(Ee.style.border=Le+"px "+pe.dash(n,E)+" "+pe.stroke(n,E)),Ee.style.background=pe.fill(n,E)}}let J=vi(hg,z);b.label instanceof HTMLElement?J.appendChild(b.label):J.textContent=b.label,E>0&&(pe.show||(J.style.color=b.width>0?pe.stroke(n,E):pe.fill(n,E)),A("click",z,Ee=>{if(be._lock)return;Pt(Ee);let Le=x.indexOf(b);if((Ee.ctrlKey||Ee.metaKey)!=Re.isolate){let ze=x.some((Ge,Xe)=>Xe>0&&Xe!=Le&&Ge.show);x.forEach((Ge,Xe)=>{Xe>0&&Oi(Xe,ze?Xe==Le?fe:Ce:fe,!0,an.setSeries)})}else Oi(Le,{show:!b.show},!0,an.setSeries)},!1),yn&&A(gg,z,Ee=>{be._lock||(Pt(Ee),Oi(x.indexOf(b),Jr,!0,an.setSeries))},!1));for(var de in ae){let Ee=Ri("td",ub,F);Ee.textContent="--",I.push(Ee)}return[F,I]}let N=new Map;function A(b,E,I,F=!0){let z=N.get(E)||{},J=be.bind[b](n,E,I,F);J&&(er(b,E,z[b]=J),N.set(E,z))}function k(b,E,I){let F=N.get(E)||{};for(let z in F)(b==null||z==b)&&($d(z,E,F[z]),delete F[z]);b==null&&N.delete(E)}let O=0,Z=0,$=0,ie=0,ye=0,xe=0,je=ye,we=xe,ke=$,rt=ie,$e=0,Ue=0,Qe=0,tt=0;n.bbox={};let Ct=!1,at=!1,G=!1,ge=!1,le=!1,Ie=!1;function Ne(b,E,I){(I||b!=n.width||E!=n.height)&&ot(b,E),Gr(!1),G=!0,at=!0,Wr()}function ot(b,E){n.width=O=$=b,n.height=Z=ie=E,ye=xe=0,xt(),In();let I=n.bbox;$e=I.left=js(ye*wt,.5),Ue=I.top=js(xe*wt,.5),Qe=I.width=js($*wt,.5),tt=I.height=js(ie*wt,.5)}let _t=3;function At(){let b=!1,E=0;for(;!b;){E++;let I=C_(E),F=P_(E);b=E==_t||I&&F,b||(ot(n.width,n.height),at=!0)}}function nn({width:b,height:E}){Ne(b,E)}n.setSize=nn;function xt(){let b=!1,E=!1,I=!1,F=!1;y.forEach((z,J)=>{if(z.show&&z._show){let{side:de,_size:Ee}=z,Le=de%2,ze=z.label!=null?z.labelSize:0,Ge=Ee+ze;Ge>0&&(Le?($-=Ge,de==3?(ye+=Ge,F=!0):I=!0):(ie-=Ge,de==0?(xe+=Ge,b=!0):E=!0))}}),T[0]=b,T[1]=I,T[2]=E,T[3]=F,$-=X[1]+X[3],ye+=X[3],ie-=X[2]+X[0],xe+=X[0]}function In(){let b=ye+$,E=xe+ie,I=ye,F=xe;function z(J,de){switch(J){case 1:return b+=de,b-de;case 2:return E+=de,E-de;case 3:return I-=de,I+de;case 0:return F-=de,F+de}}y.forEach((J,de)=>{if(J.show&&J._show){let Ee=J.side;J._pos=z(Ee,J._size),J.label!=null&&(J._lpos=z(Ee,J.labelSize))}})}if(be.dataIdx==null){let b=be.hover,E=b.skip=new Set(b.skip??[]);E.add(void 0);let I=b.prox=yt(b.prox),F=b.bias??(b.bias=0);be.dataIdx=(z,J,de,Ee)=>{if(J==0)return de;let Le=de,ze=I(z,J,de,Ee)??Ot,Ge=ze>=0&&ze<Ot,Xe=D.ori==0?$:ie,ct=be.left,Mt=e[0],bt=e[J];if(E.has(bt[de])){Le=null;let mt=null,nt=null,Ke;if(F==0||F==-1)for(Ke=de;mt==null&&Ke-- >0;)E.has(bt[Ke])||(mt=Ke);if(F==0||F==1)for(Ke=de;nt==null&&Ke++<bt.length;)E.has(bt[Ke])||(nt=Ke);if(mt!=null||nt!=null)if(Ge){let Wt=mt==null?-1/0:C(Mt[mt],D,Xe,0),jt=nt==null?1/0:C(Mt[nt],D,Xe,0),Sn=ct-Wt,Ut=jt-ct;Sn<=Ut?Sn<=ze&&(Le=mt):Ut<=ze&&(Le=nt)}else Le=nt==null?mt:mt==null?nt:de-mt<=nt-de?mt:nt}else Ge&&fn(ct-C(Mt[de],D,Xe,0))>ze&&(Le=null);return Le}}let Pt=b=>{be.event=b};be.idxs=Se,be._lock=!1;let Vt=be.points;Vt.show=yt(Vt.show),Vt.size=yt(Vt.size),Vt.stroke=yt(Vt.stroke),Vt.width=yt(Vt.width),Vt.fill=yt(Vt.fill);let vn=n.focus=on({},i.focus||{alpha:.3},be.focus),yn=vn.prox>=0,Kn=yn&&Vt.one,Bt=[],Ln=[],wi=[];function Q(b,E){let I=Vt.show(n,E);if(I instanceof HTMLElement)return ni(I,sb),ni(I,b.class),Vi(I,-10,-10,$,ie),m.insertBefore(I,Bt[E]),I}function he(b,E){if(s==1||E>0){let I=s==1&&_[b.scale].time,F=b.value;b.value=I?Ig(F)?kg(ne,Og(F,ee)):F||oe:F||yS,b.label=b.label||(I?uS:cS)}if(Kn||E>0){b.width=b.width==null?1:b.width,b.paths=b.paths||LS||Sb,b.fillTo=yt(b.fillTo||MS),b.pxAlign=+St(b.pxAlign,v),b.pxRound=$g(b.pxAlign),b.stroke=yt(b.stroke||null),b.fill=yt(b.fill||null),b._stroke=b._fill=b._paths=b._focus=null;let I=xS(Hn(1,b.width),1),F=b.points=on({},{size:I,width:Hn(1,I*.2),stroke:b.stroke,space:I*2,paths:NS,_stroke:null,_fill:null},b.points);F.show=yt(F.show),F.filter=yt(F.filter),F.fill=yt(F.fill),F.stroke=yt(F.stroke),F.paths=yt(F.paths),F.pxAlign=b.pxAlign}if(te){let I=qe(b,E);H.splice(E,0,I[0]),et.splice(E,0,I[1]),Re.values.push(null)}if(ue){Se.splice(E,0,null);let I=null;Kn?E==0&&(I=Q(b,E)):E>0&&(I=Q(b,E)),Bt.splice(E,0,I),Ln.splice(E,0,0),wi.splice(E,0,0)}bn("addSeries",E)}function Oe(b,E){E=E??x.length,b=s==1?Qd(b,E,zg,qg):Qd(b,E,{},Wg),x.splice(E,0,b),he(x[E],E)}n.addSeries=Oe;function ut(b){if(x.splice(b,1),te){Re.values.splice(b,1),et.splice(b,1);let E=H.splice(b,1)[0];k(null,E.firstChild),E.remove()}ue&&(Se.splice(b,1),Bt.splice(b,1)[0].remove(),Ln.splice(b,1),wi.splice(b,1)),bn("delSeries",b)}n.delSeries=ut;let T=[!1,!1,!1,!1];function W(b,E){if(b._show=b.show,b.show){let I=b.side%2,F=_[b.scale];F==null&&(b.scale=I?x[1].scale:M,F=_[b.scale]);let z=F.time;b.size=yt(b.size),b.space=yt(b.space),b.rotate=yt(b.rotate),Rs(b.incrs)&&b.incrs.forEach(de=>{!Cs.has(de)&&Cs.set(de,av(de))}),b.incrs=yt(b.incrs||(F.distr==2?Wb:z?p==1?Xb:Zb:Ks)),b.splits=yt(b.splits||(z&&F.distr==1?K:F.distr==3?Zd:F.distr==4?fS:hS)),b.stroke=yt(b.stroke),b.grid.stroke=yt(b.grid.stroke),b.ticks.stroke=yt(b.ticks.stroke),b.border.stroke=yt(b.border.stroke);let J=b.values;b.values=Rs(J)&&!Rs(J[0])?yt(J):z?Rs(J)?Fg(ne,Ug(J,ee)):Ig(J)?Kb(ne,J):J||re:J||dS,b.filter=yt(b.filter||(F.distr>=3&&F.log==10?gS:F.distr==3&&F.log==2?vS:sv)),b.font=jg(b.font),b.labelFont=jg(b.labelFont),b._size=b.size(n,null,E,0),b._space=b._rotate=b._incrs=b._found=b._splits=b._values=null,b._size>0&&(T[E]=!0,b._el=vi(eb,h))}}function j(b,E,I,F){let[z,J,de,Ee]=I,Le=E%2,ze=0;return Le==0&&(Ee||J)&&(ze=E==0&&!z||E==2&&!de?hn(Bg.size/3):0),Le==1&&(z||de)&&(ze=E==1&&!J||E==3&&!Ee?hn(Hg.size/2):0),ze}let Y=n.padding=(i.padding||[j,j,j,j]).map(b=>yt(St(b,j))),X=n._padding=Y.map((b,E)=>b(n,E,T,0)),Me,Pe=null,Te=null,He=s==1?x[0].idxs:null,Ze=null,Be=!1;function st(b,E){if(e=b??[],n.data=n._data=e,s==2){Me=0;for(let I=1;I<x.length;I++)Me+=e[I][0].length}else{e.length==0&&(n.data=n._data=e=[[]]),Ze=e[0],Me=Ze.length;let I=e;if(B==2){I=e.slice();let F=I[0]=Array(Me);for(let z=0;z<Me;z++)F[z]=z}n._data=e=I}if(Gr(!0),bn("setData"),B==2&&(G=!0),E!==!1){let I=D;I.auto(n,Be)?Ft():Es(M,I.min,I.max),ge=ge||be.left>=0,Ie=!0,Wr()}}n.setData=st;function Ft(){Be=!0;let b,E;s==1&&(Me>0?(Pe=He[0]=0,Te=He[1]=Me-1,b=e[0][Pe],E=e[0][Te],B==2?(b=Pe,E=Te):b==E&&(B==3?[b,E]=Gl(b,b,D.log,!1):B==4?[b,E]=ih(b,b,D.log,!1):D.time?E=b+hn(86400/p):[b,E]=zl(b,E,sh,!0))):(Pe=He[0]=b=null,Te=He[1]=E=null)),Es(M,b,E)}let $t,Zt,kn,vt,lt,Qi,Dt,Ei,zr,rn;function Vr(b,E,I,F,z,J){b??(b=pg),I??(I=ah),F??(F="butt"),z??(z=pg),J??(J="round"),b!=$t&&(d.strokeStyle=$t=b),z!=Zt&&(d.fillStyle=Zt=z),E!=kn&&(d.lineWidth=kn=E),J!=lt&&(d.lineJoin=lt=J),F!=Qi&&(d.lineCap=Qi=F),I!=vt&&d.setLineDash(vt=I)}function dn(b,E,I,F){E!=Zt&&(d.fillStyle=Zt=E),b!=Dt&&(d.font=Dt=b),I!=Ei&&(d.textAlign=Ei=I),F!=zr&&(d.textBaseline=zr=F)}function pi(b,E,I,F,z=0){if(F.length>0&&b.auto(n,Be)&&(E==null||E.min==null)){let J=St(Pe,0),de=St(Te,F.length-1),Ee=I.min==null?gb(F,J,de,z,b.distr==3):[I.min,I.max];b.min=Pi(b.min,I.min=Ee[0]),b.max=Hn(b.max,I.max=Ee[1])}}let Hr={min:null,max:null};function Yn(){for(let F in _){let z=_[F];q[F]==null&&(z.min==null||q[M]!=null&&z.auto(n,Be))&&(q[F]=Hr)}for(let F in _){let z=_[F];q[F]==null&&z.from!=null&&q[z.from]!=null&&(q[F]=Hr)}q[M]!=null&&Gr(!0);let b={};for(let F in q){let z=q[F];if(z!=null){let J=b[F]=ia(_[F],Eb);if(z.min!=null)on(J,z);else if(F!=M||s==2)if(Me==0&&J.from==null){let de=J.range(n,null,null,F);J.min=de[0],J.max=de[1]}else J.min=Ot,J.max=-Ot}}if(Me>0){x.forEach((F,z)=>{if(s==1){let J=F.scale,de=q[J];if(de==null)return;let Ee=b[J];if(z==0){let Le=Ee.range(n,Ee.min,Ee.max,J);Ee.min=Le[0],Ee.max=Le[1],Pe=Ci(Ee.min,e[0]),Te=Ci(Ee.max,e[0]),Te-Pe>1&&(e[0][Pe]<Ee.min&&Pe++,e[0][Te]>Ee.max&&Te--),F.min=Ze[Pe],F.max=Ze[Te]}else F.show&&F.auto&&pi(Ee,de,F,e[z],F.sorted);F.idxs[0]=Pe,F.idxs[1]=Te}else if(z>0&&F.show&&F.auto){let[J,de]=F.facets,Ee=J.scale,Le=de.scale,[ze,Ge]=e[z],Xe=b[Ee],ct=b[Le];Xe!=null&&pi(Xe,q[Ee],J,ze,J.sorted),ct!=null&&pi(ct,q[Le],de,Ge,de.sorted),F.min=de.min,F.max=de.max}});for(let F in b){let z=b[F],J=q[F];if(z.from==null&&(J==null||J.min==null)){let de=z.range(n,z.min==Ot?null:z.min,z.max==-Ot?null:z.max,F);z.min=de[0],z.max=de[1]}}}for(let F in b){let z=b[F];if(z.from!=null){let J=b[z.from];if(J.min==null)z.min=z.max=null;else{let de=z.range(n,J.min,J.max,F);z.min=de[0],z.max=de[1]}}}let E={},I=!1;for(let F in b){let z=b[F],J=_[F];if(J.min!=z.min||J.max!=z.max){J.min=z.min,J.max=z.max;let de=J.distr;J._min=de==3?ts(J.min):de==4?zd(J.min,J.asinh):de==100?J.fwd(J.min):J.min,J._max=de==3?ts(J.max):de==4?zd(J.max,J.asinh):de==100?J.fwd(J.max):J.max,E[F]=I=!0}}if(I){x.forEach((F,z)=>{s==2?z>0&&E.y&&(F._paths=null):E[F.scale]&&(F._paths=null)});for(let F in E)G=!0,bn("setScale",F);ue&&be.left>=0&&(ge=Ie=!0)}for(let F in q)q[F]=null}function Ka(b){let E=Yd(Pe-1,0,Me-1),I=Yd(Te+1,0,Me-1);for(;b[E]==null&&E>0;)E--;for(;b[I]==null&&I<Me-1;)I++;return[E,I]}function wd(){if(Me>0){let b=x.some(E=>E._focus)&&rn!=vn.alpha;b&&(d.globalAlpha=rn=vn.alpha),x.forEach((E,I)=>{if(I>0&&E.show&&(Qa(I,!1),Qa(I,!0),E._paths==null)){let F=rn;rn!=E.alpha&&(d.globalAlpha=rn=E.alpha);let z=s==2?[0,e[I][0].length-1]:Ka(e[I]);E._paths=E.paths(n,I,z[0],z[1]),rn!=F&&(d.globalAlpha=rn=F)}}),x.forEach((E,I)=>{if(I>0&&E.show){let F=rn;rn!=E.alpha&&(d.globalAlpha=rn=E.alpha),E._paths!=null&&Wm(I,!1);{let z=E._paths!=null?E._paths.gaps:null,J=E.points.show(n,I,Pe,Te,z),de=E.points.filter(n,I,J,z);(J||de)&&(E.points._paths=E.points.paths(n,I,Pe,Te,de),Wm(I,!0))}rn!=F&&(d.globalAlpha=rn=F),bn("drawSeries",I)}}),b&&(d.globalAlpha=rn=1)}}function Qa(b,E){let I=E?x[b].points:x[b];I._stroke=I.stroke(n,b),I._fill=I.fill(n,b)}function Wm(b,E){let I=E?x[b].points:x[b],{stroke:F,fill:z,clip:J,flags:de,_stroke:Ee=I._stroke,_fill:Le=I._fill,_width:ze=I.width}=I._paths;ze=kt(ze*wt,3);let Ge=null,Xe=ze%2/2;E&&Le==null&&(Le=ze>0?"#fff":Ee);let ct=I.pxAlign==1&&Xe>0;if(ct&&d.translate(Xe,Xe),!E){let Mt=$e-ze/2,bt=Ue-ze/2,mt=Qe+ze,nt=tt+ze;Ge=new Path2D,Ge.rect(Mt,bt,mt,nt)}E?Ed(Ee,ze,I.dash,I.cap,Le,F,z,de,J):T_(b,Ee,ze,I.dash,I.cap,Le,F,z,de,Ge,J),ct&&d.translate(-Xe,-Xe)}function T_(b,E,I,F,z,J,de,Ee,Le,ze,Ge){let Xe=!1;Le!=0&&L.forEach((ct,Mt)=>{if(ct.series[0]==b){let bt=x[ct.series[1]],mt=e[ct.series[1]],nt=(bt._paths||uo).band;Rs(nt)&&(nt=ct.dir==1?nt[0]:nt[1]);let Ke,Wt=null;bt.show&&nt&&yb(mt,Pe,Te)?(Wt=ct.fill(n,Mt)||J,Ke=bt._paths.clip):nt=null,Ed(E,I,F,z,Wt,de,Ee,Le,ze,Ge,Ke,nt),Xe=!0}}),Xe||Ed(E,I,F,z,J,de,Ee,Le,ze,Ge)}let qm=sa|jd;function Ed(b,E,I,F,z,J,de,Ee,Le,ze,Ge,Xe){Vr(b,E,I,F,z),(Le||ze||Xe)&&(d.save(),Le&&d.clip(Le),ze&&d.clip(ze)),Xe?(Ee&qm)==qm?(d.clip(Xe),Ge&&d.clip(Ge),Il(z,de),Pl(b,J,E)):Ee&jd?(Il(z,de),d.clip(Xe),Pl(b,J,E)):Ee&sa&&(d.save(),d.clip(Xe),Ge&&d.clip(Ge),Il(z,de),d.restore(),Pl(b,J,E)):(Il(z,de),Pl(b,J,E)),(Le||ze||Xe)&&d.restore()}function Pl(b,E,I){I>0&&(E instanceof Map?E.forEach((F,z)=>{d.strokeStyle=$t=z,d.stroke(F)}):E!=null&&b&&d.stroke(E))}function Il(b,E){E instanceof Map?E.forEach((I,F)=>{d.fillStyle=Zt=F,d.fill(I)}):E!=null&&b&&d.fill(E)}function R_(b,E,I,F){let z=y[b],J;if(F<=0)J=[0,0];else{let de=z._space=z.space(n,b,E,I,F),Ee=z._incrs=z.incrs(n,b,E,I,F,de);J=BS(E,I,Ee,F,de)}return z._found=J}function Ad(b,E,I,F,z,J,de,Ee,Le,ze){let Ge=de%2/2;v==1&&d.translate(Ge,Ge),Vr(Ee,de,Le,ze,Ee),d.beginPath();let Xe,ct,Mt,bt,mt=z+(F==0||F==3?-J:J);I==0?(ct=z,bt=mt):(Xe=z,Mt=mt);for(let nt=0;nt<b.length;nt++)E[nt]!=null&&(I==0?Xe=Mt=b[nt]:ct=bt=b[nt],d.moveTo(Xe,ct),d.lineTo(Mt,bt));d.stroke(),v==1&&d.translate(-Ge,-Ge)}function C_(b){let E=!0;return y.forEach((I,F)=>{if(!I.show)return;let z=_[I.scale];if(z.min==null){I._show&&(E=!1,I._show=!1,Gr(!1));return}else I._show||(E=!1,I._show=!0,Gr(!1));let J=I.side,de=J%2,{min:Ee,max:Le}=z,[ze,Ge]=R_(F,Ee,Le,de==0?$:ie);if(Ge==0)return;let Xe=z.distr==2,ct=I._splits=I.splits(n,F,Ee,Le,ze,Ge,Xe),Mt=z.distr==2?ct.map(Ke=>Ze[Ke]):ct,bt=z.distr==2?Ze[ct[1]]-Ze[ct[0]]:ze,mt=I._values=I.values(n,I.filter(n,Mt,F,Ge,bt),F,Ge,bt);I._rotate=J==2?I.rotate(n,mt,F,Ge):0;let nt=I._size;I._size=yi(I.size(n,mt,F,b)),nt!=null&&I._size!=nt&&(E=!1)}),E}function P_(b){let E=!0;return Y.forEach((I,F)=>{let z=I(n,F,T,b);z!=X[F]&&(E=!1),X[F]=z}),E}function I_(){for(let b=0;b<y.length;b++){let E=y[b];if(!E.show||!E._show)continue;let I=E.side,F=I%2,z,J,de=E.stroke(n,b),Ee=I==0||I==3?-1:1,[Le,ze]=E._found;if(E.label!=null){let zn=E.labelGap*Ee,ti=hn((E._lpos+zn)*wt);dn(E.labelFont[0],de,"center",I==2?"top":fg),d.save(),F==1?(z=J=0,d.translate(ti,hn(Ue+tt/2)),d.rotate((I==3?-kl:kl)/2)):(z=hn($e+Qe/2),J=ti);let Js=nv(E.label)?E.label(n,b,Le,ze):E.label;d.fillText(Js,z,J),d.restore()}if(ze==0)continue;let Ge=_[E.scale],Xe=F==0?Qe:tt,ct=F==0?$e:Ue,Mt=E._splits,bt=Ge.distr==2?Mt.map(zn=>Ze[zn]):Mt,mt=Ge.distr==2?Ze[Mt[1]]-Ze[Mt[0]]:Le,nt=E.ticks,Ke=E.border,Wt=nt.show?nt.size:0,jt=hn(Wt*wt),Sn=hn((E.alignTo==2?E._size-Wt-E.gap:E.gap)*wt),Ut=E._rotate*-kl/180,Kt=g(E._pos*wt),Qn=(jt+Sn)*Ee,Bn=Kt+Qn;J=F==0?Bn:0,z=F==1?Bn:0;let mi=E.font[0],Ai=E.align==1?Kr:E.align==2?Od:Ut>0?Kr:Ut<0?Od:F==0?"center":I==3?Od:Kr,Bi=Ut||F==1?"middle":I==2?"top":fg;dn(mi,de,Ai,Bi);let ei=E.font[1]*E.lineGap,gi=Mt.map(zn=>g(o(zn,Ge,Xe,ct))),Ti=E._values;for(let zn=0;zn<Ti.length;zn++){let ti=Ti[zn];if(ti!=null){F==0?z=gi[zn]:J=gi[zn],ti=""+ti;let Js=ti.indexOf(`
`)==-1?[ti]:ti.split(/\n/gm);for(let Vn=0;Vn<Js.length;Vn++){let ug=Js[Vn];Ut?(d.save(),d.translate(z,J+Vn*ei),d.rotate(Ut),d.fillText(ug,0,0),d.restore()):d.fillText(ug,z,J+Vn*ei)}}}nt.show&&Ad(gi,nt.filter(n,bt,b,ze,mt),F,I,Kt,jt,kt(nt.width*wt,3),nt.stroke(n,b),nt.dash,nt.cap);let zi=E.grid;zi.show&&Ad(gi,zi.filter(n,bt,b,ze,mt),F,F==0?2:1,F==0?Ue:$e,F==0?tt:Qe,kt(zi.width*wt,3),zi.stroke(n,b),zi.dash,zi.cap),Ke.show&&Ad([Kt],[1],F==0?1:0,F==0?1:2,F==1?Ue:$e,F==1?tt:Qe,kt(Ke.width*wt,3),Ke.stroke(n,b),Ke.dash,Ke.cap)}bn("drawAxes")}function Gr(b){x.forEach((E,I)=>{I>0&&(E._paths=null,b&&(s==1?(E.min=null,E.max=null):E.facets.forEach(F=>{F.min=null,F.max=null})))})}let Ll=!1,Td=!1,eo=[];function L_(){Td=!1;for(let b=0;b<eo.length;b++)bn(...eo[b]);eo.length=0}function Wr(){Ll||(Lb(Xm),Ll=!0)}function N_(b,E=!1){Ll=!0,Td=E,b(n),Xm(),E&&eo.length>0&&queueMicrotask(L_)}n.batch=N_;function Xm(){if(Ct&&(Yn(),Ct=!1),G&&(At(),G=!1),at){if(qt(f,Kr,ye),qt(f,"top",xe),qt(f,ao,$),qt(f,oo,ie),qt(m,Kr,ye),qt(m,"top",xe),qt(m,ao,$),qt(m,oo,ie),qt(h,ao,O),qt(h,oo,Z),u.width=hn(O*wt),u.height=hn(Z*wt),y.forEach(({_el:b,_show:E,_size:I,_pos:F,side:z})=>{if(b!=null)if(E){let J=z===3||z===0?I:0,de=z%2==1;qt(b,de?"left":"top",F-J),qt(b,de?"width":"height",I),qt(b,de?"top":"left",de?xe:ye),qt(b,de?"height":"width",de?ie:$),Xd(b,Qs)}else ni(b,Qs)}),$t=Zt=kn=lt=Qi=Dt=Ei=zr=vt=null,rn=1,io(!0),ye!=je||xe!=we||$!=ke||ie!=rt){Gr(!1);let b=$/ke,E=ie/rt;if(ue&&!ge&&be.left>=0){be.left*=b,be.top*=E,qr&&Vi(qr,hn(be.left),0,$,ie),Xr&&Vi(Xr,0,hn(be.top),$,ie);for(let I=0;I<Bt.length;I++){let F=Bt[I];F!=null&&(Ln[I]*=b,wi[I]*=E,Vi(F,yi(Ln[I]),yi(wi[I]),$,ie))}}if(Gt.show&&!le&&Gt.left>=0&&Gt.width>0){Gt.left*=b,Gt.width*=b,Gt.top*=E,Gt.height*=E;for(let I in Nd)qt(Zr,I,Gt[I])}je=ye,we=xe,ke=$,rt=ie}bn("setSize"),at=!1}O>0&&Z>0&&(d.clearRect(0,0,u.width,u.height),bn("drawClear"),P.forEach(b=>b()),bn("draw")),Gt.show&&le&&(Nl(Gt),le=!1),ue&&ge&&(Zs(null,!0,!1),ge=!1),Re.show&&Re.live&&Ie&&(Id(),Ie=!1),l||(l=!0,n.status=1,bn("ready")),Be=!1,Ll=!1}n.redraw=(b,E)=>{G=E||!1,b!==!1?Es(M,D.min,D.max):Wr()};function Rd(b,E){let I=_[b];if(I.from==null){if(Me==0){let F=I.range(n,E.min,E.max,b);E.min=F[0],E.max=F[1]}if(E.min>E.max){let F=E.min;E.min=E.max,E.max=F}if(Me>1&&E.min!=null&&E.max!=null&&E.max-E.min<1e-16)return;b==M&&I.distr==2&&Me>0&&(E.min=Ci(E.min,e[0]),E.max=Ci(E.max,e[0]),E.min==E.max&&E.max++),q[b]=E,Ct=!0,Wr()}}n.setScale=Rd;let Cd,Pd,qr,Xr,$m,Ym,$r,Yr,Zm,Jm,Ht,Yt,ws=!1,Rn=be.drag,xn=Rn.x,_n=Rn.y;ue&&(be.x&&(Cd=vi(nb,m)),be.y&&(Pd=vi(ib,m)),D.ori==0?(qr=Cd,Xr=Pd):(qr=Pd,Xr=Cd),Ht=be.left,Yt=be.top);let Gt=n.select=on({show:!0,over:!0,left:0,width:0,top:0,height:0},i.select),Zr=Gt.show?vi(tb,Gt.over?m:f):null;function Nl(b,E){if(Gt.show){for(let I in b)Gt[I]=b[I],I in Nd&&qt(Zr,I,b[I]);E!==!1&&bn("setSelect")}}n.setSelect=Nl;function D_(b){if(x[b].show)te&&Xd(H[b],Qs);else if(te&&ni(H[b],Qs),ue){let I=Kn?Bt[0]:Bt[b];I!=null&&Vi(I,-10,-10,$,ie)}}function Es(b,E,I){Rd(b,{min:E,max:I})}function Oi(b,E,I,F){E.focus!=null&&B_(b),E.show!=null&&x.forEach((z,J)=>{J>0&&(b==J||b==null)&&(z.show=E.show,D_(J),s==2?(Es(z.facets[0].scale,null,null),Es(z.facets[1].scale,null,null)):Es(z.scale,null,null),Wr())}),I!==!1&&bn("setSeries",b,E),F&&so("setSeries",n,b,E)}n.setSeries=Oi;function U_(b,E){on(L[b],E)}function F_(b,E){b.fill=yt(b.fill||null),b.dir=St(b.dir,-1),E=E??L.length,L.splice(E,0,b)}function O_(b){b==null?L.length=0:L.splice(b,1)}n.addBand=F_,n.setBand=U_,n.delBand=O_;function k_(b,E){x[b].alpha=E,ue&&Bt[b]!=null&&(Bt[b].style.opacity=E),te&&H[b]&&(H[b].style.opacity=E)}let es,As,Ys,Jr={focus:!0};function B_(b){if(b!=Ys){let E=b==null,I=vn.alpha!=1;x.forEach((F,z)=>{if(s==1||z>0){let J=E||z==0||z==b;F._focus=E?null:J,I&&k_(z,J?1:vn.alpha)}}),Ys=b,I&&Wr()}}te&&yn&&A(vg,ce,b=>{be._lock||(Pt(b),Ys!=null&&Oi(null,Jr,!0,an.setSeries))});function ki(b,E,I){let F=_[E];I&&(b=b/wt-(F.ori==1?xe:ye));let z=$;F.ori==1&&(z=ie,b=z-b),F.dir==-1&&(b=z-b);let J=F._min,de=F._max,Ee=b/z,Le=J+(de-J)*Ee,ze=F.distr;return ze==3?ta(10,Le):ze==4?_b(Le,F.asinh):ze==100?F.bwd(Le):Le}function z_(b,E){let I=ki(b,M,E);return Ci(I,e[0],Pe,Te)}n.valToIdx=b=>Ci(b,e[0]),n.posToIdx=z_,n.posToVal=ki,n.valToPos=(b,E,I)=>_[E].ori==0?r(b,_[E],I?Qe:$,I?$e:0):a(b,_[E],I?tt:ie,I?Ue:0),n.setCursor=(b,E,I)=>{Ht=b.left,Yt=b.top,Zs(null,E,I)};function jm(b,E){qt(Zr,Kr,Gt.left=b),qt(Zr,ao,Gt.width=E)}function Km(b,E){qt(Zr,"top",Gt.top=b),qt(Zr,oo,Gt.height=E)}let to=D.ori==0?jm:Km,no=D.ori==1?jm:Km;function V_(){if(te&&Re.live)for(let b=s==2?1:0;b<x.length;b++){if(b==0&&me)continue;let E=Re.values[b],I=0;for(let F in E)et[b][I++].firstChild.nodeValue=E[F]}}function Id(b,E){if(b!=null&&(b.idxs?b.idxs.forEach((I,F)=>{Se[F]=I}):wb(b.idx)||Se.fill(b.idx),Re.idx=Se[0]),te&&Re.live){for(let I=0;I<x.length;I++)(I>0||s==1&&!me)&&H_(I,Se[I]);V_()}Ie=!1,E!==!1&&bn("setLegend")}n.setLegend=Id;function H_(b,E){let I=x[b],F=b==0&&B==2?Ze:e[b],z;me?z=I.values(n,b,E)??se:(z=I.value(n,E==null?null:F[E],b,E),z=z==null?se:{_:z}),Re.values[b]=z}function Zs(b,E,I){Zm=Ht,Jm=Yt,[Ht,Yt]=be.move(n,Ht,Yt),be.left=Ht,be.top=Yt,ue&&(qr&&Vi(qr,hn(Ht),0,$,ie),Xr&&Vi(Xr,0,hn(Yt),$,ie));let F,z=Pe>Te;es=Ot,As=null;let J=D.ori==0?$:ie,de=D.ori==1?$:ie;if(Ht<0||Me==0||z){F=be.idx=null;for(let Ee=0;Ee<x.length;Ee++){let Le=Bt[Ee];Le!=null&&Vi(Le,-10,-10,$,ie)}yn&&Oi(null,Jr,!0,b==null&&an.setSeries),Re.live&&(Se.fill(F),Ie=!0)}else{let Ee,Le,ze;s==1&&(Ee=D.ori==0?Ht:Yt,Le=ki(Ee,M),F=be.idx=Ci(Le,e[0],Pe,Te),ze=C(e[0][F],D,J,0));let Ge=-10,Xe=-10,ct=0,Mt=0,bt=!0,mt="",nt="";for(let Ke=s==2?1:0;Ke<x.length;Ke++){let Wt=x[Ke],jt=Se[Ke],Sn=jt==null?null:s==1?e[Ke][jt]:e[Ke][1][jt],Ut=be.dataIdx(n,Ke,F,Le),Kt=Ut==null?null:s==1?e[Ke][Ut]:e[Ke][1][Ut];if(Ie=Ie||Kt!=Sn||Ut!=jt,Se[Ke]=Ut,Ke>0&&Wt.show){let Qn=Ut==null?-10:Ut==F?ze:C(s==1?e[0][Ut]:e[Ke][0][Ut],D,J,0),Bn=Kt==null?-10:V(Kt,s==1?_[Wt.scale]:_[Wt.facets[1].scale],de,0);if(yn&&Kt!=null){let mi=D.ori==1?Ht:Yt,Ai=fn(vn.dist(n,Ke,Ut,Bn,mi));if(Ai<es){let Bi=vn.bias;if(Bi!=0){let ei=ki(mi,Wt.scale),gi=Kt>=0?1:-1,Ti=ei>=0?1:-1;Ti==gi&&(Ti==1?Bi==1?Kt>=ei:Kt<=ei:Bi==1?Kt<=ei:Kt>=ei)&&(es=Ai,As=Ke)}else es=Ai,As=Ke}}if(Ie||Kn){let mi,Ai;D.ori==0?(mi=Qn,Ai=Bn):(mi=Bn,Ai=Qn);let Bi,ei,gi,Ti,zi,zn,ti=!0,Js=Vt.bbox;if(Js!=null){ti=!1;let Vn=Js(n,Ke);gi=Vn.left,Ti=Vn.top,Bi=Vn.width,ei=Vn.height}else gi=mi,Ti=Ai,Bi=ei=Vt.size(n,Ke);if(zn=Vt.fill(n,Ke),zi=Vt.stroke(n,Ke),Kn)Ke==As&&es<=vn.prox&&(Ge=gi,Xe=Ti,ct=Bi,Mt=ei,bt=ti,mt=zn,nt=zi);else{let Vn=Bt[Ke];Vn!=null&&(Ln[Ke]=gi,wi[Ke]=Ti,wg(Vn,Bi,ei,ti),Sg(Vn,zn,zi),Vi(Vn,yi(gi),yi(Ti),$,ie))}}}}if(Kn){let Ke=vn.prox,Wt=Ys==null?es<=Ke:es>Ke||As!=Ys;if(Ie||Wt){let jt=Bt[0];jt!=null&&(Ln[0]=Ge,wi[0]=Xe,wg(jt,ct,Mt,bt),Sg(jt,mt,nt),Vi(jt,yi(Ge),yi(Xe),$,ie))}}}if(Gt.show&&ws)if(b!=null){let[Ee,Le]=an.scales,[ze,Ge]=an.match,[Xe,ct]=b.cursor.sync.scales,Mt=b.cursor.drag;if(xn=Mt._x,_n=Mt._y,xn||_n){let{left:bt,top:mt,width:nt,height:Ke}=b.select,Wt=b.scales[Xe].ori,jt=b.posToVal,Sn,Ut,Kt,Qn,Bn,mi=Ee!=null&&ze(Ee,Xe),Ai=Le!=null&&Ge(Le,ct);mi&&xn?(Wt==0?(Sn=bt,Ut=nt):(Sn=mt,Ut=Ke),Kt=_[Ee],Qn=C(jt(Sn,Xe),Kt,J,0),Bn=C(jt(Sn+Ut,Xe),Kt,J,0),to(Pi(Qn,Bn),fn(Bn-Qn))):to(0,J),Ai&&_n?(Wt==1?(Sn=bt,Ut=nt):(Sn=mt,Ut=Ke),Kt=_[Le],Qn=V(jt(Sn,ct),Kt,de,0),Bn=V(jt(Sn+Ut,ct),Kt,de,0),no(Pi(Qn,Bn),fn(Bn-Qn))):no(0,de)}else Dd()}else{let Ee=fn(Zm-$m),Le=fn(Jm-Ym);if(D.ori==1){let ct=Ee;Ee=Le,Le=ct}xn=Rn.x&&Ee>=Rn.dist,_n=Rn.y&&Le>=Rn.dist;let ze=Rn.uni;ze!=null?xn&&_n&&(xn=Ee>=ze,_n=Le>=ze,!xn&&!_n&&(Le>Ee?_n=!0:xn=!0)):Rn.x&&Rn.y&&(xn||_n)&&(xn=_n=!0);let Ge,Xe;xn&&(D.ori==0?(Ge=$r,Xe=Ht):(Ge=Yr,Xe=Yt),to(Pi(Ge,Xe),fn(Xe-Ge)),_n||no(0,de)),_n&&(D.ori==1?(Ge=$r,Xe=Ht):(Ge=Yr,Xe=Yt),no(Pi(Ge,Xe),fn(Xe-Ge)),xn||to(0,J)),!xn&&!_n&&(to(0,0),no(0,0))}if(Rn._x=xn,Rn._y=_n,b==null){if(I){if(cg!=null){let[Ee,Le]=an.scales;an.values[0]=Ee!=null?ki(D.ori==0?Ht:Yt,Ee):null,an.values[1]=Le!=null?ki(D.ori==1?Ht:Yt,Le):null}so(kd,n,Ht,Yt,$,ie,F)}if(yn){let Ee=I&&an.setSeries,Le=vn.prox;Ys==null?es<=Le&&Oi(As,Jr,!0,Ee):es>Le?Oi(null,Jr,!0,Ee):As!=Ys&&Oi(As,Jr,!0,Ee)}}Ie&&(Re.idx=F,Id()),E!==!1&&bn("setCursor")}let Ts=null;Object.defineProperty(n,"rect",{get(){return Ts==null&&io(!1),Ts}});function io(b=!1){b?Ts=null:(Ts=m.getBoundingClientRect(),bn("syncRect",Ts))}function Qm(b,E,I,F,z,J,de){be._lock||ws&&b!=null&&b.movementX==0&&b.movementY==0||(Ld(b,E,I,F,z,J,de,!1,b!=null),b!=null?Zs(null,!0,!0):Zs(E,!0,!1))}function Ld(b,E,I,F,z,J,de,Ee,Le){if(Ts==null&&io(!1),Pt(b),b!=null)I=b.clientX-Ts.left,F=b.clientY-Ts.top;else{if(I<0||F<0){Ht=-10,Yt=-10;return}let[ze,Ge]=an.scales,Xe=E.cursor.sync,[ct,Mt]=Xe.values,[bt,mt]=Xe.scales,[nt,Ke]=an.match,Wt=E.axes[0].side%2==1,jt=D.ori==0?$:ie,Sn=D.ori==1?$:ie,Ut=Wt?J:z,Kt=Wt?z:J,Qn=Wt?F:I,Bn=Wt?I:F;if(bt!=null?I=nt(ze,bt)?o(ct,_[ze],jt,0):-10:I=jt*(Qn/Ut),mt!=null?F=Ke(Ge,mt)?o(Mt,_[Ge],Sn,0):-10:F=Sn*(Bn/Kt),D.ori==1){let mi=I;I=F,F=mi}}Le&&(E==null||E.cursor.event.type==kd)&&((I<=1||I>=$-1)&&(I=js(I,$)),(F<=1||F>=ie-1)&&(F=js(F,ie))),Ee?($m=I,Ym=F,[$r,Yr]=be.move(n,I,F)):(Ht=I,Yt=F)}let Nd={width:0,height:0,left:0,top:0};function Dd(){Nl(Nd,!1)}let eg,tg,ng,ig;function sg(b,E,I,F,z,J,de){ws=!0,xn=_n=Rn._x=Rn._y=!1,Ld(b,E,I,F,z,J,de,!0,!1),b!=null&&(A(Bd,Wd,rg,!1),so(mg,n,$r,Yr,$,ie,null));let{left:Ee,top:Le,width:ze,height:Ge}=Gt;eg=Ee,tg=Le,ng=ze,ig=Ge}function rg(b,E,I,F,z,J,de){ws=Rn._x=Rn._y=!1,Ld(b,E,I,F,z,J,de,!1,!0);let{left:Ee,top:Le,width:ze,height:Ge}=Gt,Xe=ze>0||Ge>0,ct=eg!=Ee||tg!=Le||ng!=ze||ig!=Ge;if(Xe&&ct&&Nl(Gt),Rn.setScale&&Xe&&ct){let Mt=Ee,bt=ze,mt=Le,nt=Ge;if(D.ori==1&&(Mt=Le,bt=Ge,mt=Ee,nt=ze),xn&&Es(M,ki(Mt,M),ki(Mt+bt,M)),_n)for(let Ke in _){let Wt=_[Ke];Ke!=M&&Wt.from==null&&Wt.min!=Ot&&Es(Ke,ki(mt+nt,Ke),ki(mt,Ke))}Dd()}else be.lock&&(be._lock=!be._lock,Zs(E,!0,b!=null));b!=null&&(k(Bd,Wd),so(Bd,n,Ht,Yt,$,ie,null))}function G_(b,E,I,F,z,J,de){if(be._lock)return;Pt(b);let Ee=ws;if(ws){let Le=!0,ze=!0,Ge=10,Xe,ct;D.ori==0?(Xe=xn,ct=_n):(Xe=_n,ct=xn),Xe&&ct&&(Le=Ht<=Ge||Ht>=$-Ge,ze=Yt<=Ge||Yt>=ie-Ge),Xe&&Le&&(Ht=Ht<$r?0:$),ct&&ze&&(Yt=Yt<Yr?0:ie),Zs(null,!0,!0),ws=!1}Ht=-10,Yt=-10,Se.fill(null),Zs(null,!0,!0),Ee&&(ws=Ee)}function ag(b,E,I,F,z,J,de){be._lock||(Pt(b),Ft(),Dd(),b!=null&&so(yg,n,Ht,Yt,$,ie,null))}function og(){y.forEach(zS),Ne(n.width,n.height,!0)}er(Bl,ea,og);let jr={};jr.mousedown=sg,jr.mousemove=Qm,jr.mouseup=rg,jr.dblclick=ag,jr.setSeries=(b,E,I,F)=>{let z=an.match[2];I=z(n,E,I),I!=-1&&Oi(I,F,!0,!1)},ue&&(A(mg,m,sg),A(kd,m,Qm),A(gg,m,b=>{Pt(b),io(!1)}),A(vg,m,G_),A(yg,m,ag),Kd.add(n),n.syncRect=io);let Dl=n.hooks=i.hooks||{};function bn(b,E,I){Td?eo.push([b,E,I]):b in Dl&&Dl[b].forEach(F=>{F.call(null,n,E,I)})}(i.plugins||[]).forEach(b=>{for(let E in b.hooks)Dl[E]=(Dl[E]||[]).concat(b.hooks[E])});let lg=(b,E,I)=>I,an=on({key:null,setSeries:!1,filters:{pub:Cg,sub:Cg},scales:[M,x[1]?x[1].scale:null],match:[Pg,Pg,lg],values:[null,null]},be.sync);an.match.length==2&&an.match.push(lg),be.sync=an;let cg=an.key,Ud=Av(cg);function so(b,E,I,F,z,J,de){an.filters.pub(b,E,I,F,z,J,de)&&Ud.pub(b,E,I,F,z,J,de)}Ud.sub(n);function W_(b,E,I,F,z,J,de){an.filters.sub(b,E,I,F,z,J,de)&&jr[b](null,E,I,F,z,J,de)}n.pub=W_;function q_(){Ud.unsub(n),Kd.delete(n),N.clear(),$d(Bl,ea,og),c.remove(),ce?.remove(),bn("destroy")}n.destroy=q_;function Fd(){bn("init",i,e),st(e||i.data,!1),q[M]?Rd(M,q[M]):Ft(),le=Gt.show&&(Gt.width>0||Gt.height>0),ge=Ie=!0,Ne(i.width,i.height)}return x.forEach(he),y.forEach(W),t?t instanceof HTMLElement?(t.appendChild(c),Fd()):t(n,Fd):Fd(),n}Mn.assign=on;Mn.fmtNum=rh;Mn.rangeNum=zl;Mn.rangeLog=Gl;Mn.rangeAsinh=ih;Mn.orient=nr;Mn.pxRatio=wt;Mn.join=Ib;Mn.fmtDate=oh,Mn.tzDate=Hb;Mn.sync=Av;{Mn.addGap=wS,Mn.clipGaps=Xl;let i=Mn.paths={points:Lv};i.linear=Dv,i.stepped=TS,i.bars=RS,i.spline=PS}var fm={};dg(fm,{ACESFilmicToneMapping:()=>Zy,AddEquation:()=>ks,AddOperation:()=>qy,AdditiveAnimationBlendMode:()=>rm,AdditiveBlending:()=>Qh,AgXToneMapping:()=>jy,AlphaFormat:()=>ix,AlwaysCompare:()=>bx,AlwaysDepth:()=>ky,AlwaysStencilFunc:()=>Pf,AmbientLight:()=>Ju,AnimationAction:()=>ad,AnimationClip:()=>Dr,AnimationLoader:()=>ap,AnimationMixer:()=>Mp,AnimationObjectGroup:()=>Sp,AnimationUtils:()=>fR,ArcCurve:()=>pu,ArrayCamera:()=>eu,ArrowHelper:()=>qp,AttachedBindMode:()=>nf,Audio:()=>sd,AudioAnalyser:()=>_p,AudioContext:()=>xl,AudioListener:()=>yp,AudioLoader:()=>gp,AxesHelper:()=>Xp,BackSide:()=>Xn,BasicDepthPacking:()=>hx,BasicShadowMap:()=>qS,BatchedMesh:()=>cu,Bone:()=>el,BooleanKeyframeTrack:()=>_s,Box2:()=>Lp,Box3:()=>Cn,Box3Helper:()=>Gp,BoxGeometry:()=>Er,BoxHelper:()=>Hp,BufferAttribute:()=>Et,BufferGeometry:()=>pt,BufferGeometryLoader:()=>nd,ByteType:()=>ex,Cache:()=>fs,Camera:()=>Va,CameraHelper:()=>Vp,CanvasTexture:()=>tp,CapsuleGeometry:()=>_u,CatmullRomCurve3:()=>mu,CineonToneMapping:()=>Yy,CircleGeometry:()=>bu,ClampToEdgeWrapping:()=>bi,Clock:()=>id,Color:()=>We,ColorKeyframeTrack:()=>ml,ColorManagement:()=>Lt,CompressedArrayTexture:()=>Qf,CompressedCubeTexture:()=>ep,CompressedTexture:()=>qa,CompressedTextureLoader:()=>op,ConeGeometry:()=>Su,ConstantAlphaFactor:()=>Uy,ConstantColorFactor:()=>Ny,CubeCamera:()=>Kc,CubeReflectionMapping:()=>ys,CubeRefractionMapping:()=>zs,CubeTexture:()=>Ar,CubeTextureLoader:()=>lp,CubeUVReflectionMapping:()=>Ya,CubicBezierCurve:()=>nl,CubicBezierCurve3:()=>gu,CubicInterpolant:()=>Gu,CullFaceBack:()=>Kh,CullFaceFront:()=>vy,CullFaceFrontBack:()=>WS,CullFaceNone:()=>gy,Curve:()=>hi,CurvePath:()=>xu,CustomBlending:()=>xy,CustomToneMapping:()=>Jy,CylinderGeometry:()=>$a,Cylindrical:()=>Ip,Data3DTexture:()=>Xo,DataArrayTexture:()=>ka,DataTexture:()=>$i,DataTextureLoader:()=>cp,DataUtils:()=>KM,DecrementStencilOp:()=>nM,DecrementWrapStencilOp:()=>sM,DefaultLoadingManager:()=>Vx,DepthFormat:()=>Sr,DepthStencilFormat:()=>Fa,DepthTexture:()=>Jo,DetachedBindMode:()=>Qy,DirectionalLight:()=>Zu,DirectionalLightHelper:()=>zp,DiscreteInterpolant:()=>Wu,DisplayP3ColorSpace:()=>cd,DodecahedronGeometry:()=>Mu,DoubleSide:()=>Wi,DstAlphaFactor:()=>Ry,DstColorFactor:()=>Py,DynamicCopyUsage:()=>xM,DynamicDrawUsage:()=>fM,DynamicReadUsage:()=>gM,EdgesGeometry:()=>wu,EllipseCurve:()=>Xa,EqualCompare:()=>vx,EqualDepth:()=>zy,EqualStencilFunc:()=>lM,EquirectangularReflectionMapping:()=>No,EquirectangularRefractionMapping:()=>Do,Euler:()=>ui,EventDispatcher:()=>Ui,ExtrudeGeometry:()=>Eu,FileLoader:()=>Fi,Float16BufferAttribute:()=>Bf,Float32BufferAttribute:()=>Ye,FloatType:()=>Si,Fog:()=>nu,FogExp2:()=>tu,FramebufferTexture:()=>Kf,FrontSide:()=>vs,Frustum:()=>Tr,GLBufferAttribute:()=>Tp,GLSL1:()=>bM,GLSL3:()=>If,GreaterCompare:()=>yx,GreaterDepth:()=>Hy,GreaterEqualCompare:()=>_x,GreaterEqualDepth:()=>Vy,GreaterEqualStencilFunc:()=>hM,GreaterStencilFunc:()=>uM,GridHelper:()=>kp,Group:()=>Bs,HalfFloatType:()=>bl,HemisphereLight:()=>Xu,HemisphereLightHelper:()=>Op,IcosahedronGeometry:()=>Au,ImageBitmapLoader:()=>mp,ImageLoader:()=>Ur,ImageUtils:()=>Jc,IncrementStencilOp:()=>tM,IncrementWrapStencilOp:()=>iM,InstancedBufferAttribute:()=>Hs,InstancedBufferGeometry:()=>td,InstancedInterleavedBuffer:()=>Ap,InstancedMesh:()=>lu,Int16BufferAttribute:()=>Of,Int32BufferAttribute:()=>kf,Int8BufferAttribute:()=>Df,IntType:()=>Kp,InterleavedBuffer:()=>Wa,InterleavedBufferAttribute:()=>Rr,Interpolant:()=>Ir,InterpolateDiscrete:()=>Oo,InterpolateLinear:()=>ko,InterpolateSmooth:()=>$c,InvertStencilOp:()=>rM,KeepStencilOp:()=>mr,KeyframeTrack:()=>fi,LOD:()=>ru,LatheGeometry:()=>ol,Layers:()=>Ba,LessCompare:()=>gx,LessDepth:()=>By,LessEqualCompare:()=>am,LessEqualDepth:()=>Lo,LessEqualStencilFunc:()=>cM,LessStencilFunc:()=>oM,Light:()=>ji,LightProbe:()=>Qu,Line:()=>Ji,Line3:()=>Np,LineBasicMaterial:()=>Pn,LineCurve:()=>il,LineCurve3:()=>vu,LineDashedMaterial:()=>Hu,LineLoop:()=>hu,LineSegments:()=>Mi,LinearDisplayP3ColorSpace:()=>Sl,LinearFilter:()=>cn,LinearInterpolant:()=>pl,LinearMipMapLinearFilter:()=>ZS,LinearMipMapNearestFilter:()=>YS,LinearMipmapLinearFilter:()=>qi,LinearMipmapNearestFilter:()=>To,LinearSRGBColorSpace:()=>Ss,LinearToneMapping:()=>Xy,LinearTransfer:()=>zo,Loader:()=>On,LoaderUtils:()=>yl,LoadingManager:()=>gl,LoopOnce:()=>cx,LoopPingPong:()=>dx,LoopRepeat:()=>ux,LuminanceAlphaFormat:()=>ax,LuminanceFormat:()=>rx,MOUSE:()=>HS,Material:()=>Tn,MaterialLoader:()=>ed,MathUtils:()=>kM,Matrix3:()=>dt,Matrix4:()=>it,MaxEquation:()=>My,Mesh:()=>tn,MeshBasicMaterial:()=>Zi,MeshDepthMaterial:()=>jo,MeshDistanceMaterial:()=>Ko,MeshLambertMaterial:()=>zu,MeshMatcapMaterial:()=>Vu,MeshNormalMaterial:()=>Bu,MeshPhongMaterial:()=>Ou,MeshPhysicalMaterial:()=>Fu,MeshStandardMaterial:()=>fl,MeshToonMaterial:()=>ku,MinEquation:()=>Sy,MirroredRepeatWrapping:()=>Fo,MixOperation:()=>Wy,MultiplyBlending:()=>tf,MultiplyOperation:()=>_l,NearestFilter:()=>En,NearestMipMapLinearFilter:()=>$S,NearestMipMapNearestFilter:()=>XS,NearestMipmapLinearFilter:()=>Pa,NearestMipmapNearestFilter:()=>Jp,NeutralToneMapping:()=>Ky,NeverCompare:()=>mx,NeverDepth:()=>Oy,NeverStencilFunc:()=>aM,NoBlending:()=>ps,NoColorSpace:()=>cs,NoToneMapping:()=>ms,NormalAnimationBlendMode:()=>ld,NormalBlending:()=>br,NotEqualCompare:()=>xx,NotEqualDepth:()=>Gy,NotEqualStencilFunc:()=>dM,NumberKeyframeTrack:()=>Lr,Object3D:()=>Rt,ObjectLoader:()=>pp,ObjectSpaceNormalMap:()=>px,OctahedronGeometry:()=>dl,OneFactor:()=>Ey,OneMinusConstantAlphaFactor:()=>Fy,OneMinusConstantColorFactor:()=>Dy,OneMinusDstAlphaFactor:()=>Cy,OneMinusDstColorFactor:()=>Iy,OneMinusSrcAlphaFactor:()=>Zc,OneMinusSrcColorFactor:()=>Ty,OrthographicCamera:()=>Ga,P3Primaries:()=>Ho,PCFShadowMap:()=>Zp,PCFSoftShadowMap:()=>yy,PMREMGenerator:()=>Zo,Path:()=>Cr,PerspectiveCamera:()=>pn,Plane:()=>Gi,PlaneGeometry:()=>Ha,PlaneHelper:()=>Wp,PointLight:()=>Yu,PointLightHelper:()=>Fp,Points:()=>fu,PointsMaterial:()=>tl,PolarGridHelper:()=>Bp,PolyhedronGeometry:()=>Gs,PositionalAudio:()=>xp,PropertyBinding:()=>It,PropertyMixer:()=>rd,QuadraticBezierCurve:()=>sl,QuadraticBezierCurve3:()=>rl,Quaternion:()=>Fn,QuaternionKeyframeTrack:()=>Ws,QuaternionLinearInterpolant:()=>qu,RED_GREEN_RGTC2_Format:()=>Rf,RED_RGTC1_Format:()=>lx,REVISION:()=>VS,RGBADepthPacking:()=>fx,RGBAFormat:()=>oi,RGBAIntegerFormat:()=>sm,RGBA_ASTC_10x10_Format:()=>Sf,RGBA_ASTC_10x5_Format:()=>xf,RGBA_ASTC_10x6_Format:()=>_f,RGBA_ASTC_10x8_Format:()=>bf,RGBA_ASTC_12x10_Format:()=>Mf,RGBA_ASTC_12x12_Format:()=>wf,RGBA_ASTC_4x4_Format:()=>df,RGBA_ASTC_5x4_Format:()=>hf,RGBA_ASTC_5x5_Format:()=>ff,RGBA_ASTC_6x5_Format:()=>pf,RGBA_ASTC_6x6_Format:()=>mf,RGBA_ASTC_8x5_Format:()=>gf,RGBA_ASTC_8x6_Format:()=>vf,RGBA_ASTC_8x8_Format:()=>yf,RGBA_BPTC_Format:()=>Xc,RGBA_ETC2_EAC_Format:()=>uf,RGBA_PVRTC_2BPPV1_Format:()=>of,RGBA_PVRTC_4BPPV1_Format:()=>af,RGBA_S3TC_DXT1_Format:()=>Gc,RGBA_S3TC_DXT3_Format:()=>Wc,RGBA_S3TC_DXT5_Format:()=>qc,RGBFormat:()=>sx,RGB_BPTC_SIGNED_Format:()=>Ef,RGB_BPTC_UNSIGNED_Format:()=>Af,RGB_ETC1_Format:()=>lf,RGB_ETC2_Format:()=>cf,RGB_PVRTC_2BPPV1_Format:()=>rf,RGB_PVRTC_4BPPV1_Format:()=>sf,RGB_S3TC_DXT1_Format:()=>Hc,RGFormat:()=>ox,RGIntegerFormat:()=>im,RawShaderMaterial:()=>Uu,Ray:()=>Vs,Raycaster:()=>Rp,Rec709Primaries:()=>Vo,RectAreaLight:()=>ju,RedFormat:()=>tm,RedIntegerFormat:()=>nm,ReinhardToneMapping:()=>$y,RenderTarget:()=>jc,RepeatWrapping:()=>Uo,ReplaceStencilOp:()=>eM,ReverseSubtractEquation:()=>by,RingGeometry:()=>Tu,SIGNED_RED_GREEN_RGTC2_Format:()=>Cf,SIGNED_RED_RGTC1_Format:()=>Tf,SRGBColorSpace:()=>_i,SRGBTransfer:()=>zt,Scene:()=>iu,ShaderChunk:()=>ft,ShaderLib:()=>Di,ShaderMaterial:()=>di,ShadowMaterial:()=>Du,Shape:()=>gs,ShapeGeometry:()=>Ru,ShapePath:()=>$p,ShapeUtils:()=>Yi,ShortType:()=>tx,Skeleton:()=>ou,SkeletonHelper:()=>Up,SkinnedMesh:()=>au,Source:()=>ds,Sphere:()=>An,SphereGeometry:()=>hl,Spherical:()=>Pp,SphericalHarmonics3:()=>Ku,SplineCurve:()=>al,SpotLight:()=>$u,SpotLightHelper:()=>Dp,Sprite:()=>su,SpriteMaterial:()=>Qo,SrcAlphaFactor:()=>Yc,SrcAlphaSaturateFactor:()=>Ly,SrcColorFactor:()=>Ay,StaticCopyUsage:()=>yM,StaticDrawUsage:()=>Go,StaticReadUsage:()=>mM,StereoCamera:()=>vp,StreamCopyUsage:()=>_M,StreamDrawUsage:()=>pM,StreamReadUsage:()=>vM,StringKeyframeTrack:()=>bs,SubtractEquation:()=>_y,SubtractiveBlending:()=>ef,TOUCH:()=>GS,TangentSpaceNormalMap:()=>qs,TetrahedronGeometry:()=>Cu,Texture:()=>un,TextureLoader:()=>up,TorusGeometry:()=>Pu,TorusKnotGeometry:()=>Iu,Triangle:()=>hs,TriangleFanDrawMode:()=>KS,TriangleStripDrawMode:()=>jS,TrianglesDrawMode:()=>JS,TubeGeometry:()=>Lu,UVMapping:()=>od,Uint16BufferAttribute:()=>$o,Uint32BufferAttribute:()=>Yo,Uint8BufferAttribute:()=>Uf,Uint8ClampedBufferAttribute:()=>Ff,Uniform:()=>wp,UniformsGroup:()=>Ep,UniformsLib:()=>Fe,UniformsUtils:()=>Tx,UnsignedByteType:()=>xs,UnsignedInt248Type:()=>Za,UnsignedInt5999Type:()=>nx,UnsignedIntType:()=>wr,UnsignedShort4444Type:()=>Qp,UnsignedShort5551Type:()=>em,UnsignedShortType:()=>jp,VSMShadowMap:()=>Hi,Vector2:()=>ve,Vector3:()=>U,Vector4:()=>Nt,VectorKeyframeTrack:()=>Nr,VideoTexture:()=>jf,WebGL3DRenderTarget:()=>Nf,WebGLArrayRenderTarget:()=>Lf,WebGLCoordinateSystem:()=>Xi,WebGLCubeRenderTarget:()=>Qc,WebGLMultipleRenderTargets:()=>Yp,WebGLRenderTarget:()=>ci,WebGLRenderer:()=>Yf,WebGLUtils:()=>Dx,WebGPUCoordinateSystem:()=>Wo,WireframeGeometry:()=>Nu,WrapAroundEnding:()=>Bo,ZeroCurvatureEnding:()=>yr,ZeroFactor:()=>wy,ZeroSlopeEnding:()=>xr,ZeroStencilOp:()=>QS,createCanvasElement:()=>Mx});var VS="164",HS={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},GS={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},gy=0,Kh=1,vy=2,WS=3,qS=0,Zp=1,yy=2,Hi=3,vs=0,Xn=1,Wi=2,ps=0,br=1,Qh=2,ef=3,tf=4,xy=5,ks=100,_y=101,by=102,Sy=103,My=104,wy=200,Ey=201,Ay=202,Ty=203,Yc=204,Zc=205,Ry=206,Cy=207,Py=208,Iy=209,Ly=210,Ny=211,Dy=212,Uy=213,Fy=214,Oy=0,ky=1,By=2,Lo=3,zy=4,Vy=5,Hy=6,Gy=7,_l=0,Wy=1,qy=2,ms=0,Xy=1,$y=2,Yy=3,Zy=4,Jy=5,jy=6,Ky=7,nf="attached",Qy="detached",od=300,ys=301,zs=302,No=303,Do=304,Ya=306,Uo=1e3,bi=1001,Fo=1002,En=1003,Jp=1004,XS=1004,Pa=1005,$S=1005,cn=1006,To=1007,YS=1007,qi=1008,ZS=1008,xs=1009,ex=1010,tx=1011,jp=1012,Kp=1013,wr=1014,Si=1015,bl=1016,Qp=1017,em=1018,Za=1020,nx=35902,ix=1021,sx=1022,oi=1023,rx=1024,ax=1025,Sr=1026,Fa=1027,tm=1028,nm=1029,ox=1030,im=1031,sm=1033,Hc=33776,Gc=33777,Wc=33778,qc=33779,sf=35840,rf=35841,af=35842,of=35843,lf=36196,cf=37492,uf=37496,df=37808,hf=37809,ff=37810,pf=37811,mf=37812,gf=37813,vf=37814,yf=37815,xf=37816,_f=37817,bf=37818,Sf=37819,Mf=37820,wf=37821,Xc=36492,Ef=36494,Af=36495,lx=36283,Tf=36284,Rf=36285,Cf=36286,cx=2200,ux=2201,dx=2202,Oo=2300,ko=2301,$c=2302,yr=2400,xr=2401,Bo=2402,ld=2500,rm=2501,JS=0,jS=1,KS=2,hx=3200,fx=3201,qs=0,px=1,cs="",_i="srgb",Ss="srgb-linear",cd="display-p3",Sl="display-p3-linear",zo="linear",zt="srgb",Vo="rec709",Ho="p3",QS=0,mr=7680,eM=7681,tM=7682,nM=7683,iM=34055,sM=34056,rM=5386,aM=512,oM=513,lM=514,cM=515,uM=516,dM=517,hM=518,Pf=519,mx=512,gx=513,vx=514,am=515,yx=516,xx=517,_x=518,bx=519,Go=35044,fM=35048,pM=35040,mM=35045,gM=35049,vM=35041,yM=35046,xM=35050,_M=35042,bM="100",If="300 es",Xi=2e3,Wo=2001,Ui=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],kv=1234567,Mr=Math.PI/180,Oa=180/Math.PI;function li(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Nn[i&255]+Nn[i>>8&255]+Nn[i>>16&255]+Nn[i>>24&255]+"-"+Nn[e&255]+Nn[e>>8&255]+"-"+Nn[e>>16&15|64]+Nn[e>>24&255]+"-"+Nn[t&63|128]+Nn[t>>8&255]+"-"+Nn[t>>16&255]+Nn[t>>24&255]+Nn[n&255]+Nn[n>>8&255]+Nn[n>>16&255]+Nn[n>>24&255]).toLowerCase()}function en(i,e,t){return Math.max(e,Math.min(t,i))}function om(i,e){return(i%e+e)%e}function SM(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function MM(i,e,t){return i!==e?(t-i)/(e-i):0}function Ro(i,e,t){return(1-t)*i+t*e}function wM(i,e,t,n){return Ro(i,e,1-Math.exp(-t*n))}function EM(i,e=1){return e-Math.abs(om(i,e*2)-e)}function AM(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function TM(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function RM(i,e){return i+Math.floor(Math.random()*(e-i+1))}function CM(i,e){return i+Math.random()*(e-i)}function PM(i){return i*(.5-Math.random())}function IM(i){i!==void 0&&(kv=i);let e=kv+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function LM(i){return i*Mr}function NM(i){return i*Oa}function DM(i){return(i&i-1)===0&&i!==0}function UM(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function FM(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function OM(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),u=a((e+n)/2),d=r((e-n)/2),h=a((e-n)/2),f=r((n-e)/2),m=a((n-e)/2);switch(s){case"XYX":i.set(o*u,l*d,l*h,o*c);break;case"YZY":i.set(l*h,o*u,l*d,o*c);break;case"ZXZ":i.set(l*d,l*h,o*u,o*c);break;case"XZX":i.set(o*u,l*m,l*f,o*c);break;case"YXY":i.set(l*f,o*u,l*m,o*c);break;case"ZYZ":i.set(l*m,l*f,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function qn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ht(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var kM={DEG2RAD:Mr,RAD2DEG:Oa,generateUUID:li,clamp:en,euclideanModulo:om,mapLinear:SM,inverseLerp:MM,lerp:Ro,damp:wM,pingpong:EM,smoothstep:AM,smootherstep:TM,randInt:RM,randFloat:CM,randFloatSpread:PM,seededRandom:IM,degToRad:LM,radToDeg:NM,isPowerOfTwo:DM,ceilPowerOfTwo:UM,floorPowerOfTwo:FM,setQuaternionFromProperEuler:OM,normalize:ht,denormalize:qn},ve=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(en(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},dt=class i{constructor(e,t,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],f=n[5],m=n[8],v=s[0],g=s[3],p=s[6],x=s[1],y=s[4],_=s[7],L=s[2],M=s[5],R=s[8];return r[0]=a*v+o*x+l*L,r[3]=a*g+o*y+l*M,r[6]=a*p+o*_+l*R,r[1]=c*v+u*x+d*L,r[4]=c*g+u*y+d*M,r[7]=c*p+u*_+d*R,r[2]=h*v+f*x+m*L,r[5]=h*g+f*y+m*M,r[8]=h*p+f*_+m*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,h=o*l-u*r,f=c*r-a*l,m=t*d+n*h+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/m;return e[0]=d*v,e[1]=(s*c-u*n)*v,e[2]=(o*n-s*a)*v,e[3]=h*v,e[4]=(u*t-s*l)*v,e[5]=(s*r-o*t)*v,e[6]=f*v,e[7]=(n*l-c*t)*v,e[8]=(a*t-n*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ph.makeScale(e,t)),this}rotate(e){return this.premultiply(ph.makeRotation(-e)),this}translate(e,t){return this.premultiply(ph.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},ph=new dt;function Sx(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}var BM={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function Ia(i,e){return new BM[i](e)}function qo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Mx(){let i=qo("canvas");return i.style.display="block",i}var Bv={};function wx(i){i in Bv||(Bv[i]=!0,console.warn(i))}var zv=new dt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Vv=new dt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Jl={[Ss]:{transfer:zo,primaries:Vo,toReference:i=>i,fromReference:i=>i},[_i]:{transfer:zt,primaries:Vo,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Sl]:{transfer:zo,primaries:Ho,toReference:i=>i.applyMatrix3(Vv),fromReference:i=>i.applyMatrix3(zv)},[cd]:{transfer:zt,primaries:Ho,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Vv),fromReference:i=>i.applyMatrix3(zv).convertLinearToSRGB()}},zM=new Set([Ss,Sl]),Lt={enabled:!0,_workingColorSpace:Ss,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!zM.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;let n=Jl[e].toReference,s=Jl[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Jl[i].primaries},getTransfer:function(i){return i===cs?zo:Jl[i].transfer}};function Da(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function mh(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var la,Jc=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{la===void 0&&(la=qo("canvas")),la.width=e.width,la.height=e.height;let n=la.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=la}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=qo("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Da(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Da(t[n]/255)*255):t[n]=Da(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},VM=0,ds=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:VM++}),this.uuid=li(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(gh(s[a].image)):r.push(gh(s[a]))}else r=gh(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function gh(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Jc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var HM=0,un=class i extends Ui{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=bi,s=bi,r=cn,a=qi,o=oi,l=xs,c=i.DEFAULT_ANISOTROPY,u=cs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:HM++}),this.uuid=li(),this.name="",this.source=new ds(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ve(0,0),this.repeat=new ve(1,1),this.center=new ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==od)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Uo:e.x=e.x-Math.floor(e.x);break;case bi:e.x=e.x<0?0:1;break;case Fo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Uo:e.y=e.y-Math.floor(e.y);break;case bi:e.y=e.y<0?0:1;break;case Fo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};un.DEFAULT_IMAGE=null;un.DEFAULT_MAPPING=od;un.DEFAULT_ANISOTROPY=1;var Nt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],f=l[5],m=l[9],v=l[2],g=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-v)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+v)<.1&&Math.abs(m+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(c+1)/2,_=(f+1)/2,L=(p+1)/2,M=(u+h)/4,R=(d+v)/4,P=(m+g)/4;return y>_&&y>L?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=M/n,r=R/n):_>L?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=M/s,r=P/s):L<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),n=R/r,s=P/r),this.set(n,s,r,t),this}let x=Math.sqrt((g-m)*(g-m)+(d-v)*(d-v)+(h-u)*(h-u));return Math.abs(x)<.001&&(x=1),this.x=(g-m)/x,this.y=(d-v)/x,this.z=(h-u)/x,this.w=Math.acos((c+f+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},jc=class extends Ui{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Nt(0,0,e,t),this.scissorTest=!1,this.viewport=new Nt(0,0,e,t);let s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:cn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new un(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new ds(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ci=class extends jc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},ka=class extends un{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=En,this.minFilter=En,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Lf=class extends ci{constructor(e=1,t=1,n=1,s={}){super(e,t,s),this.isWebGLArrayRenderTarget=!0,this.depth=n,this.texture=new ka(null,e,t,n),this.texture.isRenderTargetTexture=!0}},Xo=class extends un{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=En,this.minFilter=En,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Nf=class extends ci{constructor(e=1,t=1,n=1,s={}){super(e,t,s),this.isWebGL3DRenderTarget=!0,this.depth=n,this.texture=new Xo(null,e,t,n),this.texture.isRenderTargetTexture=!0}},Fn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],d=n[s+3],h=r[a+0],f=r[a+1],m=r[a+2],v=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(o===1){e[t+0]=h,e[t+1]=f,e[t+2]=m,e[t+3]=v;return}if(d!==v||l!==h||c!==f||u!==m){let g=1-o,p=l*h+c*f+u*m+d*v,x=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){let L=Math.sqrt(y),M=Math.atan2(L,p*x);g=Math.sin(g*M)/L,o=Math.sin(o*M)/L}let _=o*x;if(l=l*g+h*_,c=c*g+f*_,u=u*g+m*_,d=d*g+v*_,g===1-o){let L=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=L,c*=L,u*=L,d*=L}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],d=r[a],h=r[a+1],f=r[a+2],m=r[a+3];return e[t]=o*m+u*d+l*f-c*h,e[t+1]=l*m+u*h+c*d-o*f,e[t+2]=c*m+u*f+o*h-l*d,e[t+3]=u*m-o*d-l*h-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),d=o(r/2),h=l(n/2),f=l(s/2),m=l(r/2);switch(a){case"XYZ":this._x=h*u*d+c*f*m,this._y=c*f*d-h*u*m,this._z=c*u*m+h*f*d,this._w=c*u*d-h*f*m;break;case"YXZ":this._x=h*u*d+c*f*m,this._y=c*f*d-h*u*m,this._z=c*u*m-h*f*d,this._w=c*u*d+h*f*m;break;case"ZXY":this._x=h*u*d-c*f*m,this._y=c*f*d+h*u*m,this._z=c*u*m+h*f*d,this._w=c*u*d-h*f*m;break;case"ZYX":this._x=h*u*d-c*f*m,this._y=c*f*d+h*u*m,this._z=c*u*m-h*f*d,this._w=c*u*d+h*f*m;break;case"YZX":this._x=h*u*d+c*f*m,this._y=c*f*d+h*u*m,this._z=c*u*m-h*f*d,this._w=c*u*d-h*f*m;break;case"XZY":this._x=h*u*d-c*f*m,this._y=c*f*d-h*u*m,this._z=c*u*m+h*f*d,this._w=c*u*d+h*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=n+o+d;if(h>0){let f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>d){let f=2*Math.sqrt(1+n-o-d);this._w=(u-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>d){let f=2*Math.sqrt(1+o-n-d);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+d-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(en(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,o),d=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=a*d+this._w*h,this._x=n*d+this._x*h,this._y=s*d+this._y*h,this._z=r*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Hv.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Hv.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),u=2*(o*t-r*s),d=2*(r*n-a*t);return this.x=t+l*c+a*d-o*u,this.y=n+l*u+o*c-r*d,this.z=s+l*d+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return vh.copy(this).projectOnVector(e),this.sub(vh)}reflect(e){return this.sub(vh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(en(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},vh=new U,Hv=new Fn,Cn=class{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ii.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ii.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Ii.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Ii):Ii.fromBufferAttribute(r,a),Ii.applyMatrix4(e.matrixWorld),this.expandByPoint(Ii);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),jl.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),jl.copy(n.boundingBox)),jl.applyMatrix4(e.matrixWorld),this.union(jl)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Ii),Ii.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(fo),Kl.subVectors(this.max,fo),ca.subVectors(e.a,fo),ua.subVectors(e.b,fo),da.subVectors(e.c,fo),Ps.subVectors(ua,ca),Is.subVectors(da,ua),ir.subVectors(ca,da);let t=[0,-Ps.z,Ps.y,0,-Is.z,Is.y,0,-ir.z,ir.y,Ps.z,0,-Ps.x,Is.z,0,-Is.x,ir.z,0,-ir.x,-Ps.y,Ps.x,0,-Is.y,Is.x,0,-ir.y,ir.x,0];return!yh(t,ca,ua,da,Kl)||(t=[1,0,0,0,1,0,0,0,1],!yh(t,ca,ua,da,Kl))?!1:(Ql.crossVectors(Ps,Is),t=[Ql.x,Ql.y,Ql.z],yh(t,ca,ua,da,Kl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ii).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ii).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(is[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),is[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),is[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),is[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),is[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),is[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),is[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),is[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(is),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},is=[new U,new U,new U,new U,new U,new U,new U,new U],Ii=new U,jl=new Cn,ca=new U,ua=new U,da=new U,Ps=new U,Is=new U,ir=new U,fo=new U,Kl=new U,Ql=new U,sr=new U;function yh(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){sr.fromArray(i,r);let o=s.x*Math.abs(sr.x)+s.y*Math.abs(sr.y)+s.z*Math.abs(sr.z),l=e.dot(sr),c=t.dot(sr),u=n.dot(sr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var GM=new Cn,po=new U,xh=new U,An=class{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):GM.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;po.subVectors(e,this.center);let t=po.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(po,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(po.copy(e.center).add(xh)),this.expandByPoint(po.copy(e.center).sub(xh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},ss=new U,_h=new U,ec=new U,Ls=new U,bh=new U,tc=new U,Sh=new U,Vs=class{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ss)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ss.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ss.copy(this.origin).addScaledVector(this.direction,t),ss.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){_h.copy(e).add(t).multiplyScalar(.5),ec.copy(t).sub(e).normalize(),Ls.copy(this.origin).sub(_h);let r=e.distanceTo(t)*.5,a=-this.direction.dot(ec),o=Ls.dot(this.direction),l=-Ls.dot(ec),c=Ls.lengthSq(),u=Math.abs(1-a*a),d,h,f,m;if(u>0)if(d=a*l-o,h=a*o-l,m=r*u,d>=0)if(h>=-m)if(h<=m){let v=1/u;d*=v,h*=v,f=d*(d+a*h+2*o)+h*(a*d+h+2*l)+c}else h=r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;else h=-r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;else h<=-m?(d=Math.max(0,-(-a*r+o)),h=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c):h<=m?(d=0,h=Math.min(Math.max(-r,-l),r),f=h*(h+2*l)+c):(d=Math.max(0,-(a*r+o)),h=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c);else h=a>0?-r:r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(_h).addScaledVector(ec,h),f}intersectSphere(e,t){ss.subVectors(e.center,this.origin);let n=ss.dot(this.direction),s=ss.dot(ss)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(o=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,ss)!==null}intersectTriangle(e,t,n,s,r){bh.subVectors(t,e),tc.subVectors(n,e),Sh.crossVectors(bh,tc);let a=this.direction.dot(Sh),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ls.subVectors(this.origin,e);let l=o*this.direction.dot(tc.crossVectors(Ls,tc));if(l<0)return null;let c=o*this.direction.dot(bh.cross(Ls));if(c<0||l+c>a)return null;let u=-o*Ls.dot(Sh);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},it=class i{constructor(e,t,n,s,r,a,o,l,c,u,d,h,f,m,v,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,u,d,h,f,m,v,g)}set(e,t,n,s,r,a,o,l,c,u,d,h,f,m,v,g){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=d,p[14]=h,p[3]=f,p[7]=m,p[11]=v,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/ha.setFromMatrixColumn(e,0).length(),r=1/ha.setFromMatrixColumn(e,1).length(),a=1/ha.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let h=a*u,f=a*d,m=o*u,v=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=f+m*c,t[5]=h-v*c,t[9]=-o*l,t[2]=v-h*c,t[6]=m+f*c,t[10]=a*l}else if(e.order==="YXZ"){let h=l*u,f=l*d,m=c*u,v=c*d;t[0]=h+v*o,t[4]=m*o-f,t[8]=a*c,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=f*o-m,t[6]=v+h*o,t[10]=a*l}else if(e.order==="ZXY"){let h=l*u,f=l*d,m=c*u,v=c*d;t[0]=h-v*o,t[4]=-a*d,t[8]=m+f*o,t[1]=f+m*o,t[5]=a*u,t[9]=v-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let h=a*u,f=a*d,m=o*u,v=o*d;t[0]=l*u,t[4]=m*c-f,t[8]=h*c+v,t[1]=l*d,t[5]=v*c+h,t[9]=f*c-m,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let h=a*l,f=a*c,m=o*l,v=o*c;t[0]=l*u,t[4]=v-h*d,t[8]=m*d+f,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=f*d+m,t[10]=h-v*d}else if(e.order==="XZY"){let h=a*l,f=a*c,m=o*l,v=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+v,t[5]=a*u,t[9]=f*d-m,t[2]=m*d-f,t[6]=o*u,t[10]=v*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(WM,e,qM)}lookAt(e,t,n){let s=this.elements;return ri.subVectors(e,t),ri.lengthSq()===0&&(ri.z=1),ri.normalize(),Ns.crossVectors(n,ri),Ns.lengthSq()===0&&(Math.abs(n.z)===1?ri.x+=1e-4:ri.z+=1e-4,ri.normalize(),Ns.crossVectors(n,ri)),Ns.normalize(),nc.crossVectors(ri,Ns),s[0]=Ns.x,s[4]=nc.x,s[8]=ri.x,s[1]=Ns.y,s[5]=nc.y,s[9]=ri.y,s[2]=Ns.z,s[6]=nc.z,s[10]=ri.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],f=n[13],m=n[2],v=n[6],g=n[10],p=n[14],x=n[3],y=n[7],_=n[11],L=n[15],M=s[0],R=s[4],P=s[8],w=s[12],S=s[1],D=s[5],B=s[9],C=s[13],V=s[2],q=s[6],ne=s[10],ee=s[14],K=s[3],re=s[7],oe=s[11],Se=s[15];return r[0]=a*M+o*S+l*V+c*K,r[4]=a*R+o*D+l*q+c*re,r[8]=a*P+o*B+l*ne+c*oe,r[12]=a*w+o*C+l*ee+c*Se,r[1]=u*M+d*S+h*V+f*K,r[5]=u*R+d*D+h*q+f*re,r[9]=u*P+d*B+h*ne+f*oe,r[13]=u*w+d*C+h*ee+f*Se,r[2]=m*M+v*S+g*V+p*K,r[6]=m*R+v*D+g*q+p*re,r[10]=m*P+v*B+g*ne+p*oe,r[14]=m*w+v*C+g*ee+p*Se,r[3]=x*M+y*S+_*V+L*K,r[7]=x*R+y*D+_*q+L*re,r[11]=x*P+y*B+_*ne+L*oe,r[15]=x*w+y*C+_*ee+L*Se,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],f=e[14],m=e[3],v=e[7],g=e[11],p=e[15];return m*(+r*l*d-s*c*d-r*o*h+n*c*h+s*o*f-n*l*f)+v*(+t*l*f-t*c*h+r*a*h-s*a*f+s*c*u-r*l*u)+g*(+t*c*d-t*o*f-r*a*d+n*a*f+r*o*u-n*c*u)+p*(-s*o*u-t*l*d+t*o*h+s*a*d-n*a*h+n*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],f=e[11],m=e[12],v=e[13],g=e[14],p=e[15],x=d*g*c-v*h*c+v*l*f-o*g*f-d*l*p+o*h*p,y=m*h*c-u*g*c-m*l*f+a*g*f+u*l*p-a*h*p,_=u*v*c-m*d*c+m*o*f-a*v*f-u*o*p+a*d*p,L=m*d*l-u*v*l-m*o*h+a*v*h+u*o*g-a*d*g,M=t*x+n*y+s*_+r*L;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/M;return e[0]=x*R,e[1]=(v*h*r-d*g*r-v*s*f+n*g*f+d*s*p-n*h*p)*R,e[2]=(o*g*r-v*l*r+v*s*c-n*g*c-o*s*p+n*l*p)*R,e[3]=(d*l*r-o*h*r-d*s*c+n*h*c+o*s*f-n*l*f)*R,e[4]=y*R,e[5]=(u*g*r-m*h*r+m*s*f-t*g*f-u*s*p+t*h*p)*R,e[6]=(m*l*r-a*g*r-m*s*c+t*g*c+a*s*p-t*l*p)*R,e[7]=(a*h*r-u*l*r+u*s*c-t*h*c-a*s*f+t*l*f)*R,e[8]=_*R,e[9]=(m*d*r-u*v*r-m*n*f+t*v*f+u*n*p-t*d*p)*R,e[10]=(a*v*r-m*o*r+m*n*c-t*v*c-a*n*p+t*o*p)*R,e[11]=(u*o*r-a*d*r-u*n*c+t*d*c+a*n*f-t*o*f)*R,e[12]=L*R,e[13]=(u*v*s-m*d*s+m*n*h-t*v*h-u*n*g+t*d*g)*R,e[14]=(m*o*s-a*v*s-m*n*l+t*v*l+a*n*g-t*o*g)*R,e[15]=(a*d*s-u*o*s+u*n*l-t*d*l-a*n*h+t*o*h)*R,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,d=o+o,h=r*c,f=r*u,m=r*d,v=a*u,g=a*d,p=o*d,x=l*c,y=l*u,_=l*d,L=n.x,M=n.y,R=n.z;return s[0]=(1-(v+p))*L,s[1]=(f+_)*L,s[2]=(m-y)*L,s[3]=0,s[4]=(f-_)*M,s[5]=(1-(h+p))*M,s[6]=(g+x)*M,s[7]=0,s[8]=(m+y)*R,s[9]=(g-x)*R,s[10]=(1-(h+v))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=ha.set(s[0],s[1],s[2]).length(),a=ha.set(s[4],s[5],s[6]).length(),o=ha.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Li.copy(this);let c=1/r,u=1/a,d=1/o;return Li.elements[0]*=c,Li.elements[1]*=c,Li.elements[2]*=c,Li.elements[4]*=u,Li.elements[5]*=u,Li.elements[6]*=u,Li.elements[8]*=d,Li.elements[9]*=d,Li.elements[10]*=d,t.setFromRotationMatrix(Li),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=Xi){let l=this.elements,c=2*r/(t-e),u=2*r/(n-s),d=(t+e)/(t-e),h=(n+s)/(n-s),f,m;if(o===Xi)f=-(a+r)/(a-r),m=-2*a*r/(a-r);else if(o===Wo)f=-a/(a-r),m=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Xi){let l=this.elements,c=1/(t-e),u=1/(n-s),d=1/(a-r),h=(t+e)*c,f=(n+s)*u,m,v;if(o===Xi)m=(a+r)*d,v=-2*d;else if(o===Wo)m=r*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=v,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},ha=new U,Li=new it,WM=new U(0,0,0),qM=new U(1,1,1),Ns=new U,nc=new U,ri=new U,Gv=new it,Wv=new Fn,ui=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],d=s[2],h=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(en(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-en(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(en(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-en(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(en(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-en(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Gv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Gv,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Wv.setFromEuler(this),this.setFromQuaternion(Wv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ui.DEFAULT_ORDER="XYZ";var Ba=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},XM=0,qv=new U,fa=new Fn,rs=new it,ic=new U,mo=new U,$M=new U,YM=new Fn,Xv=new U(1,0,0),$v=new U(0,1,0),Yv=new U(0,0,1),Zv={type:"added"},ZM={type:"removed"},pa={type:"childadded",child:null},Mh={type:"childremoved",child:null},Rt=class i extends Ui{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:XM++}),this.uuid=li(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new U,t=new ui,n=new Fn,s=new U(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new it},normalMatrix:{value:new dt}}),this.matrix=new it,this.matrixWorld=new it,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ba,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return fa.setFromAxisAngle(e,t),this.quaternion.multiply(fa),this}rotateOnWorldAxis(e,t){return fa.setFromAxisAngle(e,t),this.quaternion.premultiply(fa),this}rotateX(e){return this.rotateOnAxis(Xv,e)}rotateY(e){return this.rotateOnAxis($v,e)}rotateZ(e){return this.rotateOnAxis(Yv,e)}translateOnAxis(e,t){return qv.copy(e).applyQuaternion(this.quaternion),this.position.add(qv.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Xv,e)}translateY(e){return this.translateOnAxis($v,e)}translateZ(e){return this.translateOnAxis(Yv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(rs.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ic.copy(e):ic.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),mo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?rs.lookAt(mo,ic,this.up):rs.lookAt(ic,mo,this.up),this.quaternion.setFromRotationMatrix(rs),s&&(rs.extractRotation(s.matrixWorld),fa.setFromRotationMatrix(rs),this.quaternion.premultiply(fa.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Zv),pa.child=e,this.dispatchEvent(pa),pa.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ZM),Mh.child=e,this.dispatchEvent(Mh),Mh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),rs.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),rs.multiply(e.parent.matrixWorld)),e.applyMatrix4(rs),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Zv),pa.child=e,this.dispatchEvent(pa),pa.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mo,e,$M),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mo,YM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++){let o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),h=a(e.skeletons),f=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=s,n;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Rt.DEFAULT_UP=new U(0,1,0);Rt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ni=new U,as=new U,wh=new U,os=new U,ma=new U,ga=new U,Jv=new U,Eh=new U,Ah=new U,Th=new U,hs=class i{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Ni.subVectors(e,t),s.cross(Ni);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Ni.subVectors(s,t),as.subVectors(n,t),wh.subVectors(e,t);let a=Ni.dot(Ni),o=Ni.dot(as),l=Ni.dot(wh),c=as.dot(as),u=as.dot(wh),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let h=1/d,f=(c*l-o*u)*h,m=(a*u-o*l)*h;return r.set(1-f-m,m,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,os)===null?!1:os.x>=0&&os.y>=0&&os.x+os.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,os)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,os.x),l.addScaledVector(a,os.y),l.addScaledVector(o,os.z),l)}static isFrontFacing(e,t,n,s){return Ni.subVectors(n,t),as.subVectors(e,t),Ni.cross(as).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ni.subVectors(this.c,this.b),as.subVectors(this.a,this.b),Ni.cross(as).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;ma.subVectors(s,n),ga.subVectors(r,n),Eh.subVectors(e,n);let l=ma.dot(Eh),c=ga.dot(Eh);if(l<=0&&c<=0)return t.copy(n);Ah.subVectors(e,s);let u=ma.dot(Ah),d=ga.dot(Ah);if(u>=0&&d<=u)return t.copy(s);let h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(ma,a);Th.subVectors(e,r);let f=ma.dot(Th),m=ga.dot(Th);if(m>=0&&f<=m)return t.copy(r);let v=f*c-l*m;if(v<=0&&c>=0&&m<=0)return o=c/(c-m),t.copy(n).addScaledVector(ga,o);let g=u*m-f*d;if(g<=0&&d-u>=0&&f-m>=0)return Jv.subVectors(r,s),o=(d-u)/(d-u+(f-m)),t.copy(s).addScaledVector(Jv,o);let p=1/(g+v+h);return a=v*p,o=h*p,t.copy(n).addScaledVector(ma,a).addScaledVector(ga,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Ex={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ds={h:0,s:0,l:0},sc={h:0,s:0,l:0};function Rh(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var We=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=_i){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Lt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Lt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Lt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Lt.workingColorSpace){if(e=om(e,1),t=en(t,0,1),n=en(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Rh(a,r,e+1/3),this.g=Rh(a,r,e),this.b=Rh(a,r,e-1/3)}return Lt.toWorkingColorSpace(this,s),this}setStyle(e,t=_i){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=_i){let n=Ex[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Da(e.r),this.g=Da(e.g),this.b=Da(e.b),this}copyLinearToSRGB(e){return this.r=mh(e.r),this.g=mh(e.g),this.b=mh(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=_i){return Lt.fromWorkingColorSpace(Dn.copy(this),e),Math.round(en(Dn.r*255,0,255))*65536+Math.round(en(Dn.g*255,0,255))*256+Math.round(en(Dn.b*255,0,255))}getHexString(e=_i){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Lt.workingColorSpace){Lt.fromWorkingColorSpace(Dn.copy(this),t);let n=Dn.r,s=Dn.g,r=Dn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Lt.workingColorSpace){return Lt.fromWorkingColorSpace(Dn.copy(this),t),e.r=Dn.r,e.g=Dn.g,e.b=Dn.b,e}getStyle(e=_i){Lt.fromWorkingColorSpace(Dn.copy(this),e);let t=Dn.r,n=Dn.g,s=Dn.b;return e!==_i?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Ds),this.setHSL(Ds.h+e,Ds.s+t,Ds.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ds),e.getHSL(sc);let n=Ro(Ds.h,sc.h,t),s=Ro(Ds.s,sc.s,t),r=Ro(Ds.l,sc.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Dn=new We;We.NAMES=Ex;var JM=0,Tn=class extends Ui{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:JM++}),this.uuid=li(),this.name="",this.type="Material",this.blending=br,this.side=vs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Yc,this.blendDst=Zc,this.blendEquation=ks,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new We(0,0,0),this.blendAlpha=0,this.depthFunc=Lo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=mr,this.stencilZFail=mr,this.stencilZPass=mr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==br&&(n.blending=this.blending),this.side!==vs&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Yc&&(n.blendSrc=this.blendSrc),this.blendDst!==Zc&&(n.blendDst=this.blendDst),this.blendEquation!==ks&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Lo&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Pf&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==mr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==mr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==mr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Zi=class extends Tn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ui,this.combine=_l,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},us=jM();function jM(){let i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(n[l]=0,n[l|256]=32768,s[l]=24,s[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,s[l]=-c-1,s[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,s[l]=13,s[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,s[l]=24,s[l|256]=24):(n[l]=31744,n[l|256]=64512,s[l]=13,s[l|256]=13)}let r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;(c&8388608)===0;)c<<=1,u-=8388608;c&=-8388609,u+=947912704,r[l]=c|u}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:s,mantissaTable:r,exponentTable:a,offsetTable:o}}function Zn(i){Math.abs(i)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),i=en(i,-65504,65504),us.floatView[0]=i;let e=us.uint32View[0],t=e>>23&511;return us.baseTable[t]+((e&8388607)>>us.shiftTable[t])}function Eo(i){let e=i>>10;return us.uint32View[0]=us.mantissaTable[us.offsetTable[e]+(i&1023)]+us.exponentTable[e],us.floatView[0]}var KM={toHalfFloat:Zn,fromHalfFloat:Eo},ln=new U,rc=new ve,Et=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Go,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Si,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return wx("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)rc.fromBufferAttribute(this,t),rc.applyMatrix3(e),this.setXY(t,rc.x,rc.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.applyMatrix3(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.applyMatrix4(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.applyNormalMatrix(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.transformDirection(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=qn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ht(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=qn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=qn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=qn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=qn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),s=ht(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),s=ht(s,this.array),r=ht(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Go&&(e.usage=this.usage),e}},Df=class extends Et{constructor(e,t,n){super(new Int8Array(e),t,n)}},Uf=class extends Et{constructor(e,t,n){super(new Uint8Array(e),t,n)}},Ff=class extends Et{constructor(e,t,n){super(new Uint8ClampedArray(e),t,n)}},Of=class extends Et{constructor(e,t,n){super(new Int16Array(e),t,n)}},$o=class extends Et{constructor(e,t,n){super(new Uint16Array(e),t,n)}},kf=class extends Et{constructor(e,t,n){super(new Int32Array(e),t,n)}},Yo=class extends Et{constructor(e,t,n){super(new Uint32Array(e),t,n)}},Bf=class extends Et{constructor(e,t,n){super(new Uint16Array(e),t,n),this.isFloat16BufferAttribute=!0}getX(e){let t=Eo(this.array[e*this.itemSize]);return this.normalized&&(t=qn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize]=Zn(t),this}getY(e){let t=Eo(this.array[e*this.itemSize+1]);return this.normalized&&(t=qn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+1]=Zn(t),this}getZ(e){let t=Eo(this.array[e*this.itemSize+2]);return this.normalized&&(t=qn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+2]=Zn(t),this}getW(e){let t=Eo(this.array[e*this.itemSize+3]);return this.normalized&&(t=qn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+3]=Zn(t),this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array)),this.array[e+0]=Zn(t),this.array[e+1]=Zn(n),this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),s=ht(s,this.array)),this.array[e+0]=Zn(t),this.array[e+1]=Zn(n),this.array[e+2]=Zn(s),this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),s=ht(s,this.array),r=ht(r,this.array)),this.array[e+0]=Zn(t),this.array[e+1]=Zn(n),this.array[e+2]=Zn(s),this.array[e+3]=Zn(r),this}},Ye=class extends Et{constructor(e,t,n){super(new Float32Array(e),t,n)}},QM=0,xi=new it,Ch=new Rt,va=new U,ai=new Cn,go=new Cn,wn=new U,pt=class i extends Ui{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:QM++}),this.uuid=li(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Sx(e)?Yo:$o)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new dt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return xi.makeRotationFromQuaternion(e),this.applyMatrix4(xi),this}rotateX(e){return xi.makeRotationX(e),this.applyMatrix4(xi),this}rotateY(e){return xi.makeRotationY(e),this.applyMatrix4(xi),this}rotateZ(e){return xi.makeRotationZ(e),this.applyMatrix4(xi),this}translate(e,t,n){return xi.makeTranslation(e,t,n),this.applyMatrix4(xi),this}scale(e,t,n){return xi.makeScale(e,t,n),this.applyMatrix4(xi),this}lookAt(e){return Ch.lookAt(e),Ch.updateMatrix(),this.applyMatrix4(Ch.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(va).negate(),this.translate(va.x,va.y,va.z),this}setFromPoints(e){let t=[];for(let n=0,s=e.length;n<s;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Ye(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Cn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];ai.setFromBufferAttribute(r),this.morphTargetsRelative?(wn.addVectors(this.boundingBox.min,ai.min),this.boundingBox.expandByPoint(wn),wn.addVectors(this.boundingBox.max,ai.max),this.boundingBox.expandByPoint(wn)):(this.boundingBox.expandByPoint(ai.min),this.boundingBox.expandByPoint(ai.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new An);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){let n=this.boundingSphere.center;if(ai.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];go.setFromBufferAttribute(o),this.morphTargetsRelative?(wn.addVectors(ai.min,go.min),ai.expandByPoint(wn),wn.addVectors(ai.max,go.max),ai.expandByPoint(wn)):(ai.expandByPoint(go.min),ai.expandByPoint(go.max))}ai.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)wn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(wn));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)wn.fromBufferAttribute(o,c),l&&(va.fromBufferAttribute(e,c),wn.add(va)),s=Math.max(s,n.distanceToSquared(wn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Et(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let P=0;P<n.count;P++)o[P]=new U,l[P]=new U;let c=new U,u=new U,d=new U,h=new ve,f=new ve,m=new ve,v=new U,g=new U;function p(P,w,S){c.fromBufferAttribute(n,P),u.fromBufferAttribute(n,w),d.fromBufferAttribute(n,S),h.fromBufferAttribute(r,P),f.fromBufferAttribute(r,w),m.fromBufferAttribute(r,S),u.sub(c),d.sub(c),f.sub(h),m.sub(h);let D=1/(f.x*m.y-m.x*f.y);isFinite(D)&&(v.copy(u).multiplyScalar(m.y).addScaledVector(d,-f.y).multiplyScalar(D),g.copy(d).multiplyScalar(f.x).addScaledVector(u,-m.x).multiplyScalar(D),o[P].add(v),o[w].add(v),o[S].add(v),l[P].add(g),l[w].add(g),l[S].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let P=0,w=x.length;P<w;++P){let S=x[P],D=S.start,B=S.count;for(let C=D,V=D+B;C<V;C+=3)p(e.getX(C+0),e.getX(C+1),e.getX(C+2))}let y=new U,_=new U,L=new U,M=new U;function R(P){L.fromBufferAttribute(s,P),M.copy(L);let w=o[P];y.copy(w),y.sub(L.multiplyScalar(L.dot(w))).normalize(),_.crossVectors(M,w);let D=_.dot(l[P])<0?-1:1;a.setXYZW(P,y.x,y.y,y.z,D)}for(let P=0,w=x.length;P<w;++P){let S=x[P],D=S.start,B=S.count;for(let C=D,V=D+B;C<V;C+=3)R(e.getX(C+0)),R(e.getX(C+1)),R(e.getX(C+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Et(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);let s=new U,r=new U,a=new U,o=new U,l=new U,c=new U,u=new U,d=new U;if(e)for(let h=0,f=e.count;h<f;h+=3){let m=e.getX(h+0),v=e.getX(h+1),g=e.getX(h+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,g),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,g),o.add(u),l.add(u),c.add(u),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let h=0,f=t.count;h<f;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)wn.fromBufferAttribute(e,t),wn.normalize(),e.setXYZ(t,wn.x,wn.y,wn.z)}toNonIndexed(){function e(o,l){let c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u),f=0,m=0;for(let v=0,g=l.length;v<g;v++){o.isInterleavedBufferAttribute?f=l[v]*o.data.stride+o.offset:f=l[v]*u;for(let p=0;p<u;p++)h[m++]=c[f++]}return new Et(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,d=c.length;u<d;u++){let h=c[u],f=e(h,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){let f=c[d];u.push(f.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],d=r[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,u=a.length;c<u;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},jv=new it,rr=new Vs,ac=new An,Kv=new U,ya=new U,xa=new U,_a=new U,Ph=new U,oc=new U,lc=new ve,cc=new ve,uc=new ve,Qv=new U,e0=new U,t0=new U,dc=new U,hc=new U,tn=class extends Rt{constructor(e=new pt,t=new Zi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){oc.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],d=r[l];u!==0&&(Ph.fromBufferAttribute(d,e),a?oc.addScaledVector(Ph,u):oc.addScaledVector(Ph.sub(t),u))}t.add(oc)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ac.copy(n.boundingSphere),ac.applyMatrix4(r),rr.copy(e.ray).recast(e.near),!(ac.containsPoint(rr.origin)===!1&&(rr.intersectSphere(ac,Kv)===null||rr.origin.distanceToSquared(Kv)>(e.far-e.near)**2))&&(jv.copy(r).invert(),rr.copy(e.ray).applyMatrix4(jv),!(n.boundingBox!==null&&rr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,rr)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,v=h.length;m<v;m++){let g=h[m],p=a[g.materialIndex],x=Math.max(g.start,f.start),y=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let _=x,L=y;_<L;_+=3){let M=o.getX(_),R=o.getX(_+1),P=o.getX(_+2);s=fc(this,p,e,n,c,u,d,M,R,P),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let m=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let g=m,p=v;g<p;g+=3){let x=o.getX(g),y=o.getX(g+1),_=o.getX(g+2);s=fc(this,a,e,n,c,u,d,x,y,_),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,v=h.length;m<v;m++){let g=h[m],p=a[g.materialIndex],x=Math.max(g.start,f.start),y=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let _=x,L=y;_<L;_+=3){let M=_,R=_+1,P=_+2;s=fc(this,p,e,n,c,u,d,M,R,P),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let m=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let g=m,p=v;g<p;g+=3){let x=g,y=g+1,_=g+2;s=fc(this,a,e,n,c,u,d,x,y,_),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function ew(i,e,t,n,s,r,a,o){let l;if(e.side===Xn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===vs,o),l===null)return null;hc.copy(o),hc.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(hc);return c<t.near||c>t.far?null:{distance:c,point:hc.clone(),object:i}}function fc(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,ya),i.getVertexPosition(l,xa),i.getVertexPosition(c,_a);let u=ew(i,e,t,n,ya,xa,_a,dc);if(u){s&&(lc.fromBufferAttribute(s,o),cc.fromBufferAttribute(s,l),uc.fromBufferAttribute(s,c),u.uv=hs.getInterpolation(dc,ya,xa,_a,lc,cc,uc,new ve)),r&&(lc.fromBufferAttribute(r,o),cc.fromBufferAttribute(r,l),uc.fromBufferAttribute(r,c),u.uv1=hs.getInterpolation(dc,ya,xa,_a,lc,cc,uc,new ve)),a&&(Qv.fromBufferAttribute(a,o),e0.fromBufferAttribute(a,l),t0.fromBufferAttribute(a,c),u.normal=hs.getInterpolation(dc,ya,xa,_a,Qv,e0,t0,new U),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new U,materialIndex:0};hs.getNormal(ya,xa,_a,d.normal),u.face=d}return u}var Er=class i extends pt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],d=[],h=0,f=0;m("z","y","x",-1,-1,n,t,e,a,r,0),m("z","y","x",1,-1,n,t,-e,a,r,1),m("x","z","y",1,1,e,n,t,s,a,2),m("x","z","y",1,-1,e,n,-t,s,a,3),m("x","y","z",1,-1,e,t,n,s,r,4),m("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Ye(c,3)),this.setAttribute("normal",new Ye(u,3)),this.setAttribute("uv",new Ye(d,2));function m(v,g,p,x,y,_,L,M,R,P,w){let S=_/R,D=L/P,B=_/2,C=L/2,V=M/2,q=R+1,ne=P+1,ee=0,K=0,re=new U;for(let oe=0;oe<ne;oe++){let Se=oe*D-C;for(let Re=0;Re<q;Re++){let be=Re*S-B;re[v]=be*x,re[g]=Se*y,re[p]=V,c.push(re.x,re.y,re.z),re[v]=0,re[g]=0,re[p]=M>0?1:-1,u.push(re.x,re.y,re.z),d.push(Re/R),d.push(1-oe/P),ee+=1}}for(let oe=0;oe<P;oe++)for(let Se=0;Se<R;Se++){let Re=h+Se+q*oe,be=h+Se+q*(oe+1),te=h+(Se+1)+q*(oe+1),ue=h+(Se+1)+q*oe;l.push(Re,be,ue),l.push(be,te,ue),K+=6}o.addGroup(f,K,w),f+=K,h+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function za(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Wn(i){let e={};for(let t=0;t<i.length;t++){let n=za(i[t]);for(let s in n)e[s]=n[s]}return e}function tw(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Ax(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Lt.workingColorSpace}var Tx={clone:za,merge:Wn},nw=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,iw=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,di=class extends Tn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=nw,this.fragmentShader=iw,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=za(e.uniforms),this.uniformsGroups=tw(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Va=class extends Rt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new it,this.projectionMatrix=new it,this.projectionMatrixInverse=new it,this.coordinateSystem=Xi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Us=new U,n0=new ve,i0=new ve,pn=class extends Va{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Oa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Mr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Oa*2*Math.atan(Math.tan(Mr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Us.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Us.x,Us.y).multiplyScalar(-e/Us.z),Us.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Us.x,Us.y).multiplyScalar(-e/Us.z)}getViewSize(e,t){return this.getViewBounds(e,n0,i0),t.subVectors(i0,n0)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Mr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ba=-90,Sa=1,Kc=class extends Rt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new pn(ba,Sa,e,t);s.layers=this.layers,this.add(s);let r=new pn(ba,Sa,e,t);r.layers=this.layers,this.add(r);let a=new pn(ba,Sa,e,t);a.layers=this.layers,this.add(a);let o=new pn(ba,Sa,e,t);o.layers=this.layers,this.add(o);let l=new pn(ba,Sa,e,t);l.layers=this.layers,this.add(l);let c=new pn(ba,Sa,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Xi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Wo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(d,h,f),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Ar=class extends un{constructor(e,t,n,s,r,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:ys,super(e,t,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Qc=class extends ci{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Ar(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:cn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Er(5,5,5),r=new di({name:"CubemapFromEquirect",uniforms:za(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Xn,blending:ps});r.uniforms.tEquirect.value=t;let a=new tn(s,r),o=t.minFilter;return t.minFilter===qi&&(t.minFilter=cn),new Kc(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},Ih=new U,sw=new U,rw=new dt,Gi=class{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Ih.subVectors(n,t).cross(sw.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Ih),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||rw.getNormalMatrix(e),s=this.coplanarPoint(Ih).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ar=new An,pc=new U,Tr=class{constructor(e=new Gi,t=new Gi,n=new Gi,s=new Gi,r=new Gi,a=new Gi){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Xi){let n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],u=s[5],d=s[6],h=s[7],f=s[8],m=s[9],v=s[10],g=s[11],p=s[12],x=s[13],y=s[14],_=s[15];if(n[0].setComponents(l-r,h-c,g-f,_-p).normalize(),n[1].setComponents(l+r,h+c,g+f,_+p).normalize(),n[2].setComponents(l+a,h+u,g+m,_+x).normalize(),n[3].setComponents(l-a,h-u,g-m,_-x).normalize(),n[4].setComponents(l-o,h-d,g-v,_-y).normalize(),t===Xi)n[5].setComponents(l+o,h+d,g+v,_+y).normalize();else if(t===Wo)n[5].setComponents(o,d,v,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ar.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ar.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ar)}intersectsSprite(e){return ar.center.set(0,0,0),ar.radius=.7071067811865476,ar.applyMatrix4(e.matrixWorld),this.intersectsSphere(ar)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(pc.x=s.normal.x>0?e.max.x:e.min.x,pc.y=s.normal.y>0?e.max.y:e.min.y,pc.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(pc)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Rx(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function aw(i){let e=new WeakMap;function t(o,l){let c=o.array,u=o.usage,d=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){let u=l.array,d=l._updateRange,h=l.updateRanges;if(i.bindBuffer(c,o),d.count===-1&&h.length===0&&i.bufferSubData(c,0,u),h.length!==0){for(let f=0,m=h.length;f<m;f++){let v=h[f];i.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}d.count!==-1&&(i.bufferSubData(c,d.offset*u.BYTES_PER_ELEMENT,u,d.offset,d.count),d.count=-1),l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Ha=class i extends pt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,d=e/o,h=t/l,f=[],m=[],v=[],g=[];for(let p=0;p<u;p++){let x=p*h-a;for(let y=0;y<c;y++){let _=y*d-r;m.push(_,-x,0),v.push(0,0,1),g.push(y/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<o;x++){let y=x+c*p,_=x+c*(p+1),L=x+1+c*(p+1),M=x+1+c*p;f.push(y,_,M),f.push(_,L,M)}this.setIndex(f),this.setAttribute("position",new Ye(m,3)),this.setAttribute("normal",new Ye(v,3)),this.setAttribute("uv",new Ye(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},ow=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,lw=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,cw=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,uw=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dw=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,hw=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,fw=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,pw=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,mw=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,gw=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,vw=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,yw=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xw=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,_w=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bw=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Sw=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Mw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ww=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ew=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Aw=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Tw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Rw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Cw=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Pw=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Iw=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Lw=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Nw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Dw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Uw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Fw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ow="gl_FragColor = linearToOutputTexel( gl_FragColor );",kw=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Bw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,zw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Vw=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Hw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Gw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ww=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Xw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$w=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Yw=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Zw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Jw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jw=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Kw=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Qw=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,eE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,nE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,iE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,rE=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,aE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,oE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,uE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,fE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,pE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,gE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,yE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_E=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,bE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,SE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,ME=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,wE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,EE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,AE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,TE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,RE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,CE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,PE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,IE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,LE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,NE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,DE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,UE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,FE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,OE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,kE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,BE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,zE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,VE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,HE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,GE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,WE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,qE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,XE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$E=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,YE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ZE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,JE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,KE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,QE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,eA=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,tA=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,nA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,iA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,sA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,rA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,aA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,oA=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cA=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,fA=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,pA=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,mA=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,gA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yA=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,xA=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_A=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,bA=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,SA=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,MA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wA=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,EA=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,AA=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,TA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,RA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,CA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,PA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,IA=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,LA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,NA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,DA=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,UA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,FA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,OA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,kA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,BA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ft={alphahash_fragment:ow,alphahash_pars_fragment:lw,alphamap_fragment:cw,alphamap_pars_fragment:uw,alphatest_fragment:dw,alphatest_pars_fragment:hw,aomap_fragment:fw,aomap_pars_fragment:pw,batching_pars_vertex:mw,batching_vertex:gw,begin_vertex:vw,beginnormal_vertex:yw,bsdfs:xw,iridescence_fragment:_w,bumpmap_pars_fragment:bw,clipping_planes_fragment:Sw,clipping_planes_pars_fragment:Mw,clipping_planes_pars_vertex:ww,clipping_planes_vertex:Ew,color_fragment:Aw,color_pars_fragment:Tw,color_pars_vertex:Rw,color_vertex:Cw,common:Pw,cube_uv_reflection_fragment:Iw,defaultnormal_vertex:Lw,displacementmap_pars_vertex:Nw,displacementmap_vertex:Dw,emissivemap_fragment:Uw,emissivemap_pars_fragment:Fw,colorspace_fragment:Ow,colorspace_pars_fragment:kw,envmap_fragment:Bw,envmap_common_pars_fragment:zw,envmap_pars_fragment:Vw,envmap_pars_vertex:Hw,envmap_physical_pars_fragment:Qw,envmap_vertex:Gw,fog_vertex:Ww,fog_pars_vertex:qw,fog_fragment:Xw,fog_pars_fragment:$w,gradientmap_pars_fragment:Yw,lightmap_pars_fragment:Zw,lights_lambert_fragment:Jw,lights_lambert_pars_fragment:jw,lights_pars_begin:Kw,lights_toon_fragment:eE,lights_toon_pars_fragment:tE,lights_phong_fragment:nE,lights_phong_pars_fragment:iE,lights_physical_fragment:sE,lights_physical_pars_fragment:rE,lights_fragment_begin:aE,lights_fragment_maps:oE,lights_fragment_end:lE,logdepthbuf_fragment:cE,logdepthbuf_pars_fragment:uE,logdepthbuf_pars_vertex:dE,logdepthbuf_vertex:hE,map_fragment:fE,map_pars_fragment:pE,map_particle_fragment:mE,map_particle_pars_fragment:gE,metalnessmap_fragment:vE,metalnessmap_pars_fragment:yE,morphinstance_vertex:xE,morphcolor_vertex:_E,morphnormal_vertex:bE,morphtarget_pars_vertex:SE,morphtarget_vertex:ME,normal_fragment_begin:wE,normal_fragment_maps:EE,normal_pars_fragment:AE,normal_pars_vertex:TE,normal_vertex:RE,normalmap_pars_fragment:CE,clearcoat_normal_fragment_begin:PE,clearcoat_normal_fragment_maps:IE,clearcoat_pars_fragment:LE,iridescence_pars_fragment:NE,opaque_fragment:DE,packing:UE,premultiplied_alpha_fragment:FE,project_vertex:OE,dithering_fragment:kE,dithering_pars_fragment:BE,roughnessmap_fragment:zE,roughnessmap_pars_fragment:VE,shadowmap_pars_fragment:HE,shadowmap_pars_vertex:GE,shadowmap_vertex:WE,shadowmask_pars_fragment:qE,skinbase_vertex:XE,skinning_pars_vertex:$E,skinning_vertex:YE,skinnormal_vertex:ZE,specularmap_fragment:JE,specularmap_pars_fragment:jE,tonemapping_fragment:KE,tonemapping_pars_fragment:QE,transmission_fragment:eA,transmission_pars_fragment:tA,uv_pars_fragment:nA,uv_pars_vertex:iA,uv_vertex:sA,worldpos_vertex:rA,background_vert:aA,background_frag:oA,backgroundCube_vert:lA,backgroundCube_frag:cA,cube_vert:uA,cube_frag:dA,depth_vert:hA,depth_frag:fA,distanceRGBA_vert:pA,distanceRGBA_frag:mA,equirect_vert:gA,equirect_frag:vA,linedashed_vert:yA,linedashed_frag:xA,meshbasic_vert:_A,meshbasic_frag:bA,meshlambert_vert:SA,meshlambert_frag:MA,meshmatcap_vert:wA,meshmatcap_frag:EA,meshnormal_vert:AA,meshnormal_frag:TA,meshphong_vert:RA,meshphong_frag:CA,meshphysical_vert:PA,meshphysical_frag:IA,meshtoon_vert:LA,meshtoon_frag:NA,points_vert:DA,points_frag:UA,shadow_vert:FA,shadow_frag:OA,sprite_vert:kA,sprite_frag:BA},Fe={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new dt}},envmap:{envMap:{value:null},envMapRotation:{value:new dt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new dt},normalScale:{value:new ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0},uvTransform:{value:new dt}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}}},Di={basic:{uniforms:Wn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.fog]),vertexShader:ft.meshbasic_vert,fragmentShader:ft.meshbasic_frag},lambert:{uniforms:Wn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new We(0)}}]),vertexShader:ft.meshlambert_vert,fragmentShader:ft.meshlambert_frag},phong:{uniforms:Wn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30}}]),vertexShader:ft.meshphong_vert,fragmentShader:ft.meshphong_frag},standard:{uniforms:Wn([Fe.common,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.roughnessmap,Fe.metalnessmap,Fe.fog,Fe.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag},toon:{uniforms:Wn([Fe.common,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.gradientmap,Fe.fog,Fe.lights,{emissive:{value:new We(0)}}]),vertexShader:ft.meshtoon_vert,fragmentShader:ft.meshtoon_frag},matcap:{uniforms:Wn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,{matcap:{value:null}}]),vertexShader:ft.meshmatcap_vert,fragmentShader:ft.meshmatcap_frag},points:{uniforms:Wn([Fe.points,Fe.fog]),vertexShader:ft.points_vert,fragmentShader:ft.points_frag},dashed:{uniforms:Wn([Fe.common,Fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ft.linedashed_vert,fragmentShader:ft.linedashed_frag},depth:{uniforms:Wn([Fe.common,Fe.displacementmap]),vertexShader:ft.depth_vert,fragmentShader:ft.depth_frag},normal:{uniforms:Wn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,{opacity:{value:1}}]),vertexShader:ft.meshnormal_vert,fragmentShader:ft.meshnormal_frag},sprite:{uniforms:Wn([Fe.sprite,Fe.fog]),vertexShader:ft.sprite_vert,fragmentShader:ft.sprite_frag},background:{uniforms:{uvTransform:{value:new dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ft.background_vert,fragmentShader:ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new dt}},vertexShader:ft.backgroundCube_vert,fragmentShader:ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ft.cube_vert,fragmentShader:ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ft.equirect_vert,fragmentShader:ft.equirect_frag},distanceRGBA:{uniforms:Wn([Fe.common,Fe.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ft.distanceRGBA_vert,fragmentShader:ft.distanceRGBA_frag},shadow:{uniforms:Wn([Fe.lights,Fe.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:ft.shadow_vert,fragmentShader:ft.shadow_frag}};Di.physical={uniforms:Wn([Di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new dt},clearcoatNormalScale:{value:new ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new dt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new dt},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new dt},transmissionSamplerSize:{value:new ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new dt},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new dt},anisotropyVector:{value:new ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new dt}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag};var mc={r:0,b:0,g:0},or=new ui,zA=new it;function VA(i,e,t,n,s,r,a){let o=new We(0),l=r===!0?0:1,c,u,d=null,h=0,f=null;function m(x){let y=x.isScene===!0?x.background:null;return y&&y.isTexture&&(y=(x.backgroundBlurriness>0?t:e).get(y)),y}function v(x){let y=!1,_=m(x);_===null?p(o,l):_&&_.isColor&&(p(_,1),y=!0);let L=i.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,a):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||y)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil)}function g(x,y){let _=m(y);_&&(_.isCubeTexture||_.mapping===Ya)?(u===void 0&&(u=new tn(new Er(1,1,1),new di({name:"BackgroundCubeMaterial",uniforms:za(Di.backgroundCube.uniforms),vertexShader:Di.backgroundCube.vertexShader,fragmentShader:Di.backgroundCube.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,M,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),or.copy(y.backgroundRotation),or.x*=-1,or.y*=-1,or.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(or.y*=-1,or.z*=-1),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(zA.makeRotationFromEuler(or)),u.material.toneMapped=Lt.getTransfer(_.colorSpace)!==zt,(d!==_||h!==_.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,d=_,h=_.version,f=i.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new tn(new Ha(2,2),new di({name:"BackgroundMaterial",uniforms:za(Di.background.uniforms),vertexShader:Di.background.vertexShader,fragmentShader:Di.background.fragmentShader,side:vs,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=Lt.getTransfer(_.colorSpace)!==zt,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(d!==_||h!==_.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,d=_,h=_.version,f=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function p(x,y){x.getRGB(mc,Ax(i)),n.buffers.color.setClear(mc.r,mc.g,mc.b,y,a)}return{getClearColor:function(){return o},setClearColor:function(x,y=1){o.set(x),l=y,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,p(o,l)},render:v,addToRenderList:g}}function HA(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null),r=s,a=!1;function o(S,D,B,C,V){let q=!1,ne=d(C,B,D);r!==ne&&(r=ne,c(r.object)),q=f(S,C,B,V),q&&m(S,C,B,V),V!==null&&e.update(V,i.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,_(S,D,B,C),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return i.createVertexArray()}function c(S){return i.bindVertexArray(S)}function u(S){return i.deleteVertexArray(S)}function d(S,D,B){let C=B.wireframe===!0,V=n[S.id];V===void 0&&(V={},n[S.id]=V);let q=V[D.id];q===void 0&&(q={},V[D.id]=q);let ne=q[C];return ne===void 0&&(ne=h(l()),q[C]=ne),ne}function h(S){let D=[],B=[],C=[];for(let V=0;V<t;V++)D[V]=0,B[V]=0,C[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:B,attributeDivisors:C,object:S,attributes:{},index:null}}function f(S,D,B,C){let V=r.attributes,q=D.attributes,ne=0,ee=B.getAttributes();for(let K in ee)if(ee[K].location>=0){let oe=V[K],Se=q[K];if(Se===void 0&&(K==="instanceMatrix"&&S.instanceMatrix&&(Se=S.instanceMatrix),K==="instanceColor"&&S.instanceColor&&(Se=S.instanceColor)),oe===void 0||oe.attribute!==Se||Se&&oe.data!==Se.data)return!0;ne++}return r.attributesNum!==ne||r.index!==C}function m(S,D,B,C){let V={},q=D.attributes,ne=0,ee=B.getAttributes();for(let K in ee)if(ee[K].location>=0){let oe=q[K];oe===void 0&&(K==="instanceMatrix"&&S.instanceMatrix&&(oe=S.instanceMatrix),K==="instanceColor"&&S.instanceColor&&(oe=S.instanceColor));let Se={};Se.attribute=oe,oe&&oe.data&&(Se.data=oe.data),V[K]=Se,ne++}r.attributes=V,r.attributesNum=ne,r.index=C}function v(){let S=r.newAttributes;for(let D=0,B=S.length;D<B;D++)S[D]=0}function g(S){p(S,0)}function p(S,D){let B=r.newAttributes,C=r.enabledAttributes,V=r.attributeDivisors;B[S]=1,C[S]===0&&(i.enableVertexAttribArray(S),C[S]=1),V[S]!==D&&(i.vertexAttribDivisor(S,D),V[S]=D)}function x(){let S=r.newAttributes,D=r.enabledAttributes;for(let B=0,C=D.length;B<C;B++)D[B]!==S[B]&&(i.disableVertexAttribArray(B),D[B]=0)}function y(S,D,B,C,V,q,ne){ne===!0?i.vertexAttribIPointer(S,D,B,V,q):i.vertexAttribPointer(S,D,B,C,V,q)}function _(S,D,B,C){v();let V=C.attributes,q=B.getAttributes(),ne=D.defaultAttributeValues;for(let ee in q){let K=q[ee];if(K.location>=0){let re=V[ee];if(re===void 0&&(ee==="instanceMatrix"&&S.instanceMatrix&&(re=S.instanceMatrix),ee==="instanceColor"&&S.instanceColor&&(re=S.instanceColor)),re!==void 0){let oe=re.normalized,Se=re.itemSize,Re=e.get(re);if(Re===void 0)continue;let be=Re.buffer,te=Re.type,ue=Re.bytesPerElement,pe=te===i.INT||te===i.UNSIGNED_INT||re.gpuType===Kp;if(re.isInterleavedBufferAttribute){let ce=re.data,Ve=ce.stride,Je=re.offset;if(ce.isInstancedInterleavedBuffer){for(let H=0;H<K.locationSize;H++)p(K.location+H,ce.meshPerAttribute);S.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let H=0;H<K.locationSize;H++)g(K.location+H);i.bindBuffer(i.ARRAY_BUFFER,be);for(let H=0;H<K.locationSize;H++)y(K.location+H,Se/K.locationSize,te,oe,Ve*ue,(Je+Se/K.locationSize*H)*ue,pe)}else{if(re.isInstancedBufferAttribute){for(let ce=0;ce<K.locationSize;ce++)p(K.location+ce,re.meshPerAttribute);S.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let ce=0;ce<K.locationSize;ce++)g(K.location+ce);i.bindBuffer(i.ARRAY_BUFFER,be);for(let ce=0;ce<K.locationSize;ce++)y(K.location+ce,Se/K.locationSize,te,oe,Se*ue,Se/K.locationSize*ce*ue,pe)}}else if(ne!==void 0){let oe=ne[ee];if(oe!==void 0)switch(oe.length){case 2:i.vertexAttrib2fv(K.location,oe);break;case 3:i.vertexAttrib3fv(K.location,oe);break;case 4:i.vertexAttrib4fv(K.location,oe);break;default:i.vertexAttrib1fv(K.location,oe)}}}}x()}function L(){P();for(let S in n){let D=n[S];for(let B in D){let C=D[B];for(let V in C)u(C[V].object),delete C[V];delete D[B]}delete n[S]}}function M(S){if(n[S.id]===void 0)return;let D=n[S.id];for(let B in D){let C=D[B];for(let V in C)u(C[V].object),delete C[V];delete D[B]}delete n[S.id]}function R(S){for(let D in n){let B=n[D];if(B[S.id]===void 0)continue;let C=B[S.id];for(let V in C)u(C[V].object),delete C[V];delete B[S.id]}}function P(){w(),a=!0,r!==s&&(r=s,c(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:P,resetDefaultState:w,dispose:L,releaseStatesOfGeometry:M,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:g,disableUnusedAttributes:x}}function GA(i,e,t){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function a(c,u,d){d!==0&&(i.drawArraysInstanced(n,c,u,d),t.update(u,n,d))}function o(c,u,d){if(d===0)return;let h=e.get("WEBGL_multi_draw");if(h===null)for(let f=0;f<d;f++)this.render(c[f],u[f]);else{h.multiDrawArraysWEBGL(n,c,0,u,0,d);let f=0;for(let m=0;m<d;m++)f+=u[m];t.update(f,n,1)}}function l(c,u,d,h){if(d===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<c.length;m++)a(c[m],u[m],h[m]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,h,0,d);let m=0;for(let v=0;v<d;v++)m+=u[v];for(let v=0;v<h.length;v++)t.update(m,n,h[v])}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function WA(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let M=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(M){return!(M!==oi&&n.convert(M)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(M){let R=M===bl&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(M!==xs&&n.convert(M)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&M!==Si&&!R)}function l(M){if(M==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let d=t.logarithmicDepthBuffer===!0,h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),v=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),p=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),_=f>0,L=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,maxTextures:h,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:v,maxAttributes:g,maxVertexUniforms:p,maxVaryings:x,maxFragmentUniforms:y,vertexTextures:_,maxSamples:L}}function qA(i){let e=this,t=null,n=0,s=!1,r=!1,a=new Gi,o=new dt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let f=d.length!==0||h||n!==0||s;return s=h,n=d.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,f){let m=d.clippingPlanes,v=d.clipIntersection,g=d.clipShadows,p=i.get(d);if(!s||m===null||m.length===0||r&&!g)r?u(null):c();else{let x=r?0:n,y=x*4,_=p.clippingState||null;l.value=_,_=u(m,h,y,f);for(let L=0;L!==y;++L)_[L]=t[L];p.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,h,f,m){let v=d!==null?d.length:0,g=null;if(v!==0){if(g=l.value,m!==!0||g===null){let p=f+v*4,x=h.matrixWorldInverse;o.getNormalMatrix(x),(g===null||g.length<p)&&(g=new Float32Array(p));for(let y=0,_=f;y!==v;++y,_+=4)a.copy(d[y]).applyMatrix4(x,o),a.normal.toArray(g,_),g[_+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}function XA(i){let e=new WeakMap;function t(a,o){return o===No?a.mapping=ys:o===Do&&(a.mapping=zs),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===No||o===Do)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Qc(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Ga=class extends Va{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},La=4,s0=[.125,.215,.35,.446,.526,.582],vr=20,Lh=new Ga,r0=new We,Nh=null,Dh=0,Uh=0,Fh=!1,gr=(1+Math.sqrt(5))/2,Ma=1/gr,a0=[new U(-gr,Ma,0),new U(gr,Ma,0),new U(-Ma,0,gr),new U(Ma,0,gr),new U(0,gr,-Ma),new U(0,gr,Ma),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)],Zo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Nh=this._renderer.getRenderTarget(),Dh=this._renderer.getActiveCubeFace(),Uh=this._renderer.getActiveMipmapLevel(),Fh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=c0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=l0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Nh,Dh,Uh),this._renderer.xr.enabled=Fh,e.scissorTest=!1,gc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ys||e.mapping===zs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Nh=this._renderer.getRenderTarget(),Dh=this._renderer.getActiveCubeFace(),Uh=this._renderer.getActiveMipmapLevel(),Fh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:cn,minFilter:cn,generateMipmaps:!1,type:bl,format:oi,colorSpace:Ss,depthBuffer:!1},s=o0(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=o0(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=$A(r)),this._blurMaterial=YA(r,e,t)}return s}_compileMaterial(e){let t=new tn(this._lodPlanes[0],e);this._renderer.compile(t,Lh)}_sceneToCubeUV(e,t,n,s){let o=new pn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(r0),u.toneMapping=ms,u.autoClear=!1;let f=new Zi({name:"PMREM.Background",side:Xn,depthWrite:!1,depthTest:!1}),m=new tn(new Er,f),v=!1,g=e.background;g?g.isColor&&(f.color.copy(g),e.background=null,v=!0):(f.color.copy(r0),v=!0);for(let p=0;p<6;p++){let x=p%3;x===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):x===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));let y=this._cubeSize;gc(s,x*y,p>2?y:0,y,y),u.setRenderTarget(s),v&&u.render(m,o),u.render(e,o)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=h,u.autoClear=d,e.background=g}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===ys||e.mapping===zs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=c0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=l0());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new tn(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;gc(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Lh)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=a0[(s-r-1)%a0.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,d=new tn(this._lodPlanes[s],c),h=c.uniforms,f=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*vr-1),v=r/m,g=isFinite(r)?1+Math.floor(u*v):vr;g>vr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${vr}`);let p=[],x=0;for(let R=0;R<vr;++R){let P=R/v,w=Math.exp(-P*P/2);p.push(w),R===0?x+=w:R<g&&(x+=2*w)}for(let R=0;R<p.length;R++)p[R]=p[R]/x;h.envMap.value=e.texture,h.samples.value=g,h.weights.value=p,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);let{_lodMax:y}=this;h.dTheta.value=m,h.mipInt.value=y-n;let _=this._sizeLods[s],L=3*_*(s>y-La?s-y+La:0),M=4*(this._cubeSize-_);gc(t,L,M,3*_,2*_),l.setRenderTarget(t),l.render(d,Lh)}};function $A(i){let e=[],t=[],n=[],s=i,r=i-La+1+s0.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let l=1/o;a>i-La?l=s0[a-i+La-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,m=6,v=3,g=2,p=1,x=new Float32Array(v*m*f),y=new Float32Array(g*m*f),_=new Float32Array(p*m*f);for(let M=0;M<f;M++){let R=M%3*2/3-1,P=M>2?0:-1,w=[R,P,0,R+2/3,P,0,R+2/3,P+1,0,R,P,0,R+2/3,P+1,0,R,P+1,0];x.set(w,v*m*M),y.set(h,g*m*M);let S=[M,M,M,M,M,M];_.set(S,p*m*M)}let L=new pt;L.setAttribute("position",new Et(x,v)),L.setAttribute("uv",new Et(y,g)),L.setAttribute("faceIndex",new Et(_,p)),e.push(L),s>La&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function o0(i,e,t){let n=new ci(i,e,t);return n.texture.mapping=Ya,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function gc(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function YA(i,e,t){let n=new Float32Array(vr),s=new U(0,1,0);return new di({name:"SphericalGaussianBlur",defines:{n:vr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:lm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ps,depthTest:!1,depthWrite:!1})}function l0(){return new di({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:lm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ps,depthTest:!1,depthWrite:!1})}function c0(){return new di({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:lm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ps,depthTest:!1,depthWrite:!1})}function lm(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ZA(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===No||l===Do,u=l===ys||l===zs;if(c||u){let d=e.get(o),h=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return t===null&&(t=new Zo(i)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{let f=o.image;return c&&f&&f.height>0||u&&f&&s(f)?(t===null&&(t=new Zo(i)),d=c?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function s(o){let l=0,c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function JA(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function jA(i,e,t,n){let s={},r=new WeakMap;function a(d){let h=d.target;h.index!==null&&e.remove(h.index);for(let m in h.attributes)e.remove(h.attributes[m]);for(let m in h.morphAttributes){let v=h.morphAttributes[m];for(let g=0,p=v.length;g<p;g++)e.remove(v[g])}h.removeEventListener("dispose",a),delete s[h.id];let f=r.get(h);f&&(e.remove(f),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(d,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,t.memory.geometries++),h}function l(d){let h=d.attributes;for(let m in h)e.update(h[m],i.ARRAY_BUFFER);let f=d.morphAttributes;for(let m in f){let v=f[m];for(let g=0,p=v.length;g<p;g++)e.update(v[g],i.ARRAY_BUFFER)}}function c(d){let h=[],f=d.index,m=d.attributes.position,v=0;if(f!==null){let x=f.array;v=f.version;for(let y=0,_=x.length;y<_;y+=3){let L=x[y+0],M=x[y+1],R=x[y+2];h.push(L,M,M,R,R,L)}}else if(m!==void 0){let x=m.array;v=m.version;for(let y=0,_=x.length/3-1;y<_;y+=3){let L=y+0,M=y+1,R=y+2;h.push(L,M,M,R,R,L)}}else return;let g=new(Sx(h)?Yo:$o)(h,1);g.version=v;let p=r.get(d);p&&e.remove(p),r.set(d,g)}function u(d){let h=r.get(d);if(h){let f=d.index;f!==null&&h.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function KA(i,e,t){let n;function s(h){n=h}let r,a;function o(h){r=h.type,a=h.bytesPerElement}function l(h,f){i.drawElements(n,f,r,h*a),t.update(f,n,1)}function c(h,f,m){m!==0&&(i.drawElementsInstanced(n,f,r,h*a,m),t.update(f,n,m))}function u(h,f,m){if(m===0)return;let v=e.get("WEBGL_multi_draw");if(v===null)for(let g=0;g<m;g++)this.render(h[g]/a,f[g]);else{v.multiDrawElementsWEBGL(n,f,0,r,h,0,m);let g=0;for(let p=0;p<m;p++)g+=f[p];t.update(g,n,1)}}function d(h,f,m,v){if(m===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<h.length;p++)c(h[p]/a,f[p],v[p]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,r,h,0,v,0,m);let p=0;for(let x=0;x<m;x++)p+=f[x];for(let x=0;x<v.length;x++)t.update(p,n,v[x])}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function QA(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function e1(i,e,t){let n=new WeakMap,s=new Nt;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0,h=n.get(o);if(h===void 0||h.count!==d){let w=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",w)};h!==void 0&&h.texture.dispose();let f=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],x=o.morphAttributes.color||[],y=0;f===!0&&(y=1),m===!0&&(y=2),v===!0&&(y=3);let _=o.attributes.position.count*y,L=1;_>e.maxTextureSize&&(L=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let M=new Float32Array(_*L*4*d),R=new ka(M,_,L,d);R.type=Si,R.needsUpdate=!0;let P=y*4;for(let S=0;S<d;S++){let D=g[S],B=p[S],C=x[S],V=_*L*4*S;for(let q=0;q<D.count;q++){let ne=q*P;f===!0&&(s.fromBufferAttribute(D,q),M[V+ne+0]=s.x,M[V+ne+1]=s.y,M[V+ne+2]=s.z,M[V+ne+3]=0),m===!0&&(s.fromBufferAttribute(B,q),M[V+ne+4]=s.x,M[V+ne+5]=s.y,M[V+ne+6]=s.z,M[V+ne+7]=0),v===!0&&(s.fromBufferAttribute(C,q),M[V+ne+8]=s.x,M[V+ne+9]=s.y,M[V+ne+10]=s.z,M[V+ne+11]=C.itemSize===4?s.w:1)}}h={count:d,texture:R,size:new ve(_,L)},n.set(o,h),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];let m=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function t1(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,u=l.geometry,d=e.get(l,u);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let h=l.skeleton;s.get(h)!==c&&(h.update(),s.set(h,c))}return d}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}var Jo=class extends un{constructor(e,t,n,s,r,a,o,l,c,u){if(u=u!==void 0?u:Sr,u!==Sr&&u!==Fa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Sr&&(n=wr),n===void 0&&u===Fa&&(n=Za),super(null,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:En,this.minFilter=l!==void 0?l:En,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Cx=new un,Px=new Jo(1,1);Px.compareFunction=am;var Ix=new ka,Lx=new Xo,Nx=new Ar,u0=[],d0=[],h0=new Float32Array(16),f0=new Float32Array(9),p0=new Float32Array(4);function Ja(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=u0[s];if(r===void 0&&(r=new Float32Array(s),u0[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function mn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function gn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ud(i,e){let t=d0[e];t===void 0&&(t=new Int32Array(e),d0[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function n1(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function i1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mn(t,e))return;i.uniform2fv(this.addr,e),gn(t,e)}}function s1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(mn(t,e))return;i.uniform3fv(this.addr,e),gn(t,e)}}function r1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mn(t,e))return;i.uniform4fv(this.addr,e),gn(t,e)}}function a1(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(mn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),gn(t,e)}else{if(mn(t,n))return;p0.set(n),i.uniformMatrix2fv(this.addr,!1,p0),gn(t,n)}}function o1(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(mn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),gn(t,e)}else{if(mn(t,n))return;f0.set(n),i.uniformMatrix3fv(this.addr,!1,f0),gn(t,n)}}function l1(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(mn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),gn(t,e)}else{if(mn(t,n))return;h0.set(n),i.uniformMatrix4fv(this.addr,!1,h0),gn(t,n)}}function c1(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function u1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mn(t,e))return;i.uniform2iv(this.addr,e),gn(t,e)}}function d1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mn(t,e))return;i.uniform3iv(this.addr,e),gn(t,e)}}function h1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mn(t,e))return;i.uniform4iv(this.addr,e),gn(t,e)}}function f1(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function p1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mn(t,e))return;i.uniform2uiv(this.addr,e),gn(t,e)}}function m1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mn(t,e))return;i.uniform3uiv(this.addr,e),gn(t,e)}}function g1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mn(t,e))return;i.uniform4uiv(this.addr,e),gn(t,e)}}function v1(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?Px:Cx;t.setTexture2D(e||r,s)}function y1(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Lx,s)}function x1(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Nx,s)}function _1(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Ix,s)}function b1(i){switch(i){case 5126:return n1;case 35664:return i1;case 35665:return s1;case 35666:return r1;case 35674:return a1;case 35675:return o1;case 35676:return l1;case 5124:case 35670:return c1;case 35667:case 35671:return u1;case 35668:case 35672:return d1;case 35669:case 35673:return h1;case 5125:return f1;case 36294:return p1;case 36295:return m1;case 36296:return g1;case 35678:case 36198:case 36298:case 36306:case 35682:return v1;case 35679:case 36299:case 36307:return y1;case 35680:case 36300:case 36308:case 36293:return x1;case 36289:case 36303:case 36311:case 36292:return _1}}function S1(i,e){i.uniform1fv(this.addr,e)}function M1(i,e){let t=Ja(e,this.size,2);i.uniform2fv(this.addr,t)}function w1(i,e){let t=Ja(e,this.size,3);i.uniform3fv(this.addr,t)}function E1(i,e){let t=Ja(e,this.size,4);i.uniform4fv(this.addr,t)}function A1(i,e){let t=Ja(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function T1(i,e){let t=Ja(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function R1(i,e){let t=Ja(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function C1(i,e){i.uniform1iv(this.addr,e)}function P1(i,e){i.uniform2iv(this.addr,e)}function I1(i,e){i.uniform3iv(this.addr,e)}function L1(i,e){i.uniform4iv(this.addr,e)}function N1(i,e){i.uniform1uiv(this.addr,e)}function D1(i,e){i.uniform2uiv(this.addr,e)}function U1(i,e){i.uniform3uiv(this.addr,e)}function F1(i,e){i.uniform4uiv(this.addr,e)}function O1(i,e,t){let n=this.cache,s=e.length,r=ud(t,s);mn(n,r)||(i.uniform1iv(this.addr,r),gn(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Cx,r[a])}function k1(i,e,t){let n=this.cache,s=e.length,r=ud(t,s);mn(n,r)||(i.uniform1iv(this.addr,r),gn(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Lx,r[a])}function B1(i,e,t){let n=this.cache,s=e.length,r=ud(t,s);mn(n,r)||(i.uniform1iv(this.addr,r),gn(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Nx,r[a])}function z1(i,e,t){let n=this.cache,s=e.length,r=ud(t,s);mn(n,r)||(i.uniform1iv(this.addr,r),gn(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Ix,r[a])}function V1(i){switch(i){case 5126:return S1;case 35664:return M1;case 35665:return w1;case 35666:return E1;case 35674:return A1;case 35675:return T1;case 35676:return R1;case 5124:case 35670:return C1;case 35667:case 35671:return P1;case 35668:case 35672:return I1;case 35669:case 35673:return L1;case 5125:return N1;case 36294:return D1;case 36295:return U1;case 36296:return F1;case 35678:case 36198:case 36298:case 36306:case 35682:return O1;case 35679:case 36299:case 36307:return k1;case 35680:case 36300:case 36308:case 36293:return B1;case 36289:case 36303:case 36311:case 36292:return z1}}var zf=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=b1(t.type)}},Vf=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=V1(t.type)}},Hf=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Oh=/(\w+)(\])?(\[|\.)?/g;function m0(i,e){i.seq.push(e),i.map[e.id]=e}function H1(i,e,t){let n=i.name,s=n.length;for(Oh.lastIndex=0;;){let r=Oh.exec(n),a=Oh.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){m0(t,c===void 0?new zf(o,i,e):new Vf(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new Hf(o),m0(t,d)),t=d}}}var Ua=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);H1(r,a,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function g0(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var G1=37297,W1=0;function q1(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function X1(i){let e=Lt.getPrimaries(Lt.workingColorSpace),t=Lt.getPrimaries(i),n;switch(e===t?n="":e===Ho&&t===Vo?n="LinearDisplayP3ToLinearSRGB":e===Vo&&t===Ho&&(n="LinearSRGBToLinearDisplayP3"),i){case Ss:case Sl:return[n,"LinearTransferOETF"];case _i:case cd:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function v0(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+q1(i.getShaderSource(e),a)}else return s}function $1(i,e){let t=X1(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Y1(i,e){let t;switch(e){case Xy:t="Linear";break;case $y:t="Reinhard";break;case Yy:t="OptimizedCineon";break;case Zy:t="ACESFilmic";break;case jy:t="AgX";break;case Ky:t="Neutral";break;case Jy:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Z1(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ao).join(`
`)}function J1(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function j1(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Ao(i){return i!==""}function y0(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function x0(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var K1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gf(i){return i.replace(K1,eT)}var Q1=new Map;function eT(i,e){let t=ft[e];if(t===void 0){let n=Q1.get(e);if(n!==void 0)t=ft[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Gf(t)}var tT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _0(i){return i.replace(tT,nT)}function nT(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function b0(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function iT(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Zp?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===yy?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Hi&&(e="SHADOWMAP_TYPE_VSM"),e}function sT(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ys:case zs:e="ENVMAP_TYPE_CUBE";break;case Ya:e="ENVMAP_TYPE_CUBE_UV";break}return e}function rT(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===zs&&(e="ENVMAP_MODE_REFRACTION"),e}function aT(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case _l:e="ENVMAP_BLENDING_MULTIPLY";break;case Wy:e="ENVMAP_BLENDING_MIX";break;case qy:e="ENVMAP_BLENDING_ADD";break}return e}function oT(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function lT(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=iT(t),c=sT(t),u=rT(t),d=aT(t),h=oT(t),f=Z1(t),m=J1(r),v=s.createProgram(),g,p,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Ao).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Ao).join(`
`),p.length>0&&(p+=`
`)):(g=[b0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ao).join(`
`),p=[b0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ms?"#define TONE_MAPPING":"",t.toneMapping!==ms?ft.tonemapping_pars_fragment:"",t.toneMapping!==ms?Y1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ft.colorspace_pars_fragment,$1("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ao).join(`
`)),a=Gf(a),a=y0(a,t),a=x0(a,t),o=Gf(o),o=y0(o,t),o=x0(o,t),a=_0(a),o=_0(o),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===If?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===If?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let y=x+g+a,_=x+p+o,L=g0(s,s.VERTEX_SHADER,y),M=g0(s,s.FRAGMENT_SHADER,_);s.attachShader(v,L),s.attachShader(v,M),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function R(D){if(i.debug.checkShaderErrors){let B=s.getProgramInfoLog(v).trim(),C=s.getShaderInfoLog(L).trim(),V=s.getShaderInfoLog(M).trim(),q=!0,ne=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,L,M);else{let ee=v0(s,L,"vertex"),K=v0(s,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+B+`
`+ee+`
`+K)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(C===""||V==="")&&(ne=!1);ne&&(D.diagnostics={runnable:q,programLog:B,vertexShader:{log:C,prefix:g},fragmentShader:{log:V,prefix:p}})}s.deleteShader(L),s.deleteShader(M),P=new Ua(s,v),w=j1(s,v)}let P;this.getUniforms=function(){return P===void 0&&R(this),P};let w;this.getAttributes=function(){return w===void 0&&R(this),w};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(v,G1)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=W1++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=L,this.fragmentShader=M,this}var cT=0,Wf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new qf(e),t.set(e,n)),n}},qf=class{constructor(e){this.id=cT++,this.code=e,this.usedTimes=0}};function uT(i,e,t,n,s,r,a){let o=new Ba,l=new Wf,c=new Set,u=[],d=s.logarithmicDepthBuffer,h=s.vertexTextures,f=s.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(w){return c.add(w),w===0?"uv":`uv${w}`}function g(w,S,D,B,C){let V=B.fog,q=C.geometry,ne=w.isMeshStandardMaterial?B.environment:null,ee=(w.isMeshStandardMaterial?t:e).get(w.envMap||ne),K=ee&&ee.mapping===Ya?ee.image.height:null,re=m[w.type];w.precision!==null&&(f=s.getMaxPrecision(w.precision),f!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",f,"instead."));let oe=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Se=oe!==void 0?oe.length:0,Re=0;q.morphAttributes.position!==void 0&&(Re=1),q.morphAttributes.normal!==void 0&&(Re=2),q.morphAttributes.color!==void 0&&(Re=3);let be,te,ue,pe;if(re){let xt=Di[re];be=xt.vertexShader,te=xt.fragmentShader}else be=w.vertexShader,te=w.fragmentShader,l.update(w),ue=l.getVertexShaderID(w),pe=l.getFragmentShaderID(w);let ce=i.getRenderTarget(),Ve=C.isInstancedMesh===!0,Je=C.isBatchedMesh===!0,H=!!w.map,et=!!w.matcap,ae=!!ee,me=!!w.aoMap,se=!!w.lightMap,Ae=!!w.bumpMap,fe=!!w.normalMap,Ce=!!w.displacementMap,qe=!!w.emissiveMap,N=!!w.metalnessMap,A=!!w.roughnessMap,k=w.anisotropy>0,O=w.clearcoat>0,Z=w.dispersion>0,$=w.iridescence>0,ie=w.sheen>0,ye=w.transmission>0,xe=k&&!!w.anisotropyMap,je=O&&!!w.clearcoatMap,we=O&&!!w.clearcoatNormalMap,ke=O&&!!w.clearcoatRoughnessMap,rt=$&&!!w.iridescenceMap,$e=$&&!!w.iridescenceThicknessMap,Ue=ie&&!!w.sheenColorMap,Qe=ie&&!!w.sheenRoughnessMap,tt=!!w.specularMap,Ct=!!w.specularColorMap,at=!!w.specularIntensityMap,G=ye&&!!w.transmissionMap,ge=ye&&!!w.thicknessMap,le=!!w.gradientMap,Ie=!!w.alphaMap,Ne=w.alphaTest>0,ot=!!w.alphaHash,_t=!!w.extensions,At=ms;w.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(At=i.toneMapping);let nn={shaderID:re,shaderType:w.type,shaderName:w.name,vertexShader:be,fragmentShader:te,defines:w.defines,customVertexShaderID:ue,customFragmentShaderID:pe,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:f,batching:Je,instancing:Ve,instancingColor:Ve&&C.instanceColor!==null,instancingMorph:Ve&&C.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:ce===null?i.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:Ss,alphaToCoverage:!!w.alphaToCoverage,map:H,matcap:et,envMap:ae,envMapMode:ae&&ee.mapping,envMapCubeUVHeight:K,aoMap:me,lightMap:se,bumpMap:Ae,normalMap:fe,displacementMap:h&&Ce,emissiveMap:qe,normalMapObjectSpace:fe&&w.normalMapType===px,normalMapTangentSpace:fe&&w.normalMapType===qs,metalnessMap:N,roughnessMap:A,anisotropy:k,anisotropyMap:xe,clearcoat:O,clearcoatMap:je,clearcoatNormalMap:we,clearcoatRoughnessMap:ke,dispersion:Z,iridescence:$,iridescenceMap:rt,iridescenceThicknessMap:$e,sheen:ie,sheenColorMap:Ue,sheenRoughnessMap:Qe,specularMap:tt,specularColorMap:Ct,specularIntensityMap:at,transmission:ye,transmissionMap:G,thicknessMap:ge,gradientMap:le,opaque:w.transparent===!1&&w.blending===br&&w.alphaToCoverage===!1,alphaMap:Ie,alphaTest:Ne,alphaHash:ot,combine:w.combine,mapUv:H&&v(w.map.channel),aoMapUv:me&&v(w.aoMap.channel),lightMapUv:se&&v(w.lightMap.channel),bumpMapUv:Ae&&v(w.bumpMap.channel),normalMapUv:fe&&v(w.normalMap.channel),displacementMapUv:Ce&&v(w.displacementMap.channel),emissiveMapUv:qe&&v(w.emissiveMap.channel),metalnessMapUv:N&&v(w.metalnessMap.channel),roughnessMapUv:A&&v(w.roughnessMap.channel),anisotropyMapUv:xe&&v(w.anisotropyMap.channel),clearcoatMapUv:je&&v(w.clearcoatMap.channel),clearcoatNormalMapUv:we&&v(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ke&&v(w.clearcoatRoughnessMap.channel),iridescenceMapUv:rt&&v(w.iridescenceMap.channel),iridescenceThicknessMapUv:$e&&v(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ue&&v(w.sheenColorMap.channel),sheenRoughnessMapUv:Qe&&v(w.sheenRoughnessMap.channel),specularMapUv:tt&&v(w.specularMap.channel),specularColorMapUv:Ct&&v(w.specularColorMap.channel),specularIntensityMapUv:at&&v(w.specularIntensityMap.channel),transmissionMapUv:G&&v(w.transmissionMap.channel),thicknessMapUv:ge&&v(w.thicknessMap.channel),alphaMapUv:Ie&&v(w.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(fe||k),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:C.isPoints===!0&&!!q.attributes.uv&&(H||Ie),fog:!!V,useFog:w.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:C.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:Se,morphTextureStride:Re,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:At,useLegacyLights:i._useLegacyLights,decodeVideoTexture:H&&w.map.isVideoTexture===!0&&Lt.getTransfer(w.map.colorSpace)===zt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Wi,flipSided:w.side===Xn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:_t&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:_t&&w.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return nn.vertexUv1s=c.has(1),nn.vertexUv2s=c.has(2),nn.vertexUv3s=c.has(3),c.clear(),nn}function p(w){let S=[];if(w.shaderID?S.push(w.shaderID):(S.push(w.customVertexShaderID),S.push(w.customFragmentShaderID)),w.defines!==void 0)for(let D in w.defines)S.push(D),S.push(w.defines[D]);return w.isRawShaderMaterial===!1&&(x(S,w),y(S,w),S.push(i.outputColorSpace)),S.push(w.customProgramCacheKey),S.join()}function x(w,S){w.push(S.precision),w.push(S.outputColorSpace),w.push(S.envMapMode),w.push(S.envMapCubeUVHeight),w.push(S.mapUv),w.push(S.alphaMapUv),w.push(S.lightMapUv),w.push(S.aoMapUv),w.push(S.bumpMapUv),w.push(S.normalMapUv),w.push(S.displacementMapUv),w.push(S.emissiveMapUv),w.push(S.metalnessMapUv),w.push(S.roughnessMapUv),w.push(S.anisotropyMapUv),w.push(S.clearcoatMapUv),w.push(S.clearcoatNormalMapUv),w.push(S.clearcoatRoughnessMapUv),w.push(S.iridescenceMapUv),w.push(S.iridescenceThicknessMapUv),w.push(S.sheenColorMapUv),w.push(S.sheenRoughnessMapUv),w.push(S.specularMapUv),w.push(S.specularColorMapUv),w.push(S.specularIntensityMapUv),w.push(S.transmissionMapUv),w.push(S.thicknessMapUv),w.push(S.combine),w.push(S.fogExp2),w.push(S.sizeAttenuation),w.push(S.morphTargetsCount),w.push(S.morphAttributeCount),w.push(S.numDirLights),w.push(S.numPointLights),w.push(S.numSpotLights),w.push(S.numSpotLightMaps),w.push(S.numHemiLights),w.push(S.numRectAreaLights),w.push(S.numDirLightShadows),w.push(S.numPointLightShadows),w.push(S.numSpotLightShadows),w.push(S.numSpotLightShadowsWithMaps),w.push(S.numLightProbes),w.push(S.shadowMapType),w.push(S.toneMapping),w.push(S.numClippingPlanes),w.push(S.numClipIntersection),w.push(S.depthPacking)}function y(w,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),w.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.skinning&&o.enable(4),S.morphTargets&&o.enable(5),S.morphNormals&&o.enable(6),S.morphColors&&o.enable(7),S.premultipliedAlpha&&o.enable(8),S.shadowMapEnabled&&o.enable(9),S.useLegacyLights&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.alphaToCoverage&&o.enable(20),w.push(o.mask)}function _(w){let S=m[w.type],D;if(S){let B=Di[S];D=Tx.clone(B.uniforms)}else D=w.uniforms;return D}function L(w,S){let D;for(let B=0,C=u.length;B<C;B++){let V=u[B];if(V.cacheKey===S){D=V,++D.usedTimes;break}}return D===void 0&&(D=new lT(i,S,w,r),u.push(D)),D}function M(w){if(--w.usedTimes===0){let S=u.indexOf(w);u[S]=u[u.length-1],u.pop(),w.destroy()}}function R(w){l.remove(w)}function P(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:_,acquireProgram:L,releaseProgram:M,releaseShaderCache:R,programs:u,dispose:P}}function dT(){let i=new WeakMap;function e(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function t(r){i.delete(r)}function n(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function hT(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function S0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function M0(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(d,h,f,m,v,g){let p=i[e];return p===void 0?(p={id:d.id,object:d,geometry:h,material:f,groupOrder:m,renderOrder:d.renderOrder,z:v,group:g},i[e]=p):(p.id=d.id,p.object=d,p.geometry=h,p.material=f,p.groupOrder=m,p.renderOrder=d.renderOrder,p.z=v,p.group=g),e++,p}function o(d,h,f,m,v,g){let p=a(d,h,f,m,v,g);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):t.push(p)}function l(d,h,f,m,v,g){let p=a(d,h,f,m,v,g);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function c(d,h){t.length>1&&t.sort(d||hT),n.length>1&&n.sort(h||S0),s.length>1&&s.sort(h||S0)}function u(){for(let d=e,h=i.length;d<h;d++){let f=i[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:u,sort:c}}function fT(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new M0,i.set(n,[a])):s>=r.length?(a=new M0,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function pT(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new We};break;case"SpotLight":t={position:new U,direction:new U,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new We,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new We,groundColor:new We};break;case"RectAreaLight":t={color:new We,position:new U,halfWidth:new U,halfHeight:new U};break}return i[e.id]=t,t}}}function mT(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var gT=0;function vT(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function yT(i){let e=new pT,t=mT(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new U);let s=new U,r=new it,a=new it;function o(c,u){let d=0,h=0,f=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let m=0,v=0,g=0,p=0,x=0,y=0,_=0,L=0,M=0,R=0,P=0;c.sort(vT);let w=u===!0?Math.PI:1;for(let D=0,B=c.length;D<B;D++){let C=c[D],V=C.color,q=C.intensity,ne=C.distance,ee=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)d+=V.r*q*w,h+=V.g*q*w,f+=V.b*q*w;else if(C.isLightProbe){for(let K=0;K<9;K++)n.probe[K].addScaledVector(C.sh.coefficients[K],q);P++}else if(C.isDirectionalLight){let K=e.get(C);if(K.color.copy(C.color).multiplyScalar(C.intensity*w),C.castShadow){let re=C.shadow,oe=t.get(C);oe.shadowBias=re.bias,oe.shadowNormalBias=re.normalBias,oe.shadowRadius=re.radius,oe.shadowMapSize=re.mapSize,n.directionalShadow[m]=oe,n.directionalShadowMap[m]=ee,n.directionalShadowMatrix[m]=C.shadow.matrix,y++}n.directional[m]=K,m++}else if(C.isSpotLight){let K=e.get(C);K.position.setFromMatrixPosition(C.matrixWorld),K.color.copy(V).multiplyScalar(q*w),K.distance=ne,K.coneCos=Math.cos(C.angle),K.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),K.decay=C.decay,n.spot[g]=K;let re=C.shadow;if(C.map&&(n.spotLightMap[M]=C.map,M++,re.updateMatrices(C),C.castShadow&&R++),n.spotLightMatrix[g]=re.matrix,C.castShadow){let oe=t.get(C);oe.shadowBias=re.bias,oe.shadowNormalBias=re.normalBias,oe.shadowRadius=re.radius,oe.shadowMapSize=re.mapSize,n.spotShadow[g]=oe,n.spotShadowMap[g]=ee,L++}g++}else if(C.isRectAreaLight){let K=e.get(C);K.color.copy(V).multiplyScalar(q),K.halfWidth.set(C.width*.5,0,0),K.halfHeight.set(0,C.height*.5,0),n.rectArea[p]=K,p++}else if(C.isPointLight){let K=e.get(C);if(K.color.copy(C.color).multiplyScalar(C.intensity*w),K.distance=C.distance,K.decay=C.decay,C.castShadow){let re=C.shadow,oe=t.get(C);oe.shadowBias=re.bias,oe.shadowNormalBias=re.normalBias,oe.shadowRadius=re.radius,oe.shadowMapSize=re.mapSize,oe.shadowCameraNear=re.camera.near,oe.shadowCameraFar=re.camera.far,n.pointShadow[v]=oe,n.pointShadowMap[v]=ee,n.pointShadowMatrix[v]=C.shadow.matrix,_++}n.point[v]=K,v++}else if(C.isHemisphereLight){let K=e.get(C);K.skyColor.copy(C.color).multiplyScalar(q*w),K.groundColor.copy(C.groundColor).multiplyScalar(q*w),n.hemi[x]=K,x++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Fe.LTC_FLOAT_1,n.rectAreaLTC2=Fe.LTC_FLOAT_2):(n.rectAreaLTC1=Fe.LTC_HALF_1,n.rectAreaLTC2=Fe.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=h,n.ambient[2]=f;let S=n.hash;(S.directionalLength!==m||S.pointLength!==v||S.spotLength!==g||S.rectAreaLength!==p||S.hemiLength!==x||S.numDirectionalShadows!==y||S.numPointShadows!==_||S.numSpotShadows!==L||S.numSpotMaps!==M||S.numLightProbes!==P)&&(n.directional.length=m,n.spot.length=g,n.rectArea.length=p,n.point.length=v,n.hemi.length=x,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=L,n.spotShadowMap.length=L,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=L+M-R,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=P,S.directionalLength=m,S.pointLength=v,S.spotLength=g,S.rectAreaLength=p,S.hemiLength=x,S.numDirectionalShadows=y,S.numPointShadows=_,S.numSpotShadows=L,S.numSpotMaps=M,S.numLightProbes=P,n.version=gT++)}function l(c,u){let d=0,h=0,f=0,m=0,v=0,g=u.matrixWorldInverse;for(let p=0,x=c.length;p<x;p++){let y=c[p];if(y.isDirectionalLight){let _=n.directional[d];_.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(g),d++}else if(y.isSpotLight){let _=n.spot[f];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(g),_.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(g),f++}else if(y.isRectAreaLight){let _=n.rectArea[m];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(g),a.identity(),r.copy(y.matrixWorld),r.premultiply(g),a.extractRotation(r),_.halfWidth.set(y.width*.5,0,0),_.halfHeight.set(0,y.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),m++}else if(y.isPointLight){let _=n.point[h];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(g),h++}else if(y.isHemisphereLight){let _=n.hemi[v];_.direction.setFromMatrixPosition(y.matrixWorld),_.direction.transformDirection(g),v++}}}return{setup:o,setupView:l,state:n}}function w0(i){let e=new yT(i),t=[],n=[];function s(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function a(u){n.push(u)}function o(u){e.setup(t,u)}function l(u){e.setupView(t,u)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function xT(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new w0(i),e.set(s,[o])):r>=a.length?(o=new w0(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var jo=class extends Tn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ko=class extends Tn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},_T=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,bT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function ST(i,e,t){let n=new Tr,s=new ve,r=new ve,a=new Nt,o=new jo({depthPacking:fx}),l=new Ko,c={},u=t.maxTextureSize,d={[vs]:Xn,[Xn]:vs,[Wi]:Wi},h=new di({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ve},radius:{value:4}},vertexShader:_T,fragmentShader:bT}),f=h.clone();f.defines.HORIZONTAL_PASS=1;let m=new pt;m.setAttribute("position",new Et(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new tn(m,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zp;let p=this.type;this.render=function(M,R,P){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||M.length===0)return;let w=i.getRenderTarget(),S=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),B=i.state;B.setBlending(ps),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let C=p!==Hi&&this.type===Hi,V=p===Hi&&this.type!==Hi;for(let q=0,ne=M.length;q<ne;q++){let ee=M[q],K=ee.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;s.copy(K.mapSize);let re=K.getFrameExtents();if(s.multiply(re),r.copy(K.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/re.x),s.x=r.x*re.x,K.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/re.y),s.y=r.y*re.y,K.mapSize.y=r.y)),K.map===null||C===!0||V===!0){let Se=this.type!==Hi?{minFilter:En,magFilter:En}:{};K.map!==null&&K.map.dispose(),K.map=new ci(s.x,s.y,Se),K.map.texture.name=ee.name+".shadowMap",K.camera.updateProjectionMatrix()}i.setRenderTarget(K.map),i.clear();let oe=K.getViewportCount();for(let Se=0;Se<oe;Se++){let Re=K.getViewport(Se);a.set(r.x*Re.x,r.y*Re.y,r.x*Re.z,r.y*Re.w),B.viewport(a),K.updateMatrices(ee,Se),n=K.getFrustum(),_(R,P,K.camera,ee,this.type)}K.isPointLightShadow!==!0&&this.type===Hi&&x(K,P),K.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(w,S,D)};function x(M,R){let P=e.update(v);h.defines.VSM_SAMPLES!==M.blurSamples&&(h.defines.VSM_SAMPLES=M.blurSamples,f.defines.VSM_SAMPLES=M.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new ci(s.x,s.y)),h.uniforms.shadow_pass.value=M.map.texture,h.uniforms.resolution.value=M.mapSize,h.uniforms.radius.value=M.radius,i.setRenderTarget(M.mapPass),i.clear(),i.renderBufferDirect(R,null,P,h,v,null),f.uniforms.shadow_pass.value=M.mapPass.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,i.setRenderTarget(M.map),i.clear(),i.renderBufferDirect(R,null,P,f,v,null)}function y(M,R,P,w){let S=null,D=P.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(D!==void 0)S=D;else if(S=P.isPointLight===!0?l:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){let B=S.uuid,C=R.uuid,V=c[B];V===void 0&&(V={},c[B]=V);let q=V[C];q===void 0&&(q=S.clone(),V[C]=q,R.addEventListener("dispose",L)),S=q}if(S.visible=R.visible,S.wireframe=R.wireframe,w===Hi?S.side=R.shadowSide!==null?R.shadowSide:R.side:S.side=R.shadowSide!==null?R.shadowSide:d[R.side],S.alphaMap=R.alphaMap,S.alphaTest=R.alphaTest,S.map=R.map,S.clipShadows=R.clipShadows,S.clippingPlanes=R.clippingPlanes,S.clipIntersection=R.clipIntersection,S.displacementMap=R.displacementMap,S.displacementScale=R.displacementScale,S.displacementBias=R.displacementBias,S.wireframeLinewidth=R.wireframeLinewidth,S.linewidth=R.linewidth,P.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let B=i.properties.get(S);B.light=P}return S}function _(M,R,P,w,S){if(M.visible===!1)return;if(M.layers.test(R.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&S===Hi)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,M.matrixWorld);let C=e.update(M),V=M.material;if(Array.isArray(V)){let q=C.groups;for(let ne=0,ee=q.length;ne<ee;ne++){let K=q[ne],re=V[K.materialIndex];if(re&&re.visible){let oe=y(M,re,w,S);M.onBeforeShadow(i,M,R,P,C,oe,K),i.renderBufferDirect(P,null,C,oe,M,K),M.onAfterShadow(i,M,R,P,C,oe,K)}}}else if(V.visible){let q=y(M,V,w,S);M.onBeforeShadow(i,M,R,P,C,q,null),i.renderBufferDirect(P,null,C,q,M,null),M.onAfterShadow(i,M,R,P,C,q,null)}}let B=M.children;for(let C=0,V=B.length;C<V;C++)_(B[C],R,P,w,S)}function L(M){M.target.removeEventListener("dispose",L);for(let P in c){let w=c[P],S=M.target.uuid;S in w&&(w[S].dispose(),delete w[S])}}}function MT(i){function e(){let G=!1,ge=new Nt,le=null,Ie=new Nt(0,0,0,0);return{setMask:function(Ne){le!==Ne&&!G&&(i.colorMask(Ne,Ne,Ne,Ne),le=Ne)},setLocked:function(Ne){G=Ne},setClear:function(Ne,ot,_t,At,nn){nn===!0&&(Ne*=At,ot*=At,_t*=At),ge.set(Ne,ot,_t,At),Ie.equals(ge)===!1&&(i.clearColor(Ne,ot,_t,At),Ie.copy(ge))},reset:function(){G=!1,le=null,Ie.set(-1,0,0,0)}}}function t(){let G=!1,ge=null,le=null,Ie=null;return{setTest:function(Ne){Ne?pe(i.DEPTH_TEST):ce(i.DEPTH_TEST)},setMask:function(Ne){ge!==Ne&&!G&&(i.depthMask(Ne),ge=Ne)},setFunc:function(Ne){if(le!==Ne){switch(Ne){case Oy:i.depthFunc(i.NEVER);break;case ky:i.depthFunc(i.ALWAYS);break;case By:i.depthFunc(i.LESS);break;case Lo:i.depthFunc(i.LEQUAL);break;case zy:i.depthFunc(i.EQUAL);break;case Vy:i.depthFunc(i.GEQUAL);break;case Hy:i.depthFunc(i.GREATER);break;case Gy:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}le=Ne}},setLocked:function(Ne){G=Ne},setClear:function(Ne){Ie!==Ne&&(i.clearDepth(Ne),Ie=Ne)},reset:function(){G=!1,ge=null,le=null,Ie=null}}}function n(){let G=!1,ge=null,le=null,Ie=null,Ne=null,ot=null,_t=null,At=null,nn=null;return{setTest:function(xt){G||(xt?pe(i.STENCIL_TEST):ce(i.STENCIL_TEST))},setMask:function(xt){ge!==xt&&!G&&(i.stencilMask(xt),ge=xt)},setFunc:function(xt,In,Pt){(le!==xt||Ie!==In||Ne!==Pt)&&(i.stencilFunc(xt,In,Pt),le=xt,Ie=In,Ne=Pt)},setOp:function(xt,In,Pt){(ot!==xt||_t!==In||At!==Pt)&&(i.stencilOp(xt,In,Pt),ot=xt,_t=In,At=Pt)},setLocked:function(xt){G=xt},setClear:function(xt){nn!==xt&&(i.clearStencil(xt),nn=xt)},reset:function(){G=!1,ge=null,le=null,Ie=null,Ne=null,ot=null,_t=null,At=null,nn=null}}}let s=new e,r=new t,a=new n,o=new WeakMap,l=new WeakMap,c={},u={},d=new WeakMap,h=[],f=null,m=!1,v=null,g=null,p=null,x=null,y=null,_=null,L=null,M=new We(0,0,0),R=0,P=!1,w=null,S=null,D=null,B=null,C=null,V=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,ne=0,ee=i.getParameter(i.VERSION);ee.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(ee)[1]),q=ne>=1):ee.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),q=ne>=2);let K=null,re={},oe=i.getParameter(i.SCISSOR_BOX),Se=i.getParameter(i.VIEWPORT),Re=new Nt().fromArray(oe),be=new Nt().fromArray(Se);function te(G,ge,le,Ie){let Ne=new Uint8Array(4),ot=i.createTexture();i.bindTexture(G,ot),i.texParameteri(G,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(G,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let _t=0;_t<le;_t++)G===i.TEXTURE_3D||G===i.TEXTURE_2D_ARRAY?i.texImage3D(ge,0,i.RGBA,1,1,Ie,0,i.RGBA,i.UNSIGNED_BYTE,Ne):i.texImage2D(ge+_t,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ne);return ot}let ue={};ue[i.TEXTURE_2D]=te(i.TEXTURE_2D,i.TEXTURE_2D,1),ue[i.TEXTURE_CUBE_MAP]=te(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ue[i.TEXTURE_2D_ARRAY]=te(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ue[i.TEXTURE_3D]=te(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),a.setClear(0),pe(i.DEPTH_TEST),r.setFunc(Lo),Ae(!1),fe(Kh),pe(i.CULL_FACE),me(ps);function pe(G){c[G]!==!0&&(i.enable(G),c[G]=!0)}function ce(G){c[G]!==!1&&(i.disable(G),c[G]=!1)}function Ve(G,ge){return u[G]!==ge?(i.bindFramebuffer(G,ge),u[G]=ge,G===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ge),G===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ge),!0):!1}function Je(G,ge){let le=h,Ie=!1;if(G){le=d.get(ge),le===void 0&&(le=[],d.set(ge,le));let Ne=G.textures;if(le.length!==Ne.length||le[0]!==i.COLOR_ATTACHMENT0){for(let ot=0,_t=Ne.length;ot<_t;ot++)le[ot]=i.COLOR_ATTACHMENT0+ot;le.length=Ne.length,Ie=!0}}else le[0]!==i.BACK&&(le[0]=i.BACK,Ie=!0);Ie&&i.drawBuffers(le)}function H(G){return f!==G?(i.useProgram(G),f=G,!0):!1}let et={[ks]:i.FUNC_ADD,[_y]:i.FUNC_SUBTRACT,[by]:i.FUNC_REVERSE_SUBTRACT};et[Sy]=i.MIN,et[My]=i.MAX;let ae={[wy]:i.ZERO,[Ey]:i.ONE,[Ay]:i.SRC_COLOR,[Yc]:i.SRC_ALPHA,[Ly]:i.SRC_ALPHA_SATURATE,[Py]:i.DST_COLOR,[Ry]:i.DST_ALPHA,[Ty]:i.ONE_MINUS_SRC_COLOR,[Zc]:i.ONE_MINUS_SRC_ALPHA,[Iy]:i.ONE_MINUS_DST_COLOR,[Cy]:i.ONE_MINUS_DST_ALPHA,[Ny]:i.CONSTANT_COLOR,[Dy]:i.ONE_MINUS_CONSTANT_COLOR,[Uy]:i.CONSTANT_ALPHA,[Fy]:i.ONE_MINUS_CONSTANT_ALPHA};function me(G,ge,le,Ie,Ne,ot,_t,At,nn,xt){if(G===ps){m===!0&&(ce(i.BLEND),m=!1);return}if(m===!1&&(pe(i.BLEND),m=!0),G!==xy){if(G!==v||xt!==P){if((g!==ks||y!==ks)&&(i.blendEquation(i.FUNC_ADD),g=ks,y=ks),xt)switch(G){case br:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Qh:i.blendFunc(i.ONE,i.ONE);break;case ef:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case tf:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case br:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Qh:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case ef:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case tf:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}p=null,x=null,_=null,L=null,M.set(0,0,0),R=0,v=G,P=xt}return}Ne=Ne||ge,ot=ot||le,_t=_t||Ie,(ge!==g||Ne!==y)&&(i.blendEquationSeparate(et[ge],et[Ne]),g=ge,y=Ne),(le!==p||Ie!==x||ot!==_||_t!==L)&&(i.blendFuncSeparate(ae[le],ae[Ie],ae[ot],ae[_t]),p=le,x=Ie,_=ot,L=_t),(At.equals(M)===!1||nn!==R)&&(i.blendColor(At.r,At.g,At.b,nn),M.copy(At),R=nn),v=G,P=!1}function se(G,ge){G.side===Wi?ce(i.CULL_FACE):pe(i.CULL_FACE);let le=G.side===Xn;ge&&(le=!le),Ae(le),G.blending===br&&G.transparent===!1?me(ps):me(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),r.setFunc(G.depthFunc),r.setTest(G.depthTest),r.setMask(G.depthWrite),s.setMask(G.colorWrite);let Ie=G.stencilWrite;a.setTest(Ie),Ie&&(a.setMask(G.stencilWriteMask),a.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),a.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),qe(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?pe(i.SAMPLE_ALPHA_TO_COVERAGE):ce(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ae(G){w!==G&&(G?i.frontFace(i.CW):i.frontFace(i.CCW),w=G)}function fe(G){G!==gy?(pe(i.CULL_FACE),G!==S&&(G===Kh?i.cullFace(i.BACK):G===vy?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ce(i.CULL_FACE),S=G}function Ce(G){G!==D&&(q&&i.lineWidth(G),D=G)}function qe(G,ge,le){G?(pe(i.POLYGON_OFFSET_FILL),(B!==ge||C!==le)&&(i.polygonOffset(ge,le),B=ge,C=le)):ce(i.POLYGON_OFFSET_FILL)}function N(G){G?pe(i.SCISSOR_TEST):ce(i.SCISSOR_TEST)}function A(G){G===void 0&&(G=i.TEXTURE0+V-1),K!==G&&(i.activeTexture(G),K=G)}function k(G,ge,le){le===void 0&&(K===null?le=i.TEXTURE0+V-1:le=K);let Ie=re[le];Ie===void 0&&(Ie={type:void 0,texture:void 0},re[le]=Ie),(Ie.type!==G||Ie.texture!==ge)&&(K!==le&&(i.activeTexture(le),K=le),i.bindTexture(G,ge||ue[G]),Ie.type=G,Ie.texture=ge)}function O(){let G=re[K];G!==void 0&&G.type!==void 0&&(i.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function Z(){try{i.compressedTexImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function $(){try{i.compressedTexImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ie(){try{i.texSubImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ye(){try{i.texSubImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function xe(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function je(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function we(){try{i.texStorage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ke(){try{i.texStorage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function rt(){try{i.texImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function $e(){try{i.texImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ue(G){Re.equals(G)===!1&&(i.scissor(G.x,G.y,G.z,G.w),Re.copy(G))}function Qe(G){be.equals(G)===!1&&(i.viewport(G.x,G.y,G.z,G.w),be.copy(G))}function tt(G,ge){let le=l.get(ge);le===void 0&&(le=new WeakMap,l.set(ge,le));let Ie=le.get(G);Ie===void 0&&(Ie=i.getUniformBlockIndex(ge,G.name),le.set(G,Ie))}function Ct(G,ge){let Ie=l.get(ge).get(G);o.get(ge)!==Ie&&(i.uniformBlockBinding(ge,Ie,G.__bindingPointIndex),o.set(ge,Ie))}function at(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},K=null,re={},u={},d=new WeakMap,h=[],f=null,m=!1,v=null,g=null,p=null,x=null,y=null,_=null,L=null,M=new We(0,0,0),R=0,P=!1,w=null,S=null,D=null,B=null,C=null,Re.set(0,0,i.canvas.width,i.canvas.height),be.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),a.reset()}return{buffers:{color:s,depth:r,stencil:a},enable:pe,disable:ce,bindFramebuffer:Ve,drawBuffers:Je,useProgram:H,setBlending:me,setMaterial:se,setFlipSided:Ae,setCullFace:fe,setLineWidth:Ce,setPolygonOffset:qe,setScissorTest:N,activeTexture:A,bindTexture:k,unbindTexture:O,compressedTexImage2D:Z,compressedTexImage3D:$,texImage2D:rt,texImage3D:$e,updateUBOMapping:tt,uniformBlockBinding:Ct,texStorage2D:we,texStorage3D:ke,texSubImage2D:ie,texSubImage3D:ye,compressedTexSubImage2D:xe,compressedTexSubImage3D:je,scissor:Ue,viewport:Qe,reset:at}}function wT(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ve,u=new WeakMap,d,h=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(N,A){return f?new OffscreenCanvas(N,A):qo("canvas")}function v(N,A,k){let O=1,Z=qe(N);if((Z.width>k||Z.height>k)&&(O=k/Math.max(Z.width,Z.height)),O<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){let $=Math.floor(O*Z.width),ie=Math.floor(O*Z.height);d===void 0&&(d=m($,ie));let ye=A?m($,ie):d;return ye.width=$,ye.height=ie,ye.getContext("2d").drawImage(N,0,0,$,ie),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+$+"x"+ie+")."),ye}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),N;return N}function g(N){return N.generateMipmaps&&N.minFilter!==En&&N.minFilter!==cn}function p(N){i.generateMipmap(N)}function x(N,A,k,O,Z=!1){if(N!==null){if(i[N]!==void 0)return i[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let $=A;if(A===i.RED&&(k===i.FLOAT&&($=i.R32F),k===i.HALF_FLOAT&&($=i.R16F),k===i.UNSIGNED_BYTE&&($=i.R8)),A===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&($=i.R8UI),k===i.UNSIGNED_SHORT&&($=i.R16UI),k===i.UNSIGNED_INT&&($=i.R32UI),k===i.BYTE&&($=i.R8I),k===i.SHORT&&($=i.R16I),k===i.INT&&($=i.R32I)),A===i.RG&&(k===i.FLOAT&&($=i.RG32F),k===i.HALF_FLOAT&&($=i.RG16F),k===i.UNSIGNED_BYTE&&($=i.RG8)),A===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&($=i.RG8UI),k===i.UNSIGNED_SHORT&&($=i.RG16UI),k===i.UNSIGNED_INT&&($=i.RG32UI),k===i.BYTE&&($=i.RG8I),k===i.SHORT&&($=i.RG16I),k===i.INT&&($=i.RG32I)),A===i.RGB&&k===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),A===i.RGBA){let ie=Z?zo:Lt.getTransfer(O);k===i.FLOAT&&($=i.RGBA32F),k===i.HALF_FLOAT&&($=i.RGBA16F),k===i.UNSIGNED_BYTE&&($=ie===zt?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function y(N,A){return g(N)===!0||N.isFramebufferTexture&&N.minFilter!==En&&N.minFilter!==cn?Math.log2(Math.max(A.width,A.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?A.mipmaps.length:1}function _(N){let A=N.target;A.removeEventListener("dispose",_),M(A),A.isVideoTexture&&u.delete(A)}function L(N){let A=N.target;A.removeEventListener("dispose",L),P(A)}function M(N){let A=n.get(N);if(A.__webglInit===void 0)return;let k=N.source,O=h.get(k);if(O){let Z=O[A.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&R(N),Object.keys(O).length===0&&h.delete(k)}n.remove(N)}function R(N){let A=n.get(N);i.deleteTexture(A.__webglTexture);let k=N.source,O=h.get(k);delete O[A.__cacheKey],a.memory.textures--}function P(N){let A=n.get(N);if(N.depthTexture&&N.depthTexture.dispose(),N.isWebGLCubeRenderTarget)for(let O=0;O<6;O++){if(Array.isArray(A.__webglFramebuffer[O]))for(let Z=0;Z<A.__webglFramebuffer[O].length;Z++)i.deleteFramebuffer(A.__webglFramebuffer[O][Z]);else i.deleteFramebuffer(A.__webglFramebuffer[O]);A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer[O])}else{if(Array.isArray(A.__webglFramebuffer))for(let O=0;O<A.__webglFramebuffer.length;O++)i.deleteFramebuffer(A.__webglFramebuffer[O]);else i.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&i.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let O=0;O<A.__webglColorRenderbuffer.length;O++)A.__webglColorRenderbuffer[O]&&i.deleteRenderbuffer(A.__webglColorRenderbuffer[O]);A.__webglDepthRenderbuffer&&i.deleteRenderbuffer(A.__webglDepthRenderbuffer)}let k=N.textures;for(let O=0,Z=k.length;O<Z;O++){let $=n.get(k[O]);$.__webglTexture&&(i.deleteTexture($.__webglTexture),a.memory.textures--),n.remove(k[O])}n.remove(N)}let w=0;function S(){w=0}function D(){let N=w;return N>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+s.maxTextures),w+=1,N}function B(N){let A=[];return A.push(N.wrapS),A.push(N.wrapT),A.push(N.wrapR||0),A.push(N.magFilter),A.push(N.minFilter),A.push(N.anisotropy),A.push(N.internalFormat),A.push(N.format),A.push(N.type),A.push(N.generateMipmaps),A.push(N.premultiplyAlpha),A.push(N.flipY),A.push(N.unpackAlignment),A.push(N.colorSpace),A.join()}function C(N,A){let k=n.get(N);if(N.isVideoTexture&&fe(N),N.isRenderTargetTexture===!1&&N.version>0&&k.__version!==N.version){let O=N.image;if(O===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(O.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Re(k,N,A);return}}t.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+A)}function V(N,A){let k=n.get(N);if(N.version>0&&k.__version!==N.version){Re(k,N,A);return}t.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+A)}function q(N,A){let k=n.get(N);if(N.version>0&&k.__version!==N.version){Re(k,N,A);return}t.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+A)}function ne(N,A){let k=n.get(N);if(N.version>0&&k.__version!==N.version){be(k,N,A);return}t.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+A)}let ee={[Uo]:i.REPEAT,[bi]:i.CLAMP_TO_EDGE,[Fo]:i.MIRRORED_REPEAT},K={[En]:i.NEAREST,[Jp]:i.NEAREST_MIPMAP_NEAREST,[Pa]:i.NEAREST_MIPMAP_LINEAR,[cn]:i.LINEAR,[To]:i.LINEAR_MIPMAP_NEAREST,[qi]:i.LINEAR_MIPMAP_LINEAR},re={[mx]:i.NEVER,[bx]:i.ALWAYS,[gx]:i.LESS,[am]:i.LEQUAL,[vx]:i.EQUAL,[_x]:i.GEQUAL,[yx]:i.GREATER,[xx]:i.NOTEQUAL};function oe(N,A){if(A.type===Si&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===cn||A.magFilter===To||A.magFilter===Pa||A.magFilter===qi||A.minFilter===cn||A.minFilter===To||A.minFilter===Pa||A.minFilter===qi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(N,i.TEXTURE_WRAP_S,ee[A.wrapS]),i.texParameteri(N,i.TEXTURE_WRAP_T,ee[A.wrapT]),(N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY)&&i.texParameteri(N,i.TEXTURE_WRAP_R,ee[A.wrapR]),i.texParameteri(N,i.TEXTURE_MAG_FILTER,K[A.magFilter]),i.texParameteri(N,i.TEXTURE_MIN_FILTER,K[A.minFilter]),A.compareFunction&&(i.texParameteri(N,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(N,i.TEXTURE_COMPARE_FUNC,re[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===En||A.minFilter!==Pa&&A.minFilter!==qi||A.type===Si&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){let k=e.get("EXT_texture_filter_anisotropic");i.texParameterf(N,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function Se(N,A){let k=!1;N.__webglInit===void 0&&(N.__webglInit=!0,A.addEventListener("dispose",_));let O=A.source,Z=h.get(O);Z===void 0&&(Z={},h.set(O,Z));let $=B(A);if($!==N.__cacheKey){Z[$]===void 0&&(Z[$]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,k=!0),Z[$].usedTimes++;let ie=Z[N.__cacheKey];ie!==void 0&&(Z[N.__cacheKey].usedTimes--,ie.usedTimes===0&&R(A)),N.__cacheKey=$,N.__webglTexture=Z[$].texture}return k}function Re(N,A,k){let O=i.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(O=i.TEXTURE_2D_ARRAY),A.isData3DTexture&&(O=i.TEXTURE_3D);let Z=Se(N,A),$=A.source;t.bindTexture(O,N.__webglTexture,i.TEXTURE0+k);let ie=n.get($);if($.version!==ie.__version||Z===!0){t.activeTexture(i.TEXTURE0+k);let ye=Lt.getPrimaries(Lt.workingColorSpace),xe=A.colorSpace===cs?null:Lt.getPrimaries(A.colorSpace),je=A.colorSpace===cs||ye===xe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,je);let we=v(A.image,!1,s.maxTextureSize);we=Ce(A,we);let ke=r.convert(A.format,A.colorSpace),rt=r.convert(A.type),$e=x(A.internalFormat,ke,rt,A.colorSpace,A.isVideoTexture);oe(O,A);let Ue,Qe=A.mipmaps,tt=A.isVideoTexture!==!0,Ct=ie.__version===void 0||Z===!0,at=$.dataReady,G=y(A,we);if(A.isDepthTexture)$e=i.DEPTH_COMPONENT16,A.type===Si?$e=i.DEPTH_COMPONENT32F:A.type===wr?$e=i.DEPTH_COMPONENT24:A.type===Za&&($e=i.DEPTH24_STENCIL8),Ct&&(tt?t.texStorage2D(i.TEXTURE_2D,1,$e,we.width,we.height):t.texImage2D(i.TEXTURE_2D,0,$e,we.width,we.height,0,ke,rt,null));else if(A.isDataTexture)if(Qe.length>0){tt&&Ct&&t.texStorage2D(i.TEXTURE_2D,G,$e,Qe[0].width,Qe[0].height);for(let ge=0,le=Qe.length;ge<le;ge++)Ue=Qe[ge],tt?at&&t.texSubImage2D(i.TEXTURE_2D,ge,0,0,Ue.width,Ue.height,ke,rt,Ue.data):t.texImage2D(i.TEXTURE_2D,ge,$e,Ue.width,Ue.height,0,ke,rt,Ue.data);A.generateMipmaps=!1}else tt?(Ct&&t.texStorage2D(i.TEXTURE_2D,G,$e,we.width,we.height),at&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,we.width,we.height,ke,rt,we.data)):t.texImage2D(i.TEXTURE_2D,0,$e,we.width,we.height,0,ke,rt,we.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){tt&&Ct&&t.texStorage3D(i.TEXTURE_2D_ARRAY,G,$e,Qe[0].width,Qe[0].height,we.depth);for(let ge=0,le=Qe.length;ge<le;ge++)Ue=Qe[ge],A.format!==oi?ke!==null?tt?at&&t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ge,0,0,0,Ue.width,Ue.height,we.depth,ke,Ue.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ge,$e,Ue.width,Ue.height,we.depth,0,Ue.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):tt?at&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ge,0,0,0,Ue.width,Ue.height,we.depth,ke,rt,Ue.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ge,$e,Ue.width,Ue.height,we.depth,0,ke,rt,Ue.data)}else{tt&&Ct&&t.texStorage2D(i.TEXTURE_2D,G,$e,Qe[0].width,Qe[0].height);for(let ge=0,le=Qe.length;ge<le;ge++)Ue=Qe[ge],A.format!==oi?ke!==null?tt?at&&t.compressedTexSubImage2D(i.TEXTURE_2D,ge,0,0,Ue.width,Ue.height,ke,Ue.data):t.compressedTexImage2D(i.TEXTURE_2D,ge,$e,Ue.width,Ue.height,0,Ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):tt?at&&t.texSubImage2D(i.TEXTURE_2D,ge,0,0,Ue.width,Ue.height,ke,rt,Ue.data):t.texImage2D(i.TEXTURE_2D,ge,$e,Ue.width,Ue.height,0,ke,rt,Ue.data)}else if(A.isDataArrayTexture)tt?(Ct&&t.texStorage3D(i.TEXTURE_2D_ARRAY,G,$e,we.width,we.height,we.depth),at&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,we.width,we.height,we.depth,ke,rt,we.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,$e,we.width,we.height,we.depth,0,ke,rt,we.data);else if(A.isData3DTexture)tt?(Ct&&t.texStorage3D(i.TEXTURE_3D,G,$e,we.width,we.height,we.depth),at&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,we.width,we.height,we.depth,ke,rt,we.data)):t.texImage3D(i.TEXTURE_3D,0,$e,we.width,we.height,we.depth,0,ke,rt,we.data);else if(A.isFramebufferTexture){if(Ct)if(tt)t.texStorage2D(i.TEXTURE_2D,G,$e,we.width,we.height);else{let ge=we.width,le=we.height;for(let Ie=0;Ie<G;Ie++)t.texImage2D(i.TEXTURE_2D,Ie,$e,ge,le,0,ke,rt,null),ge>>=1,le>>=1}}else if(Qe.length>0){if(tt&&Ct){let ge=qe(Qe[0]);t.texStorage2D(i.TEXTURE_2D,G,$e,ge.width,ge.height)}for(let ge=0,le=Qe.length;ge<le;ge++)Ue=Qe[ge],tt?at&&t.texSubImage2D(i.TEXTURE_2D,ge,0,0,ke,rt,Ue):t.texImage2D(i.TEXTURE_2D,ge,$e,ke,rt,Ue);A.generateMipmaps=!1}else if(tt){if(Ct){let ge=qe(we);t.texStorage2D(i.TEXTURE_2D,G,$e,ge.width,ge.height)}at&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ke,rt,we)}else t.texImage2D(i.TEXTURE_2D,0,$e,ke,rt,we);g(A)&&p(O),ie.__version=$.version,A.onUpdate&&A.onUpdate(A)}N.__version=A.version}function be(N,A,k){if(A.image.length!==6)return;let O=Se(N,A),Z=A.source;t.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+k);let $=n.get(Z);if(Z.version!==$.__version||O===!0){t.activeTexture(i.TEXTURE0+k);let ie=Lt.getPrimaries(Lt.workingColorSpace),ye=A.colorSpace===cs?null:Lt.getPrimaries(A.colorSpace),xe=A.colorSpace===cs||ie===ye?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);let je=A.isCompressedTexture||A.image[0].isCompressedTexture,we=A.image[0]&&A.image[0].isDataTexture,ke=[];for(let le=0;le<6;le++)!je&&!we?ke[le]=v(A.image[le],!0,s.maxCubemapSize):ke[le]=we?A.image[le].image:A.image[le],ke[le]=Ce(A,ke[le]);let rt=ke[0],$e=r.convert(A.format,A.colorSpace),Ue=r.convert(A.type),Qe=x(A.internalFormat,$e,Ue,A.colorSpace),tt=A.isVideoTexture!==!0,Ct=$.__version===void 0||O===!0,at=Z.dataReady,G=y(A,rt);oe(i.TEXTURE_CUBE_MAP,A);let ge;if(je){tt&&Ct&&t.texStorage2D(i.TEXTURE_CUBE_MAP,G,Qe,rt.width,rt.height);for(let le=0;le<6;le++){ge=ke[le].mipmaps;for(let Ie=0;Ie<ge.length;Ie++){let Ne=ge[Ie];A.format!==oi?$e!==null?tt?at&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ie,0,0,Ne.width,Ne.height,$e,Ne.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ie,Qe,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):tt?at&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ie,0,0,Ne.width,Ne.height,$e,Ue,Ne.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ie,Qe,Ne.width,Ne.height,0,$e,Ue,Ne.data)}}}else{if(ge=A.mipmaps,tt&&Ct){ge.length>0&&G++;let le=qe(ke[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,G,Qe,le.width,le.height)}for(let le=0;le<6;le++)if(we){tt?at&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,ke[le].width,ke[le].height,$e,Ue,ke[le].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,Qe,ke[le].width,ke[le].height,0,$e,Ue,ke[le].data);for(let Ie=0;Ie<ge.length;Ie++){let ot=ge[Ie].image[le].image;tt?at&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ie+1,0,0,ot.width,ot.height,$e,Ue,ot.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ie+1,Qe,ot.width,ot.height,0,$e,Ue,ot.data)}}else{tt?at&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,$e,Ue,ke[le]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,Qe,$e,Ue,ke[le]);for(let Ie=0;Ie<ge.length;Ie++){let Ne=ge[Ie];tt?at&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ie+1,0,0,$e,Ue,Ne.image[le]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ie+1,Qe,$e,Ue,Ne.image[le])}}}g(A)&&p(i.TEXTURE_CUBE_MAP),$.__version=Z.version,A.onUpdate&&A.onUpdate(A)}N.__version=A.version}function te(N,A,k,O,Z,$){let ie=r.convert(k.format,k.colorSpace),ye=r.convert(k.type),xe=x(k.internalFormat,ie,ye,k.colorSpace);if(!n.get(A).__hasExternalTextures){let we=Math.max(1,A.width>>$),ke=Math.max(1,A.height>>$);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?t.texImage3D(Z,$,xe,we,ke,A.depth,0,ie,ye,null):t.texImage2D(Z,$,xe,we,ke,0,ie,ye,null)}t.bindFramebuffer(i.FRAMEBUFFER,N),Ae(A)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,O,Z,n.get(k).__webglTexture,0,se(A)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,O,Z,n.get(k).__webglTexture,$),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ue(N,A,k){if(i.bindRenderbuffer(i.RENDERBUFFER,N),A.depthBuffer&&!A.stencilBuffer){let O=i.DEPTH_COMPONENT24;if(k||Ae(A)){let Z=A.depthTexture;Z&&Z.isDepthTexture&&(Z.type===Si?O=i.DEPTH_COMPONENT32F:Z.type===wr&&(O=i.DEPTH_COMPONENT24));let $=se(A);Ae(A)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,$,O,A.width,A.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,$,O,A.width,A.height)}else i.renderbufferStorage(i.RENDERBUFFER,O,A.width,A.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,N)}else if(A.depthBuffer&&A.stencilBuffer){let O=se(A);k&&Ae(A)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,O,i.DEPTH24_STENCIL8,A.width,A.height):Ae(A)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,O,i.DEPTH24_STENCIL8,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,N)}else{let O=A.textures;for(let Z=0;Z<O.length;Z++){let $=O[Z],ie=r.convert($.format,$.colorSpace),ye=r.convert($.type),xe=x($.internalFormat,ie,ye,$.colorSpace),je=se(A);k&&Ae(A)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,je,xe,A.width,A.height):Ae(A)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,je,xe,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,xe,A.width,A.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function pe(N,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,N),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),C(A.depthTexture,0);let O=n.get(A.depthTexture).__webglTexture,Z=se(A);if(A.depthTexture.format===Sr)Ae(A)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,O,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,O,0);else if(A.depthTexture.format===Fa)Ae(A)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,O,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,O,0);else throw new Error("Unknown depthTexture format")}function ce(N){let A=n.get(N),k=N.isWebGLCubeRenderTarget===!0;if(N.depthTexture&&!A.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");pe(A.__webglFramebuffer,N)}else if(k){A.__webglDepthbuffer=[];for(let O=0;O<6;O++)t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[O]),A.__webglDepthbuffer[O]=i.createRenderbuffer(),ue(A.__webglDepthbuffer[O],N,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=i.createRenderbuffer(),ue(A.__webglDepthbuffer,N,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ve(N,A,k){let O=n.get(N);A!==void 0&&te(O.__webglFramebuffer,N,N.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&ce(N)}function Je(N){let A=N.texture,k=n.get(N),O=n.get(A);N.addEventListener("dispose",L);let Z=N.textures,$=N.isWebGLCubeRenderTarget===!0,ie=Z.length>1;if(ie||(O.__webglTexture===void 0&&(O.__webglTexture=i.createTexture()),O.__version=A.version,a.memory.textures++),$){k.__webglFramebuffer=[];for(let ye=0;ye<6;ye++)if(A.mipmaps&&A.mipmaps.length>0){k.__webglFramebuffer[ye]=[];for(let xe=0;xe<A.mipmaps.length;xe++)k.__webglFramebuffer[ye][xe]=i.createFramebuffer()}else k.__webglFramebuffer[ye]=i.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){k.__webglFramebuffer=[];for(let ye=0;ye<A.mipmaps.length;ye++)k.__webglFramebuffer[ye]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(ie)for(let ye=0,xe=Z.length;ye<xe;ye++){let je=n.get(Z[ye]);je.__webglTexture===void 0&&(je.__webglTexture=i.createTexture(),a.memory.textures++)}if(N.samples>0&&Ae(N)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let ye=0;ye<Z.length;ye++){let xe=Z[ye];k.__webglColorRenderbuffer[ye]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[ye]);let je=r.convert(xe.format,xe.colorSpace),we=r.convert(xe.type),ke=x(xe.internalFormat,je,we,xe.colorSpace,N.isXRRenderTarget===!0),rt=se(N);i.renderbufferStorageMultisample(i.RENDERBUFFER,rt,ke,N.width,N.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.RENDERBUFFER,k.__webglColorRenderbuffer[ye])}i.bindRenderbuffer(i.RENDERBUFFER,null),N.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),ue(k.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if($){t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture),oe(i.TEXTURE_CUBE_MAP,A);for(let ye=0;ye<6;ye++)if(A.mipmaps&&A.mipmaps.length>0)for(let xe=0;xe<A.mipmaps.length;xe++)te(k.__webglFramebuffer[ye][xe],N,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,xe);else te(k.__webglFramebuffer[ye],N,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0);g(A)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ie){for(let ye=0,xe=Z.length;ye<xe;ye++){let je=Z[ye],we=n.get(je);t.bindTexture(i.TEXTURE_2D,we.__webglTexture),oe(i.TEXTURE_2D,je),te(k.__webglFramebuffer,N,je,i.COLOR_ATTACHMENT0+ye,i.TEXTURE_2D,0),g(je)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let ye=i.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(ye=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ye,O.__webglTexture),oe(ye,A),A.mipmaps&&A.mipmaps.length>0)for(let xe=0;xe<A.mipmaps.length;xe++)te(k.__webglFramebuffer[xe],N,A,i.COLOR_ATTACHMENT0,ye,xe);else te(k.__webglFramebuffer,N,A,i.COLOR_ATTACHMENT0,ye,0);g(A)&&p(ye),t.unbindTexture()}N.depthBuffer&&ce(N)}function H(N){let A=N.textures;for(let k=0,O=A.length;k<O;k++){let Z=A[k];if(g(Z)){let $=N.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,ie=n.get(Z).__webglTexture;t.bindTexture($,ie),p($),t.unbindTexture()}}}let et=[],ae=[];function me(N){if(N.samples>0){if(Ae(N)===!1){let A=N.textures,k=N.width,O=N.height,Z=i.COLOR_BUFFER_BIT,$=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ie=n.get(N),ye=A.length>1;if(ye)for(let xe=0;xe<A.length;xe++)t.bindFramebuffer(i.FRAMEBUFFER,ie.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ie.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ie.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ie.__webglFramebuffer);for(let xe=0;xe<A.length;xe++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),ye){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ie.__webglColorRenderbuffer[xe]);let je=n.get(A[xe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,je,0)}i.blitFramebuffer(0,0,k,O,0,0,k,O,Z,i.NEAREST),l===!0&&(et.length=0,ae.length=0,et.push(i.COLOR_ATTACHMENT0+xe),N.depthBuffer&&N.resolveDepthBuffer===!1&&(et.push($),ae.push($),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ae)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,et))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ye)for(let xe=0;xe<A.length;xe++){t.bindFramebuffer(i.FRAMEBUFFER,ie.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,ie.__webglColorRenderbuffer[xe]);let je=n.get(A[xe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ie.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.TEXTURE_2D,je,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ie.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&l){let A=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[A])}}}function se(N){return Math.min(s.maxSamples,N.samples)}function Ae(N){let A=n.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function fe(N){let A=a.render.frame;u.get(N)!==A&&(u.set(N,A),N.update())}function Ce(N,A){let k=N.colorSpace,O=N.format,Z=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||k!==Ss&&k!==cs&&(Lt.getTransfer(k)===zt?(O!==oi||Z!==xs)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),A}function qe(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(c.width=N.naturalWidth||N.width,c.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(c.width=N.displayWidth,c.height=N.displayHeight):(c.width=N.width,c.height=N.height),c}this.allocateTextureUnit=D,this.resetTextureUnits=S,this.setTexture2D=C,this.setTexture2DArray=V,this.setTexture3D=q,this.setTextureCube=ne,this.rebindTextures=Ve,this.setupRenderTarget=Je,this.updateRenderTargetMipmap=H,this.updateMultisampleRenderTarget=me,this.setupDepthRenderbuffer=ce,this.setupFrameBufferTexture=te,this.useMultisampledRTT=Ae}function Dx(i,e){function t(n,s=cs){let r,a=Lt.getTransfer(s);if(n===xs)return i.UNSIGNED_BYTE;if(n===Qp)return i.UNSIGNED_SHORT_4_4_4_4;if(n===em)return i.UNSIGNED_SHORT_5_5_5_1;if(n===nx)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ex)return i.BYTE;if(n===tx)return i.SHORT;if(n===jp)return i.UNSIGNED_SHORT;if(n===Kp)return i.INT;if(n===wr)return i.UNSIGNED_INT;if(n===Si)return i.FLOAT;if(n===bl)return i.HALF_FLOAT;if(n===ix)return i.ALPHA;if(n===sx)return i.RGB;if(n===oi)return i.RGBA;if(n===rx)return i.LUMINANCE;if(n===ax)return i.LUMINANCE_ALPHA;if(n===Sr)return i.DEPTH_COMPONENT;if(n===Fa)return i.DEPTH_STENCIL;if(n===tm)return i.RED;if(n===nm)return i.RED_INTEGER;if(n===ox)return i.RG;if(n===im)return i.RG_INTEGER;if(n===sm)return i.RGBA_INTEGER;if(n===Hc||n===Gc||n===Wc||n===qc)if(a===zt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Hc)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Gc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Wc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===qc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Hc)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Gc)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Wc)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===qc)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===sf||n===rf||n===af||n===of)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===sf)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===rf)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===af)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===of)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===lf||n===cf||n===uf)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===lf||n===cf)return a===zt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===uf)return a===zt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===df||n===hf||n===ff||n===pf||n===mf||n===gf||n===vf||n===yf||n===xf||n===_f||n===bf||n===Sf||n===Mf||n===wf)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===df)return a===zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===hf)return a===zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ff)return a===zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===pf)return a===zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===mf)return a===zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===gf)return a===zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===vf)return a===zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===yf)return a===zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===xf)return a===zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===_f)return a===zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===bf)return a===zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Sf)return a===zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Mf)return a===zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===wf)return a===zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Xc||n===Ef||n===Af)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Xc)return a===zt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ef)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Af)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===lx||n===Tf||n===Rf||n===Cf)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Xc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Tf)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Rf)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Cf)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Za?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var eu=class extends pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Bs=class extends Rt{constructor(){super(),this.isGroup=!0,this.type="Group"}},ET={type:"move"},Co=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Bs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Bs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Bs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let v of e.hand.values()){let g=t.getJointPose(v,n),p=this._getHandJoint(c,v);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,m=.005;c.inputState.pinching&&h>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ET)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Bs;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},AT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,TT=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Xf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let s=new un,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}render(e,t){if(this.texture!==null){if(this.mesh===null){let n=t.cameras[0].viewport,s=new di({vertexShader:AT,fragmentShader:TT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new tn(new Ha(20,20),s)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}},$f=class extends Ui{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,h=null,f=null,m=null,v=new Xf,g=t.getContextAttributes(),p=null,x=null,y=[],_=[],L=new ve,M=null,R=new pn;R.layers.enable(1),R.viewport=new Nt;let P=new pn;P.layers.enable(2),P.viewport=new Nt;let w=[R,P],S=new eu;S.layers.enable(1),S.layers.enable(2);let D=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let ue=y[te];return ue===void 0&&(ue=new Co,y[te]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(te){let ue=y[te];return ue===void 0&&(ue=new Co,y[te]=ue),ue.getGripSpace()},this.getHand=function(te){let ue=y[te];return ue===void 0&&(ue=new Co,y[te]=ue),ue.getHandSpace()};function C(te){let ue=_.indexOf(te.inputSource);if(ue===-1)return;let pe=y[ue];pe!==void 0&&(pe.update(te.inputSource,te.frame,c||a),pe.dispatchEvent({type:te.type,data:te.inputSource}))}function V(){s.removeEventListener("select",C),s.removeEventListener("selectstart",C),s.removeEventListener("selectend",C),s.removeEventListener("squeeze",C),s.removeEventListener("squeezestart",C),s.removeEventListener("squeezeend",C),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",q);for(let te=0;te<y.length;te++){let ue=_[te];ue!==null&&(_[te]=null,y[te].disconnect(ue))}D=null,B=null,v.reset(),e.setRenderTarget(p),f=null,h=null,d=null,s=null,x=null,be.stop(),n.isPresenting=!1,e.setPixelRatio(M),e.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){r=te,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){o=te,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(te){c=te},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(te){if(s=te,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",C),s.addEventListener("selectstart",C),s.addEventListener("selectend",C),s.addEventListener("squeeze",C),s.addEventListener("squeezestart",C),s.addEventListener("squeezeend",C),s.addEventListener("end",V),s.addEventListener("inputsourceschange",q),g.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(L),s.renderState.layers===void 0){let ue={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ue),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new ci(f.framebufferWidth,f.framebufferHeight,{format:oi,type:xs,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let ue=null,pe=null,ce=null;g.depth&&(ce=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ue=g.stencil?Fa:Sr,pe=g.stencil?Za:wr);let Ve={colorFormat:t.RGBA8,depthFormat:ce,scaleFactor:r};d=new XRWebGLBinding(s,t),h=d.createProjectionLayer(Ve),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),x=new ci(h.textureWidth,h.textureHeight,{format:oi,type:xs,depthTexture:new Jo(h.textureWidth,h.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),be.setContext(s),be.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function q(te){for(let ue=0;ue<te.removed.length;ue++){let pe=te.removed[ue],ce=_.indexOf(pe);ce>=0&&(_[ce]=null,y[ce].disconnect(pe))}for(let ue=0;ue<te.added.length;ue++){let pe=te.added[ue],ce=_.indexOf(pe);if(ce===-1){for(let Je=0;Je<y.length;Je++)if(Je>=_.length){_.push(pe),ce=Je;break}else if(_[Je]===null){_[Je]=pe,ce=Je;break}if(ce===-1)break}let Ve=y[ce];Ve&&Ve.connect(pe)}}let ne=new U,ee=new U;function K(te,ue,pe){ne.setFromMatrixPosition(ue.matrixWorld),ee.setFromMatrixPosition(pe.matrixWorld);let ce=ne.distanceTo(ee),Ve=ue.projectionMatrix.elements,Je=pe.projectionMatrix.elements,H=Ve[14]/(Ve[10]-1),et=Ve[14]/(Ve[10]+1),ae=(Ve[9]+1)/Ve[5],me=(Ve[9]-1)/Ve[5],se=(Ve[8]-1)/Ve[0],Ae=(Je[8]+1)/Je[0],fe=H*se,Ce=H*Ae,qe=ce/(-se+Ae),N=qe*-se;ue.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(N),te.translateZ(qe),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert();let A=H+qe,k=et+qe,O=fe-N,Z=Ce+(ce-N),$=ae*et/k*A,ie=me*et/k*A;te.projectionMatrix.makePerspective(O,Z,$,ie,A,k),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}function re(te,ue){ue===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(ue.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(s===null)return;v.texture!==null&&(te.near=v.depthNear,te.far=v.depthFar),S.near=P.near=R.near=te.near,S.far=P.far=R.far=te.far,(D!==S.near||B!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),D=S.near,B=S.far,R.near=D,R.far=B,P.near=D,P.far=B,R.updateProjectionMatrix(),P.updateProjectionMatrix(),te.updateProjectionMatrix());let ue=te.parent,pe=S.cameras;re(S,ue);for(let ce=0;ce<pe.length;ce++)re(pe[ce],ue);pe.length===2?K(S,R,P):S.projectionMatrix.copy(R.projectionMatrix),oe(te,S,ue)};function oe(te,ue,pe){pe===null?te.matrix.copy(ue.matrixWorld):(te.matrix.copy(pe.matrixWorld),te.matrix.invert(),te.matrix.multiply(ue.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(ue.projectionMatrix),te.projectionMatrixInverse.copy(ue.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=Oa*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(te){l=te,h!==null&&(h.fixedFoveation=te),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=te)},this.hasDepthSensing=function(){return v.texture!==null};let Se=null;function Re(te,ue){if(u=ue.getViewerPose(c||a),m=ue,u!==null){let pe=u.views;f!==null&&(e.setRenderTargetFramebuffer(x,f.framebuffer),e.setRenderTarget(x));let ce=!1;pe.length!==S.cameras.length&&(S.cameras.length=0,ce=!0);for(let Je=0;Je<pe.length;Je++){let H=pe[Je],et=null;if(f!==null)et=f.getViewport(H);else{let me=d.getViewSubImage(h,H);et=me.viewport,Je===0&&(e.setRenderTargetTextures(x,me.colorTexture,h.ignoreDepthValues?void 0:me.depthStencilTexture),e.setRenderTarget(x))}let ae=w[Je];ae===void 0&&(ae=new pn,ae.layers.enable(Je),ae.viewport=new Nt,w[Je]=ae),ae.matrix.fromArray(H.transform.matrix),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.projectionMatrix.fromArray(H.projectionMatrix),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert(),ae.viewport.set(et.x,et.y,et.width,et.height),Je===0&&(S.matrix.copy(ae.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ce===!0&&S.cameras.push(ae)}let Ve=s.enabledFeatures;if(Ve&&Ve.includes("depth-sensing")){let Je=d.getDepthInformation(pe[0]);Je&&Je.isValid&&Je.texture&&v.init(e,Je,s.renderState)}}for(let pe=0;pe<y.length;pe++){let ce=_[pe],Ve=y[pe];ce!==null&&Ve!==void 0&&Ve.update(ce,ue,c||a)}v.render(e,S),Se&&Se(te,ue),ue.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ue}),m=null}let be=new Rx;be.setAnimationLoop(Re),this.setAnimationLoop=function(te){Se=te},this.dispose=function(){}}},lr=new ui,RT=new it;function CT(i,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Ax(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,x,y,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),d(g,p)):p.isMeshPhongMaterial?(r(g,p),u(g,p)):p.isMeshStandardMaterial?(r(g,p),h(g,p),p.isMeshPhysicalMaterial&&f(g,p,_)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),v(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,x,y):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Xn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Xn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let x=e.get(p),y=x.envMap,_=x.envMapRotation;if(y&&(g.envMap.value=y,lr.copy(_),lr.x*=-1,lr.y*=-1,lr.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(lr.y*=-1,lr.z*=-1),g.envMapRotation.value.setFromMatrix4(RT.makeRotationFromEuler(lr)),g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap){g.lightMap.value=p.lightMap;let L=i._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=p.lightMapIntensity*L,t(p.lightMap,g.lightMapTransform)}p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,x,y){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*x,g.scale.value=y*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function d(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function h(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,x){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Xn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function v(g,p){let x=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function PT(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,y){let _=y.program;n.uniformBlockBinding(x,_)}function c(x,y){let _=s[x.id];_===void 0&&(m(x),_=u(x),s[x.id]=_,x.addEventListener("dispose",g));let L=y.program;n.updateUBOMapping(x,L);let M=e.render.frame;r[x.id]!==M&&(h(x),r[x.id]=M)}function u(x){let y=d();x.__bindingPointIndex=y;let _=i.createBuffer(),L=x.__size,M=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,L,M),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,_),_}function d(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){let y=s[x.id],_=x.uniforms,L=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let M=0,R=_.length;M<R;M++){let P=Array.isArray(_[M])?_[M]:[_[M]];for(let w=0,S=P.length;w<S;w++){let D=P[w];if(f(D,M,w,L)===!0){let B=D.__offset,C=Array.isArray(D.value)?D.value:[D.value],V=0;for(let q=0;q<C.length;q++){let ne=C[q],ee=v(ne);typeof ne=="number"||typeof ne=="boolean"?(D.__data[0]=ne,i.bufferSubData(i.UNIFORM_BUFFER,B+V,D.__data)):ne.isMatrix3?(D.__data[0]=ne.elements[0],D.__data[1]=ne.elements[1],D.__data[2]=ne.elements[2],D.__data[3]=0,D.__data[4]=ne.elements[3],D.__data[5]=ne.elements[4],D.__data[6]=ne.elements[5],D.__data[7]=0,D.__data[8]=ne.elements[6],D.__data[9]=ne.elements[7],D.__data[10]=ne.elements[8],D.__data[11]=0):(ne.toArray(D.__data,V),V+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,B,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(x,y,_,L){let M=x.value,R=y+"_"+_;if(L[R]===void 0)return typeof M=="number"||typeof M=="boolean"?L[R]=M:L[R]=M.clone(),!0;{let P=L[R];if(typeof M=="number"||typeof M=="boolean"){if(P!==M)return L[R]=M,!0}else if(P.equals(M)===!1)return P.copy(M),!0}return!1}function m(x){let y=x.uniforms,_=0,L=16;for(let R=0,P=y.length;R<P;R++){let w=Array.isArray(y[R])?y[R]:[y[R]];for(let S=0,D=w.length;S<D;S++){let B=w[S],C=Array.isArray(B.value)?B.value:[B.value];for(let V=0,q=C.length;V<q;V++){let ne=C[V],ee=v(ne),K=_%L;K!==0&&L-K<ee.boundary&&(_+=L-K),B.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=_,_+=ee.storage}}}let M=_%L;return M>0&&(_+=L-M),x.__size=_,x.__cache={},this}function v(x){let y={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=48,y.storage=48):x.isMatrix4?(y.boundary=64,y.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),y}function g(x){let y=x.target;y.removeEventListener("dispose",g);let _=a.indexOf(y.__bindingPointIndex);a.splice(_,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(let x in s)i.deleteBuffer(s[x]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}var Yf=class{constructor(e={}){let{canvas:t=Mx(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=n.getContextAttributes().alpha}else h=a;let f=new Uint32Array(4),m=new Int32Array(4),v=null,g=null,p=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=_i,this._useLegacyLights=!1,this.toneMapping=ms,this.toneMappingExposure=1;let y=this,_=!1,L=0,M=0,R=null,P=-1,w=null,S=new Nt,D=new Nt,B=null,C=new We(0),V=0,q=t.width,ne=t.height,ee=1,K=null,re=null,oe=new Nt(0,0,q,ne),Se=new Nt(0,0,q,ne),Re=!1,be=new Tr,te=!1,ue=!1,pe=new it,ce=new U,Ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Je(){return R===null?ee:1}let H=n;function et(T,W){return t.getContext(T,W)}try{let T={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r164"),t.addEventListener("webglcontextlost",G,!1),t.addEventListener("webglcontextrestored",ge,!1),t.addEventListener("webglcontextcreationerror",le,!1),H===null){let W="webgl2";if(H=et(W,T),H===null)throw et(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let ae,me,se,Ae,fe,Ce,qe,N,A,k,O,Z,$,ie,ye,xe,je,we,ke,rt,$e,Ue,Qe,tt;function Ct(){ae=new JA(H),ae.init(),Ue=new Dx(H,ae),me=new WA(H,ae,e,Ue),se=new MT(H),Ae=new QA(H),fe=new dT,Ce=new wT(H,ae,se,fe,me,Ue,Ae),qe=new XA(y),N=new ZA(y),A=new aw(H),Qe=new HA(H,A),k=new jA(H,A,Ae,Qe),O=new t1(H,k,A,Ae),ke=new e1(H,me,Ce),xe=new qA(fe),Z=new uT(y,qe,N,ae,me,Qe,xe),$=new CT(y,fe),ie=new fT,ye=new xT(ae),we=new VA(y,qe,N,se,O,h,l),je=new ST(y,O,me),tt=new PT(H,Ae,me,se),rt=new GA(H,ae,Ae),$e=new KA(H,ae,Ae),Ae.programs=Z.programs,y.capabilities=me,y.extensions=ae,y.properties=fe,y.renderLists=ie,y.shadowMap=je,y.state=se,y.info=Ae}Ct();let at=new $f(y,H);this.xr=at,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){let T=ae.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=ae.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(T){T!==void 0&&(ee=T,this.setSize(q,ne,!1))},this.getSize=function(T){return T.set(q,ne)},this.setSize=function(T,W,j=!0){if(at.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=T,ne=W,t.width=Math.floor(T*ee),t.height=Math.floor(W*ee),j===!0&&(t.style.width=T+"px",t.style.height=W+"px"),this.setViewport(0,0,T,W)},this.getDrawingBufferSize=function(T){return T.set(q*ee,ne*ee).floor()},this.setDrawingBufferSize=function(T,W,j){q=T,ne=W,ee=j,t.width=Math.floor(T*j),t.height=Math.floor(W*j),this.setViewport(0,0,T,W)},this.getCurrentViewport=function(T){return T.copy(S)},this.getViewport=function(T){return T.copy(oe)},this.setViewport=function(T,W,j,Y){T.isVector4?oe.set(T.x,T.y,T.z,T.w):oe.set(T,W,j,Y),se.viewport(S.copy(oe).multiplyScalar(ee).round())},this.getScissor=function(T){return T.copy(Se)},this.setScissor=function(T,W,j,Y){T.isVector4?Se.set(T.x,T.y,T.z,T.w):Se.set(T,W,j,Y),se.scissor(D.copy(Se).multiplyScalar(ee).round())},this.getScissorTest=function(){return Re},this.setScissorTest=function(T){se.setScissorTest(Re=T)},this.setOpaqueSort=function(T){K=T},this.setTransparentSort=function(T){re=T},this.getClearColor=function(T){return T.copy(we.getClearColor())},this.setClearColor=function(){we.setClearColor.apply(we,arguments)},this.getClearAlpha=function(){return we.getClearAlpha()},this.setClearAlpha=function(){we.setClearAlpha.apply(we,arguments)},this.clear=function(T=!0,W=!0,j=!0){let Y=0;if(T){let X=!1;if(R!==null){let Me=R.texture.format;X=Me===sm||Me===im||Me===nm}if(X){let Me=R.texture.type,Pe=Me===xs||Me===wr||Me===jp||Me===Za||Me===Qp||Me===em,Te=we.getClearColor(),He=we.getClearAlpha(),Ze=Te.r,Be=Te.g,st=Te.b;Pe?(f[0]=Ze,f[1]=Be,f[2]=st,f[3]=He,H.clearBufferuiv(H.COLOR,0,f)):(m[0]=Ze,m[1]=Be,m[2]=st,m[3]=He,H.clearBufferiv(H.COLOR,0,m))}else Y|=H.COLOR_BUFFER_BIT}W&&(Y|=H.DEPTH_BUFFER_BIT),j&&(Y|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",G,!1),t.removeEventListener("webglcontextrestored",ge,!1),t.removeEventListener("webglcontextcreationerror",le,!1),ie.dispose(),ye.dispose(),fe.dispose(),qe.dispose(),N.dispose(),O.dispose(),Qe.dispose(),tt.dispose(),Z.dispose(),at.dispose(),at.removeEventListener("sessionstart",xt),at.removeEventListener("sessionend",In),Pt.stop()};function G(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),_=!0}function ge(){console.log("THREE.WebGLRenderer: Context Restored."),_=!1;let T=Ae.autoReset,W=je.enabled,j=je.autoUpdate,Y=je.needsUpdate,X=je.type;Ct(),Ae.autoReset=T,je.enabled=W,je.autoUpdate=j,je.needsUpdate=Y,je.type=X}function le(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Ie(T){let W=T.target;W.removeEventListener("dispose",Ie),Ne(W)}function Ne(T){ot(T),fe.remove(T)}function ot(T){let W=fe.get(T).programs;W!==void 0&&(W.forEach(function(j){Z.releaseProgram(j)}),T.isShaderMaterial&&Z.releaseShaderCache(T))}this.renderBufferDirect=function(T,W,j,Y,X,Me){W===null&&(W=Ve);let Pe=X.isMesh&&X.matrixWorld.determinant()<0,Te=he(T,W,j,Y,X);se.setMaterial(Y,Pe);let He=j.index,Ze=1;if(Y.wireframe===!0){if(He=k.getWireframeAttribute(j),He===void 0)return;Ze=2}let Be=j.drawRange,st=j.attributes.position,Ft=Be.start*Ze,$t=(Be.start+Be.count)*Ze;Me!==null&&(Ft=Math.max(Ft,Me.start*Ze),$t=Math.min($t,(Me.start+Me.count)*Ze)),He!==null?(Ft=Math.max(Ft,0),$t=Math.min($t,He.count)):st!=null&&(Ft=Math.max(Ft,0),$t=Math.min($t,st.count));let Zt=$t-Ft;if(Zt<0||Zt===1/0)return;Qe.setup(X,Y,Te,j,He);let kn,vt=rt;if(He!==null&&(kn=A.get(He),vt=$e,vt.setIndex(kn)),X.isMesh)Y.wireframe===!0?(se.setLineWidth(Y.wireframeLinewidth*Je()),vt.setMode(H.LINES)):vt.setMode(H.TRIANGLES);else if(X.isLine){let lt=Y.linewidth;lt===void 0&&(lt=1),se.setLineWidth(lt*Je()),X.isLineSegments?vt.setMode(H.LINES):X.isLineLoop?vt.setMode(H.LINE_LOOP):vt.setMode(H.LINE_STRIP)}else X.isPoints?vt.setMode(H.POINTS):X.isSprite&&vt.setMode(H.TRIANGLES);if(X.isBatchedMesh)X._multiDrawInstances!==null?vt.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances):vt.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else if(X.isInstancedMesh)vt.renderInstances(Ft,Zt,X.count);else if(j.isInstancedBufferGeometry){let lt=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Qi=Math.min(j.instanceCount,lt);vt.renderInstances(Ft,Zt,Qi)}else vt.render(Ft,Zt)};function _t(T,W,j){T.transparent===!0&&T.side===Wi&&T.forceSinglePass===!1?(T.side=Xn,T.needsUpdate=!0,Ln(T,W,j),T.side=vs,T.needsUpdate=!0,Ln(T,W,j),T.side=Wi):Ln(T,W,j)}this.compile=function(T,W,j=null){j===null&&(j=T),g=ye.get(j),g.init(W),x.push(g),j.traverseVisible(function(X){X.isLight&&X.layers.test(W.layers)&&(g.pushLight(X),X.castShadow&&g.pushShadow(X))}),T!==j&&T.traverseVisible(function(X){X.isLight&&X.layers.test(W.layers)&&(g.pushLight(X),X.castShadow&&g.pushShadow(X))}),g.setupLights(y._useLegacyLights);let Y=new Set;return T.traverse(function(X){let Me=X.material;if(Me)if(Array.isArray(Me))for(let Pe=0;Pe<Me.length;Pe++){let Te=Me[Pe];_t(Te,j,X),Y.add(Te)}else _t(Me,j,X),Y.add(Me)}),x.pop(),g=null,Y},this.compileAsync=function(T,W,j=null){let Y=this.compile(T,W,j);return new Promise(X=>{function Me(){if(Y.forEach(function(Pe){fe.get(Pe).currentProgram.isReady()&&Y.delete(Pe)}),Y.size===0){X(T);return}setTimeout(Me,10)}ae.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let At=null;function nn(T){At&&At(T)}function xt(){Pt.stop()}function In(){Pt.start()}let Pt=new Rx;Pt.setAnimationLoop(nn),typeof self<"u"&&Pt.setContext(self),this.setAnimationLoop=function(T){At=T,at.setAnimationLoop(T),T===null?Pt.stop():Pt.start()},at.addEventListener("sessionstart",xt),at.addEventListener("sessionend",In),this.render=function(T,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(_===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),at.enabled===!0&&at.isPresenting===!0&&(at.cameraAutoUpdate===!0&&at.updateCamera(W),W=at.getCamera()),T.isScene===!0&&T.onBeforeRender(y,T,W,R),g=ye.get(T,x.length),g.init(W),x.push(g),pe.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),be.setFromProjectionMatrix(pe),ue=this.localClippingEnabled,te=xe.init(this.clippingPlanes,ue),v=ie.get(T,p.length),v.init(),p.push(v),Vt(T,W,0,y.sortObjects),v.finish(),y.sortObjects===!0&&v.sort(K,re);let j=at.enabled===!1||at.isPresenting===!1||at.hasDepthSensing()===!1;j&&we.addToRenderList(v,T),this.info.render.frame++,te===!0&&xe.beginShadows();let Y=g.state.shadowsArray;je.render(Y,T,W),te===!0&&xe.endShadows(),this.info.autoReset===!0&&this.info.reset();let X=v.opaque,Me=v.transmissive;if(g.setupLights(y._useLegacyLights),W.isArrayCamera){let Pe=W.cameras;if(Me.length>0)for(let Te=0,He=Pe.length;Te<He;Te++){let Ze=Pe[Te];yn(X,Me,T,Ze)}j&&we.render(T);for(let Te=0,He=Pe.length;Te<He;Te++){let Ze=Pe[Te];vn(v,T,Ze,Ze.viewport)}}else Me.length>0&&yn(X,Me,T,W),j&&we.render(T),vn(v,T,W);R!==null&&(Ce.updateMultisampleRenderTarget(R),Ce.updateRenderTargetMipmap(R)),T.isScene===!0&&T.onAfterRender(y,T,W),Qe.resetDefaultState(),P=-1,w=null,x.pop(),x.length>0?(g=x[x.length-1],te===!0&&xe.setGlobalState(y.clippingPlanes,g.state.camera)):g=null,p.pop(),p.length>0?v=p[p.length-1]:v=null};function Vt(T,W,j,Y){if(T.visible===!1)return;if(T.layers.test(W.layers)){if(T.isGroup)j=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(W);else if(T.isLight)g.pushLight(T),T.castShadow&&g.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||be.intersectsSprite(T)){Y&&ce.setFromMatrixPosition(T.matrixWorld).applyMatrix4(pe);let Pe=O.update(T),Te=T.material;Te.visible&&v.push(T,Pe,Te,j,ce.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||be.intersectsObject(T))){let Pe=O.update(T),Te=T.material;if(Y&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),ce.copy(T.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),ce.copy(Pe.boundingSphere.center)),ce.applyMatrix4(T.matrixWorld).applyMatrix4(pe)),Array.isArray(Te)){let He=Pe.groups;for(let Ze=0,Be=He.length;Ze<Be;Ze++){let st=He[Ze],Ft=Te[st.materialIndex];Ft&&Ft.visible&&v.push(T,Pe,Ft,j,ce.z,st)}}else Te.visible&&v.push(T,Pe,Te,j,ce.z,null)}}let Me=T.children;for(let Pe=0,Te=Me.length;Pe<Te;Pe++)Vt(Me[Pe],W,j,Y)}function vn(T,W,j,Y){let X=T.opaque,Me=T.transmissive,Pe=T.transparent;g.setupLightsView(j),te===!0&&xe.setGlobalState(y.clippingPlanes,j),Y&&se.viewport(S.copy(Y)),X.length>0&&Kn(X,W,j),Me.length>0&&Kn(Me,W,j),Pe.length>0&&Kn(Pe,W,j),se.buffers.depth.setTest(!0),se.buffers.depth.setMask(!0),se.buffers.color.setMask(!0),se.setPolygonOffset(!1)}function yn(T,W,j,Y){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[Y.id]===void 0&&(g.state.transmissionRenderTarget[Y.id]=new ci(1,1,{generateMipmaps:!0,type:ae.has("EXT_color_buffer_half_float")||ae.has("EXT_color_buffer_float")?bl:xs,minFilter:qi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1}));let Me=g.state.transmissionRenderTarget[Y.id],Pe=Y.viewport||S;Me.setSize(Pe.z,Pe.w);let Te=y.getRenderTarget();y.setRenderTarget(Me),y.getClearColor(C),V=y.getClearAlpha(),V<1&&y.setClearColor(16777215,.5),y.clear();let He=y.toneMapping;y.toneMapping=ms;let Ze=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),g.setupLightsView(Y),te===!0&&xe.setGlobalState(y.clippingPlanes,Y),Kn(T,j,Y),Ce.updateMultisampleRenderTarget(Me),Ce.updateRenderTargetMipmap(Me),ae.has("WEBGL_multisampled_render_to_texture")===!1){let Be=!1;for(let st=0,Ft=W.length;st<Ft;st++){let $t=W[st],Zt=$t.object,kn=$t.geometry,vt=$t.material,lt=$t.group;if(vt.side===Wi&&Zt.layers.test(Y.layers)){let Qi=vt.side;vt.side=Xn,vt.needsUpdate=!0,Bt(Zt,j,Y,kn,vt,lt),vt.side=Qi,vt.needsUpdate=!0,Be=!0}}Be===!0&&(Ce.updateMultisampleRenderTarget(Me),Ce.updateRenderTargetMipmap(Me))}y.setRenderTarget(Te),y.setClearColor(C,V),Ze!==void 0&&(Y.viewport=Ze),y.toneMapping=He}function Kn(T,W,j){let Y=W.isScene===!0?W.overrideMaterial:null;for(let X=0,Me=T.length;X<Me;X++){let Pe=T[X],Te=Pe.object,He=Pe.geometry,Ze=Y===null?Pe.material:Y,Be=Pe.group;Te.layers.test(j.layers)&&Bt(Te,W,j,He,Ze,Be)}}function Bt(T,W,j,Y,X,Me){T.onBeforeRender(y,W,j,Y,X,Me),T.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),X.onBeforeRender(y,W,j,Y,T,Me),X.transparent===!0&&X.side===Wi&&X.forceSinglePass===!1?(X.side=Xn,X.needsUpdate=!0,y.renderBufferDirect(j,W,Y,X,T,Me),X.side=vs,X.needsUpdate=!0,y.renderBufferDirect(j,W,Y,X,T,Me),X.side=Wi):y.renderBufferDirect(j,W,Y,X,T,Me),T.onAfterRender(y,W,j,Y,X,Me)}function Ln(T,W,j){W.isScene!==!0&&(W=Ve);let Y=fe.get(T),X=g.state.lights,Me=g.state.shadowsArray,Pe=X.state.version,Te=Z.getParameters(T,X.state,Me,W,j),He=Z.getProgramCacheKey(Te),Ze=Y.programs;Y.environment=T.isMeshStandardMaterial?W.environment:null,Y.fog=W.fog,Y.envMap=(T.isMeshStandardMaterial?N:qe).get(T.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&T.envMap===null?W.environmentRotation:T.envMapRotation,Ze===void 0&&(T.addEventListener("dispose",Ie),Ze=new Map,Y.programs=Ze);let Be=Ze.get(He);if(Be!==void 0){if(Y.currentProgram===Be&&Y.lightsStateVersion===Pe)return Q(T,Te),Be}else Te.uniforms=Z.getUniforms(T),T.onBuild(j,Te,y),T.onBeforeCompile(Te,y),Be=Z.acquireProgram(Te,He),Ze.set(He,Be),Y.uniforms=Te.uniforms;let st=Y.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(st.clippingPlanes=xe.uniform),Q(T,Te),Y.needsLights=ut(T),Y.lightsStateVersion=Pe,Y.needsLights&&(st.ambientLightColor.value=X.state.ambient,st.lightProbe.value=X.state.probe,st.directionalLights.value=X.state.directional,st.directionalLightShadows.value=X.state.directionalShadow,st.spotLights.value=X.state.spot,st.spotLightShadows.value=X.state.spotShadow,st.rectAreaLights.value=X.state.rectArea,st.ltc_1.value=X.state.rectAreaLTC1,st.ltc_2.value=X.state.rectAreaLTC2,st.pointLights.value=X.state.point,st.pointLightShadows.value=X.state.pointShadow,st.hemisphereLights.value=X.state.hemi,st.directionalShadowMap.value=X.state.directionalShadowMap,st.directionalShadowMatrix.value=X.state.directionalShadowMatrix,st.spotShadowMap.value=X.state.spotShadowMap,st.spotLightMatrix.value=X.state.spotLightMatrix,st.spotLightMap.value=X.state.spotLightMap,st.pointShadowMap.value=X.state.pointShadowMap,st.pointShadowMatrix.value=X.state.pointShadowMatrix),Y.currentProgram=Be,Y.uniformsList=null,Be}function wi(T){if(T.uniformsList===null){let W=T.currentProgram.getUniforms();T.uniformsList=Ua.seqWithValue(W.seq,T.uniforms)}return T.uniformsList}function Q(T,W){let j=fe.get(T);j.outputColorSpace=W.outputColorSpace,j.batching=W.batching,j.instancing=W.instancing,j.instancingColor=W.instancingColor,j.instancingMorph=W.instancingMorph,j.skinning=W.skinning,j.morphTargets=W.morphTargets,j.morphNormals=W.morphNormals,j.morphColors=W.morphColors,j.morphTargetsCount=W.morphTargetsCount,j.numClippingPlanes=W.numClippingPlanes,j.numIntersection=W.numClipIntersection,j.vertexAlphas=W.vertexAlphas,j.vertexTangents=W.vertexTangents,j.toneMapping=W.toneMapping}function he(T,W,j,Y,X){W.isScene!==!0&&(W=Ve),Ce.resetTextureUnits();let Me=W.fog,Pe=Y.isMeshStandardMaterial?W.environment:null,Te=R===null?y.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Ss,He=(Y.isMeshStandardMaterial?N:qe).get(Y.envMap||Pe),Ze=Y.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Be=!!j.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),st=!!j.morphAttributes.position,Ft=!!j.morphAttributes.normal,$t=!!j.morphAttributes.color,Zt=ms;Y.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Zt=y.toneMapping);let kn=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,vt=kn!==void 0?kn.length:0,lt=fe.get(Y),Qi=g.state.lights;if(te===!0&&(ue===!0||T!==w)){let Yn=T===w&&Y.id===P;xe.setState(Y,T,Yn)}let Dt=!1;Y.version===lt.__version?(lt.needsLights&&lt.lightsStateVersion!==Qi.state.version||lt.outputColorSpace!==Te||X.isBatchedMesh&&lt.batching===!1||!X.isBatchedMesh&&lt.batching===!0||X.isInstancedMesh&&lt.instancing===!1||!X.isInstancedMesh&&lt.instancing===!0||X.isSkinnedMesh&&lt.skinning===!1||!X.isSkinnedMesh&&lt.skinning===!0||X.isInstancedMesh&&lt.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&lt.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&lt.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&lt.instancingMorph===!1&&X.morphTexture!==null||lt.envMap!==He||Y.fog===!0&&lt.fog!==Me||lt.numClippingPlanes!==void 0&&(lt.numClippingPlanes!==xe.numPlanes||lt.numIntersection!==xe.numIntersection)||lt.vertexAlphas!==Ze||lt.vertexTangents!==Be||lt.morphTargets!==st||lt.morphNormals!==Ft||lt.morphColors!==$t||lt.toneMapping!==Zt||lt.morphTargetsCount!==vt)&&(Dt=!0):(Dt=!0,lt.__version=Y.version);let Ei=lt.currentProgram;Dt===!0&&(Ei=Ln(Y,W,X));let zr=!1,rn=!1,Vr=!1,dn=Ei.getUniforms(),pi=lt.uniforms;if(se.useProgram(Ei.program)&&(zr=!0,rn=!0,Vr=!0),Y.id!==P&&(P=Y.id,rn=!0),zr||w!==T){dn.setValue(H,"projectionMatrix",T.projectionMatrix),dn.setValue(H,"viewMatrix",T.matrixWorldInverse);let Yn=dn.map.cameraPosition;Yn!==void 0&&Yn.setValue(H,ce.setFromMatrixPosition(T.matrixWorld)),me.logarithmicDepthBuffer&&dn.setValue(H,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&dn.setValue(H,"isOrthographic",T.isOrthographicCamera===!0),w!==T&&(w=T,rn=!0,Vr=!0)}if(X.isSkinnedMesh){dn.setOptional(H,X,"bindMatrix"),dn.setOptional(H,X,"bindMatrixInverse");let Yn=X.skeleton;Yn&&(Yn.boneTexture===null&&Yn.computeBoneTexture(),dn.setValue(H,"boneTexture",Yn.boneTexture,Ce))}X.isBatchedMesh&&(dn.setOptional(H,X,"batchingTexture"),dn.setValue(H,"batchingTexture",X._matricesTexture,Ce));let Hr=j.morphAttributes;if((Hr.position!==void 0||Hr.normal!==void 0||Hr.color!==void 0)&&ke.update(X,j,Ei),(rn||lt.receiveShadow!==X.receiveShadow)&&(lt.receiveShadow=X.receiveShadow,dn.setValue(H,"receiveShadow",X.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(pi.envMap.value=He,pi.flipEnvMap.value=He.isCubeTexture&&He.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&W.environment!==null&&(pi.envMapIntensity.value=W.environmentIntensity),rn&&(dn.setValue(H,"toneMappingExposure",y.toneMappingExposure),lt.needsLights&&Oe(pi,Vr),Me&&Y.fog===!0&&$.refreshFogUniforms(pi,Me),$.refreshMaterialUniforms(pi,Y,ee,ne,g.state.transmissionRenderTarget[T.id]),Ua.upload(H,wi(lt),pi,Ce)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Ua.upload(H,wi(lt),pi,Ce),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&dn.setValue(H,"center",X.center),dn.setValue(H,"modelViewMatrix",X.modelViewMatrix),dn.setValue(H,"normalMatrix",X.normalMatrix),dn.setValue(H,"modelMatrix",X.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){let Yn=Y.uniformsGroups;for(let Ka=0,wd=Yn.length;Ka<wd;Ka++){let Qa=Yn[Ka];tt.update(Qa,Ei),tt.bind(Qa,Ei)}}return Ei}function Oe(T,W){T.ambientLightColor.needsUpdate=W,T.lightProbe.needsUpdate=W,T.directionalLights.needsUpdate=W,T.directionalLightShadows.needsUpdate=W,T.pointLights.needsUpdate=W,T.pointLightShadows.needsUpdate=W,T.spotLights.needsUpdate=W,T.spotLightShadows.needsUpdate=W,T.rectAreaLights.needsUpdate=W,T.hemisphereLights.needsUpdate=W}function ut(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(T,W,j){fe.get(T.texture).__webglTexture=W,fe.get(T.depthTexture).__webglTexture=j;let Y=fe.get(T);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=j===void 0,Y.__autoAllocateDepthBuffer||ae.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,W){let j=fe.get(T);j.__webglFramebuffer=W,j.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(T,W=0,j=0){R=T,L=W,M=j;let Y=!0,X=null,Me=!1,Pe=!1;if(T){let He=fe.get(T);He.__useDefaultFramebuffer!==void 0?(se.bindFramebuffer(H.FRAMEBUFFER,null),Y=!1):He.__webglFramebuffer===void 0?Ce.setupRenderTarget(T):He.__hasExternalTextures&&Ce.rebindTextures(T,fe.get(T.texture).__webglTexture,fe.get(T.depthTexture).__webglTexture);let Ze=T.texture;(Ze.isData3DTexture||Ze.isDataArrayTexture||Ze.isCompressedArrayTexture)&&(Pe=!0);let Be=fe.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Be[W])?X=Be[W][j]:X=Be[W],Me=!0):T.samples>0&&Ce.useMultisampledRTT(T)===!1?X=fe.get(T).__webglMultisampledFramebuffer:Array.isArray(Be)?X=Be[j]:X=Be,S.copy(T.viewport),D.copy(T.scissor),B=T.scissorTest}else S.copy(oe).multiplyScalar(ee).floor(),D.copy(Se).multiplyScalar(ee).floor(),B=Re;if(se.bindFramebuffer(H.FRAMEBUFFER,X)&&Y&&se.drawBuffers(T,X),se.viewport(S),se.scissor(D),se.setScissorTest(B),Me){let He=fe.get(T.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+W,He.__webglTexture,j)}else if(Pe){let He=fe.get(T.texture),Ze=W||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,He.__webglTexture,j||0,Ze)}P=-1},this.readRenderTargetPixels=function(T,W,j,Y,X,Me,Pe){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=fe.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Pe!==void 0&&(Te=Te[Pe]),Te){se.bindFramebuffer(H.FRAMEBUFFER,Te);try{let He=T.texture,Ze=He.format,Be=He.type;if(!me.textureFormatReadable(Ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!me.textureTypeReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=T.width-Y&&j>=0&&j<=T.height-X&&H.readPixels(W,j,Y,X,Ue.convert(Ze),Ue.convert(Be),Me)}finally{let He=R!==null?fe.get(R).__webglFramebuffer:null;se.bindFramebuffer(H.FRAMEBUFFER,He)}}},this.copyFramebufferToTexture=function(T,W,j=0){let Y=Math.pow(2,-j),X=Math.floor(W.image.width*Y),Me=Math.floor(W.image.height*Y);Ce.setTexture2D(W,0),H.copyTexSubImage2D(H.TEXTURE_2D,j,0,0,T.x,T.y,X,Me),se.unbindTexture()},this.copyTextureToTexture=function(T,W,j,Y=0){let X=W.image.width,Me=W.image.height,Pe=Ue.convert(j.format),Te=Ue.convert(j.type);Ce.setTexture2D(j,0),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,j.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,j.unpackAlignment),W.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Y,T.x,T.y,X,Me,Pe,Te,W.image.data):W.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Y,T.x,T.y,W.mipmaps[0].width,W.mipmaps[0].height,Pe,W.mipmaps[0].data):H.texSubImage2D(H.TEXTURE_2D,Y,T.x,T.y,Pe,Te,W.image),Y===0&&j.generateMipmaps&&H.generateMipmap(H.TEXTURE_2D),se.unbindTexture()},this.copyTextureToTexture3D=function(T,W,j,Y,X=0){let Me=T.max.x-T.min.x,Pe=T.max.y-T.min.y,Te=T.max.z-T.min.z,He=Ue.convert(Y.format),Ze=Ue.convert(Y.type),Be;if(Y.isData3DTexture)Ce.setTexture3D(Y,0),Be=H.TEXTURE_3D;else if(Y.isDataArrayTexture||Y.isCompressedArrayTexture)Ce.setTexture2DArray(Y,0),Be=H.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,Y.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,Y.unpackAlignment);let st=H.getParameter(H.UNPACK_ROW_LENGTH),Ft=H.getParameter(H.UNPACK_IMAGE_HEIGHT),$t=H.getParameter(H.UNPACK_SKIP_PIXELS),Zt=H.getParameter(H.UNPACK_SKIP_ROWS),kn=H.getParameter(H.UNPACK_SKIP_IMAGES),vt=j.isCompressedTexture?j.mipmaps[X]:j.image;H.pixelStorei(H.UNPACK_ROW_LENGTH,vt.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,vt.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,T.min.x),H.pixelStorei(H.UNPACK_SKIP_ROWS,T.min.y),H.pixelStorei(H.UNPACK_SKIP_IMAGES,T.min.z),j.isDataTexture||j.isData3DTexture?H.texSubImage3D(Be,X,W.x,W.y,W.z,Me,Pe,Te,He,Ze,vt.data):Y.isCompressedArrayTexture?H.compressedTexSubImage3D(Be,X,W.x,W.y,W.z,Me,Pe,Te,He,vt.data):H.texSubImage3D(Be,X,W.x,W.y,W.z,Me,Pe,Te,He,Ze,vt),H.pixelStorei(H.UNPACK_ROW_LENGTH,st),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Ft),H.pixelStorei(H.UNPACK_SKIP_PIXELS,$t),H.pixelStorei(H.UNPACK_SKIP_ROWS,Zt),H.pixelStorei(H.UNPACK_SKIP_IMAGES,kn),X===0&&Y.generateMipmaps&&H.generateMipmap(Be),se.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?Ce.setTextureCube(T,0):T.isData3DTexture?Ce.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Ce.setTexture2DArray(T,0):Ce.setTexture2D(T,0),se.unbindTexture()},this.resetState=function(){L=0,M=0,R=null,se.reset(),Qe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===cd?"display-p3":"srgb",t.unpackColorSpace=Lt.workingColorSpace===Sl?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},tu=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new We(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}},nu=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new We(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},iu=class extends Rt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ui,this.environmentIntensity=1,this.environmentRotation=new ui,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Wa=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Go,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=li()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return wx("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=li()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=li()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Gn=new U,Rr=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Gn.fromBufferAttribute(this,t),Gn.applyMatrix4(e),this.setXYZ(t,Gn.x,Gn.y,Gn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Gn.fromBufferAttribute(this,t),Gn.applyNormalMatrix(e),this.setXYZ(t,Gn.x,Gn.y,Gn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Gn.fromBufferAttribute(this,t),Gn.transformDirection(e),this.setXYZ(t,Gn.x,Gn.y,Gn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=qn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ht(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=qn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=qn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=qn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=qn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),s=ht(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),s=ht(s,this.array),r=ht(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Et(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Qo=class extends Tn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new We(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},wa,vo=new U,Ea=new U,Aa=new U,Ta=new ve,yo=new ve,Ux=new it,vc=new U,xo=new U,yc=new U,E0=new ve,kh=new ve,A0=new ve,su=class extends Rt{constructor(e=new Qo){if(super(),this.isSprite=!0,this.type="Sprite",wa===void 0){wa=new pt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Wa(t,5);wa.setIndex([0,1,2,0,2,3]),wa.setAttribute("position",new Rr(n,3,0,!1)),wa.setAttribute("uv",new Rr(n,2,3,!1))}this.geometry=wa,this.material=e,this.center=new ve(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ea.setFromMatrixScale(this.matrixWorld),Ux.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Aa.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ea.multiplyScalar(-Aa.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;xc(vc.set(-.5,-.5,0),Aa,a,Ea,s,r),xc(xo.set(.5,-.5,0),Aa,a,Ea,s,r),xc(yc.set(.5,.5,0),Aa,a,Ea,s,r),E0.set(0,0),kh.set(1,0),A0.set(1,1);let o=e.ray.intersectTriangle(vc,xo,yc,!1,vo);if(o===null&&(xc(xo.set(-.5,.5,0),Aa,a,Ea,s,r),kh.set(0,1),o=e.ray.intersectTriangle(vc,yc,xo,!1,vo),o===null))return;let l=e.ray.origin.distanceTo(vo);l<e.near||l>e.far||t.push({distance:l,point:vo.clone(),uv:hs.getInterpolation(vo,vc,xo,yc,E0,kh,A0,new ve),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function xc(i,e,t,n,s,r){Ta.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(yo.x=r*Ta.x-s*Ta.y,yo.y=s*Ta.x+r*Ta.y):yo.copy(Ta),i.copy(e),i.x+=yo.x,i.y+=yo.y,i.applyMatrix4(Ux)}var _c=new U,T0=new U,ru=class extends Rt{constructor(){super(),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]},isLOD:{value:!0}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);let t=e.levels;for(let n=0,s=t.length;n<s;n++){let r=t[n];this.addLevel(r.object.clone(),r.distance,r.hysteresis)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0,n=0){t=Math.abs(t);let s=this.levels,r;for(r=0;r<s.length&&!(t<s[r].distance);r++);return s.splice(r,0,{distance:t,hysteresis:n,object:e}),this.add(e),this}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){let t=this.levels;if(t.length>0){let n,s;for(n=1,s=t.length;n<s;n++){let r=t[n].distance;if(t[n].object.visible&&(r-=r*t[n].hysteresis),e<r)break}return t[n-1].object}return null}raycast(e,t){if(this.levels.length>0){_c.setFromMatrixPosition(this.matrixWorld);let s=e.ray.origin.distanceTo(_c);this.getObjectForDistance(s).raycast(e,t)}}update(e){let t=this.levels;if(t.length>1){_c.setFromMatrixPosition(e.matrixWorld),T0.setFromMatrixPosition(this.matrixWorld);let n=_c.distanceTo(T0)/e.zoom;t[0].object.visible=!0;let s,r;for(s=1,r=t.length;s<r;s++){let a=t[s].distance;if(t[s].object.visible&&(a-=a*t[s].hysteresis),n>=a)t[s-1].object.visible=!1,t[s].object.visible=!0;else break}for(this._currentLevel=s-1;s<r;s++)t[s].object.visible=!1}}toJSON(e){let t=super.toJSON(e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];let n=this.levels;for(let s=0,r=n.length;s<r;s++){let a=n[s];t.object.levels.push({object:a.object.uuid,distance:a.distance,hysteresis:a.hysteresis})}return t}},R0=new U,C0=new Nt,P0=new Nt,IT=new U,I0=new it,bc=new U,Bh=new An,L0=new it,zh=new Vs,au=class extends tn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=nf,this.bindMatrix=new it,this.bindMatrixInverse=new it,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Cn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,bc),this.boundingBox.expandByPoint(bc)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new An),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,bc),this.boundingSphere.expandByPoint(bc)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Bh.copy(this.boundingSphere),Bh.applyMatrix4(s),e.ray.intersectsSphere(Bh)!==!1&&(L0.copy(s).invert(),zh.copy(e.ray).applyMatrix4(L0),!(this.boundingBox!==null&&zh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,zh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Nt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===nf?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Qy?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;C0.fromBufferAttribute(s.attributes.skinIndex,e),P0.fromBufferAttribute(s.attributes.skinWeight,e),R0.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let a=P0.getComponent(r);if(a!==0){let o=C0.getComponent(r);I0.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(IT.copy(R0).applyMatrix4(I0),a)}}return t.applyMatrix4(this.bindMatrixInverse)}},el=class extends Rt{constructor(){super(),this.isBone=!0,this.type="Bone"}},$i=class extends un{constructor(e=null,t=1,n=1,s,r,a,o,l,c=En,u=En,d,h){super(null,a,o,l,c,u,s,r,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},N0=new it,LT=new it,ou=class i{constructor(e=[],t=[]){this.uuid=li(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new it)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new it;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:LT;N0.multiplyMatrices(o,t[r]),N0.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new $i(t,e,e,oi,Si);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new el),this.bones.push(a),this.boneInverses.push(new it().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let a=t[s];e.bones.push(a.uuid);let o=n[s];e.boneInverses.push(o.toArray())}return e}},Hs=class extends Et{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ra=new it,D0=new it,Sc=[],U0=new Cn,NT=new it,_o=new tn,bo=new An,lu=class extends tn{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Hs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,NT)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Cn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ra),U0.copy(e.boundingBox).applyMatrix4(Ra),this.boundingBox.union(U0)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new An),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ra),bo.copy(e.boundingSphere).applyMatrix4(Ra),this.boundingSphere.union(bo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(_o.geometry=this.geometry,_o.material=this.material,_o.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),bo.copy(this.boundingSphere),bo.applyMatrix4(n),e.ray.intersectsSphere(bo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ra),D0.multiplyMatrices(n,Ra),_o.matrixWorld=D0,_o.raycast(e,Sc);for(let a=0,o=Sc.length;a<o;a++){let l=Sc[a];l.instanceId=r,l.object=this,t.push(l)}Sc.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Hs(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new $i(new Float32Array(s*this.count),s,this.count,tm,Si));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};function DT(i,e){return i.z-e.z}function UT(i,e){return e.z-i.z}var Zf=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t){let n=this.pool,s=this.list;this.index>=n.length&&n.push({start:-1,count:-1,z:-1});let r=n[this.index];s.push(r),this.index++,r.start=e.start,r.count=e.count,r.z=t}reset(){this.list.length=0,this.index=0}},Ca="batchId",Fs=new it,F0=new it,FT=new it,O0=new it,Vh=new Tr,Mc=new Cn,cr=new An,So=new U,Hh=new Zf,Un=new tn,wc=[];function OT(i,e,t=0){let n=e.itemSize;if(i.isInterleavedBufferAttribute||i.array.constructor!==e.array.constructor){let s=i.count;for(let r=0;r<s;r++)for(let a=0;a<n;a++)e.setComponent(r+t,a,i.getComponent(r,a))}else e.array.set(i.array,t*n);e.needsUpdate=!0}var cu=class extends tn{get maxGeometryCount(){return this._maxGeometryCount}constructor(e,t,n=t*2,s){super(new pt,s),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._drawRanges=[],this._reservedRanges=[],this._visibility=[],this._active=[],this._bounds=[],this._maxGeometryCount=e,this._maxVertexCount=t,this._maxIndexCount=n,this._geometryInitialized=!1,this._geometryCount=0,this._multiDrawCounts=new Int32Array(e),this._multiDrawStarts=new Int32Array(e),this._multiDrawCount=0,this._multiDrawInstances=null,this._visibilityChanged=!0,this._matricesTexture=null,this._initMatricesTexture()}_initMatricesTexture(){let e=Math.sqrt(this._maxGeometryCount*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4),n=new $i(t,e,e,oi,Si);this._matricesTexture=n}_initializeGeometry(e){let t=this.geometry,n=this._maxVertexCount,s=this._maxGeometryCount,r=this._maxIndexCount;if(this._geometryInitialized===!1){for(let o in e.attributes){let l=e.getAttribute(o),{array:c,itemSize:u,normalized:d}=l,h=new c.constructor(n*u),f=new Et(h,u,d);t.setAttribute(o,f)}if(e.getIndex()!==null){let o=n>65536?new Uint32Array(r):new Uint16Array(r);t.setIndex(new Et(o,1))}let a=s>65536?new Uint32Array(n):new Uint16Array(n);t.setAttribute(Ca,new Et(a,1)),this._geometryInitialized=!0}}_validateGeometry(e){if(e.getAttribute(Ca))throw new Error(`BatchedMesh: Geometry cannot use attribute "${Ca}"`);let t=this.geometry;if(!!e.getIndex()!=!!t.getIndex())throw new Error('BatchedMesh: All geometries must consistently have "index".');for(let n in t.attributes){if(n===Ca)continue;if(!e.hasAttribute(n))throw new Error(`BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);let s=e.getAttribute(n),r=t.getAttribute(n);if(s.itemSize!==r.itemSize||s.normalized!==r.normalized)throw new Error("BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}setCustomSort(e){return this.customSort=e,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Cn);let e=this._geometryCount,t=this.boundingBox,n=this._active;t.makeEmpty();for(let s=0;s<e;s++)n[s]!==!1&&(this.getMatrixAt(s,Fs),this.getBoundingBoxAt(s,Mc).applyMatrix4(Fs),t.union(Mc))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new An);let e=this._geometryCount,t=this.boundingSphere,n=this._active;t.makeEmpty();for(let s=0;s<e;s++)n[s]!==!1&&(this.getMatrixAt(s,Fs),this.getBoundingSphereAt(s,cr).applyMatrix4(Fs),t.union(cr))}addGeometry(e,t=-1,n=-1){if(this._initializeGeometry(e),this._validateGeometry(e),this._geometryCount>=this._maxGeometryCount)throw new Error("BatchedMesh: Maximum geometry count reached.");let s={vertexStart:-1,vertexCount:-1,indexStart:-1,indexCount:-1},r=null,a=this._reservedRanges,o=this._drawRanges,l=this._bounds;this._geometryCount!==0&&(r=a[a.length-1]),t===-1?s.vertexCount=e.getAttribute("position").count:s.vertexCount=t,r===null?s.vertexStart=0:s.vertexStart=r.vertexStart+r.vertexCount;let c=e.getIndex(),u=c!==null;if(u&&(n===-1?s.indexCount=c.count:s.indexCount=n,r===null?s.indexStart=0:s.indexStart=r.indexStart+r.indexCount),s.indexStart!==-1&&s.indexStart+s.indexCount>this._maxIndexCount||s.vertexStart+s.vertexCount>this._maxVertexCount)throw new Error("BatchedMesh: Reserved space request exceeds the maximum buffer size.");let d=this._visibility,h=this._active,f=this._matricesTexture,m=this._matricesTexture.image.data;d.push(!0),h.push(!0);let v=this._geometryCount;this._geometryCount++,FT.toArray(m,v*16),f.needsUpdate=!0,a.push(s),o.push({start:u?s.indexStart:s.vertexStart,count:-1}),l.push({boxInitialized:!1,box:new Cn,sphereInitialized:!1,sphere:new An});let g=this.geometry.getAttribute(Ca);for(let p=0;p<s.vertexCount;p++)g.setX(s.vertexStart+p,v);return g.needsUpdate=!0,this.setGeometryAt(v,e),v}setGeometryAt(e,t){if(e>=this._geometryCount)throw new Error("BatchedMesh: Maximum geometry count reached.");this._validateGeometry(t);let n=this.geometry,s=n.getIndex()!==null,r=n.getIndex(),a=t.getIndex(),o=this._reservedRanges[e];if(s&&a.count>o.indexCount||t.attributes.position.count>o.vertexCount)throw new Error("BatchedMesh: Reserved space not large enough for provided geometry.");let l=o.vertexStart,c=o.vertexCount;for(let f in n.attributes){if(f===Ca)continue;let m=t.getAttribute(f),v=n.getAttribute(f);OT(m,v,l);let g=m.itemSize;for(let p=m.count,x=c;p<x;p++){let y=l+p;for(let _=0;_<g;_++)v.setComponent(y,_,0)}v.needsUpdate=!0,v.addUpdateRange(l*g,c*g)}if(s){let f=o.indexStart;for(let m=0;m<a.count;m++)r.setX(f+m,l+a.getX(m));for(let m=a.count,v=o.indexCount;m<v;m++)r.setX(f+m,l);r.needsUpdate=!0,r.addUpdateRange(f,o.indexCount)}let u=this._bounds[e];t.boundingBox!==null?(u.box.copy(t.boundingBox),u.boxInitialized=!0):u.boxInitialized=!1,t.boundingSphere!==null?(u.sphere.copy(t.boundingSphere),u.sphereInitialized=!0):u.sphereInitialized=!1;let d=this._drawRanges[e],h=t.getAttribute("position");return d.count=s?a.count:h.count,this._visibilityChanged=!0,e}deleteGeometry(e){let t=this._active;return e>=t.length||t[e]===!1?this:(t[e]=!1,this._visibilityChanged=!0,this)}getInstanceCountAt(e){return this._multiDrawInstances===null?null:this._multiDrawInstances[e]}setInstanceCountAt(e,t){return this._multiDrawInstances===null&&(this._multiDrawInstances=new Int32Array(this._maxGeometryCount).fill(1)),this._multiDrawInstances[e]=t,e}getBoundingBoxAt(e,t){if(this._active[e]===!1)return null;let s=this._bounds[e],r=s.box,a=this.geometry;if(s.boxInitialized===!1){r.makeEmpty();let o=a.index,l=a.attributes.position,c=this._drawRanges[e];for(let u=c.start,d=c.start+c.count;u<d;u++){let h=u;o&&(h=o.getX(h)),r.expandByPoint(So.fromBufferAttribute(l,h))}s.boxInitialized=!0}return t.copy(r),t}getBoundingSphereAt(e,t){if(this._active[e]===!1)return null;let s=this._bounds[e],r=s.sphere,a=this.geometry;if(s.sphereInitialized===!1){r.makeEmpty(),this.getBoundingBoxAt(e,Mc),Mc.getCenter(r.center);let o=a.index,l=a.attributes.position,c=this._drawRanges[e],u=0;for(let d=c.start,h=c.start+c.count;d<h;d++){let f=d;o&&(f=o.getX(f)),So.fromBufferAttribute(l,f),u=Math.max(u,r.center.distanceToSquared(So))}r.radius=Math.sqrt(u),s.sphereInitialized=!0}return t.copy(r),t}setMatrixAt(e,t){let n=this._active,s=this._matricesTexture,r=this._matricesTexture.image.data,a=this._geometryCount;return e>=a||n[e]===!1?this:(t.toArray(r,e*16),s.needsUpdate=!0,this)}getMatrixAt(e,t){let n=this._active,s=this._matricesTexture.image.data,r=this._geometryCount;return e>=r||n[e]===!1?null:t.fromArray(s,e*16)}setVisibleAt(e,t){let n=this._visibility,s=this._active,r=this._geometryCount;return e>=r||s[e]===!1||n[e]===t?this:(n[e]=t,this._visibilityChanged=!0,this)}getVisibleAt(e){let t=this._visibility,n=this._active,s=this._geometryCount;return e>=s||n[e]===!1?!1:t[e]}raycast(e,t){let n=this._visibility,s=this._active,r=this._drawRanges,a=this._geometryCount,o=this.matrixWorld,l=this.geometry;Un.material=this.material,Un.geometry.index=l.index,Un.geometry.attributes=l.attributes,Un.geometry.boundingBox===null&&(Un.geometry.boundingBox=new Cn),Un.geometry.boundingSphere===null&&(Un.geometry.boundingSphere=new An);for(let c=0;c<a;c++){if(!n[c]||!s[c])continue;let u=r[c];Un.geometry.setDrawRange(u.start,u.count),this.getMatrixAt(c,Un.matrixWorld).premultiply(o),this.getBoundingBoxAt(c,Un.geometry.boundingBox),this.getBoundingSphereAt(c,Un.geometry.boundingSphere),Un.raycast(e,wc);for(let d=0,h=wc.length;d<h;d++){let f=wc[d];f.object=this,f.batchId=c,t.push(f)}wc.length=0}Un.material=null,Un.geometry.index=null,Un.geometry.attributes={},Un.geometry.setDrawRange(0,1/0)}copy(e){return super.copy(e),this.geometry=e.geometry.clone(),this.perObjectFrustumCulled=e.perObjectFrustumCulled,this.sortObjects=e.sortObjects,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this._drawRanges=e._drawRanges.map(t=>({...t})),this._reservedRanges=e._reservedRanges.map(t=>({...t})),this._visibility=e._visibility.slice(),this._active=e._active.slice(),this._bounds=e._bounds.map(t=>({boxInitialized:t.boxInitialized,box:t.box.clone(),sphereInitialized:t.sphereInitialized,sphere:t.sphere.clone()})),this._maxGeometryCount=e._maxGeometryCount,this._maxVertexCount=e._maxVertexCount,this._maxIndexCount=e._maxIndexCount,this._geometryInitialized=e._geometryInitialized,this._geometryCount=e._geometryCount,this._multiDrawCounts=e._multiDrawCounts.slice(),this._multiDrawStarts=e._multiDrawStarts.slice(),this._matricesTexture=e._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.slice(),this}dispose(){return this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this}onBeforeRender(e,t,n,s,r){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;let a=s.getIndex(),o=a===null?1:a.array.BYTES_PER_ELEMENT,l=this._active,c=this._visibility,u=this._multiDrawStarts,d=this._multiDrawCounts,h=this._drawRanges,f=this.perObjectFrustumCulled;f&&(O0.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse).multiply(this.matrixWorld),Vh.setFromProjectionMatrix(O0,e.coordinateSystem));let m=0;if(this.sortObjects){F0.copy(this.matrixWorld).invert(),So.setFromMatrixPosition(n.matrixWorld).applyMatrix4(F0);for(let p=0,x=c.length;p<x;p++)if(c[p]&&l[p]){this.getMatrixAt(p,Fs),this.getBoundingSphereAt(p,cr).applyMatrix4(Fs);let y=!1;if(f&&(y=!Vh.intersectsSphere(cr)),!y){let _=So.distanceTo(cr.center);Hh.push(h[p],_)}}let v=Hh.list,g=this.customSort;g===null?v.sort(r.transparent?UT:DT):g.call(this,v,n);for(let p=0,x=v.length;p<x;p++){let y=v[p];u[m]=y.start*o,d[m]=y.count,m++}Hh.reset()}else for(let v=0,g=c.length;v<g;v++)if(c[v]&&l[v]){let p=!1;if(f&&(this.getMatrixAt(v,Fs),this.getBoundingSphereAt(v,cr).applyMatrix4(Fs),p=!Vh.intersectsSphere(cr)),!p){let x=h[v];u[m]=x.start*o,d[m]=x.count,m++}}this._multiDrawCount=m,this._visibilityChanged=!1}onBeforeShadow(e,t,n,s,r,a){this.onBeforeRender(e,null,s,r,a)}},Pn=class extends Tn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new We(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},uu=new U,du=new U,k0=new it,Mo=new Vs,Ec=new An,Gh=new U,B0=new U,Ji=class extends Rt{constructor(e=new pt,t=new Pn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)uu.fromBufferAttribute(t,s-1),du.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=uu.distanceTo(du);e.setAttribute("lineDistance",new Ye(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ec.copy(n.boundingSphere),Ec.applyMatrix4(s),Ec.radius+=r,e.ray.intersectsSphere(Ec)===!1)return;k0.copy(s).invert(),Mo.copy(e.ray).applyMatrix4(k0);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){let f=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let v=f,g=m-1;v<g;v+=c){let p=u.getX(v),x=u.getX(v+1),y=Ac(this,e,Mo,l,p,x);y&&t.push(y)}if(this.isLineLoop){let v=u.getX(m-1),g=u.getX(f),p=Ac(this,e,Mo,l,v,g);p&&t.push(p)}}else{let f=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let v=f,g=m-1;v<g;v+=c){let p=Ac(this,e,Mo,l,v,v+1);p&&t.push(p)}if(this.isLineLoop){let v=Ac(this,e,Mo,l,m-1,f);v&&t.push(v)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Ac(i,e,t,n,s,r){let a=i.geometry.attributes.position;if(uu.fromBufferAttribute(a,s),du.fromBufferAttribute(a,r),t.distanceSqToSegment(uu,du,Gh,B0)>n)return;Gh.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Gh);if(!(l<e.near||l>e.far))return{distance:l,point:B0.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,object:i}}var z0=new U,V0=new U,Mi=class extends Ji{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)z0.fromBufferAttribute(t,s),V0.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+z0.distanceTo(V0);e.setAttribute("lineDistance",new Ye(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},hu=class extends Ji{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},tl=class extends Tn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new We(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},H0=new it,Jf=new Vs,Tc=new An,Rc=new U,fu=class extends Rt{constructor(e=new pt,t=new tl){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Tc.copy(n.boundingSphere),Tc.applyMatrix4(s),Tc.radius+=r,e.ray.intersectsSphere(Tc)===!1)return;H0.copy(s).invert(),Jf.copy(e.ray).applyMatrix4(H0);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){let h=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let m=h,v=f;m<v;m++){let g=c.getX(m);Rc.fromBufferAttribute(d,g),G0(Rc,g,l,s,e,t,this)}}else{let h=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let m=h,v=f;m<v;m++)Rc.fromBufferAttribute(d,m),G0(Rc,m,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function G0(i,e,t,n,s,r,a){let o=Jf.distanceSqToPoint(i);if(o<t){let l=new U;Jf.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}var jf=class extends un{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isVideoTexture=!0,this.minFilter=a!==void 0?a:cn,this.magFilter=r!==void 0?r:cn,this.generateMipmaps=!1;let u=this;function d(){u.needsUpdate=!0,e.requestVideoFrameCallback(d)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(d)}clone(){return new this.constructor(this.image).copy(this)}update(){let e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}},Kf=class extends un{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=En,this.minFilter=En,this.generateMipmaps=!1,this.needsUpdate=!0}},qa=class extends un{constructor(e,t,n,s,r,a,o,l,c,u,d,h){super(null,a,o,l,c,u,s,r,d,h),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}},Qf=class extends qa{constructor(e,t,n,s,r,a){super(e,t,n,r,a),this.isCompressedArrayTexture=!0,this.image.depth=s,this.wrapR=bi}},ep=class extends qa{constructor(e,t,n){super(void 0,e[0].width,e[0].height,t,n,ys),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=e}},tp=class extends un{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},hi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let u=n[s],h=n[s+1]-u,f=(a-u)/h;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new ve:new U);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new U,s=[],r=[],a=[],o=new U,l=new it;for(let f=0;f<=e;f++){let m=f/e;s[f]=this.getTangentAt(m,new U)}r[0]=new U,a[0]=new U;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),d=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),h<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos(en(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,m))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(en(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let m=1;m<=e;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],f*m)),a[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Xa=class extends hi{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new ve){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=l-this.aX,f=c-this.aY;l=h*u-f*d+this.aX,c=h*d+f*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},pu=class extends Xa{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function cm(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,d){let h=(a-r)/c-(o-r)/(c+u)+(o-a)/u,f=(o-a)/u-(l-a)/(u+d)+(l-o)/d;h*=u,f*=u,s(a,o,h,f)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var Cc=new U,Wh=new cm,qh=new cm,Xh=new cm,mu=class extends hi{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new U){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%r]:(Cc.subVectors(s[0],s[1]).add(s[0]),c=Cc);let d=s[o%r],h=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(Cc.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Cc),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(d),f),v=Math.pow(d.distanceToSquared(h),f),g=Math.pow(h.distanceToSquared(u),f);v<1e-4&&(v=1),m<1e-4&&(m=v),g<1e-4&&(g=v),Wh.initNonuniformCatmullRom(c.x,d.x,h.x,u.x,m,v,g),qh.initNonuniformCatmullRom(c.y,d.y,h.y,u.y,m,v,g),Xh.initNonuniformCatmullRom(c.z,d.z,h.z,u.z,m,v,g)}else this.curveType==="catmullrom"&&(Wh.initCatmullRom(c.x,d.x,h.x,u.x,this.tension),qh.initCatmullRom(c.y,d.y,h.y,u.y,this.tension),Xh.initCatmullRom(c.z,d.z,h.z,u.z,this.tension));return n.set(Wh.calc(l),qh.calc(l),Xh.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new U().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function W0(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function kT(i,e){let t=1-i;return t*t*e}function BT(i,e){return 2*(1-i)*i*e}function zT(i,e){return i*i*e}function Po(i,e,t,n){return kT(i,e)+BT(i,t)+zT(i,n)}function VT(i,e){let t=1-i;return t*t*t*e}function HT(i,e){let t=1-i;return 3*t*t*i*e}function GT(i,e){return 3*(1-i)*i*i*e}function WT(i,e){return i*i*i*e}function Io(i,e,t,n,s){return VT(i,e)+HT(i,t)+GT(i,n)+WT(i,s)}var nl=class extends hi{constructor(e=new ve,t=new ve,n=new ve,s=new ve){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new ve){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Io(e,s.x,r.x,a.x,o.x),Io(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},gu=class extends hi{constructor(e=new U,t=new U,n=new U,s=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new U){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Io(e,s.x,r.x,a.x,o.x),Io(e,s.y,r.y,a.y,o.y),Io(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},il=class extends hi{constructor(e=new ve,t=new ve){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ve){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ve){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},vu=class extends hi{constructor(e=new U,t=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new U){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new U){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},sl=class extends hi{constructor(e=new ve,t=new ve,n=new ve){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ve){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Po(e,s.x,r.x,a.x),Po(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},rl=class extends hi{constructor(e=new U,t=new U,n=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new U){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Po(e,s.x,r.x,a.x),Po(e,s.y,r.y,a.y),Po(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},al=class extends hi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ve){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],u=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return n.set(W0(o,l.x,c.x,u.x,d.x),W0(o,l.y,c.y,u.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new ve().fromArray(s))}return this}},yu=Object.freeze({__proto__:null,ArcCurve:pu,CatmullRomCurve3:mu,CubicBezierCurve:nl,CubicBezierCurve3:gu,EllipseCurve:Xa,LineCurve:il,LineCurve3:vu,QuadraticBezierCurve:sl,QuadraticBezierCurve3:rl,SplineCurve:al}),xu=class extends hi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new yu[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new yu[s.type]().fromJSON(s))}return this}},Cr=class extends xu{constructor(e){super(),this.type="Path",this.currentPoint=new ve,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new il(this.currentPoint.clone(),new ve(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new sl(this.currentPoint.clone(),new ve(e,t),new ve(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new nl(this.currentPoint.clone(),new ve(e,t),new ve(n,s),new ve(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new al(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){let c=new Xa(e,t,n,s,r,a,o,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},ol=class i extends pt{constructor(e=[new ve(0,-.5),new ve(.5,0),new ve(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=en(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],u=1/t,d=new U,h=new ve,f=new U,m=new U,v=new U,g=0,p=0;for(let x=0;x<=e.length-1;x++)switch(x){case 0:g=e[x+1].x-e[x].x,p=e[x+1].y-e[x].y,f.x=p*1,f.y=-g,f.z=p*0,v.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(v.x,v.y,v.z);break;default:g=e[x+1].x-e[x].x,p=e[x+1].y-e[x].y,f.x=p*1,f.y=-g,f.z=p*0,m.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),l.push(f.x,f.y,f.z),v.copy(m)}for(let x=0;x<=t;x++){let y=n+x*u*s,_=Math.sin(y),L=Math.cos(y);for(let M=0;M<=e.length-1;M++){d.x=e[M].x*_,d.y=e[M].y,d.z=e[M].x*L,a.push(d.x,d.y,d.z),h.x=x/t,h.y=M/(e.length-1),o.push(h.x,h.y);let R=l[3*M+0]*_,P=l[3*M+1],w=l[3*M+0]*L;c.push(R,P,w)}}for(let x=0;x<t;x++)for(let y=0;y<e.length-1;y++){let _=y+x*e.length,L=_,M=_+e.length,R=_+e.length+1,P=_+1;r.push(L,M,P),r.push(R,P,M)}this.setIndex(r),this.setAttribute("position",new Ye(a,3)),this.setAttribute("uv",new Ye(o,2)),this.setAttribute("normal",new Ye(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}},_u=class i extends ol{constructor(e=1,t=1,n=4,s=8){let r=new Cr;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:s}}static fromJSON(e){return new i(e.radius,e.length,e.capSegments,e.radialSegments)}},bu=class i extends pt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new U,u=new ve;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,h=3;d<=t;d++,h+=3){let f=n+d/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[h]/e+1)/2,u.y=(a[h+1]/e+1)/2,l.push(u.x,u.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Ye(a,3)),this.setAttribute("normal",new Ye(o,3)),this.setAttribute("uv",new Ye(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},$a=class i extends pt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],d=[],h=[],f=[],m=0,v=[],g=n/2,p=0;x(),a===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new Ye(d,3)),this.setAttribute("normal",new Ye(h,3)),this.setAttribute("uv",new Ye(f,2));function x(){let _=new U,L=new U,M=0,R=(t-e)/n;for(let P=0;P<=r;P++){let w=[],S=P/r,D=S*(t-e)+e;for(let B=0;B<=s;B++){let C=B/s,V=C*l+o,q=Math.sin(V),ne=Math.cos(V);L.x=D*q,L.y=-S*n+g,L.z=D*ne,d.push(L.x,L.y,L.z),_.set(q,R,ne).normalize(),h.push(_.x,_.y,_.z),f.push(C,1-S),w.push(m++)}v.push(w)}for(let P=0;P<s;P++)for(let w=0;w<r;w++){let S=v[w][P],D=v[w+1][P],B=v[w+1][P+1],C=v[w][P+1];u.push(S,D,C),u.push(D,B,C),M+=6}c.addGroup(p,M,0),p+=M}function y(_){let L=m,M=new ve,R=new U,P=0,w=_===!0?e:t,S=_===!0?1:-1;for(let B=1;B<=s;B++)d.push(0,g*S,0),h.push(0,S,0),f.push(.5,.5),m++;let D=m;for(let B=0;B<=s;B++){let V=B/s*l+o,q=Math.cos(V),ne=Math.sin(V);R.x=w*ne,R.y=g*S,R.z=w*q,d.push(R.x,R.y,R.z),h.push(0,S,0),M.x=q*.5+.5,M.y=ne*.5*S+.5,f.push(M.x,M.y),m++}for(let B=0;B<s;B++){let C=L+B,V=D+B;_===!0?u.push(V,V+1,C):u.push(V+1,V,C),P+=3}c.addGroup(p,P,_===!0?1:2),p+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Su=class i extends $a{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Gs=class i extends pt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),c(n),u(),this.setAttribute("position",new Ye(r,3)),this.setAttribute("normal",new Ye(r.slice(),3)),this.setAttribute("uv",new Ye(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(x){let y=new U,_=new U,L=new U;for(let M=0;M<t.length;M+=3)f(t[M+0],y),f(t[M+1],_),f(t[M+2],L),l(y,_,L,x)}function l(x,y,_,L){let M=L+1,R=[];for(let P=0;P<=M;P++){R[P]=[];let w=x.clone().lerp(_,P/M),S=y.clone().lerp(_,P/M),D=M-P;for(let B=0;B<=D;B++)B===0&&P===M?R[P][B]=w:R[P][B]=w.clone().lerp(S,B/D)}for(let P=0;P<M;P++)for(let w=0;w<2*(M-P)-1;w++){let S=Math.floor(w/2);w%2===0?(h(R[P][S+1]),h(R[P+1][S]),h(R[P][S])):(h(R[P][S+1]),h(R[P+1][S+1]),h(R[P+1][S]))}}function c(x){let y=new U;for(let _=0;_<r.length;_+=3)y.x=r[_+0],y.y=r[_+1],y.z=r[_+2],y.normalize().multiplyScalar(x),r[_+0]=y.x,r[_+1]=y.y,r[_+2]=y.z}function u(){let x=new U;for(let y=0;y<r.length;y+=3){x.x=r[y+0],x.y=r[y+1],x.z=r[y+2];let _=g(x)/2/Math.PI+.5,L=p(x)/Math.PI+.5;a.push(_,1-L)}m(),d()}function d(){for(let x=0;x<a.length;x+=6){let y=a[x+0],_=a[x+2],L=a[x+4],M=Math.max(y,_,L),R=Math.min(y,_,L);M>.9&&R<.1&&(y<.2&&(a[x+0]+=1),_<.2&&(a[x+2]+=1),L<.2&&(a[x+4]+=1))}}function h(x){r.push(x.x,x.y,x.z)}function f(x,y){let _=x*3;y.x=e[_+0],y.y=e[_+1],y.z=e[_+2]}function m(){let x=new U,y=new U,_=new U,L=new U,M=new ve,R=new ve,P=new ve;for(let w=0,S=0;w<r.length;w+=9,S+=6){x.set(r[w+0],r[w+1],r[w+2]),y.set(r[w+3],r[w+4],r[w+5]),_.set(r[w+6],r[w+7],r[w+8]),M.set(a[S+0],a[S+1]),R.set(a[S+2],a[S+3]),P.set(a[S+4],a[S+5]),L.copy(x).add(y).add(_).divideScalar(3);let D=g(L);v(M,S+0,x,D),v(R,S+2,y,D),v(P,S+4,_,D)}}function v(x,y,_,L){L<0&&x.x===1&&(a[y]=x.x-1),_.x===0&&_.z===0&&(a[y]=L/2/Math.PI+.5)}function g(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}},Mu=class i extends Gs{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Pc=new U,Ic=new U,$h=new U,Lc=new hs,wu=class extends pt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let s=Math.pow(10,4),r=Math.cos(Mr*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],u=["a","b","c"],d=new Array(3),h={},f=[];for(let m=0;m<l;m+=3){a?(c[0]=a.getX(m),c[1]=a.getX(m+1),c[2]=a.getX(m+2)):(c[0]=m,c[1]=m+1,c[2]=m+2);let{a:v,b:g,c:p}=Lc;if(v.fromBufferAttribute(o,c[0]),g.fromBufferAttribute(o,c[1]),p.fromBufferAttribute(o,c[2]),Lc.getNormal($h),d[0]=`${Math.round(v.x*s)},${Math.round(v.y*s)},${Math.round(v.z*s)}`,d[1]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,d[2]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let x=0;x<3;x++){let y=(x+1)%3,_=d[x],L=d[y],M=Lc[u[x]],R=Lc[u[y]],P=`${_}_${L}`,w=`${L}_${_}`;w in h&&h[w]?($h.dot(h[w].normal)<=r&&(f.push(M.x,M.y,M.z),f.push(R.x,R.y,R.z)),h[w]=null):P in h||(h[P]={index0:c[x],index1:c[y],normal:$h.clone()})}}for(let m in h)if(h[m]){let{index0:v,index1:g}=h[m];Pc.fromBufferAttribute(o,v),Ic.fromBufferAttribute(o,g),f.push(Pc.x,Pc.y,Pc.z),f.push(Ic.x,Ic.y,Ic.z)}this.setAttribute("position",new Ye(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},gs=class extends Cr{constructor(e){super(e),this.uuid=li(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Cr().fromJSON(s))}return this}},qT={triangulate:function(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Fx(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c,u,d,h,f;if(n&&(r=JT(i,e,r,t)),i.length>80*t){o=c=i[0],l=u=i[1];for(let m=t;m<s;m+=t)d=i[m],h=i[m+1],d<o&&(o=d),h<l&&(l=h),d>c&&(c=d),h>u&&(u=h);f=Math.max(c-o,u-l),f=f!==0?32767/f:0}return ll(r,a,t,o,l,f,0),a}};function Fx(i,e,t,n,s){let r,a;if(s===oR(i,e,t,n)>0)for(r=e;r<t;r+=n)a=q0(r,i[r],i[r+1],a);else for(r=t-n;r>=e;r-=n)a=q0(r,i[r],i[r+1],a);return a&&dd(a,a.next)&&(ul(a),a=a.next),a}function Pr(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(dd(t,t.next)||Jt(t.prev,t,t.next)===0)){if(ul(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function ll(i,e,t,n,s,r,a){if(!i)return;!a&&r&&tR(i,n,s,r);let o=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?$T(i,n,s,r):XT(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),ul(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=YT(Pr(i),e,t),ll(i,e,t,n,s,r,2)):a===2&&ZT(i,e,t,n,s,r):ll(Pr(i),e,t,n,s,r,1);break}}}function XT(i){let e=i.prev,t=i,n=i.next;if(Jt(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,u=s<r?s<a?s:a:r<a?r:a,d=o<l?o<c?o:c:l<c?l:c,h=s>r?s>a?s:a:r>a?r:a,f=o>l?o>c?o:c:l>c?l:c,m=n.next;for(;m!==e;){if(m.x>=u&&m.x<=h&&m.y>=d&&m.y<=f&&Na(s,o,r,l,a,c,m.x,m.y)&&Jt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function $T(i,e,t,n){let s=i.prev,r=i,a=i.next;if(Jt(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,u=s.y,d=r.y,h=a.y,f=o<l?o<c?o:c:l<c?l:c,m=u<d?u<h?u:h:d<h?d:h,v=o>l?o>c?o:c:l>c?l:c,g=u>d?u>h?u:h:d>h?d:h,p=np(f,m,e,t,n),x=np(v,g,e,t,n),y=i.prevZ,_=i.nextZ;for(;y&&y.z>=p&&_&&_.z<=x;){if(y.x>=f&&y.x<=v&&y.y>=m&&y.y<=g&&y!==s&&y!==a&&Na(o,u,l,d,c,h,y.x,y.y)&&Jt(y.prev,y,y.next)>=0||(y=y.prevZ,_.x>=f&&_.x<=v&&_.y>=m&&_.y<=g&&_!==s&&_!==a&&Na(o,u,l,d,c,h,_.x,_.y)&&Jt(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;y&&y.z>=p;){if(y.x>=f&&y.x<=v&&y.y>=m&&y.y<=g&&y!==s&&y!==a&&Na(o,u,l,d,c,h,y.x,y.y)&&Jt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;_&&_.z<=x;){if(_.x>=f&&_.x<=v&&_.y>=m&&_.y<=g&&_!==s&&_!==a&&Na(o,u,l,d,c,h,_.x,_.y)&&Jt(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function YT(i,e,t){let n=i;do{let s=n.prev,r=n.next.next;!dd(s,r)&&Ox(s,n,n.next,r)&&cl(s,r)&&cl(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),ul(n),ul(n.next),n=i=r),n=n.next}while(n!==i);return Pr(n)}function ZT(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&sR(a,o)){let l=kx(a,o);a=Pr(a,a.next),l=Pr(l,l.next),ll(a,e,t,n,s,r,0),ll(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function JT(i,e,t,n){let s=[],r,a,o,l,c;for(r=0,a=e.length;r<a;r++)o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=Fx(i,o,l,n,!1),c===c.next&&(c.steiner=!0),s.push(iR(c));for(s.sort(jT),r=0;r<s.length;r++)t=KT(s[r],t);return t}function jT(i,e){return i.x-e.x}function KT(i,e){let t=QT(i,e);if(!t)return e;let n=kx(t,i);return Pr(n,n.next),Pr(t,t.next)}function QT(i,e){let t=e,n=-1/0,s,r=i.x,a=i.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){let h=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=r&&h>n&&(n=h,s=t.x<t.next.x?t:t.next,h===r))return s}t=t.next}while(t!==e);if(!s)return null;let o=s,l=s.x,c=s.y,u=1/0,d;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&Na(a<c?r:n,a,l,c,a<c?n:r,a,t.x,t.y)&&(d=Math.abs(a-t.y)/(r-t.x),cl(t,i)&&(d<u||d===u&&(t.x>s.x||t.x===s.x&&eR(s,t)))&&(s=t,u=d)),t=t.next;while(t!==o);return s}function eR(i,e){return Jt(i.prev,i,e.prev)<0&&Jt(e.next,i,i.next)<0}function tR(i,e,t,n){let s=i;do s.z===0&&(s.z=np(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,nR(s)}function nR(i){let e,t,n,s,r,a,o,l,c=1;do{for(t=i,i=null,r=null,a=0;t;){for(a++,n=t,o=0,e=0;e<c&&(o++,n=n.nextZ,!!n);e++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,o--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,c*=2}while(a>1);return i}function np(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function iR(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Na(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function sR(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!rR(i,e)&&(cl(i,e)&&cl(e,i)&&aR(i,e)&&(Jt(i.prev,i,e.prev)||Jt(i,e.prev,e))||dd(i,e)&&Jt(i.prev,i,i.next)>0&&Jt(e.prev,e,e.next)>0)}function Jt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function dd(i,e){return i.x===e.x&&i.y===e.y}function Ox(i,e,t,n){let s=Dc(Jt(i,e,t)),r=Dc(Jt(i,e,n)),a=Dc(Jt(t,n,i)),o=Dc(Jt(t,n,e));return!!(s!==r&&a!==o||s===0&&Nc(i,t,e)||r===0&&Nc(i,n,e)||a===0&&Nc(t,i,n)||o===0&&Nc(t,e,n))}function Nc(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Dc(i){return i>0?1:i<0?-1:0}function rR(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Ox(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function cl(i,e){return Jt(i.prev,i,i.next)<0?Jt(i,e,i.next)>=0&&Jt(i,i.prev,e)>=0:Jt(i,e,i.prev)<0||Jt(i,i.next,e)<0}function aR(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function kx(i,e){let t=new ip(i.i,i.x,i.y),n=new ip(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function q0(i,e,t,n){let s=new ip(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function ul(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function ip(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function oR(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Yi=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];X0(e),$0(n,e);let a=e.length;t.forEach(X0);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,$0(n,t[l]);let o=qT.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function X0(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function $0(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Eu=class i extends pt{constructor(e=new gs([new ve(.5,.5),new ve(-.5,.5),new ve(-.5,-.5),new ve(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new Ye(s,3)),this.setAttribute("uv",new Ye(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:f-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,x=t.UVGenerator!==void 0?t.UVGenerator:lR,y,_=!1,L,M,R,P;p&&(y=p.getSpacedPoints(u),_=!0,h=!1,L=p.computeFrenetFrames(u,!1),M=new U,R=new U,P=new U),h||(g=0,f=0,m=0,v=0);let w=o.extractPoints(c),S=w.shape,D=w.holes;if(!Yi.isClockWise(S)){S=S.reverse();for(let ae=0,me=D.length;ae<me;ae++){let se=D[ae];Yi.isClockWise(se)&&(D[ae]=se.reverse())}}let C=Yi.triangulateShape(S,D),V=S;for(let ae=0,me=D.length;ae<me;ae++){let se=D[ae];S=S.concat(se)}function q(ae,me,se){return me||console.error("THREE.ExtrudeGeometry: vec does not exist"),ae.clone().addScaledVector(me,se)}let ne=S.length,ee=C.length;function K(ae,me,se){let Ae,fe,Ce,qe=ae.x-me.x,N=ae.y-me.y,A=se.x-ae.x,k=se.y-ae.y,O=qe*qe+N*N,Z=qe*k-N*A;if(Math.abs(Z)>Number.EPSILON){let $=Math.sqrt(O),ie=Math.sqrt(A*A+k*k),ye=me.x-N/$,xe=me.y+qe/$,je=se.x-k/ie,we=se.y+A/ie,ke=((je-ye)*k-(we-xe)*A)/(qe*k-N*A);Ae=ye+qe*ke-ae.x,fe=xe+N*ke-ae.y;let rt=Ae*Ae+fe*fe;if(rt<=2)return new ve(Ae,fe);Ce=Math.sqrt(rt/2)}else{let $=!1;qe>Number.EPSILON?A>Number.EPSILON&&($=!0):qe<-Number.EPSILON?A<-Number.EPSILON&&($=!0):Math.sign(N)===Math.sign(k)&&($=!0),$?(Ae=-N,fe=qe,Ce=Math.sqrt(O)):(Ae=qe,fe=N,Ce=Math.sqrt(O/2))}return new ve(Ae/Ce,fe/Ce)}let re=[];for(let ae=0,me=V.length,se=me-1,Ae=ae+1;ae<me;ae++,se++,Ae++)se===me&&(se=0),Ae===me&&(Ae=0),re[ae]=K(V[ae],V[se],V[Ae]);let oe=[],Se,Re=re.concat();for(let ae=0,me=D.length;ae<me;ae++){let se=D[ae];Se=[];for(let Ae=0,fe=se.length,Ce=fe-1,qe=Ae+1;Ae<fe;Ae++,Ce++,qe++)Ce===fe&&(Ce=0),qe===fe&&(qe=0),Se[Ae]=K(se[Ae],se[Ce],se[qe]);oe.push(Se),Re=Re.concat(Se)}for(let ae=0;ae<g;ae++){let me=ae/g,se=f*Math.cos(me*Math.PI/2),Ae=m*Math.sin(me*Math.PI/2)+v;for(let fe=0,Ce=V.length;fe<Ce;fe++){let qe=q(V[fe],re[fe],Ae);ce(qe.x,qe.y,-se)}for(let fe=0,Ce=D.length;fe<Ce;fe++){let qe=D[fe];Se=oe[fe];for(let N=0,A=qe.length;N<A;N++){let k=q(qe[N],Se[N],Ae);ce(k.x,k.y,-se)}}}let be=m+v;for(let ae=0;ae<ne;ae++){let me=h?q(S[ae],Re[ae],be):S[ae];_?(R.copy(L.normals[0]).multiplyScalar(me.x),M.copy(L.binormals[0]).multiplyScalar(me.y),P.copy(y[0]).add(R).add(M),ce(P.x,P.y,P.z)):ce(me.x,me.y,0)}for(let ae=1;ae<=u;ae++)for(let me=0;me<ne;me++){let se=h?q(S[me],Re[me],be):S[me];_?(R.copy(L.normals[ae]).multiplyScalar(se.x),M.copy(L.binormals[ae]).multiplyScalar(se.y),P.copy(y[ae]).add(R).add(M),ce(P.x,P.y,P.z)):ce(se.x,se.y,d/u*ae)}for(let ae=g-1;ae>=0;ae--){let me=ae/g,se=f*Math.cos(me*Math.PI/2),Ae=m*Math.sin(me*Math.PI/2)+v;for(let fe=0,Ce=V.length;fe<Ce;fe++){let qe=q(V[fe],re[fe],Ae);ce(qe.x,qe.y,d+se)}for(let fe=0,Ce=D.length;fe<Ce;fe++){let qe=D[fe];Se=oe[fe];for(let N=0,A=qe.length;N<A;N++){let k=q(qe[N],Se[N],Ae);_?ce(k.x,k.y+y[u-1].y,y[u-1].x+se):ce(k.x,k.y,d+se)}}}te(),ue();function te(){let ae=s.length/3;if(h){let me=0,se=ne*me;for(let Ae=0;Ae<ee;Ae++){let fe=C[Ae];Ve(fe[2]+se,fe[1]+se,fe[0]+se)}me=u+g*2,se=ne*me;for(let Ae=0;Ae<ee;Ae++){let fe=C[Ae];Ve(fe[0]+se,fe[1]+se,fe[2]+se)}}else{for(let me=0;me<ee;me++){let se=C[me];Ve(se[2],se[1],se[0])}for(let me=0;me<ee;me++){let se=C[me];Ve(se[0]+ne*u,se[1]+ne*u,se[2]+ne*u)}}n.addGroup(ae,s.length/3-ae,0)}function ue(){let ae=s.length/3,me=0;pe(V,me),me+=V.length;for(let se=0,Ae=D.length;se<Ae;se++){let fe=D[se];pe(fe,me),me+=fe.length}n.addGroup(ae,s.length/3-ae,1)}function pe(ae,me){let se=ae.length;for(;--se>=0;){let Ae=se,fe=se-1;fe<0&&(fe=ae.length-1);for(let Ce=0,qe=u+g*2;Ce<qe;Ce++){let N=ne*Ce,A=ne*(Ce+1),k=me+Ae+N,O=me+fe+N,Z=me+fe+A,$=me+Ae+A;Je(k,O,Z,$)}}}function ce(ae,me,se){l.push(ae),l.push(me),l.push(se)}function Ve(ae,me,se){H(ae),H(me),H(se);let Ae=s.length/3,fe=x.generateTopUV(n,s,Ae-3,Ae-2,Ae-1);et(fe[0]),et(fe[1]),et(fe[2])}function Je(ae,me,se,Ae){H(ae),H(me),H(Ae),H(me),H(se),H(Ae);let fe=s.length/3,Ce=x.generateSideWallUV(n,s,fe-6,fe-3,fe-2,fe-1);et(Ce[0]),et(Ce[1]),et(Ce[3]),et(Ce[1]),et(Ce[2]),et(Ce[3])}function H(ae){s.push(l[ae*3+0]),s.push(l[ae*3+1]),s.push(l[ae*3+2])}function et(ae){r.push(ae.x),r.push(ae.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return cR(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new yu[s.type]().fromJSON(s)),new i(n,e.options)}},lR={generateTopUV:function(i,e,t,n,s){let r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[s*3],u=e[s*3+1];return[new ve(r,a),new ve(o,l),new ve(c,u)]},generateSideWallUV:function(i,e,t,n,s,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],d=e[n*3+2],h=e[s*3],f=e[s*3+1],m=e[s*3+2],v=e[r*3],g=e[r*3+1],p=e[r*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new ve(a,1-l),new ve(c,1-d),new ve(h,1-m),new ve(v,1-p)]:[new ve(o,1-l),new ve(u,1-d),new ve(f,1-m),new ve(g,1-p)]}};function cR(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Au=class i extends Gs{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},dl=class i extends Gs{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Tu=class i extends pt{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],u=[],d=e,h=(t-e)/s,f=new U,m=new ve;for(let v=0;v<=s;v++){for(let g=0;g<=n;g++){let p=r+g/n*a;f.x=d*Math.cos(p),f.y=d*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),m.x=(f.x/t+1)/2,m.y=(f.y/t+1)/2,u.push(m.x,m.y)}d+=h}for(let v=0;v<s;v++){let g=v*(n+1);for(let p=0;p<n;p++){let x=p+g,y=x,_=x+n+1,L=x+n+2,M=x+1;o.push(y,_,M),o.push(_,L,M)}}this.setIndex(o),this.setAttribute("position",new Ye(l,3)),this.setAttribute("normal",new Ye(c,3)),this.setAttribute("uv",new Ye(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Ru=class i extends pt{constructor(e=new gs([new ve(0,.5),new ve(-.5,-.5),new ve(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(o,l,u),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new Ye(s,3)),this.setAttribute("normal",new Ye(r,3)),this.setAttribute("uv",new Ye(a,2));function c(u){let d=s.length/3,h=u.extractPoints(t),f=h.shape,m=h.holes;Yi.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,p=m.length;g<p;g++){let x=m[g];Yi.isClockWise(x)===!0&&(m[g]=x.reverse())}let v=Yi.triangulateShape(f,m);for(let g=0,p=m.length;g<p;g++){let x=m[g];f=f.concat(x)}for(let g=0,p=f.length;g<p;g++){let x=f[g];s.push(x.x,x.y,0),r.push(0,0,1),a.push(x.x,x.y)}for(let g=0,p=v.length;g<p;g++){let x=v[g],y=x[0]+d,_=x[1]+d,L=x[2]+d;n.push(y,_,L),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return uR(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let a=t[e.shapes[s]];n.push(a)}return new i(n,e.curveSegments)}};function uR(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var hl=class i extends pt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,u=[],d=new U,h=new U,f=[],m=[],v=[],g=[];for(let p=0;p<=n;p++){let x=[],y=p/n,_=0;p===0&&a===0?_=.5/t:p===n&&l===Math.PI&&(_=-.5/t);for(let L=0;L<=t;L++){let M=L/t;d.x=-e*Math.cos(s+M*r)*Math.sin(a+y*o),d.y=e*Math.cos(a+y*o),d.z=e*Math.sin(s+M*r)*Math.sin(a+y*o),m.push(d.x,d.y,d.z),h.copy(d).normalize(),v.push(h.x,h.y,h.z),g.push(M+_,1-y),x.push(c++)}u.push(x)}for(let p=0;p<n;p++)for(let x=0;x<t;x++){let y=u[p][x+1],_=u[p][x],L=u[p+1][x],M=u[p+1][x+1];(p!==0||a>0)&&f.push(y,_,M),(p!==n-1||l<Math.PI)&&f.push(_,L,M)}this.setIndex(f),this.setAttribute("position",new Ye(m,3)),this.setAttribute("normal",new Ye(v,3)),this.setAttribute("uv",new Ye(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},Cu=class i extends Gs{constructor(e=1,t=0){let n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,s,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Pu=class i extends pt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],l=[],c=[],u=new U,d=new U,h=new U;for(let f=0;f<=n;f++)for(let m=0;m<=s;m++){let v=m/s*r,g=f/n*Math.PI*2;d.x=(e+t*Math.cos(g))*Math.cos(v),d.y=(e+t*Math.cos(g))*Math.sin(v),d.z=t*Math.sin(g),o.push(d.x,d.y,d.z),u.x=e*Math.cos(v),u.y=e*Math.sin(v),h.subVectors(d,u).normalize(),l.push(h.x,h.y,h.z),c.push(m/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let m=1;m<=s;m++){let v=(s+1)*f+m-1,g=(s+1)*(f-1)+m-1,p=(s+1)*(f-1)+m,x=(s+1)*f+m;a.push(v,g,x),a.push(g,p,x)}this.setIndex(a),this.setAttribute("position",new Ye(o,3)),this.setAttribute("normal",new Ye(l,3)),this.setAttribute("uv",new Ye(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},Iu=class i extends pt{constructor(e=1,t=.4,n=64,s=8,r=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:s,p:r,q:a},n=Math.floor(n),s=Math.floor(s);let o=[],l=[],c=[],u=[],d=new U,h=new U,f=new U,m=new U,v=new U,g=new U,p=new U;for(let y=0;y<=n;++y){let _=y/n*r*Math.PI*2;x(_,r,a,e,f),x(_+.01,r,a,e,m),g.subVectors(m,f),p.addVectors(m,f),v.crossVectors(g,p),p.crossVectors(v,g),v.normalize(),p.normalize();for(let L=0;L<=s;++L){let M=L/s*Math.PI*2,R=-t*Math.cos(M),P=t*Math.sin(M);d.x=f.x+(R*p.x+P*v.x),d.y=f.y+(R*p.y+P*v.y),d.z=f.z+(R*p.z+P*v.z),l.push(d.x,d.y,d.z),h.subVectors(d,f).normalize(),c.push(h.x,h.y,h.z),u.push(y/n),u.push(L/s)}}for(let y=1;y<=n;y++)for(let _=1;_<=s;_++){let L=(s+1)*(y-1)+(_-1),M=(s+1)*y+(_-1),R=(s+1)*y+_,P=(s+1)*(y-1)+_;o.push(L,M,P),o.push(M,R,P)}this.setIndex(o),this.setAttribute("position",new Ye(l,3)),this.setAttribute("normal",new Ye(c,3)),this.setAttribute("uv",new Ye(u,2));function x(y,_,L,M,R){let P=Math.cos(y),w=Math.sin(y),S=L/_*y,D=Math.cos(S);R.x=M*(2+D)*.5*P,R.y=M*(2+D)*w*.5,R.z=M*Math.sin(S)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}},Lu=class i extends pt{constructor(e=new rl(new U(-1,-1,0),new U(-1,1,0),new U(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new U,l=new U,c=new ve,u=new U,d=[],h=[],f=[],m=[];v(),this.setIndex(m),this.setAttribute("position",new Ye(d,3)),this.setAttribute("normal",new Ye(h,3)),this.setAttribute("uv",new Ye(f,2));function v(){for(let y=0;y<t;y++)g(y);g(r===!1?t:0),x(),p()}function g(y){u=e.getPointAt(y/t,u);let _=a.normals[y],L=a.binormals[y];for(let M=0;M<=s;M++){let R=M/s*Math.PI*2,P=Math.sin(R),w=-Math.cos(R);l.x=w*_.x+P*L.x,l.y=w*_.y+P*L.y,l.z=w*_.z+P*L.z,l.normalize(),h.push(l.x,l.y,l.z),o.x=u.x+n*l.x,o.y=u.y+n*l.y,o.z=u.z+n*l.z,d.push(o.x,o.y,o.z)}}function p(){for(let y=1;y<=t;y++)for(let _=1;_<=s;_++){let L=(s+1)*(y-1)+(_-1),M=(s+1)*y+(_-1),R=(s+1)*y+_,P=(s+1)*(y-1)+_;m.push(L,M,P),m.push(M,R,P)}}function x(){for(let y=0;y<=t;y++)for(let _=0;_<=s;_++)c.x=y/t,c.y=_/s,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new yu[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},Nu=class extends pt{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],n=new Set,s=new U,r=new U;if(e.index!==null){let a=e.attributes.position,o=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,u=l.length;c<u;++c){let d=l[c],h=d.start,f=d.count;for(let m=h,v=h+f;m<v;m+=3)for(let g=0;g<3;g++){let p=o.getX(m+g),x=o.getX(m+(g+1)%3);s.fromBufferAttribute(a,p),r.fromBufferAttribute(a,x),Y0(s,r,n)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}}else{let a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){let u=3*o+c,d=3*o+(c+1)%3;s.fromBufferAttribute(a,u),r.fromBufferAttribute(a,d),Y0(s,r,n)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new Ye(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function Y0(i,e,t){let n=`${i.x},${i.y},${i.z}-${e.x},${e.y},${e.z}`,s=`${e.x},${e.y},${e.z}-${i.x},${i.y},${i.z}`;return t.has(n)===!0||t.has(s)===!0?!1:(t.add(n),t.add(s),!0)}var Z0=Object.freeze({__proto__:null,BoxGeometry:Er,CapsuleGeometry:_u,CircleGeometry:bu,ConeGeometry:Su,CylinderGeometry:$a,DodecahedronGeometry:Mu,EdgesGeometry:wu,ExtrudeGeometry:Eu,IcosahedronGeometry:Au,LatheGeometry:ol,OctahedronGeometry:dl,PlaneGeometry:Ha,PolyhedronGeometry:Gs,RingGeometry:Tu,ShapeGeometry:Ru,SphereGeometry:hl,TetrahedronGeometry:Cu,TorusGeometry:Pu,TorusKnotGeometry:Iu,TubeGeometry:Lu,WireframeGeometry:Nu}),Du=class extends Tn{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new We(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}},Uu=class extends di{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},fl=class extends Tn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new We(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qs,this.normalScale=new ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ui,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Fu=class extends fl{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ve(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return en(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new We(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new We(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new We(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},Ou=class extends Tn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new We(16777215),this.specular=new We(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qs,this.normalScale=new ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ui,this.combine=_l,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},ku=class extends Tn{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new We(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qs,this.normalScale=new ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Bu=class extends Tn{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qs,this.normalScale=new ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}},zu=class extends Tn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qs,this.normalScale=new ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ui,this.combine=_l,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Vu=class extends Tn{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new We(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qs,this.normalScale=new ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this.fog=e.fog,this}},Hu=class extends Pn{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}};function _r(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Bx(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function zx(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function sp(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let l=0;l!==e;++l)s[a++]=i[o+l]}return s}function um(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}function dR(i,e,t,n,s=30){let r=i.clone();r.name=e;let a=[];for(let l=0;l<r.tracks.length;++l){let c=r.tracks[l],u=c.getValueSize(),d=[],h=[];for(let f=0;f<c.times.length;++f){let m=c.times[f]*s;if(!(m<t||m>=n)){d.push(c.times[f]);for(let v=0;v<u;++v)h.push(c.values[f*u+v])}}d.length!==0&&(c.times=_r(d,c.times.constructor),c.values=_r(h,c.values.constructor),a.push(c))}r.tracks=a;let o=1/0;for(let l=0;l<r.tracks.length;++l)o>r.tracks[l].times[0]&&(o=r.tracks[l].times[0]);for(let l=0;l<r.tracks.length;++l)r.tracks[l].shift(-1*o);return r.resetDuration(),r}function hR(i,e=0,t=i,n=30){n<=0&&(n=30);let s=t.tracks.length,r=e/n;for(let a=0;a<s;++a){let o=t.tracks[a],l=o.ValueTypeName;if(l==="bool"||l==="string")continue;let c=i.tracks.find(function(p){return p.name===o.name&&p.ValueTypeName===l});if(c===void 0)continue;let u=0,d=o.getValueSize();o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=d/3);let h=0,f=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=f/3);let m=o.times.length-1,v;if(r<=o.times[0]){let p=u,x=d-u;v=o.values.slice(p,x)}else if(r>=o.times[m]){let p=m*d+u,x=p+d-u;v=o.values.slice(p,x)}else{let p=o.createInterpolant(),x=u,y=d-u;p.evaluate(r),v=p.resultBuffer.slice(x,y)}l==="quaternion"&&new Fn().fromArray(v).normalize().conjugate().toArray(v);let g=c.times.length;for(let p=0;p<g;++p){let x=p*f+h;if(l==="quaternion")Fn.multiplyQuaternionsFlat(c.values,x,v,0,c.values,x);else{let y=f-h*2;for(let _=0;_<y;++_)c.values[x+_]-=v[_]}}}return i.blendMode=rm,i}var fR={convertArray:_r,isTypedArray:Bx,getKeyframeOrder:zx,sortedArray:sp,flattenJSON:um,subclip:dR,makeClipAdditive:hR},Ir=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];e:{t:{let a;n:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break t}a=t.length;break n}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break t}a=n,n=0;break n}break e}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Gu=class extends Ir{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:yr,endingEnd:yr}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case xr:r=e,o=2*t-n;break;case Bo:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case xr:a=e,l=2*n-t;break;case Bo:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,f=this._weightNext,m=(n-t)/(s-t),v=m*m,g=v*m,p=-h*g+2*h*v-h*m,x=(1+h)*g+(-1.5-2*h)*v+(-.5+h)*m+1,y=(-1-f)*g+(1.5+f)*v+.5*m,_=f*g-f*v;for(let L=0;L!==o;++L)r[L]=p*a[u+L]+x*a[c+L]+y*a[l+L]+_*a[d+L];return r}},pl=class extends Ir{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(s-t),d=1-u;for(let h=0;h!==o;++h)r[h]=a[c+h]*d+a[l+h]*u;return r}},Wu=class extends Ir{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},fi=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=_r(t,this.TimeBufferType),this.values=_r(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:_r(e.times,Array),values:_r(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Wu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new pl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Gu(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Oo:t=this.InterpolantFactoryMethodDiscrete;break;case ko:t=this.InterpolantFactoryMethodLinear;break;case $c:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Oo;case this.InterpolantFactoryMethodLinear:return ko;case this.InterpolantFactoryMethodSmooth:return $c}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&Bx(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===$c,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(s)l=!0;else{let d=o*n,h=d-n,f=d+n;for(let m=0;m!==n;++m){let v=t[d+m];if(v!==t[h+m]||v!==t[f+m]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let d=o*n,h=a*n;for(let f=0;f!==n;++f)t[h+f]=t[d+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};fi.prototype.TimeBufferType=Float32Array;fi.prototype.ValueBufferType=Float32Array;fi.prototype.DefaultInterpolation=ko;var _s=class extends fi{};_s.prototype.ValueTypeName="bool";_s.prototype.ValueBufferType=Array;_s.prototype.DefaultInterpolation=Oo;_s.prototype.InterpolantFactoryMethodLinear=void 0;_s.prototype.InterpolantFactoryMethodSmooth=void 0;var ml=class extends fi{};ml.prototype.ValueTypeName="color";var Lr=class extends fi{};Lr.prototype.ValueTypeName="number";var qu=class extends Ir{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let u=c+o;c!==u;c+=4)Fn.slerpFlat(r,0,a,c-o,a,c,l);return r}},Ws=class extends fi{InterpolantFactoryMethodLinear(e){return new qu(this.times,this.values,this.getValueSize(),e)}};Ws.prototype.ValueTypeName="quaternion";Ws.prototype.DefaultInterpolation=ko;Ws.prototype.InterpolantFactoryMethodSmooth=void 0;var bs=class extends fi{};bs.prototype.ValueTypeName="string";bs.prototype.ValueBufferType=Array;bs.prototype.DefaultInterpolation=Oo;bs.prototype.InterpolantFactoryMethodLinear=void 0;bs.prototype.InterpolantFactoryMethodSmooth=void 0;var Nr=class extends fi{};Nr.prototype.ValueTypeName="vector";var Dr=class{constructor(e="",t=-1,n=[],s=ld){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=li(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(mR(n[a]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push(fi.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);let u=zx(l);l=sp(l,1,u),c=sp(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new Lr(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],u=c.name.match(r);if(u&&u.length>1){let d=u[1],h=s[d];h||(s[d]=h=[]),h.push(c)}}let a=[];for(let o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(d,h,f,m,v){if(f.length!==0){let g=[],p=[];um(f,g,p,m),g.length!==0&&v.push(new d(h,g,p))}},s=[],r=e.name||"default",a=e.fps||30,o=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let d=0;d<c.length;d++){let h=c[d].keys;if(!(!h||h.length===0))if(h[0].morphTargets){let f={},m;for(m=0;m<h.length;m++)if(h[m].morphTargets)for(let v=0;v<h[m].morphTargets.length;v++)f[h[m].morphTargets[v]]=-1;for(let v in f){let g=[],p=[];for(let x=0;x!==h[m].morphTargets.length;++x){let y=h[m];g.push(y.time),p.push(y.morphTarget===v?1:0)}s.push(new Lr(".morphTargetInfluence["+v+"]",g,p))}l=f.length*a}else{let f=".bones["+t[d].name+"]";n(Nr,f+".position",h,"pos",s),n(Ws,f+".quaternion",h,"rot",s),n(Nr,f+".scale",h,"scl",s)}}return s.length===0?null:new this(r,l,s,o)}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function pR(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Lr;case"vector":case"vector2":case"vector3":case"vector4":return Nr;case"color":return ml;case"quaternion":return Ws;case"bool":case"boolean":return _s;case"string":return bs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function mR(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=pR(i.type);if(i.times===void 0){let t=[],n=[];um(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}var fs={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},gl=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){let f=c[d],m=c[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return m}return null}}},Vx=new gl,On=class{constructor(e){this.manager=e!==void 0?e:Vx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};On.DEFAULT_MATERIAL_NAME="__DEFAULT";var ls={},rp=class extends Error{constructor(e,t){super(e),this.response=t}},Fi=class extends On{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=fs.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(ls[e]!==void 0){ls[e].push({onLoad:t,onProgress:n,onError:s});return}ls[e]=[],ls[e].push({onLoad:t,onProgress:n,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let u=ls[e],d=c.body.getReader(),h=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=h?parseInt(h):0,m=f!==0,v=0,g=new ReadableStream({start(p){x();function x(){d.read().then(({done:y,value:_})=>{if(y)p.close();else{v+=_.byteLength;let L=new ProgressEvent("progress",{lengthComputable:m,loaded:v,total:f});for(let M=0,R=u.length;M<R;M++){let P=u[M];P.onProgress&&P.onProgress(L)}p.enqueue(_),x()}})}}});return new Response(g)}else throw new rp(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o===void 0)return c.text();{let d=/charset="?([^;"\s]*)"?/i.exec(o),h=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(h);return c.arrayBuffer().then(m=>f.decode(m))}}}).then(c=>{fs.add(e,c);let u=ls[e];delete ls[e];for(let d=0,h=u.length;d<h;d++){let f=u[d];f.onLoad&&f.onLoad(c)}}).catch(c=>{let u=ls[e];if(u===void 0)throw this.manager.itemError(e),c;delete ls[e];for(let d=0,h=u.length;d<h;d++){let f=u[d];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}},ap=class extends On{constructor(e){super(e)}load(e,t,n,s){let r=this,a=new Fi(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){try{t(r.parse(JSON.parse(o)))}catch(l){s?s(l):console.error(l),r.manager.itemError(e)}},n,s)}parse(e){let t=[];for(let n=0;n<e.length;n++){let s=Dr.parse(e[n]);t.push(s)}return t}},op=class extends On{constructor(e){super(e)}load(e,t,n,s){let r=this,a=[],o=new qa,l=new Fi(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(r.withCredentials);let c=0;function u(d){l.load(e[d],function(h){let f=r.parse(h,!0);a[d]={width:f.width,height:f.height,format:f.format,mipmaps:f.mipmaps},c+=1,c===6&&(f.mipmapCount===1&&(o.minFilter=cn),o.image=a,o.format=f.format,o.needsUpdate=!0,t&&t(o))},n,s)}if(Array.isArray(e))for(let d=0,h=e.length;d<h;++d)u(d);else l.load(e,function(d){let h=r.parse(d,!0);if(h.isCubemap){let f=h.mipmaps.length/h.mipmapCount;for(let m=0;m<f;m++){a[m]={mipmaps:[]};for(let v=0;v<h.mipmapCount;v++)a[m].mipmaps.push(h.mipmaps[m*h.mipmapCount+v]),a[m].format=h.format,a[m].width=h.width,a[m].height=h.height}o.image=a}else o.image.width=h.width,o.image.height=h.height,o.mipmaps=h.mipmaps;h.mipmapCount===1&&(o.minFilter=cn),o.format=h.format,o.needsUpdate=!0,t&&t(o)},n,s);return o}},Ur=class extends On{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=fs.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;let o=qo("img");function l(){u(),fs.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(d){u(),s&&s(d),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}},lp=class extends On{constructor(e){super(e)}load(e,t,n,s){let r=new Ar;r.colorSpace=_i;let a=new Ur(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let o=0;function l(c){a.load(e[c],function(u){r.images[c]=u,o++,o===6&&(r.needsUpdate=!0,t&&t(r))},void 0,s)}for(let c=0;c<e.length;++c)l(c);return r}},cp=class extends On{constructor(e){super(e)}load(e,t,n,s){let r=this,a=new $i,o=new Fi(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(e,function(l){let c;try{c=r.parse(l)}catch(u){if(s!==void 0)s(u);else{console.error(u);return}}c.image!==void 0?a.image=c.image:c.data!==void 0&&(a.image.width=c.width,a.image.height=c.height,a.image.data=c.data),a.wrapS=c.wrapS!==void 0?c.wrapS:bi,a.wrapT=c.wrapT!==void 0?c.wrapT:bi,a.magFilter=c.magFilter!==void 0?c.magFilter:cn,a.minFilter=c.minFilter!==void 0?c.minFilter:cn,a.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(a.colorSpace=c.colorSpace),c.flipY!==void 0&&(a.flipY=c.flipY),c.format!==void 0&&(a.format=c.format),c.type!==void 0&&(a.type=c.type),c.mipmaps!==void 0&&(a.mipmaps=c.mipmaps,a.minFilter=qi),c.mipmapCount===1&&(a.minFilter=cn),c.generateMipmaps!==void 0&&(a.generateMipmaps=c.generateMipmaps),a.needsUpdate=!0,t&&t(a,c)},n,s),a}},up=class extends On{constructor(e){super(e)}load(e,t,n,s){let r=new un,a=new Ur(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},ji=class extends Rt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new We(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},Xu=class extends ji{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new We(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Yh=new it,J0=new U,j0=new U,vl=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ve(512,512),this.map=null,this.mapPass=null,this.matrix=new it,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Tr,this._frameExtents=new ve(1,1),this._viewportCount=1,this._viewports=[new Nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;J0.setFromMatrixPosition(e.matrixWorld),t.position.copy(J0),j0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(j0),t.updateMatrixWorld(),Yh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Yh),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Yh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},dp=class extends vl{constructor(){super(new pn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=Oa*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},$u=class extends ji{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.target=new Rt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new dp}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},K0=new it,wo=new U,Zh=new U,hp=class extends vl{constructor(){super(new pn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ve(4,2),this._viewportCount=6,this._viewports=[new Nt(2,1,1,1),new Nt(0,1,1,1),new Nt(3,1,1,1),new Nt(1,1,1,1),new Nt(3,0,1,1),new Nt(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),wo.setFromMatrixPosition(e.matrixWorld),n.position.copy(wo),Zh.copy(n.position),Zh.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Zh),n.updateMatrixWorld(),s.makeTranslation(-wo.x,-wo.y,-wo.z),K0.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(K0)}},Yu=class extends ji{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new hp}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},fp=class extends vl{constructor(){super(new Ga(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Zu=class extends ji{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.target=new Rt,this.shadow=new fp}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Ju=class extends ji{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}},ju=class extends ji{constructor(e,t,n=10,s=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=s}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){let t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}},Ku=class{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new U)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){let n=e.x,s=e.y,r=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.282095),t.addScaledVector(a[1],.488603*s),t.addScaledVector(a[2],.488603*r),t.addScaledVector(a[3],.488603*n),t.addScaledVector(a[4],1.092548*(n*s)),t.addScaledVector(a[5],1.092548*(s*r)),t.addScaledVector(a[6],.315392*(3*r*r-1)),t.addScaledVector(a[7],1.092548*(n*r)),t.addScaledVector(a[8],.546274*(n*n-s*s)),t}getIrradianceAt(e,t){let n=e.x,s=e.y,r=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.886227),t.addScaledVector(a[1],2*.511664*s),t.addScaledVector(a[2],2*.511664*r),t.addScaledVector(a[3],2*.511664*n),t.addScaledVector(a[4],2*.429043*n*s),t.addScaledVector(a[5],2*.429043*s*r),t.addScaledVector(a[6],.743125*r*r-.247708),t.addScaledVector(a[7],2*.429043*n*r),t.addScaledVector(a[8],.429043*(n*n-s*s)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){let n=this.coefficients;for(let s=0;s<9;s++)n[s].fromArray(e,t+s*3);return this}toArray(e=[],t=0){let n=this.coefficients;for(let s=0;s<9;s++)n[s].toArray(e,t+s*3);return e}static getBasisAt(e,t){let n=e.x,s=e.y,r=e.z;t[0]=.282095,t[1]=.488603*s,t[2]=.488603*r,t[3]=.488603*n,t[4]=1.092548*n*s,t[5]=1.092548*s*r,t[6]=.315392*(3*r*r-1),t[7]=1.092548*n*r,t[8]=.546274*(n*n-s*s)}},Qu=class extends ji{constructor(e=new Ku,t=1){super(void 0,t),this.isLightProbe=!0,this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){let t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}},ed=class i extends On{constructor(e){super(e),this.textures={}}load(e,t,n,s){let r=this,a=new Fi(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(e,function(o){try{t(r.parse(JSON.parse(o)))}catch(l){s?s(l):console.error(l),r.manager.itemError(e)}},n,s)}parse(e){let t=this.textures;function n(r){return t[r]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",r),t[r]}let s=i.createMaterialFromType(e.type);if(e.uuid!==void 0&&(s.uuid=e.uuid),e.name!==void 0&&(s.name=e.name),e.color!==void 0&&s.color!==void 0&&s.color.setHex(e.color),e.roughness!==void 0&&(s.roughness=e.roughness),e.metalness!==void 0&&(s.metalness=e.metalness),e.sheen!==void 0&&(s.sheen=e.sheen),e.sheenColor!==void 0&&(s.sheenColor=new We().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(s.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&s.emissive!==void 0&&s.emissive.setHex(e.emissive),e.specular!==void 0&&s.specular!==void 0&&s.specular.setHex(e.specular),e.specularIntensity!==void 0&&(s.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&s.specularColor!==void 0&&s.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(s.shininess=e.shininess),e.clearcoat!==void 0&&(s.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(s.dispersion=e.dispersion),e.iridescence!==void 0&&(s.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(s.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(s.transmission=e.transmission),e.thickness!==void 0&&(s.thickness=e.thickness),e.attenuationDistance!==void 0&&(s.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&s.attenuationColor!==void 0&&s.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(s.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(s.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(s.fog=e.fog),e.flatShading!==void 0&&(s.flatShading=e.flatShading),e.blending!==void 0&&(s.blending=e.blending),e.combine!==void 0&&(s.combine=e.combine),e.side!==void 0&&(s.side=e.side),e.shadowSide!==void 0&&(s.shadowSide=e.shadowSide),e.opacity!==void 0&&(s.opacity=e.opacity),e.transparent!==void 0&&(s.transparent=e.transparent),e.alphaTest!==void 0&&(s.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(s.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(s.depthFunc=e.depthFunc),e.depthTest!==void 0&&(s.depthTest=e.depthTest),e.depthWrite!==void 0&&(s.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(s.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(s.blendSrc=e.blendSrc),e.blendDst!==void 0&&(s.blendDst=e.blendDst),e.blendEquation!==void 0&&(s.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(s.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(s.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(s.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&s.blendColor!==void 0&&s.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(s.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(s.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(s.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(s.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(s.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(s.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(s.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(s.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(s.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(s.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(s.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(s.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(s.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(s.rotation=e.rotation),e.linewidth!==void 0&&(s.linewidth=e.linewidth),e.dashSize!==void 0&&(s.dashSize=e.dashSize),e.gapSize!==void 0&&(s.gapSize=e.gapSize),e.scale!==void 0&&(s.scale=e.scale),e.polygonOffset!==void 0&&(s.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(s.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(s.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(s.dithering=e.dithering),e.alphaToCoverage!==void 0&&(s.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(s.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(s.forceSinglePass=e.forceSinglePass),e.visible!==void 0&&(s.visible=e.visible),e.toneMapped!==void 0&&(s.toneMapped=e.toneMapped),e.userData!==void 0&&(s.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?s.vertexColors=e.vertexColors>0:s.vertexColors=e.vertexColors),e.uniforms!==void 0)for(let r in e.uniforms){let a=e.uniforms[r];switch(s.uniforms[r]={},a.type){case"t":s.uniforms[r].value=n(a.value);break;case"c":s.uniforms[r].value=new We().setHex(a.value);break;case"v2":s.uniforms[r].value=new ve().fromArray(a.value);break;case"v3":s.uniforms[r].value=new U().fromArray(a.value);break;case"v4":s.uniforms[r].value=new Nt().fromArray(a.value);break;case"m3":s.uniforms[r].value=new dt().fromArray(a.value);break;case"m4":s.uniforms[r].value=new it().fromArray(a.value);break;default:s.uniforms[r].value=a.value}}if(e.defines!==void 0&&(s.defines=e.defines),e.vertexShader!==void 0&&(s.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(s.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(s.glslVersion=e.glslVersion),e.extensions!==void 0)for(let r in e.extensions)s.extensions[r]=e.extensions[r];if(e.lights!==void 0&&(s.lights=e.lights),e.clipping!==void 0&&(s.clipping=e.clipping),e.size!==void 0&&(s.size=e.size),e.sizeAttenuation!==void 0&&(s.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(s.map=n(e.map)),e.matcap!==void 0&&(s.matcap=n(e.matcap)),e.alphaMap!==void 0&&(s.alphaMap=n(e.alphaMap)),e.bumpMap!==void 0&&(s.bumpMap=n(e.bumpMap)),e.bumpScale!==void 0&&(s.bumpScale=e.bumpScale),e.normalMap!==void 0&&(s.normalMap=n(e.normalMap)),e.normalMapType!==void 0&&(s.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),s.normalScale=new ve().fromArray(r)}return e.displacementMap!==void 0&&(s.displacementMap=n(e.displacementMap)),e.displacementScale!==void 0&&(s.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(s.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(s.roughnessMap=n(e.roughnessMap)),e.metalnessMap!==void 0&&(s.metalnessMap=n(e.metalnessMap)),e.emissiveMap!==void 0&&(s.emissiveMap=n(e.emissiveMap)),e.emissiveIntensity!==void 0&&(s.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(s.specularMap=n(e.specularMap)),e.specularIntensityMap!==void 0&&(s.specularIntensityMap=n(e.specularIntensityMap)),e.specularColorMap!==void 0&&(s.specularColorMap=n(e.specularColorMap)),e.envMap!==void 0&&(s.envMap=n(e.envMap)),e.envMapRotation!==void 0&&s.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(s.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(s.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(s.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(s.lightMap=n(e.lightMap)),e.lightMapIntensity!==void 0&&(s.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(s.aoMap=n(e.aoMap)),e.aoMapIntensity!==void 0&&(s.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(s.gradientMap=n(e.gradientMap)),e.clearcoatMap!==void 0&&(s.clearcoatMap=n(e.clearcoatMap)),e.clearcoatRoughnessMap!==void 0&&(s.clearcoatRoughnessMap=n(e.clearcoatRoughnessMap)),e.clearcoatNormalMap!==void 0&&(s.clearcoatNormalMap=n(e.clearcoatNormalMap)),e.clearcoatNormalScale!==void 0&&(s.clearcoatNormalScale=new ve().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(s.iridescenceMap=n(e.iridescenceMap)),e.iridescenceThicknessMap!==void 0&&(s.iridescenceThicknessMap=n(e.iridescenceThicknessMap)),e.transmissionMap!==void 0&&(s.transmissionMap=n(e.transmissionMap)),e.thicknessMap!==void 0&&(s.thicknessMap=n(e.thicknessMap)),e.anisotropyMap!==void 0&&(s.anisotropyMap=n(e.anisotropyMap)),e.sheenColorMap!==void 0&&(s.sheenColorMap=n(e.sheenColorMap)),e.sheenRoughnessMap!==void 0&&(s.sheenRoughnessMap=n(e.sheenRoughnessMap)),s}setTextures(e){return this.textures=e,this}static createMaterialFromType(e){let t={ShadowMaterial:Du,SpriteMaterial:Qo,RawShaderMaterial:Uu,ShaderMaterial:di,PointsMaterial:tl,MeshPhysicalMaterial:Fu,MeshStandardMaterial:fl,MeshPhongMaterial:Ou,MeshToonMaterial:ku,MeshNormalMaterial:Bu,MeshLambertMaterial:zu,MeshDepthMaterial:jo,MeshDistanceMaterial:Ko,MeshBasicMaterial:Zi,MeshMatcapMaterial:Vu,LineDashedMaterial:Hu,LineBasicMaterial:Pn,Material:Tn};return new t[e]}},yl=class{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},td=class extends pt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}},nd=class extends On{constructor(e){super(e)}load(e,t,n,s){let r=this,a=new Fi(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(e,function(o){try{t(r.parse(JSON.parse(o)))}catch(l){s?s(l):console.error(l),r.manager.itemError(e)}},n,s)}parse(e){let t={},n={};function s(f,m){if(t[m]!==void 0)return t[m];let g=f.interleavedBuffers[m],p=r(f,g.buffer),x=Ia(g.type,p),y=new Wa(x,g.stride);return y.uuid=g.uuid,t[m]=y,y}function r(f,m){if(n[m]!==void 0)return n[m];let g=f.arrayBuffers[m],p=new Uint32Array(g).buffer;return n[m]=p,p}let a=e.isInstancedBufferGeometry?new td:new pt,o=e.data.index;if(o!==void 0){let f=Ia(o.type,o.array);a.setIndex(new Et(f,1))}let l=e.data.attributes;for(let f in l){let m=l[f],v;if(m.isInterleavedBufferAttribute){let g=s(e.data,m.data);v=new Rr(g,m.itemSize,m.offset,m.normalized)}else{let g=Ia(m.type,m.array),p=m.isInstancedBufferAttribute?Hs:Et;v=new p(g,m.itemSize,m.normalized)}m.name!==void 0&&(v.name=m.name),m.usage!==void 0&&v.setUsage(m.usage),a.setAttribute(f,v)}let c=e.data.morphAttributes;if(c)for(let f in c){let m=c[f],v=[];for(let g=0,p=m.length;g<p;g++){let x=m[g],y;if(x.isInterleavedBufferAttribute){let _=s(e.data,x.data);y=new Rr(_,x.itemSize,x.offset,x.normalized)}else{let _=Ia(x.type,x.array);y=new Et(_,x.itemSize,x.normalized)}x.name!==void 0&&(y.name=x.name),v.push(y)}a.morphAttributes[f]=v}e.data.morphTargetsRelative&&(a.morphTargetsRelative=!0);let d=e.data.groups||e.data.drawcalls||e.data.offsets;if(d!==void 0)for(let f=0,m=d.length;f!==m;++f){let v=d[f];a.addGroup(v.start,v.count,v.materialIndex)}let h=e.data.boundingSphere;if(h!==void 0){let f=new U;h.center!==void 0&&f.fromArray(h.center),a.boundingSphere=new An(f,h.radius)}return e.name&&(a.name=e.name),e.userData&&(a.userData=e.userData),a}},pp=class extends On{constructor(e){super(e)}load(e,t,n,s){let r=this,a=this.path===""?yl.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||a;let o=new Fi(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(l){let c=null;try{c=JSON.parse(l)}catch(d){s!==void 0&&s(d),console.error("THREE:ObjectLoader: Can't parse "+e+".",d.message);return}let u=c.metadata;if(u===void 0||u.type===void 0||u.type.toLowerCase()==="geometry"){s!==void 0&&s(new Error("THREE.ObjectLoader: Can't load "+e)),console.error("THREE.ObjectLoader: Can't load "+e);return}r.parse(c,t)},n,s)}async loadAsync(e,t){let n=this,s=this.path===""?yl.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||s;let r=new Fi(this.manager);r.setPath(this.path),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials);let a=await r.loadAsync(e,t),o=JSON.parse(a),l=o.metadata;if(l===void 0||l.type===void 0||l.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+e);return await n.parseAsync(o)}parse(e,t){let n=this.parseAnimations(e.animations),s=this.parseShapes(e.shapes),r=this.parseGeometries(e.geometries,s),a=this.parseImages(e.images,function(){t!==void 0&&t(c)}),o=this.parseTextures(e.textures,a),l=this.parseMaterials(e.materials,o),c=this.parseObject(e.object,r,l,o,n),u=this.parseSkeletons(e.skeletons,c);if(this.bindSkeletons(c,u),t!==void 0){let d=!1;for(let h in a)if(a[h].data instanceof HTMLImageElement){d=!0;break}d===!1&&t(c)}return c}async parseAsync(e){let t=this.parseAnimations(e.animations),n=this.parseShapes(e.shapes),s=this.parseGeometries(e.geometries,n),r=await this.parseImagesAsync(e.images),a=this.parseTextures(e.textures,r),o=this.parseMaterials(e.materials,a),l=this.parseObject(e.object,s,o,a,t),c=this.parseSkeletons(e.skeletons,l);return this.bindSkeletons(l,c),l}parseShapes(e){let t={};if(e!==void 0)for(let n=0,s=e.length;n<s;n++){let r=new gs().fromJSON(e[n]);t[r.uuid]=r}return t}parseSkeletons(e,t){let n={},s={};if(t.traverse(function(r){r.isBone&&(s[r.uuid]=r)}),e!==void 0)for(let r=0,a=e.length;r<a;r++){let o=new ou().fromJSON(e[r],s);n[o.uuid]=o}return n}parseGeometries(e,t){let n={};if(e!==void 0){let s=new nd;for(let r=0,a=e.length;r<a;r++){let o,l=e[r];switch(l.type){case"BufferGeometry":case"InstancedBufferGeometry":o=s.parse(l);break;default:l.type in Z0?o=Z0[l.type].fromJSON(l,t):console.warn(`THREE.ObjectLoader: Unsupported geometry type "${l.type}"`)}o.uuid=l.uuid,l.name!==void 0&&(o.name=l.name),l.userData!==void 0&&(o.userData=l.userData),n[l.uuid]=o}}return n}parseMaterials(e,t){let n={},s={};if(e!==void 0){let r=new ed;r.setTextures(t);for(let a=0,o=e.length;a<o;a++){let l=e[a];n[l.uuid]===void 0&&(n[l.uuid]=r.parse(l)),s[l.uuid]=n[l.uuid]}}return s}parseAnimations(e){let t={};if(e!==void 0)for(let n=0;n<e.length;n++){let s=e[n],r=Dr.parse(s);t[r.uuid]=r}return t}parseImages(e,t){let n=this,s={},r;function a(l){return n.manager.itemStart(l),r.load(l,function(){n.manager.itemEnd(l)},void 0,function(){n.manager.itemError(l),n.manager.itemEnd(l)})}function o(l){if(typeof l=="string"){let c=l,u=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(c)?c:n.resourcePath+c;return a(u)}else return l.data?{data:Ia(l.type,l.data),width:l.width,height:l.height}:null}if(e!==void 0&&e.length>0){let l=new gl(t);r=new Ur(l),r.setCrossOrigin(this.crossOrigin);for(let c=0,u=e.length;c<u;c++){let d=e[c],h=d.url;if(Array.isArray(h)){let f=[];for(let m=0,v=h.length;m<v;m++){let g=h[m],p=o(g);p!==null&&(p instanceof HTMLImageElement?f.push(p):f.push(new $i(p.data,p.width,p.height)))}s[d.uuid]=new ds(f)}else{let f=o(d.url);s[d.uuid]=new ds(f)}}}return s}async parseImagesAsync(e){let t=this,n={},s;async function r(a){if(typeof a=="string"){let o=a,l=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(o)?o:t.resourcePath+o;return await s.loadAsync(l)}else return a.data?{data:Ia(a.type,a.data),width:a.width,height:a.height}:null}if(e!==void 0&&e.length>0){s=new Ur(this.manager),s.setCrossOrigin(this.crossOrigin);for(let a=0,o=e.length;a<o;a++){let l=e[a],c=l.url;if(Array.isArray(c)){let u=[];for(let d=0,h=c.length;d<h;d++){let f=c[d],m=await r(f);m!==null&&(m instanceof HTMLImageElement?u.push(m):u.push(new $i(m.data,m.width,m.height)))}n[l.uuid]=new ds(u)}else{let u=await r(l.url);n[l.uuid]=new ds(u)}}}return n}parseTextures(e,t){function n(r,a){return typeof r=="number"?r:(console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",r),a[r])}let s={};if(e!==void 0)for(let r=0,a=e.length;r<a;r++){let o=e[r];o.image===void 0&&console.warn('THREE.ObjectLoader: No "image" specified for',o.uuid),t[o.image]===void 0&&console.warn("THREE.ObjectLoader: Undefined image",o.image);let l=t[o.image],c=l.data,u;Array.isArray(c)?(u=new Ar,c.length===6&&(u.needsUpdate=!0)):(c&&c.data?u=new $i:u=new un,c&&(u.needsUpdate=!0)),u.source=l,u.uuid=o.uuid,o.name!==void 0&&(u.name=o.name),o.mapping!==void 0&&(u.mapping=n(o.mapping,gR)),o.channel!==void 0&&(u.channel=o.channel),o.offset!==void 0&&u.offset.fromArray(o.offset),o.repeat!==void 0&&u.repeat.fromArray(o.repeat),o.center!==void 0&&u.center.fromArray(o.center),o.rotation!==void 0&&(u.rotation=o.rotation),o.wrap!==void 0&&(u.wrapS=n(o.wrap[0],Q0),u.wrapT=n(o.wrap[1],Q0)),o.format!==void 0&&(u.format=o.format),o.internalFormat!==void 0&&(u.internalFormat=o.internalFormat),o.type!==void 0&&(u.type=o.type),o.colorSpace!==void 0&&(u.colorSpace=o.colorSpace),o.minFilter!==void 0&&(u.minFilter=n(o.minFilter,ey)),o.magFilter!==void 0&&(u.magFilter=n(o.magFilter,ey)),o.anisotropy!==void 0&&(u.anisotropy=o.anisotropy),o.flipY!==void 0&&(u.flipY=o.flipY),o.generateMipmaps!==void 0&&(u.generateMipmaps=o.generateMipmaps),o.premultiplyAlpha!==void 0&&(u.premultiplyAlpha=o.premultiplyAlpha),o.unpackAlignment!==void 0&&(u.unpackAlignment=o.unpackAlignment),o.compareFunction!==void 0&&(u.compareFunction=o.compareFunction),o.userData!==void 0&&(u.userData=o.userData),s[o.uuid]=u}return s}parseObject(e,t,n,s,r){let a;function o(h){return t[h]===void 0&&console.warn("THREE.ObjectLoader: Undefined geometry",h),t[h]}function l(h){if(h!==void 0){if(Array.isArray(h)){let f=[];for(let m=0,v=h.length;m<v;m++){let g=h[m];n[g]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",g),f.push(n[g])}return f}return n[h]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",h),n[h]}}function c(h){return s[h]===void 0&&console.warn("THREE.ObjectLoader: Undefined texture",h),s[h]}let u,d;switch(e.type){case"Scene":a=new iu,e.background!==void 0&&(Number.isInteger(e.background)?a.background=new We(e.background):a.background=c(e.background)),e.environment!==void 0&&(a.environment=c(e.environment)),e.fog!==void 0&&(e.fog.type==="Fog"?a.fog=new nu(e.fog.color,e.fog.near,e.fog.far):e.fog.type==="FogExp2"&&(a.fog=new tu(e.fog.color,e.fog.density)),e.fog.name!==""&&(a.fog.name=e.fog.name)),e.backgroundBlurriness!==void 0&&(a.backgroundBlurriness=e.backgroundBlurriness),e.backgroundIntensity!==void 0&&(a.backgroundIntensity=e.backgroundIntensity),e.backgroundRotation!==void 0&&a.backgroundRotation.fromArray(e.backgroundRotation),e.environmentIntensity!==void 0&&(a.environmentIntensity=e.environmentIntensity),e.environmentRotation!==void 0&&a.environmentRotation.fromArray(e.environmentRotation);break;case"PerspectiveCamera":a=new pn(e.fov,e.aspect,e.near,e.far),e.focus!==void 0&&(a.focus=e.focus),e.zoom!==void 0&&(a.zoom=e.zoom),e.filmGauge!==void 0&&(a.filmGauge=e.filmGauge),e.filmOffset!==void 0&&(a.filmOffset=e.filmOffset),e.view!==void 0&&(a.view=Object.assign({},e.view));break;case"OrthographicCamera":a=new Ga(e.left,e.right,e.top,e.bottom,e.near,e.far),e.zoom!==void 0&&(a.zoom=e.zoom),e.view!==void 0&&(a.view=Object.assign({},e.view));break;case"AmbientLight":a=new Ju(e.color,e.intensity);break;case"DirectionalLight":a=new Zu(e.color,e.intensity);break;case"PointLight":a=new Yu(e.color,e.intensity,e.distance,e.decay);break;case"RectAreaLight":a=new ju(e.color,e.intensity,e.width,e.height);break;case"SpotLight":a=new $u(e.color,e.intensity,e.distance,e.angle,e.penumbra,e.decay);break;case"HemisphereLight":a=new Xu(e.color,e.groundColor,e.intensity);break;case"LightProbe":a=new Qu().fromJSON(e);break;case"SkinnedMesh":u=o(e.geometry),d=l(e.material),a=new au(u,d),e.bindMode!==void 0&&(a.bindMode=e.bindMode),e.bindMatrix!==void 0&&a.bindMatrix.fromArray(e.bindMatrix),e.skeleton!==void 0&&(a.skeleton=e.skeleton);break;case"Mesh":u=o(e.geometry),d=l(e.material),a=new tn(u,d);break;case"InstancedMesh":u=o(e.geometry),d=l(e.material);let h=e.count,f=e.instanceMatrix,m=e.instanceColor;a=new lu(u,d,h),a.instanceMatrix=new Hs(new Float32Array(f.array),16),m!==void 0&&(a.instanceColor=new Hs(new Float32Array(m.array),m.itemSize));break;case"BatchedMesh":u=o(e.geometry),d=l(e.material),a=new cu(e.maxGeometryCount,e.maxVertexCount,e.maxIndexCount,d),a.geometry=u,a.perObjectFrustumCulled=e.perObjectFrustumCulled,a.sortObjects=e.sortObjects,a._drawRanges=e.drawRanges,a._reservedRanges=e.reservedRanges,a._visibility=e.visibility,a._active=e.active,a._bounds=e.bounds.map(v=>{let g=new Cn;g.min.fromArray(v.boxMin),g.max.fromArray(v.boxMax);let p=new An;return p.radius=v.sphereRadius,p.center.fromArray(v.sphereCenter),{boxInitialized:v.boxInitialized,box:g,sphereInitialized:v.sphereInitialized,sphere:p}}),a._maxGeometryCount=e.maxGeometryCount,a._maxVertexCount=e.maxVertexCount,a._maxIndexCount=e.maxIndexCount,a._geometryInitialized=e.geometryInitialized,a._geometryCount=e.geometryCount,a._matricesTexture=c(e.matricesTexture.uuid);break;case"LOD":a=new ru;break;case"Line":a=new Ji(o(e.geometry),l(e.material));break;case"LineLoop":a=new hu(o(e.geometry),l(e.material));break;case"LineSegments":a=new Mi(o(e.geometry),l(e.material));break;case"PointCloud":case"Points":a=new fu(o(e.geometry),l(e.material));break;case"Sprite":a=new su(l(e.material));break;case"Group":a=new Bs;break;case"Bone":a=new el;break;default:a=new Rt}if(a.uuid=e.uuid,e.name!==void 0&&(a.name=e.name),e.matrix!==void 0?(a.matrix.fromArray(e.matrix),e.matrixAutoUpdate!==void 0&&(a.matrixAutoUpdate=e.matrixAutoUpdate),a.matrixAutoUpdate&&a.matrix.decompose(a.position,a.quaternion,a.scale)):(e.position!==void 0&&a.position.fromArray(e.position),e.rotation!==void 0&&a.rotation.fromArray(e.rotation),e.quaternion!==void 0&&a.quaternion.fromArray(e.quaternion),e.scale!==void 0&&a.scale.fromArray(e.scale)),e.up!==void 0&&a.up.fromArray(e.up),e.castShadow!==void 0&&(a.castShadow=e.castShadow),e.receiveShadow!==void 0&&(a.receiveShadow=e.receiveShadow),e.shadow&&(e.shadow.bias!==void 0&&(a.shadow.bias=e.shadow.bias),e.shadow.normalBias!==void 0&&(a.shadow.normalBias=e.shadow.normalBias),e.shadow.radius!==void 0&&(a.shadow.radius=e.shadow.radius),e.shadow.mapSize!==void 0&&a.shadow.mapSize.fromArray(e.shadow.mapSize),e.shadow.camera!==void 0&&(a.shadow.camera=this.parseObject(e.shadow.camera))),e.visible!==void 0&&(a.visible=e.visible),e.frustumCulled!==void 0&&(a.frustumCulled=e.frustumCulled),e.renderOrder!==void 0&&(a.renderOrder=e.renderOrder),e.userData!==void 0&&(a.userData=e.userData),e.layers!==void 0&&(a.layers.mask=e.layers),e.children!==void 0){let h=e.children;for(let f=0;f<h.length;f++)a.add(this.parseObject(h[f],t,n,s,r))}if(e.animations!==void 0){let h=e.animations;for(let f=0;f<h.length;f++){let m=h[f];a.animations.push(r[m])}}if(e.type==="LOD"){e.autoUpdate!==void 0&&(a.autoUpdate=e.autoUpdate);let h=e.levels;for(let f=0;f<h.length;f++){let m=h[f],v=a.getObjectByProperty("uuid",m.object);v!==void 0&&a.addLevel(v,m.distance,m.hysteresis)}}return a}bindSkeletons(e,t){Object.keys(t).length!==0&&e.traverse(function(n){if(n.isSkinnedMesh===!0&&n.skeleton!==void 0){let s=t[n.skeleton];s===void 0?console.warn("THREE.ObjectLoader: No skeleton found with UUID:",n.skeleton):n.bind(s,n.bindMatrix)}})}},gR={UVMapping:od,CubeReflectionMapping:ys,CubeRefractionMapping:zs,EquirectangularReflectionMapping:No,EquirectangularRefractionMapping:Do,CubeUVReflectionMapping:Ya},Q0={RepeatWrapping:Uo,ClampToEdgeWrapping:bi,MirroredRepeatWrapping:Fo},ey={NearestFilter:En,NearestMipmapNearestFilter:Jp,NearestMipmapLinearFilter:Pa,LinearFilter:cn,LinearMipmapNearestFilter:To,LinearMipmapLinearFilter:qi},mp=class extends On{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=fs.get(e);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{s&&s(c)});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;let l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return fs.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),fs.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});fs.add(e,l),r.manager.itemStart(e)}},Uc,xl=class{static getContext(){return Uc===void 0&&(Uc=new(window.AudioContext||window.webkitAudioContext)),Uc}static setContext(e){Uc=e}},gp=class extends On{constructor(e){super(e)}load(e,t,n,s){let r=this,a=new Fi(this.manager);a.setResponseType("arraybuffer"),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(l){try{let c=l.slice(0);xl.getContext().decodeAudioData(c,function(d){t(d)}).catch(o)}catch(c){o(c)}},n,s);function o(l){s?s(l):console.error(l),r.manager.itemError(e)}}},ty=new it,ny=new it,ur=new it,vp=class{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new pn,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new pn,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(e){let t=this._cache;if(t.focus!==e.focus||t.fov!==e.fov||t.aspect!==e.aspect*this.aspect||t.near!==e.near||t.far!==e.far||t.zoom!==e.zoom||t.eyeSep!==this.eyeSep){t.focus=e.focus,t.fov=e.fov,t.aspect=e.aspect*this.aspect,t.near=e.near,t.far=e.far,t.zoom=e.zoom,t.eyeSep=this.eyeSep,ur.copy(e.projectionMatrix);let s=t.eyeSep/2,r=s*t.near/t.focus,a=t.near*Math.tan(Mr*t.fov*.5)/t.zoom,o,l;ny.elements[12]=-s,ty.elements[12]=s,o=-a*t.aspect+r,l=a*t.aspect+r,ur.elements[0]=2*t.near/(l-o),ur.elements[8]=(l+o)/(l-o),this.cameraL.projectionMatrix.copy(ur),o=-a*t.aspect-r,l=a*t.aspect-r,ur.elements[0]=2*t.near/(l-o),ur.elements[8]=(l+o)/(l-o),this.cameraR.projectionMatrix.copy(ur)}this.cameraL.matrixWorld.copy(e.matrixWorld).multiply(ny),this.cameraR.matrixWorld.copy(e.matrixWorld).multiply(ty)}},id=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=iy(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=iy();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function iy(){return(typeof performance>"u"?Date:performance).now()}var dr=new U,sy=new Fn,vR=new U,hr=new U,yp=class extends Rt{constructor(){super(),this.type="AudioListener",this.context=xl.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new id}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);let t=this.context.listener,n=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(dr,sy,vR),hr.set(0,0,-1).applyQuaternion(sy),t.positionX){let s=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(dr.x,s),t.positionY.linearRampToValueAtTime(dr.y,s),t.positionZ.linearRampToValueAtTime(dr.z,s),t.forwardX.linearRampToValueAtTime(hr.x,s),t.forwardY.linearRampToValueAtTime(hr.y,s),t.forwardZ.linearRampToValueAtTime(hr.z,s),t.upX.linearRampToValueAtTime(n.x,s),t.upY.linearRampToValueAtTime(n.y,s),t.upZ.linearRampToValueAtTime(n.z,s)}else t.setPosition(dr.x,dr.y,dr.z),t.setOrientation(hr.x,hr.y,hr.z,n.x,n.y,n.z)}},sd=class extends Rt{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;let t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){return this.detune=e,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}},fr=new U,ry=new Fn,yR=new U,pr=new U,xp=class extends sd{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){super.connect(),this.panner.connect(this.gain)}disconnect(){super.disconnect(),this.panner.disconnect(this.gain)}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,n){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=n,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(fr,ry,yR),pr.set(0,0,1).applyQuaternion(ry);let t=this.panner;if(t.positionX){let n=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(fr.x,n),t.positionY.linearRampToValueAtTime(fr.y,n),t.positionZ.linearRampToValueAtTime(fr.z,n),t.orientationX.linearRampToValueAtTime(pr.x,n),t.orientationY.linearRampToValueAtTime(pr.y,n),t.orientationZ.linearRampToValueAtTime(pr.z,n)}else t.setPosition(fr.x,fr.y,fr.z),t.setOrientation(pr.x,pr.y,pr.z)}},_p=class{constructor(e,t=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0,t=this.getFrequencyData();for(let n=0;n<t.length;n++)e+=t[n];return e/t.length}},rd=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let s,r,a;switch(t){case"quaternion":s=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:s=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,s=this.valueSize,r=e*s+s,a=this.cumulativeWeight;if(a===0){for(let o=0;o!==s;++o)n[r+o]=n[o];a=t}else{a+=t;let o=t/a;this._mixBufferRegion(n,r,0,o,s)}this.cumulativeWeight=a}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,s=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,s,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,s=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let l=t*this._origIndex;this._mixBufferRegion(n,s,l,1-r,t)}a>0&&this._mixBufferRegionAdditive(n,s,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){o.setValue(n,s);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,s=n*this._origIndex;e.getValue(t,s);for(let r=n,a=s;r!==a;++r)t[r]=t[s+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,s,r){if(s>=.5)for(let a=0;a!==r;++a)e[t+a]=e[n+a]}_slerp(e,t,n,s){Fn.slerpFlat(e,t,e,t,e,n,s)}_slerpAdditive(e,t,n,s,r){let a=this._workIndex*r;Fn.multiplyQuaternionsFlat(e,a,e,t,e,n),Fn.slerpFlat(e,t,e,t,e,a,s)}_lerp(e,t,n,s,r){let a=1-s;for(let o=0;o!==r;++o){let l=t+o;e[l]=e[l]*a+e[n+o]*s}}_lerpAdditive(e,t,n,s,r){for(let a=0;a!==r;++a){let o=t+a;e[o]=e[o]+e[n+a]*s}}},dm="\\[\\]\\.:\\/",xR=new RegExp("["+dm+"]","g"),hm="[^"+dm+"]",_R="[^"+dm.replace("\\.","")+"]",bR=/((?:WC+[\/:])*)/.source.replace("WC",hm),SR=/(WCOD+)?/.source.replace("WCOD",_R),MR=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",hm),wR=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",hm),ER=new RegExp("^"+bR+SR+MR+wR+"$"),AR=["material","materials","bones","map"],bp=class{constructor(e,t,n){let s=n||It.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},It=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(xR,"")}static parseTrackName(e){let t=ER.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);AR.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};It.Composite=bp;It.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};It.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};It.prototype.GetterByBindingType=[It.prototype._getValue_direct,It.prototype._getValue_array,It.prototype._getValue_arrayElement,It.prototype._getValue_toArray];It.prototype.SetterByBindingTypeAndVersioning=[[It.prototype._setValue_direct,It.prototype._setValue_direct_setNeedsUpdate,It.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[It.prototype._setValue_array,It.prototype._setValue_array_setNeedsUpdate,It.prototype._setValue_array_setMatrixWorldNeedsUpdate],[It.prototype._setValue_arrayElement,It.prototype._setValue_arrayElement_setNeedsUpdate,It.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[It.prototype._setValue_fromArray,It.prototype._setValue_fromArray_setNeedsUpdate,It.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Sp=class{constructor(){this.isAnimationObjectGroup=!0,this.uuid=li(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;let e={};this._indicesByUUID=e;for(let n=0,s=arguments.length;n!==s;++n)e[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};let t=this;this.stats={objects:{get total(){return t._objects.length},get inUse(){return this.total-t.nCachedObjects_}},get bindingsPerObject(){return t._bindings.length}}}add(){let e=this._objects,t=this._indicesByUUID,n=this._paths,s=this._parsedPaths,r=this._bindings,a=r.length,o,l=e.length,c=this.nCachedObjects_;for(let u=0,d=arguments.length;u!==d;++u){let h=arguments[u],f=h.uuid,m=t[f];if(m===void 0){m=l++,t[f]=m,e.push(h);for(let v=0,g=a;v!==g;++v)r[v].push(new It(h,n[v],s[v]))}else if(m<c){o=e[m];let v=--c,g=e[v];t[g.uuid]=m,e[m]=g,t[f]=v,e[v]=h;for(let p=0,x=a;p!==x;++p){let y=r[p],_=y[v],L=y[m];y[m]=_,L===void 0&&(L=new It(h,n[p],s[p])),y[v]=L}}else e[m]!==o&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=c}remove(){let e=this._objects,t=this._indicesByUUID,n=this._bindings,s=n.length,r=this.nCachedObjects_;for(let a=0,o=arguments.length;a!==o;++a){let l=arguments[a],c=l.uuid,u=t[c];if(u!==void 0&&u>=r){let d=r++,h=e[d];t[h.uuid]=u,e[u]=h,t[c]=d,e[d]=l;for(let f=0,m=s;f!==m;++f){let v=n[f],g=v[d],p=v[u];v[u]=g,v[d]=p}}}this.nCachedObjects_=r}uncache(){let e=this._objects,t=this._indicesByUUID,n=this._bindings,s=n.length,r=this.nCachedObjects_,a=e.length;for(let o=0,l=arguments.length;o!==l;++o){let c=arguments[o],u=c.uuid,d=t[u];if(d!==void 0)if(delete t[u],d<r){let h=--r,f=e[h],m=--a,v=e[m];t[f.uuid]=d,e[d]=f,t[v.uuid]=h,e[h]=v,e.pop();for(let g=0,p=s;g!==p;++g){let x=n[g],y=x[h],_=x[m];x[d]=y,x[h]=_,x.pop()}}else{let h=--a,f=e[h];h>0&&(t[f.uuid]=d),e[d]=f,e.pop();for(let m=0,v=s;m!==v;++m){let g=n[m];g[d]=g[h],g.pop()}}}this.nCachedObjects_=r}subscribe_(e,t){let n=this._bindingsIndicesByPath,s=n[e],r=this._bindings;if(s!==void 0)return r[s];let a=this._paths,o=this._parsedPaths,l=this._objects,c=l.length,u=this.nCachedObjects_,d=new Array(c);s=r.length,n[e]=s,a.push(e),o.push(t),r.push(d);for(let h=u,f=l.length;h!==f;++h){let m=l[h];d[h]=new It(m,e,t)}return d}unsubscribe_(e){let t=this._bindingsIndicesByPath,n=t[e];if(n!==void 0){let s=this._paths,r=this._parsedPaths,a=this._bindings,o=a.length-1,l=a[o],c=e[o];t[c]=n,a[n]=l,a.pop(),r[n]=r[o],r.pop(),s[n]=s[o],s.pop()}}},ad=class{constructor(e,t,n=null,s=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=s;let r=t.tracks,a=r.length,o=new Array(a),l={endingStart:yr,endingEnd:yr};for(let c=0;c!==a;++c){let u=r[c].createInterpolant(null);o[c]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=ux,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){let s=this._clip.duration,r=e._clip.duration,a=r/s,o=s/r;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let s=this._mixer,r=s.time,a=this.timeScale,o=this._timeScaleInterpolant;o===null&&(o=s._lendControlInterpolant(),this._timeScaleInterpolant=o);let l=o.parameterPositions,c=o.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/a,c[1]=t/a,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,s){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);let a=this._updateTime(t),o=this._updateWeight(e);if(o>0){let l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case rm:for(let u=0,d=l.length;u!==d;++u)l[u].evaluate(a),c[u].accumulateAdditive(o);break;case ld:default:for(let u=0,d=l.length;u!==d;++u)l[u].evaluate(a),c[u].accumulate(s,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,s=this.time+e,r=this._loopCount,a=n===dx;if(e===0)return r===-1?s:a&&(r&1)===1?t-s:s;if(n===cx){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(s>=t)s=t;else if(s<0)s=0;else{this.time=s;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),s>=t||s<0){let o=Math.floor(s/t);s-=t*o,r+=Math.abs(o);let l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=e>0?t:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){let c=e<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=s;if(a&&(r&1)===1)return t-s}return s}_setEndings(e,t,n){let s=this._interpolantSettings;n?(s.endingStart=xr,s.endingEnd=xr):(e?s.endingStart=this.zeroSlopeAtStart?xr:yr:s.endingStart=Bo,t?s.endingEnd=this.zeroSlopeAtEnd?xr:yr:s.endingEnd=Bo)}_scheduleFading(e,t,n){let s=this._mixer,r=s.time,a=this._weightInterpolant;a===null&&(a=s._lendControlInterpolant(),this._weightInterpolant=a);let o=a.parameterPositions,l=a.sampleValues;return o[0]=r,l[0]=t,o[1]=r+e,l[1]=n,this}},TR=new Float32Array(1),Mp=class extends Ui{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){let n=e._localRoot||this._root,s=e._clip.tracks,r=s.length,a=e._propertyBindings,o=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName,u=c[l];u===void 0&&(u={},c[l]=u);for(let d=0;d!==r;++d){let h=s[d],f=h.name,m=u[f];if(m!==void 0)++m.referenceCount,a[d]=m;else{if(m=a[d],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,l,f));continue}let v=t&&t._propertyBindings[d].binding.parsedPath;m=new rd(It.create(n,f,v),h.ValueTypeName,h.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,l,f),a[d]=m}o[d].resultBuffer=m.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,s=e._clip.uuid,r=this._actionsByClip[s];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,s,n)}let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let s=this._actions,r=this._actionsByClip,a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{let o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=s.length,s.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],s=e._cacheIndex;n._cacheIndex=s,t[s]=n,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,a=this._actionsByClip,o=a[r],l=o.knownActions,c=l[l.length-1],u=e._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),e._byClipCacheIndex=null;let d=o.actionByRoot,h=(e._localRoot||this._root).uuid;delete d[h],l.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,s=this._nActiveActions++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,s=--this._nActiveActions,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){let s=this._bindingsByRootAndName,r=this._bindings,a=s[t];a===void 0&&(a={},s[t]=a),a[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,s=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[s],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[r],Object.keys(o).length===0&&delete a[s]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,s=this._nActiveBindings++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,s=--this._nActiveBindings,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new pl(new Float32Array(2),new Float32Array(2),1,TR),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,s=--this._nActiveControlInterpolants,r=t[s];e.__cacheIndex=s,t[s]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){let s=t||this._root,r=s.uuid,a=typeof e=="string"?Dr.findByName(s,e):e,o=a!==null?a.uuid:e,l=this._actionsByClip[o],c=null;if(n===void 0&&(a!==null?n=a.blendMode:n=ld),l!==void 0){let d=l.actionByRoot[r];if(d!==void 0&&d.blendMode===n)return d;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;let u=new ad(this,a,t,n);return this._bindAction(u,c),this._addInactiveAction(u,o,r),u}existingAction(e,t){let n=t||this._root,s=n.uuid,r=typeof e=="string"?Dr.findByName(n,e):e,a=r?r.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[s]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,s=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(s,e,r,a);let o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,s=this._actionsByClip,r=s[n];if(r!==void 0){let a=r.knownActions;for(let o=0,l=a.length;o!==l;++o){let c=a[o];this._deactivateAction(c);let u=c._cacheIndex,d=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,d._cacheIndex=u,t[u]=d,t.pop(),this._removeInactiveBindingsForAction(c)}delete s[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let a in n){let o=n[a].actionByRoot,l=o[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}let s=this._bindingsByRootAndName,r=s[t];if(r!==void 0)for(let a in r){let o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}},wp=class i{constructor(e){this.value=e}clone(){return new i(this.value.clone===void 0?this.value:this.value.clone())}},RR=0,Ep=class extends Ui{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:RR++}),this.name="",this.usage=Go,this.uniforms=[]}add(e){return this.uniforms.push(e),this}remove(e){let t=this.uniforms.indexOf(e);return t!==-1&&this.uniforms.splice(t,1),this}setName(e){return this.name=e,this}setUsage(e){return this.usage=e,this}dispose(){return this.dispatchEvent({type:"dispose"}),this}copy(e){this.name=e.name,this.usage=e.usage;let t=e.uniforms;this.uniforms.length=0;for(let n=0,s=t.length;n<s;n++){let r=Array.isArray(t[n])?t[n]:[t[n]];for(let a=0;a<r.length;a++)this.uniforms.push(r[a].clone())}return this}clone(){return new this.constructor().copy(this)}},Ap=class extends Wa{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){let t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){let t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}},Tp=class{constructor(e,t,n,s,r){this.isGLBufferAttribute=!0,this.name="",this.buffer=e,this.type=t,this.itemSize=n,this.elementSize=s,this.count=r,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}},ay=new it,Rp=class{constructor(e,t,n=0,s=1/0){this.ray=new Vs(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Ba,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return ay.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ay),this}intersectObject(e,t=!0,n=[]){return Cp(e,this,n,t),n.sort(oy),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Cp(e[s],this,n,t);return n.sort(oy),n}};function oy(i,e){return i.distance-e.distance}function Cp(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){let s=i.children;for(let r=0,a=s.length;r<a;r++)Cp(s[r],e,t,!0)}}var Pp=class{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(en(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}},Ip=class{constructor(e=1,t=0,n=0){return this.radius=e,this.theta=t,this.y=n,this}set(e,t,n){return this.radius=e,this.theta=t,this.y=n,this}copy(e){return this.radius=e.radius,this.theta=e.theta,this.y=e.y,this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+n*n),this.theta=Math.atan2(e,n),this.y=t,this}clone(){return new this.constructor().copy(this)}},ly=new ve,Lp=class{constructor(e=new ve(1/0,1/0),t=new ve(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ly.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y)}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ly).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},cy=new U,Fc=new U,Np=class{constructor(e=new U,t=new U){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){cy.subVectors(e,this.start),Fc.subVectors(this.end,this.start);let n=Fc.dot(Fc),r=Fc.dot(cy)/n;return t&&(r=en(r,0,1)),r}closestPointToPoint(e,t,n){let s=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(s).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}},uy=new U,Dp=class extends Rt{constructor(e,t){super(),this.light=e,this.matrixAutoUpdate=!1,this.color=t,this.type="SpotLightHelper";let n=new pt,s=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let a=0,o=1,l=32;a<l;a++,o++){let c=a/l*Math.PI*2,u=o/l*Math.PI*2;s.push(Math.cos(c),Math.sin(c),1,Math.cos(u),Math.sin(u),1)}n.setAttribute("position",new Ye(s,3));let r=new Pn({fog:!1,toneMapped:!1});this.cone=new Mi(n,r),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorld.copy(this.light.matrixWorld);let e=this.light.distance?this.light.distance:1e3,t=e*Math.tan(this.light.angle);this.cone.scale.set(t,t,e),uy.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(uy),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}},Os=new U,Oc=new it,Jh=new it,Up=class extends Mi{constructor(e){let t=Hx(e),n=new pt,s=[],r=[],a=new We(0,0,1),o=new We(0,1,0);for(let c=0;c<t.length;c++){let u=t[c];u.parent&&u.parent.isBone&&(s.push(0,0,0),s.push(0,0,0),r.push(a.r,a.g,a.b),r.push(o.r,o.g,o.b))}n.setAttribute("position",new Ye(s,3)),n.setAttribute("color",new Ye(r,3));let l=new Pn({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,l),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){let t=this.bones,n=this.geometry,s=n.getAttribute("position");Jh.copy(this.root.matrixWorld).invert();for(let r=0,a=0;r<t.length;r++){let o=t[r];o.parent&&o.parent.isBone&&(Oc.multiplyMatrices(Jh,o.matrixWorld),Os.setFromMatrixPosition(Oc),s.setXYZ(a,Os.x,Os.y,Os.z),Oc.multiplyMatrices(Jh,o.parent.matrixWorld),Os.setFromMatrixPosition(Oc),s.setXYZ(a+1,Os.x,Os.y,Os.z),a+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose()}};function Hx(i){let e=[];i.isBone===!0&&e.push(i);for(let t=0;t<i.children.length;t++)e.push.apply(e,Hx(i.children[t]));return e}var Fp=class extends tn{constructor(e,t,n){let s=new hl(t,4,2),r=new Zi({wireframe:!0,fog:!1,toneMapped:!1});super(s,r),this.light=e,this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}},CR=new U,dy=new We,hy=new We,Op=class extends Rt{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="HemisphereLightHelper";let s=new dl(t);s.rotateY(Math.PI*.5),this.material=new Zi({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);let r=s.getAttribute("position"),a=new Float32Array(r.count*3);s.setAttribute("color",new Et(a,3)),this.add(new tn(s,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){let e=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{let t=e.geometry.getAttribute("color");dy.copy(this.light.color),hy.copy(this.light.groundColor);for(let n=0,s=t.count;n<s;n++){let r=n<s/2?dy:hy;t.setXYZ(n,r.r,r.g,r.b)}t.needsUpdate=!0}this.light.updateWorldMatrix(!0,!1),e.lookAt(CR.setFromMatrixPosition(this.light.matrixWorld).negate())}},kp=class extends Mi{constructor(e=10,t=10,n=4473924,s=8947848){n=new We(n),s=new We(s);let r=t/2,a=e/t,o=e/2,l=[],c=[];for(let h=0,f=0,m=-o;h<=t;h++,m+=a){l.push(-o,0,m,o,0,m),l.push(m,0,-o,m,0,o);let v=h===r?n:s;v.toArray(c,f),f+=3,v.toArray(c,f),f+=3,v.toArray(c,f),f+=3,v.toArray(c,f),f+=3}let u=new pt;u.setAttribute("position",new Ye(l,3)),u.setAttribute("color",new Ye(c,3));let d=new Pn({vertexColors:!0,toneMapped:!1});super(u,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}},Bp=class extends Mi{constructor(e=10,t=16,n=8,s=64,r=4473924,a=8947848){r=new We(r),a=new We(a);let o=[],l=[];if(t>1)for(let d=0;d<t;d++){let h=d/t*(Math.PI*2),f=Math.sin(h)*e,m=Math.cos(h)*e;o.push(0,0,0),o.push(f,0,m);let v=d&1?r:a;l.push(v.r,v.g,v.b),l.push(v.r,v.g,v.b)}for(let d=0;d<n;d++){let h=d&1?r:a,f=e-e/n*d;for(let m=0;m<s;m++){let v=m/s*(Math.PI*2),g=Math.sin(v)*f,p=Math.cos(v)*f;o.push(g,0,p),l.push(h.r,h.g,h.b),v=(m+1)/s*(Math.PI*2),g=Math.sin(v)*f,p=Math.cos(v)*f,o.push(g,0,p),l.push(h.r,h.g,h.b)}}let c=new pt;c.setAttribute("position",new Ye(o,3)),c.setAttribute("color",new Ye(l,3));let u=new Pn({vertexColors:!0,toneMapped:!1});super(c,u),this.type="PolarGridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}},fy=new U,kc=new U,py=new U,zp=class extends Rt{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",t===void 0&&(t=1);let s=new pt;s.setAttribute("position",new Ye([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));let r=new Pn({fog:!1,toneMapped:!1});this.lightPlane=new Ji(s,r),this.add(this.lightPlane),s=new pt,s.setAttribute("position",new Ye([0,0,0,0,0,1],3)),this.targetLine=new Ji(s,r),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),fy.setFromMatrixPosition(this.light.matrixWorld),kc.setFromMatrixPosition(this.light.target.matrixWorld),py.subVectors(kc,fy),this.lightPlane.lookAt(kc),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(kc),this.targetLine.scale.z=py.length()}},Bc=new U,Qt=new Va,Vp=class extends Mi{constructor(e){let t=new pt,n=new Pn({color:16777215,vertexColors:!0,toneMapped:!1}),s=[],r=[],a={};o("n1","n2"),o("n2","n4"),o("n4","n3"),o("n3","n1"),o("f1","f2"),o("f2","f4"),o("f4","f3"),o("f3","f1"),o("n1","f1"),o("n2","f2"),o("n3","f3"),o("n4","f4"),o("p","n1"),o("p","n2"),o("p","n3"),o("p","n4"),o("u1","u2"),o("u2","u3"),o("u3","u1"),o("c","t"),o("p","c"),o("cn1","cn2"),o("cn3","cn4"),o("cf1","cf2"),o("cf3","cf4");function o(m,v){l(m),l(v)}function l(m){s.push(0,0,0),r.push(0,0,0),a[m]===void 0&&(a[m]=[]),a[m].push(s.length/3-1)}t.setAttribute("position",new Ye(s,3)),t.setAttribute("color",new Ye(r,3)),super(t,n),this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=a,this.update();let c=new We(16755200),u=new We(16711680),d=new We(43775),h=new We(16777215),f=new We(3355443);this.setColors(c,u,d,h,f)}setColors(e,t,n,s,r){let o=this.geometry.getAttribute("color");o.setXYZ(0,e.r,e.g,e.b),o.setXYZ(1,e.r,e.g,e.b),o.setXYZ(2,e.r,e.g,e.b),o.setXYZ(3,e.r,e.g,e.b),o.setXYZ(4,e.r,e.g,e.b),o.setXYZ(5,e.r,e.g,e.b),o.setXYZ(6,e.r,e.g,e.b),o.setXYZ(7,e.r,e.g,e.b),o.setXYZ(8,e.r,e.g,e.b),o.setXYZ(9,e.r,e.g,e.b),o.setXYZ(10,e.r,e.g,e.b),o.setXYZ(11,e.r,e.g,e.b),o.setXYZ(12,e.r,e.g,e.b),o.setXYZ(13,e.r,e.g,e.b),o.setXYZ(14,e.r,e.g,e.b),o.setXYZ(15,e.r,e.g,e.b),o.setXYZ(16,e.r,e.g,e.b),o.setXYZ(17,e.r,e.g,e.b),o.setXYZ(18,e.r,e.g,e.b),o.setXYZ(19,e.r,e.g,e.b),o.setXYZ(20,e.r,e.g,e.b),o.setXYZ(21,e.r,e.g,e.b),o.setXYZ(22,e.r,e.g,e.b),o.setXYZ(23,e.r,e.g,e.b),o.setXYZ(24,t.r,t.g,t.b),o.setXYZ(25,t.r,t.g,t.b),o.setXYZ(26,t.r,t.g,t.b),o.setXYZ(27,t.r,t.g,t.b),o.setXYZ(28,t.r,t.g,t.b),o.setXYZ(29,t.r,t.g,t.b),o.setXYZ(30,t.r,t.g,t.b),o.setXYZ(31,t.r,t.g,t.b),o.setXYZ(32,n.r,n.g,n.b),o.setXYZ(33,n.r,n.g,n.b),o.setXYZ(34,n.r,n.g,n.b),o.setXYZ(35,n.r,n.g,n.b),o.setXYZ(36,n.r,n.g,n.b),o.setXYZ(37,n.r,n.g,n.b),o.setXYZ(38,s.r,s.g,s.b),o.setXYZ(39,s.r,s.g,s.b),o.setXYZ(40,r.r,r.g,r.b),o.setXYZ(41,r.r,r.g,r.b),o.setXYZ(42,r.r,r.g,r.b),o.setXYZ(43,r.r,r.g,r.b),o.setXYZ(44,r.r,r.g,r.b),o.setXYZ(45,r.r,r.g,r.b),o.setXYZ(46,r.r,r.g,r.b),o.setXYZ(47,r.r,r.g,r.b),o.setXYZ(48,r.r,r.g,r.b),o.setXYZ(49,r.r,r.g,r.b),o.needsUpdate=!0}update(){let e=this.geometry,t=this.pointMap,n=1,s=1;Qt.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),sn("c",t,e,Qt,0,0,-1),sn("t",t,e,Qt,0,0,1),sn("n1",t,e,Qt,-n,-s,-1),sn("n2",t,e,Qt,n,-s,-1),sn("n3",t,e,Qt,-n,s,-1),sn("n4",t,e,Qt,n,s,-1),sn("f1",t,e,Qt,-n,-s,1),sn("f2",t,e,Qt,n,-s,1),sn("f3",t,e,Qt,-n,s,1),sn("f4",t,e,Qt,n,s,1),sn("u1",t,e,Qt,n*.7,s*1.1,-1),sn("u2",t,e,Qt,-n*.7,s*1.1,-1),sn("u3",t,e,Qt,0,s*2,-1),sn("cf1",t,e,Qt,-n,0,1),sn("cf2",t,e,Qt,n,0,1),sn("cf3",t,e,Qt,0,-s,1),sn("cf4",t,e,Qt,0,s,1),sn("cn1",t,e,Qt,-n,0,-1),sn("cn2",t,e,Qt,n,0,-1),sn("cn3",t,e,Qt,0,-s,-1),sn("cn4",t,e,Qt,0,s,-1),e.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}};function sn(i,e,t,n,s,r,a){Bc.set(s,r,a).unproject(n);let o=e[i];if(o!==void 0){let l=t.getAttribute("position");for(let c=0,u=o.length;c<u;c++)l.setXYZ(o[c],Bc.x,Bc.y,Bc.z)}}var zc=new Cn,Hp=class extends Mi{constructor(e,t=16776960){let n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),s=new Float32Array(24),r=new pt;r.setIndex(new Et(n,1)),r.setAttribute("position",new Et(s,3)),super(r,new Pn({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(e){if(e!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&zc.setFromObject(this.object),zc.isEmpty())return;let t=zc.min,n=zc.max,s=this.geometry.attributes.position,r=s.array;r[0]=n.x,r[1]=n.y,r[2]=n.z,r[3]=t.x,r[4]=n.y,r[5]=n.z,r[6]=t.x,r[7]=t.y,r[8]=n.z,r[9]=n.x,r[10]=t.y,r[11]=n.z,r[12]=n.x,r[13]=n.y,r[14]=t.z,r[15]=t.x,r[16]=n.y,r[17]=t.z,r[18]=t.x,r[19]=t.y,r[20]=t.z,r[21]=n.x,r[22]=t.y,r[23]=t.z,s.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}},Gp=class extends Mi{constructor(e,t=16776960){let n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),s=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new pt;r.setIndex(new Et(n,1)),r.setAttribute("position",new Ye(s,3)),super(r,new Pn({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){let t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){this.geometry.dispose(),this.material.dispose()}},Wp=class extends Ji{constructor(e,t=1,n=16776960){let s=n,r=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],a=new pt;a.setAttribute("position",new Ye(r,3)),a.computeBoundingSphere(),super(a,new Pn({color:s,toneMapped:!1})),this.type="PlaneHelper",this.plane=e,this.size=t;let o=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],l=new pt;l.setAttribute("position",new Ye(o,3)),l.computeBoundingSphere(),this.add(new tn(l,new Zi({color:s,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(e){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}},my=new U,Vc,jh,qp=class extends Rt{constructor(e=new U(0,0,1),t=new U(0,0,0),n=1,s=16776960,r=n*.2,a=r*.2){super(),this.type="ArrowHelper",Vc===void 0&&(Vc=new pt,Vc.setAttribute("position",new Ye([0,0,0,0,1,0],3)),jh=new $a(0,.5,1,5,1),jh.translate(0,-.5,0)),this.position.copy(t),this.line=new Ji(Vc,new Pn({color:s,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new tn(jh,new Zi({color:s,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(n,r,a)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{my.set(e.z,0,-e.x).normalize();let t=Math.acos(e.y);this.quaternion.setFromAxisAngle(my,t)}}setLength(e,t=e*.2,n=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(n,t,n),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}},Xp=class extends Mi{constructor(e=1){let t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],s=new pt;s.setAttribute("position",new Ye(t,3)),s.setAttribute("color",new Ye(n,3));let r=new Pn({vertexColors:!0,toneMapped:!1});super(s,r),this.type="AxesHelper"}setColors(e,t,n){let s=new We,r=this.geometry.attributes.color.array;return s.set(e),s.toArray(r,0),s.toArray(r,3),s.set(t),s.toArray(r,6),s.toArray(r,9),s.set(n),s.toArray(r,12),s.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}},$p=class{constructor(){this.type="ShapePath",this.color=new We,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new Cr,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,s){return this.currentPath.quadraticCurveTo(e,t,n,s),this}bezierCurveTo(e,t,n,s,r,a){return this.currentPath.bezierCurveTo(e,t,n,s,r,a),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(p){let x=[];for(let y=0,_=p.length;y<_;y++){let L=p[y],M=new gs;M.curves=L.curves,x.push(M)}return x}function n(p,x){let y=x.length,_=!1;for(let L=y-1,M=0;M<y;L=M++){let R=x[L],P=x[M],w=P.x-R.x,S=P.y-R.y;if(Math.abs(S)>Number.EPSILON){if(S<0&&(R=x[M],w=-w,P=x[L],S=-S),p.y<R.y||p.y>P.y)continue;if(p.y===R.y){if(p.x===R.x)return!0}else{let D=S*(p.x-R.x)-w*(p.y-R.y);if(D===0)return!0;if(D<0)continue;_=!_}}else{if(p.y!==R.y)continue;if(P.x<=p.x&&p.x<=R.x||R.x<=p.x&&p.x<=P.x)return!0}}return _}let s=Yi.isClockWise,r=this.subPaths;if(r.length===0)return[];let a,o,l,c=[];if(r.length===1)return o=r[0],l=new gs,l.curves=o.curves,c.push(l),c;let u=!s(r[0].getPoints());u=e?!u:u;let d=[],h=[],f=[],m=0,v;h[m]=void 0,f[m]=[];for(let p=0,x=r.length;p<x;p++)o=r[p],v=o.getPoints(),a=s(v),a=e?!a:a,a?(!u&&h[m]&&m++,h[m]={s:new gs,p:v},h[m].s.curves=o.curves,u&&m++,f[m]=[]):f[m].push({h:o,p:v[0]});if(!h[0])return t(r);if(h.length>1){let p=!1,x=0;for(let y=0,_=h.length;y<_;y++)d[y]=[];for(let y=0,_=h.length;y<_;y++){let L=f[y];for(let M=0;M<L.length;M++){let R=L[M],P=!0;for(let w=0;w<h.length;w++)n(R.p,h[w].p)&&(y!==w&&x++,P?(P=!1,d[w].push(R)):p=!0);P&&d[y].push(R)}}x>0&&p===!1&&(f=d)}let g;for(let p=0,x=h.length;p<x;p++){l=h[p].s,c.push(l),g=f[p];for(let y=0,_=g.length;y<_;y++)l.holes.push(g[y].h)}return c}},Yp=class extends ci{constructor(e=1,t=1,n=1,s={}){console.warn('THREE.WebGLMultipleRenderTargets has been deprecated and will be removed in r172. Use THREE.WebGLRenderTarget and set the "count" parameter to enable MRT.'),super(e,t,{...s,count:n}),this.isWebGLMultipleRenderTargets=!0}get texture(){return this.textures}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"164"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="164");var Um={};dg(Um,{applyScenarioConfigEdits:()=>h_,availableOutputNames:()=>Sm,availableStateNames:()=>bm,buildHostedResultsDocument:()=>c_,buildHostedResultsPanelState:()=>wm,buildHostedResultsPanelTitle:()=>Qx,buildScenarioConfigDocument:()=>y_,buildSimulationRunDocument:()=>xd,buildVisualizationModel:()=>u_,buildVisualizationViewStorageHandlers:()=>t_,default:()=>MC,defaultThreeDimensionalViewerScript:()=>Al,defaultVisualizationViews:()=>pd,expandRequestedSeries:()=>fd,flattenScenarioConfig:()=>Nm,handleHostedResultsRequest:()=>l_,hydrateVisualizationViewsForModel:()=>Em,isRumocaScenarioPath:()=>d_,loadHostedSimulationRun:()=>Im,loadHostedSimulationRunWithViews:()=>i_,modelScopedViewerScriptRelativePath:()=>vm,nextSimulationRunLocation:()=>_m,normalizeHostedPngExportRequest:()=>r_,normalizeHostedResultsModelRef:()=>vd,normalizeHostedResultsNotifyPayload:()=>o_,normalizeHostedResultsPanelState:()=>Mm,normalizeHostedWebmExportRequest:()=>a_,normalizePersistedSimulationRun:()=>Lm,normalizeSimulationPayload:()=>gd,normalizeSimulationRunMetrics:()=>md,normalizeVisualizationViews:()=>$n,persistHostedSimulationRun:()=>Pm,persistHostedSimulationRunWithViews:()=>n_,persistVisualizationViewsForModel:()=>Am,preferredViewerScriptPathForModel:()=>Br,readPersistedSimulationRunDocument:()=>Cm,removeStaleVisualizationScriptFiles:()=>Tm,removeVisualizationScriptFilesForViews:()=>yd,sanitizeResultsPathSegment:()=>gm,setScenarioConfigValue:()=>_d,simulationRunDocumentPath:()=>El,toggleSeriesName:()=>jx,workspaceModelicaSourceMap:()=>ym,workspaceModelicaSourcesJson:()=>Zx,workspaceSourceRootSourceMap:()=>xm,workspaceSourceRootSourcesJson:()=>Jx,writePersistedSimulationRunDocument:()=>Rm});var $x="results";function _e(i){return typeof i=="string"?i.trim():""}function Ms(i){return Array.isArray(i)?i.map(_e).filter(Boolean):[]}function PR(i){let e="";for(let t of String(i||""))/[A-Za-z0-9_]/.test(t)?e+=t.toLowerCase():/\s|-/.test(t)&&(e+="_");return e||"panel"}function gm(i){let e=String(i||"").trim().replace(/[^a-zA-Z0-9._-]+/g,"_").replace(/^_+|_+$/g,"");return e.length>0?e:"view"}function IR(i){return PR(i)}function LR(i=new Date){return i.toISOString().replace(/[-:]/g,"").replace(/\.\d{3}Z$/,"Z")}function De(i){return String(i||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function kr(i){return String(i||"").replace(/</g,"\\u003c").replace(/>/g,"\\u003e").replace(/&/g,"\\u0026").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")}function vm(i,e){return`${gm(e)}.js`}function Br(i,e){return vm(i,e)}function NR(i){return String(i||"").replace(/\\/g,"/").replace(/^\/+/,"").replace(/\/+/g,"/").trim().split("/").filter(e=>e&&e!==".").join("/")}function pm(i){let e=String(i||"").replace(/\\/g,"/").replace(/^\/+/,"").replace(/\/+/g,"/").trim();return!e||e==="."?"":e.split("/").filter(t=>t&&t!==".").join("/")}function hd(i){let e=[];for(let t of pm(i).split("/"))t&&(t===".."?e.pop():e.push(t));return e.join("/")}function Yx(i,e){return i===e||i.startsWith(`${e}/`)}function ym(i,e={}){let t=pm(e.excludePath),n=Ms(e.excludeSourceRootPaths).map(hd).filter(Boolean),s={};for(let r of Array.isArray(i)?i:[]){let a=pm(r&&r.path);if(!a||a===t||!a.endsWith(".mo")||r&&r.sourceKind==="packageArchive"||typeof(r&&r.content)!="string")continue;let o=hd(a);n.some(l=>Yx(o,l))||(s[a]=r.content)}return s}function Zx(i,e={}){return JSON.stringify(ym(i,e))}function xm(i,e=[]){let t=Ms(e).map(hd).filter(Boolean);if(t.length===0)return{};let n={};for(let s of Array.isArray(i)?i:[]){let r=hd(s&&s.path);!r||!r.endsWith(".mo")||typeof(s&&s.content)!="string"||t.some(a=>Yx(r,a))&&(n[r]=s.content)}return n}function Jx(i,e=[]){return JSON.stringify(xm(i,e))}function _m(i,e,t=$x){let n=new Date,s=LR(n),r=IR(i),a=`${s}.${r}`,o=El(a,t);for(let l=1;typeof e=="function"&&e(o);l+=1)a=`${s}.${r}.${l}`,o=El(a,t);return{runId:a,runPath:o,savedAtUnixMs:n.getTime()}}function Al(){return`// Default Rumoca 3D preset.
// Geometry is defined here so each model can fully customize visuals.
ctx.onInit = (api) => {
  if (typeof api.enableDefaultViewerRuntime === "function") {
    api.enableDefaultViewerRuntime({ selectedObjectName: "ball", followSelected: true });
  }
  const { THREE, state } = api;
  if (!THREE || !state || !state.scene) return;

  state.scene.background = new THREE.Color(0x101010);

  const keyLight = new THREE.DirectionalLight(0xffffff, 1.0);
  keyLight.position.set(2, 4, 3);
  state.scene.add(keyLight);
  state.scene.add(new THREE.AmbientLight(0x404040, 0.9));
  state.scene.add(new THREE.GridHelper(12, 24, 0x2f4f63, 0x2a2a2a));

  const floor = new THREE.Mesh(
    new THREE.BoxGeometry(8, 0.1, 8),
    new THREE.MeshStandardMaterial({ color: 0x444444 })
  );
  floor.position.set(0, -0.05, 0);
  floor.name = "floor";
  state.scene.add(floor);

  const ball = new THREE.Mesh(
    new THREE.SphereGeometry(0.2, 32, 24),
    new THREE.MeshStandardMaterial({ color: 0x3cb4ff })
  );
  ball.name = "ball";
  state.scene.add(ball);
  state.ball = ball;
};

ctx.onFrame = (api) => {
  const ball = api.state ? api.state.ball : null;
  if (ball) {
    const height = Number(api.getValue("x", api.sampleIndex));
    ball.position.set(0, Number.isFinite(height) ? height : 0, 0);
  }
};`}function DR(i){return`view_${i+1}`}function UR(i,e,t){let n=[];for(let s of Array.isArray(i)?i:[]){if(!s||typeof s!="object")continue;let r=_e(s.x),a=_e(s.y);if(!r||!a)continue;let o=_e(s.name);n.push({name:o||`${a} vs ${r}`,x:r,y:a})}if(n.length>0)return n;if(e&&t)return[{name:`${t} vs ${e}`,x:e,y:t}]}function pd(){return[{id:"states_time",title:"States vs Time",type:"timeseries",x:"time",y:["*states"]}]}function $n(i){if(!Array.isArray(i))return[];let e=[];for(let t of i){if(!t||typeof t!="object")continue;let n=_e(t.type).toLowerCase(),s=n==="scatter"||n==="3d"?n:"timeseries",r=_e(t.x)||void 0,a=Ms(t.y),o=_e(t.script)||void 0,l=_e(t.scriptPath)||_e(t.script_path)||void 0,c=r||"time",u=a.length>0?a[0]:"",d=s==="scatter"?UR(t.scatterSeries,c,u):void 0;e.push({id:_e(t.id)||DR(e.length),title:_e(t.title)||`View ${e.length+1}`,type:s,x:r,y:s==="3d"?[]:a,...d?{scatterSeries:d}:{},...o?{script:o}:{},...l?{scriptPath:l}:{}})}return e}function FR(i){let e=new Map;return(Array.isArray(i?.names)?i.names:[]).forEach((n,s)=>e.set(String(n),s)),e}function bm(i){let e=Array.isArray(i?.names)?i.names:[],t=Number.isFinite(i?.nStates)?Math.max(0,i.nStates):0;return e.slice(0,t).map(String)}function Sm(i){let e=Array.isArray(i?.names)?i.names:[],t=Number.isFinite(i?.nStates)?Math.max(0,i.nStates):0;return e.slice(t).map(String)}function OR(i){return String(i||"").split(/[\n,]/).map(_e).filter(Boolean)}function jx(i,e,t){let n=_e(e),s=OR(i).filter(r=>r!==n);return t&&n&&s.push(n),s.join(", ")}function fd(i,e){let t=Array.isArray(i?.names)?i.names.map(String):[],n=[];for(let s of Array.isArray(e)?e:[]){let r=_e(s);if(r){if(r==="*states"){n.push(...bm(i));continue}if(r==="*outputs"){n.push(...Sm(i));continue}if(r==="*all"){n.push(...t);continue}t.includes(r)&&n.push(r)}}return[...new Set(n)]}function Ml(i,e,t){let n=_e(e)||_e(t);if(!n)return null;if(n==="time")return{name:"time",values:Array.isArray(i?.allData?.[0])?i.allData[0].map(Number):[]};let r=FR(i).get(n);if(r===void 0)return null;let a=Array.isArray(i?.allData)?i.allData[r+1]:null;return{name:n,values:Array.isArray(a)?a.map(Number):[]}}function kR(i){let e=["#4ec9b0","#569cd6","#ce9178","#dcdcaa","#c586c0","#9cdcfe","#d7ba7d","#608b4e","#d16969","#b5cea8"];return e[i%e.length]}function md(i){if(!i||typeof i!="object")return;let e=i,t=Number(e.compileSeconds),n=Number(e.simulateSeconds),s=Number(e.points),r=Number(e.variables);if(!Number.isFinite(n)||!Number.isFinite(s)||!Number.isFinite(r))return;let a=e.compilePhaseSeconds,o;if(a&&typeof a=="object"){let l=Number(a.instantiate),c=Number(a.typecheck),u=Number(a.flatten),d=Number(a.todae);Number.isFinite(l)&&Number.isFinite(c)&&Number.isFinite(u)&&Number.isFinite(d)&&(o={instantiate:l,typecheck:c,flatten:u,todae:d})}return{...Number.isFinite(t)?{compileSeconds:t}:{},simulateSeconds:n,points:s,variables:r,...o?{compilePhaseSeconds:o}:{}}}function gd(i){if(!i||typeof i!="object")return;let e=i,t=Array.isArray(e.names)?e.names.filter(function(r){return typeof r=="string"}):[],n=Array.isArray(e.allData)?e.allData.map(function(r){return Array.isArray(r)?r.map(Number):[]}):[],s=Number(e.nStates);if(!(!Number.isFinite(s)||t.length===0||n.length===0))return{version:Number.isFinite(Number(e.version))?Number(e.version):void 0,names:t,allData:n,nStates:s,variableMeta:Array.isArray(e.variableMeta)?e.variableMeta:[],simDetails:e.simDetails||{}}}function Kx(i){let e=_e(i);if(!(!e||!/^[A-Za-z0-9._-]+$/.test(e)))return e}function El(i,e=$x){let t=Kx(i);if(!t)return;let n=NR(e),s=`rumoca-result.${t}.json`;return n?`${n}/${s}`:s}function vd(i,e){if(!i||typeof i!="object")return;let t=i,n=_e(t.model);if(n)return{model:n,workspaceRoot:_e(t.workspaceRoot)||_e(e)||void 0,runId:_e(t.runId)||void 0,runPath:_e(t.runPath)||void 0,title:_e(t.title)||void 0}}function Mm(i,e){let t=vd(i,e);if(!t||!t.runId&&!t.runPath)return;let n={version:1,runId:t.runId,model:t.model,workspaceRoot:t.workspaceRoot,title:t.title,activeViewId:_e(i&&i.activeViewId)||void 0};return t.runPath&&(n.runPath=t.runPath),n}function wm(i){return Mm(i,i&&i.fallbackWorkspaceRoot)}function Qx(i){let e=_e(i&&i.title);if(e)return e;if(i&&i.unavailable)return"Rumoca Results (Unavailable)";let t=_e(i&&i.model);if(!t)return"Rumoca Results";if(i&&i.missingRun)return`Rumoca Results: ${t} (Missing Run)`;let n=_e(i&&i.timestamp);return n?`Rumoca Results: ${t} (${n})`:`Rumoca Results: ${t}`}function e_(i){return{...i,y:Array.isArray(i&&i.y)?[...i.y]:[],scatterSeries:Array.isArray(i&&i.scatterSeries)?i.scatterSeries.map(function(e){return{...e}}):void 0}}async function Em(i){let e=_e(i&&i.model),t=typeof i?.defaultViewerScript=="function"?i.defaultViewerScript:function(){return Al()},n=typeof i?.resolveViewerScriptPath=="function"?i.resolveViewerScriptPath:function(o,l){return Br(o,l)},s=typeof i?.readTextFile=="function"?i.readTextFile:null,r=typeof i?.writeMissingTextFile=="function"?i.writeMissingTextFile:null,a=[];for(let[o,l]of $n(i?.views).entries()){let c=e_(l);if(c.type!=="3d"){c.script=void 0,c.scriptPath=void 0,a.push(c);continue}let u=_e(c.id)||`viewer_${o+1}`,d=_e(c.scriptPath)||_e(await n(e,u))||Br(e,u),h=_e(c.script);if(!h&&s)try{h=_e(await s(d))}catch{h=""}if(!h&&(h=t(),r))try{await r(d,h)}catch{}c.scriptPath=d,c.script=h,a.push(c)}return a}async function Am(i){let e=_e(i&&i.model),t=typeof i?.defaultViewerScript=="function"?i.defaultViewerScript:function(){return Al()},n=typeof i?.resolveViewerScriptPath=="function"?i.resolveViewerScriptPath:function(o,l){return Br(o,l)},s=typeof i?.readTextFile=="function"?i.readTextFile:null,r=typeof i?.writeTextFile=="function"?i.writeTextFile:null,a=[];for(let[o,l]of $n(i?.views).entries()){let c=e_(l);if(c.type!=="3d"){c.script=void 0,c.scriptPath=void 0,a.push(c);continue}let u=_e(c.id)||`viewer_${o+1}`,d=_e(c.scriptPath)||_e(await n(e,u))||Br(e,u),h="";if(s)try{h=_e(await s(d))}catch{h=""}let f=_e(c.script)||h||t();r&&await r(d,f),c.script=void 0,c.scriptPath=d,a.push(c)}return a}async function yd(i){let e=typeof i?.removeTextFile=="function"?i.removeTextFile:null;if(e)for(let t of Array.isArray(i?.views)?i.views:[]){let n=_e(t&&t.scriptPath);n&&await e(n)}}async function Tm(i){let e=new Set((Array.isArray(i?.nextViews)?i.nextViews:[]).map(function(t){return _e(t&&t.scriptPath)}).filter(Boolean));await yd({views:(Array.isArray(i?.previousViews)?i.previousViews:[]).filter(function(t){let n=_e(t&&t.scriptPath);return n&&!e.has(n)}),removeTextFile:i?.removeTextFile})}function t_(i){let e=typeof i?.defaultViewerScript=="function"?i.defaultViewerScript:function(){return Al()},t=typeof i?.resolveViewerScriptPath=="function"?i.resolveViewerScriptPath:function(o,l){return Br(o,l)},n=typeof i?.readTextFile=="function"?i.readTextFile:null,s=typeof i?.writeTextFile=="function"?i.writeTextFile:null,r=typeof i?.removeTextFile=="function"?i.removeTextFile:null;async function a(o,l){if(s){if(n)try{await n(o);return}catch{}await s(o,l)}}return{async hydrateViews(o){return await Em({views:o?.views,model:o?.model,resolveViewerScriptPath:t,readTextFile:n,writeMissingTextFile:s?a:null,defaultViewerScript:e})},async persistViews(o){return await Am({views:o?.views,model:o?.model,resolveViewerScriptPath:t,readTextFile:n,writeTextFile:s,defaultViewerScript:e})},async removeViews(o){await yd({views:o?.views,removeTextFile:r})},async removeStaleViews(o){await Tm({previousViews:o?.previousViews,nextViews:o?.nextViews,removeTextFile:r})}}}async function Rm(i){if(!i||!i.payload||typeof i.writeTextFile!="function")return;let e=_m(i.model,i.pathExists,i.resultDirectory),t=xd({runId:e.runId,model:i.model,savedAtUnixMs:e.savedAtUnixMs,payload:i.payload,metrics:i.metrics,views:i.views});if(t)return await i.writeTextFile(e.runPath,JSON.stringify(t,null,2)),{runId:e.runId,runPath:e.runPath,savedAtUnixMs:e.savedAtUnixMs,runDoc:t}}async function Cm(i){let e=El(i&&i.runId,i&&i.resultDirectory);if(!e||typeof i?.readTextFile!="function")return;let t;try{t=await i.readTextFile(e)}catch{return}let n;try{n=JSON.parse(String(t||""))}catch{return}let s=Lm(n);if(!(!s||s.runId!==i.runId))return s}async function Pm(i){let e=_e(i&&i.model);if(!e)return;let t=gd(i&&i.payload),n=md(i&&i.metrics),s=$n(typeof i?.hydrateViews=="function"?await i.hydrateViews({model:e,views:$n(i&&i.views)}):i&&i.views),r;if(t&&typeof i?.writeTextFile=="function"&&(r=await Rm({model:e,payload:t,metrics:n,views:s,resultDirectory:i.resultDirectory,pathExists:i.pathExists,writeTextFile:i.writeTextFile})),!!r)return{runId:r.runId,runPath:r.runPath,savedAtUnixMs:r.savedAtUnixMs,views:s}}async function n_(i){let e=_e(i&&i.model);if(!e||typeof i?.loadConfiguredViews!="function")return;let t=$n(await i.loadConfiguredViews({model:e,workspaceRoot:i?.workspaceRoot})),n=t.length>0?t:$n(i?.defaultViews);return await Pm({model:e,payload:i?.payload,metrics:i?.metrics,views:n,hydrateViews:i?.hydrateViews?function(s){return i.hydrateViews({model:s.model,workspaceRoot:i?.workspaceRoot,views:s.views})}:null,pathExists:i?.pathExists,readTextFile:i?.readTextFile,writeTextFile:i?.writeTextFile,resultDirectory:i?.resultDirectory})}async function Im(i){if(!i||typeof i.readTextFile!="function")return;let e=_e(i.runId);if(e)return await Cm({runId:e,resultDirectory:i.resultDirectory,readTextFile:i.readTextFile})}async function i_(i){let e=_e(i&&i.model);if(!e||typeof i?.loadConfiguredViews!="function")return;let t=await Im({model:e,runId:i?.runId,resultDirectory:i?.resultDirectory,readTextFile:i?.readTextFile}),n=$n(await i.loadConfiguredViews({model:e,workspaceRoot:i?.workspaceRoot})),s=n.length>0?n:$n(i?.defaultViews),r=typeof i?.hydrateViews=="function"?$n(await i.hydrateViews({model:e,workspaceRoot:i?.workspaceRoot,views:s})):s;return{run:t,views:r}}function s_(i,e){let t=i&&typeof i=="object"?i:{},n=e==="webm"?"rumoca_viewer.webm":"rumoca_plot.png",s=e==="webm"?".webm":".png",r=String(t.dataUrl??""),o=String(t.defaultName??n).replace(/[^a-zA-Z0-9._-]+/g,"_").replace(/^_+|_+$/g,"")||n,l=e==="webm"?r.match(/^data:video\/webm[^,]*;base64,(.+)$/):r.match(/^data:image\/png;base64,(.+)$/);if(!l)throw new Error(e==="webm"?"Invalid WebM payload from results webview.":"Invalid PNG payload from results webview.");return{base64:l[1],defaultName:o.endsWith(s)?o:`${o}${s}`}}function r_(i){return s_(i,"png")}function a_(i){return s_(i,"webm")}function o_(i){return{message:String((i&&typeof i=="object"?i:{}).message??"").trim()}}async function l_(i){let e=i&&i.message;if(!e||typeof e!="object"||_e(e.command)!=="results.request")return!1;let n=_e(e.requestId),s=_e(e.method);if(!n||!s)return!0;let r=e.payload,a=i&&i.handlers?i.handlers:{},o=typeof i?.postMessage=="function"?i.postMessage:null,l=typeof i?.fallbackWorkspaceRoot=="function"?i.fallbackWorkspaceRoot():i?.fallbackWorkspaceRoot,c=vd(r&&typeof r=="object"?r.modelRef:void 0,l);async function u(h,f,m){o&&await o({command:"results.response",requestId:n,ok:h,value:f,error:m})}let d=a[s];if(typeof d!="function"){let h=`Unknown results request: ${s}`;return typeof i?.onError=="function"&&i.onError({method:s,error:new Error(h)}),await u(!1,void 0,h),!0}try{let h=await d({method:s,payload:r,modelRef:c});await u(!0,h)}catch(h){let f=String(h&&h.message?h.message:h);typeof i?.onError=="function"&&i.onError({method:s,error:h}),await u(!1,void 0,f)}return!0}function c_(i){let e=$n(i&&i.views).length>0?$n(i&&i.views):pd(),t=kr(JSON.stringify(e)),n=kr(JSON.stringify(i&&i.payload?i.payload:null)),s=kr(JSON.stringify(i&&i.metrics?i.metrics:null)),r=_e(i&&i.model)||"Rumoca Results",a=kr(JSON.stringify(r)),o=kr(JSON.stringify(wm(i&&i.panelState)||null)),l=i&&i.assets?i.assets:{},c=kr(JSON.stringify(_e(l.resultsAppJs)||"./results_app.js"));return`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Rumoca Results: ${De(r)}</title>
  <link rel="stylesheet" href="${De(l.uplotCss||"")}">
  <link rel="stylesheet" href="${De(l.resultsAppCss||"")}">
</head>
<body>
  <div id="resultsRoot" style="position:fixed;inset:0;"></div>
  <script type="module">
    const { createResultsApp } = await import(${c});
    const configuredViews = ${t};
    const runPayload = ${n};
    const runMetrics = ${s};
    const modelName = ${a};
    const panelState = ${o};
    const vscodeApi = typeof acquireVsCodeApi === 'function' ? acquireVsCodeApi() : null;
    const root = document.getElementById('resultsRoot');
    const pendingRequests = new Map();
    let nextRequestId = 1;

    function readPanelState() {
      if (!vscodeApi) {
        return panelState || {};
      }
      try {
        return vscodeApi.getState() || panelState || {};
      } catch (_) {
        return panelState || {};
      }
    }

    function writePanelState(patch) {
      if (!vscodeApi) {
        return panelState || {};
      }
      const nextState = Object.assign({}, panelState || {}, readPanelState(), patch || {});
      try {
        vscodeApi.setState(nextState);
      } catch (_) {
        // ignore panel-state persistence errors
      }
      return nextState;
    }

    if (vscodeApi) {
      writePanelState({});
    }

    function requestHost(method, payload) {
      if (!vscodeApi) {
        return Promise.reject(new Error('VS Code webview API unavailable'));
      }
      const requestId = String(nextRequestId++);
      return new Promise((resolve, reject) => {
        pendingRequests.set(requestId, { resolve, reject });
        vscodeApi.postMessage({
          command: 'results.request',
          requestId,
          method,
          payload,
        });
      });
    }

    window.addEventListener('message', (event) => {
      const message = event && event.data ? event.data : {};
      if (!message || message.command !== 'results.response') {
        return;
      }
      const requestId = String(message.requestId || '');
      const pending = pendingRequests.get(requestId);
      if (!pending) {
        return;
      }
      pendingRequests.delete(requestId);
      if (message.ok === false) {
        pending.reject(new Error(String(message.error || 'Results host request failed')));
        return;
      }
      pending.resolve(message.value);
    });

    const baseState = readPanelState();
    const modelRef = {
      model: modelName,
      workspaceRoot: typeof baseState.workspaceRoot === 'string' ? baseState.workspaceRoot : undefined,
      runId: typeof baseState.runId === 'string' ? baseState.runId : undefined,
      title: typeof baseState.title === 'string' ? baseState.title : undefined,
    };

    const bridge = vscodeApi
      ? {
          loadViews: () => requestHost('loadViews', { modelRef }),
          saveViews: (_ignored, nextViews) => requestHost('saveViews', { modelRef, views: nextViews }),
          resetViews: () => requestHost('resetViews', { modelRef }),
          savePng: (payload) => { void requestHost('savePng', Object.assign({ modelRef }, payload || {})); },
          saveWebm: (payload) => { void requestHost('saveWebm', Object.assign({ modelRef }, payload || {})); },
          notify: (message) => { void requestHost('notify', { modelRef, message }).catch(() => undefined); },
          persistState: (nextState) => { writePanelState(nextState); },
        }
      : {
          persistState: () => {},
        };

    const app = createResultsApp({
      root,
      model: modelName,
      modelRef,
      payload: runPayload,
      views: configuredViews,
      metrics: runMetrics,
      activeViewId:
        typeof baseState.activeViewId === 'string' && baseState.activeViewId.length > 0
          ? baseState.activeViewId
          : undefined,
      bridge,
    });

    window.addEventListener('beforeunload', () => {
      if (app && typeof app.dispose === 'function') {
        app.dispose();
      }
    });
  <\/script>
</body>
</html>`}function xd(i){if(!i||typeof i!="object")return;let e=Kx(i.runId),t=_e(i.model),n=gd(i.payload);if(!e||!t||!n)return;let s=Number(i.savedAtUnixMs),r=md(i.metrics),a=$n(i.views);return{version:1,runId:e,model:t,savedAtUnixMs:Number.isFinite(s)?s:void 0,payload:n,metrics:r||null,views:a}}function Lm(i){if(!i||typeof i!="object")return;let e=xd(i);if(e)return{runId:e.runId,model:e.model,payload:e.payload,metrics:e.metrics||void 0,views:e.views,savedAtUnixMs:e.savedAtUnixMs}}function u_(i,e){let t=e&&typeof e=="object"?e:pd()[0],n=_e(t.type).toLowerCase(),s=n==="scatter"||n==="3d"?n:"timeseries";if(s==="3d"){let o=Ml(i,t.x,"time"),l=fd(i,t.y),c=Ml(i,l[0],null),u=Ml(i,l[1],null),d=[],h=Math.min(o?.values?.length??0,c?.values?.length??0,u?.values?.length??0);for(let f=0;f<h;f+=1)d.push({x:Number(o.values[f]),y:Number(c.values[f]),z:Number(u.values[f])});return{type:"3d",title:_e(t.title)||"3D View",points:d,script:_e(t.script)||void 0,scriptPath:_e(t.scriptPath)||void 0,labels:{x:o?.name||"x",y:c?.name||"y",z:u?.name||"z"},times:Array.isArray(i?.allData?.[0])?i.allData[0].map(Number):[]}}let r=Ml(i,t.x,"time"),a=fd(i,t.y).map(o=>Ml(i,o,null)).filter(Boolean).map((o,l)=>({name:o.name,values:o.values,color:kR(l)}));return{type:s,title:_e(t.title)||"View",x:r,y:a}}function d_(i){let e=_e(i);if(!e)return!1;let t=e.split("/").pop()||"";return t==="rumoca-scenario.toml"||t.startsWith("rumoca-scenario.")&&t.endsWith(".toml")}function BR(i){return typeof i=="boolean"?"boolean":typeof i=="number"?"number":typeof i=="string"?"string":"json"}function Nm(i,e=[]){let t=[];if(!i||typeof i!="object"||Array.isArray(i))return t;for(let n of Object.keys(i)){let s=i[n],r=[...e,n];s&&typeof s=="object"&&!Array.isArray(s)?t.push(...Nm(s,r)):t.push({path:r,section:r[0],key:n,label:r.join("."),kind:BR(s),value:s})}return t}function _d(i,e,t){let n=i&&typeof i=="object"&&!Array.isArray(i)?{...i}:{};if(!Array.isArray(e)||e.length===0)return n;let[s,...r]=e;return r.length===0?t===void 0?delete n[s]:n[s]=t:n[s]=_d(n[s],r,t),n}function h_(i,e){let t=i&&typeof i=="object"&&!Array.isArray(i)?i:{};for(let n of Array.isArray(e)?e:[])n&&Array.isArray(n.path)&&(t=_d(t,n.path,n.value));return t}var Gx=["rumoca","model","sim","parameters","codegen","viewer","transport","locals","input","signals","derive","reset"];function Wx(i){let e=Gx.indexOf(i);return e===-1?Gx.length:e}var f_=[["auto","Auto"],["bdf","BDF (stiff systems)"],["rk-like","RK-like (explicit)"]],p_=[["","Default"],["as_fast_as_possible","As fast as possible"],["realtime","Realtime"],["lockstep","Lockstep"]],Dm=[["simulate","Simulation"],["codegen","Code generation"]],m_=[["results_panel","Results panel"],["external_web","External browser"]],zR=[["timeseries","timeseries"],["scatter","scatter"],["3d","3d"]],VR=[["c-ode","c-ode"],["casadi-ode","casadi-ode"],["jax-ode","jax-ode"],["rust-ode","rust-ode"],["rust-fixed-ode","rust-fixed-ode"],["wgsl-ode","wgsl-ode"],["embedded-c","embedded-c"],["galec","galec (eFMI Algorithm Code)"],["galec-production","galec-production (eFMI Production Code)"],["embedded-c-galec","embedded-c-galec (embedded C)"]],HR=[["auto","auto"],["keyboard","keyboard"],["gamepad","gamepad"]],g_=[["set","set local value"],["toggle","toggle local flag"],["signal","emit signal"]],GR=[["LeftStickX","LeftStickX"],["LeftStickY","LeftStickY"],["RightStickX","RightStickX"],["RightStickY","RightStickY"],["LeftZ","LeftZ"],["RightZ","RightZ"],["DPadX","DPadX"],["DPadY","DPadY"]],WR=[["South","South"],["East","East"],["North","North"],["West","West"],["Start","Start"],["Select","Select"],["LeftTrigger","LeftTrigger"],["RightTrigger","RightTrigger"],["LeftThumb","LeftThumb"],["RightThumb","RightThumb"],["DPadUp","DPadUp"],["DPadDown","DPadDown"],["DPadLeft","DPadLeft"],["DPadRight","DPadRight"],["Mode","Mode"]],qR=[["float","float"],["bool","bool"]];function mm(i){return Array.isArray(i)?i.join("."):""}function XR(i){return Ms(i).join(`
`)}function Jn(i,e,t=""){let n=i;for(let s of e){if(!n||typeof n!="object")return t;n=n[s]}return n??t}function $s(i,e){let t=_e(e);return i.map(([n,s])=>{let r=n===t?" selected":"";return`<option value="${De(n)}"${r}>${De(s)}</option>`}).join("")}function wl(i,e){let t=_e(e);return i.find(([n])=>n===t)?.[1]||t||"Default"}function $R(i){let e=`field_${i.index}`,t=i.value===void 0||i.value===null?"":i.value,n=De(JSON.stringify(i.path)),s=i.optional?' data-optional="true"':"",r=i.placeholder?` placeholder="${De(i.placeholder)}"`:"",a=`id="${e}" data-field="${i.index}" data-kind="${De(i.kind)}" data-path="${n}"${s}`;if(i.kind==="select")return`<select ${a}>${$s(i.options||[],t)}</select>`;if(i.kind==="boolean")return`<input type="checkbox" ${a}${t?" checked":""}>`;if(i.kind==="number"||i.kind==="optionalNumber")return`<input type="number" step="any" ${a} value="${De(String(t))}"${r}>`;if(i.kind==="stringList"){let o=Ms(t).map(l=>ZR(l)).join("");return`
              <div ${a} class="path-list">
                <div class="path-list-rows" data-path-list-rows>${o}</div>
                <button type="button" class="ghost add-path" data-add-path>+ Add Library Folder</button>
              </div>`}return i.kind==="json"?`<textarea ${a} rows="3">${De(JSON.stringify(t??null))}</textarea>`:`<input type="text" ${a} value="${De(String(t))}"${r}>`}function v_(i){let e=`field_${i.index}`,t=i.hint?`<div class="hint">${De(i.hint)}</div>`:"";return`
        <div class="${["field",i.kind==="boolean"?"inline-field":"",i.kind==="stringList"?"wide-field":""].filter(Boolean).join(" ")}">
          <label for="${e}">${De(i.label)}</label>
          ${$R(i)}
          ${t}
        </div>`}function YR(i,e){return[{section:"rumoca",label:"Workflow",path:["rumoca","task"],kind:"select",value:Jn(i,["rumoca","task"],e||"simulate"),options:Dm,hint:"Choose what the scenario does when you press the primary action."},{section:"model",label:"Model file",path:["model","file"],kind:"string",value:Jn(i,["model","file"]),hint:"Path to the Modelica source, relative to this scenario file."},{section:"model",label:"Model name",path:["model","name"],kind:"string",value:Jn(i,["model","name"])},{section:"sim",label:"Solver",path:["sim","solver"],kind:"select",value:Jn(i,["sim","solver"],"auto"),options:f_,hint:"Auto chooses a solver. BDF, ESDIRK34, and TR-BDF2 use the implicit path; RK-like is explicit."},{section:"sim",label:"Pacing",path:["sim","mode"],kind:"select",optional:!0,value:Jn(i,["sim","mode"]),options:p_,hint:"Simulation speed policy. Realtime follows wall-clock time; lockstep waits for each step."},{section:"sim",label:"Batch end time",path:["sim","t_end"],kind:"optionalNumber",optional:!0,value:Jn(i,["sim","t_end"]),hint:"Finite batch/results-panel horizon. Live runs continue until explicitly stopped."},{section:"sim",label:"Step size",path:["sim","dt"],kind:"optionalNumber",optional:!0,value:Jn(i,["sim","dt"]),hint:"Optional fixed step. Leave blank for automatic stepping."},{section:"sim",label:"Absolute tolerance",path:["sim","atol"],kind:"optionalNumber",optional:!0,value:Jn(i,["sim","atol"]),hint:"Optional absolute solver tolerance."},{section:"sim",label:"Relative tolerance",path:["sim","rtol"],kind:"optionalNumber",optional:!0,value:Jn(i,["sim","rtol"]),hint:"Optional relative solver tolerance."},{section:"sim",label:"Output directory",path:["sim","output_dir"],kind:"string",optional:!0,value:Jn(i,["sim","output_dir"]),hint:"Optional directory for generated run artifacts."},{section:"viewer",label:"Results display",path:["viewer","mode"],kind:"select",value:Jn(i,["viewer","mode"],"results_panel"),options:m_,hint:"Presentation only: show results inside the editor or in an external browser."},{section:"codegen",label:"Target",path:["codegen","target"],kind:"select",value:Jn(i,["codegen","target"],"c-ode"),options:VR,hint:"Built-in renderer used when task is codegen."},{section:"codegen",label:"Output directory",path:["codegen","output_dir"],kind:"string",optional:!0,value:Jn(i,["codegen","output_dir"]),hint:"Directory where generated files are materialized."},{section:"source_roots",label:"Scenario library folders",path:["source_roots"],kind:"stringList",optional:!0,value:Jn(i,["source_roots"],[]),hint:"Extra Modelica library folders for this scenario. Workspace libraries stay in rumoca-workspace.toml."}]}function ZR(i=""){return`
          <div class="path-row" data-path-row>
            <input type="text" data-list-item value="${De(i)}" placeholder="../libraries/Modelica">
            <button type="button" class="ghost icon-button" data-browse-path title="Browse for a folder">...</button>
            <button type="button" class="ghost icon-button" data-remove-path title="Remove library folder">-</button>
          </div>`}function JR(i){let e=i&&typeof i=="object"?i.plot:null;return $n(e&&Array.isArray(e.views)?e.views:[])}function jR(i){let e=i&&typeof i=="object"?i.parameters:null;return e&&typeof e=="object"&&!Array.isArray(e)?e:{}}function KR(i,e){let t=e&&typeof e=="object"&&!Array.isArray(e)?e:{},n=Array.isArray(i)?i.filter(r=>r&&typeof r=="object"&&_e(r.name)).map(r=>{let a=_e(r.name),o=Object.prototype.hasOwnProperty.call(t,a);return{name:a,defaultValue:r.defaultValue,unit:_e(r.unit),start:_e(r.start),min:_e(r.min),max:_e(r.max),nominal:_e(r.nominal),minValue:r.minValue===null||r.minValue===void 0?NaN:Number(r.minValue),maxValue:r.maxValue===null||r.maxValue===void 0?NaN:Number(r.maxValue),fixed:r.fixed,description:_e(r.description),hasOverride:o,overrideValue:o?t[a]:""}}):[],s=new Set(n.map(r=>r.name));for(let[r,a]of Object.entries(t).sort(([o],[l])=>o.localeCompare(l)))s.has(r)||n.push({name:r,defaultValue:"",unit:"",start:"",min:"",max:"",nominal:"",minValue:NaN,maxValue:NaN,fixed:void 0,description:"Override preserved from TOML; metadata was not available for this parameter.",hasOverride:!0,overrideValue:a});return n.sort((r,a)=>r.name.localeCompare(a.name)),n}function QR(i,e,t,n){let s=i&&typeof i.model=="object"?i.model:{},r=i&&typeof i.sim=="object"?i.sim:{},a=i&&typeof i.viewer=="object"?i.viewer:{},o=_e(s.file),l=_e(s.name)||_e(t),c=r.t_end===void 0||r.t_end===null||r.t_end===""?"1":String(r.t_end);return{modelFile:o,modelName:l,scenarioPath:_e(n),task:e==="codegen"?"Code generation":"Simulation",solver:_e(r.solver)||"auto",tEnd:c,duration:_e(a.mode)==="external_web"?"Until stopped":`${c} s`}}function jn(i){return!i||typeof i!="object"||Array.isArray(i)?[]:Object.keys(i).sort().map(e=>[e,i[e]])}function eC(i){let e=i&&typeof i=="object"&&i.input&&typeof i.input=="object"?i.input:{},t=e.keyboard&&typeof e.keyboard=="object"?e.keyboard:{},n=e.gamepad&&typeof e.gamepad=="object"?e.gamepad:{},s=i&&typeof i=="object"&&i.signals&&typeof i.signals=="object"?i.signals:{};return{mode:_e(e.mode),enabled:!!(_e(e.mode)||jn(i&&i.locals).length||t.decay&&typeof t.decay=="object"||jn(t.keys).length||jn(t.integrators).length||jn(n.axes).length||jn(n.integrators).length||jn(n.buttons).length||jn(s.model_inputs).length),locals:jn(i&&i.locals).map(([r,a])=>({name:r,type:_e(a&&a.type)||"float",defaultValue:a&&a.default!==void 0?String(a.default):""})),keyboardKeys:jn(t.keys).map(([r,a])=>({key:r,action:_e(a&&a.action)||"set",target:_e(a&&a.target),value:a&&a.value!==void 0?String(a.value):"",state:_e(a&&a.state),signal:_e(a&&a.signal),debounceMs:a&&a.debounce_ms!==void 0?String(a.debounce_ms):"",precondition:_e(a&&a.precondition)})),keyboardDecay:t.decay&&typeof t.decay=="object"?{factor:t.decay.factor,ref_dt:t.decay.ref_dt??t.decay.refDt,targets:Ms(t.decay.targets)}:null,keyboardIntegrators:jn(t.integrators).map(([r,a])=>qx(r,a)),gamepadAxes:jn(n.axes).map(([r,a])=>({name:r,source:_e(a&&a.source)||"LeftStickY",write:_e(a&&a.write),scale:a&&a.scale!==void 0?String(a.scale):"",invert:!!(a&&a.invert)})),gamepadIntegrators:jn(n.integrators).map(([r,a])=>qx(r,a)),gamepadButtons:jn(n.buttons).map(([r,a])=>({name:r,source:_e(a&&a.source)||"South",action:_e(a&&a.action)||"toggle",state:_e(a&&a.state),signal:_e(a&&a.signal),debounceMs:a&&a.debounce_ms!==void 0?String(a.debounce_ms):"",precondition:_e(a&&a.precondition)})),modelInputs:jn(s.model_inputs).map(([r,a])=>({name:r,source:typeof a=="string"?a:JSON.stringify(a??"")}))}}function qx(i,e){let t=Array.isArray(e&&e.clamp)?e.clamp:[];return{name:i,source:_e(e&&e.source),write:_e(e&&e.write),deadband:e&&e.deadband!==void 0?String(e.deadband):"",rate:e&&e.rate!==void 0?String(e.rate):"",clampMin:t[0]!==void 0?String(t[0]):"",clampMax:t[1]!==void 0?String(t[1]):""}}function tC(i,e){let t=_e(i.type).toLowerCase()||"timeseries";return`
        <div class="view-row" data-view-index="${e}" data-view-id="${De(i.id||"")}">
          <div class="view-title-row">
            <strong>${De(i.title||i.id||`View ${e+1}`)}</strong>
            <button type="button" class="ghost remove-view" data-remove-view="${e}">Remove</button>
          </div>
          <div class="grid">
            <div class="field">
              <label for="view_${e}_title">title</label>
              <input id="view_${e}_title" data-view-field="title" value="${De(i.title||"")}">
            </div>
            <div class="field">
              <label for="view_${e}_type">type</label>
              <select id="view_${e}_type" data-view-field="type">${$s(zR,t)}</select>
            </div>
            <div class="field" data-view-kind="series"${t==="3d"?" hidden":""}>
              <label for="view_${e}_x">x</label>
              <input id="view_${e}_x" data-view-field="x" value="${De(i.x||"time")}">
            </div>
            <div class="field" data-view-kind="series"${t==="3d"?" hidden":""}>
              <label for="view_${e}_y">y series</label>
              <textarea id="view_${e}_y" data-view-field="y" rows="3" placeholder="*states">${De(XR(i.y||["*states"]))}</textarea>
            </div>
            <div class="field" data-view-kind="script3d"${t==="3d"?"":" hidden"}>
              <label for="view_${e}_script_path">viewer script path</label>
              <input id="view_${e}_script_path" data-view-field="scriptPath" value="${De(i.scriptPath||"")}" placeholder="viewer.js">
            </div>
          </div>
        </div>`}function nC(i){let e=i.length>0?i.map((t,n)=>tC(t,n)).join(""):'<div class="empty">No plot panels configured. Add a panel to save simulation results with a reusable view.</div>';return`
      <section class="card" id="plotViewsCard" data-scenario-section="plot">
        <details open>
          <summary>
            <span>Plot Panels</span>
            <span class="summary-meta">${i.length} configured</span>
          </summary>
          <div class="section-header">
            <span class="hint">Reusable result views for this simulation.</span>
            <button type="button" id="addPlotView" class="ghost">Add Panel</button>
          </div>
          <div id="plotViewsList">${e}</div>
        </details>
      </section>`}function iC(i){let e=[],t=i.locals.length,n=i.keyboardKeys.length+i.keyboardIntegrators.length,s=i.gamepadAxes.length+i.gamepadIntegrators.length+i.gamepadButtons.length,r=i.modelInputs.length;return t&&e.push(`${t} local${t===1?"":"s"}`),n&&e.push(`${n} keyboard`),s&&e.push(`${s} gamepad`),r&&e.push(`${r} model input${r===1?"":"s"}`),e.length?e.join(" \xB7 "):"No routes configured"}function Fr(i,e,t=`${e}s`){return i===1?`1 ${e}`:`${i} ${t}`}function sC(i,e){return`<div class="mapping-header ${De(e||"")}">${i.map(t=>`<span>${De(t)}</span>`).join("")}<span></span></div>`}function rC(i,e){return i||`<div class="empty mapping-empty">${De(e)}</div>`}function Or(i){let e=i.addButton?`<button type="button" class="ghost" ${i.addButton.attr}>${De(i.addButton.label)}</button>`:"",t=e?`<div class="section-header">${e}</div>`:"",n=i.header?sC(i.header,i.rowClass):"",s=i.hint?`<div class="hint">${De(i.hint)}</div>`:"";return`
            <details class="mapping-group input-subsection">
              <summary>
                <span>${De(i.title)}</span>
                <span class="summary-meta">${De(i.summary)}</span>
              </summary>
              ${t}
              ${n}
              <div ${i.listAttr}>${rC(i.rows,i.emptyText)}</div>
              ${s}
            </details>`}function aC(i){let e=_e(i.mode),t=!!i.enabled,n=iC(i),s=i.locals.map((d,h)=>oC(d,h)).join(""),r=i.keyboardKeys.map((d,h)=>lC(d,h)).join(""),a=i.keyboardIntegrators.map((d,h)=>Xx(d,h,"keyboard")).join(""),o=i.gamepadAxes.map((d,h)=>cC(d,h)).join(""),l=i.gamepadIntegrators.map((d,h)=>Xx(d,h,"gamepad")).join(""),c=i.gamepadButtons.map((d,h)=>uC(d,h)).join(""),u=i.modelInputs.map((d,h)=>dC(d,h)).join("");return`
      <section class="card" id="inputMappingsCard" data-scenario-section="input">
        <details open>
          <summary>
            <span>Input Mapping</span>
            <span class="summary-meta">${De(t?n:"disabled")}</span>
          </summary>
          <div class="grid">
            <div class="field inline-field">
              <label for="input_enabled">enabled</label>
              <input id="input_enabled" data-input-enabled type="checkbox"${t?" checked":""}>
              <div class="hint">Enable user input routing for keyboard, gamepad, or browser controls.</div>
            </div>
            <div class="field" data-input-enabled-field>
              <label for="input_mode">input mode</label>
              <select id="input_mode" data-input-mode>${$s(HR,e||"auto")}</select>
              <div class="hint">auto tries gamepad first and falls back to keyboard.</div>
            </div>
          </div>
          <details class="advanced-details" data-input-enabled-field>
            <summary>
              <span>Advanced Input Routing</span>
              <span class="summary-meta">${De(n)}</span>
            </summary>
            ${Or({title:"Locals",summary:Fr(i.locals.length,"local"),addButton:{attr:"data-add-local",label:"+ Add Local"},header:["Name","Type","Default"],rowClass:"local-row",listAttr:"data-local-list",rows:s,emptyText:"No local input state configured."})}
            ${Or({title:"Keyboard",summary:Fr(i.keyboardKeys.length,"key","keys"),addButton:{attr:"data-add-keyboard-key",label:"+ Add Key"},header:["Key","Action","Target","Value","State","Signal","Debounce","Condition"],rowClass:"keyboard-key-row",listAttr:"data-keyboard-key-list",rows:r,emptyText:"No keyboard bindings configured."})}
            ${Or({title:"Keyboard Integrators",summary:Fr(i.keyboardIntegrators.length,"integrator"),addButton:{attr:"data-add-keyboard-integrator",label:"+ Add Integrator"},header:["Name","Source","Writes","Rate","Deadband","Min","Max"],rowClass:"integrator-row",listAttr:"data-keyboard-integrator-list",rows:a,emptyText:"No keyboard integrators configured."})}
            ${Or({title:"Gamepad Axes",summary:Fr(i.gamepadAxes.length,"axis","axes"),addButton:{attr:"data-add-gamepad-axis",label:"+ Add Axis"},header:["Name","Axis","Writes","Scale","Invert"],rowClass:"gamepad-axis-row",listAttr:"data-gamepad-axis-list",rows:o,emptyText:"No gamepad axes configured."})}
            ${Or({title:"Gamepad Integrators",summary:Fr(i.gamepadIntegrators.length,"integrator"),addButton:{attr:"data-add-gamepad-integrator",label:"+ Add Integrator"},header:["Name","Axis","Writes","Rate","Deadband","Min","Max"],rowClass:"integrator-row",listAttr:"data-gamepad-integrator-list",rows:l,emptyText:"No gamepad integrators configured."})}
            ${Or({title:"Gamepad Buttons",summary:Fr(i.gamepadButtons.length,"button"),addButton:{attr:"data-add-gamepad-button",label:"+ Add Button"},header:["Name","Button","Action","State","Signal","Debounce","Condition"],rowClass:"gamepad-button-row",listAttr:"data-gamepad-button-list",rows:c,emptyText:"No gamepad buttons configured."})}
            ${Or({title:"Model Inputs",summary:Fr(i.modelInputs.length,"model input"),addButton:{attr:"data-add-model-input",label:"+ Add Model Input"},header:["Model input","Source route"],rowClass:"model-input-row",listAttr:"data-model-input-list",rows:u,emptyText:"No Modelica inputs are connected to user input state.",hint:"Routes local/runtime values into Modelica input variables each step, for example throttle = local:throttle."})}
          </details>
        </details>
      </section>`}function Xx(i,e,t){return`
        <div class="mapping-row integrator-row" data-${t==="gamepad"?"gamepad-integrator":"keyboard-integrator"}-row="${e}">
          <input data-integrator-field="name" value="${De(i.name||"")}" placeholder="throttle">
          <input data-integrator-field="source" value="${De(i.source||"")}" placeholder="${t==="gamepad"?"LeftStickY":"local:throttle_input"}">
          <input data-integrator-field="write" value="${De(i.write||"")}" placeholder="local target">
          <input data-integrator-field="rate" type="number" step="any" value="${De(i.rate||"")}" placeholder="0.7">
          <input data-integrator-field="deadband" type="number" step="any" value="${De(i.deadband||"")}" placeholder="0.1">
          <input data-integrator-field="clampMin" type="number" step="any" value="${De(i.clampMin||"")}" placeholder="0.0">
          <input data-integrator-field="clampMax" type="number" step="any" value="${De(i.clampMax||"")}" placeholder="1.0">
          <button type="button" class="ghost icon-button" data-remove-mapping>-</button>
        </div>`}function oC(i,e){return`
        <div class="mapping-row local-row" data-local-row="${e}">
          <input data-local-field="name" value="${De(i.name||"")}" placeholder="throttle">
          <select data-local-field="type">${$s(qR,i.type||"float")}</select>
          <input data-local-field="defaultValue" value="${De(i.defaultValue||"")}" placeholder="0.0">
          <button type="button" class="ghost icon-button" data-remove-mapping>-</button>
        </div>`}function lC(i,e){return`
        <div class="mapping-row keyboard-key-row" data-keyboard-key-row="${e}">
          <input data-key-field="key" value="${De(i.key||"")}" placeholder="ArrowUp">
          <select data-key-field="action">${$s(g_,i.action||"set")}</select>
          <input data-key-field="target" data-action-kind="set" value="${De(i.target||"")}" placeholder="local target">
          <input data-key-field="value" data-action-kind="set" type="number" step="any" value="${De(i.value||"")}" placeholder="1.0">
          <input data-key-field="state" data-action-kind="toggle" value="${De(i.state||"")}" placeholder="bool local">
          <input data-key-field="signal" data-action-kind="signal" value="${De(i.signal||"")}" placeholder="reset">
          <input data-key-field="debounceMs" data-action-kind="toggle signal" type="number" step="1" min="0" value="${De(i.debounceMs||"")}" placeholder="debounce ms">
          <input data-key-field="precondition" value="${De(i.precondition||"")}" placeholder="throttle <= 0.05">
          <button type="button" class="ghost icon-button" data-remove-mapping>-</button>
        </div>`}function cC(i,e){return`
        <div class="mapping-row gamepad-axis-row" data-gamepad-axis-row="${e}">
          <input data-axis-field="name" value="${De(i.name||"")}" placeholder="throttle">
          <select data-axis-field="source">${$s(GR,i.source||"LeftStickY")}</select>
          <input data-axis-field="write" value="${De(i.write||"")}" placeholder="local target">
          <input data-axis-field="scale" type="number" step="any" value="${De(i.scale||"")}" placeholder="1.0">
          <label class="check-field"><input data-axis-field="invert" type="checkbox"${i.invert?" checked":""}> invert</label>
          <button type="button" class="ghost icon-button" data-remove-mapping>-</button>
        </div>`}function uC(i,e){return`
        <div class="mapping-row gamepad-button-row" data-gamepad-button-row="${e}">
          <input data-button-field="name" value="${De(i.name||"")}" placeholder="arm">
          <select data-button-field="source">${$s(WR,i.source||"South")}</select>
          <select data-button-field="action">${$s(g_.filter(([t])=>t!=="set"),i.action||"toggle")}</select>
          <input data-button-field="state" data-action-kind="toggle" value="${De(i.state||"")}" placeholder="bool local">
          <input data-button-field="signal" data-action-kind="signal" value="${De(i.signal||"")}" placeholder="reset">
          <input data-button-field="debounceMs" type="number" step="1" min="0" value="${De(i.debounceMs||"")}" placeholder="debounce ms">
          <input data-button-field="precondition" value="${De(i.precondition||"")}" placeholder="throttle <= 0.05">
          <button type="button" class="ghost icon-button" data-remove-mapping>-</button>
        </div>`}function dC(i,e){return`
        <div class="mapping-row model-input-row" data-model-input-row="${e}">
          <input data-model-field="name" value="${De(i.name||"")}" placeholder="stick_throttle">
          <input data-model-field="source" value="${De(i.source||"")}" placeholder="local:throttle">
          <button type="button" class="ghost icon-button" data-remove-mapping>-</button>
        </div>`}function Xs(i,e){let t=mm(e);return i.find(n=>mm(n.path)===t)}function hC(i){return{rumoca:"Scenario",model:"Model",sim:"Simulation",parameters:"Parameters",codegen:"Code Generation",viewer:"Results Display",source_roots:"Modelica Libraries"}[i]||i.replace(/_/g," ")}function fC(i,e){if(i==="rumoca"){let t=Xs(e,["rumoca","task"])?.value||"simulate";return wl(Dm,t)}if(i==="model")return _e(Xs(e,["model","name"])?.value)||_e(Xs(e,["model","file"])?.value)||"No model selected";if(i==="sim"){let t=wl(f_,Xs(e,["sim","solver"])?.value||"auto"),n=wl(p_,Xs(e,["sim","mode"])?.value||"");return`${t} \xB7 ${n}`}if(i==="parameters")return"";if(i==="viewer")return wl(m_,Xs(e,["viewer","mode"])?.value||"results_panel");if(i==="codegen")return Xs(e,["codegen","target"])?.value||"c-ode";if(i==="source_roots"){let t=Ms(Xs(e,["source_roots"])?.value);return t.length?`${t.length} scenario folder${t.length===1?"":"s"}`:"Workspace libraries only"}return""}function pC(i){return["rumoca","model","sim"].includes(i)}function mC(i,e){let t=e.map(r=>v_(r)).join(""),n=pC(i)?" open":"",s=fC(i,e);return`
      <section class="card" data-scenario-section="${De(i)}">
        <details${n}>
          <summary>
            <span>${De(hC(i))}</span>
            ${s?`<span class="summary-meta">${De(s)}</span>`:""}
          </summary>
          <div class="grid">${t}</div>
        </details>
      </section>`}function gC(i){let e=new Map;for(let t of i)e.has(t.section)||e.set(t.section,[]),e.get(t.section).push(t);return e}function vC(i){let e=Ms(i);if(e.length===0)return"";let t=e.map(n=>`<li>${De(n)}</li>`).join("");return`
      <section class="card" data-scenario-section="effective_source_roots">
        <details>
          <summary>
            <span>Workspace Source Roots</span>
            <span class="summary-meta">${e.length} resolved</span>
          </summary>
          <ul class="readonly-list">${t}</ul>
          <div class="hint">Resolved from rumoca-workspace.toml. Scenario files only store scenario-specific roots.</div>
        </details>
      </section>`}function yC(i){return Array.isArray(i)&&i.length?`${i.length} tunable`:"None discovered"}function xC(i){return Array.isArray(i)&&i.length?i.map(e=>{let t=e.defaultValue===void 0||e.defaultValue===null||e.defaultValue===""?"":String(e.defaultValue),n=e.hasOverride?String(e.overrideValue):"",s=Number.isFinite(e.minValue)?` data-parameter-min="${De(String(e.minValue))}"`:"",r=Number.isFinite(e.maxValue)?` data-parameter-max="${De(String(e.maxValue))}"`:"",a=Number.isFinite(e.minValue)?` min="${De(String(e.minValue))}"`:"",o=Number.isFinite(e.maxValue)?` max="${De(String(e.maxValue))}"`:"",l=e.unit?`<span>${De(e.unit)}</span>`:"",c=[e.min?`min ${e.min}`:"",e.max?`max ${e.max}`:"",e.nominal?`nominal ${e.nominal}`:""].filter(Boolean).join(" \xB7 "),u=[t?`default ${t}`:"",c,e.fixed!==void 0?`fixed ${e.fixed?"true":"false"}`:""].filter(Boolean).join(" \xB7 ");return`
          <div class="parameter-row" data-parameter-row data-parameter-name="${De(e.name)}"${s}${r}>
            <div class="parameter-details">
              <strong>${De(e.name)}</strong>
              ${l}
              ${e.description?`<div class="hint">${De(e.description)}</div>`:""}
              ${u?`<div class="hint">${De(u)}</div>`:""}
            </div>
            <div class="parameter-control">
              <label>Override</label>
              <input type="number" step="any"${a}${o} data-parameter-field="override" value="${De(n)}" placeholder="${De(t)}">
              <button type="button" class="ghost icon-button" data-clear-parameter title="Clear override">-</button>
            </div>
          </div>`}).join(""):'<div class="empty">Compile the selected model to discover tunable scalar parameters.</div>'}function _C(i){let e=xC(i),t=yC(i);return`
      <section class="card" id="parametersCard" data-scenario-section="parameters">
        <details>
          <summary>
            <span>Parameters</span>
            <span class="summary-meta" id="parametersSummary">${De(t)}</span>
          </summary>
          <div class="parameter-list" id="parametersList">${e}</div>
        </details>
      </section>`}function bC(i,e,t,n,s,r){let a=gC(i),o=[...a.keys()].sort((m,v)=>Wx(m)-Wx(v)||m.localeCompare(v)).map(m=>mC(m,a.get(m))).join(""),l=s.length===0?"":`
      <section class="card">
        <details class="advanced-details">
          <summary>Advanced TOML Fields</summary>
          <div class="grid advanced-grid">${s.map(m=>v_(m)).join("")}</div>
        </details>
      </section>`,c=i.find(m=>mm(m.path)==="rumoca.task"),u=_e(c?.value)||"simulate",d=u==="codegen"?"":_C(n),h=u==="codegen"?"":nC(e),f=u==="codegen"?"":aC(t);return`${o}${d}${vC(r)}${f}${h}${l}`}function y_(i){let e=i&&typeof i=="object"?i:{},t=e.config&&typeof e.config=="object"?e.config:{},n=e.descriptor&&typeof e.descriptor=="object"?e.descriptor:{},s=_e(e.path)||"rumoca-scenario.toml",r=_e(n.model)||_e((t.model||{}).name)||_e(e.model),a=_e(n.task)||_e((t.rumoca||{}).task)||"simulate",o=_e(e.theme),l=Ms(e.effectiveSourceRootPaths),c=YR(t,a),u=JR(t),d=eC(t),h=jR(t),f=KR(e.parameterMetadata,h);c.forEach((y,_)=>{y.index=_});let m=bC(c,u,d,f,[],l),v=wl(Dm,a),g=a==="codegen"?"Generate Code":"Run Simulation",p=QR(t,a,r,s),x=kr(JSON.stringify({path:s,fields:c,plotViews:u,inputMappings:d,parameters:f,runLabel:g,runSummary:p}));return`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Rumoca Config: ${De(r||s)}</title>
  <style>
    :root { --pad: 16px; --radius: 8px; --muted: var(--vscode-descriptionForeground, #9da5b4); --ok: var(--vscode-testing-iconPassed, #73c991); --error: var(--vscode-errorForeground, #f48771); }
    body[data-theme="midnight"] { --vscode-font-family: Inter, ui-sans-serif, system-ui, sans-serif; --vscode-foreground: #d6dee8; --vscode-editor-background: #0f1419; --vscode-sideBar-background: #151e27; --vscode-panel-border: #263341; --vscode-input-background: #18222d; --vscode-input-foreground: #d6dee8; --vscode-input-border: #334155; --vscode-descriptionForeground: #8b9aac; --vscode-button-background: #0891b2; --vscode-button-foreground: #ffffff; --vscode-button-border: transparent; --vscode-testing-iconPassed: #73c991; --vscode-errorForeground: #ff8a8a; --muted: #8b9aac; --ok: #73c991; --error: #ff8a8a; }
    body[data-theme="graphite"] { --vscode-font-family: Inter, ui-sans-serif, system-ui, sans-serif; --vscode-foreground: #e4e4e7; --vscode-editor-background: #161616; --vscode-sideBar-background: #232326; --vscode-panel-border: #37373d; --vscode-input-background: #2b2b30; --vscode-input-foreground: #e4e4e7; --vscode-input-border: #45454d; --vscode-descriptionForeground: #a1a1aa; --vscode-button-background: #0284c7; --vscode-button-foreground: #ffffff; --vscode-button-border: transparent; --vscode-testing-iconPassed: #73c991; --vscode-errorForeground: #fca5a5; --muted: #a1a1aa; --ok: #73c991; --error: #fca5a5; }
    body[data-theme="paper"] { --vscode-font-family: Inter, ui-sans-serif, system-ui, sans-serif; --vscode-foreground: #1f2937; --vscode-editor-background: #fbfaf7; --vscode-sideBar-background: #f3f0ea; --vscode-panel-border: #d2cbc0; --vscode-input-background: #ffffff; --vscode-input-foreground: #1f2937; --vscode-input-border: #c8c1b6; --vscode-descriptionForeground: #697386; --vscode-button-background: #0369a1; --vscode-button-foreground: #ffffff; --vscode-button-border: transparent; --vscode-testing-iconPassed: #047857; --vscode-errorForeground: #b91c1c; --muted: #697386; --ok: #047857; --error: #b91c1c; }
    body[data-theme="navy"] { --vscode-font-family: Inter, ui-sans-serif, system-ui, sans-serif; --vscode-foreground: #d6dee8; --vscode-editor-background: #0f1419; --vscode-sideBar-background: #151e27; --vscode-panel-border: #263341; --vscode-input-background: #1a2530; --vscode-input-foreground: #d6dee8; --vscode-input-border: #263341; --vscode-descriptionForeground: #8b9aac; --vscode-button-background: #0891b2; --vscode-button-foreground: #ffffff; --vscode-button-border: transparent; --vscode-testing-iconPassed: #73c991; --vscode-errorForeground: #ff8a8a; --muted: #8b9aac; --ok: #73c991; --error: #ff8a8a; }
    body[data-theme="coal"] { --vscode-font-family: Inter, ui-sans-serif, system-ui, sans-serif; --vscode-foreground: #e4e4e7; --vscode-editor-background: #161616; --vscode-sideBar-background: #232326; --vscode-panel-border: #37373d; --vscode-input-background: #2b2b30; --vscode-input-foreground: #e4e4e7; --vscode-input-border: #37373d; --vscode-descriptionForeground: #a1a1aa; --vscode-button-background: #0284c7; --vscode-button-foreground: #ffffff; --vscode-button-border: transparent; --vscode-testing-iconPassed: #73c991; --vscode-errorForeground: #fca5a5; --muted: #a1a1aa; --ok: #73c991; --error: #fca5a5; }
    body[data-theme="light"] { --vscode-font-family: Inter, ui-sans-serif, system-ui, sans-serif; --vscode-foreground: #0f172a; --vscode-editor-background: #f8fafc; --vscode-sideBar-background: #f1f5f9; --vscode-panel-border: #cbd5e1; --vscode-input-background: #ffffff; --vscode-input-foreground: #0f172a; --vscode-input-border: #cbd5e1; --vscode-descriptionForeground: #475569; --vscode-button-background: #0d9488; --vscode-button-foreground: #ffffff; --vscode-button-border: transparent; --vscode-testing-iconPassed: #047857; --vscode-errorForeground: #b91c1c; --muted: #475569; --ok: #047857; --error: #b91c1c; }
    body[data-theme="rust"] { --vscode-font-family: Inter, ui-sans-serif, system-ui, sans-serif; --vscode-foreground: #2f211b; --vscode-editor-background: #fff8f2; --vscode-sideBar-background: #f5eadf; --vscode-panel-border: #d6bda8; --vscode-input-background: #fffaf5; --vscode-input-foreground: #2f211b; --vscode-input-border: #d6bda8; --vscode-descriptionForeground: #6f574b; --vscode-button-background: #c05220; --vscode-button-foreground: #ffffff; --vscode-button-border: transparent; --vscode-testing-iconPassed: #047857; --vscode-errorForeground: #a52727; --muted: #6f574b; --ok: #047857; --error: #a52727; }
    body[data-theme="ayu"] { --vscode-font-family: Inter, ui-sans-serif, system-ui, sans-serif; --vscode-foreground: #d9e0ee; --vscode-editor-background: #0f1419; --vscode-sideBar-background: #1b2430; --vscode-panel-border: #2d3f55; --vscode-input-background: #223043; --vscode-input-foreground: #d9e0ee; --vscode-input-border: #2d3f55; --vscode-descriptionForeground: #8fa0b5; --vscode-button-background: #ffb454; --vscode-button-foreground: #2f2616; --vscode-button-border: transparent; --vscode-testing-iconPassed: #73c991; --vscode-errorForeground: #ff8f8f; --muted: #8fa0b5; --ok: #73c991; --error: #ff8f8f; }
    html, body { height: 100%; }
    body { margin: 0; font-family: var(--vscode-font-family, system-ui, sans-serif); color: var(--vscode-foreground, #d4d4d4); background: var(--vscode-editor-background, #1e1e1e); }
    .page { padding: var(--pad); display: grid; gap: 12px; }
    .header { display: flex; align-items: center; justify-content: space-between; gap: 12px; }
    .title { font-size: 16px; font-weight: 700; margin: 0; }
    .subtitle { color: var(--muted); font-size: 12px; }
    .actions { display: flex; gap: 8px; }
    button { font: inherit; padding: 6px 12px; border-radius: 6px; border: 1px solid var(--vscode-button-border, transparent); background: var(--vscode-button-background, #0e639c); color: var(--vscode-button-foreground, #fff); cursor: pointer; }
    button.ghost { background: transparent; color: var(--vscode-foreground, #d4d4d4); border-color: var(--vscode-input-border, #3c3c3c); }
    .run-overview { display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); gap: 8px; padding: 10px 12px; border: 1px solid var(--vscode-panel-border, #3c3c3c); border-radius: var(--radius); background: var(--vscode-sideBar-background, #252526); }
    .run-overview-item { display: grid; gap: 2px; min-width: 0; }
    .run-overview-label { color: var(--muted); font-size: 10px; font-weight: 700; letter-spacing: 0.04em; text-transform: uppercase; }
    .run-overview-value { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-size: 13px; }
    .run-state-strip { display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); gap: 6px; }
    .run-state-step { min-width: 0; padding: 5px 8px; border: 1px solid var(--vscode-panel-border, #3c3c3c); border-radius: 999px; color: var(--muted); font-size: 11px; text-align: center; white-space: nowrap; }
    .run-state-step.active { border-color: var(--vscode-button-background, #0e639c); color: var(--vscode-button-foreground, #fff); background: var(--vscode-button-background, #0e639c); }
    .run-state-step.done { border-color: color-mix(in srgb, var(--ok) 65%, var(--vscode-panel-border, #3c3c3c)); color: var(--ok); }
    .run-state-step.failed { border-color: var(--error); color: var(--error); }
    .card { border: 1px solid var(--vscode-panel-border, #3c3c3c); border-radius: var(--radius); padding: 12px; background: var(--vscode-sideBar-background, #252526); }
    .card details { display: grid; gap: 10px; }
    .card summary { cursor: pointer; display: flex; align-items: center; justify-content: space-between; gap: 10px; margin: 0; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.04em; color: var(--muted); }
    .card summary:hover { color: var(--vscode-foreground, #d4d4d4); }
    .card summary::before { content: ""; flex: 0 0 auto; width: 0; height: 0; border-top: 4px solid transparent; border-bottom: 4px solid transparent; border-left: 5px solid var(--muted); transform-origin: 2px 4px; }
    .card details[open] > summary::before { transform: rotate(90deg); }
    .card summary::-webkit-details-marker { display: none; }
    .card details[open] > summary { margin-bottom: 10px; }
    .summary-meta { margin-left: auto; font-size: 11px; font-weight: 500; text-transform: none; color: var(--muted); letter-spacing: 0; }
    .advanced-details { margin-top: 12px; padding-top: 10px; border-top: 1px solid var(--vscode-panel-border, #3c3c3c); }
    .section-header, .view-title-row { display: flex; align-items: center; justify-content: space-between; gap: 8px; }
    .grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 10px; }
    .field { display: grid; gap: 4px; }
    .wide-field { grid-column: 1 / -1; }
    label { font-size: 12px; font-weight: 600; }
    input, textarea, select { width: 100%; box-sizing: border-box; background: var(--vscode-input-background, #313131); color: var(--vscode-input-foreground, #ccc); border: 1px solid var(--vscode-input-border, #3c3c3c); border-radius: 6px; padding: 6px; }
    input.invalid, textarea.invalid, select.invalid { border-color: var(--error); }
    input[type="checkbox"] { width: auto; }
    .path-list { display: grid; gap: 8px; }
    .path-list-rows { display: grid; gap: 6px; }
    .path-row { display: grid; grid-template-columns: minmax(0, 1fr) auto auto; gap: 6px; align-items: center; }
    .icon-button { min-width: 32px; padding-inline: 8px; }
    .add-path { justify-self: start; }
    .mapping-group { display: grid; gap: 8px; margin-top: 14px; }
    .advanced-details > .mapping-group:first-of-type { margin-top: 0; }
    .input-subsection { border-top: 1px solid var(--vscode-panel-border, #3c3c3c); padding-top: 10px; }
    .input-subsection > summary { text-transform: none; letter-spacing: 0; }
    .input-subsection > .section-header { justify-content: flex-end; }
    .mapping-group h4 { margin: 0; font-size: 12px; }
    .mapping-row { display: grid; gap: 6px; align-items: center; margin: 6px 0; }
    .mapping-header { display: grid; gap: 6px; align-items: center; margin: 8px 0 2px; color: var(--muted); font-size: 11px; font-weight: 600; }
    .mapping-empty { margin: 8px 0; }
    .local-row { grid-template-columns: minmax(120px, 1fr) 120px minmax(100px, 1fr) auto; }
    .keyboard-key-row { grid-template-columns: minmax(88px, 0.7fr) minmax(130px, 1fr) repeat(6, minmax(88px, 1fr)) auto; }
    .gamepad-axis-row { grid-template-columns: minmax(100px, 1fr) minmax(120px, 1fr) minmax(100px, 1fr) minmax(80px, 0.7fr) auto auto; }
    .gamepad-button-row { grid-template-columns: minmax(90px, 1fr) minmax(120px, 1fr) minmax(120px, 1fr) repeat(4, minmax(90px, 1fr)) auto; }
    .integrator-row { grid-template-columns: minmax(100px, 1fr) minmax(130px, 1.2fr) minmax(100px, 1fr) repeat(4, minmax(80px, 0.8fr)) auto; }
    .model-input-row { grid-template-columns: minmax(120px, 1fr) minmax(160px, 2fr) auto; }
    .check-field { display: inline-flex; align-items: center; gap: 6px; }
    .hint { color: var(--muted); font-size: 11px; line-height: 1.35; }
    .readonly-list { margin: 0; padding-left: 18px; display: grid; gap: 4px; font-size: 12px; }
    .status { font-size: 12px; min-height: 16px; }
    .status.ok { color: var(--ok); } .status.error { color: var(--error); }
    .empty { color: var(--muted); font-size: 13px; }
    .view-row { display: grid; gap: 10px; padding: 10px 0; border-top: 1px solid var(--vscode-panel-border, #3c3c3c); }
    .view-row:first-of-type { border-top: 0; padding-top: 0; }
    .parameter-list { display: grid; gap: 10px; }
    .parameter-row { display: grid; grid-template-columns: minmax(0, 1.4fr) minmax(220px, 0.6fr); gap: 12px; align-items: start; padding: 10px 0; border-top: 1px solid var(--vscode-panel-border, #3c3c3c); }
    .parameter-row:first-child { border-top: 0; padding-top: 0; }
    .parameter-details { display: grid; gap: 3px; }
    .parameter-details > strong { font-size: 13px; }
    .parameter-control { display: grid; grid-template-columns: 1fr auto; gap: 6px; align-items: end; }
    .parameter-control label { grid-column: 1 / -1; }
    @media (max-width: 720px) {
      :root { --pad: 14px; }
      body { font-size: 15px; }
      .page { gap: 14px; }
      .header {
        align-items: stretch;
        flex-direction: column;
      }
      .title { font-size: 18px; }
      .subtitle,
      .hint,
      .status,
      .readonly-list,
      .summary-meta {
        font-size: 13px;
      }
      .actions {
        flex-wrap: wrap;
      }
      .actions button {
        flex: 1 1 120px;
      }
      button,
      input,
      textarea,
      select {
        min-height: 42px;
        font-size: 16px;
        padding: 8px 10px;
      }
      input[type="checkbox"] {
        min-width: 24px;
        min-height: 24px;
      }
      label,
      .card summary,
      .mapping-group h4 {
        font-size: 13px;
      }
      .card {
        padding: 14px;
      }
      .run-overview,
      .run-state-strip {
        grid-template-columns: 1fr;
      }
      .grid,
      .path-row,
      .parameter-row,
      .parameter-control,
      .mapping-row,
      .mapping-header,
      .local-row,
      .keyboard-key-row,
      .gamepad-axis-row,
      .gamepad-button-row,
      .integrator-row,
      .model-input-row {
        grid-template-columns: 1fr;
      }
      .icon-button {
        min-width: 42px;
      }
    }
  </style>
</head>
<body data-theme="${De(o)}">
  <div class="page">
    <div class="header">
      <div>
        <p class="title">${De(r||"Scenario")} <span id="taskSubtitle" class="subtitle">(${De(v)})</span></p>
        <div class="subtitle">${De(s)}</div>
      </div>
      <div class="actions">
        <button id="runBtn">${De(g)}</button>
        <button id="saveBtn">Save</button>
        <button id="rawBtn" class="ghost">Raw TOML</button>
      </div>
    </div>
    <div id="status" class="status"></div>
    <section class="run-overview" aria-label="Scenario summary">
      <div class="run-overview-item">
        <span class="run-overview-label">Model</span>
        <span class="run-overview-value" id="summaryModel">${De(p.modelFile||"No model file")}</span>
      </div>
      <div class="run-overview-item">
        <span class="run-overview-label">Class</span>
        <span class="run-overview-value" id="summaryClass">${De(p.modelName||"No class")}</span>
      </div>
      <div class="run-overview-item">
        <span class="run-overview-label">Solver</span>
        <span class="run-overview-value" id="summarySolver">${De(p.solver)}</span>
      </div>
      <div class="run-overview-item">
        <span class="run-overview-label">Duration</span>
        <span class="run-overview-value" id="summaryEndTime">${De(p.duration)}</span>
      </div>
      <div class="run-overview-item">
        <span class="run-overview-label">Status</span>
        <span class="run-overview-value" id="summaryStatus">Ready</span>
      </div>
    </section>
    <div class="run-state-strip" aria-label="Run progress">
      <span class="run-state-step active" data-run-step="ready">Ready</span>
      <span class="run-state-step" data-run-step="saving">Save</span>
      <span class="run-state-step" data-run-step="running">Run</span>
      <span class="run-state-step" data-run-step="completed">Complete</span>
      <span class="run-state-step" data-run-step="failed">Failed</span>
    </div>
    ${m||'<div class="empty">This scenario has no editable fields yet. Use the lightning-bolt action on a model, or switch to the raw TOML view.</div>'}
    <div class="hint">Advanced or host-specific sections are preserved. Switch to Raw TOML only when the typed controls do not expose a setting yet.</div>
  </div>
  <script>
    const initialState = ${x};
    const fields = Array.isArray(initialState.fields) ? initialState.fields : [];
    let plotViews = Array.isArray(initialState.plotViews) ? initialState.plotViews.slice() : [];
    let parameters = Array.isArray(initialState.parameters) ? initialState.parameters.slice() : [];
    const path = String(initialState.path || 'rumoca-scenario.toml');
    let runLabel = String(initialState.runLabel || 'Run');
    const runSummary = initialState.runSummary && typeof initialState.runSummary === 'object' ? initialState.runSummary : {};
    const statusEl = document.getElementById('status');
    const vscodeApi = typeof acquireVsCodeApi === 'function' ? acquireVsCodeApi() : null;
    const pendingRequests = new Map();
    let nextRequestId = 1;
    const browserHost = (() => {
      const own = globalThis.RumocaScenarioConfigHost;
      if (own && typeof own.request === 'function') return own;
      try {
        const parentHost = globalThis.parent && globalThis.parent !== globalThis
          ? globalThis.parent.RumocaScenarioConfigHost : null;
        if (parentHost && typeof parentHost.request === 'function') return parentHost;
      } catch (_error) { return null; }
      return null;
    })();

    function requestHost(method, payload) {
      if (browserHost) return Promise.resolve(browserHost.request(method, payload));
      if (!vscodeApi) return Promise.reject(new Error('config host unavailable'));
      const requestId = String(nextRequestId++);
      return new Promise((resolve, reject) => {
        pendingRequests.set(requestId, { resolve, reject });
        vscodeApi.postMessage({ command: 'scenarioConfig.request', requestId, method, payload });
      });
    }

    window.addEventListener('message', (event) => {
      const message = event && event.data ? event.data : {};
      if (message.command !== 'scenarioConfig.response') return;
      const pending = pendingRequests.get(String(message.requestId || ''));
      if (!pending) return;
      pendingRequests.delete(String(message.requestId));
      if (message.ok === false) pending.reject(new Error(String(message.error || 'config host request failed')));
      else pending.resolve(message.value);
    });

    function setStatus(text, level) {
      statusEl.textContent = text || '';
      statusEl.classList.remove('ok', 'error');
      if (level) statusEl.classList.add(level);
    }

    function setText(id, value) {
      const el = document.getElementById(id);
      if (el) el.textContent = value;
    }

    function setRunStage(stage) {
      const order = ['ready', 'saving', 'running', 'completed'];
      const failed = stage === 'failed';
      const activeIndex = order.indexOf(stage);
      document.querySelectorAll('[data-run-step]').forEach((step) => {
        const key = step.getAttribute('data-run-step');
        const index = order.indexOf(key);
        step.classList.toggle('active', !failed && key === stage);
        step.classList.toggle('done', !failed && index >= 0 && activeIndex > index);
        step.classList.toggle('failed', failed && key === 'failed');
      });
      const label = failed ? 'Failed'
        : stage === 'saving' ? 'Saving'
          : stage === 'running' ? runLabel
            : stage === 'completed' ? 'Completed'
              : 'Ready';
      setText('summaryStatus', label);
    }

    function fieldValueForPath(pathText, fallback) {
      const input = fieldInputForPath(pathText);
      const value = input?.type === 'checkbox'
        ? (input.checked ? 'true' : 'false')
        : String(input?.value || '').trim();
      return value === '' ? fallback : value;
    }

    function updateRunOverview() {
      const task = selectedTask();
      setText('summaryModel', fieldValueForPath('model.file', runSummary.modelFile || 'No model file'));
      setText('summaryClass', fieldValueForPath('model.name', runSummary.modelName || 'No class'));
      setText('summarySolver', task === 'codegen' ? 'n/a' : fieldValueForPath('sim.solver', runSummary.solver || 'auto'));
      const end = fieldValueForPath('sim.t_end', runSummary.tEnd || '1');
      const live = fieldValueForPath('viewer.mode', '') === 'external_web';
      setText('summaryEndTime', task === 'codegen' ? 'n/a' : live ? 'Until stopped' : (end ? end + ' s' : 'n/a'));
    }

    function escapeText(value) {
      return String(value ?? '').replace(/[&<>"']/g, (char) => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;',
      }[char]));
    }

    function currentParameterOverrideValues() {
      const overrides = {};
      const card = document.getElementById('parametersCard');
      if (!card) return overrides;
      for (const row of card.querySelectorAll('[data-parameter-row]')) {
        const name = String(row.getAttribute('data-parameter-name') || '').trim();
        const raw = String(row.querySelector('[data-parameter-field="override"]')?.value || '').trim();
        if (!name || !raw) continue;
        const value = Number(raw);
        if (Number.isFinite(value)) overrides[name] = value;
      }
      return overrides;
    }

    function normalizeParameterMetadata(metadata, overrides) {
      const overrideMap = overrides && typeof overrides === 'object' && !Array.isArray(overrides)
        ? overrides : {};
      return Array.isArray(metadata)
        ? metadata
          .filter((entry) => entry && typeof entry === 'object' && String(entry.name || '').trim())
          .map((entry) => {
            const name = String(entry.name || '').trim();
            const hasOverride = Object.prototype.hasOwnProperty.call(overrideMap, name);
            return {
              name,
              defaultValue: entry.defaultValue,
              unit: String(entry.unit || '').trim(),
              start: String(entry.start || '').trim(),
              min: String(entry.min || '').trim(),
              max: String(entry.max || '').trim(),
              nominal: String(entry.nominal || '').trim(),
              minValue: entry.minValue === null || entry.minValue === undefined ? NaN : Number(entry.minValue),
              maxValue: entry.maxValue === null || entry.maxValue === undefined ? NaN : Number(entry.maxValue),
              fixed: entry.fixed,
              description: String(entry.description || '').trim(),
              hasOverride,
              overrideValue: hasOverride ? overrideMap[name] : undefined,
            };
          })
          .sort((a, b) => a.name.localeCompare(b.name))
        : [];
    }

    function parameterSummaryText(rows) {
      return Array.isArray(rows) && rows.length ? rows.length + ' tunable' : 'None discovered';
    }

    function parameterRowsMarkup(rows) {
      return Array.isArray(rows) && rows.length
        ? rows.map((parameter) => {
          const defaultValue = parameter.defaultValue === undefined || parameter.defaultValue === null || parameter.defaultValue === ''
            ? '' : String(parameter.defaultValue);
          const overrideValue = parameter.hasOverride ? String(parameter.overrideValue) : '';
          const rowMinAttr = Number.isFinite(parameter.minValue) ? ' data-parameter-min="' + escapeText(String(parameter.minValue)) + '"' : '';
          const rowMaxAttr = Number.isFinite(parameter.maxValue) ? ' data-parameter-max="' + escapeText(String(parameter.maxValue)) + '"' : '';
          const inputMinAttr = Number.isFinite(parameter.minValue) ? ' min="' + escapeText(String(parameter.minValue)) + '"' : '';
          const inputMaxAttr = Number.isFinite(parameter.maxValue) ? ' max="' + escapeText(String(parameter.maxValue)) + '"' : '';
          const unit = parameter.unit ? '<span>' + escapeText(parameter.unit) + '</span>' : '';
          const bounds = [
            parameter.min ? 'min ' + parameter.min : '',
            parameter.max ? 'max ' + parameter.max : '',
            parameter.nominal ? 'nominal ' + parameter.nominal : '',
          ].filter(Boolean).join(' \xB7 ');
          const meta = [
            defaultValue ? 'default ' + defaultValue : '',
            bounds,
            parameter.fixed !== undefined ? 'fixed ' + (parameter.fixed ? 'true' : 'false') : '',
          ].filter(Boolean).join(' \xB7 ');
          return [
            '<div class="parameter-row" data-parameter-row data-parameter-name="' + escapeText(parameter.name) + '"' + rowMinAttr + rowMaxAttr + '>',
            '<div class="parameter-details"><strong>' + escapeText(parameter.name) + '</strong>',
            unit,
            parameter.description ? '<div class="hint">' + escapeText(parameter.description) + '</div>' : '',
            meta ? '<div class="hint">' + escapeText(meta) + '</div>' : '',
            '</div>',
            '<div class="parameter-control"><label>Override</label>',
            '<input type="number" step="any"' + inputMinAttr + inputMaxAttr + ' data-parameter-field="override" value="' + escapeText(overrideValue) + '" placeholder="' + escapeText(defaultValue) + '">',
            '<button type="button" class="ghost icon-button" data-clear-parameter title="Clear override">-</button>',
            '</div></div>',
          ].join('');
        }).join('')
        : '<div class="empty">Compile the selected model to discover tunable scalar parameters.</div>';
    }

    function renderParameters(nextParameters, summaryText) {
      parameters = Array.isArray(nextParameters) ? nextParameters.slice() : [];
      const list = document.getElementById('parametersList');
      const summary = document.getElementById('parametersSummary');
      if (list) list.innerHTML = parameterRowsMarkup(parameters);
      if (summary) summary.textContent = summaryText || parameterSummaryText(parameters);
    }

    function fieldInputForPath(pathText) {
      const field = fields.find((item) => Array.isArray(item.path) && item.path.join('.') === pathText);
      return field ? document.querySelector('[data-field="' + field.index + '"]') : null;
    }

    function currentModelSelection() {
      return {
        modelFile: String(fieldInputForPath('model.file')?.value || '').trim(),
        modelName: String(fieldInputForPath('model.name')?.value || '').trim(),
      };
    }

    let parameterRefreshToken = 0;

    async function refreshParameterMetadata() {
      const card = document.getElementById('parametersCard');
      if (!card || card.hidden) return;
      const selection = currentModelSelection();
      if (!selection.modelFile || !selection.modelName) {
        renderParameters([], 'None discovered');
        return;
      }
      const token = ++parameterRefreshToken;
      const summary = document.getElementById('parametersSummary');
      if (summary) summary.textContent = 'Refreshing...';
      try {
        const response = await requestHost('parameterMetadata', {
          path,
          modelFile: selection.modelFile,
          modelName: selection.modelName,
        });
        if (token !== parameterRefreshToken) return;
        const metadata = Array.isArray(response)
          ? response
          : (Array.isArray(response?.parameters) ? response.parameters : []);
        renderParameters(normalizeParameterMetadata(metadata, currentParameterOverrideValues()));
      } catch (_error) {
        if (token !== parameterRefreshToken) return;
        if (summary) summary.textContent = 'Refresh failed';
      }
    }

    function fail(message, el) {
      if (el && el.classList) el.classList.add('invalid');
      throw new Error(message);
    }

    function parseLines(value) {
      return String(value || '').split(/\\r?\\n|,/).map((item) => item.trim()).filter(Boolean);
    }

    function sourceRootRowMarkup(value) {
      return [
        '<div class="path-row" data-path-row>',
        '<input type="text" data-list-item value="' + escapeText(value || '') + '" placeholder="../libraries/Modelica">',
        '<button type="button" class="ghost icon-button" data-browse-path title="Browse for a folder">...</button>',
        '<button type="button" class="ghost icon-button" data-remove-path title="Remove library folder">-</button>',
        '</div>',
      ].join('');
    }

    function sanitizeId(value, fallback) {
      const cleaned = String(value || '').trim().toLowerCase().replace(/[^a-z0-9_]+/g, '_').replace(/^_+|_+$/g, '');
      return cleaned || fallback;
    }

    function collectFieldValue(field, el) {
      if (!el) return undefined;
      el.classList.remove('invalid');
      if (field.kind === 'boolean') return el.checked;
      if (field.kind === 'stringList') {
        return Array.from(el.querySelectorAll('[data-list-item]'))
          .map((input) => String(input.value || '').trim())
          .filter(Boolean);
      }
      if (field.kind === 'select') {
        const allowed = new Set((field.options || []).map((option) => String(option[0])));
        const value = String(el.value || '').trim();
        if (!allowed.has(value)) fail('Choose a listed value for ' + field.label + '.', el);
        if (!value && field.optional) return undefined;
        return value;
      }
      if (field.kind === 'number' || field.kind === 'optionalNumber') {
        const raw = String(el.value || '').trim();
        if (!raw && field.optional) return undefined;
        const value = Number(raw);
        if (!Number.isFinite(value) || value <= 0) fail(field.label + ' must be a positive number.', el);
        return value;
      }
      const text = String(el.value || '').trim();
      if (!text && field.optional) return undefined;
      if (!text && (field.path.join('.') === 'model.name' || field.path.join('.') === 'model.file')) {
        fail(field.label + ' is required.', el);
      }
      return text;
    }

    function defaultView(type, index) {
      const suffix = String(index + 1);
      if (type === 'scatter') {
        return { id: 'scatter_' + suffix, title: 'Scatter', type: 'scatter', x: 'time', y: ['x'] };
      }
      if (type === '3d') {
        return { id: 'viewer_' + suffix, title: '3D View', type: '3d', x: 'time', y: ['x', 'y'], scriptPath: 'viewer.js' };
      }
      return { id: index === 0 ? 'states_time' : 'timeseries_' + suffix, title: index === 0 ? 'States vs Time' : 'Time Series', type: 'timeseries', x: 'time', y: ['*states'] };
    }

    function optionMarkup(value, label, selected) {
      return '<option value="' + escapeText(value) + '"' + (value === selected ? ' selected' : '') + '>' + escapeText(label) + '</option>';
    }

    function selectMarkup(values, selected) {
      return values.map(([value, label]) => optionMarkup(value, label, selected)).join('');
    }

    function optionLabel(values, selected, fallback) {
      const text = String(selected || '').trim();
      const match = values.find(([value]) => value === text);
      return match ? match[1] : (text || fallback);
    }

    function localRowMarkup(row, index) {
      const current = row || {};
      return [
        '<div class="mapping-row local-row" data-local-row="' + index + '">',
        '<input data-local-field="name" value="' + escapeText(current.name || '') + '" placeholder="throttle">',
        '<select data-local-field="type">' + selectMarkup([['float', 'float'], ['bool', 'bool']], current.type || 'float') + '</select>',
        '<input data-local-field="defaultValue" value="' + escapeText(current.defaultValue || '') + '" placeholder="0.0">',
        '<button type="button" class="ghost icon-button" data-remove-mapping>-</button>',
        '</div>',
      ].join('');
    }

    function keyboardKeyRowMarkup(row, index) {
      const current = row || {};
      return [
        '<div class="mapping-row keyboard-key-row" data-keyboard-key-row="' + index + '">',
        '<input data-key-field="key" value="' + escapeText(current.key || '') + '" placeholder="ArrowUp">',
        '<select data-key-field="action">' + selectMarkup([['set', 'set local value'], ['toggle', 'toggle local flag'], ['signal', 'emit signal']], current.action || 'set') + '</select>',
        '<input data-key-field="target" data-action-kind="set" value="' + escapeText(current.target || '') + '" placeholder="local target">',
        '<input data-key-field="value" data-action-kind="set" type="number" step="any" value="' + escapeText(current.value || '') + '" placeholder="1.0">',
        '<input data-key-field="state" data-action-kind="toggle" value="' + escapeText(current.state || '') + '" placeholder="bool local">',
        '<input data-key-field="signal" data-action-kind="signal" value="' + escapeText(current.signal || '') + '" placeholder="reset">',
        '<input data-key-field="debounceMs" data-action-kind="toggle signal" type="number" step="1" min="0" value="' + escapeText(current.debounceMs || '') + '" placeholder="debounce ms">',
        '<input data-key-field="precondition" value="' + escapeText(current.precondition || '') + '" placeholder="throttle <= 0.05">',
        '<button type="button" class="ghost icon-button" data-remove-mapping>-</button>',
        '</div>',
      ].join('');
    }

    function integratorRowMarkup(row, index, device) {
      const current = row || {};
      const prefix = device === 'gamepad' ? 'gamepad-integrator' : 'keyboard-integrator';
      return [
        '<div class="mapping-row integrator-row" data-' + prefix + '-row="' + index + '">',
        '<input data-integrator-field="name" value="' + escapeText(current.name || '') + '" placeholder="throttle">',
        '<input data-integrator-field="source" value="' + escapeText(current.source || '') + '" placeholder="' + (device === 'gamepad' ? 'LeftStickY' : 'local:throttle_input') + '">',
        '<input data-integrator-field="write" value="' + escapeText(current.write || '') + '" placeholder="local target">',
        '<input data-integrator-field="rate" type="number" step="any" value="' + escapeText(current.rate || '') + '" placeholder="0.7">',
        '<input data-integrator-field="deadband" type="number" step="any" value="' + escapeText(current.deadband || '') + '" placeholder="0.1">',
        '<input data-integrator-field="clampMin" type="number" step="any" value="' + escapeText(current.clampMin || '') + '" placeholder="0.0">',
        '<input data-integrator-field="clampMax" type="number" step="any" value="' + escapeText(current.clampMax || '') + '" placeholder="1.0">',
        '<button type="button" class="ghost icon-button" data-remove-mapping>-</button>',
        '</div>',
      ].join('');
    }

    function gamepadAxisRowMarkup(row, index) {
      const current = row || {};
      const sources = ['LeftStickX', 'LeftStickY', 'RightStickX', 'RightStickY', 'LeftZ', 'RightZ', 'DPadX', 'DPadY'].map((item) => [item, item]);
      return [
        '<div class="mapping-row gamepad-axis-row" data-gamepad-axis-row="' + index + '">',
        '<input data-axis-field="name" value="' + escapeText(current.name || '') + '" placeholder="throttle">',
        '<select data-axis-field="source">' + selectMarkup(sources, current.source || 'LeftStickY') + '</select>',
        '<input data-axis-field="write" value="' + escapeText(current.write || '') + '" placeholder="local target">',
        '<input data-axis-field="scale" type="number" step="any" value="' + escapeText(current.scale || '') + '" placeholder="1.0">',
        '<label class="check-field"><input data-axis-field="invert" type="checkbox"' + (current.invert ? ' checked' : '') + '> invert</label>',
        '<button type="button" class="ghost icon-button" data-remove-mapping>-</button>',
        '</div>',
      ].join('');
    }

    function gamepadButtonRowMarkup(row, index) {
      const current = row || {};
      const sources = ['South', 'East', 'North', 'West', 'Start', 'Select', 'LeftTrigger', 'RightTrigger', 'LeftThumb', 'RightThumb', 'DPadUp', 'DPadDown', 'DPadLeft', 'DPadRight', 'Mode'].map((item) => [item, item]);
      return [
        '<div class="mapping-row gamepad-button-row" data-gamepad-button-row="' + index + '">',
        '<input data-button-field="name" value="' + escapeText(current.name || '') + '" placeholder="arm">',
        '<select data-button-field="source">' + selectMarkup(sources, current.source || 'South') + '</select>',
        '<select data-button-field="action">' + selectMarkup([['toggle', 'toggle local flag'], ['signal', 'emit signal']], current.action || 'toggle') + '</select>',
        '<input data-button-field="state" data-action-kind="toggle" value="' + escapeText(current.state || '') + '" placeholder="bool local">',
        '<input data-button-field="signal" data-action-kind="signal" value="' + escapeText(current.signal || '') + '" placeholder="reset">',
        '<input data-button-field="debounceMs" type="number" step="1" min="0" value="' + escapeText(current.debounceMs || '') + '" placeholder="debounce ms">',
        '<input data-button-field="precondition" value="' + escapeText(current.precondition || '') + '" placeholder="throttle <= 0.05">',
        '<button type="button" class="ghost icon-button" data-remove-mapping>-</button>',
        '</div>',
      ].join('');
    }

    function modelInputRowMarkup(row, index) {
      const current = row || {};
      return [
        '<div class="mapping-row model-input-row" data-model-input-row="' + index + '">',
        '<input data-model-field="name" value="' + escapeText(current.name || '') + '" placeholder="stick_throttle">',
        '<input data-model-field="source" value="' + escapeText(current.source || '') + '" placeholder="local:throttle">',
        '<button type="button" class="ghost icon-button" data-remove-mapping>-</button>',
        '</div>',
      ].join('');
    }

    function viewRowMarkup(view, index) {
      const current = view || defaultView('timeseries', index);
      const type = String(current.type || 'timeseries');
      const yText = Array.isArray(current.y) ? current.y.join('\\n') : '';
      const typeOptions = ['timeseries', 'scatter', '3d'].map((item) => optionMarkup(item, item, type)).join('');
      return [
        '<div class="view-row" data-view-index="' + index + '" data-view-id="' + escapeText(current.id || '') + '">',
        '<div class="view-title-row"><strong>' + escapeText(current.title || current.id || ('View ' + (index + 1))) + '</strong>',
        '<button type="button" class="ghost remove-view" data-remove-view="' + index + '">Remove</button></div>',
        '<div class="grid">',
        '<div class="field"><label for="view_' + index + '_title">title</label><input id="view_' + index + '_title" data-view-field="title" value="' + escapeText(current.title || '') + '"></div>',
        '<div class="field"><label for="view_' + index + '_type">type</label><select id="view_' + index + '_type" data-view-field="type">' + typeOptions + '</select></div>',
        '<div class="field" data-view-kind="series"><label for="view_' + index + '_x">x</label><input id="view_' + index + '_x" data-view-field="x" value="' + escapeText(current.x || 'time') + '"></div>',
        '<div class="field" data-view-kind="series"><label for="view_' + index + '_y">y series</label><textarea id="view_' + index + '_y" data-view-field="y" rows="3" placeholder="*states">' + escapeText(yText) + '</textarea></div>',
        '<div class="field" data-view-kind="script3d"' + (type === '3d' ? '' : ' hidden') + '><label for="view_' + index + '_script_path">viewer script path</label><input id="view_' + index + '_script_path" data-view-field="scriptPath" value="' + escapeText(current.scriptPath || '') + '" placeholder="viewer.js"></div>',
        '</div></div>',
      ].join('');
    }

    function renderPlotViews() {
      const container = document.getElementById('plotViewsList');
      if (!container) return;
      container.innerHTML = plotViews.length > 0
        ? plotViews.map((view, index) => viewRowMarkup(view, index)).join('')
        : '<div class="empty">No plot panels configured. Add a panel to save simulation results with a reusable view.</div>';
      syncPlotViewVisibility();
    }

    function syncPlotViewVisibility() {
      for (const row of document.querySelectorAll('[data-view-index]')) {
        const type = String(row.querySelector('[data-view-field="type"]')?.value || 'timeseries');
        row.querySelectorAll('[data-view-kind="series"]').forEach((field) => { field.hidden = type === '3d'; });
        row.querySelectorAll('[data-view-kind="script3d"]').forEach((field) => { field.hidden = type !== '3d'; });
      }
    }

    function syncActionVisibility(row) {
      const action = String(row.querySelector('[data-key-field="action"], [data-button-field="action"]')?.value || 'set');
      row.querySelectorAll('[data-action-kind]').forEach((field) => {
        field.hidden = !String(field.getAttribute('data-action-kind') || '').split(/\\s+/).includes(action);
      });
    }

    function syncInputVisibility() {
      const enabled = inputMappingEnabled();
      document.querySelectorAll('[data-input-enabled-field]').forEach((field) => {
        field.hidden = !enabled;
      });
      document.querySelectorAll('[data-keyboard-key-row], [data-gamepad-button-row]').forEach(syncActionVisibility);
    }

    function collectPlotViews() {
      const views = [];
      for (const row of document.querySelectorAll('[data-view-index]')) {
        const index = Number(row.getAttribute('data-view-index'));
        const current = plotViews[index] || defaultView('timeseries', index);
        const preservedId = String(row.getAttribute('data-view-id') || current.id || '');
        const typeEl = row.querySelector('[data-view-field="type"]');
        const titleEl = row.querySelector('[data-view-field="title"]');
        const xEl = row.querySelector('[data-view-field="x"]');
        const yEl = row.querySelector('[data-view-field="y"]');
        const scriptPathEl = row.querySelector('[data-view-field="scriptPath"]');
        for (const el of [typeEl, titleEl, xEl, yEl, scriptPathEl]) el?.classList.remove('invalid');
        const type = String(typeEl?.value || 'timeseries');
        if (!['timeseries', 'scatter', '3d'].includes(type)) fail('Choose a listed plot type.', typeEl);
        const title = String(titleEl?.value || '').trim() || (type === '3d' ? '3D View' : type === 'scatter' ? 'Scatter' : 'Time Series');
        const x = String(xEl?.value || '').trim() || 'time';
        const y = parseLines(yEl?.value);
        if (type !== '3d' && y.length === 0) fail('Add at least one y series for each plot panel.', yEl);
        const view = {
          id: sanitizeId(preservedId || title, 'view_' + String(index + 1)),
          title,
          type,
          x,
          y: type === '3d' ? [] : y,
        };
        const scriptPath = String(scriptPathEl?.value || '').trim();
        if (type === '3d' && scriptPath) view.scriptPath = scriptPath;
        views.push(view);
      }
      return views;
    }

    function inputMappingEnabled() {
      return Boolean(document.querySelector('[data-input-enabled]')?.checked);
    }

    function cleanName(value, label, el) {
      const text = String(value || '').trim();
      if (!text) fail(label + ' is required.', el);
      return text;
    }

    function validateSignalSource(value, label, el) {
      const source = cleanName(value, label, el);
      if (
        !source.startsWith('model:')
        && !source.startsWith('local:')
        && !source.startsWith('runtime:')
      ) {
        fail(label + ' must start with model:, local:, or runtime:.', el);
      }
      return source;
    }

    function optionalNumber(value, label, el) {
      const raw = String(value || '').trim();
      if (!raw) return undefined;
      const number = Number(raw);
      if (!Number.isFinite(number)) fail(label + ' must be a number.', el);
      return number;
    }

    function optionalInteger(value, label, el) {
      const number = optionalNumber(value, label, el);
      if (number === undefined) return undefined;
      if (!Number.isInteger(number) || number < 0) fail(label + ' must be a non-negative integer.', el);
      return number;
    }

    function parseLocalDefault(raw, type, el) {
      const text = String(raw || '').trim();
      if (!text) return undefined;
      if (type === 'bool') {
        if (text === 'true' || text === '1') return true;
        if (text === 'false' || text === '0') return false;
        fail('Bool local defaults must be true or false.', el);
      }
      const number = Number(text);
      if (!Number.isFinite(number)) fail('Float local defaults must be numbers.', el);
      return number;
    }

    function assignUnique(target, key, value, el, label) {
      if (Object.prototype.hasOwnProperty.call(target, key)) fail(label + ' names must be unique.', el);
      target[key] = value;
    }

    function parseSignalRouteObject(route, el) {
      if (!route || typeof route !== 'object' || Array.isArray(route)) {
        fail('Structured model input routes must be objects.', el);
      }
      if (Object.prototype.hasOwnProperty.call(route, 'const')) {
        return { const: route.const };
      }
      const normalized = { from: validateSignalSource(route.from, 'Model input source', el) };
      const hasConditional = Object.prototype.hasOwnProperty.call(route, 'when_true')
        || Object.prototype.hasOwnProperty.call(route, 'when_false');
      const hasDefault = Object.prototype.hasOwnProperty.call(route, 'default');
      if (hasConditional) {
        if (
          !Object.prototype.hasOwnProperty.call(route, 'when_true')
          || !Object.prototype.hasOwnProperty.call(route, 'when_false')
        ) {
          fail('Conditional model inputs need both when_true and when_false.', el);
        }
        normalized.when_true = route.when_true;
        normalized.when_false = route.when_false;
        return normalized;
      }
      if (hasDefault) {
        normalized.default = route.default;
        return normalized;
      }
      return normalized.from;
    }

    function parseSignalRouteValue(value, el) {
      const text = cleanName(value, 'Model input source', el);
      if (!text.startsWith('{')) {
        return validateSignalSource(text, 'Model input source', el);
      }
      try {
        return parseSignalRouteObject(JSON.parse(text), el);
      } catch (error) {
        if (!(error instanceof SyntaxError)) {
          throw error;
        }
        fail('Structured model input source must be JSON, for example {"from":"local:armed","when_true":1,"when_false":0}.', el);
      }
      return undefined;
    }

    function collectLocals() {
      const locals = {};
      for (const row of document.querySelectorAll('[data-local-row]')) {
        const nameEl = row.querySelector('[data-local-field="name"]');
        const typeEl = row.querySelector('[data-local-field="type"]');
        const defaultEl = row.querySelector('[data-local-field="defaultValue"]');
        [nameEl, typeEl, defaultEl].forEach((el) => el?.classList.remove('invalid'));
        const name = cleanName(nameEl?.value, 'Local name', nameEl);
        const type = String(typeEl?.value || 'float');
        if (!['float', 'bool'].includes(type)) fail('Choose a listed local type.', typeEl);
        const local = { type };
        const defaultValue = parseLocalDefault(defaultEl?.value, type, defaultEl);
        if (defaultValue !== undefined) local.default = defaultValue;
        assignUnique(locals, name, local, nameEl, 'Local');
      }
      return Object.keys(locals).length ? locals : undefined;
    }

    function addOptionalActionFields(target, row, prefix) {
      const debounceEl = row.querySelector('[' + prefix + '="debounceMs"]');
      const preconditionEl = row.querySelector('[' + prefix + '="precondition"]');
      const debounceMs = optionalInteger(debounceEl?.value, 'debounce_ms', debounceEl);
      if (debounceMs !== undefined) target.debounce_ms = debounceMs;
      const precondition = String(preconditionEl?.value || '').trim();
      if (precondition) target.precondition = precondition;
    }

    function collectKeyboardKeys() {
      const keys = {};
      for (const row of document.querySelectorAll('[data-keyboard-key-row]')) {
        const keyEl = row.querySelector('[data-key-field="key"]');
        const actionEl = row.querySelector('[data-key-field="action"]');
        const targetEl = row.querySelector('[data-key-field="target"]');
        const valueEl = row.querySelector('[data-key-field="value"]');
        const stateEl = row.querySelector('[data-key-field="state"]');
        const signalEl = row.querySelector('[data-key-field="signal"]');
        row.querySelectorAll('input, select').forEach((el) => el.classList.remove('invalid'));
        const key = cleanName(keyEl?.value, 'Keyboard key', keyEl);
        const action = String(actionEl?.value || 'set');
        const binding = { action };
        if (action === 'set') {
          binding.target = cleanName(targetEl?.value, 'Key target', targetEl);
          const value = optionalNumber(valueEl?.value, 'Key value', valueEl);
          if (value === undefined) fail('Key set actions require a value.', valueEl);
          binding.value = value;
        } else if (action === 'toggle') {
          binding.state = cleanName(stateEl?.value, 'Toggle state', stateEl);
          addOptionalActionFields(binding, row, 'data-key-field');
        } else if (action === 'signal') {
          binding.signal = cleanName(signalEl?.value, 'Signal name', signalEl);
          addOptionalActionFields(binding, row, 'data-key-field');
        } else {
          fail('Choose a listed keyboard action.', actionEl);
        }
        assignUnique(keys, key, binding, keyEl, 'Keyboard key');
      }
      return Object.keys(keys).length ? keys : undefined;
    }

    function collectIntegrators(selector, label) {
      const integrators = {};
      for (const row of document.querySelectorAll(selector)) {
        const nameEl = row.querySelector('[data-integrator-field="name"]');
        const sourceEl = row.querySelector('[data-integrator-field="source"]');
        const writeEl = row.querySelector('[data-integrator-field="write"]');
        const rateEl = row.querySelector('[data-integrator-field="rate"]');
        const deadbandEl = row.querySelector('[data-integrator-field="deadband"]');
        const clampMinEl = row.querySelector('[data-integrator-field="clampMin"]');
        const clampMaxEl = row.querySelector('[data-integrator-field="clampMax"]');
        row.querySelectorAll('input').forEach((el) => el.classList.remove('invalid'));
        const rate = optionalNumber(rateEl?.value, label + ' rate', rateEl);
        const clampMin = optionalNumber(clampMinEl?.value, label + ' clamp minimum', clampMinEl);
        const clampMax = optionalNumber(clampMaxEl?.value, label + ' clamp maximum', clampMaxEl);
        if (rate === undefined) fail(label + ' rate is required.', rateEl);
        if (clampMin === undefined) fail(label + ' clamp minimum is required.', clampMinEl);
        if (clampMax === undefined) fail(label + ' clamp maximum is required.', clampMaxEl);
        if (clampMin > clampMax) fail(label + ' clamp minimum must be <= maximum.', clampMinEl);
        const integrator = {
          source: cleanName(sourceEl?.value, label + ' source', sourceEl),
          write: cleanName(writeEl?.value, label + ' target', writeEl),
          rate,
          clamp: [clampMin, clampMax],
        };
        const deadband = optionalNumber(deadbandEl?.value, label + ' deadband', deadbandEl);
        if (deadband !== undefined) integrator.deadband = deadband;
        assignUnique(integrators, cleanName(nameEl?.value, label + ' name', nameEl), integrator, nameEl, label);
      }
      return Object.keys(integrators).length ? integrators : undefined;
    }

    function collectGamepadAxes() {
      const axes = {};
      for (const row of document.querySelectorAll('[data-gamepad-axis-row]')) {
        const nameEl = row.querySelector('[data-axis-field="name"]');
        const sourceEl = row.querySelector('[data-axis-field="source"]');
        const writeEl = row.querySelector('[data-axis-field="write"]');
        const scaleEl = row.querySelector('[data-axis-field="scale"]');
        row.querySelectorAll('input, select').forEach((el) => el.classList.remove('invalid'));
        const axis = {
          source: cleanName(sourceEl?.value, 'Gamepad axis source', sourceEl),
          write: cleanName(writeEl?.value, 'Gamepad axis target', writeEl),
        };
        const scale = optionalNumber(scaleEl?.value, 'Gamepad axis scale', scaleEl);
        if (scale !== undefined) axis.scale = scale;
        if (row.querySelector('[data-axis-field="invert"]')?.checked) axis.invert = true;
        assignUnique(axes, cleanName(nameEl?.value, 'Gamepad axis name', nameEl), axis, nameEl, 'Gamepad axis');
      }
      return Object.keys(axes).length ? axes : undefined;
    }

    function collectGamepadButtons() {
      const buttons = {};
      for (const row of document.querySelectorAll('[data-gamepad-button-row]')) {
        const nameEl = row.querySelector('[data-button-field="name"]');
        const sourceEl = row.querySelector('[data-button-field="source"]');
        const actionEl = row.querySelector('[data-button-field="action"]');
        const stateEl = row.querySelector('[data-button-field="state"]');
        const signalEl = row.querySelector('[data-button-field="signal"]');
        row.querySelectorAll('input, select').forEach((el) => el.classList.remove('invalid'));
        const action = String(actionEl?.value || 'toggle');
        const button = {
          source: cleanName(sourceEl?.value, 'Gamepad button source', sourceEl),
          action,
        };
        if (action === 'toggle') {
          button.state = cleanName(stateEl?.value, 'Button toggle state', stateEl);
        } else if (action === 'signal') {
          button.signal = cleanName(signalEl?.value, 'Button signal', signalEl);
        } else {
          fail('Choose a listed gamepad button action.', actionEl);
        }
        addOptionalActionFields(button, row, 'data-button-field');
        assignUnique(buttons, cleanName(nameEl?.value, 'Gamepad button name', nameEl), button, nameEl, 'Gamepad button');
      }
      return Object.keys(buttons).length ? buttons : undefined;
    }

    function collectModelInputs() {
      const inputs = {};
      for (const row of document.querySelectorAll('[data-model-input-row]')) {
        const nameEl = row.querySelector('[data-model-field="name"]');
        const sourceEl = row.querySelector('[data-model-field="source"]');
        row.querySelectorAll('input').forEach((el) => el.classList.remove('invalid'));
        const name = cleanName(nameEl?.value, 'Model input name', nameEl);
        const source = parseSignalRouteValue(sourceEl?.value, sourceEl);
        assignUnique(inputs, name, source, nameEl, 'Model input');
      }
      return Object.keys(inputs).length ? inputs : undefined;
    }

    function collectInputEdits() {
      if (!document.getElementById('inputMappingsCard') || !inputMappingEnabled()) {
        return [
          { path: ['input'], value: undefined },
          { path: ['signals', 'model_inputs'], value: undefined },
        ];
      }
      const keyboardKeys = collectKeyboardKeys();
      const keyboardIntegrators = collectIntegrators('[data-keyboard-integrator-row]', 'Keyboard integrator');
      const gamepadAxes = collectGamepadAxes();
      const gamepadIntegrators = collectIntegrators('[data-gamepad-integrator-row]', 'Gamepad integrator');
      const gamepadButtons = collectGamepadButtons();
      const keyboardDecay = initialState.inputMappings && initialState.inputMappings.keyboardDecay;
      const input = { mode: String(document.querySelector('[data-input-mode]')?.value || 'auto') };
      if (keyboardKeys || keyboardIntegrators || keyboardDecay) input.keyboard = {
        ...(keyboardDecay ? { decay: keyboardDecay } : {}),
        ...(keyboardKeys ? { keys: keyboardKeys } : {}),
        ...(keyboardIntegrators ? { integrators: keyboardIntegrators } : {}),
      };
      if (gamepadAxes || gamepadIntegrators || gamepadButtons) input.gamepad = {
        ...(gamepadAxes ? { axes: gamepadAxes } : {}),
        ...(gamepadIntegrators ? { integrators: gamepadIntegrators } : {}),
        ...(gamepadButtons ? { buttons: gamepadButtons } : {}),
      };
      return [
        { path: ['input'], value: input },
        { path: ['locals'], value: collectLocals() },
        { path: ['signals', 'model_inputs'], value: collectModelInputs() },
      ];
    }

    function collectParameterOverrides() {
      const overrides = {};
      const card = document.getElementById('parametersCard');
      if (!card) return undefined;
      for (const row of card.querySelectorAll('[data-parameter-row]')) {
        const name = String(row.getAttribute('data-parameter-name') || '').trim();
        const input = row.querySelector('[data-parameter-field="override"]');
        input?.classList.remove('invalid');
        const raw = String(input?.value || '').trim();
        if (!raw) continue;
        const value = Number(raw);
        if (!Number.isFinite(value)) fail('Parameter override for ' + name + ' must be numeric.', input);
        const minText = row.getAttribute('data-parameter-min');
        const maxText = row.getAttribute('data-parameter-max');
        const min = minText === null ? NaN : Number(minText);
        const max = maxText === null ? NaN : Number(maxText);
        if (Number.isFinite(min) && value < min) fail('Parameter override for ' + name + ' must be >= ' + min + '.', input);
        if (Number.isFinite(max) && value > max) fail('Parameter override for ' + name + ' must be <= ' + max + '.', input);
        overrides[name] = value;
      }
      return Object.keys(overrides).length ? overrides : undefined;
    }

    function collectEdits() {
      const edits = [];
      for (const field of fields) {
        const el = document.querySelector('[data-field="' + field.index + '"]');
        if (el && !el.closest('[data-scenario-section]')?.hidden) {
          edits.push({ path: field.path, value: collectFieldValue(field, el) });
        }
      }
      if (!document.getElementById('plotViewsCard')?.hidden) {
        edits.push({ path: ['plot', 'views'], value: collectPlotViews() });
      }
      if (!document.getElementById('inputMappingsCard')?.hidden) {
        edits.push(...collectInputEdits());
      }
      if (!document.getElementById('parametersCard')?.hidden) {
        edits.push({ path: ['parameters'], value: collectParameterOverrides() });
      }
      return edits;
    }

    function selectedTask() {
      const taskField = fields.find((field) => Array.isArray(field.path) && field.path.join('.') === 'rumoca.task');
      const el = taskField ? document.querySelector('[data-field="' + taskField.index + '"]') : null;
      return String(el?.value || 'simulate');
    }

    function runLabelForTask(task) {
      return task === 'codegen' ? 'Generate Code' : 'Run Simulation';
    }

    function taskLabelForTask(task) {
      return optionLabel([['simulate', 'Simulation'], ['codegen', 'Code generation']], task, 'Simulation');
    }

    function syncTaskVisibility() {
      const task = selectedTask();
      runLabel = runLabelForTask(task);
      const runBtn = document.getElementById('runBtn');
      if (runBtn) runBtn.textContent = runLabel;
      const taskSubtitle = document.getElementById('taskSubtitle');
      if (taskSubtitle) taskSubtitle.textContent = '(' + taskLabelForTask(task) + ')';
      document.querySelectorAll('[data-scenario-section="sim"], [data-scenario-section="parameters"], [data-scenario-section="viewer"], [data-scenario-section="input"], [data-scenario-section="plot"]')
        .forEach((section) => { section.hidden = task === 'codegen'; });
      document.querySelectorAll('[data-scenario-section="codegen"]')
        .forEach((section) => { section.hidden = task !== 'codegen'; });
      syncInputVisibility();
      updateRunOverview();
    }

    for (const field of fields) {
      if (Array.isArray(field.path) && field.path.join('.') === 'rumoca.task') {
        document.querySelector('[data-field="' + field.index + '"]')?.addEventListener('change', syncTaskVisibility);
      }
      if (Array.isArray(field.path) && (field.path.join('.') === 'model.file' || field.path.join('.') === 'model.name')) {
        document.querySelector('[data-field="' + field.index + '"]')?.addEventListener('change', () => {
          updateRunOverview();
          refreshParameterMetadata().catch(() => {});
        });
      }
      if (Array.isArray(field.path) && ['sim.solver', 'sim.t_end', 'viewer.mode'].includes(field.path.join('.'))) {
        document.querySelector('[data-field="' + field.index + '"]')?.addEventListener('change', updateRunOverview);
      }
    }
    document.getElementById('plotViewsList')?.addEventListener('change', (event) => {
      if (event.target?.matches?.('[data-view-field="type"]')) {
        if (String(event.target.value || '') === '3d') {
          const row = event.target.closest('[data-view-index]');
          const yEl = row?.querySelector('[data-view-field="y"]');
          if (yEl) {
            yEl.value = '';
            yEl.classList.remove('invalid');
          }
        }
        syncPlotViewVisibility();
      }
    });
    document.getElementById('inputMappingsCard')?.addEventListener('change', (event) => {
      if (event.target?.matches?.('[data-input-enabled], [data-key-field="action"], [data-button-field="action"]')) {
        syncInputVisibility();
      }
    });
    document.addEventListener('click', async (event) => {
      const addButton = event.target?.closest?.('[data-add-path]');
      if (addButton) {
        const list = addButton.closest('[data-field]');
        list?.querySelector('[data-path-list-rows]')?.insertAdjacentHTML('beforeend', sourceRootRowMarkup(''));
        const rows = list?.querySelectorAll('[data-list-item]');
        rows?.[rows.length - 1]?.focus();
        return;
      }
      const removeButton = event.target?.closest?.('[data-remove-path]');
      if (removeButton) {
        removeButton.closest('[data-path-row]')?.remove();
        return;
      }
      const browseButton = event.target?.closest?.('[data-browse-path]');
      if (browseButton) {
        const row = browseButton.closest('[data-path-row]');
        const input = row?.querySelector('[data-list-item]');
        try {
          const selected = await requestHost('browseSourceRoot', { path, current: input?.value || '' });
          const value = String(selected?.path || selected || '').trim();
          if (value && input) input.value = value;
        } catch (error) {
          setStatus('Folder picker is not available in this host.', 'error');
        }
      }
      const removeMapping = event.target?.closest?.('[data-remove-mapping]');
      if (removeMapping) {
        removeMapping.closest('.mapping-row')?.remove();
        return;
      }
      if (event.target?.closest?.('[data-add-local]')) {
        const list = document.querySelector('[data-local-list]');
        const index = list?.querySelectorAll('[data-local-row]').length || 0;
        list?.insertAdjacentHTML('beforeend', localRowMarkup({}, index));
        return;
      }
      if (event.target?.closest?.('[data-add-keyboard-key]')) {
        const list = document.querySelector('[data-keyboard-key-list]');
        const index = list?.querySelectorAll('[data-keyboard-key-row]').length || 0;
        list?.insertAdjacentHTML('beforeend', keyboardKeyRowMarkup({}, index));
        syncInputVisibility();
        return;
      }
      if (event.target?.closest?.('[data-add-keyboard-integrator]')) {
        const list = document.querySelector('[data-keyboard-integrator-list]');
        const index = list?.querySelectorAll('[data-keyboard-integrator-row]').length || 0;
        list?.insertAdjacentHTML('beforeend', integratorRowMarkup({}, index, 'keyboard'));
        return;
      }
      if (event.target?.closest?.('[data-add-gamepad-axis]')) {
        const list = document.querySelector('[data-gamepad-axis-list]');
        const index = list?.querySelectorAll('[data-gamepad-axis-row]').length || 0;
        list?.insertAdjacentHTML('beforeend', gamepadAxisRowMarkup({}, index));
        return;
      }
      if (event.target?.closest?.('[data-add-gamepad-integrator]')) {
        const list = document.querySelector('[data-gamepad-integrator-list]');
        const index = list?.querySelectorAll('[data-gamepad-integrator-row]').length || 0;
        list?.insertAdjacentHTML('beforeend', integratorRowMarkup({}, index, 'gamepad'));
        return;
      }
      if (event.target?.closest?.('[data-add-gamepad-button]')) {
        const list = document.querySelector('[data-gamepad-button-list]');
        const index = list?.querySelectorAll('[data-gamepad-button-row]').length || 0;
        list?.insertAdjacentHTML('beforeend', gamepadButtonRowMarkup({}, index));
        syncInputVisibility();
        return;
      }
      if (event.target?.closest?.('[data-add-model-input]')) {
        const list = document.querySelector('[data-model-input-list]');
        const index = list?.querySelectorAll('[data-model-input-row]').length || 0;
        list?.insertAdjacentHTML('beforeend', modelInputRowMarkup({}, index));
      }
      const clearParameter = event.target?.closest?.('[data-clear-parameter]');
      if (clearParameter) {
        const input = clearParameter.closest('[data-parameter-row]')?.querySelector('[data-parameter-field="override"]');
        if (input) input.value = '';
      }
    });
    syncTaskVisibility();
    syncPlotViewVisibility();
    syncInputVisibility();
    refreshParameterMetadata().catch(() => {});

    document.getElementById('addPlotView')?.addEventListener('click', () => {
      plotViews = collectPlotViews();
      plotViews.push(defaultView('timeseries', plotViews.length));
      renderPlotViews();
    });
    document.getElementById('plotViewsList')?.addEventListener('click', (event) => {
      const button = event.target && event.target.closest ? event.target.closest('[data-remove-view]') : null;
      if (!button) return;
      const index = Number(button.getAttribute('data-remove-view'));
      plotViews = collectPlotViews().filter((_view, viewIndex) => viewIndex !== index);
      renderPlotViews();
    });

    document.getElementById('saveBtn').addEventListener('click', async () => {
      try {
        setRunStage('saving');
        setStatus('Saving\u2026');
        await requestHost('save', { path, edits: collectEdits() });
        setRunStage('ready');
        setStatus('Saved', 'ok');
      } catch (error) {
        setRunStage('failed');
        setStatus(String(error && error.message ? error.message : error), 'error');
      }
    });
    document.getElementById('runBtn').addEventListener('click', async () => {
      try {
        setRunStage('running');
        setStatus(runLabel + '\u2026');
        const response = await requestHost('run', { path, edits: collectEdits() });
        const message = response && typeof response.message === 'string'
          ? response.message : runLabel + ' requested';
        setRunStage('completed');
        setStatus(message, 'ok');
      } catch (error) {
        setRunStage('failed');
        setStatus(String(error && error.message ? error.message : error), 'error');
      }
    });
    document.getElementById('rawBtn').addEventListener('click', () => {
      requestHost('toggleRaw', { path }).catch(() => {});
    });
  <\/script>
</body>
</html>`}var SC={availableOutputNames:Sm,availableStateNames:bm,buildHostedResultsPanelState:wm,expandRequestedSeries:fd,toggleSeriesName:jx,flattenScenarioConfig:Nm,setScenarioConfigValue:_d,applyScenarioConfigEdits:h_,buildScenarioConfigDocument:y_,buildHostedResultsPanelTitle:Qx,buildVisualizationModel:u_,buildSimulationRunDocument:xd,defaultThreeDimensionalViewerScript:Al,defaultVisualizationViews:pd,buildHostedResultsDocument:c_,buildVisualizationViewStorageHandlers:t_,handleHostedResultsRequest:l_,isRumocaScenarioPath:d_,loadHostedSimulationRun:Im,loadHostedSimulationRunWithViews:i_,modelScopedViewerScriptRelativePath:vm,nextSimulationRunLocation:_m,normalizeHostedPngExportRequest:r_,normalizeHostedResultsPanelState:Mm,normalizeHostedResultsModelRef:vd,normalizeHostedResultsNotifyPayload:o_,normalizeVisualizationViews:$n,normalizePersistedSimulationRun:Lm,normalizeSimulationPayload:gd,normalizeSimulationRunMetrics:md,normalizeHostedWebmExportRequest:a_,persistHostedSimulationRun:Pm,persistHostedSimulationRunWithViews:n_,preferredViewerScriptPathForModel:Br,hydrateVisualizationViewsForModel:Em,persistVisualizationViewsForModel:Am,readPersistedSimulationRunDocument:Cm,removeStaleVisualizationScriptFiles:Tm,removeVisualizationScriptFilesForViews:yd,sanitizeResultsPathSegment:gm,simulationRunDocumentPath:El,workspaceModelicaSourceMap:ym,workspaceModelicaSourcesJson:Zx,workspaceSourceRootSourceMap:xm,workspaceSourceRootSourcesJson:Jx,writePersistedSimulationRunDocument:Rm};var MC=SC;var Fm=["#4ec9b0","#569cd6","#ce9178","#dcdcaa","#c586c0","#9cdcfe","#d7ba7d","#608b4e","#d16969","#b5cea8"];function wC(){return Um}function gt(i){return typeof i=="string"?i.trim():""}function Xt(i){let e=Number(i);return Number.isFinite(e)?Math.abs(e)>=1e3||Math.abs(e)>0&&Math.abs(e)<.001?e.toExponential(3):e.toFixed(4).replace(/\.?0+$/,""):String(i)}function bd(i,e,t){return!i||typeof getComputedStyle!="function"?t:getComputedStyle(i).getPropertyValue(e).trim()||t}function Bm(i){return{plotBg:bd(i,"--rumoca-results-plot-bg","#151515"),grid:bd(i,"--rumoca-results-plot-grid","#333333"),axis:bd(i,"--rumoca-results-plot-axis","#888888")}}function __(i,e){return bd(i,`--rumoca-results-series-${e%Fm.length+1}`,Fm[e%Fm.length])}function Rl(i){let t=String(i||"rumoca_plot").trim().replace(/[^a-zA-Z0-9._-]+/g,"_").replace(/^_+|_+$/g,"");return t.length>0?t:"rumoca_plot"}var GC=Object.freeze(["loadViews","saveViews","resetViews","savePng","saveWebm","notify"]);function ja(i){let e=gt(i).toLowerCase();return e==="scatter"||e==="3d"?e:"timeseries"}function Cl(i,e){let t=ja(i),n=Number.isFinite(e)?Math.max(0,Math.floor(e)):0,s=n+1;return t==="scatter"?{id:`scatter_${s}`,title:"Scatter",type:"scatter",x:"time",y:["x"],scatterSeries:[{name:"x vs time",x:"time",y:"x"}]}:t==="3d"?{id:`viewer_${s}`,title:"3D View",type:"3d"}:{id:n===0?"states_time":`timeseries_${s}`,title:n===0?"States vs Time":"Time Series",type:"timeseries",x:"time",y:["*states"]}}function b_(i){return String(i||"").split(/[\n,]/).map(gt).filter(Boolean)}function Sd(i){return Ki(i).map(gt).filter(Boolean).join(", ")}function EC(i){let e=[],t=String(i||"").split(/\n/);for(let n of t){let s=gt(n);if(!s)continue;let r=s.split("|").map(gt);r.length<3||!r[1]||!r[2]||e.push({name:r[0]||`${r[2]} vs ${r[1]}`,x:r[1],y:r[2]})}return e}function Om(i){return Ki(i).filter(function(e){return e&&typeof e=="object"}).map(function(e){let t=gt(e.name),n=gt(e.x),s=gt(e.y);return!n||!s?"":`${t||`${s} vs ${n}`} | ${n} | ${s}`}).filter(Boolean).join(`
`)}function Md(i,e){let t=[],n=Array.isArray(e)?e:[];for(let s=0;s<n.length;s+=1){let r=n[s]&&typeof n[s]=="object"?n[s]:Cl("timeseries",s),a=ja(r.type),o=gt(r.title)||Cl(a,s).title,l={id:gt(r.id)||Cl(a,s).id,title:o,type:a,x:a==="3d"?void 0:gt(r.x)||void 0,y:a==="3d"?[]:b_(r.yText!==void 0?r.yText:Sd(r.y)),scatterSeries:a==="scatter"?EC(r.scatterSeriesText):void 0,script:a==="3d"&&gt(r.script)||void 0,scriptPath:a==="3d"&&gt(r.scriptPath)||void 0};t.push(l)}return i.normalizeVisualizationViews(t)}function Tl(i,e){if(!Array.isArray(i)||i.length===0)return null;let t=gt(e);return t.length>0&&i.some(n=>n&&n.id===t)?t:i[0].id}function AC(i){if(!i||typeof i!="object")return[];let e=[],t=Number(i.compileSeconds),n=Number(i.simulateSeconds),s=Number(i.points),r=Number(i.variables);return Number.isFinite(t)&&e.push(`compile ${Xt(t)}s`),Number.isFinite(n)&&e.push(`simulate ${Xt(n)}s`),Number.isFinite(s)&&e.push(`points ${Math.max(0,Math.floor(s))}`),Number.isFinite(r)&&e.push(`vars ${Math.max(0,Math.floor(r))}`),e}function S_(i){return i&&typeof i=="object"?gt(i.path)||gt(i.runPath):""}function TC(i){let e=Array.isArray(i?.names)?i.names.map(String):[],t=Number.isFinite(i?.nStates)?Math.max(0,i.nStates):0;return e.slice(0,t)}function RC(i){let e=Array.isArray(i?.names)?i.names.map(String):[],t=Number.isFinite(i?.nStates)?Math.max(0,i.nStates):0;return e.slice(t)}function CC(i){return Array.isArray(i?.names)?i.names.map(String):[]}function PC(i,e){if(!e||typeof e!="object")return"";if(e.type==="3d")return gt(e.title)||"3D view";if(e.type==="scatter")return Ki(e.scatterSeries).map(r=>gt(r?.name)||gt(r?.y)).filter(Boolean).slice(0,4).join(", ");let t=Ki(e.y).map(gt).filter(Boolean),n=[];for(let s of t)s==="*states"?n.push(...TC(i)):s==="*outputs"?n.push(...RC(i)):s==="*all"?n.push(...CC(i)):n.push(s);return n.slice(0,6).join(", ")}function IC(i,e){let t=document.createElement("div");t.className="rumoca-results-run-summary";let n=document.createElement("div");n.className="rumoca-results-run-summary-title";let s=document.createElement("div");return s.className="rumoca-results-run-summary-details",t.appendChild(n),t.appendChild(s),{element:t,update(r,a,o,l){if(!r){t.hidden=!0;return}t.hidden=!1;let c=S_(e),u=PC(r,a),d=AC(o);n.textContent=`Simulation completed: ${l||"model"}`,s.textContent=[c?`Saved to ${c}`:"",u?`Plotted ${u}`:"",d.length?d.join(", "):""].filter(Boolean).join(" \xB7 ")}}}function LC(i){let e=i&&typeof i=="object"?i:{};return{loadViews:typeof e.loadViews=="function"?e.loadViews:async function(){},saveViews:typeof e.saveViews=="function"?e.saveViews:async function(t,n){return n},resetViews:typeof e.resetViews=="function"?e.resetViews:async function(){},persistState:typeof e.persistState=="function"?e.persistState:function(){},notify:typeof e.notify=="function"?e.notify:function(){},savePng:typeof e.savePng=="function"?e.savePng:null,saveWebm:typeof e.saveWebm=="function"?e.saveWebm:null}}function Ki(i){return Array.isArray(i)?i:[]}function M_(i,e){i.innerHTML="";for(let t of Ki(e)){let n=document.createElement("span");n.style.display="inline-flex",n.style.alignItems="center",n.style.gap="6px",n.style.marginRight="10px";let s=document.createElement("span");s.className="rumoca-results-swatch",s.style.background=t.color;let r=document.createElement("span");r.textContent=t.name,n.appendChild(s),n.appendChild(r),i.appendChild(n)}}function zm(i,e,t,n={}){let s=[],r=e&&e.simDetails?e.simDetails:{},a=r.actual||{},o=r.requested||{},l=Number(i&&i.compileSeconds),c=Number(i&&i.simulateSeconds),u=Number(i&&i.points),d=Number(i&&i.variables),h=i&&typeof i=="object"&&i.compilePhaseSeconds?i.compilePhaseSeconds:null,f=gt(n.modelName),m=gt(n.resultPath);if((f||m)&&(s.push("Result"),f&&s.push(`  model: ${f}`),m&&s.push(`  output: ${m}`),s.push("")),t&&t.type==="scatter"?s.push(`Scatter series: ${t.y.length}`):t&&t.type==="3d"?s.push(`3D points: ${t.points.length}`):t&&t.y&&s.push(`Series: ${t.y.length}`),(Number.isFinite(l)||Number.isFinite(c)||Number.isFinite(u)||Number.isFinite(d))&&(s.length>0&&s.push(""),s.push("Run"),Number.isFinite(l)&&s.push(`  compile: ${Xt(l)}s`),Number.isFinite(c)&&s.push(`  simulate: ${Xt(c)}s`),Number.isFinite(u)&&s.push(`  points: ${Math.max(0,Math.floor(u))}`),Number.isFinite(d)&&s.push(`  vars: ${Math.max(0,Math.floor(d))}`)),h&&typeof h=="object"){let v=Number(h.instantiate),g=Number(h.typecheck),p=Number(h.flatten),x=Number(h.todae);(Number.isFinite(v)||Number.isFinite(g)||Number.isFinite(p)||Number.isFinite(x))&&(s.push(""),s.push("Compile Phases"),Number.isFinite(v)&&s.push(`  instantiate: ${Xt(v)}s`),Number.isFinite(g)&&s.push(`  typecheck: ${Xt(g)}s`),Number.isFinite(p)&&s.push(`  flatten: ${Xt(p)}s`),Number.isFinite(x)&&s.push(`  todae: ${Xt(x)}s`))}return s.push(""),s.push("Actual"),a.t_start!==void 0&&s.push(`  t_start: ${Xt(a.t_start)}`),a.t_end!==void 0&&s.push(`  t_end: ${Xt(a.t_end)}`),s.push(""),s.push("Requested"),o.solver!==void 0&&s.push(`  solver: ${o.solver}`),o.t_start!==void 0&&s.push(`  t_start: ${Xt(o.t_start)}`),o.t_end!==void 0&&s.push(`  t_end: ${Xt(o.t_end)}`),o.dt!==void 0&&s.push(`  dt: ${Xt(o.dt)}`),s.join(`
`)}function Vm(i,e){if(typeof document>"u")return;let t=document.createElement("a");t.href=i,t.download=e,document.body.appendChild(t),t.click(),document.body.removeChild(t)}function Hm(i){if(!(!i||typeof i.toDataURL!="function"))return i.toDataURL("image/png")}function Gm(i){let e=document.createElement("div");e.className="rumoca-results-details";let t=document.createElement("div");t.className="rumoca-results-details-card";let n=document.createElement("pre"),s=document.createElement("button");return s.textContent="Close",t.appendChild(n),t.appendChild(s),e.appendChild(t),s.addEventListener("click",function(){e.classList.remove("open")}),e.addEventListener("click",function(r){r.target===e&&e.classList.remove("open")}),{element:e,open:function(){n.textContent=i(),e.classList.add("open")}}}function NC(){let i=document.createElement("div");return i.className="rumoca-results-status",{element:i,show:function(e,t){let n=gt(e);i.className=`rumoca-results-status${n?" open":""}${t?` ${t}`:""}`,i.textContent=n},clear:function(){i.className="rumoca-results-status",i.textContent=""}}}function km(i){if(Array.isArray(i))return i;if(i&&typeof i=="object"&&Array.isArray(i.views))return i.views}function DC(i){let e=i.shared,t=i.bridge,n=i.modelRef,s=typeof i.getPayload=="function"?i.getPayload:function(){return null},r=document.createElement("div");r.className="rumoca-results-settings";let a=document.createElement("div");a.className="rumoca-results-settings-card",r.appendChild(a);let o=document.createElement("div");o.className="rumoca-results-settings-header";let l=document.createElement("div");l.className="rumoca-results-settings-title",l.textContent="Visualization Settings";let c=document.createElement("div");c.className="rumoca-results-settings-status",o.appendChild(l),o.appendChild(c),a.appendChild(o);let u=document.createElement("div");u.className="rumoca-results-settings-body",a.appendChild(u);let d=document.createElement("div");d.className="rumoca-results-settings-sidebar";let h=document.createElement("div");h.className="rumoca-results-settings-list";let f=document.createElement("div");f.className="rumoca-results-settings-actions";let m=document.createElement("button");m.textContent="Add Time";let v=document.createElement("button");v.textContent="Add Scatter";let g=document.createElement("button");g.textContent="Add 3D";let p=document.createElement("button");p.textContent="Remove",f.appendChild(m),f.appendChild(v),f.appendChild(g),f.appendChild(p),d.appendChild(h),d.appendChild(f),u.appendChild(d);let x=document.createElement("div");x.className="rumoca-results-settings-editor",u.appendChild(x);function y(k,O){let Z=document.createElement("label");Z.className="rumoca-results-field";let $=document.createElement("span");return $.className="rumoca-results-field-label",$.textContent=k,Z.appendChild($),Z.appendChild(O),Z}function _(k,O){let Z=document.createElement("div");Z.className="rumoca-results-field";let $=document.createElement("span");return $.className="rumoca-results-field-label",$.textContent=k,Z.appendChild($),Z.appendChild(O),Z}let L=document.createElement("input"),M=document.createElement("select");for(let k of["timeseries","scatter","3d"]){let O=document.createElement("option");O.value=k,O.textContent=k,M.appendChild(O)}let R=document.createElement("input"),P=document.createElement("textarea");P.rows=3;let w=document.createElement("div");w.className="rumoca-results-field-hint",w.textContent="One channel per line or comma separated. Wildcards: *states, *outputs, *all.";let S=document.createElement("textarea");S.rows=4;let D=document.createElement("div");D.className="rumoca-results-field-hint",D.textContent="One line per series: name | x | y";let B=document.createElement("input"),C=y("Title",L),V=y("Type",M),q=y("X",R),ne=y("Y",P);ne.appendChild(w);let ee=document.createElement("div");ee.className="rumoca-results-picker";let K=_("Channels",ee),re=y("Scatter Series",S);re.appendChild(D);let oe=y("3D Script Path",B);x.appendChild(C),x.appendChild(V),x.appendChild(q),x.appendChild(ne),x.appendChild(K),x.appendChild(re),x.appendChild(oe);let Se=document.createElement("div");Se.className="rumoca-results-settings-actions";let Re=document.createElement("button");Re.textContent="Reset";let be=document.createElement("button");be.textContent="Cancel";let te=document.createElement("button");te.textContent="Save",te.className="primary",Se.appendChild(Re),Se.appendChild(be),Se.appendChild(te),a.appendChild(Se);let ue=[],pe=-1;function ce(k,O){let Z=gt(k);c.className=`rumoca-results-settings-status${Z?" open":""}${O?` ${O}`:""}`,c.textContent=Z}function Ve(){if(pe<0||pe>=ue.length)return;let k=ue[pe];k.title=L.value,k.type=M.value,k.x=R.value,k.yText=P.value,k.scatterSeriesText=S.value,k.scriptPath=B.value}function Je(k){let O=ja(k),Z=O!=="scatter"&&O!=="3d";q.style.display=Z?"grid":"none",ne.style.display=Z?"grid":"none",re.style.display=O==="scatter"?"grid":"none",oe.style.display=O==="3d"?"grid":"none",me(Z)}function H(){return new Set(b_(P.value))}function et(k,O){P.value=e.toggleSeriesName(P.value,k,O),Ve()}function ae(k,O,Z){let $=document.createElement("div");$.className="rumoca-results-picker-group";let ie=document.createElement("div");ie.className="rumoca-results-picker-heading",ie.textContent=`${k} (${O.length})`,$.appendChild(ie);let ye=document.createElement("div");if(ye.className="rumoca-results-picker-list",O.length===0){let xe=document.createElement("div");xe.className="rumoca-results-picker-empty",xe.textContent=`No ${k.toLowerCase()} available`,ye.appendChild(xe)}for(let xe of O){let je=document.createElement("label");je.className="rumoca-results-picker-item";let we=document.createElement("input");we.type="checkbox",we.checked=Z.has(xe),we.addEventListener("change",function(){et(xe,we.checked)});let ke=document.createElement("span");ke.textContent=xe,je.appendChild(we),je.appendChild(ke),ye.appendChild(je)}return $.appendChild(ye),$}function me(k){let O=s(),Z=e.availableStateNames(O),$=e.availableOutputNames(O);if(ee.innerHTML="",!k||Z.length+$.length===0){K.style.display="none";return}K.style.display="grid";let ie=H();ee.appendChild(ae("States",Z,ie)),ee.appendChild(ae("Outputs",$,ie))}function se(){h.innerHTML="";for(let k=0;k<ue.length;k+=1){let O=ue[k],Z=document.createElement("button");Z.className=`rumoca-results-settings-item${k===pe?" active":""}`,Z.textContent=`${gt(O.title)||O.id} [${ja(O.type)}]`,Z.addEventListener("click",function(){Ve(),pe=k,se(),Ae()}),h.appendChild(Z)}}function Ae(){if(pe<0||pe>=ue.length){L.value="",M.value="timeseries",R.value="",P.value="",S.value="",B.value="",Je("timeseries");return}let k=ue[pe];L.value=gt(k.title),M.value=ja(k.type),R.value=gt(k.x),P.value=k.yText!==void 0?String(k.yText):Sd(k.y),S.value=k.scatterSeriesText!==void 0?String(k.scatterSeriesText):Om(k.scatterSeries),B.value=gt(k.scriptPath),Je(k.type)}function fe(k){if(ue=e.normalizeVisualizationViews(k).map(function(Z,$){let ie=Cl(Z.type,$);return{id:Z.id||ie.id,title:Z.title||ie.title,type:Z.type||ie.type,x:Z.type==="3d"?"":Z.x||ie.x||"",y:Z.type==="3d"?[]:Ki(Z.y),yText:Z.type==="3d"?"":Sd(Z.y),scatterSeries:Ki(Z.scatterSeries),scatterSeriesText:Om(Z.scatterSeries),script:gt(Z.script),scriptPath:gt(Z.scriptPath)}}),ue.length===0){fe(e.defaultVisualizationViews());return}(pe<0||pe>=ue.length)&&(pe=0),se(),Ae()}function Ce(k){let O=Cl(k,ue.length);return{id:O.id,title:O.title,type:O.type,x:O.type==="3d"?"":O.x||"",y:O.type==="3d"?[]:Ki(O.y),yText:O.type==="3d"?"":Sd(O.y),scatterSeries:Ki(O.scatterSeries),scatterSeriesText:Om(O.scatterSeries),script:gt(O.script),scriptPath:gt(O.scriptPath)}}function qe(){r.classList.remove("open"),ce("","")}async function N(k){let O=k;if(t.loadViews)try{let Z=await t.loadViews(n),$=km(Z);$&&(O=$)}catch(Z){ce(String(Z&&Z.message?Z.message:Z),"error")}fe(O),r.classList.add("open")}function A(){return Ve(),Md(e,ue)}return m.addEventListener("click",function(){Ve(),ue.push(Ce("timeseries")),pe=ue.length-1,se(),Ae()}),v.addEventListener("click",function(){Ve(),ue.push(Ce("scatter")),pe=ue.length-1,se(),Ae()}),g.addEventListener("click",function(){Ve(),ue.push(Ce("3d")),pe=ue.length-1,se(),Ae()}),p.addEventListener("click",function(){pe<0||pe>=ue.length||(ue.splice(pe,1),pe>=ue.length&&(pe=ue.length-1),ue.length===0&&(ue.push(Ce("timeseries")),pe=0),se(),Ae())}),M.addEventListener("change",function(){Je(M.value)}),P.addEventListener("input",function(){Ve();let k=ja(M.value);me(k!=="scatter"&&k!=="3d")}),be.addEventListener("click",qe),r.addEventListener("click",function(k){k.target===r&&qe()}),Re.addEventListener("click",async function(){try{let k=e.defaultVisualizationViews();if(t.resetViews){let O=await t.resetViews(n),Z=km(O);Z&&(k=Z)}fe(k),ce("Views reset.","ok"),t.notify("Views reset.")}catch(k){ce(String(k&&k.message?k.message:k),"error")}}),te.addEventListener("click",async function(){try{let k=A(),O=k;if(t.saveViews){let Z=await t.saveViews(n,k),$=km(Z);$&&(O=$)}typeof i.onSave=="function"&&i.onSave(O),t.notify("Views saved."),qe()}catch(k){ce(String(k&&k.message?k.message:k),"error")}}),{element:r,open:N,close:qe}}function UC(i){let e=i.viewModel,t=i.bridge,n=i.modelName,s=i.metrics,r=i.payload,a=document.createElement("section");a.className="rumoca-results-view";let o=document.createElement("div");o.className="rumoca-results-canvas-wrap";let l=document.createElement("div");l.style.position="absolute",l.style.inset="0";let c=document.createElement("div");c.className="rumoca-results-overlay",c.textContent="Hover plot for values";let u=document.createElement("div");u.className="rumoca-results-legend";let d=document.createElement("div");d.className="rumoca-results-error",d.style.display="none",o.appendChild(l),o.appendChild(c),o.appendChild(u),o.appendChild(d),a.appendChild(o);let h=document.createElement("div");h.className="rumoca-results-controls";let f=document.createElement("button");f.textContent="Run Details";let m=document.createElement("button");m.textContent="Save PNG",h.appendChild(f),h.appendChild(m),a.appendChild(h);let v=Gm(function(){return zm(s,r,e,i.context)});a.appendChild(v.element),f.addEventListener("click",function(){v.open()});let g=null;function p(){if(g&&(g.destroy(),g=null),!Mn||!e.x||e.y.length===0){d.style.display="flex",d.textContent="uPlot unavailable or no time-series data.",l.innerHTML="",u.innerHTML="";return}d.style.display="none";let x=Bm(a),y=[e.x.values],_=[{}],L=[];for(let M=0;M<e.y.length;M+=1){let R=e.y[M],P=R.color||__(a,M);y.push(R.values),_.push({label:R.name,stroke:P,width:2}),L.push({name:R.name,color:P})}M_(u,L),g=new Mn({width:Math.max(320,l.clientWidth||640),height:Math.max(220,l.clientHeight||320),padding:[8,8,28,8],scales:{x:{time:!1}},axes:[{stroke:x.axis,grid:{stroke:x.grid,width:1},label:e.x.name,labelGap:2,size:36},{stroke:x.axis,grid:{stroke:x.grid,width:1}}],series:_,cursor:{drag:{x:!0,y:!0}},hooks:{setCursor:[function(M){let R=M.cursor.idx;if(R==null||R<0||R>=e.x.values.length){c.textContent="Hover plot for values";return}let P=[`${e.x.name}=${Xt(e.x.values[R])}`];for(let w of e.y)P.push(`${w.name}=${Xt(w.values[R])}`);c.textContent=P.join(" | ")}]},legend:{show:!1}},y,l)}return m.addEventListener("click",function(){if(!g||!g.root)return;let x=g.root.querySelector("canvas"),y=Hm(x);if(!y)return;let _=`${Rl(n)}_plot.png`;if(t.savePng){t.savePng({dataUrl:y,defaultName:_,view:e});return}Vm(y,_)}),a.__dispose=function(){g&&(g.destroy(),g=null)},a.__resize=p,p(),a}function x_(i){let e=Number.POSITIVE_INFINITY,t=Number.NEGATIVE_INFINITY;for(let n of Ki(i)){let s=Number(n);Number.isFinite(s)&&(e=Math.min(e,s),t=Math.max(t,s))}return!Number.isFinite(e)||!Number.isFinite(t)?{min:-1,max:1}:e===t?{min:e-1,max:t+1}:{min:e,max:t}}function FC(i){let e=i.viewModel,t=i.bridge,n=i.modelName,s=i.metrics,r=i.payload,a=document.createElement("section");a.className="rumoca-results-view";let o=document.createElement("div");o.className="rumoca-results-canvas-wrap";let l=document.createElement("canvas");l.className="rumoca-results-canvas";let c=document.createElement("div");c.className="rumoca-results-overlay";let u=document.createElement("div");u.className="rumoca-results-legend";let d=document.createElement("div");d.className="rumoca-results-error",d.style.display="none",o.appendChild(l),o.appendChild(c),o.appendChild(u),o.appendChild(d),a.appendChild(o);let h=document.createElement("div");h.className="rumoca-results-controls";let f=document.createElement("button");f.textContent="Run Details";let m=document.createElement("button");m.textContent="Save PNG",h.appendChild(f),h.appendChild(m),a.appendChild(h);let v=Gm(function(){return zm(s,r,e,i.context)});a.appendChild(v.element),f.addEventListener("click",function(){v.open()});function g(){let p=l.getContext("2d");if(!p||!e.x||e.y.length===0){d.style.display="flex",d.textContent="No scatter data configured.",u.innerHTML="";return}d.style.display="none";let x=Math.max(320,o.clientWidth||640),y=Math.max(220,o.clientHeight||320);l.width=x,l.height=y;let _=e.x.values,L=e.y.flatMap(function(C){return C.values}),M=x_(_),R=x_(L),P=36,w=Bm(a);p.fillStyle=w.plotBg,p.fillRect(0,0,x,y),p.strokeStyle=w.axis,p.beginPath(),p.moveTo(P,y-P),p.lineTo(x-10,y-P),p.moveTo(P,y-P),p.lineTo(P,10),p.stroke();let S=function(C){return P+(C-M.min)/(M.max-M.min)*(x-P-16)},D=function(C){return y-P-(C-R.min)/(R.max-R.min)*(y-P-16)},B=[];for(let C=0;C<e.y.length;C+=1){let V=e.y[C],q=V.color||__(a,C);B.push({name:V.name,color:q}),p.fillStyle=q;let ne=Math.min(e.x.values.length,V.values.length);for(let ee=0;ee<ne;ee+=1){let K=S(Number(e.x.values[ee])),re=D(Number(V.values[ee]));p.beginPath(),p.arc(K,re,2.5,0,Math.PI*2),p.fill()}}M_(u,B),c.textContent=`${e.y.length} scatter series`}return m.addEventListener("click",function(){let p=Hm(l);if(!p)return;let x=`${Rl(n)}_scatter.png`;if(t.savePng){t.savePng({dataUrl:p,defaultName:x,view:e});return}Vm(p,x)}),a.__dispose=function(){},a.__resize=g,g(),a}function OC(i){let e=i.viewModel,t=i.bridge,n=i.modelName,s=i.metrics,r=i.payload,a=document.createElement("section");a.className="rumoca-results-view";let o=document.createElement("div");o.className="rumoca-results-viewer-wrap";let l=document.createElement("div");l.className="rumoca-results-viewer-host";let c=document.createElement("canvas");c.className="rumoca-results-canvas",l.appendChild(c);let u=document.createElement("div");u.className="rumoca-results-viewer-camera-info",u.textContent="camera: unavailable",l.appendChild(u);let d=document.createElement("div");d.className="rumoca-results-viewer-error",d.style.display="none",l.appendChild(d);let h=document.createElement("div");h.className="rumoca-results-viewer-inspector hidden";let f=document.createElement("div");f.className="title",f.textContent="Scene Objects";let m=document.createElement("div");m.className="actions";let v=document.createElement("button");v.textContent="Focus";let g=document.createElement("label"),p=document.createElement("input");p.type="checkbox",p.checked=!1;let x=document.createElement("span");x.textContent="Follow",g.appendChild(p),g.appendChild(x),m.appendChild(v),m.appendChild(g);let y=document.createElement("div");y.className="objects",h.appendChild(f),h.appendChild(m),h.appendChild(y),l.appendChild(h);let _=document.createElement("div");_.className="rumoca-results-viewer-controls";let L=document.createElement("button");L.textContent="Run Details";let M=document.createElement("button");M.textContent="Objects";let R=document.createElement("div");R.className="transport";let P=document.createElement("button");P.textContent="|<",P.title="Jump to start";let w=document.createElement("button");w.textContent="<<",w.title="Rewind";let S=document.createElement("button");S.innerHTML="&#9654;",S.title="Play / Pause";let D=document.createElement("button");D.textContent=">>",D.title="Fast forward";let B=document.createElement("button");B.textContent=">|",B.title="Jump to end",R.appendChild(P),R.appendChild(w),R.appendChild(S),R.appendChild(D),R.appendChild(B);let C=document.createElement("input");C.type="range",C.min="0";let V=r&&r.allData&&r.allData[0]?r.allData[0].length:1;C.max=String(Math.max(V-1,0)),C.step="1",C.value="0";let q=document.createElement("div");q.className="time",q.textContent="t=0";let ne=document.createElement("button");ne.textContent="Save PNG";let ee=document.createElement("button");ee.textContent="Save WebM",ee.title="Export viewer animation as WebM",_.appendChild(L),_.appendChild(M),_.appendChild(R),_.appendChild(C),_.appendChild(q),_.appendChild(ne),_.appendChild(ee),o.appendChild(l),o.appendChild(_),a.appendChild(o);let K=Gm(function(){return zm(s,r,e,i.context)});a.appendChild(K.element),L.addEventListener("click",function(){K.open()});let re=null,oe=!1,Se=0,Re=[],be="",te=!1,ue=!1,pe=0,ce={x:0,y:.5,z:0};function Ve(Q){d.textContent=Q,d.style.display=""}function Je(){d.textContent="",d.style.display="none"}function H(){let Q=l.getBoundingClientRect();c.width=Math.max(1,Math.floor(Q.width)),c.height=Math.max(1,Math.floor(Q.height))}function et(){if(re||(re=c.getContext("2d")),!re)return;let Q=Bm(a);re.fillStyle=Q.plotBg,re.fillRect(0,0,c.width,c.height),re.strokeStyle=Q.grid,re.beginPath(),re.moveTo(0,c.height*.8),re.lineTo(c.width,c.height*.8),re.stroke()}let ae=r&&Array.isArray(r.names)?r.names:[],me=r&&Array.isArray(r.allData)?r.allData:[],se=me.length>0?me[0]:[];function Ae(Q){let he=ae.indexOf(Q);if(!(he<0))return me[he+1]}let fe={},Ce=fm,qe=null,N=null,A=null,k=!1,O={canvas:c,context2d:re,container:l,THREE:Ce,names:ae,times:se,sampleIndex:0,state:{},getViewportSize:function(){let Q=l.getBoundingClientRect();return{width:Math.max(1,Math.floor(Q.width)),height:Math.max(1,Math.floor(Q.height))}},getValue:function(Q,he){let Oe=Ae(Q);if(!Oe)return;let ut=Number.isFinite(he)?Math.max(0,Math.min(Oe.length-1,Math.floor(he))):O.sampleIndex;return Oe[ut]},getTime:function(Q){let he=Number.isFinite(Q)?Math.max(0,Math.min(se.length-1,Math.floor(Q))):O.sampleIndex;return se[he]},enableDefaultViewerRuntime:function(Q){k=!0;let he=Q&&typeof Q=="object"?Q:{};typeof he.selectedObjectName=="string"&&he.selectedObjectName.trim().length>0&&(be=he.selectedObjectName.trim()),typeof he.followSelected=="boolean"&&(te=he.followSelected,p.checked=te)},refreshDefaultViewerRuntime:function(){oe?G(O.sampleIndex||0):(we(!1),Ue())}};function Z(Q){ue=!!Q,h.classList.toggle("hidden",!ue)}function $(){let Q=O.state&&O.state.controls,he=Q&&Q.target;return he&&Number.isFinite(Number(he.x))&&Number.isFinite(Number(he.y))&&Number.isFinite(Number(he.z))?he:ce}function ie(Q,he,Oe){let ut=O.state&&O.state.controls;if(ut&&ut.target&&typeof ut.target.set=="function"){ut.target.set(Number(Q)||0,Number(he)||0,Number(Oe)||0),typeof ut.update=="function"&&ut.update();return}ce.x=Number(Q)||0,ce.y=Number(he)||0,ce.z=Number(Oe)||0;let T=O.state&&O.state.camera;T&&typeof T.lookAt=="function"&&T.lookAt(ce.x,ce.y,ce.z)}function ye(Q){let he=Q&&typeof Q.name=="string"?Q.name.trim():"";return he.length>0?he:String(Q&&Q.type||"Object")+"#"+String(Q&&Q.id||"?")}function xe(Q){let he=Q&&typeof Q.name=="string"?Q.name.trim():"",Oe=String(Q&&Q.type||"Object");return he.length>0?he+" ("+Oe+")":Oe+" #"+String(Q&&Q.id||"?")}function je(){if(y.innerHTML="",Re.length===0){let Q=document.createElement("div");Q.className="object-row",Q.style.cursor="default",Q.style.opacity="0.7",Q.textContent="No scene objects",y.appendChild(Q);return}for(let Q of Re){let he=document.createElement("div");he.className="object-row"+(Q.id===be?" active":"");let Oe=document.createElement("span");Oe.className="swatch";let ut=document.createElement("span");ut.textContent=Q.label,he.appendChild(Oe),he.appendChild(ut),he.addEventListener("click",function(){be=Q.id,je()}),y.appendChild(he)}}function we(Q){let he=O.state&&O.state.scene;if(!he||typeof he.traverse!="function"){Re=[],je();return}let Oe=Date.now();if(!Q&&Oe-pe<250)return;pe=Oe;let ut=[];he.traverse(function(T){!T||T===he||T.visible===!1||ut.push({id:ye(T),label:xe(T),obj:T})}),ut.sort(function(T,W){return String(T.label).localeCompare(String(W.label))}),Re=ut,!be&&Re.length>0&&(be=Re[0].id),be&&(Re.some(function(W){return W.id===be})||(be=Re.length>0?Re[0].id:"")),je()}function ke(){if(!be)return;let Q=Re.find(function(he){return he.id===be});return Q?Q.obj:void 0}function rt(){if(!Ce)return;let Q=ke(),he=O.state&&O.state.camera;if(!(!Q||!he))try{let Oe=new Ce.Vector3,ut=new Ce.Box3().setFromObject(Q);if(ut.isEmpty()?Q.position?Oe.set(Number(Q.position.x)||0,Number(Q.position.y)||0,Number(Q.position.z)||0):Oe.set(0,0,0):ut.getCenter(Oe),ie(Oe.x,Oe.y,Oe.z),he.position&&Number.isFinite(Number(he.position.z))){let T=he.position.clone().sub(Oe);T.lengthSq()<1e-8&&T.set(2.5,1.7,2.8),T.normalize().multiplyScalar(3),he.position.copy(Oe.clone().add(T))}typeof he.lookAt=="function"&&he.lookAt(Oe),typeof O.state.renderNow=="function"&&O.state.renderNow()}catch(Oe){Ve("Focus failed: "+String(Oe))}}function $e(){if(!te||!Ce)return;let Q=ke();if(Q)try{let he=new Ce.Vector3;if(typeof Q.getWorldPosition=="function")Q.getWorldPosition(he);else if(Q.position)he.set(Number(Q.position.x)||0,Number(Q.position.y)||0,Number(Q.position.z)||0);else return;ie(he.x,he.y,he.z)}catch{}}function Ue(){let Q=O.state&&O.state.camera;if(!Q||!Q.position||!Q.rotation){u.textContent="camera: unavailable";return}let he=function(ut){return Number(ut)*(180/Math.PI)},Oe=$();u.textContent=["pos "+Xt(Number(Q.position.x))+", "+Xt(Number(Q.position.y))+", "+Xt(Number(Q.position.z)),"deg "+Xt(he(Q.rotation.x))+", "+Xt(he(Q.rotation.y))+", "+Xt(he(Q.rotation.z)),"tgt "+Xt(Oe.x)+", "+Xt(Oe.y)+", "+Xt(Oe.z)].join(`
`)}function Qe(Q){if(!Ce||!Q||!Q.position)return null;let he=new Ce.Vector3(0,.5,0),Oe=Q.position.distanceTo(he);(!Number.isFinite(Oe)||Oe<.2)&&(Oe=4);let ut=Math.atan2(Q.position.x-he.x,Q.position.z-he.z),T=Math.acos(Math.max(-1,Math.min(1,(Q.position.y-he.y)/Oe))),W=!1,j=!1,Y=0,X=0;function Me(){let Be=Math.sin(T);Q.position.x=he.x+Oe*Be*Math.sin(ut),Q.position.y=he.y+Oe*Math.cos(T),Q.position.z=he.z+Oe*Be*Math.cos(ut),Q.lookAt(he)}function Pe(Be){if(Be.isPrimary){W=!0,j=Be.button===1||Be.button===2,Y=Be.clientX,X=Be.clientY;try{c.setPointerCapture(Be.pointerId)}catch{}Be.preventDefault()}}function Te(Be){if(!W)return;let st=Be.clientX-Y,Ft=Be.clientY-X;if(Y=Be.clientX,X=Be.clientY,j){let $t=Math.max(.002,Oe*.0014),Zt=new Ce.Vector3;Q.getWorldDirection(Zt);let kn=new Ce.Vector3().crossVectors(Zt,Q.up).normalize(),vt=Q.up.clone().normalize();he.addScaledVector(kn,-st*$t),he.addScaledVector(vt,Ft*$t)}else ut-=st*.006,T-=Ft*.006,T=Math.max(.04,Math.min(Math.PI-.04,T));Me()}function He(Be){W=!1;try{c.releasePointerCapture(Be.pointerId)}catch{}}function Ze(Be){let st=Be.deltaY>0?1.08:.92;Oe=Math.max(.15,Math.min(300,Oe*st)),Me(),Be.preventDefault()}return c.addEventListener("pointerdown",Pe),c.addEventListener("pointermove",Te),c.addEventListener("pointerup",He),c.addEventListener("pointerleave",He),c.addEventListener("wheel",Ze,{passive:!1}),Me(),{target:he,update:Me,dispose:function(){c.removeEventListener("pointerdown",Pe),c.removeEventListener("pointermove",Te),c.removeEventListener("pointerup",He),c.removeEventListener("pointerleave",He),c.removeEventListener("wheel",Ze)}}}function tt(){if(!Ce)return!1;let Q=O.state.scene;(!Q||Q.isScene!==!0)&&(Q=new Ce.Scene,Q.background=new Ce.Color(1052688),O.state.scene=Q);let he=O.state.camera;(!he||he.isPerspectiveCamera!==!0)&&(he=new Ce.PerspectiveCamera(52,1,.01,2e3),he.position.set(3,2.1,3.2),O.state.camera=he);let Oe=O.state.renderer;return(!Oe||typeof Oe.render!="function")&&(Oe=new Ce.WebGLRenderer({canvas:c,antialias:!0,alpha:!1}),Oe.setPixelRatio(Math.max(1,Math.min(2,globalThis.devicePixelRatio||1))),O.state.renderer=Oe),O.state.controls||(O.state.controls=Qe(he)),O.state.renderNow=function(){Oe.render(Q,he)},O.state.resize=function(){let ut=O.getViewportSize(),T=Math.max(1,ut.width||1),W=Math.max(1,ut.height||1);Oe.setSize(T,W,!1),he.aspect=T/W,he.updateProjectionMatrix(),O.state.controls&&typeof O.state.controls.update=="function"&&O.state.controls.update(),Oe.render(Q,he)},O.state.resize(),!0}function Ct(){if(H(),oe&&A)try{A(O)}catch(Q){Ve(`3D resize error:
`+String(Q)),A=null}else if(O.state&&typeof O.state.resize=="function")try{O.state.resize()}catch{}Ue()}if(typeof e.script=="string"&&e.script.trim().length>0)try{new Function("ctx","api",e.script+`
return ctx;`)(fe,O),qe=typeof fe.onInit=="function"?fe.onInit:null,N=typeof fe.onFrame=="function"?fe.onFrame:null,A=typeof fe.onResize=="function"?fe.onResize:null}catch(Q){Ve(`3D script compile error:
`+String(Q))}function at(Q){if(et(),!re)return;let he=Ae("x"),Oe=he&&Q<he.length?he[Q]:0,ut=c.height*.8-(Number.isFinite(Oe)?Oe:0)*16;re.fillStyle="#3cb4ff",re.beginPath(),re.arc(c.width*.5,ut,14,0,Math.PI*2),re.fill(),O.context2d=re}function G(Q){if(!tt()){at(Q);return}$e(),O.state.controls&&typeof O.state.controls.update=="function"&&O.state.controls.update(),typeof O.state.renderNow=="function"&&O.state.renderNow()}async function ge(){tt(),Je();try{qe&&await Promise.resolve(qe(O))}catch(Q){Ve(`3D init error:
`+String(Q))}if(oe=!0,we(!0),A)try{A(O)}catch(Q){Ve(`3D resize error:
`+String(Q)),A=null}else O.state&&typeof O.state.resize=="function"&&O.state.resize();le(Se)}function le(Q){let he=Math.max(0,Math.min(Math.max(se.length-1,0),Q|0));Se=he,O.sampleIndex=he,C.value=String(he);let Oe=he<se.length?se[he]:0;if(q.textContent="t="+Xt(Oe),!!oe){if(N)try{N(O)}catch(ut){Ve(`3D frame error:
`+String(ut)),N=null}(k||!N)&&G(he),$e(),we(!1),Ue()}}function Ie(){oe&&le(O.sampleIndex||Number(C.value)||0)}M.addEventListener("click",function(){Z(!ue)}),v.addEventListener("click",function(){rt()}),p.addEventListener("change",function(){te=p.checked}),c.addEventListener("pointerdown",Ie),c.addEventListener("pointermove",Ie),c.addEventListener("wheel",Ie,{passive:!0}),H();let Ne=!1,ot=1,_t=1,At=0,nn=0,xt=0,In=0,Pt=!1;function Vt(){S.innerHTML=Ne?"&#10074;&#10074;":"&#9654;",w.classList.toggle("active",Ne&&ot<0),D.classList.toggle("active",Ne&&ot>0&&_t>1),ee.disabled=Pt,ee.textContent=Pt?"Exporting\u2026":"Save WebM"}function vn(Q){let he=Number(C.max)||0;return Math.max(0,Math.min(he,Q|0))}function yn(Q){let he=Number(se[Q]);return Number.isFinite(he)?he:Q}function Kn(Q){let he=Math.max(0,se.length-1);if(he===0)return 0;let Oe=yn(0),ut=yn(he);if(!(Number.isFinite(Oe)&&Number.isFinite(ut)&&ut>Oe))return vn(Math.round(Q));if(Q<=Oe)return 0;if(Q>=ut)return he;let T=0,W=he;for(;T<W;){let Pe=T+W>>1;yn(Pe)<Q?T=Pe+1:W=Pe}let j=T,Y=Math.max(0,j-1),X=yn(Y),Me=yn(j);return Math.abs(Q-X)<=Math.abs(Me-Q)?Y:j}function Bt(){Ne=!1,At&&(cancelAnimationFrame(At),At=0),Vt()}function Ln(Q,he){if(Ne)return;Ne=!0,ot=Q<0?-1:1,_t=Math.max(1,Number(he)||1),xt=yn(vn(O.sampleIndex||Number(C.value)||0)),nn=performance.now(),In=vn(O.sampleIndex||Number(C.value)||0),Vt();let Oe=function(ut){if(!Ne)return;let T=Math.max(0,(ut-nn)/1e3),W=yn(0),j=yn(Math.max(0,se.length-1)),Y=xt+ot*_t*T,X=Kn(Y);ot>0&&Y>=j?X=Number(C.max)||0:ot<0&&Y<=W&&(X=0),X=vn(X),X!==In&&(le(X),In=X);let Me=X<=0,Pe=X>=(Number(C.max)||0);if(ot<0&&Me||ot>0&&Pe){Bt();return}At=requestAnimationFrame(Oe)};At=requestAnimationFrame(Oe)}S.addEventListener("click",function(){if(Ne){Bt();return}Ln(1,1)}),w.addEventListener("click",function(){if(Ne&&ot<0){Bt();return}Ne&&Bt(),Ln(-1,4)}),D.addEventListener("click",function(){if(Ne&&ot>0&&_t>1){Bt();return}Ne&&Bt(),Ln(1,4)}),P.addEventListener("click",function(){Bt(),le(0)}),B.addEventListener("click",function(){Bt(),le(Number(C.max))}),C.addEventListener("input",function(){le(Number(C.value))});async function wi(){if(Pt)return;if(!oe){Ve("Movie export unavailable: viewer not ready.");return}if(typeof MediaRecorder>"u"||typeof c.captureStream!="function"){Ve("Movie export unavailable: MediaRecorder/captureStream not supported.");return}Pt=!0,Vt();let Q=Ne;Q&&Bt();let he=Number(C.value)||0;try{Je();let Oe=30,ut=Math.max(1,Number(C.max)+1);le(0);let T=c.captureStream(Oe),W=["video/webm;codecs=vp9","video/webm;codecs=vp8","video/webm"],j="";for(let Te of W)if(typeof MediaRecorder.isTypeSupported=="function"&&MediaRecorder.isTypeSupported(Te)){j=Te;break}let Y=j.length>0?new MediaRecorder(T,{mimeType:j,videoBitsPerSecond:8e6}):new MediaRecorder(T,{videoBitsPerSecond:8e6}),X=[];Y.ondataavailable=function(Te){Te.data&&Te.data.size>0&&X.push(Te.data)};let Me=new Promise(function(Te,He){Y.onerror=function(){He(Y.error||new Error("MediaRecorder failed"))},Y.onstop=function(){Te()}});Y.start(Math.max(40,Math.floor(1e3/Oe)));for(let Te=0;Te<ut;Te+=1)le(Te),await new Promise(function(He){setTimeout(He,Math.max(1,Math.floor(1e3/Oe)))});Y.stop(),await Me;let Pe=new Blob(X,{type:Y.mimeType||"video/webm"});if(Pe.size<=0)throw new Error("No video frames captured.");if(t.saveWebm){let Te=await new Promise(function(He,Ze){let Be=new FileReader;Be.onerror=function(){Ze(new Error("Failed to encode video payload."))},Be.onload=function(){He(String(Be.result||""))},Be.readAsDataURL(Pe)});t.saveWebm({dataUrl:Te,defaultName:Rl(n)+"_viewer.webm",view:e})}else{let Te=URL.createObjectURL(Pe),He=document.createElement("a");He.href=Te,He.download=Rl(n)+"_viewer.webm",document.body.appendChild(He),He.click(),document.body.removeChild(He),URL.revokeObjectURL(Te)}}catch(Oe){Ve("Movie export failed: "+String(Oe)),t.notify("Movie export failed: "+String(Oe))}finally{Pt=!1,le(he),Q&&Ln(1,1),Vt()}}return ne.addEventListener("click",function(){let Q=Hm(c);if(!Q)return;let he=Rl(n)+"_viewer.png";if(t.savePng){t.savePng({dataUrl:Q,defaultName:he,view:e});return}Vm(Q,he)}),ee.style.display=t.saveWebm?"":"none",ee.addEventListener("click",function(){wi()}),le(0),Vt(),ge(),a.__dispose=function(){if(Bt(),globalThis.removeEventListener("resize",Ct),O.state.controls&&typeof O.state.controls.dispose=="function")try{O.state.controls.dispose()}catch{}if(O.state.renderer&&typeof O.state.renderer.dispose=="function")try{O.state.renderer.dispose()}catch{}},a.__resize=function(){Ct(),le(O.sampleIndex||Number(C.value)||0)},globalThis.addEventListener("resize",Ct),a}function kC(i){return i.viewModel.type==="scatter"?FC(i):i.viewModel.type==="3d"?OC(i):UC(i)}function w_(i){if(!i||typeof i!="object")throw new Error("createResultsApp requires a configuration object.");let e=i.root;if(!e)throw new Error("createResultsApp requires a root element.");let t=wC(),n=LC(i.bridge),s=i.allowViewEditing!==!1,r=i.showHeader!==!1,a=i.modelRef!==void 0?i.modelRef:gt(i.model),o=gt(i.model)||"Rumoca Results",l=i.payload||null,c=i.metrics||null,u=Md(t,i.views),d=Tl(u,i.activeViewId),h=null;e.innerHTML="",e.classList.add("rumoca-results-root");let f=r?document.createElement("div"):null,m=r?document.createElement("div"):null,v=r&&s?document.createElement("button"):null;if(f&&m){f.className="rumoca-results-header";let B=document.createElement("div");B.className="rumoca-results-title",B.textContent=o,m.className="rumoca-results-header-actions",f.appendChild(B),f.appendChild(m),e.appendChild(f)}v&&(v.className="rumoca-results-header-button",v.type="button",v.textContent="\u2699",v.title="Visualization settings",v.setAttribute("aria-label","Visualization settings"),m.appendChild(v));let g=NC();e.appendChild(g.element);let p=IC(o,a);e.appendChild(p.element);let x=document.createElement("div");x.className="rumoca-results-tabs",e.appendChild(x);let y=document.createElement("div");y.className="rumoca-results-content",e.appendChild(y);let _=s?DC({bridge:n,modelRef:a,getPayload:function(){return l},onSave:function(B){u=Md(t,B),d=Tl(u,d),P(),g.clear()},shared:t}):null;_&&e.appendChild(_.element);function L(){h&&typeof h.__dispose=="function"&&h.__dispose(),h=null,y.innerHTML=""}function M(){x.innerHTML="";for(let B of u){let C=document.createElement("button");C.className=`rumoca-results-tab${B.id===d?" active":""}`,C.textContent=gt(B.title)||gt(B.id),C.addEventListener("click",function(){d=B.id,n.persistState({activeViewId:d}),g.clear(),P()}),x.appendChild(C)}}function R(B){L();let C=document.createElement("div");C.className="rumoca-results-empty",C.textContent=B,y.appendChild(C)}function P(){if(M(),!l){p.update(null,null,c,o),R("Run a simulation to view results.");return}u.length||(u=t.defaultVisualizationViews(),d=Tl(u,d));let B=u.find(function(V){return V.id===d})||u[0];p.update(l,B,c,o),L();let C=t.buildVisualizationModel(l,B);h=kC({bridge:n,context:{modelName:o,resultPath:S_(a)},metrics:c,modelName:o,payload:l,viewModel:C}),y.appendChild(h),requestAnimationFrame(function(){h&&typeof h.__resize=="function"&&h.__resize()})}function w(B){let C=B&&typeof B=="object"?B:{};if(C.model!==void 0){o=gt(C.model)||o;let V=f?.querySelector(".rumoca-results-title");V&&(V.textContent=o)}C.payload!==void 0&&(l=C.payload||null),C.metrics!==void 0&&(c=C.metrics||null),C.views!==void 0&&(u=Md(t,C.views),d=Tl(u,d)),C.activeViewId!==void 0&&(d=Tl(u,C.activeViewId)),P()}function S(){globalThis.removeEventListener("resize",D),_&&_.close(),L(),e.innerHTML=""}let D=function(){h&&typeof h.__resize=="function"&&h.__resize()};return globalThis.addEventListener("resize",D),v&&_&&v.addEventListener("click",async function(){g.clear();try{await _.open(u)}catch(B){g.show(String(B&&B.message?B.message:B),"error")}}),P(),{dispose:S,update:w}}function E_(i){try{let e=globalThis.localStorage?globalThis.localStorage.getItem(i):null;return e?JSON.parse(e):null}catch{return null}}function BC(i,e){if(globalThis.localStorage)try{globalThis.localStorage.setItem(i,JSON.stringify(e))}catch{}}function A_(i){let e=i.root||globalThis.document.getElementById("resultsRoot"),t=i.model,n=["rumoca-results",window.location.pathname||"inline",t,"state"].join(":"),s=E_(n)||{},r={notify(o){o&&console.info("[rumoca-results]",o)},persistState(o){BC(n,Object.assign({},E_(n)||{},o||{}))}},a=w_({root:e,model:t,modelRef:{model:t},payload:i.payload,views:i.views,metrics:i.metrics,activeViewId:typeof s.activeViewId=="string"?s.activeViewId:void 0,bridge:r,allowViewEditing:!1});return globalThis.addEventListener("beforeunload",()=>{a&&typeof a.dispose=="function"&&a.dispose()}),a}globalThis.__rumocaResultsReportMount=A_;})();
