console.log("e andiamo");

const { createApp } = Vue;

createApp({
  data() {
    return {
      contacts: dataDoc,
      activeContact: 0,
    };
  },

  methods: {
    selectUser(index) {
      this.activeContact = index;
    },
    // inserire i metodi qui
  },

  created() {
    // inserire istruzioni all'avvio qui
  },
}).mount("#app");
