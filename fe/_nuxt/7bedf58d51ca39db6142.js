(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{571:function(t,e,r){var n=r(572);t.exports=function(t,e){if(t){if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}},572:function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}},573:function(t,e,r){var n=r(574),o=r(575),c=r(571),l=r(576);t.exports=function(t,i){return n(t)||o(t,i)||c(t,i)||l()}},574:function(t,e){t.exports=function(t){if(Array.isArray(t))return t}},575:function(t,e){t.exports=function(t,i){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var e=[],r=!0,n=!1,o=void 0;try{for(var c,l=t[Symbol.iterator]();!(r=(c=l.next()).done)&&(e.push(c.value),!i||e.length!==i);r=!0);}catch(t){n=!0,o=t}finally{try{r||null==l.return||l.return()}finally{if(n)throw o}}return e}}},576:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},577:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.REFER_FIELDS_MAPPER={name:"姓名",email:"邮箱",phone:"电话",experience:"工作经验",resumeId:"个人简历",intro:"个人简介",thirdPersonIntro:"第三人称介绍",leetCodeUrl:"LeetCode链接",referLinks:"内推链接"},e.getFieldName=function(t){if(!e.REFER_FIELDS_MAPPER[t])throw new Error("字段 ".concat(t," 不存在于表单中"));return e.REFER_FIELDS_MAPPER[t]},e.REQUIRED_REFER_FIELD_VALUES=["name","email","experience","referLinks"]},578:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.JOB_RULES={company:[{required:!0,message:"请输入公司名",trigger:"blur"}]},e.LOGIN_RULES={email:[{required:!0,message:"请输入邮箱",trigger:"blur"},{type:"email",message:"邮箱格式不正确",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{type:"string",min:6,message:"密码至少6位以上",trigger:"blur"}]},e.RESUME_RULES={email:[{required:!0,message:"请输入邮箱",trigger:"blur"},{type:"email",message:"邮箱格式不正确",trigger:"blur"}],phone:[{required:!0,message:"请输入姓名",trigger:"blur"},{pattern:/[\d\-]{9,11}/,message:"电话格式不正确",trigger:"blur"}]},e.REGISTER_RULES={email:[{required:!0,message:"请输入邮箱",trigger:"blur"},{type:"email",message:"邮箱格式不正确",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{type:"string",min:6,message:"密码至少6位以上",trigger:"blur"}]},e.EDIT_USER_RULES={email:[{required:!0,message:"请输入邮箱",trigger:"blur"},{type:"email",message:"邮箱格式不正确",trigger:"blur"}],name:[{required:!0,message:"请输入姓名",trigger:"blur"}],phone:[{required:!0,message:"请输入姓名",trigger:"blur"},{pattern:/[\d\-]{9,11}/,message:"电话格式不正确",trigger:"blur"}]}},583:function(t,e,r){t.exports=function(){"use strict";var t="millisecond",e="second",r="minute",n="hour",i="day",s="week",u="month",o="quarter",a="year",c=/^(\d{4})-?(\d{1,2})-?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d{1,3})?$/,l=/\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,f=function(t,e,r){var n=String(t);return!n||n.length>=e?t:""+Array(e+1-n.length).join(r)+t},d={s:f,z:function(t){var e=-t.utcOffset(),r=Math.abs(e),n=Math.floor(r/60),i=r%60;return(e<=0?"+":"-")+f(n,2,"0")+":"+f(i,2,"0")},m:function(t,e){var r=12*(e.year()-t.year())+(e.month()-t.month()),n=t.clone().add(r,u),i=e-n<0,s=t.clone().add(r+(i?-1:1),u);return Number(-(r+(e-n)/(i?n-s:s-n))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(c){return{M:u,y:a,w:s,d:i,D:"date",h:n,m:r,s:e,ms:t,Q:o}[c]||String(c||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},h={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},m="en",v={};v[m]=h;var y=function(t){return t instanceof R},$=function(t,e,r){var n;if(!t)return m;if("string"==typeof t)v[t]&&(n=t),e&&(v[t]=e,n=t);else{var i=t.name;v[i]=t,n=i}return!r&&n&&(m=n),n||!r&&m},g=function(t,e,r){if(y(t))return t.clone();var n=e?"string"==typeof e?{format:e,pl:r}:e:{};return n.date=t,new R(n)},_=d;_.l=$,_.i=y,_.w=function(t,e){return g(t,{locale:e.$L,utc:e.$u,$offset:e.$offset})};var R=function(){function f(t){this.$L=this.$L||$(t.locale,null,!0),this.parse(t)}var d=f.prototype;return d.parse=function(t){this.$d=function(t){var e=t.date,r=t.utc;if(null===e)return new Date(NaN);if(_.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var n=e.match(c);if(n)return r?new Date(Date.UTC(n[1],n[2]-1,n[3]||1,n[4]||0,n[5]||0,n[6]||0,n[7]||0)):new Date(n[1],n[2]-1,n[3]||1,n[4]||0,n[5]||0,n[6]||0,n[7]||0)}return new Date(e)}(t),this.init()},d.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},d.$utils=function(){return _},d.isValid=function(){return!("Invalid Date"===this.$d.toString())},d.isSame=function(t,e){var r=g(t);return this.startOf(e)<=r&&r<=this.endOf(e)},d.isAfter=function(t,e){return g(t)<this.startOf(e)},d.isBefore=function(t,e){return this.endOf(e)<g(t)},d.$g=function(t,e,r){return _.u(t)?this[e]:this.set(r,t)},d.year=function(t){return this.$g(t,"$y",a)},d.month=function(t){return this.$g(t,"$M",u)},d.day=function(t){return this.$g(t,"$W",i)},d.date=function(t){return this.$g(t,"$D","date")},d.hour=function(t){return this.$g(t,"$H",n)},d.minute=function(t){return this.$g(t,"$m",r)},d.second=function(t){return this.$g(t,"$s",e)},d.millisecond=function(e){return this.$g(e,"$ms",t)},d.unix=function(){return Math.floor(this.valueOf()/1e3)},d.valueOf=function(){return this.$d.getTime()},d.startOf=function(t,o){var c=this,l=!!_.u(o)||o,f=_.p(t),d=function(t,e){var r=_.w(c.$u?Date.UTC(c.$y,e,t):new Date(c.$y,e,t),c);return l?r:r.endOf(i)},h=function(t,e){return _.w(c.toDate()[t].apply(c.toDate(),(l?[0,0,0,0]:[23,59,59,999]).slice(e)),c)},m=this.$W,v=this.$M,y=this.$D,$="set"+(this.$u?"UTC":"");switch(f){case a:return l?d(1,0):d(31,11);case u:return l?d(1,v):d(0,v+1);case s:var g=this.$locale().weekStart||0,R=(m<g?m+7:m)-g;return d(l?y-R:y+(6-R),v);case i:case"date":return h($+"Hours",0);case n:return h($+"Minutes",1);case r:return h($+"Seconds",2);case e:return h($+"Milliseconds",3);default:return this.clone()}},d.endOf=function(t){return this.startOf(t,!1)},d.$set=function(s,o){var c,l=_.p(s),f="set"+(this.$u?"UTC":""),d=(c={},c.day=f+"Date",c.date=f+"Date",c[u]=f+"Month",c[a]=f+"FullYear",c[n]=f+"Hours",c[r]=f+"Minutes",c[e]=f+"Seconds",c[t]=f+"Milliseconds",c)[l],h=l===i?this.$D+(o-this.$W):o;if(l===u||l===a){var m=this.clone().set("date",1);m.$d[d](h),m.init(),this.$d=m.set("date",Math.min(this.$D,m.daysInMonth())).toDate()}else d&&this.$d[d](h);return this.init(),this},d.set=function(t,e){return this.clone().$set(t,e)},d.get=function(t){return this[_.p(t)]()},d.add=function(t,o){var c,l=this;t=Number(t);var f=_.p(o),d=function(e){var r=g(l);return _.w(r.date(r.date()+Math.round(e*t)),l)};if(f===u)return this.set(u,this.$M+t);if(f===a)return this.set(a,this.$y+t);if(f===i)return d(1);if(f===s)return d(7);var h=(c={},c[r]=6e4,c[n]=36e5,c[e]=1e3,c)[f]||1,m=this.$d.getTime()+t*h;return _.w(m,this)},d.subtract=function(t,e){return this.add(-1*t,e)},d.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var r=t||"YYYY-MM-DDTHH:mm:ssZ",n=_.z(this),i=this.$locale(),s=this.$H,u=this.$m,o=this.$M,a=i.weekdays,c=i.months,f=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].substr(0,s)},d=function(t){return _.s(s%12||12,t,"0")},h=i.meridiem||function(t,e,r){var n=t<12?"AM":"PM";return r?n.toLowerCase():n},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:_.s(o+1,2,"0"),MMM:f(i.monthsShort,o,c,3),MMMM:c[o]||c(this,r),D:this.$D,DD:_.s(this.$D,2,"0"),d:String(this.$W),dd:f(i.weekdaysMin,this.$W,a,2),ddd:f(i.weekdaysShort,this.$W,a,3),dddd:a[this.$W],H:String(s),HH:_.s(s,2,"0"),h:d(1),hh:d(2),a:h(s,u,!0),A:h(s,u,!1),m:String(u),mm:_.s(u,2,"0"),s:String(this.$s),ss:_.s(this.$s,2,"0"),SSS:_.s(this.$ms,3,"0"),Z:n};return r.replace(l,(function(t,e){return e||m[t]||n.replace(":","")}))},d.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},d.diff=function(t,c,l){var f,d=_.p(c),h=g(t),m=6e4*(h.utcOffset()-this.utcOffset()),v=this-h,y=_.m(this,h);return y=(f={},f[a]=y/12,f[u]=y,f[o]=y/3,f[s]=(v-m)/6048e5,f.day=(v-m)/864e5,f[n]=v/36e5,f[r]=v/6e4,f[e]=v/1e3,f)[d]||v,l?y:_.a(y)},d.daysInMonth=function(){return this.endOf(u).$D},d.$locale=function(){return v[this.$L]},d.locale=function(t,e){if(!t)return this.$L;var r=this.clone(),n=$(t,e,!0);return n&&(r.$L=n),r},d.clone=function(){return _.w(this.$d,this)},d.toDate=function(){return new Date(this.valueOf())},d.toJSON=function(){return this.isValid()?this.toISOString():null},d.toISOString=function(){return this.$d.toISOString()},d.toString=function(){return this.$d.toUTCString()},f}();return g.prototype=R.prototype,g.extend=function(t,e){return t(e,R,g),g},g.locale=$,g.isDayjs=y,g.unix=function(t){return g(1e3*t)},g.en=v[m],g.Ls=v,g}()},584:function(t,e,r){"use strict";r.r(e);var n=r(585),o=r.n(n);for(var c in n)"default"!==c&&function(t){r.d(e,t,(function(){return n[t]}))}(c);e.default=o.a},585:function(t,e,r){"use strict";r(23),r(24),r(100);var n=r(573);r(323),r(38),r(10),r(108),r(33);var o=r(322),c=r(607);r(29);var l=r(101),f=r(321),d=r(102),h=r(103),m=r(104),v=r(80);function y(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var $=this&&this.__decorate||function(t,e,r,desc){var n,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":v(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(o<3?n(c):o>3?n(e,r,c):n(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c},_=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var R=_(r(1)),D=r(105),S=_(r(583)),M=r(577),w=r(578),E=function(t){d($,t);var e,r,v=(e=$,function(){var t,r=m(e);if(y()){var n=m(this).constructor;t=Reflect.construct(r,arguments,n)}else t=r.apply(this,arguments);return h(this,t)});function $(){var t;return l(this,$),(t=v.apply(this,arguments)).form={company:"",name:t.userInfo.name,deadline:S.default().add(1,"month").toISOString(),autoRejectDay:5,referTotal:0,requiredFields:c(M.REQUIRED_REFER_FIELD_VALUES),source:""},t.requiredReferFieldValues=M.REQUIRED_REFER_FIELD_VALUES,t.deadlineOptions={disabledDate:function(t){var e=S.default(),r=S.default(t),n=e.add(1,"year");return r.isBefore(e)||r.isAfter(n)}},t.rules=w.JOB_RULES,t}return f($,[{key:"mounted",value:function(){null!==this.job&&this.loadJob()}},{key:"loadJob",value:(r=o(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:Object.keys(this.form).forEach((function(t){e.form[t]=e.job[t]}));case 1:case"end":return t.stop()}}),t,this)}))),function(){return r.apply(this,arguments)})},{key:"submit",value:function(){var t=this;this.$refs.form.validate(function(){var e=o(regeneratorRuntime.mark((function e(r){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r){e.next=2;break}return e.abrupt("return",t.$message.error("填写不正确"));case 2:t.$emit("submit",t.form);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}},{key:"userInfo",get:function(){return this.$auth.user.info}},{key:"job",get:function(){return this.$auth.user.job}},{key:"referFields",get:function(){return Object.entries(M.REFER_FIELDS_MAPPER).map((function(t){var e=n(t,2);return{value:e[0],label:e[1]}}))}}]),$}(R.default);E=$([D.Component],E),e.default=E},586:function(t,e,r){var content=r(612);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(50).default)("791ba704",content,!0,{sourceMap:!1})},587:function(t,e,r){var content=r(614);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(50).default)("7daab1c8",content,!0,{sourceMap:!1})},606:function(t,e,r){"use strict";r.r(e);var n=r(653),o=r(584);for(var c in o)"default"!==c&&function(t){r.d(e,t,(function(){return o[t]}))}(c);r(611),r(613);var l=r(28),component=Object(l.a)(o.default,n.a,n.b,!1,null,"3fd94e74",null);e.default=component.exports},607:function(t,e,r){var n=r(608),o=r(609),c=r(571),l=r(610);t.exports=function(t){return n(t)||o(t)||c(t)||l()}},608:function(t,e,r){var n=r(572);t.exports=function(t){if(Array.isArray(t))return n(t)}},609:function(t,e){t.exports=function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},610:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},611:function(t,e,r){"use strict";var n=r(586);r.n(n).a},612:function(t,e,r){(e=r(49)(!1)).push([t.i,".job-form .el-tag__close.el-icon-close{display:none!important}",""]),t.exports=e},613:function(t,e,r){"use strict";var n=r(587);r.n(n).a},614:function(t,e,r){(e=r(49)(!1)).push([t.i,".job-form .full-width[data-v-3fd94e74]{width:100%}.job-form .limit-hint[data-v-3fd94e74]{color:#e6a23c}.job-form .publish[data-v-3fd94e74]{text-align:center}.job-form .publish-button[data-v-3fd94e74]{margin-right:8px}",""]),t.exports=e},615:function(t,e,r){"use strict";r.r(e);var n=r(616),o=r.n(n);for(var c in n)"default"!==c&&function(t){r.d(e,t,(function(){return n[t]}))}(c);e.default=o.a},616:function(t,e,r){"use strict";r(23),r(24),r(10),r(100),r(33);var n=r(322),o=r(101),c=r(321),l=r(102),f=r(103),d=r(104),h=r(80);function m(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var v=this&&this.__decorate||function(t,e,r,desc){var n,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":h(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(o<3?n(c):o>3?n(e,r,c):n(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c},y=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var $=y(r(1)),_=r(105),R=y(r(606)),D=function(t){l(v,t);var e,r,h=(e=v,function(){var t,r=d(e);if(m()){var n=d(this).constructor;t=Reflect.construct(r,arguments,n)}else t=r.apply(this,arguments);return f(this,t)});function v(){return o(this,v),h.apply(this,arguments)}return c(v,[{key:"onSubmit",value:(r=n(regeneratorRuntime.mark((function t(form){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$axios.$put("/jobs/".concat(this.$auth.user.job.jobId),form);case 2:return this.$message.success("已修改该职位"),t.next=5,this.$auth.fetchUser();case 5:return t.next=7,this.$router.push("/job/list");case 7:case"end":return t.stop()}}),t,this)}))),function(t){return r.apply(this,arguments)})}]),v}($.default);D=v([_.Component({components:{JobForm:R.default}})],D),e.default=D},653:function(t,e,r){"use strict";r.d(e,"a",(function(){return n})),r.d(e,"b",(function(){return o}));var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-form",{ref:"form",staticClass:"job-form",attrs:{model:t.form,"label-width":"120px","label-position":"left",rules:t.rules}},[r("el-divider",[t._v("内推职位信息")]),t._v(" "),r("el-form-item",{attrs:{prop:"company",required:"",label:"内推公司"}},[r("el-input",{attrs:{placeholder:"内推的公司"},model:{value:t.form.company,callback:function(e){t.$set(t.form,"company",e)},expression:"form.company"}})],1),t._v(" "),r("el-form-item",{attrs:{required:"",label:"内推人"}},[r("el-input",{attrs:{placeholder:"请输入你的名字"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),r("el-form-item",{attrs:{required:"",label:"必填内容"}},[r("el-select",{staticClass:"full-width",attrs:{multiple:"",placeholder:"选择候选人要填的信息"},model:{value:t.form.requiredFields,callback:function(e){t.$set(t.form,"requiredFields",e)},expression:"form.requiredFields"}},t._l(t.referFields,(function(e){return r("el-option",{key:e.value,attrs:{label:e.label,value:e.value,disabled:t.requiredReferFieldValues.includes(e.value)}})})),1)],1),t._v(" "),r("el-form-item",{attrs:{required:"",label:"截止日期"}},[r("el-date-picker",{staticClass:"full-width",attrs:{type:"date",format:"yyyy年MM月dd日","picker-options":t.deadlineOptions,placeholder:"选择截止日期"},model:{value:t.form.deadline,callback:function(e){t.$set(t.form,"deadline",e)},expression:"form.deadline"}})],1),t._v(" "),r("el-form-item",{attrs:{required:"",label:"X天默拒"}},[r("el-radio",{attrs:{label:3},model:{value:t.form.autoRejectDay,callback:function(e){t.$set(t.form,"autoRejectDay",e)},expression:"form.autoRejectDay"}},[t._v("3 天")]),t._v(" "),r("el-radio",{attrs:{label:5},model:{value:t.form.autoRejectDay,callback:function(e){t.$set(t.form,"autoRejectDay",e)},expression:"form.autoRejectDay"}},[t._v("5 天")]),t._v(" "),r("el-radio",{attrs:{label:7},model:{value:t.form.autoRejectDay,callback:function(e){t.$set(t.form,"autoRejectDay",e)},expression:"form.autoRejectDay"}},[t._v("7 天")])],1),t._v(" "),r("el-form-item",{attrs:{required:"",label:"内推上限"}},[r("el-input-number",{attrs:{min:20,max:1e3,step:100,label:"描述文字"},model:{value:t.form.referTotal,callback:function(e){t.$set(t.form,"referTotal",e)},expression:"form.referTotal"}}),t._v(" "),r("p",{staticClass:"limit-hint"},[t._v("上限范围：20~1000 请合理安排你的内推计划")])],1),t._v(" "),r("el-form-item",{attrs:{label:"一亩三分地原贴"}},[r("el-input",{attrs:{type:"url",placeholder:"添加原帖更方便追踪哦"},model:{value:t.form.source,callback:function(e){t.$set(t.form,"source",e)},expression:"form.source"}})],1),t._v(" "),r("div",{staticClass:"publish"},[r("el-button",{staticClass:"publish-button",attrs:{type:"primary",round:""},on:{click:t.submit}},[t._v("\n            "+t._s(null!==t.job?"修改内推":"发布内推")+"\n        ")]),t._v(" "),r("nuxt-link",{attrs:{to:"/job/list",tag:"span"}},[r("el-button",{attrs:{type:"danger",round:""}},[t._v("放弃编辑")])],1)],1)],1)},o=[]},687:function(t,e,r){"use strict";r.d(e,"a",(function(){return n})),r.d(e,"b",(function(){return o}));var n=function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("JobForm",{on:{submit:this.onSubmit}})],1)},o=[]},703:function(t,e,r){"use strict";r.r(e);var n=r(687),o=r(615);for(var c in o)"default"!==c&&function(t){r.d(e,t,(function(){return o[t]}))}(c);var l=r(28),component=Object(l.a)(o.default,n.a,n.b,!1,null,"80ce139a",null);e.default=component.exports}}]);