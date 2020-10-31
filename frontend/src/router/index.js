import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Question from "../views/Question.vue";
import QuestionEditor from "../views/QuestionEditor.vue";
import AnswerEditor from "../views/AnswerEditor.vue";
import NotFound from "../views/NotFound.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    // with props: true, the slug parameter gets
    // passed as a prop to the component
    path: "/question/:slug",
    name: "question",
    component: Question,
    props : true
  },
  {
    // the ? sign makes the slug parameter optional. It means
    // we might send slug and if passed, the value will be passed
    // as a parameter.
    path: "/ask/:slug?",
    name: "question-editor",
    component: QuestionEditor,
    props: true,
  },
  {
    path: "/answer/:id",
    name: "answer-editor",
    component: AnswerEditor,
    props : true
  },
  {
    path:"*",
    name: "page-not-found",
    component: NotFound,
  },

];

const router = new VueRouter({
  mode: "history",
  // base: process.env.BASE_URL,
  routes
});

export default router;
