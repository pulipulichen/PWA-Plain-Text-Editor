<template>
  <textarea 
        v-model="$parent.config.textContent"
        v-on:change="$parent.clearHistory"
        class="editor"
        ></textarea>
</template>

<script>module.exports = {}</script>
