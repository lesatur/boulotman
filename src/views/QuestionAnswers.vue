<template>
    <v-container fluid>
       
        <Modal/>
         <StepByStep2/>
        
    </v-container>
</template>
<script>
import StepByStep2 from '../views/StepByStep2'
import Modal from '../views/Modal'
export default {
    name: 'QuestionAnswers',
    components:
    {
        StepByStep2,
        Modal,
    }
}
</script>