<template>
  <div id="Profile">
    <div class="profiletop">
      <div class="ProfileBackground">
        <span class="profilephoto"></span>
      </div>
      <profilename class="profilename">
        <div v-for="user in users" v-bind:key="user.id">
          <name> {{ user.name }} </name>
        </div>
      </profilename>
    </div>
    <div class="nav">
      <router-link to="/">Home</router-link>
      <div v-for="user in users" v-bind:key="user.id">
        <router-link v-bind:to="'/About/' + user.id"> About</router-link>
      </div>
      <a href="#">Search</a>
      <a href="#" class="right"></a>
    </div>
    <div class="detialTab">
      <div v-for="user in users" v-bind:key="user.id">
         <tab>E-mail </tab>
        <h1> {{ user.email }}</h1>

        <h1> Address : {{ user.address.street }}</h1>
        <h1>{{ user.address.suite }}</h1>
        <h1>{{ user.address.city }}</h1>
        <h1>{{ user.address.zipcode }}</h1>
        <h1>Phone No. : {{ user.phone }}</h1>
        <h1>Website : {{ user.website }}</h1>
        <h1>Company : {{ user.company.name }}</h1>
        <h1>{{ user.company.catchPhrase }}</h1>
        <h1>{{ user.company.bs }}</h1>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      posts: [],
      users: [],
    };
  },
  created: function () {
    axios
      .get(
        " https://jsonplaceholder.typicode.com/users?id=" +
          this.$route.params.id
      )
      .then((res) => {
        this.users = res.data;
        console.warn(res);
      });
  },
};
</script>


<style scoped>
.profiletop {
  background: linear-gradient(to bottom, #ffffcc 0%, #ffffff 100%);
  height: 350px;
}
.profilename {
  overflow: hidden;
  /* background-color: #131313; */
  position: sticky;
  position: -webkit-sticky;
  top: 310px;
  width: 70%;
  height: 40px;
  font-size: 35px;
  font-family: "Times New Roman", Times, serif;
  font-weight: bold;
  position: sticky;
}
.ProfileBackground {
  overflow: hidden;
  background-color: #b6faec;
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  margin-left: 5%;
  width: 90%;
  height: 300px;
}
.profilephoto {
  height: 200px;
  width: 200px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  background-image: url("profile.jpg");
  margin-top: 20px;
  background-size: cover;
}
.nav {
  overflow: hidden;
  background-color: #b6faec;
  position: sticky;
  position: relative;
  /* position: -webkit-sticky; */
  margin-left: 5%;
  width: 90%;
  height: 40px;
}
.nav a {
  float: left;
  display: block;
  color: rgb(17, 15, 15);
  text-align: center;
  padding: 10px 20px;
  text-decoration: none;
  font-size: 15px;
  font-weight: bold;
  font-family: Georgia, serif;
}
.profilebody {
  overflow: hidden;
  background-color: rgb(237, 245, 248);
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  margin-left: 5%;
  width: 90%;
  text-align: left;
}
.profilebody .box {
  height: 275px;
  width: 320px;
  border: 1px solid rgb(216, 214, 214);
  margin-top: 30px;
  margin-left: 40px;
  box-shadow: 5px 5px #e7e6e6;
  background-color: white;
  float: left;
  font-size: 25px;
}
.postheader {
  height: 30px;
  width: 320px;
  background-color: rgba(209, 195, 195, 0.719);
  margin-bottom: 0px;
}
.box .postheader .image {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  overflow: hidden;
  margin-left: 10px;
  margin-top: 5px;
  float: left;
}
.profilebody .box .postheader p {
  float: left;
  display: block;
  color: rgb(17, 15, 15);
  text-decoration: none;
  font-size: 15px;
  font-weight: bold;
  font-family: Georgia, serif;
  margin-top: 5px;
  margin-left: 20px;

  text-align: center;
}

.profilebody .box .post #posttitle {
  font-size: 20px;
  font-weight: bold;
  text-align: center;
}

.profilebody .box .post #content {
  font-size: 18px;
  font-style: italic;
  text-align: center;
  margin-left: 10px;
  margin-right: 10px;
}
.detialTab tab
{

    text-align: left;
    
}
</style>