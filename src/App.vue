<template>
  <div id="app">
    <div class="router">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;500;600;700;800;900&display=swap");
@import url('https://fonts.googleapis.com/css2?family=Audiowide&family=Open+Sans:ital@1&display=swap');

#app {
  font-family: 'Barlow', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #45A29F;
}
html, body {
  font-family: 'Barlow', sans-serif;
}
html {
  background-color: #0b0c10;
}
body {
    padding-left: 10%;
    padding-right: 10%;
    color: #c5c6c8;
}
.button {
    font-size: 18px;
    border: 1px solid #202833;
    padding: 4px;
    padding-left: 10px;
    padding-right: 10px;
    margin-left: 20px;
    border-radius: 5px;
    transition: .3s;
    text-decoration: none;
}
.display-block {
  border: 1px solid #202833;
  text-align: center;
  padding: 15px;
  margin: 15px;
}
.border {
  border: 1px solid #202833;
  border-radius: 8px;
}
.button:hover {
  color: #66FCF1;
  border: 1px solid  #66FCF1;
  cursor: pointer;
}
.buttons {
      height: 25px;
  margin-top: 30px;
}
a {
  color: #45a29f;
  font-weight: 500;
}
a:hover {
  color: #66FCF1;
}
.is-active {
  width: static;
  background-color: #66FCF1;
  color: #0B0C10 !important;

}
.is-still-active {
  width: static;
  background-color: transparent;
  color: #45A29F !important;
  border: 1px solid #45A29F
}
.block {
  color: #C5C6C8;
  border: 1px solid #202833;
  width: 250px;
  height: 250px;
  margin: 20px 10px;
  margin-bottom: 10px;
  vertical-align: top;
  padding: 5px 15px;
  vertical-align: center !important;
  min-width: 200px;
  margin-top: 10px;
}
.text-color, h1, p, button {
  color: #c5c6c8;
}
h1 {
  font-weight: 500;
}
p {
  letter-spacing: 1px;
  line-height: 22px;
  font-size: 16px;
  text-align: center;
}
.router-2 {
  margin-top: 30px;
}
.spinner {
  text-align: center !important;
  vertical-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 12%;
}
h2 {
  font-weight: 400;
  text-align: left;
  padding-left: 10px;
}
h3 {
  color: #66fcf1;
  font-weight: 400;
}
@keyframes cssAnimation {
    to {
        width:0;
        height:0;
        overflow:hidden;
    }
}
@-webkit-keyframes cssAnimation {
    to {
        width:0;
        height:0;
        visibility:hidden;
    }
}
@-webkit-keyframes fadeinout {
  0%,100% { opacity: 0; }
  50% { opacity: 1; }
}

@keyframes fadeinout {
  0%,100% { opacity: 0; }
  50% { opacity: 1; }
}
.external-link-icon {
  display: inline-block;
}
.link:hover {
  text-decoration: underline;
  color: #66FCF1 !important;
}
@media screen and (max-width: 840px) {
  .block {
    width: auto;
    height: auto;
    margin-left: 0px ;
    margin-right: 0px;
  }
}
@media screen and (max-width: 705px){
  .button {
    margin-left: 0px;
    margin-top: 20px;
    display: block;
  } 
}
@media screen and (max-width: 407px){
  body {
     padding: 0px !important;
  }
  .block {
    padding: 0px 5px;
    margin-bottom: 15px;
  }
}
</style>
