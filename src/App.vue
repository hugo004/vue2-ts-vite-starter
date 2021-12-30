<template>
  <v-app id="app">
    <v-main>
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    <AtgFormView :form-schema="schema" />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { PDFDocument } from 'pdf-lib'
import HelloWorld from './components/HelloWorld.vue'

@Component({
  components: {
    HelloWorld,
  },
  computed: {
    schema() {
      return {
        title: 'Test Submit with version',
        subtitle: 'psclinic-csx-dev',
        tenant: 'psclinic-csx-dev',
        qrCode: false,
        preview: false,
        groups: [{
          key: 2801884852,
          legend: 'Group Name',
          fields: [{
            inputType: 'input', id: 2045305699, model: 'input_2045305699', label: 'ver', placeholder: '', defaultValue: '', value: '', style: 'default', disabled: false, readonly: false, hidden: false, required: false, render: true, rules: [], ruleCondition: 'or', width: '100%',
          }],
        }],
        mode: 'step',
      }
    },
  },

  async mounted() {
    const url = '/pdf/form.pdf'
    const formPdfBytes = await fetch(url).then((res) => res.arrayBuffer())
    const pdfDoc = await PDFDocument.load(formPdfBytes)
    const form = pdfDoc.getForm()
    console.log(form)
    const name = form.getTextField('Name')
    name.setText('test')
    console.log(name)
    const bytes = await pdfDoc.save()
    const bloburl = URL.createObjectURL(new Blob([bytes], { type: 'application/pdf' }))
    console.log(bloburl)
  },

})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
