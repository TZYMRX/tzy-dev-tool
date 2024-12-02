<!--<script setup lang="ts">-->
<!--import { nextTick, onMounted, reactive, ref } from 'vue'-->

<!--const uiFrameworks: { name: string, url: string, icon?: string, iconurl?: string }[] = [-->
<!--  { name: 'Element', url: 'https://element-plus.org/zh-CN/', icon: 'i-logos-element' },-->
<!--  { name: 'Ant Design', url: 'https://ant.design/', icon: 'i-logos-ant-design' },-->
<!--  { name: 'Arco Design', url: 'https://arco.design/react/docs/install', icon: 'i-logos-element' },-->
<!--  { name: 'Vuetify', url: 'https://vuetifyjs.com/zh-Hans/', icon: 'i-logos-vuetifyjs' },-->
<!--  { name: 'MUI', url: 'https://mui.com/', icon: 'i-logos-material-ui' },-->
<!--  { name: 'Tailwind CSS', url: 'https://tailwindcss.com/docs', icon: 'i-logos-tailwindcss-icon' },-->
<!--  { name: 'Chakra UI', url: 'https://chakra-ui.com/docs/getting-started', icon: 'i-logos-element' },-->
<!--  { name: 'Headless UI', url: 'https://headlessui.com/docs', icon: 'i-logos-headlessui-icon' },-->
<!--  { name: 'Windi CSS', url: 'https://windicss.org/guide/installation.html', icon: 'i-logos-windi-css' },-->
<!--  { name: 'Bulma', url: 'https://bulma.io/', icon: 'i-logos-bulma' },-->
<!--  { name: 'Ionic', url: 'https://ionicframework.com/', icon: 'i-logos-ionic-icon' },-->
<!--  { name: 'Chakra UI', url: 'https://chakra-ui.com/', iconurl: 'https://www.chakra-ui.com/favicon.ico' },-->
<!--  { name: 'GreenSock', url: 'https://greensock.com/', icon: 'i-logos-greensock-icon' },-->
<!--  { name: 'Naive UI', url: 'https://www.naiveui.com/', icon: 'i-logos-naiveui' },-->
<!--  {-->
<!--    name: 'Semi Design',-->
<!--    url: 'https://semi.design/',-->
<!--    iconurl: 'https://lf9-static.semi.design/obj/semi-tos/images/favicon.ico'-->
<!--  },-->
<!--  {-->
<!--    name: 'Arco Design',-->
<!--    url: 'https://arco.design/',-->
<!--    iconurl: 'https://unpkg.byted-static.com/latest/byted/arco-config/assets/favicon.ico'-->
<!--  },-->
<!--  { name: 'TDesign', url: 'https://tdesign.tencent.com/', iconurl: 'https://tdesign.tencent.com/favicon.ico' },-->
<!--  {-->
<!--    name: 'Vue DevUI',-->
<!--    url: 'https://vue-devui.github.io/quick-start/',-->
<!--    iconurl: 'https://vue-devui.github.io/assets/logo.svg'-->
<!--  },-->
<!--  { name: 'Flowbite', url: 'https://flowbite.com/', iconurl: 'https://flowbite.com/docs/favicon-16x16.png' },-->
<!--  {-->
<!--    name: 'NutUI',-->
<!--    url: 'https://nutui.jd.com/#/',-->
<!--    iconurl: 'https://img14.360buyimg.com/imagetools/jfs/t1/167902/2/8762/791358/603742d7E9b4275e3/e09d8f9a8bf4c0ef.png'-->
<!--  },-->
<!--  {-->
<!--    name: 'Auto Animate',-->
<!--    url: 'https://auto-animate.formkit.com/',-->
<!--    iconurl: 'https://auto-animate.formkit.com/assets/favicon-BstHBk68.ico'-->
<!--  },-->
<!--  { name: 'DaisyUI', url: 'https://daisyui.com/docs/install/', icon: 'i-logos-daisyui-icon' },-->
<!--  { name: 'Inkline', url: 'https://www.inkline.io/', iconurl: `https://www.inkline.io/_nuxt/logo-black.bf19a930.svg` },-->
<!--  { name: 'UnoCSS', url: 'https://uno.antfu.me/', icon: 'i-logos-unocss' },-->
<!--  {-->
<!--    name: 'NativeBase',-->
<!--    url: 'https://docs.nativebase.io/',-->
<!--    iconurl: 'https://docs.nativebase.io/img/nativebaselogo.svg'-->
<!--  },-->
<!--  { name: 'PrimeVue', url: 'https://primevue.org/', iconurl: 'https://primevue.org/favicon.ico' },-->
<!--  {-->
<!--    name: 'Choerodon UI',-->
<!--    url: 'https://open.hand-china.com/choerodon-ui/zh/tutorials/introduction',-->
<!--    iconurl: 'https://open.hand-china.com/choerodon-ui/favicon-32x32.png?v=8eca361c72a0aede65a4319bb48db966'-->
<!--  },-->
<!--  { name: 'Shadcn UI', url: 'https://ui.shadcn.com/', iconurl: 'https://ui.shadcn.com/favicon.ico' },-->
<!--  {-->
<!--    name: 'Radix UI Themes',-->
<!--    url: 'https://www.radix-ui.com/themes/docs/overview/getting-started',-->
<!--    iconurl: 'https://www.radix-ui.com/favicon.png'-->
<!--  },-->
<!--  {-->
<!--    name: 'Quasar Framework',-->
<!--    url: 'https://quasar.dev/',-->
<!--    iconurl: 'https://cdn.quasar.dev/logo-v2/favicon/favicon.ico'-->
<!--  },-->
<!--  {-->
<!--    name: 'VueSax',-->
<!--    url: 'https://vuesax.com/',-->
<!--    iconurl: 'https://vuesax.com/logos/logo-vuesax-logotipo-vuesax-png-8.png'-->
<!--  },-->
<!--  {-->
<!--    name: 'OpenTiny Design',-->
<!--    url: 'https://opentiny.design/',-->
<!--    iconurl: 'https://res.hc-cdn.com/tiny-vue-web-doc/3.19.1.20241130174837/favicon.ico'-->
<!--  },-->
<!--  { name: 'Kuma UI', url: 'https://www.kuma-ui.com/', iconurl: 'https://www.kuma-ui.com/favicon.svg' },-->
<!--  { name: 'Scrollbar App', url: 'https://scrollbar.app/', iconurl: 'https://scrollbar.app/favicon.ico' },-->
<!--  { name: 'Mamba UI', url: 'https://mambaui.com/', iconurl: 'https://mambaui.com/favicon.ico' },-->
<!--  { name: 'Float UI', url: 'https://floatui.com/', iconurl: 'https://floatui.com/favicon.ico' },-->
<!--  { name: 'Park UI', url: 'https://park-ui.com/', iconurl: 'https://park-ui.com/favicon.ico' },-->
<!--  { name: 'Aceternity UI', url: 'https://ui.aceternity.com/', iconurl: 'https://ui.aceternity.com/favicon.ico' },-->
<!--  {-->
<!--    name: 'React Spectrum Aria',-->
<!--    url: 'https://react-spectrum.adobe.com/react-aria/components.html',-->
<!--    iconurl: 'https://react-spectrum.adobe.com/favicon.ico'-->
<!--  },-->
<!--  { name: 'Magic UI', url: 'https://magicui.design/', iconurl: 'https://magicui.design/favicon.ico' },-->
<!--  {-->
<!--    name: 'Vue Amazing UI',-->
<!--    url: 'https://themusecatcher.github.io/vue-amazing-ui/',-->
<!--    iconurl: 'https://cn.vitejs.dev/viteconf.svg'-->
<!--  },-->
<!--  { name: 'Origin UI', url: 'https://originui.com/', iconurl: 'https://originui.com/favicon.ico' }-->
<!--]-->

<!--const isLoading = ref(true)-->

<!--function onImageLoad() {-->
<!--  isLoading.value = false-->
<!--}-->

<!--function onImageError() {-->
<!--  isLoading.value = false-->
<!--}-->

<!--onMounted(() => {-->
<!--  uiFrameworks.forEach(framework => {-->
<!--    if (framework.iconurl) {-->
<!--      const img = new Image()-->
<!--      img.src = framework.iconurl-->
<!--      img.onload = onImageLoad-->
<!--      img.onerror = onImageError-->
<!--    }-->
<!--  })-->
<!--})-->
<!--</script>-->

<!--<template>-->
<!--  <div class="font-black grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">-->
<!--    <template v-for="framework in uiFrameworks" :key="framework.name">-->
<!--      <a-->
<!--        class="flex justify-items-start items-center decoration-none! p-6 rounded-lg p-4 mb-4 w-full shadow-sm hover:shadow-md transition-transform! hover:-translate-y-1"-->
<!--        :href="framework.url"-->
<!--        target="_blank"-->
<!--        rel="noreferrer"-->
<!--      >-->
<!--        <div class="flex items-center">-->
<!--          <i v-if="framework.icon" :class="framework.icon" class="mr-2 text-lg" />-->
<!--          &lt;!&ndash; <img v-if="framework.iconurl" :src="framework.iconurl" class="h5 w5 mr-2" alt="logo" />&ndash;&gt;-->
<!--          <template v-if="framework.iconurl">-->
<!--            <img-->
<!--              v-if="!isLoading"-->
<!--              :src="framework.iconurl"-->
<!--              class="h5 w5 mr-2"-->
<!--              alt="logo"-->
<!--              @load="onImageLoad"-->
<!--              @error="onImageError"-->
<!--            />-->
<!--            <div v-else class="h5 w5 rounded-md mr-2 bg-gray-400 animate-pulse" />-->
<!--          </template>-->
<!--          <h5 class="text-sm font-bold">{{ framework.name }}</h5>-->
<!--        </div>-->
<!--      </a>-->
<!--    </template>-->
<!--  </div>-->
<!--</template>-->

<!--<style scoped>-->

<!--</style>-->
<script setup lang="ts">
import { onMounted, reactive } from 'vue'

const uiFrameworks = reactive<{ name: string, url: string, icon?: string, iconurl?: string, isLoading: boolean }[]>([
  { name: 'Element', url: 'https://element-plus.org/zh-CN/', icon: 'i-logos-element', isLoading: true },
  { name: 'Ant Design', url: 'https://ant.design/', icon: 'i-logos-ant-design', isLoading: true },
  { name: 'Arco Design', url: 'https://arco.design/react/docs/install', icon: 'i-logos-element', isLoading: true },
  { name: 'Vuetify', url: 'https://vuetifyjs.com/zh-Hans/', icon: 'i-logos-vuetifyjs', isLoading: true },
  { name: 'MUI', url: 'https://mui.com/', icon: 'i-logos-material-ui', isLoading: true },
  { name: 'Tailwind CSS', url: 'https://tailwindcss.com/docs', icon: 'i-logos-tailwindcss-icon', isLoading: true },
  { name: 'Chakra UI', url: 'https://chakra-ui.com/docs/getting-started', icon: 'i-logos-element', isLoading: true },
  { name: 'Headless UI', url: 'https://headlessui.com/docs', icon: 'i-logos-headlessui-icon', isLoading: true },
  {
    name: 'Windi CSS',
    url: 'https://windicss.org/guide/installation.html',
    icon: 'i-logos-windi-css',
    isLoading: true
  },
  { name: 'Bulma', url: 'https://bulma.io/', icon: 'i-logos-bulma', isLoading: true },
  { name: 'Ionic', url: 'https://ionicframework.com/', icon: 'i-logos-ionic-icon', isLoading: true },
  {
    name: 'Chakra UI',
    url: 'https://chakra-ui.com/',
    iconurl: 'https://www.chakra-ui.com/favicon.ico',
    isLoading: true
  },
  { name: 'GreenSock', url: 'https://greensock.com/', icon: 'i-logos-greensock-icon', isLoading: true },
  { name: 'Naive UI', url: 'https://www.naiveui.com/', icon: 'i-logos-naiveui', isLoading: true },
  {
    name: 'Semi Design',
    url: 'https://semi.design/',
    iconurl: 'https://lf9-static.semi.design/obj/semi-tos/images/favicon.ico',
    isLoading: true
  },
  {
    name: 'Arco Design',
    url: 'https://arco.design/',
    iconurl: 'https://unpkg.byted-static.com/latest/byted/arco-config/assets/favicon.ico',
    isLoading: true
  },
  {
    name: 'TDesign',
    url: 'https://tdesign.tencent.com/',
    iconurl: 'https://tdesign.tencent.com/favicon.ico',
    isLoading: true
  },
  {
    name: 'Vue DevUI',
    url: 'https://vue-devui.github.io/quick-start/',
    iconurl: 'https://vue-devui.github.io/assets/logo.svg',
    isLoading: true
  },
  {
    name: 'Flowbite',
    url: 'https://flowbite.com/',
    iconurl: 'https://flowbite.com/docs/favicon-16x16.png',
    isLoading: true
  },
  {
    name: 'NutUI',
    url: 'https://nutui.jd.com/#/',
    iconurl: 'https://img14.360buyimg.com/imagetools/jfs/t1/167902/2/8762/791358/603742d7E9b4275e3/e09d8f9a8bf4c0ef.png',
    isLoading: true
  },
  {
    name: 'Auto Animate',
    url: 'https://auto-animate.formkit.com/',
    iconurl: 'https://auto-animate.formkit.com/assets/favicon-BstHBk68.ico',
    isLoading: true
  },
  { name: 'DaisyUI', url: 'https://daisyui.com/docs/install/', icon: 'i-logos-daisyui-icon', isLoading: true },
  {
    name: 'Inkline',
    url: 'https://www.inkline.io/',
    iconurl: `https://www.inkline.io/_nuxt/logo-black.bf19a930.svg`,
    isLoading: true
  },
  { name: 'UnoCSS', url: 'https://uno.antfu.me/', icon: 'i-logos-unocss', isLoading: true },
  {
    name: 'NativeBase',
    url: 'https://docs.nativebase.io/',
    iconurl: 'https://docs.nativebase.io/img/nativebaselogo.svg',
    isLoading: true
  },
  { name: 'PrimeVue', url: 'https://primevue.org/', iconurl: 'https://primevue.org/favicon.ico', isLoading: true },
  {
    name: 'Choerodon UI',
    url: 'https://open.hand-china.com/choerodon-ui/zh/tutorials/introduction',
    iconurl: 'https://open.hand-china.com/choerodon-ui/favicon-32x32.png?v=8eca361c72a0aede65a4319bb48db966',
    isLoading: true
  },
  { name: 'Shadcn UI', url: 'https://ui.shadcn.com/', iconurl: 'https://ui.shadcn.com/favicon.ico', isLoading: true },
  {
    name: 'Radix UI Themes',
    url: 'https://www.radix-ui.com/themes/docs/overview/getting-started',
    iconurl: 'https://www.radix-ui.com/favicon.png',
    isLoading: true
  },
  {
    name: 'Quasar Framework',
    url: 'https://quasar.dev/',
    iconurl: 'https://cdn.quasar.dev/logo-v2/favicon/favicon.ico',
    isLoading: true
  },
  {
    name: 'VueSax',
    url: 'https://vuesax.com/',
    iconurl: 'https://vuesax.com/logos/logo-vuesax-logotipo-vuesax-png-8.png',
    isLoading: true
  },
  {
    name: 'OpenTiny Design',
    url: 'https://opentiny.design/',
    iconurl: 'https://res.hc-cdn.com/tiny-vue-web-doc/3.19.1.20241130174837/favicon.ico',
    isLoading: true
  },
  { name: 'Kuma UI', url: 'https://www.kuma-ui.com/', iconurl: 'https://www.kuma-ui.com/favicon.svg', isLoading: true },
  {
    name: 'Scrollbar App',
    url: 'https://scrollbar.app/',
    iconurl: 'https://scrollbar.app/favicon.ico',
    isLoading: true
  },
  { name: 'Mamba UI', url: 'https://mambaui.com/', iconurl: 'https://mambaui.com/favicon.ico', isLoading: true },
  { name: 'Float UI', url: 'https://floatui.com/', iconurl: 'https://floatui.com/favicon.ico', isLoading: true },
  { name: 'Park UI', url: 'https://park-ui.com/', iconurl: 'https://park-ui.com/favicon.ico', isLoading: true },
  {
    name: 'Aceternity UI',
    url: 'https://ui.aceternity.com/',
    iconurl: 'https://ui.aceternity.com/favicon.ico',
    isLoading: true
  },
  {
    name: 'React Spectrum Aria',
    url: 'https://react-spectrum.adobe.com/react-aria/components.html',
    iconurl: 'https://react-spectrum.adobe.com/favicon.ico',
    isLoading: true
  },
  { name: 'Magic UI', url: 'https://magicui.design/', iconurl: 'https://magicui.design/favicon.ico', isLoading: true },
  {
    name: 'Vue Amazing UI',
    url: 'https://themusecatcher.github.io/vue-amazing-ui/',
    iconurl: 'https://cn.vitejs.dev/viteconf.svg',
    isLoading: true
  },
  { name: 'Origin UI', url: 'https://originui.com/', iconurl: 'https://originui.com/favicon.ico', isLoading: true }
])

function onImageLoad(framework: typeof uiFrameworks[number]) {
  framework.isLoading = false
}

function onImageError(framework: typeof uiFrameworks[number]) {
  framework.isLoading = false
}

onMounted(() => {
  uiFrameworks.forEach(framework => {
    if (framework.iconurl) {
      const img = new Image()
      img.src = framework.iconurl
      img.onload = () => onImageLoad(framework)
      img.onerror = () => onImageError(framework)
    }
  })
})
</script>

<template>
  <div class="font-black grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <template v-for="framework in uiFrameworks" :key="framework.name">
      <a
        class="flex justify-items-start items-center decoration-none! p-6 rounded-lg mb4 w-full shadow-sm hover:shadow-md transition-transform! hover:-translate-y-1"
        :href="framework.url"
        target="_blank"
        rel="noreferrer"
      >
        <div class="flex items-center">
          <i v-if="framework.icon" :class="framework.icon" class="mr-2 text-lg" />
          <template v-if="framework.iconurl">
            <img
              v-if="!framework.isLoading"
              :src="framework.iconurl"
              class="h5 w5 mr-2"
              alt="logo"
              @load="onImageLoad(framework)"
              @error="onImageError(framework)"
            />
            <div v-else class="h5 w5 rounded-md mr-2 bg-gray-400 animate-pulse" />
          </template>
          <h5 class="text-sm font-bold">{{ framework.name }}</h5>
        </div>
      </a>
    </template>
  </div>
</template>

<style scoped>

</style>
