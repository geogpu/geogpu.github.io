// <template>
//   <div class="home">
//     {{ ENV_TEST }}
//     <img alt="Vue logo" src="../assets/logo.png" />
//     <HelloWorld :msg="test" />
//   </div>
// </template>

// <script>
// // @ is an alias to /src
// import { ref, reactive ,onMounted} from 'vue'
// import HelloWorld from "../../src/components/HelloWorld.vue";

// // export default {
// //   name: 'home',
// //   components: {
// //     HelloWorld
// //   },
// //   data () {
// //     return {
// //       ENV_TEST: ''
// //     }
// //   },
// //   mounted () {
// //     // this.ENV_TEST = process.env.VUE_APP_ENV_TEST
// //     this.ENV_TEST = process.env.NODE_ENV
// //   }
// // }

// export default {
//   components: { HelloWorld },
//   props: {
//     // ENV_TEST: { type: String }
//   },
//   setup(props) {
//     let ENV_TEST =ref();
//     let test =ref('动态父组件');
//     const getUserRepositories = async () => {
//       // ENV_TEST.value = process.env.NODE_ENV;
//       ENV_TEST.value = process.env.NODE_ENV;
//     };

//     onMounted(getUserRepositories);

//     return {
//       test,
//       ENV_TEST,
//       getUserRepositories,
//     };
//   },
// };
// </script>
