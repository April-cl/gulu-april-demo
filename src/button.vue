<template>
  <button class="m-button" :class="{[`icon-${iconPosition}`]:true}" @click="$emit('click')">
    <m-icon class="icon" v-if="icon && !loading" :name="icon"></m-icon>
    <m-icon class="icon loading" v-if="loading" name="loading" :loading="loading"></m-icon>
    <div class="m-button-content">
      <slot></slot>
    </div>
  </button>
</template>
<script>
import Icon from './icon.vue'
export default {
  name: 'MochaUIButton',
  components: {
    'm-icon': Icon
  },
  props:{
    'icon': {},
    'loading': {
      type:Boolean,
      default: false
    },
    'iconPosition': {
      type: String,
      default: 'left',
      validator(value){
        return value === 'left' || value === 'right'
      }
    }
  }
}
</script>
<style lang="scss" scoped>
$font-size: 14px;
$button-height: 32px;
$button-bg: white;
$button-active-bg: #eee;
$border-radius: 4px;
$color: #333;
$border-color: #999;
$border-color-hover: #666;
.m-button {
  font-size: $font-size;
  height: $button-height;
  padding: 0 1em;
  margin: 1em 0;
  border-radius: $border-radius;
  border: 1px solid $border-color;
  background: $button-bg;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: top;
  cursor: pointer;
  &:hover {
    border-color: $border-color-hover;
  }
  &:active {
    background-color: $button-active-bg;
  }
  &:focus {
    outline: none;
  }
  > .m-button-content {
    order: 2;
  }
  > .icon {
    order: 1;
    margin-right: 0.5em;
  }
  > .loading {
    animation: spin 1s infinite linear;
  }

  &.icon-right {
    > .m-button-content {
      order: 1;
    }
    > .icon {
      order: 2;
      margin-left: 0.5em;
    }
  }
}
@keyframes spin {
  0%{
    transform: rotate(0deg);
  }
  100%{
    transform: rotate(360deg)
  }
}
</style>
