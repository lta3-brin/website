<template>
  <v-list>
    <v-list-group
      v-for="item of dataHeader"
      :key="item.slug"
      class="nomarginroot"
      value="true"
    >
      <template v-slot:activator>
        <v-list-item v-if="'href' in item" :href="item.href" target="_blank">
          <v-list-item-title>
            {{ item.nama }}
          </v-list-item-title>
        </v-list-item>

        <v-list-item v-else-if="'to' in item" :to="item.to" exact>
          <v-list-item-title>
            {{ item.nama }}
          </v-list-item-title>
        </v-list-item>

        <v-list-item v-else>
          <v-list-item-title>{{ item.nama }}</v-list-item-title>
        </v-list-item>
      </template>
      <template v-slot:appendIcon>
        <v-icon v-if="item.subs.length > 0">fa-angle-down</v-icon>
        <v-icon v-else></v-icon>
      </template>

      <v-list-group
        v-for="sub of item.subs"
        :key="sub.slug"
        no-action
        sub-group
        value="true"
        class="nomargin"
      >
        <template v-slot:activator>
          <v-list-item
            v-if="'href' in sub"
            :href="sub.href + sub.slug"
            target="_blank"
          >
            <v-list-item-title> {{ sub.nama }} </v-list-item-title>
          </v-list-item>

          <v-list-item v-else-if="'to' in sub" :to="sub.to + sub.slug" exact>
            <v-list-item-title> {{ sub.nama }} </v-list-item-title>
          </v-list-item>

          <v-list-item v-else>
            <v-list-item-title>{{ sub.nama }}</v-list-item-title>
          </v-list-item>
        </template>
        <template v-slot:prependIcon>
          <v-icon v-if="sub.subs.length > 0" size="18">fa-caret-down</v-icon>
          <v-icon v-else></v-icon>
        </template>

        <v-list-item
          v-for="itm in sub.subs"
          :key="itm.slug"
          link
          class="nomargin"
        >
          <v-list-item
            v-if="'href' in itm"
            :href="itm.href + itm.slug"
            target="_blank"
          >
            <v-list-item-title>
              {{ itm.nama }}
            </v-list-item-title>
          </v-list-item>

          <v-list-item v-else-if="'to' in itm" :to="itm.to + itm.slug" exact>
            <v-list-item-title>
              {{ itm.nama }}
            </v-list-item-title>
          </v-list-item>

          <v-list-item v-else>
            <v-list-item-title>
              {{ itm.nama }}
            </v-list-item-title>
          </v-list-item>
        </v-list-item>
      </v-list-group>
    </v-list-group>
  </v-list>
</template>

<script>
export default {
  name: 'HeaderDrawer',
  props: {
    dataHeader: {
      type: Array,
      default: () => [],
      required: true
    }
  },
  data() {
    return {}
  },
  watch: {
    selectHeader: (val, oldVal) => {
      return val
    }
  }
}
</script>
