<script lang="ts">
import {
  defineComponent
} from 'vue'
import {useGetOpenId} from "@/utils/User";
export default defineComponent({
setup() {
  useGetOpenId()
}
})
</script>
<style>
    /*每个页面公共css */
    @import "wxcomponents/@vant/dist/common/index.wxss";
    page {
      background-color: whitesmoke;
      height: 100%;
    }
</style>
