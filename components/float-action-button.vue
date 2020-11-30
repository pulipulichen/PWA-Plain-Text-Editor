<template>
  <div class="float-action-button zoom"
       v-on:mouseout="delayCloseMenu"
       v-on:mousein="clearDelayCloseMenu">
    <a class="zoom-fab zoom-btn-large tooltip" id="zoomBtn"
       v-on:mouseover="showMenu = true"
       v-on:click="copy">
      <i class="copy icon"></i>
      <span class="tooltiptext" style="left: 10%">Copy</span>
    </a>
    <ul class="zoom-menu"
        v-bind:class="{'show': showMenu}">
      
      <li title="Format" class="tooltip"
          v-on:click="openConfigModal">
        <a class="zoom-fab zoom-btn-sm zoom-btn-doc scale-transition"
           v-bind:class="{'scale-out': !showMenu}">
          <i class="cogs icon"></i>
        </a>
        <span class="tooltiptext" style="left: -100%;">Configuration</span>
      </li>
      
      <li title="Format" class="tooltip"
          v-on:click="formatCode"
          v-if="$parent.isFormatCodeEnabled">
        <a class="zoom-fab zoom-btn-sm zoom-btn-doc scale-transition"
           v-bind:class="{'scale-out': !showMenu}">
          <i class="file code outline icon"></i>
        </a>
        <span class="tooltiptext" style="left: -100%;">Format code</span>
      </li>
      
      <li title="Toggle Replace Panel" class="tooltip"
          v-on:click="toggleReplacePanel">
        <a class="zoom-fab zoom-btn-sm zoom-btn-doc scale-transition"
           v-bind:class="{'scale-out': !showMenu}">
          <i class="edit icon"></i>
        </a>
        <span class="tooltiptext" style="left: -100%;">Toggle Replace Panel</span>
      </li>
      <!--
      <li title="Search" class="tooltip">
        <a class="zoom-fab zoom-btn-sm zoom-btn-doc scale-transition"
           v-bind:class="{'scale-out': !showMenu}">
          <i class="search icon"></i>
        </a>
        <span class="tooltiptext">Search</span>
      </li>
      -->
      <li title="Clear" v-on:click="clear" class="tooltip">
        <a class="zoom-fab zoom-btn-sm zoom-btn-person scale-transition"
           v-bind:class="{'scale-out': !showMenu}">
          <i class="eraser icon"></i>
        </a>
        <span class="tooltiptext">Clear</span>
      </li>
    </ul>

    <!--
    <div class="zoom-card scale-transition scale-out">
      <ul class="zoom-card-content">
        <li>Content 1</li>
        <li>Content 2</li>
        <li>Content 3</li>
        <li>Content 4</li>
        <li>Content 5</li>
      </ul>
    </div>
    -->

  </div>
</template>

<script>
  module.exports = {
    data() {
      return {
        showMenu: false,
        showMenuTimer: null
      }
    },
    watch: {
      showMenu () {
        if (this.showMenu === true) {
          this.clearDelayCloseMenu()
        }
        else {
          clearTimeout(this.showMenuTimer)
          this.showMenuTimer = null
        }
      }
    },
    methods: {
      openConfigModal () {
        this.$parent.$refs.ConfigModal.open()
      },
      delayCloseMenu () {
        clearTimeout(this.showMenuTimer)
        this.showMenuTimer = setTimeout(() => {
          this.showMenu = false
        }, 3 * 1000)
      },
      clearDelayCloseMenu () {
        clearTimeout(this.showMenuTimer)
        this.showMenuTimer = null
      },
      copy() {
        let text = this.$parent.config.textContent
        if (!navigator.clipboard) {
          fallbackCopyTextToClipboard(text);
          return;
        }
        navigator.clipboard.writeText(text).then(function () {
          //console.log('Async: Copying to clipboard was successful!');
        }, function (err) {
          //console.error('Async: Could not copy text: ', err);
        });
        
        this.showMenu = false
      },
      fallbackCopyTextToClipboard(text) {
        var textArea = document.createElement("textarea");
        textArea.value = text;

        // Avoid scrolling to bottom
        textArea.style.top = "0";
        textArea.style.left = "0";
        textArea.style.position = "fixed";

        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();

        try {
          var successful = document.execCommand('copy');
          var msg = successful ? 'successful' : 'unsuccessful';
          console.log('Fallback: Copying text command was ' + msg);
        } catch (err) {
          console.error('Fallback: Oops, unable to copy', err);
        }

        document.body.removeChild(textArea);
      },
      closeMenu() {
        this.showMenu = false
      },
      toggleReplacePanel() {
        this.$parent.config.displayReplacePanel = !this.$parent.config.displayReplacePanel
        //console.log(this.$parent.config.displayReplacePanel)
        this.closeMenu()
      },
      clear() {
        this.$parent.clearTextContentConfirm()
        this.closeMenu()
      },
      formatCode () {
        this.$parent.formatCode()
        this.closeMenu()
      }
    }
  }
</script>
