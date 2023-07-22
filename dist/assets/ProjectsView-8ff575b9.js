import{r as d,_ as p,a as h,b as _,c as u,d as j,o as s,e as i,f as e,F as m,g as v,t as n,h as g,p as f,i as b,j as w,k as l,C as y}from"./index-7a4611cf.js";const k={name:"ProjectsFull",setup(){const t=a=>new URL(Object.assign({"./ProjectThumbnails/Bose.jfif":p,"./ProjectThumbnails/PersonalSite.jfif":h,"./ProjectThumbnails/Phone.jfif":_,"./ProjectThumbnails/Todo.jfif":u})[`./ProjectThumbnails/${a}.jfif`],self.location).href;return{projectlist:d([{name:"Bose Landing Page",image:"Bose",description:"A landing page of a company that sells speakers and headphones, Bose. For my first larger project like this, I have decided to challenge myself to implement a responsive design with interactive elements, such as the collapsable menu, purely in HTML and CSS, without the use of any JavaScript whatsoever.",link:"https://kacper-lyczba.github.io/html-layout-bose/"},{name:"React ToDo App",image:"Todo",description:"An application that handles a list of ToDos; and while that on its own might not sound very impressive, this project was very important for my journey. In this application, I have utilized React, as well as the React Transition Group library in order to make the ToDos not only functional and editable, but also good-looking.",link:"https://kacper-lyczba.github.io/react-todo-app/"},{name:"Mobile Phone Catalog",image:"Phone",description:"This website was a group project; we were a team of 5, with each having their own responsibilities. The project was written in React, using React Router to handle the tabs. Notably, I was not only a contributor to the project, but also the main debugger; I set up the Linter, sorted conflicts, and eventually fixed the Router when it ran into a bizarre issue with how one of the members utilized the require() function.",link:"https://fe-feb20-nu-clear-react-or.github.io/product_catalog/#/home"},{name:"Personal Website",image:"PersonalSite",description:"Well... Hi. As you might have guessed, it is the website you are looking at right now. Unlike my other projects, I had no instructions nor guides on how to develop this one, just me, myself, and my mind. On top of that, I decided to go wild and challenge myself by writing the whole thing in a framework I've never worked with before, Vue.Js. I am very proud of the result, to say the least!",link:"https://www.suaby.quest"}]),getImageUrl:t}}};const P=t=>(f("data-v-26540112"),t=t(),b(),t),I={class:"projectlist"},T={class:"projectlist_wrapper"},S=P(()=>e("h1",{class:"projectlist_title"},"Timeline of Notable Projects",-1)),x={class:"projectlist_projects"},R={class:"projectlist_projectinfo"},B={class:"projectlist_project-text-title"},F={class:"projectlist_project-text-subtitle"},z=g('<div class="projectlist_separator" data-v-26540112><div class="projectlist_circle" data-v-26540112></div><div class="projectlist_circle" data-v-26540112></div><div class="projectlist_circle" data-v-26540112></div><div class="projectlist_circle projectlist_circle--big" data-v-26540112></div><div class="projectlist_circle" data-v-26540112></div><div class="projectlist_circle" data-v-26540112></div><div class="projectlist_circle" data-v-26540112></div></div>',1),C=["href"],L=["src"];function N(t,r,a,c,A,D){return s(),i("div",I,[e("div",T,[S,e("div",x,[(s(!0),i(m,null,v(c.projectlist,o=>(s(),i("div",{key:o.image,class:"projectlist_project"},[e("div",R,[e("h1",B,n(o.name),1),e("h2",F,n(o.description),1)]),z,e("a",{class:"projectlist_project-imagewrapper",href:o.link,target:"_blank"},[e("img",{src:c.getImageUrl(o.image),class:"projectlist_project-image"},null,8,L)],8,C)]))),128))])])])}const V=j(k,[["render",N],["__scopeId","data-v-26540112"]]),$={class:"Projects"},q=w({__name:"ProjectsView",setup(t){return(r,a)=>(s(),i("div",$,[l(V),l(y)]))}});export{q as default};