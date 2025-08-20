<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  let form = {
    name: '',
    email: '',
    message: ''
  };

  function handleSubmit() {
    console.log('Sending message:', form);
    // Aquí podrías enviar el form a una API real

    dispatch('close'); // cerrar modal después de enviar
    form = { name: '', email: '', message: '' }; // limpiar
  }
</script>

<div class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
  <div class="bg-white rounded-lg p-6 w-full max-w-md">
    <h3 class="text-xl font-semibold mb-4">Contact Me</h3>
    <form on:submit|preventDefault={handleSubmit}>
      <div class="mb-4">
        <label for="name" class="block text-gray-700 text-sm font-bold mb-2">Name</label>
        <input
          bind:value={form.name}
          type="text"
          class="w-full p-2 border rounded"
          required
        />
      </div>
      <div class="mb-4">
        <label for="email" class="block text-gray-700 text-sm font-bold mb-2">Email</label>
        <input
          bind:value={form.email}
          type="email"
          class="w-full p-2 border rounded"
          required
        />
      </div>
      <div class="mb-4">
        <label for="message" class="block text-gray-700 text-sm font-bold mb-2">Message</label>
        <textarea
          bind:value={form.message}
          class="w-full p-2 border rounded"
          rows="4"
          required
        ></textarea>
      </div>
      <div class="flex justify-end">
        <button
          type="button"
          on:click={() => dispatch('close')}
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