"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[6891],{6547:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var a=n(7462),r=(n(7294),n(3905)),i=n(5488),p=n(5162),o=n(3068);const s={sidebar_position:2},l="Screen capture",d={unversionedId:"sources/screen-capture",id:"sources/screen-capture",title:"Screen capture",description:"The @uppy/screen-capture plugin can record your screen or an application and",source:"@site/docs/sources/screen-capture.mdx",sourceDirName:"sources",slug:"/sources/screen-capture",permalink:"/uppy.io/pr-preview/pr-67/docs/sources/screen-capture",draft:!1,editUrl:"https://github.com/transloadit/uppy.io/tree/main/docs/sources/screen-capture.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Webcam",permalink:"/uppy.io/pr-preview/pr-67/docs/sources/webcam"},next:{title:"Box",permalink:"/uppy.io/pr-preview/pr-67/docs/sources/companion-plugins/box"}},u={},c=[{value:"When should I use this?",id:"when-should-i-use-this",level:2},{value:"Install",id:"install",level:2},{value:"Use",id:"use",level:2},{value:"API",id:"api",level:3},{value:"Options",id:"options",level:3},{value:"<code>id</code>",id:"id",level:4},{value:"<code>title</code>",id:"title",level:4},{value:"<code>target</code>",id:"target",level:4},{value:"<code>displayMediaConstraints</code>",id:"displaymediaconstraints",level:4},{value:"<code>userMediaConstraints</code>",id:"usermediaconstraints",level:4},{value:"<code>preferredVideoMimeType</code>",id:"preferredvideomimetype",level:4},{value:"<code>locale</code>",id:"locale",level:4}],m={toc:c};function h(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"screen-capture"},"Screen capture"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"@uppy/screen-capture")," plugin can record your screen or an application and\nsave it as a video."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"/examples"},"Try out the live example")," or take it for a spin in\n",(0,r.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/uppy-dashboard-xpxuhd"},"CodeSandbox"),".")),(0,r.kt)("h2",{id:"when-should-i-use-this"},"When should I use this?"),(0,r.kt)("p",null,"When you want users record their screen on their computer. This plugin only\nworks on desktop browsers which support\n",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getDisplayMedia"},(0,r.kt)("inlineCode",{parentName:"a"},"getDisplayMedia API")),".\nIf no support for the API is detected, Screen Capture won\u2019t be installed, so you\ndon\u2019t have to do anything."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"To use the screen capture plugin in a Chromium-based browser,\n",(0,r.kt)("a",{parentName:"p",href:"https://developers.google.com/web/updates/2015/10/chrome-47-webrtc#public_service_announcements"},"your site must be served over https"),".\nThis restriction does not apply on ",(0,r.kt)("inlineCode",{parentName:"p"},"localhost"),", so you don\u2019t have to jump\nthrough many hoops during development.")),(0,r.kt)("h2",{id:"install"},"Install"),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(p.Z,{value:"npm",label:"NPM",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @uppy/screen-capture\n"))),(0,r.kt)(p.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @uppy/screen-capture\n"))),(0,r.kt)(p.Z,{value:"cdn",label:"CDN",mdxType:"TabItem"},(0,r.kt)(o.Z,{mdxType:"UppyCdnExample"},"\n        import { Uppy, Dashboard, ScreenCapture } from \"{{UPPY_JS_URL}}\"\n        const uppy = new Uppy()\n        uppy.use(Dashboard, { inline: true, target: 'body' })\n        uppy.use(ScreenCapture, { target: Uppy.Dashboard })\n      "))),(0,r.kt)("h2",{id:"use"},"Use"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"{3,7,11} showLineNumbers","{3,7,11}":!0,showLineNumbers:!0},"import Uppy from '@uppy/core';\nimport Dashboard from '@uppy/dashboard';\nimport ScreenCapture from '@uppy/screen-capture';\n\nimport '@uppy/core/dist/style.min.css';\nimport '@uppy/dashboard/dist/style.min.css';\nimport '@uppy/screen-capture/dist/style.min.css';\n\nnew Uppy()\n    .use(Dashboard, { inline: true, target: 'body' })\n    .use(ScreenCapture, { target: Dashboard });\n")),(0,r.kt)("h3",{id:"api"},"API"),(0,r.kt)("h3",{id:"options"},"Options"),(0,r.kt)("h4",{id:"id"},(0,r.kt)("inlineCode",{parentName:"h4"},"id")),(0,r.kt)("p",null,"A unique identifier for this plugin (",(0,r.kt)("inlineCode",{parentName:"p"},"string"),", default: ",(0,r.kt)("inlineCode",{parentName:"p"},"'ScreenCapture'"),")."),(0,r.kt)("h4",{id:"title"},(0,r.kt)("inlineCode",{parentName:"h4"},"title")),(0,r.kt)("p",null,"Configures the title / name shown in the UI, for instance, on Dashboard tabs\n(",(0,r.kt)("inlineCode",{parentName:"p"},"string"),", default: ",(0,r.kt)("inlineCode",{parentName:"p"},"'Screen Capture'"),")."),(0,r.kt)("h4",{id:"target"},(0,r.kt)("inlineCode",{parentName:"h4"},"target")),(0,r.kt)("p",null,"DOM element, CSS selector, or plugin to place the drag and drop area into\n(",(0,r.kt)("inlineCode",{parentName:"p"},"string")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Element"),", default: ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),")."),(0,r.kt)("h4",{id:"displaymediaconstraints"},(0,r.kt)("inlineCode",{parentName:"h4"},"displayMediaConstraints")),(0,r.kt)("p",null,"Options passed to\n",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getDisplayMedia"},(0,r.kt)("inlineCode",{parentName:"a"},"MediaDevices.getDisplayMedia()")),"\n(",(0,r.kt)("inlineCode",{parentName:"p"},"Object"),", default: ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),")."),(0,r.kt)("p",null,"See the\n",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackConstraints"},(0,r.kt)("inlineCode",{parentName:"a"},"MediaTrackConstraints")),"\nfor a list of options."),(0,r.kt)("h4",{id:"usermediaconstraints"},(0,r.kt)("inlineCode",{parentName:"h4"},"userMediaConstraints")),(0,r.kt)("p",null,"Options passed to\n",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia"},(0,r.kt)("inlineCode",{parentName:"a"},"MediaDevices.getUserMedia()")),"\n(",(0,r.kt)("inlineCode",{parentName:"p"},"Object"),", default: ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),")."),(0,r.kt)("p",null,"See the\n",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackConstraints"},(0,r.kt)("inlineCode",{parentName:"a"},"MediaTrackConstraints")),"\nfor a list of options."),(0,r.kt)("h4",{id:"preferredvideomimetype"},(0,r.kt)("inlineCode",{parentName:"h4"},"preferredVideoMimeType")),(0,r.kt)("p",null,"Set the preferred mime type for video recordings, for example ",(0,r.kt)("inlineCode",{parentName:"p"},"'video/webm'"),"\n(",(0,r.kt)("inlineCode",{parentName:"p"},"string"),", default: ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),")."),(0,r.kt)("p",null,"If the browser supports the given mime type, the video will be recorded in this\nformat. If the browser does not support it, it will use the browser default."),(0,r.kt)("p",null,"If no preferred video mime type is given, the ScreenCapture plugin will prefer\ntypes listed in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/uppy/#restrictions"},(0,r.kt)("inlineCode",{parentName:"a"},"allowedFileTypes")," restriction"),",\nif any."),(0,r.kt)("h4",{id:"locale"},(0,r.kt)("inlineCode",{parentName:"h4"},"locale")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n    strings: {\n        startCapturing: 'Begin screen capturing',\n        stopCapturing: 'Stop screen capturing',\n        submitRecordedFile: 'Submit recorded file',\n        streamActive: 'Stream active',\n        streamPassive: 'Stream passive',\n        micDisabled: 'Microphone access denied by user',\n        recording: 'Recording',\n    },\n};\n")))}h.isMDXComponent=!0}}]);