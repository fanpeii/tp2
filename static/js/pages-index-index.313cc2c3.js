(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"0895":function(e,t,i){t=e.exports=i("2350")(!1),t.push([e.i,"uni-page-body[data-v-53b949e1]{width:100%;min-height:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-flex:1;-webkit-flex:1;flex:1}.grace-sbody[data-v-53b949e1]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;width:100%;min-height:100%;-webkit-box-flex:1;-webkit-flex:1;flex:1}\r\n.grace-page-header[data-v-53b949e1]{width:100%;position:fixed;left:0;top:0;z-index:99;border-bottom:0 solid #fff}.grace-page-status-bar[data-v-53b949e1]{width:100%;height:0}.grace-page-header-nav[data-v-53b949e1]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:nowrap;flex-wrap:nowrap;height:44px;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.grace-header-main[data-v-53b949e1]{width:%?300?%;-webkit-box-flex:1;-webkit-flex:auto;flex:auto;overflow:hidden}.grace-page-body[data-v-53b949e1]{width:100%;-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.grace-page-footer[data-v-53b949e1]{width:100%;position:fixed;left:0;bottom:0;z-index:99}.gui-page-rb-area[data-v-53b949e1]{width:%?100?%;position:fixed;right:%?20?%;bottom:%?100?%;z-index:1}",""])},"15b4":function(e,t,i){"use strict";var a,r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"grace-sbody"},[e.customHeader?i("v-uni-view",[i("v-uni-view",{staticClass:"grace-page-header",style:{"z-index":e.headerIndex,background:e.headerBG,borderBottomWidth:e.borderWidth,borderBottomColor:e.borderColor}},[i("v-uni-view",{staticClass:"grace-page-status-bar",style:{height:e.statusBarHeight+"px",background:e.statusBarBG}}),i("v-uni-view",{staticClass:"grace-page-header-nav",style:{height:e.headerHeight+"px"}},[i("v-uni-view",{staticClass:"grace-header-main"},[e._t("gHeader")],2),i("v-uni-view",{style:{width:e.BoundingWidth,height:"10px"}})],1)],1),i("v-uni-view",{style:{width:"100%",height:e.statusBarHeight+e.headerHeight+"px"}})],1):e._e(),i("v-uni-view",{staticClass:"grace-page-body"},[e._t("gBody")],2),e.isSwitchPage?e._e():i("v-uni-view",{style:{width:"100%",height:e.iphoneXButtomHeight+"px"}}),i("v-uni-view",{staticClass:"grace-page-footer",style:{"z-index":e.footerIndex,background:e.footerBg}},[e._t("gFooter"),e.isSwitchPage?e._e():i("v-uni-view",{style:{width:"100%",height:e.iphoneXButtomHeight+"px"}})],2),i("v-uni-view",{staticClass:"gui-page-rb-area",style:{right:e.rbRight+"rpx",bottom:e.rbBottom+"rpx",width:e.rbWidth+"rpx",zIndex:e.rbIndex}},[e._t("gRTArea")],2)],1)},n=[];i.d(t,"b",function(){return r}),i.d(t,"c",function(){return n}),i.d(t,"a",function(){return a})},"1b94":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("a481"),i("c5f6");var a={props:{customHeader:{type:Boolean,default:!0},headerHeight:{type:Number,default:44},headerIndex:{type:Number,default:1},headerBG:{type:String,default:"none"},statusBarBG:{type:String,default:"none"},footerIndex:{type:Number,default:1},footerBg:{type:String,default:""},isSwitchPage:{type:Boolean,default:!1},rbWidth:{type:Number,default:100},rbBottom:{type:Number,default:100},rbRight:{type:Number,default:20},rbIndex:{type:Number,default:1},borderWidth:{type:String,default:"0"},borderColor:{type:String,default:"#D1D1D1"}},data:function(){return{statusBarHeight:0,iphoneXButtomHeight:0,BoundingWidth:"0px"}},created:function(){try{var e=uni.getSystemInfoSync();e.model=e.model.replace(" ",""),e.model=e.model.toLowerCase(),-1==e.model.indexOf("iphonex")&&-1==e.model.indexOf("iphone11")||(this.iphoneXButtomHeight=uni.upx2px(50))}catch(t){return null}this.customHeader&&(this.statusBarHeight=e.statusBarHeight)}};t.default=a},"503a":function(e,t,i){"use strict";var a=i("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(i("7c89")),n={data:function(){return{concerns:[["http://img5.imgtn.bdimg.com/it/u=2819669926,1214596723&fm=26&gp=0.jpg","设计秀儿","实力派设计大佬"],["http://img0.imgtn.bdimg.com/it/u=3582194852,1481557220&fm=26&gp=0.jpg","十年久不遇","20年架构经验"],["http://img3.imgtn.bdimg.com/it/u=2815906454,2337019799&fm=26&gp=0.jpg","盗心贼","阿里全栈大牛带你飞"],["http://img2.imgtn.bdimg.com/it/u=3056902114,653741992&fm=26&gp=0.jpg","女程序员","美女也写一手好代码"],["http://img1.imgtn.bdimg.com/it/u=4293603120,2455313591&fm=26&gp=0.jpg","他乡联盟","主攻摄影十几年"],["http://img4.imgtn.bdimg.com/it/u=1429010655,902968447&fm=26&gp=0.jpg","李某某","不会PHP的程序员不是好设计"]]}},components:{gracePage:r.default},methods:{dianzan:function(){uni.navigateTo({url:"/pages/sub_detail/index"})}}};t.default=n},6384:function(e,t,i){"use strict";var a=i("cebc8"),r=i.n(a);r.a},"666a":function(e,t,i){t=e.exports=i("2350")(!1),t.push([e.i,"uni-page-body[data-v-26036811]{background:#f1f2f3}.grace-img-card[data-v-26036811]{margin-top:30px;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.grace-img-card-item[data-v-26036811]{width:%?260?%;margin:%?25?% %?10?%;border-radius:%?8?%;padding:%?30?%;background-color:#fff;overflow:hidden;font-size:0}.grace-img-card-image[data-v-26036811]{width:%?150?%;height:%?150?%;border-radius:%?100?%}.grace-img-card-title[data-v-26036811]{margin-top:8px;font-weight:700}.grace-concerns-button[data-v-26036811]{line-height:%?60?%;height:%?60?%;font-size:%?22?%;margin-top:10px;width:%?160?%}.concerns-footer[data-v-26036811]{padding:%?20?%;background-color:#fff}.grace-icons[data-v-26036811]::before{margin-right:5px}body.?%PAGE?%[data-v-26036811]{background:#f1f2f3}",""])},"7c89":function(e,t,i){"use strict";i.r(t);var a=i("15b4"),r=i("9d51");for(var n in r)"default"!==n&&function(e){i.d(t,e,function(){return r[e]})}(n);i("e533");var o,d=i("f0c5"),c=Object(d["a"])(r["default"],a["b"],a["c"],!1,null,"53b949e1",null,!1,a["a"],o);t["default"]=c.exports},"9d51":function(e,t,i){"use strict";i.r(t);var a=i("1b94"),r=i.n(a);for(var n in a)"default"!==n&&function(e){i.d(t,e,function(){return a[e]})}(n);t["default"]=r.a},"9edf":function(e,t,i){"use strict";i.r(t);var a=i("503a"),r=i.n(a);for(var n in a)"default"!==n&&function(e){i.d(t,e,function(){return a[e]})}(n);t["default"]=r.a},b31c:function(e,t,i){"use strict";var a,r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("gracePage",{attrs:{customHeader:!1}},[i("v-uni-view",{staticClass:"grace-body",staticStyle:{"padding-bottom":"150rpx"},attrs:{slot:"gBody"},slot:"gBody"},[i("img",{staticStyle:{width:"100%"},attrs:{src:"https://pic.downk.cc/item/5e84bdfc504f4bcb0450e1d7.png"}}),i("v-uni-view",{staticClass:"grace-text-small grace-black6",staticStyle:{"margin-top":"8px","text-indent":"1rem"}},[e._v("即“中国十大杰出青年”评选活动评出并授予的荣誉称号。它是由中华全国青年联合会创意策划，联合中国青少年发展基金会及人民日报、中央电视台、中央人民广播电台、光明日报、中国青年报、解放军报、科技日报、经济日报、工人日报、农民日报等十家主要新闻单位共同主办，旨在举荐青年人才，宣传杰出青年，树立时代楷模。")]),i("v-uni-view",{staticClass:"grace-img-card"},e._l(e.concerns,function(t,a){return i("v-uni-view",{key:a,staticClass:"grace-img-card-item grace-box-shadow grace-columns grace-flex-vcenter grace-relative"},[i("v-uni-view",{staticClass:"demoIn grace-bg-red grace-absolute-lt",staticStyle:{"font-size":"0.5rem"}},[e._v("NO.1")]),i("v-uni-image",{staticClass:"grace-img-card-image",attrs:{src:t[0],mode:"widthFix"}}),i("v-uni-view",{staticClass:"grace-img-card-title"},[e._v(e._s(t[1]))]),i("v-uni-view",{staticClass:"grace-text-small grace-ellipsis grace-black9"},[e._v(e._s(t[2]))]),i("v-uni-button",{staticClass:"grace-button grace-concerns-button grace-icons icon-shoucang",attrs:{type:"warn"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.dianzan.apply(void 0,arguments)}}},[e._v("为他点赞")])],1)}),1),i("v-uni-view",{staticStyle:{"text-align":"center"}},[i("v-uni-text",{staticClass:"grace-desc grace-black9"},[e._v("本页面由xxx公司提供技术支持 @copyright 2020")])],1)],1)],1)},n=[];i.d(t,"b",function(){return r}),i.d(t,"c",function(){return n}),i.d(t,"a",function(){return a})},cebc8:function(e,t,i){var a=i("666a");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var r=i("4f06").default;r("4577a177",a,!0,{sourceMap:!1,shadowMode:!1})},d52d:function(e,t,i){"use strict";i.r(t);var a=i("b31c"),r=i("9edf");for(var n in r)"default"!==n&&function(e){i.d(t,e,function(){return r[e]})}(n);i("6384");var o,d=i("f0c5"),c=Object(d["a"])(r["default"],a["b"],a["c"],!1,null,"26036811",null,!1,a["a"],o);t["default"]=c.exports},e533:function(e,t,i){"use strict";var a=i("ea4c"),r=i.n(a);r.a},ea4c:function(e,t,i){var a=i("0895");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var r=i("4f06").default;r("068fccac",a,!0,{sourceMap:!1,shadowMode:!1})}}]);