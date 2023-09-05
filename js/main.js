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

    formatDate() {
      let dataFormattata = "";
      // "10/01/2020 15:51:00"
      const data = new Date();
      let giorno = data.getDate();
      if (data.getDate() < 10) {
        giorno = "0" + giorno;
      }
      let mese = data.getMonth();
      if (data.getMonth() < 10) {
        mese = "0" + mese;
      }
      let anno = data.getFullYear();

      let ore = data.getHours();
      if (data.getHours() < 10) {
        ore = "0" + data.getHours();
      }
      let minuti = data.getMinutes();
      if (data.getMinutes() < 10) {
        minuti = "0" + data.getMinutes();
      }
      let secondi = data.getSeconds();
      if (data.getSeconds() < 10) {
        secondi = "0" + data.getSeconds();
      }

      dataFormattata =
        giorno +
        "/" +
        mese +
        "/" +
        anno +
        " " +
        ore +
        ":" +
        minuti +
        ":" +
        secondi;

      return dataFormattata;
    },

    mineMsg() {
      this.newMessage.date = this.formatDate();
      this.newMessage.status = "sent";
      const newToAdd = { ...this.newMessage };
      this.contacts[this.activeContact].messages.push(newToAdd);
      this.newMessage.message = "";
      this.newMessage.status = "";
    },
    otherMsg() {
      // "10/01/2020 15:51:00"

      this.newMessage.date = this.formatDate();
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
      this.contacts[this.activeContact].messages.splice(index, 1);
    },
    findLast(user) {
      let lunghezza = user.messages.length - 1;

      while (user.messages[lunghezza].status == "sent" && lunghezza > 0) {
        lunghezza = lunghezza - 1;
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
