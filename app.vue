
<script lang="ts" setup>
import * as Bookmarks from '~/srvr/src/bookmark';

const newBookmark = ref("");

const { pending, data: bookmarks } = useAsyncData(async () => $fetch("/api/bookmarks"));
const addBookmark = async()=> {
  if (bookmarks.value == null) return;
  if (newBookmark.value == "") return;

  const bookmark = await $fetch('/api/bookmarks/create',{
  method: 'post',
  body: {
    url: newBookmark.value,
  }
});
console.log({ bookmark });

bookmarks.value.push(bookmark);
}


</script>

<template>
  <main>
    <from @submit.prevent>
      <label for = "url">Add Bookmarks</label>
      <input v-model= "newBookmark"  type="url" name="url" id="url" required />
      <button @click="addBookmark">Add</button>
    </from>

    <div v-if="pending">Chill Man, It's Loading..</div>

    <div v-else-if="bookmarks && bookmarks.length > 0"></div>
    <div>v-else> Well mate, looks like you have no bookmarks, yet..</div>
    <ul>
      <li v-for="bookmark in bookmarks" :key="bookmark.id">
         <a :href="bookmark.url" target="'_blank" rel="noopener noreferer">
          <img: src="bookmark.icon.url"/>
          {{ bookmark.url }}
         </a>
      </li>
    </ul>
  </main>
</template>

