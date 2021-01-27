<template>
  <div class="userprofile">
    <div class="full-background">
      <ul v-for="user in users" v-bind:key="user.id">
        <div class="box">
          <!-- <div style="width:500px;height:100px;border:1px solid #000;">This is a rectangle!</div> -->
          <img class="image" src="./Leanne Graham.png" fluid alt="user.name" />
          <div class="username">
            <router-link v-bind:to="'/Profile/' + user.id">
              {{ user.username }}
            </router-link>
          </div>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Home",
   data() {
    return {
      users: null,
    };
  },
  created: function () {
    axios.get(" https://jsonplaceholder.typicode.com/users").then((res) => {
      this.users = res.data;
    });
  },
};
</script>

<style>
.full-background {
  overflow: hidden;
  background-color: rgb(237, 245, 248);
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  width: 100%;
  text-align: left;
}
.userprofile .box {
  height: 115px;
  width: 115px;
  border: 1px solid rgb(216, 214, 214);
  /* background: black; */
  margin-top: 20px;
  margin-left: 10px;
  box-shadow: 5px 5px #e7e6e6;
  background-color: lightblue;
  float: left;
  position: relative;
}
.userprofile .image {
  margin-top: 13px;
  width: 65px;
  height: 65px;
  margin-left: 25px;
}
.userprofile .username {
  font-size: 13px;
  font-style: inherit;
  font-weight: bold;
  text-align: center;
}
</style>
