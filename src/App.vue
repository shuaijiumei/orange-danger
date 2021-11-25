<script lang="ts">
import {
  defineComponent
} from 'vue'
import {userLogin} from "@/utils/User";
export default defineComponent({
setup() {
  userLogin()
}
})
</script>
<style>
    /*每个页面公共css */
    @import "wxcomponents/@vant/dist/common/index.wxss";
</style>
