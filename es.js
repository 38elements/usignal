/*! (c) Andrea Giammarchi */
const{is:t}=Object;let s;const e=t=>{const e=s;s=e||[];try{if(t(),!e)for(const t of s)t()}finally{s=e}};class i{constructor(t){this._=t}toJSON(){return this.value}toString(){return this.value}valueOf(){return this.value}}const n=({e:t})=>{for(const s of t)s.$=!0,n(s)};let h;const o=({c:t})=>{if(t.size){const e=h;h=e||[];for(const s of t)s.$||(s.$=!0,1===s.b?(h.push(s),n(s)):o(s.s));try{if(!e)for(const t of h)s?s.push((()=>{t.value})):t.value}finally{h=e}}};let c;class r extends i{constructor(t,s){super(t),this.b=s,this.$=!1,this.s=null}get value(){if(this.s){if(this.$)try{this.s.value=this._()}finally{this.$=!1}}else{const t=c;c=new Set;try{this.s=new y(this._()),1===this.b&&(this.r=c);for(const t of c)t.c.add(this)}finally{c=t}}return this.s.value}}const l=t=>new r(t,0);let u;const a=()=>{},f=t=>{for(const s of t)s.stop()};class v extends r{constructor(t,s){super(t,1).r=null,this.i=0,this.a=s,this.m=s,this.e=[]}get value(){this.a?this.async():this.sync()}async(){this.m&&(this.m=!1,queueMicrotask((()=>{this.m=!0,this.sync()})))}sync(){const t=u;u=this,this.i=0;const{length:s}=this.e;super.value,u=t,this.i<s&&f(this.e.splice(this.i));for(const t of this.e)t.value}stop(){if(this.r){for(const t of this.r)t.c.delete(this);this.r.clear(),this.r=null}this._=a,this.e.length&&f(this.e.splice(0))}}const p=(t,s=!1)=>{let e;if(u){const{i:i,e:n}=u;i!==n.length&&n[i]._===t||(n[i]=new v(t,s)),e=n[i],u.i++}else(e=new v(t,s)).value;return()=>{e.stop()}};class y extends i{constructor(t){super(t).c=new Set}peek(){return this._}get value(){return c&&c.add(this),this._}set value(s){t(s,this._)||(this._=s,o(this))}}const _=t=>new y(t);export{i as Signal,e as batch,l as computed,p as effect,_ as signal};
