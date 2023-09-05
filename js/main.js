console.log("e andiamo");
const DateTime = luxon.DateTime;
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

      optionMenu: {
        show: false,
        indexDisplay: -1,
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
      this.newMessage.date = new Date();
      this.newMessage.message = "ok";
      this.newMessage.status = "received";
      const newToAdd = { ...this.newMessage };
      this.contacts[this.activeContact].messages.push(newToAdd);
      this.newMessage.message = "";
      this.newMessage.status = "";
    },

    optionMessage(index) {
      console.log(this.optionMenu.show);
      console.log(index);
      this.optionMenu.show = true;
      this.optionMenu.indexDisplay = index;
      console.log(this.optionMenu.show);
    },

    deleteMessage() {},
    // inserire i metodi qui
  },

  created() {
    // inserire istruzioni all'avvio qui
  },
}).mount("#app");
