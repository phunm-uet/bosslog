<template>
  <div v-if="loading">
      <div class="loader third-loader">
          <svg id="triangle" width="100px" height="100px" viewBox="-3 -4 39 39">
            <polygon stroke="#fff" stroke-width="1" points="16,0 32,32 0,32"></polygon>
          </svg>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Loader',
  props: ['loading']
}
</script>