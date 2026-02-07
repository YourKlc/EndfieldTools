class t{constructor(){this.rows=10,this.cols=10,this.t=30,this.i=!0,this.h=70,this.o=!1,this.l=!1,this.u=null,this.m=null,this.p=null,this.v=[],this.M=null,this.k=new Set,this.P=!1,this.C=document.getElementById("grid"),this.I=document.getElementById("dropHint"),this.S=document.getElementById("patternLibrary"),this.G=document.getElementById("output"),this.D=document.getElementById("selectedCount"),this.B=document.getElementById("totalCount"),this.L=document.getElementById("gridSize"),this.O=document.getElementById("modeIndicator"),this.T=document.getElementById("statsSelected"),this.V=document.getElementById("statsBlocked"),this.N=document.getElementById("statsPatterns"),this.A=document.getElementById("normalModeBtn"),this.J=document.getElementById("lockModeBtn"),this.R=new bootstrap.Modal(document.getElementById("patternEditorModal")),this.U=document.getElementById("patternEditor"),this.X=document.getElementById("patternName"),this.H=document.getElementById("editorRows"),this.W=document.getElementById("editorCols"),this.Z=document.getElementById("editorRowsValue"),this.j=document.getElementById("editorColsValue"),this.q=document.getElementById("colorWhiteBtn"),this.F=document.getElementById("colorGreenBtn"),this.K=[],this.Y=5,this._=5,this.tt="white",this.it(),this.st(),this.et(),this.ht(),this.nt(),this.ot(),this.rt(),this.ct()}it(){this.lt=[{id:1,name:"方块",rows:3,cols:3,data:[["green","green","green"],["green","green","green"],["green","green","green"]],dt:!1},{id:2,name:"十字",rows:3,cols:3,data:[["white","green","white"],["green","green","green"],["white","green","white"]],dt:!1},{id:3,name:"L形",rows:3,cols:3,data:[["green","white","white"],["green","white","white"],["green","green","green"]],dt:!1},{id:4,name:"直线",rows:1,cols:5,data:[["green","green","green","green","green"]],dt:!1},{id:5,name:"T形",rows:3,cols:3,data:[["green","green","green"],["white","green","white"],["white","green","white"]],dt:!1},{id:6,name:"Z形",rows:3,cols:4,data:[["green","green","white","white"],["white","green","green","white"],["white","white","green","green"]],dt:!1},{id:7,name:"边框",rows:4,cols:4,data:[["green","green","green","green"],["green","white","white","green"],["green","white","white","green"],["green","green","green","green"]],dt:!1}],this.ut=[]}rt(){try{const t=localStorage.getItem("customPatterns")
t&&(this.ut=JSON.parse(t),this.ut.forEach(t=>{this.lt.push(t)}),this.nt(),this.gt(`已加载 ${this.ut.length} 个自定义图案`))}catch(t){this.gt("加载自定义图案失败")}}wt(){try{localStorage.setItem("customPatterns",JSON.stringify(this.ut))}catch(t){this.gt("保存自定义图案失败")}}st(){this.grid=[]
for(let t=0;t<this.rows;t++){this.grid[t]=[]
for(let i=0;i<this.cols;i++)this.grid[t][i]={selected:!1,$t:!1,ft:!1,vt:null,element:null}}}xt(){this.C.style.gridTemplateColumns=`repeat(${this.cols}, ${this.t}px)`,this.C.style.gridTemplateRows=`repeat(${this.rows}, ${this.t}px)`,this.C.innerHTML=""
for(let t=0;t<this.rows;t++)for(let i=0;i<this.cols;i++){const s=document.createElement("div")
s.className="cell",s.dataset.Mt=t,s.dataset.kt=i,s.dataset.id=`${t}-${i}`,s.addEventListener("click",()=>{this.l||this.o||this.Pt(t,i)}),s.addEventListener("mousedown",s=>{this.l||this.Ct(s,t,i)}),s.addEventListener("mouseenter",s=>{this.o&&this.bt(s,t,i)}),s.addEventListener("dragover",s=>{s.preventDefault(),this.l&&this.u&&this.It(t,i)}),s.addEventListener("dragenter",t=>{t.preventDefault(),this.l&&this.I.classList.add("active")}),s.addEventListener("dragleave",t=>{this.C.contains(t.relatedTarget)||this.I.classList.remove("active")}),s.addEventListener("drop",s=>{s.preventDefault(),this.I.classList.remove("active"),this.St(t,i)}),s.addEventListener("touchstart",s=>{s.preventDefault(),this.l||this.Gt(s,t,i)}),this.C.appendChild(s),this.grid[t][i].element=s,this.Et(t,i)}document.addEventListener("mouseup",()=>this.Dt()),document.addEventListener("mousemove",t=>this.yt(t)),document.addEventListener("touchend",()=>this.Bt()),document.addEventListener("touchmove",t=>this.Lt(t)),this.L.textContent=`${this.rows}×${this.cols}`,this.B.textContent=this.rows*this.cols,this.Ot()}Pt(t,i){this.P?this.Tt(t,i):this.Vt(t,i)}Ct(t,i,s){this.l||(t.preventDefault(),this.o=!0,this.m={Mt:i,kt:s},this.k.clear(),this.P?this.Tt(i,s):this.Vt(i,s),this.k.add(`${i}-${s}`))}bt(t,i,s){if(!this.o||this.l)return
const e=`${i}-${s}`
this.k.has(e)||(this.Nt(this.m.Mt,this.m.kt,i,s).forEach(t=>{const i=`${t.Mt}-${t.kt}`
this.k.has(i)||(this.P?this.Tt(t.Mt,t.kt):this.Vt(t.Mt,t.kt),this.k.add(i))}),this.m={Mt:i,kt:s},this.At())}ot(){this.Jt(),this.H.addEventListener("input",t=>{this.Y=parseInt(t.target.value),this.Z.textContent=this.Y,this.Jt()}),this.W.addEventListener("input",t=>{this._=parseInt(t.target.value),this.j.textContent=this._,this.Jt()}),this.q.addEventListener("click",()=>this.zt("white")),this.F.addEventListener("click",()=>this.zt("green")),document.getElementById("savePatternBtn").addEventListener("click",()=>this.Rt()),document.getElementById("clearEditorBtn").addEventListener("click",()=>this.Ut()),document.getElementById("addPatternBtn").addEventListener("click",()=>{this.X.value=`自定义图案${this.ut.length+1}`,this.Ut(),this.R.show()})}zt(t){this.tt=t,[this.q,this.F].forEach(t=>{t.classList.remove("active")}),"white"===t?this.q.classList.add("active"):"green"===t&&this.F.classList.add("active")}Jt(){this.K=[]
for(let t=0;t<this.Y;t++){this.K[t]=[]
for(let i=0;i<this._;i++)this.K[t][i]="white"}this.Xt()}Xt(){this.U.innerHTML="",this.U.style.gridTemplateColumns=`repeat(${this._}, 25px)`,this.U.style.gridTemplateRows=`repeat(${this.Y}, 25px)`
for(let t=0;t<this.Y;t++)for(let i=0;i<this._;i++){const s=document.createElement("div")
s.className=`editor-cell ${this.K[t][i]}`,s.dataset.Mt=t,s.dataset.kt=i,s.addEventListener("click",()=>{this.K[t][i]=this.tt,this.Xt()}),this.U.appendChild(s)}}Ut(){this.K=[]
for(let t=0;t<this.Y;t++){this.K[t]=[]
for(let i=0;i<this._;i++)this.K[t][i]="white"}this.Xt()}Rt(){const t=this.X.value.trim()
if(!t)return void alert("请输入图案名称")
const i={id:Date.now(),name:t,rows:this.Y,cols:this._,data:JSON.parse(JSON.stringify(this.K)),dt:!0}
this.ut.push(i),this.lt.push(i),this.wt(),this.nt(),this.R.hide(),this.gt(`已添加自定义图案: ${t} (${this.Y}×${this._})`)}yt(t){if(!this.o||this.l)return
const i=document.elementFromPoint(t.clientX,t.clientY)
if(i&&i.classList.contains("cell")){const t=parseInt(i.dataset.Mt),s=parseInt(i.dataset.kt),e=`${t}-${s}`
if(this.m.Mt===t&&this.m.kt===s)return
if(this.k.has(e))return
this.Nt(this.m.Mt,this.m.kt,t,s).forEach(t=>{const i=`${t.Mt}-${t.kt}`
this.k.has(i)||(this.P?this.Tt(t.Mt,t.kt):this.Vt(t.Mt,t.kt),this.k.add(i))}),this.m={Mt:t,kt:s},this.At()}}Lt(t){if(!this.o||this.l)return
t.preventDefault()
const i=t.touches[0],s=document.elementFromPoint(i.clientX,i.clientY)
if(s&&s.classList.contains("cell")){const t=parseInt(s.dataset.Mt),i=parseInt(s.dataset.kt),e=`${t}-${i}`
if(this.m.Mt===t&&this.m.kt===i)return
if(this.k.has(e))return
this.Nt(this.m.Mt,this.m.kt,t,i).forEach(t=>{const i=`${t.Mt}-${t.kt}`
this.k.has(i)||(this.P?this.Tt(t.Mt,t.kt):this.Vt(t.Mt,t.kt),this.k.add(i))}),this.m={Mt:t,kt:i},this.At()}}Dt(){this.o&&(this.o=!1,this.k.clear())}Gt(t,i,s){this.l||(t.preventDefault(),this.o=!0,this.m={Mt:i,kt:s},this.k.clear(),this.P?this.Tt(i,s):this.Vt(i,s),this.k.add(`${i}-${s}`))}Bt(){this.o&&(this.o=!1,this.k.clear())}nt(){this.S.innerHTML="",this.lt.forEach(t=>{const i=document.createElement("div")
if(i.className="pattern-item",i.dataset.Ht=t.id,i.draggable=!0,t.dt){const s=document.createElement("button")
s.className="btn btn-sm btn-danger position-absolute top-0 end-0",s.style.transform="translate(30%, -30%)",s.innerHTML='<i class="bi bi-x"></i>',s.title="删除图案",s.addEventListener("click",i=>{i.stopPropagation(),this.Wt(t.id)}),i.appendChild(s)
const e=document.createElement("span")
e.className="position-absolute top-0 start-0 badge bg-warning",e.textContent="自定义",e.style.transform="translate(-30%, -30%)",i.appendChild(e)}const s=document.createElement("div")
s.className="pattern-grid",s.style.gridTemplateColumns=`repeat(${t.cols}, 15px)`,s.style.gridTemplateRows=`repeat(${t.rows}, 15px)`
for(let i=0;i<t.rows;i++)for(let e=0;e<t.cols;e++){const h=document.createElement("div")
h.className=`pattern-cell ${t.data[i][e]}`,s.appendChild(h)}const e=document.createElement("div")
e.className="pattern-name",e.textContent=t.name
const h=document.createElement("div")
h.className="pattern-info",h.textContent=`${t.rows}×${t.cols}`,i.appendChild(s),i.appendChild(e),i.appendChild(h),i.addEventListener("dragstart",i=>this.Zt(i,t)),i.addEventListener("dragend",t=>this.jt(t)),i.addEventListener("click",()=>this.qt(t.id)),this.S.appendChild(i)})}Tt(t,i){this.grid[t][i].$t=!this.grid[t][i].$t,this.grid[t][i].$t&&(this.grid[t][i].selected=!1),this.Et(t,i),this.At(),this.Ot()}Vt(t,i){this.grid[t][i].$t||(this.grid[t][i].selected=!this.grid[t][i].selected,this.Et(t,i),this.At())}ct(){this.P?(this.O.textContent="锁定模式",this.O.className="mode-indicator mode-lock",this.A.classList.remove("active"),this.J.classList.add("active")):(this.O.textContent="普通模式",this.O.className="mode-indicator mode-normal",this.A.classList.add("active"),this.J.classList.remove("active"))}Ft(){this.P=!this.P,this.ct(),this.P?this.gt("已切换到锁定模式：单击/滑动绘制黑色锁定格子"):this.gt("已切换到普通模式：单击/滑动反转格子选择状态")}Nt(t,i,s,e){const h=[]
t=Math.floor(t),i=Math.floor(i),s=Math.floor(s),e=Math.floor(e)
const n=Math.abs(s-t),o=Math.abs(e-i),r=t<s?1:-1,c=i<e?1:-1
let a=n-o
for(;h.push({Mt:t,kt:i}),t!==s||i!==e;){const s=2*a
s>-o&&(a-=o,t+=r),s<n&&(a+=n,i+=c)}return h}Et(t,i){const s=this.grid[t][i]
if(s.element)if(s.element.className="cell",s.selected&&s.element.classList.add("selected"),s.$t&&s.element.classList.add("blocked"),s.ft&&"green"===s.vt){s.element.classList.add("pattern-preview"),s.element.classList.add("green-preview")
const t=this.h/100
s.element.style.backgroundColor=`rgba(140, 233, 154, ${t})`}else s.element.style.backgroundColor=""}At(){let t=0
for(let i=0;i<this.rows;i++)for(let s=0;s<this.cols;s++)this.grid[i][s].selected&&t++
this.D.textContent=t,this.Ot()}Ot(){let t=0,i=0
for(let s=0;s<this.rows;s++)for(let e=0;e<this.cols;e++)this.grid[s][e].selected&&t++,this.grid[s][e].$t&&i++
this.T.textContent=t,this.V.textContent=i,this.N.textContent=this.v.length}Zt(t,i){this.l=!0,this.u=i
const s=t.target.cloneNode(!0)
s.style.width="100px",s.style.height="100px",s.style.position="fixed",s.style.left="-1000px",document.body.appendChild(s),t.dataTransfer.setDragImage(s,50,50),t.dataTransfer.setData("text/plain",i.id),t.dataTransfer.effectAllowed="copy",t.target.classList.add("dragging"),this.M=i.id,this.Kt(),this.Qt(i),setTimeout(()=>document.body.removeChild(s),0)}Qt(t){this.p&&document.body.removeChild(this.p),this.p=document.createElement("div"),this.p.className="pattern-item ghost-pattern",this.p.style.display="grid",this.p.style.gridTemplateColumns=`repeat(${t.cols}, 20px)`,this.p.style.gridTemplateRows=`repeat(${t.rows}, 20px)`,this.p.style.gap="2px",this.p.style.padding="10px",this.p.style.backgroundColor="white",this.p.style.borderRadius="8px",this.p.style.border="2px solid #dee2e6",this.p.style.width="auto",this.p.style.height="auto"
for(let i=0;i<t.rows;i++)for(let s=0;s<t.cols;s++){const e=document.createElement("div")
e.className=`pattern-cell ${t.data[i][s]}`,e.style.width="20px",e.style.height="20px",e.style.borderRadius="2px",e.style.border="1px solid #e9ecef",this.p.appendChild(e)}const i=document.createElement("div")
i.className="pattern-name",i.textContent=t.name,i.style.fontSize="12px",i.style.fontWeight="600",i.style.marginTop="8px",i.style.textAlign="center",i.style.color="#495057",this.p.appendChild(i),document.body.appendChild(this.p),document.addEventListener("mousemove",this.Yt),document.addEventListener("touchmove",this._t)}Yt=t=>{this.p&&this.l&&(this.p.style.left=`${t.clientX+10}px`,this.p.style.top=`${t.clientY+10}px`)}
_t=t=>{if(!this.p||!this.l||!t.touches.length)return
const i=t.touches[0]
this.p.style.left=`${i.clientX+10}px`,this.p.style.top=`${i.clientY+10}px`}
It(t,i){if(!this.u)return
this.Kt()
let s=t,e=i
this.i&&(s=Math.max(0,Math.min(this.rows-this.u.rows,t-Math.floor(this.u.rows/2))),e=Math.max(0,Math.min(this.cols-this.u.cols,i-Math.floor(this.u.cols/2))))
for(let t=0;t<this.u.rows;t++)for(let i=0;i<this.u.cols;i++){const h=s+t,n=e+i
h<this.rows&&n<this.cols&&"green"===this.u.data[t][i]&&(this.grid[h][n].ft=!0,this.grid[h][n].vt="green",this.Et(h,n))}}Kt(){for(let t=0;t<this.rows;t++)for(let i=0;i<this.cols;i++)this.grid[t][i].ft&&(this.grid[t][i].ft=!1,this.grid[t][i].vt=null,this.Et(t,i))}St(t,i){if(!this.u)return
let s=t,e=i
this.i&&(s=Math.max(0,Math.min(this.rows-this.u.rows,t-Math.floor(this.u.rows/2))),e=Math.max(0,Math.min(this.cols-this.u.cols,i-Math.floor(this.u.cols/2)))),this.Kt()
const h={id:Date.now(),pattern:this.u,ti:s,ii:e,timestamp:(new Date).toISOString()}
this.v.push(h),this.si(s,e,this.u),this.Ot(),this.At(),this.gt(`已放置图案 "${this.u.name}" 到位置 (${s+1}, ${e+1})`),this.u=null,this.l=!1,this.ei()}si(t,i,s){for(let e=0;e<s.rows;e++)for(let h=0;h<s.cols;h++){const n=t+e,o=i+h
if(n>=this.rows||o>=this.cols)continue
const r=s.data[e][h]
"white"!==r&&"green"===r&&(this.grid[n][o].$t||(this.grid[n][o].selected=!0,this.Et(n,o)))}}jt(t){this.l=!1,this.u=null,document.querySelectorAll(".pattern-item").forEach(t=>t.classList.remove("dragging")),this.p&&(document.body.removeChild(this.p),this.p=null),this.Kt(),this.I.classList.remove("active"),document.removeEventListener("mousemove",this.Yt),document.removeEventListener("touchmove",this._t),this.ei()}qt(t){this.M=t,document.querySelectorAll(".pattern-item").forEach(i=>{parseInt(i.dataset.Ht)===t?i.classList.add("active"):i.classList.remove("active")})
const i=this.lt.find(i=>i.id===t)
this.gt(`已选择图案: ${i.name} (${i.rows}×${i.cols})`)}ei(){this.M=null,document.querySelectorAll(".pattern-item").forEach(t=>{t.classList.remove("active")})}Wt(t){confirm("确定要删除这个自定义图案吗？")&&(this.lt=this.lt.filter(i=>i.id!==t),this.ut=this.ut.filter(i=>i.id!==t),this.wt(),this.nt(),this.M===t&&(this.M=null),this.gt("已删除自定义图案"))}et(){this.A.addEventListener("click",()=>{this.P&&this.Ft()}),this.J.addEventListener("click",()=>{this.P||this.Ft()}),document.getElementById("rows").addEventListener("input",t=>{this.rows=parseInt(t.target.value),document.getElementById("rowsValue").textContent=this.rows,this.st(),this.ht()}),document.getElementById("cols").addEventListener("input",t=>{this.cols=parseInt(t.target.value),document.getElementById("colsValue").textContent=this.cols,this.st(),this.ht()}),document.getElementById("cellSize").addEventListener("input",t=>{this.t=parseInt(t.target.value),document.getElementById("cellSizeValue").textContent=this.t,this.ht()}),document.getElementById("patternOpacity").addEventListener("input",t=>{this.h=parseInt(t.target.value),document.getElementById("patternOpacityValue").textContent=this.h}),document.getElementById("snapToGrid").addEventListener("change",t=>{this.i=t.target.checked}),document.getElementById("selectAll").addEventListener("click",()=>{for(let t=0;t<this.rows;t++)for(let i=0;i<this.cols;i++)this.grid[t][i].$t||(this.grid[t][i].selected=!0,this.Et(t,i))
this.At(),this.gt("已选择所有未锁定格子")}),document.getElementById("clearAll").addEventListener("click",()=>{for(let t=0;t<this.rows;t++)for(let i=0;i<this.cols;i++)this.grid[t][i].selected=!1,this.grid[t][i].$t=!1,this.Et(t,i)
this.At(),this.gt("已清空所有选择和解锁所有格子")}),document.getElementById("invertSelection").addEventListener("click",()=>{for(let t=0;t<this.rows;t++)for(let i=0;i<this.cols;i++)this.grid[t][i].$t||(this.grid[t][i].selected=!this.grid[t][i].selected,this.Et(t,i))
this.At(),this.gt("已反选所有未锁定格子")}),document.getElementById("clearPatterns").addEventListener("click",()=>{this.v=[],this.Ot(),this.gt("已清除所有图案记录")}),document.getElementById("clearLocks").addEventListener("click",()=>{let t=0
for(let i=0;i<this.rows;i++)for(let s=0;s<this.cols;s++)this.grid[i][s].$t&&(this.grid[i][s].$t=!1,this.Et(i,s),t++)
this.Ot(),this.gt(`已清除 ${t} 个锁定格子`)}),document.getElementById("exportIndices").addEventListener("click",()=>{const t=[]
for(let i=0;i<this.rows;i++)for(let s=0;s<this.cols;s++)this.grid[i][s].selected&&t.push(`(${i+1}, ${s+1})`)
const i=t.join(", ")
this.gt(`选中的格子索引 (行, 列):\n${i}`)}),document.getElementById("exportMatrix").addEventListener("click",()=>{let t=""
for(let i=0;i<this.rows;i++){let s=""
for(let t=0;t<this.cols;t++)this.grid[i][t].$t?s+="X ":this.grid[i][t].selected?s+="1 ":s+="0 "
t+=s.trim()+"\n"}this.gt(`网格状态 (1=选中, 0=未选中, X=锁定):\n${t}`)}),document.getElementById("clearOutput").addEventListener("click",()=>{this.G.textContent=""}),document.addEventListener("dragstart",t=>{t.target.classList.contains("pattern-item")||t.preventDefault()}),this.C.addEventListener("dragover",t=>{t.preventDefault()}),document.addEventListener("keydown",t=>{t.ctrlKey&&"a"===t.key&&(t.preventDefault(),document.getElementById("selectAll").click()),"Delete"===t.key&&(t.preventDefault(),document.getElementById("clearAll").click()),"l"!==t.key&&"L"!==t.key||(t.preventDefault(),this.Ft())})}ht(){this.xt(),this.At()}gt(t){const i=(new Date).toLocaleTimeString()
this.G.textContent=`[${i}] ${t}\n\n${this.G.textContent}`}}document.addEventListener("DOMContentLoaded",()=>{new t})
