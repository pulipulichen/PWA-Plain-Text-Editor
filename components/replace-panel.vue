<template>
  <div class="replace-panel ui form">
    <!--
      <i class="close icon close-icon"
         v-on:click="$parent.config.displayReplacePanel = false"></i>
    -->
    
    <div class="inline field">
      <label for="stringToSearch">Search</label>
      
      <div class="ui icon input string-to-search-input">
        <input type="text" 
               placeholder="Search..."
               id="stringToSearch"
               v-model="$parent.config.stringToSearch"
               class="" />
        <i class="link paragraph icon"
             titl="New line"
             v-on:click="$parent.config.stringToSearch = $parent.config.stringToSearch + '\\n'"></i>
          <i class="link close icon"
             titl="Clear"
             v-if="$parent.config.stringToSearch"
             v-on:click="$parent.config.stringToSearch = ''"></i>
      </div>
    </div>
    
    <!-- =========================================== -->
    
    <div class="inline field">
      <label for="stringToReplaceWith">Replace with</label>
      <div class="ui action icon input string-to-replace-with-input-container">
        <div class="ui icon input string-to-replace-with-input">
          <input type="text" 
                 placeholder="Replace with..."
                 id="stringToReplaceWith"
                 v-model="$parent.config.stringToReplaceWith" />
          <i class="link paragraph icon"
             titl="New line"
             v-on:click="$parent.config.stringToReplaceWith = $parent.config.stringToReplaceWith + '\\n'"></i>
          <i class="link close icon"
             titl="Clear"
             v-if="$parent.config.stringToReplaceWith"
             v-on:click="$parent.config.stringToReplaceWith = ''"></i>
        </div>
          
        <select class="ui compact selection dropdown"
                v-model="$parent.config.replaceMode">
          <option selected="" value="regex">Regex</option>
          <option value="raw">Raw</option>
          <option value="line">Line</option>
        </select>
        <div class="ui button"
             v-on:click="$parent.doReplace"
             v-bind:class="{disabled: $parent.isReplaceDisabled, positive: !$parent.isReplaceDisabled}">
          {{ $parent.textReplaceButton }}
        </div>
        
        <div class="ui mini button"
             v-on:click="$parent.undo"
             v-if="!$parent.isUndoDisabled">
          <i class="undo icon"></i>
        </div>
        <!--
        <div class="ui mini button"
             v-on:click="$parent.redo"
             v-if="!$parent.isRedoDisabled">
          <i class="redo icon"></i>
        </div>
        -->
      </div>
      
    </div>
    
    <!-- =========================================== -->
    
    <div class="inline field">
      <label for="stringToReplaceWith">Replace with</label>
      <div class="ui action icon input string-to-replace-with-input-container">
        <div class="ui icon input string-to-replace-with-input">
          <input type="text" 
                 placeholder="Replace with..."
                 id="stringToReplaceWith"
                 v-model="$parent.config.stringToReplaceWith" />
          <i class="link paragraph icon"
             titl="New line"
             v-on:click="$parent.config.stringToReplaceWith = $parent.config.stringToReplaceWith + '\\n'"></i>
          <i class="link close icon"
             titl="Clear"
             v-if="$parent.config.stringToReplaceWith"
             v-on:click="$parent.config.stringToReplaceWith = ''"></i>
        </div>
          
        <select class="ui compact selection dropdown"
                v-model="$parent.config.replaceMode">
          <option selected="" value="regex">Regex</option>
          <option value="raw">Raw</option>
          <option value="line">Line</option>
        </select>
        <div class="ui button"
             v-on:click="$parent.doReplace"
             v-bind:class="{disabled: $parent.isReplaceDisabled, positive: !$parent.isReplaceDisabled}">
          {{ $parent.textReplaceButton }}
        </div>
        
        <div class="ui mini button"
             v-on:click="$parent.undo"
             v-if="!$parent.isUndoDisabled">
          <i class="undo icon"></i>
        </div>
        <!--
        <div class="ui mini button"
             v-on:click="$parent.redo"
             v-if="!$parent.isRedoDisabled">
          <i class="redo icon"></i>
        </div>
        -->
      </div>
      
    </div>
  </div>
</template>

<script>module.exports = {}</script>
