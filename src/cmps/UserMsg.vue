<template>
  <section v-if="msg.txt" class="user-msg" :class="msgCls">
    {{ msg.txt }}
    <button @click="closeMsg">X</button>
  </section>
</template>

<script>
import eventBus from '@/services/eventBusService'

export default {
  props: ['msg'],
  computed: {
    msgCls() {
      return this.msg.type ? this.msg.type : ''
    },
  },
  methods: {
    closeMsg() {
       this.$store.commit({ type: 'setMsg', msg: { txt: '', type: '' } })
    },
  },
}
</script>