<template>
  <div>
    <TheHeader/>
    <Users/>
    <Posts/>
  </div>
</template>

<script>

import TheHeader from "./TheHeader";
import Posts from "./Posts";
import Users from'./Users'
export default {
  name: "Home",
  components: { TheHeader, Posts, Users },
 };
</script>

