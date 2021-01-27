<template>
  <div>
    <div class="profilebody">
      <div>
        <ul v-for="post in posts" v-bind:key="post.id">
          <div class="box">
            <div class="postheader">
              <img
                class="image"
                src="./Leanne Graham.png"
                fluid
                alt="user.name"
              />
              <div v-for="user in users" v-bind:key="user.id">
                <p v-if="post.userId == user.id">
                  {{ user.username }}
                </p>
              </div>
            </div>  
            <div class="post">
              <p id="posttitle">{{ post.title }}</p>
              <p id="content">"{{ post.body }} "</p>
            </div>
          </div>
        </ul>
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
        " https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        this.posts = res.data;
      });
       axios
      .get(
        " https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        this.users = res.data;
        console.warn(res);
      });
      },
};
</script>

<style scoped>
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
  margin-left: 15%;
  width: 70%;
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
  /* background-color: rgb(237, 245, 248);  */
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  margin-left: 1%;
  width: 98%;
  margin-right: 1%;
  text-align: left;
}
.profilebody .box {
  height: 250px;
  width: 400px;
  border: 1px solid rgb(216, 214, 214);
  margin-top: 20px;
  margin-left: 20px;
  box-shadow: 5px 5px #e7e6e6;
  background-color: white;
  float: left;
  font-size: 25px;
}
.postheader {
  height: 30px;
  width: 400px;
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
</style>