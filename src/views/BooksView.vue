<template>
  <div class="books">
    <div class="books-nav">
      <p 
        v-for="(item, key) in BOOKS_LINKS"
        :key="key"
        :class="{ 'active': item.link === pdfSrc }"
        @click="onSelectBook(item)"
      >
        {{ item.name }}
      </p>
    </div>
    <div v-if="!isLoading" class="pdf-wrapper">
      <VuePdf v-for="page in numOfPages" :key="page" :src="pdfSrc" :page="page" :scale="1.5" />
    </div>
  </div>
  
</template>

<script lang="ts" setup>
import { PDFDocumentProxy } from 'pdfjs-dist/types/src/display/api';
import { onMounted, ref } from 'vue';
import { VuePdfPropsType } from 'vue3-pdfjs/components/vue-pdf/vue-pdf-props';
import { VuePdf, createLoadingTask } from 'vue3-pdfjs/esm';
import { BOOKS_LINKS } from '@/constants/booksLinks.const';
import { IPdf } from '@/models/books.model';

const pdfSrc = ref<VuePdfPropsType['src']>('Dorofeevskie.pdf');
const numOfPages = ref(0);
const isLoading = ref(false);

const onSelectBook = async (book: IPdf) => {
  isLoading.value = true;
  pdfSrc.value = book.link;
  const loadingTask = await createLoadingTask(pdfSrc.value)
  loadingTask.promise.then((pdf: PDFDocumentProxy) => {
    numOfPages.value = pdf.numPages
  })
  isLoading.value = false;
}

onMounted(() => {
  const loadingTask = createLoadingTask(pdfSrc.value)
  loadingTask.promise.then((pdf: PDFDocumentProxy) => {
    numOfPages.value = pdf.numPages
  })
})
</script>

<style lang="scss" scoped>
.books {
  display: flex;
  padding-top: 20px;

  &-nav {
    position: fixed;
    top: 70px;
    left: 20px;

    p {
      margin-bottom: 8px;
      cursor: pointer;
      padding: 8px;
      transition: .3s ease;

      &.active {
        background-color: #e06594;
        color: #fff;
        border-radius: 8px;
      }
    }
  }
}

.pdf-wrapper {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
}
</style>