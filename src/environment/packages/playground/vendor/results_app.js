var Sv=Object.defineProperty;var bv=(s,t)=>{for(var e in t)Sv(s,e,{get:t[e],enumerable:!0})};var wv="uplot",Ev="u-hz",Av="u-vt",Tv="u-title",Cv="u-wrap",Rv="u-under",Pv="u-over",Iv="u-axis",Xs="u-off",Lv="u-select",Nv="u-cursor-x",Dv="u-cursor-y",Uv="u-cursor-pt",Fv="u-legend",Ov="u-live",Bv="u-inline",zv="u-series",kv="u-marker",vm="u-label",Vv="u-value",Ko="width",jo="height";var ym="bottom",kr="left",fh="right",Ph="#000",Mm=Ph+"0",ph="mousemove",Sm="mousedown",mh="mouseup",bm="mouseenter",wm="mouseleave",Em="dblclick",Hv="resize",Gv="scroll",Am="change",El="dppxchange",Ih="--",Yr=typeof window<"u",yh=Yr?document:null,Hr=Yr?window:null,Wv=Yr?navigator:null,Se,Ml;function Mh(){let s=devicePixelRatio;Se!=s&&(Se=s,Ml&&bh(Am,Ml,Mh),Ml=matchMedia(`(min-resolution: ${Se-.001}dppx) and (max-resolution: ${Se+.001}dppx)`),qs(Am,Ml,Mh),Hr.dispatchEvent(new CustomEvent(El)))}function Kn(s,t){if(t!=null){let e=s.classList;!e.contains(t)&&e.add(t)}}function Sh(s,t){let e=s.classList;e.contains(t)&&e.remove(t)}function Ge(s,t,e){s.style[t]=e+"px"}function bi(s,t,e,n){let i=yh.createElement(s);return t!=null&&Kn(i,t),e?.insertBefore(i,n),i}function di(s,t){return bi("div",s,t)}var Tm=new WeakMap;function Fi(s,t,e,n,i){let r="translate("+t+"px,"+e+"px)",o=Tm.get(s);r!=o&&(s.style.transform=r,Tm.set(s,r),t<0||e<0||t>n||e>i?Kn(s,Xs):Sh(s,Xs))}var Cm=new WeakMap;function Rm(s,t,e){let n=t+e,i=Cm.get(s);n!=i&&(Cm.set(s,n),s.style.background=t,s.style.borderColor=e)}var Pm=new WeakMap;function Im(s,t,e,n){let i=t+""+e,r=Pm.get(s);i!=r&&(Pm.set(s,i),s.style.height=e+"px",s.style.width=t+"px",s.style.marginLeft=n?-t/2+"px":0,s.style.marginTop=n?-e/2+"px":0)}var Lh={passive:!0},Xv={...Lh,capture:!0};function qs(s,t,e,n){t.addEventListener(s,e,n?Xv:Lh)}function bh(s,t,e,n){t.removeEventListener(s,e,Lh)}Yr&&Mh();function wi(s,t,e,n){let i;e=e||0,n=n||t.length-1;let r=n<=2147483647;for(;n-e>1;)i=r?e+n>>1:jn((e+n)/2),t[i]<s?e=i:n=i;return s-t[e]<=t[n]-s?e:n}function rg(s){return(e,n,i)=>{let r=-1,o=-1;for(let a=n;a<=i;a++)if(s(e[a])){r=a;break}for(let a=i;a>=n;a--)if(s(e[a])){o=a;break}return[r,o]}}var og=s=>s!=null,ag=s=>s!=null&&s>0,Cl=rg(og),qv=rg(ag);function Yv(s,t,e,n=0,i=!1){let r=i?qv:Cl,o=i?ag:og;[t,e]=r(s,t,e);let a=s[t],l=s[t];if(t>-1)if(n==1)a=s[t],l=s[e];else if(n==-1)a=s[e],l=s[t];else for(let c=t;c<=e;c++){let u=s[c];o(u)&&(u<a?a=u:u>l&&(l=u))}return[a??Ue,l??-Ue]}function Rl(s,t,e,n){let i=Dm(s),r=Dm(t);s==t&&(i==-1?(s*=e,t/=e):(s/=e,t*=e));let o=e==10?Ji:lg,a=i==1?jn:fi,l=r==1?fi:jn,c=a(o(hn(s))),u=l(o(hn(t))),h=Gr(e,c),d=Gr(e,u);return e==10&&(c<0&&(h=Fe(h,-c)),u<0&&(d=Fe(d,-u))),n||e==2?(s=h*i,t=d*r):(s=dg(s,h),t=Pl(t,d)),[s,t]}function Nh(s,t,e,n){let i=Rl(s,t,e,n);return s==0&&(i[0]=0),t==0&&(i[1]=0),i}var Dh=.1,Lm={mode:3,pad:Dh},ta={pad:0,soft:null,mode:0},$v={min:ta,max:ta};function Al(s,t,e,n){return Il(e)?Nm(s,t,e):(ta.pad=e,ta.soft=n?0:null,ta.mode=n?3:0,Nm(s,t,$v))}function ye(s,t){return s??t}function Zv(s,t,e){for(t=ye(t,0),e=ye(e,s.length-1);t<=e;){if(s[t]!=null)return!0;t++}return!1}function Nm(s,t,e){let n=e.min,i=e.max,r=ye(n.pad,0),o=ye(i.pad,0),a=ye(n.hard,-Ue),l=ye(i.hard,Ue),c=ye(n.soft,Ue),u=ye(i.soft,-Ue),h=ye(n.mode,0),d=ye(i.mode,0),f=t-s,m=Ji(f),_=kn(hn(s),hn(t)),g=Ji(_),p=hn(g-m);(f<1e-24||p>10)&&(f=0,(s==0||t==0)&&(f=1e-24,h==2&&c!=Ue&&(r=0),d==2&&u!=-Ue&&(o=0)));let v=f||_||1e3,x=Ji(v),y=Gr(10,jn(x)),L=v*(f==0?s==0?.1:1:r),b=Fe(dg(s-L,y/10),24),C=s>=c&&(h==1||h==3&&b<=c||h==2&&b>=c)?c:Ue,P=kn(a,b<C&&s>=C?C:Ei(C,b)),w=v*(f==0?t==0?.1:1:o),S=Fe(Pl(t+w,y/10),24),D=t<=u&&(d==1||d==3&&S>=u||d==2&&S<=u)?u:-Ue,z=Ei(l,S>D&&t<=D?D:kn(D,S));return P==z&&P==0&&(z=100),[P,z]}var Jv=new Intl.NumberFormat(Yr?Wv.language:"en-US"),Uh=s=>Jv.format(s),Qn=Math,wl=Qn.PI,hn=Qn.abs,jn=Qn.floor,un=Qn.round,fi=Qn.ceil,Ei=Qn.min,kn=Qn.max,Gr=Qn.pow,Dm=Qn.sign,Ji=Qn.log10,lg=Qn.log2,Kv=(s,t=1)=>Qn.sinh(s)*t,gh=(s,t=1)=>Qn.asinh(s/t),Ue=1/0;function Um(s){return(Ji((s^s>>31)-(s>>31))|0)+1}function wh(s,t,e){return Ei(kn(s,t),e)}function cg(s){return typeof s=="function"}function ge(s){return cg(s)?s:()=>s}var jv=()=>{},ug=s=>s,hg=(s,t)=>t,Qv=s=>null,Fm=s=>!0,Om=(s,t)=>s==t,ty=/\.\d*?(?=9{6,}|0{6,})/gm,Ys=s=>{if(pg(s)||bs.has(s))return s;let t=`${s}`,e=t.match(ty);if(e==null)return s;let n=e[0].length-1;if(t.indexOf("e-")!=-1){let[i,r]=t.split("e");return+`${Ys(i)}e${r}`}return Fe(s,n)};function Gs(s,t){return Ys(Fe(Ys(s/t))*t)}function Pl(s,t){return Ys(fi(Ys(s/t))*t)}function dg(s,t){return Ys(jn(Ys(s/t))*t)}function Fe(s,t=0){if(pg(s))return s;let e=10**t,n=s*e*(1+Number.EPSILON);return un(n)/e}var bs=new Map;function fg(s){return((""+s).split(".")[1]||"").length}function na(s,t,e,n){let i=[],r=n.map(fg);for(let o=t;o<e;o++){let a=hn(o),l=Fe(Gr(s,o),a);for(let c=0;c<n.length;c++){let u=s==10?+`${n[c]}e${o}`:n[c]*l,h=(o>=0?0:a)+(o>=r[c]?0:r[c]),d=s==10?u:Fe(u,h);i.push(d),bs.set(d,h)}}return i}var ea={},Fh=[],Wr=[null,null],Ss=Array.isArray,pg=Number.isInteger,ey=s=>s===void 0;function Bm(s){return typeof s=="string"}function Il(s){let t=!1;if(s!=null){let e=s.constructor;t=e==null||e==Object}return t}function ny(s){return s!=null&&typeof s=="object"}var iy=Object.getPrototypeOf(Uint8Array),mg="__proto__";function Xr(s,t=Il){let e;if(Ss(s)){let n=s.find(i=>i!=null);if(Ss(n)||t(n)){e=Array(s.length);for(let i=0;i<s.length;i++)e[i]=Xr(s[i],t)}else e=s.slice()}else if(s instanceof iy)e=s.slice();else if(t(s)){e={};for(let n in s)n!=mg&&(e[n]=Xr(s[n],t))}else e=s;return e}function rn(s){let t=arguments;for(let e=1;e<t.length;e++){let n=t[e];for(let i in n)i!=mg&&(Il(s[i])?rn(s[i],Xr(n[i])):s[i]=Xr(n[i]))}return s}var sy=0,ry=1,oy=2;function ay(s,t,e){for(let n=0,i,r=-1;n<t.length;n++){let o=t[n];if(o>r){for(i=o-1;i>=0&&s[i]==null;)s[i--]=null;for(i=o+1;i<e&&s[i]==null;)s[r=i++]=null}}}function ly(s,t){if(hy(s)){let o=s[0].slice();for(let a=1;a<s.length;a++)o.push(...s[a].slice(1));return dy(o[0])||(o=uy(o)),o}let e=new Set;for(let o=0;o<s.length;o++){let l=s[o][0],c=l.length;for(let u=0;u<c;u++)e.add(l[u])}let n=[Array.from(e).sort((o,a)=>o-a)],i=n[0].length,r=new Map;for(let o=0;o<i;o++)r.set(n[0][o],o);for(let o=0;o<s.length;o++){let a=s[o],l=a[0];for(let c=1;c<a.length;c++){let u=a[c],h=Array(i).fill(void 0),d=t?t[o][c]:ry,f=[];for(let m=0;m<u.length;m++){let _=u[m],g=r.get(l[m]);_===null?d!=sy&&(h[g]=_,d==oy&&f.push(g)):h[g]=_}ay(h,f,i),n.push(h)}}return n}var cy=typeof queueMicrotask>"u"?s=>Promise.resolve().then(s):queueMicrotask;function uy(s){let t=s[0],e=t.length,n=Array(e);for(let r=0;r<n.length;r++)n[r]=r;n.sort((r,o)=>t[r]-t[o]);let i=[];for(let r=0;r<s.length;r++){let o=s[r],a=Array(e);for(let l=0;l<e;l++)a[l]=o[n[l]];i.push(a)}return i}function hy(s){let t=s[0][0],e=t.length;for(let n=1;n<s.length;n++){let i=s[n][0];if(i.length!=e)return!1;if(i!=t){for(let r=0;r<e;r++)if(i[r]!=t[r])return!1}}return!0}function dy(s,t=100){let e=s.length;if(e<=1)return!0;let n=0,i=e-1;for(;n<=i&&s[n]==null;)n++;for(;i>=n&&s[i]==null;)i--;if(i<=n)return!0;let r=kn(1,jn((i-n+1)/t));for(let o=s[n],a=n+r;a<=i;a+=r){let l=s[a];if(l!=null){if(l<=o)return!1;o=l}}return!0}var gg=["January","February","March","April","May","June","July","August","September","October","November","December"],_g=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];function xg(s){return s.slice(0,3)}var fy=_g.map(xg),py=gg.map(xg),my={MMMM:gg,MMM:py,WWWW:_g,WWW:fy};function Jo(s){return(s<10?"0":"")+s}function gy(s){return(s<10?"00":s<100?"0":"")+s}var _y={YYYY:s=>s.getFullYear(),YY:s=>(s.getFullYear()+"").slice(2),MMMM:(s,t)=>t.MMMM[s.getMonth()],MMM:(s,t)=>t.MMM[s.getMonth()],MM:s=>Jo(s.getMonth()+1),M:s=>s.getMonth()+1,DD:s=>Jo(s.getDate()),D:s=>s.getDate(),WWWW:(s,t)=>t.WWWW[s.getDay()],WWW:(s,t)=>t.WWW[s.getDay()],HH:s=>Jo(s.getHours()),H:s=>s.getHours(),h:s=>{let t=s.getHours();return t==0?12:t>12?t-12:t},AA:s=>s.getHours()>=12?"PM":"AM",aa:s=>s.getHours()>=12?"pm":"am",a:s=>s.getHours()>=12?"p":"a",mm:s=>Jo(s.getMinutes()),m:s=>s.getMinutes(),ss:s=>Jo(s.getSeconds()),s:s=>s.getSeconds(),fff:s=>gy(s.getMilliseconds())};function Oh(s,t){t=t||my;let e=[],n=/\{([a-z]+)\}|[^{]+/gi,i;for(;i=n.exec(s);)e.push(i[0][0]=="{"?_y[i[1]]:i[0]);return r=>{let o="";for(let a=0;a<e.length;a++)o+=typeof e[a]=="string"?e[a]:e[a](r,t);return o}}var xy=new Intl.DateTimeFormat().resolvedOptions().timeZone;function vy(s,t){let e;return t=="UTC"||t=="Etc/UTC"?e=new Date(+s+s.getTimezoneOffset()*6e4):t==xy?e=s:(e=new Date(s.toLocaleString("en-US",{timeZone:t})),e.setMilliseconds(s.getMilliseconds())),e}var vg=s=>s%1==0,Tl=[1,2,2.5,5],yy=na(10,-32,0,Tl),yg=na(10,0,32,Tl),My=yg.filter(vg),Ws=yy.concat(yg),Bh=`
`,Mg="{YYYY}",zm=Bh+Mg,Sg="{M}/{D}",Qo=Bh+Sg,Sl=Qo+"/{YY}",bg="{aa}",Sy="{h}:{mm}",Vr=Sy+bg,km=Bh+Vr,Vm=":{ss}",Ee=null;function wg(s){let t=s*1e3,e=t*60,n=e*60,i=n*24,r=i*30,o=i*365,l=(s==1?na(10,0,3,Tl).filter(vg):na(10,-3,0,Tl)).concat([t,t*5,t*10,t*15,t*30,e,e*5,e*10,e*15,e*30,n,n*2,n*3,n*4,n*6,n*8,n*12,i,i*2,i*3,i*4,i*5,i*6,i*7,i*8,i*9,i*10,i*15,r,r*2,r*3,r*4,r*6,o,o*2,o*5,o*10,o*25,o*50,o*100]),c=[[o,Mg,Ee,Ee,Ee,Ee,Ee,Ee,1],[i*28,"{MMM}",zm,Ee,Ee,Ee,Ee,Ee,1],[i,Sg,zm,Ee,Ee,Ee,Ee,Ee,1],[n,"{h}"+bg,Sl,Ee,Qo,Ee,Ee,Ee,1],[e,Vr,Sl,Ee,Qo,Ee,Ee,Ee,1],[t,Vm,Sl+" "+Vr,Ee,Qo+" "+Vr,Ee,km,Ee,1],[s,Vm+".{fff}",Sl+" "+Vr,Ee,Qo+" "+Vr,Ee,km,Ee,1]];function u(h){return(d,f,m,_,g,p)=>{let v=[],x=g>=o,y=g>=r&&g<o,L=h(m),b=Fe(L*s,3),C=_h(L.getFullYear(),x?0:L.getMonth(),y||x?1:L.getDate()),P=Fe(C*s,3);if(y||x){let w=y?g/r:0,S=x?g/o:0,D=b==P?b:Fe(_h(C.getFullYear()+S,C.getMonth()+w,1)*s,3),z=new Date(un(D/s)),R=z.getFullYear(),V=z.getMonth();for(let X=0;D<=_;X++){let nt=_h(R+S*X,V+w*X,1),tt=nt-h(Fe(nt*s,3));D=Fe((+nt+tt)*s,3),D<=_&&v.push(D)}}else{let w=g>=i?i:g,S=jn(m)-jn(b),D=P+S+Pl(b-P,w);v.push(D);let z=h(D),R=z.getHours()+z.getMinutes()/e+z.getSeconds()/n,V=g/n,X=d.axes[f]._space,nt=p/X;for(;D=Fe(D+g,s==1?0:3),!(D>_);)if(V>1){let tt=jn(Fe(R+V,6))%24,at=h(D).getHours()-tt;at>1&&(at=-1),D-=at*n,R=(R+V)%24;let Mt=v[v.length-1];Fe((D-Mt)/g,3)*nt>=.7&&v.push(D)}else v.push(D)}return v}}return[l,c,u]}var[by,wy,Ey]=wg(1),[Ay,Ty,Cy]=wg(.001);na(2,-53,53,[1]);function Hm(s,t){return s.map(e=>e.map((n,i)=>i==0||i==8||n==null?n:t(i==1||e[8]==0?n:e[1]+n)))}function Gm(s,t){return(e,n,i,r,o)=>{let a=t.find(m=>o>=m[0])||t[t.length-1],l,c,u,h,d,f;return n.map(m=>{let _=s(m),g=_.getFullYear(),p=_.getMonth(),v=_.getDate(),x=_.getHours(),y=_.getMinutes(),L=_.getSeconds(),b=g!=l&&a[2]||p!=c&&a[3]||v!=u&&a[4]||x!=h&&a[5]||y!=d&&a[6]||L!=f&&a[7]||a[1];return l=g,c=p,u=v,h=x,d=y,f=L,b(_)})}}function Ry(s,t){let e=Oh(t);return(n,i,r,o,a)=>i.map(l=>e(s(l)))}function _h(s,t,e){return new Date(s,t,e)}function Wm(s,t){return t(s)}var Py="{YYYY}-{MM}-{DD} {h}:{mm}{aa}";function Xm(s,t){return(e,n,i,r)=>r==null?Ih:t(s(n))}function Iy(s,t){let e=s.series[t];return e.width?e.stroke(s,t):e.points.width?e.points.stroke(s,t):null}function Ly(s,t){return s.series[t].fill(s,t)}var Ny={show:!0,live:!0,isolate:!1,mount:jv,markers:{show:!0,width:2,stroke:Iy,fill:Ly,dash:"solid"},idx:null,idxs:null,values:[]};function Dy(s,t){let e=s.cursor.points,n=di(),i=e.size(s,t);Ge(n,Ko,i),Ge(n,jo,i);let r=i/-2;Ge(n,"marginLeft",r),Ge(n,"marginTop",r);let o=e.width(s,t,i);return o&&Ge(n,"borderWidth",o),n}function Uy(s,t){let e=s.series[t].points;return e._fill||e._stroke}function Fy(s,t){let e=s.series[t].points;return e._stroke||e._fill}function Oy(s,t){return s.series[t].points.size}var xh=[0,0];function By(s,t,e){return xh[0]=t,xh[1]=e,xh}function bl(s,t,e,n=!0){return i=>{i.button==0&&(!n||i.target==t)&&e(i)}}function vh(s,t,e,n=!0){return i=>{(!n||i.target==t)&&e(i)}}var zy={show:!0,x:!0,y:!0,lock:!1,move:By,points:{one:!1,show:Dy,size:Oy,width:0,stroke:Fy,fill:Uy},bind:{mousedown:bl,mouseup:bl,click:bl,dblclick:bl,mousemove:vh,mouseleave:vh,mouseenter:vh},drag:{setScale:!0,x:!0,y:!1,dist:0,uni:null,click:(s,t)=>{t.stopPropagation(),t.stopImmediatePropagation()},_x:!1,_y:!1},focus:{dist:(s,t,e,n,i)=>n-i,prox:-1,bias:0},hover:{skip:[void 0],prox:null,bias:0},left:-10,top:-10,idx:null,dataIdx:null,idxs:null,event:null},Eg={show:!0,stroke:"rgba(0,0,0,0.07)",width:2},zh=rn({},Eg,{filter:hg}),Ag=rn({},zh,{size:10}),Tg=rn({},Eg,{show:!1}),kh='12px system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',Cg="bold "+kh,Rg=1.5,qm={show:!0,scale:"x",stroke:Ph,space:50,gap:5,alignTo:1,size:50,labelGap:0,labelSize:30,labelFont:Cg,side:2,grid:zh,ticks:Ag,border:Tg,font:kh,lineGap:Rg,rotate:0},ky="Value",Vy="Time",Ym={show:!0,scale:"x",auto:!1,sorted:1,min:Ue,max:-Ue,idxs:[]};function Hy(s,t,e,n,i){return t.map(r=>r==null?"":Uh(r))}function Gy(s,t,e,n,i,r,o){let a=[],l=bs.get(i)||0;e=o?e:Fe(Pl(e,i),l);for(let c=e;c<=n;c=Fe(c+i,l))a.push(Object.is(c,-0)?0:c);return a}function Eh(s,t,e,n,i,r,o){let a=[],l=s.scales[s.axes[t].scale].log,c=l==10?Ji:lg,u=jn(c(e));i=Gr(l,u),l==10&&(i=Ws[wi(i,Ws)]);let h=e,d=i*l;l==10&&(d=Ws[wi(d,Ws)]);do a.push(h),h=h+i,l==10&&!bs.has(h)&&(h=Fe(h,bs.get(i))),h>=d&&(i=h,d=i*l,l==10&&(d=Ws[wi(d,Ws)]));while(h<=n);return a}function Wy(s,t,e,n,i,r,o){let l=s.scales[s.axes[t].scale].asinh,c=n>l?Eh(s,t,kn(l,e),n,i):[l],u=n>=0&&e<=0?[0]:[];return(e<-l?Eh(s,t,kn(l,-n),-e,i):[l]).reverse().map(d=>-d).concat(u,c)}var Pg=/./,Xy=/[12357]/,qy=/[125]/,$m=/1/,Ah=(s,t,e,n)=>s.map((i,r)=>t==4&&i==0||r%n==0&&e.test(i.toExponential()[i<0?1:0])?i:null);function Yy(s,t,e,n,i){let r=s.axes[e],o=r.scale,a=s.scales[o],l=s.valToPos,c=r._space,u=l(10,o),h=l(9,o)-u>=c?Pg:l(7,o)-u>=c?Xy:l(5,o)-u>=c?qy:$m;if(h==$m){let d=hn(l(1,o)-u);if(d<c)return Ah(t.slice().reverse(),a.distr,h,fi(c/d)).reverse()}return Ah(t,a.distr,h,1)}function $y(s,t,e,n,i){let r=s.axes[e],o=r.scale,a=r._space,l=s.valToPos,c=hn(l(1,o)-l(2,o));return c<a?Ah(t.slice().reverse(),3,Pg,fi(a/c)).reverse():t}function Zy(s,t,e,n){return n==null?Ih:t==null?"":Uh(t)}var Zm={show:!0,scale:"y",stroke:Ph,space:30,gap:5,alignTo:1,size:50,labelGap:0,labelSize:30,labelFont:Cg,side:3,grid:zh,ticks:Ag,border:Tg,font:kh,lineGap:Rg,rotate:0};function Jy(s,t){let e=3+(s||1)*2;return Fe(e*t,3)}function Ky(s,t){let{scale:e,idxs:n}=s.series[0],i=s._data[0],r=s.valToPos(i[n[0]],e,!0),o=s.valToPos(i[n[1]],e,!0),a=hn(o-r),l=s.series[t],c=a/(l.points.space*Se);return n[1]-n[0]<=c}var Jm={scale:null,auto:!0,sorted:0,min:Ue,max:-Ue},Ig=(s,t,e,n,i)=>i,Km={show:!0,auto:!0,sorted:0,gaps:Ig,alpha:1,facets:[rn({},Jm,{scale:"x"}),rn({},Jm,{scale:"y"})]},jm={scale:"y",auto:!0,sorted:0,show:!0,spanGaps:!1,gaps:Ig,alpha:1,points:{show:Ky,filter:null},values:null,min:Ue,max:-Ue,idxs:[],path:null,clip:null};function jy(s,t,e,n,i){return e/10}var Lg={time:!0,auto:!0,distr:1,log:10,asinh:1,min:null,max:null,dir:1,ori:0},Qy=rn({},Lg,{time:!1,ori:1}),Qm={};function Ng(s,t){let e=Qm[s];return e||(e={key:s,plots:[],sub(n){e.plots.push(n)},unsub(n){e.plots=e.plots.filter(i=>i!=n)},pub(n,i,r,o,a,l,c){for(let u=0;u<e.plots.length;u++)e.plots[u]!=i&&e.plots[u].pub(n,i,r,o,a,l,c)}},s!=null&&(Qm[s]=e)),e}var qr=1,Th=2;function $s(s,t,e){let n=s.mode,i=s.series[t],r=n==2?s._data[t]:s._data,o=s.scales,a=s.bbox,l=r[0],c=n==2?r[1]:r[t],u=n==2?o[i.facets[0].scale]:o[s.series[0].scale],h=n==2?o[i.facets[1].scale]:o[i.scale],d=a.left,f=a.top,m=a.width,_=a.height,g=s.valToPosH,p=s.valToPosV;return u.ori==0?e(i,l,c,u,h,g,p,d,f,m,_,Nl,$r,Ul,Ug,Og):e(i,l,c,u,h,p,g,f,d,_,m,Dl,Zr,Gh,Fg,Bg)}function Vh(s,t){let e=0,n=0,i=ye(s.bands,Fh);for(let r=0;r<i.length;r++){let o=i[r];o.series[0]==t?e=o.dir:o.series[1]==t&&(o.dir==1?n|=1:n|=2)}return[e,n==1?-1:n==2?1:n==3?2:0]}function tM(s,t,e,n,i){let r=s.mode,o=s.series[t],a=r==2?o.facets[1].scale:o.scale,l=s.scales[a];return i==-1?l.min:i==1?l.max:l.distr==3?l.dir==1?l.min:l.max:0}function Ki(s,t,e,n,i,r){return $s(s,t,(o,a,l,c,u,h,d,f,m,_,g)=>{let p=o.pxRound,v=c.dir*(c.ori==0?1:-1),x=c.ori==0?$r:Zr,y,L;v==1?(y=e,L=n):(y=n,L=e);let b=p(h(a[y],c,_,f)),C=p(d(l[y],u,g,m)),P=p(h(a[L],c,_,f)),w=p(d(r==1?u.max:u.min,u,g,m)),S=new Path2D(i);return x(S,P,w),x(S,b,w),x(S,b,C),S})}function Ll(s,t,e,n,i,r){let o=null;if(s.length>0){o=new Path2D;let a=t==0?Ul:Gh,l=e;for(let h=0;h<s.length;h++){let d=s[h];if(d[1]>d[0]){let f=d[0]-l;f>0&&a(o,l,n,f,n+r),l=d[1]}}let c=e+i-l,u=10;c>0&&a(o,l,n-u/2,c,n+r+u)}return o}function eM(s,t,e){let n=s[s.length-1];n&&n[0]==t?n[1]=e:s.push([t,e])}function Hh(s,t,e,n,i,r,o){let a=[],l=s.length;for(let c=i==1?e:n;c>=e&&c<=n;c+=i)if(t[c]===null){let h=c,d=c;if(i==1)for(;++c<=n&&t[c]===null;)d=c;else for(;--c>=e&&t[c]===null;)d=c;let f=r(s[h]),m=d==h?f:r(s[d]),_=h-i;f=o<=0&&_>=0&&_<l?r(s[_]):f;let p=d+i;m=o>=0&&p>=0&&p<l?r(s[p]):m,m>=f&&a.push([f,m])}return a}function tg(s){return s==0?ug:s==1?un:t=>Gs(t,s)}function Dg(s){let t=s==0?Nl:Dl,e=s==0?(i,r,o,a,l,c)=>{i.arcTo(r,o,a,l,c)}:(i,r,o,a,l,c)=>{i.arcTo(o,r,l,a,c)},n=s==0?(i,r,o,a,l)=>{i.rect(r,o,a,l)}:(i,r,o,a,l)=>{i.rect(o,r,l,a)};return(i,r,o,a,l,c=0,u=0)=>{c==0&&u==0?n(i,r,o,a,l):(c=Ei(c,a/2,l/2),u=Ei(u,a/2,l/2),t(i,r+c,o),e(i,r+a,o,r+a,o+l,c),e(i,r+a,o+l,r,o+l,u),e(i,r,o+l,r,o,u),e(i,r,o,r+a,o,c),i.closePath())}}var Nl=(s,t,e)=>{s.moveTo(t,e)},Dl=(s,t,e)=>{s.moveTo(e,t)},$r=(s,t,e)=>{s.lineTo(t,e)},Zr=(s,t,e)=>{s.lineTo(e,t)},Ul=Dg(0),Gh=Dg(1),Ug=(s,t,e,n,i,r)=>{s.arc(t,e,n,i,r)},Fg=(s,t,e,n,i,r)=>{s.arc(e,t,n,i,r)},Og=(s,t,e,n,i,r,o)=>{s.bezierCurveTo(t,e,n,i,r,o)},Bg=(s,t,e,n,i,r,o)=>{s.bezierCurveTo(e,t,i,n,o,r)};function zg(s){return(t,e,n,i,r)=>$s(t,e,(o,a,l,c,u,h,d,f,m,_,g)=>{let{pxRound:p,points:v}=o,x,y;c.ori==0?(x=Nl,y=Ug):(x=Dl,y=Fg);let L=Fe(v.width*Se,3),b=(v.size-v.width)/2*Se,C=Fe(b*2,3),P=new Path2D,w=new Path2D,{left:S,top:D,width:z,height:R}=t.bbox;Ul(w,S-C,D-C,z+C*2,R+C*2);let V=X=>{if(l[X]!=null){let nt=p(h(a[X],c,_,f)),tt=p(d(l[X],u,g,m));x(P,nt+b,tt),y(P,nt,tt,b,0,wl*2)}};if(r)r.forEach(V);else for(let X=n;X<=i;X++)V(X);return{stroke:L>0?P:null,fill:P,clip:w,flags:qr|Th}})}function kg(s){return(t,e,n,i,r,o)=>{n!=i&&(r!=n&&o!=n&&s(t,e,n),r!=i&&o!=i&&s(t,e,i),s(t,e,o))}}var nM=kg($r),iM=kg(Zr);function Vg(s){let t=ye(s?.alignGaps,0);return(e,n,i,r)=>$s(e,n,(o,a,l,c,u,h,d,f,m,_,g)=>{[i,r]=Cl(l,i,r);let p=o.pxRound,v=R=>p(h(R,c,_,f)),x=R=>p(d(R,u,g,m)),y,L;c.ori==0?(y=$r,L=nM):(y=Zr,L=iM);let b=c.dir*(c.ori==0?1:-1),C={stroke:new Path2D,fill:null,clip:null,band:null,gaps:null,flags:qr},P=C.stroke,w=!1;if(r-i>=_*4){let R=yt=>e.posToVal(yt,c.key,!0),V=null,X=null,nt,tt,j,rt=v(a[b==1?i:r]),at=v(a[i]),Mt=v(a[r]),Tt=R(b==1?at+1:Mt-1);for(let yt=b==1?i:r;yt>=i&&yt<=r;yt+=b){let et=a[yt],pt=(b==1?et<Tt:et>Tt)?rt:v(et),ct=l[yt];pt==rt?ct!=null?(tt=ct,V==null?(y(P,pt,x(tt)),nt=V=X=tt):tt<V?V=tt:tt>X&&(X=tt)):ct===null&&(w=!0):(V!=null&&L(P,rt,x(V),x(X),x(nt),x(tt)),ct!=null?(tt=ct,y(P,pt,x(tt)),V=X=nt=tt):(V=X=null,ct===null&&(w=!0)),rt=pt,Tt=R(rt+b))}V!=null&&V!=X&&j!=rt&&L(P,rt,x(V),x(X),x(nt),x(tt))}else for(let R=b==1?i:r;R>=i&&R<=r;R+=b){let V=l[R];V===null?w=!0:V!=null&&y(P,v(a[R]),x(V))}let[D,z]=Vh(e,n);if(o.fill!=null||D!=0){let R=C.fill=new Path2D(P),V=o.fillTo(e,n,o.min,o.max,D),X=x(V),nt=v(a[i]),tt=v(a[r]);b==-1&&([tt,nt]=[nt,tt]),y(R,tt,X),y(R,nt,X)}if(!o.spanGaps){let R=[];w&&R.push(...Hh(a,l,i,r,b,v,t)),C.gaps=R=o.gaps(e,n,i,r,R),C.clip=Ll(R,c.ori,f,m,_,g)}return z!=0&&(C.band=z==2?[Ki(e,n,i,r,P,-1),Ki(e,n,i,r,P,1)]:Ki(e,n,i,r,P,z)),C})}function sM(s){let t=ye(s.align,1),e=ye(s.ascDesc,!1),n=ye(s.alignGaps,0),i=ye(s.extend,!1);return(r,o,a,l)=>$s(r,o,(c,u,h,d,f,m,_,g,p,v,x)=>{[a,l]=Cl(h,a,l);let y=c.pxRound,{left:L,width:b}=r.bbox,C=at=>y(m(at,d,v,g)),P=at=>y(_(at,f,x,p)),w=d.ori==0?$r:Zr,S={stroke:new Path2D,fill:null,clip:null,band:null,gaps:null,flags:qr},D=S.stroke,z=d.dir*(d.ori==0?1:-1),R=P(h[z==1?a:l]),V=C(u[z==1?a:l]),X=V,nt=V;i&&t==-1&&(nt=L,w(D,nt,R)),w(D,V,R);for(let at=z==1?a:l;at>=a&&at<=l;at+=z){let Mt=h[at];if(Mt==null)continue;let Tt=C(u[at]),yt=P(Mt);t==1?w(D,Tt,R):w(D,X,yt),w(D,Tt,yt),R=yt,X=Tt}let tt=X;i&&t==1&&(tt=L+b,w(D,tt,R));let[j,rt]=Vh(r,o);if(c.fill!=null||j!=0){let at=S.fill=new Path2D(D),Mt=c.fillTo(r,o,c.min,c.max,j),Tt=P(Mt);w(at,tt,Tt),w(at,nt,Tt)}if(!c.spanGaps){let at=[];at.push(...Hh(u,h,a,l,z,C,n));let Mt=c.width*Se/2,Tt=e||t==1?Mt:-Mt,yt=e||t==-1?-Mt:Mt;at.forEach(et=>{et[0]+=Tt,et[1]+=yt}),S.gaps=at=c.gaps(r,o,a,l,at),S.clip=Ll(at,d.ori,g,p,v,x)}return rt!=0&&(S.band=rt==2?[Ki(r,o,a,l,D,-1),Ki(r,o,a,l,D,1)]:Ki(r,o,a,l,D,rt)),S})}function eg(s,t,e,n,i,r,o=Ue){if(s.length>1){let a=null;for(let l=0,c=1/0;l<s.length;l++)if(t[l]!==void 0){if(a!=null){let u=hn(s[l]-s[a]);u<c&&(c=u,o=hn(e(s[l],n,i,r)-e(s[a],n,i,r)))}a=l}}return o}function rM(s){s=s||ea;let t=ye(s.size,[.6,Ue,1]),e=s.align||0,n=s.gap||0,i=s.radius;i=i==null?[0,0]:typeof i=="number"?[i,0]:i;let r=ge(i),o=1-t[0],a=ye(t[1],Ue),l=ye(t[2],1),c=ye(s.disp,ea),u=ye(s.each,f=>{}),{fill:h,stroke:d}=c;return(f,m,_,g)=>$s(f,m,(p,v,x,y,L,b,C,P,w,S,D)=>{let z=p.pxRound,R=e,V=n*Se,X=a*Se,nt=l*Se,tt,j;y.ori==0?[tt,j]=r(f,m):[j,tt]=r(f,m);let rt=y.dir*(y.ori==0?1:-1),at=y.ori==0?Ul:Gh,Mt=y.ori==0?u:(it,xt,vt,Zt,bt,Ft,ie)=>{u(it,xt,vt,bt,Zt,ie,Ft)},Tt=ye(f.bands,Fh).find(it=>it.series[0]==m),yt=Tt!=null?Tt.dir:0,et=p.fillTo(f,m,p.min,p.max,yt),ut=z(C(et,L,D,w)),pt,ct,zt,$t=S,H=z(p.width*Se),jt=!1,ot=null,mt=null,st=null,Et=null;h!=null&&(H==0||d!=null)&&(jt=!0,ot=h.values(f,m,_,g),mt=new Map,new Set(ot).forEach(it=>{it!=null&&mt.set(it,new Path2D)}),H>0&&(st=d.values(f,m,_,g),Et=new Map,new Set(st).forEach(it=>{it!=null&&Et.set(it,new Path2D)})));let{x0:ft,size:Ct}=c;if(ft!=null&&Ct!=null){R=1,v=ft.values(f,m,_,g),ft.unit==2&&(v=v.map(vt=>f.posToVal(P+vt*S,y.key,!0)));let it=Ct.values(f,m,_,g);Ct.unit==2?ct=it[0]*S:ct=b(it[0],y,S,P)-b(0,y,S,P),$t=eg(v,x,b,y,S,P,$t),zt=$t-ct+V}else $t=eg(v,x,b,y,S,P,$t),zt=$t*o+V,ct=$t-zt;zt<1&&(zt=0),H>=ct/2&&(H=0),zt<5&&(z=ug);let Gt=zt>0,N=$t-zt-(Gt?H:0);ct=z(wh(N,nt,X)),pt=(R==0?ct/2:R==rt?0:ct)-R*rt*((R==0?V/2:0)+(Gt?H/2:0));let A={stroke:null,fill:null,clip:null,band:null,gaps:null,flags:0},B=jt?null:new Path2D,O=null;if(Tt!=null)O=f.data[Tt.series[1]];else{let{y0:it,y1:xt}=c;it!=null&&xt!=null&&(x=xt.values(f,m,_,g),O=it.values(f,m,_,g))}let Z=tt*ct,Y=j*ct;for(let it=rt==1?_:g;it>=_&&it<=g;it+=rt){let xt=x[it];if(xt==null)continue;if(O!=null){let Kt=O[it]??0;if(xt-Kt==0)continue;ut=C(Kt,L,D,w)}let vt=y.distr!=2||c!=null?v[it]:it,Zt=b(vt,y,S,P),bt=C(ye(xt,et),L,D,w),Ft=z(Zt-pt),ie=z(kn(bt,ut)),Xt=z(Ei(bt,ut)),Nt=ie-Xt;if(xt!=null){let Kt=xt<0?Y:Z,Qt=xt<0?Z:Y;jt?(H>0&&st[it]!=null&&at(Et.get(st[it]),Ft,Xt+jn(H/2),ct,kn(0,Nt-H),Kt,Qt),ot[it]!=null&&at(mt.get(ot[it]),Ft,Xt+jn(H/2),ct,kn(0,Nt-H),Kt,Qt)):at(B,Ft,Xt+jn(H/2),ct,kn(0,Nt-H),Kt,Qt),Mt(f,m,it,Ft-H/2,Xt,ct+H,Nt)}}return H>0?A.stroke=jt?Et:B:jt||(A._fill=p.width==0?p._fill:p._stroke??p._fill,A.width=0),A.fill=jt?mt:B,A})}function oM(s,t){let e=ye(t?.alignGaps,0);return(n,i,r,o)=>$s(n,i,(a,l,c,u,h,d,f,m,_,g,p)=>{[r,o]=Cl(c,r,o);let v=a.pxRound,x=tt=>v(d(tt,u,g,m)),y=tt=>v(f(tt,h,p,_)),L,b,C;u.ori==0?(L=Nl,C=$r,b=Og):(L=Dl,C=Zr,b=Bg);let P=u.dir*(u.ori==0?1:-1),w=x(l[P==1?r:o]),S=w,D=[],z=[];for(let tt=P==1?r:o;tt>=r&&tt<=o;tt+=P)if(c[tt]!=null){let rt=l[tt],at=x(rt);D.push(S=at),z.push(y(c[tt]))}let R={stroke:s(D,z,L,C,b,v),fill:null,clip:null,band:null,gaps:null,flags:qr},V=R.stroke,[X,nt]=Vh(n,i);if(a.fill!=null||X!=0){let tt=R.fill=new Path2D(V),j=a.fillTo(n,i,a.min,a.max,X),rt=y(j);C(tt,S,rt),C(tt,w,rt)}if(!a.spanGaps){let tt=[];tt.push(...Hh(l,c,r,o,P,x,e)),R.gaps=tt=a.gaps(n,i,r,o,tt),R.clip=Ll(tt,u.ori,m,_,g,p)}return nt!=0&&(R.band=nt==2?[Ki(n,i,r,o,V,-1),Ki(n,i,r,o,V,1)]:Ki(n,i,r,o,V,nt)),R})}function aM(s){return oM(lM,s)}function lM(s,t,e,n,i,r){let o=s.length;if(o<2)return null;let a=new Path2D;if(e(a,s[0],t[0]),o==2)n(a,s[1],t[1]);else{let l=Array(o),c=Array(o-1),u=Array(o-1),h=Array(o-1);for(let d=0;d<o-1;d++)u[d]=t[d+1]-t[d],h[d]=s[d+1]-s[d],c[d]=u[d]/h[d];l[0]=c[0];for(let d=1;d<o-1;d++)c[d]===0||c[d-1]===0||c[d-1]>0!=c[d]>0?l[d]=0:(l[d]=3*(h[d-1]+h[d])/((2*h[d]+h[d-1])/c[d-1]+(h[d]+2*h[d-1])/c[d]),isFinite(l[d])||(l[d]=0));l[o-1]=c[o-2];for(let d=0;d<o-1;d++)i(a,s[d]+h[d]/3,t[d]+l[d]*h[d]/3,s[d+1]-h[d]/3,t[d+1]-l[d+1]*h[d]/3,s[d+1],t[d+1])}return a}var Ch=new Set;function ng(){for(let s of Ch)s.syncRect(!0)}Yr&&(qs(Hv,Hr,ng),qs(Gv,Hr,ng,!0),qs(El,Hr,()=>{Mn.pxRatio=Se}));var cM=Vg(),uM=zg();function ig(s,t,e,n){return(n?[s[0],s[1]].concat(s.slice(2)):[s[0]].concat(s.slice(1))).map((r,o)=>Rh(r,o,t,e))}function hM(s,t){return s.map((e,n)=>n==0?{}:rn({},t,e))}function Rh(s,t,e,n){return rn({},t==0?e:n,s)}function Hg(s,t,e){return t==null?Wr:[t,e]}var dM=Hg;function fM(s,t,e){return t==null?Wr:Al(t,e,Dh,!0)}function Gg(s,t,e,n){return t==null?Wr:Rl(t,e,s.scales[n].log,!1)}var pM=Gg;function Wg(s,t,e,n){return t==null?Wr:Nh(t,e,s.scales[n].log,!1)}var mM=Wg;function gM(s,t,e,n,i){let r=kn(Um(s),Um(t)),o=t-s,a=wi(i/n*o,e);do{let l=e[a],c=n*l/o;if(c>=i&&r+(l<5?bs.get(l):0)<=17)return[l,c]}while(++a<e.length);return[0,0]}function sg(s){let t,e;return s=s.replace(/(\d+)px/,(n,i)=>(t=un((e=+i)*Se))+"px"),[s,t,e]}function _M(s){s.show&&[s.font,s.labelFont].forEach(t=>{let e=Fe(t[2]*Se,1);t[0]=t[0].replace(/[0-9.]+px/,e+"px"),t[1]=e})}function Mn(s,t,e){let n={mode:ye(s.mode,1)},i=n.mode;function r(M,E,I,F){let k=E.valToPct(M);return F+I*(E.dir==-1?1-k:k)}function o(M,E,I,F){let k=E.valToPct(M);return F+I*(E.dir==-1?k:1-k)}function a(M,E,I,F){return E.ori==0?r(M,E,I,F):o(M,E,I,F)}n.valToPosH=r,n.valToPosV=o;let l=!1;n.status=0;let c=n.root=di(wv);if(s.id!=null&&(c.id=s.id),Kn(c,s.class),s.title){let M=di(Tv,c);M.textContent=s.title}let u=bi("canvas"),h=n.ctx=u.getContext("2d"),d=di(Cv,c);qs("click",d,M=>{M.target===m&&(ke!=Ur||qe!=Fr)&&An.click(n,M)},!0);let f=n.under=di(Rv,d);d.appendChild(u);let m=n.over=di(Pv,d);s=Xr(s);let _=+ye(s.pxAlign,1),g=tg(_);(s.plugins||[]).forEach(M=>{M.opts&&(s=M.opts(n,s)||s)});let p=s.ms||.001,v=n.series=i==1?ig(s.series||[],Ym,jm,!1):hM(s.series||[null],Km),x=n.axes=ig(s.axes||[],qm,Zm,!0),y=n.scales={},L=n.bands=s.bands||[];L.forEach(M=>{M.fill=ge(M.fill||null),M.dir=ye(M.dir,-1)});let b=i==2?v[1].facets[0].scale:v[0].scale,C={axes:av,series:th},P=(s.drawOrder||["axes","series"]).map(M=>C[M]);function w(M){let E=M.distr==3?I=>Ji(I>0?I:M.clamp(n,I,M.min,M.max,M.key)):M.distr==4?I=>gh(I,M.asinh):M.distr==100?I=>M.fwd(I):I=>I;return I=>{let F=E(I),{_min:k,_max:J}=M,ht=J-k;return(F-k)/ht}}function S(M){let E=y[M];if(E==null){let I=(s.scales||ea)[M]||ea;if(I.from!=null){S(I.from);let F=rn({},y[I.from],I,{key:M});F.valToPct=w(F),y[M]=F}else{E=y[M]=rn({},M==b?Lg:Qy,I),E.key=M;let F=E.time,k=E.range,J=Ss(k);if((M!=b||i==2&&!F)&&(J&&(k[0]==null||k[1]==null)&&(k={min:k[0]==null?Lm:{mode:1,hard:k[0],soft:k[0]},max:k[1]==null?Lm:{mode:1,hard:k[1],soft:k[1]}},J=!1),!J&&Il(k))){let ht=k;k=(wt,It,Bt)=>It==null?Wr:Al(It,Bt,ht)}E.range=ge(k||(F?dM:M==b?E.distr==3?pM:E.distr==4?mM:Hg:E.distr==3?Gg:E.distr==4?Wg:fM)),E.auto=ge(J?!1:E.auto),E.clamp=ge(E.clamp||jy),E._min=E._max=null,E.valToPct=w(E)}}}S("x"),S("y"),i==1&&v.forEach(M=>{S(M.scale)}),x.forEach(M=>{S(M.scale)});for(let M in s.scales)S(M);let D=y[b],z=D.distr,R,V;D.ori==0?(Kn(c,Ev),R=r,V=o):(Kn(c,Av),R=o,V=r);let X={};for(let M in y){let E=y[M];(E.min!=null||E.max!=null)&&(X[M]={min:E.min,max:E.max},E.min=E.max=null)}let nt=s.tzDate||(M=>new Date(un(M/p))),tt=s.fmtDate||Oh,j=p==1?Ey(nt):Cy(nt),rt=Gm(nt,Hm(p==1?wy:Ty,tt)),at=Xm(nt,Wm(Py,tt)),Mt=[],Tt=n.legend=rn({},Ny,s.legend),yt=n.cursor=rn({},zy,{drag:{y:i==2}},s.cursor),et=Tt.show,ut=yt.show,pt=Tt.markers;Tt.idxs=Mt,pt.width=ge(pt.width),pt.dash=ge(pt.dash),pt.stroke=ge(pt.stroke),pt.fill=ge(pt.fill);let ct,zt,$t,H=[],jt=[],ot,mt=!1,st={};if(Tt.live){let M=v[1]?v[1].values:null;mt=M!=null,ot=mt?M(n,1,0):{_:0};for(let E in ot)st[E]=Ih}if(et)if(ct=bi("table",Fv,c),$t=bi("tbody",null,ct),Tt.mount(n,ct),mt){zt=bi("thead",null,ct,$t);let M=bi("tr",null,zt);bi("th",null,M);for(var Et in ot)bi("th",vm,M).textContent=Et}else Kn(ct,Bv),Tt.live&&Kn(ct,Ov);let ft={show:!0},Ct={show:!1};function Gt(M,E){if(E==0&&(mt||!Tt.live||i==2))return Wr;let I=[],F=bi("tr",zv,$t,$t.childNodes[E]);Kn(F,M.class),M.show||Kn(F,Xs);let k=bi("th",null,F);if(pt.show){let wt=di(kv,k);if(E>0){let It=pt.width(n,E);It&&(wt.style.border=It+"px "+pt.dash(n,E)+" "+pt.stroke(n,E)),wt.style.background=pt.fill(n,E)}}let J=di(vm,k);M.label instanceof HTMLElement?J.appendChild(M.label):J.textContent=M.label,E>0&&(pt.show||(J.style.color=M.width>0?pt.stroke(n,E):pt.fill(n,E)),A("click",k,wt=>{if(yt._lock)return;Ce(wt);let It=v.indexOf(M);if((wt.ctrlKey||wt.metaKey)!=Tt.isolate){let Bt=v.some((Vt,Wt)=>Wt>0&&Wt!=It&&Vt.show);v.forEach((Vt,Wt)=>{Wt>0&&Li(Wt,Bt?Wt==It?ft:Ct:ft,!0,sn.setSeries)})}else Li(It,{show:!M.show},!0,sn.setSeries)},!1),gn&&A(bm,k,wt=>{yt._lock||(Ce(wt),Li(v.indexOf(M),Br,!0,sn.setSeries))},!1));for(var ht in ot){let wt=bi("td",Vv,F);wt.textContent="--",I.push(wt)}return[F,I]}let N=new Map;function A(M,E,I,F=!0){let k=N.get(E)||{},J=yt.bind[M](n,E,I,F);J&&(qs(M,E,k[M]=J),N.set(E,k))}function B(M,E,I){let F=N.get(E)||{};for(let k in F)(M==null||k==M)&&(bh(k,E,F[k]),delete F[k]);M==null&&N.delete(E)}let O=0,Z=0,Y=0,it=0,xt=0,vt=0,Zt=xt,bt=vt,Ft=Y,ie=it,Xt=0,Nt=0,Kt=0,Qt=0;n.bbox={};let Te=!1,se=!1,G=!1,gt=!1,lt=!1,Pt=!1;function Lt(M,E,I){(I||M!=n.width||E!=n.height)&&re(M,E),Ir(!1),G=!0,se=!0,Lr()}function re(M,E){n.width=O=Y=M,n.height=Z=it=E,xt=vt=0,_e(),Rn();let I=n.bbox;Xt=I.left=Gs(xt*Se,.5),Nt=I.top=Gs(vt*Se,.5),Kt=I.width=Gs(Y*Se,.5),Qt=I.height=Gs(it*Se,.5)}let xe=3;function we(){let M=!1,E=0;for(;!M;){E++;let I=rv(E),F=ov(E);M=E==xe||I&&F,M||(re(n.width,n.height),se=!0)}}function tn({width:M,height:E}){Lt(M,E)}n.setSize=tn;function _e(){let M=!1,E=!1,I=!1,F=!1;x.forEach((k,J)=>{if(k.show&&k._show){let{side:ht,_size:wt}=k,It=ht%2,Bt=k.label!=null?k.labelSize:0,Vt=wt+Bt;Vt>0&&(It?(Y-=Vt,ht==3?(xt+=Vt,F=!0):I=!0):(it-=Vt,ht==0?(vt+=Vt,M=!0):E=!0))}}),T[0]=M,T[1]=I,T[2]=E,T[3]=F,Y-=q[1]+q[3],xt+=q[3],it-=q[2]+q[0],vt+=q[0]}function Rn(){let M=xt+Y,E=vt+it,I=xt,F=vt;function k(J,ht){switch(J){case 1:return M+=ht,M-ht;case 2:return E+=ht,E-ht;case 3:return I-=ht,I+ht;case 0:return F-=ht,F+ht}}x.forEach((J,ht)=>{if(J.show&&J._show){let wt=J.side;J._pos=k(wt,J._size),J.label!=null&&(J._lpos=k(wt,J.labelSize))}})}if(yt.dataIdx==null){let M=yt.hover,E=M.skip=new Set(M.skip??[]);E.add(void 0);let I=M.prox=ge(M.prox),F=M.bias??(M.bias=0);yt.dataIdx=(k,J,ht,wt)=>{if(J==0)return ht;let It=ht,Bt=I(k,J,ht,wt)??Ue,Vt=Bt>=0&&Bt<Ue,Wt=D.ori==0?Y:it,ae=yt.left,Me=t[0],ve=t[J];if(E.has(ve[ht])){It=null;let fe=null,te=null,Jt;if(F==0||F==-1)for(Jt=ht;fe==null&&Jt-- >0;)E.has(ve[Jt])||(fe=Jt);if(F==0||F==1)for(Jt=ht;te==null&&Jt++<ve.length;)E.has(ve[Jt])||(te=Jt);if(fe!=null||te!=null)if(Vt){let He=fe==null?-1/0:R(Me[fe],D,Wt,0),Ze=te==null?1/0:R(Me[te],D,Wt,0),yn=ae-He,Ne=Ze-ae;yn<=Ne?yn<=Bt&&(It=fe):Ne<=Bt&&(It=te)}else It=te==null?fe:fe==null?te:ht-fe<=te-ht?fe:te}else Vt&&hn(ae-R(Me[ht],D,Wt,0))>Bt&&(It=null);return It}}let Ce=M=>{yt.event=M};yt.idxs=Mt,yt._lock=!1;let ze=yt.points;ze.show=ge(ze.show),ze.size=ge(ze.size),ze.stroke=ge(ze.stroke),ze.width=ge(ze.width),ze.fill=ge(ze.fill);let mn=n.focus=rn({},s.focus||{alpha:.3},yt.focus),gn=mn.prox>=0,Yn=gn&&ze.one,Oe=[],Pn=[],vi=[];function Q(M,E){let I=ze.show(n,E);if(I instanceof HTMLElement)return Kn(I,Uv),Kn(I,M.class),Fi(I,-10,-10,Y,it),m.insertBefore(I,Oe[E]),I}function dt(M,E){if(i==1||E>0){let I=i==1&&y[M.scale].time,F=M.value;M.value=I?Bm(F)?Xm(nt,Wm(F,tt)):F||at:F||Zy,M.label=M.label||(I?Vy:ky)}if(Yn||E>0){M.width=M.width==null?1:M.width,M.paths=M.paths||cM||Qv,M.fillTo=ge(M.fillTo||tM),M.pxAlign=+ye(M.pxAlign,_),M.pxRound=tg(M.pxAlign),M.stroke=ge(M.stroke||null),M.fill=ge(M.fill||null),M._stroke=M._fill=M._paths=M._focus=null;let I=Jy(kn(1,M.width),1),F=M.points=rn({},{size:I,width:kn(1,I*.2),stroke:M.stroke,space:I*2,paths:uM,_stroke:null,_fill:null},M.points);F.show=ge(F.show),F.filter=ge(F.filter),F.fill=ge(F.fill),F.stroke=ge(F.stroke),F.paths=ge(F.paths),F.pxAlign=M.pxAlign}if(et){let I=Gt(M,E);H.splice(E,0,I[0]),jt.splice(E,0,I[1]),Tt.values.push(null)}if(ut){Mt.splice(E,0,null);let I=null;Yn?E==0&&(I=Q(M,E)):E>0&&(I=Q(M,E)),Oe.splice(E,0,I),Pn.splice(E,0,0),vi.splice(E,0,0)}vn("addSeries",E)}function Ut(M,E){E=E??v.length,M=i==1?Rh(M,E,Ym,jm):Rh(M,E,{},Km),v.splice(E,0,M),dt(v[E],E)}n.addSeries=Ut;function le(M){if(v.splice(M,1),et){Tt.values.splice(M,1),jt.splice(M,1);let E=H.splice(M,1)[0];B(null,E.firstChild),E.remove()}ut&&(Mt.splice(M,1),Oe.splice(M,1)[0].remove(),Pn.splice(M,1),vi.splice(M,1)),vn("delSeries",M)}n.delSeries=le;let T=[!1,!1,!1,!1];function W(M,E){if(M._show=M.show,M.show){let I=M.side%2,F=y[M.scale];F==null&&(M.scale=I?v[1].scale:b,F=y[M.scale]);let k=F.time;M.size=ge(M.size),M.space=ge(M.space),M.rotate=ge(M.rotate),Ss(M.incrs)&&M.incrs.forEach(ht=>{!bs.has(ht)&&bs.set(ht,fg(ht))}),M.incrs=ge(M.incrs||(F.distr==2?My:k?p==1?by:Ay:Ws)),M.splits=ge(M.splits||(k&&F.distr==1?j:F.distr==3?Eh:F.distr==4?Wy:Gy)),M.stroke=ge(M.stroke),M.grid.stroke=ge(M.grid.stroke),M.ticks.stroke=ge(M.ticks.stroke),M.border.stroke=ge(M.border.stroke);let J=M.values;M.values=Ss(J)&&!Ss(J[0])?ge(J):k?Ss(J)?Gm(nt,Hm(J,tt)):Bm(J)?Ry(nt,J):J||rt:J||Hy,M.filter=ge(M.filter||(F.distr>=3&&F.log==10?Yy:F.distr==3&&F.log==2?$y:hg)),M.font=sg(M.font),M.labelFont=sg(M.labelFont),M._size=M.size(n,null,E,0),M._space=M._rotate=M._incrs=M._found=M._splits=M._values=null,M._size>0&&(T[E]=!0,M._el=di(Iv,d))}}function K(M,E,I,F){let[k,J,ht,wt]=I,It=E%2,Bt=0;return It==0&&(wt||J)&&(Bt=E==0&&!k||E==2&&!ht?un(qm.size/3):0),It==1&&(k||ht)&&(Bt=E==1&&!J||E==3&&!wt?un(Zm.size/2):0),Bt}let $=n.padding=(s.padding||[K,K,K,K]).map(M=>ge(ye(M,K))),q=n._padding=$.map((M,E)=>M(n,E,T,0)),St,Rt=null,At=null,kt=i==1?v[0].idxs:null,Yt=null,Ot=!1;function ne(M,E){if(t=M??[],n.data=n._data=t,i==2){St=0;for(let I=1;I<v.length;I++)St+=t[I][0].length}else{t.length==0&&(n.data=n._data=t=[[]]),Yt=t[0],St=Yt.length;let I=t;if(z==2){I=t.slice();let F=I[0]=Array(St);for(let k=0;k<St;k++)F[k]=k}n._data=t=I}if(Ir(!0),vn("setData"),z==2&&(G=!0),E!==!1){let I=D;I.auto(n,Ot)?De():vs(b,I.min,I.max),gt=gt||yt.left>=0,Pt=!0,Lr()}}n.setData=ne;function De(){Ot=!0;let M,E;i==1&&(St>0?(Rt=kt[0]=0,At=kt[1]=St-1,M=t[0][Rt],E=t[0][At],z==2?(M=Rt,E=At):M==E&&(z==3?[M,E]=Rl(M,M,D.log,!1):z==4?[M,E]=Nh(M,M,D.log,!1):D.time?E=M+un(86400/p):[M,E]=Al(M,E,Dh,!0))):(Rt=kt[0]=M=null,At=kt[1]=E=null)),vs(b,M,E)}let Xe,Ye,Fn,me,oe,$i,Le,yi,Cr,nn;function Rr(M,E,I,F,k,J){M??(M=Mm),I??(I=Fh),F??(F="butt"),k??(k=Mm),J??(J="round"),M!=Xe&&(h.strokeStyle=Xe=M),k!=Ye&&(h.fillStyle=Ye=k),E!=Fn&&(h.lineWidth=Fn=E),J!=oe&&(h.lineJoin=oe=J),F!=$i&&(h.lineCap=$i=F),I!=me&&h.setLineDash(me=I)}function cn(M,E,I,F){E!=Ye&&(h.fillStyle=Ye=E),M!=Le&&(h.font=Le=M),I!=yi&&(h.textAlign=yi=I),F!=Cr&&(h.textBaseline=Cr=F)}function ci(M,E,I,F,k=0){if(F.length>0&&M.auto(n,Ot)&&(E==null||E.min==null)){let J=ye(Rt,0),ht=ye(At,F.length-1),wt=I.min==null?Yv(F,J,ht,k,M.distr==3):[I.min,I.max];M.min=Ei(M.min,I.min=wt[0]),M.max=kn(M.max,I.max=wt[1])}}let Pr={min:null,max:null};function Xn(){for(let F in y){let k=y[F];X[F]==null&&(k.min==null||X[b]!=null&&k.auto(n,Ot))&&(X[F]=Pr)}for(let F in y){let k=y[F];X[F]==null&&k.from!=null&&X[k.from]!=null&&(X[F]=Pr)}X[b]!=null&&Ir(!0);let M={};for(let F in X){let k=X[F];if(k!=null){let J=M[F]=Xr(y[F],ny);if(k.min!=null)rn(J,k);else if(F!=b||i==2)if(St==0&&J.from==null){let ht=J.range(n,null,null,F);J.min=ht[0],J.max=ht[1]}else J.min=Ue,J.max=-Ue}}if(St>0){v.forEach((F,k)=>{if(i==1){let J=F.scale,ht=X[J];if(ht==null)return;let wt=M[J];if(k==0){let It=wt.range(n,wt.min,wt.max,J);wt.min=It[0],wt.max=It[1],Rt=wi(wt.min,t[0]),At=wi(wt.max,t[0]),At-Rt>1&&(t[0][Rt]<wt.min&&Rt++,t[0][At]>wt.max&&At--),F.min=Yt[Rt],F.max=Yt[At]}else F.show&&F.auto&&ci(wt,ht,F,t[k],F.sorted);F.idxs[0]=Rt,F.idxs[1]=At}else if(k>0&&F.show&&F.auto){let[J,ht]=F.facets,wt=J.scale,It=ht.scale,[Bt,Vt]=t[k],Wt=M[wt],ae=M[It];Wt!=null&&ci(Wt,X[wt],J,Bt,J.sorted),ae!=null&&ci(ae,X[It],ht,Vt,ht.sorted),F.min=ht.min,F.max=ht.max}});for(let F in M){let k=M[F],J=X[F];if(k.from==null&&(J==null||J.min==null)){let ht=k.range(n,k.min==Ue?null:k.min,k.max==-Ue?null:k.max,F);k.min=ht[0],k.max=ht[1]}}}for(let F in M){let k=M[F];if(k.from!=null){let J=M[k.from];if(J.min==null)k.min=k.max=null;else{let ht=k.range(n,J.min,J.max,F);k.min=ht[0],k.max=ht[1]}}}let E={},I=!1;for(let F in M){let k=M[F],J=y[F];if(J.min!=k.min||J.max!=k.max){J.min=k.min,J.max=k.max;let ht=J.distr;J._min=ht==3?Ji(J.min):ht==4?gh(J.min,J.asinh):ht==100?J.fwd(J.min):J.min,J._max=ht==3?Ji(J.max):ht==4?gh(J.max,J.asinh):ht==100?J.fwd(J.max):J.max,E[F]=I=!0}}if(I){v.forEach((F,k)=>{i==2?k>0&&E.y&&(F._paths=null):E[F.scale]&&(F._paths=null)});for(let F in E)G=!0,vn("setScale",F);ut&&yt.left>=0&&(gt=Pt=!0)}for(let F in X)X[F]=null}function Go(M){let E=wh(Rt-1,0,St-1),I=wh(At+1,0,St-1);for(;M[E]==null&&E>0;)E--;for(;M[I]==null&&I<St-1;)I++;return[E,I]}function th(){if(St>0){let M=v.some(E=>E._focus)&&nn!=mn.alpha;M&&(h.globalAlpha=nn=mn.alpha),v.forEach((E,I)=>{if(I>0&&E.show&&(Wo(I,!1),Wo(I,!0),E._paths==null)){let F=nn;nn!=E.alpha&&(h.globalAlpha=nn=E.alpha);let k=i==2?[0,t[I][0].length-1]:Go(t[I]);E._paths=E.paths(n,I,k[0],k[1]),nn!=F&&(h.globalAlpha=nn=F)}}),v.forEach((E,I)=>{if(I>0&&E.show){let F=nn;nn!=E.alpha&&(h.globalAlpha=nn=E.alpha),E._paths!=null&&jp(I,!1);{let k=E._paths!=null?E._paths.gaps:null,J=E.points.show(n,I,Rt,At,k),ht=E.points.filter(n,I,J,k);(J||ht)&&(E.points._paths=E.points.paths(n,I,Rt,At,ht),jp(I,!0))}nn!=F&&(h.globalAlpha=nn=F),vn("drawSeries",I)}}),M&&(h.globalAlpha=nn=1)}}function Wo(M,E){let I=E?v[M].points:v[M];I._stroke=I.stroke(n,M),I._fill=I.fill(n,M)}function jp(M,E){let I=E?v[M].points:v[M],{stroke:F,fill:k,clip:J,flags:ht,_stroke:wt=I._stroke,_fill:It=I._fill,_width:Bt=I.width}=I._paths;Bt=Fe(Bt*Se,3);let Vt=null,Wt=Bt%2/2;E&&It==null&&(It=Bt>0?"#fff":wt);let ae=I.pxAlign==1&&Wt>0;if(ae&&h.translate(Wt,Wt),!E){let Me=Xt-Bt/2,ve=Nt-Bt/2,fe=Kt+Bt,te=Qt+Bt;Vt=new Path2D,Vt.rect(Me,ve,fe,te)}E?eh(wt,Bt,I.dash,I.cap,It,F,k,ht,J):iv(M,wt,Bt,I.dash,I.cap,It,F,k,ht,Vt,J),ae&&h.translate(-Wt,-Wt)}function iv(M,E,I,F,k,J,ht,wt,It,Bt,Vt){let Wt=!1;It!=0&&L.forEach((ae,Me)=>{if(ae.series[0]==M){let ve=v[ae.series[1]],fe=t[ae.series[1]],te=(ve._paths||ea).band;Ss(te)&&(te=ae.dir==1?te[0]:te[1]);let Jt,He=null;ve.show&&te&&Zv(fe,Rt,At)?(He=ae.fill(n,Me)||J,Jt=ve._paths.clip):te=null,eh(E,I,F,k,He,ht,wt,It,Bt,Vt,Jt,te),Wt=!0}}),Wt||eh(E,I,F,k,J,ht,wt,It,Bt,Vt)}let Qp=qr|Th;function eh(M,E,I,F,k,J,ht,wt,It,Bt,Vt,Wt){Rr(M,E,I,F,k),(It||Bt||Wt)&&(h.save(),It&&h.clip(It),Bt&&h.clip(Bt)),Wt?(wt&Qp)==Qp?(h.clip(Wt),Vt&&h.clip(Vt),_l(k,ht),gl(M,J,E)):wt&Th?(_l(k,ht),h.clip(Wt),gl(M,J,E)):wt&qr&&(h.save(),h.clip(Wt),Vt&&h.clip(Vt),_l(k,ht),h.restore(),gl(M,J,E)):(_l(k,ht),gl(M,J,E)),(It||Bt||Wt)&&h.restore()}function gl(M,E,I){I>0&&(E instanceof Map?E.forEach((F,k)=>{h.strokeStyle=Xe=k,h.stroke(F)}):E!=null&&M&&h.stroke(E))}function _l(M,E){E instanceof Map?E.forEach((I,F)=>{h.fillStyle=Ye=F,h.fill(I)}):E!=null&&M&&h.fill(E)}function sv(M,E,I,F){let k=x[M],J;if(F<=0)J=[0,0];else{let ht=k._space=k.space(n,M,E,I,F),wt=k._incrs=k.incrs(n,M,E,I,F,ht);J=gM(E,I,wt,F,ht)}return k._found=J}function nh(M,E,I,F,k,J,ht,wt,It,Bt){let Vt=ht%2/2;_==1&&h.translate(Vt,Vt),Rr(wt,ht,It,Bt,wt),h.beginPath();let Wt,ae,Me,ve,fe=k+(F==0||F==3?-J:J);I==0?(ae=k,ve=fe):(Wt=k,Me=fe);for(let te=0;te<M.length;te++)E[te]!=null&&(I==0?Wt=Me=M[te]:ae=ve=M[te],h.moveTo(Wt,ae),h.lineTo(Me,ve));h.stroke(),_==1&&h.translate(-Vt,-Vt)}function rv(M){let E=!0;return x.forEach((I,F)=>{if(!I.show)return;let k=y[I.scale];if(k.min==null){I._show&&(E=!1,I._show=!1,Ir(!1));return}else I._show||(E=!1,I._show=!0,Ir(!1));let J=I.side,ht=J%2,{min:wt,max:It}=k,[Bt,Vt]=sv(F,wt,It,ht==0?Y:it);if(Vt==0)return;let Wt=k.distr==2,ae=I._splits=I.splits(n,F,wt,It,Bt,Vt,Wt),Me=k.distr==2?ae.map(Jt=>Yt[Jt]):ae,ve=k.distr==2?Yt[ae[1]]-Yt[ae[0]]:Bt,fe=I._values=I.values(n,I.filter(n,Me,F,Vt,ve),F,Vt,ve);I._rotate=J==2?I.rotate(n,fe,F,Vt):0;let te=I._size;I._size=fi(I.size(n,fe,F,M)),te!=null&&I._size!=te&&(E=!1)}),E}function ov(M){let E=!0;return $.forEach((I,F)=>{let k=I(n,F,T,M);k!=q[F]&&(E=!1),q[F]=k}),E}function av(){for(let M=0;M<x.length;M++){let E=x[M];if(!E.show||!E._show)continue;let I=E.side,F=I%2,k,J,ht=E.stroke(n,M),wt=I==0||I==3?-1:1,[It,Bt]=E._found;if(E.label!=null){let Bn=E.labelGap*wt,Jn=un((E._lpos+Bn)*Se);cn(E.labelFont[0],ht,"center",I==2?"top":ym),h.save(),F==1?(k=J=0,h.translate(Jn,un(Nt+Qt/2)),h.rotate((I==3?-wl:wl)/2)):(k=un(Xt+Kt/2),J=Jn);let Hs=cg(E.label)?E.label(n,M,It,Bt):E.label;h.fillText(Hs,k,J),h.restore()}if(Bt==0)continue;let Vt=y[E.scale],Wt=F==0?Kt:Qt,ae=F==0?Xt:Nt,Me=E._splits,ve=Vt.distr==2?Me.map(Bn=>Yt[Bn]):Me,fe=Vt.distr==2?Yt[Me[1]]-Yt[Me[0]]:It,te=E.ticks,Jt=E.border,He=te.show?te.size:0,Ze=un(He*Se),yn=un((E.alignTo==2?E._size-He-E.gap:E.gap)*Se),Ne=E._rotate*-wl/180,Je=g(E._pos*Se),$n=(Ze+yn)*wt,On=Je+$n;J=F==0?On:0,k=F==1?On:0;let ui=E.font[0],Mi=E.align==1?kr:E.align==2?fh:Ne>0?kr:Ne<0?fh:F==0?"center":I==3?fh:kr,Di=Ne||F==1?"middle":I==2?"top":ym;cn(ui,ht,Mi,Di);let Zn=E.font[1]*E.lineGap,hi=Me.map(Bn=>g(a(Bn,Vt,Wt,ae))),Si=E._values;for(let Bn=0;Bn<Si.length;Bn++){let Jn=Si[Bn];if(Jn!=null){F==0?k=hi[Bn]:J=hi[Bn],Jn=""+Jn;let Hs=Jn.indexOf(`
`)==-1?[Jn]:Jn.split(/\n/gm);for(let zn=0;zn<Hs.length;zn++){let xm=Hs[zn];Ne?(h.save(),h.translate(k,J+zn*Zn),h.rotate(Ne),h.fillText(xm,0,0),h.restore()):h.fillText(xm,k,J+zn*Zn)}}}te.show&&nh(hi,te.filter(n,ve,M,Bt,fe),F,I,Je,Ze,Fe(te.width*Se,3),te.stroke(n,M),te.dash,te.cap);let Ui=E.grid;Ui.show&&nh(hi,Ui.filter(n,ve,M,Bt,fe),F,F==0?2:1,F==0?Nt:Xt,F==0?Qt:Kt,Fe(Ui.width*Se,3),Ui.stroke(n,M),Ui.dash,Ui.cap),Jt.show&&nh([Je],[1],F==0?1:0,F==0?1:2,F==1?Nt:Xt,F==1?Qt:Kt,Fe(Jt.width*Se,3),Jt.stroke(n,M),Jt.dash,Jt.cap)}vn("drawAxes")}function Ir(M){v.forEach((E,I)=>{I>0&&(E._paths=null,M&&(i==1?(E.min=null,E.max=null):E.facets.forEach(F=>{F.min=null,F.max=null})))})}let xl=!1,ih=!1,Xo=[];function lv(){ih=!1;for(let M=0;M<Xo.length;M++)vn(...Xo[M]);Xo.length=0}function Lr(){xl||(cy(tm),xl=!0)}function cv(M,E=!1){xl=!0,ih=E,M(n),tm(),E&&Xo.length>0&&queueMicrotask(lv)}n.batch=cv;function tm(){if(Te&&(Xn(),Te=!1),G&&(we(),G=!1),se){if(Ge(f,kr,xt),Ge(f,"top",vt),Ge(f,Ko,Y),Ge(f,jo,it),Ge(m,kr,xt),Ge(m,"top",vt),Ge(m,Ko,Y),Ge(m,jo,it),Ge(d,Ko,O),Ge(d,jo,Z),u.width=un(O*Se),u.height=un(Z*Se),x.forEach(({_el:M,_show:E,_size:I,_pos:F,side:k})=>{if(M!=null)if(E){let J=k===3||k===0?I:0,ht=k%2==1;Ge(M,ht?"left":"top",F-J),Ge(M,ht?"width":"height",I),Ge(M,ht?"top":"left",ht?vt:xt),Ge(M,ht?"height":"width",ht?it:Y),Sh(M,Xs)}else Kn(M,Xs)}),Xe=Ye=Fn=oe=$i=Le=yi=Cr=me=null,nn=1,$o(!0),xt!=Zt||vt!=bt||Y!=Ft||it!=ie){Ir(!1);let M=Y/Ft,E=it/ie;if(ut&&!gt&&yt.left>=0){yt.left*=M,yt.top*=E,Nr&&Fi(Nr,un(yt.left),0,Y,it),Dr&&Fi(Dr,0,un(yt.top),Y,it);for(let I=0;I<Oe.length;I++){let F=Oe[I];F!=null&&(Pn[I]*=M,vi[I]*=E,Fi(F,fi(Pn[I]),fi(vi[I]),Y,it))}}if(Ve.show&&!lt&&Ve.left>=0&&Ve.width>0){Ve.left*=M,Ve.width*=M,Ve.top*=E,Ve.height*=E;for(let I in ch)Ge(Or,I,Ve[I])}Zt=xt,bt=vt,Ft=Y,ie=it}vn("setSize"),se=!1}O>0&&Z>0&&(h.clearRect(0,0,u.width,u.height),vn("drawClear"),P.forEach(M=>M()),vn("draw")),Ve.show&&lt&&(vl(Ve),lt=!1),ut&&gt&&(Vs(null,!0,!1),gt=!1),Tt.show&&Tt.live&&Pt&&(ah(),Pt=!1),l||(l=!0,n.status=1,vn("ready")),Ot=!1,xl=!1}n.redraw=(M,E)=>{G=E||!1,M!==!1?vs(b,D.min,D.max):Lr()};function sh(M,E){let I=y[M];if(I.from==null){if(St==0){let F=I.range(n,E.min,E.max,M);E.min=F[0],E.max=F[1]}if(E.min>E.max){let F=E.min;E.min=E.max,E.max=F}if(St>1&&E.min!=null&&E.max!=null&&E.max-E.min<1e-16)return;M==b&&I.distr==2&&St>0&&(E.min=wi(E.min,t[0]),E.max=wi(E.max,t[0]),E.min==E.max&&E.max++),X[M]=E,Te=!0,Lr()}}n.setScale=sh;let rh,oh,Nr,Dr,em,nm,Ur,Fr,im,sm,ke,qe,xs=!1,An=yt.drag,_n=An.x,xn=An.y;ut&&(yt.x&&(rh=di(Nv,m)),yt.y&&(oh=di(Dv,m)),D.ori==0?(Nr=rh,Dr=oh):(Nr=oh,Dr=rh),ke=yt.left,qe=yt.top);let Ve=n.select=rn({show:!0,over:!0,left:0,width:0,top:0,height:0},s.select),Or=Ve.show?di(Lv,Ve.over?m:f):null;function vl(M,E){if(Ve.show){for(let I in M)Ve[I]=M[I],I in ch&&Ge(Or,I,M[I]);E!==!1&&vn("setSelect")}}n.setSelect=vl;function uv(M){if(v[M].show)et&&Sh(H[M],Xs);else if(et&&Kn(H[M],Xs),ut){let I=Yn?Oe[0]:Oe[M];I!=null&&Fi(I,-10,-10,Y,it)}}function vs(M,E,I){sh(M,{min:E,max:I})}function Li(M,E,I,F){E.focus!=null&&mv(M),E.show!=null&&v.forEach((k,J)=>{J>0&&(M==J||M==null)&&(k.show=E.show,uv(J),i==2?(vs(k.facets[0].scale,null,null),vs(k.facets[1].scale,null,null)):vs(k.scale,null,null),Lr())}),I!==!1&&vn("setSeries",M,E),F&&Zo("setSeries",n,M,E)}n.setSeries=Li;function hv(M,E){rn(L[M],E)}function dv(M,E){M.fill=ge(M.fill||null),M.dir=ye(M.dir,-1),E=E??L.length,L.splice(E,0,M)}function fv(M){M==null?L.length=0:L.splice(M,1)}n.addBand=dv,n.setBand=hv,n.delBand=fv;function pv(M,E){v[M].alpha=E,ut&&Oe[M]!=null&&(Oe[M].style.opacity=E),et&&H[M]&&(H[M].style.opacity=E)}let Zi,ys,ks,Br={focus:!0};function mv(M){if(M!=ks){let E=M==null,I=mn.alpha!=1;v.forEach((F,k)=>{if(i==1||k>0){let J=E||k==0||k==M;F._focus=E?null:J,I&&pv(k,J?1:mn.alpha)}}),ks=M,I&&Lr()}}et&&gn&&A(wm,ct,M=>{yt._lock||(Ce(M),ks!=null&&Li(null,Br,!0,sn.setSeries))});function Ni(M,E,I){let F=y[E];I&&(M=M/Se-(F.ori==1?vt:xt));let k=Y;F.ori==1&&(k=it,M=k-M),F.dir==-1&&(M=k-M);let J=F._min,ht=F._max,wt=M/k,It=J+(ht-J)*wt,Bt=F.distr;return Bt==3?Gr(10,It):Bt==4?Kv(It,F.asinh):Bt==100?F.bwd(It):It}function gv(M,E){let I=Ni(M,b,E);return wi(I,t[0],Rt,At)}n.valToIdx=M=>wi(M,t[0]),n.posToIdx=gv,n.posToVal=Ni,n.valToPos=(M,E,I)=>y[E].ori==0?r(M,y[E],I?Kt:Y,I?Xt:0):o(M,y[E],I?Qt:it,I?Nt:0),n.setCursor=(M,E,I)=>{ke=M.left,qe=M.top,Vs(null,E,I)};function rm(M,E){Ge(Or,kr,Ve.left=M),Ge(Or,Ko,Ve.width=E)}function om(M,E){Ge(Or,"top",Ve.top=M),Ge(Or,jo,Ve.height=E)}let qo=D.ori==0?rm:om,Yo=D.ori==1?rm:om;function _v(){if(et&&Tt.live)for(let M=i==2?1:0;M<v.length;M++){if(M==0&&mt)continue;let E=Tt.values[M],I=0;for(let F in E)jt[M][I++].firstChild.nodeValue=E[F]}}function ah(M,E){if(M!=null&&(M.idxs?M.idxs.forEach((I,F)=>{Mt[F]=I}):ey(M.idx)||Mt.fill(M.idx),Tt.idx=Mt[0]),et&&Tt.live){for(let I=0;I<v.length;I++)(I>0||i==1&&!mt)&&xv(I,Mt[I]);_v()}Pt=!1,E!==!1&&vn("setLegend")}n.setLegend=ah;function xv(M,E){let I=v[M],F=M==0&&z==2?Yt:t[M],k;mt?k=I.values(n,M,E)??st:(k=I.value(n,E==null?null:F[E],M,E),k=k==null?st:{_:k}),Tt.values[M]=k}function Vs(M,E,I){im=ke,sm=qe,[ke,qe]=yt.move(n,ke,qe),yt.left=ke,yt.top=qe,ut&&(Nr&&Fi(Nr,un(ke),0,Y,it),Dr&&Fi(Dr,0,un(qe),Y,it));let F,k=Rt>At;Zi=Ue,ys=null;let J=D.ori==0?Y:it,ht=D.ori==1?Y:it;if(ke<0||St==0||k){F=yt.idx=null;for(let wt=0;wt<v.length;wt++){let It=Oe[wt];It!=null&&Fi(It,-10,-10,Y,it)}gn&&Li(null,Br,!0,M==null&&sn.setSeries),Tt.live&&(Mt.fill(F),Pt=!0)}else{let wt,It,Bt;i==1&&(wt=D.ori==0?ke:qe,It=Ni(wt,b),F=yt.idx=wi(It,t[0],Rt,At),Bt=R(t[0][F],D,J,0));let Vt=-10,Wt=-10,ae=0,Me=0,ve=!0,fe="",te="";for(let Jt=i==2?1:0;Jt<v.length;Jt++){let He=v[Jt],Ze=Mt[Jt],yn=Ze==null?null:i==1?t[Jt][Ze]:t[Jt][1][Ze],Ne=yt.dataIdx(n,Jt,F,It),Je=Ne==null?null:i==1?t[Jt][Ne]:t[Jt][1][Ne];if(Pt=Pt||Je!=yn||Ne!=Ze,Mt[Jt]=Ne,Jt>0&&He.show){let $n=Ne==null?-10:Ne==F?Bt:R(i==1?t[0][Ne]:t[Jt][0][Ne],D,J,0),On=Je==null?-10:V(Je,i==1?y[He.scale]:y[He.facets[1].scale],ht,0);if(gn&&Je!=null){let ui=D.ori==1?ke:qe,Mi=hn(mn.dist(n,Jt,Ne,On,ui));if(Mi<Zi){let Di=mn.bias;if(Di!=0){let Zn=Ni(ui,He.scale),hi=Je>=0?1:-1,Si=Zn>=0?1:-1;Si==hi&&(Si==1?Di==1?Je>=Zn:Je<=Zn:Di==1?Je<=Zn:Je>=Zn)&&(Zi=Mi,ys=Jt)}else Zi=Mi,ys=Jt}}if(Pt||Yn){let ui,Mi;D.ori==0?(ui=$n,Mi=On):(ui=On,Mi=$n);let Di,Zn,hi,Si,Ui,Bn,Jn=!0,Hs=ze.bbox;if(Hs!=null){Jn=!1;let zn=Hs(n,Jt);hi=zn.left,Si=zn.top,Di=zn.width,Zn=zn.height}else hi=ui,Si=Mi,Di=Zn=ze.size(n,Jt);if(Bn=ze.fill(n,Jt),Ui=ze.stroke(n,Jt),Yn)Jt==ys&&Zi<=mn.prox&&(Vt=hi,Wt=Si,ae=Di,Me=Zn,ve=Jn,fe=Bn,te=Ui);else{let zn=Oe[Jt];zn!=null&&(Pn[Jt]=hi,vi[Jt]=Si,Im(zn,Di,Zn,Jn),Rm(zn,Bn,Ui),Fi(zn,fi(hi),fi(Si),Y,it))}}}}if(Yn){let Jt=mn.prox,He=ks==null?Zi<=Jt:Zi>Jt||ys!=ks;if(Pt||He){let Ze=Oe[0];Ze!=null&&(Pn[0]=Vt,vi[0]=Wt,Im(Ze,ae,Me,ve),Rm(Ze,fe,te),Fi(Ze,fi(Vt),fi(Wt),Y,it))}}}if(Ve.show&&xs)if(M!=null){let[wt,It]=sn.scales,[Bt,Vt]=sn.match,[Wt,ae]=M.cursor.sync.scales,Me=M.cursor.drag;if(_n=Me._x,xn=Me._y,_n||xn){let{left:ve,top:fe,width:te,height:Jt}=M.select,He=M.scales[Wt].ori,Ze=M.posToVal,yn,Ne,Je,$n,On,ui=wt!=null&&Bt(wt,Wt),Mi=It!=null&&Vt(It,ae);ui&&_n?(He==0?(yn=ve,Ne=te):(yn=fe,Ne=Jt),Je=y[wt],$n=R(Ze(yn,Wt),Je,J,0),On=R(Ze(yn+Ne,Wt),Je,J,0),qo(Ei($n,On),hn(On-$n))):qo(0,J),Mi&&xn?(He==1?(yn=ve,Ne=te):(yn=fe,Ne=Jt),Je=y[It],$n=V(Ze(yn,ae),Je,ht,0),On=V(Ze(yn+Ne,ae),Je,ht,0),Yo(Ei($n,On),hn(On-$n))):Yo(0,ht)}else uh()}else{let wt=hn(im-em),It=hn(sm-nm);if(D.ori==1){let ae=wt;wt=It,It=ae}_n=An.x&&wt>=An.dist,xn=An.y&&It>=An.dist;let Bt=An.uni;Bt!=null?_n&&xn&&(_n=wt>=Bt,xn=It>=Bt,!_n&&!xn&&(It>wt?xn=!0:_n=!0)):An.x&&An.y&&(_n||xn)&&(_n=xn=!0);let Vt,Wt;_n&&(D.ori==0?(Vt=Ur,Wt=ke):(Vt=Fr,Wt=qe),qo(Ei(Vt,Wt),hn(Wt-Vt)),xn||Yo(0,ht)),xn&&(D.ori==1?(Vt=Ur,Wt=ke):(Vt=Fr,Wt=qe),Yo(Ei(Vt,Wt),hn(Wt-Vt)),_n||qo(0,J)),!_n&&!xn&&(qo(0,0),Yo(0,0))}if(An._x=_n,An._y=xn,M==null){if(I){if(_m!=null){let[wt,It]=sn.scales;sn.values[0]=wt!=null?Ni(D.ori==0?ke:qe,wt):null,sn.values[1]=It!=null?Ni(D.ori==1?ke:qe,It):null}Zo(ph,n,ke,qe,Y,it,F)}if(gn){let wt=I&&sn.setSeries,It=mn.prox;ks==null?Zi<=It&&Li(ys,Br,!0,wt):Zi>It?Li(null,Br,!0,wt):ys!=ks&&Li(ys,Br,!0,wt)}}Pt&&(Tt.idx=F,ah()),E!==!1&&vn("setCursor")}let Ms=null;Object.defineProperty(n,"rect",{get(){return Ms==null&&$o(!1),Ms}});function $o(M=!1){M?Ms=null:(Ms=m.getBoundingClientRect(),vn("syncRect",Ms))}function am(M,E,I,F,k,J,ht){yt._lock||xs&&M!=null&&M.movementX==0&&M.movementY==0||(lh(M,E,I,F,k,J,ht,!1,M!=null),M!=null?Vs(null,!0,!0):Vs(E,!0,!1))}function lh(M,E,I,F,k,J,ht,wt,It){if(Ms==null&&$o(!1),Ce(M),M!=null)I=M.clientX-Ms.left,F=M.clientY-Ms.top;else{if(I<0||F<0){ke=-10,qe=-10;return}let[Bt,Vt]=sn.scales,Wt=E.cursor.sync,[ae,Me]=Wt.values,[ve,fe]=Wt.scales,[te,Jt]=sn.match,He=E.axes[0].side%2==1,Ze=D.ori==0?Y:it,yn=D.ori==1?Y:it,Ne=He?J:k,Je=He?k:J,$n=He?F:I,On=He?I:F;if(ve!=null?I=te(Bt,ve)?a(ae,y[Bt],Ze,0):-10:I=Ze*($n/Ne),fe!=null?F=Jt(Vt,fe)?a(Me,y[Vt],yn,0):-10:F=yn*(On/Je),D.ori==1){let ui=I;I=F,F=ui}}It&&(E==null||E.cursor.event.type==ph)&&((I<=1||I>=Y-1)&&(I=Gs(I,Y)),(F<=1||F>=it-1)&&(F=Gs(F,it))),wt?(em=I,nm=F,[Ur,Fr]=yt.move(n,I,F)):(ke=I,qe=F)}let ch={width:0,height:0,left:0,top:0};function uh(){vl(ch,!1)}let lm,cm,um,hm;function dm(M,E,I,F,k,J,ht){xs=!0,_n=xn=An._x=An._y=!1,lh(M,E,I,F,k,J,ht,!0,!1),M!=null&&(A(mh,yh,fm,!1),Zo(Sm,n,Ur,Fr,Y,it,null));let{left:wt,top:It,width:Bt,height:Vt}=Ve;lm=wt,cm=It,um=Bt,hm=Vt}function fm(M,E,I,F,k,J,ht){xs=An._x=An._y=!1,lh(M,E,I,F,k,J,ht,!1,!0);let{left:wt,top:It,width:Bt,height:Vt}=Ve,Wt=Bt>0||Vt>0,ae=lm!=wt||cm!=It||um!=Bt||hm!=Vt;if(Wt&&ae&&vl(Ve),An.setScale&&Wt&&ae){let Me=wt,ve=Bt,fe=It,te=Vt;if(D.ori==1&&(Me=It,ve=Vt,fe=wt,te=Bt),_n&&vs(b,Ni(Me,b),Ni(Me+ve,b)),xn)for(let Jt in y){let He=y[Jt];Jt!=b&&He.from==null&&He.min!=Ue&&vs(Jt,Ni(fe+te,Jt),Ni(fe,Jt))}uh()}else yt.lock&&(yt._lock=!yt._lock,Vs(E,!0,M!=null));M!=null&&(B(mh,yh),Zo(mh,n,ke,qe,Y,it,null))}function vv(M,E,I,F,k,J,ht){if(yt._lock)return;Ce(M);let wt=xs;if(xs){let It=!0,Bt=!0,Vt=10,Wt,ae;D.ori==0?(Wt=_n,ae=xn):(Wt=xn,ae=_n),Wt&&ae&&(It=ke<=Vt||ke>=Y-Vt,Bt=qe<=Vt||qe>=it-Vt),Wt&&It&&(ke=ke<Ur?0:Y),ae&&Bt&&(qe=qe<Fr?0:it),Vs(null,!0,!0),xs=!1}ke=-10,qe=-10,Mt.fill(null),Vs(null,!0,!0),wt&&(xs=wt)}function pm(M,E,I,F,k,J,ht){yt._lock||(Ce(M),De(),uh(),M!=null&&Zo(Em,n,ke,qe,Y,it,null))}function mm(){x.forEach(_M),Lt(n.width,n.height,!0)}qs(El,Hr,mm);let zr={};zr.mousedown=dm,zr.mousemove=am,zr.mouseup=fm,zr.dblclick=pm,zr.setSeries=(M,E,I,F)=>{let k=sn.match[2];I=k(n,E,I),I!=-1&&Li(I,F,!0,!1)},ut&&(A(Sm,m,dm),A(ph,m,am),A(bm,m,M=>{Ce(M),$o(!1)}),A(wm,m,vv),A(Em,m,pm),Ch.add(n),n.syncRect=$o);let yl=n.hooks=s.hooks||{};function vn(M,E,I){ih?Xo.push([M,E,I]):M in yl&&yl[M].forEach(F=>{F.call(null,n,E,I)})}(s.plugins||[]).forEach(M=>{for(let E in M.hooks)yl[E]=(yl[E]||[]).concat(M.hooks[E])});let gm=(M,E,I)=>I,sn=rn({key:null,setSeries:!1,filters:{pub:Fm,sub:Fm},scales:[b,v[1]?v[1].scale:null],match:[Om,Om,gm],values:[null,null]},yt.sync);sn.match.length==2&&sn.match.push(gm),yt.sync=sn;let _m=sn.key,hh=Ng(_m);function Zo(M,E,I,F,k,J,ht){sn.filters.pub(M,E,I,F,k,J,ht)&&hh.pub(M,E,I,F,k,J,ht)}hh.sub(n);function yv(M,E,I,F,k,J,ht){sn.filters.sub(M,E,I,F,k,J,ht)&&zr[M](null,E,I,F,k,J,ht)}n.pub=yv;function Mv(){hh.unsub(n),Ch.delete(n),N.clear(),bh(El,Hr,mm),c.remove(),ct?.remove(),vn("destroy")}n.destroy=Mv;function dh(){vn("init",s,t),ne(t||s.data,!1),X[b]?sh(b,X[b]):De(),lt=Ve.show&&(Ve.width>0||Ve.height>0),gt=Pt=!0,Lt(s.width,s.height)}return v.forEach(dt),x.forEach(W),e?e instanceof HTMLElement?(e.appendChild(c),dh()):e(n,dh):dh(),n}Mn.assign=rn;Mn.fmtNum=Uh;Mn.rangeNum=Al;Mn.rangeLog=Rl;Mn.rangeAsinh=Nh;Mn.orient=$s;Mn.pxRatio=Se;Mn.join=ly;Mn.fmtDate=Oh,Mn.tzDate=vy;Mn.sync=Ng;{Mn.addGap=eM,Mn.clipGaps=Ll;let s=Mn.paths={points:zg};s.linear=Vg,s.stepped=sM,s.bars=rM,s.spline=aM}var Gp={};bv(Gp,{ACESFilmicToneMapping:()=>nx,AddEquation:()=>Ls,AddOperation:()=>j_,AdditiveAnimationBlendMode:()=>Up,AdditiveBlending:()=>Rd,AgXToneMapping:()=>sx,AlphaFormat:()=>ux,AlwaysCompare:()=>Cx,AlwaysDepth:()=>X_,AlwaysStencilFunc:()=>of,AmbientLight:()=>Fu,AnimationAction:()=>qu,AnimationClip:()=>Ar,AnimationLoader:()=>Ff,AnimationMixer:()=>Qf,AnimationObjectGroup:()=>jf,AnimationUtils:()=>WA,ArcCurve:()=>tu,ArrayCamera:()=>kc,ArrowHelper:()=>Mp,AttachedBindMode:()=>Ld,Audio:()=>Wu,AudioAnalyser:()=>Jf,AudioContext:()=>cl,AudioListener:()=>$f,AudioLoader:()=>qf,AxesHelper:()=>Sp,BackSide:()=>Wn,BasicDepthPacking:()=>vx,BasicShadowMap:()=>SM,BatchedMesh:()=>Zc,Bone:()=>Wa,BooleanKeyframeTrack:()=>ms,Box2:()=>lp,Box3:()=>Tn,Box3Helper:()=>vp,BoxGeometry:()=>_r,BoxHelper:()=>xp,BufferAttribute:()=>be,BufferGeometry:()=>de,BufferGeometryLoader:()=>Hu,ByteType:()=>ax,Cache:()=>ls,Camera:()=>Po,CameraHelper:()=>_p,CanvasTexture:()=>If,CapsuleGeometry:()=>ou,CatmullRomCurve3:()=>eu,CineonToneMapping:()=>ex,CircleGeometry:()=>au,ClampToEdgeWrapping:()=>gi,Clock:()=>Gu,Color:()=>Ht,ColorKeyframeTrack:()=>rl,ColorManagement:()=>Pe,CompressedArrayTexture:()=>Rf,CompressedCubeTexture:()=>Pf,CompressedTexture:()=>Do,CompressedTextureLoader:()=>Of,ConeGeometry:()=>lu,ConstantAlphaFactor:()=>H_,ConstantColorFactor:()=>k_,CubeCamera:()=>Bc,CubeReflectionMapping:()=>fs,CubeRefractionMapping:()=>Ds,CubeTexture:()=>xr,CubeTextureLoader:()=>Bf,CubeUVReflectionMapping:()=>Oo,CubicBezierCurve:()=>qa,CubicBezierCurve3:()=>nu,CubicInterpolant:()=>Ru,CullFaceBack:()=>Cd,CullFaceFront:()=>w_,CullFaceFrontBack:()=>MM,CullFaceNone:()=>b_,Curve:()=>ai,CurvePath:()=>ru,CustomBlending:()=>A_,CustomToneMapping:()=>ix,CylinderGeometry:()=>Fo,Cylindrical:()=>ap,Data3DTexture:()=>Fa,DataArrayTexture:()=>To,DataTexture:()=>Hi,DataTextureLoader:()=>zf,DataUtils:()=>RS,DecrementStencilOp:()=>NM,DecrementWrapStencilOp:()=>UM,DefaultLoadingManager:()=>$x,DepthFormat:()=>pr,DepthStencilFormat:()=>Eo,DepthTexture:()=>ka,DetachedBindMode:()=>ox,DirectionalLight:()=>Uu,DirectionalLightHelper:()=>gp,DiscreteInterpolant:()=>Pu,DisplayP3ColorSpace:()=>Zu,DodecahedronGeometry:()=>cu,DoubleSide:()=>zi,DstAlphaFactor:()=>U_,DstColorFactor:()=>O_,DynamicCopyUsage:()=>JM,DynamicDrawUsage:()=>WM,DynamicReadUsage:()=>YM,EdgesGeometry:()=>uu,EllipseCurve:()=>Uo,EqualCompare:()=>wx,EqualDepth:()=>Y_,EqualStencilFunc:()=>zM,EquirectangularReflectionMapping:()=>ba,EquirectangularRefractionMapping:()=>wa,Euler:()=>ri,EventDispatcher:()=>Pi,ExtrudeGeometry:()=>hu,FileLoader:()=>Ii,Float16BufferAttribute:()=>mf,Float32BufferAttribute:()=>qt,FloatType:()=>_i,Fog:()=>Hc,FogExp2:()=>Vc,FramebufferTexture:()=>Cf,FrontSide:()=>ds,Frustum:()=>vr,GLBufferAttribute:()=>ip,GLSL1:()=>jM,GLSL3:()=>af,GreaterCompare:()=>Ex,GreaterDepth:()=>Z_,GreaterEqualCompare:()=>Tx,GreaterEqualDepth:()=>$_,GreaterEqualStencilFunc:()=>GM,GreaterStencilFunc:()=>VM,GridHelper:()=>pp,Group:()=>Ns,HalfFloatType:()=>hl,HemisphereLight:()=>Lu,HemisphereLightHelper:()=>fp,IcosahedronGeometry:()=>du,ImageBitmapLoader:()=>Xf,ImageLoader:()=>Tr,ImageUtils:()=>Fc,IncrementStencilOp:()=>LM,IncrementWrapStencilOp:()=>DM,InstancedBufferAttribute:()=>Fs,InstancedBufferGeometry:()=>Vu,InstancedInterleavedBuffer:()=>np,InstancedMesh:()=>$c,Int16BufferAttribute:()=>ff,Int32BufferAttribute:()=>pf,Int8BufferAttribute:()=>uf,IntType:()=>Cp,InterleavedBuffer:()=>No,InterleavedBufferAttribute:()=>yr,Interpolant:()=>br,InterpolateDiscrete:()=>Ta,InterpolateLinear:()=>Ca,InterpolateSmooth:()=>Nc,InvertStencilOp:()=>FM,KeepStencilOp:()=>ar,KeyframeTrack:()=>li,LOD:()=>Xc,LatheGeometry:()=>Ka,Layers:()=>Co,LessCompare:()=>bx,LessDepth:()=>q_,LessEqualCompare:()=>Fp,LessEqualDepth:()=>Sa,LessEqualStencilFunc:()=>kM,LessStencilFunc:()=>BM,Light:()=>qi,LightProbe:()=>zu,Line:()=>Xi,Line3:()=>cp,LineBasicMaterial:()=>Cn,LineCurve:()=>Ya,LineCurve3:()=>iu,LineDashedMaterial:()=>Cu,LineLoop:()=>jc,LineSegments:()=>xi,LinearDisplayP3ColorSpace:()=>dl,LinearFilter:()=>an,LinearInterpolant:()=>sl,LinearMipMapLinearFilter:()=>AM,LinearMipMapNearestFilter:()=>EM,LinearMipmapLinearFilter:()=>ki,LinearMipmapNearestFilter:()=>_a,LinearSRGBColorSpace:()=>_s,LinearToneMapping:()=>Q_,LinearTransfer:()=>Pa,Loader:()=>Un,LoaderUtils:()=>ll,LoadingManager:()=>ol,LoopOnce:()=>gx,LoopPingPong:()=>xx,LoopRepeat:()=>_x,LuminanceAlphaFormat:()=>fx,LuminanceFormat:()=>dx,MOUSE:()=>vM,Material:()=>En,MaterialLoader:()=>ku,MathUtils:()=>mS,Matrix3:()=>ce,Matrix4:()=>ee,MaxEquation:()=>P_,Mesh:()=>Qe,MeshBasicMaterial:()=>Wi,MeshDepthMaterial:()=>Va,MeshDistanceMaterial:()=>Ha,MeshLambertMaterial:()=>Au,MeshMatcapMaterial:()=>Tu,MeshNormalMaterial:()=>Eu,MeshPhongMaterial:()=>bu,MeshPhysicalMaterial:()=>Su,MeshStandardMaterial:()=>il,MeshToonMaterial:()=>wu,MinEquation:()=>R_,MirroredRepeatWrapping:()=>Aa,MixOperation:()=>K_,MultiplyBlending:()=>Id,MultiplyOperation:()=>ul,NearestFilter:()=>bn,NearestMipMapLinearFilter:()=>wM,NearestMipMapNearestFilter:()=>bM,NearestMipmapLinearFilter:()=>vo,NearestMipmapNearestFilter:()=>Ap,NeutralToneMapping:()=>rx,NeverCompare:()=>Sx,NeverDepth:()=>W_,NeverStencilFunc:()=>OM,NoBlending:()=>cs,NoColorSpace:()=>ss,NoToneMapping:()=>us,NormalAnimationBlendMode:()=>$u,NormalBlending:()=>fr,NotEqualCompare:()=>Ax,NotEqualDepth:()=>J_,NotEqualStencilFunc:()=>HM,NumberKeyframeTrack:()=>wr,Object3D:()=>Ae,ObjectLoader:()=>Wf,ObjectSpaceNormalMap:()=>Mx,OctahedronGeometry:()=>el,OneFactor:()=>L_,OneMinusConstantAlphaFactor:()=>G_,OneMinusConstantColorFactor:()=>V_,OneMinusDstAlphaFactor:()=>F_,OneMinusDstColorFactor:()=>B_,OneMinusSrcAlphaFactor:()=>Uc,OneMinusSrcColorFactor:()=>D_,OrthographicCamera:()=>Lo,P3Primaries:()=>La,PCFShadowMap:()=>Ep,PCFSoftShadowMap:()=>E_,PMREMGenerator:()=>za,Path:()=>Mr,PerspectiveCamera:()=>dn,Plane:()=>Bi,PlaneGeometry:()=>Io,PlaneHelper:()=>yp,PointLight:()=>Du,PointLightHelper:()=>dp,Points:()=>Qc,PointsMaterial:()=>Xa,PolarGridHelper:()=>mp,PolyhedronGeometry:()=>Os,PositionalAudio:()=>Zf,PropertyBinding:()=>Re,PropertyMixer:()=>Xu,QuadraticBezierCurve:()=>$a,QuadraticBezierCurve3:()=>Za,Quaternion:()=>Dn,QuaternionKeyframeTrack:()=>Bs,QuaternionLinearInterpolant:()=>Iu,RED_GREEN_RGTC2_Format:()=>sf,RED_RGTC1_Format:()=>mx,REVISION:()=>xM,RGBADepthPacking:()=>yx,RGBAFormat:()=>ni,RGBAIntegerFormat:()=>Dp,RGBA_ASTC_10x10_Format:()=>Kd,RGBA_ASTC_10x5_Format:()=>$d,RGBA_ASTC_10x6_Format:()=>Zd,RGBA_ASTC_10x8_Format:()=>Jd,RGBA_ASTC_12x10_Format:()=>jd,RGBA_ASTC_12x12_Format:()=>Qd,RGBA_ASTC_4x4_Format:()=>kd,RGBA_ASTC_5x4_Format:()=>Vd,RGBA_ASTC_5x5_Format:()=>Hd,RGBA_ASTC_6x5_Format:()=>Gd,RGBA_ASTC_6x6_Format:()=>Wd,RGBA_ASTC_8x5_Format:()=>Xd,RGBA_ASTC_8x6_Format:()=>qd,RGBA_ASTC_8x8_Format:()=>Yd,RGBA_BPTC_Format:()=>Lc,RGBA_ETC2_EAC_Format:()=>zd,RGBA_PVRTC_2BPPV1_Format:()=>Fd,RGBA_PVRTC_4BPPV1_Format:()=>Ud,RGBA_S3TC_DXT1_Format:()=>Rc,RGBA_S3TC_DXT3_Format:()=>Pc,RGBA_S3TC_DXT5_Format:()=>Ic,RGBFormat:()=>hx,RGB_BPTC_SIGNED_Format:()=>tf,RGB_BPTC_UNSIGNED_Format:()=>ef,RGB_ETC1_Format:()=>Od,RGB_ETC2_Format:()=>Bd,RGB_PVRTC_2BPPV1_Format:()=>Dd,RGB_PVRTC_4BPPV1_Format:()=>Nd,RGB_S3TC_DXT1_Format:()=>Cc,RGFormat:()=>px,RGIntegerFormat:()=>Np,RawShaderMaterial:()=>Mu,Ray:()=>Us,Raycaster:()=>sp,Rec709Primaries:()=>Ia,RectAreaLight:()=>Ou,RedFormat:()=>Ip,RedIntegerFormat:()=>Lp,ReinhardToneMapping:()=>tx,RenderTarget:()=>Oc,RepeatWrapping:()=>Ea,ReplaceStencilOp:()=>IM,ReverseSubtractEquation:()=>C_,RingGeometry:()=>fu,SIGNED_RED_GREEN_RGTC2_Format:()=>rf,SIGNED_RED_RGTC1_Format:()=>nf,SRGBColorSpace:()=>mi,SRGBTransfer:()=>Be,Scene:()=>Gc,ShaderChunk:()=>he,ShaderLib:()=>Ri,ShaderMaterial:()=>oi,ShadowMaterial:()=>yu,Shape:()=>hs,ShapeGeometry:()=>pu,ShapePath:()=>bp,ShapeUtils:()=>Gi,ShortType:()=>lx,Skeleton:()=>Yc,SkeletonHelper:()=>hp,SkinnedMesh:()=>qc,Source:()=>os,Sphere:()=>wn,SphereGeometry:()=>nl,Spherical:()=>op,SphericalHarmonics3:()=>Bu,SplineCurve:()=>Ja,SpotLight:()=>Nu,SpotLightHelper:()=>up,Sprite:()=>Wc,SpriteMaterial:()=>Ga,SrcAlphaFactor:()=>Dc,SrcAlphaSaturateFactor:()=>z_,SrcColorFactor:()=>N_,StaticCopyUsage:()=>ZM,StaticDrawUsage:()=>Na,StaticReadUsage:()=>qM,StereoCamera:()=>Yf,StreamCopyUsage:()=>KM,StreamDrawUsage:()=>XM,StreamReadUsage:()=>$M,StringKeyframeTrack:()=>gs,SubtractEquation:()=>T_,SubtractiveBlending:()=>Pd,TOUCH:()=>yM,TangentSpaceNormalMap:()=>zs,TetrahedronGeometry:()=>mu,Texture:()=>ln,TextureLoader:()=>kf,TorusGeometry:()=>gu,TorusKnotGeometry:()=>_u,Triangle:()=>as,TriangleFanDrawMode:()=>RM,TriangleStripDrawMode:()=>CM,TrianglesDrawMode:()=>TM,TubeGeometry:()=>xu,UVMapping:()=>Yu,Uint16BufferAttribute:()=>Oa,Uint32BufferAttribute:()=>Ba,Uint8BufferAttribute:()=>hf,Uint8ClampedBufferAttribute:()=>df,Uniform:()=>tp,UniformsGroup:()=>ep,UniformsLib:()=>Dt,UniformsUtils:()=>Dx,UnsignedByteType:()=>ps,UnsignedInt248Type:()=>Bo,UnsignedInt5999Type:()=>cx,UnsignedIntType:()=>gr,UnsignedShort4444Type:()=>Rp,UnsignedShort5551Type:()=>Pp,UnsignedShortType:()=>Tp,VSMShadowMap:()=>Oi,Vector2:()=>_t,Vector3:()=>U,Vector4:()=>Ie,VectorKeyframeTrack:()=>Er,VideoTexture:()=>Tf,WebGL3DRenderTarget:()=>cf,WebGLArrayRenderTarget:()=>lf,WebGLCoordinateSystem:()=>Vi,WebGLCubeRenderTarget:()=>zc,WebGLMultipleRenderTargets:()=>wp,WebGLRenderTarget:()=>si,WebGLRenderer:()=>wf,WebGLUtils:()=>Vx,WebGPUCoordinateSystem:()=>Da,WireframeGeometry:()=>vu,WrapAroundEnding:()=>Ra,ZeroCurvatureEnding:()=>ur,ZeroFactor:()=>I_,ZeroSlopeEnding:()=>hr,ZeroStencilOp:()=>PM,createCanvasElement:()=>Px});var xM="164",vM={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},yM={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},b_=0,Cd=1,w_=2,MM=3,SM=0,Ep=1,E_=2,Oi=3,ds=0,Wn=1,zi=2,cs=0,fr=1,Rd=2,Pd=3,Id=4,A_=5,Ls=100,T_=101,C_=102,R_=103,P_=104,I_=200,L_=201,N_=202,D_=203,Dc=204,Uc=205,U_=206,F_=207,O_=208,B_=209,z_=210,k_=211,V_=212,H_=213,G_=214,W_=0,X_=1,q_=2,Sa=3,Y_=4,$_=5,Z_=6,J_=7,ul=0,K_=1,j_=2,us=0,Q_=1,tx=2,ex=3,nx=4,ix=5,sx=6,rx=7,Ld="attached",ox="detached",Yu=300,fs=301,Ds=302,ba=303,wa=304,Oo=306,Ea=1e3,gi=1001,Aa=1002,bn=1003,Ap=1004,bM=1004,vo=1005,wM=1005,an=1006,_a=1007,EM=1007,ki=1008,AM=1008,ps=1009,ax=1010,lx=1011,Tp=1012,Cp=1013,gr=1014,_i=1015,hl=1016,Rp=1017,Pp=1018,Bo=1020,cx=35902,ux=1021,hx=1022,ni=1023,dx=1024,fx=1025,pr=1026,Eo=1027,Ip=1028,Lp=1029,px=1030,Np=1031,Dp=1033,Cc=33776,Rc=33777,Pc=33778,Ic=33779,Nd=35840,Dd=35841,Ud=35842,Fd=35843,Od=36196,Bd=37492,zd=37496,kd=37808,Vd=37809,Hd=37810,Gd=37811,Wd=37812,Xd=37813,qd=37814,Yd=37815,$d=37816,Zd=37817,Jd=37818,Kd=37819,jd=37820,Qd=37821,Lc=36492,tf=36494,ef=36495,mx=36283,nf=36284,sf=36285,rf=36286,gx=2200,_x=2201,xx=2202,Ta=2300,Ca=2301,Nc=2302,ur=2400,hr=2401,Ra=2402,$u=2500,Up=2501,TM=0,CM=1,RM=2,vx=3200,yx=3201,zs=0,Mx=1,ss="",mi="srgb",_s="srgb-linear",Zu="display-p3",dl="display-p3-linear",Pa="linear",Be="srgb",Ia="rec709",La="p3",PM=0,ar=7680,IM=7681,LM=7682,NM=7683,DM=34055,UM=34056,FM=5386,OM=512,BM=513,zM=514,kM=515,VM=516,HM=517,GM=518,of=519,Sx=512,bx=513,wx=514,Fp=515,Ex=516,Ax=517,Tx=518,Cx=519,Na=35044,WM=35048,XM=35040,qM=35045,YM=35049,$M=35041,ZM=35046,JM=35050,KM=35042,jM="100",af="300 es",Vi=2e3,Da=2001,Pi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let i=this._listeners[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}},In=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Xg=1234567,mr=Math.PI/180,Ao=180/Math.PI;function ii(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(In[s&255]+In[s>>8&255]+In[s>>16&255]+In[s>>24&255]+"-"+In[t&255]+In[t>>8&255]+"-"+In[t>>16&15|64]+In[t>>24&255]+"-"+In[e&63|128]+In[e>>8&255]+"-"+In[e>>16&255]+In[e>>24&255]+In[n&255]+In[n>>8&255]+In[n>>16&255]+In[n>>24&255]).toLowerCase()}function je(s,t,e){return Math.max(t,Math.min(e,s))}function Op(s,t){return(s%t+t)%t}function QM(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function tS(s,t,e){return s!==t?(e-s)/(t-s):0}function xa(s,t,e){return(1-e)*s+e*t}function eS(s,t,e,n){return xa(s,t,1-Math.exp(-e*n))}function nS(s,t=1){return t-Math.abs(Op(s,t*2)-t)}function iS(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function sS(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function rS(s,t){return s+Math.floor(Math.random()*(t-s+1))}function oS(s,t){return s+Math.random()*(t-s)}function aS(s){return s*(.5-Math.random())}function lS(s){s!==void 0&&(Xg=s);let t=Xg+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function cS(s){return s*mr}function uS(s){return s*Ao}function hS(s){return(s&s-1)===0&&s!==0}function dS(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function fS(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function pS(s,t,e,n,i){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),u=o((t+n)/2),h=r((t-n)/2),d=o((t-n)/2),f=r((n-t)/2),m=o((n-t)/2);switch(i){case"XYX":s.set(a*u,l*h,l*d,a*c);break;case"YZY":s.set(l*d,a*u,l*h,a*c);break;case"ZXZ":s.set(l*h,l*d,a*u,a*c);break;case"XZX":s.set(a*u,l*m,l*f,a*c);break;case"YXY":s.set(l*f,a*u,l*m,a*c);break;case"ZYZ":s.set(l*m,l*f,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Gn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function ue(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var mS={DEG2RAD:mr,RAD2DEG:Ao,generateUUID:ii,clamp:je,euclideanModulo:Op,mapLinear:QM,inverseLerp:tS,lerp:xa,damp:eS,pingpong:nS,smoothstep:iS,smootherstep:sS,randInt:rS,randFloat:oS,randFloatSpread:aS,seededRandom:lS,degToRad:cS,radToDeg:uS,isPowerOfTwo:hS,ceilPowerOfTwo:dS,floorPowerOfTwo:fS,setQuaternionFromProperEuler:pS,normalize:ue,denormalize:Gn},_t=class s{constructor(t=0,e=0){s.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(je(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ce=class s{constructor(t,e,n,i,r,o,a,l,c){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c)}set(t,e,n,i,r,o,a,l,c){let u=this.elements;return u[0]=t,u[1]=i,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],m=n[8],_=i[0],g=i[3],p=i[6],v=i[1],x=i[4],y=i[7],L=i[2],b=i[5],C=i[8];return r[0]=o*_+a*v+l*L,r[3]=o*g+a*x+l*b,r[6]=o*p+a*y+l*C,r[1]=c*_+u*v+h*L,r[4]=c*g+u*x+h*b,r[7]=c*p+u*y+h*C,r[2]=d*_+f*v+m*L,r[5]=d*g+f*x+m*b,r[8]=d*p+f*y+m*C,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-n*r*u+n*a*l+i*r*c-i*o*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=u*o-a*c,d=a*l-u*r,f=c*r-o*l,m=e*h+n*d+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/m;return t[0]=h*_,t[1]=(i*c-u*n)*_,t[2]=(a*n-i*o)*_,t[3]=d*_,t[4]=(u*e-i*l)*_,t[5]=(i*r-a*e)*_,t[6]=f*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Wh.makeScale(t,e)),this}rotate(t){return this.premultiply(Wh.makeRotation(-t)),this}translate(t,e){return this.premultiply(Wh.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Wh=new ce;function Rx(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}var gS={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function yo(s,t){return new gS[s](t)}function Ua(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Px(){let s=Ua("canvas");return s.style.display="block",s}var qg={};function Ix(s){s in qg||(qg[s]=!0,console.warn(s))}var Yg=new ce().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),$g=new ce().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Fl={[_s]:{transfer:Pa,primaries:Ia,toReference:s=>s,fromReference:s=>s},[mi]:{transfer:Be,primaries:Ia,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[dl]:{transfer:Pa,primaries:La,toReference:s=>s.applyMatrix3($g),fromReference:s=>s.applyMatrix3(Yg)},[Zu]:{transfer:Be,primaries:La,toReference:s=>s.convertSRGBToLinear().applyMatrix3($g),fromReference:s=>s.applyMatrix3(Yg).convertLinearToSRGB()}},_S=new Set([_s,dl]),Pe={enabled:!0,_workingColorSpace:_s,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!_S.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;let n=Fl[t].toReference,i=Fl[e].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this._workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this._workingColorSpace)},getPrimaries:function(s){return Fl[s].primaries},getTransfer:function(s){return s===ss?Pa:Fl[s].transfer}};function bo(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Xh(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Jr,Fc=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Jr===void 0&&(Jr=Ua("canvas")),Jr.width=t.width,Jr.height=t.height;let n=Jr.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Jr}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ua("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=bo(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(bo(e[n]/255)*255):e[n]=bo(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},xS=0,os=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:xS++}),this.uuid=ii(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(qh(i[o].image)):r.push(qh(i[o]))}else r=qh(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function qh(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Fc.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var vS=0,ln=class s extends Pi{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=gi,i=gi,r=an,o=ki,a=ni,l=ps,c=s.DEFAULT_ANISOTROPY,u=ss){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vS++}),this.uuid=ii(),this.name="",this.source=new os(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new _t(0,0),this.repeat=new _t(1,1),this.center=new _t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ce,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Yu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ea:t.x=t.x-Math.floor(t.x);break;case gi:t.x=t.x<0?0:1;break;case Aa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ea:t.y=t.y-Math.floor(t.y);break;case gi:t.y=t.y<0?0:1;break;case Aa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};ln.DEFAULT_IMAGE=null;ln.DEFAULT_MAPPING=Yu;ln.DEFAULT_ANISOTROPY=1;var Ie=class s{constructor(t=0,e=0,n=0,i=1){s.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,l=t.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],m=l[9],_=l[2],g=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(m+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let x=(c+1)/2,y=(f+1)/2,L=(p+1)/2,b=(u+d)/4,C=(h+_)/4,P=(m+g)/4;return x>y&&x>L?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=b/n,r=C/n):y>L?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=b/i,r=P/i):L<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(L),n=C/r,i=P/r),this.set(n,i,r,e),this}let v=Math.sqrt((g-m)*(g-m)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(v)<.001&&(v=1),this.x=(g-m)/v,this.y=(h-_)/v,this.z=(d-u)/v,this.w=Math.acos((c+f+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Oc=class extends Pi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ie(0,0,t,e),this.scissorTest=!1,this.viewport=new Ie(0,0,t,e);let i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:an,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new ln(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new os(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},si=class extends Oc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},To=class extends ln{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=bn,this.minFilter=bn,this.wrapR=gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},lf=class extends si{constructor(t=1,e=1,n=1,i={}){super(t,e,i),this.isWebGLArrayRenderTarget=!0,this.depth=n,this.texture=new To(null,t,e,n),this.texture.isRenderTargetTexture=!0}},Fa=class extends ln{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=bn,this.minFilter=bn,this.wrapR=gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},cf=class extends si{constructor(t=1,e=1,n=1,i={}){super(t,e,i),this.isWebGL3DRenderTarget=!0,this.depth=n,this.texture=new Fa(null,t,e,n),this.texture.isRenderTargetTexture=!0}},Dn=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3],d=r[o+0],f=r[o+1],m=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=m,t[e+3]=_;return}if(h!==_||l!==d||c!==f||u!==m){let g=1-a,p=l*d+c*f+u*m+h*_,v=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){let L=Math.sqrt(x),b=Math.atan2(L,p*v);g=Math.sin(g*b)/L,a=Math.sin(a*b)/L}let y=a*v;if(l=l*g+d*y,c=c*g+f*y,u=u*g+m*y,h=h*g+_*y,g===1-a){let L=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=L,c*=L,u*=L,h*=L}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,i,r,o){let a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=r[o],d=r[o+1],f=r[o+2],m=r[o+3];return t[e]=a*m+u*h+l*f-c*d,t[e+1]=l*m+u*d+c*h-a*f,t[e+2]=c*m+u*f+a*d-l*h,t[e+3]=u*m-a*h-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(r/2),d=l(n/2),f=l(i/2),m=l(r/2);switch(o){case"XYZ":this._x=d*u*h+c*f*m,this._y=c*f*h-d*u*m,this._z=c*u*m+d*f*h,this._w=c*u*h-d*f*m;break;case"YXZ":this._x=d*u*h+c*f*m,this._y=c*f*h-d*u*m,this._z=c*u*m-d*f*h,this._w=c*u*h+d*f*m;break;case"ZXY":this._x=d*u*h-c*f*m,this._y=c*f*h+d*u*m,this._z=c*u*m+d*f*h,this._w=c*u*h-d*f*m;break;case"ZYX":this._x=d*u*h-c*f*m,this._y=c*f*h+d*u*m,this._z=c*u*m-d*f*h,this._w=c*u*h+d*f*m;break;case"YZX":this._x=d*u*h+c*f*m,this._y=c*f*h+d*u*m,this._z=c*u*m-d*f*h,this._w=c*u*h-d*f*m;break;case"XZY":this._x=d*u*h-c*f*m,this._y=c*f*h-d*u*m,this._z=c*u*m+d*f*h,this._w=c*u*h+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10],d=n+a+h;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(o-i)*f}else if(n>a&&n>h){let f=2*Math.sqrt(1+n-a-h);this._w=(u-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+c)/f}else if(a>h){let f=2*Math.sqrt(1+a-n-h);this._w=(r-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+h-n-a);this._w=(o-i)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(je(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+o*a+i*c-r*l,this._y=i*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-e)*u)/c,d=Math.sin(e*u)/c;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class s{constructor(t=0,e=0,n=0){s.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Zg.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Zg.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),u=2*(a*e-r*i),h=2*(r*n-o*e);return this.x=e+l*c+o*h-a*u,this.y=n+l*u+a*c-r*h,this.z=i+l*h+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Yh.copy(this).projectOnVector(t),this.sub(Yh)}reflect(t){return this.sub(Yh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(je(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Yh=new U,Zg=new Dn,Tn=class{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ai.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ai.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Ai.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Ai):Ai.fromBufferAttribute(r,o),Ai.applyMatrix4(t.matrixWorld),this.expandByPoint(Ai);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ol.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ol.copy(n.boundingBox)),Ol.applyMatrix4(t.matrixWorld),this.union(Ol)}let i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Ai),Ai.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ia),Bl.subVectors(this.max,ia),Kr.subVectors(t.a,ia),jr.subVectors(t.b,ia),Qr.subVectors(t.c,ia),ws.subVectors(jr,Kr),Es.subVectors(Qr,jr),Zs.subVectors(Kr,Qr);let e=[0,-ws.z,ws.y,0,-Es.z,Es.y,0,-Zs.z,Zs.y,ws.z,0,-ws.x,Es.z,0,-Es.x,Zs.z,0,-Zs.x,-ws.y,ws.x,0,-Es.y,Es.x,0,-Zs.y,Zs.x,0];return!$h(e,Kr,jr,Qr,Bl)||(e=[1,0,0,0,1,0,0,0,1],!$h(e,Kr,jr,Qr,Bl))?!1:(zl.crossVectors(ws,Es),e=[zl.x,zl.y,zl.z],$h(e,Kr,jr,Qr,Bl))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ai).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ai).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ji[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ji[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ji[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ji[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ji[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ji[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ji[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ji[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ji),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},ji=[new U,new U,new U,new U,new U,new U,new U,new U],Ai=new U,Ol=new Tn,Kr=new U,jr=new U,Qr=new U,ws=new U,Es=new U,Zs=new U,ia=new U,Bl=new U,zl=new U,Js=new U;function $h(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Js.fromArray(s,r);let a=i.x*Math.abs(Js.x)+i.y*Math.abs(Js.y)+i.z*Math.abs(Js.z),l=t.dot(Js),c=e.dot(Js),u=n.dot(Js);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var yS=new Tn,sa=new U,Zh=new U,wn=class{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):yS.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;sa.subVectors(t,this.center);let e=sa.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(sa,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Zh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(sa.copy(t.center).add(Zh)),this.expandByPoint(sa.copy(t.center).sub(Zh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Qi=new U,Jh=new U,kl=new U,As=new U,Kh=new U,Vl=new U,jh=new U,Us=class{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Qi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Qi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Qi.copy(this.origin).addScaledVector(this.direction,e),Qi.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Jh.copy(t).add(e).multiplyScalar(.5),kl.copy(e).sub(t).normalize(),As.copy(this.origin).sub(Jh);let r=t.distanceTo(e)*.5,o=-this.direction.dot(kl),a=As.dot(this.direction),l=-As.dot(kl),c=As.lengthSq(),u=Math.abs(1-o*o),h,d,f,m;if(u>0)if(h=o*l-a,d=o*a-l,m=r*u,h>=0)if(d>=-m)if(d<=m){let _=1/u;h*=_,d*=_,f=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d<=-m?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c):d<=m?(h=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Jh).addScaledVector(kl,d),f}intersectSphere(t,e){Qi.subVectors(t.center,this.origin);let n=Qi.dot(this.direction),i=Qi.dot(Qi)-n*n,r=t.radius*t.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),u>=0?(r=(t.min.y-d.y)*u,o=(t.max.y-d.y)*u):(r=(t.max.y-d.y)*u,o=(t.min.y-d.y)*u),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),h>=0?(a=(t.min.z-d.z)*h,l=(t.max.z-d.z)*h):(a=(t.max.z-d.z)*h,l=(t.min.z-d.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Qi)!==null}intersectTriangle(t,e,n,i,r){Kh.subVectors(e,t),Vl.subVectors(n,t),jh.crossVectors(Kh,Vl);let o=this.direction.dot(jh),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;As.subVectors(this.origin,t);let l=a*this.direction.dot(Vl.crossVectors(As,Vl));if(l<0)return null;let c=a*this.direction.dot(Kh.cross(As));if(c<0||l+c>o)return null;let u=-a*As.dot(jh);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ee=class s{constructor(t,e,n,i,r,o,a,l,c,u,h,d,f,m,_,g){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c,u,h,d,f,m,_,g)}set(t,e,n,i,r,o,a,l,c,u,h,d,f,m,_,g){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=m,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/to.setFromMatrixColumn(t,0).length(),r=1/to.setFromMatrixColumn(t,1).length(),o=1/to.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){let d=o*u,f=o*h,m=a*u,_=a*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=f+m*c,e[5]=d-_*c,e[9]=-a*l,e[2]=_-d*c,e[6]=m+f*c,e[10]=o*l}else if(t.order==="YXZ"){let d=l*u,f=l*h,m=c*u,_=c*h;e[0]=d+_*a,e[4]=m*a-f,e[8]=o*c,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=f*a-m,e[6]=_+d*a,e[10]=o*l}else if(t.order==="ZXY"){let d=l*u,f=l*h,m=c*u,_=c*h;e[0]=d-_*a,e[4]=-o*h,e[8]=m+f*a,e[1]=f+m*a,e[5]=o*u,e[9]=_-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let d=o*u,f=o*h,m=a*u,_=a*h;e[0]=l*u,e[4]=m*c-f,e[8]=d*c+_,e[1]=l*h,e[5]=_*c+d,e[9]=f*c-m,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let d=o*l,f=o*c,m=a*l,_=a*c;e[0]=l*u,e[4]=_-d*h,e[8]=m*h+f,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=f*h+m,e[10]=d-_*h}else if(t.order==="XZY"){let d=o*l,f=o*c,m=a*l,_=a*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=d*h+_,e[5]=o*u,e[9]=f*h-m,e[2]=m*h-f,e[6]=a*u,e[10]=_*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(MS,t,SS)}lookAt(t,e,n){let i=this.elements;return ti.subVectors(t,e),ti.lengthSq()===0&&(ti.z=1),ti.normalize(),Ts.crossVectors(n,ti),Ts.lengthSq()===0&&(Math.abs(n.z)===1?ti.x+=1e-4:ti.z+=1e-4,ti.normalize(),Ts.crossVectors(n,ti)),Ts.normalize(),Hl.crossVectors(ti,Ts),i[0]=Ts.x,i[4]=Hl.x,i[8]=ti.x,i[1]=Ts.y,i[5]=Hl.y,i[9]=ti.y,i[2]=Ts.z,i[6]=Hl.z,i[10]=ti.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],m=n[2],_=n[6],g=n[10],p=n[14],v=n[3],x=n[7],y=n[11],L=n[15],b=i[0],C=i[4],P=i[8],w=i[12],S=i[1],D=i[5],z=i[9],R=i[13],V=i[2],X=i[6],nt=i[10],tt=i[14],j=i[3],rt=i[7],at=i[11],Mt=i[15];return r[0]=o*b+a*S+l*V+c*j,r[4]=o*C+a*D+l*X+c*rt,r[8]=o*P+a*z+l*nt+c*at,r[12]=o*w+a*R+l*tt+c*Mt,r[1]=u*b+h*S+d*V+f*j,r[5]=u*C+h*D+d*X+f*rt,r[9]=u*P+h*z+d*nt+f*at,r[13]=u*w+h*R+d*tt+f*Mt,r[2]=m*b+_*S+g*V+p*j,r[6]=m*C+_*D+g*X+p*rt,r[10]=m*P+_*z+g*nt+p*at,r[14]=m*w+_*R+g*tt+p*Mt,r[3]=v*b+x*S+y*V+L*j,r[7]=v*C+x*D+y*X+L*rt,r[11]=v*P+x*z+y*nt+L*at,r[15]=v*w+x*R+y*tt+L*Mt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],h=t[6],d=t[10],f=t[14],m=t[3],_=t[7],g=t[11],p=t[15];return m*(+r*l*h-i*c*h-r*a*d+n*c*d+i*a*f-n*l*f)+_*(+e*l*f-e*c*d+r*o*d-i*o*f+i*c*u-r*l*u)+g*(+e*c*h-e*a*f-r*o*h+n*o*f+r*a*u-n*c*u)+p*(-i*a*u-e*l*h+e*a*d+i*o*h-n*o*d+n*l*u)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],d=t[10],f=t[11],m=t[12],_=t[13],g=t[14],p=t[15],v=h*g*c-_*d*c+_*l*f-a*g*f-h*l*p+a*d*p,x=m*d*c-u*g*c-m*l*f+o*g*f+u*l*p-o*d*p,y=u*_*c-m*h*c+m*a*f-o*_*f-u*a*p+o*h*p,L=m*h*l-u*_*l-m*a*d+o*_*d+u*a*g-o*h*g,b=e*v+n*x+i*y+r*L;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/b;return t[0]=v*C,t[1]=(_*d*r-h*g*r-_*i*f+n*g*f+h*i*p-n*d*p)*C,t[2]=(a*g*r-_*l*r+_*i*c-n*g*c-a*i*p+n*l*p)*C,t[3]=(h*l*r-a*d*r-h*i*c+n*d*c+a*i*f-n*l*f)*C,t[4]=x*C,t[5]=(u*g*r-m*d*r+m*i*f-e*g*f-u*i*p+e*d*p)*C,t[6]=(m*l*r-o*g*r-m*i*c+e*g*c+o*i*p-e*l*p)*C,t[7]=(o*d*r-u*l*r+u*i*c-e*d*c-o*i*f+e*l*f)*C,t[8]=y*C,t[9]=(m*h*r-u*_*r-m*n*f+e*_*f+u*n*p-e*h*p)*C,t[10]=(o*_*r-m*a*r+m*n*c-e*_*c-o*n*p+e*a*p)*C,t[11]=(u*a*r-o*h*r-u*n*c+e*h*c+o*n*f-e*a*f)*C,t[12]=L*C,t[13]=(u*_*i-m*h*i+m*n*d-e*_*d-u*n*g+e*h*g)*C,t[14]=(m*a*i-o*_*i-m*n*l+e*_*l+o*n*g-e*a*g)*C,t[15]=(o*h*i-u*a*i+u*n*l-e*h*l-o*n*d+e*a*d)*C,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,u=o+o,h=a+a,d=r*c,f=r*u,m=r*h,_=o*u,g=o*h,p=a*h,v=l*c,x=l*u,y=l*h,L=n.x,b=n.y,C=n.z;return i[0]=(1-(_+p))*L,i[1]=(f+y)*L,i[2]=(m-x)*L,i[3]=0,i[4]=(f-y)*b,i[5]=(1-(d+p))*b,i[6]=(g+v)*b,i[7]=0,i[8]=(m+x)*C,i[9]=(g-v)*C,i[10]=(1-(d+_))*C,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,r=to.set(i[0],i[1],i[2]).length(),o=to.set(i[4],i[5],i[6]).length(),a=to.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],Ti.copy(this);let c=1/r,u=1/o,h=1/a;return Ti.elements[0]*=c,Ti.elements[1]*=c,Ti.elements[2]*=c,Ti.elements[4]*=u,Ti.elements[5]*=u,Ti.elements[6]*=u,Ti.elements[8]*=h,Ti.elements[9]*=h,Ti.elements[10]*=h,e.setFromRotationMatrix(Ti),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=Vi){let l=this.elements,c=2*r/(e-t),u=2*r/(n-i),h=(e+t)/(e-t),d=(n+i)/(n-i),f,m;if(a===Vi)f=-(o+r)/(o-r),m=-2*o*r/(o-r);else if(a===Da)f=-o/(o-r),m=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=Vi){let l=this.elements,c=1/(e-t),u=1/(n-i),h=1/(o-r),d=(e+t)*c,f=(n+i)*u,m,_;if(a===Vi)m=(o+r)*h,_=-2*h;else if(a===Da)m=r*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},to=new U,Ti=new ee,MS=new U(0,0,0),SS=new U(1,1,1),Ts=new U,Hl=new U,ti=new U,Jg=new ee,Kg=new Dn,ri=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-je(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(je(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-je(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Jg.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Jg,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Kg.setFromEuler(this),this.setFromQuaternion(Kg,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ri.DEFAULT_ORDER="XYZ";var Co=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},bS=0,jg=new U,eo=new Dn,ts=new ee,Gl=new U,ra=new U,wS=new U,ES=new Dn,Qg=new U(1,0,0),t0=new U(0,1,0),e0=new U(0,0,1),n0={type:"added"},AS={type:"removed"},no={type:"childadded",child:null},Qh={type:"childremoved",child:null},Ae=class s extends Pi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bS++}),this.uuid=ii(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new U,e=new ri,n=new Dn,i=new U(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ee},normalMatrix:{value:new ce}}),this.matrix=new ee,this.matrixWorld=new ee,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Co,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return eo.setFromAxisAngle(t,e),this.quaternion.multiply(eo),this}rotateOnWorldAxis(t,e){return eo.setFromAxisAngle(t,e),this.quaternion.premultiply(eo),this}rotateX(t){return this.rotateOnAxis(Qg,t)}rotateY(t){return this.rotateOnAxis(t0,t)}rotateZ(t){return this.rotateOnAxis(e0,t)}translateOnAxis(t,e){return jg.copy(t).applyQuaternion(this.quaternion),this.position.add(jg.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Qg,t)}translateY(t){return this.translateOnAxis(t0,t)}translateZ(t){return this.translateOnAxis(e0,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ts.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Gl.copy(t):Gl.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),ra.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ts.lookAt(ra,Gl,this.up):ts.lookAt(Gl,ra,this.up),this.quaternion.setFromRotationMatrix(ts),i&&(ts.extractRotation(i.matrixWorld),eo.setFromRotationMatrix(ts),this.quaternion.premultiply(eo.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(n0),no.child=t,this.dispatchEvent(no),no.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(AS),Qh.child=t,this.dispatchEvent(Qh),Qh.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ts.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ts.multiply(t.parent.matrixWorld)),t.applyMatrix4(ts),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(n0),no.child=t,this.dispatchEvent(no),no.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ra,t,wS),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ra,ES,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++){let r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let i=this.children;for(let r=0,o=i.length;r<o;r++){let a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),h=o(t.shapes),d=o(t.skeletons),f=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=i,n;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};Ae.DEFAULT_UP=new U(0,1,0);Ae.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ci=new U,es=new U,td=new U,ns=new U,io=new U,so=new U,i0=new U,ed=new U,nd=new U,id=new U,as=class s{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Ci.subVectors(t,e),i.cross(Ci);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Ci.subVectors(i,e),es.subVectors(n,e),td.subVectors(t,e);let o=Ci.dot(Ci),a=Ci.dot(es),l=Ci.dot(td),c=es.dot(es),u=es.dot(td),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;let d=1/h,f=(c*l-a*u)*d,m=(o*u-a*l)*d;return r.set(1-f-m,m,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,ns)===null?!1:ns.x>=0&&ns.y>=0&&ns.x+ns.y<=1}static getInterpolation(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,ns)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ns.x),l.addScaledVector(o,ns.y),l.addScaledVector(a,ns.z),l)}static isFrontFacing(t,e,n,i){return Ci.subVectors(n,e),es.subVectors(t,e),Ci.cross(es).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ci.subVectors(this.c,this.b),es.subVectors(this.a,this.b),Ci.cross(es).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,o,a;io.subVectors(i,n),so.subVectors(r,n),ed.subVectors(t,n);let l=io.dot(ed),c=so.dot(ed);if(l<=0&&c<=0)return e.copy(n);nd.subVectors(t,i);let u=io.dot(nd),h=so.dot(nd);if(u>=0&&h<=u)return e.copy(i);let d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(n).addScaledVector(io,o);id.subVectors(t,r);let f=io.dot(id),m=so.dot(id);if(m>=0&&f<=m)return e.copy(r);let _=f*c-l*m;if(_<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(n).addScaledVector(so,a);let g=u*m-f*h;if(g<=0&&h-u>=0&&f-m>=0)return i0.subVectors(r,i),a=(h-u)/(h-u+(f-m)),e.copy(i).addScaledVector(i0,a);let p=1/(g+_+d);return o=_*p,a=d*p,e.copy(n).addScaledVector(io,o).addScaledVector(so,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Lx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Cs={h:0,s:0,l:0},Wl={h:0,s:0,l:0};function sd(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var Ht=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=mi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Pe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Pe.workingColorSpace){return this.r=t,this.g=e,this.b=n,Pe.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Pe.workingColorSpace){if(t=Op(t,1),e=je(e,0,1),n=je(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=sd(o,r,t+1/3),this.g=sd(o,r,t),this.b=sd(o,r,t-1/3)}return Pe.toWorkingColorSpace(this,i),this}setStyle(t,e=mi){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=mi){let n=Lx[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=bo(t.r),this.g=bo(t.g),this.b=bo(t.b),this}copyLinearToSRGB(t){return this.r=Xh(t.r),this.g=Xh(t.g),this.b=Xh(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=mi){return Pe.fromWorkingColorSpace(Ln.copy(this),t),Math.round(je(Ln.r*255,0,255))*65536+Math.round(je(Ln.g*255,0,255))*256+Math.round(je(Ln.b*255,0,255))}getHexString(t=mi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Pe.workingColorSpace){Pe.fromWorkingColorSpace(Ln.copy(this),e);let n=Ln.r,i=Ln.g,r=Ln.b,o=Math.max(n,i,r),a=Math.min(n,i,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-r)/h+(i<r?6:0);break;case i:l=(r-n)/h+2;break;case r:l=(n-i)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=Pe.workingColorSpace){return Pe.fromWorkingColorSpace(Ln.copy(this),e),t.r=Ln.r,t.g=Ln.g,t.b=Ln.b,t}getStyle(t=mi){Pe.fromWorkingColorSpace(Ln.copy(this),t);let e=Ln.r,n=Ln.g,i=Ln.b;return t!==mi?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Cs),this.setHSL(Cs.h+t,Cs.s+e,Cs.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Cs),t.getHSL(Wl);let n=xa(Cs.h,Wl.h,e),i=xa(Cs.s,Wl.s,e),r=xa(Cs.l,Wl.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ln=new Ht;Ht.NAMES=Lx;var TS=0,En=class extends Pi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:TS++}),this.uuid=ii(),this.name="",this.type="Material",this.blending=fr,this.side=ds,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Dc,this.blendDst=Uc,this.blendEquation=Ls,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ht(0,0,0),this.blendAlpha=0,this.depthFunc=Sa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=of,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ar,this.stencilZFail=ar,this.stencilZPass=ar,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==fr&&(n.blending=this.blending),this.side!==ds&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Dc&&(n.blendSrc=this.blendSrc),this.blendDst!==Uc&&(n.blendDst=this.blendDst),this.blendEquation!==Ls&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Sa&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==of&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ar&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ar&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ar&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Wi=class extends En{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ri,this.combine=ul,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},rs=CS();function CS(){let s=new ArrayBuffer(4),t=new Float32Array(s),e=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}let r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;(c&8388608)===0;)c<<=1,u-=8388608;c&=-8388609,u+=947912704,r[l]=c|u}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:t,uint32View:e,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:o,offsetTable:a}}function qn(s){Math.abs(s)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),s=je(s,-65504,65504),rs.floatView[0]=s;let t=rs.uint32View[0],e=t>>23&511;return rs.baseTable[e]+((t&8388607)>>rs.shiftTable[e])}function ma(s){let t=s>>10;return rs.uint32View[0]=rs.mantissaTable[rs.offsetTable[t]+(s&1023)]+rs.exponentTable[t],rs.floatView[0]}var RS={toHalfFloat:qn,fromHalfFloat:ma},on=new U,Xl=new _t,be=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Na,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=_i,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return Ix("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Xl.fromBufferAttribute(this,e),Xl.applyMatrix3(t),this.setXY(e,Xl.x,Xl.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)on.fromBufferAttribute(this,e),on.applyMatrix3(t),this.setXYZ(e,on.x,on.y,on.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)on.fromBufferAttribute(this,e),on.applyMatrix4(t),this.setXYZ(e,on.x,on.y,on.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)on.fromBufferAttribute(this,e),on.applyNormalMatrix(t),this.setXYZ(e,on.x,on.y,on.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)on.fromBufferAttribute(this,e),on.transformDirection(t),this.setXYZ(e,on.x,on.y,on.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Gn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ue(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Gn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Gn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Gn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Gn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array),i=ue(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array),i=ue(i,this.array),r=ue(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Na&&(t.usage=this.usage),t}},uf=class extends be{constructor(t,e,n){super(new Int8Array(t),e,n)}},hf=class extends be{constructor(t,e,n){super(new Uint8Array(t),e,n)}},df=class extends be{constructor(t,e,n){super(new Uint8ClampedArray(t),e,n)}},ff=class extends be{constructor(t,e,n){super(new Int16Array(t),e,n)}},Oa=class extends be{constructor(t,e,n){super(new Uint16Array(t),e,n)}},pf=class extends be{constructor(t,e,n){super(new Int32Array(t),e,n)}},Ba=class extends be{constructor(t,e,n){super(new Uint32Array(t),e,n)}},mf=class extends be{constructor(t,e,n){super(new Uint16Array(t),e,n),this.isFloat16BufferAttribute=!0}getX(t){let e=ma(this.array[t*this.itemSize]);return this.normalized&&(e=Gn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize]=qn(e),this}getY(t){let e=ma(this.array[t*this.itemSize+1]);return this.normalized&&(e=Gn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+1]=qn(e),this}getZ(t){let e=ma(this.array[t*this.itemSize+2]);return this.normalized&&(e=Gn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+2]=qn(e),this}getW(t){let e=ma(this.array[t*this.itemSize+3]);return this.normalized&&(e=Gn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+3]=qn(e),this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array)),this.array[t+0]=qn(e),this.array[t+1]=qn(n),this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array),i=ue(i,this.array)),this.array[t+0]=qn(e),this.array[t+1]=qn(n),this.array[t+2]=qn(i),this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array),i=ue(i,this.array),r=ue(r,this.array)),this.array[t+0]=qn(e),this.array[t+1]=qn(n),this.array[t+2]=qn(i),this.array[t+3]=qn(r),this}},qt=class extends be{constructor(t,e,n){super(new Float32Array(t),e,n)}},PS=0,pi=new ee,rd=new Ae,ro=new U,ei=new Tn,oa=new Tn,Sn=new U,de=class s extends Pi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:PS++}),this.uuid=ii(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Rx(t)?Ba:Oa)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ce().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return pi.makeRotationFromQuaternion(t),this.applyMatrix4(pi),this}rotateX(t){return pi.makeRotationX(t),this.applyMatrix4(pi),this}rotateY(t){return pi.makeRotationY(t),this.applyMatrix4(pi),this}rotateZ(t){return pi.makeRotationZ(t),this.applyMatrix4(pi),this}translate(t,e,n){return pi.makeTranslation(t,e,n),this.applyMatrix4(pi),this}scale(t,e,n){return pi.makeScale(t,e,n),this.applyMatrix4(pi),this}lookAt(t){return rd.lookAt(t),rd.updateMatrix(),this.applyMatrix4(rd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ro).negate(),this.translate(ro.x,ro.y,ro.z),this}setFromPoints(t){let e=[];for(let n=0,i=t.length;n<i;n++){let r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new qt(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Tn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];ei.setFromBufferAttribute(r),this.morphTargetsRelative?(Sn.addVectors(this.boundingBox.min,ei.min),this.boundingBox.expandByPoint(Sn),Sn.addVectors(this.boundingBox.max,ei.max),this.boundingBox.expandByPoint(Sn)):(this.boundingBox.expandByPoint(ei.min),this.boundingBox.expandByPoint(ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){let n=this.boundingSphere.center;if(ei.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];oa.setFromBufferAttribute(a),this.morphTargetsRelative?(Sn.addVectors(ei.min,oa.min),ei.expandByPoint(Sn),Sn.addVectors(ei.max,oa.max),ei.expandByPoint(Sn)):(ei.expandByPoint(oa.min),ei.expandByPoint(oa.max))}ei.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)Sn.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Sn));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Sn.fromBufferAttribute(a,c),l&&(ro.fromBufferAttribute(t,c),Sn.add(ro)),i=Math.max(i,n.distanceToSquared(Sn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new be(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<n.count;P++)a[P]=new U,l[P]=new U;let c=new U,u=new U,h=new U,d=new _t,f=new _t,m=new _t,_=new U,g=new U;function p(P,w,S){c.fromBufferAttribute(n,P),u.fromBufferAttribute(n,w),h.fromBufferAttribute(n,S),d.fromBufferAttribute(r,P),f.fromBufferAttribute(r,w),m.fromBufferAttribute(r,S),u.sub(c),h.sub(c),f.sub(d),m.sub(d);let D=1/(f.x*m.y-m.x*f.y);isFinite(D)&&(_.copy(u).multiplyScalar(m.y).addScaledVector(h,-f.y).multiplyScalar(D),g.copy(h).multiplyScalar(f.x).addScaledVector(u,-m.x).multiplyScalar(D),a[P].add(_),a[w].add(_),a[S].add(_),l[P].add(g),l[w].add(g),l[S].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let P=0,w=v.length;P<w;++P){let S=v[P],D=S.start,z=S.count;for(let R=D,V=D+z;R<V;R+=3)p(t.getX(R+0),t.getX(R+1),t.getX(R+2))}let x=new U,y=new U,L=new U,b=new U;function C(P){L.fromBufferAttribute(i,P),b.copy(L);let w=a[P];x.copy(w),x.sub(L.multiplyScalar(L.dot(w))).normalize(),y.crossVectors(b,w);let D=y.dot(l[P])<0?-1:1;o.setXYZW(P,x.x,x.y,x.z,D)}for(let P=0,w=v.length;P<w;++P){let S=v[P],D=S.start,z=S.count;for(let R=D,V=D+z;R<V;R+=3)C(t.getX(R+0)),C(t.getX(R+1)),C(t.getX(R+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new be(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let i=new U,r=new U,o=new U,a=new U,l=new U,c=new U,u=new U,h=new U;if(t)for(let d=0,f=t.count;d<f;d+=3){let m=t.getX(d+0),_=t.getX(d+1),g=t.getX(d+2);i.fromBufferAttribute(e,m),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,g),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),a.add(u),l.add(u),c.add(u),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Sn.fromBufferAttribute(t,e),Sn.normalize(),t.setXYZ(e,Sn.x,Sn.y,Sn.z)}toNonIndexed(){function t(a,l){let c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u),f=0,m=0;for(let _=0,g=l.length;_<g;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*u;for(let p=0;p<u;p++)d[m++]=c[f++]}return new be(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){let d=c[u],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){let f=c[h];u.push(f.toJSON(t.data))}u.length>0&&(i[l]=u,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let i=t.attributes;for(let c in i){let u=i[c];this.setAttribute(c,u.clone(e))}let r=t.morphAttributes;for(let c in r){let u=[],h=r[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},s0=new ee,Ks=new Us,ql=new wn,r0=new U,oo=new U,ao=new U,lo=new U,od=new U,Yl=new U,$l=new _t,Zl=new _t,Jl=new _t,o0=new U,a0=new U,l0=new U,Kl=new U,jl=new U,Qe=class extends Ae{constructor(t=new de,e=new Wi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(r&&a){Yl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],h=r[l];u!==0&&(od.fromBufferAttribute(h,t),o?Yl.addScaledVector(od,u):Yl.addScaledVector(od.sub(e),u))}e.add(Yl)}return e}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ql.copy(n.boundingSphere),ql.applyMatrix4(r),Ks.copy(t.ray).recast(t.near),!(ql.containsPoint(Ks.origin)===!1&&(Ks.intersectSphere(ql,r0)===null||Ks.origin.distanceToSquared(r0)>(t.far-t.near)**2))&&(s0.copy(r).invert(),Ks.copy(t.ray).applyMatrix4(s0),!(n.boundingBox!==null&&Ks.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ks)))}_computeIntersections(t,e,n){let i,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=d.length;m<_;m++){let g=d[m],p=o[g.materialIndex],v=Math.max(g.start,f.start),x=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let y=v,L=x;y<L;y+=3){let b=a.getX(y),C=a.getX(y+1),P=a.getX(y+2);i=Ql(this,p,t,n,c,u,h,b,C,P),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{let m=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){let v=a.getX(g),x=a.getX(g+1),y=a.getX(g+2);i=Ql(this,o,t,n,c,u,h,v,x,y),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,_=d.length;m<_;m++){let g=d[m],p=o[g.materialIndex],v=Math.max(g.start,f.start),x=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let y=v,L=x;y<L;y+=3){let b=y,C=y+1,P=y+2;i=Ql(this,p,t,n,c,u,h,b,C,P),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{let m=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){let v=g,x=g+1,y=g+2;i=Ql(this,o,t,n,c,u,h,v,x,y),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}}};function IS(s,t,e,n,i,r,o,a){let l;if(t.side===Wn?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side===ds,a),l===null)return null;jl.copy(a),jl.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(jl);return c<e.near||c>e.far?null:{distance:c,point:jl.clone(),object:s}}function Ql(s,t,e,n,i,r,o,a,l,c){s.getVertexPosition(a,oo),s.getVertexPosition(l,ao),s.getVertexPosition(c,lo);let u=IS(s,t,e,n,oo,ao,lo,Kl);if(u){i&&($l.fromBufferAttribute(i,a),Zl.fromBufferAttribute(i,l),Jl.fromBufferAttribute(i,c),u.uv=as.getInterpolation(Kl,oo,ao,lo,$l,Zl,Jl,new _t)),r&&($l.fromBufferAttribute(r,a),Zl.fromBufferAttribute(r,l),Jl.fromBufferAttribute(r,c),u.uv1=as.getInterpolation(Kl,oo,ao,lo,$l,Zl,Jl,new _t)),o&&(o0.fromBufferAttribute(o,a),a0.fromBufferAttribute(o,l),l0.fromBufferAttribute(o,c),u.normal=as.getInterpolation(Kl,oo,ao,lo,o0,a0,l0,new U),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a,b:l,c,normal:new U,materialIndex:0};as.getNormal(oo,ao,lo,h.normal),u.face=h}return u}var _r=class s extends de{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],h=[],d=0,f=0;m("z","y","x",-1,-1,n,e,t,o,r,0),m("z","y","x",1,-1,n,e,-t,o,r,1),m("x","z","y",1,1,t,n,e,i,o,2),m("x","z","y",1,-1,t,n,-e,i,o,3),m("x","y","z",1,-1,t,e,n,i,r,4),m("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new qt(c,3)),this.setAttribute("normal",new qt(u,3)),this.setAttribute("uv",new qt(h,2));function m(_,g,p,v,x,y,L,b,C,P,w){let S=y/C,D=L/P,z=y/2,R=L/2,V=b/2,X=C+1,nt=P+1,tt=0,j=0,rt=new U;for(let at=0;at<nt;at++){let Mt=at*D-R;for(let Tt=0;Tt<X;Tt++){let yt=Tt*S-z;rt[_]=yt*v,rt[g]=Mt*x,rt[p]=V,c.push(rt.x,rt.y,rt.z),rt[_]=0,rt[g]=0,rt[p]=b>0?1:-1,u.push(rt.x,rt.y,rt.z),h.push(Tt/C),h.push(1-at/P),tt+=1}}for(let at=0;at<P;at++)for(let Mt=0;Mt<C;Mt++){let Tt=d+Mt+X*at,yt=d+Mt+X*(at+1),et=d+(Mt+1)+X*(at+1),ut=d+(Mt+1)+X*at;l.push(Tt,yt,ut),l.push(yt,et,ut),j+=6}a.addGroup(f,j,w),f+=j,d+=tt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Ro(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Hn(s){let t={};for(let e=0;e<s.length;e++){let n=Ro(s[e]);for(let i in n)t[i]=n[i]}return t}function LS(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Nx(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Pe.workingColorSpace}var Dx={clone:Ro,merge:Hn},NS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,DS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,oi=class extends En{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=NS,this.fragmentShader=DS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ro(t.uniforms),this.uniformsGroups=LS(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Po=class extends Ae{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ee,this.projectionMatrix=new ee,this.projectionMatrixInverse=new ee,this.coordinateSystem=Vi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Rs=new U,c0=new _t,u0=new _t,dn=class extends Po{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ao*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(mr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ao*2*Math.atan(Math.tan(mr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Rs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Rs.x,Rs.y).multiplyScalar(-t/Rs.z),Rs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Rs.x,Rs.y).multiplyScalar(-t/Rs.z)}getViewSize(t,e){return this.getViewBounds(t,c0,u0),e.subVectors(u0,c0)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(mr*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},co=-90,uo=1,Bc=class extends Ae{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new dn(co,uo,t,e);i.layers=this.layers,this.add(i);let r=new dn(co,uo,t,e);r.layers=this.layers,this.add(r);let o=new dn(co,uo,t,e);o.layers=this.layers,this.add(o);let a=new dn(co,uo,t,e);a.layers=this.layers,this.add(a);let l=new dn(co,uo,t,e);l.layers=this.layers,this.add(l);let c=new dn(co,uo,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Vi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Da)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,u),t.setRenderTarget(h,d,f),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},xr=class extends ln{constructor(t,e,n,i,r,o,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:fs,super(t,e,n,i,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},zc=class extends si{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new xr(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:an}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new _r(5,5,5),r=new oi({name:"CubemapFromEquirect",uniforms:Ro(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Wn,blending:cs});r.uniforms.tEquirect.value=e;let o=new Qe(i,r),a=e.minFilter;return e.minFilter===ki&&(e.minFilter=an),new Bc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}},ad=new U,US=new U,FS=new ce,Bi=class{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=ad.subVectors(n,e).cross(US.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(ad),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||FS.getNormalMatrix(t),i=this.coplanarPoint(ad).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},js=new wn,tc=new U,vr=class{constructor(t=new Bi,e=new Bi,n=new Bi,i=new Bi,r=new Bi,o=new Bi){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Vi){let n=this.planes,i=t.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],u=i[5],h=i[6],d=i[7],f=i[8],m=i[9],_=i[10],g=i[11],p=i[12],v=i[13],x=i[14],y=i[15];if(n[0].setComponents(l-r,d-c,g-f,y-p).normalize(),n[1].setComponents(l+r,d+c,g+f,y+p).normalize(),n[2].setComponents(l+o,d+u,g+m,y+v).normalize(),n[3].setComponents(l-o,d-u,g-m,y-v).normalize(),n[4].setComponents(l-a,d-h,g-_,y-x).normalize(),e===Vi)n[5].setComponents(l+a,d+h,g+_,y+x).normalize();else if(e===Da)n[5].setComponents(a,h,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),js.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),js.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(js)}intersectsSprite(t){return js.center.set(0,0,0),js.radius=.7071067811865476,js.applyMatrix4(t.matrixWorld),this.intersectsSphere(js)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(tc.x=i.normal.x>0?t.max.x:t.min.x,tc.y=i.normal.y>0?t.max.y:t.min.y,tc.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(tc)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Ux(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function OS(s){let t=new WeakMap;function e(a,l){let c=a.array,u=a.usage,h=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){let u=l.array,h=l._updateRange,d=l.updateRanges;if(s.bindBuffer(c,a),h.count===-1&&d.length===0&&s.bufferSubData(c,0,u),d.length!==0){for(let f=0,m=d.length;f<m;f++){let _=d[f];s.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}h.count!==-1&&(s.bufferSubData(c,h.offset*u.BYTES_PER_ELEMENT,u,h.offset,h.count),h.count=-1),l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isGLBufferAttribute){let u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var Io=class s extends de{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=t/a,d=e/l,f=[],m=[],_=[],g=[];for(let p=0;p<u;p++){let v=p*d-o;for(let x=0;x<c;x++){let y=x*h-r;m.push(y,-v,0),_.push(0,0,1),g.push(x/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<a;v++){let x=v+c*p,y=v+c*(p+1),L=v+1+c*(p+1),b=v+1+c*p;f.push(x,y,b),f.push(y,L,b)}this.setIndex(f),this.setAttribute("position",new qt(m,3)),this.setAttribute("normal",new qt(_,3)),this.setAttribute("uv",new qt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},BS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zS=`#ifdef USE_ALPHAHASH
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
#endif`,kS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,VS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,HS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,GS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,WS=`#ifdef USE_AOMAP
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
#endif`,XS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qS=`#ifdef USE_BATCHING
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
#endif`,YS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,$S=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ZS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,JS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,KS=`#ifdef USE_IRIDESCENCE
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
#endif`,jS=`#ifdef USE_BUMPMAP
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
#endif`,QS=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,tb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,eb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,nb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ib=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,sb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,rb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,ob=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,ab=`#define PI 3.141592653589793
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
} // validated`,lb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,cb=`vec3 transformedNormal = objectNormal;
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
#endif`,ub=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,db=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,fb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,pb="gl_FragColor = linearToOutputTexel( gl_FragColor );",mb=`
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
}`,gb=`#ifdef USE_ENVMAP
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
#endif`,_b=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,xb=`#ifdef USE_ENVMAP
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
#endif`,vb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,yb=`#ifdef USE_ENVMAP
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
#endif`,Mb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Sb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Eb=`#ifdef USE_GRADIENTMAP
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
}`,Ab=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Tb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Cb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Rb=`uniform bool receiveShadow;
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
#endif`,Pb=`#ifdef USE_ENVMAP
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
#endif`,Ib=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Lb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Nb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Db=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ub=`PhysicalMaterial material;
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
#endif`,Fb=`struct PhysicalMaterial {
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
}`,Ob=`
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
#endif`,Bb=`#if defined( RE_IndirectDiffuse )
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
#endif`,zb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,kb=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Vb=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hb=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gb=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Wb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Xb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Yb=`#if defined( USE_POINTS_UV )
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
#endif`,$b=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Zb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Jb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Kb=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,jb=`#ifdef USE_MORPHNORMALS
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
#endif`,Qb=`#ifdef USE_MORPHTARGETS
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
#endif`,tw=`#ifdef USE_MORPHTARGETS
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
#endif`,ew=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,nw=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,iw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ow=`#ifdef USE_NORMALMAP
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
#endif`,aw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,uw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,dw=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,fw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_w=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,yw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Mw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Sw=`float getShadowMask() {
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
}`,bw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ww=`#ifdef USE_SKINNING
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
#endif`,Ew=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Aw=`#ifdef USE_SKINNING
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
#endif`,Tw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Cw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Rw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Pw=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Iw=`#ifdef USE_TRANSMISSION
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
#endif`,Lw=`#ifdef USE_TRANSMISSION
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
#endif`,Nw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Uw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Ow=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Bw=`uniform sampler2D t2D;
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
}`,zw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kw=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Vw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gw=`#include <common>
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
}`,Ww=`#if DEPTH_PACKING == 3200
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
}`,Xw=`#define DISTANCE
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
}`,qw=`#define DISTANCE
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
}`,Yw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$w=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zw=`uniform float scale;
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
}`,Jw=`uniform vec3 diffuse;
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
}`,Kw=`#include <common>
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
}`,jw=`uniform vec3 diffuse;
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
}`,Qw=`#define LAMBERT
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
}`,tE=`#define LAMBERT
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
}`,eE=`#define MATCAP
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
}`,nE=`#define MATCAP
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
}`,iE=`#define NORMAL
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
}`,sE=`#define NORMAL
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
}`,rE=`#define PHONG
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
}`,oE=`#define PHONG
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
}`,aE=`#define STANDARD
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
}`,lE=`#define STANDARD
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
}`,cE=`#define TOON
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
}`,uE=`#define TOON
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
}`,hE=`uniform float size;
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
}`,dE=`uniform vec3 diffuse;
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
}`,fE=`#include <common>
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
}`,pE=`uniform vec3 color;
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
}`,mE=`uniform float rotation;
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
}`,gE=`uniform vec3 diffuse;
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
}`,he={alphahash_fragment:BS,alphahash_pars_fragment:zS,alphamap_fragment:kS,alphamap_pars_fragment:VS,alphatest_fragment:HS,alphatest_pars_fragment:GS,aomap_fragment:WS,aomap_pars_fragment:XS,batching_pars_vertex:qS,batching_vertex:YS,begin_vertex:$S,beginnormal_vertex:ZS,bsdfs:JS,iridescence_fragment:KS,bumpmap_pars_fragment:jS,clipping_planes_fragment:QS,clipping_planes_pars_fragment:tb,clipping_planes_pars_vertex:eb,clipping_planes_vertex:nb,color_fragment:ib,color_pars_fragment:sb,color_pars_vertex:rb,color_vertex:ob,common:ab,cube_uv_reflection_fragment:lb,defaultnormal_vertex:cb,displacementmap_pars_vertex:ub,displacementmap_vertex:hb,emissivemap_fragment:db,emissivemap_pars_fragment:fb,colorspace_fragment:pb,colorspace_pars_fragment:mb,envmap_fragment:gb,envmap_common_pars_fragment:_b,envmap_pars_fragment:xb,envmap_pars_vertex:vb,envmap_physical_pars_fragment:Pb,envmap_vertex:yb,fog_vertex:Mb,fog_pars_vertex:Sb,fog_fragment:bb,fog_pars_fragment:wb,gradientmap_pars_fragment:Eb,lightmap_pars_fragment:Ab,lights_lambert_fragment:Tb,lights_lambert_pars_fragment:Cb,lights_pars_begin:Rb,lights_toon_fragment:Ib,lights_toon_pars_fragment:Lb,lights_phong_fragment:Nb,lights_phong_pars_fragment:Db,lights_physical_fragment:Ub,lights_physical_pars_fragment:Fb,lights_fragment_begin:Ob,lights_fragment_maps:Bb,lights_fragment_end:zb,logdepthbuf_fragment:kb,logdepthbuf_pars_fragment:Vb,logdepthbuf_pars_vertex:Hb,logdepthbuf_vertex:Gb,map_fragment:Wb,map_pars_fragment:Xb,map_particle_fragment:qb,map_particle_pars_fragment:Yb,metalnessmap_fragment:$b,metalnessmap_pars_fragment:Zb,morphinstance_vertex:Jb,morphcolor_vertex:Kb,morphnormal_vertex:jb,morphtarget_pars_vertex:Qb,morphtarget_vertex:tw,normal_fragment_begin:ew,normal_fragment_maps:nw,normal_pars_fragment:iw,normal_pars_vertex:sw,normal_vertex:rw,normalmap_pars_fragment:ow,clearcoat_normal_fragment_begin:aw,clearcoat_normal_fragment_maps:lw,clearcoat_pars_fragment:cw,iridescence_pars_fragment:uw,opaque_fragment:hw,packing:dw,premultiplied_alpha_fragment:fw,project_vertex:pw,dithering_fragment:mw,dithering_pars_fragment:gw,roughnessmap_fragment:_w,roughnessmap_pars_fragment:xw,shadowmap_pars_fragment:vw,shadowmap_pars_vertex:yw,shadowmap_vertex:Mw,shadowmask_pars_fragment:Sw,skinbase_vertex:bw,skinning_pars_vertex:ww,skinning_vertex:Ew,skinnormal_vertex:Aw,specularmap_fragment:Tw,specularmap_pars_fragment:Cw,tonemapping_fragment:Rw,tonemapping_pars_fragment:Pw,transmission_fragment:Iw,transmission_pars_fragment:Lw,uv_pars_fragment:Nw,uv_pars_vertex:Dw,uv_vertex:Uw,worldpos_vertex:Fw,background_vert:Ow,background_frag:Bw,backgroundCube_vert:zw,backgroundCube_frag:kw,cube_vert:Vw,cube_frag:Hw,depth_vert:Gw,depth_frag:Ww,distanceRGBA_vert:Xw,distanceRGBA_frag:qw,equirect_vert:Yw,equirect_frag:$w,linedashed_vert:Zw,linedashed_frag:Jw,meshbasic_vert:Kw,meshbasic_frag:jw,meshlambert_vert:Qw,meshlambert_frag:tE,meshmatcap_vert:eE,meshmatcap_frag:nE,meshnormal_vert:iE,meshnormal_frag:sE,meshphong_vert:rE,meshphong_frag:oE,meshphysical_vert:aE,meshphysical_frag:lE,meshtoon_vert:cE,meshtoon_frag:uE,points_vert:hE,points_frag:dE,shadow_vert:fE,shadow_frag:pE,sprite_vert:mE,sprite_frag:gE},Dt={common:{diffuse:{value:new Ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ce}},envmap:{envMap:{value:null},envMapRotation:{value:new ce},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ce}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ce}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ce},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ce},normalScale:{value:new _t(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ce},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ce}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ce}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ce}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0},uvTransform:{value:new ce}},sprite:{diffuse:{value:new Ht(16777215)},opacity:{value:1},center:{value:new _t(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}}},Ri={basic:{uniforms:Hn([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.fog]),vertexShader:he.meshbasic_vert,fragmentShader:he.meshbasic_frag},lambert:{uniforms:Hn([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new Ht(0)}}]),vertexShader:he.meshlambert_vert,fragmentShader:he.meshlambert_frag},phong:{uniforms:Hn([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new Ht(0)},specular:{value:new Ht(1118481)},shininess:{value:30}}]),vertexShader:he.meshphong_vert,fragmentShader:he.meshphong_frag},standard:{uniforms:Hn([Dt.common,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.roughnessmap,Dt.metalnessmap,Dt.fog,Dt.lights,{emissive:{value:new Ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag},toon:{uniforms:Hn([Dt.common,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.gradientmap,Dt.fog,Dt.lights,{emissive:{value:new Ht(0)}}]),vertexShader:he.meshtoon_vert,fragmentShader:he.meshtoon_frag},matcap:{uniforms:Hn([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,{matcap:{value:null}}]),vertexShader:he.meshmatcap_vert,fragmentShader:he.meshmatcap_frag},points:{uniforms:Hn([Dt.points,Dt.fog]),vertexShader:he.points_vert,fragmentShader:he.points_frag},dashed:{uniforms:Hn([Dt.common,Dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:he.linedashed_vert,fragmentShader:he.linedashed_frag},depth:{uniforms:Hn([Dt.common,Dt.displacementmap]),vertexShader:he.depth_vert,fragmentShader:he.depth_frag},normal:{uniforms:Hn([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,{opacity:{value:1}}]),vertexShader:he.meshnormal_vert,fragmentShader:he.meshnormal_frag},sprite:{uniforms:Hn([Dt.sprite,Dt.fog]),vertexShader:he.sprite_vert,fragmentShader:he.sprite_frag},background:{uniforms:{uvTransform:{value:new ce},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:he.background_vert,fragmentShader:he.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ce}},vertexShader:he.backgroundCube_vert,fragmentShader:he.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:he.cube_vert,fragmentShader:he.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:he.equirect_vert,fragmentShader:he.equirect_frag},distanceRGBA:{uniforms:Hn([Dt.common,Dt.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:he.distanceRGBA_vert,fragmentShader:he.distanceRGBA_frag},shadow:{uniforms:Hn([Dt.lights,Dt.fog,{color:{value:new Ht(0)},opacity:{value:1}}]),vertexShader:he.shadow_vert,fragmentShader:he.shadow_frag}};Ri.physical={uniforms:Hn([Ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ce},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ce},clearcoatNormalScale:{value:new _t(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ce},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ce},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ce},sheen:{value:0},sheenColor:{value:new Ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ce},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ce},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ce},transmissionSamplerSize:{value:new _t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ce},attenuationDistance:{value:0},attenuationColor:{value:new Ht(0)},specularColor:{value:new Ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ce},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ce},anisotropyVector:{value:new _t},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ce}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag};var ec={r:0,b:0,g:0},Qs=new ri,_E=new ee;function xE(s,t,e,n,i,r,o){let a=new Ht(0),l=r===!0?0:1,c,u,h=null,d=0,f=null;function m(v){let x=v.isScene===!0?v.background:null;return x&&x.isTexture&&(x=(v.backgroundBlurriness>0?e:t).get(x)),x}function _(v){let x=!1,y=m(v);y===null?p(a,l):y&&y.isColor&&(p(y,1),x=!0);let L=s.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||x)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil)}function g(v,x){let y=m(x);y&&(y.isCubeTexture||y.mapping===Oo)?(u===void 0&&(u=new Qe(new _r(1,1,1),new oi({name:"BackgroundCubeMaterial",uniforms:Ro(Ri.backgroundCube.uniforms),vertexShader:Ri.backgroundCube.vertexShader,fragmentShader:Ri.backgroundCube.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,b,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Qs.copy(x.backgroundRotation),Qs.x*=-1,Qs.y*=-1,Qs.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Qs.y*=-1,Qs.z*=-1),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(_E.makeRotationFromEuler(Qs)),u.material.toneMapped=Pe.getTransfer(y.colorSpace)!==Be,(h!==y||d!==y.version||f!==s.toneMapping)&&(u.material.needsUpdate=!0,h=y,d=y.version,f=s.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Qe(new Io(2,2),new oi({name:"BackgroundMaterial",uniforms:Ro(Ri.background.uniforms),vertexShader:Ri.background.vertexShader,fragmentShader:Ri.background.fragmentShader,side:ds,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=Pe.getTransfer(y.colorSpace)!==Be,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||d!==y.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,h=y,d=y.version,f=s.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function p(v,x){v.getRGB(ec,Nx(s)),n.buffers.color.setClear(ec.r,ec.g,ec.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(v,x=1){a.set(v),l=x,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,p(a,l)},render:_,addToRenderList:g}}function vE(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null),r=i,o=!1;function a(S,D,z,R,V){let X=!1,nt=h(R,z,D);r!==nt&&(r=nt,c(r.object)),X=f(S,R,z,V),X&&m(S,R,z,V),V!==null&&t.update(V,s.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,y(S,D,z,R),V!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function l(){return s.createVertexArray()}function c(S){return s.bindVertexArray(S)}function u(S){return s.deleteVertexArray(S)}function h(S,D,z){let R=z.wireframe===!0,V=n[S.id];V===void 0&&(V={},n[S.id]=V);let X=V[D.id];X===void 0&&(X={},V[D.id]=X);let nt=X[R];return nt===void 0&&(nt=d(l()),X[R]=nt),nt}function d(S){let D=[],z=[],R=[];for(let V=0;V<e;V++)D[V]=0,z[V]=0,R[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:z,attributeDivisors:R,object:S,attributes:{},index:null}}function f(S,D,z,R){let V=r.attributes,X=D.attributes,nt=0,tt=z.getAttributes();for(let j in tt)if(tt[j].location>=0){let at=V[j],Mt=X[j];if(Mt===void 0&&(j==="instanceMatrix"&&S.instanceMatrix&&(Mt=S.instanceMatrix),j==="instanceColor"&&S.instanceColor&&(Mt=S.instanceColor)),at===void 0||at.attribute!==Mt||Mt&&at.data!==Mt.data)return!0;nt++}return r.attributesNum!==nt||r.index!==R}function m(S,D,z,R){let V={},X=D.attributes,nt=0,tt=z.getAttributes();for(let j in tt)if(tt[j].location>=0){let at=X[j];at===void 0&&(j==="instanceMatrix"&&S.instanceMatrix&&(at=S.instanceMatrix),j==="instanceColor"&&S.instanceColor&&(at=S.instanceColor));let Mt={};Mt.attribute=at,at&&at.data&&(Mt.data=at.data),V[j]=Mt,nt++}r.attributes=V,r.attributesNum=nt,r.index=R}function _(){let S=r.newAttributes;for(let D=0,z=S.length;D<z;D++)S[D]=0}function g(S){p(S,0)}function p(S,D){let z=r.newAttributes,R=r.enabledAttributes,V=r.attributeDivisors;z[S]=1,R[S]===0&&(s.enableVertexAttribArray(S),R[S]=1),V[S]!==D&&(s.vertexAttribDivisor(S,D),V[S]=D)}function v(){let S=r.newAttributes,D=r.enabledAttributes;for(let z=0,R=D.length;z<R;z++)D[z]!==S[z]&&(s.disableVertexAttribArray(z),D[z]=0)}function x(S,D,z,R,V,X,nt){nt===!0?s.vertexAttribIPointer(S,D,z,V,X):s.vertexAttribPointer(S,D,z,R,V,X)}function y(S,D,z,R){_();let V=R.attributes,X=z.getAttributes(),nt=D.defaultAttributeValues;for(let tt in X){let j=X[tt];if(j.location>=0){let rt=V[tt];if(rt===void 0&&(tt==="instanceMatrix"&&S.instanceMatrix&&(rt=S.instanceMatrix),tt==="instanceColor"&&S.instanceColor&&(rt=S.instanceColor)),rt!==void 0){let at=rt.normalized,Mt=rt.itemSize,Tt=t.get(rt);if(Tt===void 0)continue;let yt=Tt.buffer,et=Tt.type,ut=Tt.bytesPerElement,pt=et===s.INT||et===s.UNSIGNED_INT||rt.gpuType===Cp;if(rt.isInterleavedBufferAttribute){let ct=rt.data,zt=ct.stride,$t=rt.offset;if(ct.isInstancedInterleavedBuffer){for(let H=0;H<j.locationSize;H++)p(j.location+H,ct.meshPerAttribute);S.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let H=0;H<j.locationSize;H++)g(j.location+H);s.bindBuffer(s.ARRAY_BUFFER,yt);for(let H=0;H<j.locationSize;H++)x(j.location+H,Mt/j.locationSize,et,at,zt*ut,($t+Mt/j.locationSize*H)*ut,pt)}else{if(rt.isInstancedBufferAttribute){for(let ct=0;ct<j.locationSize;ct++)p(j.location+ct,rt.meshPerAttribute);S.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let ct=0;ct<j.locationSize;ct++)g(j.location+ct);s.bindBuffer(s.ARRAY_BUFFER,yt);for(let ct=0;ct<j.locationSize;ct++)x(j.location+ct,Mt/j.locationSize,et,at,Mt*ut,Mt/j.locationSize*ct*ut,pt)}}else if(nt!==void 0){let at=nt[tt];if(at!==void 0)switch(at.length){case 2:s.vertexAttrib2fv(j.location,at);break;case 3:s.vertexAttrib3fv(j.location,at);break;case 4:s.vertexAttrib4fv(j.location,at);break;default:s.vertexAttrib1fv(j.location,at)}}}}v()}function L(){P();for(let S in n){let D=n[S];for(let z in D){let R=D[z];for(let V in R)u(R[V].object),delete R[V];delete D[z]}delete n[S]}}function b(S){if(n[S.id]===void 0)return;let D=n[S.id];for(let z in D){let R=D[z];for(let V in R)u(R[V].object),delete R[V];delete D[z]}delete n[S.id]}function C(S){for(let D in n){let z=n[D];if(z[S.id]===void 0)continue;let R=z[S.id];for(let V in R)u(R[V].object),delete R[V];delete z[S.id]}}function P(){w(),o=!0,r!==i&&(r=i,c(r.object))}function w(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:P,resetDefaultState:w,dispose:L,releaseStatesOfGeometry:b,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:g,disableUnusedAttributes:v}}function yE(s,t,e){let n;function i(c){n=c}function r(c,u){s.drawArrays(n,c,u),e.update(u,n,1)}function o(c,u,h){h!==0&&(s.drawArraysInstanced(n,c,u,h),e.update(u,n,h))}function a(c,u,h){if(h===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let f=0;f<h;f++)this.render(c[f],u[f]);else{d.multiDrawArraysWEBGL(n,c,0,u,0,h);let f=0;for(let m=0;m<h;m++)f+=u[m];e.update(f,n,1)}}function l(c,u,h,d){if(h===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<c.length;m++)o(c[m],u[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let m=0;for(let _=0;_<h;_++)m+=u[_];for(let _=0;_<d.length;_++)e.update(m,n,d[_])}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function ME(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let b=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(b){return!(b!==ni&&n.convert(b)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){let C=b===hl&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(b!==ps&&n.convert(b)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==_i&&!C)}function l(b){if(b==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=e.logarithmicDepthBuffer===!0,d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_TEXTURE_SIZE),_=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),p=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),v=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),y=f>0,L=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:p,maxVaryings:v,maxFragmentUniforms:x,vertexTextures:y,maxSamples:L}}function SE(s){let t=this,e=null,n=0,i=!1,r=!1,o=new Bi,a=new ce,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let f=h.length!==0||d||n!==0||i;return i=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){e=u(h,d,0)},this.setState=function(h,d,f){let m=h.clippingPlanes,_=h.clipIntersection,g=h.clipShadows,p=s.get(h);if(!i||m===null||m.length===0||r&&!g)r?u(null):c();else{let v=r?0:n,x=v*4,y=p.clippingState||null;l.value=y,y=u(m,d,x,f);for(let L=0;L!==x;++L)y[L]=e[L];p.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,d,f,m){let _=h!==null?h.length:0,g=null;if(_!==0){if(g=l.value,m!==!0||g===null){let p=f+_*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(g===null||g.length<p)&&(g=new Float32Array(p));for(let x=0,y=f;x!==_;++x,y+=4)o.copy(h[x]).applyMatrix4(v,a),o.normal.toArray(g,y),g[y+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,g}}function bE(s){let t=new WeakMap;function e(o,a){return a===ba?o.mapping=fs:a===wa&&(o.mapping=Ds),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===ba||a===wa)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new zc(l.height);return c.fromEquirectangularTexture(s,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Lo=class extends Po{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Mo=4,h0=[.125,.215,.35,.446,.526,.582],cr=20,ld=new Lo,d0=new Ht,cd=null,ud=0,hd=0,dd=!1,lr=(1+Math.sqrt(5))/2,ho=1/lr,f0=[new U(-lr,ho,0),new U(lr,ho,0),new U(-ho,0,lr),new U(ho,0,lr),new U(0,lr,-ho),new U(0,lr,ho),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)],za=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){cd=this._renderer.getRenderTarget(),ud=this._renderer.getActiveCubeFace(),hd=this._renderer.getActiveMipmapLevel(),dd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=g0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=m0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(cd,ud,hd),this._renderer.xr.enabled=dd,t.scissorTest=!1,nc(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===fs||t.mapping===Ds?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),cd=this._renderer.getRenderTarget(),ud=this._renderer.getActiveCubeFace(),hd=this._renderer.getActiveMipmapLevel(),dd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:an,minFilter:an,generateMipmaps:!1,type:hl,format:ni,colorSpace:_s,depthBuffer:!1},i=p0(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=p0(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=wE(r)),this._blurMaterial=EE(r,t,e)}return i}_compileMaterial(t){let e=new Qe(this._lodPlanes[0],t);this._renderer.compile(e,ld)}_sceneToCubeUV(t,e,n,i){let a=new dn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(d0),u.toneMapping=us,u.autoClear=!1;let f=new Wi({name:"PMREM.Background",side:Wn,depthWrite:!1,depthTest:!1}),m=new Qe(new _r,f),_=!1,g=t.background;g?g.isColor&&(f.color.copy(g),t.background=null,_=!0):(f.color.copy(d0),_=!0);for(let p=0;p<6;p++){let v=p%3;v===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):v===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let x=this._cubeSize;nc(i,v*x,p>2?x:0,x,x),u.setRenderTarget(i),_&&u.render(m,a),u.render(t,a)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=d,u.autoClear=h,t.background=g}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===fs||t.mapping===Ds;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=g0()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=m0());let r=i?this._cubemapMaterial:this._equirectMaterial,o=new Qe(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;nc(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,ld)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodPlanes.length;for(let r=1;r<i;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=f0[(i-r-1)%f0.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,i,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new Qe(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*cr-1),_=r/m,g=isFinite(r)?1+Math.floor(u*_):cr;g>cr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${cr}`);let p=[],v=0;for(let C=0;C<cr;++C){let P=C/_,w=Math.exp(-P*P/2);p.push(w),C===0?v+=w:C<g&&(v+=2*w)}for(let C=0;C<p.length;C++)p[C]=p[C]/v;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:x}=this;d.dTheta.value=m,d.mipInt.value=x-n;let y=this._sizeLods[i],L=3*y*(i>x-Mo?i-x+Mo:0),b=4*(this._cubeSize-y);nc(e,L,b,3*y,2*y),l.setRenderTarget(e),l.render(h,ld)}};function wE(s){let t=[],e=[],n=[],i=s,r=s-Mo+1+h0.length;for(let o=0;o<r;o++){let a=Math.pow(2,i);e.push(a);let l=1/a;o>s-Mo?l=h0[o-s+Mo-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,m=6,_=3,g=2,p=1,v=new Float32Array(_*m*f),x=new Float32Array(g*m*f),y=new Float32Array(p*m*f);for(let b=0;b<f;b++){let C=b%3*2/3-1,P=b>2?0:-1,w=[C,P,0,C+2/3,P,0,C+2/3,P+1,0,C,P,0,C+2/3,P+1,0,C,P+1,0];v.set(w,_*m*b),x.set(d,g*m*b);let S=[b,b,b,b,b,b];y.set(S,p*m*b)}let L=new de;L.setAttribute("position",new be(v,_)),L.setAttribute("uv",new be(x,g)),L.setAttribute("faceIndex",new be(y,p)),t.push(L),i>Mo&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function p0(s,t,e){let n=new si(s,t,e);return n.texture.mapping=Oo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function nc(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function EE(s,t,e){let n=new Float32Array(cr),i=new U(0,1,0);return new oi({name:"SphericalGaussianBlur",defines:{n:cr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Bp(),fragmentShader:`

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
		`,blending:cs,depthTest:!1,depthWrite:!1})}function m0(){return new oi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bp(),fragmentShader:`

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
		`,blending:cs,depthTest:!1,depthWrite:!1})}function g0(){return new oi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:cs,depthTest:!1,depthWrite:!1})}function Bp(){return`

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
	`}function AE(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===ba||l===wa,u=l===fs||l===Ds;if(c||u){let h=t.get(a),d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new za(s)),h=c?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{let f=a.image;return c&&f&&f.height>0||u&&f&&i(f)?(e===null&&(e=new za(s)),h=c?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function i(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function TE(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function CE(s,t,e,n){let i={},r=new WeakMap;function o(h){let d=h.target;d.index!==null&&t.remove(d.index);for(let m in d.attributes)t.remove(d.attributes[m]);for(let m in d.morphAttributes){let _=d.morphAttributes[m];for(let g=0,p=_.length;g<p;g++)t.remove(_[g])}d.removeEventListener("dispose",o),delete i[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(h,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,e.memory.geometries++),d}function l(h){let d=h.attributes;for(let m in d)t.update(d[m],s.ARRAY_BUFFER);let f=h.morphAttributes;for(let m in f){let _=f[m];for(let g=0,p=_.length;g<p;g++)t.update(_[g],s.ARRAY_BUFFER)}}function c(h){let d=[],f=h.index,m=h.attributes.position,_=0;if(f!==null){let v=f.array;_=f.version;for(let x=0,y=v.length;x<y;x+=3){let L=v[x+0],b=v[x+1],C=v[x+2];d.push(L,b,b,C,C,L)}}else if(m!==void 0){let v=m.array;_=m.version;for(let x=0,y=v.length/3-1;x<y;x+=3){let L=x+0,b=x+1,C=x+2;d.push(L,b,b,C,C,L)}}else return;let g=new(Rx(d)?Ba:Oa)(d,1);g.version=_;let p=r.get(h);p&&t.remove(p),r.set(h,g)}function u(h){let d=r.get(h);if(d){let f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function RE(s,t,e){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){s.drawElements(n,f,r,d*o),e.update(f,n,1)}function c(d,f,m){m!==0&&(s.drawElementsInstanced(n,f,r,d*o,m),e.update(f,n,m))}function u(d,f,m){if(m===0)return;let _=t.get("WEBGL_multi_draw");if(_===null)for(let g=0;g<m;g++)this.render(d[g]/o,f[g]);else{_.multiDrawElementsWEBGL(n,f,0,r,d,0,m);let g=0;for(let p=0;p<m;p++)g+=f[p];e.update(g,n,1)}}function h(d,f,m,_){if(m===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],_[p]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,m);let p=0;for(let v=0;v<m;v++)p+=f[v];for(let v=0;v<_.length;v++)e.update(p,n,_[v])}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function PE(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function IE(s,t,e){let n=new WeakMap,i=new Ie;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,d=n.get(a);if(d===void 0||d.count!==h){let w=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",w)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],x=0;f===!0&&(x=1),m===!0&&(x=2),_===!0&&(x=3);let y=a.attributes.position.count*x,L=1;y>t.maxTextureSize&&(L=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let b=new Float32Array(y*L*4*h),C=new To(b,y,L,h);C.type=_i,C.needsUpdate=!0;let P=x*4;for(let S=0;S<h;S++){let D=g[S],z=p[S],R=v[S],V=y*L*4*S;for(let X=0;X<D.count;X++){let nt=X*P;f===!0&&(i.fromBufferAttribute(D,X),b[V+nt+0]=i.x,b[V+nt+1]=i.y,b[V+nt+2]=i.z,b[V+nt+3]=0),m===!0&&(i.fromBufferAttribute(z,X),b[V+nt+4]=i.x,b[V+nt+5]=i.y,b[V+nt+6]=i.z,b[V+nt+7]=0),_===!0&&(i.fromBufferAttribute(R,X),b[V+nt+8]=i.x,b[V+nt+9]=i.y,b[V+nt+10]=i.z,b[V+nt+11]=R.itemSize===4?i.w:1)}}d={count:h,texture:C,size:new _t(y,L)},n.set(a,d),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];let m=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",m),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function LE(s,t,e,n){let i=new WeakMap;function r(l){let c=n.render.frame,u=l.geometry,h=t.get(l,u);if(i.get(h)!==c&&(t.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return h}function o(){i=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var ka=class extends ln{constructor(t,e,n,i,r,o,a,l,c,u){if(u=u!==void 0?u:pr,u!==pr&&u!==Eo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===pr&&(n=gr),n===void 0&&u===Eo&&(n=Bo),super(null,i,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:bn,this.minFilter=l!==void 0?l:bn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Fx=new ln,Ox=new ka(1,1);Ox.compareFunction=Fp;var Bx=new To,zx=new Fa,kx=new xr,_0=[],x0=[],v0=new Float32Array(16),y0=new Float32Array(9),M0=new Float32Array(4);function zo(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=_0[i];if(r===void 0&&(r=new Float32Array(i),_0[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function fn(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function pn(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Ju(s,t){let e=x0[t];e===void 0&&(e=new Int32Array(t),x0[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function NE(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function DE(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fn(e,t))return;s.uniform2fv(this.addr,t),pn(e,t)}}function UE(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(fn(e,t))return;s.uniform3fv(this.addr,t),pn(e,t)}}function FE(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fn(e,t))return;s.uniform4fv(this.addr,t),pn(e,t)}}function OE(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(fn(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),pn(e,t)}else{if(fn(e,n))return;M0.set(n),s.uniformMatrix2fv(this.addr,!1,M0),pn(e,n)}}function BE(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(fn(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),pn(e,t)}else{if(fn(e,n))return;y0.set(n),s.uniformMatrix3fv(this.addr,!1,y0),pn(e,n)}}function zE(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(fn(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),pn(e,t)}else{if(fn(e,n))return;v0.set(n),s.uniformMatrix4fv(this.addr,!1,v0),pn(e,n)}}function kE(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function VE(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fn(e,t))return;s.uniform2iv(this.addr,t),pn(e,t)}}function HE(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(fn(e,t))return;s.uniform3iv(this.addr,t),pn(e,t)}}function GE(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fn(e,t))return;s.uniform4iv(this.addr,t),pn(e,t)}}function WE(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function XE(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fn(e,t))return;s.uniform2uiv(this.addr,t),pn(e,t)}}function qE(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(fn(e,t))return;s.uniform3uiv(this.addr,t),pn(e,t)}}function YE(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fn(e,t))return;s.uniform4uiv(this.addr,t),pn(e,t)}}function $E(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r=this.type===s.SAMPLER_2D_SHADOW?Ox:Fx;e.setTexture2D(t||r,i)}function ZE(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||zx,i)}function JE(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||kx,i)}function KE(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Bx,i)}function jE(s){switch(s){case 5126:return NE;case 35664:return DE;case 35665:return UE;case 35666:return FE;case 35674:return OE;case 35675:return BE;case 35676:return zE;case 5124:case 35670:return kE;case 35667:case 35671:return VE;case 35668:case 35672:return HE;case 35669:case 35673:return GE;case 5125:return WE;case 36294:return XE;case 36295:return qE;case 36296:return YE;case 35678:case 36198:case 36298:case 36306:case 35682:return $E;case 35679:case 36299:case 36307:return ZE;case 35680:case 36300:case 36308:case 36293:return JE;case 36289:case 36303:case 36311:case 36292:return KE}}function QE(s,t){s.uniform1fv(this.addr,t)}function t1(s,t){let e=zo(t,this.size,2);s.uniform2fv(this.addr,e)}function e1(s,t){let e=zo(t,this.size,3);s.uniform3fv(this.addr,e)}function n1(s,t){let e=zo(t,this.size,4);s.uniform4fv(this.addr,e)}function i1(s,t){let e=zo(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function s1(s,t){let e=zo(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function r1(s,t){let e=zo(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function o1(s,t){s.uniform1iv(this.addr,t)}function a1(s,t){s.uniform2iv(this.addr,t)}function l1(s,t){s.uniform3iv(this.addr,t)}function c1(s,t){s.uniform4iv(this.addr,t)}function u1(s,t){s.uniform1uiv(this.addr,t)}function h1(s,t){s.uniform2uiv(this.addr,t)}function d1(s,t){s.uniform3uiv(this.addr,t)}function f1(s,t){s.uniform4uiv(this.addr,t)}function p1(s,t,e){let n=this.cache,i=t.length,r=Ju(e,i);fn(n,r)||(s.uniform1iv(this.addr,r),pn(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||Fx,r[o])}function m1(s,t,e){let n=this.cache,i=t.length,r=Ju(e,i);fn(n,r)||(s.uniform1iv(this.addr,r),pn(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||zx,r[o])}function g1(s,t,e){let n=this.cache,i=t.length,r=Ju(e,i);fn(n,r)||(s.uniform1iv(this.addr,r),pn(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||kx,r[o])}function _1(s,t,e){let n=this.cache,i=t.length,r=Ju(e,i);fn(n,r)||(s.uniform1iv(this.addr,r),pn(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Bx,r[o])}function x1(s){switch(s){case 5126:return QE;case 35664:return t1;case 35665:return e1;case 35666:return n1;case 35674:return i1;case 35675:return s1;case 35676:return r1;case 5124:case 35670:return o1;case 35667:case 35671:return a1;case 35668:case 35672:return l1;case 35669:case 35673:return c1;case 5125:return u1;case 36294:return h1;case 36295:return d1;case 36296:return f1;case 35678:case 36198:case 36298:case 36306:case 35682:return p1;case 35679:case 36299:case 36307:return m1;case 35680:case 36300:case 36308:case 36293:return g1;case 36289:case 36303:case 36311:case 36292:return _1}}var gf=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=jE(e.type)}},_f=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=x1(e.type)}},xf=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(t,e[a.id],n)}}},fd=/(\w+)(\])?(\[|\.)?/g;function S0(s,t){s.seq.push(t),s.map[t.id]=t}function v1(s,t,e){let n=s.name,i=n.length;for(fd.lastIndex=0;;){let r=fd.exec(n),o=fd.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){S0(e,c===void 0?new gf(a,s,t):new _f(a,s,t));break}else{let h=e.map[a];h===void 0&&(h=new xf(a),S0(e,h)),e=h}}}var wo=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);v1(r,o,this)}}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function b0(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var y1=37297,M1=0;function S1(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function b1(s){let t=Pe.getPrimaries(Pe.workingColorSpace),e=Pe.getPrimaries(s),n;switch(t===e?n="":t===La&&e===Ia?n="LinearDisplayP3ToLinearSRGB":t===Ia&&e===La&&(n="LinearSRGBToLinearDisplayP3"),s){case _s:case dl:return[n,"LinearTransferOETF"];case mi:case Zu:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function w0(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+S1(s.getShaderSource(t),o)}else return i}function w1(s,t){let e=b1(t);return`vec4 ${s}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function E1(s,t){let e;switch(t){case Q_:e="Linear";break;case tx:e="Reinhard";break;case ex:e="OptimizedCineon";break;case nx:e="ACESFilmic";break;case sx:e="AgX";break;case rx:e="Neutral";break;case ix:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function A1(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ga).join(`
`)}function T1(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function C1(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function ga(s){return s!==""}function E0(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function A0(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var R1=/^[ \t]*#include +<([\w\d./]+)>/gm;function vf(s){return s.replace(R1,I1)}var P1=new Map;function I1(s,t){let e=he[t];if(e===void 0){let n=P1.get(t);if(n!==void 0)e=he[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return vf(e)}var L1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function T0(s){return s.replace(L1,N1)}function N1(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function C0(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function D1(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Ep?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===E_?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Oi&&(t="SHADOWMAP_TYPE_VSM"),t}function U1(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case fs:case Ds:t="ENVMAP_TYPE_CUBE";break;case Oo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function F1(s){let t="ENVMAP_MODE_REFLECTION";return s.envMap&&s.envMapMode===Ds&&(t="ENVMAP_MODE_REFRACTION"),t}function O1(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case ul:t="ENVMAP_BLENDING_MULTIPLY";break;case K_:t="ENVMAP_BLENDING_MIX";break;case j_:t="ENVMAP_BLENDING_ADD";break}return t}function B1(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function z1(s,t,e,n){let i=s.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=D1(e),c=U1(e),u=F1(e),h=O1(e),d=B1(e),f=A1(e),m=T1(r),_=i.createProgram(),g,p,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(ga).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(ga).join(`
`),p.length>0&&(p+=`
`)):(g=[C0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ga).join(`
`),p=[C0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==us?"#define TONE_MAPPING":"",e.toneMapping!==us?he.tonemapping_pars_fragment:"",e.toneMapping!==us?E1("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",he.colorspace_pars_fragment,w1("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ga).join(`
`)),o=vf(o),o=E0(o,e),o=A0(o,e),a=vf(a),a=E0(a,e),a=A0(a,e),o=T0(o),a=T0(a),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===af?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===af?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let x=v+g+o,y=v+p+a,L=b0(i,i.VERTEX_SHADER,x),b=b0(i,i.FRAGMENT_SHADER,y);i.attachShader(_,L),i.attachShader(_,b),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function C(D){if(s.debug.checkShaderErrors){let z=i.getProgramInfoLog(_).trim(),R=i.getShaderInfoLog(L).trim(),V=i.getShaderInfoLog(b).trim(),X=!0,nt=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(X=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,L,b);else{let tt=w0(i,L,"vertex"),j=w0(i,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+z+`
`+tt+`
`+j)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(R===""||V==="")&&(nt=!1);nt&&(D.diagnostics={runnable:X,programLog:z,vertexShader:{log:R,prefix:g},fragmentShader:{log:V,prefix:p}})}i.deleteShader(L),i.deleteShader(b),P=new wo(i,_),w=C1(i,_)}let P;this.getUniforms=function(){return P===void 0&&C(this),P};let w;this.getAttributes=function(){return w===void 0&&C(this),w};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=i.getProgramParameter(_,y1)),S},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=M1++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=L,this.fragmentShader=b,this}var k1=0,yf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Mf(t),e.set(t,n)),n}},Mf=class{constructor(t){this.id=k1++,this.code=t,this.usedTimes=0}};function V1(s,t,e,n,i,r,o){let a=new Co,l=new yf,c=new Set,u=[],h=i.logarithmicDepthBuffer,d=i.vertexTextures,f=i.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(w){return c.add(w),w===0?"uv":`uv${w}`}function g(w,S,D,z,R){let V=z.fog,X=R.geometry,nt=w.isMeshStandardMaterial?z.environment:null,tt=(w.isMeshStandardMaterial?e:t).get(w.envMap||nt),j=tt&&tt.mapping===Oo?tt.image.height:null,rt=m[w.type];w.precision!==null&&(f=i.getMaxPrecision(w.precision),f!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",f,"instead."));let at=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Mt=at!==void 0?at.length:0,Tt=0;X.morphAttributes.position!==void 0&&(Tt=1),X.morphAttributes.normal!==void 0&&(Tt=2),X.morphAttributes.color!==void 0&&(Tt=3);let yt,et,ut,pt;if(rt){let _e=Ri[rt];yt=_e.vertexShader,et=_e.fragmentShader}else yt=w.vertexShader,et=w.fragmentShader,l.update(w),ut=l.getVertexShaderID(w),pt=l.getFragmentShaderID(w);let ct=s.getRenderTarget(),zt=R.isInstancedMesh===!0,$t=R.isBatchedMesh===!0,H=!!w.map,jt=!!w.matcap,ot=!!tt,mt=!!w.aoMap,st=!!w.lightMap,Et=!!w.bumpMap,ft=!!w.normalMap,Ct=!!w.displacementMap,Gt=!!w.emissiveMap,N=!!w.metalnessMap,A=!!w.roughnessMap,B=w.anisotropy>0,O=w.clearcoat>0,Z=w.dispersion>0,Y=w.iridescence>0,it=w.sheen>0,xt=w.transmission>0,vt=B&&!!w.anisotropyMap,Zt=O&&!!w.clearcoatMap,bt=O&&!!w.clearcoatNormalMap,Ft=O&&!!w.clearcoatRoughnessMap,ie=Y&&!!w.iridescenceMap,Xt=Y&&!!w.iridescenceThicknessMap,Nt=it&&!!w.sheenColorMap,Kt=it&&!!w.sheenRoughnessMap,Qt=!!w.specularMap,Te=!!w.specularColorMap,se=!!w.specularIntensityMap,G=xt&&!!w.transmissionMap,gt=xt&&!!w.thicknessMap,lt=!!w.gradientMap,Pt=!!w.alphaMap,Lt=w.alphaTest>0,re=!!w.alphaHash,xe=!!w.extensions,we=us;w.toneMapped&&(ct===null||ct.isXRRenderTarget===!0)&&(we=s.toneMapping);let tn={shaderID:rt,shaderType:w.type,shaderName:w.name,vertexShader:yt,fragmentShader:et,defines:w.defines,customVertexShaderID:ut,customFragmentShaderID:pt,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:f,batching:$t,instancing:zt,instancingColor:zt&&R.instanceColor!==null,instancingMorph:zt&&R.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ct===null?s.outputColorSpace:ct.isXRRenderTarget===!0?ct.texture.colorSpace:_s,alphaToCoverage:!!w.alphaToCoverage,map:H,matcap:jt,envMap:ot,envMapMode:ot&&tt.mapping,envMapCubeUVHeight:j,aoMap:mt,lightMap:st,bumpMap:Et,normalMap:ft,displacementMap:d&&Ct,emissiveMap:Gt,normalMapObjectSpace:ft&&w.normalMapType===Mx,normalMapTangentSpace:ft&&w.normalMapType===zs,metalnessMap:N,roughnessMap:A,anisotropy:B,anisotropyMap:vt,clearcoat:O,clearcoatMap:Zt,clearcoatNormalMap:bt,clearcoatRoughnessMap:Ft,dispersion:Z,iridescence:Y,iridescenceMap:ie,iridescenceThicknessMap:Xt,sheen:it,sheenColorMap:Nt,sheenRoughnessMap:Kt,specularMap:Qt,specularColorMap:Te,specularIntensityMap:se,transmission:xt,transmissionMap:G,thicknessMap:gt,gradientMap:lt,opaque:w.transparent===!1&&w.blending===fr&&w.alphaToCoverage===!1,alphaMap:Pt,alphaTest:Lt,alphaHash:re,combine:w.combine,mapUv:H&&_(w.map.channel),aoMapUv:mt&&_(w.aoMap.channel),lightMapUv:st&&_(w.lightMap.channel),bumpMapUv:Et&&_(w.bumpMap.channel),normalMapUv:ft&&_(w.normalMap.channel),displacementMapUv:Ct&&_(w.displacementMap.channel),emissiveMapUv:Gt&&_(w.emissiveMap.channel),metalnessMapUv:N&&_(w.metalnessMap.channel),roughnessMapUv:A&&_(w.roughnessMap.channel),anisotropyMapUv:vt&&_(w.anisotropyMap.channel),clearcoatMapUv:Zt&&_(w.clearcoatMap.channel),clearcoatNormalMapUv:bt&&_(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ft&&_(w.clearcoatRoughnessMap.channel),iridescenceMapUv:ie&&_(w.iridescenceMap.channel),iridescenceThicknessMapUv:Xt&&_(w.iridescenceThicknessMap.channel),sheenColorMapUv:Nt&&_(w.sheenColorMap.channel),sheenRoughnessMapUv:Kt&&_(w.sheenRoughnessMap.channel),specularMapUv:Qt&&_(w.specularMap.channel),specularColorMapUv:Te&&_(w.specularColorMap.channel),specularIntensityMapUv:se&&_(w.specularIntensityMap.channel),transmissionMapUv:G&&_(w.transmissionMap.channel),thicknessMapUv:gt&&_(w.thicknessMap.channel),alphaMapUv:Pt&&_(w.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(ft||B),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:R.isPoints===!0&&!!X.attributes.uv&&(H||Pt),fog:!!V,useFog:w.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:R.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:Mt,morphTextureStride:Tt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:s.shadowMap.enabled&&D.length>0,shadowMapType:s.shadowMap.type,toneMapping:we,useLegacyLights:s._useLegacyLights,decodeVideoTexture:H&&w.map.isVideoTexture===!0&&Pe.getTransfer(w.map.colorSpace)===Be,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===zi,flipSided:w.side===Wn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:xe&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:xe&&w.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return tn.vertexUv1s=c.has(1),tn.vertexUv2s=c.has(2),tn.vertexUv3s=c.has(3),c.clear(),tn}function p(w){let S=[];if(w.shaderID?S.push(w.shaderID):(S.push(w.customVertexShaderID),S.push(w.customFragmentShaderID)),w.defines!==void 0)for(let D in w.defines)S.push(D),S.push(w.defines[D]);return w.isRawShaderMaterial===!1&&(v(S,w),x(S,w),S.push(s.outputColorSpace)),S.push(w.customProgramCacheKey),S.join()}function v(w,S){w.push(S.precision),w.push(S.outputColorSpace),w.push(S.envMapMode),w.push(S.envMapCubeUVHeight),w.push(S.mapUv),w.push(S.alphaMapUv),w.push(S.lightMapUv),w.push(S.aoMapUv),w.push(S.bumpMapUv),w.push(S.normalMapUv),w.push(S.displacementMapUv),w.push(S.emissiveMapUv),w.push(S.metalnessMapUv),w.push(S.roughnessMapUv),w.push(S.anisotropyMapUv),w.push(S.clearcoatMapUv),w.push(S.clearcoatNormalMapUv),w.push(S.clearcoatRoughnessMapUv),w.push(S.iridescenceMapUv),w.push(S.iridescenceThicknessMapUv),w.push(S.sheenColorMapUv),w.push(S.sheenRoughnessMapUv),w.push(S.specularMapUv),w.push(S.specularColorMapUv),w.push(S.specularIntensityMapUv),w.push(S.transmissionMapUv),w.push(S.thicknessMapUv),w.push(S.combine),w.push(S.fogExp2),w.push(S.sizeAttenuation),w.push(S.morphTargetsCount),w.push(S.morphAttributeCount),w.push(S.numDirLights),w.push(S.numPointLights),w.push(S.numSpotLights),w.push(S.numSpotLightMaps),w.push(S.numHemiLights),w.push(S.numRectAreaLights),w.push(S.numDirLightShadows),w.push(S.numPointLightShadows),w.push(S.numSpotLightShadows),w.push(S.numSpotLightShadowsWithMaps),w.push(S.numLightProbes),w.push(S.shadowMapType),w.push(S.toneMapping),w.push(S.numClippingPlanes),w.push(S.numClipIntersection),w.push(S.depthPacking)}function x(w,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),w.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.skinning&&a.enable(4),S.morphTargets&&a.enable(5),S.morphNormals&&a.enable(6),S.morphColors&&a.enable(7),S.premultipliedAlpha&&a.enable(8),S.shadowMapEnabled&&a.enable(9),S.useLegacyLights&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.alphaToCoverage&&a.enable(20),w.push(a.mask)}function y(w){let S=m[w.type],D;if(S){let z=Ri[S];D=Dx.clone(z.uniforms)}else D=w.uniforms;return D}function L(w,S){let D;for(let z=0,R=u.length;z<R;z++){let V=u[z];if(V.cacheKey===S){D=V,++D.usedTimes;break}}return D===void 0&&(D=new z1(s,S,w,r),u.push(D)),D}function b(w){if(--w.usedTimes===0){let S=u.indexOf(w);u[S]=u[u.length-1],u.pop(),w.destroy()}}function C(w){l.remove(w)}function P(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:y,acquireProgram:L,releaseProgram:b,releaseShaderCache:C,programs:u,dispose:P}}function H1(){let s=new WeakMap;function t(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function e(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function G1(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function R0(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function P0(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(h,d,f,m,_,g){let p=s[t];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:m,renderOrder:h.renderOrder,z:_,group:g},s[t]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=h.renderOrder,p.z=_,p.group=g),t++,p}function a(h,d,f,m,_,g){let p=o(h,d,f,m,_,g);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function l(h,d,f,m,_,g){let p=o(h,d,f,m,_,g);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function c(h,d){e.length>1&&e.sort(h||G1),n.length>1&&n.sort(d||R0),i.length>1&&i.sort(d||R0)}function u(){for(let h=t,d=s.length;h<d;h++){let f=s[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:u,sort:c}}function W1(){let s=new WeakMap;function t(n,i){let r=s.get(n),o;return r===void 0?(o=new P0,s.set(n,[o])):i>=r.length?(o=new P0,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function X1(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new Ht};break;case"SpotLight":e={position:new U,direction:new U,color:new Ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new Ht,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new Ht,groundColor:new Ht};break;case"RectAreaLight":e={color:new Ht,position:new U,halfWidth:new U,halfHeight:new U};break}return s[t.id]=e,e}}}function q1(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var Y1=0;function $1(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Z1(s){let t=new X1,e=q1(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new U);let i=new U,r=new ee,o=new ee;function a(c,u){let h=0,d=0,f=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let m=0,_=0,g=0,p=0,v=0,x=0,y=0,L=0,b=0,C=0,P=0;c.sort($1);let w=u===!0?Math.PI:1;for(let D=0,z=c.length;D<z;D++){let R=c[D],V=R.color,X=R.intensity,nt=R.distance,tt=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=V.r*X*w,d+=V.g*X*w,f+=V.b*X*w;else if(R.isLightProbe){for(let j=0;j<9;j++)n.probe[j].addScaledVector(R.sh.coefficients[j],X);P++}else if(R.isDirectionalLight){let j=t.get(R);if(j.color.copy(R.color).multiplyScalar(R.intensity*w),R.castShadow){let rt=R.shadow,at=e.get(R);at.shadowBias=rt.bias,at.shadowNormalBias=rt.normalBias,at.shadowRadius=rt.radius,at.shadowMapSize=rt.mapSize,n.directionalShadow[m]=at,n.directionalShadowMap[m]=tt,n.directionalShadowMatrix[m]=R.shadow.matrix,x++}n.directional[m]=j,m++}else if(R.isSpotLight){let j=t.get(R);j.position.setFromMatrixPosition(R.matrixWorld),j.color.copy(V).multiplyScalar(X*w),j.distance=nt,j.coneCos=Math.cos(R.angle),j.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),j.decay=R.decay,n.spot[g]=j;let rt=R.shadow;if(R.map&&(n.spotLightMap[b]=R.map,b++,rt.updateMatrices(R),R.castShadow&&C++),n.spotLightMatrix[g]=rt.matrix,R.castShadow){let at=e.get(R);at.shadowBias=rt.bias,at.shadowNormalBias=rt.normalBias,at.shadowRadius=rt.radius,at.shadowMapSize=rt.mapSize,n.spotShadow[g]=at,n.spotShadowMap[g]=tt,L++}g++}else if(R.isRectAreaLight){let j=t.get(R);j.color.copy(V).multiplyScalar(X),j.halfWidth.set(R.width*.5,0,0),j.halfHeight.set(0,R.height*.5,0),n.rectArea[p]=j,p++}else if(R.isPointLight){let j=t.get(R);if(j.color.copy(R.color).multiplyScalar(R.intensity*w),j.distance=R.distance,j.decay=R.decay,R.castShadow){let rt=R.shadow,at=e.get(R);at.shadowBias=rt.bias,at.shadowNormalBias=rt.normalBias,at.shadowRadius=rt.radius,at.shadowMapSize=rt.mapSize,at.shadowCameraNear=rt.camera.near,at.shadowCameraFar=rt.camera.far,n.pointShadow[_]=at,n.pointShadowMap[_]=tt,n.pointShadowMatrix[_]=R.shadow.matrix,y++}n.point[_]=j,_++}else if(R.isHemisphereLight){let j=t.get(R);j.skyColor.copy(R.color).multiplyScalar(X*w),j.groundColor.copy(R.groundColor).multiplyScalar(X*w),n.hemi[v]=j,v++}}p>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Dt.LTC_FLOAT_1,n.rectAreaLTC2=Dt.LTC_FLOAT_2):(n.rectAreaLTC1=Dt.LTC_HALF_1,n.rectAreaLTC2=Dt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=f;let S=n.hash;(S.directionalLength!==m||S.pointLength!==_||S.spotLength!==g||S.rectAreaLength!==p||S.hemiLength!==v||S.numDirectionalShadows!==x||S.numPointShadows!==y||S.numSpotShadows!==L||S.numSpotMaps!==b||S.numLightProbes!==P)&&(n.directional.length=m,n.spot.length=g,n.rectArea.length=p,n.point.length=_,n.hemi.length=v,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=L,n.spotShadowMap.length=L,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=L+b-C,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=P,S.directionalLength=m,S.pointLength=_,S.spotLength=g,S.rectAreaLength=p,S.hemiLength=v,S.numDirectionalShadows=x,S.numPointShadows=y,S.numSpotShadows=L,S.numSpotMaps=b,S.numLightProbes=P,n.version=Y1++)}function l(c,u){let h=0,d=0,f=0,m=0,_=0,g=u.matrixWorldInverse;for(let p=0,v=c.length;p<v;p++){let x=c[p];if(x.isDirectionalLight){let y=n.directional[h];y.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(g),h++}else if(x.isSpotLight){let y=n.spot[f];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(g),f++}else if(x.isRectAreaLight){let y=n.rectArea[m];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(g),o.identity(),r.copy(x.matrixWorld),r.premultiply(g),o.extractRotation(r),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),m++}else if(x.isPointLight){let y=n.point[d];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(g),d++}else if(x.isHemisphereLight){let y=n.hemi[_];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(g),_++}}}return{setup:a,setupView:l,state:n}}function I0(s){let t=new Z1(s),e=[],n=[];function i(u){c.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function o(u){n.push(u)}function a(u){t.setup(e,u)}function l(u){t.setupView(e,u)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function J1(s){let t=new WeakMap;function e(i,r=0){let o=t.get(i),a;return o===void 0?(a=new I0(s),t.set(i,[a])):r>=o.length?(a=new I0(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Va=class extends En{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=vx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ha=class extends En{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},K1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,j1=`uniform sampler2D shadow_pass;
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
}`;function Q1(s,t,e){let n=new vr,i=new _t,r=new _t,o=new Ie,a=new Va({depthPacking:yx}),l=new Ha,c={},u=e.maxTextureSize,h={[ds]:Wn,[Wn]:ds,[zi]:zi},d=new oi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _t},radius:{value:4}},vertexShader:K1,fragmentShader:j1}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let m=new de;m.setAttribute("position",new be(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Qe(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ep;let p=this.type;this.render=function(b,C,P){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||b.length===0)return;let w=s.getRenderTarget(),S=s.getActiveCubeFace(),D=s.getActiveMipmapLevel(),z=s.state;z.setBlending(cs),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let R=p!==Oi&&this.type===Oi,V=p===Oi&&this.type!==Oi;for(let X=0,nt=b.length;X<nt;X++){let tt=b[X],j=tt.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",tt,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;i.copy(j.mapSize);let rt=j.getFrameExtents();if(i.multiply(rt),r.copy(j.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/rt.x),i.x=r.x*rt.x,j.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/rt.y),i.y=r.y*rt.y,j.mapSize.y=r.y)),j.map===null||R===!0||V===!0){let Mt=this.type!==Oi?{minFilter:bn,magFilter:bn}:{};j.map!==null&&j.map.dispose(),j.map=new si(i.x,i.y,Mt),j.map.texture.name=tt.name+".shadowMap",j.camera.updateProjectionMatrix()}s.setRenderTarget(j.map),s.clear();let at=j.getViewportCount();for(let Mt=0;Mt<at;Mt++){let Tt=j.getViewport(Mt);o.set(r.x*Tt.x,r.y*Tt.y,r.x*Tt.z,r.y*Tt.w),z.viewport(o),j.updateMatrices(tt,Mt),n=j.getFrustum(),y(C,P,j.camera,tt,this.type)}j.isPointLightShadow!==!0&&this.type===Oi&&v(j,P),j.needsUpdate=!1}p=this.type,g.needsUpdate=!1,s.setRenderTarget(w,S,D)};function v(b,C){let P=t.update(_);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new si(i.x,i.y)),d.uniforms.shadow_pass.value=b.map.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,s.setRenderTarget(b.mapPass),s.clear(),s.renderBufferDirect(C,null,P,d,_,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,s.setRenderTarget(b.map),s.clear(),s.renderBufferDirect(C,null,P,f,_,null)}function x(b,C,P,w){let S=null,D=P.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(D!==void 0)S=D;else if(S=P.isPointLight===!0?l:a,s.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){let z=S.uuid,R=C.uuid,V=c[z];V===void 0&&(V={},c[z]=V);let X=V[R];X===void 0&&(X=S.clone(),V[R]=X,C.addEventListener("dispose",L)),S=X}if(S.visible=C.visible,S.wireframe=C.wireframe,w===Oi?S.side=C.shadowSide!==null?C.shadowSide:C.side:S.side=C.shadowSide!==null?C.shadowSide:h[C.side],S.alphaMap=C.alphaMap,S.alphaTest=C.alphaTest,S.map=C.map,S.clipShadows=C.clipShadows,S.clippingPlanes=C.clippingPlanes,S.clipIntersection=C.clipIntersection,S.displacementMap=C.displacementMap,S.displacementScale=C.displacementScale,S.displacementBias=C.displacementBias,S.wireframeLinewidth=C.wireframeLinewidth,S.linewidth=C.linewidth,P.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let z=s.properties.get(S);z.light=P}return S}function y(b,C,P,w,S){if(b.visible===!1)return;if(b.layers.test(C.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&S===Oi)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,b.matrixWorld);let R=t.update(b),V=b.material;if(Array.isArray(V)){let X=R.groups;for(let nt=0,tt=X.length;nt<tt;nt++){let j=X[nt],rt=V[j.materialIndex];if(rt&&rt.visible){let at=x(b,rt,w,S);b.onBeforeShadow(s,b,C,P,R,at,j),s.renderBufferDirect(P,null,R,at,b,j),b.onAfterShadow(s,b,C,P,R,at,j)}}}else if(V.visible){let X=x(b,V,w,S);b.onBeforeShadow(s,b,C,P,R,X,null),s.renderBufferDirect(P,null,R,X,b,null),b.onAfterShadow(s,b,C,P,R,X,null)}}let z=b.children;for(let R=0,V=z.length;R<V;R++)y(z[R],C,P,w,S)}function L(b){b.target.removeEventListener("dispose",L);for(let P in c){let w=c[P],S=b.target.uuid;S in w&&(w[S].dispose(),delete w[S])}}}function tA(s){function t(){let G=!1,gt=new Ie,lt=null,Pt=new Ie(0,0,0,0);return{setMask:function(Lt){lt!==Lt&&!G&&(s.colorMask(Lt,Lt,Lt,Lt),lt=Lt)},setLocked:function(Lt){G=Lt},setClear:function(Lt,re,xe,we,tn){tn===!0&&(Lt*=we,re*=we,xe*=we),gt.set(Lt,re,xe,we),Pt.equals(gt)===!1&&(s.clearColor(Lt,re,xe,we),Pt.copy(gt))},reset:function(){G=!1,lt=null,Pt.set(-1,0,0,0)}}}function e(){let G=!1,gt=null,lt=null,Pt=null;return{setTest:function(Lt){Lt?pt(s.DEPTH_TEST):ct(s.DEPTH_TEST)},setMask:function(Lt){gt!==Lt&&!G&&(s.depthMask(Lt),gt=Lt)},setFunc:function(Lt){if(lt!==Lt){switch(Lt){case W_:s.depthFunc(s.NEVER);break;case X_:s.depthFunc(s.ALWAYS);break;case q_:s.depthFunc(s.LESS);break;case Sa:s.depthFunc(s.LEQUAL);break;case Y_:s.depthFunc(s.EQUAL);break;case $_:s.depthFunc(s.GEQUAL);break;case Z_:s.depthFunc(s.GREATER);break;case J_:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}lt=Lt}},setLocked:function(Lt){G=Lt},setClear:function(Lt){Pt!==Lt&&(s.clearDepth(Lt),Pt=Lt)},reset:function(){G=!1,gt=null,lt=null,Pt=null}}}function n(){let G=!1,gt=null,lt=null,Pt=null,Lt=null,re=null,xe=null,we=null,tn=null;return{setTest:function(_e){G||(_e?pt(s.STENCIL_TEST):ct(s.STENCIL_TEST))},setMask:function(_e){gt!==_e&&!G&&(s.stencilMask(_e),gt=_e)},setFunc:function(_e,Rn,Ce){(lt!==_e||Pt!==Rn||Lt!==Ce)&&(s.stencilFunc(_e,Rn,Ce),lt=_e,Pt=Rn,Lt=Ce)},setOp:function(_e,Rn,Ce){(re!==_e||xe!==Rn||we!==Ce)&&(s.stencilOp(_e,Rn,Ce),re=_e,xe=Rn,we=Ce)},setLocked:function(_e){G=_e},setClear:function(_e){tn!==_e&&(s.clearStencil(_e),tn=_e)},reset:function(){G=!1,gt=null,lt=null,Pt=null,Lt=null,re=null,xe=null,we=null,tn=null}}}let i=new t,r=new e,o=new n,a=new WeakMap,l=new WeakMap,c={},u={},h=new WeakMap,d=[],f=null,m=!1,_=null,g=null,p=null,v=null,x=null,y=null,L=null,b=new Ht(0,0,0),C=0,P=!1,w=null,S=null,D=null,z=null,R=null,V=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,nt=0,tt=s.getParameter(s.VERSION);tt.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec(tt)[1]),X=nt>=1):tt.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec(tt)[1]),X=nt>=2);let j=null,rt={},at=s.getParameter(s.SCISSOR_BOX),Mt=s.getParameter(s.VIEWPORT),Tt=new Ie().fromArray(at),yt=new Ie().fromArray(Mt);function et(G,gt,lt,Pt){let Lt=new Uint8Array(4),re=s.createTexture();s.bindTexture(G,re),s.texParameteri(G,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(G,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let xe=0;xe<lt;xe++)G===s.TEXTURE_3D||G===s.TEXTURE_2D_ARRAY?s.texImage3D(gt,0,s.RGBA,1,1,Pt,0,s.RGBA,s.UNSIGNED_BYTE,Lt):s.texImage2D(gt+xe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Lt);return re}let ut={};ut[s.TEXTURE_2D]=et(s.TEXTURE_2D,s.TEXTURE_2D,1),ut[s.TEXTURE_CUBE_MAP]=et(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ut[s.TEXTURE_2D_ARRAY]=et(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ut[s.TEXTURE_3D]=et(s.TEXTURE_3D,s.TEXTURE_3D,1,1),i.setClear(0,0,0,1),r.setClear(1),o.setClear(0),pt(s.DEPTH_TEST),r.setFunc(Sa),Et(!1),ft(Cd),pt(s.CULL_FACE),mt(cs);function pt(G){c[G]!==!0&&(s.enable(G),c[G]=!0)}function ct(G){c[G]!==!1&&(s.disable(G),c[G]=!1)}function zt(G,gt){return u[G]!==gt?(s.bindFramebuffer(G,gt),u[G]=gt,G===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=gt),G===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=gt),!0):!1}function $t(G,gt){let lt=d,Pt=!1;if(G){lt=h.get(gt),lt===void 0&&(lt=[],h.set(gt,lt));let Lt=G.textures;if(lt.length!==Lt.length||lt[0]!==s.COLOR_ATTACHMENT0){for(let re=0,xe=Lt.length;re<xe;re++)lt[re]=s.COLOR_ATTACHMENT0+re;lt.length=Lt.length,Pt=!0}}else lt[0]!==s.BACK&&(lt[0]=s.BACK,Pt=!0);Pt&&s.drawBuffers(lt)}function H(G){return f!==G?(s.useProgram(G),f=G,!0):!1}let jt={[Ls]:s.FUNC_ADD,[T_]:s.FUNC_SUBTRACT,[C_]:s.FUNC_REVERSE_SUBTRACT};jt[R_]=s.MIN,jt[P_]=s.MAX;let ot={[I_]:s.ZERO,[L_]:s.ONE,[N_]:s.SRC_COLOR,[Dc]:s.SRC_ALPHA,[z_]:s.SRC_ALPHA_SATURATE,[O_]:s.DST_COLOR,[U_]:s.DST_ALPHA,[D_]:s.ONE_MINUS_SRC_COLOR,[Uc]:s.ONE_MINUS_SRC_ALPHA,[B_]:s.ONE_MINUS_DST_COLOR,[F_]:s.ONE_MINUS_DST_ALPHA,[k_]:s.CONSTANT_COLOR,[V_]:s.ONE_MINUS_CONSTANT_COLOR,[H_]:s.CONSTANT_ALPHA,[G_]:s.ONE_MINUS_CONSTANT_ALPHA};function mt(G,gt,lt,Pt,Lt,re,xe,we,tn,_e){if(G===cs){m===!0&&(ct(s.BLEND),m=!1);return}if(m===!1&&(pt(s.BLEND),m=!0),G!==A_){if(G!==_||_e!==P){if((g!==Ls||x!==Ls)&&(s.blendEquation(s.FUNC_ADD),g=Ls,x=Ls),_e)switch(G){case fr:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Rd:s.blendFunc(s.ONE,s.ONE);break;case Pd:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Id:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case fr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Rd:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Pd:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Id:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}p=null,v=null,y=null,L=null,b.set(0,0,0),C=0,_=G,P=_e}return}Lt=Lt||gt,re=re||lt,xe=xe||Pt,(gt!==g||Lt!==x)&&(s.blendEquationSeparate(jt[gt],jt[Lt]),g=gt,x=Lt),(lt!==p||Pt!==v||re!==y||xe!==L)&&(s.blendFuncSeparate(ot[lt],ot[Pt],ot[re],ot[xe]),p=lt,v=Pt,y=re,L=xe),(we.equals(b)===!1||tn!==C)&&(s.blendColor(we.r,we.g,we.b,tn),b.copy(we),C=tn),_=G,P=!1}function st(G,gt){G.side===zi?ct(s.CULL_FACE):pt(s.CULL_FACE);let lt=G.side===Wn;gt&&(lt=!lt),Et(lt),G.blending===fr&&G.transparent===!1?mt(cs):mt(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),r.setFunc(G.depthFunc),r.setTest(G.depthTest),r.setMask(G.depthWrite),i.setMask(G.colorWrite);let Pt=G.stencilWrite;o.setTest(Pt),Pt&&(o.setMask(G.stencilWriteMask),o.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),o.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Gt(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?pt(s.SAMPLE_ALPHA_TO_COVERAGE):ct(s.SAMPLE_ALPHA_TO_COVERAGE)}function Et(G){w!==G&&(G?s.frontFace(s.CW):s.frontFace(s.CCW),w=G)}function ft(G){G!==b_?(pt(s.CULL_FACE),G!==S&&(G===Cd?s.cullFace(s.BACK):G===w_?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ct(s.CULL_FACE),S=G}function Ct(G){G!==D&&(X&&s.lineWidth(G),D=G)}function Gt(G,gt,lt){G?(pt(s.POLYGON_OFFSET_FILL),(z!==gt||R!==lt)&&(s.polygonOffset(gt,lt),z=gt,R=lt)):ct(s.POLYGON_OFFSET_FILL)}function N(G){G?pt(s.SCISSOR_TEST):ct(s.SCISSOR_TEST)}function A(G){G===void 0&&(G=s.TEXTURE0+V-1),j!==G&&(s.activeTexture(G),j=G)}function B(G,gt,lt){lt===void 0&&(j===null?lt=s.TEXTURE0+V-1:lt=j);let Pt=rt[lt];Pt===void 0&&(Pt={type:void 0,texture:void 0},rt[lt]=Pt),(Pt.type!==G||Pt.texture!==gt)&&(j!==lt&&(s.activeTexture(lt),j=lt),s.bindTexture(G,gt||ut[G]),Pt.type=G,Pt.texture=gt)}function O(){let G=rt[j];G!==void 0&&G.type!==void 0&&(s.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function Z(){try{s.compressedTexImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Y(){try{s.compressedTexImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function it(){try{s.texSubImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function xt(){try{s.texSubImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function vt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Zt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function bt(){try{s.texStorage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ft(){try{s.texStorage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ie(){try{s.texImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Xt(){try{s.texImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Nt(G){Tt.equals(G)===!1&&(s.scissor(G.x,G.y,G.z,G.w),Tt.copy(G))}function Kt(G){yt.equals(G)===!1&&(s.viewport(G.x,G.y,G.z,G.w),yt.copy(G))}function Qt(G,gt){let lt=l.get(gt);lt===void 0&&(lt=new WeakMap,l.set(gt,lt));let Pt=lt.get(G);Pt===void 0&&(Pt=s.getUniformBlockIndex(gt,G.name),lt.set(G,Pt))}function Te(G,gt){let Pt=l.get(gt).get(G);a.get(gt)!==Pt&&(s.uniformBlockBinding(gt,Pt,G.__bindingPointIndex),a.set(gt,Pt))}function se(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),c={},j=null,rt={},u={},h=new WeakMap,d=[],f=null,m=!1,_=null,g=null,p=null,v=null,x=null,y=null,L=null,b=new Ht(0,0,0),C=0,P=!1,w=null,S=null,D=null,z=null,R=null,Tt.set(0,0,s.canvas.width,s.canvas.height),yt.set(0,0,s.canvas.width,s.canvas.height),i.reset(),r.reset(),o.reset()}return{buffers:{color:i,depth:r,stencil:o},enable:pt,disable:ct,bindFramebuffer:zt,drawBuffers:$t,useProgram:H,setBlending:mt,setMaterial:st,setFlipSided:Et,setCullFace:ft,setLineWidth:Ct,setPolygonOffset:Gt,setScissorTest:N,activeTexture:A,bindTexture:B,unbindTexture:O,compressedTexImage2D:Z,compressedTexImage3D:Y,texImage2D:ie,texImage3D:Xt,updateUBOMapping:Qt,uniformBlockBinding:Te,texStorage2D:bt,texStorage3D:Ft,texSubImage2D:it,texSubImage3D:xt,compressedTexSubImage2D:vt,compressedTexSubImage3D:Zt,scissor:Nt,viewport:Kt,reset:se}}function eA(s,t,e,n,i,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new _t,u=new WeakMap,h,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(N,A){return f?new OffscreenCanvas(N,A):Ua("canvas")}function _(N,A,B){let O=1,Z=Gt(N);if((Z.width>B||Z.height>B)&&(O=B/Math.max(Z.width,Z.height)),O<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){let Y=Math.floor(O*Z.width),it=Math.floor(O*Z.height);h===void 0&&(h=m(Y,it));let xt=A?m(Y,it):h;return xt.width=Y,xt.height=it,xt.getContext("2d").drawImage(N,0,0,Y,it),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+Y+"x"+it+")."),xt}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),N;return N}function g(N){return N.generateMipmaps&&N.minFilter!==bn&&N.minFilter!==an}function p(N){s.generateMipmap(N)}function v(N,A,B,O,Z=!1){if(N!==null){if(s[N]!==void 0)return s[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let Y=A;if(A===s.RED&&(B===s.FLOAT&&(Y=s.R32F),B===s.HALF_FLOAT&&(Y=s.R16F),B===s.UNSIGNED_BYTE&&(Y=s.R8)),A===s.RED_INTEGER&&(B===s.UNSIGNED_BYTE&&(Y=s.R8UI),B===s.UNSIGNED_SHORT&&(Y=s.R16UI),B===s.UNSIGNED_INT&&(Y=s.R32UI),B===s.BYTE&&(Y=s.R8I),B===s.SHORT&&(Y=s.R16I),B===s.INT&&(Y=s.R32I)),A===s.RG&&(B===s.FLOAT&&(Y=s.RG32F),B===s.HALF_FLOAT&&(Y=s.RG16F),B===s.UNSIGNED_BYTE&&(Y=s.RG8)),A===s.RG_INTEGER&&(B===s.UNSIGNED_BYTE&&(Y=s.RG8UI),B===s.UNSIGNED_SHORT&&(Y=s.RG16UI),B===s.UNSIGNED_INT&&(Y=s.RG32UI),B===s.BYTE&&(Y=s.RG8I),B===s.SHORT&&(Y=s.RG16I),B===s.INT&&(Y=s.RG32I)),A===s.RGB&&B===s.UNSIGNED_INT_5_9_9_9_REV&&(Y=s.RGB9_E5),A===s.RGBA){let it=Z?Pa:Pe.getTransfer(O);B===s.FLOAT&&(Y=s.RGBA32F),B===s.HALF_FLOAT&&(Y=s.RGBA16F),B===s.UNSIGNED_BYTE&&(Y=it===Be?s.SRGB8_ALPHA8:s.RGBA8),B===s.UNSIGNED_SHORT_4_4_4_4&&(Y=s.RGBA4),B===s.UNSIGNED_SHORT_5_5_5_1&&(Y=s.RGB5_A1)}return(Y===s.R16F||Y===s.R32F||Y===s.RG16F||Y===s.RG32F||Y===s.RGBA16F||Y===s.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function x(N,A){return g(N)===!0||N.isFramebufferTexture&&N.minFilter!==bn&&N.minFilter!==an?Math.log2(Math.max(A.width,A.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?A.mipmaps.length:1}function y(N){let A=N.target;A.removeEventListener("dispose",y),b(A),A.isVideoTexture&&u.delete(A)}function L(N){let A=N.target;A.removeEventListener("dispose",L),P(A)}function b(N){let A=n.get(N);if(A.__webglInit===void 0)return;let B=N.source,O=d.get(B);if(O){let Z=O[A.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&C(N),Object.keys(O).length===0&&d.delete(B)}n.remove(N)}function C(N){let A=n.get(N);s.deleteTexture(A.__webglTexture);let B=N.source,O=d.get(B);delete O[A.__cacheKey],o.memory.textures--}function P(N){let A=n.get(N);if(N.depthTexture&&N.depthTexture.dispose(),N.isWebGLCubeRenderTarget)for(let O=0;O<6;O++){if(Array.isArray(A.__webglFramebuffer[O]))for(let Z=0;Z<A.__webglFramebuffer[O].length;Z++)s.deleteFramebuffer(A.__webglFramebuffer[O][Z]);else s.deleteFramebuffer(A.__webglFramebuffer[O]);A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer[O])}else{if(Array.isArray(A.__webglFramebuffer))for(let O=0;O<A.__webglFramebuffer.length;O++)s.deleteFramebuffer(A.__webglFramebuffer[O]);else s.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&s.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let O=0;O<A.__webglColorRenderbuffer.length;O++)A.__webglColorRenderbuffer[O]&&s.deleteRenderbuffer(A.__webglColorRenderbuffer[O]);A.__webglDepthRenderbuffer&&s.deleteRenderbuffer(A.__webglDepthRenderbuffer)}let B=N.textures;for(let O=0,Z=B.length;O<Z;O++){let Y=n.get(B[O]);Y.__webglTexture&&(s.deleteTexture(Y.__webglTexture),o.memory.textures--),n.remove(B[O])}n.remove(N)}let w=0;function S(){w=0}function D(){let N=w;return N>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+i.maxTextures),w+=1,N}function z(N){let A=[];return A.push(N.wrapS),A.push(N.wrapT),A.push(N.wrapR||0),A.push(N.magFilter),A.push(N.minFilter),A.push(N.anisotropy),A.push(N.internalFormat),A.push(N.format),A.push(N.type),A.push(N.generateMipmaps),A.push(N.premultiplyAlpha),A.push(N.flipY),A.push(N.unpackAlignment),A.push(N.colorSpace),A.join()}function R(N,A){let B=n.get(N);if(N.isVideoTexture&&ft(N),N.isRenderTargetTexture===!1&&N.version>0&&B.__version!==N.version){let O=N.image;if(O===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(O.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Tt(B,N,A);return}}e.bindTexture(s.TEXTURE_2D,B.__webglTexture,s.TEXTURE0+A)}function V(N,A){let B=n.get(N);if(N.version>0&&B.__version!==N.version){Tt(B,N,A);return}e.bindTexture(s.TEXTURE_2D_ARRAY,B.__webglTexture,s.TEXTURE0+A)}function X(N,A){let B=n.get(N);if(N.version>0&&B.__version!==N.version){Tt(B,N,A);return}e.bindTexture(s.TEXTURE_3D,B.__webglTexture,s.TEXTURE0+A)}function nt(N,A){let B=n.get(N);if(N.version>0&&B.__version!==N.version){yt(B,N,A);return}e.bindTexture(s.TEXTURE_CUBE_MAP,B.__webglTexture,s.TEXTURE0+A)}let tt={[Ea]:s.REPEAT,[gi]:s.CLAMP_TO_EDGE,[Aa]:s.MIRRORED_REPEAT},j={[bn]:s.NEAREST,[Ap]:s.NEAREST_MIPMAP_NEAREST,[vo]:s.NEAREST_MIPMAP_LINEAR,[an]:s.LINEAR,[_a]:s.LINEAR_MIPMAP_NEAREST,[ki]:s.LINEAR_MIPMAP_LINEAR},rt={[Sx]:s.NEVER,[Cx]:s.ALWAYS,[bx]:s.LESS,[Fp]:s.LEQUAL,[wx]:s.EQUAL,[Tx]:s.GEQUAL,[Ex]:s.GREATER,[Ax]:s.NOTEQUAL};function at(N,A){if(A.type===_i&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===an||A.magFilter===_a||A.magFilter===vo||A.magFilter===ki||A.minFilter===an||A.minFilter===_a||A.minFilter===vo||A.minFilter===ki)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(N,s.TEXTURE_WRAP_S,tt[A.wrapS]),s.texParameteri(N,s.TEXTURE_WRAP_T,tt[A.wrapT]),(N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY)&&s.texParameteri(N,s.TEXTURE_WRAP_R,tt[A.wrapR]),s.texParameteri(N,s.TEXTURE_MAG_FILTER,j[A.magFilter]),s.texParameteri(N,s.TEXTURE_MIN_FILTER,j[A.minFilter]),A.compareFunction&&(s.texParameteri(N,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(N,s.TEXTURE_COMPARE_FUNC,rt[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===bn||A.minFilter!==vo&&A.minFilter!==ki||A.type===_i&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){let B=t.get("EXT_texture_filter_anisotropic");s.texParameterf(N,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,i.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function Mt(N,A){let B=!1;N.__webglInit===void 0&&(N.__webglInit=!0,A.addEventListener("dispose",y));let O=A.source,Z=d.get(O);Z===void 0&&(Z={},d.set(O,Z));let Y=z(A);if(Y!==N.__cacheKey){Z[Y]===void 0&&(Z[Y]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,B=!0),Z[Y].usedTimes++;let it=Z[N.__cacheKey];it!==void 0&&(Z[N.__cacheKey].usedTimes--,it.usedTimes===0&&C(A)),N.__cacheKey=Y,N.__webglTexture=Z[Y].texture}return B}function Tt(N,A,B){let O=s.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(O=s.TEXTURE_2D_ARRAY),A.isData3DTexture&&(O=s.TEXTURE_3D);let Z=Mt(N,A),Y=A.source;e.bindTexture(O,N.__webglTexture,s.TEXTURE0+B);let it=n.get(Y);if(Y.version!==it.__version||Z===!0){e.activeTexture(s.TEXTURE0+B);let xt=Pe.getPrimaries(Pe.workingColorSpace),vt=A.colorSpace===ss?null:Pe.getPrimaries(A.colorSpace),Zt=A.colorSpace===ss||xt===vt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Zt);let bt=_(A.image,!1,i.maxTextureSize);bt=Ct(A,bt);let Ft=r.convert(A.format,A.colorSpace),ie=r.convert(A.type),Xt=v(A.internalFormat,Ft,ie,A.colorSpace,A.isVideoTexture);at(O,A);let Nt,Kt=A.mipmaps,Qt=A.isVideoTexture!==!0,Te=it.__version===void 0||Z===!0,se=Y.dataReady,G=x(A,bt);if(A.isDepthTexture)Xt=s.DEPTH_COMPONENT16,A.type===_i?Xt=s.DEPTH_COMPONENT32F:A.type===gr?Xt=s.DEPTH_COMPONENT24:A.type===Bo&&(Xt=s.DEPTH24_STENCIL8),Te&&(Qt?e.texStorage2D(s.TEXTURE_2D,1,Xt,bt.width,bt.height):e.texImage2D(s.TEXTURE_2D,0,Xt,bt.width,bt.height,0,Ft,ie,null));else if(A.isDataTexture)if(Kt.length>0){Qt&&Te&&e.texStorage2D(s.TEXTURE_2D,G,Xt,Kt[0].width,Kt[0].height);for(let gt=0,lt=Kt.length;gt<lt;gt++)Nt=Kt[gt],Qt?se&&e.texSubImage2D(s.TEXTURE_2D,gt,0,0,Nt.width,Nt.height,Ft,ie,Nt.data):e.texImage2D(s.TEXTURE_2D,gt,Xt,Nt.width,Nt.height,0,Ft,ie,Nt.data);A.generateMipmaps=!1}else Qt?(Te&&e.texStorage2D(s.TEXTURE_2D,G,Xt,bt.width,bt.height),se&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,bt.width,bt.height,Ft,ie,bt.data)):e.texImage2D(s.TEXTURE_2D,0,Xt,bt.width,bt.height,0,Ft,ie,bt.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Qt&&Te&&e.texStorage3D(s.TEXTURE_2D_ARRAY,G,Xt,Kt[0].width,Kt[0].height,bt.depth);for(let gt=0,lt=Kt.length;gt<lt;gt++)Nt=Kt[gt],A.format!==ni?Ft!==null?Qt?se&&e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,gt,0,0,0,Nt.width,Nt.height,bt.depth,Ft,Nt.data,0,0):e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,gt,Xt,Nt.width,Nt.height,bt.depth,0,Nt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qt?se&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,gt,0,0,0,Nt.width,Nt.height,bt.depth,Ft,ie,Nt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,gt,Xt,Nt.width,Nt.height,bt.depth,0,Ft,ie,Nt.data)}else{Qt&&Te&&e.texStorage2D(s.TEXTURE_2D,G,Xt,Kt[0].width,Kt[0].height);for(let gt=0,lt=Kt.length;gt<lt;gt++)Nt=Kt[gt],A.format!==ni?Ft!==null?Qt?se&&e.compressedTexSubImage2D(s.TEXTURE_2D,gt,0,0,Nt.width,Nt.height,Ft,Nt.data):e.compressedTexImage2D(s.TEXTURE_2D,gt,Xt,Nt.width,Nt.height,0,Nt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qt?se&&e.texSubImage2D(s.TEXTURE_2D,gt,0,0,Nt.width,Nt.height,Ft,ie,Nt.data):e.texImage2D(s.TEXTURE_2D,gt,Xt,Nt.width,Nt.height,0,Ft,ie,Nt.data)}else if(A.isDataArrayTexture)Qt?(Te&&e.texStorage3D(s.TEXTURE_2D_ARRAY,G,Xt,bt.width,bt.height,bt.depth),se&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,bt.width,bt.height,bt.depth,Ft,ie,bt.data)):e.texImage3D(s.TEXTURE_2D_ARRAY,0,Xt,bt.width,bt.height,bt.depth,0,Ft,ie,bt.data);else if(A.isData3DTexture)Qt?(Te&&e.texStorage3D(s.TEXTURE_3D,G,Xt,bt.width,bt.height,bt.depth),se&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,bt.width,bt.height,bt.depth,Ft,ie,bt.data)):e.texImage3D(s.TEXTURE_3D,0,Xt,bt.width,bt.height,bt.depth,0,Ft,ie,bt.data);else if(A.isFramebufferTexture){if(Te)if(Qt)e.texStorage2D(s.TEXTURE_2D,G,Xt,bt.width,bt.height);else{let gt=bt.width,lt=bt.height;for(let Pt=0;Pt<G;Pt++)e.texImage2D(s.TEXTURE_2D,Pt,Xt,gt,lt,0,Ft,ie,null),gt>>=1,lt>>=1}}else if(Kt.length>0){if(Qt&&Te){let gt=Gt(Kt[0]);e.texStorage2D(s.TEXTURE_2D,G,Xt,gt.width,gt.height)}for(let gt=0,lt=Kt.length;gt<lt;gt++)Nt=Kt[gt],Qt?se&&e.texSubImage2D(s.TEXTURE_2D,gt,0,0,Ft,ie,Nt):e.texImage2D(s.TEXTURE_2D,gt,Xt,Ft,ie,Nt);A.generateMipmaps=!1}else if(Qt){if(Te){let gt=Gt(bt);e.texStorage2D(s.TEXTURE_2D,G,Xt,gt.width,gt.height)}se&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,Ft,ie,bt)}else e.texImage2D(s.TEXTURE_2D,0,Xt,Ft,ie,bt);g(A)&&p(O),it.__version=Y.version,A.onUpdate&&A.onUpdate(A)}N.__version=A.version}function yt(N,A,B){if(A.image.length!==6)return;let O=Mt(N,A),Z=A.source;e.bindTexture(s.TEXTURE_CUBE_MAP,N.__webglTexture,s.TEXTURE0+B);let Y=n.get(Z);if(Z.version!==Y.__version||O===!0){e.activeTexture(s.TEXTURE0+B);let it=Pe.getPrimaries(Pe.workingColorSpace),xt=A.colorSpace===ss?null:Pe.getPrimaries(A.colorSpace),vt=A.colorSpace===ss||it===xt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);let Zt=A.isCompressedTexture||A.image[0].isCompressedTexture,bt=A.image[0]&&A.image[0].isDataTexture,Ft=[];for(let lt=0;lt<6;lt++)!Zt&&!bt?Ft[lt]=_(A.image[lt],!0,i.maxCubemapSize):Ft[lt]=bt?A.image[lt].image:A.image[lt],Ft[lt]=Ct(A,Ft[lt]);let ie=Ft[0],Xt=r.convert(A.format,A.colorSpace),Nt=r.convert(A.type),Kt=v(A.internalFormat,Xt,Nt,A.colorSpace),Qt=A.isVideoTexture!==!0,Te=Y.__version===void 0||O===!0,se=Z.dataReady,G=x(A,ie);at(s.TEXTURE_CUBE_MAP,A);let gt;if(Zt){Qt&&Te&&e.texStorage2D(s.TEXTURE_CUBE_MAP,G,Kt,ie.width,ie.height);for(let lt=0;lt<6;lt++){gt=Ft[lt].mipmaps;for(let Pt=0;Pt<gt.length;Pt++){let Lt=gt[Pt];A.format!==ni?Xt!==null?Qt?se&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Pt,0,0,Lt.width,Lt.height,Xt,Lt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Pt,Kt,Lt.width,Lt.height,0,Lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Qt?se&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Pt,0,0,Lt.width,Lt.height,Xt,Nt,Lt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Pt,Kt,Lt.width,Lt.height,0,Xt,Nt,Lt.data)}}}else{if(gt=A.mipmaps,Qt&&Te){gt.length>0&&G++;let lt=Gt(Ft[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,G,Kt,lt.width,lt.height)}for(let lt=0;lt<6;lt++)if(bt){Qt?se&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,Ft[lt].width,Ft[lt].height,Xt,Nt,Ft[lt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,Kt,Ft[lt].width,Ft[lt].height,0,Xt,Nt,Ft[lt].data);for(let Pt=0;Pt<gt.length;Pt++){let re=gt[Pt].image[lt].image;Qt?se&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Pt+1,0,0,re.width,re.height,Xt,Nt,re.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Pt+1,Kt,re.width,re.height,0,Xt,Nt,re.data)}}else{Qt?se&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,Xt,Nt,Ft[lt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,Kt,Xt,Nt,Ft[lt]);for(let Pt=0;Pt<gt.length;Pt++){let Lt=gt[Pt];Qt?se&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Pt+1,0,0,Xt,Nt,Lt.image[lt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Pt+1,Kt,Xt,Nt,Lt.image[lt])}}}g(A)&&p(s.TEXTURE_CUBE_MAP),Y.__version=Z.version,A.onUpdate&&A.onUpdate(A)}N.__version=A.version}function et(N,A,B,O,Z,Y){let it=r.convert(B.format,B.colorSpace),xt=r.convert(B.type),vt=v(B.internalFormat,it,xt,B.colorSpace);if(!n.get(A).__hasExternalTextures){let bt=Math.max(1,A.width>>Y),Ft=Math.max(1,A.height>>Y);Z===s.TEXTURE_3D||Z===s.TEXTURE_2D_ARRAY?e.texImage3D(Z,Y,vt,bt,Ft,A.depth,0,it,xt,null):e.texImage2D(Z,Y,vt,bt,Ft,0,it,xt,null)}e.bindFramebuffer(s.FRAMEBUFFER,N),Et(A)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,O,Z,n.get(B).__webglTexture,0,st(A)):(Z===s.TEXTURE_2D||Z>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,O,Z,n.get(B).__webglTexture,Y),e.bindFramebuffer(s.FRAMEBUFFER,null)}function ut(N,A,B){if(s.bindRenderbuffer(s.RENDERBUFFER,N),A.depthBuffer&&!A.stencilBuffer){let O=s.DEPTH_COMPONENT24;if(B||Et(A)){let Z=A.depthTexture;Z&&Z.isDepthTexture&&(Z.type===_i?O=s.DEPTH_COMPONENT32F:Z.type===gr&&(O=s.DEPTH_COMPONENT24));let Y=st(A);Et(A)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Y,O,A.width,A.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,Y,O,A.width,A.height)}else s.renderbufferStorage(s.RENDERBUFFER,O,A.width,A.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,N)}else if(A.depthBuffer&&A.stencilBuffer){let O=st(A);B&&Et(A)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,O,s.DEPTH24_STENCIL8,A.width,A.height):Et(A)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,O,s.DEPTH24_STENCIL8,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,N)}else{let O=A.textures;for(let Z=0;Z<O.length;Z++){let Y=O[Z],it=r.convert(Y.format,Y.colorSpace),xt=r.convert(Y.type),vt=v(Y.internalFormat,it,xt,Y.colorSpace),Zt=st(A);B&&Et(A)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Zt,vt,A.width,A.height):Et(A)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Zt,vt,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,vt,A.width,A.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function pt(N,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,N),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),R(A.depthTexture,0);let O=n.get(A.depthTexture).__webglTexture,Z=st(A);if(A.depthTexture.format===pr)Et(A)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,O,0,Z):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,O,0);else if(A.depthTexture.format===Eo)Et(A)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,O,0,Z):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,O,0);else throw new Error("Unknown depthTexture format")}function ct(N){let A=n.get(N),B=N.isWebGLCubeRenderTarget===!0;if(N.depthTexture&&!A.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");pt(A.__webglFramebuffer,N)}else if(B){A.__webglDepthbuffer=[];for(let O=0;O<6;O++)e.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[O]),A.__webglDepthbuffer[O]=s.createRenderbuffer(),ut(A.__webglDepthbuffer[O],N,!1)}else e.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=s.createRenderbuffer(),ut(A.__webglDepthbuffer,N,!1);e.bindFramebuffer(s.FRAMEBUFFER,null)}function zt(N,A,B){let O=n.get(N);A!==void 0&&et(O.__webglFramebuffer,N,N.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),B!==void 0&&ct(N)}function $t(N){let A=N.texture,B=n.get(N),O=n.get(A);N.addEventListener("dispose",L);let Z=N.textures,Y=N.isWebGLCubeRenderTarget===!0,it=Z.length>1;if(it||(O.__webglTexture===void 0&&(O.__webglTexture=s.createTexture()),O.__version=A.version,o.memory.textures++),Y){B.__webglFramebuffer=[];for(let xt=0;xt<6;xt++)if(A.mipmaps&&A.mipmaps.length>0){B.__webglFramebuffer[xt]=[];for(let vt=0;vt<A.mipmaps.length;vt++)B.__webglFramebuffer[xt][vt]=s.createFramebuffer()}else B.__webglFramebuffer[xt]=s.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){B.__webglFramebuffer=[];for(let xt=0;xt<A.mipmaps.length;xt++)B.__webglFramebuffer[xt]=s.createFramebuffer()}else B.__webglFramebuffer=s.createFramebuffer();if(it)for(let xt=0,vt=Z.length;xt<vt;xt++){let Zt=n.get(Z[xt]);Zt.__webglTexture===void 0&&(Zt.__webglTexture=s.createTexture(),o.memory.textures++)}if(N.samples>0&&Et(N)===!1){B.__webglMultisampledFramebuffer=s.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let xt=0;xt<Z.length;xt++){let vt=Z[xt];B.__webglColorRenderbuffer[xt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,B.__webglColorRenderbuffer[xt]);let Zt=r.convert(vt.format,vt.colorSpace),bt=r.convert(vt.type),Ft=v(vt.internalFormat,Zt,bt,vt.colorSpace,N.isXRRenderTarget===!0),ie=st(N);s.renderbufferStorageMultisample(s.RENDERBUFFER,ie,Ft,N.width,N.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+xt,s.RENDERBUFFER,B.__webglColorRenderbuffer[xt])}s.bindRenderbuffer(s.RENDERBUFFER,null),N.depthBuffer&&(B.__webglDepthRenderbuffer=s.createRenderbuffer(),ut(B.__webglDepthRenderbuffer,N,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Y){e.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture),at(s.TEXTURE_CUBE_MAP,A);for(let xt=0;xt<6;xt++)if(A.mipmaps&&A.mipmaps.length>0)for(let vt=0;vt<A.mipmaps.length;vt++)et(B.__webglFramebuffer[xt][vt],N,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,vt);else et(B.__webglFramebuffer[xt],N,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0);g(A)&&p(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(it){for(let xt=0,vt=Z.length;xt<vt;xt++){let Zt=Z[xt],bt=n.get(Zt);e.bindTexture(s.TEXTURE_2D,bt.__webglTexture),at(s.TEXTURE_2D,Zt),et(B.__webglFramebuffer,N,Zt,s.COLOR_ATTACHMENT0+xt,s.TEXTURE_2D,0),g(Zt)&&p(s.TEXTURE_2D)}e.unbindTexture()}else{let xt=s.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(xt=N.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(xt,O.__webglTexture),at(xt,A),A.mipmaps&&A.mipmaps.length>0)for(let vt=0;vt<A.mipmaps.length;vt++)et(B.__webglFramebuffer[vt],N,A,s.COLOR_ATTACHMENT0,xt,vt);else et(B.__webglFramebuffer,N,A,s.COLOR_ATTACHMENT0,xt,0);g(A)&&p(xt),e.unbindTexture()}N.depthBuffer&&ct(N)}function H(N){let A=N.textures;for(let B=0,O=A.length;B<O;B++){let Z=A[B];if(g(Z)){let Y=N.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,it=n.get(Z).__webglTexture;e.bindTexture(Y,it),p(Y),e.unbindTexture()}}}let jt=[],ot=[];function mt(N){if(N.samples>0){if(Et(N)===!1){let A=N.textures,B=N.width,O=N.height,Z=s.COLOR_BUFFER_BIT,Y=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,it=n.get(N),xt=A.length>1;if(xt)for(let vt=0;vt<A.length;vt++)e.bindFramebuffer(s.FRAMEBUFFER,it.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+vt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,it.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+vt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,it.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,it.__webglFramebuffer);for(let vt=0;vt<A.length;vt++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(Z|=s.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(Z|=s.STENCIL_BUFFER_BIT)),xt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,it.__webglColorRenderbuffer[vt]);let Zt=n.get(A[vt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Zt,0)}s.blitFramebuffer(0,0,B,O,0,0,B,O,Z,s.NEAREST),l===!0&&(jt.length=0,ot.length=0,jt.push(s.COLOR_ATTACHMENT0+vt),N.depthBuffer&&N.resolveDepthBuffer===!1&&(jt.push(Y),ot.push(Y),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,ot)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,jt))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),xt)for(let vt=0;vt<A.length;vt++){e.bindFramebuffer(s.FRAMEBUFFER,it.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+vt,s.RENDERBUFFER,it.__webglColorRenderbuffer[vt]);let Zt=n.get(A[vt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,it.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+vt,s.TEXTURE_2D,Zt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,it.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&l){let A=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[A])}}}function st(N){return Math.min(i.maxSamples,N.samples)}function Et(N){let A=n.get(N);return N.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function ft(N){let A=o.render.frame;u.get(N)!==A&&(u.set(N,A),N.update())}function Ct(N,A){let B=N.colorSpace,O=N.format,Z=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||B!==_s&&B!==ss&&(Pe.getTransfer(B)===Be?(O!==ni||Z!==ps)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),A}function Gt(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(c.width=N.naturalWidth||N.width,c.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(c.width=N.displayWidth,c.height=N.displayHeight):(c.width=N.width,c.height=N.height),c}this.allocateTextureUnit=D,this.resetTextureUnits=S,this.setTexture2D=R,this.setTexture2DArray=V,this.setTexture3D=X,this.setTextureCube=nt,this.rebindTextures=zt,this.setupRenderTarget=$t,this.updateRenderTargetMipmap=H,this.updateMultisampleRenderTarget=mt,this.setupDepthRenderbuffer=ct,this.setupFrameBufferTexture=et,this.useMultisampledRTT=Et}function Vx(s,t){function e(n,i=ss){let r,o=Pe.getTransfer(i);if(n===ps)return s.UNSIGNED_BYTE;if(n===Rp)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Pp)return s.UNSIGNED_SHORT_5_5_5_1;if(n===cx)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===ax)return s.BYTE;if(n===lx)return s.SHORT;if(n===Tp)return s.UNSIGNED_SHORT;if(n===Cp)return s.INT;if(n===gr)return s.UNSIGNED_INT;if(n===_i)return s.FLOAT;if(n===hl)return s.HALF_FLOAT;if(n===ux)return s.ALPHA;if(n===hx)return s.RGB;if(n===ni)return s.RGBA;if(n===dx)return s.LUMINANCE;if(n===fx)return s.LUMINANCE_ALPHA;if(n===pr)return s.DEPTH_COMPONENT;if(n===Eo)return s.DEPTH_STENCIL;if(n===Ip)return s.RED;if(n===Lp)return s.RED_INTEGER;if(n===px)return s.RG;if(n===Np)return s.RG_INTEGER;if(n===Dp)return s.RGBA_INTEGER;if(n===Cc||n===Rc||n===Pc||n===Ic)if(o===Be)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Cc)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Rc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Pc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ic)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Cc)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Rc)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Pc)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ic)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Nd||n===Dd||n===Ud||n===Fd)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Nd)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Dd)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ud)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Fd)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Od||n===Bd||n===zd)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Od||n===Bd)return o===Be?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===zd)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===kd||n===Vd||n===Hd||n===Gd||n===Wd||n===Xd||n===qd||n===Yd||n===$d||n===Zd||n===Jd||n===Kd||n===jd||n===Qd)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===kd)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Vd)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Hd)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Gd)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Wd)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Xd)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===qd)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Yd)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===$d)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Zd)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Jd)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Kd)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===jd)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Qd)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Lc||n===tf||n===ef)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Lc)return o===Be?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===tf)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ef)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===mx||n===nf||n===sf||n===rf)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Lc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===nf)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===sf)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===rf)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Bo?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var kc=class extends dn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Ns=class extends Ae{constructor(){super(),this.isGroup=!0,this.type="Group"}},nA={type:"move"},va=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ns,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ns,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ns,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let _ of t.hand.values()){let g=e.getJointPose(_,n),p=this._getHandJoint(c,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,m=.005;c.inputState.pinching&&d>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(nA)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Ns;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},iA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,sA=`
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

}`,Sf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let i=new ln,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}render(t,e){if(this.texture!==null){if(this.mesh===null){let n=e.cameras[0].viewport,i=new oi({vertexShader:iA,fragmentShader:sA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Qe(new Io(20,20),i)}t.render(this.mesh,e)}}reset(){this.texture=null,this.mesh=null}},bf=class extends Pi{constructor(t,e){super();let n=this,i=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,m=null,_=new Sf,g=e.getContextAttributes(),p=null,v=null,x=[],y=[],L=new _t,b=null,C=new dn;C.layers.enable(1),C.viewport=new Ie;let P=new dn;P.layers.enable(2),P.viewport=new Ie;let w=[C,P],S=new kc;S.layers.enable(1),S.layers.enable(2);let D=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(et){let ut=x[et];return ut===void 0&&(ut=new va,x[et]=ut),ut.getTargetRaySpace()},this.getControllerGrip=function(et){let ut=x[et];return ut===void 0&&(ut=new va,x[et]=ut),ut.getGripSpace()},this.getHand=function(et){let ut=x[et];return ut===void 0&&(ut=new va,x[et]=ut),ut.getHandSpace()};function R(et){let ut=y.indexOf(et.inputSource);if(ut===-1)return;let pt=x[ut];pt!==void 0&&(pt.update(et.inputSource,et.frame,c||o),pt.dispatchEvent({type:et.type,data:et.inputSource}))}function V(){i.removeEventListener("select",R),i.removeEventListener("selectstart",R),i.removeEventListener("selectend",R),i.removeEventListener("squeeze",R),i.removeEventListener("squeezestart",R),i.removeEventListener("squeezeend",R),i.removeEventListener("end",V),i.removeEventListener("inputsourceschange",X);for(let et=0;et<x.length;et++){let ut=y[et];ut!==null&&(y[et]=null,x[et].disconnect(ut))}D=null,z=null,_.reset(),t.setRenderTarget(p),f=null,d=null,h=null,i=null,v=null,yt.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(et){r=et,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(et){a=et,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(et){c=et},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(et){if(i=et,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",R),i.addEventListener("selectstart",R),i.addEventListener("selectend",R),i.addEventListener("squeeze",R),i.addEventListener("squeezestart",R),i.addEventListener("squeezeend",R),i.addEventListener("end",V),i.addEventListener("inputsourceschange",X),g.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(L),i.renderState.layers===void 0){let ut={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,ut),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new si(f.framebufferWidth,f.framebufferHeight,{format:ni,type:ps,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let ut=null,pt=null,ct=null;g.depth&&(ct=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ut=g.stencil?Eo:pr,pt=g.stencil?Bo:gr);let zt={colorFormat:e.RGBA8,depthFormat:ct,scaleFactor:r};h=new XRWebGLBinding(i,e),d=h.createProjectionLayer(zt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),v=new si(d.textureWidth,d.textureHeight,{format:ni,type:ps,depthTexture:new ka(d.textureWidth,d.textureHeight,pt,void 0,void 0,void 0,void 0,void 0,void 0,ut),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),yt.setContext(i),yt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function X(et){for(let ut=0;ut<et.removed.length;ut++){let pt=et.removed[ut],ct=y.indexOf(pt);ct>=0&&(y[ct]=null,x[ct].disconnect(pt))}for(let ut=0;ut<et.added.length;ut++){let pt=et.added[ut],ct=y.indexOf(pt);if(ct===-1){for(let $t=0;$t<x.length;$t++)if($t>=y.length){y.push(pt),ct=$t;break}else if(y[$t]===null){y[$t]=pt,ct=$t;break}if(ct===-1)break}let zt=x[ct];zt&&zt.connect(pt)}}let nt=new U,tt=new U;function j(et,ut,pt){nt.setFromMatrixPosition(ut.matrixWorld),tt.setFromMatrixPosition(pt.matrixWorld);let ct=nt.distanceTo(tt),zt=ut.projectionMatrix.elements,$t=pt.projectionMatrix.elements,H=zt[14]/(zt[10]-1),jt=zt[14]/(zt[10]+1),ot=(zt[9]+1)/zt[5],mt=(zt[9]-1)/zt[5],st=(zt[8]-1)/zt[0],Et=($t[8]+1)/$t[0],ft=H*st,Ct=H*Et,Gt=ct/(-st+Et),N=Gt*-st;ut.matrixWorld.decompose(et.position,et.quaternion,et.scale),et.translateX(N),et.translateZ(Gt),et.matrixWorld.compose(et.position,et.quaternion,et.scale),et.matrixWorldInverse.copy(et.matrixWorld).invert();let A=H+Gt,B=jt+Gt,O=ft-N,Z=Ct+(ct-N),Y=ot*jt/B*A,it=mt*jt/B*A;et.projectionMatrix.makePerspective(O,Z,Y,it,A,B),et.projectionMatrixInverse.copy(et.projectionMatrix).invert()}function rt(et,ut){ut===null?et.matrixWorld.copy(et.matrix):et.matrixWorld.multiplyMatrices(ut.matrixWorld,et.matrix),et.matrixWorldInverse.copy(et.matrixWorld).invert()}this.updateCamera=function(et){if(i===null)return;_.texture!==null&&(et.near=_.depthNear,et.far=_.depthFar),S.near=P.near=C.near=et.near,S.far=P.far=C.far=et.far,(D!==S.near||z!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),D=S.near,z=S.far,C.near=D,C.far=z,P.near=D,P.far=z,C.updateProjectionMatrix(),P.updateProjectionMatrix(),et.updateProjectionMatrix());let ut=et.parent,pt=S.cameras;rt(S,ut);for(let ct=0;ct<pt.length;ct++)rt(pt[ct],ut);pt.length===2?j(S,C,P):S.projectionMatrix.copy(C.projectionMatrix),at(et,S,ut)};function at(et,ut,pt){pt===null?et.matrix.copy(ut.matrixWorld):(et.matrix.copy(pt.matrixWorld),et.matrix.invert(),et.matrix.multiply(ut.matrixWorld)),et.matrix.decompose(et.position,et.quaternion,et.scale),et.updateMatrixWorld(!0),et.projectionMatrix.copy(ut.projectionMatrix),et.projectionMatrixInverse.copy(ut.projectionMatrixInverse),et.isPerspectiveCamera&&(et.fov=Ao*2*Math.atan(1/et.projectionMatrix.elements[5]),et.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(et){l=et,d!==null&&(d.fixedFoveation=et),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=et)},this.hasDepthSensing=function(){return _.texture!==null};let Mt=null;function Tt(et,ut){if(u=ut.getViewerPose(c||o),m=ut,u!==null){let pt=u.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let ct=!1;pt.length!==S.cameras.length&&(S.cameras.length=0,ct=!0);for(let $t=0;$t<pt.length;$t++){let H=pt[$t],jt=null;if(f!==null)jt=f.getViewport(H);else{let mt=h.getViewSubImage(d,H);jt=mt.viewport,$t===0&&(t.setRenderTargetTextures(v,mt.colorTexture,d.ignoreDepthValues?void 0:mt.depthStencilTexture),t.setRenderTarget(v))}let ot=w[$t];ot===void 0&&(ot=new dn,ot.layers.enable($t),ot.viewport=new Ie,w[$t]=ot),ot.matrix.fromArray(H.transform.matrix),ot.matrix.decompose(ot.position,ot.quaternion,ot.scale),ot.projectionMatrix.fromArray(H.projectionMatrix),ot.projectionMatrixInverse.copy(ot.projectionMatrix).invert(),ot.viewport.set(jt.x,jt.y,jt.width,jt.height),$t===0&&(S.matrix.copy(ot.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ct===!0&&S.cameras.push(ot)}let zt=i.enabledFeatures;if(zt&&zt.includes("depth-sensing")){let $t=h.getDepthInformation(pt[0]);$t&&$t.isValid&&$t.texture&&_.init(t,$t,i.renderState)}}for(let pt=0;pt<x.length;pt++){let ct=y[pt],zt=x[pt];ct!==null&&zt!==void 0&&zt.update(ct,ut,c||o)}_.render(t,S),Mt&&Mt(et,ut),ut.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ut}),m=null}let yt=new Ux;yt.setAnimationLoop(Tt),this.setAnimationLoop=function(et){Mt=et},this.dispose=function(){}}},tr=new ri,rA=new ee;function oA(s,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Nx(s)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,v,x,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),h(g,p)):p.isMeshPhongMaterial?(r(g,p),u(g,p)):p.isMeshStandardMaterial?(r(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,y)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),_(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,v,x):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Wn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Wn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let v=t.get(p),x=v.envMap,y=v.envMapRotation;if(x&&(g.envMap.value=x,tr.copy(y),tr.x*=-1,tr.y*=-1,tr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(tr.y*=-1,tr.z*=-1),g.envMapRotation.value.setFromMatrix4(rA.makeRotationFromEuler(tr)),g.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap){g.lightMap.value=p.lightMap;let L=s._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=p.lightMapIntensity*L,e(p.lightMap,g.lightMapTransform)}p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,v,x){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*v,g.scale.value=x*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function h(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,v){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Wn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){let v=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function aA(s,t,e,n){let i={},r={},o=[],a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,x){let y=x.program;n.uniformBlockBinding(v,y)}function c(v,x){let y=i[v.id];y===void 0&&(m(v),y=u(v),i[v.id]=y,v.addEventListener("dispose",g));let L=x.program;n.updateUBOMapping(v,L);let b=t.render.frame;r[v.id]!==b&&(d(v),r[v.id]=b)}function u(v){let x=h();v.__bindingPointIndex=x;let y=s.createBuffer(),L=v.__size,b=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,L,b),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,y),y}function h(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){let x=i[v.id],y=v.uniforms,L=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let b=0,C=y.length;b<C;b++){let P=Array.isArray(y[b])?y[b]:[y[b]];for(let w=0,S=P.length;w<S;w++){let D=P[w];if(f(D,b,w,L)===!0){let z=D.__offset,R=Array.isArray(D.value)?D.value:[D.value],V=0;for(let X=0;X<R.length;X++){let nt=R[X],tt=_(nt);typeof nt=="number"||typeof nt=="boolean"?(D.__data[0]=nt,s.bufferSubData(s.UNIFORM_BUFFER,z+V,D.__data)):nt.isMatrix3?(D.__data[0]=nt.elements[0],D.__data[1]=nt.elements[1],D.__data[2]=nt.elements[2],D.__data[3]=0,D.__data[4]=nt.elements[3],D.__data[5]=nt.elements[4],D.__data[6]=nt.elements[5],D.__data[7]=0,D.__data[8]=nt.elements[6],D.__data[9]=nt.elements[7],D.__data[10]=nt.elements[8],D.__data[11]=0):(nt.toArray(D.__data,V),V+=tt.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,z,D.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(v,x,y,L){let b=v.value,C=x+"_"+y;if(L[C]===void 0)return typeof b=="number"||typeof b=="boolean"?L[C]=b:L[C]=b.clone(),!0;{let P=L[C];if(typeof b=="number"||typeof b=="boolean"){if(P!==b)return L[C]=b,!0}else if(P.equals(b)===!1)return P.copy(b),!0}return!1}function m(v){let x=v.uniforms,y=0,L=16;for(let C=0,P=x.length;C<P;C++){let w=Array.isArray(x[C])?x[C]:[x[C]];for(let S=0,D=w.length;S<D;S++){let z=w[S],R=Array.isArray(z.value)?z.value:[z.value];for(let V=0,X=R.length;V<X;V++){let nt=R[V],tt=_(nt),j=y%L;j!==0&&L-j<tt.boundary&&(y+=L-j),z.__data=new Float32Array(tt.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=y,y+=tt.storage}}}let b=y%L;return b>0&&(y+=L-b),v.__size=y,v.__cache={},this}function _(v){let x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function g(v){let x=v.target;x.removeEventListener("dispose",g);let y=o.indexOf(x.__bindingPointIndex);o.splice(y,1),s.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function p(){for(let v in i)s.deleteBuffer(i[v]);o=[],i={},r={}}return{bind:l,update:c,dispose:p}}var wf=class{constructor(t={}){let{canvas:e=Px(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;let f=new Uint32Array(4),m=new Int32Array(4),_=null,g=null,p=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=mi,this._useLegacyLights=!1,this.toneMapping=us,this.toneMappingExposure=1;let x=this,y=!1,L=0,b=0,C=null,P=-1,w=null,S=new Ie,D=new Ie,z=null,R=new Ht(0),V=0,X=e.width,nt=e.height,tt=1,j=null,rt=null,at=new Ie(0,0,X,nt),Mt=new Ie(0,0,X,nt),Tt=!1,yt=new vr,et=!1,ut=!1,pt=new ee,ct=new U,zt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function $t(){return C===null?tt:1}let H=n;function jt(T,W){return e.getContext(T,W)}try{let T={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r164"),e.addEventListener("webglcontextlost",G,!1),e.addEventListener("webglcontextrestored",gt,!1),e.addEventListener("webglcontextcreationerror",lt,!1),H===null){let W="webgl2";if(H=jt(W,T),H===null)throw jt(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let ot,mt,st,Et,ft,Ct,Gt,N,A,B,O,Z,Y,it,xt,vt,Zt,bt,Ft,ie,Xt,Nt,Kt,Qt;function Te(){ot=new TE(H),ot.init(),Nt=new Vx(H,ot),mt=new ME(H,ot,t,Nt),st=new tA(H),Et=new PE(H),ft=new H1,Ct=new eA(H,ot,st,ft,mt,Nt,Et),Gt=new bE(x),N=new AE(x),A=new OS(H),Kt=new vE(H,A),B=new CE(H,A,Et,Kt),O=new LE(H,B,A,Et),Ft=new IE(H,mt,Ct),vt=new SE(ft),Z=new V1(x,Gt,N,ot,mt,Kt,vt),Y=new oA(x,ft),it=new W1,xt=new J1(ot),bt=new xE(x,Gt,N,st,O,d,l),Zt=new Q1(x,O,mt),Qt=new aA(H,Et,mt,st),ie=new yE(H,ot,Et),Xt=new RE(H,ot,Et),Et.programs=Z.programs,x.capabilities=mt,x.extensions=ot,x.properties=ft,x.renderLists=it,x.shadowMap=Zt,x.state=st,x.info=Et}Te();let se=new bf(x,H);this.xr=se,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){let T=ot.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=ot.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return tt},this.setPixelRatio=function(T){T!==void 0&&(tt=T,this.setSize(X,nt,!1))},this.getSize=function(T){return T.set(X,nt)},this.setSize=function(T,W,K=!0){if(se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=T,nt=W,e.width=Math.floor(T*tt),e.height=Math.floor(W*tt),K===!0&&(e.style.width=T+"px",e.style.height=W+"px"),this.setViewport(0,0,T,W)},this.getDrawingBufferSize=function(T){return T.set(X*tt,nt*tt).floor()},this.setDrawingBufferSize=function(T,W,K){X=T,nt=W,tt=K,e.width=Math.floor(T*K),e.height=Math.floor(W*K),this.setViewport(0,0,T,W)},this.getCurrentViewport=function(T){return T.copy(S)},this.getViewport=function(T){return T.copy(at)},this.setViewport=function(T,W,K,$){T.isVector4?at.set(T.x,T.y,T.z,T.w):at.set(T,W,K,$),st.viewport(S.copy(at).multiplyScalar(tt).round())},this.getScissor=function(T){return T.copy(Mt)},this.setScissor=function(T,W,K,$){T.isVector4?Mt.set(T.x,T.y,T.z,T.w):Mt.set(T,W,K,$),st.scissor(D.copy(Mt).multiplyScalar(tt).round())},this.getScissorTest=function(){return Tt},this.setScissorTest=function(T){st.setScissorTest(Tt=T)},this.setOpaqueSort=function(T){j=T},this.setTransparentSort=function(T){rt=T},this.getClearColor=function(T){return T.copy(bt.getClearColor())},this.setClearColor=function(){bt.setClearColor.apply(bt,arguments)},this.getClearAlpha=function(){return bt.getClearAlpha()},this.setClearAlpha=function(){bt.setClearAlpha.apply(bt,arguments)},this.clear=function(T=!0,W=!0,K=!0){let $=0;if(T){let q=!1;if(C!==null){let St=C.texture.format;q=St===Dp||St===Np||St===Lp}if(q){let St=C.texture.type,Rt=St===ps||St===gr||St===Tp||St===Bo||St===Rp||St===Pp,At=bt.getClearColor(),kt=bt.getClearAlpha(),Yt=At.r,Ot=At.g,ne=At.b;Rt?(f[0]=Yt,f[1]=Ot,f[2]=ne,f[3]=kt,H.clearBufferuiv(H.COLOR,0,f)):(m[0]=Yt,m[1]=Ot,m[2]=ne,m[3]=kt,H.clearBufferiv(H.COLOR,0,m))}else $|=H.COLOR_BUFFER_BIT}W&&($|=H.DEPTH_BUFFER_BIT),K&&($|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",G,!1),e.removeEventListener("webglcontextrestored",gt,!1),e.removeEventListener("webglcontextcreationerror",lt,!1),it.dispose(),xt.dispose(),ft.dispose(),Gt.dispose(),N.dispose(),O.dispose(),Kt.dispose(),Qt.dispose(),Z.dispose(),se.dispose(),se.removeEventListener("sessionstart",_e),se.removeEventListener("sessionend",Rn),Ce.stop()};function G(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function gt(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;let T=Et.autoReset,W=Zt.enabled,K=Zt.autoUpdate,$=Zt.needsUpdate,q=Zt.type;Te(),Et.autoReset=T,Zt.enabled=W,Zt.autoUpdate=K,Zt.needsUpdate=$,Zt.type=q}function lt(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Pt(T){let W=T.target;W.removeEventListener("dispose",Pt),Lt(W)}function Lt(T){re(T),ft.remove(T)}function re(T){let W=ft.get(T).programs;W!==void 0&&(W.forEach(function(K){Z.releaseProgram(K)}),T.isShaderMaterial&&Z.releaseShaderCache(T))}this.renderBufferDirect=function(T,W,K,$,q,St){W===null&&(W=zt);let Rt=q.isMesh&&q.matrixWorld.determinant()<0,At=dt(T,W,K,$,q);st.setMaterial($,Rt);let kt=K.index,Yt=1;if($.wireframe===!0){if(kt=B.getWireframeAttribute(K),kt===void 0)return;Yt=2}let Ot=K.drawRange,ne=K.attributes.position,De=Ot.start*Yt,Xe=(Ot.start+Ot.count)*Yt;St!==null&&(De=Math.max(De,St.start*Yt),Xe=Math.min(Xe,(St.start+St.count)*Yt)),kt!==null?(De=Math.max(De,0),Xe=Math.min(Xe,kt.count)):ne!=null&&(De=Math.max(De,0),Xe=Math.min(Xe,ne.count));let Ye=Xe-De;if(Ye<0||Ye===1/0)return;Kt.setup(q,$,At,K,kt);let Fn,me=ie;if(kt!==null&&(Fn=A.get(kt),me=Xt,me.setIndex(Fn)),q.isMesh)$.wireframe===!0?(st.setLineWidth($.wireframeLinewidth*$t()),me.setMode(H.LINES)):me.setMode(H.TRIANGLES);else if(q.isLine){let oe=$.linewidth;oe===void 0&&(oe=1),st.setLineWidth(oe*$t()),q.isLineSegments?me.setMode(H.LINES):q.isLineLoop?me.setMode(H.LINE_LOOP):me.setMode(H.LINE_STRIP)}else q.isPoints?me.setMode(H.POINTS):q.isSprite&&me.setMode(H.TRIANGLES);if(q.isBatchedMesh)q._multiDrawInstances!==null?me.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances):me.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else if(q.isInstancedMesh)me.renderInstances(De,Ye,q.count);else if(K.isInstancedBufferGeometry){let oe=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,$i=Math.min(K.instanceCount,oe);me.renderInstances(De,Ye,$i)}else me.render(De,Ye)};function xe(T,W,K){T.transparent===!0&&T.side===zi&&T.forceSinglePass===!1?(T.side=Wn,T.needsUpdate=!0,Pn(T,W,K),T.side=ds,T.needsUpdate=!0,Pn(T,W,K),T.side=zi):Pn(T,W,K)}this.compile=function(T,W,K=null){K===null&&(K=T),g=xt.get(K),g.init(W),v.push(g),K.traverseVisible(function(q){q.isLight&&q.layers.test(W.layers)&&(g.pushLight(q),q.castShadow&&g.pushShadow(q))}),T!==K&&T.traverseVisible(function(q){q.isLight&&q.layers.test(W.layers)&&(g.pushLight(q),q.castShadow&&g.pushShadow(q))}),g.setupLights(x._useLegacyLights);let $=new Set;return T.traverse(function(q){let St=q.material;if(St)if(Array.isArray(St))for(let Rt=0;Rt<St.length;Rt++){let At=St[Rt];xe(At,K,q),$.add(At)}else xe(St,K,q),$.add(St)}),v.pop(),g=null,$},this.compileAsync=function(T,W,K=null){let $=this.compile(T,W,K);return new Promise(q=>{function St(){if($.forEach(function(Rt){ft.get(Rt).currentProgram.isReady()&&$.delete(Rt)}),$.size===0){q(T);return}setTimeout(St,10)}ot.get("KHR_parallel_shader_compile")!==null?St():setTimeout(St,10)})};let we=null;function tn(T){we&&we(T)}function _e(){Ce.stop()}function Rn(){Ce.start()}let Ce=new Ux;Ce.setAnimationLoop(tn),typeof self<"u"&&Ce.setContext(self),this.setAnimationLoop=function(T){we=T,se.setAnimationLoop(T),T===null?Ce.stop():Ce.start()},se.addEventListener("sessionstart",_e),se.addEventListener("sessionend",Rn),this.render=function(T,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(se.cameraAutoUpdate===!0&&se.updateCamera(W),W=se.getCamera()),T.isScene===!0&&T.onBeforeRender(x,T,W,C),g=xt.get(T,v.length),g.init(W),v.push(g),pt.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),yt.setFromProjectionMatrix(pt),ut=this.localClippingEnabled,et=vt.init(this.clippingPlanes,ut),_=it.get(T,p.length),_.init(),p.push(_),ze(T,W,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(j,rt);let K=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1;K&&bt.addToRenderList(_,T),this.info.render.frame++,et===!0&&vt.beginShadows();let $=g.state.shadowsArray;Zt.render($,T,W),et===!0&&vt.endShadows(),this.info.autoReset===!0&&this.info.reset();let q=_.opaque,St=_.transmissive;if(g.setupLights(x._useLegacyLights),W.isArrayCamera){let Rt=W.cameras;if(St.length>0)for(let At=0,kt=Rt.length;At<kt;At++){let Yt=Rt[At];gn(q,St,T,Yt)}K&&bt.render(T);for(let At=0,kt=Rt.length;At<kt;At++){let Yt=Rt[At];mn(_,T,Yt,Yt.viewport)}}else St.length>0&&gn(q,St,T,W),K&&bt.render(T),mn(_,T,W);C!==null&&(Ct.updateMultisampleRenderTarget(C),Ct.updateRenderTargetMipmap(C)),T.isScene===!0&&T.onAfterRender(x,T,W),Kt.resetDefaultState(),P=-1,w=null,v.pop(),v.length>0?(g=v[v.length-1],et===!0&&vt.setGlobalState(x.clippingPlanes,g.state.camera)):g=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function ze(T,W,K,$){if(T.visible===!1)return;if(T.layers.test(W.layers)){if(T.isGroup)K=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(W);else if(T.isLight)g.pushLight(T),T.castShadow&&g.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||yt.intersectsSprite(T)){$&&ct.setFromMatrixPosition(T.matrixWorld).applyMatrix4(pt);let Rt=O.update(T),At=T.material;At.visible&&_.push(T,Rt,At,K,ct.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||yt.intersectsObject(T))){let Rt=O.update(T),At=T.material;if($&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),ct.copy(T.boundingSphere.center)):(Rt.boundingSphere===null&&Rt.computeBoundingSphere(),ct.copy(Rt.boundingSphere.center)),ct.applyMatrix4(T.matrixWorld).applyMatrix4(pt)),Array.isArray(At)){let kt=Rt.groups;for(let Yt=0,Ot=kt.length;Yt<Ot;Yt++){let ne=kt[Yt],De=At[ne.materialIndex];De&&De.visible&&_.push(T,Rt,De,K,ct.z,ne)}}else At.visible&&_.push(T,Rt,At,K,ct.z,null)}}let St=T.children;for(let Rt=0,At=St.length;Rt<At;Rt++)ze(St[Rt],W,K,$)}function mn(T,W,K,$){let q=T.opaque,St=T.transmissive,Rt=T.transparent;g.setupLightsView(K),et===!0&&vt.setGlobalState(x.clippingPlanes,K),$&&st.viewport(S.copy($)),q.length>0&&Yn(q,W,K),St.length>0&&Yn(St,W,K),Rt.length>0&&Yn(Rt,W,K),st.buffers.depth.setTest(!0),st.buffers.depth.setMask(!0),st.buffers.color.setMask(!0),st.setPolygonOffset(!1)}function gn(T,W,K,$){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[$.id]===void 0&&(g.state.transmissionRenderTarget[$.id]=new si(1,1,{generateMipmaps:!0,type:ot.has("EXT_color_buffer_half_float")||ot.has("EXT_color_buffer_float")?hl:ps,minFilter:ki,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1}));let St=g.state.transmissionRenderTarget[$.id],Rt=$.viewport||S;St.setSize(Rt.z,Rt.w);let At=x.getRenderTarget();x.setRenderTarget(St),x.getClearColor(R),V=x.getClearAlpha(),V<1&&x.setClearColor(16777215,.5),x.clear();let kt=x.toneMapping;x.toneMapping=us;let Yt=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),g.setupLightsView($),et===!0&&vt.setGlobalState(x.clippingPlanes,$),Yn(T,K,$),Ct.updateMultisampleRenderTarget(St),Ct.updateRenderTargetMipmap(St),ot.has("WEBGL_multisampled_render_to_texture")===!1){let Ot=!1;for(let ne=0,De=W.length;ne<De;ne++){let Xe=W[ne],Ye=Xe.object,Fn=Xe.geometry,me=Xe.material,oe=Xe.group;if(me.side===zi&&Ye.layers.test($.layers)){let $i=me.side;me.side=Wn,me.needsUpdate=!0,Oe(Ye,K,$,Fn,me,oe),me.side=$i,me.needsUpdate=!0,Ot=!0}}Ot===!0&&(Ct.updateMultisampleRenderTarget(St),Ct.updateRenderTargetMipmap(St))}x.setRenderTarget(At),x.setClearColor(R,V),Yt!==void 0&&($.viewport=Yt),x.toneMapping=kt}function Yn(T,W,K){let $=W.isScene===!0?W.overrideMaterial:null;for(let q=0,St=T.length;q<St;q++){let Rt=T[q],At=Rt.object,kt=Rt.geometry,Yt=$===null?Rt.material:$,Ot=Rt.group;At.layers.test(K.layers)&&Oe(At,W,K,kt,Yt,Ot)}}function Oe(T,W,K,$,q,St){T.onBeforeRender(x,W,K,$,q,St),T.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),q.onBeforeRender(x,W,K,$,T,St),q.transparent===!0&&q.side===zi&&q.forceSinglePass===!1?(q.side=Wn,q.needsUpdate=!0,x.renderBufferDirect(K,W,$,q,T,St),q.side=ds,q.needsUpdate=!0,x.renderBufferDirect(K,W,$,q,T,St),q.side=zi):x.renderBufferDirect(K,W,$,q,T,St),T.onAfterRender(x,W,K,$,q,St)}function Pn(T,W,K){W.isScene!==!0&&(W=zt);let $=ft.get(T),q=g.state.lights,St=g.state.shadowsArray,Rt=q.state.version,At=Z.getParameters(T,q.state,St,W,K),kt=Z.getProgramCacheKey(At),Yt=$.programs;$.environment=T.isMeshStandardMaterial?W.environment:null,$.fog=W.fog,$.envMap=(T.isMeshStandardMaterial?N:Gt).get(T.envMap||$.environment),$.envMapRotation=$.environment!==null&&T.envMap===null?W.environmentRotation:T.envMapRotation,Yt===void 0&&(T.addEventListener("dispose",Pt),Yt=new Map,$.programs=Yt);let Ot=Yt.get(kt);if(Ot!==void 0){if($.currentProgram===Ot&&$.lightsStateVersion===Rt)return Q(T,At),Ot}else At.uniforms=Z.getUniforms(T),T.onBuild(K,At,x),T.onBeforeCompile(At,x),Ot=Z.acquireProgram(At,kt),Yt.set(kt,Ot),$.uniforms=At.uniforms;let ne=$.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(ne.clippingPlanes=vt.uniform),Q(T,At),$.needsLights=le(T),$.lightsStateVersion=Rt,$.needsLights&&(ne.ambientLightColor.value=q.state.ambient,ne.lightProbe.value=q.state.probe,ne.directionalLights.value=q.state.directional,ne.directionalLightShadows.value=q.state.directionalShadow,ne.spotLights.value=q.state.spot,ne.spotLightShadows.value=q.state.spotShadow,ne.rectAreaLights.value=q.state.rectArea,ne.ltc_1.value=q.state.rectAreaLTC1,ne.ltc_2.value=q.state.rectAreaLTC2,ne.pointLights.value=q.state.point,ne.pointLightShadows.value=q.state.pointShadow,ne.hemisphereLights.value=q.state.hemi,ne.directionalShadowMap.value=q.state.directionalShadowMap,ne.directionalShadowMatrix.value=q.state.directionalShadowMatrix,ne.spotShadowMap.value=q.state.spotShadowMap,ne.spotLightMatrix.value=q.state.spotLightMatrix,ne.spotLightMap.value=q.state.spotLightMap,ne.pointShadowMap.value=q.state.pointShadowMap,ne.pointShadowMatrix.value=q.state.pointShadowMatrix),$.currentProgram=Ot,$.uniformsList=null,Ot}function vi(T){if(T.uniformsList===null){let W=T.currentProgram.getUniforms();T.uniformsList=wo.seqWithValue(W.seq,T.uniforms)}return T.uniformsList}function Q(T,W){let K=ft.get(T);K.outputColorSpace=W.outputColorSpace,K.batching=W.batching,K.instancing=W.instancing,K.instancingColor=W.instancingColor,K.instancingMorph=W.instancingMorph,K.skinning=W.skinning,K.morphTargets=W.morphTargets,K.morphNormals=W.morphNormals,K.morphColors=W.morphColors,K.morphTargetsCount=W.morphTargetsCount,K.numClippingPlanes=W.numClippingPlanes,K.numIntersection=W.numClipIntersection,K.vertexAlphas=W.vertexAlphas,K.vertexTangents=W.vertexTangents,K.toneMapping=W.toneMapping}function dt(T,W,K,$,q){W.isScene!==!0&&(W=zt),Ct.resetTextureUnits();let St=W.fog,Rt=$.isMeshStandardMaterial?W.environment:null,At=C===null?x.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:_s,kt=($.isMeshStandardMaterial?N:Gt).get($.envMap||Rt),Yt=$.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Ot=!!K.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),ne=!!K.morphAttributes.position,De=!!K.morphAttributes.normal,Xe=!!K.morphAttributes.color,Ye=us;$.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Ye=x.toneMapping);let Fn=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,me=Fn!==void 0?Fn.length:0,oe=ft.get($),$i=g.state.lights;if(et===!0&&(ut===!0||T!==w)){let Xn=T===w&&$.id===P;vt.setState($,T,Xn)}let Le=!1;$.version===oe.__version?(oe.needsLights&&oe.lightsStateVersion!==$i.state.version||oe.outputColorSpace!==At||q.isBatchedMesh&&oe.batching===!1||!q.isBatchedMesh&&oe.batching===!0||q.isInstancedMesh&&oe.instancing===!1||!q.isInstancedMesh&&oe.instancing===!0||q.isSkinnedMesh&&oe.skinning===!1||!q.isSkinnedMesh&&oe.skinning===!0||q.isInstancedMesh&&oe.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&oe.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&oe.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&oe.instancingMorph===!1&&q.morphTexture!==null||oe.envMap!==kt||$.fog===!0&&oe.fog!==St||oe.numClippingPlanes!==void 0&&(oe.numClippingPlanes!==vt.numPlanes||oe.numIntersection!==vt.numIntersection)||oe.vertexAlphas!==Yt||oe.vertexTangents!==Ot||oe.morphTargets!==ne||oe.morphNormals!==De||oe.morphColors!==Xe||oe.toneMapping!==Ye||oe.morphTargetsCount!==me)&&(Le=!0):(Le=!0,oe.__version=$.version);let yi=oe.currentProgram;Le===!0&&(yi=Pn($,W,q));let Cr=!1,nn=!1,Rr=!1,cn=yi.getUniforms(),ci=oe.uniforms;if(st.useProgram(yi.program)&&(Cr=!0,nn=!0,Rr=!0),$.id!==P&&(P=$.id,nn=!0),Cr||w!==T){cn.setValue(H,"projectionMatrix",T.projectionMatrix),cn.setValue(H,"viewMatrix",T.matrixWorldInverse);let Xn=cn.map.cameraPosition;Xn!==void 0&&Xn.setValue(H,ct.setFromMatrixPosition(T.matrixWorld)),mt.logarithmicDepthBuffer&&cn.setValue(H,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&cn.setValue(H,"isOrthographic",T.isOrthographicCamera===!0),w!==T&&(w=T,nn=!0,Rr=!0)}if(q.isSkinnedMesh){cn.setOptional(H,q,"bindMatrix"),cn.setOptional(H,q,"bindMatrixInverse");let Xn=q.skeleton;Xn&&(Xn.boneTexture===null&&Xn.computeBoneTexture(),cn.setValue(H,"boneTexture",Xn.boneTexture,Ct))}q.isBatchedMesh&&(cn.setOptional(H,q,"batchingTexture"),cn.setValue(H,"batchingTexture",q._matricesTexture,Ct));let Pr=K.morphAttributes;if((Pr.position!==void 0||Pr.normal!==void 0||Pr.color!==void 0)&&Ft.update(q,K,yi),(nn||oe.receiveShadow!==q.receiveShadow)&&(oe.receiveShadow=q.receiveShadow,cn.setValue(H,"receiveShadow",q.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(ci.envMap.value=kt,ci.flipEnvMap.value=kt.isCubeTexture&&kt.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&W.environment!==null&&(ci.envMapIntensity.value=W.environmentIntensity),nn&&(cn.setValue(H,"toneMappingExposure",x.toneMappingExposure),oe.needsLights&&Ut(ci,Rr),St&&$.fog===!0&&Y.refreshFogUniforms(ci,St),Y.refreshMaterialUniforms(ci,$,tt,nt,g.state.transmissionRenderTarget[T.id]),wo.upload(H,vi(oe),ci,Ct)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(wo.upload(H,vi(oe),ci,Ct),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&cn.setValue(H,"center",q.center),cn.setValue(H,"modelViewMatrix",q.modelViewMatrix),cn.setValue(H,"normalMatrix",q.normalMatrix),cn.setValue(H,"modelMatrix",q.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){let Xn=$.uniformsGroups;for(let Go=0,th=Xn.length;Go<th;Go++){let Wo=Xn[Go];Qt.update(Wo,yi),Qt.bind(Wo,yi)}}return yi}function Ut(T,W){T.ambientLightColor.needsUpdate=W,T.lightProbe.needsUpdate=W,T.directionalLights.needsUpdate=W,T.directionalLightShadows.needsUpdate=W,T.pointLights.needsUpdate=W,T.pointLightShadows.needsUpdate=W,T.spotLights.needsUpdate=W,T.spotLightShadows.needsUpdate=W,T.rectAreaLights.needsUpdate=W,T.hemisphereLights.needsUpdate=W}function le(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(T,W,K){ft.get(T.texture).__webglTexture=W,ft.get(T.depthTexture).__webglTexture=K;let $=ft.get(T);$.__hasExternalTextures=!0,$.__autoAllocateDepthBuffer=K===void 0,$.__autoAllocateDepthBuffer||ot.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,W){let K=ft.get(T);K.__webglFramebuffer=W,K.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(T,W=0,K=0){C=T,L=W,b=K;let $=!0,q=null,St=!1,Rt=!1;if(T){let kt=ft.get(T);kt.__useDefaultFramebuffer!==void 0?(st.bindFramebuffer(H.FRAMEBUFFER,null),$=!1):kt.__webglFramebuffer===void 0?Ct.setupRenderTarget(T):kt.__hasExternalTextures&&Ct.rebindTextures(T,ft.get(T.texture).__webglTexture,ft.get(T.depthTexture).__webglTexture);let Yt=T.texture;(Yt.isData3DTexture||Yt.isDataArrayTexture||Yt.isCompressedArrayTexture)&&(Rt=!0);let Ot=ft.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ot[W])?q=Ot[W][K]:q=Ot[W],St=!0):T.samples>0&&Ct.useMultisampledRTT(T)===!1?q=ft.get(T).__webglMultisampledFramebuffer:Array.isArray(Ot)?q=Ot[K]:q=Ot,S.copy(T.viewport),D.copy(T.scissor),z=T.scissorTest}else S.copy(at).multiplyScalar(tt).floor(),D.copy(Mt).multiplyScalar(tt).floor(),z=Tt;if(st.bindFramebuffer(H.FRAMEBUFFER,q)&&$&&st.drawBuffers(T,q),st.viewport(S),st.scissor(D),st.setScissorTest(z),St){let kt=ft.get(T.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+W,kt.__webglTexture,K)}else if(Rt){let kt=ft.get(T.texture),Yt=W||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,kt.__webglTexture,K||0,Yt)}P=-1},this.readRenderTargetPixels=function(T,W,K,$,q,St,Rt){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let At=ft.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Rt!==void 0&&(At=At[Rt]),At){st.bindFramebuffer(H.FRAMEBUFFER,At);try{let kt=T.texture,Yt=kt.format,Ot=kt.type;if(!mt.textureFormatReadable(Yt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!mt.textureTypeReadable(Ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=T.width-$&&K>=0&&K<=T.height-q&&H.readPixels(W,K,$,q,Nt.convert(Yt),Nt.convert(Ot),St)}finally{let kt=C!==null?ft.get(C).__webglFramebuffer:null;st.bindFramebuffer(H.FRAMEBUFFER,kt)}}},this.copyFramebufferToTexture=function(T,W,K=0){let $=Math.pow(2,-K),q=Math.floor(W.image.width*$),St=Math.floor(W.image.height*$);Ct.setTexture2D(W,0),H.copyTexSubImage2D(H.TEXTURE_2D,K,0,0,T.x,T.y,q,St),st.unbindTexture()},this.copyTextureToTexture=function(T,W,K,$=0){let q=W.image.width,St=W.image.height,Rt=Nt.convert(K.format),At=Nt.convert(K.type);Ct.setTexture2D(K,0),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,K.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,K.unpackAlignment),W.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,$,T.x,T.y,q,St,Rt,At,W.image.data):W.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,$,T.x,T.y,W.mipmaps[0].width,W.mipmaps[0].height,Rt,W.mipmaps[0].data):H.texSubImage2D(H.TEXTURE_2D,$,T.x,T.y,Rt,At,W.image),$===0&&K.generateMipmaps&&H.generateMipmap(H.TEXTURE_2D),st.unbindTexture()},this.copyTextureToTexture3D=function(T,W,K,$,q=0){let St=T.max.x-T.min.x,Rt=T.max.y-T.min.y,At=T.max.z-T.min.z,kt=Nt.convert($.format),Yt=Nt.convert($.type),Ot;if($.isData3DTexture)Ct.setTexture3D($,0),Ot=H.TEXTURE_3D;else if($.isDataArrayTexture||$.isCompressedArrayTexture)Ct.setTexture2DArray($,0),Ot=H.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,$.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,$.unpackAlignment);let ne=H.getParameter(H.UNPACK_ROW_LENGTH),De=H.getParameter(H.UNPACK_IMAGE_HEIGHT),Xe=H.getParameter(H.UNPACK_SKIP_PIXELS),Ye=H.getParameter(H.UNPACK_SKIP_ROWS),Fn=H.getParameter(H.UNPACK_SKIP_IMAGES),me=K.isCompressedTexture?K.mipmaps[q]:K.image;H.pixelStorei(H.UNPACK_ROW_LENGTH,me.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,me.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,T.min.x),H.pixelStorei(H.UNPACK_SKIP_ROWS,T.min.y),H.pixelStorei(H.UNPACK_SKIP_IMAGES,T.min.z),K.isDataTexture||K.isData3DTexture?H.texSubImage3D(Ot,q,W.x,W.y,W.z,St,Rt,At,kt,Yt,me.data):$.isCompressedArrayTexture?H.compressedTexSubImage3D(Ot,q,W.x,W.y,W.z,St,Rt,At,kt,me.data):H.texSubImage3D(Ot,q,W.x,W.y,W.z,St,Rt,At,kt,Yt,me),H.pixelStorei(H.UNPACK_ROW_LENGTH,ne),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,De),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Xe),H.pixelStorei(H.UNPACK_SKIP_ROWS,Ye),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Fn),q===0&&$.generateMipmaps&&H.generateMipmap(Ot),st.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?Ct.setTextureCube(T,0):T.isData3DTexture?Ct.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Ct.setTexture2DArray(T,0):Ct.setTexture2D(T,0),st.unbindTexture()},this.resetState=function(){L=0,b=0,C=null,st.reset(),Kt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===Zu?"display-p3":"srgb",e.unpackColorSpace=Pe.workingColorSpace===dl?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},Vc=class s{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ht(t),this.density=e}clone(){return new s(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}},Hc=class s{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ht(t),this.near=e,this.far=n}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Gc=class extends Ae{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ri,this.environmentIntensity=1,this.environmentRotation=new ri,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},No=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Na,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=ii()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return Ix("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ii()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ii()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Vn=new U,yr=class s{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Vn.fromBufferAttribute(this,e),Vn.applyMatrix4(t),this.setXYZ(e,Vn.x,Vn.y,Vn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Vn.fromBufferAttribute(this,e),Vn.applyNormalMatrix(t),this.setXYZ(e,Vn.x,Vn.y,Vn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Vn.fromBufferAttribute(this,e),Vn.transformDirection(t),this.setXYZ(e,Vn.x,Vn.y,Vn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Gn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ue(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Gn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Gn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Gn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Gn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array),i=ue(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array),i=ue(i,this.array),r=ue(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new be(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new s(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Ga=class extends En{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ht(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},fo,aa=new U,po=new U,mo=new U,go=new _t,la=new _t,Hx=new ee,ic=new U,ca=new U,sc=new U,L0=new _t,pd=new _t,N0=new _t,Wc=class extends Ae{constructor(t=new Ga){if(super(),this.isSprite=!0,this.type="Sprite",fo===void 0){fo=new de;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new No(e,5);fo.setIndex([0,1,2,0,2,3]),fo.setAttribute("position",new yr(n,3,0,!1)),fo.setAttribute("uv",new yr(n,2,3,!1))}this.geometry=fo,this.material=t,this.center=new _t(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),po.setFromMatrixScale(this.matrixWorld),Hx.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),mo.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&po.multiplyScalar(-mo.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let o=this.center;rc(ic.set(-.5,-.5,0),mo,o,po,i,r),rc(ca.set(.5,-.5,0),mo,o,po,i,r),rc(sc.set(.5,.5,0),mo,o,po,i,r),L0.set(0,0),pd.set(1,0),N0.set(1,1);let a=t.ray.intersectTriangle(ic,ca,sc,!1,aa);if(a===null&&(rc(ca.set(-.5,.5,0),mo,o,po,i,r),pd.set(0,1),a=t.ray.intersectTriangle(ic,sc,ca,!1,aa),a===null))return;let l=t.ray.origin.distanceTo(aa);l<t.near||l>t.far||e.push({distance:l,point:aa.clone(),uv:as.getInterpolation(aa,ic,ca,sc,L0,pd,N0,new _t),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function rc(s,t,e,n,i,r){go.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(la.x=r*go.x-i*go.y,la.y=i*go.x+r*go.y):la.copy(go),s.copy(t),s.x+=la.x,s.y+=la.y,s.applyMatrix4(Hx)}var oc=new U,D0=new U,Xc=class extends Ae{constructor(){super(),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]},isLOD:{value:!0}}),this.autoUpdate=!0}copy(t){super.copy(t,!1);let e=t.levels;for(let n=0,i=e.length;n<i;n++){let r=e[n];this.addLevel(r.object.clone(),r.distance,r.hysteresis)}return this.autoUpdate=t.autoUpdate,this}addLevel(t,e=0,n=0){e=Math.abs(e);let i=this.levels,r;for(r=0;r<i.length&&!(e<i[r].distance);r++);return i.splice(r,0,{distance:e,hysteresis:n,object:t}),this.add(t),this}getCurrentLevel(){return this._currentLevel}getObjectForDistance(t){let e=this.levels;if(e.length>0){let n,i;for(n=1,i=e.length;n<i;n++){let r=e[n].distance;if(e[n].object.visible&&(r-=r*e[n].hysteresis),t<r)break}return e[n-1].object}return null}raycast(t,e){if(this.levels.length>0){oc.setFromMatrixPosition(this.matrixWorld);let i=t.ray.origin.distanceTo(oc);this.getObjectForDistance(i).raycast(t,e)}}update(t){let e=this.levels;if(e.length>1){oc.setFromMatrixPosition(t.matrixWorld),D0.setFromMatrixPosition(this.matrixWorld);let n=oc.distanceTo(D0)/t.zoom;e[0].object.visible=!0;let i,r;for(i=1,r=e.length;i<r;i++){let o=e[i].distance;if(e[i].object.visible&&(o-=o*e[i].hysteresis),n>=o)e[i-1].object.visible=!1,e[i].object.visible=!0;else break}for(this._currentLevel=i-1;i<r;i++)e[i].object.visible=!1}}toJSON(t){let e=super.toJSON(t);this.autoUpdate===!1&&(e.object.autoUpdate=!1),e.object.levels=[];let n=this.levels;for(let i=0,r=n.length;i<r;i++){let o=n[i];e.object.levels.push({object:o.object.uuid,distance:o.distance,hysteresis:o.hysteresis})}return e}},U0=new U,F0=new Ie,O0=new Ie,lA=new U,B0=new ee,ac=new U,md=new wn,z0=new ee,gd=new Us,qc=class extends Qe{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Ld,this.bindMatrix=new ee,this.bindMatrixInverse=new ee,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let t=this.geometry;this.boundingBox===null&&(this.boundingBox=new Tn),this.boundingBox.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,ac),this.boundingBox.expandByPoint(ac)}computeBoundingSphere(){let t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new wn),this.boundingSphere.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,ac),this.boundingSphere.expandByPoint(ac)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),md.copy(this.boundingSphere),md.applyMatrix4(i),t.ray.intersectsSphere(md)!==!1&&(z0.copy(i).invert(),gd.copy(t.ray).applyMatrix4(z0),!(this.boundingBox!==null&&gd.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,gd)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let t=new Ie,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.fromBufferAttribute(e,n);let r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===Ld?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===ox?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){let n=this.skeleton,i=this.geometry;F0.fromBufferAttribute(i.attributes.skinIndex,t),O0.fromBufferAttribute(i.attributes.skinWeight,t),U0.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let r=0;r<4;r++){let o=O0.getComponent(r);if(o!==0){let a=F0.getComponent(r);B0.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(lA.copy(U0).applyMatrix4(B0),o)}}return e.applyMatrix4(this.bindMatrixInverse)}},Wa=class extends Ae{constructor(){super(),this.isBone=!0,this.type="Bone"}},Hi=class extends ln{constructor(t=null,e=1,n=1,i,r,o,a,l,c=bn,u=bn,h,d){super(null,o,a,l,c,u,i,r,h,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},k0=new ee,cA=new ee,Yc=class s{constructor(t=[],e=[]){this.uuid=ii(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new ee)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){let n=new ee;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=t.length;r<o;r++){let a=t[r]?t[r].matrixWorld:cA;k0.multiplyMatrices(a,e[r]),k0.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);let e=new Float32Array(t*t*4);e.set(this.boneMatrices);let n=new Hi(e,t,t,ni,_i);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){let i=this.bones[e];if(i.name===t)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,i=t.bones.length;n<i;n++){let r=t.bones[n],o=e[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Wa),this.bones.push(o),this.boneInverses.push(new ee().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){let t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;let e=this.bones,n=this.boneInverses;for(let i=0,r=e.length;i<r;i++){let o=e[i];t.bones.push(o.uuid);let a=n[i];t.boneInverses.push(a.toArray())}return t}},Fs=class extends be{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},_o=new ee,V0=new ee,lc=[],H0=new Tn,uA=new ee,ua=new Qe,ha=new wn,$c=class extends Qe{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Fs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,uA)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Tn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,_o),H0.copy(t.boundingBox).applyMatrix4(_o),this.boundingBox.union(H0)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new wn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,_o),ha.copy(t.boundingSphere).applyMatrix4(_o),this.boundingSphere.union(ha)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(ua.geometry=this.geometry,ua.material=this.material,ua.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ha.copy(this.boundingSphere),ha.applyMatrix4(n),t.ray.intersectsSphere(ha)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,_o),V0.multiplyMatrices(n,_o),ua.matrixWorld=V0,ua.raycast(t,lc);for(let o=0,a=lc.length;o<a;o++){let l=lc[o];l.instanceId=r,l.object=this,e.push(l)}lc.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Fs(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Hi(new Float32Array(i*this.count),i,this.count,Ip,_i));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=i*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};function hA(s,t){return s.z-t.z}function dA(s,t){return t.z-s.z}var Ef=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(t,e){let n=this.pool,i=this.list;this.index>=n.length&&n.push({start:-1,count:-1,z:-1});let r=n[this.index];i.push(r),this.index++,r.start=t.start,r.count=t.count,r.z=e}reset(){this.list.length=0,this.index=0}},xo="batchId",Ps=new ee,G0=new ee,fA=new ee,W0=new ee,_d=new vr,cc=new Tn,er=new wn,da=new U,xd=new Ef,Nn=new Qe,uc=[];function pA(s,t,e=0){let n=t.itemSize;if(s.isInterleavedBufferAttribute||s.array.constructor!==t.array.constructor){let i=s.count;for(let r=0;r<i;r++)for(let o=0;o<n;o++)t.setComponent(r+e,o,s.getComponent(r,o))}else t.array.set(s.array,e*n);t.needsUpdate=!0}var Zc=class extends Qe{get maxGeometryCount(){return this._maxGeometryCount}constructor(t,e,n=e*2,i){super(new de,i),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._drawRanges=[],this._reservedRanges=[],this._visibility=[],this._active=[],this._bounds=[],this._maxGeometryCount=t,this._maxVertexCount=e,this._maxIndexCount=n,this._geometryInitialized=!1,this._geometryCount=0,this._multiDrawCounts=new Int32Array(t),this._multiDrawStarts=new Int32Array(t),this._multiDrawCount=0,this._multiDrawInstances=null,this._visibilityChanged=!0,this._matricesTexture=null,this._initMatricesTexture()}_initMatricesTexture(){let t=Math.sqrt(this._maxGeometryCount*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);let e=new Float32Array(t*t*4),n=new Hi(e,t,t,ni,_i);this._matricesTexture=n}_initializeGeometry(t){let e=this.geometry,n=this._maxVertexCount,i=this._maxGeometryCount,r=this._maxIndexCount;if(this._geometryInitialized===!1){for(let a in t.attributes){let l=t.getAttribute(a),{array:c,itemSize:u,normalized:h}=l,d=new c.constructor(n*u),f=new be(d,u,h);e.setAttribute(a,f)}if(t.getIndex()!==null){let a=n>65536?new Uint32Array(r):new Uint16Array(r);e.setIndex(new be(a,1))}let o=i>65536?new Uint32Array(n):new Uint16Array(n);e.setAttribute(xo,new be(o,1)),this._geometryInitialized=!0}}_validateGeometry(t){if(t.getAttribute(xo))throw new Error(`BatchedMesh: Geometry cannot use attribute "${xo}"`);let e=this.geometry;if(!!t.getIndex()!=!!e.getIndex())throw new Error('BatchedMesh: All geometries must consistently have "index".');for(let n in e.attributes){if(n===xo)continue;if(!t.hasAttribute(n))throw new Error(`BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);let i=t.getAttribute(n),r=e.getAttribute(n);if(i.itemSize!==r.itemSize||i.normalized!==r.normalized)throw new Error("BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}setCustomSort(t){return this.customSort=t,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Tn);let t=this._geometryCount,e=this.boundingBox,n=this._active;e.makeEmpty();for(let i=0;i<t;i++)n[i]!==!1&&(this.getMatrixAt(i,Ps),this.getBoundingBoxAt(i,cc).applyMatrix4(Ps),e.union(cc))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wn);let t=this._geometryCount,e=this.boundingSphere,n=this._active;e.makeEmpty();for(let i=0;i<t;i++)n[i]!==!1&&(this.getMatrixAt(i,Ps),this.getBoundingSphereAt(i,er).applyMatrix4(Ps),e.union(er))}addGeometry(t,e=-1,n=-1){if(this._initializeGeometry(t),this._validateGeometry(t),this._geometryCount>=this._maxGeometryCount)throw new Error("BatchedMesh: Maximum geometry count reached.");let i={vertexStart:-1,vertexCount:-1,indexStart:-1,indexCount:-1},r=null,o=this._reservedRanges,a=this._drawRanges,l=this._bounds;this._geometryCount!==0&&(r=o[o.length-1]),e===-1?i.vertexCount=t.getAttribute("position").count:i.vertexCount=e,r===null?i.vertexStart=0:i.vertexStart=r.vertexStart+r.vertexCount;let c=t.getIndex(),u=c!==null;if(u&&(n===-1?i.indexCount=c.count:i.indexCount=n,r===null?i.indexStart=0:i.indexStart=r.indexStart+r.indexCount),i.indexStart!==-1&&i.indexStart+i.indexCount>this._maxIndexCount||i.vertexStart+i.vertexCount>this._maxVertexCount)throw new Error("BatchedMesh: Reserved space request exceeds the maximum buffer size.");let h=this._visibility,d=this._active,f=this._matricesTexture,m=this._matricesTexture.image.data;h.push(!0),d.push(!0);let _=this._geometryCount;this._geometryCount++,fA.toArray(m,_*16),f.needsUpdate=!0,o.push(i),a.push({start:u?i.indexStart:i.vertexStart,count:-1}),l.push({boxInitialized:!1,box:new Tn,sphereInitialized:!1,sphere:new wn});let g=this.geometry.getAttribute(xo);for(let p=0;p<i.vertexCount;p++)g.setX(i.vertexStart+p,_);return g.needsUpdate=!0,this.setGeometryAt(_,t),_}setGeometryAt(t,e){if(t>=this._geometryCount)throw new Error("BatchedMesh: Maximum geometry count reached.");this._validateGeometry(e);let n=this.geometry,i=n.getIndex()!==null,r=n.getIndex(),o=e.getIndex(),a=this._reservedRanges[t];if(i&&o.count>a.indexCount||e.attributes.position.count>a.vertexCount)throw new Error("BatchedMesh: Reserved space not large enough for provided geometry.");let l=a.vertexStart,c=a.vertexCount;for(let f in n.attributes){if(f===xo)continue;let m=e.getAttribute(f),_=n.getAttribute(f);pA(m,_,l);let g=m.itemSize;for(let p=m.count,v=c;p<v;p++){let x=l+p;for(let y=0;y<g;y++)_.setComponent(x,y,0)}_.needsUpdate=!0,_.addUpdateRange(l*g,c*g)}if(i){let f=a.indexStart;for(let m=0;m<o.count;m++)r.setX(f+m,l+o.getX(m));for(let m=o.count,_=a.indexCount;m<_;m++)r.setX(f+m,l);r.needsUpdate=!0,r.addUpdateRange(f,a.indexCount)}let u=this._bounds[t];e.boundingBox!==null?(u.box.copy(e.boundingBox),u.boxInitialized=!0):u.boxInitialized=!1,e.boundingSphere!==null?(u.sphere.copy(e.boundingSphere),u.sphereInitialized=!0):u.sphereInitialized=!1;let h=this._drawRanges[t],d=e.getAttribute("position");return h.count=i?o.count:d.count,this._visibilityChanged=!0,t}deleteGeometry(t){let e=this._active;return t>=e.length||e[t]===!1?this:(e[t]=!1,this._visibilityChanged=!0,this)}getInstanceCountAt(t){return this._multiDrawInstances===null?null:this._multiDrawInstances[t]}setInstanceCountAt(t,e){return this._multiDrawInstances===null&&(this._multiDrawInstances=new Int32Array(this._maxGeometryCount).fill(1)),this._multiDrawInstances[t]=e,t}getBoundingBoxAt(t,e){if(this._active[t]===!1)return null;let i=this._bounds[t],r=i.box,o=this.geometry;if(i.boxInitialized===!1){r.makeEmpty();let a=o.index,l=o.attributes.position,c=this._drawRanges[t];for(let u=c.start,h=c.start+c.count;u<h;u++){let d=u;a&&(d=a.getX(d)),r.expandByPoint(da.fromBufferAttribute(l,d))}i.boxInitialized=!0}return e.copy(r),e}getBoundingSphereAt(t,e){if(this._active[t]===!1)return null;let i=this._bounds[t],r=i.sphere,o=this.geometry;if(i.sphereInitialized===!1){r.makeEmpty(),this.getBoundingBoxAt(t,cc),cc.getCenter(r.center);let a=o.index,l=o.attributes.position,c=this._drawRanges[t],u=0;for(let h=c.start,d=c.start+c.count;h<d;h++){let f=h;a&&(f=a.getX(f)),da.fromBufferAttribute(l,f),u=Math.max(u,r.center.distanceToSquared(da))}r.radius=Math.sqrt(u),i.sphereInitialized=!0}return e.copy(r),e}setMatrixAt(t,e){let n=this._active,i=this._matricesTexture,r=this._matricesTexture.image.data,o=this._geometryCount;return t>=o||n[t]===!1?this:(e.toArray(r,t*16),i.needsUpdate=!0,this)}getMatrixAt(t,e){let n=this._active,i=this._matricesTexture.image.data,r=this._geometryCount;return t>=r||n[t]===!1?null:e.fromArray(i,t*16)}setVisibleAt(t,e){let n=this._visibility,i=this._active,r=this._geometryCount;return t>=r||i[t]===!1||n[t]===e?this:(n[t]=e,this._visibilityChanged=!0,this)}getVisibleAt(t){let e=this._visibility,n=this._active,i=this._geometryCount;return t>=i||n[t]===!1?!1:e[t]}raycast(t,e){let n=this._visibility,i=this._active,r=this._drawRanges,o=this._geometryCount,a=this.matrixWorld,l=this.geometry;Nn.material=this.material,Nn.geometry.index=l.index,Nn.geometry.attributes=l.attributes,Nn.geometry.boundingBox===null&&(Nn.geometry.boundingBox=new Tn),Nn.geometry.boundingSphere===null&&(Nn.geometry.boundingSphere=new wn);for(let c=0;c<o;c++){if(!n[c]||!i[c])continue;let u=r[c];Nn.geometry.setDrawRange(u.start,u.count),this.getMatrixAt(c,Nn.matrixWorld).premultiply(a),this.getBoundingBoxAt(c,Nn.geometry.boundingBox),this.getBoundingSphereAt(c,Nn.geometry.boundingSphere),Nn.raycast(t,uc);for(let h=0,d=uc.length;h<d;h++){let f=uc[h];f.object=this,f.batchId=c,e.push(f)}uc.length=0}Nn.material=null,Nn.geometry.index=null,Nn.geometry.attributes={},Nn.geometry.setDrawRange(0,1/0)}copy(t){return super.copy(t),this.geometry=t.geometry.clone(),this.perObjectFrustumCulled=t.perObjectFrustumCulled,this.sortObjects=t.sortObjects,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this._drawRanges=t._drawRanges.map(e=>({...e})),this._reservedRanges=t._reservedRanges.map(e=>({...e})),this._visibility=t._visibility.slice(),this._active=t._active.slice(),this._bounds=t._bounds.map(e=>({boxInitialized:e.boxInitialized,box:e.box.clone(),sphereInitialized:e.sphereInitialized,sphere:e.sphere.clone()})),this._maxGeometryCount=t._maxGeometryCount,this._maxVertexCount=t._maxVertexCount,this._maxIndexCount=t._maxIndexCount,this._geometryInitialized=t._geometryInitialized,this._geometryCount=t._geometryCount,this._multiDrawCounts=t._multiDrawCounts.slice(),this._multiDrawStarts=t._multiDrawStarts.slice(),this._matricesTexture=t._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.slice(),this}dispose(){return this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this}onBeforeRender(t,e,n,i,r){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;let o=i.getIndex(),a=o===null?1:o.array.BYTES_PER_ELEMENT,l=this._active,c=this._visibility,u=this._multiDrawStarts,h=this._multiDrawCounts,d=this._drawRanges,f=this.perObjectFrustumCulled;f&&(W0.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse).multiply(this.matrixWorld),_d.setFromProjectionMatrix(W0,t.coordinateSystem));let m=0;if(this.sortObjects){G0.copy(this.matrixWorld).invert(),da.setFromMatrixPosition(n.matrixWorld).applyMatrix4(G0);for(let p=0,v=c.length;p<v;p++)if(c[p]&&l[p]){this.getMatrixAt(p,Ps),this.getBoundingSphereAt(p,er).applyMatrix4(Ps);let x=!1;if(f&&(x=!_d.intersectsSphere(er)),!x){let y=da.distanceTo(er.center);xd.push(d[p],y)}}let _=xd.list,g=this.customSort;g===null?_.sort(r.transparent?dA:hA):g.call(this,_,n);for(let p=0,v=_.length;p<v;p++){let x=_[p];u[m]=x.start*a,h[m]=x.count,m++}xd.reset()}else for(let _=0,g=c.length;_<g;_++)if(c[_]&&l[_]){let p=!1;if(f&&(this.getMatrixAt(_,Ps),this.getBoundingSphereAt(_,er).applyMatrix4(Ps),p=!_d.intersectsSphere(er)),!p){let v=d[_];u[m]=v.start*a,h[m]=v.count,m++}}this._multiDrawCount=m,this._visibilityChanged=!1}onBeforeShadow(t,e,n,i,r,o){this.onBeforeRender(t,null,i,r,o)}},Cn=class extends En{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ht(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Jc=new U,Kc=new U,X0=new ee,fa=new Us,hc=new wn,vd=new U,q0=new U,Xi=class extends Ae{constructor(t=new de,e=new Cn){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)Jc.fromBufferAttribute(e,i-1),Kc.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Jc.distanceTo(Kc);t.setAttribute("lineDistance",new qt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),hc.copy(n.boundingSphere),hc.applyMatrix4(i),hc.radius+=r,t.ray.intersectsSphere(hc)===!1)return;X0.copy(i).invert(),fa.copy(t.ray).applyMatrix4(X0);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){let f=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let _=f,g=m-1;_<g;_+=c){let p=u.getX(_),v=u.getX(_+1),x=dc(this,t,fa,l,p,v);x&&e.push(x)}if(this.isLineLoop){let _=u.getX(m-1),g=u.getX(f),p=dc(this,t,fa,l,_,g);p&&e.push(p)}}else{let f=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let _=f,g=m-1;_<g;_+=c){let p=dc(this,t,fa,l,_,_+1);p&&e.push(p)}if(this.isLineLoop){let _=dc(this,t,fa,l,m-1,f);_&&e.push(_)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function dc(s,t,e,n,i,r){let o=s.geometry.attributes.position;if(Jc.fromBufferAttribute(o,i),Kc.fromBufferAttribute(o,r),e.distanceSqToSegment(Jc,Kc,vd,q0)>n)return;vd.applyMatrix4(s.matrixWorld);let l=t.ray.origin.distanceTo(vd);if(!(l<t.near||l>t.far))return{distance:l,point:q0.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,object:s}}var Y0=new U,$0=new U,xi=class extends Xi{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)Y0.fromBufferAttribute(e,i),$0.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Y0.distanceTo($0);t.setAttribute("lineDistance",new qt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},jc=class extends Xi{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}},Xa=class extends En{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ht(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Z0=new ee,Af=new Us,fc=new wn,pc=new U,Qc=class extends Ae{constructor(t=new de,e=new Xa){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),fc.copy(n.boundingSphere),fc.applyMatrix4(i),fc.radius+=r,t.ray.intersectsSphere(fc)===!1)return;Z0.copy(i).invert(),Af.copy(t.ray).applyMatrix4(Z0);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){let d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let m=d,_=f;m<_;m++){let g=c.getX(m);pc.fromBufferAttribute(h,g),J0(pc,g,l,i,t,e,this)}}else{let d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let m=d,_=f;m<_;m++)pc.fromBufferAttribute(h,m),J0(pc,m,l,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function J0(s,t,e,n,i,r,o){let a=Af.distanceSqToPoint(s);if(a<e){let l=new U;Af.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,object:o})}}var Tf=class extends ln{constructor(t,e,n,i,r,o,a,l,c){super(t,e,n,i,r,o,a,l,c),this.isVideoTexture=!0,this.minFilter=o!==void 0?o:an,this.magFilter=r!==void 0?r:an,this.generateMipmaps=!1;let u=this;function h(){u.needsUpdate=!0,t.requestVideoFrameCallback(h)}"requestVideoFrameCallback"in t&&t.requestVideoFrameCallback(h)}clone(){return new this.constructor(this.image).copy(this)}update(){let t=this.image;"requestVideoFrameCallback"in t===!1&&t.readyState>=t.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}},Cf=class extends ln{constructor(t,e){super({width:t,height:e}),this.isFramebufferTexture=!0,this.magFilter=bn,this.minFilter=bn,this.generateMipmaps=!1,this.needsUpdate=!0}},Do=class extends ln{constructor(t,e,n,i,r,o,a,l,c,u,h,d){super(null,o,a,l,c,u,i,r,h,d),this.isCompressedTexture=!0,this.image={width:e,height:n},this.mipmaps=t,this.flipY=!1,this.generateMipmaps=!1}},Rf=class extends Do{constructor(t,e,n,i,r,o){super(t,e,n,r,o),this.isCompressedArrayTexture=!0,this.image.depth=i,this.wrapR=gi}},Pf=class extends Do{constructor(t,e,n){super(void 0,t[0].width,t[0].height,e,n,fs),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=t}},If=class extends ln{constructor(t,e,n,i,r,o,a,l,c){super(t,e,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},ai=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),i=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);let u=n[i],d=n[i+1]-u,f=(o-u)/d;return(i+f)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),l=e||(o.isVector2?new _t:new U);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new U,i=[],r=[],o=[],a=new U,l=new ee;for(let f=0;f<=t;f++){let m=f/t;i[f]=this.getTangentAt(m,new U)}r[0]=new U,o[0]=new U;let c=Number.MAX_VALUE,u=Math.abs(i[0].x),h=Math.abs(i[0].y),d=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(je(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,m))}o[f].crossVectors(i[f],r[f])}if(e===!0){let f=Math.acos(je(r[0].dot(r[t]),-1,1));f/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let m=1;m<=t;m++)r[m].applyMatrix4(l.makeRotationAxis(i[m],f*m)),o[m].crossVectors(i[m],r[m])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Uo=class extends ai{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new _t){let n=e,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*u-f*h+this.aX,c=d*h+f*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},tu=class extends Uo{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function zp(){let s=0,t=0,e=0,n=0;function i(r,o,a,l){s=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,h){let d=(o-r)/c-(a-r)/(c+u)+(a-o)/u,f=(a-o)/u-(l-o)/(u+h)+(l-a)/h;d*=u,f*=u,i(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return s+t*r+e*o+n*a}}}var mc=new U,yd=new zp,Md=new zp,Sd=new zp,eu=class extends ai{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new U){let n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=i[(a-1)%r]:(mc.subVectors(i[0],i[1]).add(i[0]),c=mc);let h=i[a%r],d=i[(a+1)%r];if(this.closed||a+2<r?u=i[(a+2)%r]:(mc.subVectors(i[r-1],i[r-2]).add(i[r-1]),u=mc),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(h),f),_=Math.pow(h.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(u),f);_<1e-4&&(_=1),m<1e-4&&(m=_),g<1e-4&&(g=_),yd.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,m,_,g),Md.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,m,_,g),Sd.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,m,_,g)}else this.curveType==="catmullrom"&&(yd.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),Md.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),Sd.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(yd.calc(l),Md.calc(l),Sd.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new U().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function K0(s,t,e,n,i){let r=(n-t)*.5,o=(i-e)*.5,a=s*s,l=s*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*s+e}function mA(s,t){let e=1-s;return e*e*t}function gA(s,t){return 2*(1-s)*s*t}function _A(s,t){return s*s*t}function ya(s,t,e,n){return mA(s,t)+gA(s,e)+_A(s,n)}function xA(s,t){let e=1-s;return e*e*e*t}function vA(s,t){let e=1-s;return 3*e*e*s*t}function yA(s,t){return 3*(1-s)*s*s*t}function MA(s,t){return s*s*s*t}function Ma(s,t,e,n,i){return xA(s,t)+vA(s,e)+yA(s,n)+MA(s,i)}var qa=class extends ai{constructor(t=new _t,e=new _t,n=new _t,i=new _t){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new _t){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ma(t,i.x,r.x,o.x,a.x),Ma(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},nu=class extends ai{constructor(t=new U,e=new U,n=new U,i=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new U){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ma(t,i.x,r.x,o.x,a.x),Ma(t,i.y,r.y,o.y,a.y),Ma(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ya=class extends ai{constructor(t=new _t,e=new _t){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new _t){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new _t){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},iu=class extends ai{constructor(t=new U,e=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new U){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new U){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},$a=class extends ai{constructor(t=new _t,e=new _t,n=new _t){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new _t){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(ya(t,i.x,r.x,o.x),ya(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Za=class extends ai{constructor(t=new U,e=new U,n=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new U){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(ya(t,i.x,r.x,o.x),ya(t,i.y,r.y,o.y),ya(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ja=class extends ai{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new _t){let n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],u=i[o>i.length-2?i.length-1:o+1],h=i[o>i.length-3?i.length-1:o+2];return n.set(K0(a,l.x,c.x,u.x,h.x),K0(a,l.y,c.y,u.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new _t().fromArray(i))}return this}},su=Object.freeze({__proto__:null,ArcCurve:tu,CatmullRomCurve3:eu,CubicBezierCurve:qa,CubicBezierCurve3:nu,EllipseCurve:Uo,LineCurve:Ya,LineCurve3:iu,QuadraticBezierCurve:$a,QuadraticBezierCurve3:Za,SplineCurve:Ja}),ru=class extends ai{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new su[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let i=0,r=this.curves;i<r.length;i++){let o=r[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let u=l[c];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new su[i.type]().fromJSON(i))}return this}},Mr=class extends ru{constructor(t){super(),this.type="Path",this.currentPoint=new _t,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Ya(this.currentPoint.clone(),new _t(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let r=new $a(this.currentPoint.clone(),new _t(t,e),new _t(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,o){let a=new qa(this.currentPoint.clone(),new _t(t,e),new _t(n,i),new _t(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Ja(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,r,o),this}absarc(t,e,n,i,r,o){return this.absellipse(t,e,n,n,i,r,o),this}ellipse(t,e,n,i,r,o,a,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,n,i,r,o,a,l),this}absellipse(t,e,n,i,r,o,a,l){let c=new Uo(t,e,n,i,r,o,a,l);if(this.curves.length>0){let h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Ka=class s extends de{constructor(t=[new _t(0,-.5),new _t(.5,0),new _t(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=je(i,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],u=1/e,h=new U,d=new _t,f=new U,m=new U,_=new U,g=0,p=0;for(let v=0;v<=t.length-1;v++)switch(v){case 0:g=t[v+1].x-t[v].x,p=t[v+1].y-t[v].y,f.x=p*1,f.y=-g,f.z=p*0,_.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:g=t[v+1].x-t[v].x,p=t[v+1].y-t[v].y,f.x=p*1,f.y=-g,f.z=p*0,m.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),l.push(f.x,f.y,f.z),_.copy(m)}for(let v=0;v<=e;v++){let x=n+v*u*i,y=Math.sin(x),L=Math.cos(x);for(let b=0;b<=t.length-1;b++){h.x=t[b].x*y,h.y=t[b].y,h.z=t[b].x*L,o.push(h.x,h.y,h.z),d.x=v/e,d.y=b/(t.length-1),a.push(d.x,d.y);let C=l[3*b+0]*y,P=l[3*b+1],w=l[3*b+0]*L;c.push(C,P,w)}}for(let v=0;v<e;v++)for(let x=0;x<t.length-1;x++){let y=x+v*t.length,L=y,b=y+t.length,C=y+t.length+1,P=y+1;r.push(L,b,P),r.push(C,P,b)}this.setIndex(r),this.setAttribute("position",new qt(o,3)),this.setAttribute("uv",new qt(a,2)),this.setAttribute("normal",new qt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.points,t.segments,t.phiStart,t.phiLength)}},ou=class s extends Ka{constructor(t=1,e=1,n=4,i=8){let r=new Mr;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:i}}static fromJSON(t){return new s(t.radius,t.length,t.capSegments,t.radialSegments)}},au=class s extends de{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new U,u=new _t;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=e;h++,d+=3){let f=n+h/e*i;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[d]/t+1)/2,u.y=(o[d+1]/t+1)/2,l.push(u.x,u.y)}for(let h=1;h<=e;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new qt(o,3)),this.setAttribute("normal",new qt(a,3)),this.setAttribute("uv",new qt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Fo=class s extends de{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let u=[],h=[],d=[],f=[],m=0,_=[],g=n/2,p=0;v(),o===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new qt(h,3)),this.setAttribute("normal",new qt(d,3)),this.setAttribute("uv",new qt(f,2));function v(){let y=new U,L=new U,b=0,C=(e-t)/n;for(let P=0;P<=r;P++){let w=[],S=P/r,D=S*(e-t)+t;for(let z=0;z<=i;z++){let R=z/i,V=R*l+a,X=Math.sin(V),nt=Math.cos(V);L.x=D*X,L.y=-S*n+g,L.z=D*nt,h.push(L.x,L.y,L.z),y.set(X,C,nt).normalize(),d.push(y.x,y.y,y.z),f.push(R,1-S),w.push(m++)}_.push(w)}for(let P=0;P<i;P++)for(let w=0;w<r;w++){let S=_[w][P],D=_[w+1][P],z=_[w+1][P+1],R=_[w][P+1];u.push(S,D,R),u.push(D,z,R),b+=6}c.addGroup(p,b,0),p+=b}function x(y){let L=m,b=new _t,C=new U,P=0,w=y===!0?t:e,S=y===!0?1:-1;for(let z=1;z<=i;z++)h.push(0,g*S,0),d.push(0,S,0),f.push(.5,.5),m++;let D=m;for(let z=0;z<=i;z++){let V=z/i*l+a,X=Math.cos(V),nt=Math.sin(V);C.x=w*nt,C.y=g*S,C.z=w*X,h.push(C.x,C.y,C.z),d.push(0,S,0),b.x=X*.5+.5,b.y=nt*.5*S+.5,f.push(b.x,b.y),m++}for(let z=0;z<i;z++){let R=L+z,V=D+z;y===!0?u.push(V,V+1,R):u.push(V+1,V,R),P+=3}c.addGroup(p,P,y===!0?1:2),p+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},lu=class s extends Fo{constructor(t=1,e=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Os=class s extends de{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};let r=[],o=[];a(i),c(n),u(),this.setAttribute("position",new qt(r,3)),this.setAttribute("normal",new qt(r.slice(),3)),this.setAttribute("uv",new qt(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(v){let x=new U,y=new U,L=new U;for(let b=0;b<e.length;b+=3)f(e[b+0],x),f(e[b+1],y),f(e[b+2],L),l(x,y,L,v)}function l(v,x,y,L){let b=L+1,C=[];for(let P=0;P<=b;P++){C[P]=[];let w=v.clone().lerp(y,P/b),S=x.clone().lerp(y,P/b),D=b-P;for(let z=0;z<=D;z++)z===0&&P===b?C[P][z]=w:C[P][z]=w.clone().lerp(S,z/D)}for(let P=0;P<b;P++)for(let w=0;w<2*(b-P)-1;w++){let S=Math.floor(w/2);w%2===0?(d(C[P][S+1]),d(C[P+1][S]),d(C[P][S])):(d(C[P][S+1]),d(C[P+1][S+1]),d(C[P+1][S]))}}function c(v){let x=new U;for(let y=0;y<r.length;y+=3)x.x=r[y+0],x.y=r[y+1],x.z=r[y+2],x.normalize().multiplyScalar(v),r[y+0]=x.x,r[y+1]=x.y,r[y+2]=x.z}function u(){let v=new U;for(let x=0;x<r.length;x+=3){v.x=r[x+0],v.y=r[x+1],v.z=r[x+2];let y=g(v)/2/Math.PI+.5,L=p(v)/Math.PI+.5;o.push(y,1-L)}m(),h()}function h(){for(let v=0;v<o.length;v+=6){let x=o[v+0],y=o[v+2],L=o[v+4],b=Math.max(x,y,L),C=Math.min(x,y,L);b>.9&&C<.1&&(x<.2&&(o[v+0]+=1),y<.2&&(o[v+2]+=1),L<.2&&(o[v+4]+=1))}}function d(v){r.push(v.x,v.y,v.z)}function f(v,x){let y=v*3;x.x=t[y+0],x.y=t[y+1],x.z=t[y+2]}function m(){let v=new U,x=new U,y=new U,L=new U,b=new _t,C=new _t,P=new _t;for(let w=0,S=0;w<r.length;w+=9,S+=6){v.set(r[w+0],r[w+1],r[w+2]),x.set(r[w+3],r[w+4],r[w+5]),y.set(r[w+6],r[w+7],r[w+8]),b.set(o[S+0],o[S+1]),C.set(o[S+2],o[S+3]),P.set(o[S+4],o[S+5]),L.copy(v).add(x).add(y).divideScalar(3);let D=g(L);_(b,S+0,v,D),_(C,S+2,x,D),_(P,S+4,y,D)}}function _(v,x,y,L){L<0&&v.x===1&&(o[x]=v.x-1),y.x===0&&y.z===0&&(o[x]=L/2/Math.PI+.5)}function g(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.vertices,t.indices,t.radius,t.details)}},cu=class s extends Os{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}},gc=new U,_c=new U,bd=new U,xc=new as,uu=class extends de{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let i=Math.pow(10,4),r=Math.cos(mr*e),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],h=new Array(3),d={},f=[];for(let m=0;m<l;m+=3){o?(c[0]=o.getX(m),c[1]=o.getX(m+1),c[2]=o.getX(m+2)):(c[0]=m,c[1]=m+1,c[2]=m+2);let{a:_,b:g,c:p}=xc;if(_.fromBufferAttribute(a,c[0]),g.fromBufferAttribute(a,c[1]),p.fromBufferAttribute(a,c[2]),xc.getNormal(bd),h[0]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,h[1]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,h[2]=`${Math.round(p.x*i)},${Math.round(p.y*i)},${Math.round(p.z*i)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let v=0;v<3;v++){let x=(v+1)%3,y=h[v],L=h[x],b=xc[u[v]],C=xc[u[x]],P=`${y}_${L}`,w=`${L}_${y}`;w in d&&d[w]?(bd.dot(d[w].normal)<=r&&(f.push(b.x,b.y,b.z),f.push(C.x,C.y,C.z)),d[w]=null):P in d||(d[P]={index0:c[v],index1:c[x],normal:bd.clone()})}}for(let m in d)if(d[m]){let{index0:_,index1:g}=d[m];gc.fromBufferAttribute(a,_),_c.fromBufferAttribute(a,g),f.push(gc.x,gc.y,gc.z),f.push(_c.x,_c.y,_c.z)}this.setAttribute("position",new qt(f,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}},hs=class extends Mr{constructor(t){super(t),this.uuid=ii(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(new Mr().fromJSON(i))}return this}},SA={triangulate:function(s,t,e=2){let n=t&&t.length,i=n?t[0]*e:s.length,r=Gx(s,0,i,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,u,h,d,f;if(n&&(r=TA(s,t,r,e)),s.length>80*e){a=c=s[0],l=u=s[1];for(let m=e;m<i;m+=e)h=s[m],d=s[m+1],h<a&&(a=h),d<l&&(l=d),h>c&&(c=h),d>u&&(u=d);f=Math.max(c-a,u-l),f=f!==0?32767/f:0}return ja(r,o,e,a,l,f,0),o}};function Gx(s,t,e,n,i){let r,o;if(i===BA(s,t,e,n)>0)for(r=t;r<e;r+=n)o=j0(r,s[r],s[r+1],o);else for(r=e-n;r>=t;r-=n)o=j0(r,s[r],s[r+1],o);return o&&Ku(o,o.next)&&(tl(o),o=o.next),o}function Sr(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(Ku(e,e.next)||$e(e.prev,e,e.next)===0)){if(tl(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function ja(s,t,e,n,i,r,o){if(!s)return;!o&&r&&LA(s,n,i,r);let a=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,r?wA(s,n,i,r):bA(s)){t.push(l.i/e|0),t.push(s.i/e|0),t.push(c.i/e|0),tl(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=EA(Sr(s),t,e),ja(s,t,e,n,i,r,2)):o===2&&AA(s,t,e,n,i,r):ja(Sr(s),t,e,n,i,r,1);break}}}function bA(s){let t=s.prev,e=s,n=s.next;if($e(t,e,n)>=0)return!1;let i=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,u=i<r?i<o?i:o:r<o?r:o,h=a<l?a<c?a:c:l<c?l:c,d=i>r?i>o?i:o:r>o?r:o,f=a>l?a>c?a:c:l>c?l:c,m=n.next;for(;m!==t;){if(m.x>=u&&m.x<=d&&m.y>=h&&m.y<=f&&So(i,a,r,l,o,c,m.x,m.y)&&$e(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function wA(s,t,e,n){let i=s.prev,r=s,o=s.next;if($e(i,r,o)>=0)return!1;let a=i.x,l=r.x,c=o.x,u=i.y,h=r.y,d=o.y,f=a<l?a<c?a:c:l<c?l:c,m=u<h?u<d?u:d:h<d?h:d,_=a>l?a>c?a:c:l>c?l:c,g=u>h?u>d?u:d:h>d?h:d,p=Lf(f,m,t,e,n),v=Lf(_,g,t,e,n),x=s.prevZ,y=s.nextZ;for(;x&&x.z>=p&&y&&y.z<=v;){if(x.x>=f&&x.x<=_&&x.y>=m&&x.y<=g&&x!==i&&x!==o&&So(a,u,l,h,c,d,x.x,x.y)&&$e(x.prev,x,x.next)>=0||(x=x.prevZ,y.x>=f&&y.x<=_&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&So(a,u,l,h,c,d,y.x,y.y)&&$e(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;x&&x.z>=p;){if(x.x>=f&&x.x<=_&&x.y>=m&&x.y<=g&&x!==i&&x!==o&&So(a,u,l,h,c,d,x.x,x.y)&&$e(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;y&&y.z<=v;){if(y.x>=f&&y.x<=_&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&So(a,u,l,h,c,d,y.x,y.y)&&$e(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function EA(s,t,e){let n=s;do{let i=n.prev,r=n.next.next;!Ku(i,r)&&Wx(i,n,n.next,r)&&Qa(i,r)&&Qa(r,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),tl(n),tl(n.next),n=s=r),n=n.next}while(n!==s);return Sr(n)}function AA(s,t,e,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&UA(o,a)){let l=Xx(o,a);o=Sr(o,o.next),l=Sr(l,l.next),ja(o,t,e,n,i,r,0),ja(l,t,e,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function TA(s,t,e,n){let i=[],r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*n,l=r<o-1?t[r+1]*n:s.length,c=Gx(s,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(DA(c));for(i.sort(CA),r=0;r<i.length;r++)e=RA(i[r],e);return e}function CA(s,t){return s.x-t.x}function RA(s,t){let e=PA(s,t);if(!e)return t;let n=Xx(e,s);return Sr(n,n.next),Sr(e,e.next)}function PA(s,t){let e=t,n=-1/0,i,r=s.x,o=s.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,i=e.x<e.next.x?e:e.next,d===r))return i}e=e.next}while(e!==t);if(!i)return null;let a=i,l=i.x,c=i.y,u=1/0,h;e=i;do r>=e.x&&e.x>=l&&r!==e.x&&So(o<c?r:n,o,l,c,o<c?n:r,o,e.x,e.y)&&(h=Math.abs(o-e.y)/(r-e.x),Qa(e,s)&&(h<u||h===u&&(e.x>i.x||e.x===i.x&&IA(i,e)))&&(i=e,u=h)),e=e.next;while(e!==a);return i}function IA(s,t){return $e(s.prev,s,t.prev)<0&&$e(t.next,s,s.next)<0}function LA(s,t,e,n){let i=s;do i.z===0&&(i.z=Lf(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,NA(i)}function NA(s){let t,e,n,i,r,o,a,l,c=1;do{for(e=s,s=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,a--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;e=n}r.nextZ=null,c*=2}while(o>1);return s}function Lf(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function DA(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function So(s,t,e,n,i,r,o,a){return(i-o)*(t-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(i-o)*(n-a)}function UA(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!FA(s,t)&&(Qa(s,t)&&Qa(t,s)&&OA(s,t)&&($e(s.prev,s,t.prev)||$e(s,t.prev,t))||Ku(s,t)&&$e(s.prev,s,s.next)>0&&$e(t.prev,t,t.next)>0)}function $e(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function Ku(s,t){return s.x===t.x&&s.y===t.y}function Wx(s,t,e,n){let i=yc($e(s,t,e)),r=yc($e(s,t,n)),o=yc($e(e,n,s)),a=yc($e(e,n,t));return!!(i!==r&&o!==a||i===0&&vc(s,e,t)||r===0&&vc(s,n,t)||o===0&&vc(e,s,n)||a===0&&vc(e,t,n))}function vc(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function yc(s){return s>0?1:s<0?-1:0}function FA(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&Wx(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function Qa(s,t){return $e(s.prev,s,s.next)<0?$e(s,t,s.next)>=0&&$e(s,s.prev,t)>=0:$e(s,t,s.prev)<0||$e(s,s.next,t)<0}function OA(s,t){let e=s,n=!1,i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function Xx(s,t){let e=new Nf(s.i,s.x,s.y),n=new Nf(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function j0(s,t,e,n){let i=new Nf(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function tl(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Nf(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function BA(s,t,e,n){let i=0;for(let r=t,o=e-n;r<e;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}var Gi=class s{static area(t){let e=t.length,n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return s.area(t)<0}static triangulateShape(t,e){let n=[],i=[],r=[];Q0(t),t_(n,t);let o=t.length;e.forEach(Q0);for(let l=0;l<e.length;l++)i.push(o),o+=e[l].length,t_(n,e[l]);let a=SA.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Q0(s){let t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function t_(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}var hu=class s extends de{constructor(t=new hs([new _t(.5,.5),new _t(-.5,.5),new _t(-.5,-.5),new _t(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,i=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new qt(i,3)),this.setAttribute("uv",new qt(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:f-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,v=e.UVGenerator!==void 0?e.UVGenerator:zA,x,y=!1,L,b,C,P;p&&(x=p.getSpacedPoints(u),y=!0,d=!1,L=p.computeFrenetFrames(u,!1),b=new U,C=new U,P=new U),d||(g=0,f=0,m=0,_=0);let w=a.extractPoints(c),S=w.shape,D=w.holes;if(!Gi.isClockWise(S)){S=S.reverse();for(let ot=0,mt=D.length;ot<mt;ot++){let st=D[ot];Gi.isClockWise(st)&&(D[ot]=st.reverse())}}let R=Gi.triangulateShape(S,D),V=S;for(let ot=0,mt=D.length;ot<mt;ot++){let st=D[ot];S=S.concat(st)}function X(ot,mt,st){return mt||console.error("THREE.ExtrudeGeometry: vec does not exist"),ot.clone().addScaledVector(mt,st)}let nt=S.length,tt=R.length;function j(ot,mt,st){let Et,ft,Ct,Gt=ot.x-mt.x,N=ot.y-mt.y,A=st.x-ot.x,B=st.y-ot.y,O=Gt*Gt+N*N,Z=Gt*B-N*A;if(Math.abs(Z)>Number.EPSILON){let Y=Math.sqrt(O),it=Math.sqrt(A*A+B*B),xt=mt.x-N/Y,vt=mt.y+Gt/Y,Zt=st.x-B/it,bt=st.y+A/it,Ft=((Zt-xt)*B-(bt-vt)*A)/(Gt*B-N*A);Et=xt+Gt*Ft-ot.x,ft=vt+N*Ft-ot.y;let ie=Et*Et+ft*ft;if(ie<=2)return new _t(Et,ft);Ct=Math.sqrt(ie/2)}else{let Y=!1;Gt>Number.EPSILON?A>Number.EPSILON&&(Y=!0):Gt<-Number.EPSILON?A<-Number.EPSILON&&(Y=!0):Math.sign(N)===Math.sign(B)&&(Y=!0),Y?(Et=-N,ft=Gt,Ct=Math.sqrt(O)):(Et=Gt,ft=N,Ct=Math.sqrt(O/2))}return new _t(Et/Ct,ft/Ct)}let rt=[];for(let ot=0,mt=V.length,st=mt-1,Et=ot+1;ot<mt;ot++,st++,Et++)st===mt&&(st=0),Et===mt&&(Et=0),rt[ot]=j(V[ot],V[st],V[Et]);let at=[],Mt,Tt=rt.concat();for(let ot=0,mt=D.length;ot<mt;ot++){let st=D[ot];Mt=[];for(let Et=0,ft=st.length,Ct=ft-1,Gt=Et+1;Et<ft;Et++,Ct++,Gt++)Ct===ft&&(Ct=0),Gt===ft&&(Gt=0),Mt[Et]=j(st[Et],st[Ct],st[Gt]);at.push(Mt),Tt=Tt.concat(Mt)}for(let ot=0;ot<g;ot++){let mt=ot/g,st=f*Math.cos(mt*Math.PI/2),Et=m*Math.sin(mt*Math.PI/2)+_;for(let ft=0,Ct=V.length;ft<Ct;ft++){let Gt=X(V[ft],rt[ft],Et);ct(Gt.x,Gt.y,-st)}for(let ft=0,Ct=D.length;ft<Ct;ft++){let Gt=D[ft];Mt=at[ft];for(let N=0,A=Gt.length;N<A;N++){let B=X(Gt[N],Mt[N],Et);ct(B.x,B.y,-st)}}}let yt=m+_;for(let ot=0;ot<nt;ot++){let mt=d?X(S[ot],Tt[ot],yt):S[ot];y?(C.copy(L.normals[0]).multiplyScalar(mt.x),b.copy(L.binormals[0]).multiplyScalar(mt.y),P.copy(x[0]).add(C).add(b),ct(P.x,P.y,P.z)):ct(mt.x,mt.y,0)}for(let ot=1;ot<=u;ot++)for(let mt=0;mt<nt;mt++){let st=d?X(S[mt],Tt[mt],yt):S[mt];y?(C.copy(L.normals[ot]).multiplyScalar(st.x),b.copy(L.binormals[ot]).multiplyScalar(st.y),P.copy(x[ot]).add(C).add(b),ct(P.x,P.y,P.z)):ct(st.x,st.y,h/u*ot)}for(let ot=g-1;ot>=0;ot--){let mt=ot/g,st=f*Math.cos(mt*Math.PI/2),Et=m*Math.sin(mt*Math.PI/2)+_;for(let ft=0,Ct=V.length;ft<Ct;ft++){let Gt=X(V[ft],rt[ft],Et);ct(Gt.x,Gt.y,h+st)}for(let ft=0,Ct=D.length;ft<Ct;ft++){let Gt=D[ft];Mt=at[ft];for(let N=0,A=Gt.length;N<A;N++){let B=X(Gt[N],Mt[N],Et);y?ct(B.x,B.y+x[u-1].y,x[u-1].x+st):ct(B.x,B.y,h+st)}}}et(),ut();function et(){let ot=i.length/3;if(d){let mt=0,st=nt*mt;for(let Et=0;Et<tt;Et++){let ft=R[Et];zt(ft[2]+st,ft[1]+st,ft[0]+st)}mt=u+g*2,st=nt*mt;for(let Et=0;Et<tt;Et++){let ft=R[Et];zt(ft[0]+st,ft[1]+st,ft[2]+st)}}else{for(let mt=0;mt<tt;mt++){let st=R[mt];zt(st[2],st[1],st[0])}for(let mt=0;mt<tt;mt++){let st=R[mt];zt(st[0]+nt*u,st[1]+nt*u,st[2]+nt*u)}}n.addGroup(ot,i.length/3-ot,0)}function ut(){let ot=i.length/3,mt=0;pt(V,mt),mt+=V.length;for(let st=0,Et=D.length;st<Et;st++){let ft=D[st];pt(ft,mt),mt+=ft.length}n.addGroup(ot,i.length/3-ot,1)}function pt(ot,mt){let st=ot.length;for(;--st>=0;){let Et=st,ft=st-1;ft<0&&(ft=ot.length-1);for(let Ct=0,Gt=u+g*2;Ct<Gt;Ct++){let N=nt*Ct,A=nt*(Ct+1),B=mt+Et+N,O=mt+ft+N,Z=mt+ft+A,Y=mt+Et+A;$t(B,O,Z,Y)}}}function ct(ot,mt,st){l.push(ot),l.push(mt),l.push(st)}function zt(ot,mt,st){H(ot),H(mt),H(st);let Et=i.length/3,ft=v.generateTopUV(n,i,Et-3,Et-2,Et-1);jt(ft[0]),jt(ft[1]),jt(ft[2])}function $t(ot,mt,st,Et){H(ot),H(mt),H(Et),H(mt),H(st),H(Et);let ft=i.length/3,Ct=v.generateSideWallUV(n,i,ft-6,ft-3,ft-2,ft-1);jt(Ct[0]),jt(Ct[1]),jt(Ct[3]),jt(Ct[1]),jt(Ct[2]),jt(Ct[3])}function H(ot){i.push(l[ot*3+0]),i.push(l[ot*3+1]),i.push(l[ot*3+2])}function jt(ot){r.push(ot.x),r.push(ot.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return kA(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new su[i.type]().fromJSON(i)),new s(n,t.options)}},zA={generateTopUV:function(s,t,e,n,i){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[i*3],u=t[i*3+1];return[new _t(r,o),new _t(a,l),new _t(c,u)]},generateSideWallUV:function(s,t,e,n,i,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],u=t[n*3+1],h=t[n*3+2],d=t[i*3],f=t[i*3+1],m=t[i*3+2],_=t[r*3],g=t[r*3+1],p=t[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new _t(o,1-l),new _t(c,1-h),new _t(d,1-m),new _t(_,1-p)]:[new _t(a,1-l),new _t(u,1-h),new _t(f,1-m),new _t(g,1-p)]}};function kA(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var du=class s extends Os{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}},el=class s extends Os{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}},fu=class s extends de{constructor(t=.5,e=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);let a=[],l=[],c=[],u=[],h=t,d=(e-t)/i,f=new U,m=new _t;for(let _=0;_<=i;_++){for(let g=0;g<=n;g++){let p=r+g/n*o;f.x=h*Math.cos(p),f.y=h*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),m.x=(f.x/e+1)/2,m.y=(f.y/e+1)/2,u.push(m.x,m.y)}h+=d}for(let _=0;_<i;_++){let g=_*(n+1);for(let p=0;p<n;p++){let v=p+g,x=v,y=v+n+1,L=v+n+2,b=v+1;a.push(x,y,b),a.push(y,L,b)}}this.setIndex(a),this.setAttribute("position",new qt(l,3)),this.setAttribute("normal",new qt(c,3)),this.setAttribute("uv",new qt(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},pu=class s extends de{constructor(t=new hs([new _t(0,.5),new _t(-.5,-.5),new _t(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],i=[],r=[],o=[],a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let u=0;u<t.length;u++)c(t[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new qt(i,3)),this.setAttribute("normal",new qt(r,3)),this.setAttribute("uv",new qt(o,2));function c(u){let h=i.length/3,d=u.extractPoints(e),f=d.shape,m=d.holes;Gi.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,p=m.length;g<p;g++){let v=m[g];Gi.isClockWise(v)===!0&&(m[g]=v.reverse())}let _=Gi.triangulateShape(f,m);for(let g=0,p=m.length;g<p;g++){let v=m[g];f=f.concat(v)}for(let g=0,p=f.length;g<p;g++){let v=f[g];i.push(v.x,v.y,0),r.push(0,0,1),o.push(v.x,v.y)}for(let g=0,p=_.length;g<p;g++){let v=_[g],x=v[0]+h,y=v[1]+h,L=v[2]+h;n.push(x,y,L),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return VA(e,t)}static fromJSON(t,e){let n=[];for(let i=0,r=t.shapes.length;i<r;i++){let o=e[t.shapes[i]];n.push(o)}return new s(n,t.curveSegments)}};function VA(s,t){if(t.shapes=[],Array.isArray(s))for(let e=0,n=s.length;e<n;e++){let i=s[e];t.shapes.push(i.uuid)}else t.shapes.push(s.uuid);return t}var nl=class s extends de{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,u=[],h=new U,d=new U,f=[],m=[],_=[],g=[];for(let p=0;p<=n;p++){let v=[],x=p/n,y=0;p===0&&o===0?y=.5/e:p===n&&l===Math.PI&&(y=-.5/e);for(let L=0;L<=e;L++){let b=L/e;h.x=-t*Math.cos(i+b*r)*Math.sin(o+x*a),h.y=t*Math.cos(o+x*a),h.z=t*Math.sin(i+b*r)*Math.sin(o+x*a),m.push(h.x,h.y,h.z),d.copy(h).normalize(),_.push(d.x,d.y,d.z),g.push(b+y,1-x),v.push(c++)}u.push(v)}for(let p=0;p<n;p++)for(let v=0;v<e;v++){let x=u[p][v+1],y=u[p][v],L=u[p+1][v],b=u[p+1][v+1];(p!==0||o>0)&&f.push(x,y,b),(p!==n-1||l<Math.PI)&&f.push(y,L,b)}this.setIndex(f),this.setAttribute("position",new qt(m,3)),this.setAttribute("normal",new qt(_,3)),this.setAttribute("uv",new qt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},mu=class s extends Os{constructor(t=1,e=0){let n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,i,t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}},gu=class s extends de{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let o=[],a=[],l=[],c=[],u=new U,h=new U,d=new U;for(let f=0;f<=n;f++)for(let m=0;m<=i;m++){let _=m/i*r,g=f/n*Math.PI*2;h.x=(t+e*Math.cos(g))*Math.cos(_),h.y=(t+e*Math.cos(g))*Math.sin(_),h.z=e*Math.sin(g),a.push(h.x,h.y,h.z),u.x=t*Math.cos(_),u.y=t*Math.sin(_),d.subVectors(h,u).normalize(),l.push(d.x,d.y,d.z),c.push(m/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let m=1;m<=i;m++){let _=(i+1)*f+m-1,g=(i+1)*(f-1)+m-1,p=(i+1)*(f-1)+m,v=(i+1)*f+m;o.push(_,g,v),o.push(g,p,v)}this.setIndex(o),this.setAttribute("position",new qt(a,3)),this.setAttribute("normal",new qt(l,3)),this.setAttribute("uv",new qt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}},_u=class s extends de{constructor(t=1,e=.4,n=64,i=8,r=2,o=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:t,tube:e,tubularSegments:n,radialSegments:i,p:r,q:o},n=Math.floor(n),i=Math.floor(i);let a=[],l=[],c=[],u=[],h=new U,d=new U,f=new U,m=new U,_=new U,g=new U,p=new U;for(let x=0;x<=n;++x){let y=x/n*r*Math.PI*2;v(y,r,o,t,f),v(y+.01,r,o,t,m),g.subVectors(m,f),p.addVectors(m,f),_.crossVectors(g,p),p.crossVectors(_,g),_.normalize(),p.normalize();for(let L=0;L<=i;++L){let b=L/i*Math.PI*2,C=-e*Math.cos(b),P=e*Math.sin(b);h.x=f.x+(C*p.x+P*_.x),h.y=f.y+(C*p.y+P*_.y),h.z=f.z+(C*p.z+P*_.z),l.push(h.x,h.y,h.z),d.subVectors(h,f).normalize(),c.push(d.x,d.y,d.z),u.push(x/n),u.push(L/i)}}for(let x=1;x<=n;x++)for(let y=1;y<=i;y++){let L=(i+1)*(x-1)+(y-1),b=(i+1)*x+(y-1),C=(i+1)*x+y,P=(i+1)*(x-1)+y;a.push(L,b,P),a.push(b,C,P)}this.setIndex(a),this.setAttribute("position",new qt(l,3)),this.setAttribute("normal",new qt(c,3)),this.setAttribute("uv",new qt(u,2));function v(x,y,L,b,C){let P=Math.cos(x),w=Math.sin(x),S=L/y*x,D=Math.cos(S);C.x=b*(2+D)*.5*P,C.y=b*(2+D)*w*.5,C.z=b*Math.sin(S)*.5}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.tubularSegments,t.radialSegments,t.p,t.q)}},xu=class s extends de{constructor(t=new Za(new U(-1,-1,0),new U(-1,1,0),new U(1,1,0)),e=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new U,l=new U,c=new _t,u=new U,h=[],d=[],f=[],m=[];_(),this.setIndex(m),this.setAttribute("position",new qt(h,3)),this.setAttribute("normal",new qt(d,3)),this.setAttribute("uv",new qt(f,2));function _(){for(let x=0;x<e;x++)g(x);g(r===!1?e:0),v(),p()}function g(x){u=t.getPointAt(x/e,u);let y=o.normals[x],L=o.binormals[x];for(let b=0;b<=i;b++){let C=b/i*Math.PI*2,P=Math.sin(C),w=-Math.cos(C);l.x=w*y.x+P*L.x,l.y=w*y.y+P*L.y,l.z=w*y.z+P*L.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=u.x+n*l.x,a.y=u.y+n*l.y,a.z=u.z+n*l.z,h.push(a.x,a.y,a.z)}}function p(){for(let x=1;x<=e;x++)for(let y=1;y<=i;y++){let L=(i+1)*(x-1)+(y-1),b=(i+1)*x+(y-1),C=(i+1)*x+y,P=(i+1)*(x-1)+y;m.push(L,b,P),m.push(b,C,P)}}function v(){for(let x=0;x<=e;x++)for(let y=0;y<=i;y++)c.x=x/e,c.y=y/i,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new s(new su[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}},vu=class extends de{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){let e=[],n=new Set,i=new U,r=new U;if(t.index!==null){let o=t.attributes.position,a=t.index,l=t.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,u=l.length;c<u;++c){let h=l[c],d=h.start,f=h.count;for(let m=d,_=d+f;m<_;m+=3)for(let g=0;g<3;g++){let p=a.getX(m+g),v=a.getX(m+(g+1)%3);i.fromBufferAttribute(o,p),r.fromBufferAttribute(o,v),e_(i,r,n)===!0&&(e.push(i.x,i.y,i.z),e.push(r.x,r.y,r.z))}}}else{let o=t.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){let u=3*a+c,h=3*a+(c+1)%3;i.fromBufferAttribute(o,u),r.fromBufferAttribute(o,h),e_(i,r,n)===!0&&(e.push(i.x,i.y,i.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new qt(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};function e_(s,t,e){let n=`${s.x},${s.y},${s.z}-${t.x},${t.y},${t.z}`,i=`${t.x},${t.y},${t.z}-${s.x},${s.y},${s.z}`;return e.has(n)===!0||e.has(i)===!0?!1:(e.add(n),e.add(i),!0)}var n_=Object.freeze({__proto__:null,BoxGeometry:_r,CapsuleGeometry:ou,CircleGeometry:au,ConeGeometry:lu,CylinderGeometry:Fo,DodecahedronGeometry:cu,EdgesGeometry:uu,ExtrudeGeometry:hu,IcosahedronGeometry:du,LatheGeometry:Ka,OctahedronGeometry:el,PlaneGeometry:Io,PolyhedronGeometry:Os,RingGeometry:fu,ShapeGeometry:pu,SphereGeometry:nl,TetrahedronGeometry:mu,TorusGeometry:gu,TorusKnotGeometry:_u,TubeGeometry:xu,WireframeGeometry:vu}),yu=class extends En{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Ht(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}},Mu=class extends oi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},il=class extends En{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ht(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zs,this.normalScale=new _t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ri,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Su=class extends il{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new _t(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return je(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ht(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ht(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ht(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}},bu=class extends En{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ht(16777215),this.specular=new Ht(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zs,this.normalScale=new _t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ri,this.combine=ul,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},wu=class extends En{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Ht(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zs,this.normalScale=new _t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Eu=class extends En{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zs,this.normalScale=new _t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}},Au=class extends En{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zs,this.normalScale=new _t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ri,this.combine=ul,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Tu=class extends En{constructor(t){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new Ht(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zs,this.normalScale=new _t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={MATCAP:""},this.color.copy(t.color),this.matcap=t.matcap,this.map=t.map,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.flatShading=t.flatShading,this.fog=t.fog,this}},Cu=class extends Cn{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}};function dr(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function qx(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Yx(s){function t(i,r){return s[i]-s[r]}let e=s.length,n=new Array(e);for(let i=0;i!==e;++i)n[i]=i;return n.sort(t),n}function Df(s,t,e){let n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){let a=e[r]*t;for(let l=0;l!==t;++l)i[o++]=s[a+l]}return i}function kp(s,t,e,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(t.push(r.time),e.push.apply(e,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(t.push(r.time),o.toArray(e,e.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(t.push(r.time),e.push(o)),r=s[i++];while(r!==void 0)}function HA(s,t,e,n,i=30){let r=s.clone();r.name=t;let o=[];for(let l=0;l<r.tracks.length;++l){let c=r.tracks[l],u=c.getValueSize(),h=[],d=[];for(let f=0;f<c.times.length;++f){let m=c.times[f]*i;if(!(m<e||m>=n)){h.push(c.times[f]);for(let _=0;_<u;++_)d.push(c.values[f*u+_])}}h.length!==0&&(c.times=dr(h,c.times.constructor),c.values=dr(d,c.values.constructor),o.push(c))}r.tracks=o;let a=1/0;for(let l=0;l<r.tracks.length;++l)a>r.tracks[l].times[0]&&(a=r.tracks[l].times[0]);for(let l=0;l<r.tracks.length;++l)r.tracks[l].shift(-1*a);return r.resetDuration(),r}function GA(s,t=0,e=s,n=30){n<=0&&(n=30);let i=e.tracks.length,r=t/n;for(let o=0;o<i;++o){let a=e.tracks[o],l=a.ValueTypeName;if(l==="bool"||l==="string")continue;let c=s.tracks.find(function(p){return p.name===a.name&&p.ValueTypeName===l});if(c===void 0)continue;let u=0,h=a.getValueSize();a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=h/3);let d=0,f=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(d=f/3);let m=a.times.length-1,_;if(r<=a.times[0]){let p=u,v=h-u;_=a.values.slice(p,v)}else if(r>=a.times[m]){let p=m*h+u,v=p+h-u;_=a.values.slice(p,v)}else{let p=a.createInterpolant(),v=u,x=h-u;p.evaluate(r),_=p.resultBuffer.slice(v,x)}l==="quaternion"&&new Dn().fromArray(_).normalize().conjugate().toArray(_);let g=c.times.length;for(let p=0;p<g;++p){let v=p*f+d;if(l==="quaternion")Dn.multiplyQuaternionsFlat(c.values,v,_,0,c.values,v);else{let x=f-d*2;for(let y=0;y<x;++y)c.values[v+y]-=_[y]}}}return s.blendMode=Up,s}var WA={convertArray:dr,isTypedArray:qx,getKeyframeOrder:Yx,sortedArray:Df,flattenJSON:kp,subclip:HA,makeClipAdditive:GA},br=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];t:{e:{let o;n:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break e}o=e.length;break n}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break e}o=n,n=0;break n}break t}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ru=class extends br{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ur,endingEnd:ur}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,o=t+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case hr:r=t,a=2*e-n;break;case Ra:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case hr:o=t,l=2*n-e;break;case Ra:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}let c=(n-e)*.5,u=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-e)/(i-e),_=m*m,g=_*m,p=-d*g+2*d*_-d*m,v=(1+d)*g+(-1.5-2*d)*_+(-.5+d)*m+1,x=(-1-f)*g+(1.5+f)*_+.5*m,y=f*g-f*_;for(let L=0;L!==a;++L)r[L]=p*o[u+L]+v*o[c+L]+x*o[l+L]+y*o[h+L];return r}},sl=class extends br{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=(n-e)/(i-e),h=1-u;for(let d=0;d!==a;++d)r[d]=o[c+d]*h+o[l+d]*u;return r}},Pu=class extends br{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},li=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=dr(e,this.TimeBufferType),this.values=dr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:dr(t.times,Array),values:dr(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Pu(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new sl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ru(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Ta:e=this.InterpolantFactoryMethodDiscrete;break;case Ca:e=this.InterpolantFactoryMethodLinear;break;case Nc:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ta;case this.InterpolantFactoryMethodLinear:return Ca;case this.InterpolantFactoryMethodSmooth:return Nc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&qx(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Nc,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],u=t[a+1];if(c!==u&&(a!==1||c!==t[0]))if(i)l=!0;else{let h=a*n,d=h-n,f=h+n;for(let m=0;m!==n;++m){let _=e[h+m];if(_!==e[d+m]||_!==e[f+m]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let h=a*n,d=o*n;for(let f=0;f!==n;++f)e[d+f]=e[h+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};li.prototype.TimeBufferType=Float32Array;li.prototype.ValueBufferType=Float32Array;li.prototype.DefaultInterpolation=Ca;var ms=class extends li{};ms.prototype.ValueTypeName="bool";ms.prototype.ValueBufferType=Array;ms.prototype.DefaultInterpolation=Ta;ms.prototype.InterpolantFactoryMethodLinear=void 0;ms.prototype.InterpolantFactoryMethodSmooth=void 0;var rl=class extends li{};rl.prototype.ValueTypeName="color";var wr=class extends li{};wr.prototype.ValueTypeName="number";var Iu=class extends br{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e),c=t*a;for(let u=c+a;c!==u;c+=4)Dn.slerpFlat(r,0,o,c-a,o,c,l);return r}},Bs=class extends li{InterpolantFactoryMethodLinear(t){return new Iu(this.times,this.values,this.getValueSize(),t)}};Bs.prototype.ValueTypeName="quaternion";Bs.prototype.DefaultInterpolation=Ca;Bs.prototype.InterpolantFactoryMethodSmooth=void 0;var gs=class extends li{};gs.prototype.ValueTypeName="string";gs.prototype.ValueBufferType=Array;gs.prototype.DefaultInterpolation=Ta;gs.prototype.InterpolantFactoryMethodLinear=void 0;gs.prototype.InterpolantFactoryMethodSmooth=void 0;var Er=class extends li{};Er.prototype.ValueTypeName="vector";var Ar=class{constructor(t="",e=-1,n=[],i=$u){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=ii(),this.duration<0&&this.resetDuration()}static parse(t){let e=[],n=t.tracks,i=1/(t.fps||1);for(let o=0,a=n.length;o!==a;++o)e.push(qA(n[o]).scale(i));let r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r}static toJSON(t){let e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let r=0,o=n.length;r!==o;++r)e.push(li.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(t,e,n,i){let r=e.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let u=Yx(l);l=Df(l,1,u),c=Df(c,1,u),!i&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new wr(".morphTargetInfluences["+e[a].name+"]",l,c).scale(1/n))}return new this(t,-1,o)}static findByName(t,e){let n=t;if(!Array.isArray(t)){let i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null}static CreateClipsFromMorphTargetSequences(t,e,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=t.length;a<l;a++){let c=t[a],u=c.name.match(r);if(u&&u.length>1){let h=u[1],d=i[h];d||(i[h]=d=[]),d.push(c)}}let o=[];for(let a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],e,n));return o}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(h,d,f,m,_){if(f.length!==0){let g=[],p=[];kp(f,g,p,m),g.length!==0&&_.push(new h(d,g,p))}},i=[],r=t.name||"default",o=t.fps||30,a=t.blendMode,l=t.length||-1,c=t.hierarchy||[];for(let h=0;h<c.length;h++){let d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let f={},m;for(m=0;m<d.length;m++)if(d[m].morphTargets)for(let _=0;_<d[m].morphTargets.length;_++)f[d[m].morphTargets[_]]=-1;for(let _ in f){let g=[],p=[];for(let v=0;v!==d[m].morphTargets.length;++v){let x=d[m];g.push(x.time),p.push(x.morphTarget===_?1:0)}i.push(new wr(".morphTargetInfluence["+_+"]",g,p))}l=f.length*o}else{let f=".bones["+e[h].name+"]";n(Er,f+".position",d,"pos",i),n(Bs,f+".quaternion",d,"rot",i),n(Er,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,l,i,a)}resetDuration(){let t=this.tracks,e=0;for(let n=0,i=t.length;n!==i;++n){let r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){let t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function XA(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return wr;case"vector":case"vector2":case"vector3":case"vector4":return Er;case"color":return rl;case"quaternion":return Bs;case"bool":case"boolean":return ms;case"string":return gs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function qA(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let t=XA(s.type);if(s.times===void 0){let e=[],n=[];kp(s.keys,e,n,"value"),s.times=e,s.values=n}return t.parse!==void 0?t.parse(s):new t(s.name,s.times,s.values,s.interpolation)}var ls={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}},ol=class{constructor(t,e,n){let i=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){a++,r===!1&&i.onStart!==void 0&&i.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){let f=c[h],m=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return m}return null}}},$x=new ol,Un=class{constructor(t){this.manager=t!==void 0?t:$x,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Un.DEFAULT_MATERIAL_NAME="__DEFAULT";var is={},Uf=class extends Error{constructor(t,e){super(t),this.response=e}},Ii=class extends Un{constructor(t){super(t)}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=ls.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(is[t]!==void 0){is[t].push({onLoad:e,onProgress:n,onError:i});return}is[t]=[],is[t].push({onLoad:e,onProgress:n,onError:i});let o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let u=is[t],h=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,m=f!==0,_=0,g=new ReadableStream({start(p){v();function v(){h.read().then(({done:x,value:y})=>{if(x)p.close();else{_+=y.byteLength;let L=new ProgressEvent("progress",{lengthComputable:m,loaded:_,total:f});for(let b=0,C=u.length;b<C;b++){let P=u[b];P.onProgress&&P.onProgress(L)}p.enqueue(y),v()}})}}});return new Response(g)}else throw new Uf(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{let h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(m=>f.decode(m))}}}).then(c=>{ls.add(t,c);let u=is[t];delete is[t];for(let h=0,d=u.length;h<d;h++){let f=u[h];f.onLoad&&f.onLoad(c)}}).catch(c=>{let u=is[t];if(u===void 0)throw this.manager.itemError(t),c;delete is[t];for(let h=0,d=u.length;h<d;h++){let f=u[h];f.onError&&f.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}},Ff=class extends Un{constructor(t){super(t)}load(t,e,n,i){let r=this,o=new Ii(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(a){try{e(r.parse(JSON.parse(a)))}catch(l){i?i(l):console.error(l),r.manager.itemError(t)}},n,i)}parse(t){let e=[];for(let n=0;n<t.length;n++){let i=Ar.parse(t[n]);e.push(i)}return e}},Of=class extends Un{constructor(t){super(t)}load(t,e,n,i){let r=this,o=[],a=new Do,l=new Ii(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(r.withCredentials);let c=0;function u(h){l.load(t[h],function(d){let f=r.parse(d,!0);o[h]={width:f.width,height:f.height,format:f.format,mipmaps:f.mipmaps},c+=1,c===6&&(f.mipmapCount===1&&(a.minFilter=an),a.image=o,a.format=f.format,a.needsUpdate=!0,e&&e(a))},n,i)}if(Array.isArray(t))for(let h=0,d=t.length;h<d;++h)u(h);else l.load(t,function(h){let d=r.parse(h,!0);if(d.isCubemap){let f=d.mipmaps.length/d.mipmapCount;for(let m=0;m<f;m++){o[m]={mipmaps:[]};for(let _=0;_<d.mipmapCount;_++)o[m].mipmaps.push(d.mipmaps[m*d.mipmapCount+_]),o[m].format=d.format,o[m].width=d.width,o[m].height=d.height}a.image=o}else a.image.width=d.width,a.image.height=d.height,a.mipmaps=d.mipmaps;d.mipmapCount===1&&(a.minFilter=an),a.format=d.format,a.needsUpdate=!0,e&&e(a)},n,i);return a}},Tr=class extends Un{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,o=ls.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;let a=Ua("img");function l(){u(),ls.add(t,this),e&&e(this),r.manager.itemEnd(t)}function c(h){u(),i&&i(h),r.manager.itemError(t),r.manager.itemEnd(t)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}},Bf=class extends Un{constructor(t){super(t)}load(t,e,n,i){let r=new xr;r.colorSpace=mi;let o=new Tr(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let a=0;function l(c){o.load(t[c],function(u){r.images[c]=u,a++,a===6&&(r.needsUpdate=!0,e&&e(r))},void 0,i)}for(let c=0;c<t.length;++c)l(c);return r}},zf=class extends Un{constructor(t){super(t)}load(t,e,n,i){let r=this,o=new Hi,a=new Ii(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(t,function(l){let c;try{c=r.parse(l)}catch(u){if(i!==void 0)i(u);else{console.error(u);return}}c.image!==void 0?o.image=c.image:c.data!==void 0&&(o.image.width=c.width,o.image.height=c.height,o.image.data=c.data),o.wrapS=c.wrapS!==void 0?c.wrapS:gi,o.wrapT=c.wrapT!==void 0?c.wrapT:gi,o.magFilter=c.magFilter!==void 0?c.magFilter:an,o.minFilter=c.minFilter!==void 0?c.minFilter:an,o.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(o.colorSpace=c.colorSpace),c.flipY!==void 0&&(o.flipY=c.flipY),c.format!==void 0&&(o.format=c.format),c.type!==void 0&&(o.type=c.type),c.mipmaps!==void 0&&(o.mipmaps=c.mipmaps,o.minFilter=ki),c.mipmapCount===1&&(o.minFilter=an),c.generateMipmaps!==void 0&&(o.generateMipmaps=c.generateMipmaps),o.needsUpdate=!0,e&&e(o,c)},n,i),o}},kf=class extends Un{constructor(t){super(t)}load(t,e,n,i){let r=new ln,o=new Tr(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}},qi=class extends Ae{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ht(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}},Lu=class extends qi{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ae.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ht(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},wd=new ee,i_=new U,s_=new U,al=class{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new _t(512,512),this.map=null,this.mapPass=null,this.matrix=new ee,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vr,this._frameExtents=new _t(1,1),this._viewportCount=1,this._viewports=[new Ie(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;i_.setFromMatrixPosition(t.matrixWorld),e.position.copy(i_),s_.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(s_),e.updateMatrixWorld(),wd.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wd),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(wd)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Vf=class extends al{constructor(){super(new dn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,n=Ao*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},Nu=class extends qi{constructor(t,e,n=0,i=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ae.DEFAULT_UP),this.updateMatrix(),this.target=new Ae,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Vf}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},r_=new ee,pa=new U,Ed=new U,Hf=class extends al{constructor(){super(new dn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new _t(4,2),this._viewportCount=6,this._viewports=[new Ie(2,1,1,1),new Ie(0,1,1,1),new Ie(3,1,1,1),new Ie(1,1,1,1),new Ie(3,0,1,1),new Ie(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),pa.setFromMatrixPosition(t.matrixWorld),n.position.copy(pa),Ed.copy(n.position),Ed.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Ed),n.updateMatrixWorld(),i.makeTranslation(-pa.x,-pa.y,-pa.z),r_.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(r_)}},Du=class extends qi{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Hf}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Gf=class extends al{constructor(){super(new Lo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Uu=class extends qi{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ae.DEFAULT_UP),this.updateMatrix(),this.target=new Ae,this.shadow=new Gf}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},Fu=class extends qi{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}},Ou=class extends qi{constructor(t,e,n=10,i=10){super(t,e),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(t){this.intensity=t/(this.width*this.height*Math.PI)}copy(t){return super.copy(t),this.width=t.width,this.height=t.height,this}toJSON(t){let e=super.toJSON(t);return e.object.width=this.width,e.object.height=this.height,e}},Bu=class{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let t=0;t<9;t++)this.coefficients.push(new U)}set(t){for(let e=0;e<9;e++)this.coefficients[e].copy(t[e]);return this}zero(){for(let t=0;t<9;t++)this.coefficients[t].set(0,0,0);return this}getAt(t,e){let n=t.x,i=t.y,r=t.z,o=this.coefficients;return e.copy(o[0]).multiplyScalar(.282095),e.addScaledVector(o[1],.488603*i),e.addScaledVector(o[2],.488603*r),e.addScaledVector(o[3],.488603*n),e.addScaledVector(o[4],1.092548*(n*i)),e.addScaledVector(o[5],1.092548*(i*r)),e.addScaledVector(o[6],.315392*(3*r*r-1)),e.addScaledVector(o[7],1.092548*(n*r)),e.addScaledVector(o[8],.546274*(n*n-i*i)),e}getIrradianceAt(t,e){let n=t.x,i=t.y,r=t.z,o=this.coefficients;return e.copy(o[0]).multiplyScalar(.886227),e.addScaledVector(o[1],2*.511664*i),e.addScaledVector(o[2],2*.511664*r),e.addScaledVector(o[3],2*.511664*n),e.addScaledVector(o[4],2*.429043*n*i),e.addScaledVector(o[5],2*.429043*i*r),e.addScaledVector(o[6],.743125*r*r-.247708),e.addScaledVector(o[7],2*.429043*n*r),e.addScaledVector(o[8],.429043*(n*n-i*i)),e}add(t){for(let e=0;e<9;e++)this.coefficients[e].add(t.coefficients[e]);return this}addScaledSH(t,e){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(t.coefficients[n],e);return this}scale(t){for(let e=0;e<9;e++)this.coefficients[e].multiplyScalar(t);return this}lerp(t,e){for(let n=0;n<9;n++)this.coefficients[n].lerp(t.coefficients[n],e);return this}equals(t){for(let e=0;e<9;e++)if(!this.coefficients[e].equals(t.coefficients[e]))return!1;return!0}copy(t){return this.set(t.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(t,e=0){let n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(t,e+i*3);return this}toArray(t=[],e=0){let n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(t,e+i*3);return t}static getBasisAt(t,e){let n=t.x,i=t.y,r=t.z;e[0]=.282095,e[1]=.488603*i,e[2]=.488603*r,e[3]=.488603*n,e[4]=1.092548*n*i,e[5]=1.092548*i*r,e[6]=.315392*(3*r*r-1),e[7]=1.092548*n*r,e[8]=.546274*(n*n-i*i)}},zu=class extends qi{constructor(t=new Bu,e=1){super(void 0,e),this.isLightProbe=!0,this.sh=t}copy(t){return super.copy(t),this.sh.copy(t.sh),this}fromJSON(t){return this.intensity=t.intensity,this.sh.fromArray(t.sh),this}toJSON(t){let e=super.toJSON(t);return e.object.sh=this.sh.toArray(),e}},ku=class s extends Un{constructor(t){super(t),this.textures={}}load(t,e,n,i){let r=this,o=new Ii(r.manager);o.setPath(r.path),o.setRequestHeader(r.requestHeader),o.setWithCredentials(r.withCredentials),o.load(t,function(a){try{e(r.parse(JSON.parse(a)))}catch(l){i?i(l):console.error(l),r.manager.itemError(t)}},n,i)}parse(t){let e=this.textures;function n(r){return e[r]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",r),e[r]}let i=s.createMaterialFromType(t.type);if(t.uuid!==void 0&&(i.uuid=t.uuid),t.name!==void 0&&(i.name=t.name),t.color!==void 0&&i.color!==void 0&&i.color.setHex(t.color),t.roughness!==void 0&&(i.roughness=t.roughness),t.metalness!==void 0&&(i.metalness=t.metalness),t.sheen!==void 0&&(i.sheen=t.sheen),t.sheenColor!==void 0&&(i.sheenColor=new Ht().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(i.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&i.emissive!==void 0&&i.emissive.setHex(t.emissive),t.specular!==void 0&&i.specular!==void 0&&i.specular.setHex(t.specular),t.specularIntensity!==void 0&&(i.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&i.specularColor!==void 0&&i.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(i.shininess=t.shininess),t.clearcoat!==void 0&&(i.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(i.dispersion=t.dispersion),t.iridescence!==void 0&&(i.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(i.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(i.transmission=t.transmission),t.thickness!==void 0&&(i.thickness=t.thickness),t.attenuationDistance!==void 0&&(i.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&i.attenuationColor!==void 0&&i.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(i.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(i.fog=t.fog),t.flatShading!==void 0&&(i.flatShading=t.flatShading),t.blending!==void 0&&(i.blending=t.blending),t.combine!==void 0&&(i.combine=t.combine),t.side!==void 0&&(i.side=t.side),t.shadowSide!==void 0&&(i.shadowSide=t.shadowSide),t.opacity!==void 0&&(i.opacity=t.opacity),t.transparent!==void 0&&(i.transparent=t.transparent),t.alphaTest!==void 0&&(i.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(i.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(i.depthFunc=t.depthFunc),t.depthTest!==void 0&&(i.depthTest=t.depthTest),t.depthWrite!==void 0&&(i.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(i.colorWrite=t.colorWrite),t.blendSrc!==void 0&&(i.blendSrc=t.blendSrc),t.blendDst!==void 0&&(i.blendDst=t.blendDst),t.blendEquation!==void 0&&(i.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(i.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(i.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(i.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&i.blendColor!==void 0&&i.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(i.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(i.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(i.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(i.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(i.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(i.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(i.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(i.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(i.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(i.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(i.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(i.rotation=t.rotation),t.linewidth!==void 0&&(i.linewidth=t.linewidth),t.dashSize!==void 0&&(i.dashSize=t.dashSize),t.gapSize!==void 0&&(i.gapSize=t.gapSize),t.scale!==void 0&&(i.scale=t.scale),t.polygonOffset!==void 0&&(i.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(i.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(i.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(i.dithering=t.dithering),t.alphaToCoverage!==void 0&&(i.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(i.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(i.forceSinglePass=t.forceSinglePass),t.visible!==void 0&&(i.visible=t.visible),t.toneMapped!==void 0&&(i.toneMapped=t.toneMapped),t.userData!==void 0&&(i.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?i.vertexColors=t.vertexColors>0:i.vertexColors=t.vertexColors),t.uniforms!==void 0)for(let r in t.uniforms){let o=t.uniforms[r];switch(i.uniforms[r]={},o.type){case"t":i.uniforms[r].value=n(o.value);break;case"c":i.uniforms[r].value=new Ht().setHex(o.value);break;case"v2":i.uniforms[r].value=new _t().fromArray(o.value);break;case"v3":i.uniforms[r].value=new U().fromArray(o.value);break;case"v4":i.uniforms[r].value=new Ie().fromArray(o.value);break;case"m3":i.uniforms[r].value=new ce().fromArray(o.value);break;case"m4":i.uniforms[r].value=new ee().fromArray(o.value);break;default:i.uniforms[r].value=o.value}}if(t.defines!==void 0&&(i.defines=t.defines),t.vertexShader!==void 0&&(i.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(i.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(i.glslVersion=t.glslVersion),t.extensions!==void 0)for(let r in t.extensions)i.extensions[r]=t.extensions[r];if(t.lights!==void 0&&(i.lights=t.lights),t.clipping!==void 0&&(i.clipping=t.clipping),t.size!==void 0&&(i.size=t.size),t.sizeAttenuation!==void 0&&(i.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(i.map=n(t.map)),t.matcap!==void 0&&(i.matcap=n(t.matcap)),t.alphaMap!==void 0&&(i.alphaMap=n(t.alphaMap)),t.bumpMap!==void 0&&(i.bumpMap=n(t.bumpMap)),t.bumpScale!==void 0&&(i.bumpScale=t.bumpScale),t.normalMap!==void 0&&(i.normalMap=n(t.normalMap)),t.normalMapType!==void 0&&(i.normalMapType=t.normalMapType),t.normalScale!==void 0){let r=t.normalScale;Array.isArray(r)===!1&&(r=[r,r]),i.normalScale=new _t().fromArray(r)}return t.displacementMap!==void 0&&(i.displacementMap=n(t.displacementMap)),t.displacementScale!==void 0&&(i.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(i.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(i.roughnessMap=n(t.roughnessMap)),t.metalnessMap!==void 0&&(i.metalnessMap=n(t.metalnessMap)),t.emissiveMap!==void 0&&(i.emissiveMap=n(t.emissiveMap)),t.emissiveIntensity!==void 0&&(i.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(i.specularMap=n(t.specularMap)),t.specularIntensityMap!==void 0&&(i.specularIntensityMap=n(t.specularIntensityMap)),t.specularColorMap!==void 0&&(i.specularColorMap=n(t.specularColorMap)),t.envMap!==void 0&&(i.envMap=n(t.envMap)),t.envMapRotation!==void 0&&i.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(i.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(i.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(i.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(i.lightMap=n(t.lightMap)),t.lightMapIntensity!==void 0&&(i.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(i.aoMap=n(t.aoMap)),t.aoMapIntensity!==void 0&&(i.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(i.gradientMap=n(t.gradientMap)),t.clearcoatMap!==void 0&&(i.clearcoatMap=n(t.clearcoatMap)),t.clearcoatRoughnessMap!==void 0&&(i.clearcoatRoughnessMap=n(t.clearcoatRoughnessMap)),t.clearcoatNormalMap!==void 0&&(i.clearcoatNormalMap=n(t.clearcoatNormalMap)),t.clearcoatNormalScale!==void 0&&(i.clearcoatNormalScale=new _t().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(i.iridescenceMap=n(t.iridescenceMap)),t.iridescenceThicknessMap!==void 0&&(i.iridescenceThicknessMap=n(t.iridescenceThicknessMap)),t.transmissionMap!==void 0&&(i.transmissionMap=n(t.transmissionMap)),t.thicknessMap!==void 0&&(i.thicknessMap=n(t.thicknessMap)),t.anisotropyMap!==void 0&&(i.anisotropyMap=n(t.anisotropyMap)),t.sheenColorMap!==void 0&&(i.sheenColorMap=n(t.sheenColorMap)),t.sheenRoughnessMap!==void 0&&(i.sheenRoughnessMap=n(t.sheenRoughnessMap)),i}setTextures(t){return this.textures=t,this}static createMaterialFromType(t){let e={ShadowMaterial:yu,SpriteMaterial:Ga,RawShaderMaterial:Mu,ShaderMaterial:oi,PointsMaterial:Xa,MeshPhysicalMaterial:Su,MeshStandardMaterial:il,MeshPhongMaterial:bu,MeshToonMaterial:wu,MeshNormalMaterial:Eu,MeshLambertMaterial:Au,MeshDepthMaterial:Va,MeshDistanceMaterial:Ha,MeshBasicMaterial:Wi,MeshMatcapMaterial:Tu,LineDashedMaterial:Cu,LineBasicMaterial:Cn,Material:En};return new e[t]}},ll=class{static decodeText(t){if(typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let n=0,i=t.length;n<i;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){let e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}},Vu=class extends de{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}},Hu=class extends Un{constructor(t){super(t)}load(t,e,n,i){let r=this,o=new Ii(r.manager);o.setPath(r.path),o.setRequestHeader(r.requestHeader),o.setWithCredentials(r.withCredentials),o.load(t,function(a){try{e(r.parse(JSON.parse(a)))}catch(l){i?i(l):console.error(l),r.manager.itemError(t)}},n,i)}parse(t){let e={},n={};function i(f,m){if(e[m]!==void 0)return e[m];let g=f.interleavedBuffers[m],p=r(f,g.buffer),v=yo(g.type,p),x=new No(v,g.stride);return x.uuid=g.uuid,e[m]=x,x}function r(f,m){if(n[m]!==void 0)return n[m];let g=f.arrayBuffers[m],p=new Uint32Array(g).buffer;return n[m]=p,p}let o=t.isInstancedBufferGeometry?new Vu:new de,a=t.data.index;if(a!==void 0){let f=yo(a.type,a.array);o.setIndex(new be(f,1))}let l=t.data.attributes;for(let f in l){let m=l[f],_;if(m.isInterleavedBufferAttribute){let g=i(t.data,m.data);_=new yr(g,m.itemSize,m.offset,m.normalized)}else{let g=yo(m.type,m.array),p=m.isInstancedBufferAttribute?Fs:be;_=new p(g,m.itemSize,m.normalized)}m.name!==void 0&&(_.name=m.name),m.usage!==void 0&&_.setUsage(m.usage),o.setAttribute(f,_)}let c=t.data.morphAttributes;if(c)for(let f in c){let m=c[f],_=[];for(let g=0,p=m.length;g<p;g++){let v=m[g],x;if(v.isInterleavedBufferAttribute){let y=i(t.data,v.data);x=new yr(y,v.itemSize,v.offset,v.normalized)}else{let y=yo(v.type,v.array);x=new be(y,v.itemSize,v.normalized)}v.name!==void 0&&(x.name=v.name),_.push(x)}o.morphAttributes[f]=_}t.data.morphTargetsRelative&&(o.morphTargetsRelative=!0);let h=t.data.groups||t.data.drawcalls||t.data.offsets;if(h!==void 0)for(let f=0,m=h.length;f!==m;++f){let _=h[f];o.addGroup(_.start,_.count,_.materialIndex)}let d=t.data.boundingSphere;if(d!==void 0){let f=new U;d.center!==void 0&&f.fromArray(d.center),o.boundingSphere=new wn(f,d.radius)}return t.name&&(o.name=t.name),t.userData&&(o.userData=t.userData),o}},Wf=class extends Un{constructor(t){super(t)}load(t,e,n,i){let r=this,o=this.path===""?ll.extractUrlBase(t):this.path;this.resourcePath=this.resourcePath||o;let a=new Ii(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(t,function(l){let c=null;try{c=JSON.parse(l)}catch(h){i!==void 0&&i(h),console.error("THREE:ObjectLoader: Can't parse "+t+".",h.message);return}let u=c.metadata;if(u===void 0||u.type===void 0||u.type.toLowerCase()==="geometry"){i!==void 0&&i(new Error("THREE.ObjectLoader: Can't load "+t)),console.error("THREE.ObjectLoader: Can't load "+t);return}r.parse(c,e)},n,i)}async loadAsync(t,e){let n=this,i=this.path===""?ll.extractUrlBase(t):this.path;this.resourcePath=this.resourcePath||i;let r=new Ii(this.manager);r.setPath(this.path),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials);let o=await r.loadAsync(t,e),a=JSON.parse(o),l=a.metadata;if(l===void 0||l.type===void 0||l.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+t);return await n.parseAsync(a)}parse(t,e){let n=this.parseAnimations(t.animations),i=this.parseShapes(t.shapes),r=this.parseGeometries(t.geometries,i),o=this.parseImages(t.images,function(){e!==void 0&&e(c)}),a=this.parseTextures(t.textures,o),l=this.parseMaterials(t.materials,a),c=this.parseObject(t.object,r,l,a,n),u=this.parseSkeletons(t.skeletons,c);if(this.bindSkeletons(c,u),e!==void 0){let h=!1;for(let d in o)if(o[d].data instanceof HTMLImageElement){h=!0;break}h===!1&&e(c)}return c}async parseAsync(t){let e=this.parseAnimations(t.animations),n=this.parseShapes(t.shapes),i=this.parseGeometries(t.geometries,n),r=await this.parseImagesAsync(t.images),o=this.parseTextures(t.textures,r),a=this.parseMaterials(t.materials,o),l=this.parseObject(t.object,i,a,o,e),c=this.parseSkeletons(t.skeletons,l);return this.bindSkeletons(l,c),l}parseShapes(t){let e={};if(t!==void 0)for(let n=0,i=t.length;n<i;n++){let r=new hs().fromJSON(t[n]);e[r.uuid]=r}return e}parseSkeletons(t,e){let n={},i={};if(e.traverse(function(r){r.isBone&&(i[r.uuid]=r)}),t!==void 0)for(let r=0,o=t.length;r<o;r++){let a=new Yc().fromJSON(t[r],i);n[a.uuid]=a}return n}parseGeometries(t,e){let n={};if(t!==void 0){let i=new Hu;for(let r=0,o=t.length;r<o;r++){let a,l=t[r];switch(l.type){case"BufferGeometry":case"InstancedBufferGeometry":a=i.parse(l);break;default:l.type in n_?a=n_[l.type].fromJSON(l,e):console.warn(`THREE.ObjectLoader: Unsupported geometry type "${l.type}"`)}a.uuid=l.uuid,l.name!==void 0&&(a.name=l.name),l.userData!==void 0&&(a.userData=l.userData),n[l.uuid]=a}}return n}parseMaterials(t,e){let n={},i={};if(t!==void 0){let r=new ku;r.setTextures(e);for(let o=0,a=t.length;o<a;o++){let l=t[o];n[l.uuid]===void 0&&(n[l.uuid]=r.parse(l)),i[l.uuid]=n[l.uuid]}}return i}parseAnimations(t){let e={};if(t!==void 0)for(let n=0;n<t.length;n++){let i=t[n],r=Ar.parse(i);e[r.uuid]=r}return e}parseImages(t,e){let n=this,i={},r;function o(l){return n.manager.itemStart(l),r.load(l,function(){n.manager.itemEnd(l)},void 0,function(){n.manager.itemError(l),n.manager.itemEnd(l)})}function a(l){if(typeof l=="string"){let c=l,u=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(c)?c:n.resourcePath+c;return o(u)}else return l.data?{data:yo(l.type,l.data),width:l.width,height:l.height}:null}if(t!==void 0&&t.length>0){let l=new ol(e);r=new Tr(l),r.setCrossOrigin(this.crossOrigin);for(let c=0,u=t.length;c<u;c++){let h=t[c],d=h.url;if(Array.isArray(d)){let f=[];for(let m=0,_=d.length;m<_;m++){let g=d[m],p=a(g);p!==null&&(p instanceof HTMLImageElement?f.push(p):f.push(new Hi(p.data,p.width,p.height)))}i[h.uuid]=new os(f)}else{let f=a(h.url);i[h.uuid]=new os(f)}}}return i}async parseImagesAsync(t){let e=this,n={},i;async function r(o){if(typeof o=="string"){let a=o,l=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(a)?a:e.resourcePath+a;return await i.loadAsync(l)}else return o.data?{data:yo(o.type,o.data),width:o.width,height:o.height}:null}if(t!==void 0&&t.length>0){i=new Tr(this.manager),i.setCrossOrigin(this.crossOrigin);for(let o=0,a=t.length;o<a;o++){let l=t[o],c=l.url;if(Array.isArray(c)){let u=[];for(let h=0,d=c.length;h<d;h++){let f=c[h],m=await r(f);m!==null&&(m instanceof HTMLImageElement?u.push(m):u.push(new Hi(m.data,m.width,m.height)))}n[l.uuid]=new os(u)}else{let u=await r(l.url);n[l.uuid]=new os(u)}}}return n}parseTextures(t,e){function n(r,o){return typeof r=="number"?r:(console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",r),o[r])}let i={};if(t!==void 0)for(let r=0,o=t.length;r<o;r++){let a=t[r];a.image===void 0&&console.warn('THREE.ObjectLoader: No "image" specified for',a.uuid),e[a.image]===void 0&&console.warn("THREE.ObjectLoader: Undefined image",a.image);let l=e[a.image],c=l.data,u;Array.isArray(c)?(u=new xr,c.length===6&&(u.needsUpdate=!0)):(c&&c.data?u=new Hi:u=new ln,c&&(u.needsUpdate=!0)),u.source=l,u.uuid=a.uuid,a.name!==void 0&&(u.name=a.name),a.mapping!==void 0&&(u.mapping=n(a.mapping,YA)),a.channel!==void 0&&(u.channel=a.channel),a.offset!==void 0&&u.offset.fromArray(a.offset),a.repeat!==void 0&&u.repeat.fromArray(a.repeat),a.center!==void 0&&u.center.fromArray(a.center),a.rotation!==void 0&&(u.rotation=a.rotation),a.wrap!==void 0&&(u.wrapS=n(a.wrap[0],o_),u.wrapT=n(a.wrap[1],o_)),a.format!==void 0&&(u.format=a.format),a.internalFormat!==void 0&&(u.internalFormat=a.internalFormat),a.type!==void 0&&(u.type=a.type),a.colorSpace!==void 0&&(u.colorSpace=a.colorSpace),a.minFilter!==void 0&&(u.minFilter=n(a.minFilter,a_)),a.magFilter!==void 0&&(u.magFilter=n(a.magFilter,a_)),a.anisotropy!==void 0&&(u.anisotropy=a.anisotropy),a.flipY!==void 0&&(u.flipY=a.flipY),a.generateMipmaps!==void 0&&(u.generateMipmaps=a.generateMipmaps),a.premultiplyAlpha!==void 0&&(u.premultiplyAlpha=a.premultiplyAlpha),a.unpackAlignment!==void 0&&(u.unpackAlignment=a.unpackAlignment),a.compareFunction!==void 0&&(u.compareFunction=a.compareFunction),a.userData!==void 0&&(u.userData=a.userData),i[a.uuid]=u}return i}parseObject(t,e,n,i,r){let o;function a(d){return e[d]===void 0&&console.warn("THREE.ObjectLoader: Undefined geometry",d),e[d]}function l(d){if(d!==void 0){if(Array.isArray(d)){let f=[];for(let m=0,_=d.length;m<_;m++){let g=d[m];n[g]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",g),f.push(n[g])}return f}return n[d]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",d),n[d]}}function c(d){return i[d]===void 0&&console.warn("THREE.ObjectLoader: Undefined texture",d),i[d]}let u,h;switch(t.type){case"Scene":o=new Gc,t.background!==void 0&&(Number.isInteger(t.background)?o.background=new Ht(t.background):o.background=c(t.background)),t.environment!==void 0&&(o.environment=c(t.environment)),t.fog!==void 0&&(t.fog.type==="Fog"?o.fog=new Hc(t.fog.color,t.fog.near,t.fog.far):t.fog.type==="FogExp2"&&(o.fog=new Vc(t.fog.color,t.fog.density)),t.fog.name!==""&&(o.fog.name=t.fog.name)),t.backgroundBlurriness!==void 0&&(o.backgroundBlurriness=t.backgroundBlurriness),t.backgroundIntensity!==void 0&&(o.backgroundIntensity=t.backgroundIntensity),t.backgroundRotation!==void 0&&o.backgroundRotation.fromArray(t.backgroundRotation),t.environmentIntensity!==void 0&&(o.environmentIntensity=t.environmentIntensity),t.environmentRotation!==void 0&&o.environmentRotation.fromArray(t.environmentRotation);break;case"PerspectiveCamera":o=new dn(t.fov,t.aspect,t.near,t.far),t.focus!==void 0&&(o.focus=t.focus),t.zoom!==void 0&&(o.zoom=t.zoom),t.filmGauge!==void 0&&(o.filmGauge=t.filmGauge),t.filmOffset!==void 0&&(o.filmOffset=t.filmOffset),t.view!==void 0&&(o.view=Object.assign({},t.view));break;case"OrthographicCamera":o=new Lo(t.left,t.right,t.top,t.bottom,t.near,t.far),t.zoom!==void 0&&(o.zoom=t.zoom),t.view!==void 0&&(o.view=Object.assign({},t.view));break;case"AmbientLight":o=new Fu(t.color,t.intensity);break;case"DirectionalLight":o=new Uu(t.color,t.intensity);break;case"PointLight":o=new Du(t.color,t.intensity,t.distance,t.decay);break;case"RectAreaLight":o=new Ou(t.color,t.intensity,t.width,t.height);break;case"SpotLight":o=new Nu(t.color,t.intensity,t.distance,t.angle,t.penumbra,t.decay);break;case"HemisphereLight":o=new Lu(t.color,t.groundColor,t.intensity);break;case"LightProbe":o=new zu().fromJSON(t);break;case"SkinnedMesh":u=a(t.geometry),h=l(t.material),o=new qc(u,h),t.bindMode!==void 0&&(o.bindMode=t.bindMode),t.bindMatrix!==void 0&&o.bindMatrix.fromArray(t.bindMatrix),t.skeleton!==void 0&&(o.skeleton=t.skeleton);break;case"Mesh":u=a(t.geometry),h=l(t.material),o=new Qe(u,h);break;case"InstancedMesh":u=a(t.geometry),h=l(t.material);let d=t.count,f=t.instanceMatrix,m=t.instanceColor;o=new $c(u,h,d),o.instanceMatrix=new Fs(new Float32Array(f.array),16),m!==void 0&&(o.instanceColor=new Fs(new Float32Array(m.array),m.itemSize));break;case"BatchedMesh":u=a(t.geometry),h=l(t.material),o=new Zc(t.maxGeometryCount,t.maxVertexCount,t.maxIndexCount,h),o.geometry=u,o.perObjectFrustumCulled=t.perObjectFrustumCulled,o.sortObjects=t.sortObjects,o._drawRanges=t.drawRanges,o._reservedRanges=t.reservedRanges,o._visibility=t.visibility,o._active=t.active,o._bounds=t.bounds.map(_=>{let g=new Tn;g.min.fromArray(_.boxMin),g.max.fromArray(_.boxMax);let p=new wn;return p.radius=_.sphereRadius,p.center.fromArray(_.sphereCenter),{boxInitialized:_.boxInitialized,box:g,sphereInitialized:_.sphereInitialized,sphere:p}}),o._maxGeometryCount=t.maxGeometryCount,o._maxVertexCount=t.maxVertexCount,o._maxIndexCount=t.maxIndexCount,o._geometryInitialized=t.geometryInitialized,o._geometryCount=t.geometryCount,o._matricesTexture=c(t.matricesTexture.uuid);break;case"LOD":o=new Xc;break;case"Line":o=new Xi(a(t.geometry),l(t.material));break;case"LineLoop":o=new jc(a(t.geometry),l(t.material));break;case"LineSegments":o=new xi(a(t.geometry),l(t.material));break;case"PointCloud":case"Points":o=new Qc(a(t.geometry),l(t.material));break;case"Sprite":o=new Wc(l(t.material));break;case"Group":o=new Ns;break;case"Bone":o=new Wa;break;default:o=new Ae}if(o.uuid=t.uuid,t.name!==void 0&&(o.name=t.name),t.matrix!==void 0?(o.matrix.fromArray(t.matrix),t.matrixAutoUpdate!==void 0&&(o.matrixAutoUpdate=t.matrixAutoUpdate),o.matrixAutoUpdate&&o.matrix.decompose(o.position,o.quaternion,o.scale)):(t.position!==void 0&&o.position.fromArray(t.position),t.rotation!==void 0&&o.rotation.fromArray(t.rotation),t.quaternion!==void 0&&o.quaternion.fromArray(t.quaternion),t.scale!==void 0&&o.scale.fromArray(t.scale)),t.up!==void 0&&o.up.fromArray(t.up),t.castShadow!==void 0&&(o.castShadow=t.castShadow),t.receiveShadow!==void 0&&(o.receiveShadow=t.receiveShadow),t.shadow&&(t.shadow.bias!==void 0&&(o.shadow.bias=t.shadow.bias),t.shadow.normalBias!==void 0&&(o.shadow.normalBias=t.shadow.normalBias),t.shadow.radius!==void 0&&(o.shadow.radius=t.shadow.radius),t.shadow.mapSize!==void 0&&o.shadow.mapSize.fromArray(t.shadow.mapSize),t.shadow.camera!==void 0&&(o.shadow.camera=this.parseObject(t.shadow.camera))),t.visible!==void 0&&(o.visible=t.visible),t.frustumCulled!==void 0&&(o.frustumCulled=t.frustumCulled),t.renderOrder!==void 0&&(o.renderOrder=t.renderOrder),t.userData!==void 0&&(o.userData=t.userData),t.layers!==void 0&&(o.layers.mask=t.layers),t.children!==void 0){let d=t.children;for(let f=0;f<d.length;f++)o.add(this.parseObject(d[f],e,n,i,r))}if(t.animations!==void 0){let d=t.animations;for(let f=0;f<d.length;f++){let m=d[f];o.animations.push(r[m])}}if(t.type==="LOD"){t.autoUpdate!==void 0&&(o.autoUpdate=t.autoUpdate);let d=t.levels;for(let f=0;f<d.length;f++){let m=d[f],_=o.getObjectByProperty("uuid",m.object);_!==void 0&&o.addLevel(_,m.distance,m.hysteresis)}}return o}bindSkeletons(t,e){Object.keys(e).length!==0&&t.traverse(function(n){if(n.isSkinnedMesh===!0&&n.skeleton!==void 0){let i=e[n.skeleton];i===void 0?console.warn("THREE.ObjectLoader: No skeleton found with UUID:",n.skeleton):n.bind(i,n.bindMatrix)}})}},YA={UVMapping:Yu,CubeReflectionMapping:fs,CubeRefractionMapping:Ds,EquirectangularReflectionMapping:ba,EquirectangularRefractionMapping:wa,CubeUVReflectionMapping:Oo},o_={RepeatWrapping:Ea,ClampToEdgeWrapping:gi,MirroredRepeatWrapping:Aa},a_={NearestFilter:bn,NearestMipmapNearestFilter:Ap,NearestMipmapLinearFilter:vo,LinearFilter:an,LinearMipmapNearestFilter:_a,LinearMipmapLinearFilter:ki},Xf=class extends Un{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,o=ls.get(t);if(o!==void 0){if(r.manager.itemStart(t),o.then){o.then(c=>{e&&e(c),r.manager.itemEnd(t)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let l=fetch(t,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return ls.add(t,c),e&&e(c),r.manager.itemEnd(t),c}).catch(function(c){i&&i(c),ls.remove(t),r.manager.itemError(t),r.manager.itemEnd(t)});ls.add(t,l),r.manager.itemStart(t)}},Mc,cl=class{static getContext(){return Mc===void 0&&(Mc=new(window.AudioContext||window.webkitAudioContext)),Mc}static setContext(t){Mc=t}},qf=class extends Un{constructor(t){super(t)}load(t,e,n,i){let r=this,o=new Ii(this.manager);o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(l){try{let c=l.slice(0);cl.getContext().decodeAudioData(c,function(h){e(h)}).catch(a)}catch(c){a(c)}},n,i);function a(l){i?i(l):console.error(l),r.manager.itemError(t)}}},l_=new ee,c_=new ee,nr=new ee,Yf=class{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new dn,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new dn,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(t){let e=this._cache;if(e.focus!==t.focus||e.fov!==t.fov||e.aspect!==t.aspect*this.aspect||e.near!==t.near||e.far!==t.far||e.zoom!==t.zoom||e.eyeSep!==this.eyeSep){e.focus=t.focus,e.fov=t.fov,e.aspect=t.aspect*this.aspect,e.near=t.near,e.far=t.far,e.zoom=t.zoom,e.eyeSep=this.eyeSep,nr.copy(t.projectionMatrix);let i=e.eyeSep/2,r=i*e.near/e.focus,o=e.near*Math.tan(mr*e.fov*.5)/e.zoom,a,l;c_.elements[12]=-i,l_.elements[12]=i,a=-o*e.aspect+r,l=o*e.aspect+r,nr.elements[0]=2*e.near/(l-a),nr.elements[8]=(l+a)/(l-a),this.cameraL.projectionMatrix.copy(nr),a=-o*e.aspect-r,l=o*e.aspect-r,nr.elements[0]=2*e.near/(l-a),nr.elements[8]=(l+a)/(l-a),this.cameraR.projectionMatrix.copy(nr)}this.cameraL.matrixWorld.copy(t.matrixWorld).multiply(c_),this.cameraR.matrixWorld.copy(t.matrixWorld).multiply(l_)}},Gu=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=u_(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=u_();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function u_(){return(typeof performance>"u"?Date:performance).now()}var ir=new U,h_=new Dn,$A=new U,sr=new U,$f=class extends Ae{constructor(){super(),this.type="AudioListener",this.context=cl.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new Gu}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(t){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=t,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}updateMatrixWorld(t){super.updateMatrixWorld(t);let e=this.context.listener,n=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(ir,h_,$A),sr.set(0,0,-1).applyQuaternion(h_),e.positionX){let i=this.context.currentTime+this.timeDelta;e.positionX.linearRampToValueAtTime(ir.x,i),e.positionY.linearRampToValueAtTime(ir.y,i),e.positionZ.linearRampToValueAtTime(ir.z,i),e.forwardX.linearRampToValueAtTime(sr.x,i),e.forwardY.linearRampToValueAtTime(sr.y,i),e.forwardZ.linearRampToValueAtTime(sr.z,i),e.upX.linearRampToValueAtTime(n.x,i),e.upY.linearRampToValueAtTime(n.y,i),e.upZ.linearRampToValueAtTime(n.z,i)}else e.setPosition(ir.x,ir.y,ir.z),e.setOrientation(sr.x,sr.y,sr.z,n.x,n.y,n.z)}},Wu=class extends Ae{constructor(t){super(),this.type="Audio",this.listener=t,this.context=t.context,this.gain=this.context.createGain(),this.gain.connect(t.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(t){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=t,this.connect(),this}setMediaElementSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(t),this.connect(),this}setMediaStreamSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(t),this.connect(),this}setBuffer(t){return this.buffer=t,this.sourceType="buffer",this.autoplay&&this.play(),this}play(t=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+t;let e=this.context.createBufferSource();return e.buffer=this.buffer,e.loop=this.loop,e.loopStart=this.loopStart,e.loopEnd=this.loopEnd,e.onended=this.onEnded.bind(this),e.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=e,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].connect(this.filters[t]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].disconnect(this.filters[t]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(t){return t||(t=[]),this._connected===!0?(this.disconnect(),this.filters=t.slice(),this.connect()):this.filters=t.slice(),this}setDetune(t){return this.detune=t,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(t){return this.setFilters(t?[t]:[])}setPlaybackRate(t){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=t,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(t){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=t,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(t){return this.loopStart=t,this}setLoopEnd(t){return this.loopEnd=t,this}getVolume(){return this.gain.gain.value}setVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}},rr=new U,d_=new Dn,ZA=new U,or=new U,Zf=class extends Wu{constructor(t){super(t),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){super.connect(),this.panner.connect(this.gain)}disconnect(){super.disconnect(),this.panner.disconnect(this.gain)}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(t){return this.panner.refDistance=t,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(t){return this.panner.rolloffFactor=t,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(t){return this.panner.distanceModel=t,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(t){return this.panner.maxDistance=t,this}setDirectionalCone(t,e,n){return this.panner.coneInnerAngle=t,this.panner.coneOuterAngle=e,this.panner.coneOuterGain=n,this}updateMatrixWorld(t){if(super.updateMatrixWorld(t),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(rr,d_,ZA),or.set(0,0,1).applyQuaternion(d_);let e=this.panner;if(e.positionX){let n=this.context.currentTime+this.listener.timeDelta;e.positionX.linearRampToValueAtTime(rr.x,n),e.positionY.linearRampToValueAtTime(rr.y,n),e.positionZ.linearRampToValueAtTime(rr.z,n),e.orientationX.linearRampToValueAtTime(or.x,n),e.orientationY.linearRampToValueAtTime(or.y,n),e.orientationZ.linearRampToValueAtTime(or.z,n)}else e.setPosition(rr.x,rr.y,rr.z),e.setOrientation(or.x,or.y,or.z)}},Jf=class{constructor(t,e=2048){this.analyser=t.context.createAnalyser(),this.analyser.fftSize=e,this.data=new Uint8Array(this.analyser.frequencyBinCount),t.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let t=0,e=this.getFrequencyData();for(let n=0;n<e.length;n++)t+=e[n];return t/e.length}},Xu=class{constructor(t,e,n){this.binding=t,this.valueSize=n;let i,r,o;switch(e){case"quaternion":i=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){let n=this.buffer,i=this.valueSize,r=t*i+i,o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[r+a]=n[a];o=e}else{o+=e;let a=e/o;this._mixBufferRegion(n,r,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(t){let e=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,i,0,t,n),this.cumulativeWeightAdditive+=t}apply(t){let e=this.valueSize,n=this.buffer,i=t*e+e,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let l=e*this._origIndex;this._mixBufferRegion(n,i,l,1-r,e)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*e,1,e);for(let l=e,c=e+e;l!==c;++l)if(n[l]!==n[l+e]){a.setValue(n,i);break}}saveOriginalState(){let t=this.binding,e=this.buffer,n=this.valueSize,i=n*this._origIndex;t.getValue(e,i);for(let r=n,o=i;r!==o;++r)e[r]=e[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let t=this.valueSize*3;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){let t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let n=t;n<e;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[e+n]=this.buffer[t+n]}_select(t,e,n,i,r){if(i>=.5)for(let o=0;o!==r;++o)t[e+o]=t[n+o]}_slerp(t,e,n,i){Dn.slerpFlat(t,e,t,e,t,n,i)}_slerpAdditive(t,e,n,i,r){let o=this._workIndex*r;Dn.multiplyQuaternionsFlat(t,o,t,e,t,n),Dn.slerpFlat(t,e,t,e,t,o,i)}_lerp(t,e,n,i,r){let o=1-i;for(let a=0;a!==r;++a){let l=e+a;t[l]=t[l]*o+t[n+a]*i}}_lerpAdditive(t,e,n,i,r){for(let o=0;o!==r;++o){let a=e+o;t[a]=t[a]+t[n+o]*i}}},Vp="\\[\\]\\.:\\/",JA=new RegExp("["+Vp+"]","g"),Hp="[^"+Vp+"]",KA="[^"+Vp.replace("\\.","")+"]",jA=/((?:WC+[\/:])*)/.source.replace("WC",Hp),QA=/(WCOD+)?/.source.replace("WCOD",KA),tT=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Hp),eT=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Hp),nT=new RegExp("^"+jA+QA+tT+eT+"$"),iT=["material","materials","bones","map"],Kf=class{constructor(t,e,n){let i=n||Re.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Re=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(JA,"")}static parseTrackName(t){let e=nT.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);iT.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[i];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Re.Composite=Kf;Re.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Re.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Re.prototype.GetterByBindingType=[Re.prototype._getValue_direct,Re.prototype._getValue_array,Re.prototype._getValue_arrayElement,Re.prototype._getValue_toArray];Re.prototype.SetterByBindingTypeAndVersioning=[[Re.prototype._setValue_direct,Re.prototype._setValue_direct_setNeedsUpdate,Re.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Re.prototype._setValue_array,Re.prototype._setValue_array_setNeedsUpdate,Re.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Re.prototype._setValue_arrayElement,Re.prototype._setValue_arrayElement_setNeedsUpdate,Re.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Re.prototype._setValue_fromArray,Re.prototype._setValue_fromArray_setNeedsUpdate,Re.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var jf=class{constructor(){this.isAnimationObjectGroup=!0,this.uuid=ii(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;let t={};this._indicesByUUID=t;for(let n=0,i=arguments.length;n!==i;++n)t[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};let e=this;this.stats={objects:{get total(){return e._objects.length},get inUse(){return this.total-e.nCachedObjects_}},get bindingsPerObject(){return e._bindings.length}}}add(){let t=this._objects,e=this._indicesByUUID,n=this._paths,i=this._parsedPaths,r=this._bindings,o=r.length,a,l=t.length,c=this.nCachedObjects_;for(let u=0,h=arguments.length;u!==h;++u){let d=arguments[u],f=d.uuid,m=e[f];if(m===void 0){m=l++,e[f]=m,t.push(d);for(let _=0,g=o;_!==g;++_)r[_].push(new Re(d,n[_],i[_]))}else if(m<c){a=t[m];let _=--c,g=t[_];e[g.uuid]=m,t[m]=g,e[f]=_,t[_]=d;for(let p=0,v=o;p!==v;++p){let x=r[p],y=x[_],L=x[m];x[m]=y,L===void 0&&(L=new Re(d,n[p],i[p])),x[_]=L}}else t[m]!==a&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=c}remove(){let t=this._objects,e=this._indicesByUUID,n=this._bindings,i=n.length,r=this.nCachedObjects_;for(let o=0,a=arguments.length;o!==a;++o){let l=arguments[o],c=l.uuid,u=e[c];if(u!==void 0&&u>=r){let h=r++,d=t[h];e[d.uuid]=u,t[u]=d,e[c]=h,t[h]=l;for(let f=0,m=i;f!==m;++f){let _=n[f],g=_[h],p=_[u];_[u]=g,_[h]=p}}}this.nCachedObjects_=r}uncache(){let t=this._objects,e=this._indicesByUUID,n=this._bindings,i=n.length,r=this.nCachedObjects_,o=t.length;for(let a=0,l=arguments.length;a!==l;++a){let c=arguments[a],u=c.uuid,h=e[u];if(h!==void 0)if(delete e[u],h<r){let d=--r,f=t[d],m=--o,_=t[m];e[f.uuid]=h,t[h]=f,e[_.uuid]=d,t[d]=_,t.pop();for(let g=0,p=i;g!==p;++g){let v=n[g],x=v[d],y=v[m];v[h]=x,v[d]=y,v.pop()}}else{let d=--o,f=t[d];d>0&&(e[f.uuid]=h),t[h]=f,t.pop();for(let m=0,_=i;m!==_;++m){let g=n[m];g[h]=g[d],g.pop()}}}this.nCachedObjects_=r}subscribe_(t,e){let n=this._bindingsIndicesByPath,i=n[t],r=this._bindings;if(i!==void 0)return r[i];let o=this._paths,a=this._parsedPaths,l=this._objects,c=l.length,u=this.nCachedObjects_,h=new Array(c);i=r.length,n[t]=i,o.push(t),a.push(e),r.push(h);for(let d=u,f=l.length;d!==f;++d){let m=l[d];h[d]=new Re(m,t,e)}return h}unsubscribe_(t){let e=this._bindingsIndicesByPath,n=e[t];if(n!==void 0){let i=this._paths,r=this._parsedPaths,o=this._bindings,a=o.length-1,l=o[a],c=t[a];e[c]=n,o[n]=l,o.pop(),r[n]=r[a],r.pop(),i[n]=i[a],i.pop()}}},qu=class{constructor(t,e,n=null,i=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=n,this.blendMode=i;let r=e.tracks,o=r.length,a=new Array(o),l={endingStart:ur,endingEnd:ur};for(let c=0;c!==o;++c){let u=r[c].createInterpolant(null);a[c]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=_x,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,n){if(t.fadeOut(e),this.fadeIn(e),n){let i=this._clip.duration,r=t._clip.duration,o=r/i,a=i/r;t.warp(1,o,e),this.warp(a,1,e)}return this}crossFadeTo(t,e,n){return t.crossFadeFrom(this,e,n)}stopFading(){let t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,n){let i=this._mixer,r=i.time,o=this.timeScale,a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);let l=a.parameterPositions,c=a.sampleValues;return l[0]=r,l[1]=r+n,c[0]=t/o,c[1]=e/o,this}stopWarping(){let t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,n,i){if(!this.enabled){this._updateWeight(t);return}let r=this._startTime;if(r!==null){let l=(t-r)*n;l<0||n===0?e=0:(this._startTime=null,e=n*l)}e*=this._updateTimeScale(t);let o=this._updateTime(e),a=this._updateWeight(t);if(a>0){let l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Up:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(o),c[u].accumulateAdditive(a);break;case $u:default:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(o),c[u].accumulate(i,a)}}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;let n=this._weightInterpolant;if(n!==null){let i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopWarping(),e===0?this.paused=!0:this.timeScale=e)}}return this._effectiveTimeScale=e,e}_updateTime(t){let e=this._clip.duration,n=this.loop,i=this.time+t,r=this._loopCount,o=n===xx;if(t===0)return r===-1?i:o&&(r&1)===1?e-i:i;if(n===gx){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(i>=e)i=e;else if(i<0)i=0;else{this.time=i;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(r===-1&&(t>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=e||i<0){let a=Math.floor(i/e);i-=e*a,r+=Math.abs(a);let l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=t>0?e:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(l===1){let c=t<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(r&1)===1)return e-i}return i}_setEndings(t,e,n){let i=this._interpolantSettings;n?(i.endingStart=hr,i.endingEnd=hr):(t?i.endingStart=this.zeroSlopeAtStart?hr:ur:i.endingStart=Ra,e?i.endingEnd=this.zeroSlopeAtEnd?hr:ur:i.endingEnd=Ra)}_scheduleFading(t,e,n){let i=this._mixer,r=i.time,o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);let a=o.parameterPositions,l=o.sampleValues;return a[0]=r,l[0]=e,a[1]=r+t,l[1]=n,this}},sT=new Float32Array(1),Qf=class extends Pi{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(t,e){let n=t._localRoot||this._root,i=t._clip.tracks,r=i.length,o=t._propertyBindings,a=t._interpolants,l=n.uuid,c=this._bindingsByRootAndName,u=c[l];u===void 0&&(u={},c[l]=u);for(let h=0;h!==r;++h){let d=i[h],f=d.name,m=u[f];if(m!==void 0)++m.referenceCount,o[h]=m;else{if(m=o[h],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,l,f));continue}let _=e&&e._propertyBindings[h].binding.parsedPath;m=new Xu(Re.create(n,f,_),d.ValueTypeName,d.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,l,f),o[h]=m}a[h].resultBuffer=m.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){let n=(t._localRoot||this._root).uuid,i=t._clip.uuid,r=this._actionsByClip[i];this._bindAction(t,r&&r.knownActions[0]),this._addInactiveAction(t,i,n)}let e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){let r=e[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){let e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){let r=e[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){let e=t._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(t,e,n){let i=this._actions,r=this._actionsByClip,o=r[e];if(o===void 0)o={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,r[e]=o;else{let a=o.knownActions;t._byClipCacheIndex=a.length,a.push(t)}t._cacheIndex=i.length,i.push(t),o.actionByRoot[n]=t}_removeInactiveAction(t){let e=this._actions,n=e[e.length-1],i=t._cacheIndex;n._cacheIndex=i,e[i]=n,e.pop(),t._cacheIndex=null;let r=t._clip.uuid,o=this._actionsByClip,a=o[r],l=a.knownActions,c=l[l.length-1],u=t._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),t._byClipCacheIndex=null;let h=a.actionByRoot,d=(t._localRoot||this._root).uuid;delete h[d],l.length===0&&delete o[r],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){let e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){let r=e[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(t){let e=this._actions,n=t._cacheIndex,i=this._nActiveActions++,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_takeBackAction(t){let e=this._actions,n=t._cacheIndex,i=--this._nActiveActions,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_addInactiveBinding(t,e,n){let i=this._bindingsByRootAndName,r=this._bindings,o=i[e];o===void 0&&(o={},i[e]=o),o[n]=t,t._cacheIndex=r.length,r.push(t)}_removeInactiveBinding(t){let e=this._bindings,n=t.binding,i=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[i],l=e[e.length-1],c=t._cacheIndex;l._cacheIndex=c,e[c]=l,e.pop(),delete a[r],Object.keys(a).length===0&&delete o[i]}_lendBinding(t){let e=this._bindings,n=t._cacheIndex,i=this._nActiveBindings++,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_takeBackBinding(t){let e=this._bindings,n=t._cacheIndex,i=--this._nActiveBindings,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_lendControlInterpolant(){let t=this._controlInterpolants,e=this._nActiveControlInterpolants++,n=t[e];return n===void 0&&(n=new sl(new Float32Array(2),new Float32Array(2),1,sT),n.__cacheIndex=e,t[e]=n),n}_takeBackControlInterpolant(t){let e=this._controlInterpolants,n=t.__cacheIndex,i=--this._nActiveControlInterpolants,r=e[i];t.__cacheIndex=i,e[i]=t,r.__cacheIndex=n,e[n]=r}clipAction(t,e,n){let i=e||this._root,r=i.uuid,o=typeof t=="string"?Ar.findByName(i,t):t,a=o!==null?o.uuid:t,l=this._actionsByClip[a],c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=$u),l!==void 0){let h=l.actionByRoot[r];if(h!==void 0&&h.blendMode===n)return h;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;let u=new qu(this,o,e,n);return this._bindAction(u,c),this._addInactiveAction(u,a,r),u}existingAction(t,e){let n=e||this._root,i=n.uuid,r=typeof t=="string"?Ar.findByName(n,t):t,o=r?r.uuid:t,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){let t=this._actions,e=this._nActiveActions;for(let n=e-1;n>=0;--n)t[n].stop();return this}update(t){t*=this.timeScale;let e=this._actions,n=this._nActiveActions,i=this.time+=t,r=Math.sign(t),o=this._accuIndex^=1;for(let c=0;c!==n;++c)e[c]._update(i,t,r,o);let a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){let e=this._actions,n=t.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){let o=r.knownActions;for(let a=0,l=o.length;a!==l;++a){let c=o[a];this._deactivateAction(c);let u=c._cacheIndex,h=e[e.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,h._cacheIndex=u,e[u]=h,e.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(t){let e=t.uuid,n=this._actionsByClip;for(let o in n){let a=n[o].actionByRoot,l=a[e];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}let i=this._bindingsByRootAndName,r=i[e];if(r!==void 0)for(let o in r){let a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(t,e){let n=this.existingAction(t,e);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}},tp=class s{constructor(t){this.value=t}clone(){return new s(this.value.clone===void 0?this.value:this.value.clone())}},rT=0,ep=class extends Pi{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:rT++}),this.name="",this.usage=Na,this.uniforms=[]}add(t){return this.uniforms.push(t),this}remove(t){let e=this.uniforms.indexOf(t);return e!==-1&&this.uniforms.splice(e,1),this}setName(t){return this.name=t,this}setUsage(t){return this.usage=t,this}dispose(){return this.dispatchEvent({type:"dispose"}),this}copy(t){this.name=t.name,this.usage=t.usage;let e=t.uniforms;this.uniforms.length=0;for(let n=0,i=e.length;n<i;n++){let r=Array.isArray(e[n])?e[n]:[e[n]];for(let o=0;o<r.length;o++)this.uniforms.push(r[o].clone())}return this}clone(){return new this.constructor().copy(this)}},np=class extends No{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){let e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){let e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}},ip=class{constructor(t,e,n,i,r){this.isGLBufferAttribute=!0,this.name="",this.buffer=t,this.type=e,this.itemSize=n,this.elementSize=i,this.count=r,this.version=0}set needsUpdate(t){t===!0&&this.version++}setBuffer(t){return this.buffer=t,this}setType(t,e){return this.type=t,this.elementSize=e,this}setItemSize(t){return this.itemSize=t,this}setCount(t){return this.count=t,this}},f_=new ee,sp=class{constructor(t,e,n=0,i=1/0){this.ray=new Us(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new Co,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return f_.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(f_),this}intersectObject(t,e=!0,n=[]){return rp(t,this,n,e),n.sort(p_),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)rp(t[i],this,n,e);return n.sort(p_),n}};function p_(s,t){return s.distance-t.distance}function rp(s,t,e,n){if(s.layers.test(t.layers)&&s.raycast(t,e),n===!0){let i=s.children;for(let r=0,o=i.length;r<o;r++)rp(i[r],t,e,!0)}}var op=class{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(je(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}},ap=class{constructor(t=1,e=0,n=0){return this.radius=t,this.theta=e,this.y=n,this}set(t,e,n){return this.radius=t,this.theta=e,this.y=n,this}copy(t){return this.radius=t.radius,this.theta=t.theta,this.y=t.y,this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+n*n),this.theta=Math.atan2(t,n),this.y=e,this}clone(){return new this.constructor().copy(this)}},m_=new _t,lp=class{constructor(t=new _t(1/0,1/0),e=new _t(-1/0,-1/0)){this.isBox2=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=m_.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(t){return this.isEmpty()?t.set(0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y)}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,m_).distanceTo(t)}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},g_=new U,Sc=new U,cp=class{constructor(t=new U,e=new U){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){g_.subVectors(t,this.start),Sc.subVectors(this.end,this.start);let n=Sc.dot(Sc),r=Sc.dot(g_)/n;return e&&(r=je(r,0,1)),r}closestPointToPoint(t,e,n){let i=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(i).add(this.start)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}},__=new U,up=class extends Ae{constructor(t,e){super(),this.light=t,this.matrixAutoUpdate=!1,this.color=e,this.type="SpotLightHelper";let n=new de,i=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let o=0,a=1,l=32;o<l;o++,a++){let c=o/l*Math.PI*2,u=a/l*Math.PI*2;i.push(Math.cos(c),Math.sin(c),1,Math.cos(u),Math.sin(u),1)}n.setAttribute("position",new qt(i,3));let r=new Cn({fog:!1,toneMapped:!1});this.cone=new xi(n,r),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorld.copy(this.light.matrixWorld);let t=this.light.distance?this.light.distance:1e3,e=t*Math.tan(this.light.angle);this.cone.scale.set(e,e,t),__.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(__),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}},Is=new U,bc=new ee,Ad=new ee,hp=class extends xi{constructor(t){let e=Zx(t),n=new de,i=[],r=[],o=new Ht(0,0,1),a=new Ht(0,1,0);for(let c=0;c<e.length;c++){let u=e[c];u.parent&&u.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),r.push(o.r,o.g,o.b),r.push(a.r,a.g,a.b))}n.setAttribute("position",new qt(i,3)),n.setAttribute("color",new qt(r,3));let l=new Cn({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,l),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=t,this.bones=e,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(t){let e=this.bones,n=this.geometry,i=n.getAttribute("position");Ad.copy(this.root.matrixWorld).invert();for(let r=0,o=0;r<e.length;r++){let a=e[r];a.parent&&a.parent.isBone&&(bc.multiplyMatrices(Ad,a.matrixWorld),Is.setFromMatrixPosition(bc),i.setXYZ(o,Is.x,Is.y,Is.z),bc.multiplyMatrices(Ad,a.parent.matrixWorld),Is.setFromMatrixPosition(bc),i.setXYZ(o+1,Is.x,Is.y,Is.z),o+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(t)}dispose(){this.geometry.dispose(),this.material.dispose()}};function Zx(s){let t=[];s.isBone===!0&&t.push(s);for(let e=0;e<s.children.length;e++)t.push.apply(t,Zx(s.children[e]));return t}var dp=class extends Qe{constructor(t,e,n){let i=new nl(e,4,2),r=new Wi({wireframe:!0,fog:!1,toneMapped:!1});super(i,r),this.light=t,this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}},oT=new U,x_=new Ht,v_=new Ht,fp=class extends Ae{constructor(t,e,n){super(),this.light=t,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="HemisphereLightHelper";let i=new el(e);i.rotateY(Math.PI*.5),this.material=new Wi({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);let r=i.getAttribute("position"),o=new Float32Array(r.count*3);i.setAttribute("color",new be(o,3)),this.add(new Qe(i,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){let t=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{let e=t.geometry.getAttribute("color");x_.copy(this.light.color),v_.copy(this.light.groundColor);for(let n=0,i=e.count;n<i;n++){let r=n<i/2?x_:v_;e.setXYZ(n,r.r,r.g,r.b)}e.needsUpdate=!0}this.light.updateWorldMatrix(!0,!1),t.lookAt(oT.setFromMatrixPosition(this.light.matrixWorld).negate())}},pp=class extends xi{constructor(t=10,e=10,n=4473924,i=8947848){n=new Ht(n),i=new Ht(i);let r=e/2,o=t/e,a=t/2,l=[],c=[];for(let d=0,f=0,m=-a;d<=e;d++,m+=o){l.push(-a,0,m,a,0,m),l.push(m,0,-a,m,0,a);let _=d===r?n:i;_.toArray(c,f),f+=3,_.toArray(c,f),f+=3,_.toArray(c,f),f+=3,_.toArray(c,f),f+=3}let u=new de;u.setAttribute("position",new qt(l,3)),u.setAttribute("color",new qt(c,3));let h=new Cn({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}},mp=class extends xi{constructor(t=10,e=16,n=8,i=64,r=4473924,o=8947848){r=new Ht(r),o=new Ht(o);let a=[],l=[];if(e>1)for(let h=0;h<e;h++){let d=h/e*(Math.PI*2),f=Math.sin(d)*t,m=Math.cos(d)*t;a.push(0,0,0),a.push(f,0,m);let _=h&1?r:o;l.push(_.r,_.g,_.b),l.push(_.r,_.g,_.b)}for(let h=0;h<n;h++){let d=h&1?r:o,f=t-t/n*h;for(let m=0;m<i;m++){let _=m/i*(Math.PI*2),g=Math.sin(_)*f,p=Math.cos(_)*f;a.push(g,0,p),l.push(d.r,d.g,d.b),_=(m+1)/i*(Math.PI*2),g=Math.sin(_)*f,p=Math.cos(_)*f,a.push(g,0,p),l.push(d.r,d.g,d.b)}}let c=new de;c.setAttribute("position",new qt(a,3)),c.setAttribute("color",new qt(l,3));let u=new Cn({vertexColors:!0,toneMapped:!1});super(c,u),this.type="PolarGridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}},y_=new U,wc=new U,M_=new U,gp=class extends Ae{constructor(t,e,n){super(),this.light=t,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",e===void 0&&(e=1);let i=new de;i.setAttribute("position",new qt([-e,e,0,e,e,0,e,-e,0,-e,-e,0,-e,e,0],3));let r=new Cn({fog:!1,toneMapped:!1});this.lightPlane=new Xi(i,r),this.add(this.lightPlane),i=new de,i.setAttribute("position",new qt([0,0,0,0,0,1],3)),this.targetLine=new Xi(i,r),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),y_.setFromMatrixPosition(this.light.matrixWorld),wc.setFromMatrixPosition(this.light.target.matrixWorld),M_.subVectors(wc,y_),this.lightPlane.lookAt(wc),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(wc),this.targetLine.scale.z=M_.length()}},Ec=new U,Ke=new Po,_p=class extends xi{constructor(t){let e=new de,n=new Cn({color:16777215,vertexColors:!0,toneMapped:!1}),i=[],r=[],o={};a("n1","n2"),a("n2","n4"),a("n4","n3"),a("n3","n1"),a("f1","f2"),a("f2","f4"),a("f4","f3"),a("f3","f1"),a("n1","f1"),a("n2","f2"),a("n3","f3"),a("n4","f4"),a("p","n1"),a("p","n2"),a("p","n3"),a("p","n4"),a("u1","u2"),a("u2","u3"),a("u3","u1"),a("c","t"),a("p","c"),a("cn1","cn2"),a("cn3","cn4"),a("cf1","cf2"),a("cf3","cf4");function a(m,_){l(m),l(_)}function l(m){i.push(0,0,0),r.push(0,0,0),o[m]===void 0&&(o[m]=[]),o[m].push(i.length/3-1)}e.setAttribute("position",new qt(i,3)),e.setAttribute("color",new qt(r,3)),super(e,n),this.type="CameraHelper",this.camera=t,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=o,this.update();let c=new Ht(16755200),u=new Ht(16711680),h=new Ht(43775),d=new Ht(16777215),f=new Ht(3355443);this.setColors(c,u,h,d,f)}setColors(t,e,n,i,r){let a=this.geometry.getAttribute("color");a.setXYZ(0,t.r,t.g,t.b),a.setXYZ(1,t.r,t.g,t.b),a.setXYZ(2,t.r,t.g,t.b),a.setXYZ(3,t.r,t.g,t.b),a.setXYZ(4,t.r,t.g,t.b),a.setXYZ(5,t.r,t.g,t.b),a.setXYZ(6,t.r,t.g,t.b),a.setXYZ(7,t.r,t.g,t.b),a.setXYZ(8,t.r,t.g,t.b),a.setXYZ(9,t.r,t.g,t.b),a.setXYZ(10,t.r,t.g,t.b),a.setXYZ(11,t.r,t.g,t.b),a.setXYZ(12,t.r,t.g,t.b),a.setXYZ(13,t.r,t.g,t.b),a.setXYZ(14,t.r,t.g,t.b),a.setXYZ(15,t.r,t.g,t.b),a.setXYZ(16,t.r,t.g,t.b),a.setXYZ(17,t.r,t.g,t.b),a.setXYZ(18,t.r,t.g,t.b),a.setXYZ(19,t.r,t.g,t.b),a.setXYZ(20,t.r,t.g,t.b),a.setXYZ(21,t.r,t.g,t.b),a.setXYZ(22,t.r,t.g,t.b),a.setXYZ(23,t.r,t.g,t.b),a.setXYZ(24,e.r,e.g,e.b),a.setXYZ(25,e.r,e.g,e.b),a.setXYZ(26,e.r,e.g,e.b),a.setXYZ(27,e.r,e.g,e.b),a.setXYZ(28,e.r,e.g,e.b),a.setXYZ(29,e.r,e.g,e.b),a.setXYZ(30,e.r,e.g,e.b),a.setXYZ(31,e.r,e.g,e.b),a.setXYZ(32,n.r,n.g,n.b),a.setXYZ(33,n.r,n.g,n.b),a.setXYZ(34,n.r,n.g,n.b),a.setXYZ(35,n.r,n.g,n.b),a.setXYZ(36,n.r,n.g,n.b),a.setXYZ(37,n.r,n.g,n.b),a.setXYZ(38,i.r,i.g,i.b),a.setXYZ(39,i.r,i.g,i.b),a.setXYZ(40,r.r,r.g,r.b),a.setXYZ(41,r.r,r.g,r.b),a.setXYZ(42,r.r,r.g,r.b),a.setXYZ(43,r.r,r.g,r.b),a.setXYZ(44,r.r,r.g,r.b),a.setXYZ(45,r.r,r.g,r.b),a.setXYZ(46,r.r,r.g,r.b),a.setXYZ(47,r.r,r.g,r.b),a.setXYZ(48,r.r,r.g,r.b),a.setXYZ(49,r.r,r.g,r.b),a.needsUpdate=!0}update(){let t=this.geometry,e=this.pointMap,n=1,i=1;Ke.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),en("c",e,t,Ke,0,0,-1),en("t",e,t,Ke,0,0,1),en("n1",e,t,Ke,-n,-i,-1),en("n2",e,t,Ke,n,-i,-1),en("n3",e,t,Ke,-n,i,-1),en("n4",e,t,Ke,n,i,-1),en("f1",e,t,Ke,-n,-i,1),en("f2",e,t,Ke,n,-i,1),en("f3",e,t,Ke,-n,i,1),en("f4",e,t,Ke,n,i,1),en("u1",e,t,Ke,n*.7,i*1.1,-1),en("u2",e,t,Ke,-n*.7,i*1.1,-1),en("u3",e,t,Ke,0,i*2,-1),en("cf1",e,t,Ke,-n,0,1),en("cf2",e,t,Ke,n,0,1),en("cf3",e,t,Ke,0,-i,1),en("cf4",e,t,Ke,0,i,1),en("cn1",e,t,Ke,-n,0,-1),en("cn2",e,t,Ke,n,0,-1),en("cn3",e,t,Ke,0,-i,-1),en("cn4",e,t,Ke,0,i,-1),t.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}};function en(s,t,e,n,i,r,o){Ec.set(i,r,o).unproject(n);let a=t[s];if(a!==void 0){let l=e.getAttribute("position");for(let c=0,u=a.length;c<u;c++)l.setXYZ(a[c],Ec.x,Ec.y,Ec.z)}}var Ac=new Tn,xp=class extends xi{constructor(t,e=16776960){let n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(24),r=new de;r.setIndex(new be(n,1)),r.setAttribute("position",new be(i,3)),super(r,new Cn({color:e,toneMapped:!1})),this.object=t,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(t){if(t!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&Ac.setFromObject(this.object),Ac.isEmpty())return;let e=Ac.min,n=Ac.max,i=this.geometry.attributes.position,r=i.array;r[0]=n.x,r[1]=n.y,r[2]=n.z,r[3]=e.x,r[4]=n.y,r[5]=n.z,r[6]=e.x,r[7]=e.y,r[8]=n.z,r[9]=n.x,r[10]=e.y,r[11]=n.z,r[12]=n.x,r[13]=n.y,r[14]=e.z,r[15]=e.x,r[16]=n.y,r[17]=e.z,r[18]=e.x,r[19]=e.y,r[20]=e.z,r[21]=n.x,r[22]=e.y,r[23]=e.z,i.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(t){return this.object=t,this.update(),this}copy(t,e){return super.copy(t,e),this.object=t.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}},vp=class extends xi{constructor(t,e=16776960){let n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new de;r.setIndex(new be(n,1)),r.setAttribute("position",new qt(i,3)),super(r,new Cn({color:e,toneMapped:!1})),this.box=t,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(t){let e=this.box;e.isEmpty()||(e.getCenter(this.position),e.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(t))}dispose(){this.geometry.dispose(),this.material.dispose()}},yp=class extends Xi{constructor(t,e=1,n=16776960){let i=n,r=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],o=new de;o.setAttribute("position",new qt(r,3)),o.computeBoundingSphere(),super(o,new Cn({color:i,toneMapped:!1})),this.type="PlaneHelper",this.plane=t,this.size=e;let a=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],l=new de;l.setAttribute("position",new qt(a,3)),l.computeBoundingSphere(),this.add(new Qe(l,new Wi({color:i,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(t){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(t)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}},S_=new U,Tc,Td,Mp=class extends Ae{constructor(t=new U(0,0,1),e=new U(0,0,0),n=1,i=16776960,r=n*.2,o=r*.2){super(),this.type="ArrowHelper",Tc===void 0&&(Tc=new de,Tc.setAttribute("position",new qt([0,0,0,0,1,0],3)),Td=new Fo(0,.5,1,5,1),Td.translate(0,-.5,0)),this.position.copy(e),this.line=new Xi(Tc,new Cn({color:i,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Qe(Td,new Wi({color:i,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(t),this.setLength(n,r,o)}setDirection(t){if(t.y>.99999)this.quaternion.set(0,0,0,1);else if(t.y<-.99999)this.quaternion.set(1,0,0,0);else{S_.set(t.z,0,-t.x).normalize();let e=Math.acos(t.y);this.quaternion.setFromAxisAngle(S_,e)}}setLength(t,e=t*.2,n=e*.2){this.line.scale.set(1,Math.max(1e-4,t-e),1),this.line.updateMatrix(),this.cone.scale.set(n,e,n),this.cone.position.y=t,this.cone.updateMatrix()}setColor(t){this.line.material.color.set(t),this.cone.material.color.set(t)}copy(t){return super.copy(t,!1),this.line.copy(t.line),this.cone.copy(t.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}},Sp=class extends xi{constructor(t=1){let e=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new de;i.setAttribute("position",new qt(e,3)),i.setAttribute("color",new qt(n,3));let r=new Cn({vertexColors:!0,toneMapped:!1});super(i,r),this.type="AxesHelper"}setColors(t,e,n){let i=new Ht,r=this.geometry.attributes.color.array;return i.set(t),i.toArray(r,0),i.toArray(r,3),i.set(e),i.toArray(r,6),i.toArray(r,9),i.set(n),i.toArray(r,12),i.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}},bp=class{constructor(){this.type="ShapePath",this.color=new Ht,this.subPaths=[],this.currentPath=null}moveTo(t,e){return this.currentPath=new Mr,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,n,i){return this.currentPath.quadraticCurveTo(t,e,n,i),this}bezierCurveTo(t,e,n,i,r,o){return this.currentPath.bezierCurveTo(t,e,n,i,r,o),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(t){function e(p){let v=[];for(let x=0,y=p.length;x<y;x++){let L=p[x],b=new hs;b.curves=L.curves,v.push(b)}return v}function n(p,v){let x=v.length,y=!1;for(let L=x-1,b=0;b<x;L=b++){let C=v[L],P=v[b],w=P.x-C.x,S=P.y-C.y;if(Math.abs(S)>Number.EPSILON){if(S<0&&(C=v[b],w=-w,P=v[L],S=-S),p.y<C.y||p.y>P.y)continue;if(p.y===C.y){if(p.x===C.x)return!0}else{let D=S*(p.x-C.x)-w*(p.y-C.y);if(D===0)return!0;if(D<0)continue;y=!y}}else{if(p.y!==C.y)continue;if(P.x<=p.x&&p.x<=C.x||C.x<=p.x&&p.x<=P.x)return!0}}return y}let i=Gi.isClockWise,r=this.subPaths;if(r.length===0)return[];let o,a,l,c=[];if(r.length===1)return a=r[0],l=new hs,l.curves=a.curves,c.push(l),c;let u=!i(r[0].getPoints());u=t?!u:u;let h=[],d=[],f=[],m=0,_;d[m]=void 0,f[m]=[];for(let p=0,v=r.length;p<v;p++)a=r[p],_=a.getPoints(),o=i(_),o=t?!o:o,o?(!u&&d[m]&&m++,d[m]={s:new hs,p:_},d[m].s.curves=a.curves,u&&m++,f[m]=[]):f[m].push({h:a,p:_[0]});if(!d[0])return e(r);if(d.length>1){let p=!1,v=0;for(let x=0,y=d.length;x<y;x++)h[x]=[];for(let x=0,y=d.length;x<y;x++){let L=f[x];for(let b=0;b<L.length;b++){let C=L[b],P=!0;for(let w=0;w<d.length;w++)n(C.p,d[w].p)&&(x!==w&&v++,P?(P=!1,h[w].push(C)):p=!0);P&&h[x].push(C)}}v>0&&p===!1&&(f=h)}let g;for(let p=0,v=d.length;p<v;p++){l=d[p].s,c.push(l),g=f[p];for(let x=0,y=g.length;x<y;x++)l.holes.push(g[x].h)}return c}},wp=class extends si{constructor(t=1,e=1,n=1,i={}){console.warn('THREE.WebGLMultipleRenderTargets has been deprecated and will be removed in r172. Use THREE.WebGLRenderTarget and set the "count" parameter to enable MRT.'),super(t,e,{...i,count:n}),this.isWebGLMultipleRenderTargets=!0}get texture(){return this.textures}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"164"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="164");import*as aT from"./visualization_shared.js";var Wp=["#4ec9b0","#569cd6","#ce9178","#dcdcaa","#c586c0","#9cdcfe","#d7ba7d","#608b4e","#d16969","#b5cea8"];function lT(){return aT}function pe(s){return typeof s=="string"?s.trim():""}function We(s){let t=Number(s);return Number.isFinite(t)?Math.abs(t)>=1e3||Math.abs(t)>0&&Math.abs(t)<.001?t.toExponential(3):t.toFixed(4).replace(/\.?0+$/,""):String(s)}function ju(s,t,e){return!s||typeof getComputedStyle!="function"?e:getComputedStyle(s).getPropertyValue(t).trim()||e}function qp(s){return{plotBg:ju(s,"--rumoca-results-plot-bg","#151515"),grid:ju(s,"--rumoca-results-plot-grid","#333333"),axis:ju(s,"--rumoca-results-plot-axis","#888888")}}function Kx(s,t){return ju(s,`--rumoca-results-series-${t%Wp.length+1}`,Wp[t%Wp.length])}function fl(s){let e=String(s||"rumoca_plot").trim().replace(/[^a-zA-Z0-9._-]+/g,"_").replace(/^_+|_+$/g,"");return e.length>0?e:"rumoca_plot"}var cT=Object.freeze(["loadViews","saveViews","resetViews","savePng","saveWebm","notify"]);function Vo(s){let t=pe(s).toLowerCase();return t==="scatter"||t==="3d"?t:"timeseries"}function Ho(s,t){let e=Vo(s),n=Number.isFinite(t)?Math.max(0,Math.floor(t)):0,i=n+1;return e==="scatter"?{id:`scatter_${i}`,title:"Scatter",type:"scatter",x:"time",y:["x"],scatterSeries:[{name:"x vs time",x:"time",y:"x"}]}:e==="3d"?{id:`viewer_${i}`,title:"3D View",type:"3d"}:{id:n===0?"states_time":`timeseries_${i}`,title:n===0?"States vs Time":"Time Series",type:"timeseries",x:"time",y:["*states"]}}function Yp(s){return String(s||"").split(/[\n,]/).map(pe).filter(Boolean)}function pl(s){return Yi(s).map(pe).filter(Boolean).join(", ")}function jx(s){let t=[],e=String(s||"").split(/\n/);for(let n of e){let i=pe(n);if(!i)continue;let r=i.split("|").map(pe);r.length<3||!r[1]||!r[2]||t.push({name:r[0]||`${r[2]} vs ${r[1]}`,x:r[1],y:r[2]})}return t}function Qu(s){return Yi(s).filter(function(t){return t&&typeof t=="object"}).map(function(t){let e=pe(t.name),n=pe(t.x),i=pe(t.y);return!n||!i?"":`${e||`${i} vs ${n}`} | ${n} | ${i}`}).filter(Boolean).join(`
`)}function ml(s,t){let e=[],n=Array.isArray(t)?t:[];for(let i=0;i<n.length;i+=1){let r=n[i]&&typeof n[i]=="object"?n[i]:Ho("timeseries",i),o=Vo(r.type),a=pe(r.title)||Ho(o,i).title,l={id:pe(r.id)||Ho(o,i).id,title:a,type:o,x:o==="3d"?void 0:pe(r.x)||void 0,y:o==="3d"?[]:Yp(r.yText!==void 0?r.yText:pl(r.y)),scatterSeries:o==="scatter"?jx(r.scatterSeriesText):void 0,script:o==="3d"&&pe(r.script)||void 0,scriptPath:o==="3d"&&pe(r.scriptPath)||void 0};e.push(l)}return s.normalizeVisualizationViews(e)}function ko(s,t){if(!Array.isArray(s)||s.length===0)return null;let e=pe(t);return e.length>0&&s.some(n=>n&&n.id===e)?e:s[0].id}function Qx(s){if(!s||typeof s!="object")return[];let t=[],e=Number(s.compileSeconds),n=Number(s.simulateSeconds),i=Number(s.points),r=Number(s.variables);return Number.isFinite(e)&&t.push(`compile ${We(e)}s`),Number.isFinite(n)&&t.push(`simulate ${We(n)}s`),Number.isFinite(i)&&t.push(`points ${Math.max(0,Math.floor(i))}`),Number.isFinite(r)&&t.push(`vars ${Math.max(0,Math.floor(r))}`),t}function tv(s){return s&&typeof s=="object"?pe(s.path)||pe(s.runPath):""}function uT(s){let t=Array.isArray(s?.names)?s.names.map(String):[],e=Number.isFinite(s?.nStates)?Math.max(0,s.nStates):0;return t.slice(0,e)}function hT(s){let t=Array.isArray(s?.names)?s.names.map(String):[],e=Number.isFinite(s?.nStates)?Math.max(0,s.nStates):0;return t.slice(e)}function dT(s){return Array.isArray(s?.names)?s.names.map(String):[]}function fT(s,t){if(!t||typeof t!="object")return"";if(t.type==="3d")return pe(t.title)||"3D view";if(t.type==="scatter")return Yi(t.scatterSeries).map(r=>pe(r?.name)||pe(r?.y)).filter(Boolean).slice(0,4).join(", ");let e=Yi(t.y).map(pe).filter(Boolean),n=[];for(let i of e)i==="*states"?n.push(...uT(s)):i==="*outputs"?n.push(...hT(s)):i==="*all"?n.push(...dT(s)):n.push(i);return n.slice(0,6).join(", ")}function pT(s,t){let e=document.createElement("div");e.className="rumoca-results-run-summary";let n=document.createElement("div");n.className="rumoca-results-run-summary-title";let i=document.createElement("div");return i.className="rumoca-results-run-summary-details",e.appendChild(n),e.appendChild(i),{element:e,update(r,o,a,l){if(!r){e.hidden=!0;return}e.hidden=!1;let c=tv(t),u=fT(r,o),h=Qx(a);n.textContent=`Simulation completed: ${l||"model"}`,i.textContent=[c?`Saved to ${c}`:"",u?`Plotted ${u}`:"",h.length?h.join(", "):""].filter(Boolean).join(" \xB7 ")}}}function ev(s){let t=s&&typeof s=="object"?s:{};return{loadViews:typeof t.loadViews=="function"?t.loadViews:async function(){},saveViews:typeof t.saveViews=="function"?t.saveViews:async function(e,n){return n},resetViews:typeof t.resetViews=="function"?t.resetViews:async function(){},persistState:typeof t.persistState=="function"?t.persistState:function(){},notify:typeof t.notify=="function"?t.notify:function(){},savePng:typeof t.savePng=="function"?t.savePng:null,saveWebm:typeof t.saveWebm=="function"?t.saveWebm:null}}function Yi(s){return Array.isArray(s)?s:[]}function nv(s,t){s.innerHTML="";for(let e of Yi(t)){let n=document.createElement("span");n.style.display="inline-flex",n.style.alignItems="center",n.style.gap="6px",n.style.marginRight="10px";let i=document.createElement("span");i.className="rumoca-results-swatch",i.style.background=e.color;let r=document.createElement("span");r.textContent=e.name,n.appendChild(i),n.appendChild(r),s.appendChild(n)}}function $p(s,t,e,n={}){let i=[],r=t&&t.simDetails?t.simDetails:{},o=r.actual||{},a=r.requested||{},l=Number(s&&s.compileSeconds),c=Number(s&&s.simulateSeconds),u=Number(s&&s.points),h=Number(s&&s.variables),d=s&&typeof s=="object"&&s.compilePhaseSeconds?s.compilePhaseSeconds:null,f=pe(n.modelName),m=pe(n.resultPath);if((f||m)&&(i.push("Result"),f&&i.push(`  model: ${f}`),m&&i.push(`  output: ${m}`),i.push("")),e&&e.type==="scatter"?i.push(`Scatter series: ${e.y.length}`):e&&e.type==="3d"?i.push(`3D points: ${e.points.length}`):e&&e.y&&i.push(`Series: ${e.y.length}`),(Number.isFinite(l)||Number.isFinite(c)||Number.isFinite(u)||Number.isFinite(h))&&(i.length>0&&i.push(""),i.push("Run"),Number.isFinite(l)&&i.push(`  compile: ${We(l)}s`),Number.isFinite(c)&&i.push(`  simulate: ${We(c)}s`),Number.isFinite(u)&&i.push(`  points: ${Math.max(0,Math.floor(u))}`),Number.isFinite(h)&&i.push(`  vars: ${Math.max(0,Math.floor(h))}`)),d&&typeof d=="object"){let _=Number(d.instantiate),g=Number(d.typecheck),p=Number(d.flatten),v=Number(d.todae);(Number.isFinite(_)||Number.isFinite(g)||Number.isFinite(p)||Number.isFinite(v))&&(i.push(""),i.push("Compile Phases"),Number.isFinite(_)&&i.push(`  instantiate: ${We(_)}s`),Number.isFinite(g)&&i.push(`  typecheck: ${We(g)}s`),Number.isFinite(p)&&i.push(`  flatten: ${We(p)}s`),Number.isFinite(v)&&i.push(`  todae: ${We(v)}s`))}return i.push(""),i.push("Actual"),o.t_start!==void 0&&i.push(`  t_start: ${We(o.t_start)}`),o.t_end!==void 0&&i.push(`  t_end: ${We(o.t_end)}`),i.push(""),i.push("Requested"),a.solver!==void 0&&i.push(`  solver: ${a.solver}`),a.t_start!==void 0&&i.push(`  t_start: ${We(a.t_start)}`),a.t_end!==void 0&&i.push(`  t_end: ${We(a.t_end)}`),a.dt!==void 0&&i.push(`  dt: ${We(a.dt)}`),i.join(`
`)}function Zp(s,t){if(typeof document>"u")return;let e=document.createElement("a");e.href=s,e.download=t,document.body.appendChild(e),e.click(),document.body.removeChild(e)}function Jp(s){if(!(!s||typeof s.toDataURL!="function"))return s.toDataURL("image/png")}function Kp(s){let t=document.createElement("div");t.className="rumoca-results-details";let e=document.createElement("div");e.className="rumoca-results-details-card";let n=document.createElement("pre"),i=document.createElement("button");return i.textContent="Close",e.appendChild(n),e.appendChild(i),t.appendChild(e),i.addEventListener("click",function(){t.classList.remove("open")}),t.addEventListener("click",function(r){r.target===t&&t.classList.remove("open")}),{element:t,open:function(){n.textContent=s(),t.classList.add("open")}}}function mT(){let s=document.createElement("div");return s.className="rumoca-results-status",{element:s,show:function(t,e){let n=pe(t);s.className=`rumoca-results-status${n?" open":""}${e?` ${e}`:""}`,s.textContent=n},clear:function(){s.className="rumoca-results-status",s.textContent=""}}}function Xp(s){if(Array.isArray(s))return s;if(s&&typeof s=="object"&&Array.isArray(s.views))return s.views}function gT(s){let t=s.shared,e=s.bridge,n=s.modelRef,i=typeof s.getPayload=="function"?s.getPayload:function(){return null},r=document.createElement("div");r.className="rumoca-results-settings";let o=document.createElement("div");o.className="rumoca-results-settings-card",r.appendChild(o);let a=document.createElement("div");a.className="rumoca-results-settings-header";let l=document.createElement("div");l.className="rumoca-results-settings-title",l.textContent="Visualization Settings";let c=document.createElement("div");c.className="rumoca-results-settings-status",a.appendChild(l),a.appendChild(c),o.appendChild(a);let u=document.createElement("div");u.className="rumoca-results-settings-body",o.appendChild(u);let h=document.createElement("div");h.className="rumoca-results-settings-sidebar";let d=document.createElement("div");d.className="rumoca-results-settings-list";let f=document.createElement("div");f.className="rumoca-results-settings-actions";let m=document.createElement("button");m.textContent="Add Time";let _=document.createElement("button");_.textContent="Add Scatter";let g=document.createElement("button");g.textContent="Add 3D";let p=document.createElement("button");p.textContent="Remove",f.appendChild(m),f.appendChild(_),f.appendChild(g),f.appendChild(p),h.appendChild(d),h.appendChild(f),u.appendChild(h);let v=document.createElement("div");v.className="rumoca-results-settings-editor",u.appendChild(v);function x(B,O){let Z=document.createElement("label");Z.className="rumoca-results-field";let Y=document.createElement("span");return Y.className="rumoca-results-field-label",Y.textContent=B,Z.appendChild(Y),Z.appendChild(O),Z}function y(B,O){let Z=document.createElement("div");Z.className="rumoca-results-field";let Y=document.createElement("span");return Y.className="rumoca-results-field-label",Y.textContent=B,Z.appendChild(Y),Z.appendChild(O),Z}let L=document.createElement("input"),b=document.createElement("select");for(let B of["timeseries","scatter","3d"]){let O=document.createElement("option");O.value=B,O.textContent=B,b.appendChild(O)}let C=document.createElement("input"),P=document.createElement("textarea");P.rows=3;let w=document.createElement("div");w.className="rumoca-results-field-hint",w.textContent="One channel per line or comma separated. Wildcards: *states, *outputs, *all.";let S=document.createElement("textarea");S.rows=4;let D=document.createElement("div");D.className="rumoca-results-field-hint",D.textContent="One line per series: name | x | y";let z=document.createElement("input"),R=x("Title",L),V=x("Type",b),X=x("X",C),nt=x("Y",P);nt.appendChild(w);let tt=document.createElement("div");tt.className="rumoca-results-picker";let j=y("Channels",tt),rt=x("Scatter Series",S);rt.appendChild(D);let at=x("3D Script Path",z);v.appendChild(R),v.appendChild(V),v.appendChild(X),v.appendChild(nt),v.appendChild(j),v.appendChild(rt),v.appendChild(at);let Mt=document.createElement("div");Mt.className="rumoca-results-settings-actions";let Tt=document.createElement("button");Tt.textContent="Reset";let yt=document.createElement("button");yt.textContent="Cancel";let et=document.createElement("button");et.textContent="Save",et.className="primary",Mt.appendChild(Tt),Mt.appendChild(yt),Mt.appendChild(et),o.appendChild(Mt);let ut=[],pt=-1;function ct(B,O){let Z=pe(B);c.className=`rumoca-results-settings-status${Z?" open":""}${O?` ${O}`:""}`,c.textContent=Z}function zt(){if(pt<0||pt>=ut.length)return;let B=ut[pt];B.title=L.value,B.type=b.value,B.x=C.value,B.yText=P.value,B.scatterSeriesText=S.value,B.scriptPath=z.value}function $t(B){let O=Vo(B),Z=O!=="scatter"&&O!=="3d";X.style.display=Z?"grid":"none",nt.style.display=Z?"grid":"none",rt.style.display=O==="scatter"?"grid":"none",at.style.display=O==="3d"?"grid":"none",mt(Z)}function H(){return new Set(Yp(P.value))}function jt(B,O){P.value=t.toggleSeriesName(P.value,B,O),zt()}function ot(B,O,Z){let Y=document.createElement("div");Y.className="rumoca-results-picker-group";let it=document.createElement("div");it.className="rumoca-results-picker-heading",it.textContent=`${B} (${O.length})`,Y.appendChild(it);let xt=document.createElement("div");if(xt.className="rumoca-results-picker-list",O.length===0){let vt=document.createElement("div");vt.className="rumoca-results-picker-empty",vt.textContent=`No ${B.toLowerCase()} available`,xt.appendChild(vt)}for(let vt of O){let Zt=document.createElement("label");Zt.className="rumoca-results-picker-item";let bt=document.createElement("input");bt.type="checkbox",bt.checked=Z.has(vt),bt.addEventListener("change",function(){jt(vt,bt.checked)});let Ft=document.createElement("span");Ft.textContent=vt,Zt.appendChild(bt),Zt.appendChild(Ft),xt.appendChild(Zt)}return Y.appendChild(xt),Y}function mt(B){let O=i(),Z=t.availableStateNames(O),Y=t.availableOutputNames(O);if(tt.innerHTML="",!B||Z.length+Y.length===0){j.style.display="none";return}j.style.display="grid";let it=H();tt.appendChild(ot("States",Z,it)),tt.appendChild(ot("Outputs",Y,it))}function st(){d.innerHTML="";for(let B=0;B<ut.length;B+=1){let O=ut[B],Z=document.createElement("button");Z.className=`rumoca-results-settings-item${B===pt?" active":""}`,Z.textContent=`${pe(O.title)||O.id} [${Vo(O.type)}]`,Z.addEventListener("click",function(){zt(),pt=B,st(),Et()}),d.appendChild(Z)}}function Et(){if(pt<0||pt>=ut.length){L.value="",b.value="timeseries",C.value="",P.value="",S.value="",z.value="",$t("timeseries");return}let B=ut[pt];L.value=pe(B.title),b.value=Vo(B.type),C.value=pe(B.x),P.value=B.yText!==void 0?String(B.yText):pl(B.y),S.value=B.scatterSeriesText!==void 0?String(B.scatterSeriesText):Qu(B.scatterSeries),z.value=pe(B.scriptPath),$t(B.type)}function ft(B){if(ut=t.normalizeVisualizationViews(B).map(function(Z,Y){let it=Ho(Z.type,Y);return{id:Z.id||it.id,title:Z.title||it.title,type:Z.type||it.type,x:Z.type==="3d"?"":Z.x||it.x||"",y:Z.type==="3d"?[]:Yi(Z.y),yText:Z.type==="3d"?"":pl(Z.y),scatterSeries:Yi(Z.scatterSeries),scatterSeriesText:Qu(Z.scatterSeries),script:pe(Z.script),scriptPath:pe(Z.scriptPath)}}),ut.length===0){ft(t.defaultVisualizationViews());return}(pt<0||pt>=ut.length)&&(pt=0),st(),Et()}function Ct(B){let O=Ho(B,ut.length);return{id:O.id,title:O.title,type:O.type,x:O.type==="3d"?"":O.x||"",y:O.type==="3d"?[]:Yi(O.y),yText:O.type==="3d"?"":pl(O.y),scatterSeries:Yi(O.scatterSeries),scatterSeriesText:Qu(O.scatterSeries),script:pe(O.script),scriptPath:pe(O.scriptPath)}}function Gt(){r.classList.remove("open"),ct("","")}async function N(B){let O=B;if(e.loadViews)try{let Z=await e.loadViews(n),Y=Xp(Z);Y&&(O=Y)}catch(Z){ct(String(Z&&Z.message?Z.message:Z),"error")}ft(O),r.classList.add("open")}function A(){return zt(),ml(t,ut)}return m.addEventListener("click",function(){zt(),ut.push(Ct("timeseries")),pt=ut.length-1,st(),Et()}),_.addEventListener("click",function(){zt(),ut.push(Ct("scatter")),pt=ut.length-1,st(),Et()}),g.addEventListener("click",function(){zt(),ut.push(Ct("3d")),pt=ut.length-1,st(),Et()}),p.addEventListener("click",function(){pt<0||pt>=ut.length||(ut.splice(pt,1),pt>=ut.length&&(pt=ut.length-1),ut.length===0&&(ut.push(Ct("timeseries")),pt=0),st(),Et())}),b.addEventListener("change",function(){$t(b.value)}),P.addEventListener("input",function(){zt();let B=Vo(b.value);mt(B!=="scatter"&&B!=="3d")}),yt.addEventListener("click",Gt),r.addEventListener("click",function(B){B.target===r&&Gt()}),Tt.addEventListener("click",async function(){try{let B=t.defaultVisualizationViews();if(e.resetViews){let O=await e.resetViews(n),Z=Xp(O);Z&&(B=Z)}ft(B),ct("Views reset.","ok"),e.notify("Views reset.")}catch(B){ct(String(B&&B.message?B.message:B),"error")}}),et.addEventListener("click",async function(){try{let B=A(),O=B;if(e.saveViews){let Z=await e.saveViews(n,B),Y=Xp(Z);Y&&(O=Y)}typeof s.onSave=="function"&&s.onSave(O),e.notify("Views saved."),Gt()}catch(B){ct(String(B&&B.message?B.message:B),"error")}}),{element:r,open:N,close:Gt}}function _T(s){let t=s.viewModel,e=s.bridge,n=s.modelName,i=s.metrics,r=s.payload,o=document.createElement("section");o.className="rumoca-results-view";let a=document.createElement("div");a.className="rumoca-results-canvas-wrap";let l=document.createElement("div");l.style.position="absolute",l.style.inset="0";let c=document.createElement("div");c.className="rumoca-results-overlay",c.textContent="Hover plot for values";let u=document.createElement("div");u.className="rumoca-results-legend";let h=document.createElement("div");h.className="rumoca-results-error",h.style.display="none",a.appendChild(l),a.appendChild(c),a.appendChild(u),a.appendChild(h),o.appendChild(a);let d=document.createElement("div");d.className="rumoca-results-controls";let f=document.createElement("button");f.textContent="Run Details";let m=document.createElement("button");m.textContent="Save PNG",d.appendChild(f),d.appendChild(m),o.appendChild(d);let _=Kp(function(){return $p(i,r,t,s.context)});o.appendChild(_.element),f.addEventListener("click",function(){_.open()});let g=null;function p(){if(g&&(g.destroy(),g=null),!Mn||!t.x||t.y.length===0){h.style.display="flex",h.textContent="uPlot unavailable or no time-series data.",l.innerHTML="",u.innerHTML="";return}h.style.display="none";let v=qp(o),x=[t.x.values],y=[{}],L=[];for(let b=0;b<t.y.length;b+=1){let C=t.y[b],P=C.color||Kx(o,b);x.push(C.values),y.push({label:C.name,stroke:P,width:2}),L.push({name:C.name,color:P})}nv(u,L),g=new Mn({width:Math.max(320,l.clientWidth||640),height:Math.max(220,l.clientHeight||320),padding:[8,8,28,8],scales:{x:{time:!1}},axes:[{stroke:v.axis,grid:{stroke:v.grid,width:1},label:t.x.name,labelGap:2,size:36},{stroke:v.axis,grid:{stroke:v.grid,width:1}}],series:y,cursor:{drag:{x:!0,y:!0}},hooks:{setCursor:[function(b){let C=b.cursor.idx;if(C==null||C<0||C>=t.x.values.length){c.textContent="Hover plot for values";return}let P=[`${t.x.name}=${We(t.x.values[C])}`];for(let w of t.y)P.push(`${w.name}=${We(w.values[C])}`);c.textContent=P.join(" | ")}]},legend:{show:!1}},x,l)}return m.addEventListener("click",function(){if(!g||!g.root)return;let v=g.root.querySelector("canvas"),x=Jp(v);if(!x)return;let y=`${fl(n)}_plot.png`;if(e.savePng){e.savePng({dataUrl:x,defaultName:y,view:t});return}Zp(x,y)}),o.__dispose=function(){g&&(g.destroy(),g=null)},o.__resize=p,p(),o}function Jx(s){let t=Number.POSITIVE_INFINITY,e=Number.NEGATIVE_INFINITY;for(let n of Yi(s)){let i=Number(n);Number.isFinite(i)&&(t=Math.min(t,i),e=Math.max(e,i))}return!Number.isFinite(t)||!Number.isFinite(e)?{min:-1,max:1}:t===e?{min:t-1,max:e+1}:{min:t,max:e}}function xT(s){let t=s.viewModel,e=s.bridge,n=s.modelName,i=s.metrics,r=s.payload,o=document.createElement("section");o.className="rumoca-results-view";let a=document.createElement("div");a.className="rumoca-results-canvas-wrap";let l=document.createElement("canvas");l.className="rumoca-results-canvas";let c=document.createElement("div");c.className="rumoca-results-overlay";let u=document.createElement("div");u.className="rumoca-results-legend";let h=document.createElement("div");h.className="rumoca-results-error",h.style.display="none",a.appendChild(l),a.appendChild(c),a.appendChild(u),a.appendChild(h),o.appendChild(a);let d=document.createElement("div");d.className="rumoca-results-controls";let f=document.createElement("button");f.textContent="Run Details";let m=document.createElement("button");m.textContent="Save PNG",d.appendChild(f),d.appendChild(m),o.appendChild(d);let _=Kp(function(){return $p(i,r,t,s.context)});o.appendChild(_.element),f.addEventListener("click",function(){_.open()});function g(){let p=l.getContext("2d");if(!p||!t.x||t.y.length===0){h.style.display="flex",h.textContent="No scatter data configured.",u.innerHTML="";return}h.style.display="none";let v=Math.max(320,a.clientWidth||640),x=Math.max(220,a.clientHeight||320);l.width=v,l.height=x;let y=t.x.values,L=t.y.flatMap(function(R){return R.values}),b=Jx(y),C=Jx(L),P=36,w=qp(o);p.fillStyle=w.plotBg,p.fillRect(0,0,v,x),p.strokeStyle=w.axis,p.beginPath(),p.moveTo(P,x-P),p.lineTo(v-10,x-P),p.moveTo(P,x-P),p.lineTo(P,10),p.stroke();let S=function(R){return P+(R-b.min)/(b.max-b.min)*(v-P-16)},D=function(R){return x-P-(R-C.min)/(C.max-C.min)*(x-P-16)},z=[];for(let R=0;R<t.y.length;R+=1){let V=t.y[R],X=V.color||Kx(o,R);z.push({name:V.name,color:X}),p.fillStyle=X;let nt=Math.min(t.x.values.length,V.values.length);for(let tt=0;tt<nt;tt+=1){let j=S(Number(t.x.values[tt])),rt=D(Number(V.values[tt]));p.beginPath(),p.arc(j,rt,2.5,0,Math.PI*2),p.fill()}}nv(u,z),c.textContent=`${t.y.length} scatter series`}return m.addEventListener("click",function(){let p=Jp(l);if(!p)return;let v=`${fl(n)}_scatter.png`;if(e.savePng){e.savePng({dataUrl:p,defaultName:v,view:t});return}Zp(p,v)}),o.__dispose=function(){},o.__resize=g,g(),o}function vT(s){let t=s.viewModel,e=s.bridge,n=s.modelName,i=s.metrics,r=s.payload,o=document.createElement("section");o.className="rumoca-results-view";let a=document.createElement("div");a.className="rumoca-results-viewer-wrap";let l=document.createElement("div");l.className="rumoca-results-viewer-host";let c=document.createElement("canvas");c.className="rumoca-results-canvas",l.appendChild(c);let u=document.createElement("div");u.className="rumoca-results-viewer-camera-info",u.textContent="camera: unavailable",l.appendChild(u);let h=document.createElement("div");h.className="rumoca-results-viewer-error",h.style.display="none",l.appendChild(h);let d=document.createElement("div");d.className="rumoca-results-viewer-inspector hidden";let f=document.createElement("div");f.className="title",f.textContent="Scene Objects";let m=document.createElement("div");m.className="actions";let _=document.createElement("button");_.textContent="Focus";let g=document.createElement("label"),p=document.createElement("input");p.type="checkbox",p.checked=!1;let v=document.createElement("span");v.textContent="Follow",g.appendChild(p),g.appendChild(v),m.appendChild(_),m.appendChild(g);let x=document.createElement("div");x.className="objects",d.appendChild(f),d.appendChild(m),d.appendChild(x),l.appendChild(d);let y=document.createElement("div");y.className="rumoca-results-viewer-controls";let L=document.createElement("button");L.textContent="Run Details";let b=document.createElement("button");b.textContent="Objects";let C=document.createElement("div");C.className="transport";let P=document.createElement("button");P.textContent="|<",P.title="Jump to start";let w=document.createElement("button");w.textContent="<<",w.title="Rewind";let S=document.createElement("button");S.innerHTML="&#9654;",S.title="Play / Pause";let D=document.createElement("button");D.textContent=">>",D.title="Fast forward";let z=document.createElement("button");z.textContent=">|",z.title="Jump to end",C.appendChild(P),C.appendChild(w),C.appendChild(S),C.appendChild(D),C.appendChild(z);let R=document.createElement("input");R.type="range",R.min="0";let V=r&&r.allData&&r.allData[0]?r.allData[0].length:1;R.max=String(Math.max(V-1,0)),R.step="1",R.value="0";let X=document.createElement("div");X.className="time",X.textContent="t=0";let nt=document.createElement("button");nt.textContent="Save PNG";let tt=document.createElement("button");tt.textContent="Save WebM",tt.title="Export viewer animation as WebM",y.appendChild(L),y.appendChild(b),y.appendChild(C),y.appendChild(R),y.appendChild(X),y.appendChild(nt),y.appendChild(tt),a.appendChild(l),a.appendChild(y),o.appendChild(a);let j=Kp(function(){return $p(i,r,t,s.context)});o.appendChild(j.element),L.addEventListener("click",function(){j.open()});let rt=null,at=!1,Mt=0,Tt=[],yt="",et=!1,ut=!1,pt=0,ct={x:0,y:.5,z:0};function zt(Q){h.textContent=Q,h.style.display=""}function $t(){h.textContent="",h.style.display="none"}function H(){let Q=l.getBoundingClientRect();c.width=Math.max(1,Math.floor(Q.width)),c.height=Math.max(1,Math.floor(Q.height))}function jt(){if(rt||(rt=c.getContext("2d")),!rt)return;let Q=qp(o);rt.fillStyle=Q.plotBg,rt.fillRect(0,0,c.width,c.height),rt.strokeStyle=Q.grid,rt.beginPath(),rt.moveTo(0,c.height*.8),rt.lineTo(c.width,c.height*.8),rt.stroke()}let ot=r&&Array.isArray(r.names)?r.names:[],mt=r&&Array.isArray(r.allData)?r.allData:[],st=mt.length>0?mt[0]:[];function Et(Q){let dt=ot.indexOf(Q);if(!(dt<0))return mt[dt+1]}let ft={},Ct=Gp,Gt=null,N=null,A=null,B=!1,O={canvas:c,context2d:rt,container:l,THREE:Ct,names:ot,times:st,sampleIndex:0,state:{},getViewportSize:function(){let Q=l.getBoundingClientRect();return{width:Math.max(1,Math.floor(Q.width)),height:Math.max(1,Math.floor(Q.height))}},getValue:function(Q,dt){let Ut=Et(Q);if(!Ut)return;let le=Number.isFinite(dt)?Math.max(0,Math.min(Ut.length-1,Math.floor(dt))):O.sampleIndex;return Ut[le]},getTime:function(Q){let dt=Number.isFinite(Q)?Math.max(0,Math.min(st.length-1,Math.floor(Q))):O.sampleIndex;return st[dt]},enableDefaultViewerRuntime:function(Q){B=!0;let dt=Q&&typeof Q=="object"?Q:{};typeof dt.selectedObjectName=="string"&&dt.selectedObjectName.trim().length>0&&(yt=dt.selectedObjectName.trim()),typeof dt.followSelected=="boolean"&&(et=dt.followSelected,p.checked=et)},refreshDefaultViewerRuntime:function(){at?G(O.sampleIndex||0):(bt(!1),Nt())}};function Z(Q){ut=!!Q,d.classList.toggle("hidden",!ut)}function Y(){let Q=O.state&&O.state.controls,dt=Q&&Q.target;return dt&&Number.isFinite(Number(dt.x))&&Number.isFinite(Number(dt.y))&&Number.isFinite(Number(dt.z))?dt:ct}function it(Q,dt,Ut){let le=O.state&&O.state.controls;if(le&&le.target&&typeof le.target.set=="function"){le.target.set(Number(Q)||0,Number(dt)||0,Number(Ut)||0),typeof le.update=="function"&&le.update();return}ct.x=Number(Q)||0,ct.y=Number(dt)||0,ct.z=Number(Ut)||0;let T=O.state&&O.state.camera;T&&typeof T.lookAt=="function"&&T.lookAt(ct.x,ct.y,ct.z)}function xt(Q){let dt=Q&&typeof Q.name=="string"?Q.name.trim():"";return dt.length>0?dt:String(Q&&Q.type||"Object")+"#"+String(Q&&Q.id||"?")}function vt(Q){let dt=Q&&typeof Q.name=="string"?Q.name.trim():"",Ut=String(Q&&Q.type||"Object");return dt.length>0?dt+" ("+Ut+")":Ut+" #"+String(Q&&Q.id||"?")}function Zt(){if(x.innerHTML="",Tt.length===0){let Q=document.createElement("div");Q.className="object-row",Q.style.cursor="default",Q.style.opacity="0.7",Q.textContent="No scene objects",x.appendChild(Q);return}for(let Q of Tt){let dt=document.createElement("div");dt.className="object-row"+(Q.id===yt?" active":"");let Ut=document.createElement("span");Ut.className="swatch";let le=document.createElement("span");le.textContent=Q.label,dt.appendChild(Ut),dt.appendChild(le),dt.addEventListener("click",function(){yt=Q.id,Zt()}),x.appendChild(dt)}}function bt(Q){let dt=O.state&&O.state.scene;if(!dt||typeof dt.traverse!="function"){Tt=[],Zt();return}let Ut=Date.now();if(!Q&&Ut-pt<250)return;pt=Ut;let le=[];dt.traverse(function(T){!T||T===dt||T.visible===!1||le.push({id:xt(T),label:vt(T),obj:T})}),le.sort(function(T,W){return String(T.label).localeCompare(String(W.label))}),Tt=le,!yt&&Tt.length>0&&(yt=Tt[0].id),yt&&(Tt.some(function(W){return W.id===yt})||(yt=Tt.length>0?Tt[0].id:"")),Zt()}function Ft(){if(!yt)return;let Q=Tt.find(function(dt){return dt.id===yt});return Q?Q.obj:void 0}function ie(){if(!Ct)return;let Q=Ft(),dt=O.state&&O.state.camera;if(!(!Q||!dt))try{let Ut=new Ct.Vector3,le=new Ct.Box3().setFromObject(Q);if(le.isEmpty()?Q.position?Ut.set(Number(Q.position.x)||0,Number(Q.position.y)||0,Number(Q.position.z)||0):Ut.set(0,0,0):le.getCenter(Ut),it(Ut.x,Ut.y,Ut.z),dt.position&&Number.isFinite(Number(dt.position.z))){let T=dt.position.clone().sub(Ut);T.lengthSq()<1e-8&&T.set(2.5,1.7,2.8),T.normalize().multiplyScalar(3),dt.position.copy(Ut.clone().add(T))}typeof dt.lookAt=="function"&&dt.lookAt(Ut),typeof O.state.renderNow=="function"&&O.state.renderNow()}catch(Ut){zt("Focus failed: "+String(Ut))}}function Xt(){if(!et||!Ct)return;let Q=Ft();if(Q)try{let dt=new Ct.Vector3;if(typeof Q.getWorldPosition=="function")Q.getWorldPosition(dt);else if(Q.position)dt.set(Number(Q.position.x)||0,Number(Q.position.y)||0,Number(Q.position.z)||0);else return;it(dt.x,dt.y,dt.z)}catch{}}function Nt(){let Q=O.state&&O.state.camera;if(!Q||!Q.position||!Q.rotation){u.textContent="camera: unavailable";return}let dt=function(le){return Number(le)*(180/Math.PI)},Ut=Y();u.textContent=["pos "+We(Number(Q.position.x))+", "+We(Number(Q.position.y))+", "+We(Number(Q.position.z)),"deg "+We(dt(Q.rotation.x))+", "+We(dt(Q.rotation.y))+", "+We(dt(Q.rotation.z)),"tgt "+We(Ut.x)+", "+We(Ut.y)+", "+We(Ut.z)].join(`
`)}function Kt(Q){if(!Ct||!Q||!Q.position)return null;let dt=new Ct.Vector3(0,.5,0),Ut=Q.position.distanceTo(dt);(!Number.isFinite(Ut)||Ut<.2)&&(Ut=4);let le=Math.atan2(Q.position.x-dt.x,Q.position.z-dt.z),T=Math.acos(Math.max(-1,Math.min(1,(Q.position.y-dt.y)/Ut))),W=!1,K=!1,$=0,q=0;function St(){let Ot=Math.sin(T);Q.position.x=dt.x+Ut*Ot*Math.sin(le),Q.position.y=dt.y+Ut*Math.cos(T),Q.position.z=dt.z+Ut*Ot*Math.cos(le),Q.lookAt(dt)}function Rt(Ot){if(Ot.isPrimary){W=!0,K=Ot.button===1||Ot.button===2,$=Ot.clientX,q=Ot.clientY;try{c.setPointerCapture(Ot.pointerId)}catch{}Ot.preventDefault()}}function At(Ot){if(!W)return;let ne=Ot.clientX-$,De=Ot.clientY-q;if($=Ot.clientX,q=Ot.clientY,K){let Xe=Math.max(.002,Ut*.0014),Ye=new Ct.Vector3;Q.getWorldDirection(Ye);let Fn=new Ct.Vector3().crossVectors(Ye,Q.up).normalize(),me=Q.up.clone().normalize();dt.addScaledVector(Fn,-ne*Xe),dt.addScaledVector(me,De*Xe)}else le-=ne*.006,T-=De*.006,T=Math.max(.04,Math.min(Math.PI-.04,T));St()}function kt(Ot){W=!1;try{c.releasePointerCapture(Ot.pointerId)}catch{}}function Yt(Ot){let ne=Ot.deltaY>0?1.08:.92;Ut=Math.max(.15,Math.min(300,Ut*ne)),St(),Ot.preventDefault()}return c.addEventListener("pointerdown",Rt),c.addEventListener("pointermove",At),c.addEventListener("pointerup",kt),c.addEventListener("pointerleave",kt),c.addEventListener("wheel",Yt,{passive:!1}),St(),{target:dt,update:St,dispose:function(){c.removeEventListener("pointerdown",Rt),c.removeEventListener("pointermove",At),c.removeEventListener("pointerup",kt),c.removeEventListener("pointerleave",kt),c.removeEventListener("wheel",Yt)}}}function Qt(){if(!Ct)return!1;let Q=O.state.scene;(!Q||Q.isScene!==!0)&&(Q=new Ct.Scene,Q.background=new Ct.Color(1052688),O.state.scene=Q);let dt=O.state.camera;(!dt||dt.isPerspectiveCamera!==!0)&&(dt=new Ct.PerspectiveCamera(52,1,.01,2e3),dt.position.set(3,2.1,3.2),O.state.camera=dt);let Ut=O.state.renderer;return(!Ut||typeof Ut.render!="function")&&(Ut=new Ct.WebGLRenderer({canvas:c,antialias:!0,alpha:!1}),Ut.setPixelRatio(Math.max(1,Math.min(2,globalThis.devicePixelRatio||1))),O.state.renderer=Ut),O.state.controls||(O.state.controls=Kt(dt)),O.state.renderNow=function(){Ut.render(Q,dt)},O.state.resize=function(){let le=O.getViewportSize(),T=Math.max(1,le.width||1),W=Math.max(1,le.height||1);Ut.setSize(T,W,!1),dt.aspect=T/W,dt.updateProjectionMatrix(),O.state.controls&&typeof O.state.controls.update=="function"&&O.state.controls.update(),Ut.render(Q,dt)},O.state.resize(),!0}function Te(){if(H(),at&&A)try{A(O)}catch(Q){zt(`3D resize error:
`+String(Q)),A=null}else if(O.state&&typeof O.state.resize=="function")try{O.state.resize()}catch{}Nt()}if(typeof t.script=="string"&&t.script.trim().length>0)try{new Function("ctx","api",t.script+`
return ctx;`)(ft,O),Gt=typeof ft.onInit=="function"?ft.onInit:null,N=typeof ft.onFrame=="function"?ft.onFrame:null,A=typeof ft.onResize=="function"?ft.onResize:null}catch(Q){zt(`3D script compile error:
`+String(Q))}function se(Q){if(jt(),!rt)return;let dt=Et("x"),Ut=dt&&Q<dt.length?dt[Q]:0,le=c.height*.8-(Number.isFinite(Ut)?Ut:0)*16;rt.fillStyle="#3cb4ff",rt.beginPath(),rt.arc(c.width*.5,le,14,0,Math.PI*2),rt.fill(),O.context2d=rt}function G(Q){if(!Qt()){se(Q);return}Xt(),O.state.controls&&typeof O.state.controls.update=="function"&&O.state.controls.update(),typeof O.state.renderNow=="function"&&O.state.renderNow()}async function gt(){Qt(),$t();try{Gt&&await Promise.resolve(Gt(O))}catch(Q){zt(`3D init error:
`+String(Q))}if(at=!0,bt(!0),A)try{A(O)}catch(Q){zt(`3D resize error:
`+String(Q)),A=null}else O.state&&typeof O.state.resize=="function"&&O.state.resize();lt(Mt)}function lt(Q){let dt=Math.max(0,Math.min(Math.max(st.length-1,0),Q|0));Mt=dt,O.sampleIndex=dt,R.value=String(dt);let Ut=dt<st.length?st[dt]:0;if(X.textContent="t="+We(Ut),!!at){if(N)try{N(O)}catch(le){zt(`3D frame error:
`+String(le)),N=null}(B||!N)&&G(dt),Xt(),bt(!1),Nt()}}function Pt(){at&&lt(O.sampleIndex||Number(R.value)||0)}b.addEventListener("click",function(){Z(!ut)}),_.addEventListener("click",function(){ie()}),p.addEventListener("change",function(){et=p.checked}),c.addEventListener("pointerdown",Pt),c.addEventListener("pointermove",Pt),c.addEventListener("wheel",Pt,{passive:!0}),H();let Lt=!1,re=1,xe=1,we=0,tn=0,_e=0,Rn=0,Ce=!1;function ze(){S.innerHTML=Lt?"&#10074;&#10074;":"&#9654;",w.classList.toggle("active",Lt&&re<0),D.classList.toggle("active",Lt&&re>0&&xe>1),tt.disabled=Ce,tt.textContent=Ce?"Exporting\u2026":"Save WebM"}function mn(Q){let dt=Number(R.max)||0;return Math.max(0,Math.min(dt,Q|0))}function gn(Q){let dt=Number(st[Q]);return Number.isFinite(dt)?dt:Q}function Yn(Q){let dt=Math.max(0,st.length-1);if(dt===0)return 0;let Ut=gn(0),le=gn(dt);if(!(Number.isFinite(Ut)&&Number.isFinite(le)&&le>Ut))return mn(Math.round(Q));if(Q<=Ut)return 0;if(Q>=le)return dt;let T=0,W=dt;for(;T<W;){let Rt=T+W>>1;gn(Rt)<Q?T=Rt+1:W=Rt}let K=T,$=Math.max(0,K-1),q=gn($),St=gn(K);return Math.abs(Q-q)<=Math.abs(St-Q)?$:K}function Oe(){Lt=!1,we&&(cancelAnimationFrame(we),we=0),ze()}function Pn(Q,dt){if(Lt)return;Lt=!0,re=Q<0?-1:1,xe=Math.max(1,Number(dt)||1),_e=gn(mn(O.sampleIndex||Number(R.value)||0)),tn=performance.now(),Rn=mn(O.sampleIndex||Number(R.value)||0),ze();let Ut=function(le){if(!Lt)return;let T=Math.max(0,(le-tn)/1e3),W=gn(0),K=gn(Math.max(0,st.length-1)),$=_e+re*xe*T,q=Yn($);re>0&&$>=K?q=Number(R.max)||0:re<0&&$<=W&&(q=0),q=mn(q),q!==Rn&&(lt(q),Rn=q);let St=q<=0,Rt=q>=(Number(R.max)||0);if(re<0&&St||re>0&&Rt){Oe();return}we=requestAnimationFrame(Ut)};we=requestAnimationFrame(Ut)}S.addEventListener("click",function(){if(Lt){Oe();return}Pn(1,1)}),w.addEventListener("click",function(){if(Lt&&re<0){Oe();return}Lt&&Oe(),Pn(-1,4)}),D.addEventListener("click",function(){if(Lt&&re>0&&xe>1){Oe();return}Lt&&Oe(),Pn(1,4)}),P.addEventListener("click",function(){Oe(),lt(0)}),z.addEventListener("click",function(){Oe(),lt(Number(R.max))}),R.addEventListener("input",function(){lt(Number(R.value))});async function vi(){if(Ce)return;if(!at){zt("Movie export unavailable: viewer not ready.");return}if(typeof MediaRecorder>"u"||typeof c.captureStream!="function"){zt("Movie export unavailable: MediaRecorder/captureStream not supported.");return}Ce=!0,ze();let Q=Lt;Q&&Oe();let dt=Number(R.value)||0;try{$t();let Ut=30,le=Math.max(1,Number(R.max)+1);lt(0);let T=c.captureStream(Ut),W=["video/webm;codecs=vp9","video/webm;codecs=vp8","video/webm"],K="";for(let At of W)if(typeof MediaRecorder.isTypeSupported=="function"&&MediaRecorder.isTypeSupported(At)){K=At;break}let $=K.length>0?new MediaRecorder(T,{mimeType:K,videoBitsPerSecond:8e6}):new MediaRecorder(T,{videoBitsPerSecond:8e6}),q=[];$.ondataavailable=function(At){At.data&&At.data.size>0&&q.push(At.data)};let St=new Promise(function(At,kt){$.onerror=function(){kt($.error||new Error("MediaRecorder failed"))},$.onstop=function(){At()}});$.start(Math.max(40,Math.floor(1e3/Ut)));for(let At=0;At<le;At+=1)lt(At),await new Promise(function(kt){setTimeout(kt,Math.max(1,Math.floor(1e3/Ut)))});$.stop(),await St;let Rt=new Blob(q,{type:$.mimeType||"video/webm"});if(Rt.size<=0)throw new Error("No video frames captured.");if(e.saveWebm){let At=await new Promise(function(kt,Yt){let Ot=new FileReader;Ot.onerror=function(){Yt(new Error("Failed to encode video payload."))},Ot.onload=function(){kt(String(Ot.result||""))},Ot.readAsDataURL(Rt)});e.saveWebm({dataUrl:At,defaultName:fl(n)+"_viewer.webm",view:t})}else{let At=URL.createObjectURL(Rt),kt=document.createElement("a");kt.href=At,kt.download=fl(n)+"_viewer.webm",document.body.appendChild(kt),kt.click(),document.body.removeChild(kt),URL.revokeObjectURL(At)}}catch(Ut){zt("Movie export failed: "+String(Ut)),e.notify("Movie export failed: "+String(Ut))}finally{Ce=!1,lt(dt),Q&&Pn(1,1),ze()}}return nt.addEventListener("click",function(){let Q=Jp(c);if(!Q)return;let dt=fl(n)+"_viewer.png";if(e.savePng){e.savePng({dataUrl:Q,defaultName:dt,view:t});return}Zp(Q,dt)}),tt.style.display=e.saveWebm?"":"none",tt.addEventListener("click",function(){vi()}),lt(0),ze(),gt(),o.__dispose=function(){if(Oe(),globalThis.removeEventListener("resize",Te),O.state.controls&&typeof O.state.controls.dispose=="function")try{O.state.controls.dispose()}catch{}if(O.state.renderer&&typeof O.state.renderer.dispose=="function")try{O.state.renderer.dispose()}catch{}},o.__resize=function(){Te(),lt(O.sampleIndex||Number(R.value)||0)},globalThis.addEventListener("resize",Te),o}function yT(s){return s.viewModel.type==="scatter"?xT(s):s.viewModel.type==="3d"?vT(s):_T(s)}function MT(s){if(!s||typeof s!="object")throw new Error("createResultsApp requires a configuration object.");let t=s.root;if(!t)throw new Error("createResultsApp requires a root element.");let e=lT(),n=ev(s.bridge),i=s.allowViewEditing!==!1,r=s.showHeader!==!1,o=s.modelRef!==void 0?s.modelRef:pe(s.model),a=pe(s.model)||"Rumoca Results",l=s.payload||null,c=s.metrics||null,u=ml(e,s.views),h=ko(u,s.activeViewId),d=null;t.innerHTML="",t.classList.add("rumoca-results-root");let f=r?document.createElement("div"):null,m=r?document.createElement("div"):null,_=r&&i?document.createElement("button"):null;if(f&&m){f.className="rumoca-results-header";let z=document.createElement("div");z.className="rumoca-results-title",z.textContent=a,m.className="rumoca-results-header-actions",f.appendChild(z),f.appendChild(m),t.appendChild(f)}_&&(_.className="rumoca-results-header-button",_.type="button",_.textContent="\u2699",_.title="Visualization settings",_.setAttribute("aria-label","Visualization settings"),m.appendChild(_));let g=mT();t.appendChild(g.element);let p=pT(a,o);t.appendChild(p.element);let v=document.createElement("div");v.className="rumoca-results-tabs",t.appendChild(v);let x=document.createElement("div");x.className="rumoca-results-content",t.appendChild(x);let y=i?gT({bridge:n,modelRef:o,getPayload:function(){return l},onSave:function(z){u=ml(e,z),h=ko(u,h),P(),g.clear()},shared:e}):null;y&&t.appendChild(y.element);function L(){d&&typeof d.__dispose=="function"&&d.__dispose(),d=null,x.innerHTML=""}function b(){v.innerHTML="";for(let z of u){let R=document.createElement("button");R.className=`rumoca-results-tab${z.id===h?" active":""}`,R.textContent=pe(z.title)||pe(z.id),R.addEventListener("click",function(){h=z.id,n.persistState({activeViewId:h}),g.clear(),P()}),v.appendChild(R)}}function C(z){L();let R=document.createElement("div");R.className="rumoca-results-empty",R.textContent=z,x.appendChild(R)}function P(){if(b(),!l){p.update(null,null,c,a),C("Run a simulation to view results.");return}u.length||(u=e.defaultVisualizationViews(),h=ko(u,h));let z=u.find(function(V){return V.id===h})||u[0];p.update(l,z,c,a),L();let R=e.buildVisualizationModel(l,z);d=yT({bridge:n,context:{modelName:a,resultPath:tv(o)},metrics:c,modelName:a,payload:l,viewModel:R}),x.appendChild(d),requestAnimationFrame(function(){d&&typeof d.__resize=="function"&&d.__resize()})}function w(z){let R=z&&typeof z=="object"?z:{};if(R.model!==void 0){a=pe(R.model)||a;let V=f?.querySelector(".rumoca-results-title");V&&(V.textContent=a)}R.payload!==void 0&&(l=R.payload||null),R.metrics!==void 0&&(c=R.metrics||null),R.views!==void 0&&(u=ml(e,R.views),h=ko(u,h)),R.activeViewId!==void 0&&(h=ko(u,R.activeViewId)),P()}function S(){globalThis.removeEventListener("resize",D),y&&y.close(),L(),t.innerHTML=""}let D=function(){d&&typeof d.__resize=="function"&&d.__resize()};return globalThis.addEventListener("resize",D),_&&y&&_.addEventListener("click",async function(){g.clear();try{await y.open(u)}catch(z){g.show(String(z&&z.message?z.message:z),"error")}}),P(),{dispose:S,update:w}}var ST={RESULTS_APP_BRIDGE_METHODS:cT,buildResultsTimingSummary:Qx,chooseActiveViewId:ko,createNoopResultsHostBridge:ev,createResultsApp:MT,defaultResultsView:Ho,formatScatterSeriesText:Qu,formatSeriesList:pl,normalizeResultsViewDrafts:ml,parseScatterSeriesText:jx,parseSeriesList:Yp};var AT=ST;export{cT as RESULTS_APP_BRIDGE_METHODS,Qx as buildResultsTimingSummary,ko as chooseActiveViewId,ev as createNoopResultsHostBridge,MT as createResultsApp,AT as default,Ho as defaultResultsView,Qu as formatScatterSeriesText,pl as formatSeriesList,ml as normalizeResultsViewDrafts,jx as parseScatterSeriesText,Yp as parseSeriesList};
