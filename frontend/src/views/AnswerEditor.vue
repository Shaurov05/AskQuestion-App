<template>

  <div class="container mt-2">
    <h1 class="mb-2"> Edit your Answer </h1>
    <form @submit.prevent="onSubmit">
      <textarea
            v-model="answerBody"
            rows="3"
            class="form-control"
      > </textarea>
      <br>
      <button
            type="submit"
            class="btn btn-success"
            >Publish your Answer
      </button>
    </form>

    <p v-if="error" class="muted mt-2" > {{ error }}</p>
  </div>
</template>


<script>
import { apiService } from "@/common/api.service.js"

export default {
  name: "AnswerEditor",
  props: {
    id: {
      type: Number,
      required: true,
    },
    previousAnswer: {
      type: String,
      required: true,
    },
    questionSlug: {
      type: String,
      required: true,
    }
  },

  data (){
    return {
      answerBody: this.previousAnswer,
      error: null,
    }
  },

  methods: {
    onSubmit () {
      if(this.answerBody){
        let endpoint = `/api/answers/${this.id}/`;
        apiService(endpoint, "PUT", { body: this.answerBody })
            .then(() => {
              this.$router.push({
                name: "question",
                params: { slug: this.questionSlug }
              })
            })
      } else {
        this.error = "You can't submit an empty answer!";
      }
    }
  },

  async beforeRouteEnter (to, from, next){
    let endpoint = `/api/answers/${to.params.id}/`;
    let data = await apiService(endpoint);
    to.params.previousAnswer = data.body;
    to.params.questionSlug = data.question_slug;
    return next()
  }
  // async beforeRouteEnter (to, from, next){
  //   let endpoint = `/api/answers/${to.params.id}/`;
  //   let data = await apiService(endpoint);
  //   return next(vm=>{
  //     vm.answerBody = data.body,
  //     vm.questionSlug = data.question_slug
  //   })
  // }

}

</script>
