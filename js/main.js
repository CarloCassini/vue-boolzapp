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
      if (this.optionMenu.indexDisplay == index) {
        this.optionMenu.show = false;
        this.optionMenu.indexDisplay = -1;
      } else {
        this.optionMenu.show = true;
        this.optionMenu.indexDisplay = index;
      }
    },

    clearOptionMessage() {
      this.optionMenu.show = true;
      this.optionMenu.indexDisplay = -1;
    },

    deleteMessage(index) {
      console.log(this.contacts[this.activeContact].messages[index]);
      this.contacts[this.activeContact].messages.splice(index, 1);
    },
    findLast(user) {
      let lunghezza = user.messages.length - 1;
      console.log(user.messages);
      while (user.messages[lunghezza].status == "sent" && lunghezza > 0) {
        lunghezza = lunghezza - 1;
        console.log(lunghezza);
      }

      if (lunghezza < 0) {
        lunghezza = 0;
      }
      return lunghezza;
      // user.messages.length()
    },
    // inserire i metodi qui
  },

  created() {
    // inserire istruzioni all'avvio qui
  },
}).mount("#app");
