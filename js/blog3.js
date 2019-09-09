Vue.component('blog-post', {
  template:
    '\
  <p>\
    {{ title }}\
    {{ content }}\
    <button v-on:click="$emit(\'remove\')">Remove Feels</button>\
  </p>\
',
  props: ['title', 'content']
});

Vue.component('post-title', {
  template: '\
  <h3>\
  {{ title }}\
  </h3>\
  ',
  props: ['title']
});

Vue.component('post-content', {
  template:
    '\
  <p>\
  {{ content }}\
  <button v-on:click="$emit(\'remove\')">Remove Feels</button>\
  </p>\
  ',
  props: ['content']
});

new Vue({
  el: '.post',
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
    }
  }
});
