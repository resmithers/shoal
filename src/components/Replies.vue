<template>
  <div class="Comments">
    <ul>
      <li v-for="reply in replies" :key="reply.id">
        {{ reply.Body }}
        <br>
        {{moment(reply.Timestamp).format('LLL')}}
        <br>
        {{ reply.Author }}
      </li>
    </ul>
  </div>
</template>

<script>
import { listenComments } from "../utils/FirestoreListen";
import moment from "moment";

export default {
  props : {
      replies: Object
  }
};
</script>



<style scoped>
li {
  list-style: none;
  border: 1px solid black;
  width: 30%;
  padding: 5px;
}
</style>
