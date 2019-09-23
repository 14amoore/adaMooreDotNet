Vue.component('blog-post', {
  template: `
  <div>
    <h3>
      {{ title }}
    </h3>
    <p>
      {{ content }}
      <button @click="$emit('armagedon')">
        Under Share
      </button>
    </p>
  </div>
`,
  props: ['title', 'content']
});

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment: state => state.count++,
    decrement: state => state.count--
  }
});

new Vue({
  el: '.post',
  computed: {
    count() {
      return store.state.count;
    }
  },
  data: {
    newPostContent: '',
    newPostTitle: '',
    posts: [],
    nextPostId: 1
  },
  methods: {
    newPost: function() {
      this.posts.push({
        id: this.nextPostId++,
        title: this.newPostTitle,
        content: this.newPostContent
      });
      this.newPostTitle = '';
      this.newPostContent = '';
    },
    increment() {
      store.commit('increment');
    },
    decrement: function() {
      store.commit('decrement');
    },
    remove: function(index) {
      this.posts.splice(index, 1);
    },
    delt: function(index) {
      this.$delete(this.posts, index);
    },
    handleButton: function(index) {
      this.remove(index);
      this.decrement();
    }
  }
});
