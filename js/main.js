console.log("e andiamo");

const { createApp } = Vue;

createApp({
  data() {
    return {
      contacts: dataDoc,

      activeContact: 0,

      srcName: "",

      newMessage: {
        date: new Date(),
        message: "",
        status: "",
      },
    };
  },

  methods: {
    selectUser(index) {
      this.activeContact = index;
    },

    answerMsg() {
      this.mineMsg();
      setTimeout(this.otherMsg, 1000);
    },

    mineMsg() {
      this.newMessage.date = new Date();
      this.newMessage.status = "sent";
      const newToAdd = { ...this.newMessage };
      this.contacts[this.activeContact].messages.push(newToAdd);
      this.newMessage.message = "";
      this.newMessage.status = "";
    },
    otherMsg() {
      console.log("asdasd");
      this.newMessage.date = new Date();
      this.newMessage.message = "ok";
      this.newMessage.status = "received";
      const newToAdd = { ...this.newMessage };
      this.contacts[this.activeContact].messages.push(newToAdd);
      this.newMessage.message = "";
      this.newMessage.status = "";
    },
    // inserire i metodi qui
  },

  created() {
    // inserire istruzioni all'avvio qui
  },
}).mount("#app");
