(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{CB7K:function(t,a,i){"use strict";i.r(a);var e=i("KQm4"),o=(i("TeQF"),i("ma9I"),i("rB9j"),i("EnZy"),i("pNMO"),i("4Brf"),i("2B1R"),i("afKu")),s=i.n(o),n={data:function(){return{socialMedia:["twitter","telegram","facebook","github","web","instagram"],icons:{twitter:["fab","twitter"],telegram:["fab","telegram"],facebook:["fab","facebook"],github:["fab","github"],web:["fas","link"],instagram:["fab","instagram"]},urls:{twitter:"https://twitter.com/",telegram:"https://t.me/",facebook:"https://facebook.com/",github:"https://github.com/",web:"",instagram:"https://instagram.com/"}}},computed:{hasTwitter:function(){return""!==this.$page.community.twitter},hasLocation:function(){return""!==this.$page.community.location},validSocial:function(){var t=this;return this.socialMedia.filter((function(a){return""!==t.$page.community[a]}))}},metaInfo:function(){var t=encodeURI("https://devspacemx.github.io/atlas".concat(this.$page.community.path,"?v=").concat(s()("sha256").update(this.$page.community.content).digest("hex"))),a=encodeURI("https://devspacemx.github.io/atlas".concat(this.$page.community.image.src)),i=encodeURI("https://devspacemx.github.io/atlas/logo.png"),o="https://motif.imgix.com/i?url=".concat(t)+"&image_url=".concat(a)+"&color=94a2b3&"+"logo_url=".concat(i)+"&logo_alignment=top%2Cleft&text_alignment=bottom%2Ccenter&logo_padding=70&font_family=Avenir%20Next%20Demi%2CBold&text_color=1d1d1d",n="comunidad"!==this.$page.community.title.split(" ")[0].toLowerCase()?"Comunidad ".concat(this.$page.community.title):this.$page.community.title;return console.log(n),console.log(t),console.log(a),console.log(o),this.$seo({title:n,baseUrl:"https://devspacemx.github.io/atlas",description:this.$page.community.description,keywords:"atlas,atlas comunidades,atlas tech,".concat(Object(e.a)(this.$page.community.tags.map((function(t){return t.title})))),lang:"es",language:"Spanish",image:o,openGraph:{title:this.$page.community.title,type:"website",image:o},twitter:{title:this.$page.community.title,type:"summary_large_image",image:o},script:[{src:"https://platform.twitter.com/widgets.js",body:!0}]})}},c=i("KHd+"),m=null,r=Object(c.a)(n,(function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("Layout",[i("div",{staticClass:"container mt-8"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-lg-8"},[i("p",[i("g-image",{staticClass:"mb-1 image-fluid mx-auto d-block",attrs:{immediate:"",width:"200",src:t.$page.community.image,alt:"Logotipo "+t.$page.community.title}})],1),i("h1",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"mb-2",domProps:{innerHTML:t._s(t.$page.community.title)}}),i("div",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"text-black",domProps:{innerHTML:t._s(t.$page.community.content)}})]),i("div",{staticClass:"col-lg-4 sidebar"},[i("div",{staticClass:"sidebar-box"},[i("h3",[t._v("Tags")]),i("div",{staticClass:"tagcloud"},t._l(t.$page.community.tags,(function(a){return i("g-link",{key:a.id,attrs:{to:a.path}},[t._v("\n              "+t._s(a.title)+"\n            ")])})),1)]),i("div",{staticClass:"sidebar-box"},[i("h3",[t._v("Sobre esta comunidad")]),i("p",[t._v("\n            "+t._s(t.$page.community.description)+"\n          ")])]),t.hasLocation?i("div",{staticClass:"sidebar-box"},[i("h3",[t._v("Ubicación")]),i("p",{staticClass:"fw-normal mb-0"},[i("font-awesome",{attrs:{size:"lg",icon:["fas","map-marker-alt"]}}),t._v("\n            "+t._s(t.$page.community.location)+"\n          ")],1)]):t._e(),i("div",{staticClass:"sidebar-box"},[i("h3",[t._v("Redes")]),t._l(t.validSocial,(function(a){return i("p",{key:a},[i("font-awesome-icon",{attrs:{icon:[].concat(t.icons[a]),size:"lg","fixed-width":""}}),i("a",{attrs:{target:"_blank",rel:"noreferrer",href:t.urls[a]+t.$page.community[a]}},[t._v("\n              "+t._s(t.urls[a]+t.$page.community[a]))])],1)}))],2),t.hasTwitter?i("div",{staticClass:"sidebar-box"},[i("h3",[t._v("Twitter")]),i("a",{staticClass:"twitter-timeline",attrs:{"data-height":"400","data-dnt":"true",href:"https://twitter.com/"+t.$page.community.twitter}},[t._v("Tweets by "+t._s(t.$page.community.twitter))])]):t._e()])])])])}),[],!1,null,null,null);"function"==typeof m&&m(r);a.default=r.exports}}]);