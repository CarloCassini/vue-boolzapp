console.log("e andiamo");

const { createApp } = Vue;

createApp({
  data() {
    return {
      contacts: dataDoc,
      activeContact: 0,

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

    answerMsg(index) {
      this.mineMsg(index);
      this.timeout = setTimeout(this.otherMsg(index), 2000);
    },

    mineMsg(index) {
      this.newMessage.date = new Date();
      this.newMessage.status = "sent";
      const newToAdd = { ...this.newMessage };
      this.contacts[index].messages.push(newToAdd);
      this.newMessage.message = "";
      this.newMessage.status = "";
    },
    otherMsg(index) {
      console.log("asdasd");
      this.newMessage.date = new Date();
      this.newMessage.message = "ok";
      this.newMessage.status = "received";
      const newToAdd = { ...this.newMessage };
      this.contacts[index].messages.push(newToAdd);
      this.newMessage.message = "";
      this.newMessage.status = "";
    },
    // inserire i metodi qui
  },

  created() {
    // inserire istruzioni all'avvio qui
  },
}).mount("#app");
