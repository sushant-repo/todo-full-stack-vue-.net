<template>
  <v-color-picker v-model="color" mode="hsla" hideInputs></v-color-picker>

  <v-card class="mt-4">
    <v-card-text class="d-flex">
      <div
        v-for="color in colorPalettes"
        :key="color"
        class="color-block mr-2 text-center d-flex flex-column justify-space-between flex-fill"
        :class="`bg-${color.title}`"
      >
        <div>{{ color.title }}</div>
        <div class="font-weight-bold">
          {{ theme.themes.value.newTheme.colors[color.title].toUpperCase() }}
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { computed, ref, watch } from "vue";
import { useTheme } from "vuetify";
import colorConverter from "@/utils/colour";

const theme = useTheme();

const color = ref({
  h: 150,
  s: 50,
  l: 50,
  a: 0,
});

const hue = computed(() => {
  return color.value.h;
});

const complementaryHue = computed(() => {
  return hue.value + 180;
});

const rightAnalogous = computed(() => {
  return hue.value + 30;
});

const leftAnalogous = computed(() => {
  return hue.value - 30;
});

const colorPalettes = [
  { title: "primary", saturation: 25, lightness: 95 },
  { title: "primaryDark", saturation: 20, lightness: 85 },
  { title: "primaryDarker", saturation: 20, lightness: 75 },
  { title: "secondary", saturation: 5, lightness: 30 },
  { title: "secondaryLight", saturation: 5, lightness: 95 },
  { title: "secondaryDark", saturation: 5, lightness: 25 },
  { title: "secondaryDarker", saturation: 5, lightness: 20 },
  { title: "accent", saturation: 40, lightness: 40 },
  { title: "accentLight", saturation: 40, lightness: 95 },
  { title: "accentV1", saturation: 40, lightness: 40 },
  { title: "accentV1Light", saturation: 40, lightness: 90 },
];

watch(color, () => {
  for (var item of colorPalettes) {
    let innerHue;
    if (item.title.includes("primary")) {
      innerHue = hue.value;
    } else if (item.title.includes("secondary")) {
      innerHue = complementaryHue.value;
    } else if (item.title.includes("accentV1")) {
      innerHue = leftAnalogous.value;
    } else {
      innerHue = rightAnalogous.value;
    }
    var hexColor = colorConverter.HSLToHex({
      h: innerHue,
      s: item.saturation,
      l: item.lightness,
    });

    console.log(hexColor);
    theme.themes.value.newTheme.colors[item.title] = hexColor;
  }
});
</script>

<style lang="scss">
.color-block {
  height: 70px;
  width: 90px;
  border: 1px solid lightgrey;
  border-radius: 5px;
}
</style>
