<template>
  <v-list>
    <v-list-item class="d-flex d-sm-flex d-md-none">
      <v-list-item-content>
        <v-list-item-title>+62 21 756 090 2</v-list-item-title>
        <v-list-item-subtitle>Telepon</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-icon>
        <v-icon color="white" size="16">fa-phone</v-icon>
      </v-list-item-icon>
    </v-list-item>

    <v-list-item class="d-flex d-sm-flex d-md-none">
      <v-list-item-content>
        <v-list-item-title>+62 21 756 090 1</v-list-item-title>
        <v-list-item-subtitle>Faks</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-icon>
        <v-icon color="white" size="16">fa-fax</v-icon>
      </v-list-item-icon>
    </v-list-item>

    <v-list-item class="d-flex d-sm-flex d-md-none">
      <v-list-item-content>
        <v-list-item-title>sekr-bbta3@bppt.go.id</v-list-item-title>
        <v-list-item-subtitle>Email</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-icon>
        <v-icon color="white" size="16">fa-envelope</v-icon>
      </v-list-item-icon>
    </v-list-item>

    <v-divider class="d-flex d-sm-flex d-md-none"></v-divider>

    <v-list-group
      v-for="item of dataHeader"
      :key="item.slug"
      class="nomarginroot"
      :value="$route.path.includes(item.nama.toLowerCase().split(' ')[0])"
    >
      <template v-slot:activator>
        <v-list-item
          v-if="item.tautan && item.tautan.includes('http')"
          :href="item.tautan"
          target="_blank"
        >
          <v-list-item-title>
            {{ item.nama }}
          </v-list-item-title>
        </v-list-item>

        <v-list-item
          v-else-if="item.tautan && !item.tautan.includes('http')"
          :to="item.tautan"
          exact
        >
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
            v-if="sub.tautan && sub.tautan.includes('http')"
            :href="sub.tautan"
            target="_blank"
          >
            <v-list-item-title> {{ sub.nama }} </v-list-item-title>
          </v-list-item>

          <v-list-item
            v-else-if="sub.tautan && !sub.tautan.includes('http')"
            :to="sub.tautan + sub.slug"
            exact
          >
            <v-list-item-title> {{ sub.nama }} </v-list-item-title>
          </v-list-item>

          <v-list-item v-else>
            <v-list-item-title>{{ sub.nama }}</v-list-item-title>
          </v-list-item>
        </template>
        <template v-slot:prependIcon>
          <v-icon></v-icon>
        </template>

        <v-list-item
          v-for="itm in sub.subs"
          :key="itm.slug"
          link
          class="nomargin"
        >
          <v-list-item
            v-if="itm.tautan && itm.tautan.includes('http')"
            :href="itm.tautan"
            target="_blank"
          >
            <v-list-item-title>
              {{ itm.nama }}
            </v-list-item-title>
          </v-list-item>

          <v-list-item
            v-else-if="itm.tautan && !itm.tautan.includes('http')"
            :to="itm.tautan + itm.slug"
            exact
          >
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
  }
}
</script>
