
# Vue 测试


<script setup>
import { ref } from 'vue'

const count = ref(0)
let textValue= ref('This is a text input')
function clickMe () {
    alert(textValue.value)
}
</script>

## Markdown Content

The count is: {{ count }}

<button :class="$style.button" style='border:1px solid yellow' @click="count++">Increment</button>
<br>

<el-input v-model="textValue"/>
<el-button type="primary" @click='clickMe'>按钮</el-button>


<style module>
.button {
  color: red;
  font-weight: bold;
}
</style>