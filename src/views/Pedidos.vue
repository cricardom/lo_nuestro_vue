<template>
  <div class="container">
       <center><h1 style="color:red; text-align:center;font-weight: bold;">Tus pedidos</h1></center>
    <b-table small :fields="fields" :items="items" responsive="sm">
      <!-- A virtual column -->
      <template #cell(index)="data">
        {{ data.index + 1 }}
      </template>

      <!-- A custom formatted column -->
      <template #cell(name)="data">
        <b class="text-info">{{ data.value.last.toUpperCase() }}</b>, <b>{{ data.value.first }}</b>
      </template>

      <!-- A virtual composite column -->
      <template #cell(nameage)="data">
        {{ data.item.name.first }} is {{ data.item.age }} years old
      </template>

      <!-- Optional default data cell scoped slot -->
      <template #cell()="data">
        <i>{{ data.value }}</i>
      </template>
    </b-table>
  </div>
</template>

<script>

  export default {
    data() {
      return {
          pedidos:[],

        fields: [
          // A virtual column that doesn't exist in items
          'pedido',
          // A column that needs custom formatting
          { key: 'name', label: 'Nombre del Plato' },
          // A regular column
          'Precio',
          // A regular column
          'cantidad',
          // A virtual column made up from two fields
          { key: 'nameage', label: 'Total' }
        ],
        items: [
          { name: { first: 'John', last: 'Doe' }, sex: 'Male', age: 42 }
        
        ]
      }
    }
  }



</script>
<style>
.elevation-1{
    margin-block-end: 50px;
}

</style>