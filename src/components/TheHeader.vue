<template>
  <div class="header">
    <div class="navbar">
      <router-link to="/">Home </router-link>
      <router-link to="/Profile"> Profile</router-link>
      <a href="#">Search</a>
      <!-- <a href="#" class="right"> 
        <img class="image" src="./Leanne Graham.png" fluid alt="Profile image" />
        Profile </a> -->
    </div>
  </div>
</template>

<script>
import Profile from './Profile'
export default {
  name: "TheHeader",
  components:Profile,
};
</script>

<style>
.header {
  color: white;
  font-size: 10px;
}
.navbar {
  overflow: hidden;
  background-color: #1abc9c;
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  width: 100%;
  height: 50px;
}
.navbar a {
  float: left;
  display: block;
  color: white;
  text-align: center;
  padding: 17px 20px;
  text-decoration: none;
  font-size: 15px;
}
/* Change color on hover */
.navbar a:hover {
  background-color: #ddd;
  color: black;
}
/* Active/current link */
.navbar a.active {
  background-color: #1abc9c;
  color: white;
}

.navbar a.active:hover {
  background-color: #ddd;
  color: black;
}

.navbar a.right {
  text-align: center;
  float: right;
  margin-left: 10px;
}

.navbar a.right .image {
  height: 20px;
  width: 20px;
float: left;
}
</style>
