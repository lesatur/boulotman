<template>
  <v-content>
      <div class="row" >
<v-img  src="../assets/contact-us.jpg" max-height="400px">
    </v-img>
      </div>
    
  <div class="block" >
    
    <v-container >
      
    <v-card flat max-width="60%">
      <v-form class="align-content-center"
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="name"
      :counter="10"
      :rules="nameRules"
      label="Name"
      required
    ></v-text-field>

    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>

    <v-select
      v-model="select"
      :items="items"
      :rules="[v => !!v || 'Item is required']"
      label="Item"
      required
    ></v-select>

    <v-checkbox
      v-model="checkbox"
      :rules="[v => !!v || 'You must agree to continue!']"
      label="Do you agree?"
      required
    ></v-checkbox>

    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="validate"
    >
      Validate
    </v-btn>

    <v-btn
      color="error"
      class="mr-4"
      @click="reset"
    >
      Reset Form
    </v-btn>

    <v-btn
      color="warning"
      @click="resetValidation"
    >
      Reset Validation
    </v-btn>
  </v-form>

    </v-card>

    </v-container>
  </div>
<v-container>
  <v-spacer></v-spacer>
</v-container>
 <div class="block">
   <v-container>
     <v-card max-width="60%">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.641965496517!2d9.741750914332835!3d4.093073497023818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10610e0aeb0e27c7%3A0x81365289755f15c!2sInstitut%20Priv%C3%A9%20Polyvalent%20de%20Bonamoussadi!5e0!3m2!1sfr!2scm!4v1592489199408!5m2!1sfr!2scm" width="100%" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
     </v-card>
   </v-container>
 </div>
  </v-content>
</template>

<script>
  export default {
    data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      select: null,
      items: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4',
      ],
      checkbox: false,
    }),

    methods: {
      validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
    },
  }
</script>
<style scoped>
.block{
  justify-content: flex-end;
  
}
</style>