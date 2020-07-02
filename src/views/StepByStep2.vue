<template>
  <div class="container">

    <article>
            <header>
              <div class="progress">
                <div class="progress-step"
                :class="{'active':index === activeStep}"
                v-for="(step, index) in formSteps"
                :key="'step'+index">
                  {{ index + 1 }}
                </div>
              </div>
            </header>
            <section :class="animation">
      
        <v-card class="flex fill-height">
          <v-card-title> <h2>{{ formSteps[activeStep].title }}</h2></v-card-title>
          <v-spacer></v-spacer>
           <span id="error"></span>
          <v-card-text  
            v-for="(field, index) in formSteps[activeStep].fields"
                :key="'field'+index" >
               
                <input type="radio"  :value="field.label" :id="field.label" v-model="selectedItem" :rules="rules">
                <label :for="field.label" class="ma-4 pa-4" >{{ field.label }}</label>
            </v-card-text>
                <v-spacer></v-spacer>
          <v-card-actions class=" ma-4 pa-6">
            <v-btn v-if="activeStep +1 < formSteps.length" @click="checkFields3">next</v-btn>
                <v-btn v-if="activeStep -1 <formSteps.length  " @click="checkFields2">previous</v-btn>
                <v-btn v-if="activeStep +1 === formSteps.length +1" @click="checkFields">done</v-btn>
          </v-card-actions>
        </v-card>

        </section>
    </article>
  </div>
</template>

<script>

  export default {
    components:{
     
    },
    computed: {
    rules() {
      return [
        this.selectedItem.length > 0 || "At least one item should be selected"
      ];
    }
    },
    data: () => {
      return {
        forms:{
          infos: ''
        },
         selectedItem: '',
        activeStep: 0,
        animation: 'animate-in',
        formSteps: [
          {
            title: "what do you want to develop",
            fields: [
              { label: "buisness web app"  },
              { label: "personnal web app" },
           
            ]
          },
          {
            title: "What is your budget",
            fields: [
              { label: "30.000", },
              { label: "more than 30.000",},
              
            ]
          },
          {
            title: "do you have a domaine name ?",
            fields: [
              { label: "no",  },
              { label: "yes", },
             
            ]
          },
            {
            title: "where do you live  ?",
            fields: [
              { label: "dla",   },
              { label: "yde" },
             
            ]
          },
          {
            title: "Thank you for participating! please fill the form that follow to provide your personnal information ",
          }
        ],
      }
    },
    methods: {
      nextStep() {
        this.animation = 'animate-out';
        setTimeout(() => {
          this.animation = 'animate-in';
          this.activeStep += 1;
        }, 550);
      },
            previousStep() {
        this.animation = 'animate-out';
        setTimeout(() => {
          this.animation = 'animate-out';
          this.activeStep -= 1;
        }, 550);
      },
   
      checkFields() {
          this.nextStep();
        },
        checkFields2()
        {
          this.previousStep();
        },

        checkFields3(){
        let valid = true;
         let error = document.getElementById("error")
        this.formSteps[this.activeStep].fields.forEach(formSteps => {
          if(!this.selectedItem) {
            
             
            valid = false;
            formSteps.valid = false;
          }
          else {
            formSteps.valid = true;
           
          }
        });
        if(valid) {
          this.nextStep();
          this.selectedItem = ''
            error.textContent = "";
          
        }
        else {
          this.animation = 'animate-wrong';
            error.textContent = "At least one item should be selected"; 
            error.style.color = "red"
          setTimeout(() => {
            this.animation = '';
          }, 400);
          
        }
       
        
        }
    }
          
          
    }
</script>

<style lang="scss" scoped>
   @import url('https://fonts.googleapis.com/css?family=Noto+Sans&display=swap');
  @mixin flexbox() {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .container {
    @include flexbox();
    width: 100%;
    min-height: 100vh;
    font-family: 'Noto Sans', sans-serif;
    background: radial-gradient(#DF5C2E, #A43227);
  }
  article {
    display: flex;
    margin: 10px;
    width: calc(100% - 20px);
    max-width: 720px;
    min-height: 480px;
    perspective: 1000px;
    header {
      @include flexbox();
      width: 60px;
      height: 480px;
      background-color: #fff;
      border-right: 2px dotted #DF5C2E;
      box-shadow: 0 15px 30px rgba(0,0,0,.2),
                  0 10px 10px rgba(0,0,0,.2);
    }
    .progress-step {
      @include flexbox();
      position: relative;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      margin-bottom: 20px;
      color: #fff;
      background-color: #DF5C2E;
      font-weight: bold;
      &.active {
        background-color: blue;
        ~ .progress-step {
          color: #555;
          background-color: #ccc;
        }
        ~ .progress-step::before {
          background-color: #ccc;
        }
      }
      &:before {
        content: '';
        position: absolute;
        top: -20px;
        width: 2px;
        height: 20px;
        background-color: #DF5C2E;
        z-index: 10;
      }
      &:first-child::before {
        display: none;
      }
    }
    section {
      @include flexbox();
      flex-direction: column;
      width: 100%;
      background-color: #fff;
      box-shadow: 0 15px 30px rgba(0,0,0,.2),
                  0 10px 10px rgba(0,0,0,.2);
      h2 {
        font-size: 1.6rem;
        color: #DF5C2E;
        margin: 0;
        padding: 20px;
      }
      .input-fields {
        @include flexbox();
        flex-direction: column;
        width: 100%;
      }
      .input-container {
        position: relative;
        padding: 30px 20px 20px 20px;
        width: calc(100% - 40px);
        max-width: 400px;
        input {
          position: relative;
          width: 100%;
          font-family: 'Noto Sans', sans-serif;
          font-size: 1.35rem;
          outline: none;
          background: transparent;
          box-shadow: none;
          border: none;
          border-bottom: 2px dashed #DF5C2E;
          &:valid + .input-label {
            top: 10px;
            left: 20px;
            font-size: .7rem;
            font-weight: normal;
            color: #999;
          }
          &.wrong-input + .input-label {
            color: #B92938;
          }
        }
      }
      .input-label {
        position: absolute;
        top: 32px;
        left: 20px;
        font-size: 1.35rem;
        pointer-events: none;
        transition: .2s ease-in-out;
      }
      .actions {
        margin: 0;
        button {
          font-family: 'Noto Sans', sans-serif;
          outline: none;
          border: none;
          color: #fff;
          background-color: #DF5C2E;
          font-size: 1.35rem;
          padding: 5px 20px;
          margin: 0;
          text-transform: uppercase;
          border-radius: 3px;
          cursor: pointer;
        }
      }
    }
  }
  .animate-in {
    transform-origin: left;
    animation: in .6s ease-in-out;
  }
  .animate-out {
    transform-origin: bottom left;
    animation: out .6s ease-in-out;
  }
  .animate-wrong {
    animation: wrong .4s ease-in-out;
  }
  @keyframes in {
    0% {
      opacity: 0;
      transform: rotateY(90deg);
    }
    100% {
      opacity: 1;
      transform: rotateY(0deg);
    }
  }
  @keyframes out {
    0% { transform: translateY(0px) rotate(0deg); }
    60% { transform: rotate(10deg); }
    100% { transform: translateY(1000px); }
  }
  @keyframes wrong {
    0% { transform: translateX(0); }
    20% { transform: translateX(40px); }
    40% { transform: translateX(20px); }
    60% { transform: translateX(40px); }
    80% { transform: translateX(20px); }
    100% { transform: translateX(0); }
  }
</style>