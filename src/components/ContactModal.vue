<template>
  <div
    class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
  >
    <div class="bg-white rounded-lg p-6 w-full max-w-md">
      <h3 class="text-xl font-semibold mb-4">Contact Me</h3>
      <form @submit.prevent="handleSubmit">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2">Name</label>
          <input
            v-model="form.name"
            type="text"
            class="w-full p-2 border rounded"
            required
          />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2"
            >Email</label
          >
          <input
            v-model="form.email"
            type="email"
            class="w-full p-2 border rounded"
            required
          />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2"
            >Message</label
          >
          <textarea
            v-model="form.message"
            class="w-full p-2 border rounded"
            rows="4"
            required
          ></textarea>
        </div>
        <div class="flex justify-end">
          <button
            type="button"
            @click="$emit('close')"
            class="mr-2 text-gray-500"
          >
            Cancel
          </button>
          <button
            type="submit"
            class="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
  
  <script>
export default {
  name: 'ContactModal',
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: '',
      },
    }
  },
  methods: {
    handleSubmit() {
      console.log('Sending message:', this.form)
      // Aquí podrías enviar el form a una API real

      this.$emit('close') // cerrar modal después de enviar
      this.form = { name: '', email: '', message: '' } // limpiar
    },
  },
}
</script>
  